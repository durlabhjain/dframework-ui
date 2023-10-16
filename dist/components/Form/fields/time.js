"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Radio = _interopRequireDefault(require("@mui/material/Radio"));
var _RadioGroup = _interopRequireDefault(require("@mui/material/RadioGroup"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));
var _TimePicker = require("@mui/x-date-pickers/TimePicker");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Field = _ref => {
  let {
    column,
    field,
    fieldLabel,
    formik,
    otherProps,
    classes
  } = _ref;
  const [timePeriod, setTimePeriod] = (0, _react.useState)('AM');
  const handleRadioChange = event => {
    setTimePeriod(event.target.value);
    const combinedValue = "".concat(formik.values[field], " ").concat(event.target.value);
    formik.setFieldValue(field, combinedValue);
  };
  if (column.modifiedLabel) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
      type: "text",
      variant: "filled",
      placeholder: "Enter/Select",
      label: column.label,
      InputLabelProps: {
        shrink: true
      },
      InputProps: {
        readOnly: (column === null || column === void 0 ? void 0 : column.readOnly) === true,
        disableUnderline: true,
        endAdornment: /*#__PURE__*/_react.default.createElement(_KeyboardArrowDown.default, {
          style: {
            color: 'rgba(255, 255, 255, 0.7)'
          }
        }),
        style: {
          color: 'rgba(255, 255, 255, 0.7)',
          marginLeft: '5px'
        }
      },
      key: field,
      required: column === null || column === void 0 ? void 0 : column.required,
      fullWidth: true,
      sx: {
        width: '300px',
        backgroundColor: 'transparent !important'
      },
      name: field,
      value: formik.values[field],
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      error: formik.touched[field] && Boolean(formik.errors[field]),
      helperText: formik.touched[field] && formik.errors[field]
    }, otherProps)), /*#__PURE__*/_react.default.createElement(_FormControl.default, {
      component: "fieldset"
    }, /*#__PURE__*/_react.default.createElement(_RadioGroup.default, {
      style: {
        flexDirection: 'row',
        marginLeft: '2.9rem',
        flexWrap: 'nowrap'
      },
      value: timePeriod,
      onChange: handleRadioChange
    }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
      value: "AM",
      control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
        checked: timePeriod === 'AM'
      }),
      label: "AM"
    }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
      value: "PM",
      control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
        checked: timePeriod === 'PM',
        sx: {
          color: timePeriod === 'PM' ? 'primary.silverBlue ' : ''
        }
      }),
      label: "PM"
    }))));
  } else {
    let inputValue = formik.values[field];
    if (column.isUtc) {
      inputValue = _dayjs.default.utc(inputValue).utcOffset((0, _dayjs.default)().utcOffset(), true).format();
    }
    return /*#__PURE__*/_react.default.createElement(_LocalizationProvider.LocalizationProvider, {
      dateAdapter: _AdapterDayjs.AdapterDayjs
    }, /*#__PURE__*/_react.default.createElement(_TimePicker.TimePicker, _extends({}, otherProps, {
      variant: "standard",
      readOnly: (column === null || column === void 0 ? void 0 : column.readOnly) === true,
      key: field,
      fullWidth: true,
      name: field,
      value: inputValue,
      onChange: value => {
        if (column.isUtc) {
          value = value && value.isValid() ? value.format('YYYY-MM-DDTHH:mm:ss') + '.000Z' : null;
        }
        return formik.setFieldValue(field, value);
      },
      onBlur: formik.handleBlur,
      helperText: formik.touched[field] && formik.errors[field],
      renderInput: params => {
        const props = _objectSpread(_objectSpread({}, params), {}, {
          variant: "standard"
        });
        return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, props, {
          helperText: formik.errors[field],
          fullWidth: true
        }));
      }
    })));
  }
};
var _default = exports.default = Field;