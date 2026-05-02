import * as React$1 from "react";
import React, { createContext, createElement, memo, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as locales$1 from "@mui/x-data-grid-premium";
import { ColumnsPanelTrigger, DataGridPremium, FilterPanelTrigger, GRID_CHECKBOX_SELECTION_COL_DEF, GridActionsCellItem, GridFooter, GridFooterContainer, GridToolbarExportContainer, Toolbar, getGridDateOperators, gridRowSelectionStateSelector, useGridApiContext, useGridApiRef, useGridSelector } from "@mui/x-data-grid-premium";
import DeleteIcon from "@mui/icons-material/Delete";
import CopyIcon from "@mui/icons-material/FileCopy";
import ArticleIcon from "@mui/icons-material/Article";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTranslation, withTranslation } from "react-i18next";
import { Avatar, Badge, Box as Box$1, Breadcrumbs, Button as Button$1, Card, CardContent, Checkbox, CircularProgress, Dialog as Dialog$1, DialogContent as DialogContent$1, DialogTitle as DialogTitle$1, Divider, FilledInput, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Stack, TextField as TextField$1, Tooltip, Typography as Typography$1, styled, useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import HelpIcon from "@mui/icons-material/Help";
import { Close, Code, DataObject, GridOn, Language, Replay, TableChart } from "@mui/icons-material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import utcPlugin from "dayjs/plugin/utc.js";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import { styled as styled$1 } from "@mui/material/styles";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker as DatePicker$1, DateTimePicker as DateTimePicker$1 } from "@mui/x-date-pickers";
import MenuItem$1 from "@mui/material/MenuItem";
import HistoryIcon from "@mui/icons-material/History";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Checkbox$1 from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Stack$1 from "@mui/material/Stack";
import CircularProgress$1 from "@mui/material/CircularProgress";
import FormControlLabel$1 from "@mui/material/FormControlLabel";
import { NumberField } from "@base-ui/react/number-field";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ClearIcon from "@mui/icons-material/Clear";
import FormControl$1 from "@mui/material/FormControl";
import InputLabel$1 from "@mui/material/InputLabel";
import Select$1 from "@mui/material/Select";
import Grid$1 from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { grey } from "@mui/material/colors";
import styled$2 from "@emotion/styled";
import Chip from "@mui/material/Chip";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Input$1 from "@mui/material/Input";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
//#region src/lib/components/SnackBar/index.js
var SnackbarContext = createContext(null);
var vertical = "bottom";
var horizontal = "center";
var Alert = React.forwardRef(function Alert(props, ref) {
	return /* @__PURE__ */ jsx(MuiAlert, {
		elevation: 6,
		ref,
		variant: "filled",
		...props
	});
});
var SnackbarProvider = ({ children }) => {
	const [message, setMessage] = useState(null);
	const [open, setOpen] = useState(false);
	const [severity, setSeverity] = useState(null);
	const [handleAction, setHandleAction] = useState(null);
	const showMessage = function(title, message, severity = "info", onAction) {
		if (typeof title !== "string") title = title.toString();
		if (message && typeof message !== "string") message = message.toString();
		setMessage(message ? `${title}: ${message}` : title);
		setSeverity(severity);
		setOpen(true);
		setHandleAction(onAction);
	};
	const showError = function(title, message, severity = "error", onAction) {
		showMessage(title, message, severity, onAction);
	};
	const handleClose = function() {
		setOpen(false);
		setHandleAction(null);
		if (handleAction) handleAction();
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SnackbarContext.Provider, {
		value: {
			showMessage,
			showError
		},
		children
	}), /* @__PURE__ */ jsx(Snackbar, {
		open,
		autoHideDuration: 6e3,
		onClose: handleClose,
		anchorOrigin: {
			vertical,
			horizontal
		},
		children: /* @__PURE__ */ jsx(Alert, {
			severity,
			children: message
		})
	})] });
};
var useSnackbar = function() {
	return useContext(SnackbarContext);
};
//#endregion
//#region src/lib/components/Dialog/index.js
/**
* DialogComponent is a reusable dialog/modal component based on Material-UI's Dialog.
*
* @param {Object} props - The props for the DialogComponent.
* @param {boolean} props.open - Controls whether the dialog is open.
* @param {function} props.onConfirm - Callback fired when the confirm/ok button is clicked.
* @param {string} [props.title="Confirm"] - The title of the dialog.
* @param {function} props.onCancel - Callback fired when the cancel button or dialog close is triggered.
* @param {string} [props.okText] - Custom text for the confirm/ok button.
* @param {string} [props.cancelText] - Custom text for the cancel button.
* @param {boolean} [props.yesNo=false] - If true, uses "Yes"/"No" for button texts instead of "Ok"/"Cancel".
* @param {React.ReactNode} props.children - The content of the dialog.
* @param {string} [props.maxWidth='sm'] - The maxWidth of the dialog (xs, sm, md, lg, xl).
* @param {boolean} [props.fullWidth=true] - If true, the dialog stretches to the full width of its container.
* @param {Object} [props.props] - Additional props passed to the MUI Dialog component.
* @returns {JSX.Element} The rendered Dialog component.
*/
var DialogComponent = ({ open, onConfirm, title = "Confirm", onCancel, okText, cancelText, yesNo = false, children, maxWidth = "sm", fullWidth = true, ...props }) => {
	okText = okText || (yesNo ? "Yes" : "Ok");
	cancelText = cancelText || (yesNo ? "No" : "Cancel");
	return /* @__PURE__ */ jsxs(Dialog, {
		...props,
		open,
		onClose: onCancel,
		"aria-labelledby": "alert-dialog-title",
		"aria-describedby": "alert-dialog-description",
		maxWidth,
		fullWidth,
		children: [
			/* @__PURE__ */ jsx(DialogTitle, {
				id: "alert-dialog-title",
				sx: { fontSize: children ? "inherit" : "1.25rem" },
				children: title
			}),
			children && /* @__PURE__ */ jsx(DialogContent, {
				dividers: true,
				children: /* @__PURE__ */ jsx(DialogContentText, { children })
			}),
			(onCancel || onConfirm) && /* @__PURE__ */ jsxs(DialogActions, { children: [onCancel && /* @__PURE__ */ jsx(Button, {
				onClick: onCancel,
				children: cancelText
			}), onConfirm && /* @__PURE__ */ jsx(Button, {
				onClick: onConfirm,
				autoFocus: true,
				children: okText
			})] })
		]
	});
};
//#endregion
//#region src/lib/components/Grid/httpRequest.js
var HTTP_STATUS_CODES = {
	OK: 200,
	SESSION_EXPIRED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500
};
var getFormData = (props) => {
	const formData = new FormData();
	for (const key in props) if (typeof props[key] === "object") formData.append(key, JSON.stringify(props[key]));
	else formData.append(key, props[key]);
	return formData;
};
var exportRequest = (url, query) => {
	const newURL = new URL(url);
	for (const key in query) {
		const value = typeof query[key] === "object" ? JSON.stringify(query[key]) : query[key];
		newURL.searchParams.append(key, value);
	}
	window.open(newURL, "_blank").focus();
};
var transport = async (config) => {
	const { method = "GET", url, data, headers = {}, credentials = "include", ...rest } = config;
	const fetchOptions = {
		method,
		credentials,
		headers: { ...headers },
		...rest
	};
	if (data) if (headers["Content-Type"] === "multipart/form-data") {
		delete fetchOptions.headers["Content-Type"];
		fetchOptions.body = data instanceof FormData ? data : getFormData(data);
	} else {
		fetchOptions.headers["Content-Type"] = headers["Content-Type"] || "application/json";
		fetchOptions.body = typeof data === "string" ? data : JSON.stringify(data);
	}
	const response = await fetch(url, fetchOptions);
	const contentType = response.headers.get("content-type") || {};
	return {
		status: response.status,
		data: contentType.includes("application/json") ? await response.json() : await response.text(),
		headers: Object.fromEntries(response.headers.entries())
	};
};
/**
* Extract error message from response
* Utility to normalize error messages across different response formats
*/
var getErrorMessage = (response) => response?.message || response?.info || response?.error || response?.err;
/**
* Default data parsers for different response types
* Use these to normalize API responses to a consistent type
*/
var DATA_PARSERS = Object.freeze({
	/**
	* Parse JSON string or return object as-is
	* Automatically handles string JSON responses
	*/
	json: (data) => {
		if (typeof data === "string") return JSON.parse(data);
		return data;
	},
	/**
	* Convert to string
	*/
	text: (data) => String(data),
	/**
	* Return data as-is without parsing
	*/
	raw: (data) => data
});
/**
* Enhanced HTTP request handler with automatic data parsing
* 
* Note: Loader management is the responsibility of the calling component.
* This allows components to control when and how to show loading states.
* 
* @param {Object} config - Request configuration
* @param {string} config.url - API endpoint URL
* @param {Object} config.params - Request parameters
* @param {Function} config.history - Navigation function for redirects
* @param {boolean} config.jsonPayload - Whether to send JSON payload instead of FormData
* @param {string} [config.method='POST'] - HTTP method (e.g. 'GET', 'POST', 'PUT', 'DELETE')
* @param {AbortSignal} [config.signal] - AbortSignal for cancellable requests
* @param {Object} config.additionalParams - Additional fetch parameters (rarely needed; prefer named params above)
* @param {Object} config.additionalHeaders - Additional request headers
* @param {Function} config.dataParser - Parser function to normalize response data (default: DATA_PARSERS.raw)
* @param {Function} config.onParseError - Custom error handler for parse failures
*
* @returns {Promise<any>} Parsed response data, `{ error: true, message }` on failure,
*   or `{ error: true, aborted: true, message }` when the request is cancelled via an `AbortSignal`.
* 
* @example
* // Basic usage
* const data = await request({ 
*   url: '/api/data', 
*   params: { id: 1 }
* });
* 
* @example
* // With custom error handling
* const data = await request({ 
*   url: '/api/data',
*   params: { id: 1 },
*   onParseError: (error, rawData) => {
*     console.error('Parse failed:', error);
*     return { error: true, message: 'Custom error message' };
*   }
* });
*/
var request = async ({ url, params = {}, history, jsonPayload = false, method = "POST", signal, additionalParams = {}, additionalHeaders = {}, dataParser = DATA_PARSERS.raw, onParseError }) => {
	if (params.exportData) return exportRequest(url, params);
	const reqParams = {
		method,
		credentials: "include",
		url,
		headers: jsonPayload ? { ...additionalHeaders } : {
			"Content-Type": "multipart/form-data",
			...additionalHeaders
		},
		...signal && { signal },
		...additionalParams
	};
	if (params && Object.keys(params).length > 0) reqParams.data = jsonPayload ? params : getFormData(params);
	try {
		const response = await transport(reqParams);
		let data = response.data;
		if (response.status === HTTP_STATUS_CODES.SESSION_EXPIRED && history) {
			history("/login");
			return;
		}
		if (response.status === HTTP_STATUS_CODES.FORBIDDEN) return {
			error: true,
			message: data.message || "Access Denied!"
		};
		if (response.status !== HTTP_STATUS_CODES.OK) return {
			error: true,
			message: data.message || "An error occurred"
		};
		try {
			data = dataParser(data);
		} catch (parseError) {
			if (onParseError) return onParseError(parseError, data);
			return {
				error: true,
				message: "Failed to parse response data",
				parseError: parseError.message,
				rawData: data
			};
		}
		return data;
	} catch (ex) {
		if (ex.name === "AbortError") return {
			error: true,
			aborted: true,
			message: ex.message || "Request aborted"
		};
		return {
			error: true,
			message: ex.message || "Network error"
		};
	}
};
//#endregion
//#region src/lib/components/Grid/crud-helper.js
var dateDataTypes = ["date", "dateTime"];
var lookupDataTypes = ["singleSelect"];
var exportDefaultLimit = 1e6;
function shouldApplyFilter(filter) {
	const { operator, value, type } = filter;
	return ["isEmpty", "isNotEmpty"].includes(operator) || value !== void 0 && value !== null && (value !== "" || type === "number" && value === 0 || type === "boolean" && value === false);
}
/**
* Parses a date string into a JavaScript Date object based on specific format lengths.
* * @param {string} value - The date string to parse.
* Supported formats:
* - 17 chars: "YYYYMMDDHHmmssSSS" (e.g., "20260413104406000")
* - 24 chars: "YYYY-MM-DDTHH:mm:ss.SSSZ" (e.g., "2026-04-13T10:44:06.000Z")
* @param {boolean} [utc=false] - If true, treats the input as UTC and returns a localized Date.
* If false, treats input as local time (for 17-char) or 
* strips the 'Z' (for 24-char) to treat as local.
* @returns {Date|string|null} - Returns a Date object, the original value if not a string, or null if empty.
* @throws {Error} - Throws error if the string length is not 17 or 24.
* * @example
* // Length 17: Treat as UTC and convert to local
* // Input: "20260413104406000"
* dateParser("20260413104406000", true); 
* * @example
* // Length 24: ISO format
* // Input: "2026-04-13T10:44:06.000Z"
* dateParser("2026-04-13T10:44:06.000Z", true);
*/
var dateParser = (value, utc = false) => {
	if (typeof value !== "string" || value === void 0 || value === null) return value;
	if (value.length === 0) return null;
	if (value.length === 17) {
		const year = +value.slice(0, 4);
		const month = +value.slice(4, 6) - 1;
		const day = +value.slice(6, 8);
		const hour = +value.slice(8, 10);
		const min = +value.slice(10, 12);
		const sec = +value.slice(12, 14);
		const ms = +value.slice(14, 17);
		if (utc) return new Date(Date.UTC(year, month, day, hour, min, sec, ms));
		return new Date(year, month, day, hour, min, sec, ms);
	}
	if (value.length === 24) {
		if (utc) return new Date(value);
		return new Date(value.slice(0, -1));
	}
	const parsedValue = new Date(value);
	return Number.isNaN(parsedValue.getTime()) ? value : parsedValue;
};
/**
* Executes the createRequestPayload hook if defined on the model.
* This helper consolidates the duplicate pattern of building context and calling the hook.
*
* @param {Object} model - The UiModel instance
* @param {Object} context - The context object containing request parameters (url, where, requestData, etc.)
* @returns {Promise<Object>} The potentially modified context object
*/
async function executeRequestHook(model, context) {
	if (typeof model.createRequestPayload === "function") await model.createRequestPayload(context);
	const method = String(context.method ?? "").toUpperCase();
	const data = {
		url: context.url,
		method: context.method,
		jsonPayload: context.jsonPayload,
		dataParser: context.dataParser,
		signal: context.signal,
		responseType: context.responseType,
		columns: context.columns
	};
	if (method !== "GET" && method !== "HEAD") data.params = context.params ?? {
		...context.requestData,
		where: context.where
	};
	return data;
}
/**
* Executes the parseResponsePayload hook if defined on the model and action is supported.
* This helper consolidates the duplicate pattern of checking and calling the response hook.
*
* @param {Object} model - The UiModel instance
* @param {string} action - The action being performed (list, load, lookups, etc.)
* @param {Object} responseData - The response from the API
* @param {Object} context - Additional context to pass to the hook (dateColumns, props, etc.)
* @returns {Promise<Object>} The potentially transformed response data
*/
async function executeResponseHook({ model, action, responseData, context = {} }) {
	if (typeof model.parseResponsePayload === "function" && model.parseResponseActions?.includes(action)) return await model.parseResponsePayload({
		responseData,
		model,
		action,
		...context
	});
	return responseData;
}
/**
* Validates the response and throws an error if the response indicates failure.
* This helper consolidates the duplicate error checking pattern.
*
* @param {Object} response - The response object to validate
* @param {string} defaultMessage - The default error message if none is provided
* @throws {Error} If the response contains an error or success is false
*/
function validateResponse(response, defaultMessage) {
	if (response?.error || response?.success === false) throw new Error(getErrorMessage(response) || defaultMessage);
}
var buildRequestData = ({ gridColumns, page, pageSize, sortModel, filterModel, baseFilters, action = "list", extraParams = {}, model, api }) => {
	const isElasticExport = action === "export" && model.isElasticExport === true;
	const lookups = [];
	const lookupWithDeps = [];
	const dateColumns = [];
	gridColumns.forEach(({ lookup, type, field, localize = false, dependsOn }) => {
		if (dateDataTypes.includes(type)) dateColumns.push({
			field,
			localize
		});
		if (!lookup) return;
		if (!lookups.includes(lookup) && lookupDataTypes.includes(type)) {
			lookups.push(lookup);
			lookupWithDeps.push({
				lookup,
				dependsOn
			});
		}
	});
	const where = [];
	if (filterModel?.items?.length) filterModel.items.forEach((filter) => {
		if (shouldApplyFilter(filter)) {
			const { field, operator, filterField } = filter;
			let { value } = filter;
			const type = gridColumns.filter((item) => item?.field === filter.field)[0]?.type;
			if (type === "boolean") value = value === "true" || value === true ? 1 : 0;
			else if (type === "number") value = Array.isArray(value) ? value.filter((e) => e) : value;
			value = filter.filterValues || value;
			where.push({
				field: filterField || field,
				operator,
				value,
				type
			});
		}
	});
	if (baseFilters && Array.isArray(baseFilters)) where.push(...baseFilters);
	const requestData = {
		start: page * pageSize,
		limit: isElasticExport ? model.exportSize || exportDefaultLimit : pageSize,
		...extraParams,
		logicalOperator: filterModel.logicOperator,
		sort: sortModel.map((sort) => (sort.filterField || sort.field) + " " + sort.sort).join(","),
		isElasticExport,
		model: model.module,
		fileName: model.overrideFileName
	};
	if (lookups.length) requestData.lookups = lookups.join(",");
	if (lookupWithDeps.length) requestData.lookupWithDeps = JSON.stringify(lookupWithDeps);
	if (model?.limitToSurveyed) requestData.limitToSurveyed = model?.limitToSurveyed;
	let url = `${api}/${action}`;
	const queryParams = new URLSearchParams();
	if (extraParams.template) queryParams.append("template", extraParams.template);
	if (extraParams.configFileName) queryParams.append("configFileName", extraParams.configFileName);
	const queryString = queryParams.toString();
	if (queryString) url += `?${queryString}`;
	return {
		requestData,
		url,
		where,
		dateColumns
	};
};
/**
* Fetches a list of records or triggers a file export depending on whether `contentType` is provided.
*
* - Without `contentType` (list path):
*   - Performs a JSON POST request via `request`.
*   - Returns the parsed response.
*   - Throws on HTTP or application-level errors.
*
* - With `contentType` (export path):
*   - Builds a POST payload and submits a hidden `<form>` to trigger a file download in a new window/tab.
*   - This is a fire-and-forget operation: the promise resolves once the form is submitted.
*   - No errors from the export request are propagated back to the caller; failures are effectively silent
*     from this function's perspective and should be handled via server-side logging or a custom UX flow
*     (e.g. returning an error file or exposing a separate export-status API).
*/
var getList = async (props = {}) => {
	const { contentType, columns, extraParams = {}, action = "list", model, signal } = props;
	const { requestData, url, where, dateColumns } = buildRequestData(props);
	if (contentType) {
		const context = await executeRequestHook(model, {
			where,
			url,
			requestData,
			dataParsers: DATA_PARSERS,
			responseType: contentType,
			columns,
			action,
			...props
		});
		const finalRequestData = {
			...context.params,
			columns: context.columns,
			responseType: context.responseType
		};
		const form = document.createElement("form");
		form.setAttribute("method", "POST");
		form.setAttribute("id", "exportForm");
		form.setAttribute("target", "_blank");
		if (!extraParams.template) for (const key in finalRequestData) {
			let v = finalRequestData[key];
			if (v === void 0 || v === null) continue;
			else if (typeof v !== "string") v = JSON.stringify(v);
			const hiddenTag = document.createElement("input");
			hiddenTag.type = "hidden";
			hiddenTag.name = key;
			hiddenTag.value = v;
			form.append(hiddenTag);
		}
		form.setAttribute("action", context.url);
		document.body.appendChild(form);
		form.submit();
		setTimeout(() => {
			form.remove();
		}, 0);
		return;
	}
	const response = await request(await executeRequestHook(model, {
		where,
		url,
		requestData,
		dataParsers: DATA_PARSERS,
		dataParser: DATA_PARSERS.json,
		jsonPayload: true,
		action,
		signal,
		additionalHeaders: { "Content-Type": "application/json" },
		...props
	}));
	if (response?.aborted) return response;
	validateResponse(response, "An error occurred while fetching data");
	await executeResponseHook({
		model,
		action,
		responseData: response,
		context: {
			dateColumns,
			model,
			action,
			...props
		}
	});
	response.records.forEach((record) => {
		dateColumns.forEach((column) => {
			const { field, localize } = column;
			if (record[field]) record[field] = dateParser(record[field], localize);
		});
		model.columns.forEach(({ field, displayIndex }) => {
			if (!displayIndex) return;
			record[field] = record[displayIndex];
		});
	});
	return response;
};
/**
* Loads a single record by id along with its lookups.
* Returns { id, title, record, lookups } or throws on error.
*/
var getRecord = async (props = {}) => {
	let { api, id, model, parentFilters, where = {} } = props;
	api = api || model.api;
	const searchParams = new URLSearchParams();
	const url = `${api}/${id === void 0 || id === null ? "-" : id}`;
	const lookupsToFetch = [];
	(model.formDef || model.columns)?.forEach((field) => {
		if (field.lookup && !lookupsToFetch.includes(field.lookup) && !field.dependsOn) lookupsToFetch.push(field.lookup);
	});
	searchParams.set("lookups", lookupsToFetch);
	if (where && Object.keys(where)?.length) searchParams.set("where", JSON.stringify(where));
	const response = await request(await executeRequestHook(model, {
		url: `${url}?${searchParams.toString()}`,
		method: "GET",
		lookupsToFetch,
		jsonPayload: true,
		action: "load",
		dataParsers: DATA_PARSERS,
		...props
	}));
	validateResponse(response, "Load failed");
	await executeResponseHook({
		model,
		action: "load",
		responseData: response,
		context: props
	});
	const { data: record, lookups } = response || {};
	let title = record[model.linkColumn];
	const columnConfig = model.columns.find((a) => a.field === model.linkColumn);
	if (columnConfig && columnConfig.lookup) {
		if (lookups && lookups[columnConfig.lookup] && lookups[columnConfig.lookup]?.length) {
			const lookupValue = lookups[columnConfig.lookup].find((a) => a.value === title);
			if (lookupValue) title = lookupValue.label;
		}
	}
	const defaultValues = { ...model.defaultValues };
	return {
		id,
		title,
		record: {
			...defaultValues,
			...record,
			...parentFilters
		},
		lookups
	};
};
/**
* Deletes a record by id. Returns true on success or throws on error.
*/
var deleteRecord = async function(props = {}) {
	const { id, api, model } = props;
	if (!id) throw new Error("Delete failed. No active record.");
	validateResponse(await request(await executeRequestHook(model, {
		url: `${api}/${id}`,
		method: "DELETE",
		dataParsers: DATA_PARSERS,
		jsonPayload: true,
		action: "delete",
		...props
	})), "Delete failed");
	return true;
};
/**
* Creates or updates a record. Returns the response on success or throws on error.
*/
var saveRecord = async function(props = {}) {
	const { id, api, values, model } = props;
	let url, method;
	if (id !== 0) {
		url = `${api}/${id}`;
		method = "PUT";
	} else {
		url = api;
		method = "POST";
	}
	const response = await request(await executeRequestHook(model, {
		url,
		method,
		params: values,
		action: "save",
		jsonPayload: true,
		additionalHeaders: { "Content-Type": "application/json" },
		dataParsers: DATA_PARSERS,
		...props
	}));
	validateResponse(response, "Save failed");
	return response;
};
/**
* Fetches lookup data for a given scope. Returns the response or throws on error.
*/
var getLookups = async (props = {}) => {
	let { api, model, lookups, scopeId, reqData } = props;
	api = api || model.api;
	const searchParams = new URLSearchParams();
	const url = `${api}/lookups`;
	searchParams.set("lookups", lookups);
	searchParams.set("scopeId", scopeId);
	const response = await request(await executeRequestHook(model, {
		url: `${url}?${searchParams.toString()}`,
		method: "GET",
		lookups,
		scopeId,
		dataParsers: DATA_PARSERS,
		dataParser: DATA_PARSERS.json,
		jsonPayload: true,
		action: "lookups",
		...reqData,
		...props
	}));
	validateResponse(response, "Could not load lookups");
	return await executeResponseHook({
		model,
		action: "lookups",
		responseData: response,
		context: props
	});
};
var crudHelper = {
	getList,
	getRecord,
	deleteRecord,
	saveRecord,
	getLookups
};
//#endregion
//#region src/lib/components/Grid/footer.js
var Footer = ({ pagination, apiRef, tTranslate = (key) => key }) => {
	const page = apiRef.current.state.pagination.paginationModel.page;
	const rowsPerPage = apiRef.current.state.pagination.paginationModel.pageSize;
	const totalRows = apiRef.current.state.rows.totalRowCount;
	const totalPages = Math.ceil(totalRows / rowsPerPage);
	const { t: translate, i18n } = useTranslation();
	const tOpts = {
		t: translate,
		i18n
	};
	const [pageNumber, setPageNumber] = useState(page + 1);
	const handleChange = function(e) {
		let value = e.target?.value;
		if (value === "") setPageNumber("");
		else {
			value = parseInt(value);
			value = isNaN(value) || value < 1 ? 1 : value;
			setPageNumber(value);
		}
	};
	useEffect(() => {
		setPageNumber(page + 1);
	}, [page, rowsPerPage]);
	const onPageChange = function() {
		let targetPage = pageNumber === "" ? 1 : pageNumber;
		targetPage = Math.max(targetPage, 1);
		targetPage = Math.min(targetPage, totalPages);
		apiRef.current.setPage(targetPage - 1);
		setPageNumber(targetPage);
		if (pageNumber === "") setPageNumber(1);
	};
	const handleKeyPress = (event) => {
		const keyCode = event.which || event.keyCode;
		const keyValue = String.fromCharCode(keyCode);
		if (!/\d/.test(keyValue)) event.preventDefault();
	};
	return /* @__PURE__ */ jsxs(GridFooterContainer, { children: [/* @__PURE__ */ jsx(Box, {
		sx: { pl: 5 },
		children: pagination && /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs(Typography, {
				variant: "p",
				children: [tTranslate("Jump to page", tOpts), ":"]
			}),
			/* @__PURE__ */ jsx(TextField, {
				sx: {
					width: 70,
					pl: 1,
					"& input[type=number]::-webkit-inner-spin-button": { cursor: "pointer" },
					"& input[type=number]::-webkit-outer-spin-button": { cursor: "pointer" }
				},
				variant: "standard",
				type: "number",
				min: 1,
				value: pageNumber,
				onChange: handleChange,
				onKeyPress: handleKeyPress,
				disabled: !totalRows
			}),
			/* @__PURE__ */ jsx(Button, {
				disabled: !totalRows,
				size: "small",
				onClick: onPageChange,
				children: tTranslate("Go", tOpts)
			})
		] })
	}), /* @__PURE__ */ jsx(GridFooter, {})] });
};
//#endregion
//#region src/lib/components/Grid/template.js
var defaultTemplate = /\${((\w+)\.)?(\w+)}/g;
/**
* @description Replaces the given tags in the given source with the given values.
* @param {string} source The source to replace the tags in.
* @param {object} values The values to replace the tags with.
* @param {object} options template - Regex to use for matching tags, keepMissingTags - Whether to keep tags that are not replaced.
* @returns {string} The source with the tags replaced.
* @example
* // Replaces all tags in the given source with the given values.
* console.log(template("${firstName} ${lastName}", { firstName: "John", lastName: "Doe" }));
* // -> "John Doe"
* // Two level tags are supported.
* console.log(template("${user.firstName} ${user.lastName}", { user: { firstName: "John", lastName: "Doe" } }));
* // -> "John Doe"
**/
var replaceTags = function(source, tags, { template = defaultTemplate, keepMissingTags = false } = {}) {
	if (!source || !tags) return source;
	return source.replace(template, function(match, g1, g2, g3) {
		const container = g2 ? tags[g2] || {} : tags;
		return container[g3] === void 0 ? keepMissingTags ? match : "" : container[g3];
	});
};
var template_default = { replaceTags };
//#endregion
//#region src/lib/components/Typography/index.js
function MuiTypography({ variant = "h2", component = "h2", text = "", name = null, ...rest }) {
	return /* @__PURE__ */ jsxs(Typography$1, {
		variant,
		component,
		...rest,
		children: [text, name && ` ${name}`]
	});
}
//#endregion
//#region src/lib/components/useMobile.js
function useMobile(onlyMobile = false) {
	const [view, setView] = useState(checkDevice());
	function handleWindowSizeChange() {
		setTimeout(() => {
			setView(checkDevice());
		}, 10);
	}
	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);
	function checkDevice() {
		let userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
		const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
		userAgent = userAgent.toLowerCase();
		const tablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
		let currentOrientation = null;
		if (window.innerWidth <= window.innerHeight) currentOrientation = "portrait";
		else currentOrientation = "landscape";
		return {
			mobile,
			tablet,
			portrait: currentOrientation === "portrait",
			landscape: currentOrientation === "landscape"
		};
	}
	return onlyMobile ? view.mobile : view;
}
//#endregion
//#region src/lib/components/mui/locale/data-grid/daDK.js
var daDKGrid = {
	Jumptopage: "Gå til side",
	Go: "Gå",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
	Pages: "sider",
	MuiTablePagination: { labelRowsPerPage: "Rækker pr. side" }
};
var mergedLocalizationDatadaDK = {
	...locales$1["daDK"],
	...daDKGrid
};
//#endregion
//#region src/lib/components/mui/locale/data-grid/deDE.js
var deDEGrid = {
	Jumptopage: "Zur Seite springen",
	Go: "Gehen",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
	Pages: "Seiten",
	MuiTablePagination: { labelRowsPerPage: "Zeilen pro Seite" }
};
var mergedLocalizationDatadeDE = {
	...locales$1["deDE"],
	...deDEGrid
};
//#endregion
//#region src/lib/components/mui/locale/data-grid/elGR.js
var elGRGrid = {
	Jumptopage: "Μετάβαση στη σελίδα",
	Go: "Πηγαίνω",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
	Pages: "Σελίδες",
	MuiTablePagination: { labelRowsPerPage: "Σειρές ανά σελίδα" }
};
var mergedLocalizationDataelGR = {
	...locales$1["elGR"],
	...elGRGrid
};
//#endregion
//#region src/lib/components/mui/locale/data-grid/esES.js
var esESGrid = {
	Jumptopage: "Saltar a la página",
	Go: "Ir",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
	Pages: "paginas",
	MuiTablePagination: { labelRowsPerPage: "Filas por página" }
};
var mergedLocalizationDataesES = {
	...locales$1["esES"],
	...esESGrid
};
//#endregion
//#region src/lib/components/mui/locale/data-grid/frFR.js
var frFRGrid = {
	Jumptopage: "Aller à la page",
	Go: "Aller",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
	Pages: "Pages",
	MuiTablePagination: { labelRowsPerPage: "Lignes par page" }
};
var mergedLocalizationDatafrFR = {
	...locales$1["frFR"],
	...frFRGrid
};
//#endregion
//#region src/lib/components/mui/locale/data-grid/itIT.js
var itITGrid = {
	Jumptopage: "Vai alla pagina",
	Go: "Andare",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
	Pages: "Pagine",
	MuiTablePagination: { labelRowsPerPage: "Righe per pagina" }
};
var mergedLocalizationDataitIT = {
	...locales$1["itIT"],
	...itITGrid
};
//#endregion
//#region src/lib/components/mui/locale/data-grid/trTR.js
var trTRGrid = {
	Jumptopage: "Sayfaya atla",
	Go: "Gitmek",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
	Pages: "Sayfalar",
	MuiTablePagination: { labelRowsPerPage: "Sayfa başına satır" }
};
var mergedLocalizationDatatrTR = {
	...locales$1["trTR"],
	...trTRGrid
};
//#endregion
//#region src/lib/components/mui/locale/data-grid/ptPT.js
var ptPT_default = { components: { MuiDataGrid: { defaultProps: { localeText: {
	Add: "createew",
	noRowsLabel: "Sem resultados",
	noResultsOverlayLabel: "Nenhum resultado encontrado.",
	toolbarDensity: "Densidade",
	toolbarDensityLabel: "Densidade",
	toolbarDensityCompact: "Compacto",
	toolbarDensityStandard: "Padrão",
	toolbarDensityComfortable: "Confortável",
	toolbarColumns: "Colunas",
	toolbarColumnsLabel: "Selecionar colunas",
	toolbarFilters: "Filtros",
	toolbarFiltersLabel: "Mostrar filtros",
	toolbarFiltersTooltipHide: "Esconder filtros",
	toolbarFiltersTooltipShow: "Mostrar filtros",
	toolbarFiltersTooltipActive: (count) => count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
	toolbarQuickFilterPlaceholder: "Pesquisar...",
	toolbarQuickFilterLabel: "Pesquisar",
	toolbarQuickFilterDeleteIconLabel: "Limpar",
	toolbarExport: "Exportar",
	toolbarExportLabel: "Exportar",
	toolbarExportCSV: "Baixar como CSV",
	toolbarExportPrint: "Imprimir",
	toolbarExportExcel: "Baixar como Excel",
	columnsPanelTextFieldLabel: "Encontrar coluna",
	columnsPanelTextFieldPlaceholder: "Título da coluna",
	columnsPanelDragIconLabel: "Reorganizar coluna",
	columnsPanelShowAllButton: "Mostrar todas",
	columnsPanelHideAllButton: "Esconder todas",
	filterPanelAddFilter: "Adicionar filtro",
	filterPanelRemoveAll: "Remover todos",
	filterPanelDeleteIconLabel: "Excluir",
	filterPanelLogicOperator: "Operador lógico",
	filterPanelOperator: "Operador",
	filterPanelOperatorAnd: "E",
	filterPanelOperatorOr: "Ou",
	filterPanelColumns: "Colunas",
	filterPanelInputLabel: "Valor",
	filterPanelInputPlaceholder: "Valor do filtro",
	filterOperatorContains: "contém",
	filterOperatorEquals: "é igual a",
	filterOperatorStartsWith: "começa com",
	filterOperatorEndsWith: "termina com",
	filterOperatorIs: "é",
	filterOperatorNot: "não é",
	filterOperatorAfter: "é posterior a",
	filterOperatorOnOrAfter: "é em ou depois de",
	filterOperatorBefore: "é anterior a",
	filterOperatorOnOrBefore: "é em ou antes de",
	filterOperatorIsEmpty: "está vazio",
	filterOperatorIsNotEmpty: "não está vazio",
	filterOperatorIsAnyOf: "é algum de",
	"filterOperator=": "=",
	"filterOperator!=": "!=",
	"filterOperator>": ">",
	"filterOperator>=": ">=",
	"filterOperator<": "<",
	"filterOperator<=": "<=",
	headerFilterOperatorContains: "Contém",
	headerFilterOperatorEquals: "É igual a",
	headerFilterOperatorStartsWith: "Começa com",
	headerFilterOperatorEndsWith: "Termina com",
	headerFilterOperatorIs: "É",
	headerFilterOperatorNot: "Não é",
	headerFilterOperatorAfter: "É depois de",
	headerFilterOperatorOnOrAfter: "É em ou depois de",
	headerFilterOperatorBefore: "É antes de",
	headerFilterOperatorOnOrBefore: "É em ou antes de",
	headerFilterOperatorIsEmpty: "Está vazio",
	headerFilterOperatorIsNotEmpty: "Não está vazio",
	headerFilterOperatorIsAnyOf: "É algum de",
	"headerFilterOperator=": "É igual a",
	"headerFilterOperator!=": "Não é igual a",
	"headerFilterOperator>": "Maior que",
	"headerFilterOperator>=": "Maior ou igual a",
	"headerFilterOperator<": "Menor que",
	"headerFilterOperator<=": "Menor ou igual a",
	filterValueAny: "qualquer",
	filterValueTrue: "verdadeiro",
	filterValueFalse: "falso",
	columnMenuLabel: "Menu",
	columnMenuShowColumns: "Mostrar colunas",
	columnMenuManageColumns: "Gerenciar colunas",
	columnMenuFilter: "Filtro",
	columnMenuHideColumn: "Esconder coluna",
	columnMenuUnsort: "Desfazer ordenação",
	columnMenuSortAsc: "Ordenar por ASC",
	columnMenuSortDesc: "Ordenar por DESC",
	columnHeaderFiltersTooltipActive: (count) => count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
	columnHeaderFiltersLabel: "Mostrar filtros",
	columnHeaderSortIconLabel: "Ordenar",
	footerRowSelected: (count) => count !== 1 ? `${count.toLocaleString()} linhas selecionadas` : `${count.toLocaleString()} linha selecionada`,
	footerTotalRows: "Total de linhas:",
	footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
	checkboxSelectionHeaderName: "Seleção de caixa de seleção",
	checkboxSelectionSelectAllRows: "Selecionar todas as linhas",
	checkboxSelectionUnselectAllRows: "Desselecionar todas as linhas",
	checkboxSelectionSelectRow: "Selecionar linha",
	checkboxSelectionUnselectRow: "Desselecionar linha",
	booleanCellTrueLabel: "sim",
	booleanCellFalseLabel: "não",
	actionsCellMore: "mais",
	pinToLeft: "Fixar à esquerda",
	pinToRight: "Fixar à direita",
	unpin: "Desafixar",
	treeDataGroupingHeaderName: "Agrupar",
	treeDataExpand: "ver filhos",
	treeDataCollapse: "esconder filhos",
	groupingColumnHeaderName: "Agrupar",
	groupColumn: (name) => `Agrupar por ${name}`,
	unGroupColumn: (name) => `Parar de agrupar por ${name}`,
	detailPanelToggle: "Alternar painel de detalhes",
	expandDetailPanel: "Expandir",
	collapseDetailPanel: "Recolher",
	MuiTablePagination: {},
	rowReorderingHeaderName: "Reorganização de linhas",
	aggregationMenuItemHeader: "Agregação",
	aggregationFunctionLabelSum: "soma",
	aggregationFunctionLabelAvg: "média",
	aggregationFunctionLabelMin: "mínimo",
	aggregationFunctionLabelMax: "máximo",
	aggregationFunctionLabelSize: "tamanho",
	Jumptopage: "Ir para a página",
	Go: "Ir",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Neste espaço em breve traremos para você um dashboard com os principais KPIs de visão geral para fácil acesso",
	Pages: "Páginas",
	MuiTablePagination: { labelRowsPerPage: "Linhas por página" }
} } } } };
//#endregion
//#region src/lib/components/mui/locale/data-grid/enUS.js
var enUSGrid = {
	Jumptopage: "Jump to page",
	Go: "Go",
	InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
	Pages: "Pages",
	MuiTablePagination: { labelRowsPerPage: "Rows per page" }
};
//#endregion
//#region src/lib/components/mui/locale/localization.js
var locales = {
	"en": {
		...locales$1["enUS"],
		...enUSGrid
	},
	"tr-TR": mergedLocalizationDatatrTR,
	"es-ES": mergedLocalizationDataesES,
	"da-DK": mergedLocalizationDatadaDK,
	"de-DE": mergedLocalizationDatadeDE,
	"el-GR": mergedLocalizationDataelGR,
	"fr-FR": mergedLocalizationDatafrFR,
	"pt-PT": ptPT_default,
	"it-IT": mergedLocalizationDataitIT
};
//#endregion
//#region src/lib/components/useRouter/StateProvider.js
dayjs.extend(utc);
dayjs.extend(timezone);
var StateContext = createContext();
var RouterContext = createContext(null);
var snackbarWarning = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider.");
var StateProvider = ({ children, apiEndpoints: initialApiEndpoints = {} }) => {
	const [locale, setLocaleState] = useState("en");
	const [dateTime, setDateTimeState] = useState("MM/DD/YYYY hh:mm:ss A");
	const [pageTitle, setPageTitleState] = useState(null);
	const [modal, setModalState] = useState(null);
	const [pageBackButton, setPageBackButtonState] = useState(null);
	const [userData, setUserDataState] = useState(null);
	const [timeZone, setTimeZoneState] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { t, i18n } = useTranslation();
	const snackbar = useSnackbar();
	const apiEndpoints = useRef(initialApiEndpoints);
	const setApiEndpoint = useCallback((key, endpoint) => {
		apiEndpoints.current[key] = endpoint;
	}, []);
	const getApiEndpoint = useCallback((key) => {
		return apiEndpoints.current[key || "default"] || "";
	}, []);
	const buildUrl = useCallback((url, endpoint) => {
		return `${apiEndpoints.current[endpoint || "default"] || ""}${url}`;
	}, []);
	/**
	* Show loader - simple boolean toggle
	* Calling methods should wrap all async operations in try/finally blocks
	*/
	const showLoader = useCallback((flag = true) => {
		setIsLoading(flag);
	}, []);
	/**
	* Returns the system date and/or time format string based on user preferences and options.
	*
	* @param {boolean} isDateFormatOnly - If true, returns only the date format; otherwise, returns date and time format.
	* @param {boolean} showOnlyDate - If true and isDateFormatOnly is false, returns only the date part in uppercase.
	* @param {string|null|undefined} state - The user-defined date/time format string (e.g., "dd-mm-yyyy hh:mm A").
	* @returns {string} The formatted date/time format string.
	*/
	const systemDateTimeFormat = useCallback((isDateFormatOnly, showOnlyDate, state) => {
		if (state !== void 0 && state !== null) {
			const userData = state;
			let userDateFormat = isDateFormatOnly ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
			if (userData) {
				userDateFormat = userData.split(" ");
				userDateFormat[0] = userDateFormat[0].toUpperCase();
				if (!isDateFormatOnly) if (showOnlyDate) userDateFormat = userDateFormat[0].toUpperCase();
				else {
					userDateFormat[1] += !userDateFormat[1].includes(":ss") ? ":ss" : "";
					userDateFormat = userDateFormat.join(" ");
				}
				else userDateFormat = userDateFormat[0];
			}
			return userDateFormat;
		}
		return isDateFormatOnly?.split(" ")[0] || "DD-MM-YYYY";
	}, []);
	/**
	* Formats a date or date-string into a localized or system-defined string format.
	* * @param {Object} params - The formatting configuration.
	* @param {string|Date|dayjs.Dayjs} params.value - The date value to format. 
	* - Strings without offsets are treated as local time.
	* - Strings with offsets/Z are parsed as specific points in time.
	* @param {boolean} params.useSystemFormat - If true, ignores `state` and uses the 
	* globally configured system date/time format.
	* @param {boolean} [params.showOnlyDate=false] - If true, excludes the time portion 
	* from the resulting string.
	* @param {string|null|undefined} params.state - A custom format string (e.g., "DD/MM/YYYY") 
	* used if `useSystemFormat` is false.
	* * @returns {string|null} The formatted date string, or `null` if the input value is falsy.
	* * @example
	* formatDate({ value: '2023-10-01', useSystemFormat: true });
	* // Returns "Oct 1, 2023" (depending on system settings)
	*/
	const formatDate = useCallback(({ value, useSystemFormat, showOnlyDate = false, state }) => {
		if (!value) return null;
		const format = systemDateTimeFormat(useSystemFormat, showOnlyDate, state);
		return dayjs(value).format(format);
	}, [systemDateTimeFormat]);
	/**
	* Provides localization utilities for the current locale.
	*
	* @returns {Object} An object with a getLocalizedString function.
	*/
	const useLocalization = useCallback(() => {
		const currentLocaleData = locale;
		const localeData = locales[currentLocaleData];
		function getLocalizedString(key) {
			return currentLocaleData === "pt-PT" || currentLocaleData === "ptPT" ? localeData.components.MuiDataGrid.defaultProps.localeText[key] || key : localeData[key] || key;
		}
		return { getLocalizedString };
	}, [locale]);
	/**
	* Set the application locale
	*/
	const setLocale = useCallback((newLocale) => {
		setLocaleState(newLocale);
	}, []);
	/**
	* Set page title details
	*/
	const setPageTitle = useCallback((title) => {
		setPageTitleState(title);
	}, []);
	/**
	* Set page back button configuration
	*/
	const setPageBackButton = useCallback((backButton) => {
		setPageBackButtonState(backButton);
	}, []);
	/**
	* Set user data
	*/
	const setUserData = useCallback((newUserData) => {
		setUserDataState(newUserData);
	}, []);
	/**
	* Set timezone
	*/
	const setTimeZone = useCallback((newTimeZone) => {
		setTimeZoneState(newTimeZone);
	}, []);
	/**
	* Set date/time format
	*/
	const setDateTimeFormat = useCallback((format) => {
		setDateTimeState(format);
	}, []);
	/**
	* Open/close modal
	*/
	const setModal = useCallback((newModal) => {
		setModalState(newModal);
	}, []);
	const stateData = useMemo(() => ({
		locale,
		dateTime,
		pageTitle,
		modal,
		pageBackButton,
		userData,
		timeZone
	}), [
		locale,
		dateTime,
		pageTitle,
		modal,
		pageBackButton,
		userData,
		timeZone
	]);
	const contextValue = useMemo(() => ({
		stateData,
		isLoading,
		showLoader,
		showMessage: snackbar?.showMessage || snackbarWarning,
		showError: snackbar?.showError || snackbarWarning,
		dayjs,
		t,
		i18n,
		systemDateTimeFormat,
		formatDate,
		useLocalization,
		getApiEndpoint,
		setApiEndpoint,
		buildUrl,
		setLocale,
		setPageTitle,
		setPageBackButton,
		setUserData,
		setTimeZone,
		setDateTimeFormat,
		setModal
	}), [
		stateData,
		isLoading,
		showLoader,
		t,
		i18n,
		snackbar,
		getApiEndpoint,
		setApiEndpoint,
		systemDateTimeFormat,
		formatDate,
		useLocalization,
		setLocale,
		setPageTitle,
		setPageBackButton,
		setUserData,
		setTimeZone,
		setDateTimeFormat,
		setModal,
		buildUrl
	]);
	return /* @__PURE__ */ jsx(StateContext.Provider, {
		value: contextValue,
		children
	});
};
var RouterProvider = RouterContext.Provider;
var useRouter = () => {
	return useContext(RouterContext);
};
var useStateContext = () => {
	const context = useContext(StateContext);
	if (context === void 0) throw new Error("useStateContext must be used within a StateProvider");
	return context;
};
//#endregion
//#region src/lib/components/HelpModal/index.js
var HelpModal = () => {
	const [height, setHeight] = useState();
	const [loading, setLoading] = useState(false);
	const { stateData, setModal } = useStateContext();
	const openModal = stateData.modal;
	const ratio = 16 / 9;
	let zoom = (window.outerWidth - 10) / window.innerWidth * 100;
	const updateHeight = () => {
		let widthPercentage = document.getElementById("tutorial-iframe");
		if (widthPercentage) {
			widthPercentage = widthPercentage.offsetWidth;
			widthPercentage = widthPercentage / window.innerWidth;
		} else widthPercentage = .9;
		const calculatedHeight = window.innerWidth * widthPercentage * (1 / ratio);
		const maxHeight = window.innerHeight - 180;
		setHeight(Math.min(calculatedHeight, maxHeight));
	};
	useEffect(() => {
		if (openModal?.status) {
			setLoading(true);
			updateHeight();
		}
	}, [openModal, zoom]);
	useEffect(() => {
		window.addEventListener("resize", updateHeight);
		return () => {
			window.removeEventListener("resize", updateHeight);
		};
	}, []);
	function resetIframe() {
		const iframe = document.getElementById("tutorial-iframe");
		iframe.src = openModal?.data?.url;
	}
	return /* @__PURE__ */ jsx("div", { children: openModal?.status && /* @__PURE__ */ jsxs(Dialog$1, {
		fullWidth: true,
		maxWidth: "lg",
		open: openModal.status,
		onClose: () => {
			setModal({
				status: false,
				data: {}
			});
		},
		children: [/* @__PURE__ */ jsx(DialogTitle$1, {
			className: "pt-2 pb-0",
			children: /* @__PURE__ */ jsxs(Grid, {
				container: true,
				spacing: 1,
				children: [/* @__PURE__ */ jsxs(Grid, {
					size: 11,
					children: [/* @__PURE__ */ jsxs(Typography$1, {
						variant: "h7",
						component: "div",
						children: [" ", openModal?.data?.title || ""]
					}), /* @__PURE__ */ jsx(Typography$1, {
						variant: "caption",
						component: "div",
						children: openModal?.data?.subTitle || /* @__PURE__ */ jsx(Fragment, { children: "\xA0" })
					})]
				}), /* @__PURE__ */ jsxs(Grid, {
					className: "text-right",
					size: 1,
					children: [/* @__PURE__ */ jsx(Replay, {
						className: "cursor_pointer mt-2 mr-2",
						onClick: resetIframe
					}), /* @__PURE__ */ jsx(Close, {
						className: "cursor_pointer mt-2",
						onClick: () => {
							setModal({
								status: false,
								data: {}
							});
						}
					})]
				})]
			})
		}), /* @__PURE__ */ jsxs(DialogContent$1, {
			dividers: true,
			children: [loading && /* @__PURE__ */ jsx("div", { children: "Loading..." }), openModal?.data?.url && /* @__PURE__ */ jsx("iframe", {
				id: "tutorial-iframe",
				style: {
					width: "100%",
					height: `${height}px`
				},
				title: openModal?.data?.title || "",
				src: openModal?.data?.url,
				allowfullscreen: true,
				frameborder: "0",
				loading: "lazy",
				onLoad: () => setLoading(false)
			})]
		})]
	}) });
};
//#endregion
//#region src/lib/components/PageTitle/index.js
function PageTitle({ titleHeading, navigate, name = null, RightComponent = null, mobileRightComponent, title = "", titleClass = "text-theme-blue text-max-width", showBreadcrumbs, breadcrumbs = [], enableBackButton = false, breadcrumbColor, showHelpButton = false, model }) {
	const isMobile = useMobile(true);
	const breadcrumbsLasIndex = breadcrumbs.length - 1;
	const needToShowBreadcrumbs = showBreadcrumbs && breadcrumbs.length;
	const { t: translate, i18n } = useTranslation();
	const tOpts = useMemo(() => ({
		t: translate,
		i18n
	}), [translate, i18n]);
	const tTranslate = model?.tTranslate ?? ((key) => key);
	const handleBack = () => {
		navigate(-1);
	};
	useEffect(() => {
		if (title) document.title = title;
	}, [title]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(MuiTypography, {
		className: "print-only",
		text: tTranslate(titleHeading, tOpts)
	}), needToShowBreadcrumbs && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Card, {
		sx: { mb: 3 },
		children: /* @__PURE__ */ jsxs(CardContent, {
			sx: { backgroundColor: breadcrumbColor || "#fff" },
			children: [
				/* @__PURE__ */ jsxs(Grid, {
					container: true,
					children: [
						/* @__PURE__ */ jsx(Grid, {
							sx: {
								display: "flex",
								alignItems: "center",
								flex: 1
							},
							children: /* @__PURE__ */ jsx(Breadcrumbs, {
								variant: "h5",
								"aria-label": "breadcrumb",
								separator: ">",
								className: `${titleClass} breadcrumbs-text-title text-max-width`,
								children: breadcrumbs.map((breadcrumb, index) => index < breadcrumbsLasIndex ? /* @__PURE__ */ jsx(Link, {
									onClick: handleBack,
									className: `${titleClass} breadcrumbs-text-title text-max-width`,
									variant: "inherit",
									sx: {
										textDecoration: "none",
										color: "#1976d2"
									},
									children: breadcrumb.text
								}, index) : /* @__PURE__ */ jsx(Typography$1, {
									className: `${titleClass} breadcrumbs-text-title text-max-width`,
									variant: "inherit",
									children: breadcrumb.text
								}, index))
							})
						}),
						enableBackButton && /* @__PURE__ */ jsx(Grid, {
							sx: {
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end"
							},
							children: /* @__PURE__ */ jsx(Button$1, {
								variant: "contained",
								onClick: handleBack,
								children: tTranslate("Back", tOpts)
							})
						}),
						showHelpButton && /* @__PURE__ */ jsx(Grid, {
							sx: {
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-end"
							},
							children: /* @__PURE__ */ jsx(IconButton, {
								color: "primary",
								title: tTranslate("Help", tOpts),
								size: "large",
								children: /* @__PURE__ */ jsx(HelpIcon, { fontSize: "inherit" })
							})
						})
					]
				}),
				/* @__PURE__ */ jsx(Box$1, {
					className: "app-page-title--first",
					children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", {
						style: {
							display: isMobile ? "block" : "flex",
							alignItems: "center"
						},
						children: /* @__PURE__ */ jsx("div", {
							style: { flex: "1 0 auto" },
							children: /* @__PURE__ */ jsx(MuiTypography, {
								className: `${titleClass} page-text-title`,
								variant: "p",
								text: tTranslate(titleHeading, tOpts),
								name
							})
						})
					}) })
				}),
				!isMobile && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Box$1, { children: [
					" ",
					RightComponent && /* @__PURE__ */ jsx(RightComponent, {}),
					" "
				] }), /* @__PURE__ */ jsxs(Box$1, { children: [
					" ",
					mobileRightComponent,
					" "
				] })] })
			]
		})
	}), /* @__PURE__ */ jsx(HelpModal, {})] })] });
}
var PageTitle_default = withTranslation()(PageTitle);
//#endregion
//#region src/lib/components/utils.js
var utils = {
	filterFieldDataTypes: {
		Number: "number",
		String: "string",
		Boolean: "boolean"
	},
	fixedFilterFormat: {
		date: "YYYY-MM-DD",
		dateTime: "YYYY-MM-DD hh:mm:ss a",
		OverrideDateFormat: "DD-MMM-YYYY"
	},
	errorMapping: { 413: "Upload failed: The file exceeds the 30 MB size limit. Please select a smaller file." },
	permissionsMapper: {
		add: "Permission2",
		edit: "Permission3",
		delete: "Permission4"
	},
	emptyIdValues: [
		null,
		void 0,
		"",
		"0",
		0
	],
	normalizeFilterValue: ({ value, operator, isMultiple }) => {
		const isEmpty = [
			"",
			null,
			void 0
		].includes(value);
		if (operator === "isAnyOf" || isMultiple) {
			if (Array.isArray(value)) return value;
			return isEmpty ? [] : [value];
		}
		if (Array.isArray(value)) return value[0] ?? "";
		return value ?? "";
	}
};
var getPermissions = ({ userData = {}, model, userDefinedPermissions }) => {
	const { permissions = [] } = userData;
	userDefinedPermissions = userDefinedPermissions || {
		add: true,
		edit: true,
		delete: true
	};
	const userPermissions = permissions.find((item) => item.Module === model.module);
	if (!userPermissions) return {
		canAdd: userDefinedPermissions.add,
		canEdit: userDefinedPermissions.edit,
		canDelete: userDefinedPermissions.delete
	};
	return {
		canAdd: userDefinedPermissions.add && Boolean(userPermissions[utils.permissionsMapper.add]),
		canEdit: userDefinedPermissions.edit && Boolean(userPermissions[utils.permissionsMapper.edit]),
		canDelete: userDefinedPermissions.delete && Boolean(userPermissions[[utils.permissionsMapper.delete]])
	};
};
//#endregion
//#region src/lib/components/Grid/LocalizedDatePicker.js
dayjs.extend(utcPlugin);
var componentMap = {
	date: DatePicker,
	dateTime: DateTimePicker
};
var LocalizedDatePicker = (props) => {
	const { fixedFilterFormat } = utils;
	const { item, applyValue, convert, colDef } = props;
	const { systemDateTimeFormat, stateData } = useStateContext();
	const columnType = colDef?.type || "date";
	const filterFormat = fixedFilterFormat[columnType];
	const localize = colDef?.localize ?? props.localize ?? false;
	const isValidDate = (date) => {
		const parsedDate = dayjs(date);
		return parsedDate.isValid() && parsedDate.year() > 1900;
	};
	const format = systemDateTimeFormat(columnType !== "dateTime", false, stateData.dateTime);
	const handleFilterChange = (newValue) => {
		if (columnType !== "date" && columnType !== "dateTime") return;
		const isPartialDate = (value) => {
			if (typeof value !== "string") return false;
			return !dayjs(value, format, true).isValid();
		};
		if (isPartialDate(newValue)) return;
		if (convert || localize) {
			if (!newValue) {
				applyValue({
					...item,
					value: null
				});
				return;
			}
			newValue = dayjs(newValue).utc();
			applyValue({
				...item,
				value: newValue
			});
			return;
		}
		if (!isValidDate(newValue)) {
			applyValue({
				...item,
				value: null
			});
			return;
		}
		applyValue({
			...item,
			value: newValue.format(filterFormat)
		});
	};
	const getMonthAbbreviation = (format) => {
		if (format && format === fixedFilterFormat.OverrideDateFormat) {
			const parts = format.split("-");
			return parts.length === 3 ? parts[1] : null;
		}
	};
	const ComponentToRender = componentMap[columnType];
	return /* @__PURE__ */ jsx(LocalizationProvider, {
		dateAdapter: AdapterDayjs,
		children: /* @__PURE__ */ jsx(ComponentToRender, {
			fullWidth: true,
			format,
			value: item?.value ? dayjs(item.value) : null,
			onChange: handleFilterChange,
			slotProps: { textField: {
				variant: "standard",
				inputProps: { "aria-label": "date-input" }
			} },
			localeText: { fieldMonthPlaceholder: () => {
				return getMonthAbbreviation(format) === "MMM" ? "MMM" : "MM";
			} }
		})
	});
};
var localizedDateFormat = (colProps) => getGridDateOperators().map((operator) => ({
	...operator,
	InputComponent: operator.InputComponent ? (props) => /* @__PURE__ */ jsx(LocalizedDatePicker, {
		...props,
		...colProps
	}) : void 0
}));
//#endregion
//#region src/lib/components/Grid/GridPreference.js
var actionTypes$1 = {
	Edit: "Edit",
	Delete: "Delete"
};
var DIALOG_TYPES = {
	ADD: "Add",
	EDIT: "Edit",
	MANAGE: "Manage",
	NONE: null
};
var initialValues = {
	prefName: "",
	prefDesc: "",
	isDefault: false
};
var paginationModel = {
	pageSize: 50,
	page: 0
};
var pageSizeOptions = [
	5,
	10,
	20,
	50,
	100
];
var GridPreferences = ({ gridRef, preferenceKey, onPreferenceChange, t, tOpts }) => {
	const { getApiEndpoint } = useStateContext();
	const preferenceApi = getApiEndpoint("GridPreferenceManager");
	const apiRef = useGridApiRef();
	const snackbar = useSnackbar();
	const [dialogState, setDialogState] = useState(DIALOG_TYPES.NONE);
	const [menuAnchorEl, setMenuAnchorEl] = useState(null);
	const [openPreferenceExistsModal, setOpenPreferenceExistsModal] = useState(false);
	const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState({});
	const [preferences, setPreferences] = useState(null);
	const [currentPreference, setCurrentPreference] = useState(null);
	const nonDefaultPreferences = useMemo(() => preferences == null ? [] : preferences.filter((pref) => pref.prefId !== 0), [preferences]);
	const gridColumns = useMemo(() => [
		{
			field: "prefName",
			type: "string",
			width: 300,
			headerName: t("Preference Name", tOpts),
			sortable: false,
			filterable: false
		},
		{
			field: "prefDesc",
			type: "string",
			width: 300,
			headerName: t("Preference Description", tOpts),
			sortable: false,
			filterable: false
		},
		{
			field: "isDefault",
			type: "boolean",
			width: 100,
			headerName: t("Default", tOpts),
			sortable: false,
			filterable: false
		},
		{
			field: "editAction",
			type: "actions",
			headerName: "",
			width: 20,
			getActions: () => [/* @__PURE__ */ jsx(GridActionsCellItem, {
				icon: /* @__PURE__ */ jsx(Tooltip, {
					title: actionTypes$1.Edit,
					children: /* @__PURE__ */ jsx(EditIcon, {})
				}),
				tabIndex: 1,
				"data-action": actionTypes$1.Edit,
				label: t("Edit", tOpts),
				color: "primary"
			}, 1)]
		},
		{
			field: "deleteAction",
			type: "actions",
			headerName: "",
			width: 20,
			getActions: () => [/* @__PURE__ */ jsx(GridActionsCellItem, {
				icon: /* @__PURE__ */ jsx(Tooltip, {
					title: actionTypes$1.Delete,
					children: /* @__PURE__ */ jsx(DeleteIcon, {})
				}),
				tabIndex: 2,
				"data-action": actionTypes$1.Delete,
				label: t("Delete", tOpts),
				color: "error"
			}, 2)]
		}
	], [t, tOpts]);
	const validationSchema = useMemo(() => yup.object({
		prefName: yup.string().trim(true).required(t("Preference Name is Required", tOpts)).max(20, t("Maximum Length is ", tOpts) + "20"),
		prefDesc: yup.string().max(100, t("Maximum Length is ", tOpts) + "100")
	}), [t, tOpts]);
	const handleOpen = (event) => setMenuAnchorEl(event?.currentTarget);
	const handleClose = () => setMenuAnchorEl(null);
	const handleDialogClose = () => {
		setDialogState(DIALOG_TYPES.NONE);
		handleClose();
	};
	const resetToDefault = () => {
		if (gridRef.current?.initialGridState) {
			gridRef.current.restoreState(gridRef.current.initialGridState);
			setCurrentPreference(null);
			if (onPreferenceChange) onPreferenceChange(null);
			handleClose();
		}
	};
	const loadPreferences = useCallback(async ({ applyDefault = false }) => {
		const response = await request({
			url: preferenceApi,
			params: {
				action: "list",
				id: preferenceKey
			},
			dataParser: DATA_PARSERS.json
		});
		if (!response?.preferences) {
			snackbar.showMessage(t("Failed to load preferences.", tOpts));
			if (onPreferenceChange) onPreferenceChange(null);
			return;
		}
		const preferences = response.preferences.filter((pref) => pref.prefName.trim() !== "");
		setPreferences(preferences);
		if (applyDefault) {
			const defaultPref = preferences.find((pref) => pref.isDefault);
			if (defaultPref) return {
				defaultPrefId: defaultPref.prefId,
				preferences
			};
			else if (onPreferenceChange) onPreferenceChange(null);
		}
		return { preferences };
	}, [
		preferenceApi,
		preferenceKey,
		snackbar,
		t,
		tOpts,
		onPreferenceChange
	]);
	const applyPreference = useCallback(async (prefId, preferencesArray = null) => {
		if (!gridRef.current?.initialGridState && gridRef.current?.exportState) gridRef.current.initialGridState = gridRef.current.exportState();
		if (prefId === 0) {
			resetToDefault();
			return;
		}
		const prefsToSearch = preferencesArray || preferences;
		if (!prefsToSearch) {
			snackbar.showMessage(t("Preferences not loaded yet.", tOpts));
			return;
		}
		const preference = prefsToSearch.find((ele) => ele.prefId === prefId);
		if (!preference?.prefValue) {
			snackbar.showMessage(t("Failed to load preference.", tOpts));
			return;
		}
		let gridState;
		try {
			gridState = typeof preference.prefValue === "string" ? JSON.parse(preference.prefValue) : preference.prefValue;
		} catch (error) {
			snackbar.showMessage(t("Failed to parse preference data.", tOpts));
			return;
		}
		gridRef.current.restoreState(gridState);
		setCurrentPreference(preference.prefName);
		if (onPreferenceChange) onPreferenceChange(preference.prefName);
		handleClose();
	}, [
		gridRef,
		resetToDefault,
		preferences,
		onPreferenceChange,
		snackbar,
		t,
		tOpts
	]);
	const savePreference = async (values) => {
		const prefName = values.prefName.trim();
		const caseInsensitivePrefName = prefName.toLocaleLowerCase();
		if (preferences.find((ele) => ele.prefName.toLocaleLowerCase() === caseInsensitivePrefName && ele.prefId !== values.prefId)) {
			setOpenPreferenceExistsModal(true);
			return;
		}
		const response = await request({
			url: preferenceApi,
			params: {
				action: "save",
				id: preferenceKey,
				prefId: values.prefId,
				prefName,
				prefDesc: values.prefDesc,
				prefValue: JSON.stringify(gridRef.current.exportState()),
				isDefault: values.isDefault
			},
			dataParser: DATA_PARSERS.json
		});
		if (response === true || response?.success === true) {
			snackbar.showMessage(t(`Preference ${dialogState === DIALOG_TYPES.ADD ? "added" : "saved"} successfully.`, tOpts));
			handleDialogClose();
			await loadPreferences({ applyDefault: false });
			return;
		}
		snackbar.showMessage(t("Error saving preference: ", tOpts) + (response?.message || t("Unknown error", tOpts)));
	};
	const deletePreference = async () => {
		const response = await request({
			url: preferenceApi,
			params: {
				action: "delete",
				id: preferenceKey,
				prefIdArray: openConfirmDeleteDialog.prefId
			},
			dataParser: DATA_PARSERS.json
		});
		if (response === true || response?.success === true) {
			snackbar.showMessage(t("Preference deleted successfully.", tOpts));
			await loadPreferences({ applyDefault: false });
			setOpenConfirmDeleteDialog({});
			return;
		}
		snackbar.showMessage(t("Error deleting preference: ", tOpts) + (response?.message || t("Unknown error", tOpts)));
	};
	const onCellClick = (cellParams) => {
		const action = cellParams.field === "editAction" ? actionTypes$1.Edit : cellParams.field === "deleteAction" ? actionTypes$1.Delete : null;
		if (cellParams.id === 0 && action) {
			snackbar.showMessage(t(`Default preference cannot be ${action === actionTypes$1.Edit ? "edited" : "deleted"}`, tOpts));
			return;
		}
		if (action === actionTypes$1.Edit) {
			setDialogState(DIALOG_TYPES.EDIT);
			formik.setValues(cellParams?.row);
		}
		if (action === actionTypes$1.Delete) setOpenConfirmDeleteDialog({
			prefId: cellParams.id,
			preferenceName: cellParams.row.prefName
		});
	};
	const openDialog = (type) => {
		setDialogState(type);
		handleClose();
		if (type === DIALOG_TYPES.ADD) formik.resetForm();
	};
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: savePreference,
		mode: "onBlur"
	});
	useEffect(() => {
		if (!preferenceKey) return;
		const loadAndApply = async () => {
			const result = await loadPreferences({ applyDefault: true });
			if (result?.defaultPrefId && result?.preferences) await applyPreference(result.defaultPrefId, result.preferences);
		};
		loadAndApply();
	}, [preferenceKey]);
	const localeText = useMemo(() => ({
		noRowsLabel: t("No rows", tOpts),
		columnMenuManageColumns: t("Manage columns", tOpts),
		columnMenuHideColumn: t("Hide column", tOpts),
		pinToLeft: t("Pin to left", tOpts),
		pinToRight: t("Pin to right", tOpts),
		columnMenuLabel: t("Menu", tOpts),
		filterPanelRemoveAll: t("Remove all", tOpts),
		columnsPanelTextFieldLabel: t("Find column", tOpts),
		columnsPanelTextFieldPlaceholder: t("Column title", tOpts),
		columnsPanelShowAllButton: t("Show all", tOpts),
		columnsPanelHideAllButton: t("Hide all", tOpts),
		booleanCellTrueLabel: t("Yes", tOpts),
		toolbarColumnsLabel: t("Select columns", tOpts),
		toolbarExportLabel: t("Export", tOpts),
		booleanCellFalseLabel: t("No", tOpts),
		paginationRowsPerPage: t("Rows per page", tOpts),
		paginationDisplayedRows: ({ from, to, count }) => `${from}–${to} ${t("of", tOpts)} ${count}`,
		toolbarQuickFilterLabel: t("Search", tOpts),
		columnsManagementSearchTitle: t("Search", tOpts),
		columnsManagementNoColumns: t("No columns", tOpts)
	}), [t, tOpts]);
	const isManageDialog = dialogState === DIALOG_TYPES.MANAGE;
	const isFormDialog = dialogState === DIALOG_TYPES.ADD || dialogState === DIALOG_TYPES.EDIT;
	return /* @__PURE__ */ jsxs(Box$1, { children: [
		/* @__PURE__ */ jsxs(Button$1, {
			id: "grid-preferences-btn",
			"aria-controls": menuAnchorEl ? "basic-menu" : void 0,
			"aria-haspopup": "true",
			"aria-expanded": menuAnchorEl ? "true" : void 0,
			onClick: handleOpen,
			title: t("Preference", tOpts),
			startIcon: /* @__PURE__ */ jsx(SettingsIcon, {}),
			children: [
				t("Preferences", tOpts),
				" ",
				currentPreference && `(${currentPreference})`
			]
		}),
		/* @__PURE__ */ jsxs(Menu, {
			id: `grid-preference-menu`,
			anchorEl: menuAnchorEl,
			open: !!menuAnchorEl,
			onClose: handleClose,
			component: List,
			dense: true,
			MenuListProps: { "aria-labelledby": "grid-preferences-btn" },
			sx: {
				"& .MuiMenu-paper": {
					minWidth: 240,
					maxHeight: 320
				},
				"& .MuiListItemSecondaryAction-root": { display: "flex" },
				"& .Mui-selected": {
					color: "text.primary",
					"&:hover": { backgroundColor: "success.main" }
				}
			},
			children: [
				/* @__PURE__ */ jsxs(MenuItem, {
					component: ListItemButton,
					dense: true,
					onClick: () => openDialog(DIALOG_TYPES.ADD),
					children: [/* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(AddIcon, {}) }), t("Add Preference", tOpts)]
				}),
				/* @__PURE__ */ jsxs(MenuItem, {
					component: ListItemButton,
					dense: true,
					onClick: () => openDialog(DIALOG_TYPES.MANAGE),
					children: [/* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(SettingsIcon, {}) }), t("Manage Preferences", tOpts)]
				}),
				gridRef.current?.initialGridState && /* @__PURE__ */ jsxs(MenuItem, {
					component: ListItemButton,
					dense: true,
					divider: preferences?.length > 0,
					onClick: () => applyPreference(0),
					children: [/* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(RefreshIcon, {}) }), t("Reset to Default", tOpts)]
				}),
				preferences?.length > 0 && preferences?.map((ele) => {
					const { prefName, prefDesc, prefId } = ele;
					return /* @__PURE__ */ jsx(MenuItem, {
						onClick: () => applyPreference(prefId),
						component: ListItem,
						selected: currentPreference === prefName,
						title: t(prefDesc, tOpts),
						dense: true,
						children: /* @__PURE__ */ jsx(ListItemText, { primary: prefName })
					}, `pref-item-${prefId}`);
				})
			]
		}),
		/* @__PURE__ */ jsxs(DialogComponent, {
			open: dialogState !== DIALOG_TYPES.NONE,
			disableRestoreFocus: true,
			title: /* @__PURE__ */ jsxs(Typography$1, {
				variant: "h5",
				children: [
					dialogState,
					" ",
					t(isManageDialog ? "Preferences" : "Preference", tOpts)
				]
			}),
			maxWidth: isManageDialog ? "md" : "sm",
			fullWidth: true,
			children: [isFormDialog && /* @__PURE__ */ jsxs(Grid, {
				component: "form",
				onSubmit: formik.handleSubmit,
				rowGap: 2,
				container: true,
				sx: { "& .MuiFormLabel-root:not(.MuiTypography-root)": {
					fontWeight: 400,
					display: "table",
					whiteSpace: "pre-wrap",
					wordWrap: "break-word"
				} },
				children: [
					/* @__PURE__ */ jsx(Grid, {
						size: 12,
						children: /* @__PURE__ */ jsx(TextField$1, {
							value: formik.values.prefName,
							variant: "outlined",
							size: "small",
							margin: "dense",
							label: /* @__PURE__ */ jsxs("span", { children: [
								t("Preference Name", tOpts),
								" ",
								/* @__PURE__ */ jsx("span", {
									style: { color: "red" },
									children: "*"
								})
							] }),
							autoFocus: true,
							name: "prefName",
							onChange: formik.handleChange,
							error: !!formik.errors.prefName,
							helperText: formik.errors.prefName,
							fullWidth: true
						})
					}),
					/* @__PURE__ */ jsx(Grid, {
						size: 12,
						children: /* @__PURE__ */ jsx(TextField$1, {
							value: formik.values.prefDesc,
							variant: "outlined",
							multiline: true,
							rows: 2,
							size: "small",
							margin: "dense",
							label: t("Preference Description", tOpts),
							name: "prefDesc",
							onChange: formik.handleChange,
							error: !!formik.errors.prefDesc,
							helperText: formik.errors.prefDesc,
							fullWidth: true
						})
					}),
					/* @__PURE__ */ jsx(Grid, {
						size: 12,
						children: /* @__PURE__ */ jsx(FormControlLabel, {
							control: /* @__PURE__ */ jsx(Checkbox, {
								checked: formik.values.isDefault,
								name: "isDefault",
								onChange: formik.handleChange
							}),
							label: t("Default", tOpts)
						})
					}),
					/* @__PURE__ */ jsx(Grid, {
						size: 12,
						children: /* @__PURE__ */ jsxs(Stack, {
							direction: "row",
							columnGap: 1,
							style: { justifyContent: "end" },
							children: [/* @__PURE__ */ jsx(Button$1, {
								type: "submit",
								size: "small",
								startIcon: /* @__PURE__ */ jsx(SaveIcon, {}),
								color: "primary",
								variant: "contained",
								disableElevation: true,
								children: t("Save", tOpts)
							}), /* @__PURE__ */ jsx(Button$1, {
								type: "button",
								startIcon: /* @__PURE__ */ jsx(CloseIcon, {}),
								color: "error",
								variant: "contained",
								size: "small",
								onClick: handleDialogClose,
								disableElevation: true,
								children: t("Close", tOpts)
							})]
						})
					})
				]
			}), isManageDialog && /* @__PURE__ */ jsxs(Grid, {
				container: true,
				rowGap: 2,
				children: [/* @__PURE__ */ jsx(Grid, {
					size: 12,
					children: /* @__PURE__ */ jsx(DataGridPremium, {
						sx: {
							"& .MuiTablePagination-selectLabel": { marginTop: 2 },
							"& .MuiTablePagination-displayedRows": { marginTop: 2 },
							"& .MuiDataGrid-columnHeader .MuiInputLabel-shrink": { display: "none" }
						},
						className: "pagination-fix",
						onCellClick,
						columns: gridColumns,
						pageSizeOptions,
						pagination: true,
						rowCount: nonDefaultPreferences.length,
						rows: nonDefaultPreferences,
						getRowId: (row) => row["GridPreferenceId"],
						slots: { headerFilterMenu: false },
						density: "compact",
						disableDensitySelector: true,
						apiRef,
						disableAggregation: true,
						disableRowGrouping: true,
						disableRowSelectionOnClick: true,
						initialState: { pagination: { paginationModel } },
						localeText
					})
				}), /* @__PURE__ */ jsx(Grid, {
					size: 12,
					children: /* @__PURE__ */ jsx(Stack, {
						direction: "row",
						columnGap: 1,
						style: { justifyContent: "end" },
						children: /* @__PURE__ */ jsx(Button$1, {
							type: "button",
							startIcon: /* @__PURE__ */ jsx(CloseIcon, {}),
							color: "error",
							variant: "contained",
							size: "small",
							onClick: handleDialogClose,
							disableElevation: true,
							children: t("Close", tOpts)
						})
					})
				})]
			})]
		}),
		/* @__PURE__ */ jsxs(DialogComponent, {
			open: openPreferenceExistsModal,
			onConfirm: () => setOpenPreferenceExistsModal(false),
			title: "",
			okText: t("Ok", tOpts),
			cancelText: "",
			children: [
				"\"",
				formik.values.prefName.trim(),
				"\": ",
				t("name already in use, please use another name.", tOpts)
			]
		}),
		/* @__PURE__ */ jsxs(DialogComponent, {
			open: !!openConfirmDeleteDialog.preferenceName,
			onConfirm: deletePreference,
			onCancel: () => setOpenConfirmDeleteDialog({}),
			title: t("Confirm delete", tOpts),
			yesNo: true,
			children: [
				t("Are you sure you wish to delete", tOpts),
				" \"",
				openConfirmDeleteDialog.preferenceName,
				"\"?"
			]
		})
	] });
};
//#endregion
//#region src/lib/components/Grid/helper.js
var convertDefaultSort = (defaultSort, constants, sortRegex) => {
	if (typeof defaultSort !== constants.string) return [];
	return defaultSort.split(",").map((sortField) => {
		sortRegex.lastIndex = 0;
		const sortInfo = sortRegex.exec(sortField);
		if (!sortInfo) return null;
		const [, field, direction = "ASC"] = sortInfo;
		return {
			field: field.trim(),
			sort: direction.trim().toLowerCase()
		};
	}).filter(Boolean);
};
var ExportMenuItem = ({ tTranslate, tOpts, handleExport, contentType, type, isPivotExport = false, icon }) => /* @__PURE__ */ jsxs(MenuItem$1, {
	onClick: handleExport,
	"data-type": type,
	"data-content-type": contentType,
	"data-is-pivot-export": isPivotExport,
	children: [/* @__PURE__ */ jsx(Box, {
		className: "grid-icons",
		sx: {
			pointerEvents: "none",
			marginTop: 1
		},
		children: icon
	}), tTranslate(type, tOpts)]
});
var CustomExportButton = ({ exportFormats, customExportOptions, isStaticDataMode = false, ...props }) => {
	const exportItems = [
		exportFormats.csv !== false && /* @__PURE__ */ jsx(ExportMenuItem, {
			...props,
			icon: /* @__PURE__ */ jsx(GridOn, { fontSize: "small" }),
			type: "CSV",
			contentType: "text/csv"
		}, "csv"),
		exportFormats.excel !== false && /* @__PURE__ */ jsx(ExportMenuItem, {
			...props,
			icon: /* @__PURE__ */ jsx(TableChart, { fontSize: "small" }),
			type: "Excel",
			contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		}, "excel"),
		!isStaticDataMode && props.showPivotExportBtn && /* @__PURE__ */ jsx(ExportMenuItem, {
			...props,
			icon: /* @__PURE__ */ jsx(TableChart, { fontSize: "small" }),
			type: "Excel With Pivot",
			contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			isPivotExport: true
		}, "pivot"),
		!isStaticDataMode && exportFormats.xml !== false && /* @__PURE__ */ jsx(ExportMenuItem, {
			...props,
			icon: /* @__PURE__ */ jsx(Code, { fontSize: "small" }),
			type: "XML",
			contentType: "text/xml"
		}, "xml"),
		!isStaticDataMode && exportFormats.html !== false && /* @__PURE__ */ jsx(ExportMenuItem, {
			...props,
			icon: /* @__PURE__ */ jsx(Language, { fontSize: "small" }),
			type: "HTML",
			contentType: "text/html"
		}, "html"),
		!isStaticDataMode && exportFormats.json !== false && /* @__PURE__ */ jsx(ExportMenuItem, {
			...props,
			icon: /* @__PURE__ */ jsx(DataObject, { fontSize: "small" }),
			type: "JSON",
			contentType: "application/json"
		}, "json"),
		!isStaticDataMode && Array.isArray(customExportOptions) && customExportOptions.map((item, index) => /* @__PURE__ */ jsx(ExportMenuItem, {
			...props,
			icon: item.icon || /* @__PURE__ */ jsx(TableChart, { fontSize: "small" }),
			type: item.label || "Excel",
			contentType: item.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			handleExport: item.handleExport || props.handleExport
		}, item.key || index))
	].flat().filter(Boolean);
	if (exportItems.length === 0) return null;
	return /* @__PURE__ */ jsx(GridToolbarExportContainer, {
		...props,
		children: exportItems
	});
};
var getDefaultOperator = (type, customOperator) => {
	if (customOperator) return customOperator;
	switch (type) {
		case "string": return "startsWith";
		case "number": return "=";
		case "date":
		case "dateTime": return "is";
		case "boolean": return "is";
		case "select":
		case "lookup": return "isAnyOf";
		default: return "startsWith";
	}
};
var areEqual = (prevProps = {}, nextProps = {}) => {
	let equal = true;
	for (const o in prevProps) if (prevProps[o] !== nextProps[o]) equal = false;
	for (const o in nextProps) if (!(o in prevProps)) equal = false;
	return equal;
};
//#endregion
//#region src/lib/components/Grid/ToolbarFilter.js
dayjs.extend(utcPlugin);
var ToolbarFilter = ({ column, filterModel, setFilterModel, lookupData, tTranslate, tOpts }) => {
	const { systemDateTimeFormat, stateData } = useStateContext();
	const { fixedFilterFormat } = utils;
	const existingFilter = useMemo(() => {
		return filterModel?.items?.find((item) => item.field === column.field);
	}, [filterModel, column.field]);
	const operator = existingFilter?.operator || column.toolbarFilter?.defaultOperator || getDefaultOperator(column.type);
	const isMultiple = operator === "isAnyOf";
	const filterValue = useMemo(() => {
		if (["isEmpty", "isNotEmpty"].includes(operator)) return "";
		if (!existingFilter) return isMultiple ? [] : "";
		const value = existingFilter.value;
		if (value === void 0 || value === null) return isMultiple ? [] : "";
		return value;
	}, [existingFilter, isMultiple]);
	const handleFilterChange = useCallback((newValue) => {
		setFilterModel((prevFilterModel) => {
			const currentItems = prevFilterModel?.items || [];
			if (newValue === "" || newValue === null || Array.isArray(newValue) && newValue.length === 0) {
				const newItems = currentItems.filter((item) => item.field !== column.field);
				return {
					...prevFilterModel,
					items: newItems
				};
			}
			const newFilter = {
				field: column.field,
				operator,
				value: newValue,
				type: column.type
			};
			const otherFilters = currentItems.filter((item) => item.field !== column.field);
			return {
				...prevFilterModel,
				items: [...otherFilters, newFilter]
			};
		});
	}, [column, setFilterModel]);
	const getOperatorLabel = useCallback((operator, type) => {
		if (type === "number") return {
			"=": "=",
			"!=": "≠",
			">": ">",
			">=": "≥",
			"<": "<",
			"<=": "≤"
		}[operator] || operator;
		if (type === "string") return {
			"contains": "contains",
			"equals": "exact match",
			"startsWith": "starts with",
			"endsWith": "ends with",
			"isEmpty": "is empty",
			"isNotEmpty": "is not empty"
		}[operator] || operator;
		return {
			"is": "is",
			"not": "is not",
			"isAnyOf": "any of",
			"after": "after",
			"onOrAfter": "on or after",
			"before": "before",
			"onOrBefore": "on or before"
		}[operator] || operator;
	}, []);
	const renderFilterInput = () => {
		const baseLabel = column.toolbarFilter?.label || column.headerName || column.label || column.field;
		const operatorLabel = getOperatorLabel(operator, column.type);
		const label = column.type === "number" || column.type === "string" && operator !== "startsWith" ? column.type === "number" ? `${operatorLabel} ${baseLabel}` : `${baseLabel} (${operatorLabel})` : baseLabel;
		switch (column.type) {
			case "string": return /* @__PURE__ */ jsx(TextField$1, {
				variant: "standard",
				label: tTranslate(label, tOpts),
				value: filterValue,
				onChange: (e) => handleFilterChange(e.target.value),
				type: "text",
				size: "small",
				sx: { minWidth: 150 }
			});
			case "number": return /* @__PURE__ */ jsx(TextField$1, {
				variant: "standard",
				label: tTranslate(label, tOpts),
				value: filterValue,
				onChange: (e) => handleFilterChange(e.target.value),
				type: "text",
				inputProps: { inputMode: "numeric" },
				size: "small",
				sx: { minWidth: 150 }
			});
			case "boolean": {
				const booleanSelectValue = filterValue === "" || filterValue === void 0 || filterValue === null ? "" : filterValue === true || filterValue === "true" ? "true" : filterValue === false || filterValue === "false" ? "false" : "";
				return /* @__PURE__ */ jsxs(FormControl, {
					variant: "standard",
					sx: { minWidth: 150 },
					children: [/* @__PURE__ */ jsx(InputLabel, { children: tTranslate(label, tOpts) }), /* @__PURE__ */ jsxs(Select, {
						value: booleanSelectValue,
						onChange: (e) => {
							const val = e.target.value;
							let newValue;
							if (val === "") newValue = "";
							else if (val === "true") newValue = true;
							else if (val === "false") newValue = false;
							else newValue = val;
							handleFilterChange(newValue);
						},
						size: "small",
						children: [
							/* @__PURE__ */ jsx(MenuItem, {
								value: "",
								children: tTranslate("All", tOpts)
							}),
							/* @__PURE__ */ jsx(MenuItem, {
								value: "true",
								children: tTranslate("True", tOpts)
							}),
							/* @__PURE__ */ jsx(MenuItem, {
								value: "false",
								children: tTranslate("False", tOpts)
							})
						]
					})]
				});
			}
			case "select":
			case "singleSelect":
			case "lookup":
				const options = column.customLookup || lookupData?.[column.lookup] || [];
				const normalizedOptions = typeof column.lookup === "string" ? options.map((option) => ({
					label: option?.label || "",
					value: option?.value ?? ""
				})) : options;
				const selectValue = utils.normalizeFilterValue({
					value: filterValue,
					operator,
					isMultiple
				});
				const displayLimit = 1;
				return /* @__PURE__ */ jsxs(FormControl, {
					variant: "standard",
					sx: { minWidth: 150 },
					children: [/* @__PURE__ */ jsx(InputLabel, { children: tTranslate(label, tOpts) }), /* @__PURE__ */ jsx(Select, {
						value: selectValue,
						onChange: (e) => handleFilterChange(e.target.value),
						multiple: isMultiple,
						size: "small",
						renderValue: (selected) => {
							const labels = (Array.isArray(selected) ? selected : selected != null && selected !== "" ? [selected] : []).map((v) => {
								if (v && typeof v === "object" && "label" in v) return tTranslate(v.label, tOpts);
								const opt = normalizedOptions.find((o) => String(o.value) === String(v));
								return opt ? tTranslate(opt.label, tOpts) : "";
							}).filter(Boolean);
							if (labels.length === 0) return "";
							if (labels.length <= displayLimit) return labels.join(", ");
							const firstTwo = labels.slice(0, displayLimit).join(", ");
							const remaining = labels.length - displayLimit;
							return /* @__PURE__ */ jsx(Tooltip, {
								title: labels.join(", "),
								placement: "top",
								children: /* @__PURE__ */ jsx("span", { children: `${firstTwo} +${remaining}` })
							});
						},
						children: normalizedOptions.map((option) => /* @__PURE__ */ jsx(MenuItem, {
							value: option.value,
							children: tTranslate(option.label, tOpts)
						}, option.value))
					})]
				});
			case "date":
			case "dateTime":
				const columnType = column.type;
				const filterFormat = fixedFilterFormat[columnType];
				const format = systemDateTimeFormat(columnType === "date", false, stateData.dateTime);
				const DateComponent = columnType === "dateTime" ? DateTimePicker$1 : DatePicker$1;
				let dateValue = null;
				if (filterValue) {
					const parsedDate = dayjs(filterValue);
					dateValue = parsedDate.isValid() ? parsedDate : null;
				}
				return /* @__PURE__ */ jsx(LocalizationProvider, {
					dateAdapter: AdapterDayjs,
					children: /* @__PURE__ */ jsx(DateComponent, {
						label: tTranslate(label, tOpts),
						format,
						value: dateValue,
						onChange: (newValue) => {
							if (!newValue || !newValue.isValid()) handleFilterChange(null);
							else handleFilterChange(newValue.format(filterFormat));
						},
						slotProps: { textField: {
							variant: "standard",
							size: "small",
							sx: { minWidth: 150 }
						} }
					})
				});
			default: return /* @__PURE__ */ jsx(TextField$1, {
				variant: "standard",
				label: tTranslate(label, tOpts),
				value: filterValue,
				onChange: (e) => handleFilterChange(e.target.value),
				size: "small",
				sx: { minWidth: 150 }
			});
		}
	};
	return renderFilterInput();
};
//#endregion
//#region src/lib/components/Grid/CustomToolbar.js
var ButtonWithMargin = styled$1(Button)({ margin: "6px" });
var GridToolBar = styled$1(Toolbar)({
	display: "flex",
	alignItems: "center",
	gap: "1.5rem",
	flexWrap: "nowrap",
	whiteSpace: "nowrap",
	minHeight: "auto",
	borderBottom: "none"
});
var CustomToolbar = function(props) {
	const { model, data, currentPreference, isReadOnly, canAdd, forAssignment, showAddIcon, onAdd, selectionApi, rowSelectionModel, selectAll, available, onAssign, assigned, onUnassign, effectivePermissions, clearFilters, handleExport, preferenceKey, apiRef, tTranslate, tOpts, filterModel, setFilterModel, onPreferenceChange, toolbarItems, gridColumns, customExportOptions, isStaticDataMode } = props;
	const addText = model.customAddText || (model.title ? `Add ${model.title}` : "Add");
	const hasNonEmptyValue = (value) => value !== null && value !== void 0 && value !== "" && !(Array.isArray(value) && value.length === 0);
	const filterValidItems = (items = []) => items.filter((item) => ["isEmpty", "isNotEmpty"].includes(item.operator) || hasNonEmptyValue(item.value));
	const activeFilterCount = filterValidItems(filterModel?.items || []).length || 0;
	const toolbarFilterColumns = gridColumns?.filter((col) => col.toolbarFilter) || [];
	const lookupData = data?.lookups || {};
	const records = data?.records || [];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			justifyContent: "space-between",
			padding: "10px"
		},
		children: [/* @__PURE__ */ jsxs("div", { children: [
			model.gridSubTitle && /* @__PURE__ */ jsxs(Typography, {
				variant: "h6",
				component: "h3",
				textAlign: "center",
				sx: { ml: 1 },
				children: [" ", tTranslate(model.gridSubTitle, tOpts)]
			}),
			currentPreference && model.showPreferenceInHeader && /* @__PURE__ */ jsxs(Typography, {
				className: "preference-name-text",
				variant: "h6",
				component: "h6",
				textAlign: "center",
				sx: { ml: 1 },
				children: [
					tTranslate("Applied Preference", tOpts),
					": ",
					currentPreference
				]
			}),
			(isReadOnly || !canAdd && !forAssignment) && /* @__PURE__ */ jsxs(Typography, {
				variant: "h6",
				component: "h3",
				textAlign: "center",
				sx: { ml: 1 },
				children: [" ", !canAdd || isReadOnly ? "" : model.title]
			}),
			!forAssignment && canAdd && !isReadOnly && /* @__PURE__ */ jsx(ButtonWithMargin, {
				startIcon: !showAddIcon ? null : /* @__PURE__ */ jsx(AddIcon, {}),
				onClick: onAdd,
				size: "medium",
				variant: "contained",
				children: tTranslate(addText, tOpts)
			}),
			Boolean(props.headerActions) && props.headerActions,
			selectionApi.length && records.length ? /* @__PURE__ */ jsx(ButtonWithMargin, {
				onClick: selectAll,
				size: "medium",
				variant: "contained",
				children: rowSelectionModel.ids.size === records.length ? tTranslate("Deselect All", tOpts) : tTranslate("Select All", tOpts)
			}) : /* @__PURE__ */ jsx(Fragment, {}),
			available && /* @__PURE__ */ jsx(ButtonWithMargin, {
				startIcon: !showAddIcon ? null : /* @__PURE__ */ jsx(AddIcon, {}),
				onClick: onAssign,
				size: "medium",
				variant: "contained",
				children: tTranslate("Assign", tOpts)
			}),
			assigned && /* @__PURE__ */ jsx(ButtonWithMargin, {
				startIcon: !showAddIcon ? null : /* @__PURE__ */ jsx(RemoveIcon, {}),
				onClick: onUnassign,
				size: "medium",
				variant: "contained",
				children: tTranslate("Remove", tOpts)
			})
		] }), /* @__PURE__ */ jsxs(GridToolBar, {
			...props,
			children: [
				effectivePermissions.showColumnsOrder && /* @__PURE__ */ jsx(ColumnsPanelTrigger, { render: (triggerProps) => /* @__PURE__ */ jsx(Button, {
					...triggerProps,
					startIcon: /* @__PURE__ */ jsx(ViewColumnIcon, {}),
					size: "small",
					variant: "text",
					children: tTranslate("COLUMNS", tOpts)
				}) }),
				effectivePermissions.filter && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(FilterPanelTrigger, { render: (triggerProps) => /* @__PURE__ */ jsx(Button, {
					...triggerProps,
					startIcon: /* @__PURE__ */ jsx(Badge, {
						badgeContent: activeFilterCount,
						color: "primary",
						children: /* @__PURE__ */ jsx(FilterListIcon, {})
					}),
					size: "small",
					variant: "text",
					children: tTranslate("FILTERS", tOpts)
				}) }), /* @__PURE__ */ jsx(Button, {
					startIcon: /* @__PURE__ */ jsx(FilterListOffIcon, {}),
					onClick: clearFilters,
					size: "small",
					children: tTranslate("CLEAR FILTER", tOpts)
				})] }),
				effectivePermissions.export && /* @__PURE__ */ jsx(CustomExportButton, {
					handleExport,
					showPivotExportBtn: model.pivotApi,
					exportFormats: model.exportFormats || {},
					customExportOptions,
					tTranslate,
					tOpts,
					isStaticDataMode
				}),
				toolbarItems,
				preferenceKey && /* @__PURE__ */ jsx(GridPreferences, {
					gridRef: apiRef,
					preferenceKey,
					onPreferenceChange,
					t: tTranslate,
					tOpts
				})
			]
		})]
	}), /* @__PURE__ */ jsx(Box$1, {
		sx: {
			display: "flex",
			justifyContent: "flex-start",
			padding: "0 10px 10px 10px"
		},
		children: toolbarFilterColumns.length > 0 && /* @__PURE__ */ jsx("div", {
			style: {
				display: "flex",
				gap: "1rem",
				alignItems: "center",
				flexWrap: "wrap"
			},
			children: toolbarFilterColumns.map((column) => /* @__PURE__ */ jsx(ToolbarFilter, {
				column,
				filterModel,
				setFilterModel,
				lookupData,
				tTranslate,
				tOpts
			}, column.field))
		})
	})] });
};
//#endregion
//#region src/lib/hooks/useModelTranslation.js
/**
* Custom hook for handling translations in components that work with UiModel.
* Consolidates the translation initialization pattern used across Form, Grid, and field components.
*
* @param {Object} model - The UiModel instance that may contain a custom tTranslate function
* @returns {Object} Translation utilities { translate, i18n, tOpts, tTranslate }
*/
function useModelTranslation(model) {
	const { t: translate, i18n } = useTranslation();
	return {
		translate,
		i18n,
		tOpts: React.useMemo(() => ({
			t: translate,
			i18n
		}), [translate, i18n]),
		tTranslate: model?.tTranslate ?? ((key) => key)
	};
}
//#endregion
//#region src/lib/components/Grid/index.js
var defaultPageSize = 50;
var sortRegex = /(\w+)( ASC| DESC)?/i;
var recordCounts = 6e4;
var exportPage = 0;
var exportPageSize = 1e6;
var actionTypes = {
	Copy: "Copy",
	Edit: "Edit",
	Delete: "Delete",
	History: "History",
	Download: "Download"
};
var iconMapper = {
	"article": /* @__PURE__ */ jsx(ArticleIcon, {}),
	"edit": /* @__PURE__ */ jsx(EditIcon, {}),
	"copy": /* @__PURE__ */ jsx(CopyIcon, {}),
	"delete": /* @__PURE__ */ jsx(DeleteIcon, {}),
	"history": /* @__PURE__ */ jsx(HistoryIcon, {}),
	"download": /* @__PURE__ */ jsx(FileDownloadIcon, {})
};
var constants = {
	gridFilterModel: {
		items: [],
		logicOperator: "and",
		quickFilterValues: Array(0),
		quickFilterLogicOperator: "and"
	},
	permissions: {
		edit: true,
		add: true,
		export: true,
		delete: true,
		showColumnsOrder: true,
		filter: true
	},
	client: "client",
	server: "server",
	object: "object",
	startDate: "startDate",
	endDate: "endDate",
	oneToMany: "oneToMany",
	lookup: "lookup",
	Number: "number",
	string: "string",
	boolean: "boolean",
	right: "right",
	left: "left",
	dateTime: "dateTime",
	actions: "actions",
	function: "function",
	pageSizeOptions: [
		5,
		10,
		20,
		50,
		100
	],
	defaultActionWidth: 50
};
var NO_VALUE_OPERATORS = ["isEmpty", "isNotEmpty"];
var EMPTY_SORT_MODEL = Object.freeze([]);
var EMPTY_FILTER_MODEL = Object.freeze({
	items: [],
	logicOperator: "and",
	quickFilterValues: [],
	quickFilterLogicOperator: "and"
});
var LOCAL_MODE_PAGINATION_MODEL = Object.freeze({
	page: 0,
	pageSize: exportPageSize
});
var defaultTranslate = (key) => key;
var normalizeStaticData = (staticData) => {
	const records = Array.isArray(staticData) ? staticData : Array.isArray(staticData?.records) ? staticData.records : [];
	return {
		records,
		recordCount: Number.isFinite(staticData?.recordCount) ? staticData.recordCount : records.length,
		lookups: staticData && typeof staticData.lookups === "object" && staticData.lookups !== null && !Array.isArray(staticData.lookups) ? staticData.lookups : {}
	};
};
var filterValidItems = (items) => {
	return (items || []).filter((item) => {
		if (NO_VALUE_OPERATORS.includes(item.operator)) return true;
		return item.value !== null && item.value !== void 0 && item.value !== "";
	});
};
var auditColumnMappings = [
	{
		key: "addCreatedOnColumn",
		field: "CreatedOn",
		type: "dateTime",
		header: "Created On"
	},
	{
		key: "addCreatedByColumn",
		field: "CreatedByUser",
		type: "string",
		header: "Created By"
	},
	{
		key: "addModifiedOnColumn",
		field: "ModifiedOn",
		type: "dateTime",
		header: "Modified On"
	},
	{
		key: "addModifiedByColumn",
		field: "ModifiedByUser",
		type: "string",
		header: "Modified By"
	}
];
var booleanIconRenderer = (params) => {
	if (params.value) return /* @__PURE__ */ jsx(CheckIcon, { style: { color: "green" } });
	else return /* @__PURE__ */ jsx(CloseIcon, { style: { color: "gray" } });
};
var gridGroupByColumnName = ["__row_group_by_columns_group__", "__detail_panel_toggle__"];
var DeleteContentText = styled$1("span")({
	width: "100%",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis"
});
var CustomCheckBox = ({ params, handleSelectRow, idProperty }) => {
	const apiRef = useGridApiContext();
	const rowId = params.row[idProperty];
	const isChecked = useGridSelector(apiRef, gridRowSelectionStateSelector)?.ids?.has(rowId) ?? false;
	const handleCheckboxClick = (event) => {
		event.stopPropagation();
		handleSelectRow({ row: params.row });
	};
	return /* @__PURE__ */ jsx(Checkbox$1, {
		onClick: handleCheckboxClick,
		checked: isChecked,
		color: "primary",
		value: rowId,
		inputProps: { "aria-label": "checkbox" }
	});
};
var GridBase = memo(({ model, columns, api, defaultSort, setActiveRecord, parentFilters, parent, where, title, showPageTitle, permissions, selected, assigned, available, disableCellRedirect = false, onAssignChange, customStyle, onCellClick, showRowsSelected, showFullScreenLoader, customFilters, onRowDoubleClick, onRowClick = () => {}, gridStyle, reRenderKey, additionalFilters, onCellDoubleClickOverride, onAddOverride, dynamicColumns, toolbarItems, readOnly = false, onListParamsChange, apiRef: propsApiRef, baseFilters, customExportOptions, sx: propsSx, ...props }) => {
	const staticDataSource = props.staticData ?? model.staticData;
	const hasStaticData = Array.isArray(staticDataSource) || Array.isArray(staticDataSource?.records);
	const normalizedStaticData = useMemo(() => hasStaticData ? normalizeStaticData(staticDataSource) : null, [hasStaticData, staticDataSource]);
	const [paginationModel, setPaginationModel] = useState({
		pageSize: defaultPageSize,
		page: 0
	});
	const [data, setData] = useState(() => normalizedStaticData || {
		recordCount: 0,
		records: null,
		lookups: {}
	});
	const forAssignment = !!onAssignChange;
	const rowsSelected = showRowsSelected;
	const [rowSelectionModel, setRowSelectionModel] = useState({
		type: "include",
		ids: /* @__PURE__ */ new Set()
	});
	const [isDeleting, setIsDeleting] = useState(false);
	const [record, setRecord] = useState(null);
	const visibilityModel = {
		CreatedOn: false,
		CreatedByUser: false,
		...model.columnVisibilityModel
	};
	const [showAddConfirmation, setShowAddConfirmation] = useState(false);
	const snackbar = useSnackbar();
	const paginationMode = hasStaticData || model.localSortAndFilter ? constants.client : model.paginationMode === constants.client ? constants.client : constants.server;
	const { translate, tOpts } = useModelTranslation(model);
	const [errorMessage, setErrorMessage] = useState("");
	const [sortModel, setSortModel] = useState(convertDefaultSort(defaultSort || model.defaultSort, constants, sortRegex));
	const initialFilterModel = {
		items: [],
		logicOperator: "and",
		quickFilterValues: Array(0),
		quickFilterLogicOperator: "and"
	};
	if (model.defaultFilters) {
		initialFilterModel.items = [];
		model.defaultFilters.forEach((ele) => {
			initialFilterModel.items.push(ele);
		});
	}
	const [filterModel, setFilterModel] = useState({ ...initialFilterModel });
	const { navigate, getParams, useParams, pathname } = useRouter();
	const { id: idWithOptions } = useParams() || getParams;
	const id = idWithOptions?.split("-")[0];
	const apiRef = propsApiRef || useGridApiRef();
	const backendApi = api || model.api;
	const isStaticDataWithoutBackendApi = hasStaticData && !backendApi;
	const { idProperty = "id", showHeaderFilters = true, disableRowSelectionOnClick = true, hideTopFilters = true, updatePageTitle = true, isElasticScreen = false, navigateBack = false, selectionApi = {}, debounceTimeOut = 300, showFooter = true, disableRowGrouping = true, localSortAndFilter = false } = model;
	const sortAndFilterMode = hasStaticData || localSortAndFilter ? constants.client : paginationMode;
	const sortModelForFetch = localSortAndFilter ? EMPTY_SORT_MODEL : sortModel;
	const filterModelForFetch = localSortAndFilter ? EMPTY_FILTER_MODEL : filterModel;
	const paginationModelForFetch = localSortAndFilter ? LOCAL_MODE_PAGINATION_MODEL : paginationModel;
	const isReadOnly = model.readOnly === true || readOnly || isStaticDataWithoutBackendApi;
	const isDoubleClicked = model.allowDoubleClick === false;
	const dataRef = useRef(data);
	const fetchAbortControllerRef = useRef(null);
	useEffect(() => () => {
		fetchAbortControllerRef.current?.abort();
		fetchAbortControllerRef.current = null;
	}, []);
	const showAddIcon = model.showAddIcon === true;
	const toLink = model.columns.filter(({ link }) => Boolean(link)).map((item) => item.link);
	const { stateData, formatDate, getApiEndpoint, buildUrl, setPageTitle } = useStateContext();
	const [isLoading, setIsLoading] = useState(false);
	const { timeZone } = stateData;
	const effectivePermissions = useMemo(() => ({
		...constants.permissions,
		...model.permissions,
		...permissions
	}), [model.permissions, permissions]);
	const emptyIsAnyOfOperatorFilters = [
		"isEmpty",
		"isNotEmpty",
		"isAnyOf"
	];
	const userData = stateData.userData || {};
	const documentField = model.columns.find((ele) => ele.type === "fileUpload")?.field || "";
	const { canAdd, canEdit, canDelete } = getPermissions({
		userData,
		model,
		userDefinedPermissions: {
			add: effectivePermissions.add,
			edit: effectivePermissions.edit,
			delete: effectivePermissions.delete
		}
	});
	const tTranslate = useMemo(() => model.tTranslate ?? defaultTranslate, [model.tTranslate]);
	const { addUrlParamKey, searchParamKey, hideBreadcrumb = false, tableName, showHistory = true, hideBreadcrumbInGrid = false, breadcrumbColor, disablePivoting = false, columnHeaderHeight = 70, disablePagination = false } = model;
	const gridTitle = model.gridTitle || model.title;
	const preferenceKey = getApiEndpoint("GridPreferenceManager") ? model.preferenceId || model.module?.preferenceId : null;
	const searchParams = new URLSearchParams(window.location.search);
	const [currentPreference, setCurrentPreference] = useState(null);
	const [preferencesReady, setPreferencesReady] = useState(!preferenceKey);
	const backendApiRequiredMessage = tTranslate("This action requires an API endpoint.", tOpts);
	const [rowPanelId, setRowPanelId] = useState(null);
	const detailPanelExpandedRowIds = useMemo(() => new Set(rowPanelId ? [rowPanelId] : []), [rowPanelId]);
	const enableRowDetailPanel = typeof model.getDetailPanelContent === "function";
	const [groupingModel, setGroupingModel] = useState([]);
	useEffect(() => {
		if (!apiRef.current) return;
		apiRef.current.prefKey = preferenceKey;
	}, [apiRef, preferenceKey]);
	const onPreferenceChange = useCallback((preferenceName) => {
		setCurrentPreference(preferenceName);
		setPreferencesReady(true);
	}, []);
	const columnGroupingModel = useMemo(() => {
		if (!model.columnGroupingModel) return [];
		return model.columnGroupingModel.map((group) => ({
			...group,
			headerName: group.headerName ? tTranslate(group.headerName, tOpts) : group.headerName
		}));
	}, [
		model.columnGroupingModel,
		tOpts,
		translate,
		tTranslate
	]);
	useEffect(() => {
		if (Array.isArray(props.rowGroupingField)) setGroupingModel(props.rowGroupingField);
		else setGroupingModel([]);
	}, [props.rowGroupingField]);
	const baseDataFromParams = searchParams.has("baseData") && searchParams.get("baseData");
	const baseSaveData = useMemo(() => {
		if (baseDataFromParams) try {
			const parsedData = JSON.parse(baseDataFromParams);
			if (typeof parsedData === constants.object && parsedData !== null) return parsedData;
		} catch (error) {
			console.error("Failed to parse baseData from URL:", error);
		}
		return {};
	}, [baseDataFromParams]);
	const handleSelectRow = useCallback(({ row }) => {
		const rowId = row[idProperty];
		setRowSelectionModel((prevModel) => {
			const newIds = new Set(prevModel?.ids || []);
			if (newIds.has(rowId)) newIds.delete(rowId);
			else newIds.add(rowId);
			return {
				type: "include",
				ids: newIds
			};
		});
	}, [idProperty]);
	const gridColumnTypes = {
		"radio": {
			"type": "singleSelect",
			"valueOptions": "lookup"
		},
		"date": {
			"valueFormatter": (value, row, column) => formatDate({
				value,
				useSystemFormat: true,
				showOnlyDate: false,
				state: stateData.dateTime
			}),
			"filterOperators": localizedDateFormat({ columnType: "date" })
		},
		"dateTime": {
			"valueFormatter": (value, row, column) => formatDate({
				value,
				useSystemFormat: false,
				showOnlyDate: false,
				state: stateData.dateTime
			}),
			"filterOperators": localizedDateFormat({ columnType: "dateTime" })
		},
		"boolean": { renderCell: booleanIconRenderer },
		"select": {
			"type": "singleSelect",
			"valueOptions": "lookup"
		},
		"lookup": {
			"type": "singleSelect",
			"valueOptions": "lookup"
		},
		"selection": { renderCell: (params) => /* @__PURE__ */ jsx(CustomCheckBox, {
			params,
			handleSelectRow,
			idProperty
		}) }
	};
	useEffect(() => {
		dataRef.current = data;
		if (typeof props.onDataLoaded === "function") props.onDataLoaded(data);
	}, [data]);
	useEffect(() => {
		if (hasStaticData) {
			setData(normalizedStaticData);
			return;
		}
		setData((prevData) => ({
			...prevData || {},
			records: [],
			recordCount: 0,
			lookups: {}
		}));
	}, [hasStaticData, normalizedStaticData]);
	useEffect(() => {
		if (!customFilters || !Object.keys(customFilters).length) return;
		if (customFilters.clear) {
			setFilterModel({
				items: [],
				logicOperator: "and",
				quickFilterValues: [],
				quickFilterLogicOperator: "and"
			});
			return;
		}
		setFilterModel({
			items: Object.entries(customFilters).reduce((acc, [key, value]) => {
				if (key === constants.startDate || key === constants.endDate) acc.push(value);
				else if (key in customFilters) acc.push({
					field: key,
					value,
					operator: "equals",
					type: "string"
				});
				return acc;
			}, []),
			logicOperator: "and",
			quickFilterValues: [],
			quickFilterLogicOperator: "and"
		});
	}, [customFilters]);
	const lookupOptions = useCallback(({ field, lookupMap: lookupMapParam }) => {
		const lookupData = dataRef.current.lookups || {};
		const map = lookupMapParam || {};
		return map[field]?.customLookup || lookupData[map[field]?.lookup] || [];
	}, []);
	useEffect(() => {
		if (props.isChildGrid || !hideTopFilters) return;
	}, [props.isChildGrid, hideTopFilters]);
	const createAction = useCallback(({ key, title, icon, color = "primary", disabled, otherProps }) => /* @__PURE__ */ jsx(GridActionsCellItem, {
		icon: /* @__PURE__ */ jsx(Tooltip, {
			title: tTranslate(title, tOpts),
			children: iconMapper[icon] || icon || tTranslate(title, tOpts)
		}),
		"data-action": key,
		label: tTranslate(title, tOpts),
		color,
		disabled,
		...otherProps
	}, key), [
		translate,
		tOpts,
		tTranslate
	]);
	const { customActions = [] } = model;
	const actionConfig = useMemo(() => {
		const actions = [];
		if (!forAssignment && !isReadOnly) actions.push({
			key: actionTypes.Edit,
			title: "Edit",
			icon: "edit",
			show: !!canEdit,
			disabled: (row) => row.canEdit === false
		}, {
			key: actionTypes.Copy,
			title: "Copy",
			icon: "copy",
			show: !!effectivePermissions.copy
		}, {
			key: actionTypes.Delete,
			title: "Delete",
			icon: "delete",
			color: "error",
			show: !!canDelete
		}, {
			key: actionTypes.History,
			title: "History",
			icon: "history",
			show: !!showHistory
		}, ...customActions);
		actions.push({
			key: actionTypes.Download,
			title: "Download document",
			icon: "download",
			show: documentField.length > 0
		});
		return actions.filter(({ show }) => show !== false);
	}, [
		forAssignment,
		isReadOnly,
		canEdit,
		canDelete,
		showHistory,
		effectivePermissions.copy,
		documentField.length,
		customActions
	]);
	const getActions = useCallback(({ row }) => actionConfig.map(({ key, title, icon, color, disabled, show, action, ...otherProps }) => createAction({
		key,
		title: title || action,
		icon,
		color,
		disabled: disabled?.(row),
		otherProps
	})), [actionConfig, createAction]);
	const lookupKeys = useMemo(() => {
		const lookups = data?.lookups || {};
		return Object.keys(lookups).sort().join(",");
	}, [data?.lookups]);
	const { gridColumns, pinnedColumns, lookupMap } = useMemo(() => {
		let baseColumnList = columns || model.gridColumns || model.columns;
		if (dynamicColumns) baseColumnList = [...dynamicColumns, ...baseColumnList];
		const pinnedColumns = {
			left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
			right: []
		};
		const finalColumns = [];
		const lookupMap = {};
		const updatedColumnType = {
			...gridColumnTypes,
			...model.gridColumnTypes
		};
		for (const column of baseColumnList) {
			if (column.gridLabel === null || parent && column.lookup === parent || column.type === constants.oneToMany && column.countInList === false) continue;
			const overrides = {};
			if (column.type === constants.oneToMany) {
				overrides.type = "number";
				overrides.field = column.field.replace(/s$/, "Count");
			}
			if (updatedColumnType[column.type]) Object.assign(overrides, updatedColumnType[column.type]);
			if (overrides.valueOptions === constants.lookup) overrides.valueOptions = (params) => lookupOptions({
				...params,
				lookupMap
			});
			if (column.linkTo || column.link) overrides.cellClassName = "mui-grid-linkColumn";
			if (column.hyperlinkURL && !column.renderCell) {
				const { hyperlinkURL, hyperlinkIndex } = column;
				overrides.renderCell = (params) => {
					const { value, formattedValue, row } = params;
					if (value === null || value === void 0 || value === "") return value;
					const urlValue = hyperlinkIndex ? row[hyperlinkIndex] : value;
					return /* @__PURE__ */ jsx("a", {
						href: hyperlinkURL.replace("{0}", encodeURIComponent(String(urlValue))),
						rel: "noopener noreferrer",
						target: "_blank",
						children: formattedValue ?? value
					});
				};
			}
			if (!disableRowGrouping) overrides.groupable = column.groupable ?? false;
			const headerName = tTranslate((typeof column.gridLabel === "function" ? column.gridLabel({
				column,
				t: tTranslate,
				tOpts
			}) : column.gridLabel) || column.label, tOpts);
			finalColumns.push({
				...column,
				...overrides,
				headerName,
				description: headerName
			});
			if (column.pinned) pinnedColumns[column.pinned === constants.right ? constants.right : constants.left].push(column.field);
			lookupMap[column.field] = column;
		}
		let auditColumns = model.standard;
		if (auditColumns === true) auditColumns = {
			addCreatedOnColumn: true,
			addCreatedByColumn: true,
			addModifiedOnColumn: true,
			addModifiedByColumn: true
		};
		if (auditColumns && typeof auditColumns === constants.object) auditColumnMappings.forEach(({ key, field, type, header }) => {
			if (auditColumns[key] === true) {
				const column = {
					field,
					type,
					headerName: tTranslate(header, tOpts),
					width: 200
				};
				if (updatedColumnType && updatedColumnType[column.type]) Object.assign(column, updatedColumnType[column.type]);
				if (type === constants.dateTime) {
					column.filterOperators = localizedDateFormat({ columnType: "dateTime" });
					column.valueFormatter = gridColumnTypes.dateTime.valueFormatter;
					column.localize = true;
				}
				finalColumns.push(column);
			}
		});
		if (actionConfig.length) {
			finalColumns.push({
				field: "actions",
				type: "actions",
				width: (model.actionWidth ?? constants.defaultActionWidth) * actionConfig.length,
				hidable: false,
				getActions,
				headerName: tTranslate("Actions", tOpts)
			});
			pinnedColumns.right.push("actions");
		}
		return {
			gridColumns: finalColumns,
			pinnedColumns,
			lookupMap
		};
	}, [
		columns,
		model,
		parent,
		permissions,
		forAssignment,
		dynamicColumns,
		translate,
		stateData?.dateTime,
		lookupKeys
	]);
	const hasInitializedRef = useRef(false);
	useEffect(() => {
		if (hasInitializedRef.current) return;
		const toolbarFilterColumns = gridColumns?.filter((col) => col.toolbarFilter?.defaultFilterValue !== void 0) || [];
		if (toolbarFilterColumns.length === 0) return;
		if (filterModel.items.some((item) => toolbarFilterColumns.some((col) => col.field === item.field))) {
			hasInitializedRef.current = true;
			return;
		}
		const toolbarFilters = toolbarFilterColumns.map((col) => {
			const operator = getDefaultOperator(col.type, col.toolbarFilter?.defaultOperator);
			const normalizedValue = utils.normalizeFilterValue({
				operator,
				value: col.toolbarFilter.defaultFilterValue
			});
			return {
				field: col.field,
				operator,
				value: normalizedValue,
				type: col.type
			};
		}).filter((f) => {
			const v = f.value;
			return !(Array.isArray(v) && v.length === 0);
		});
		if (toolbarFilters.length > 0) setFilterModel((prev) => ({
			...prev,
			items: [...prev.items, ...toolbarFilters]
		}));
		hasInitializedRef.current = true;
	}, [gridColumns]);
	const fetchData = useCallback(async ({ action = "list", extraParams = {}, isPivotExport = false, contentType, columns } = {}) => {
		if (hasStaticData) {
			if (!contentType) setData(normalizedStaticData);
			return;
		}
		const { pageSize, page } = paginationModelForFetch;
		const isExportRequest = Boolean(contentType);
		const baseUrl = buildUrl(isPivotExport ? model.pivotApi : backendApi);
		const filters = {
			...filterModelForFetch,
			items: filterValidItems(filterModelForFetch.items)
		};
		const finalBaseFilters = Array.isArray(baseFilters) ? [...baseFilters] : [];
		if (model.joinColumn && id) finalBaseFilters.push({
			field: model.joinColumn,
			operator: "is",
			type: "number",
			value: Number(id)
		});
		if (additionalFilters) filters.items = [...filters.items || [], ...additionalFilters];
		const mergedBaseFilters = [];
		if (Array.isArray(finalBaseFilters)) mergedBaseFilters.push(...finalBaseFilters);
		if (Array.isArray(parentFilters)) mergedBaseFilters.push(...parentFilters);
		const mergedExtraParams = {
			...extraParams,
			...props.extraParams
		};
		if (assigned || available) mergedExtraParams[assigned ? "include" : "exclude"] = Array.isArray(selected) ? selected.join(",") : selected;
		if (isPivotExport) {
			if (model.exportTemplate) mergedExtraParams.template = model.exportTemplate;
			if (model.configFileName) mergedExtraParams.configFileName = model.configFileName;
		}
		if (!(!filters.items.length || filters.items.every((item) => "value" in item && item.value !== void 0))) return;
		let signal = null;
		let controller = null;
		if (!isExportRequest) {
			if (fetchAbortControllerRef.current) fetchAbortControllerRef.current.abort();
			controller = new AbortController();
			fetchAbortControllerRef.current = controller;
			signal = controller.signal;
		}
		const listParams = {
			action,
			page: isExportRequest ? exportPage : page,
			pageSize: isExportRequest ? exportPageSize : pageSize,
			sortModel: sortModelForFetch,
			filterModel: filters,
			gridColumns,
			model,
			baseFilters: mergedBaseFilters,
			api: baseUrl,
			extraParams: mergedExtraParams
		};
		if (typeof onListParamsChange === "function") onListParamsChange(listParams);
		apiRef.current.listParams = listParams;
		if (!isExportRequest) setIsLoading(true);
		try {
			const result = await getList({
				...listParams,
				contentType,
				columns,
				signal
			});
			if (!isExportRequest && result !== void 0 && fetchAbortControllerRef.current === controller) {
				if (result?.aborted) return;
				setData(result);
			}
		} catch (error) {
			if (error?.aborted || error?.name === "AbortError" || controller?.signal?.aborted) return;
			snackbar.showError(tTranslate("An error occurred while fetching data", tOpts));
			if (!isExportRequest) setData((prevData) => ({
				...prevData,
				records: [],
				recordCount: 0
			}));
		} finally {
			if (!isExportRequest && fetchAbortControllerRef.current === controller) setIsLoading(false);
		}
	}, [
		hasStaticData,
		normalizedStaticData,
		paginationModelForFetch,
		buildUrl,
		model,
		backendApi,
		filterModelForFetch,
		baseFilters,
		id,
		assigned,
		available,
		selected,
		props.extraParams,
		sortModelForFetch,
		gridColumns,
		parentFilters,
		onListParamsChange,
		apiRef,
		getList,
		snackbar,
		additionalFilters,
		tTranslate,
		tOpts
	]);
	const openForm = useCallback(async ({ id, record = {}, mode }) => {
		if (setActiveRecord) {
			if (isStaticDataWithoutBackendApi) {
				snackbar.showError(backendApiRequiredMessage);
				return;
			}
			try {
				setActiveRecord(await getRecord({
					id,
					api: buildUrl(backendApi),
					model,
					parentFilters,
					where
				}));
			} catch (error) {
				snackbar.showError(tTranslate("Could not load record", tOpts));
			}
			return;
		}
		let path = pathname;
		if (!path.endsWith("/")) path += "/";
		if (mode === "copy") path += "0-" + id;
		else path += id;
		if (addUrlParamKey) {
			searchParams.set(addUrlParamKey, record[addUrlParamKey]);
			path += `?${searchParams.toString()}`;
		}
		navigate(path);
	}, [
		setActiveRecord,
		isStaticDataWithoutBackendApi,
		backendApi,
		backendApiRequiredMessage,
		model,
		parentFilters,
		where,
		pathname,
		addUrlParamKey,
		searchParams,
		navigate,
		getRecord,
		buildUrl,
		snackbar,
		tTranslate,
		tOpts
	]);
	const handleDownload = useCallback(({ documentLink }) => {
		if (!documentLink) return;
		window.open(documentLink, "_blank");
	}, []);
	const onCellClickHandler = useCallback(async (cellParams, event, details) => {
		let action = cellParams.field === model.linkColumn ? actionTypes.Edit : null;
		if (!action && cellParams.field === constants.actions) {
			action = details?.action;
			if (!action) {
				const el = event.target.closest("button");
				if (el) action = el.dataset.action;
			}
		}
		const { row: record } = cellParams;
		if (!isReadOnly) {
			if (onCellClick) {
				if (typeof await onCellClick({
					cellParams,
					event,
					details
				}) !== constants.boolean) return;
			}
			const columnConfig = lookupMap[cellParams.field] || {};
			if (columnConfig.linkTo) {
				navigate({ pathname: template_default.replaceTags(columnConfig.linkTo, record) });
				return;
			}
			switch (action) {
				case actionTypes.Edit: if (model.getDetailPanelContent) {
					const rowId = record[idProperty];
					setRowPanelId((prevId) => prevId === rowId ? null : rowId);
					return;
				} else return openForm({
					id: record[idProperty],
					record
				});
				case actionTypes.Copy: return openForm({
					id: record[idProperty],
					mode: "copy"
				});
				case actionTypes.Delete:
					setIsDeleting(true);
					setRecord({
						name: record[model.linkColumn],
						id: record[idProperty]
					});
					break;
				case actionTypes.History: return navigate(`${getApiEndpoint("history")}?tableName=${tableName}&id=${record[idProperty]}&breadCrumb=${searchParamKey ? searchParams.get(searchParamKey) : gridTitle}`);
				default:
					const foundCustomAction = customActions.find((ca) => ca.action === action && typeof ca.onClick === constants.function);
					if (foundCustomAction) {
						foundCustomAction.onClick({
							row: record,
							navigate
						});
						return;
					}
					break;
			}
		}
		if (action === actionTypes.Download) handleDownload({ documentLink: record[documentField] });
		if (!toLink.length) return;
		const { row } = cellParams;
		const columnConfig = lookupMap[cellParams.field] || {};
		const historyObject = { pathname: template_default.replaceTags(columnConfig.linkTo, row) };
		if (model.addRecordToState) historyObject.state = row;
		navigate(historyObject);
	}, [
		isReadOnly,
		onCellClick,
		lookupMap,
		model,
		idProperty,
		documentField,
		navigate,
		toLink,
		customActions,
		tableName,
		searchParamKey,
		searchParams,
		gridTitle,
		getApiEndpoint,
		handleDownload,
		openForm
	]);
	const handleDelete = useCallback(async () => {
		if (isStaticDataWithoutBackendApi) {
			snackbar.showError(backendApiRequiredMessage);
			return;
		}
		const baseUrl = buildUrl(backendApi);
		try {
			await deleteRecord({
				id: record.id,
				api: baseUrl,
				model
			});
			snackbar.showMessage(tTranslate("Record Deleted Successfully.", tOpts));
			fetchData();
		} catch (error) {
			snackbar.showError(tTranslate("Delete failed", tOpts), error.message);
		} finally {
			setIsDeleting(false);
		}
	}, [
		isStaticDataWithoutBackendApi,
		backendApiRequiredMessage,
		backendApi,
		record?.id,
		snackbar,
		model,
		fetchData,
		tTranslate,
		tOpts
	]);
	const clearError = useCallback(() => {
		setErrorMessage(null);
		setIsDeleting(false);
	}, []);
	const processRowUpdate = useCallback((updatedRow) => {
		if (typeof props.processRowUpdate === "function") props.processRowUpdate(updatedRow, data);
		return updatedRow;
	}, [props.processRowUpdate, data]);
	const onCellDoubleClick = useCallback((event) => {
		if (event.row.canEdit === false) return;
		const { row: record } = event;
		if (typeof onCellDoubleClickOverride === constants.function) {
			onCellDoubleClickOverride(event);
			return;
		}
		if (!isReadOnly && !isDoubleClicked && !disableCellRedirect) openForm({
			id: record[idProperty],
			record
		});
		if (isReadOnly && model.rowRedirectLink) {
			const historyObject = { pathname: template_default.replaceTags(model.rowRedirectLink, record) };
			if (model.addRecordToState) historyObject.state = record;
			navigate(historyObject);
		}
		if (typeof onRowDoubleClick === constants.function) onRowDoubleClick(event);
	}, [
		onCellDoubleClickOverride,
		isReadOnly,
		isDoubleClicked,
		disableCellRedirect,
		openForm,
		idProperty,
		model.rowRedirectLink,
		model.addRecordToState,
		navigate,
		onRowDoubleClick,
		template_default
	]);
	const handleAddRecords = useCallback(async () => {
		if (rowSelectionModel.ids.size < 1) {
			snackbar.showError(tTranslate("Please select at least one record to proceed", tOpts));
			return;
		}
		const selectedIds = Array.from(rowSelectionModel.ids);
		const recordMap = new Map((data.records || []).map((record) => [record[idProperty], record]));
		let selectedRecords = selectedIds.map((id) => ({
			...baseSaveData,
			...recordMap.get(id)
		}));
		if (Array.isArray(model.selectionUpdateKeys) && model.selectionUpdateKeys.length) selectedRecords = selectedRecords.map((item) => Object.fromEntries(model.selectionUpdateKeys.map((key) => [key, item[key]])));
		const apiEndpoint = selectionApi || backendApi;
		if (!apiEndpoint) {
			snackbar.showError(backendApiRequiredMessage);
			return;
		}
		const baseUrl = buildUrl(apiEndpoint);
		setIsLoading(true);
		try {
			const result = await saveRecord({
				id: 0,
				api: `${baseUrl}/updateMany`,
				values: { items: selectedRecords },
				model
			});
			if (result) {
				fetchData();
				const message = result.info ? result.info : tTranslate("Record Added Successfully.", tOpts);
				snackbar.showMessage(message);
			}
		} catch (err) {
			snackbar.showError(err.message || tTranslate("An error occurred, please try after some time.", tOpts));
		} finally {
			setIsLoading(false);
			setRowSelectionModel({
				type: "include",
				ids: /* @__PURE__ */ new Set()
			});
			setShowAddConfirmation(false);
		}
	}, [
		rowSelectionModel.ids,
		snackbar,
		backendApiRequiredMessage,
		data.records,
		idProperty,
		baseSaveData,
		model.selectionUpdateKeys,
		selectionApi,
		backendApi,
		model,
		fetchData,
		tTranslate,
		tOpts
	]);
	const onAdd = useCallback(() => {
		if (selectionApi.length > 0) {
			if (rowSelectionModel.ids.size > 0) {
				setShowAddConfirmation(true);
				return;
			}
			snackbar.showError(tTranslate("Please select at least one record to proceed", tOpts));
			return;
		}
		if (typeof onAddOverride === constants.function) onAddOverride();
		else openForm({ id: 0 });
	}, [
		selectionApi,
		snackbar,
		onAddOverride,
		openForm,
		rowSelectionModel.ids.size,
		tTranslate,
		tOpts
	]);
	const clearFilters = useCallback(() => {
		if (!filterModel?.items?.length) return;
		setFilterModel({ ...constants.gridFilterModel });
	}, [filterModel]);
	const updateAssignment = useCallback(({ unassign, assign }) => {
		const assignedValues = Array.isArray(selected) ? selected : selected.length ? selected.split(",") : [];
		const finalValues = unassign ? assignedValues.filter((id) => !unassign.includes(parseInt(id))) : [...assignedValues, ...assign];
		onAssignChange(typeof selected === constants.string ? finalValues.join(",") : finalValues);
	}, [selected, onAssignChange]);
	const onAssign = useCallback(() => {
		updateAssignment({ assign: Array.from(rowSelectionModel.ids) });
	}, [updateAssignment, rowSelectionModel.ids]);
	const onUnassign = useCallback(() => {
		updateAssignment({ unassign: Array.from(rowSelectionModel.ids) });
	}, [updateAssignment, rowSelectionModel.ids]);
	const selectAll = useCallback(() => {
		const records = data.records || [];
		if (rowSelectionModel.ids.size === records.length) setRowSelectionModel({
			type: "include",
			ids: /* @__PURE__ */ new Set()
		});
		else {
			const allIds = records.map((record) => record[idProperty]);
			setRowSelectionModel({
				type: "include",
				ids: new Set(allIds)
			});
		}
	}, [
		rowSelectionModel,
		data.records,
		idProperty
	]);
	const getGridRowId = useCallback((row) => row[idProperty], [idProperty]);
	const handleExport = useCallback((e) => {
		const contentType = e.currentTarget?.dataset?.contentType || e.target?.dataset?.contentType;
		const isPivotExport = (e.currentTarget?.dataset?.isPivotExport || e.target?.dataset?.isPivotExport) === "true";
		if (hasStaticData || localSortAndFilter) {
			if (contentType === "text/csv") {
				apiRef.current?.exportDataAsCsv?.();
				return;
			}
			if (contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
				apiRef.current?.exportDataAsExcel?.();
				return;
			}
			return;
		}
		if (data?.recordCount > recordCounts) {
			snackbar.showMessage(tTranslate("Cannot export more than 60k records, please apply filters or reduce your results using filters", tOpts));
			return;
		}
		const { orderedFields, columnVisibilityModel, lookup } = apiRef.current.state.columns;
		const hiddenColumns = Object.keys(columnVisibilityModel).filter((key) => columnVisibilityModel[key] === false);
		const nonExportColumns = new Set(gridColumns.filter((col) => col.exportable === false).map((col) => col.field));
		const visibleColumns = orderedFields.filter((field) => !nonExportColumns.has(field) && !hiddenColumns.includes(field) && field !== "__check__" && field !== "actions");
		if (visibleColumns.length === 0) {
			snackbar.showMessage(tTranslate("You cannot export while all columns are hidden... please show at least 1 column before exporting", tOpts));
			return;
		}
		const columns = {};
		const gridColsLookup = Object.fromEntries(gridColumns.map((c) => [c.field, c]));
		visibleColumns.forEach((field) => {
			const col = lookup[field];
			const gridCol = gridColsLookup[field];
			columns[field] = {
				field,
				width: col.width,
				headerName: gridCol?.headerName || col.headerName || col.field,
				type: col.type,
				isParsable: col.isParsable,
				lookup: col.lookup,
				hyperlinkURL: col.hyperlinkURL,
				hyperlinkIndex: col.hyperlinkIndex,
				localize: col.localize,
				exportIndex: col.exportIndex
			};
		});
		fetchData({
			action: model?.formActions?.export || isPivotExport ? model?.formActions?.export || "export" : void 0,
			isPivotExport,
			contentType,
			columns
		});
	}, [
		hasStaticData,
		localSortAndFilter,
		data?.recordCount,
		apiRef,
		gridColumns,
		snackbar,
		model,
		fetchData,
		tTranslate,
		tOpts
	]);
	useEffect(() => {
		if (!backendApi && !hasStaticData || !preferencesReady) return;
		fetchData();
	}, [
		backendApi,
		hasStaticData,
		preferencesReady,
		fetchData
	]);
	useEffect(() => {
		if (props.isChildGrid || forAssignment || !updatePageTitle) return;
		setPageTitle({
			icon: "",
			titleHeading: model.pageTitle || model.title,
			title: model.title
		});
		return () => {
			setPageTitle(null);
		};
	}, [
		setPageTitle,
		model.pageTitle,
		model.title,
		props.isChildGrid,
		forAssignment,
		updatePageTitle
	]);
	const updateFilters = useCallback((e) => {
		const { items } = e;
		const updatedItems = items.map((item) => {
			const { field, operator, value } = item;
			const isNumber = (gridColumns.find((col) => col.field === field) || {}).type === constants.Number;
			if (NO_VALUE_OPERATORS.includes(operator)) return {
				...item,
				value: null
			};
			if (isNumber && value < 0) return {
				...item,
				value: null
			};
			if (emptyIsAnyOfOperatorFilters.includes(operator) || isNumber && !isNaN(value) || !isNumber) {
				if (isElasticScreen && gridColumns.filter((element) => element.field === field)[0]?.isKeywordField) item.filterField = `${item.field}.keyword`;
				return { ...item };
			}
			return {
				...item,
				value: isNumber ? null : value
			};
		});
		setFilterModel({
			...e,
			items: updatedItems
		});
	}, [
		gridColumns,
		constants.Number,
		emptyIsAnyOfOperatorFilters,
		isElasticScreen,
		setFilterModel
	]);
	const updateSort = useCallback((e) => {
		if (e[0]) {
			if (gridGroupByColumnName.includes(e[0].field)) {
				snackbar.showMessage(tTranslate("Group By is applied on the same column, please remove it in order to apply sorting.", tOpts));
				return;
			}
		}
		setSortModel(e.map((ele) => {
			const field = gridColumns.filter((element) => element.field === ele.field)[0] || {};
			const isKeywordField = isElasticScreen && field.isKeywordField;
			const obj = {
				...ele,
				filterField: isKeywordField ? `${ele.field}.keyword` : ele.field
			};
			if (field.dataIndex) obj.filterField = field.dataIndex;
			return obj;
		}));
	}, [
		gridColumns,
		isElasticScreen,
		setSortModel
	]);
	const pageTitle = title || model.gridTitle || model.title;
	const breadCrumbs = searchParamKey ? [{ text: searchParams.get(searchParamKey) || pageTitle }] : [{ text: pageTitle }];
	const handleDetailPanelExpanded = useCallback((ids) => {
		setRowPanelId(ids.size > 0 ? [...ids].pop() : null);
	}, []);
	const getDetailPanelContent = useCallback((params) => {
		if (typeof model.getDetailPanelContent === "function") return model.getDetailPanelContent({
			...params,
			onRefresh: () => {
				setRowPanelId(null);
				fetchData();
			},
			t: tTranslate,
			tOpts
		});
		return null;
	}, [
		model.getDetailPanelContent,
		fetchData,
		tTranslate,
		tOpts
	]);
	const localeText = useMemo(() => ({
		filterValueTrue: tTranslate("Yes", tOpts),
		filterValueFalse: tTranslate("No", tOpts),
		noRowsLabel: tTranslate("No data", tOpts),
		footerTotalRows: `${tTranslate("Total rows", tOpts)}:`,
		MuiTablePagination: {
			labelRowsPerPage: tTranslate("Rows per page", tOpts),
			labelDisplayedRows: ({ from, to, count }) => `${from}–${to} ${tTranslate("of", tOpts)} ${count}`
		},
		toolbarQuickFilterPlaceholder: tTranslate(model?.searchPlaceholder || "Search...", tOpts),
		toolbarColumns: tTranslate("Columns", tOpts),
		toolbarFilters: tTranslate("Filters", tOpts),
		toolbarExport: tTranslate("Export", tOpts),
		filterPanelAddFilter: tTranslate("Add filter", tOpts),
		filterPanelRemoveAll: tTranslate("Remove all", tOpts),
		filterPanelDeleteIconLabel: tTranslate("Delete", tOpts),
		filterPanelColumns: tTranslate("Columns", tOpts),
		filterPanelOperator: tTranslate("Operator", tOpts),
		filterPanelValue: tTranslate("Value", tOpts),
		filterPanelInputLabel: tTranslate("Value", tOpts),
		filterPanelInputPlaceholder: tTranslate("Filter value", tOpts),
		columnMenuLabel: tTranslate("Menu", tOpts),
		columnMenuShowColumns: tTranslate("Show columns", tOpts),
		columnMenuManageColumns: tTranslate("Manage columns", tOpts),
		columnMenuFilter: tTranslate("Filter", tOpts),
		columnMenuHideColumn: tTranslate("Hide column", tOpts),
		columnMenuManagePivot: tTranslate("Manage pivot", tOpts),
		toolbarColumnsLabel: tTranslate("Select columns", tOpts),
		toolbarExportLabel: tTranslate("Export", tOpts),
		pivotDragToColumns: tTranslate("Drag here to pivot by", tOpts),
		pivotDragToRows: tTranslate("Drag here to group by", tOpts),
		pivotDragToValues: tTranslate("Drag here to create values", tOpts),
		pivotColumns: tTranslate("Pivot columns", tOpts),
		pivotRows: tTranslate("Row groups", tOpts),
		pivotValues: tTranslate("Values", tOpts),
		pivotMenuRows: tTranslate("Rows", tOpts),
		pivotMenuColumns: tTranslate("Columns", tOpts),
		pivotMenuValues: tTranslate("Values", tOpts),
		pivotToggleLabel: tTranslate("Pivot", tOpts),
		pivotSearchControlPlaceholder: tTranslate("Search pivot columns", tOpts),
		columnMenuUnsort: tTranslate("Unsort", tOpts),
		columnMenuSortAsc: tTranslate("Sort by ascending", tOpts),
		columnMenuSortDesc: tTranslate("Sort by descending", tOpts),
		columnMenuUnpin: tTranslate("Unpin", tOpts),
		columnsPanelTextFieldLabel: tTranslate("Find column", tOpts),
		columnsPanelTextFieldPlaceholder: tTranslate("Column title", tOpts),
		columnsPanelHideAllButton: tTranslate("Hide all", tOpts),
		columnsPanelShowAllButton: tTranslate("Show all", tOpts),
		pinToLeft: tTranslate("Pin to left", tOpts),
		pinToRight: tTranslate("Pin to right", tOpts),
		unpin: tTranslate("Unpin", tOpts),
		filterValueAny: tTranslate("any", tOpts),
		filterOperatorIs: tTranslate("is", tOpts),
		filterOperatorNot: tTranslate("is not", tOpts),
		filterOperatorIsAnyOf: tTranslate("is any of", tOpts),
		filterOperatorContains: tTranslate("contains", tOpts),
		filterOperatorDoesNotContain: tTranslate("does not contain", tOpts),
		filterOperatorEquals: tTranslate("equals", tOpts),
		filterOperatorDoesNotEqual: tTranslate("does not equal", tOpts),
		filterOperatorStartsWith: tTranslate("starts with", tOpts),
		filterOperatorEndsWith: tTranslate("ends with", tOpts),
		filterOperatorIsEmpty: tTranslate("is empty", tOpts),
		filterOperatorIsNotEmpty: tTranslate("is not empty", tOpts),
		filterOperatorAfter: tTranslate("is after", tOpts),
		filterOperatorOnOrAfter: tTranslate("is on or after", tOpts),
		filterOperatorBefore: tTranslate("is before", tOpts),
		filterOperatorOnOrBefore: tTranslate("is on or before", tOpts),
		toolbarFiltersTooltipHide: tTranslate("Hide filters", tOpts),
		toolbarFiltersTooltipShow: tTranslate("Show filters", tOpts),
		headerFilterOperatorContains: tTranslate("contains", tOpts),
		headerFilterOperatorEquals: tTranslate("equals", tOpts),
		headerFilterOperatorStartsWith: tTranslate("starts with", tOpts),
		headerFilterOperatorEndsWith: tTranslate("ends with", tOpts),
		headerFilterOperatorIsEmpty: tTranslate("is empty", tOpts),
		headerFilterOperatorIsNotEmpty: tTranslate("is not empty", tOpts),
		headerFilterOperatorAfter: tTranslate("is after", tOpts),
		headerFilterOperatorOnOrAfter: tTranslate("is on or after", tOpts),
		headerFilterOperatorBefore: tTranslate("is before", tOpts),
		headerFilterOperatorOnOrBefore: tTranslate("is on or before", tOpts),
		headerFilterOperatorIs: tTranslate("is", tOpts),
		"headerFilterOperator=": tTranslate("equals", tOpts),
		"headerFilterOperator!=": tTranslate("does not equal", tOpts),
		"headerFilterOperator>": tTranslate("greater than", tOpts),
		"headerFilterOperator>=": tTranslate("greater than or equal to", tOpts),
		"headerFilterOperator<": tTranslate("less than", tOpts),
		"headerFilterOperator<=": tTranslate("less than or equal to", tOpts),
		columnsManagementSearchTitle: tTranslate("Search", tOpts),
		columnsManagementNoColumns: tTranslate("No columns", tOpts),
		paginationRowsPerPage: tTranslate("Rows per page", tOpts),
		paginationDisplayedRows: ({ from, to, count }) => `${from}–${to} ${tTranslate("of", tOpts)} ${count}`,
		toolbarQuickFilterLabel: tTranslate("Search", tOpts),
		toolbarFiltersTooltipActive: (count) => {
			return `${count} ${tTranslate(count === 1 ? "active filter" : "active filters", tOpts)}`;
		},
		columnHeaderSortIconLabel: tTranslate("Sort", tOpts),
		filterPanelOperatorAnd: tTranslate("And", tOpts),
		filterPanelOperatorOr: tTranslate("Or", tOpts),
		noResultsOverlayLabel: tTranslate("No results found", tOpts),
		columnHeaderFiltersTooltipActive: (count) => {
			return `${count} ${tTranslate(count === 1 ? "active filter" : "active filters", tOpts)}`;
		},
		detailPanelToggle: tTranslate("Detail panel toggle", tOpts),
		checkboxSelectionHeaderName: tTranslate("Checkbox selection", tOpts),
		columnsManagementShowHideAllText: tTranslate("Show/Hide all", tOpts),
		noColumnsOverlayLabel: tTranslate("No columns", tOpts),
		noColumnsOverlayManageColumns: tTranslate("Manage columns", tOpts),
		columnsManagementReset: tTranslate("Reset", tOpts),
		groupColumn: (name) => `${tTranslate("Group by", tOpts)} ${name}`,
		unGroupColumn: (name) => `${tTranslate("Ungroup", tOpts)} ${name}`,
		footerRowSelected: (count) => {
			const key = count === 1 ? "item selected" : "items selected";
			return `${count.toLocaleString()} ${tTranslate(key, tOpts)}`;
		}
	}), [
		tTranslate,
		tOpts,
		model?.searchPlaceholder
	]);
	const slotProps = useMemo(() => ({
		headerFilterCell: { showClearIcon: true },
		toolbar: {
			model,
			data,
			currentPreference,
			isReadOnly,
			canAdd,
			forAssignment,
			showAddIcon,
			onAdd,
			selectionApi,
			rowSelectionModel,
			selectAll,
			available,
			onAssign,
			assigned,
			onUnassign,
			effectivePermissions,
			clearFilters,
			handleExport,
			preferenceKey,
			apiRef,
			gridColumns,
			tTranslate,
			tOpts,
			idProperty,
			filterModel,
			setFilterModel,
			onPreferenceChange,
			toolbarItems,
			headerActions: props.headerActions,
			customExportOptions,
			isStaticDataMode: hasStaticData || localSortAndFilter
		},
		footer: {
			pagination: disablePagination !== true,
			apiRef,
			tTranslate,
			tOpts
		},
		panel: { placement: "bottom-end" },
		pagination: {
			backIconButtonProps: {
				title: tTranslate("Go to previous page", tOpts),
				"aria-label": tTranslate("Go to previous page", tOpts)
			},
			nextIconButtonProps: {
				title: tTranslate("Go to next page", tOpts),
				"aria-label": tTranslate("Go to next page", tOpts)
			}
		}
	}), [
		model,
		data,
		currentPreference,
		isReadOnly,
		canAdd,
		forAssignment,
		showAddIcon,
		onAdd,
		selectionApi,
		rowSelectionModel,
		selectAll,
		available,
		onAssign,
		assigned,
		onUnassign,
		effectivePermissions,
		clearFilters,
		handleExport,
		preferenceKey,
		apiRef,
		gridColumns,
		tTranslate,
		tOpts,
		idProperty,
		filterModel,
		setFilterModel,
		onPreferenceChange,
		toolbarItems,
		props.headerActions,
		customExportOptions,
		hasStaticData
	]);
	const initialState = useMemo(() => ({
		columns: { columnVisibilityModel: visibilityModel },
		pinnedColumns
	}), [visibilityModel, pinnedColumns]);
	const slots = useMemo(() => ({
		headerFilterMenu: false,
		toolbar: CustomToolbar,
		footer: Footer
	}), []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [showPageTitle !== false && /* @__PURE__ */ jsx(PageTitle_default, {
		navigate,
		showBreadcrumbs: !hideBreadcrumb && !hideBreadcrumbInGrid,
		breadcrumbs: breadCrumbs,
		enableBackButton: navigateBack,
		breadcrumbColor,
		model
	}), /* @__PURE__ */ jsxs(Box$1, {
		style: gridStyle || customStyle,
		children: [
			/* @__PURE__ */ jsx(Box$1, {
				sx: {
					display: "flex",
					maxHeight: "80vh",
					flexDirection: "column"
				},
				children: /* @__PURE__ */ jsx(DataGridPremium, {
					sx: [{
						"& .MuiTablePagination-selectLabel": { marginTop: 2 },
						"& .MuiTablePagination-displayedRows": { marginTop: 2 },
						"& .MuiDataGrid-virtualScroller ": { zIndex: 2 },
						"& .MuiDataGrid-detailPanelToggleCell, & .MuiDataGrid-cell--withRenderer.MuiDataGrid-cell--detailPanelToggle": { display: "none" }
					}, ...Array.isArray(propsSx) ? propsSx : propsSx ? [propsSx] : []],
					headerFilters: showHeaderFilters,
					unstable_headerFilters: showHeaderFilters,
					checkboxSelection: forAssignment,
					loading: !data.records || isLoading,
					className: "pagination-fix",
					onCellClick: onCellClickHandler,
					onCellDoubleClick,
					columns: gridColumns,
					paginationModel,
					pageSizeOptions: constants.pageSizeOptions,
					onPaginationModelChange: setPaginationModel,
					pagination: !disablePagination,
					rowCount: data.recordCount,
					rows: data.records || [],
					sortModel,
					paginationMode,
					sortingMode: sortAndFilterMode,
					filterMode: sortAndFilterMode,
					processRowUpdate,
					keepNonExistentRowsSelected: true,
					onSortModelChange: updateSort,
					onFilterModelChange: updateFilters,
					rowSelectionModel,
					onRowSelectionModelChange: setRowSelectionModel,
					filterModel,
					getRowId: getGridRowId,
					onRowClick,
					slots,
					slotProps,
					hideFooterSelectedRowCount: rowsSelected,
					density: "compact",
					disableDensitySelector: true,
					apiRef,
					disableAggregation: true,
					disableRowGrouping,
					disableRowSelectionOnClick,
					disablePivoting,
					filterDebounceMs: debounceTimeOut,
					initialState,
					...enableRowDetailPanel && {
						getDetailPanelContent,
						detailPanelExpandedRowIds,
						onDetailPanelExpandedRowIdsChange: handleDetailPanelExpanded
					},
					localeText,
					showToolbar: true,
					columnHeaderHeight,
					hideFooter: !showFooter,
					rowGroupingModel: groupingModel,
					onRowGroupingModelChange: (newGroupingModel) => setGroupingModel(newGroupingModel),
					getRowClassName: props.getRowClassName,
					columnGroupingModel
				})
			}),
			errorMessage && /* @__PURE__ */ jsxs(DialogComponent, {
				open: !!errorMessage,
				onConfirm: clearError,
				onCancel: clearError,
				title: "Info",
				hideCancelButton: true,
				children: [" ", errorMessage]
			}),
			isDeleting && !errorMessage && /* @__PURE__ */ jsx(DialogComponent, {
				open: isDeleting,
				onConfirm: handleDelete,
				onCancel: () => setIsDeleting(false),
				title: tTranslate("Confirm Delete", tOpts),
				okText: tTranslate("Ok", tOpts),
				cancelText: tTranslate("Cancel", tOpts),
				children: /* @__PURE__ */ jsxs(DeleteContentText, { children: [
					tTranslate("Are you sure you want to delete", tOpts),
					" ",
					record.name && /* @__PURE__ */ jsx(Tooltip, {
						style: { display: "inline" },
						title: record.name,
						arrow: true,
						children: record.name.length > 30 ? `${record.name.slice(0, 30)}...` : record.name
					}),
					" ?"
				] })
			}),
			showAddConfirmation && /* @__PURE__ */ jsx(DialogComponent, {
				open: showAddConfirmation,
				onConfirm: handleAddRecords,
				onCancel: () => setShowAddConfirmation(false),
				title: tTranslate("Confirm Add", tOpts),
				okText: tTranslate("Ok", tOpts),
				cancelText: tTranslate("Cancel", tOpts),
				children: /* @__PURE__ */ jsxs(DeleteContentText, { children: [
					tTranslate("Are you sure you want to add", tOpts),
					" ",
					rowSelectionModel.ids.size,
					" ",
					tTranslate("records", {
						count: rowSelectionModel.ids.size,
						...tOpts
					}),
					"?"
				] })
			})
		]
	})] });
}, areEqual);
//#endregion
//#region src/lib/components/Form/fields/boolean.js
var Field$8 = ({ column, field, formik, otherProps }) => {
	const handleChange = (event) => {
		formik.setFieldValue(field, event.target.checked);
	};
	const checked = useMemo(() => formik.values[field] ?? !!column.defaultValue, [formik, column]);
	const isDisabled = typeof column.readOnly === "function" ? column.readOnly(formik) : column.readOnly;
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(FormControlLabel$1, { control: /* @__PURE__ */ jsx(Checkbox$1, {
		...otherProps,
		name: field,
		disabled: isDisabled || column.disabled === true,
		checked,
		onChange: handleChange,
		onBlur: formik.handleBlur,
		defaultChecked: column.defaultValue
	}) }), /* @__PURE__ */ jsx(FormHelperText, {
		error: formik.touched[field] && Boolean(formik.errors[field]),
		children: formik.touched[field] && formik.errors[field]
	})] }, field);
};
//#endregion
//#region src/lib/components/Form/fields/string.js
var field$1 = ({ column, field, formik, otherProps }) => {
	const theme = useTheme();
	const rows = column.rows || (column.multiline ? 5 : 1);
	return /* @__PURE__ */ jsx(TextField, {
		type: "text",
		variant: column.variant || "standard",
		InputProps: {
			readOnly: column.readOnly === true,
			sx: column.readOnly ? { backgroundColor: theme.palette?.action?.disabled } : void 0
		},
		required: column.required,
		multiline: column.multiline,
		rows,
		fullWidth: true,
		name: field,
		value: formik.values[field],
		onChange: formik.handleChange,
		onBlur: formik.handleBlur,
		error: formik.touched[field] && Boolean(formik.errors[field]),
		helperText: formik.touched[field] && formik.errors[field],
		autoComplete: column.autoComplete,
		...otherProps,
		defaultValue: column.defaultValue
	}, field);
};
//#endregion
//#region src/lib/hooks/useDebounce.js
function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);
	return debouncedValue;
}
//#endregion
//#region src/lib/components/Form/fields/number.js
var resolveValue = ({ value, state }) => {
	if (typeof value === "string" && value.startsWith("{") && value.endsWith("}")) {
		const key = value.slice(1, -1);
		return state[key] !== void 0 ? state[key] : value;
	}
	return value;
};
var inputComponentMap = {
	outlined: OutlinedInput,
	filled: FilledInput,
	standard: Input
};
var NumberFieldAdornment = () => /* @__PURE__ */ jsxs(InputAdornment, {
	position: "end",
	sx: {
		flexDirection: "column",
		maxHeight: "unset",
		alignSelf: "stretch",
		ml: 0,
		"& button": {
			py: 0,
			flex: 1,
			borderRadius: .5
		}
	},
	children: [/* @__PURE__ */ jsx(NumberField.Increment, {
		render: /* @__PURE__ */ jsx(IconButton, {
			size: "small",
			"aria-label": "Increase"
		}),
		children: /* @__PURE__ */ jsx(KeyboardArrowUpIcon, {
			fontSize: "small",
			sx: { transform: "translateY(2px)" }
		})
	}), /* @__PURE__ */ jsx(NumberField.Decrement, {
		render: /* @__PURE__ */ jsx(IconButton, {
			size: "small",
			"aria-label": "Decrease"
		}),
		children: /* @__PURE__ */ jsx(KeyboardArrowDownIcon, {
			fontSize: "small",
			sx: { transform: "translateY(-2px)" }
		})
	})]
});
var Field$7 = ({ column, otherProps, formik, field, ...props }) => {
	const { min, max, readOnly, precision } = column;
	const theme = useTheme();
	const resolvedMin = useMemo(() => resolveValue({
		value: min,
		state: formik.values
	}), [min, formik.values]);
	const resolvedMax = useMemo(() => resolveValue({
		value: max,
		state: formik.values
	}), [max, formik.values]);
	const formikFieldValue = useMemo(() => formik.values[field] ?? null, [formik.values[field]]);
	const [inputValue, setInputValue] = useState(formikFieldValue);
	const debouncedValue = useDebounce(inputValue, 400);
	useEffect(() => {
		if (debouncedValue !== formikFieldValue) formik.setFieldValue(field, debouncedValue);
	}, [debouncedValue]);
	useEffect(() => {
		if (formikFieldValue !== inputValue) setInputValue(formikFieldValue);
	}, [formikFieldValue]);
	const handleValueChange = (value) => {
		setInputValue(value);
	};
	const handleBlur = (event) => {
		formik.setFieldTouched(field, true);
		if (typeof props.onBlur === "function") props.onBlur(event);
	};
	const id = `number-field-${field}-${useId()}`;
	const InputComponent = inputComponentMap[column.variant || "standard"];
	const numberFormat = useMemo(() => {
		if (precision !== void 0) return { maximumFractionDigits: precision };
	}, [precision]);
	return /* @__PURE__ */ jsxs(NumberField.Root, {
		value: inputValue,
		onValueChange: handleValueChange,
		min: resolvedMin,
		max: resolvedMax,
		disabled: readOnly,
		format: numberFormat,
		render: (baseProps, state) => /* @__PURE__ */ jsx(FormControl, {
			fullWidth: true,
			ref: baseProps.ref,
			error: formik.touched[field] && Boolean(formik.errors[field]),
			sx: readOnly ? { backgroundColor: theme.palette?.action?.disabled } : void 0,
			children: baseProps.children
		}),
		children: [/* @__PURE__ */ jsx(NumberField.Input, { render: (inputProps, state) => /* @__PURE__ */ jsx(InputComponent, {
			id,
			inputRef: inputProps.ref,
			value: state.inputValue,
			onChange: inputProps.onChange,
			onBlur: (e) => {
				inputProps.onBlur(e);
				handleBlur(e);
			},
			inputProps: {
				...inputProps,
				"aria-describedby": formik.touched[field] && formik.errors[field] ? `${id}-error` : void 0
			},
			endAdornment: /* @__PURE__ */ jsx(NumberFieldAdornment, {}),
			sx: { pr: 0 },
			...otherProps
		}) }), formik.touched[field] && formik.errors[field] && /* @__PURE__ */ jsxs(FormHelperText, {
			id: `${id}-error`,
			error: true,
			children: [
				" ",
				formik.errors[field],
				" "
			]
		})]
	});
};
//#endregion
//#region src/lib/components/Form/fields/password.js
var Field$6 = ({ otherProps, ...props }) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const { readOnly = false, disabled = false } = props.column || {};
	otherProps = {
		type: showPassword ? "text" : "password",
		InputProps: {
			readOnly,
			disabled,
			endAdornment: /* @__PURE__ */ jsx(InputAdornment, {
				position: "end",
				children: /* @__PURE__ */ jsx(IconButton, {
					"aria-label": "toggle password visibility",
					onClick: handleClickShowPassword,
					onMouseDown: handleMouseDownPassword,
					edge: "end",
					disabled,
					readOnly,
					size: "large",
					children: showPassword ? /* @__PURE__ */ jsx(VisibilityOffIcon, {}) : /* @__PURE__ */ jsx(VisibilityIcon, {})
				})
			})
		},
		...otherProps
	};
	return /* @__PURE__ */ jsx(field$1, {
		otherProps,
		...props
	});
};
//#endregion
//#region src/lib/components/Form/fields/date.js
var Field$5 = ({ column, field, formik, otherProps, fieldConfigs = {}, mode }) => {
	const isDisabled = mode !== "copy" && fieldConfigs.disabled;
	const { systemDateTimeFormat, stateData } = useStateContext();
	const dateValue = useMemo(() => {
		return formik.values[field] ? dayjs(formik.values[field]) : null;
	}, [formik.values[field]]);
	const minFieldValue = column.minField ? formik.values[column.minField] : void 0;
	const maxFieldValue = column.maxField ? formik.values[column.maxField] : void 0;
	const minDateValue = useMemo(() => {
		if (column.min) return dayjs(column.min);
		if (column.minField && minFieldValue) return dayjs(minFieldValue);
		return null;
	}, [
		column.min,
		column.minField,
		minFieldValue
	]);
	const maxDateValue = useMemo(() => {
		if (column.max) return dayjs(column.max);
		if (column.maxField && maxFieldValue) return dayjs(maxFieldValue);
		return null;
	}, [
		column.max,
		column.maxField,
		maxFieldValue
	]);
	const handleChange = useCallback((value) => {
		if (value === null) {
			formik.setFieldValue(field, null);
			return;
		}
		const isoString = dayjs(value).hour(12).toISOString();
		formik.setFieldValue(field, isoString);
	}, [field, formik]);
	return /* @__PURE__ */ createElement(DatePicker, {
		...otherProps,
		variant: "standard",
		readOnly: column?.readOnly === true,
		key: field,
		fullWidth: true,
		format: systemDateTimeFormat(true, false, stateData.dateTime),
		name: field,
		value: dateValue,
		onChange: handleChange,
		onBlur: formik.handleBlur,
		helperText: formik.touched[field] && formik.errors[field],
		minDate: minDateValue,
		maxDate: maxDateValue,
		disabled: isDisabled,
		slotProps: { textField: {
			fullWidth: true,
			variant: "standard"
		} }
	});
};
//#endregion
//#region src/lib/components/Form/fields/dateTime.js
dayjs.extend(utc);
var Field$4 = ({ column, field, formik, otherProps }) => {
	const { systemDateTimeFormat, stateData } = useStateContext();
	const dateTimeValue = useMemo(() => {
		const val = formik.values[field];
		if (!val) return null;
		return dayjs(val);
	}, [formik.values[field], column]);
	return /* @__PURE__ */ createElement(DateTimePicker, {
		...otherProps,
		variant: "standard",
		readOnly: column?.readOnly === true,
		key: field,
		fullWidth: true,
		format: systemDateTimeFormat(false, false, stateData.dateTime),
		name: field,
		value: dateTimeValue,
		onChange: (value) => {
			if (!value) formik.setFieldValue(field, null);
			else if (column.localize) formik.setFieldValue(field, value.toISOString());
			else formik.setFieldValue(field, value.utcOffset(0, true).toISOString());
		},
		onBlur: formik.handleBlur,
		helperText: formik.touched[field] && formik.errors[field],
		minDateTime: column.min ? dayjs(column.min) : null,
		maxDateTime: column.max ? dayjs(column.max) : null,
		slotProps: { textField: {
			fullWidth: true,
			helperText: formik.errors[field],
			variant: "standard"
		} }
	});
};
//#endregion
//#region src/lib/components/Form/fields/time.js
dayjs.extend(utcPlugin);
var field = ({ column, field, formik, otherProps }) => {
	let inputValue = formik.values[field];
	if (!column.localize && inputValue) inputValue = dayjs.utc(inputValue).utcOffset(dayjs().utcOffset(), true).format();
	return /* @__PURE__ */ createElement(TimePicker, {
		...otherProps,
		variant: "standard",
		readOnly: column.readOnly === true,
		key: field,
		fullWidth: true,
		name: field,
		value: inputValue ? dayjs(inputValue) : null,
		onChange: (value) => {
			if (!column.localize) value = value && value.isValid() ? value.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null;
			return formik.setFieldValue(field, value);
		},
		onBlur: formik.handleBlur,
		helperText: formik.touched[field] && formik.errors[field],
		slotProps: { textField: {
			fullWidth: true,
			helperText: formik.errors[field],
			variant: "standard"
		} }
	});
};
//#endregion
//#region src/lib/hooks/useCascadingLookup.js
var emptyValues = [
	null,
	void 0,
	""
];
function useCascadingLookup({ column, formik, lookups, dependsOn = [], isAutoComplete = false, userSelected, model }) {
	const [options, setOptions] = useState([]);
	const { buildUrl } = useStateContext();
	const snackbar = useSnackbar();
	const api = buildUrl(model.api);
	const dependencyValues = useMemo(() => {
		const toReturn = {};
		if (!dependsOn.length) return toReturn;
		for (const dependency of dependsOn) toReturn[dependency] = formik.values[dependency];
		return toReturn;
	}, dependsOn.map((dep) => formik.values[dep]));
	const initialOptions = useMemo(() => {
		if (dependsOn.length) return [];
		return typeof column.lookup === "string" ? lookups[column.lookup] : column.lookup;
	}, [
		column.lookup,
		lookups,
		dependsOn
	]);
	const fetchOptions = useCallback(async () => {
		if (!column.lookup) return;
		if (!Object.values(dependencyValues).every((value) => !emptyValues.includes(value))) {
			setOptions([]);
			return;
		}
		try {
			setOptions(await getLookups({
				api,
				model,
				lookups,
				reqData: { params: { lookups: [{
					lookup: column.lookup,
					where: dependencyValues
				}] } }
			}));
		} catch (error) {
			snackbar.showError("Could not load lookups", error.message);
		}
	}, [
		column.lookup,
		dependencyValues,
		api,
		model,
		lookups,
		snackbar
	]);
	useEffect(() => {
		if (dependsOn.length) fetchOptions();
		else if (isAutoComplete || !userSelected.current) setOptions(initialOptions || []);
	}, [
		dependsOn.length,
		fetchOptions,
		isAutoComplete,
		initialOptions
	]);
	return options;
}
//#endregion
//#region src/lib/components/Form/fields/select.js
var SelectField = React.memo(({ column, field, formik, lookups, dependsOn = [], model, tTranslate, tOpts, ...otherProps }) => {
	const userSelected = React.useRef(false);
	const { placeHolder } = column;
	const options = useCascadingLookup({
		column,
		formik,
		lookups,
		dependsOn,
		userSelected,
		model
	});
	const theme = useTheme();
	const inputValue = useMemo(() => {
		let value = formik.values[field];
		if (!value && !userSelected.current && column.defaultValue !== void 0) {
			const userDefault = column.defaultValue;
			if (userDefault !== void 0 && userDefault !== null && userDefault !== "") {
				if (options && options.length) {
					const defaultOption = options.find((o) => String(o.value) === String(userDefault));
					if (defaultOption) {
						value = defaultOption.value;
						formik.setFieldValue(field, defaultOption.value);
					}
				}
			}
		}
		if (options?.length && !value && !column.multiSelect && "IsDefault" in options[0]) {
			const isDefaultOption = options.find((e) => e.IsDefault);
			if (isDefaultOption) {
				value = isDefaultOption.value;
				formik.setFieldValue(field, isDefaultOption.value);
			}
		}
		if (column.multiSelect) {
			if (!value || value.length === 0) value = [];
			else if (!Array.isArray(value)) value = value.split(",").map((e) => parseInt(e));
		}
		return value;
	}, [
		formik.values[field],
		options,
		column.multiSelect,
		field
	]);
	const handleChange = useCallback((event) => {
		if (typeof column.onChange === "function") column.onChange({
			formik,
			value: event.target.value,
			options,
			event,
			t: tTranslate,
			tOpts
		});
		formik.handleChange(event);
		userSelected.current = true;
	}, [
		formik.values[field],
		column.onChange,
		options
	]);
	const hasValue = useMemo(() => {
		if (column.multiSelect) return Array.isArray(inputValue) && inputValue.length > 0;
		return inputValue !== "" && inputValue !== null && inputValue !== void 0 && Array.isArray(options) && options.some((o) => String(o.value) === String(inputValue));
	}, [
		inputValue,
		column.multiSelect,
		options
	]);
	const clearSelection = useCallback((e) => {
		e.stopPropagation();
		const newValue = column.multiSelect ? [] : "";
		formik.setFieldValue(field, newValue);
		if (typeof column.onChange === "function") column.onChange({
			formik,
			value: newValue,
			options,
			event: e,
			t: tTranslate,
			tOpts
		});
		userSelected.current = true;
	}, [
		column.multiSelect,
		field,
		formik,
		column.onChange,
		options,
		tTranslate,
		tOpts
	]);
	return /* @__PURE__ */ jsxs(FormControl$1, {
		fullWidth: true,
		error: formik.touched[field] && formik.errors[field],
		variant: "standard",
		children: [
			/* @__PURE__ */ jsx(InputLabel$1, { children: placeHolder ? placeHolder : "" }),
			/* @__PURE__ */ jsxs(Box$1, {
				sx: { position: "relative" },
				children: [/* @__PURE__ */ jsx(Select$1, {
					IconComponent: KeyboardArrowDownIcon,
					...otherProps,
					name: field,
					multiple: column.multiSelect === true,
					readOnly: column.readOnly === true,
					value: column.multiSelect ? Array.isArray(inputValue) ? inputValue : [] : `${inputValue ?? ""}`,
					onChange: handleChange,
					onBlur: formik.handleBlur,
					sx: {
						width: "100%",
						backgroundColor: column.readOnly ? theme.palette?.action?.disabled : ""
					},
					children: Array.isArray(options) && options.map((option) => /* @__PURE__ */ jsx(MenuItem$1, {
						value: option.value,
						disabled: option.isDisabled,
						children: option.label
					}, option.value))
				}), hasValue && !column.readOnly && /* @__PURE__ */ jsx(IconButton, {
					size: "small",
					onClick: clearSelection,
					tabIndex: -1,
					sx: {
						position: "absolute",
						right: 24,
						top: "50%",
						transform: "translateY(-50%)",
						p: "2px"
					},
					"aria-label": tTranslate("Clear selection", tOpts),
					children: /* @__PURE__ */ jsx(ClearIcon, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ jsx(FormHelperText, { children: formik.touched[field] && formik.errors[field] })
		]
	}, field);
});
//#endregion
//#region src/lib/components/Form/fields/grid-transfer.js
var DivSpacing = styled$1("div")({
	marginTop: "10px",
	marginBottom: "10px",
	fontSize: "20px"
});
var TransferField = ({ component, name, formik, field, column }) => {
	const { value } = formik.getFieldProps(name || field);
	const { setFieldValue } = formik;
	const Component = component || column.relation;
	const onAssignChange = useCallback((value) => {
		setFieldValue(name || field, value);
	}, [
		setFieldValue,
		name,
		field
	]);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(DivSpacing, { children: `Available ${column.label}` }),
		/* @__PURE__ */ jsx(Component, {
			selected: value,
			available: true,
			onAssignChange,
			disableCellRedirect: column.disableCellRedirect,
			readOnly: column.readOnly
		}),
		/* @__PURE__ */ jsx(DivSpacing, { children: `Assigned ${column.label}` }),
		/* @__PURE__ */ jsx(Component, {
			selected: value,
			assigned: true,
			onAssignChange,
			disableCellRedirect: column.disableCellRedirect,
			readOnly: column.readOnly
		})
	] });
};
//#endregion
//#region src/lib/components/Form/fields/radio.js
var Field$3 = ({ field, formik, orientation = "row", label, lookups, fieldConfigs = {}, mode, tTranslate, tOpts, ...otherProps }) => {
	const handleChange = (event) => {
		formik.setFieldValue(field, event.target.value);
	};
	const options = lookups ? lookups[otherProps.column.lookup] : [];
	const theme = useTheme();
	const isError = formik.touched[field] && Boolean(formik.errors[field]);
	const isDisabled = mode !== "copy" && fieldConfigs.disabled;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(FormControl, {
		component: "fieldset",
		error: isError,
		children: /* @__PURE__ */ jsx(RadioGroup, {
			row: orientation === "row",
			"aria-label": label,
			name: field,
			value: formik.values[field] ?? "",
			onChange: handleChange,
			children: options?.map((option, index) => /* @__PURE__ */ jsx(FormControlLabel, {
				value: option.value,
				control: /* @__PURE__ */ jsx(Radio, {}),
				label: tTranslate(option.label, tOpts),
				disabled: isDisabled || (otherProps?.column?.disableForValues || [])?.includes?.(formik.values[field])
			}, index))
		})
	}), isError && /* @__PURE__ */ jsx(FormHelperText, {
		style: { color: theme.palette.error.main },
		children: formik.errors[field]
	})] });
};
//#endregion
//#region src/lib/components/Form/fields/autocomplete.js
var consts$2 = { limitTags: 5 };
var Field$2 = React$1.memo(({ column, field, formik, lookups, dependsOn = [], fieldConfigs = {}, mode, model, ...otherProps }) => {
	const options = useCascadingLookup({
		column,
		formik,
		lookups,
		dependsOn,
		model,
		isAutoComplete: true
	});
	let inputValue = formik.values[field] || [];
	if (!Array.isArray(inputValue)) inputValue = inputValue.split(", ").map(Number);
	const filteredCombos = options.filter((option) => inputValue.includes(option.value)) || [];
	const isDisabled = mode !== "copy" && fieldConfigs.disabled;
	const handleAutoCompleteChange = (_, newValue) => {
		let toSave = newValue?.map((val) => val.value) || [];
		if (column.dataFormat !== "array") toSave = toSave.length ? toSave.join(", ") : "";
		formik.setFieldValue(field, toSave);
	};
	return /* @__PURE__ */ jsxs(FormControl$1, {
		fullWidth: true,
		variant: "standard",
		error: formik.touched[field] && Boolean(formik.errors[field]),
		children: [/* @__PURE__ */ jsx(Autocomplete, {
			...otherProps,
			multiple: true,
			id: field,
			limitTags: column.limitTags || consts$2.limitTags,
			options: options || [],
			getOptionLabel: (option) => option.label || "",
			defaultValue: filteredCombos,
			renderInput: (params) => /* @__PURE__ */ jsx(TextField, {
				...params,
				variant: "standard"
			}),
			onChange: handleAutoCompleteChange,
			value: filteredCombos,
			size: "small",
			disabled: isDisabled
		}), formik.touched[field] && formik.errors[field] && /* @__PURE__ */ jsx(FormHelperText, { children: formik.errors[field] })]
	}, field);
});
//#endregion
//#region src/lib/components/Form/fields/CustomRenderCell.js
var brandBackgroundColor = "#182eb5";
//#endregion
//#region src/lib/components/Form/fields/dayRadio.js
var days = [
	{
		label: "Sunday",
		value: 0,
		display: "S"
	},
	{
		label: "Monday",
		value: 1,
		display: "M"
	},
	{
		label: "Tuesday",
		value: 2,
		display: "T"
	},
	{
		label: "Wednesday",
		value: 3,
		display: "W"
	},
	{
		label: "Thursday",
		value: 4,
		display: "T"
	},
	{
		label: "Friday",
		value: 5,
		display: "F"
	},
	{
		label: "Saturday",
		value: 6,
		display: "S"
	}
];
var CustomAvator = styled(Avatar)(({ theme, isSelected }) => ({
	width: 34,
	height: 34,
	padding: 1,
	margin: 1,
	backgroundColor: isSelected ? brandBackgroundColor : "#ffffff",
	border: `1px solid ${grey[500]}`,
	color: isSelected ? "white" : "black"
}));
var DayAvatar = ({ day, onClick, isSelected }) => {
	return /* @__PURE__ */ jsx(CustomAvator, {
		onClick: () => onClick(day.value),
		isSelected,
		style: { margin: "4px" },
		children: day.display
	}, day.value);
};
var DaySelection = ({ name, field, formik, expired }) => {
	const { setFieldValue } = formik;
	const { value } = formik.getFieldProps(name || field);
	const isWeekend = "1000001";
	const isWeekdays = "0111110";
	const defaultVal = "0".repeat(7);
	const [selectedDays, setSelectedDays] = useState(value || defaultVal);
	const [radioValue, setRadioValue] = useState(() => {
		if (!value) return "";
		if (value === isWeekend) return isWeekend;
		if (value === isWeekdays) return isWeekdays;
		return "Custom";
	});
	const [presetSelected, setPresetSelected] = useState(false);
	const onAssignChange = useCallback((newValue) => {
		if (Array.isArray(newValue)) {
			let finalValue = defaultVal;
			for (const val of newValue) finalValue = finalValue.substring(0, val) + "1" + finalValue.substring(val + 1);
			setSelectedDays(finalValue);
			setFieldValue(name || field, finalValue);
			setPresetSelected(true);
		} else {
			let baseValue = presetSelected ? defaultVal : selectedDays;
			const finalValue = baseValue.slice(0, newValue) + (baseValue[newValue] === "1" ? "0" : "1") + baseValue.slice(newValue + 1);
			setSelectedDays(finalValue);
			setFieldValue(name || field, finalValue);
			setRadioValue("Custom");
			setPresetSelected(false);
		}
	}, [
		presetSelected,
		defaultVal,
		selectedDays,
		name,
		field,
		setFieldValue
	]);
	const theme = useTheme();
	const isError = formik.touched[field] && Boolean(formik.errors[field]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(FormControl, {
		component: "fieldset",
		error: isError,
		children: /* @__PURE__ */ jsxs(RadioGroup, {
			row: true,
			name: name || field,
			value: radioValue,
			onChange: (event) => {
				const val = event.target.value;
				setRadioValue(val);
				if (val !== "Custom") {
					setSelectedDays(val);
					setFieldValue(name || field, val);
					setPresetSelected(true);
				} else {
					setSelectedDays(defaultVal);
					setFieldValue(name || field, defaultVal);
					setPresetSelected(false);
				}
			},
			children: [
				/* @__PURE__ */ jsx(FormControlLabel, {
					value: isWeekend,
					control: /* @__PURE__ */ jsx(Radio, {}),
					label: "Weekends (Sat - Sun)",
					onClick: () => onAssignChange([0, 6])
				}),
				/* @__PURE__ */ jsx(FormControlLabel, {
					value: isWeekdays,
					control: /* @__PURE__ */ jsx(Radio, {}),
					label: "Weekdays (Mon - Fri)",
					onClick: () => onAssignChange([
						1,
						2,
						3,
						4,
						5
					])
				}),
				/* @__PURE__ */ jsx(FormControlLabel, {
					value: "Custom",
					control: /* @__PURE__ */ jsx(Radio, {}),
					label: "Specific days"
				}),
				days.map((day, index) => /* @__PURE__ */ jsx(DayAvatar, {
					day,
					onClick: () => onAssignChange(index),
					isSelected: radioValue === "Custom" && selectedDays[index] === "1",
					disabled: expired
				}, day.value))
			]
		})
	}), isError && /* @__PURE__ */ jsx(FormHelperText, {
		style: { color: theme.palette.error.main },
		children: formik.errors[field]
	})] });
};
//#endregion
//#region src/lib/components/Form/fields/chipInput.js
var Field$1 = ({ isAdd, column, field, formik, otherProps, fieldConfigs = {}, mode }) => {
	const theme = useTheme();
	let inputValue = formik.values[field] || [];
	if (!Array.isArray(inputValue)) inputValue = inputValue.split(",").map((item) => item.trim());
	const isDisabled = React$1.useMemo(() => {
		if (mode === "copy") return true;
		if (typeof fieldConfigs.disabled !== "undefined") return fieldConfigs.disabled;
		if (typeof column.disabled === "function") return column.disabled({
			isAdd,
			formik
		});
		return Boolean(column.disabled);
	}, [
		mode,
		fieldConfigs.disabled,
		column.disabled
	]);
	const fixedOptions = column.hasDefault && !isAdd ? [inputValue[0]] : [];
	const handleAutoCompleteChange = useCallback((e, newValue, action, item = {}) => {
		const lastElement = newValue.pop()?.trim();
		if (!newValue.includes(lastElement)) newValue.push(lastElement);
		if (fixedOptions && fixedOptions.includes(item.option) && action === "removeOption") newValue = [item.option];
		if (column.dataFormat !== "array") newValue = newValue.length ? newValue.join(",") : "";
		formik.setFieldValue(field, newValue);
	}, [formik, field]);
	return /* @__PURE__ */ jsxs(FormControl$1, {
		fullWidth: true,
		variant: "standard",
		error: formik.touched[field] && Boolean(formik.errors[field]),
		children: [/* @__PURE__ */ jsx(Autocomplete, {
			...otherProps,
			multiple: true,
			id: field,
			freeSolo: true,
			value: inputValue,
			options: [],
			renderInput: (params) => /* @__PURE__ */ jsx(TextField, {
				...params,
				variant: "standard",
				InputProps: {
					...params.InputProps,
					sx: {
						...params.InputProps?.sx,
						...isDisabled && { backgroundColor: theme.palette?.action?.disabled }
					}
				}
			}),
			onChange: handleAutoCompleteChange,
			size: "small",
			renderTags: (tagValue, getTagProps) => tagValue.map((option, index) => {
				const { key, ...tagProps } = getTagProps({ index });
				return /* @__PURE__ */ jsx(Chip, {
					label: option,
					...tagProps,
					disabled: fixedOptions.includes(option)
				}, key);
			}),
			disabled: isDisabled
		}), formik.touched[field] && formik.errors[field] && /* @__PURE__ */ jsx(FormHelperText, { children: formik.errors[field] })]
	}, field);
};
//#endregion
//#region src/lib/components/Form/fields/treeCheckBox.js
/**
* Builds a tree structure from a flat array of data.
* 
* @param {Array<Object>} data - The array of items to build the tree from.
* @param {string|number} data[].ParentId - The ID of the parent item.
* @param {string} data[].ParentName - The label for the parent item.
* @param {string|number} data[].value - The unique value of the item.
* @param {string} data[].label - The label for the item.
* @returns {Array<Object>} The tree structure containing parent and child nodes.
*/
var buildTree = (data = []) => {
	const tree = {};
	data.forEach((item) => {
		if (item.ParentId && tree[item.ParentId]) tree[item.ParentId].children.push({
			value: item.value?.toString(),
			label: item.label
		});
		else tree[item.ParentId] = {
			label: item.ParentName,
			value: "Parent" + item.ParentId.toString(),
			children: [{
				value: item.value?.toString(),
				label: item.label
			}]
		};
	});
	return Object.values(tree);
};
/**
* Renders a tree view component with checkboxes for selection.
* 
* @param {Object} props - The properties passed to the component.
* @param {Object} props.column - The column metadata, including lookup information.
* @param {string} props.field - The name of the field in the form to bind.
* @param {Object} props.formik - The Formik instance for managing form state.
* @param {Object} props.lookups - The lookup data for populating tree items.
* @param {Array<Object>} props.data - Additional data for the tree.
* @param {Object} props.otherProps - Other props for customization.
* @param {Object} props.model - The model configuration.
* @param {Object} props.fieldConfigs - Configuration for the field, including disabled state.
* @param {string} props.mode - The mode of the form, such as 'edit' or 'copy'.
* @returns {JSX.Element} The rendered tree view component.
*/
function treeCheckBox({ column, field, formik, lookups, fieldConfigs, mode }) {
	const tree = buildTree(lookups ? lookups[column.lookup] : []);
	const inputValue = formik.values[field]?.length ? formik.values[field].split(", ") : [];
	let isDisabled;
	if (mode !== "copy") isDisabled = fieldConfigs?.disabled;
	const handleChange = (_, newValue) => {
		formik.setFieldValue(field, newValue?.join(", ") || "");
	};
	return /* @__PURE__ */ jsx(Box, {
		sx: { minHeight: 350 },
		children: /* @__PURE__ */ jsx(SimpleTreeView, {
			selectedItems: inputValue,
			onSelectedItemsChange: handleChange,
			disabled: isDisabled,
			multiSelect: true,
			checkboxSelection: true,
			children: tree.map((node) => /* @__PURE__ */ jsx(TreeItem, {
				itemId: node.value,
				label: node.label,
				children: node.children.map((child) => /* @__PURE__ */ jsx(TreeItem, {
					itemId: child.value,
					label: child.label
				}, child.value))
			}, node.value))
		})
	});
}
//#endregion
//#region src/lib/components/Form/fields/fileUpload.js
var consts$1 = { maxLength: 500 };
var { errorMapping } = utils;
var MB = 1024 * 1024;
function FileUpload({ column, field, formik }) {
	const inputValue = formik.values[field] || "";
	const { getApiEndpoint } = useStateContext();
	const { maxSize, formats } = column;
	const uploadApi = getApiEndpoint("upload");
	const mediaApi = getApiEndpoint("media");
	const url = getApiEndpoint();
	const [formState, setFormState] = useState({
		isExternal: "no",
		selectedFile: null
	});
	const [loading, setLoading] = useState(false);
	const snackbar = useSnackbar();
	const { getParams, useParams } = useRouter();
	const { associationId } = useParams() || getParams;
	const id = associationId?.split("-")[0] || 1;
	const handleRadioChange = (event) => {
		const isExternal = event.target.value;
		setFormState({
			...formState,
			isExternal,
			selectedFile: null
		});
		formik.setFieldValue(field, formik.values[field]);
	};
	const handleInputChange = (e) => {
		formik.setFieldValue(field, e.target.value);
	};
	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		if (!selectedFile) return;
		if (maxSize && selectedFile.size > maxSize * MB) {
			snackbar.showError(`File size exceeds the maximum limit of ${maxSize} MB.`);
			return;
		}
		if (Array.isArray(formats) && !formats.includes(selectedFile.type)) {
			snackbar.showError(`Invalid file format. Allowed formats: ${formats.join(", ")}.`);
			return;
		}
		setFormState((prev) => ({
			...prev,
			selectedFile
		}));
	};
	const handleFileUpload = async () => {
		if (!formState.selectedFile) return;
		setLoading(true);
		try {
			const formData = new FormData();
			formData.append("file", formState.selectedFile);
			formData.append("DocumentGroupId", formik.values.DocumentGroupId);
			formData.append("AssociationId", id);
			const data = (await transport({
				method: "POST",
				url: uploadApi,
				data: formData,
				headers: { "Content-Type": "multipart/form-data" },
				credentials: "include"
			})).data || {};
			if (!data.success) {
				snackbar.showError(data.message || "Upload failed");
				return;
			}
			const fileUrl = mediaApi + "/" + data.filePath;
			formik.setFieldValue(field, fileUrl);
		} catch (error) {
			const statusCode = (error.message.match(/status code (\d{3})/) || [])[1];
			snackbar.showError(errorMapping[statusCode]);
		} finally {
			setLoading(false);
		}
	};
	const host = new URL(url, window.location.origin).hostname.toLowerCase();
	React.useEffect(() => {
		setFormState({
			...formState,
			isExternal: !inputValue.toLowerCase().includes(host) ? "yes" : "no"
		});
	}, [inputValue, setFormState]);
	const isLengthExceeded = formik.values[field]?.length > (column.max || consts$1.maxLength);
	const colorScheme = isLengthExceeded ? "red" : "";
	return /* @__PURE__ */ jsxs(Box$1, { children: [
		/* @__PURE__ */ jsxs(Box$1, {
			sx: {
				display: "flex",
				alignItems: "center",
				marginBottom: 2
			},
			children: [/* @__PURE__ */ jsx(Typography$1, {
				variant: "body1",
				sx: {
					width: "150px",
					marginRight: 2
				},
				children: "External Link?"
			}), /* @__PURE__ */ jsxs(RadioGroup, {
				row: true,
				value: formState.isExternal,
				onChange: handleRadioChange,
				"aria-label": "is-external-link",
				name: "is-external-link",
				children: [/* @__PURE__ */ jsx(FormControlLabel, {
					value: "yes",
					control: /* @__PURE__ */ jsx(Radio, {}),
					label: "Yes"
				}), /* @__PURE__ */ jsx(FormControlLabel, {
					value: "no",
					control: /* @__PURE__ */ jsx(Radio, {}),
					label: "No"
				})]
			})]
		}),
		/* @__PURE__ */ jsxs(Box$1, {
			sx: {
				display: "flex",
				alignItems: "center",
				marginBottom: 2
			},
			children: [/* @__PURE__ */ jsx(Typography$1, {
				variant: "body1",
				sx: {
					width: "150px",
					marginRight: 2
				},
				children: "Document Link"
			}), /* @__PURE__ */ jsxs(Box$1, {
				sx: {
					flex: 1,
					display: "flex",
					flexDirection: "column"
				},
				children: [formState.isExternal === "yes" ? /* @__PURE__ */ jsx(TextField$1, {
					fullWidth: true,
					value: inputValue,
					sx: { "& .MuiOutlinedInput-root": {
						"& fieldset": { borderColor: colorScheme },
						"&.Mui-focused fieldset": { borderColor: colorScheme },
						"&:hover fieldset": { borderColor: colorScheme }
					} },
					onChange: handleInputChange,
					placeholder: "Enter external link"
				}) : /* @__PURE__ */ jsx(TextField$1, {
					fullWidth: true,
					value: inputValue,
					placeholder: "Link autopopulated once uploaded",
					InputProps: { readOnly: true }
				}), isLengthExceeded && /* @__PURE__ */ jsxs(Typography$1, {
					sx: { color: "red" },
					children: [
						"Maximum allowed length for the document link is ",
						column.max,
						" characters."
					]
				})]
			})]
		}),
		formState.isExternal === "no" && /* @__PURE__ */ jsxs(Box$1, {
			sx: {
				display: "flex",
				alignItems: "center",
				gap: 2
			},
			children: [
				/* @__PURE__ */ jsxs(Button$1, {
					variant: "outlined",
					component: "label",
					disabled: loading,
					children: ["Choose File", /* @__PURE__ */ jsx("input", {
						type: "file",
						hidden: true,
						onChange: handleFileChange
					})]
				}),
				formState.selectedFile && /* @__PURE__ */ jsx(Tooltip, {
					title: formState.selectedFile.name,
					arrow: true,
					children: /* @__PURE__ */ jsx(Typography$1, {
						variant: "body2",
						children: formState.selectedFile.name.length > 20 ? `${formState.selectedFile.name.substring(0, 20)}...` : formState.selectedFile.name
					})
				}),
				/* @__PURE__ */ jsx(Button$1, {
					variant: "contained",
					color: "primary",
					onClick: handleFileUpload,
					disabled: !formState.selectedFile || loading,
					children: loading ? /* @__PURE__ */ jsx(CircularProgress, {
						size: 24,
						color: "inherit"
					}) : "Upload File"
				})
			]
		})
	] });
}
//#endregion
//#region src/lib/components/Form/fields/jsonInput.js
var Field = ({ field, formik }) => {
	const [state, setState] = React$1.useState({});
	const debouncedState = useDebounce(state, 300);
	React$1.useEffect(() => {
		if (!formik.values[field]) return;
		try {
			setState(JSON.parse(formik.values[field]));
		} catch (e) {
			setState({});
		}
	}, [formik.values[field]]);
	React$1.useEffect(() => {
		const nextValue = JSON.stringify(debouncedState);
		if (formik.values[field] !== nextValue) formik.setFieldValue(field, nextValue);
	}, [
		debouncedState,
		field,
		formik,
		formik.values[field]
	]);
	const handleChange = (key, value) => {
		setState({
			...state,
			[key]: value
		});
	};
	return /* @__PURE__ */ jsx(FormControl$1, {
		fullWidth: true,
		variant: "standard",
		error: formik.touched[field] && Boolean(formik.errors[field]),
		style: { marginBottom: "1rem" },
		children: Object.keys(state).map((key) => /* @__PURE__ */ jsxs("div", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				marginBottom: "0.5rem"
			},
			children: [/* @__PURE__ */ jsxs(Typography, {
				variant: "body1",
				sx: {
					width: "180px",
					marginRight: 2
				},
				children: [key, ":"]
			}), /* @__PURE__ */ jsx(Input$1, {
				id: key,
				name: key,
				value: state[key],
				onChange: (e) => handleChange(key, e.target.value),
				fullWidth: true,
				style: { flex: 2 }
			})]
		}, key))
	}, field);
};
//#endregion
//#region src/lib/components/Form/field-mapper.js
var fieldMappers = {
	"boolean": Field$8,
	"select": SelectField,
	"string": field$1,
	"number": Field$7,
	"password": Field$6,
	"date": Field$5,
	"dateTime": Field$4,
	"time": field,
	"oneToMany": TransferField,
	"radio": Field$3,
	"autocomplete": Field$2,
	"dayRadio": DaySelection,
	"email": field$1,
	"chipInput": Field$1,
	"treeCheckbox": treeCheckBox,
	"fileUpload": FileUpload,
	"json": Field
};
var gridContainerStyle = {
	paddingTop: "2.5px",
	paddingBottom: "2.5px"
};
var sectionMarginTop = "20px";
var ImportantSpan = styled$2("span")({ color: "red !important" });
var RenderSteps = ({ tabColumns, model, formik, data, onChange, combos, lookups, fieldConfigs, mode, handleSubmit }) => {
	const [skipped, setSkipped] = React$1.useState(/* @__PURE__ */ new Set());
	const { tOpts, tTranslate } = useModelTranslation(model);
	const { activeStep, setActiveStep } = React$1.useContext(ActiveStepContext);
	const skipSteps = {};
	for (let index = 0, len = model.columns.length; index < len; index++) {
		const { field, skip } = model.columns[index];
		if (skip) skipSteps[skip.step] = formik.values[field];
	}
	const isStepSkipped = (step) => {
		return skipped.has(step) || skipSteps[step];
	};
	const isLastStep = () => {
		for (let nextStep = activeStep + 1; nextStep < tabColumns.length; nextStep++) if (!isStepSkipped(nextStep)) return false;
		return true;
	};
	const handleNext = () => {
		let nextStep = activeStep + 1;
		while (skipSteps[nextStep]) nextStep++;
		setSkipped((prevSkipped) => new Set(prevSkipped).add(activeStep));
		if (nextStep >= tabColumns.length || isLastStep()) handleSubmit();
		else setActiveStep(nextStep);
	};
	const handleBack = () => {
		let prevStep = activeStep - 1;
		while (skipSteps[prevStep] && prevStep > 0) prevStep--;
		setActiveStep(prevStep);
	};
	if (!tabColumns?.length) return null;
	const currentStep = tabColumns[activeStep];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Stepper, {
		activeStep,
		sx: { marginBottom: "20px" },
		children: tabColumns.map(({ title, key }, index) => {
			return /* @__PURE__ */ jsx(Step, {
				completed: isStepSkipped(index),
				children: /* @__PURE__ */ jsx(StepLabel, { children: /* @__PURE__ */ jsx(Typography$1, {
					sx: { fontSize: "20px" },
					children: tTranslate(title, tOpts)
				}) })
			}, key);
		})
	}), /* @__PURE__ */ jsxs(React$1.Fragment, { children: [/* @__PURE__ */ jsx(RenderColumns, {
		formElements: currentStep.items,
		model,
		formik,
		data,
		onChange,
		combos,
		lookups,
		fieldConfigs,
		mode
	}), /* @__PURE__ */ jsxs(Box, {
		sx: {
			display: "flex",
			flexDirection: "row",
			pt: 2,
			mr: 2
		},
		children: [activeStep !== 0 ? /* @__PURE__ */ jsx(Button, {
			color: "inherit",
			disabled: activeStep === 0,
			onClick: handleBack,
			variant: "contained",
			sx: { mr: 2 },
			children: tTranslate("Back", tOpts)
		}) : null, /* @__PURE__ */ jsx(Button, {
			onClick: handleNext,
			variant: "contained",
			children: isLastStep() ? tTranslate("Finish", tOpts) : tTranslate("Next", tOpts)
		})]
	})] })] });
};
var RenderGroups = ({ tabColumns, model, formik, data, onChange, combos, lookups, fieldConfigs, mode, isAdd }) => {
	const { tOpts, tTranslate } = useModelTranslation(model);
	if (!tabColumns?.length) return null;
	return /* @__PURE__ */ jsx(Fragment, { children: tabColumns.map(({ key, title, items }, index) => /* @__PURE__ */ jsxs(Box, {
		sx: {
			position: "relative",
			border: "1px solid",
			borderColor: "divider",
			borderRadius: 2,
			px: 3,
			pt: 3,
			pb: 2,
			mt: index === 0 ? 0 : sectionMarginTop
		},
		children: [/* @__PURE__ */ jsx(Typography$1, {
			component: "h3",
			variant: "h6",
			sx: {
				position: "absolute",
				top: "-0.75em",
				left: 16,
				fontSize: "18px",
				fontWeight: "bold",
				lineHeight: 1.5,
				bgcolor: "background.paper",
				px: "6px"
			},
			children: tTranslate(title, tOpts)
		}), /* @__PURE__ */ jsx(RenderColumns, {
			isAdd,
			formElements: items,
			model,
			formik,
			data,
			onChange,
			combos,
			lookups,
			fieldConfigs,
			mode
		})]
	}, key)) });
};
var RenderColumns = ({ formElements, model, formik, data, onChange, combos, lookups, fieldConfigs, mode, isAdd }) => {
	const { tOpts, tTranslate } = useModelTranslation(model);
	if (!formElements?.length) return null;
	return /* @__PURE__ */ jsx(Fragment, { children: formElements.map(({ Component, column, field, label, otherProps }, key) => {
		const isGridComponent = typeof column.relation === "function";
		return /* @__PURE__ */ jsxs(Grid$1, {
			container: true,
			spacing: 2,
			sx: {
				marginTop: "1rem",
				marginBottom: "1rem"
			},
			alignItems: isGridComponent ? "flex-start" : "center",
			children: [column?.showLabel !== false ? /* @__PURE__ */ jsx(Grid$1, {
				size: { xs: 3 },
				sx: gridContainerStyle,
				children: /* @__PURE__ */ jsxs(Typography$1, {
					sx: {
						fontSize: "16px",
						fontWeight: "bold"
					},
					className: "form-label",
					children: [
						tTranslate(column.label || field, tOpts),
						": ",
						column.required && /* @__PURE__ */ jsx(ImportantSpan, { children: "*" })
					]
				})
			}) : null, /* @__PURE__ */ jsx(Grid$1, {
				size: { xs: isGridComponent ? 12 : 9 },
				sx: gridContainerStyle,
				children: /* @__PURE__ */ jsx(Component, {
					isAdd,
					model,
					fieldConfigs: fieldConfigs[field],
					mode,
					column,
					field,
					label,
					formik,
					data,
					onChange,
					combos,
					lookups,
					tTranslate,
					tOpts,
					...otherProps
				})
			})]
		}, key);
	}) });
};
var getFormConfig = function({ columns, tabs = {}, id, searchParams }) {
	const formElements = [], tabColumns = {};
	for (const tab in tabs) tabColumns[tab] = [];
	for (const column of columns) {
		const fieldType = column.type;
		if (column.label === null) continue;
		const { field, label, tab } = column;
		const otherProps = {};
		if (column.options) otherProps.options = column.options;
		if (column.dependsOn) otherProps.dependsOn = column.dependsOn;
		const Component = fieldMappers[fieldType];
		if (!Component || column.hideInAddGrid && id === "0") continue;
		(tab && tabs[tab] ? tabColumns[tab] : formElements).push({
			Component,
			field,
			label,
			column: {
				...column,
				readOnly: searchParams.has("showRelation") || column.readOnly
			},
			otherProps
		});
	}
	const tabsData = [];
	for (const tabColumn in tabColumns) tabsData.push({
		key: tabColumn,
		title: tabs[tabColumn],
		items: tabColumns[tabColumn]
	});
	return {
		formElements,
		tabColumns: tabsData
	};
};
var FormLayout = ({ model, formik, data, combos, onChange, lookups, id: displayId, fieldConfigs, mode, handleSubmit }) => {
	const isAdd = utils.emptyIdValues.includes(displayId);
	const { formElements, tabColumns, showTabs, showGrouped } = React$1.useMemo(() => {
		const tabbedMode = model.formConfig?.showTabbed;
		const showTabs = tabbedMode === true;
		const showGrouped = tabbedMode === "group" || tabbedMode !== true && tabbedMode !== "group" && model.formConfig?.showGrouped === true;
		const searchParams = new URLSearchParams(window.location.search);
		const tabs = showTabs || showGrouped ? model.tabs : {};
		const { formElements, tabColumns } = getFormConfig({
			columns: model.columns,
			tabs,
			id: displayId,
			searchParams
		});
		const hasTabColumns = tabColumns.length > 0;
		const showTabbedLayout = showTabs && hasTabColumns;
		return {
			formElements,
			tabColumns,
			showTabs: showTabbedLayout,
			showGrouped: !showTabbedLayout && showGrouped && hasTabColumns
		};
	}, [model]);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(RenderColumns, {
		isAdd,
		formElements,
		model,
		formik,
		data,
		onChange,
		combos,
		lookups,
		fieldConfigs,
		mode
	}), /* @__PURE__ */ jsxs("div", {
		style: { marginTop: showTabs ? sectionMarginTop : 0 },
		children: [showTabs && /* @__PURE__ */ jsx(RenderSteps, {
			tabColumns,
			model,
			formik,
			data,
			onChange,
			combos,
			lookups,
			fieldConfigs,
			mode,
			handleSubmit
		}), showGrouped && /* @__PURE__ */ jsx(RenderGroups, {
			isAdd,
			tabColumns,
			model,
			formik,
			data,
			onChange,
			combos,
			lookups,
			fieldConfigs,
			mode
		})]
	})] });
};
//#endregion
//#region src/lib/components/Form/relations.js
function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;
	return /* @__PURE__ */ jsx("div", {
		role: "tabpanel",
		hidden: value !== index,
		id: `simple-tabpanel-${index}`,
		"aria-labelledby": `simple-tab-${index}`,
		...other,
		children: value === index && /* @__PURE__ */ jsx(Box, {
			sx: { p: 3 },
			children
		})
	});
}
function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
}
/**
* Memoized ChildGrid Component
* @param {Object} params - Parameters for rendering the child grid
* @param {string} params.relation - Name of the related model
* @param {Object} params.parentFilters - Filters to apply to the parent
* @param {Object} params.parent - Parent data
* @param {Object} params.where - Conditions for the grid
* @param {Array} params.models - List of available models
*/
var ChildGrid = memo(({ relation, parentFilters, parent, where, models, readOnly }) => {
	const modelConfigOfChildGrid = models.find(({ name }) => name === relation);
	if (!modelConfigOfChildGrid) return null;
	const config = {
		...modelConfigOfChildGrid,
		hideBreadcrumb: true
	};
	const ChildModel = config instanceof UiModel ? config : new UiModel(config);
	if (!ChildModel) return null;
	return /* @__PURE__ */ jsx(ChildModel.ChildGrid, {
		readOnly,
		parentFilters,
		parent,
		model: config,
		where,
		isChildGrid: true
	});
});
/**
* Relations component using MUI Tabs
* Renders a tab for each relation, and a ChildGrid in each panel
*/
var Relations = React.memo(({ relations, parent, where = [], models, relationFilters, readOnly }) => {
	const [tabIndex, setTabIndex] = useState(0);
	const handleChange = (_, newValue) => {
		setTabIndex(newValue);
	};
	return /* @__PURE__ */ jsxs(Box, {
		sx: { width: "100%" },
		children: [/* @__PURE__ */ jsx(Box, {
			sx: {
				borderBottom: 1,
				borderColor: "divider"
			},
			children: /* @__PURE__ */ jsx(Tabs, {
				value: tabIndex,
				onChange: handleChange,
				"aria-label": "relations tabs",
				children: relations.map((relation, idx) => {
					const modelConfigOfChildGrid = models.find(({ name }) => name === relation) || {};
					return /* @__PURE__ */ jsx(Tab, {
						label: modelConfigOfChildGrid.listTitle || modelConfigOfChildGrid.title || relation,
						...a11yProps(idx)
					}, relation);
				})
			})
		}), relations.map((relation, idx) => /* @__PURE__ */ jsx(CustomTabPanel, {
			value: tabIndex,
			index: idx,
			children: /* @__PURE__ */ jsx(ChildGrid, {
				readOnly,
				relation,
				models,
				parentFilters: relationFilters[relation] || [],
				parent,
				where
			}, relation)
		}, relation))]
	});
});
//#endregion
//#region src/lib/components/Form/Form.js
var ActiveStepContext = createContext(1);
var defaultFieldConfigs = {};
var consts = {
	object: "object",
	function: "function",
	baseData: "baseData",
	string: "string",
	create: "Create",
	copy: "Copy",
	edit: "Edit",
	number: "number",
	loadIdIndex: 1,
	editIdIndex: 0
};
var Form = ({ model, api, models, relationFilters = {}, permissions = {}, Layout = FormLayout, baseSaveData = {}, sx, readOnly, beforeSubmit, deletePromptText, detailPanelId = null, onCancel, onSaveSuccess }) => {
	const formTitle = model.formTitle || model.title;
	const { translate, tOpts, tTranslate } = useModelTranslation(model);
	const { navigate, getParams, useParams, pathname } = useRouter();
	const { relations = [] } = model;
	const { stateData, buildUrl, setPageTitle } = useStateContext();
	const params = useParams() || getParams;
	const { id: idWithOptions = "" } = params;
	const id = detailPanelId || idWithOptions.split("-")[consts.editIdIndex];
	const searchParams = new URLSearchParams(window.location.search);
	const baseDataFromParams = searchParams.has(consts.baseData) && searchParams.get(consts.baseData);
	if (baseDataFromParams) {
		const parsedData = JSON.parse(baseDataFromParams);
		if (typeof parsedData === consts.object && parsedData !== null) baseSaveData = {
			...baseSaveData,
			...parsedData
		};
	}
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});
	const [lookups, setLookups] = useState({});
	const [isDeleting, setIsDeleting] = useState(false);
	const snackbar = useSnackbar();
	const [validationSchema, setValidationSchema] = useState(null);
	const [activeStep, setActiveStep] = useState(0);
	const [isDiscardDialogOpen, setIsDiscardDialogOpen] = useState(false);
	const [deleteError, setDeleteError] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const fieldConfigs = typeof model.applyFieldConfig === consts.function ? model.applyFieldConfig({
		data,
		lookups
	}) : defaultFieldConfigs;
	const gridApi = buildUrl(model.api);
	const mode = idWithOptions.includes("-") && idWithOptions.split("-")[0] === "0" ? "copy" : "";
	const { canEdit } = getPermissions({
		userData: stateData.userData || {},
		model,
		userDefinedPermissions: {
			add: true,
			edit: true,
			delete: true,
			...model.permissions,
			...permissions
		}
	});
	const { hideBreadcrumb = false, navigateBack } = model;
	const recordEditable = !("canEdit" in data) || data.canEdit;
	const handleNavigation = useCallback(() => {
		let navigatePath;
		switch (typeof navigateBack) {
			case consts.function:
				navigatePath = navigateBack({
					params,
					searchParams,
					data
				});
				break;
			case consts.number:
			case consts.string:
				navigatePath = navigateBack;
				break;
			default:
				navigatePath = pathname.substring(0, pathname.lastIndexOf("/"));
				break;
		}
		navigate(navigatePath);
	}, [
		navigateBack,
		navigate,
		params,
		searchParams,
		data,
		pathname
	]);
	const isNew = useMemo(() => utils.emptyIdValues.includes(id), [id]);
	const initialValues = useMemo(() => isNew ? {
		...model.initialValues,
		...data,
		...baseSaveData
	} : {
		...baseSaveData,
		...model.initialValues,
		...data
	}, [
		model.initialValues,
		data,
		id
	]);
	const formApi = api || gridApi;
	const idToLoad = useMemo(() => {
		if (detailPanelId) return detailPanelId;
		const options = idWithOptions.split("-");
		return options.length > 1 ? options[consts.loadIdIndex] : id;
	}, [
		detailPanelId,
		idWithOptions,
		id
	]);
	const loadRecord = useCallback(async () => {
		setIsLoading(true);
		try {
			setActiveRecord(await getRecord({
				api: formApi,
				model,
				id: idToLoad
			}));
		} catch (error) {
			errorOnLoad("Could not load record", error.message);
		} finally {
			setIsLoading(false);
		}
	}, [
		formApi,
		model,
		idToLoad
	]);
	useEffect(() => {
		loadRecord();
	}, [
		id,
		idToLoad,
		model,
		formApi,
		loadRecord
	]);
	useEffect(() => {
		setValidationSchema(model.getValidationSchema({
			id,
			tTranslate,
			tOpts
		}));
	}, [
		id,
		model,
		setValidationSchema,
		translate,
		tOpts,
		tTranslate
	]);
	const formik = useFormik({
		enableReinitialize: true,
		initialValues,
		validationSchema,
		validateOnBlur: model?.validateOnBlur ?? false,
		onSubmit: async (values, { resetForm }) => {
			Object.keys(values).forEach((key) => {
				if (typeof values[key] === consts.string) values[key] = values[key].trim();
			});
			setIsLoading(true);
			saveRecord({
				id,
				api: gridApi,
				values,
				model
			}).then((success) => {
				if (!success) return;
				if (model.reloadOnSave) return window.location.reload();
				if (typeof onSaveSuccess === consts.function) onSaveSuccess();
				const message = success.info ? success.info : `Record ${id === 0 ? "Added" : "Updated"} Successfully.`;
				snackbar.showMessage(tTranslate(message, tOpts));
				/**
				* Handle navigation after form operations
				* By default, the form navigates back to the grid after save/cancel operations.
				* This behavior can be controlled by setting navigateBack "false" / false in model config which disables navigation completely.
				*/
				navigateBack !== false && handleNavigation();
				resetForm({ values: formik.values });
			}).catch((err) => {
				snackbar.showError(tTranslate("An error occurred, please try after some time.", tOpts), err);
				if (model.reloadOnSave) resetForm();
			}).finally(() => {
				setIsLoading(false);
			});
		}
	});
	const handleDiscardChanges = useCallback(() => {
		formik.resetForm();
		setIsDiscardDialogOpen(false);
		if (typeof onCancel === consts.function) onCancel();
		navigateBack !== false && handleNavigation();
	}, [
		formik,
		onCancel,
		navigateBack,
		handleNavigation
	]);
	const errorOnLoad = useCallback((title, error) => {
		setIsLoading(false);
		snackbar.showError(tTranslate(title, tOpts), error);
		handleNavigation();
	}, [
		snackbar,
		handleNavigation,
		tTranslate,
		tOpts
	]);
	const setActiveRecord = function({ id, title, record, lookups }) {
		const isCopy = idWithOptions.indexOf("-") > -1;
		const isNew = !id || id === "0";
		const pageTitle = isNew ? consts.create : isCopy ? consts.copy : consts.edit;
		const linkColumn = isNew ? "" : record[model.linkColumn];
		const breadcrumbs = [{ text: model.breadCrumbs }, { text: pageTitle }];
		if (isCopy) record[model.linkColumn] = "";
		model.columns.forEach((item) => {
			if (item.skipCopy && isCopy) record[item.field] = "";
		});
		setData(record);
		setLookups(lookups);
		setIsLoading(false);
		if (linkColumn !== "") breadcrumbs.push({ text: linkColumn });
		setPageTitle({
			showBreadcrumbs: true,
			breadcrumbs
		});
	};
	const handleFormCancel = useCallback((event) => {
		if (formik.dirty && recordEditable) setIsDiscardDialogOpen(true);
		else {
			if (typeof onCancel === consts.function) onCancel();
			navigateBack !== false && handleNavigation();
		}
		event.preventDefault();
	}, [
		formik.dirty,
		recordEditable,
		onCancel,
		navigateBack,
		handleNavigation
	]);
	const handleDelete = useCallback(async () => {
		try {
			setIsDeleting(true);
			if (await deleteRecord({
				id,
				api: api || model.api,
				model
			}) === true) {
				snackbar.showMessage(tTranslate("Record Deleted Successfully.", tOpts));
				navigateBack !== false && handleNavigation();
			}
		} catch (error) {
			snackbar.showError(tTranslate("An error occurred, please try after some time.", tOpts), error?.message);
		} finally {
			setIsDeleting(false);
		}
	}, [
		id,
		api,
		model.api,
		snackbar,
		setErrorMessage,
		model,
		navigateBack,
		handleNavigation,
		tTranslate,
		tOpts
	]);
	const clearError = () => {
		setErrorMessage(null);
		setIsDeleting(false);
	};
	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		});
	}, [data]);
	const handleSubmit = useCallback(async (e) => {
		if (e) e.preventDefault();
		if (typeof beforeSubmit === consts.function) await beforeSubmit({
			formik,
			model
		});
		const { errors } = formik;
		formik.handleSubmit();
		const fieldName = Object.keys(errors)[0];
		const errorMessage = errors[fieldName];
		if (errorMessage) snackbar.showError(tTranslate(errorMessage, tOpts), null, "error");
		const fieldConfig = model.columns.find((column) => column.field === fieldName) || {};
		if (fieldConfig.tab) setActiveStep(Object.keys(model.tabs).indexOf(fieldConfig.tab));
	}, [
		beforeSubmit,
		formik,
		model,
		snackbar,
		setActiveStep,
		tTranslate,
		tOpts
	]);
	const breadcrumbs = [{ text: tTranslate(formTitle, tOpts) }, { text: id === "0" ? tTranslate("New", tOpts) : tTranslate("Update", tOpts) }];
	const showRelations = Number(id) !== 0 && Boolean(relations.length);
	const showSaveButton = searchParams.has("showRelation");
	const readOnlyRelations = !recordEditable || data.readOnlyRelations;
	deletePromptText = deletePromptText || tTranslate("Are you sure you want to delete ?", tOpts);
	const { showPageTitle = true } = model;
	return /* @__PURE__ */ jsxs(Fragment, { children: [showPageTitle && /* @__PURE__ */ jsx(PageTitle_default, {
		navigate,
		title: formTitle,
		showBreadcrumbs: !hideBreadcrumb,
		breadcrumbs,
		model,
		enableBackButton: navigateBack !== void 0
	}), /* @__PURE__ */ jsx(ActiveStepContext.Provider, {
		value: {
			activeStep,
			setActiveStep
		},
		children: /* @__PURE__ */ jsxs(Paper, {
			sx: {
				padding: 2,
				...sx
			},
			children: [
				isLoading ? /* @__PURE__ */ jsx(Box, {
					sx: {
						display: "flex",
						justifyContent: "center",
						py: 4
					},
					children: /* @__PURE__ */ jsx(CircularProgress$1, {})
				}) : /* @__PURE__ */ jsxs("form", { children: [/* @__PURE__ */ jsxs(Stack$1, {
					direction: "row",
					spacing: 2,
					justifyContent: "flex-end",
					mb: 1,
					children: [
						canEdit && recordEditable && !showSaveButton && !readOnly && /* @__PURE__ */ jsx(Button, {
							variant: "contained",
							type: "submit",
							color: "success",
							onClick: handleSubmit,
							children: tTranslate("Save", tOpts)
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "contained",
							type: "cancel",
							color: "error",
							onClick: handleFormCancel,
							children: tTranslate("Cancel", tOpts)
						}),
						permissions.delete && /* @__PURE__ */ jsx(Button, {
							variant: "contained",
							color: "error",
							onClick: () => setIsDeleting(true),
							children: tTranslate("Delete", tOpts)
						})
					]
				}), /* @__PURE__ */ jsx(Layout, {
					model,
					formik,
					data,
					fieldConfigs,
					onChange: handleChange,
					lookups,
					id,
					handleSubmit,
					mode
				})] }),
				errorMessage && /* @__PURE__ */ jsxs(DialogComponent, {
					open: !!errorMessage,
					onConfirm: clearError,
					onCancel: clearError,
					title: "Info",
					hideCancelButton: true,
					children: [" ", errorMessage]
				}),
				/* @__PURE__ */ jsx(DialogComponent, {
					open: isDiscardDialogOpen,
					onConfirm: handleDiscardChanges,
					onCancel: () => setIsDiscardDialogOpen(false),
					title: tTranslate("Changes not saved", tOpts),
					okText: tTranslate("Discard", tOpts),
					cancelText: tTranslate("Continue", tOpts),
					children: tTranslate("Would you like to continue to edit or discard changes?", tOpts)
				}),
				/* @__PURE__ */ jsx(DialogComponent, {
					open: isDeleting,
					onConfirm: handleDelete,
					onCancel: () => {
						setIsDeleting(false);
						setDeleteError(null);
					},
					title: deleteError ? tTranslate("Error Deleting Record", tOpts) : tTranslate("Confirm Delete", tOpts),
					children: deletePromptText
				}),
				showRelations ? /* @__PURE__ */ jsx(Relations, {
					readOnly: readOnlyRelations,
					models,
					relationFilters,
					relations,
					parent: model.name || model.title || ""
				}) : null
			]
		})
	})] });
};
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
//#endregion
//#region src/lib/components/Grid/ui-models.js
var regexConfig = {
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
	nonAlphaNumeric: /[^a-zA-Z0-9]/g,
	compareValidatorRegex: /^compare:(.+)$/,
	email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
};
var customStyle = {};
var showRowsSelected = true;
var defaultValueConfigs = {
	"string": "",
	"boolean": false,
	"radio": false,
	"oneToMany": ""
};
var UiModel = class UiModel {
	constructor(modelConfig) {
		_defineProperty(this, "Form", ({ match, ...props }) => {
			return /* @__PURE__ */ jsx(Form, {
				model: this,
				Layout: this.Layout,
				...props
			});
		});
		_defineProperty(this, "Grid", ({ match, ...props }) => {
			return /* @__PURE__ */ jsx(GridBase, {
				model: this,
				showRowsSelected,
				...props
			});
		});
		_defineProperty(this, "ChildGrid", (props) => {
			return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(GridBase, {
				model: this,
				...props,
				customStyle,
				showRowsSelected
			}), /* @__PURE__ */ jsx(Divider, {
				orientation: "horizontal",
				sx: { mt: 2 }
			})] });
		});
		const { title = "" } = modelConfig;
		let { api, idProperty = api + "Id" } = modelConfig;
		const module = "module" in modelConfig ? modelConfig.module : title.replace(/[^\w\s]/gi, "");
		if (!api) {
			api = `${title.replaceAll(regexConfig.nonAlphaNumeric, "-").toLowerCase()}`;
			idProperty = title.replaceAll(" ", "") + "Id";
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
		for (const col of this.columns) if (!col.type) col.type = "string";
	}
	_getColumnVisibilityModel() {
		const columnVisibilityModel = {};
		for (const col of this.columns) if (col.hide === true) columnVisibilityModel[col.id || col.field] = false;
		return columnVisibilityModel;
	}
	_getDefaultValues(defaultValues) {
		for (const col of this.columns) {
			const name = col.field || col.id;
			defaultValues[name] = col.defaultValue === void 0 ? defaultValueConfigs[col.type] || "" : col.defaultValue;
		}
		return defaultValues;
	}
	getValidationSchema({ id, tTranslate = (key) => key, tOpts = {} } = {}) {
		const { columns } = this;
		const validationConfig = {};
		for (const column of columns) {
			const { field, label, header, type = "string", requiredIfNew = false, required = false, min = "", max = "", validate } = column;
			const formLabel = label || header || field;
			if (!formLabel) continue;
			if (label === null || label === "") continue;
			let config;
			switch (type) {
				case "string":
					config = yup.string().nullable().trim().label(formLabel);
					if (min && !isNaN(Number(min))) config = config.min(Number(min), tTranslate(`${formLabel} must be at least ${min} characters long`, tOpts));
					if (max && !isNaN(Number(max))) config = config.max(Number(max), tTranslate(`${formLabel} must be at most ${max} characters long`, tOpts));
					if (required) config = config.trim().required(tTranslate(`${formLabel} is required`, tOpts));
					break;
				case "boolean":
					config = yup.bool().nullable().transform((value, originalValue) => {
						if (originalValue === "") return null;
						return value;
					}).label(formLabel);
					break;
				case "radio":
				case "dayRadio":
					config = yup.mixed().label(formLabel);
					if (required) config = config.required(tTranslate(`Select at least one option for ${formLabel}`, tOpts));
					break;
				case "date":
					config = yup.date().nullable().transform((value, originalValue) => {
						if (originalValue === "" || originalValue === null) return null;
						return value;
					}).label(formLabel);
					if (required) config = config.required(tTranslate(`${formLabel} is required`, tOpts));
					break;
				case "dateTime":
					config = yup.date().nullable().transform((value, originalValue) => {
						if (originalValue === "" || originalValue === null) return null;
						return value;
					}).label(formLabel);
					if (required) config = config.required(tTranslate(`${formLabel} is required`, tOpts));
					break;
				case "select":
				case "autocomplete":
					if (required) config = yup.string().trim().label(formLabel).required(tTranslate(`Select at least one ${formLabel}`, tOpts));
					else config = yup.string().nullable();
					break;
				case "password":
					config = yup.string().label(formLabel).test("ignore-asterisks", tTranslate(`${formLabel} must be a valid password.`, tOpts), (value) => {
						if (value === "******") return true;
						const minlength = Number(min) || 8;
						const maxlength = Number(max) || 50;
						const regex = column.regex || regexConfig.password;
						return yup.string().min(minlength, tTranslate(`${formLabel} must be at least ${minlength} characters`, tOpts)).max(maxlength, tTranslate(`${formLabel} must be at most ${maxlength} characters`, tOpts)).matches(regex, tTranslate(`${formLabel} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, tOpts)).isValidSync(value);
					});
					break;
				case "email":
					config = yup.string().trim().matches(column.regex || regexConfig.email, tTranslate("Email must be a valid email", tOpts));
					break;
				case "number":
					if (required) config = yup.number().label(formLabel).required(tTranslate(`${formLabel} is required.`, tOpts));
					else config = yup.number().nullable();
					if (min !== void 0 && min !== "" && !isNaN(Number(min))) config = config.min(Number(min), tTranslate(`${formLabel} must be greater than or equal to ${min}`, tOpts));
					if (max !== void 0 && max !== "" && !isNaN(Number(max))) config = config.max(Number(max), tTranslate(`${formLabel} must be less than or equal to ${max}`, tOpts));
					break;
				case "fileUpload":
					config = yup.string().trim().label(formLabel);
					break;
				default:
					config = yup.mixed().nullable().label(formLabel);
					break;
			}
			if (required && type !== "string") config = config.required(tTranslate(`${formLabel} is required`, tOpts));
			if (requiredIfNew && (!id || id === "")) config = config.trim().required(tTranslate(`${formLabel} is required`, tOpts));
			if (validate) {
				const compareValidator = regexConfig.compareValidatorRegex.exec(validate);
				if (compareValidator) {
					const compareFieldName = compareValidator[1];
					const compareField = columns.find((f) => (f.formField === compareFieldName || f.field) === compareFieldName);
					config = config.oneOf([yup.ref(compareFieldName)], tTranslate(`${formLabel} must match ${compareField.label}`, tOpts));
				}
			}
			validationConfig[field] = config;
		}
		return yup.object({
			...validationConfig,
			...this.validationSchema
		});
	}
};
_defineProperty(UiModel, "defaultPermissions", {
	add: true,
	edit: true,
	delete: true
});
//#endregion
export { DialogComponent, GridBase, HelpModal, MuiTypography, PageTitle_default as PageTitle, RouterProvider, SnackbarContext, SnackbarProvider, StateProvider, UiModel, crudHelper, daDKGrid, deDEGrid, elGRGrid, esESGrid, frFRGrid, request as httpRequest, itITGrid, locales, ptPT_default as ptPT, trTRGrid, useMobile, useModelTranslation, useRouter, useSnackbar, useStateContext };

//# sourceMappingURL=index.js.map