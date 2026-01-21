# Toolbar Filters Usage Guide

## Overview

The toolbar filters feature allows you to display selected column filters permanently in the grid toolbar. This provides quick access to commonly used filters without needing to open the filter panel.

## Configuration

Add the `toolbarFilter` property to any column definition to enable a toolbar filter for that column.

### Basic Usage

```javascript
const columns = [
  {
    field: 'name',
    type: 'string',
    headerName: 'Name',
    toolbarFilter: true  // Uses default operator (startsWith for strings)
  }
];
```

**Result:** Displays "Name" label with a text input in the toolbar.

### Specify Operator

```javascript
const columns = [
  {
    field: 'age',
    type: 'number',
    headerName: 'Age',
    toolbarFilter: '>='  // Use greater-than-or-equal operator
  }
];
```

**Result:** Displays "Age ≥" label with a number input in the toolbar.

### Full Customization

```javascript
const columns = [
  {
    field: 'dateOfBirth',
    type: 'date',
    headerName: 'Date of Birth',
    toolbarFilter: {
      operator: 'is',
      label: 'Born On',          // Custom label
      initialValue: '2000-01-01' // Pre-filled value
    }
  }
];
```

**Result:** Displays "Born On" label with a date picker pre-filled with 2000-01-01.

## Label Display Rules

### Symbols (Compact)
Numeric comparison operators display as symbols to save space:
- `>` → "Age >"
- `>=` → "Price ≥"
- `<` → "Count <"
- `<=` → "MaxValue ≤"
- `=` → "Quantity =" (for numbers)
- `!=` → "Status ≠"

