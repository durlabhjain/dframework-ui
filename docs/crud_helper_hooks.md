# CRUD Helper - Request & Response Hooks

This document covers the changes made to `crud-helper.js` and how to use the `createRequestPayload` and `parseResponsePayload` model hooks.

## `createRequestPayload`

An **async** function defined on the model that is called before the final HTTP request is constructed. It receives a single context object containing all request parameters and metadata, which can be modified directly before the final request is built.

### Signature

```js
async createRequestPayload(context)
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `context` | `Object` | A mutable context object containing all request parameters and metadata. Modify properties on this object to change the final request. See "Context Properties by Action" below for details. |

### Context Properties by Action

The `context` object contains different properties depending on the action. All contexts include the `action` property to identify the current operation.

#### Common Properties (all actions)

- `action` {string} - The CRUD action being performed (list, load, save, delete, lookups, export)
- `url` {string} - The API endpoint URL
- `method` {string} - HTTP method (GET, POST, PUT, DELETE)
- `jsonPayload` {boolean} - Whether to send JSON payload vs FormData
- `dataParser` {Function} - Function to parse response data
- `dataParsers` {Object} - Available data parsers (json, text, raw)
- All original props passed to the CRUD function are spread into the context

#### Action-Specific Properties

| Action | Additional Context Properties |
|--------|------------------------------|
| **list** | `where` {Array} - Filter conditions<br>`requestData` {Object} - Request payload (start, limit, sort, lookups, etc.)<br>`signal` {AbortSignal} - Optional abort signal<br>`additionalHeaders` {Object} - HTTP headers |
| **export** | `where` {Array} - Filter conditions<br>`requestData` {Object} - Request payload<br>`responseType` {string} - Expected content type<br>`columns` {Array} - Column definitions |
| **load** | `where` {Object} - Filter conditions<br>`lookupsToFetch` {Array} - Lookups to load |
| **save** | `params` {Object} - Record data to save<br>`additionalHeaders` {Object} - HTTP headers |
| **delete** | *(No additional properties beyond common ones)* |
| **lookups** | `lookups` {string} - Comma-separated lookup names<br>`scopeId` {any} - Scope identifier for lookups |

### How It Works

1. A context object is created with initial values (url, where, requestData, etc.)
2. `createRequestPayload` is called with this context object
3. You can modify any properties on the context object
4. After the hook returns, the final request is built using the modified context values

This design ensures that modifications to `where`, `url`, and other parameters apply correctly to the final request, avoiding duplicate assignment and maintaining consistency.

### Example Usage

```jsx
const orderModel = new UiModel({
    title: "Orders",
    api: "/api/orders",
    columns: [
        { field: "id", type: "number", headerName: "ID" },
        { field: "status", type: "string", headerName: "Status" },
        { field: "total", type: "number", headerName: "Total" }
    ],

    // Modify request parameters before the request is constructed
    createRequestPayload: async (context) => {
        // Access the action from context
        const { action } = context;

        // Modify the URL
        if (action === 'save') {
            context.url = `/api/orders/custom-save`;
        }

        // Modify where filters for list requests
        if (action === 'list') {
            context.where.push({
                field: 'status',
                operator: 'equals',
                value: 'active'
            });
        }

        // Modify request data
        if (context.requestData) {
            context.requestData.includeArchived = false;
        }

        // Modify params for save operations
        if (action === 'save') {
            context.params = {
                ...context.params,
                lastModifiedBy: 'current-user'
            };
        }
    }
});
```

### Example: Modifying Where Filters

```jsx
const model = new UiModel({
    // ...columns, api, etc.

    createRequestPayload: async (context) => {
        if (context.action === 'list' || context.action === 'export') {
            // Add additional filters
            context.where.push({
                field: 'tenantId',
                operator: 'equals',
                value: getCurrentTenantId()
            });
        }
    }
});
```

---

## `parseResponsePayload`

An **async** function defined on the model that is called after the HTTP response is received. When provided, it **replaces** the default response processing (date conversion, displayIndex mapping, etc.), giving you full control over how data is set.

### Signature

```js
async parseResponsePayload({ responseData, model, dateColumns, action })
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `responseData` | `Object` | The raw response from the server. |
| `model` | `Object` | The current UiModel instance. |
| `dateColumns` | `Array` | *(list only)* Array of `{ field, localize }` objects for date/dateTime columns. `localize: true` means the value should be displayed in the user's local timezone; `localize: false` (default) keeps the value in UTC for both display and submission. Not provided for `load` or `lookups`. |
| `action` | `String` | The current action name (e.g. `list`, `load`, `lookups`). |

