import { useGridApiContext } from '@mui/x-data-grid-premium';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

/**
 * The grouping column's cell for server-side row grouping.
 *
 * A group summary row arrives from the list API carrying `childrenCount` - the group's leaf count
 * over the whole filtered set, not just the rows paged onto this page - alongside any aggregates.
 * MUI's own tree cell instead appends its filtered descendant count, which only counts the group's
 * rows present on the current page, so a group of 120 split across pages reads as "(50)". This
 * renders the server's figure so the count stays the group's total however the rows are paged.
 *
 * Leaf rows render nothing here: their own cell for the grouped column already shows the value.
 */
function ServerGroupingCell({ id, row, rowNode, value }) {
    const apiRef = useGridApiContext();
    if (!row?.__isGroupRow) return null;
    const expanded = Boolean(rowNode?.childrenExpanded);
    const ToggleIcon = expanded ? KeyboardArrowDownIcon : KeyboardArrowRightIcon;
    const toggle = (event) => {
        event.stopPropagation();
        apiRef.current.setRowChildrenExpansion(id, !expanded);
    };
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, minWidth: 0 }}>
            <IconButton size="small" tabIndex={-1} onClick={toggle} aria-expanded={expanded} aria-label={String(value ?? '')}>
                <ToggleIcon fontSize="inherit" />
            </IconButton>
            <Box component="span" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {value}{row.childrenCount === undefined ? '' : ` (${row.childrenCount})`}
            </Box>
        </Box>
    );
}

export { ServerGroupingCell };
