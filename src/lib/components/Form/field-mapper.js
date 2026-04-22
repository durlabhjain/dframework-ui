import * as React from 'react';
import Box from '@mui/material/Box';
import BooleanField from './fields/boolean';
import StringField from './fields/string';
import NumberField from './fields/number';
import PasswordField from './fields/password';
import DateField from './fields/date';
import DateTimeField from './fields/dateTime';
import TimeField from './fields/time';
import SelectField from './fields/select';
import GridTransfer from './fields/grid-transfer';
import Grid from '@mui/material/Grid';
import RadioField from './fields/radio';
import AutocompleteField from './fields/autocomplete';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import DaySelection from './fields/dayRadio';
import { Typography } from '@mui/material';
import { ActiveStepContext } from './Form';
import styled from '@emotion/styled';
import ChipInput from './fields/chipInput';
import TreeCheckbox from './fields/treeCheckBox';
import FileUpload from './fields/fileUpload';
import JSONInput from './fields/jsonInput';
import utils from '../utils';
import { useModelTranslation } from '../../hooks/useModelTranslation';

const fieldMappers = {
    "boolean": BooleanField,
    "select": SelectField,
    "string": StringField,
    "number": NumberField,
    "password": PasswordField,
    "date": DateField,
    "dateTime": DateTimeField,
    "time": TimeField,
    "oneToMany": GridTransfer,
    "radio": RadioField,
    "autocomplete": AutocompleteField,
    "dayRadio": DaySelection,
    "email": StringField,
    "chipInput": ChipInput,
    "treeCheckbox": TreeCheckbox,
    "fileUpload": FileUpload,
    "json": JSONInput
};

const gridContainerStyle = { paddingTop: "2.5px", paddingBottom: "2.5px" };
const sectionMarginTop = '20px';

const ImportantSpan = styled('span')({
  color: 'red !important',
});

const RenderSteps = ({ tabColumns, model, formik, data, onChange, combos, lookups, fieldConfigs, mode, handleSubmit }) => {
    const [skipped, setSkipped] = React.useState(new Set());
    const { tOpts, tTranslate } = useModelTranslation(model);

    const { activeStep, setActiveStep } = React.useContext(ActiveStepContext);

    const skipSteps = {};
    for (let index = 0, len = model.columns.length; index < len; index++) {
        const { field, skip } = model.columns[index];
        if (skip) {
            skipSteps[skip.step] = formik.values[field];
        }
    }

    const isStepSkipped = (step) => {
        return skipped.has(step) || skipSteps[step];
    };

    const isLastStep = () => {
        for (let nextStep = activeStep + 1; nextStep < tabColumns.length; nextStep++) {
            if (!isStepSkipped(nextStep)) {
                return false;
            }
        }
        return true;
    };
    const handleNext = () => {
        let nextStep = activeStep + 1;
        while (skipSteps[nextStep]) {
            nextStep++;
        }

        setSkipped((prevSkipped) => new Set(prevSkipped).add(activeStep));

        if (nextStep >= tabColumns.length || isLastStep()) {
            handleSubmit();
        } else {
            setActiveStep(nextStep);
        }
    };

    const handleBack = () => {
        let prevStep = activeStep - 1;

        while (skipSteps[prevStep] && prevStep > 0) {
            prevStep--;
        }
        setActiveStep(prevStep);
    };

    if (!tabColumns?.length) {
        return null;
    }

    const currentStep = tabColumns[activeStep];
    return (
        <>
            <Stepper activeStep={activeStep} sx={{ marginBottom: '20px' }}>
                {tabColumns.map(({ title, key }, index) => {
                    return (
                        <Step key={key} completed={isStepSkipped(index)}>
                            <StepLabel>
                                <Typography sx={{ fontSize: '20px' }}>{tTranslate(title, tOpts)}</Typography>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <React.Fragment>
                <RenderColumns formElements={currentStep.items} model={model} formik={formik} data={data} onChange={onChange} combos={combos} lookups={lookups} fieldConfigs={fieldConfigs} mode={mode} />
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mr: 2 }}>
                    {activeStep !== 0 ? <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{ mr: 2 }}>{tTranslate('Back', tOpts)}</Button> : null}
                    <Button onClick={handleNext} variant="contained">{isLastStep() ? tTranslate('Finish', tOpts) : tTranslate('Next', tOpts)}</Button>
                </Box>
            </React.Fragment>
        </>
    );
};

const RenderGroups = ({ tabColumns, model, formik, data, onChange, combos, lookups, fieldConfigs, mode, isAdd }) => {
    const { tOpts, tTranslate } = useModelTranslation(model);
    if (!tabColumns?.length) {
        return null;
    }
    return (
        <>
            {tabColumns.map(({ key, title, items }) => (
                <Box key={key} sx={{ marginTop: sectionMarginTop }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{tTranslate(title, tOpts)}</Typography>
                    <RenderColumns isAdd={isAdd} formElements={items} model={model} formik={formik} data={data} onChange={onChange} combos={combos} lookups={lookups} fieldConfigs={fieldConfigs} mode={mode} />
                </Box>
            ))}
        </>
    );
};

const RenderColumns = ({ formElements, model, formik, data, onChange, combos, lookups, fieldConfigs, mode, isAdd }) => {
    const { tOpts, tTranslate } = useModelTranslation(model);
    if (!formElements?.length) {
        return null;
    }
    return (
        <>
            {
                formElements.map(({ Component, column, field, label, otherProps }, key) => {
                    const isGridComponent = typeof column.relation === 'function';
                    return (
                        <Grid container spacing={2} key={key} sx={{ marginTop: "1rem", marginBottom: "1rem" }} alignItems={isGridComponent ? "flex-start" : "center"}>
                            {column?.showLabel !== false ?
                                <Grid size={{ xs: 3 }} sx={gridContainerStyle}>
                                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }} className="form-label">{tTranslate(column.label || field, tOpts)}: {column.required && <ImportantSpan>*</ImportantSpan>}</Typography>
                                </Grid>
                                : null
                            }
                            <Grid size={{ xs: isGridComponent ? 12 : 9 }} sx={gridContainerStyle}>
                                <Component isAdd={isAdd} model={model} fieldConfigs={fieldConfigs[field]} mode={mode} column={column} field={field} label={label} formik={formik} data={data} onChange={onChange} combos={combos} lookups={lookups} tTranslate={tTranslate} tOpts={tOpts} {...otherProps} />
                            </Grid>
                        </Grid >
                    );
                })
            }
        </>
    );
};

