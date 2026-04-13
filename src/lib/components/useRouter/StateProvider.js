import React, { createContext, useContext, useRef, useState, useCallback, useMemo } from 'react';
import { locales } from '../mui/locale/localization';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '../SnackBar';

// Extend dayjs with the plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const StateContext = createContext();
const RouterContext = createContext(null);

// Fallback functions for missing SnackbarProvider
const snackbarWarning = () => console.warn('SnackbarProvider not found. Wrap StateProvider with SnackbarProvider.');

const StateProvider = ({ children, apiEndpoints: initialApiEndpoints = {} }) => {

  // App-level state - using individual useState for simplicity
  const [locale, setLocaleState] = useState('en');
  const [dateTime, setDateTimeState] = useState('MM/DD/YYYY hh:mm:ss A');
  const [pageTitle, setPageTitleState] = useState(null);
  const [modal, setModalState] = useState(null);
  const [pageBackButton, setPageBackButtonState] = useState(null);
  const [userData, setUserDataState] = useState(null);
  const [timeZone, setTimeZoneState] = useState('');

  // Framework functionality - loader management (simple on/off, no counter)
  const [isLoading, setIsLoading] = useState(false);

  // Framework functionality - i18n
  const { t, i18n } = useTranslation();

  // Framework functionality - snackbar
  const snackbar = useSnackbar();

  // Initialize with provided endpoints or empty object
  const apiEndpoints = useRef(initialApiEndpoints);

  const setApiEndpoint = useCallback((key, endpoint) => {
    apiEndpoints.current[key] = endpoint;
  }, []);

  const getApiEndpoint = useCallback((key) => {
    return apiEndpoints.current[key || "default"] || '';
  }, []);

  const buildUrl = useCallback((url, endpoint) => {
    const baseUrl = apiEndpoints.current[endpoint || "default"] || '';
    return `${baseUrl}${url}`;
  }, []);

  /**
   * Show loader - simple boolean toggle
   * Calling methods should wrap all async operations in try/finally blocks
   */
  const showLoader = useCallback((flag = true) => {
    setIsLoading(flag);
  }, []);


  /**
   * Returns the system date and/or time format string based on user preferences and options.
   *
   * @param {boolean} isDateFormatOnly - If true, returns only the date format; otherwise, returns date and time format.
   * @param {boolean} showOnlyDate - If true and isDateFormatOnly is false, returns only the date part in uppercase.
   * @param {string|null|undefined} state - The user-defined date/time format string (e.g., "dd-mm-yyyy hh:mm A").
   * @returns {string} The formatted date/time format string.
   */
  const systemDateTimeFormat = useCallback((isDateFormatOnly, showOnlyDate, state) => {
    if (state !== undefined && state !== null) {
      const userData = state; // Access 'state' 
      let userDateFormat = isDateFormatOnly ? 'DD-MM-YYYY' : 'DD-MM-YYYY hh:mm:ss A';
      if (userData) {
        userDateFormat = userData.split(' ');
        userDateFormat[0] = userDateFormat[0].toUpperCase();
        if (!isDateFormatOnly) {
          if (showOnlyDate) {
            userDateFormat = userDateFormat[0].toUpperCase();
          } else {
            userDateFormat[1] += !userDateFormat[1].includes(':ss') ? ':ss' : '';
            userDateFormat = userDateFormat.join(" ");
          }
        } else {
          userDateFormat = userDateFormat[0];
        }
      };
      return userDateFormat;
    }
    return isDateFormatOnly?.split(' ')[0] || 'DD-MM-YYYY';
  }, []);

  /**
  * Formats a date value using system or user-defined format with optional timezone and UTC handling.
  *
  * @param {Object} params - The parameters object.
  * @param {string|Date} params.value - The date value to format.
  *   - Strings without explicit timezone info (e.g. "2000-01-01", "2000-01-01T00:00:00") are
  *     parsed as local time and displayed as-is. This ensures plain date values like birthdays
  *     are never shifted by UTC offset.
  *   - Strings with an explicit UTC marker or offset (e.g. "2000-01-01T00:00:00Z",
  *     "2000-01-01T00:00:00+05:30") are parsed as UTC/offset-aware:
  *     * localize=false → displayed in UTC (no conversion).
  *     * localize=true  → converted to the target timezone/local time.
  *   - Date objects behave differently based on `localize`:
  *     * localize=true  → raw UTC Date (as produced by crud-helper); parsed with dayjs.utc().
  *     * localize=false → offset-adjusted Date (pre-shifted by crud-helper); parsed with dayjs().
  * @param {boolean} params.useSystemFormat - Whether to use the system date format.
  * @param {boolean} [params.showOnlyDate=false] - Whether to show only the date part.
  * @param {string|null|undefined} params.state - The user-defined date/time format string.
  * @returns {string|null} The formatted date string, or `null` if value is falsy.
  */
  const formatDate = useCallback(({ value, useSystemFormat, showOnlyDate = false, state }) => {
    if (!value) return null;
    const format = systemDateTimeFormat(useSystemFormat, showOnlyDate, state); // Pass 'state' as an argument
    return dayjs(value).format(format);
  }, [systemDateTimeFormat]);

  /**
   * Provides localization utilities for the current locale.
   *
   * @returns {Object} An object with a getLocalizedString function.
   */
  const useLocalization = useCallback(() => {
    const currentLocaleData = locale;
    const localeData = locales[currentLocaleData];
    function getLocalizedString(key) {
      return currentLocaleData === 'pt-PT' || currentLocaleData === 'ptPT' ? localeData.components.MuiDataGrid.defaultProps.localeText[key] || key : localeData[key] || key;
    }
    return { getLocalizedString };
  }, [locale]);

  /**
   * Set the application locale
   */
  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale);
  }, []);

  /**
   * Set page title details
   */
  const setPageTitle = useCallback((title) => {
    setPageTitleState(title);
  }, []);

  /**
   * Set page back button configuration
   */
  const setPageBackButton = useCallback((backButton) => {
    setPageBackButtonState(backButton);
  }, []);

  /**
   * Set user data
   */
  const setUserData = useCallback((newUserData) => {
    setUserDataState(newUserData);
  }, []);

  /**
   * Set timezone
   */
  const setTimeZone = useCallback((newTimeZone) => {
    setTimeZoneState(newTimeZone);
  }, []);

  /**
   * Set date/time format
   */
  const setDateTimeFormat = useCallback((format) => {
    setDateTimeState(format);
  }, []);

  /**
   * Open/close modal
   */
  const setModal = useCallback((newModal) => {
    setModalState(newModal);
  }, []);

  // Create stateData object for backward compatibility
  const stateData = useMemo(() => ({
    locale,
    dateTime,
    pageTitle,
    modal,
    pageBackButton,
    userData,
    timeZone
  }), [locale, dateTime, pageTitle, modal, pageBackButton, userData, timeZone]);

  const contextValue = useMemo(() => ({
    // State data
    stateData,

    // Loader management
    isLoading,
    showLoader,

    // Snackbar utilities
    showMessage: snackbar?.showMessage || snackbarWarning,
    showError: snackbar?.showError || snackbarWarning,

    // i18n utilities
    dayjs,
    t,
    i18n,

    // Date/time utilities
    systemDateTimeFormat,
    formatDate,
    useLocalization,

    // API utilities
    getApiEndpoint,
    setApiEndpoint,
    buildUrl,

    // App-level state setters with meaningful names
    setLocale,
    setPageTitle,
    setPageBackButton,
    setUserData,
    setTimeZone,
    setDateTimeFormat,
    setModal
  }), [stateData, isLoading, showLoader, t, i18n, snackbar,
    getApiEndpoint, setApiEndpoint, systemDateTimeFormat, formatDate, useLocalization,
    setLocale, setPageTitle, setPageBackButton, setUserData, setTimeZone, setDateTimeFormat, setModal, buildUrl]);

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

const RouterProvider = RouterContext.Provider;

const useRouter = () => {
  return useContext(RouterContext);
};

const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};

export { StateProvider, useStateContext, useRouter, RouterProvider };
