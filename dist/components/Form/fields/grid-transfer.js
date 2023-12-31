"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
const _excluded = ["component", "name", "field", "formik", "type", "model"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const useStyles = (0, _core.makeStyles)({
  divSpacing: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  boldText: {
    fontWeight: 'bold'
  }
});
const TransferField = _ref => {
  let {
      component,
      name,
      field,
      formik,
      type,
      model
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    value
  } = formik.getFieldProps(name || field);
  const {
    setFieldValue
  } = formik;
  const Component = component || props.column.relation;
  const classes = useStyles();
  const onAssignChange = (0, _react.useCallback)(value => {
    setFieldValue(name || field, value);
  }, [setFieldValue, name, field]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes.divSpacing, " ").concat(classes.boldText)
  }, "Available"), /*#__PURE__*/_react.default.createElement(Component, {
    selected: value,
    available: true,
    onAssignChange: onAssignChange
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes.divSpacing, " ").concat(classes.boldText)
  }, "Assigned"), /*#__PURE__*/_react.default.createElement(Component, {
    selected: value,
    assigned: true,
    onAssignChange: onAssignChange
  }));
};
var _default = TransferField;
exports.default = _default;