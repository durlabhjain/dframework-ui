import React, { useEffect, useMemo } from "react";

import { Box } from "@mui/material";
import { withTranslation } from "react-i18next";
import MuiTypography from "../Typography";
import useMobile from "../useMobile";
import { Breadcrumbs, Typography, Link as MuiLink, Button, IconButton, Grid } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import HelpModal from "../HelpModal";
import { Card, CardContent } from '@mui/material';
import { useTranslation } from "react-i18next";

function PageTitle({
  titleHeading,
  navigate,
  name = null,
  RightComponent = null,
  mobileRightComponent,
  title = "",
  titleClass = "text-theme-blue text-max-width",
  showBreadcrumbs,
  breadcrumbs = [],
  enableBackButton = false,
  breadcrumbColor,
  showHelpButton = false,
  model
}) {
  const isMobile = useMobile(true);
  const breadcrumbsLasIndex = breadcrumbs.length - 1;
  const needToShowBreadcrumbs = showBreadcrumbs && breadcrumbs.length;
  const { t: translate, i18n } = useTranslation();
  const tOpts = useMemo(() => ({ t: translate, i18n }), [translate, i18n]);
  const tTranslate = model?.tTranslate ?? ((key) => key);

  const handleBack = () => {
    navigate(-1);
  };

  // Update document title when title prop changes
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <>
      <MuiTypography className="print-only" text={tTranslate(titleHeading, tOpts)} />
      {needToShowBreadcrumbs && (<>
        <Card sx={{ mb: 3 }}>
          <CardContent sx={{ backgroundColor: breadcrumbColor || '#fff' }}>
            {/* Add BreadCrumbs  */}
            <Grid container>
              <Grid sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <Breadcrumbs variant="h5" aria-label="breadcrumb" separator=">" className={`${titleClass} breadcrumbs-text-title text-max-width`}>
                  {breadcrumbs.map((breadcrumb, index) => index < breadcrumbsLasIndex ? (
                    <MuiLink onClick={handleBack} key={index} className={`${titleClass} breadcrumbs-text-title text-max-width`} variant="inherit" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                      {breadcrumb.text}
                    </MuiLink>
                  ) : <Typography key={index} className={`${titleClass} breadcrumbs-text-title text-max-width`} variant="inherit">
                    {breadcrumb.text}
                  </Typography>)}
                </Breadcrumbs>
              </Grid>
              {(breadcrumbs.length > 1 || enableBackButton) && <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={handleBack}>{tTranslate('Back', tOpts)}</Button>
              </Grid>}
              {showHelpButton && <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <IconButton color="primary" title={tTranslate('Help', tOpts)} size="large">
                  <HelpIcon fontSize="inherit" />
                </IconButton>
              </Grid>}
            </Grid>
            {/* Title render */}
            <Box className="app-page-title--first">
              <div>
                <div style={{ display: isMobile ? 'block' : "flex", alignItems: "center" }}>
                  <div style={{ flex: "1 0 auto" }}>
                    <MuiTypography
                      className={`${titleClass} page-text-title`}
                      variant="p"
                      text={tTranslate(titleHeading, tOpts)}
                      name={name}
                    />
                  </div>
                </div>
              </div>
            </Box>
            {/* For Mobile */}
            {!isMobile && (
              <>
                <Box> {RightComponent && <RightComponent />} </Box>
                <Box> {mobileRightComponent} </Box>
              </>
            )}
          </CardContent>
        </Card>
        <HelpModal />
      </>)}
    </>
  );
}

export default withTranslation()(PageTitle);
