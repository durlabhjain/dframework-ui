"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = treeCheckBox;
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.for-each.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _SimpleTreeView = require("@mui/x-tree-view/SimpleTreeView");
var _TreeItem = require("@mui/x-tree-view/TreeItem");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
const buildTree = function buildTree() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const tree = {};
  data.forEach(item => {
    if (item.ParentId && tree[item.ParentId]) {
      var _item$value;
      tree[item.ParentId].children.push({
        value: (_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.toString(),
        label: item.label
      });
    } else {
      var _item$value2;
      tree[item.ParentId] = {
        label: item.ParentName,
        value: "Parent" + item.ParentId.toString(),
        children: [{
          value: (_item$value2 = item.value) === null || _item$value2 === void 0 ? void 0 : _item$value2.toString(),
          label: item.label
        }]
      };
    }
  });
  return Object.values(tree);
};

/**
 * Renders a tree view component with checkboxes for selection.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.column - The column metadata, including lookup information.
 * @param {string} props.field - The name of the field in the form to bind.
 * @param {string} props.fieldLabel - The label for the field.
 * @param {Object} props.formik - The Formik instance for managing form state.
 * @param {Object} props.lookups - The lookup data for populating tree items.
 * @param {Array<Object>} props.data - Additional data for the tree.
 * @param {Object} props.otherProps - Other props for customization.
 * @param {Object} props.model - The model configuration.
 * @param {Object} props.fieldConfigs - Configuration for the field, including disabled state.
 * @param {string} props.mode - The mode of the form, such as 'edit' or 'copy'.
 * @returns {JSX.Element} The rendered tree view component.
 */
function treeCheckBox(_ref) {
  var _formik$values$field;
  let {
    column,
    field,
    fieldLabel,
    formik,
    lookups,
    data,
    otherProps,
    model,
    fieldConfigs,
    mode
  } = _ref;
  const options = lookups ? lookups[column.lookup] : [];
  const tree = buildTree(options);
  let inputValue = (_formik$values$field = formik.values[field]) !== null && _formik$values$field !== void 0 && _formik$values$field.length ? formik.values[field].split(", ") : [];
  let isDisabled;
  if (mode !== 'copy') {
    isDisabled = fieldConfigs === null || fieldConfigs === void 0 ? void 0 : fieldConfigs.disabled;
  }
  const handleChange = (event, newValue) => {
    formik.setFieldValue(field, (newValue === null || newValue === void 0 ? void 0 : newValue.join(', ')) || '');
  };
  return /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      minHeight: 352,
      minWidth: 290
    }
  }, /*#__PURE__*/React.createElement(_SimpleTreeView.SimpleTreeView, {
    selectedItems: inputValue,
    onSelectedItemsChange: handleChange,
    disabled: isDisabled,
    multiSelect: true,
    checkboxSelection: true
  }, tree.map(node => /*#__PURE__*/React.createElement(_TreeItem.TreeItem, {
    key: node.value,
    itemId: node.value,
    label: node.label
  }, node.children.map(child => /*#__PURE__*/React.createElement(_TreeItem.TreeItem, {
    key: child.value,
    itemId: child.value,
    label: child.label
  }))))));
}