### Return Value

The function must return the data in the shape expected by the consumer:

| Action | Expected Return Shape |
|--------|----------------------|
| **list** (`getList`) | `{ records: Array, recordCount: Number, lookups: Object }` |
| **load** (`getRecord`) | `{ id, title, record: Object, lookups: Object }` |
| **lookups** (`getLookups`) | The lookups object to pass to `setActiveRecord`. |

### Limiting `parseResponsePayload` to Specific Actions

If you only want custom response handling for certain actions, add a `parseResponseActions` array on the model. When this array is present, `parseResponsePayload` is invoked **only** for actions listed here. This prevents list or form flows from breaking when your handler only supports `lookups`.

Valid action names:

- `list`
- `load`
- `lookups`
- Any custom action you pass into `getList` via the `action` parameter.

Example:

```jsx
const parameterSetModel = new UiModel({
    title: "ParameterSets",
    api: "/api/parametersets",
    parseResponseActions: ['lookups'],

    parseResponsePayload: async ({ responseData, action }) => {
        if (action !== 'lookups') return responseData;
        // Custom lookup parsing here
        return responseData;
    }
});
```

### Example Usage

```jsx
const productModel = new UiModel({
    title: "Products",
    api: "/api/products",
    columns: [
        { field: "id", type: "number", headerName: "ID" },
        { field: "name", type: "string", headerName: "Name" },
        { field: "price", type: "number", headerName: "Price" },
        { field: "createdAt", type: "date", headerName: "Created" }
    ],

    // Custom response processing
    parseResponsePayload: async ({ responseData, model, dateColumns }) => {
        // Transform the response to match expected structure
        const records = responseData.items.map(item => ({
            ...item,
            price: item.price / 100  // Convert cents to dollars
        }));

        return {
            records,
            recordCount: responseData.recordCount,
            lookups: responseData.lookups || {}
        };
    }
});
```

### Example: Custom Record Loading

```jsx
const model = new UiModel({
    // ...columns, api, etc.

    parseResponsePayload: async ({ responseData, model }) => {
        // Flatten nested API response for the form
        const { data, lookups } = responseData;
        return {
            id: data.id,
            title: data.displayName,
            record: {
                ...data,
                fullAddress: `${data.street}, ${data.city}, ${data.state}`
            },
            lookups
        };
    }
});
```

---

## Using Both Hooks Together

You can combine both hooks to fully control the request/response lifecycle:

```jsx
const model = new UiModel({
    title: "Invoices",
    api: "/api/invoices",
    columns: [/* ...columns */],

    createRequestPayload: async (context) => {
        // Add tenant context to the request payload
        // Note: mutate request data here rather than custom headers.
        if (context.action === 'list') {
             context.requestData.tenantId = getCurrentTenantId();
            context.requestData.include = ['customer', 'lineItems'];
        }
    },

    parseResponsePayload: async ({ responseData, model, dateColumns }) => {
        // Flatten nested customer data into each record
        const records = responseData.records.map(record => ({
            ...record,
            customerName: record.customer?.name,
            customerEmail: record.customer?.email
        }));

        return {
            records,
            recordCount: responseData.recordCount,
            lookups: responseData.lookups
        };
    }
});
```


---