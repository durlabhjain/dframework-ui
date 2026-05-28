import GridBase from './index';
import React from 'react';
import * as yup from 'yup';
import { Divider } from '@mui/material';
import Form from '../Form/Form';
import utils from '../utils';

const regexConfig = {
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
	nonAlphaNumeric: /[^a-zA-Z0-9]/g,
	compareValidatorRegex: /^compare:(.+)$/,
	email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
};

const validationMessageTemplates = {
	required: '${label}: required',
	requiredSelectOption: '${label}: select at least one option',
	requiredSelect: '${label}: select at least one',
	minChars: '${label}: minimum ${min} characters',
	maxChars: '${label}: maximum ${max} characters',
	passwordInvalid: '${label}: invalid password',
	passwordPolicy: '${label}: must contain lowercase, uppercase, digit, and special character',
	emailInvalid: '${label}: invalid email format',
	requiredNumber: '${label}: required',
	minNumber: '${label}: minimum value is ${min}',
	maxNumber: '${label}: maximum value is ${max}',
	mustMatch: '${label}: must match ${compareLabel}'
};

const defaultValidationTranslationKeyPrefix = 'validation';

/**
 * Resolves a validation message for a rule.
 *
 * Builds the key `<defaultValidationTranslationKeyPrefix>.<rule>` and looks it
 * up via the provided i18next `t` function with the built-in English template as
 * the `defaultValue`. The resolved string is then processed through `replaceTags`
 * to substitute any `${token}` placeholders from `params`.
 *
 * @param {string} rule Validation rule key (must exist in validationMessageTemplates).
 * @param {Object} params Token map used to format the message (e.g. { label, min, max }).
 * @param {Function} [t] Optional i18next t() function for i18n lookup.
 * @returns {string}
 */
const resolveValidationMessage = (rule, params, t) => {
	const template = validationMessageTemplates[rule];
	const key = `${defaultValidationTranslationKeyPrefix}.${rule}`.toLowerCase();
	const translated = typeof t === 'function'
		? t(key, { defaultValue: template })
		: template;
	return utils.replaceTags(translated, params);
};

const emptyToNullTransform = (value, originalValue) => {
	if (originalValue === '' || originalValue === null) return null;
	return value;
};

const isValidNumericValue = (value) => value !== undefined && value !== '' && !isNaN(Number(value));

const applyRequired = (config, label, shouldTrim = false, t) => {
	if (shouldTrim && typeof config.trim === 'function') {
		return config.trim().required(resolveValidationMessage('required', { label }, t));
	}
	return config.required(resolveValidationMessage('required', { label }, t));
};

const customStyle = {};
const showRowsSelected = true;
const defaultValueConfigs = {
	"string": "",
	"boolean": false,
	"radio": false,
	"oneToMany": ""
};

class UiModel {

	static defaultPermissions = {
		add: true,
		edit: true,
		delete: true
	};

	constructor(modelConfig) {
		const { title = "" } = modelConfig;
		let { api, idProperty = api + 'Id' } = modelConfig;
		const module = "module" in modelConfig ? modelConfig.module : title.replace(/[^\w\s]/gi, "");
		if (!api) {
			api = `${title.replaceAll(regexConfig.nonAlphaNumeric, '-').toLowerCase()}`;
			idProperty = title.replaceAll(' ', '') + 'Id';
		}
		const defaultValues = { ...modelConfig.defaultValues };
		const name = module || title;
		Object.assign(this, {
			standard: true,
			name,
			permissions: { ...UiModel.defaultPermissions },
			idProperty,
			linkColumn: `${name}Name`,
			overrideFileName: title,
			preferenceId: name,
			tableName: name,
			module,
			...modelConfig,
			api
		});
		this._applyColumnDefaults();
		this.columnVisibilityModel = this._getColumnVisibilityModel();
		this.defaultValues = this._getDefaultValues(defaultValues);
	}

	_applyColumnDefaults() {
		for (const col of this.columns) {
			if (!col.type) {
				col.type = 'string';
			}
		}
	}

	_getColumnVisibilityModel() {
		const columnVisibilityModel = {};
		for (const col of this.columns) {
			if (col.hide === true) {
				columnVisibilityModel[col.id || col.field] = false;
			}
		}
		return columnVisibilityModel;
	}

	_getDefaultValues(defaultValues) {
		for (const col of this.columns) {
			const name = col.field || col.id;
			defaultValues[name] = col.defaultValue === undefined ? (defaultValueConfigs[col.type] || "") : col.defaultValue;
		}
		return defaultValues;
	}