### Text (Clarity)
Non-obvious operators display as text in parentheses:
- `contains` → "Name (contains)"
- `startsWith` → "Email (starts with)" (only if not default)
- `equals` → "Code (exact match)" (for strings, since it's non-obvious)
- `after` → "StartDate (after)"
- `isAnyOf` → "Tags (any of)" (only if not default)

### Default Operators (No Suffix)
When using the default operator for a column type, no suffix is shown:
- String with `startsWith` → "Name"
- Number with `=` → "Age"
- Date with `is` → "Date of Birth"
- Boolean with `is` → "Active"
- Select with `isAnyOf` → "Status"

## Default Operators by Type

| Column Type | Default Operator |
|------------|------------------|
| string | startsWith |
| number | = (equals) |
| date | is (equals) |
| dateTime | is (equals) |
| boolean | is |
| select | isAnyOf |
| singleSelect | isAnyOf |

## Complete Examples

### Example 1: Employee Grid

```javascript
const columns = [
  {
    field: 'name',
    type: 'string',
    headerName: 'Name',
    toolbarFilter: true
    // Displays: "Name" (default startsWith)
  },
  {
    field: 'department',
    type: 'select',
    lookup: 'departments',
    headerName: 'Department',
    toolbarFilter: true
    // Displays: "Department" (default isAnyOf, multi-select dropdown)
  },
  {
    field: 'age',
    type: 'number',
    headerName: 'Age',
    toolbarFilter: '>='
    // Displays: "Age ≥"
  },
  {
    field: 'active',
    type: 'boolean',
    headerName: 'Active',
    toolbarFilter: true
    // Displays: "Active" (Yes/No dropdown)
  }
];
```

### Example 2: Product Catalog

```javascript
const columns = [
  {
    field: 'sku',
    type: 'string',
    headerName: 'SKU',
    toolbarFilter: 'equals'
    // Displays: "SKU (exact match)"
  },
  {
    field: 'name',
    type: 'string',
    headerName: 'Product Name',
    toolbarFilter: 'contains'
    // Displays: "Product Name (contains)"
  },
  {
    field: 'price',
    type: 'number',
    headerName: 'Price',
    toolbarFilter: {
      operator: '<=',
      label: 'Max Price',
      initialValue: 100
    }
    // Displays: "Max Price ≤" with initial value 100
  },
  {
    field: 'category',
    type: 'select',
    lookup: 'categories',
    headerName: 'Category',
    toolbarFilter: {
      operator: 'isAnyOf',
      initialValue: ['Electronics', 'Computers']
    }
    // Displays: "Category" with Electronics and Computers pre-selected
  }
];
```

### Example 3: Date Ranges

```javascript
const columns = [
  {
    field: 'createdDate',
    type: 'date',
    headerName: 'Created',
    toolbarFilter: {
      operator: 'onOrAfter',
      label: 'From Date'
    }
    // Displays: "From Date (on/after)"
  },
  {
    field: 'endDate',
    type: 'date',
    headerName: 'End Date',
    toolbarFilter: {
      operator: 'onOrBefore',
      label: 'To Date'
    }
    // Displays: "To Date (on/before)"
  }
];
```

## Features

### Automatic Synchronization
- Toolbar filters and panel filters share the same state
- Changes in the toolbar immediately reflect in the filter panel
- Changes in the filter panel immediately reflect in the toolbar
- The "CLEAR FILTER" button clears both toolbar and panel filters

### Initial Values
- Specify `initialValue` in the config to pre-fill a filter on page load
- Initial values are applied only once on component mount
- Useful for setting default filtered views

### Multiple Filters
- You can have multiple toolbar filters on different columns
- You can even have multiple toolbar filters on the same column with different operators
- All filters are combined with the grid's `logicOperator` (AND/OR)

### Grid Preferences
- Toolbar filter values are automatically saved with grid preferences
- When restoring a preference, toolbar filters are restored with their values

## Available Operators by Column Type

### String Operators
- `startsWith` (default)
- `contains`
- `equals`
- `endsWith`
- `isEmpty`
- `isNotEmpty`
- `is`
- `not`

### Number Operators
- `=` (default)
- `!=`
- `>`
- `>=`
- `<`
- `<=`
- `isEmpty`
- `isNotEmpty`

### Date/DateTime Operators
- `is` (default)
- `not`
- `after`
- `onOrAfter`
- `before`
- `onOrBefore`
- `isEmpty`
- `isNotEmpty`

### Boolean Operators
- `is` (default) - Yes/No dropdown

### Select/SingleSelect Operators
- `isAnyOf` (default) - Multi-select dropdown
- `is` - Single value

## Tips and Best Practices

1. **Keep it Minimal**: Only add toolbar filters for the most commonly used filters. Too many filters can clutter the toolbar.

2. **Use Symbols**: For numeric comparisons, operators display as compact symbols (>, ≥, etc.) which saves space.

3. **Custom Labels**: For date ranges or when the column name isn't clear, use custom labels:
   ```javascript
   toolbarFilter: { operator: 'onOrAfter', label: 'Start Date' }
   ```

4. **Initial Values**: Pre-fill common filter values to create default filtered views:
   ```javascript
   toolbarFilter: { operator: 'is', initialValue: true }  // Show only active records by default
   ```

5. **Operator Selection**: Choose operators that make sense for your use case:
   - Use `contains` for partial text search
   - Use `equals` for exact matches
   - Use `>=` or `<=` for numeric ranges

## Implementation Details

### Files Created
- `src/lib/components/Grid/GridToolbar.js` - Toolbar component
- `src/lib/components/Grid/ToolbarFilters/index.js` - Main orchestrator
- `src/lib/components/Grid/ToolbarFilters/ToolbarFilterItem.js` - Individual filter control
- `src/lib/components/Grid/ToolbarFilters/filterConfig.js` - Configuration utilities

### Component Reuse
The toolbar filters reuse the same input components used by the filter panel:
- Text inputs from MUI DataGrid
- Date pickers from `LocalizedDatePicker.js`
- Dropdowns from `CustomDropdownMenu.js`

This ensures consistency and leverages existing lookup data, localization, and validation.
