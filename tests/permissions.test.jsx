import { expect, it } from 'vitest';
import { getModelPermissions, getRecordAccess } from '../src/lib/components/permissions';

const model = { module: 'Items', permissions: { copy: true } };
const userData = { permissions: [{ Module: 'Items', Permission2: true, Permission3: false, Permission4: true }] };

it('intersects user permissions with model and caller restrictions', () => {
    expect(getModelPermissions({ userData, model: { ...model, permissions: { add: false, copy: true } }, permissions: { delete: false } })).toMatchObject({ canAdd: false, canEdit: false, canDelete: false, canCopy: false });
});

it('preserves configured defaults when no module entry exists', () => {
    expect(getModelPermissions({ userData: {}, model })).toMatchObject({ canAdd: true, canEdit: true, canDelete: true, canCopy: true });
});

it('read-only disables every model mutation', () => {
    expect(getModelPermissions({ userData, model, readOnly: true })).toMatchObject({ canAdd: false, canEdit: false, canDelete: false, canCopy: false });
});

it.each([
    ['add-only existing', { canAdd: true }, {}, false, '', { canSave: false, canOpen: false }],
    ['add-only new', { canAdd: true }, {}, true, '', { canSave: true, canDelete: false }],
    ['copy-only existing', { canAdd: true, canCopy: true }, {}, false, '', { canSave: false, canCopy: true, canOpen: true }],
    ['locked copy', { canAdd: true, canCopy: true }, { canEdit: false }, true, 'copy', { canSave: true }],
    ['copy disabled', { canAdd: true, canCopy: false }, {}, true, 'copy', { canSave: false }],
    ['delete-only', { canDelete: true }, {}, false, '', { canSave: false, canDelete: true, canOpen: true }],
    ['locked existing', { canEdit: true, canDelete: true }, { canEdit: false }, false, '', { canSave: false, canDelete: true, canOpen: true }],
    ['editable existing', { canEdit: true }, {}, false, '', { canSave: true, fieldsReadOnly: false }],
])('%s', (_name, permissions, record, isNew, mode, expected) => {
    expect(getRecordAccess({ permissions: { canAdd: false, canEdit: false, canDelete: false, canCopy: false, ...permissions }, record, isNew, mode })).toMatchObject(expected);
});

it('read-only blocks every record mutation and locks relations', () => {
    expect(getRecordAccess({ permissions: getModelPermissions({ model }), readOnly: true })).toMatchObject({ canSave: false, canCopy: false, canDelete: false, canOpen: false, fieldsReadOnly: true, relationsReadOnly: true });
});

it('a relation lock still allows updating the parent', () => {
    expect(getRecordAccess({ permissions: getModelPermissions({ model }), record: { readOnlyRelations: true } })).toMatchObject({ canSave: true, relationsReadOnly: true });
});
