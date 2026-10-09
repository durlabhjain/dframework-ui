import { getPermissions } from './utils';

const DEFAULT_PERMISSIONS = { add: true, edit: true, delete: true };

/** Resolve the same model, caller and user permissions for grids and forms. */
export function getModelPermissions({ userData, model, permissions, readOnly = false }) {
    const configured = { ...DEFAULT_PERMISSIONS, ...model.permissions, ...permissions };
    const userPermissions = getPermissions({ userData, model, userDefinedPermissions: configured });
    const canAdd = !readOnly && Boolean(userPermissions.canAdd);
    const canEdit = !readOnly && Boolean(userPermissions.canEdit);
    const canDelete = !readOnly && Boolean(userPermissions.canDelete);
    return { canAdd, canEdit, canDelete, canCopy: canAdd && Boolean(configured.copy) };
}

/** Opening a record and mutating it are separate decisions; copying creates a new record. */
export function getRecordAccess({ permissions, record = {}, isNew = false, mode, readOnly = false }) {
    const recordEditable = isNew || !('canEdit' in record) || Boolean(record.canEdit);
    const canSave = !readOnly && recordEditable && (isNew
        ? permissions.canAdd && (mode !== 'copy' || permissions.canCopy)
        : permissions.canEdit);
    return {
        canSave: Boolean(canSave),
        canCopy: !readOnly && !isNew && permissions.canCopy,
        canDelete: !readOnly && !isNew && permissions.canDelete,
        canOpen: !readOnly && (permissions.canEdit || permissions.canDelete || permissions.canCopy),
        fieldsReadOnly: !canSave,
        relationsReadOnly: !canSave || Boolean(record.readOnlyRelations)
    };
}
