# Grid preferences and temporary list state

Configure `model.preferenceId` (or `model.module.preferenceId`) and the
`GridPreferenceManager` endpoint to enable saved preferences. `model.showToolbar`
defaults to `true`; setting it to `false` hides toolbar controls while preference
loading and restoration continue normally.

## Restoration precedence

With `preserveListState`, returning from a form restores the temporary snapshot
from session storage. Its layout and controlled models take precedence over saved
preferences, including edits made after selecting a preference. The remembered
preference name supplies the label only. A deleted preference clears the label;
a failed preference request keeps it and still allows records to load.

Without a snapshot, the grid applies the saved default preference once for each
preference key and endpoint. Hiding and showing the toolbar does not reapply it.
Preference request failures or invalid default data do not prevent record loading.

## Applying and resetting layouts

Saved `prefValue` accepts a JSON string or an object in MUI's `exportState()`
format. Applying a partial preference fills omitted state from the grid's model
baseline, including column dimensions and controlled sort, filter, pagination,
and grouping models. Grouping changes settle before the final column layout is
restored. Saving, renaming, and deleting preferences refresh menu data without
reapplying a layout.

Reset restores the model baseline, clears selection and the active preference
label, and removes this grid's temporary snapshot and `ls` URL parameter. It does
not select or reload the saved default preference.

These changes preserve the public package exports, preference API request format,
and temporary snapshot format. The loading hook and toolbar props are internal.
