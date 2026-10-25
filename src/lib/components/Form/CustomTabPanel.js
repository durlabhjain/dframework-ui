import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, fillHeight, ...other } = props;
  const isActive = value === index;
  return (
    <div
      role="tabpanel"
      hidden={!isActive}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={fillHeight && isActive ? { display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 } : undefined}
      {...other}
    >
      {isActive && <Box sx={fillHeight ? { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' } : { p: 3 }}>{children}</Box>}
    </div>
  );
}

export default CustomTabPanel;
