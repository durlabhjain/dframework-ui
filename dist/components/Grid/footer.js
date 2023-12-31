"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
var _xDataGridPremium = require("@mui/x-data-grid-premium");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Footer = _ref => {
  let {
    pagination,
    apiRef
  } = _ref;
  const page = apiRef.current.state.pagination.paginationModel.page;
  const rowsPerPage = apiRef.current.state.pagination.paginationModel.pageSize;
  const [pageNumber, setPageNumber] = (0, _react.useState)(page + 1);
  const handleChange = function handleChange(e) {
    var _e$target;
    let value = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;
    if (value === '') {
      setPageNumber('');
    } else {
      value = parseInt(value);
      value = isNaN(value) || value < 1 ? 1 : value;
      setPageNumber(value);
    }
  };
  (0, _react.useEffect)(() => {
    setPageNumber(page + 1);
  }, [page, rowsPerPage]);
  const onPageChange = function onPageChange() {
    let targetPage = pageNumber === '' ? 1 : pageNumber;
    targetPage = Math.max(targetPage, 1);
    apiRef.current.setPage(targetPage - 1);
    if (pageNumber === '') {
      setPageNumber(1);
    }
  };
  const handleKeyPress = event => {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);
    if (!/\d/.test(keyValue)) event.preventDefault();
  };
  return /*#__PURE__*/_react.default.createElement(_xDataGridPremium.GridFooterContainer, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      pl: 5
    }
  }, pagination && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "p"
  }, "Jump to page:"), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    sx: {
      width: 70,
      pl: 1
    },
    variant: "standard",
    type: "number",
    min: 1,
    value: pageNumber,
    onChange: handleChange,
    onKeyPress: handleKeyPress
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: "small",
    onClick: onPageChange
  }, "Go"))), /*#__PURE__*/_react.default.createElement(_xDataGridPremium.GridFooter, null));
};
exports.Footer = Footer;