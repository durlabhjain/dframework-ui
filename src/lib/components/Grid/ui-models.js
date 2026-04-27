import GridBase from './index';
import React from 'react';
import * as yup from 'yup';
import { Divider } from '@mui/material';
import Form from '../Form/Form';

const regexConfig = {
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
	nonAlphaNumeric: /[^a-zA-Z0-9]/g,
	compareValidatorRegex: /^compare:(.+)$/,
	email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
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
		const validationConfig = {};
		for (const column of columns) {
			const { field, label, header, type = 'string', requiredIfNew = false, required = false, min = '', max = '', validate } = column;
			const formLabel = label || header || field;
			if (!formLabel) {
				continue;
			}
			if (label === null || label === '') continue; // Skip fields that should not be validated in form mode
			let config;
			switch (type) {
				case 'string':
					config = yup.string().nullable().trim().label(formLabel);
					if (min && !isNaN(Number(min))) {
						config = config.min(Number(min), tTranslate(`${formLabel} must be at least ${min} characters long`, tOpts));
					}
					if (max && !isNaN(Number(max))) {
						config = config.max(Number(max), tTranslate(`${formLabel} must be at most ${max} characters long`, tOpts));
					}
					if (required) {
						config = config.trim().required(tTranslate(`${formLabel} is required`, tOpts));
					}
					break;
				case 'boolean':
					config = yup.bool().nullable().transform((value, originalValue) => {
						if (originalValue === '') return null;
						return value;
					}).label(formLabel);
					break;

				case 'radio':
				case 'dayRadio':
					config = yup.mixed().label(formLabel);
					if (required) {
						config = config.required(tTranslate(`Select at least one option for ${formLabel}`, tOpts));
					}
					break;
				case 'date':
					config = yup.date().nullable().transform((value, originalValue) => {
						if (originalValue === '' || originalValue === null) return null;
						return value;
					}).label(formLabel);
					if (required) {
						config = config.required(tTranslate(`${formLabel} is required`, tOpts));
					}
					break;
				case 'dateTime':
					config = yup
						.date()
						.nullable() // Allow null values
						.transform((value, originalValue) => {
							// Transform empty strings or null values into null
							if (originalValue === '' || originalValue === null) return null;
							return value;
						})
						.label(formLabel); // Set a label for better error messages
					if (required) {
						config = config.required(tTranslate(`${formLabel} is required`, tOpts));
					}
					break;
				case 'select':
				case 'autocomplete':
					if (required) {
						config = yup.string().trim().label(formLabel).required(tTranslate(`Select at least one ${formLabel}`, tOpts));
					} else {
						config = yup.string().nullable();
					}
					break;
				case 'password':
					config = yup.string()
						.label(formLabel)
						.test("ignore-asterisks", tTranslate(`${formLabel} must be a valid password.`, tOpts), (value) => {
							// Skip further validations if value is exactly "******"
							if (value === "******") return true;
							const minlength = Number(min) || 8;
							const maxlength = Number(max) || 50;
							const regex = column.regex || regexConfig.password;
							// Check minimum length, maximum length, and pattern if not "******"
							return yup.string()
								.min(minlength, tTranslate(`${formLabel} must be at least ${minlength} characters`, tOpts))
								.max(maxlength, tTranslate(`${formLabel} must be at most ${maxlength} characters`, tOpts))
								.matches(
									regex,
									tTranslate(`${formLabel} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, tOpts)
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
							tTranslate('Email must be a valid email', tOpts)
						);
					break;
				case 'number':
					if (required) {
						config = yup.number().label(formLabel).required(tTranslate(`${formLabel} is required.`, tOpts));
					} else {
						config = yup.number().nullable();
					}
					if (min !== undefined && min !== '' && !isNaN(Number(min))) {
						config = config.min(Number(min), tTranslate(`${formLabel} must be greater than or equal to ${min}`, tOpts));
					}
					if (max !== undefined && max !== '' && !isNaN(Number(max))) {
						config = config.max(Number(max), tTranslate(`${formLabel} must be less than or equal to ${max}`, tOpts));
					}
					break;
				case 'fileUpload':
					config = yup.string().trim().label(formLabel);
					break;
				default:
					config = yup.mixed().nullable().label(formLabel);
					break;
			}
			if (required && type !== "string") {
				config = config.required(tTranslate(`${formLabel} is required`, tOpts));
			}
			if (requiredIfNew && (!id || id === '')) {
				config = config.trim().required(tTranslate(`${formLabel} is required`, tOpts));
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
						tTranslate(`${formLabel} must match ${compareField.label}`, tOpts)
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


