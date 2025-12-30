const constants = {
    gridFilterModel: { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' },
    permissions: { edit: true, add: true, export: true, delete: true, showColumnsOrder: true, filter: true },
    client: 'client',
    server: 'server',
    object: 'object',
    startDate: 'startDate',
    endDate: 'endDate',
    oneToMany: 'oneToMany',
    lookup: 'lookup',
    Number: 'number',
    string: 'string',
    boolean: 'boolean',
    right: 'right',
    left: 'left',
    dateTime: 'dateTime',
    actions: 'actions',
    function: 'function',
    pageSizeOptions: [5, 10, 20, 50, 100]
};

export default constants;