const getFormConfig = function ({ columns, tabs = {}, id, searchParams }) {
    const formElements = [], tabColumns = {};
    for (const tab in tabs) {
        tabColumns[tab] = [];
    }
    for (const column of columns) {
        const fieldType = column.type;
        if (column.label === null) { /* If the field should not be shown in form mode, specify label as null */
            continue;
        }
        const { field, label, tab } = column;
        const otherProps = {};
        if (column.options) {
            otherProps.options = column.options;
        }
        if (column.dependsOn) {
            otherProps.dependsOn = column.dependsOn;
        }
        const Component = fieldMappers[fieldType];
        if (!Component || (column.hideInAddGrid && id === '0')) {
            continue;
        }

        const target = tab && tabs[tab] ? tabColumns[tab] : formElements;
        target.push({ Component, field, label, column: { ...column, readOnly: searchParams.has('showRelation') || column.readOnly }, otherProps });
    }
    const tabsData = [];
    for (const tabColumn in tabColumns) {
        tabsData.push({ key: tabColumn, title: tabs[tabColumn], items: tabColumns[tabColumn] });
    }
    return { formElements, tabColumns: tabsData };
};

const FormLayout = ({ model, formik, data, combos, onChange, lookups, id: displayId, fieldConfigs, mode, handleSubmit }) => {
    const isAdd = utils.emptyIdValues.includes(displayId);
    const { formElements, tabColumns, showTabs, showGrouped } = React.useMemo(() => {
        const tabbedMode = model.formConfig?.showTabbed;
        const showTabs = tabbedMode === true || (typeof tabbedMode === 'string' && tabbedMode !== 'group');
        const showGrouped = tabbedMode === 'group' || (!showTabs && model.formConfig?.showGrouped === true);
        const searchParams = new URLSearchParams(window.location.search);
        const tabs = showTabs || showGrouped ? model.tabs : {};
        const { formElements, tabColumns } = getFormConfig({ columns: model.columns, tabs, id: displayId, searchParams });
        const hasTabColumns = tabColumns.length > 0;
        const showTabbedLayout = showTabs && hasTabColumns;
        const showGroupedLayout = !showTabbedLayout && showGrouped && hasTabColumns;
        return { formElements, tabColumns, showTabs: showTabbedLayout, showGrouped: showGroupedLayout };
    }, [model]);
    return (
        <div>
            <RenderColumns isAdd={isAdd} formElements={formElements} model={model} formik={formik} data={data} onChange={onChange} combos={combos} lookups={lookups} fieldConfigs={fieldConfigs} mode={mode} />
            <div style={{ marginTop: sectionMarginTop }}>
                {showTabs && <RenderSteps tabColumns={tabColumns} model={model} formik={formik} data={data} onChange={onChange} combos={combos} lookups={lookups} fieldConfigs={fieldConfigs} mode={mode} handleSubmit={handleSubmit} />}
                {showGrouped && <RenderGroups isAdd={isAdd} tabColumns={tabColumns} model={model} formik={formik} data={data} onChange={onChange} combos={combos} lookups={lookups} fieldConfigs={fieldConfigs} mode={mode} />}
            </div>
        </div>
    );
};

export default FormLayout;