	getValidationSchema({ id, tTranslate = (key) => key, tOpts = {} } = {}) {
		const { columns } = this;
		const t = tOpts?.t;
		const validationConfig = {};
		for (const column of columns) {
			const { field, label, header, type = 'string', requiredIfNew = false, required = false, min = '', max = '', validate } = column;
			const formLabel = tTranslate(label || header || field, tOpts);
			if (!formLabel) {
				continue;
			}
			if (label === null || label === '') continue; // Skip fields that should not be validated in form mode
			let config;
			switch (type) {
				case 'string':
					config = yup.string().nullable().trim().label(formLabel);
					if (isValidNumericValue(min)) {
						config = config.min(Number(min), resolveValidationMessage('minChars', { label: formLabel, min }, t));
					}
					if (isValidNumericValue(max)) {
						config = config.max(Number(max), resolveValidationMessage('maxChars', { label: formLabel, max }, t));
					}
					break;
				case 'boolean':
					config = yup.bool().nullable().transform(emptyToNullTransform).label(formLabel);
					break;
				case 'radio':
				case 'dayRadio':
					config = yup.mixed().label(formLabel).nullable();
					break;
				case 'date':
					config = yup.date().nullable().transform(emptyToNullTransform).label(formLabel);
					break;
				case 'dateTime':
					config = yup
						.date()
						.nullable()
						.transform(emptyToNullTransform)
						.label(formLabel);
					break;
				case 'select':
				case 'autocomplete':
					config = yup.string().transform((value, originalValue) => {
						if (originalValue === 0 || originalValue === '0') return '';
						return value;
					}).trim().label(formLabel);					
					if (!required) {
						config = config.nullable();
					}
					break;
				case 'password':
					config = yup.string()
						.label(formLabel)
						.test("ignore-asterisks", resolveValidationMessage('passwordInvalid', { label: formLabel }, t), (value) => {
							// Skip further validations if value is exactly "******"
							if (value === "******") return true;
							const minlength = Number(min) || 8;
							const maxlength = Number(max) || 50;
							const regex = column.regex || regexConfig.password;
							// Check minimum length, maximum length, and pattern if not "******"
							return yup.string()
								.min(minlength, resolveValidationMessage('minChars', { label: formLabel, min: minlength }, t))
								.max(maxlength, resolveValidationMessage('maxChars', { label: formLabel, max: maxlength }, t))
								.matches(
									regex,
									resolveValidationMessage('passwordPolicy', { label: formLabel }, t)
								)
								.isValidSync(value);
						});
					break;
				case 'email':
					config = yup
						.string()
						.trim()
						.matches(
							(column.regex || regexConfig.email),
							resolveValidationMessage('emailInvalid', { label: formLabel }, t)
						);
					break;
				case 'number':
					config = yup.number().nullable().transform(emptyToNullTransform).label(formLabel);
					if (isValidNumericValue(min)) {
						config = config.min(Number(min), resolveValidationMessage('minNumber', { label: formLabel, min }, t));
					}
					if (isValidNumericValue(max)) {
						config = config.max(Number(max), resolveValidationMessage('maxNumber', { label: formLabel, max }, t));
					}
					break;
				case 'fileUpload':
					config = yup.string().trim().label(formLabel);
					break;
				default:
					config = yup.mixed().nullable().label(formLabel);
					break;
			}

			// Apply required/requiredIfNew logic in one place
			if (required) {
				if (type === 'string') {
					config = applyRequired(config, formLabel, true, t);
				} else if (type === 'radio' || type === 'dayRadio') {
					config = config.required(resolveValidationMessage('requiredSelectOption', { label: formLabel }, t));
				} else if (type === 'date' || type === 'dateTime') {
					config = config.required(resolveValidationMessage('required', { label: formLabel }, t));
				} else if (type === 'select' || type === 'autocomplete') {
					config = config.required(resolveValidationMessage('requiredSelect', { label: formLabel }, t));
				} else if (type === 'number') {
					config = config.required(resolveValidationMessage('requiredNumber', { label: formLabel }, t));
				} else {
					config = applyRequired(config, formLabel, false, t);
				}
			}
			if (requiredIfNew && (!id || id === '')) {
				config = applyRequired(config, formLabel, type === 'string', t);
			}
			if (validate) {
				const compareValidator = regexConfig.compareValidatorRegex.exec(validate);
				if (compareValidator) {
					const compareFieldName = compareValidator[1];
					const compareField = columns.find(
						(f) => (f.formField === compareFieldName || f.field) === compareFieldName
					);
					config = config.oneOf(
						[yup.ref(compareFieldName)],
						resolveValidationMessage('mustMatch', { label: formLabel, compareLabel: compareField?.label || compareFieldName }, t)
					);
				}
			}

			validationConfig[field] = config;
		}

		return yup.object({ ...validationConfig, ...this.validationSchema });
	}

	Form = ({ match, ...props }) => {
		return <Form model={this} Layout={this.Layout} {...props} />;
	};

	Grid = ({ match, ...props }) => {
		return <GridBase model={this} showRowsSelected={showRowsSelected} {...props} />;
	};
	ChildGrid = (props) => {
		return <>
			<GridBase model={this} {...props} customStyle={customStyle} showRowsSelected={showRowsSelected} />
			<Divider orientation='horizontal' sx={{ mt: 2 }} />
		</>;
	};
}

export {
	UiModel
};


