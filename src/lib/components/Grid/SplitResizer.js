import React, { useCallback, useEffect, useRef } from "react";
import Box from "@mui/material/Box";

/**
 * Horizontal drag handle sitting between a parent grid and its child grid panel.
 *
 * Reports movement as a pixel delta from where the drag started (negative = dragged up), leaving the
 * caller to turn that into heights - it owns the container and the min/max clamps, this doesn't.
 *
 * @param {Object} props
 * @param {Function} props.onResizeStart - Called as a drag (or key press) begins; capture the current height here
 * @param {Function} props.onResize - Called with the pixel delta since onResizeStart
 * @param {Function} [props.onResizeEnd] - Called when the drag finishes
 * @param {number} [props.keyboardStep] - Pixels moved per arrow key press
 * @param {string} [props.label] - Accessible name for the separator
 */
// Handle height + its margins. Exported because the split math has to reserve this space: leave it
// out and the two panels plus the handle add up to more than the container, which spills the
// overflow onto the page as a window scrollbar.
export const SPLIT_RESIZER_HEIGHT = 18;
const RESIZER_BAR_HEIGHT = 10;
const RESIZER_MARGIN = (SPLIT_RESIZER_HEIGHT - RESIZER_BAR_HEIGHT) / 2;

const SplitResizer = React.memo(({ onResizeStart, onResize, onResizeEnd, keyboardStep = 24, label = 'Resize child grids' }) => {
  const startYRef = useRef(0);
  const draggingRef = useRef(false);

  // A drag that leaves the handle would otherwise select text across the page; the class is cleared
  // on unmount too, so an unmount mid-drag can't strand the whole document unselectable.
  const setDragging = useCallback((isDragging) => {
    draggingRef.current = isDragging;
    document.body.style.userSelect = isDragging ? 'none' : '';
    document.body.style.cursor = isDragging ? 'ns-resize' : '';
  }, []);

  useEffect(() => () => setDragging(false), [setDragging]);

  const handlePointerDown = useCallback((event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
    startYRef.current = event.clientY;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setDragging(true);
    onResizeStart();
  }, [onResizeStart, setDragging]);

  const handlePointerMove = useCallback((event) => {
    if (!draggingRef.current) return;
    onResize(event.clientY - startYRef.current);
  }, [onResize]);

  const handlePointerUp = useCallback((event) => {
    if (!draggingRef.current) return;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
    onResizeEnd?.();
  }, [onResizeEnd, setDragging]);

  // Arrow keys nudge by one step: start, move, end - the same path a drag takes, so the caller only
  // ever deals with deltas from a known starting height.
  const handleKeyDown = useCallback((event) => {
    const step = event.key === 'ArrowUp' ? -keyboardStep : event.key === 'ArrowDown' ? keyboardStep : null;
    if (step === null) return;
    event.preventDefault();
    onResizeStart();
    onResize(step);
    onResizeEnd?.();
  }, [keyboardStep, onResize, onResizeEnd, onResizeStart]);

  return (
    <Box
      role="separator"
      aria-orientation="horizontal"
      aria-label={label}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      sx={{
        flex: '0 0 auto',
        height: `${RESIZER_BAR_HEIGHT}px`,
        marginTop: `${RESIZER_MARGIN}px`,
        marginBottom: `${RESIZER_MARGIN}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'ns-resize',
        // Without this the browser claims vertical drags for scrolling on touch devices.
        touchAction: 'none',
        userSelect: 'none',
        borderRadius: 1,
        '&:hover .split-resizer-grip, &:focus-visible .split-resizer-grip': { bgcolor: 'primary.main' },
        '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 }
      }}
    >
      <Box className="split-resizer-grip" sx={{ width: 48, height: 4, borderRadius: 2, bgcolor: 'divider', transition: 'background-color 150ms' }} />
    </Box>
  );
});

export default SplitResizer;
