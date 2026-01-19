import { jsx as n, jsxs as D, Fragment as fe } from "react/jsx-runtime";
import * as Le from "react";
import ct, { createContext as jt, useContext as hr, useState as O, useEffect as ce, useReducer as Xn, useRef as Wr, useMemo as me, useCallback as se, memo as Kr, createElement as gr } from "react";
import ea from "@mui/material/Snackbar";
import ta from "@mui/material/Alert";
import Ce from "@mui/material/Button";
import ra from "@mui/material/Dialog";
import na from "@mui/material/DialogActions";
import aa from "@mui/material/DialogContent";
import oa from "@mui/material/DialogContentText";
import ia from "@mui/material/DialogTitle";
import * as We from "@mui/x-data-grid-premium";
import { GridFooterContainer as la, GridFooter as sa, getGridDateOperators as qr, useGridApiRef as Yr, DataGridPremium as Jr, GridActionsCellItem as Me, useGridSelector as ca, gridFilterModelSelector as ua, GridToolbarExportContainer as da, Toolbar as pa, GRID_CHECKBOX_SELECTION_COL_DEF as fa, getGridStringOperators as ma, getGridBooleanOperators as ha, ColumnsPanelTrigger as ga, FilterPanelTrigger as ya } from "@mui/x-data-grid-premium";
import Zr from "@mui/icons-material/Delete";
import Mr from "@mui/icons-material/FileCopy";
import ba from "@mui/icons-material/Article";
import pr from "@mui/icons-material/Edit";
import Ca from "@mui/icons-material/FilterListOff";
import Rr from "@mui/icons-material/Add";
import Ea from "@mui/icons-material/Remove";
import vt from "@mui/material/Typography";
import He from "@mui/material/Box";
import Ht from "@mui/material/TextField";
import { useTranslation as Qr, withTranslation as Da } from "react-i18next";
import { Typography as xe, Dialog as Ta, DialogTitle as xa, Grid as pe, DialogContent as va, Card as wa, CardContent as Sa, Breadcrumbs as Aa, Link as Oa, Button as Qe, IconButton as Xr, Box as Te, Menu as Pa, List as Fa, MenuItem as xt, ListItemButton as cr, ListItemIcon as Ia, ListItem as Ma, ListItemText as Ra, TextField as Vt, FormControlLabel as Xe, Checkbox as La, Stack as Lr, Tooltip as De, FormControl as yr, Select as Na, Badge as Ba, FormHelperText as ut, useTheme as dt, InputAdornment as ka, FormLabel as $a, RadioGroup as br, Radio as st, styled as _a, Avatar as Va, CircularProgress as za, Divider as Ga } from "@mui/material";
import Ua from "@mui/icons-material/Check";
import fr from "@mui/icons-material/Close";
import ja from "@mui/icons-material/Help";
import { Replay as Ha, Close as Wa, GridOn as Ka, TableChart as Nr, Code as qa, Language as Ya, DataObject as Ja } from "@mui/icons-material";
import te from "dayjs";
import Za from "dayjs/plugin/utc";
import Qa from "dayjs/plugin/timezone";
import { DatePicker as en } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as mr } from "@mui/x-date-pickers/DateTimePicker";
import Xa from "dayjs/plugin/utc.js";
import { LocalizationProvider as eo } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as to } from "@mui/x-date-pickers/AdapterDayjs";
import ro from "@mui/icons-material/Save";
import Br from "@mui/icons-material/Settings";
import { useFormik as tn } from "formik";
import * as ne from "yup";
import no from "@mui/icons-material/History";
import ao from "@mui/icons-material/FileDownload";
import rn from "@mui/material/Checkbox";
import nn from "@mui/material/MenuItem";
import { styled as Wt } from "@mui/material/styles";
import oo from "@mui/icons-material/ViewColumn";
import io from "@mui/icons-material/FilterList";
import lo from "@mui/material/Paper";
import so from "@mui/material/Stack";
import co from "@mui/material/CircularProgress";
import uo from "@mui/material/FormControlLabel";
import po from "@mui/icons-material/VisibilityOff";
import fo from "@mui/icons-material/Visibility";
import { TimePicker as mo } from "@mui/x-date-pickers/TimePicker";
import ho from "@mui/icons-material/KeyboardArrowDown";
import Kt from "@mui/material/FormControl";
import go from "@mui/material/InputLabel";
import yo from "@mui/material/Select";
import ur from "@mui/material/Grid";
import an from "@mui/material/Autocomplete";
import bo from "@mui/material/Stepper";
import Co from "@mui/material/Step";
import Eo from "@mui/material/StepLabel";
import { grey as Do } from "@mui/material/colors";
import To from "@emotion/styled";
import xo from "@mui/material/Chip";
import { SimpleTreeView as vo } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as kr } from "@mui/x-tree-view/TreeItem";
import wo from "@mui/material/Input";
import So from "@mui/material/Tab";
import Ao from "@mui/material/Tabs";
const on = jt(null), Oo = "bottom", Po = "center", Fo = ct.forwardRef(function(t, r) {
  return /* @__PURE__ */ n(ta, { elevation: 6, ref: r, variant: "filled", ...t });
}), Bs = ({ children: e }) => {
  const [t, r] = O(null), [a, o] = O(!1), [s, i] = O(null), [c, p] = O(null), h = function(l, b, f = "info", d) {
    typeof l != "string" && (l = l.toString()), b && typeof b != "string" && (b = b.toString()), r(b ? `${l}: ${b}` : l), i(f), o(!0), p(d);
  }, y = function(l, b, f = "error", d) {
    h(l, b, f, d);
  }, u = function() {
    o(!1), p(null), c && c();
  };
  return /* @__PURE__ */ D(fe, { children: [
    /* @__PURE__ */ n(
      on.Provider,
      {
        value: { showMessage: h, showError: y },
        children: e
      }
    ),
    /* @__PURE__ */ n(ea, { open: a, autoHideDuration: 6e3, onClose: u, anchorOrigin: { vertical: Oo, horizontal: Po }, children: /* @__PURE__ */ n(Fo, { severity: s, children: t }) })
  ] });
}, qt = function() {
  return hr(on);
}, Ne = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: a, okText: o, cancelText: s, yesNo: i = !1, children: c, maxWidth: p = "sm", fullWidth: h = !0, ...y }) => (o = o || (i ? "Yes" : "Ok"), s = s || (i ? "No" : "Cancel"), /* @__PURE__ */ D(
  ra,
  {
    ...y,
    open: e,
    onClose: a,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: p,
    fullWidth: h,
    children: [
      /* @__PURE__ */ n(ia, { id: "alert-dialog-title", sx: { fontSize: c ? "inherit" : "1.25rem" }, children: r }),
      c && /* @__PURE__ */ n(aa, { dividers: !0, children: /* @__PURE__ */ n(oa, { children: c }) }),
      (a || t) && /* @__PURE__ */ D(na, { children: [
        a && /* @__PURE__ */ n(Ce, { onClick: a, children: s }),
        t && /* @__PURE__ */ n(Ce, { onClick: t, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Z = {
  UPDATE_FORM_MODE: "UPDATE_FORM_MODE",
  UPDATE_DATE_TIME: "UPDATE_DATE_TIME",
  UPDATE_LOCALIZATION: "UPDATE_LOCALIZATION",
  PAGE_TITLE_DETAILS: "PAGE_TITLE_DETAILS",
  OPEN_MODAL: "OPEN_MODAL",
  SET_PAGE_BACK_BUTTON: "SET_PAGE_BACK_BUTTON",
  SET_GRID_SETTINGS: "SET_GRID_SETTINGS",
  SET_LOCAL_LOCALIZATION: "SET_LOCAL_LOCALIZATION",
  USER_DATA: "USER_DATA",
  UDPATE_PREFERENCES: "UDPATE_PREFERENCES",
  TOTAL_PREFERENCES: "TOTAL_PREFERENCES",
  SET_CURRENT_PREFERENCE_NAME: "SET_CURRENT_PREFERENCE_NAME",
  UPDATE_LOADER_STATE: "UPDATE_LOADER_STATE",
  PASS_FILTERS_TO_HEADER: "PASS_FILTERS_TO_HEADER",
  SET_TIMEZONE: "SET_TIMEZONE"
};
let Tt = 0;
const Se = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, ln = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, Io = (e, t) => {
  const r = new URL(e);
  for (const a in t) {
    const o = typeof t[a] == "object" ? JSON.stringify(t[a]) : t[a];
    r.searchParams.append(a, o);
  }
  window.open(r, "_blank").focus();
}, tt = async (e) => {
  const {
    method: t = "GET",
    url: r,
    data: a,
    headers: o = {},
    credentials: s = "include",
    ...i
  } = e, c = {
    method: t,
    credentials: s,
    headers: {
      ...o
    },
    ...i
  };
  a && (o["Content-Type"] === "multipart/form-data" ? (delete c.headers["Content-Type"], c.body = a instanceof FormData ? a : ln(a)) : (c.headers["Content-Type"] = o["Content-Type"] || "application/json", c.body = typeof a == "string" ? a : JSON.stringify(a)));
  const p = await fetch(r, c), h = p.headers.get("content-type") || {};
  return {
    status: p.status,
    data: h.includes("application/json") ? await p.json() : await p.text(),
    headers: Object.fromEntries(p.headers.entries())
  };
}, $t = {
  /**
   * Parse JSON string or return object as-is
   * Automatically handles string JSON responses
   */
  json: (e) => typeof e == "string" ? JSON.parse(e) : e,
  /**
   * Convert to string
   */
  text: (e) => String(e),
  /**
   * Return data as-is without parsing
   */
  raw: (e) => e
}, _t = async ({
  url: e,
  params: t = {},
  history: r,
  jsonPayload: a = !1,
  additionalParams: o = {},
  additionalHeaders: s = {},
  disableLoader: i = !1,
  dispatchData: c,
  dataParser: p = $t.raw,
  onParseError: h
}) => {
  if (t.exportData)
    return Io(e, t);
  i = i || typeof c != "function", i || c({ type: Z.UPDATE_LOADER_STATE, payload: !0 }), Tt++;
  const y = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: a ? { ...s } : { "Content-Type": "multipart/form-data", ...s },
    ...o
  };
  t && (y.data = a ? t : ln(t));
  try {
    const u = await tt(y);
    Tt--;
    let l = u.data;
    if (Tt === 0 && !i && c({ type: "UPDATE_LOADER_STATE", payload: !1 }), u.status === Se.SESSION_EXPIRED && r) {
      r("/login");
      return;
    }
    if (u.status !== Se.OK)
      return { error: !0, message: l.message || "An error occurred" };
    try {
      l = p(l);
    } catch (b) {
      return h ? h(b, l) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: b.message,
        rawData: l
      };
    }
    return l;
  } catch (u) {
    return Tt--, Tt === 0 && !i && c({ type: "UPDATE_LOADER_STATE", payload: !1 }), { error: !0, message: u.message || "Network error" };
  }
}, Mo = ["date", "dateTime"], Ro = ["singleSelect"], $r = 200, Lo = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset(), Ae = (e, t) => e.status === Se.SESSION_EXPIRED ? (t("Session Expired!"), setTimeout(() => {
  window.location.href = "/";
}, $r), !0) : e.status === Se.FORBIDDEN ? (t("Access Denied!"), setTimeout(() => {
  window.location.href = "/";
}, $r), !0) : (e.status === Se.INTERNAL_SERVER_ERROR && t("Internal Server Error"), !1);
function No(e) {
  const { operator: t, value: r, type: a } = e, o = ["isEmpty", "isNotEmpty"].includes(t), s = r != null && (r !== "" || a === "number" && r === 0 || a === "boolean" && r === !1);
  return o || s;
}
const sn = async ({ gridColumns: e, setIsLoading: t, setData: r, page: a, pageSize: o, sortModel: s, filterModel: i, api: c, parentFilters: p, action: h = "list", setError: y, extraParams: u, contentType: l, columns: b, controllerType: f = "node", template: d = null, configFileName: E = null, dispatchData: T, showFullScreenLoader: P = !1, model: S, baseFilters: x = null, isElasticExport: L }) => {
  l || P && T({ type: Z.UPDATE_LOADER_STATE, payload: !0 });
  const z = [], ie = [], le = [];
  e.forEach(({ lookup: k, type: re, field: W, keepLocal: _ = !1, keepLocalDate: $, filterable: j = !0, dependsOn: ue }) => {
    Mo.includes(re) && le.push({ field: W, keepLocal: _, keepLocalDate: $ }), k && !z.includes(k) && Ro.includes(re) && j && (z.push(k), ie.push({ lookup: k, dependsOn: ue }));
  });
  const Y = [];
  i?.items?.length && i.items.forEach((k) => {
    if (No(k)) {
      const { field: re, operator: W, filterField: _ } = k;
      let { value: $ } = k;
      const ue = e.filter((F) => F?.field === k.field)[0]?.type;
      ue === "boolean" ? $ = $ === "true" || $ === !0 ? 1 : 0 : ue === "number" && ($ = Array.isArray($) ? $.filter((F) => F) : $), $ = k.filterValues || $, Y.push({
        field: _ || re,
        operator: W,
        value: $,
        type: ue
      });
    }
  }), p && Y.push(...p), x && Y.push(...x);
  const N = {
    start: a * o,
    limit: L ? S.exportSize : o,
    ...u,
    logicalOperator: i.logicOperator,
    sort: s.map((k) => (k.filterField || k.field) + " " + k.sort).join(","),
    where: Y,
    isElasticExport: L,
    model: S.module,
    fileName: S.overrideFileName
  };
  z.length && (N.lookups = z.join(",")), ie.length && (N.lookupWithDeps = JSON.stringify(ie)), S?.limitToSurveyed && (N.limitToSurveyed = S?.limitToSurveyed);
  const J = {};
  let K = f === "cs" ? `${c}?action=${h}&asArray=0` : `${c}/${h}`;
  if (d !== null && (K += `&template=${d}`), E !== null && (K += `&configFileName=${E}`), l) {
    const k = document.createElement("form");
    if (N.responseType = l, N.columns = b, N.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), k.setAttribute("method", "POST"), k.setAttribute("id", "exportForm"), k.setAttribute("target", "_blank"), d === null)
      for (const re in N) {
        let W = N[re];
        if (W == null)
          continue;
        typeof W != "string" && (W = JSON.stringify(W));
        const _ = document.createElement("input");
        _.type = "hidden", _.name = re, _.value = W, k.append(_);
      }
    k.setAttribute("action", K), document.body.appendChild(k), k.submit(), setTimeout(() => {
      document.getElementById("exportForm").remove();
    }, 3e3);
    return;
  }
  try {
    t(!0);
    const k = {
      url: K,
      method: "POST",
      data: N,
      headers: {
        "Content-Type": "application/json",
        ...J
      },
      credentials: "include"
    };
    r((W) => ({
      ...W,
      records: []
      // reset records to empty array before fetching new data
    }));
    const re = await tt(k);
    if (re.status === Se.OK) {
      const { records: W } = re.data;
      W && W.forEach((_) => {
        le.forEach(($) => {
          const { field: j, keepLocal: ue, keepLocalDate: F } = $;
          if (_[j]) {
            if (_[j] = new Date(_[j]), F) {
              const I = _[j].getTimezoneOffset() * 6e4;
              _[j] = new Date(_[j].getTime() + I);
            }
            if (ue && !Lo(_[j])) {
              const I = _[j].getTimezoneOffset() * 6e4;
              _[j] = new Date(_[j].getTime() + I);
            }
          }
        }), S.columns.forEach(({ field: $, displayIndex: j }) => {
          j && (_[$] = _[j]);
        });
      }), r(re.data);
    } else Ae(re, y) || y(re.statusText);
  } catch (k) {
    k.response && !Ae(k.response, y) ? y("Could not list record", k.message || k.toString()) : y("Network failure or server unreachable. Please try again.");
  } finally {
    t(!1), !l && P && T({ type: Z.UPDATE_LOADER_STATE, payload: !1 });
  }
}, zt = async ({ api: e, id: t, setIsLoading: r, setActiveRecord: a, model: o, parentFilters: s, where: i = {}, setError: c }) => {
  e = e || o.api, r(!0);
  const p = new URLSearchParams(), h = `${e}/${t ?? "-"}`, y = [];
  (o.formDef || o.columns)?.forEach((l) => {
    l.lookup && !y.includes(l.lookup) && !l.dependsOn && y.push(l.lookup);
  }), p.set("lookups", y), i && Object.keys(i)?.length && p.set("where", JSON.stringify(i));
  try {
    const l = await tt({
      url: `${h}?${p.toString()}`,
      method: "GET",
      credentials: "include"
    });
    if (l.status === Se.OK) {
      const { data: b, lookups: f } = l.data;
      let d = b[o.linkColumn];
      const E = o.columns.find((P) => P.field === o.linkColumn);
      if (E && E.lookup && f && f[E.lookup] && f[E.lookup]?.length) {
        const P = f[E.lookup].find((S) => S.value === d);
        P && (d = P.label);
      }
      const T = { ...o.defaultValues };
      a({ id: t, title: d, record: { ...T, ...b, ...s }, lookups: f });
    } else Ae(l, c) || c("Could not load record", l.body.toString());
  } catch (l) {
    l.response && Ae(l.response, c) && c("Could not load record", l.message || l.toString());
  } finally {
    r(!1);
  }
}, Cr = async function({ id: e, api: t, setIsLoading: r, setError: a }) {
  const o = { success: !1, error: "" };
  if (!e) {
    a("Deleted failed. No active record.");
    return;
  }
  r(!0);
  try {
    const s = await tt({
      url: `${t}/${e}`,
      method: "DELETE",
      credentials: "include"
    });
    if (s.status === Se.OK)
      return s.data && !s.data.success ? (o.success = !1, a("Delete failed", s.data.message), !1) : (o.success = !0, !0);
    Ae(s, a) || a("Delete failed", s.body);
  } catch (s) {
    s.response && !Ae(s.response, a) && a("Could not delete record", s.message || s.toString());
  } finally {
    r(!1);
  }
  return o;
}, Er = async function({ id: e, api: t, values: r, setIsLoading: a, setError: o }) {
  let s, i;
  e !== 0 ? (s = `${t}/${e}`, i = "PUT") : (s = t, i = "POST");
  try {
    a(!0);
    const c = await tt({
      url: s,
      method: i,
      data: r,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status === Se.OK) {
      const p = c.data;
      if (p.success)
        return p;
      o("Save failed", p.err || p.message);
    } else Ae(c, o) || o("Save failed", c.body);
  } catch (c) {
    c.response && !Ae(c.response, o) && o("Could not save record", c.message || c.toString());
  } finally {
    a(!1);
  }
  return !1;
}, Bo = async ({ api: e, setIsLoading: t, setActiveRecord: r, model: a, setError: o, lookups: s, scopeId: i }) => {
  e = e || a.api, t(!0);
  const c = new URLSearchParams(), p = `${e}/lookups`;
  c.set("lookups", s), c.set("scopeId", i);
  try {
    const h = await tt({
      url: `${p}?${c.toString()}`,
      method: "GET",
      credentials: "include"
    });
    h.status === Se.OK ? r(h.data) : Ae(h, o) || o("Could not load lookups", h.statusText);
  } catch (h) {
    h.response && !Ae(h.response, o) && o("Could not load lookups", h.message || h.toString());
  } finally {
    t(!1);
  }
}, ks = {
  getList: sn,
  getRecord: zt,
  deleteRecord: Cr,
  saveRecord: Er,
  getLookups: Bo
}, ko = ({ pagination: e, apiRef: t, tTranslate: r = (a) => a }) => {
  const a = t.current.state.pagination.paginationModel.page, o = t.current.state.pagination.paginationModel.pageSize, s = t.current.state.rows.totalRowCount, i = Math.ceil(s / o), { t: c, i18n: p } = Qr(), h = { t: c, i18n: p }, [y, u] = O(a + 1), l = function(d) {
    let E = d.target?.value;
    E === "" ? u("") : (E = parseInt(E), E = isNaN(E) || E < 1 ? 1 : E, u(E));
  };
  ce(() => {
    u(a + 1);
  }, [a, o]);
  const b = function() {
    let d = y === "" ? 1 : y;
    d = Math.max(d, 1), d = Math.min(d, i), t.current.setPage(d - 1), u(d), y === "" && u(1);
  }, f = (d) => {
    const E = d.which || d.keyCode, T = String.fromCharCode(E);
    /\d/.test(T) || d.preventDefault();
  };
  return /* @__PURE__ */ D(la, { children: [
    /* @__PURE__ */ n(He, { sx: { pl: 5 }, children: e && /* @__PURE__ */ D(fe, { children: [
      /* @__PURE__ */ D(vt, { variant: "p", children: [
        r("Jump to page", h),
        ":"
      ] }),
      /* @__PURE__ */ n(
        Ht,
        {
          sx: {
            width: 70,
            pl: 1,
            "& input[type=number]::-webkit-inner-spin-button": {
              cursor: "pointer"
            },
            "& input[type=number]::-webkit-outer-spin-button": {
              cursor: "pointer"
            }
          },
          variant: "standard",
          type: "number",
          min: 1,
          value: y,
          onChange: l,
          onKeyPress: f,
          disabled: !s
        }
      ),
      /* @__PURE__ */ n(Ce, { disabled: !s, size: "small", onClick: b, children: r("Go", h) })
    ] }) }),
    /* @__PURE__ */ n(sa, {})
  ] });
}, $o = /\${((\w+)\.)?(\w+)}/g, _o = function(e, t, { template: r = $o, keepMissingTags: a = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(o, s, i, c) {
    const p = i ? t[i] || {} : t;
    return p[c] === void 0 ? a ? o : "" : p[c];
  });
}, dr = {
  replaceTags: _o
};
function _r({ variant: e = "h2", component: t = "h2", text: r = "", name: a = null, ...o }) {
  return /* @__PURE__ */ D(xe, { variant: e, component: t, ...o, children: [
    r,
    a && ` ${a}`
  ] });
}
function Vo(e = !1) {
  const t = s(), [r, a] = O(t);
  function o() {
    setTimeout(() => {
      a(s());
    }, 10);
  }
  ce(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function s() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const c = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const p = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let h = null;
    return window.innerWidth <= window.innerHeight ? h = "portrait" : h = "landscape", { mobile: c, tablet: p, portrait: h === "portrait", landscape: h === "landscape" };
  }
  return e ? r.mobile : r;
}
const zo = (e, t) => {
  switch (t.type) {
    case Z.UPDATE_LOCALIZATION:
      return { ...e, dataLocalization: t.payload };
    case Z.UPDATE_DATE_TIME:
      return { ...e, dateTime: t.payload };
    case Z.UPDATE_FORM_MODE:
      return { ...e, dataForm: t.payload };
    case Z.PAGE_TITLE_DETAILS:
      return { ...e, pageTitleDetails: t.payload };
    case Z.OPEN_MODAL:
      return { ...e, modal: t.payload };
    case Z.SET_PAGE_BACK_BUTTON:
      return { ...e, pageBackButton: t.payload };
    case Z.SET_GRID_SETTINGS:
      return { ...e, gridSettings: t.payload };
    case Z.SET_LOCAL_LOCALIZATION:
      return { ...e, getLocal: t.payload };
    case Z.USER_DATA:
      return { ...e, getUserData: t.payload };
    case Z.UDPATE_PREFERENCES:
      return { ...e, preferences: t.payload };
    case Z.SET_CURRENT_PREFERENCE_NAME:
      return { ...e, currentPreference: t.payload };
    case Z.TOTAL_PREFERENCES:
      return { ...e, totalPreferences: t.payload };
    case Z.UPDATE_LOADER_STATE:
      return { ...e, loaderOpen: t.payload };
    case Z.PASS_FILTERS_TO_HEADER:
      return { ...e, filtersInHeader: t.payload };
    case Z.SET_TIMEZONE:
      return { ...e, timeZone: t.payload };
    default:
      return e;
  }
}, Go = {
  dataLocalization: "en",
  dateTime: "MM/DD/YYYY hh:mm:ss A",
  dataForm: "",
  pageTitleDetails: null,
  modal: null,
  pageBackButton: null,
  gridSettings: {},
  getLocal: {},
  getUserData: null,
  preferences: [],
  currentPreference: null,
  totalPreferences: null,
  loaderOpen: !1,
  filtersInHeader: {},
  timeZone: ""
}, Uo = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, jo = {
  ...We.daDK,
  ...Uo
}, Ho = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Wo = {
  ...We.deDE,
  ...Ho
}, Ko = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, qo = {
  ...We.elGR,
  ...Ko
}, Yo = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Jo = {
  ...We.esES,
  ...Yo
}, Zo = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Qo = {
  ...We.frFR,
  ...Zo
}, Xo = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, ei = {
  ...We.itIT,
  ...Xo
}, ti = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, ri = {
  ...We.trTR,
  ...ti
}, ni = {
  components: {
    MuiDataGrid: {
      defaultProps: {
        localeText: {
          Add: "createew",
          noRowsLabel: "Sem resultados",
          noResultsOverlayLabel: "Nenhum resultado encontrado.",
          // Density selector toolbar button text
          toolbarDensity: "Densidade",
          toolbarDensityLabel: "Densidade",
          toolbarDensityCompact: "Compacto",
          toolbarDensityStandard: "Padrão",
          toolbarDensityComfortable: "Confortável",
          // Columns selector toolbar button text
          toolbarColumns: "Colunas",
          toolbarColumnsLabel: "Selecionar colunas",
          // Filters toolbar button text
          toolbarFilters: "Filtros",
          toolbarFiltersLabel: "Mostrar filtros",
          toolbarFiltersTooltipHide: "Esconder filtros",
          toolbarFiltersTooltipShow: "Mostrar filtros",
          toolbarFiltersTooltipActive: (e) => e !== 1 ? `${e} filtros ativos` : `${e} filtro ativo`,
          // Quick filter toolbar field
          toolbarQuickFilterPlaceholder: "Pesquisar...",
          toolbarQuickFilterLabel: "Pesquisar",
          toolbarQuickFilterDeleteIconLabel: "Limpar",
          // Export selector toolbar button text
          toolbarExport: "Exportar",
          toolbarExportLabel: "Exportar",
          toolbarExportCSV: "Baixar como CSV",
          toolbarExportPrint: "Imprimir",
          toolbarExportExcel: "Baixar como Excel",
          // Columns panel text
          columnsPanelTextFieldLabel: "Encontrar coluna",
          columnsPanelTextFieldPlaceholder: "Título da coluna",
          columnsPanelDragIconLabel: "Reorganizar coluna",
          columnsPanelShowAllButton: "Mostrar todas",
          columnsPanelHideAllButton: "Esconder todas",
          // Filter panel text
          filterPanelAddFilter: "Adicionar filtro",
          filterPanelRemoveAll: "Remover todos",
          filterPanelDeleteIconLabel: "Excluir",
          filterPanelLogicOperator: "Operador lógico",
          filterPanelOperator: "Operador",
          filterPanelOperatorAnd: "E",
          filterPanelOperatorOr: "Ou",
          filterPanelColumns: "Colunas",
          filterPanelInputLabel: "Valor",
          filterPanelInputPlaceholder: "Valor do filtro",
          // Filter operators text
          filterOperatorContains: "contém",
          filterOperatorEquals: "é igual a",
          filterOperatorStartsWith: "começa com",
          filterOperatorEndsWith: "termina com",
          filterOperatorIs: "é",
          filterOperatorNot: "não é",
          filterOperatorAfter: "é posterior a",
          filterOperatorOnOrAfter: "é em ou depois de",
          filterOperatorBefore: "é anterior a",
          filterOperatorOnOrBefore: "é em ou antes de",
          filterOperatorIsEmpty: "está vazio",
          filterOperatorIsNotEmpty: "não está vazio",
          filterOperatorIsAnyOf: "é algum de",
          "filterOperator=": "=",
          "filterOperator!=": "!=",
          "filterOperator>": ">",
          "filterOperator>=": ">=",
          "filterOperator<": "<",
          "filterOperator<=": "<=",
          // Header filter operators text
          headerFilterOperatorContains: "Contém",
          headerFilterOperatorEquals: "É igual a",
          headerFilterOperatorStartsWith: "Começa com",
          headerFilterOperatorEndsWith: "Termina com",
          headerFilterOperatorIs: "É",
          headerFilterOperatorNot: "Não é",
          headerFilterOperatorAfter: "É depois de",
          headerFilterOperatorOnOrAfter: "É em ou depois de",
          headerFilterOperatorBefore: "É antes de",
          headerFilterOperatorOnOrBefore: "É em ou antes de",
          headerFilterOperatorIsEmpty: "Está vazio",
          headerFilterOperatorIsNotEmpty: "Não está vazio",
          headerFilterOperatorIsAnyOf: "É algum de",
          "headerFilterOperator=": "É igual a",
          "headerFilterOperator!=": "Não é igual a",
          "headerFilterOperator>": "Maior que",
          "headerFilterOperator>=": "Maior ou igual a",
          "headerFilterOperator<": "Menor que",
          "headerFilterOperator<=": "Menor ou igual a",
          // Filter values text
          filterValueAny: "qualquer",
          filterValueTrue: "verdadeiro",
          filterValueFalse: "falso",
          // Column menu text
          columnMenuLabel: "Menu",
          columnMenuShowColumns: "Mostrar colunas",
          columnMenuManageColumns: "Gerenciar colunas",
          columnMenuFilter: "Filtro",
          columnMenuHideColumn: "Esconder coluna",
          columnMenuUnsort: "Desfazer ordenação",
          columnMenuSortAsc: "Ordenar por ASC",
          columnMenuSortDesc: "Ordenar por DESC",
          // Column header text
          columnHeaderFiltersTooltipActive: (e) => e !== 1 ? `${e} filtros ativos` : `${e} filtro ativo`,
          columnHeaderFiltersLabel: "Mostrar filtros",
          columnHeaderSortIconLabel: "Ordenar",
          // Rows selected footer text
          footerRowSelected: (e) => e !== 1 ? `${e.toLocaleString()} linhas selecionadas` : `${e.toLocaleString()} linha selecionada`,
          // Total row amount footer text
          footerTotalRows: "Total de linhas:",
          // Total visible row amount footer text
          footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} de ${t.toLocaleString()}`,
          // Checkbox selection text
          checkboxSelectionHeaderName: "Seleção de caixa de seleção",
          checkboxSelectionSelectAllRows: "Selecionar todas as linhas",
          checkboxSelectionUnselectAllRows: "Desselecionar todas as linhas",
          checkboxSelectionSelectRow: "Selecionar linha",
          checkboxSelectionUnselectRow: "Desselecionar linha",
          // Boolean cell text
          booleanCellTrueLabel: "sim",
          booleanCellFalseLabel: "não",
          // Actions cell more text
          actionsCellMore: "mais",
          // Column pinning text
          pinToLeft: "Fixar à esquerda",
          pinToRight: "Fixar à direita",
          unpin: "Desafixar",
          // Tree Data
          treeDataGroupingHeaderName: "Agrupar",
          treeDataExpand: "ver filhos",
          treeDataCollapse: "esconder filhos",
          // Grouping columns
          groupingColumnHeaderName: "Agrupar",
          groupColumn: (e) => `Agrupar por ${e}`,
          unGroupColumn: (e) => `Parar de agrupar por ${e}`,
          // Master/detail
          detailPanelToggle: "Alternar painel de detalhes",
          expandDetailPanel: "Expandir",
          collapseDetailPanel: "Recolher",
          // Used core components translation keys
          MuiTablePagination: {},
          // Row reordering text
          rowReorderingHeaderName: "Reorganização de linhas",
          // Aggregation
          aggregationMenuItemHeader: "Agregação",
          aggregationFunctionLabelSum: "soma",
          aggregationFunctionLabelAvg: "média",
          aggregationFunctionLabelMin: "mínimo",
          aggregationFunctionLabelMax: "máximo",
          aggregationFunctionLabelSize: "tamanho",
          //footer
          Jumptopage: "Ir para a página",
          Go: "Ir",
          InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Neste espaço em breve traremos para você um dashboard com os principais KPIs de visão geral para fácil acesso",
          Pages: "Páginas",
          MuiTablePagination: {
            labelRowsPerPage: "Linhas por página"
          }
        }
      }
    }
  }
}, ai = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, oi = {
  ...We.enUS,
  ...ai
}, ii = {
  en: oi,
  "tr-TR": ri,
  "es-ES": Jo,
  "da-DK": jo,
  "de-DE": Wo,
  "el-GR": qo,
  "fr-FR": Qo,
  "pt-PT": ni,
  "it-IT": ei
};
te.extend(Za);
te.extend(Qa);
const cn = jt(), un = jt(null), $s = ({ children: e, apiEndpoints: t = {} }) => {
  const [r, a] = Xn(zo, Go), o = Wr(t);
  function s(u, l) {
    o.current[u] = l;
  }
  function i(u) {
    return o.current[u];
  }
  function c(u, l) {
    return `${o.current[u || "default"] || ""}${l}`;
  }
  function p(u, l, b) {
    if (b != null) {
      const f = b;
      let d = u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return f && (d = f.split(" "), d[0] = d[0].toUpperCase(), u ? d = d[0] : l ? d = d[0].toUpperCase() : (d[1] += d[1].includes(":ss") ? "" : ":ss", d = d.join(" "))), d;
    }
    return u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }
  function h({ value: u, useSystemFormat: l, showOnlyDate: b = !1, state: f, timeZone: d }) {
    if (!u) return "-";
    const E = p(l, b, f);
    return d ? te(u).tz(d).format(E) : te(u).format(E);
  }
  function y() {
    const u = r.dataLocalization, l = ii[u];
    function b(f) {
      return u === "pt-PT" || u === "ptPT" ? l.components.MuiDataGrid.defaultProps.localeText[f] || f : l[f] || f;
    }
    return { getLocalizedString: b };
  }
  return /* @__PURE__ */ n(cn.Provider, { value: { stateData: r, dispatchData: a, systemDateTimeFormat: p, formatDate: h, useLocalization: y, getApiEndpoint: i, setApiEndpoint: s, buildUrl: c }, children: e });
}, _s = un.Provider, Dr = () => hr(un), Be = () => {
  const e = hr(cn);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, li = () => {
  const [e, t] = O(), [r, a] = O(!1), { stateData: o, dispatchData: s } = Be(), i = o.modal, c = 16 / 9;
  let p = (window.outerWidth - 10) / window.innerWidth * 100;
  const h = () => {
    let u = document.getElementById("tutorial-iframe");
    u ? (u = u.offsetWidth, u = u / window.innerWidth) : u = 0.9;
    const l = window.innerWidth * u * (1 / c), b = window.innerHeight - 180;
    t(Math.min(l, b));
  };
  ce(() => {
    i?.status && (a(!0), h());
  }, [i, p]), ce(() => (window.addEventListener("resize", h), () => {
    window.removeEventListener("resize", h);
  }), []);
  function y() {
    const u = document.getElementById("tutorial-iframe");
    u.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ D(Ta, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    s({
      type: Z.OPEN_MODAL,
      payload: { status: !1, data: {} }
    });
  }, children: [
    /* @__PURE__ */ n(xa, { className: "pt-2 pb-0", children: /* @__PURE__ */ D(pe, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ D(pe, { size: 11, children: [
        /* @__PURE__ */ D(xe, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(xe, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(fe, { children: " " }) })
      ] }),
      /* @__PURE__ */ D(pe, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(Ha, { className: "cursor_pointer mt-2 mr-2", onClick: y }),
        /* @__PURE__ */ n(Wa, { className: "cursor_pointer mt-2", onClick: () => {
          s({
            type: Z.OPEN_MODAL,
            payload: { status: !1, data: {} }
          });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ D(va, { dividers: !0, children: [
      r && /* @__PURE__ */ n("div", { children: "Loading..." }),
      i?.data?.url && /* @__PURE__ */ n(
        "iframe",
        {
          id: "tutorial-iframe",
          style: { width: "100%", height: `${e}px` },
          title: i?.data?.title || "",
          src: i?.data?.url,
          allowfullscreen: !0,
          frameborder: "0",
          loading: "lazy",
          onLoad: () => a(!1)
        }
      )
    ] })
  ] }) });
};
function si({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: a = null,
  mobileRightComponent: o,
  title: s = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: c,
  breadcrumbs: p = [],
  enableBackButton: h = !1,
  breadcrumbColor: y,
  showHelpButton: u = !1
}) {
  const l = Vo(!0), b = p.length - 1, f = c && p.length, d = () => {
    t(-1);
  };
  return ce(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ D(fe, { children: [
    /* @__PURE__ */ n(_r, { className: "print-only", text: e }),
    f && /* @__PURE__ */ D(fe, { children: [
      /* @__PURE__ */ n(wa, { sx: { mb: 3 }, children: /* @__PURE__ */ D(Sa, { sx: { backgroundColor: y || "#fff" }, children: [
        /* @__PURE__ */ D(pe, { container: !0, children: [
          /* @__PURE__ */ n(pe, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(Aa, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: p.map((E, T) => T < b ? /* @__PURE__ */ n(Oa, { onClick: d, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: E.text }, T) : /* @__PURE__ */ n(xe, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: E.text }, T)) }) }),
          (p.length > 1 || h) && /* @__PURE__ */ n(pe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Qe, { variant: "contained", onClick: d, children: "Back" }) }),
          u && /* @__PURE__ */ n(pe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Xr, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ n(ja, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Te, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: l ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          _r,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !l && /* @__PURE__ */ D(fe, { children: [
          /* @__PURE__ */ D(Te, { children: [
            " ",
            a && /* @__PURE__ */ n(a, {}),
            " "
          ] }),
          /* @__PURE__ */ D(Te, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n(li, {})
    ] })
  ] });
}
const dn = Da()(si), et = {
  fixedFilterFormat: {
    date: "YYYY-MM-DD",
    datetime: "YYYY-MM-DD hh:mm:ss a",
    dateTimeLocal: "YYYY-MM-DD hh:mm:ss a",
    OverrideDateFormat: "DD-MMM-YYYY"
  },
  errorMapping: {
    413: "Upload failed: The file exceeds the 30 MB size limit. Please select a smaller file."
  },
  permissionsMapper: {
    add: "Permission2",
    edit: "Permission3",
    delete: "Permission4"
  },
  emptyIdValues: [null, void 0, "", "0", 0]
}, pn = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: a = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const o = a.find((s) => s.Module === t.module);
  return o ? {
    canAdd: r.add && !!o[et.permissionsMapper.add],
    canEdit: r.edit && !!o[et.permissionsMapper.edit],
    canDelete: r.delete && !!o[[et.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
};
te.extend(Xa);
const ci = {
  date: en,
  datetime: mr,
  dateTimeLocal: mr
}, ui = "-10px", di = "-16px", pi = (e) => {
  const { fixedFilterFormat: t } = et, { item: r, applyValue: a, convert: o } = e, { systemDateTimeFormat: s, stateData: i } = Be(), c = e?.type || "date", p = t[c], h = (d) => {
    const E = te(d);
    return E.isValid() && E.year() > 1900;
  }, y = s(i.dateTime), u = (d) => {
    if (!(c !== "date" && c !== "datetime" && c !== "dateTimeLocal" || ((T) => typeof T != "string" ? !1 : !te(T, y, !0).isValid())(d))) {
      if (o) {
        d = te(d).utc(), a({ ...r, value: d });
        return;
      }
      if (!h(d)) {
        a({ ...r, value: null });
        return;
      }
      a({ ...r, value: d.format(p) });
    }
  }, l = (d) => {
    if (d && d === t.OverrideDateFormat) {
      const E = d.split("-");
      return E.length === 3 ? E[1] : null;
    }
  }, b = ci[c], f = c === "dateTimeLocal" ? r?.value ? te(r?.value.$d) : null : r?.value ? te(r.value) : null;
  return /* @__PURE__ */ n(eo, { dateAdapter: to, children: /* @__PURE__ */ n(
    b,
    {
      fullWidth: !0,
      format: y,
      value: f,
      onChange: u,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: ui,
            marginBottom: di
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => l(y) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Nt = (e) => qr().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ n(pi, { ...r, ...e }) : void 0
})), Re = {
  Edit: "Edit",
  Delete: "Delete"
}, Ee = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, fi = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Me, { icon: /* @__PURE__ */ n(De, { title: Re.Edit, children: /* @__PURE__ */ n(pr, {}) }), tabIndex: 1, "data-action": Re.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Me, { icon: /* @__PURE__ */ n(De, { title: Re.Delete, children: /* @__PURE__ */ n(Zr, {}) }), tabIndex: 2, "data-action": Re.Delete, label: "Delete", color: "error" }, 2)] }
], mi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, hi = { pageSize: 50, page: 0 }, gi = [5, 10, 20, 50, 100], yi = ({ gridRef: e, onPreferenceChange: t, t: r, tOpts: a }) => {
  const { getApiEndpoint: o } = Be(), s = o("GridPreferenceManager"), i = e.current?.prefKey, c = Yr(), p = qt(), [h, y] = O(Ee.NONE), [u, l] = O(null), [b, f] = O(!1), [d, E] = O({}), [T, P] = O(null), [S, x] = O(null), L = me(
    () => T == null ? [] : T.filter((F) => F.prefId !== 0),
    [T]
  ), z = me(() => ne.object({
    prefName: ne.string().trim(!0).required(r("Preference Name is Required")).max(20, r("Maximum Length is ", a) + "20"),
    prefDesc: ne.string().max(100, r("Maximum Length is ", a) + "100")
  }), [r, a]), ie = (F) => l(F?.currentTarget), le = () => l(null), Y = () => {
    y(Ee.NONE), le();
  }, N = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), x(null), t && t(null), le());
  }, J = se(async ({ applyDefault: F = !1 }) => {
    const I = await _t({
      url: s,
      params: { action: "list", id: i },
      dataParser: $t.json
    });
    if (!I?.preferences) {
      p.showMessage(r("Failed to load preferences.", a)), t && t(null);
      return;
    }
    const de = I.preferences.filter((ae) => ae.prefName.trim() !== "");
    if (P(de), F) {
      const ae = de.find((he) => he.isDefault);
      if (ae)
        return { defaultPrefId: ae.prefId };
      t && t(null);
    }
  }, [s, i, p, r, a, t]), K = se(async (F) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), F === 0) {
      N();
      return;
    }
    const I = T.find((ae) => ae.prefId === F);
    if (!I?.prefValue) {
      p.showMessage(r("Failed to load preference.", a));
      return;
    }
    let de;
    try {
      de = typeof I.prefValue == "string" ? JSON.parse(I.prefValue) : I.prefValue;
    } catch {
      p.showMessage(r("Failed to parse preference data.", a));
      return;
    }
    e.current.restoreState(de), x(I.prefName), t && t(I.prefName), le();
  }, [e, N, T, t, p, r, a]), k = async (F) => {
    const I = F.prefName.trim(), de = I.toLocaleLowerCase();
    if (T.find((he) => he.prefName.toLocaleLowerCase() === de && he.prefId !== F.prefId)) {
      f(!0);
      return;
    }
    const ae = await _t({
      url: s,
      params: {
        action: "save",
        id: i,
        prefId: F.prefId,
        prefName: I,
        prefDesc: F.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: F.isDefault
      },
      dataParser: $t.json
    });
    if (ae === !0 || ae?.success === !0) {
      p.showMessage(r(`Preference ${h === Ee.ADD ? "added" : "saved"} successfully.`, a)), Y(), await J({ applyDefault: !1 });
      return;
    }
    p.showMessage(r("Error saving preference: ", a) + (ae?.message || r("Unknown error", a)));
  }, re = async () => {
    const F = await _t({
      url: s,
      params: {
        action: "delete",
        id: i,
        prefIdArray: d.prefId
      },
      dataParser: $t.json
    });
    if (F === !0 || F?.success === !0) {
      p.showMessage(r("Preference deleted successfully.", a)), await J({ applyDefault: !1 }), E({});
      return;
    }
    p.showMessage(r("Error deleting preference: ", a) + (F?.message || r("Unknown error", a)));
  }, W = (F) => {
    const I = F.field === "editAction" ? Re.Edit : F.field === "deleteAction" ? Re.Delete : null;
    if (F.id === 0 && I) {
      p.showMessage(r(`Default preference cannot be ${I === Re.Edit ? "edited" : "deleted"}`, a));
      return;
    }
    I === Re.Edit && (y(Ee.EDIT), $.setValues(F?.row)), I === Re.Delete && E({
      prefId: F.id,
      preferenceName: F.row.prefName
    });
  }, _ = (F) => {
    y(F), le(), F === Ee.ADD && $.resetForm();
  }, $ = tn({
    initialValues: mi,
    validationSchema: z,
    onSubmit: k,
    mode: "onBlur"
  });
  ce(() => {
    if (!i) return;
    (async () => {
      const I = await J({ applyDefault: !0 });
      I?.defaultPrefId && await K(I.defaultPrefId);
    })();
  }, [i]);
  const j = h === Ee.MANAGE, ue = h === Ee.ADD || h === Ee.EDIT;
  return /* @__PURE__ */ D(Te, { children: [
    /* @__PURE__ */ D(
      Qe,
      {
        id: "grid-preferences-btn",
        "aria-controls": u ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": u ? "true" : void 0,
        onClick: ie,
        title: r("Preference", a),
        startIcon: /* @__PURE__ */ n(Br, {}),
        children: [
          r("Preferences", a),
          " ",
          S && `(${S})`
        ]
      }
    ),
    /* @__PURE__ */ D(
      Pa,
      {
        id: "grid-preference-menu",
        anchorEl: u,
        open: !!u,
        onClose: le,
        component: Fa,
        dense: !0,
        MenuListProps: {
          "aria-labelledby": "grid-preferences-btn"
        },
        sx: {
          "& .MuiMenu-paper": { minWidth: 240, maxHeight: 320 },
          "& .MuiListItemSecondaryAction-root": {
            display: "flex"
          },
          "& .Mui-selected": {
            color: "text.primary",
            "&:hover": {
              backgroundColor: "success.main"
            }
          }
        },
        children: [
          /* @__PURE__ */ n(xt, { component: cr, dense: !0, onClick: () => _(Ee.ADD), children: r("Add Preference", a) }),
          /* @__PURE__ */ D(xt, { component: cr, dense: !0, onClick: () => _(Ee.MANAGE), children: [
            /* @__PURE__ */ n(Ia, { children: /* @__PURE__ */ n(Br, {}) }),
            r("Manage Preferences", a)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ n(xt, { component: cr, dense: !0, divider: T?.length > 0, onClick: () => K(0), children: r("Reset to Default", a) }),
          T?.length > 0 && T?.map((F) => {
            const { prefName: I, prefDesc: de, prefId: ae } = F;
            return /* @__PURE__ */ n(
              xt,
              {
                onClick: () => K(ae),
                component: Ma,
                selected: S === I,
                title: r(de, a),
                dense: !0,
                children: /* @__PURE__ */ n(Ra, { primary: I })
              },
              `pref-item-${ae}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ne,
      {
        open: h !== Ee.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ D(xe, { variant: "h5", children: [
          h,
          " ",
          r(j ? "Preferences" : "Preference", a)
        ] }),
        maxWidth: j ? "md" : "sm",
        fullWidth: !0,
        children: [
          ue && /* @__PURE__ */ D(
            pe,
            {
              component: "form",
              onSubmit: $.handleSubmit,
              rowGap: 2,
              container: !0,
              sx: {
                "& .MuiFormLabel-root:not(.MuiTypography-root)": {
                  fontWeight: 400,
                  display: "table",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word"
                  /* Internet Explorer 5.5+ */
                }
              },
              children: [
                /* @__PURE__ */ n(pe, { size: 12, children: /* @__PURE__ */ n(
                  Vt,
                  {
                    value: $.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ D("span", { children: [
                      r("Preference Name", a),
                      " ",
                      /* @__PURE__ */ n("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: $.handleChange,
                    error: !!$.errors.prefName,
                    helperText: $.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(pe, { size: 12, children: /* @__PURE__ */ n(
                  Vt,
                  {
                    value: $.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: r("Preference Description", a),
                    name: "prefDesc",
                    onChange: $.handleChange,
                    error: !!$.errors.prefDesc,
                    helperText: $.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(pe, { size: 12, children: /* @__PURE__ */ n(
                  Xe,
                  {
                    control: /* @__PURE__ */ n(
                      La,
                      {
                        checked: $.values.isDefault,
                        name: "isDefault",
                        onChange: $.handleChange
                      }
                    ),
                    label: r("Default", a)
                  }
                ) }),
                /* @__PURE__ */ n(pe, { size: 12, children: /* @__PURE__ */ D(Lr, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    Qe,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(ro, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: r("Save", a)
                    }
                  ),
                  /* @__PURE__ */ n(
                    Qe,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(fr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: Y,
                      disableElevation: !0,
                      children: r("Close", a)
                    }
                  )
                ] }) })
              ]
            }
          ),
          j && /* @__PURE__ */ D(pe, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(pe, { size: 12, children: /* @__PURE__ */ n(
              Jr,
              {
                sx: {
                  "& .MuiTablePagination-selectLabel": {
                    marginTop: 2
                  },
                  "& .MuiTablePagination-displayedRows": {
                    marginTop: 2
                  },
                  "& .MuiDataGrid-columnHeader .MuiInputLabel-shrink": {
                    display: "none"
                  }
                },
                className: "pagination-fix",
                onCellClick: W,
                columns: fi,
                pageSizeOptions: gi,
                pagination: !0,
                rowCount: L.length,
                rows: L,
                getRowId: (F) => F.GridPreferenceId,
                slots: {
                  headerFilterMenu: !1
                },
                density: "compact",
                disableDensitySelector: !0,
                apiRef: c,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                initialState: {
                  pagination: {
                    paginationModel: hi
                  }
                }
              }
            ) }),
            /* @__PURE__ */ n(pe, { size: 12, children: /* @__PURE__ */ n(Lr, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              Qe,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(fr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: Y,
                disableElevation: !0,
                children: r("Close", a)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ne,
      {
        open: b,
        onConfirm: () => f(!1),
        title: "",
        okText: r("Ok", a),
        cancelText: "",
        children: [
          '"',
          $.values.prefName.trim(),
          '": ',
          r("name already in use, please use another name.", a)
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ne,
      {
        open: !!d.preferenceName,
        onConfirm: re,
        onCancel: () => E({}),
        title: r("Confirm delete", a),
        yesNo: !0,
        children: [
          r("Are you sure you wish to delete", a),
          ' "',
          d.preferenceName,
          '"?'
        ]
      }
    )
  ] });
}, bi = {
  IsAnyOf: "isAnyOf"
}, Ci = (e) => {
  const { column: t, item: r, applyValue: a, apiRef: o } = e, s = t?.dataRef?.current?.lookups;
  let i = t.customLookup || s[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: u, value: l }) => ({
    label: u,
    value: l
  })));
  const c = ca(o, ua), p = me(
    () => c.items?.filter((u) => u.field === t.field),
    [t.field, c.items]
  ), h = se(
    (u) => {
      let l = u.target.value;
      if (c.items.length >= 1) {
        l = l.length === 1 ? l[0] : l;
        for (const d of c.items)
          d.field === r.field && (d.operator === bi.IsAnyOf ? l = Array.isArray(l) ? l : [l] : l = l === 0 ? "0" : l);
      }
      if (l.length === 0 && p[0]) {
        o.current.deleteFilterItem(p[0]);
        return;
      }
      const b = l, f = p[0] ? p[0] : r;
      a({ ...f, value: b });
    },
    [o, t.applyZeroFilter, p, r, a]
  ), y = p[0]?.value ?? "";
  return /* @__PURE__ */ n(yr, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    Na,
    {
      label: t.field,
      variant: "standard",
      value: y,
      onChange: (u) => h(u),
      multiple: Array.isArray(y),
      MenuProps: {
        PaperProps: {
          style: {
            height: "fit-content",
            overflow: "hidden"
          }
        }
      },
      children: i?.map((u, l) => /* @__PURE__ */ n(xt, { value: u.value, children: u.label }, l))
    }
  ) });
}, Ei = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((a) => {
  r.lastIndex = 0;
  const o = r.exec(a);
  if (!o) return null;
  const [, s, i = "ASC"] = o;
  return {
    field: s.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), lt = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: a, type: o, isPivotExport: s = !1, icon: i }) => /* @__PURE__ */ D(
  nn,
  {
    onClick: r,
    "data-type": o,
    "data-content-type": a,
    "data-is-pivot-export": s,
    children: [
      /* @__PURE__ */ n(He, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: i }),
      e(o, t)
    ]
  }
), Di = ({ exportFormats: e, ...t }) => /* @__PURE__ */ D(da, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(lt, { ...t, icon: /* @__PURE__ */ n(Ka, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(lt, { ...t, icon: /* @__PURE__ */ n(Nr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(lt, { ...t, icon: /* @__PURE__ */ n(Nr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(lt, { ...t, icon: /* @__PURE__ */ n(qa, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(lt, { ...t, icon: /* @__PURE__ */ n(Ya, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(lt, { ...t, icon: /* @__PURE__ */ n(Ja, { fontSize: "small" }), type: "JSON", contentType: "application/json" })
] }), Ti = (e = {}, t = {}) => {
  let r = !0;
  for (const a in e)
    e[a] !== t[a] && (r = !1);
  for (const a in t)
    a in e || (r = !1);
  return r;
}, xi = 50, vi = /(\w+)( ASC| DESC)?/i, wi = 6e4, ye = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, Si = {
  article: /* @__PURE__ */ n(ba, {})
}, U = {
  gridFilterModel: { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" },
  permissions: { edit: !0, add: !0, export: !0, delete: !0, showColumnsOrder: !0, filter: !0 },
  client: "client",
  server: "server",
  object: "object",
  startDate: "startDate",
  endDate: "endDate",
  oneToMany: "oneToMany",
  lookup: "lookup",
  Number: "number",
  string: "string",
  boolean: "boolean",
  right: "right",
  left: "left",
  dateTime: "dateTime",
  actions: "actions",
  function: "function",
  pageSizeOptions: [5, 10, 20, 50, 100]
}, Ai = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], Oi = (e) => e.value ? /* @__PURE__ */ n(Ua, { style: { color: "green" } }) : /* @__PURE__ */ n(fr, { style: { color: "gray" } }), Vr = Wt("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), Bt = Wt(Ce)({
  margin: "6px"
}), Pi = Wt(pa)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), Fi = ({ params: e, selectedSet: t, handleSelectRow: r, idProperty: a }) => {
  const o = e.row[a], s = t.has(o);
  return /* @__PURE__ */ n(
    rn,
    {
      onClick: (c) => {
        c.stopPropagation(), r({ row: e.row });
      },
      checked: s,
      color: "primary",
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, Ii = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: a,
    isReadOnly: o,
    canAdd: s,
    forAssignment: i,
    showAddIcon: c,
    onAdd: p,
    selectionApi: h,
    selectedSet: y,
    selectAll: u,
    available: l,
    onAssign: b,
    assigned: f,
    onUnassign: d,
    effectivePermissions: E,
    clearFilters: T,
    handleExport: P,
    preferenceKey: S,
    apiRef: x,
    tTranslate: L,
    tOpts: z,
    filterModel: ie,
    onPreferenceChange: le,
    toolbarItems: Y
  } = e, N = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), J = ie?.items?.length || 0;
  return /* @__PURE__ */ D(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px"
      },
      children: [
        /* @__PURE__ */ D("div", { children: [
          t.gridSubTitle && /* @__PURE__ */ D(vt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            L(t.gridSubTitle, z)
          ] }),
          a && t.showPreferenceInHeader && /* @__PURE__ */ D(vt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
            L("Applied Preference", z),
            ": ",
            a
          ] }),
          (o || !s && !i) && /* @__PURE__ */ D(vt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            !s || o ? "" : t.title
          ] }),
          !i && s && !o && /* @__PURE__ */ n(Bt, { startIcon: c ? /* @__PURE__ */ n(Rr, {}) : null, onClick: p, size: "medium", variant: "contained", children: L(N, z) }),
          h.length && r.records.length ? /* @__PURE__ */ n(
            Bt,
            {
              onClick: u,
              size: "medium",
              variant: "contained",
              children: y.size === r.records.length ? L("Deselect All", z) : L("Select All", z)
            }
          ) : /* @__PURE__ */ n(fe, {}),
          l && /* @__PURE__ */ n(Bt, { startIcon: c ? /* @__PURE__ */ n(Rr, {}) : null, onClick: b, size: "medium", variant: "contained", children: L("Assign", z) }),
          f && /* @__PURE__ */ n(Bt, { startIcon: c ? /* @__PURE__ */ n(Ea, {}) : null, onClick: d, size: "medium", variant: "contained", children: L("Remove", z) })
        ] }),
        /* @__PURE__ */ D(Pi, { ...e, children: [
          E.showColumnsOrder && /* @__PURE__ */ n(
            ga,
            {
              render: (K) => /* @__PURE__ */ n(
                Ce,
                {
                  ...K,
                  startIcon: /* @__PURE__ */ n(oo, {}),
                  size: "small",
                  variant: "text",
                  children: L("COLUMNS", z)
                }
              )
            }
          ),
          E.filter && /* @__PURE__ */ D(fe, { children: [
            /* @__PURE__ */ n(
              ya,
              {
                render: (K) => /* @__PURE__ */ n(
                  Ce,
                  {
                    ...K,
                    startIcon: /* @__PURE__ */ n(Ba, { badgeContent: J, color: "primary", children: /* @__PURE__ */ n(io, {}) }),
                    size: "small",
                    variant: "text",
                    children: L("FILTERS", z)
                  }
                )
              }
            ),
            /* @__PURE__ */ n(Ce, { startIcon: /* @__PURE__ */ n(Ca, {}), onClick: T, size: "small", children: L("CLEAR FILTER", z) })
          ] }),
          E.export && /* @__PURE__ */ n(Di, { handleExport: P, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: L, tOpts: z }),
          Y,
          S && /* @__PURE__ */ n(
            yi,
            {
              gridRef: x,
              onPreferenceChange: le,
              t: L,
              tOpts: z
            }
          )
        ] })
      ]
    }
  );
}, zr = Kr(({
  model: e,
  columns: t,
  api: r,
  defaultSort: a,
  setActiveRecord: o,
  parentFilters: s,
  parent: i,
  where: c,
  title: p,
  showPageTitle: h,
  permissions: y,
  selected: u,
  assigned: l,
  available: b,
  disableCellRedirect: f = !1,
  onAssignChange: d,
  customStyle: E,
  onCellClick: T,
  showRowsSelected: P,
  showFullScreenLoader: S,
  customFilters: x,
  onRowDoubleClick: L,
  onRowClick: z = () => {
  },
  gridStyle: ie,
  reRenderKey: le,
  additionalFilters: Y,
  onCellDoubleClickOverride: N,
  onAddOverride: J,
  dynamicColumns: K,
  toolbarItems: k,
  readOnly: re = !1,
  onListParamsChange: W,
  apiRef: _,
  baseFilters: $,
  ...j
}) => {
  const [ue, F] = O({ pageSize: xi, page: 0 }), [I, de] = O({ recordCount: 0, records: [], lookups: {} }), [ae, he] = O(!0), Oe = !!d, wt = P, [ke, $e] = O([]), [pt, Ke] = O(!1), [_e, Yt] = O(null), Jt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [St, Ve] = O(!1), oe = qt(), ft = e.paginationMode === U.client ? U.client : U.server, { t: At, i18n: ze } = Qr(), m = { t: At, i18n: ze }, [rt, Ot] = O(""), [mt, Zt] = O(Ei(a || e.defaultSort, U, vi)), ht = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (ht.items = [], e.defaultFilters.forEach((C) => {
    ht.items.push(C);
  }));
  const [Pe, nt] = O({ ...ht }), { navigate: ge, getParams: Qt, useParams: Xt, pathname: Pt } = Dr(), { id: Ft } = Xt() || Qt, gt = Ft?.split("-")[0], R = _ || Yr(), { idProperty: q = "id", showHeaderFilters: ee = !0, disableRowSelectionOnClick: Ge = !0, hideTopFilters: Ue = !0, updatePageTitle: at = !0, isElasticScreen: qe = !1, navigateBack: It = !1, selectionApi: Ye = {} } = e, ve = e.readOnly === !0 || re, yn = e.allowDoubleClick === !1, er = Wr(I), bn = e.showAddIcon === !0, Tr = e.columns.filter(({ link: C }) => !!C).map((C) => C.link), { stateData: yt, dispatchData: Je, formatDate: tr, getApiEndpoint: rr, buildUrl: nr } = Be(), { timeZone: ar } = yt, bt = { ...U.permissions, ...e.permissions, ...y }, Cn = ["isEmpty", "isNotEmpty", "isAnyOf"], En = yt.getUserData || {}, or = e.columns.find((C) => C.type === "fileUpload")?.field || "", Dn = { add: bt.add, edit: bt.edit, delete: bt.delete }, { canAdd: Tn, canEdit: xr, canDelete: xn } = pn({ userData: En, model: e, userDefinedPermissions: Dn }), g = e.tTranslate ?? ((C) => C), { addUrlParamKey: Mt, searchParamKey: Ct, hideBreadcrumb: vn = !1, tableName: vr, showHistory: wn = !0, hideBreadcrumbInGrid: Sn = !1, breadcrumbColor: An, disablePivoting: On = !1, columnHeaderHeight: Pn = 70 } = e, wr = e.gridTitle || e.title, Rt = rr("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, je = new URLSearchParams(window.location.search), [Fn, In] = O(null), [Sr, Mn] = O(!Rt), Ze = r || e.api;
  ce(() => {
    R.current && (R.current.prefKey = Rt);
  }, [R, Rt]);
  const Rn = (C) => {
    In(C), Mn(!0);
  }, ir = je.has("baseData") && je.get("baseData"), Ln = me(() => {
    if (ir)
      try {
        const C = JSON.parse(ir);
        if (typeof C === U.object && C !== null)
          return C;
      } catch (C) {
        console.error("Failed to parse baseData from URL:", C);
      }
    return {};
  }, [ir]), [we, ot] = O(/* @__PURE__ */ new Set()), Nn = se(({ row: C }) => {
    const v = C[q];
    ot((A) => {
      const w = new Set(A);
      return w.has(v) ? w.delete(v) : w.add(v), $e(Array.from(w)), w;
    });
  }, [q, ot, $e]), lr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (C) => tr({ value: C, useSystemFormat: !0, showOnlyDate: !1, state: yt.dateTime, timeZone: ar }),
      filterOperators: Nt({ columnType: "date", label: g("Value", m) })
    },
    dateTime: {
      valueFormatter: (C) => tr({ value: C, useSystemFormat: !1, showOnlyDate: !1, state: yt.dateTime, timeZone: ar }),
      filterOperators: Nt({ columnType: "datetime", label: g("Value", m) })
    },
    dateTimeLocal: {
      valueFormatter: (C) => tr({ value: C, useSystemFormat: !1, showOnlyDate: !1, state: yt.dateTime, timeZone: ar }),
      filterOperators: Nt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: Oi
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (C) => /* @__PURE__ */ n(Fi, { params: C, selectedSet: we, handleSelectRow: Nn, idProperty: q })
    }
  };
  ce(() => {
    er.current = I;
  }, [I]), ce(() => {
    if (!x || !Object.keys(x).length) return;
    if (x.clear) {
      nt({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const C = Object.entries(x).reduce((v, [A, w]) => (A === U.startDate || A === U.endDate ? v.push(w) : A in x && v.push({ field: A, value: w, operator: "equals", type: "string" }), v), []);
    nt({ items: C, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [x]);
  const Bn = se(({ field: C, lookupMap: v }) => (er.current.lookups || {})[(v || {})[C]?.lookup] || [], []);
  ce(() => {
    j.isChildGrid || !Ue || Je({
      type: Z.PASS_FILTERS_TO_HEADER,
      payload: {
        filterButton: null,
        hidden: { search: !0, operation: !0, export: !0, print: !0, filter: !0 }
      }
    });
  }, []);
  const { customActions: Lt = [] } = e, { gridColumns: Fe, pinnedColumns: kn, lookupMap: sr } = me(() => {
    let C = t || e.gridColumns || e.columns;
    K && (C = [...K, ...C]);
    const v = { left: [fa.field], right: [] }, A = [], w = {};
    for (const B of C) {
      if (B.gridLabel === null || i && B.lookup === i || B.type === U.oneToMany && B.countInList === !1) continue;
      const G = {};
      if (B.type === U.oneToMany && (G.type = "number", G.field = B.field.replace(/s$/, "Count")), lr[B.type] && Object.assign(G, lr[B.type]), G.valueOptions === U.lookup || B.type === U.boolean) {
        let V = [];
        G.valueOptions === U.lookup && (G.valueOptions = (Ie) => Bn({ ...Ie, lookupMap: w }), V = [...qr(), ...ma()].filter((Ie) => ["is", "not", "isAnyOf"].includes(Ie.value))), B.type === U.boolean && (V = ha()), G.filterOperators = V.map((X) => ({
          ...X,
          InputComponent: X.InputComponent ? (Ie) => /* @__PURE__ */ n(
            Ci,
            {
              column: {
                ...B,
                ...B.type === U.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: er
              },
              ...Ie,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (B.linkTo || B.link) && (G.cellClassName = "mui-grid-linkColumn");
      const Q = g(B.gridLabel || B.label, m);
      A.push({ ...B, ...G, headerName: Q, description: Q }), B.pinned && v[B.pinned === U.right ? U.right : U.left].push(B.field), w[B.field] = B;
    }
    let M = e.standard;
    M === !0 && (M = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), M && typeof M === U.object && Ai.forEach(({ key: B, field: G, type: Q, header: V }) => {
      if (M[B] === !0) {
        const X = { field: G, type: Q, headerName: g(V, m), width: 200 };
        Q === U.dateTime && (X.filterOperators = Nt({ columnType: "date" }), X.valueFormatter = lr.dateTime.valueFormatter, X.keepLocal = !0), A.push(X);
      }
    });
    const H = [];
    return !Oe && !ve && (xr && H.push(/* @__PURE__ */ n(Me, { icon: /* @__PURE__ */ n(De, { title: "Edit", children: /* @__PURE__ */ n(pr, {}) }), "data-action": ye.Edit, label: "Edit", color: "primary" })), bt.copy && H.push(/* @__PURE__ */ n(Me, { icon: /* @__PURE__ */ D(De, { title: "Copy", children: [
      /* @__PURE__ */ n(Mr, {}),
      " "
    ] }), "data-action": ye.Copy, label: "Copy", color: "primary" })), xn && H.push(/* @__PURE__ */ n(Me, { icon: /* @__PURE__ */ D(De, { title: "Delete", children: [
      /* @__PURE__ */ n(Zr, {}),
      " "
    ] }), "data-action": ye.Delete, label: "Delete", color: "error" })), wn && H.push(/* @__PURE__ */ n(Me, { icon: /* @__PURE__ */ D(De, { title: "History", children: [
      /* @__PURE__ */ n(no, {}),
      " "
    ] }), "data-action": ye.History, label: "History", color: "primary" })), Lt.length && Lt.forEach(({ icon: B, action: G, color: Q }) => {
      H.push(
        /* @__PURE__ */ n(
          Me,
          {
            icon: /* @__PURE__ */ n(De, { title: G, children: Si[B] || /* @__PURE__ */ n(Mr, {}) }),
            "data-action": G,
            label: G,
            color: Q || "primary"
          }
        )
      );
    })), or.length && H.push(/* @__PURE__ */ n(Me, { icon: /* @__PURE__ */ D(De, { title: "Download document", children: [
      /* @__PURE__ */ n(ao, {}),
      " "
    ] }), "data-action": ye.Download, label: "Download document", color: "primary" })), H.length && A.push({
      field: "actions",
      type: "actions",
      label: "",
      width: H.length * 50,
      hidable: !1,
      getActions: (B) => {
        const G = [...H];
        if (xr && !ve) {
          const Q = B.row.canEdit === !1;
          G[0] = /* @__PURE__ */ n(
            Me,
            {
              icon: /* @__PURE__ */ n(De, { title: "Edit", children: /* @__PURE__ */ n(pr, {}) }),
              "data-action": ye.Edit,
              label: "Edit",
              color: "primary",
              disabled: Q
            }
          );
        }
        return G;
      }
    }), v.right.push("actions"), { gridColumns: A, pinnedColumns: v, lookupMap: w };
  }, [t, e, i, y, Oe, K, At]), Et = (C = "list", v = {}, A, w, M, H) => {
    const { pageSize: B, page: G } = ue, Q = nr(e.controllerType, M ? e.pivotApi : Ze);
    (l || b) && (v[l ? "include" : "exclude"] = Array.isArray(u) ? u.join(",") : u);
    const V = { ...Pe }, X = Array.isArray($) ? [...$] : [];
    if (e.joinColumn && gt && X.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(gt) }), Y && (V.items = [...V.items || [], ...Y]), v = { ...v, ...j.extraParams }, !(!V.items.length || V.items.every((Ir) => "value" in Ir && Ir.value !== void 0))) return;
    const Dt = {
      action: C,
      page: A ? 0 : G,
      pageSize: A ? 1e6 : B,
      sortModel: mt,
      filterModel: V,
      controllerType: e.controllerType,
      api: Q,
      gridColumns: Fe,
      model: e,
      parentFilters: s,
      extraParams: v,
      contentType: A,
      columns: w,
      template: M ? e.exportTemplate : null,
      configFileName: M ? e.configFileName : null,
      baseFilters: X,
      isElasticExport: H
    };
    return typeof W == "function" && W(Dt), R.current.listParams = Dt, sn({
      ...Dt,
      setError: oe.showError,
      setIsLoading: he,
      setData: de,
      dispatchData: Je,
      showFullScreenLoader: S,
      history: ge
    });
  }, it = se(({ id: C, record: v = {}, mode: A }) => {
    if (o) {
      zt({ id: C, api: Ze, setIsLoading: he, setActiveRecord: o, model: e, parentFilters: s, where: c });
      return;
    }
    let w = Pt;
    w.endsWith("/") || (w += "/"), A === "copy" ? (w += "0-" + C, Je({ type: "UPDATE_FORM_MODE", payload: "copy" })) : (w += C, Je({ type: "UPDATE_FORM_MODE", payload: "" })), Mt && (je.set(Mt, v[Mt]), w += `?${je.toString()}`), ge(w);
  }, [o, Ze, e, s, c, Pt, Mt, je, ge, Je, zt]), Ar = se(({ documentLink: C }) => {
    C && window.open(C, "_blank");
  }, []), $n = se(async (C, v, A) => {
    let w = C.field === e.linkColumn ? ye.Edit : null;
    if (!w && C.field === U.actions && (w = A?.action, !w)) {
      const Q = v.target.closest("button");
      Q && (w = Q.dataset.action);
    }
    const { row: M } = C;
    if (!ve) {
      if (T && typeof await T({ cellParams: C, event: v, details: A }) !== U.boolean)
        return;
      const Q = sr[C.field] || {};
      if (Q.linkTo) {
        ge({
          pathname: dr.replaceTags(Q.linkTo, M)
        });
        return;
      }
      switch (w) {
        case ye.Edit:
          return it({ id: M[q], record: M });
        case ye.Copy:
          return it({ id: M[q], mode: "copy" });
        case ye.Delete:
          Ke(!0), Yt({ name: M[e.linkColumn], id: M[q] });
          break;
        case ye.History:
          return ge(`${rr("history")}?tableName=${vr}&id=${M[q]}&breadCrumb=${Ct ? je.get(Ct) : wr}`);
        default:
          const V = Lt.find((X) => X.action === w && typeof X.onClick === U.function);
          if (V) {
            V.onClick({ row: M, navigate: ge });
            return;
          }
          break;
      }
    }
    if (w === ye.Download && Ar({ documentLink: M[or] }), !Tr.length)
      return;
    const { row: H } = C, B = sr[C.field] || {}, G = {
      pathname: dr.replaceTags(B.linkTo, H)
    };
    e.addRecordToState && (G.state = H), ge(G);
  }, [ve, T, sr, e, q, or, ge, Tr, Lt, vr, Ct, je, wr, rr, Ar, it]), _n = async function() {
    const C = nr(e.controllerType, Ze);
    await Cr({ id: _e.id, api: C, setIsLoading: he, setError: oe.showError, setErrorMessage: Ot }) === !0 ? (Ke(!1), oe.showMessage("Record Deleted Successfully."), Et()) : Ke(!1);
  }, Or = () => {
    Ot(null), Ke(!1);
  }, Vn = (C) => (typeof j.processRowUpdate == "function" && j.processRowUpdate(C, I), C), zn = (C) => {
    if (C.row.canEdit === !1)
      return;
    const { row: v } = C;
    if (typeof N === U.function) {
      N(C);
      return;
    }
    if (!ve && !yn && !f && it({ id: v[q], record: v }), ve && e.rowRedirectLink) {
      const A = {
        pathname: dr.replaceTags(e.rowRedirectLink, v)
      };
      e.addRecordToState && (A.state = v), ge(A);
    }
    typeof L === U.function && L(C);
  }, Gn = async () => {
    if (we.size < 1) {
      oe.showError("Please select at least one record to proceed");
      return;
    }
    const C = Array.from(we), v = new Map(I.records.map((M) => [M[q], M]));
    let A = C.map((M) => ({ ...Ln, ...v.get(M) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (A = A.map(
      (M) => Object.fromEntries(e.selectionUpdateKeys.map((H) => [H, M[H]]))
    ));
    const w = nr(e.controllerType, Ze);
    try {
      const M = await Er({
        id: 0,
        api: `${w}${Ye || r}/updateMany`,
        values: { items: A },
        setIsLoading: he,
        setError: oe.showError
      });
      if (M) {
        Et();
        const H = M.info ? M.info : "Record Added Successfully.";
        oe.showMessage(H);
      }
    } catch (M) {
      oe.showError(M.message || "An error occurred, please try again later.");
    } finally {
      ot(/* @__PURE__ */ new Set()), he(!1), Ve(!1);
    }
  }, Un = se(() => {
    if (Ye.length > 0) {
      if (we.size) {
        Ve(!0);
        return;
      }
      oe.showError(
        "Please select at least one record to proceed"
      ), he(!1);
      return;
    }
    typeof J === U.function ? J() : it({ id: 0 });
  }, [Ye, we.size, oe, J, it]), jn = se(() => {
    Pe?.items?.length && nt({ ...U.gridFilterModel });
  }, [Pe]), Pr = ({ unassign: C, assign: v }) => {
    const A = Array.isArray(u) ? u : u.length ? u.split(",") : [], w = C ? A.filter((M) => !C.includes(parseInt(M))) : [...A, ...v];
    d(typeof u === U.string ? w.join(",") : w);
  }, Hn = () => {
    Pr({ assign: ke });
  }, Wn = () => {
    Pr({ unassign: ke });
  }, Kn = se(() => {
    if (we.size === I.records.length)
      ot(/* @__PURE__ */ new Set()), $e([]);
    else {
      const C = I.records.map((v) => v[q]);
      ot(new Set(C)), $e(C);
    }
  }, [we.size, I.records, q, $e, ot]), qn = (C) => C[q], Yn = se((C) => {
    if (I?.recordCount > wi) {
      oe.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: v, columnVisibilityModel: A, lookup: w } = R.current.state.columns, M = C.target.dataset.isPivotExport === "true", H = Object.keys(A).filter((V) => A[V] === !1), B = new Set(Fe.filter((V) => V.exportable === !1).map((V) => V.field)), G = v.filter(
      (V) => !B.has(V) && !H.includes(V) && V !== "__check__" && V !== "actions"
    );
    if (G.length === 0) {
      oe.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const Q = {};
    G.forEach((V) => {
      const X = w[V];
      Q[V] = { field: V, width: X.width, headerName: X.headerName || X.field, type: X.type, keepLocal: X.keepLocal === !0, isParsable: X.isParsable, lookup: X.lookup };
    }), Et(
      M ? "export" : void 0,
      void 0,
      C.target.dataset.contentType,
      Q,
      M,
      qe
    );
  }, [I?.recordCount, R, Fe, oe, Et, qe]);
  ce(() => {
    !Ze || !Sr || Et();
  }, [ue, e, l, b, u, Pe, gt, Y, j.extraParams, mt, Ze, Fe, s, qe, Sr, $]), ce(() => {
    if (!(j.isChildGrid || Oe || !at))
      return Je({ type: Z.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: e.pageTitle || e.title, title: e.title } }), () => {
        Je({
          type: Z.PAGE_TITLE_DETAILS,
          payload: null
        });
      };
  }, []);
  const Jn = (C) => {
    const { items: v } = C, A = v.map((w) => {
      const { field: M, operator: H, type: B, value: G } = w, Q = Fe.find((Ie) => Ie.field === M) || {}, V = Q.type === U.number;
      return V && G < 0 ? { ...w, value: null } : Cn.includes(H) || V && !isNaN(G) || !V ? (qe && Fe.filter((Dt) => Dt.field === M)[0]?.isKeywordField && (w.filterField = `${w.field}.keyword`), w.value = ["isEmpty", "isNotEmpty"].includes(H) ? null : G, { ...w, type: Q.type }) : { field: M, operator: H, type: B, value: V ? null : G };
    });
    C.items = A, nt(C);
  }, Zn = (C) => {
    const v = C.map((A) => {
      const w = Fe.filter((B) => B.field === A.field)[0] || {}, M = qe && w.isKeywordField, H = { ...A, filterField: M ? `${A.field}.keyword` : A.field };
      return w.dataIndex && (H.filterField = w.dataIndex), H;
    });
    Zt(v);
  }, Fr = p || e.gridTitle || e.title, Qn = Ct ? [{ text: je.get(Ct) || Fr }] : [{ text: Fr }];
  return /* @__PURE__ */ D(fe, { children: [
    h !== !1 && /* @__PURE__ */ n(
      dn,
      {
        navigate: ge,
        showBreadcrumbs: !vn && !Sn,
        breadcrumbs: Qn,
        enableBackButton: It,
        breadcrumbColor: An
      }
    ),
    /* @__PURE__ */ D(Te, { style: ie || E, children: [
      /* @__PURE__ */ n(Te, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        Jr,
        {
          sx: {
            "& .MuiTablePagination-selectLabel": {
              marginTop: 2
            },
            "& .MuiTablePagination-displayedRows": {
              marginTop: 2
            },
            "& .MuiDataGrid-virtualScroller ": {
              zIndex: 2
            }
          },
          headerFilters: ee,
          unstable_headerFilters: ee,
          checkboxSelection: Oe,
          loading: ae,
          className: "pagination-fix",
          onCellClick: $n,
          onCellDoubleClick: zn,
          columns: Fe,
          paginationModel: ue,
          pageSizeOptions: U.pageSizeOptions,
          onPaginationModelChange: F,
          pagination: !0,
          rowCount: I.recordCount,
          rows: I.records,
          sortModel: mt,
          paginationMode: ft,
          sortingMode: ft,
          filterMode: ft,
          processRowUpdate: Vn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Zn,
          onFilterModelChange: Jn,
          rowSelection: ke,
          onRowSelectionModelChange: $e,
          filterModel: Pe,
          getRowId: qn,
          onRowClick: z,
          slots: {
            headerFilterMenu: !1,
            toolbar: Ii,
            footer: ko
          },
          slotProps: {
            toolbar: {
              model: e,
              data: I,
              currentPreference: Fn,
              isReadOnly: ve,
              canAdd: Tn,
              forAssignment: Oe,
              showAddIcon: bn,
              onAdd: Un,
              selectionApi: Ye,
              selectedSet: we,
              selectAll: Kn,
              available: b,
              onAssign: Hn,
              assigned: l,
              onUnassign: Wn,
              effectivePermissions: bt,
              clearFilters: jn,
              handleExport: Yn,
              preferenceKey: Rt,
              apiRef: R,
              gridColumns: Fe,
              tTranslate: g,
              tOpts: m,
              idProperty: q,
              filterModel: Pe,
              onPreferenceChange: Rn,
              toolbarItems: k
            },
            footer: {
              pagination: !0,
              apiRef: R
            },
            panel: {
              placement: "bottom-end"
            }
          },
          hideFooterSelectedRowCount: wt,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: R,
          disableAggregation: !0,
          disableRowGrouping: !0,
          disableRowSelectionOnClick: Ge,
          disablePivoting: On,
          initialState: {
            columns: {
              columnVisibilityModel: Jt
            },
            pinnedColumns: kn
          },
          localeText: {
            filterValueTrue: g("Yes", m),
            filterValueFalse: g("No", m),
            noRowsLabel: g("No data", m),
            footerTotalRows: `${g("Total rows", m)}:`,
            MuiTablePagination: {
              labelRowsPerPage: g("Rows per page", m),
              labelDisplayedRows: ({ from: C, to: v, count: A }) => `${C}–${v} ${g("of", m)} ${A}`
            },
            toolbarQuickFilterPlaceholder: g(e?.searchPlaceholder || "Search...", m),
            toolbarColumns: g("Columns", m),
            toolbarFilters: g("Filters", m),
            toolbarExport: g("Export", m),
            filterPanelAddFilter: g("Add filter", m),
            filterPanelRemoveAll: g("Remove all", m),
            filterPanelDeleteIconLabel: g("Delete", m),
            filterPanelColumns: g("Columns", m),
            filterPanelOperator: g("Operator", m),
            filterPanelValue: g("Value", m),
            filterPanelInputLabel: g("Value", m),
            filterPanelInputPlaceholder: g("Filter value", m),
            columnMenuLabel: g("Menu", m),
            columnMenuShowColumns: g("Show columns", m),
            columnMenuManageColumns: g("Manage columns", m),
            columnMenuFilter: g("Filter", m),
            columnMenuHideColumn: g("Hide column", m),
            columnMenuManagePivot: g("Manage pivot", m),
            toolbarColumnsLabel: g("Select columns", m),
            toolbarExportLabel: g("Export", m),
            pivotDragToColumns: g("Drag here to pivot by", m),
            pivotDragToRows: g("Drag here to group by", m),
            pivotDragToValues: g("Drag here to create values", m),
            pivotColumns: g("Pivot columns", m),
            pivotRows: g("Row groups", m),
            pivotValues: g("Values", m),
            pivotMenuRows: g("Rows", m),
            pivotMenuColumns: g("Columns", m),
            pivotMenuValues: g("Values", m),
            pivotToggleLabel: g("Pivot", m),
            pivotSearchControlPlaceholder: g("Search pivot columns", m),
            columnMenuUnsort: g("Unsort", m),
            columnMenuSortAsc: g("Sort by ascending", m),
            columnMenuSortDesc: g("Sort by descending", m),
            columnMenuUnpin: g("Unpin", m),
            columnsPanelTextFieldLabel: g("Find column", m),
            columnsPanelTextFieldPlaceholder: g("Column title", m),
            columnsPanelHideAllButton: g("Hide all", m),
            columnsPanelShowAllButton: g("Show all", m),
            pinToLeft: g("Pin to left", m),
            pinToRight: g("Pin to right", m),
            unpin: g("Unpin", m),
            filterValueAny: g("any", m),
            filterOperatorIs: g("is", m),
            filterOperatorNot: g("is not", m),
            filterOperatorIsAnyOf: g("is any of", m),
            filterOperatorContains: g("contains", m),
            filterOperatorDoesNotContain: g("does not contain", m),
            filterOperatorEquals: g("equals", m),
            filterOperatorDoesNotEqual: g("does not equal", m),
            filterOperatorStartsWith: g("starts with", m),
            filterOperatorEndsWith: g("ends with", m),
            filterOperatorIsEmpty: g("is empty", m),
            filterOperatorIsNotEmpty: g("is not empty", m),
            filterOperatorAfter: g("is after", m),
            filterOperatorOnOrAfter: g("is on or after", m),
            filterOperatorBefore: g("is before", m),
            filterOperatorOnOrBefore: g("is on or before", m),
            toolbarFiltersTooltipHide: g("Hide filters", m),
            toolbarFiltersTooltipShow: g("Show filters", m),
            //filter textfield labels
            headerFilterOperatorContains: g("contains", m),
            headerFilterOperatorEquals: g("equals", m),
            headerFilterOperatorStartsWith: g("starts with", m),
            headerFilterOperatorEndsWith: g("ends with", m),
            headerFilterOperatorIsEmpty: g("is empty", m),
            headerFilterOperatorIsNotEmpty: g("is not empty", m),
            headerFilterOperatorAfter: g("is after", m),
            headerFilterOperatorOnOrAfter: g("is on or after", m),
            headerFilterOperatorBefore: g("is before", m),
            headerFilterOperatorOnOrBefore: g("is on or before", m),
            headerFilterOperatorIs: g("is", m),
            "headerFilterOperator=": g("equals", m),
            "headerFilterOperator!=": g("does not equal", m),
            "headerFilterOperator>": g("greater than", m),
            "headerFilterOperator>=": g("greater than or equal to", m),
            "headerFilterOperator<": g("less than", m),
            "headerFilterOperator<=": g("less than or equal to", m),
            columnsManagementSearchTitle: g("Search", m),
            columnsManagementNoColumns: g("No columns", m),
            paginationRowsPerPage: g("Rows per page", m),
            paginationDisplayedRows: ({ from: C, to: v, count: A }) => `${C}–${v} ${g("of", m)} ${A}`,
            toolbarQuickFilterLabel: g("Search", m),
            toolbarFiltersTooltipActive: (C) => `${C} ${g(C === 1 ? "active filter" : "active filters", m)}`,
            columnHeaderSortIconLabel: g("Sort", m),
            filterPanelOperatorAnd: g("And", m),
            filterPanelOperatorOr: g("Or", m),
            noResultsOverlayLabel: g("No results found", m),
            columnHeaderFiltersTooltipActive: (C) => `${C} ${g(C === 1 ? "active filter" : "active filters", m)}`,
            detailPanelToggle: g("Detail panel toggle", m),
            checkboxSelectionHeaderName: g("Checkbox selection", m),
            columnsManagementShowHideAllText: g("Show/Hide all", m),
            noColumnsOverlayLabel: g("No columns", m),
            noColumnsOverlayManageColumns: g("Manage columns", m),
            columnsManagementReset: g("Reset", m),
            groupColumn: (C) => `${g("Group by", m)} ${C}`,
            unGroupColumn: (C) => `${g("Ungroup", m)} ${C}`,
            footerRowSelected: (C) => {
              const v = C === 1 ? "item selected" : "items selected";
              return `${C.toLocaleString()} ${g(v, m)}`;
            }
          },
          showToolbar: !0,
          columnHeaderHeight: Pn
        }
      ) }),
      rt && /* @__PURE__ */ D(Ne, { open: !!rt, onConfirm: Or, onCancel: Or, title: "Info", hideCancelButton: !0, children: [
        " ",
        rt
      ] }),
      pt && !rt && /* @__PURE__ */ n(Ne, { open: pt, onConfirm: _n, onCancel: () => Ke(!1), title: "Confirm Delete", children: /* @__PURE__ */ D(Vr, { children: [
        g("Are you sure you want to delete", m),
        " ",
        _e.name && /* @__PURE__ */ n(De, { style: { display: "inline" }, title: _e.name, arrow: !0, children: _e.name.length > 30 ? `${_e.name.slice(0, 30)}...` : _e.name }),
        " ?"
      ] }) }),
      St && /* @__PURE__ */ n(
        Ne,
        {
          open: St,
          onConfirm: Gn,
          onCancel: () => Ve(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ D(Vr, { children: [
            g("Are you sure you want to add", m),
            " ",
            we.size,
            " ",
            g("records", { count: we.size, ...m }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, Ti), Mi = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const o = (c) => {
    r.setFieldValue(t, c.target.checked);
  }, s = me(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ n(
      uo,
      {
        control: /* @__PURE__ */ n(
          rn,
          {
            ...a,
            name: t,
            disabled: i || e.disabled === !0,
            checked: s,
            onChange: o,
            onBlur: r.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ n(ut, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, Gt = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const o = dt(), s = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
    Ht,
    {
      type: "text",
      variant: e.variant || "standard",
      InputProps: {
        readOnly: e.readOnly === !0,
        sx: e.readOnly ? { backgroundColor: o.palette?.action?.disabled } : void 0
      },
      required: e.required,
      multiline: e.multiline,
      rows: s,
      fullWidth: !0,
      name: t,
      value: r.values[t],
      onChange: r.handleChange,
      onBlur: r.handleBlur,
      error: r.touched[t] && !!r.errors[t],
      helperText: r.touched[t] && r.errors[t],
      autoComplete: e.autoComplete,
      ...a,
      defaultValue: e.defaultValue
    },
    t
  );
};
function fn(e, t) {
  const [r, a] = O(e);
  return ce(() => {
    const o = setTimeout(() => {
      a(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}
const Ri = 47, Li = 58, Ni = 37, Bi = 40, ki = [8, 46, 9, 27, 13], Gr = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, $i = ({ column: e, otherProps: t, formik: r, field: a, ...o }) => {
  const { min: s, max: i } = e, c = dt(), [p, h] = O(r.values[a]), y = fn(p, 400), u = me(
    () => Math.max(0, Gr({ value: s, state: r.values })),
    [s, r.values]
  ), l = me(
    () => Gr({ value: i, state: r.values }),
    [i, r.values]
  );
  ce(() => {
    if (y !== r.values[a]) {
      const f = Number(y);
      f < u ? r.setFieldValue(a, u) : l && f > l ? r.setFieldValue(a, l) : r.setFieldValue(a, f);
    }
  }, [y, a, u, l]);
  const { onBlur: b } = o;
  return t = {
    InputProps: {
      inputProps: {
        min: u,
        max: l,
        readOnly: e.readOnly === !0,
        onKeyDown: (f) => {
          const d = f.which ? f.which : f.keyCode;
          ki.includes(d) || d >= Ni && d <= Bi || d > Ri && d < Li || f.preventDefault();
        },
        sx: e.readOnly ? { backgroundColor: c.palette?.action?.disabled } : void 0
      }
    },
    type: "number",
    ...t,
    onChange: (f) => {
      h(f.target.value), typeof b == "function" && b(f);
    }
  }, /* @__PURE__ */ n(Gt, { column: e, otherProps: t, formik: r, field: a, ...o });
}, _i = ({ otherProps: e, ...t }) => {
  const [r, a] = ct.useState(!1), o = () => a((p) => !p), s = (p) => {
    p.preventDefault();
  }, { readOnly: i = !1, disabled: c = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: c,
      endAdornment: /* @__PURE__ */ n(ka, { position: "end", children: /* @__PURE__ */ n(
        Xr,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: s,
          edge: "end",
          disabled: c,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ n(po, {}) : /* @__PURE__ */ n(fo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(Gt, { otherProps: e, ...t });
}, Vi = ({ column: e, field: t, formik: r, otherProps: a, fieldConfigs: o = {}, mode: s }) => {
  const i = s !== "copy" && o.disabled, { systemDateTimeFormat: c, stateData: p } = Be();
  return /* @__PURE__ */ gr(
    en,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: c(!0, !1, p.dateTime),
      name: t,
      value: te(r.values[t]),
      onChange: (h) => {
        const u = te(h).hour(12).toISOString();
        r.setFieldValue(t, u);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: e.min ? te(e.min) : null,
      maxDate: e.max ? te(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, zi = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: s } = Be();
  return /* @__PURE__ */ gr(
    mr,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: o(!1, !1, s.dateTime),
      name: t,
      value: te(r.values[t]),
      onChange: (i) => r.setFieldValue(t, i),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDateTime: e.min ? te(e.min) : null,
      maxDateTime: e.max ? te(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Gi = ({ column: e, field: t, formik: r, otherProps: a }) => {
  let o = r.values[t];
  return e.isUtc && (o = te.utc(o).utcOffset(te().utcOffset(), !0).format()), /* @__PURE__ */ gr(
    mo,
    {
      ...a,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: te(o),
      onChange: (s) => (e.isUtc && (s = s && s.isValid() ? s.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, s)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Ui = [null, void 0, ""];
function mn({ column: e, formik: t, lookups: r, dependsOn: a = [], isAutoComplete: o = !1, userSelected: s, model: i }) {
  const [c, p] = O([]), { stateData: h } = Be(), y = h?.gridSettings?.permissions?.Url || "", u = me(() => `${y}${i?.api || ""}`, [y, i?.api]), l = me(() => {
    const d = {};
    if (!a.length) return d;
    for (const E of a)
      d[E] = t.values[E];
    return d;
  }, a.map((d) => t.values[d])), b = me(() => a.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, a]), f = async () => {
    if (!e.lookup) return;
    if (!Object.values(l).every(
      (P) => !Ui.includes(P)
    )) {
      p([]);
      return;
    }
    let E = [];
    const T = {
      lookups: [{ lookup: e.lookup, where: l }]
    };
    try {
      const P = await _t({ url: `${u}/combo`, params: T, disableLoader: !0, jsonPayload: !0 });
      P && P.success && P.lookups ? E = P.lookups[e.lookup] || [] : E = [];
    } catch {
      E = [];
    } finally {
      p(E);
    }
  };
  return ce(() => {
    a.length ? f() : (o || !s.current) && p(b);
  }, [l, b, u, e.lookup]), c;
}
const ji = ct.memo(({ column: e, field: t, formik: r, lookups: a, dependsOn: o = [], model: s, ...i }) => {
  const c = ct.useRef(!1), { placeHolder: p } = e, h = mn({ column: e, formik: r, lookups: a, dependsOn: o, userSelected: c, model: s }), y = dt(), u = me(() => {
    let b = r.values[t];
    if (h?.length && !b && !e.multiSelect && "IsDefault" in h[0]) {
      const f = h.find((d) => d.IsDefault);
      f && (b = f.value, r.setFieldValue(t, f.value));
    }
    return e.multiSelect && (!b || b.length === 0 ? b = [] : Array.isArray(b) || (b = b.split(",").map((f) => parseInt(f)))), b;
  }, [r.values[t], h, e.multiSelect, t]), l = se((b) => {
    r.handleChange(b), c.current = !0;
  }, [r]);
  return /* @__PURE__ */ D(
    Kt,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(go, { children: p || "" }),
        /* @__PURE__ */ n(
          yo,
          {
            IconComponent: ho,
            ...i,
            name: t,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${u}`,
            onChange: l,
            onBlur: r.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? y.palette?.action?.disabled : ""
            },
            children: Array.isArray(h) && h.map((b) => /* @__PURE__ */ n(nn, { value: b.value, disabled: b.isDisabled, children: b.label }, b.value))
          }
        ),
        /* @__PURE__ */ n(ut, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), Ur = Wt("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Hi = ({ component: e, name: t, formik: r, field: a, column: o }) => {
  const { value: s } = r.getFieldProps(t || a), { setFieldValue: i } = r, c = e || o.relation, p = se((h) => {
    i(t || a, h);
  }, [i, t, a]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ n(Ur, { children: `Available ${o.label}` }),
    /* @__PURE__ */ n(c, { selected: s, available: !0, onAssignChange: p, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ n(Ur, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ n(c, { selected: s, assigned: !0, onAssignChange: p, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Wi = ({ field: e, formik: t, orientation: r = "row", label: a, lookups: o, fieldConfigs: s = {}, mode: i, ...c }) => {
  const p = (b) => {
    t.setFieldValue(e, b.target.value);
  }, h = o ? o[c.column.lookup] : [], y = dt(), u = t.touched[e] && !!t.errors[e], l = i !== "copy" && s.disabled;
  return /* @__PURE__ */ D(fe, { children: [
    /* @__PURE__ */ D(yr, { component: "fieldset", error: u, children: [
      /* @__PURE__ */ n($a, { component: "legend", children: a }),
      /* @__PURE__ */ n(
        br,
        {
          row: r === "row",
          "aria-label": a,
          name: e,
          value: t.values[e],
          onChange: p,
          children: h?.map((b, f) => /* @__PURE__ */ n(
            Xe,
            {
              value: b.value,
              control: /* @__PURE__ */ n(st, {}),
              label: b.label,
              disabled: l
            },
            f
          ))
        }
      )
    ] }),
    u && /* @__PURE__ */ n(ut, { style: { color: y.palette.error.main }, children: t.errors[e] })
  ] });
}, Ki = {
  limitTags: 5
}, qi = Le.memo(({ column: e, field: t, formik: r, lookups: a, dependsOn: o = [], fieldConfigs: s = {}, mode: i, model: c, ...p }) => {
  const h = mn({ column: e, formik: r, lookups: a, dependsOn: o, model: c, isAutoComplete: !0 });
  let y = r.values[t] || [];
  Array.isArray(y) || (y = y.split(", ").map(Number));
  const u = h.filter((f) => y.includes(f.value)) || [], l = i !== "copy" && s.disabled, b = (f, d) => {
    let E = d?.map((T) => T.value) || [];
    e.dataFormat !== "array" && (E = E.length ? E.join(", ") : ""), r.setFieldValue(t, E);
  };
  return /* @__PURE__ */ D(
    Kt,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ n(
          an,
          {
            ...p,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || Ki.limitTags,
            options: h || [],
            getOptionLabel: (f) => f.label || "",
            defaultValue: u,
            renderInput: (f) => /* @__PURE__ */ n(Ht, { ...f, variant: "standard" }),
            onChange: b,
            value: u,
            size: "small",
            disabled: l
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ n(ut, { children: r.errors[t] })
      ]
    },
    t
  );
}), Yi = "#182eb5", Ji = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Zi = _a(Va)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Yi : "#ffffff",
  border: `1px solid ${Do[500]}`,
  color: t ? "white" : "black"
})), Qi = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ n(
  Zi,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Xi = ({ name: e, field: t, formik: r, expired: a }) => {
  const { setFieldValue: o } = r, { value: s } = r.getFieldProps(e || t), i = "1000001", c = "0111110", p = "0".repeat(7), [h, y] = O(s || p), [u, l] = O(() => s ? s === i ? i : s === c ? c : "Custom" : ""), [b, f] = O(!1), d = se((P) => {
    if (Array.isArray(P)) {
      let S = p;
      for (const x of P)
        S = S.substring(0, x) + "1" + S.substring(x + 1);
      y(S), o(e || t, S), f(!0);
    } else {
      let S = b ? p : h;
      const x = S.slice(0, P) + (S[P] === "1" ? "0" : "1") + S.slice(P + 1);
      y(x), o(e || t, x), l("Custom"), f(!1);
    }
  }, [b, p, h, e, t, o]), E = dt(), T = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ D(fe, { children: [
    /* @__PURE__ */ n(yr, { component: "fieldset", error: T, children: /* @__PURE__ */ D(
      br,
      {
        row: !0,
        name: e || t,
        value: u,
        onChange: (P) => {
          const S = P.target.value;
          l(S), S !== "Custom" ? (y(S), o(e || t, S), f(!0)) : (y(p), o(e || t, p), f(!1));
        },
        children: [
          /* @__PURE__ */ n(Xe, { value: i, control: /* @__PURE__ */ n(st, {}), label: "Weekends (Sat - Sun)", onClick: () => d([0, 6]) }),
          /* @__PURE__ */ n(Xe, { value: c, control: /* @__PURE__ */ n(st, {}), label: "Weekdays (Mon - Fri)", onClick: () => d([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(Xe, { value: "Custom", control: /* @__PURE__ */ n(st, {}), label: "Specific days" }),
          Ji.map((P, S) => /* @__PURE__ */ n(
            Qi,
            {
              day: P,
              onClick: () => d(S),
              isSelected: u === "Custom" && h[S] === "1",
              disabled: a
            },
            P.value
          ))
        ]
      }
    ) }),
    T && /* @__PURE__ */ n(ut, { style: { color: E.palette.error.main }, children: r.errors[t] })
  ] });
}, el = ({ isAdd: e, column: t, field: r, formik: a, otherProps: o, fieldConfigs: s = {}, mode: i }) => {
  const c = dt();
  let p = a.values[r] || [];
  Array.isArray(p) || (p = p.split(",").map((l) => l.trim()));
  const h = Le.useMemo(() => i === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: a }) : !!t.disabled, [i, s.disabled, t.disabled]), y = t.hasDefault && !e ? [p[0]] : [], u = se((l, b, f, d = {}) => {
    const E = b.pop()?.trim();
    b.includes(E) || b.push(E), y && y.includes(d.option) && f === "removeOption" && (b = [d.option]), t.dataFormat !== "array" && (b = b.length ? b.join(",") : ""), a.setFieldValue(r, b);
  }, [a, r]);
  return /* @__PURE__ */ D(
    Kt,
    {
      fullWidth: !0,
      variant: "standard",
      error: a.touched[r] && !!a.errors[r],
      children: [
        /* @__PURE__ */ n(
          an,
          {
            ...o,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: p,
            options: [],
            renderInput: (l) => /* @__PURE__ */ n(
              Ht,
              {
                ...l,
                variant: "standard",
                InputProps: {
                  ...l.InputProps,
                  sx: {
                    ...l.InputProps?.sx,
                    ...h && { backgroundColor: c.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: u,
            size: "small",
            renderTags: (l, b) => l.map((f, d) => {
              const { key: E, ...T } = b({ index: d });
              return /* @__PURE__ */ n(
                xo,
                {
                  label: f,
                  ...T,
                  disabled: y.includes(f)
                },
                E
              );
            }),
            disabled: h
          }
        ),
        a.touched[r] && a.errors[r] && /* @__PURE__ */ n(ut, { children: a.errors[r] })
      ]
    },
    r
  );
}, tl = (e = []) => {
  const t = {};
  return e.forEach((r) => {
    r.ParentId && t[r.ParentId] ? t[r.ParentId].children.push({
      value: r.value?.toString(),
      label: r.label
    }) : t[r.ParentId] = {
      label: r.ParentName,
      value: "Parent" + r.ParentId.toString(),
      children: [{
        value: r.value?.toString(),
        label: r.label
      }]
    };
  }), Object.values(t);
};
function rl({ column: e, field: t, formik: r, lookups: a, fieldConfigs: o, mode: s }) {
  const i = a ? a[e.lookup] : [], c = tl(i), p = r.values[t]?.length ? r.values[t].split(", ") : [];
  let h;
  return s !== "copy" && (h = o?.disabled), /* @__PURE__ */ n(He, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    vo,
    {
      selectedItems: p,
      onSelectedItemsChange: (u, l) => {
        r.setFieldValue(t, l?.join(", ") || "");
      },
      disabled: h,
      multiSelect: !0,
      checkboxSelection: !0,
      children: c.map((u) => /* @__PURE__ */ n(kr, { itemId: u.value, label: u.label, children: u.children.map((l) => /* @__PURE__ */ n(kr, { itemId: l.value, label: l.label }, l.value)) }, u.value))
    }
  ) });
}
const nl = { maxLength: 500 }, { errorMapping: al } = et, ol = 1024 * 1024;
function il({ column: e, field: t, formik: r }) {
  const a = r.values[t] || "", { stateData: o } = Be(), { maxSize: s, formats: i } = e, { uploadApi: c, mediaApi: p, Url: h } = o?.gridSettings?.permissions, [y, u] = O({
    isExternal: "no",
    selectedFile: null
  }), [l, b] = O(!1), f = qt(), { getParams: d, useParams: E } = Dr(), { associationId: T } = E() || d, P = T?.split("-")[0] || 1, S = (N) => {
    const J = N.target.value;
    u({
      ...y,
      isExternal: J,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, x = (N) => {
    r.setFieldValue(t, N.target.value);
  }, L = (N) => {
    const J = N.target.files[0];
    if (J) {
      if (s && J.size > s * ol) {
        f.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(J.type)) {
        f.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      u((K) => ({ ...K, selectedFile: J }));
    }
  }, z = async () => {
    if (y.selectedFile) {
      b(!0);
      try {
        const N = new FormData();
        N.append("file", y.selectedFile), N.append("DocumentGroupId", r.values.DocumentGroupId), N.append("AssociationId", P);
        const K = (await tt({
          method: "POST",
          url: c,
          data: N,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!K.success) {
          f.showError(K.message || "Upload failed");
          return;
        }
        const k = p + "/" + K.filePath;
        r.setFieldValue(t, k);
      } catch (N) {
        const J = (N.message.match(/status code (\d{3})/) || [])[1];
        f.showError(al[J]);
      } finally {
        b(!1);
      }
    }
  }, ie = new URL(h, window.location.origin).hostname.toLowerCase();
  ct.useEffect(() => {
    u({
      ...y,
      isExternal: a.toLowerCase().includes(ie) ? "no" : "yes"
    });
  }, [a, u]);
  const le = r.values[t]?.length > (e.max || nl.maxLength), Y = le ? "red" : "";
  return /* @__PURE__ */ D(Te, { children: [
    /* @__PURE__ */ D(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(xe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ D(
        br,
        {
          row: !0,
          value: y.isExternal,
          onChange: S,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(Xe, { value: "yes", control: /* @__PURE__ */ n(st, {}), label: "Yes" }),
            /* @__PURE__ */ n(Xe, { value: "no", control: /* @__PURE__ */ n(st, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ D(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(xe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ D(Te, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        y.isExternal === "yes" ? /* @__PURE__ */ n(
          Vt,
          {
            fullWidth: !0,
            value: a,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: Y },
                "&.Mui-focused fieldset": { borderColor: Y },
                "&:hover fieldset": { borderColor: Y }
              }
            },
            onChange: x,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          Vt,
          {
            fullWidth: !0,
            value: a,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        le && /* @__PURE__ */ D(xe, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    y.isExternal === "no" && /* @__PURE__ */ D(Te, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ D(
        Qe,
        {
          variant: "outlined",
          component: "label",
          disabled: l,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: L })
          ]
        }
      ),
      y.selectedFile && /* @__PURE__ */ n(De, { title: y.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(xe, { variant: "body2", children: y.selectedFile.name.length > 20 ? `${y.selectedFile.name.substring(0, 20)}...` : y.selectedFile.name }) }),
      /* @__PURE__ */ n(
        Qe,
        {
          variant: "contained",
          color: "primary",
          onClick: z,
          disabled: !y.selectedFile || l,
          children: l ? /* @__PURE__ */ n(za, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const ll = ({ field: e, formik: t }) => {
  const [r, a] = Le.useState({}), o = fn(r, 300);
  Le.useEffect(() => {
    if (t.values[e])
      try {
        const i = JSON.parse(t.values[e]);
        a(i);
      } catch {
        a({});
      }
  }, [t.values[e]]), Le.useEffect(() => {
    const i = JSON.stringify(o);
    t.values[e] !== i && t.setFieldValue(e, i);
  }, [o, e, t, t.values[e]]);
  const s = (i, c) => {
    const p = { ...r, [i]: c };
    a(p);
  };
  return /* @__PURE__ */ n(
    Kt,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[e] && !!t.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(r).map((i) => /* @__PURE__ */ D(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ D(vt, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              wo,
              {
                id: i,
                name: i,
                value: r[i],
                onChange: (c) => s(i, c.target.value),
                fullWidth: !0,
                style: { flex: 2 }
              }
            )
          ]
        },
        i
      ))
    },
    e
  );
}, sl = {
  boolean: Mi,
  select: ji,
  string: Gt,
  number: $i,
  password: _i,
  date: Vi,
  dateTime: zi,
  time: Gi,
  oneToMany: Hi,
  radio: Wi,
  autocomplete: qi,
  dayRadio: Xi,
  email: Gt,
  chipInput: el,
  treeCheckbox: rl,
  fileUpload: il,
  json: ll
}, jr = { paddingTop: "2.5px", paddingBottom: "2.5px" }, cl = To("span")({
  color: "red !important"
}), ul = ({ tabColumns: e, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: c, mode: p, handleSubmit: h }) => {
  const [y, u] = Le.useState(/* @__PURE__ */ new Set()), { activeStep: l, setActiveStep: b } = Le.useContext(gn), f = {};
  for (let x = 0, L = t.columns.length; x < L; x++) {
    const { field: z, skip: ie } = t.columns[x];
    ie && (f[ie.step] = r.values[z]);
  }
  const d = (x) => y.has(x) || f[x], E = () => {
    for (let x = l + 1; x < e.length; x++)
      if (!d(x))
        return !1;
    return !0;
  }, T = () => {
    let x = l + 1;
    for (; f[x]; )
      x++;
    u((L) => new Set(L).add(l)), x >= e.length || E() ? h() : b(x);
  }, P = () => {
    let x = l - 1;
    for (; f[x] && x > 0; )
      x--;
    b(x);
  };
  if (!e?.length)
    return null;
  const S = e[l];
  return /* @__PURE__ */ D(fe, { children: [
    /* @__PURE__ */ n(bo, { activeStep: l, sx: { marginBottom: "20px" }, children: e.map(({ title: x, key: L }, z) => /* @__PURE__ */ n(Co, { completed: d(z), children: /* @__PURE__ */ n(Eo, { children: /* @__PURE__ */ n(xe, { sx: { fontSize: "20px" }, children: x }) }) }, L)) }),
    /* @__PURE__ */ D(Le.Fragment, { children: [
      /* @__PURE__ */ n(hn, { formElements: S.items, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: c, mode: p }),
      /* @__PURE__ */ D(He, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        l !== 0 ? /* @__PURE__ */ D(Ce, { color: "inherit", disabled: l === 0, onClick: P, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ n(Ce, { onClick: T, variant: "contained", children: E() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, hn = ({ formElements: e, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: c, mode: p, isAdd: h }) => e?.length ? /* @__PURE__ */ n(fe, { children: e.map(({ Component: y, column: u, field: l, label: b, otherProps: f }, d) => {
  const E = typeof u.relation == "function";
  return /* @__PURE__ */ D(ur, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: E ? "flex-start" : "center", children: [
    u?.showLabel !== !1 ? /* @__PURE__ */ n(ur, { size: { xs: 3 }, sx: jr, children: /* @__PURE__ */ D(xe, { sx: { fontSize: "16px", fontWeight: "bold" }, children: [
      u.label || l,
      ": ",
      u.required && /* @__PURE__ */ n(cl, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ n(ur, { size: { xs: E ? 12 : 9 }, sx: jr, children: /* @__PURE__ */ n(y, { isAdd: h, model: t, fieldConfigs: c[l], mode: p, column: u, field: l, label: b, formik: r, data: a, onChange: o, combos: s, lookups: i, ...f }) })
  ] }, d);
}) }) : null, dl = function({ columns: e, tabs: t = {}, id: r, searchParams: a }) {
  const o = [], s = {};
  for (const c in t)
    s[c] = [];
  for (const c of e) {
    const p = c.type;
    if (c.label === null)
      continue;
    const { field: h, label: y, tab: u } = c, l = {};
    c.options && (l.options = c.options), c.dependsOn && (l.dependsOn = c.dependsOn);
    const b = sl[p];
    if (!b || c.hideInAddGrid && r === "0")
      continue;
    (u && t[u] ? s[u] : o).push({ Component: b, field: h, label: y, column: { ...c, readOnly: a.has("showRelation") || c.readOnly }, otherProps: l });
  }
  const i = [];
  for (const c in s)
    i.push({ key: c, title: t[c], items: s[c] });
  return { formElements: o, tabColumns: i };
}, pl = ({ model: e, formik: t, data: r, combos: a, onChange: o, lookups: s, id: i, fieldConfigs: c, mode: p, handleSubmit: h }) => {
  const y = et.emptyIdValues.includes(i), { formElements: u, tabColumns: l } = Le.useMemo(() => {
    const b = e.formConfig?.showTabbed, f = new URLSearchParams(window.location.search), { formElements: d, tabColumns: E } = dl({ columns: e.columns, tabs: b ? e.tabs : {}, id: i, searchParams: f });
    return { formElements: d, tabColumns: E, showTabs: b && E.length > 0 };
  }, [e]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ n(hn, { isAdd: y, formElements: u, model: e, formik: t, data: r, onChange: o, combos: a, lookups: s, fieldConfigs: c, mode: p }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(ul, { tabColumns: l, model: e, formik: t, data: r, onChange: o, combos: a, lookups: s, fieldConfigs: c, mode: p, handleSubmit: h }) })
  ] });
};
function fl(e) {
  const { children: t, value: r, index: a, ...o } = e;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tabpanel",
      hidden: r !== a,
      id: `simple-tabpanel-${a}`,
      "aria-labelledby": `simple-tab-${a}`,
      ...o,
      children: r === a && /* @__PURE__ */ n(He, { sx: { p: 3 }, children: t })
    }
  );
}
function ml(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const hl = Kr(({ relation: e, parentFilters: t, parent: r, where: a, models: o, readOnly: s }) => {
  const i = o.find(({ name: h }) => h === e);
  if (!i) return null;
  const c = { ...i, hideBreadcrumb: !0 }, p = c instanceof Ut ? c : new Ut(c);
  return p ? /* @__PURE__ */ n(
    p.ChildGrid,
    {
      readOnly: s,
      parentFilters: t,
      parent: r,
      model: c,
      where: a,
      isChildGrid: !0
    }
  ) : null;
}), gl = ct.memo(({ relations: e, parent: t, where: r = [], models: a, relationFilters: o, readOnly: s }) => {
  const [i, c] = O(0);
  return /* @__PURE__ */ D(He, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(He, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(Ao, { value: i, onChange: (h, y) => {
      c(y);
    }, "aria-label": "relations tabs", children: e.map((h, y) => {
      const u = a.find(({ name: b }) => b === h) || {}, l = u.listTitle || u.title || h;
      return /* @__PURE__ */ n(
        So,
        {
          label: l,
          ...ml(y)
        },
        h
      );
    }) }) }),
    e.map((h, y) => /* @__PURE__ */ n(fl, { value: i, index: y, children: /* @__PURE__ */ n(
      hl,
      {
        readOnly: s,
        relation: h,
        models: a,
        parentFilters: o[h] || [],
        parent: t,
        where: r
      },
      h
    ) }, h))
  ] });
}), gn = jt(1), yl = {}, be = {
  object: "object",
  function: "function",
  baseData: "baseData",
  string: "string",
  create: "Create",
  copy: "Copy",
  edit: "Edit",
  number: "number"
}, bl = ({
  model: e,
  api: t,
  models: r,
  relationFilters: a = {},
  permissions: o = {},
  Layout: s = pl,
  baseSaveData: i = {},
  sx: c,
  readOnly: p,
  beforeSubmit: h,
  deletePromptText: y
}) => {
  const u = e.formTitle || e.title, { navigate: l, getParams: b, useParams: f, pathname: d } = Dr(), { relations: E = [] } = e, { dispatchData: T, stateData: P } = Be(), S = f() || b, { id: x = "" } = S, L = x.split("-")[0], z = new URLSearchParams(window.location.search), ie = z.has(be.baseData) && z.get(be.baseData);
  if (ie) {
    const R = JSON.parse(ie);
    typeof R === be.object && R !== null && (i = { ...i, ...R });
  }
  const [le, Y] = O(!0), [N, J] = O({}), [K, k] = O(null), [re, W] = O(!1), _ = qt(), [$, j] = O(null), [ue, F] = O(0), [I, de] = O(!1), [ae, he] = O(null), [Oe, wt] = O(""), ke = P?.gridSettings?.permissions?.Url || "", $e = typeof e.applyFieldConfig === be.function ? e.applyFieldConfig({ data: N, lookups: K }) : yl, pt = me(() => `${ke}${e.api || t || ""}`, [ke, e.api, t]), { mode: Ke } = P.dataForm, _e = P.getUserData || {}, Yt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: Jt } = pn({
    userData: _e,
    model: e,
    userDefinedPermissions: Yt
  }), { hideBreadcrumb: St = !1, navigateBack: Ve } = e, oe = () => {
    let R;
    switch (typeof Ve) {
      case be.function:
        R = Ve({ params: S, searchParams: z, data: N });
        break;
      case be.number:
      case be.string:
        R = Ve;
        break;
      default:
        R = d.substring(0, d.lastIndexOf("/"));
        break;
    }
    l(R);
  }, ft = me(() => et.emptyIdValues.includes(L), [L]), At = me(() => ft ? { ...e.initialValues, ...N, ...i } : { ...i, ...e.initialValues, ...N }, [e.initialValues, N, L]);
  ce(() => {
    if (!ke) return;
    j(e.getValidationSchema({ id: L, snackbar: _ }));
    const R = x.split("-");
    zt({
      ...{
        api: t || pt,
        model: e,
        setError: Ot
      },
      id: R.length > 1 ? R[1] : R[0],
      setIsLoading: Y,
      setActiveRecord: mt
    });
  }, [L, x, e, ke]);
  const ze = tn({
    enableReinitialize: !0,
    initialValues: At,
    validationSchema: $,
    validateOnBlur: !1,
    onSubmit: async (R, { resetForm: q }) => {
      Object.keys(R).forEach((ee) => {
        typeof R[ee] === be.string && (R[ee] = R[ee].trim());
      }), Y(!0), Er({
        id: L,
        api: pt,
        values: R,
        setIsLoading: Y,
        setError: _.showError
      }).then((ee) => {
        if (!ee) return;
        if (e.reloadOnSave)
          return window.location.reload();
        const Ge = ee.info ? ee.info : `Record ${L === 0 ? "Added" : "Updated"} Successfully.`;
        _.showMessage(Ge), Ve !== !1 && oe();
      }).catch((ee) => {
        _.showError(
          "An error occured.",
          ee
        ), e.reloadOnSave && q();
      }).finally(() => Y(!1));
    }
  }), { dirty: m } = ze, rt = () => {
    ze.resetForm(), de(!1), oe();
  }, Ot = function(R, q) {
    _.showError(R, q), oe();
  }, mt = function({ id: R, title: q, record: ee, lookups: Ge }) {
    const Ue = x.indexOf("-") > -1, at = !R || R === "0", qe = at ? be.create : Ue ? be.copy : be.edit, It = at ? "" : ee[e.linkColumn], Ye = [{ text: e.breadCrumbs }, { text: qe }];
    Ue && (ee[e.linkColumn] = ""), e.columns.forEach((ve) => {
      ve.skipCopy && Ue && (ee[ve.field] = "");
    }), J(ee), k(Ge), It !== "" && Ye.push({ text: It }), T({
      type: Z.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: !0,
        breadcrumbs: Ye
      }
    });
  }, Zt = function(R) {
    m ? de(!0) : oe(), R.preventDefault();
  }, ht = async function() {
    try {
      W(!0), await Cr({
        id: L,
        api: t || e.api,
        setIsLoading: Y,
        setError: _.showError,
        setErrorMessage: wt
      }) === !0 && (_.showMessage("Record Deleted Successfully."), oe());
    } catch {
      _.showError("An error occured, please try after some time.");
    } finally {
      W(!1);
    }
  }, Pe = () => {
    wt(null), W(!1);
  };
  if (le)
    return /* @__PURE__ */ n(He, { sx: { display: "flex", pt: "20%", justifyContent: "center" }, children: /* @__PURE__ */ n(co, {}) });
  const nt = function(R) {
    const { name: q, value: ee } = R.target;
    J({ ...N, [q]: ee });
  }, ge = async function(R) {
    R && R.preventDefault(), typeof h === be.function && await h({ formik: ze });
    const { errors: q } = ze;
    ze.handleSubmit();
    const ee = Object.keys(q)[0], Ge = q[ee];
    Ge && _.showError(Ge, null, "error");
    const Ue = e.columns.find(
      (at) => at.field === ee
    ) || {};
    Ue.tab && F(Object.keys(e.tabs).indexOf(Ue.tab));
  }, Qt = [
    { text: u },
    { text: L === "0" ? "New" : "Update" }
  ], Xt = Number(L) !== 0 && !!E.length, Pt = z.has("showRelation"), Ft = !("canEdit" in N) || N.canEdit, gt = !Ft || N.readOnlyRelations;
  return y = y || "Are you sure you want to delete ?", /* @__PURE__ */ D(fe, { children: [
    /* @__PURE__ */ n(
      dn,
      {
        navigate: l,
        title: u,
        showBreadcrumbs: !St,
        breadcrumbs: Qt,
        model: e
      }
    ),
    /* @__PURE__ */ n(gn.Provider, { value: { activeStep: ue, setActiveStep: F }, children: /* @__PURE__ */ D(lo, { sx: { padding: 2, ...c }, children: [
      /* @__PURE__ */ D("form", { children: [
        /* @__PURE__ */ D(
          so,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              Jt && Ft && !Pt && !p && /* @__PURE__ */ n(
                Ce,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: ge,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ n(
                Ce,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Zt,
                  children: "Cancel"
                }
              ),
              o.delete && /* @__PURE__ */ n(
                Ce,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => W(!0),
                  children: "Delete"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            model: e,
            formik: ze,
            data: N,
            fieldConfigs: $e,
            onChange: nt,
            lookups: K,
            id: L,
            handleSubmit: ge,
            mode: Ke
          }
        )
      ] }),
      Oe && /* @__PURE__ */ D(
        Ne,
        {
          open: !!Oe,
          onConfirm: Pe,
          onCancel: Pe,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            Oe
          ]
        }
      ),
      /* @__PURE__ */ n(
        Ne,
        {
          open: I,
          onConfirm: rt,
          onCancel: () => de(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ n(
        Ne,
        {
          open: re,
          onConfirm: ht,
          onCancel: () => {
            W(!1), he(null);
          },
          title: ae ? "Error Deleting Record" : "Confirm Delete",
          children: y
        }
      ),
      Xt ? /* @__PURE__ */ n(
        gl,
        {
          readOnly: gt,
          models: r,
          relationFilters: a,
          relations: E,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, kt = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, Cl = {}, Hr = !0, El = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class Ut {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "", controllerType: a } = t;
    let { api: o, idProperty: s = o + "Id" } = t;
    const i = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    o || (o = `${r.replaceAll(kt.nonAlphaNumeric, "-").toLowerCase()}`, s = r.replaceAll(" ", "") + "Id"), o = a === "cs" ? `${o}.ashx` : `${o}`;
    const c = { ...t.defaultValues }, p = i || r;
    Object.assign(this, {
      standard: !0,
      name: p,
      permissions: { ...Ut.defaultPermissions },
      idProperty: s,
      linkColumn: `${p}Name`,
      overrideFileName: r,
      preferenceId: p,
      tableName: p,
      module: i,
      ...t,
      api: o
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(c);
  }
  _getColumnVisibilityModel() {
    const t = {};
    for (const r of this.columns)
      r.hide === !0 && (t[r.id || r.field] = !1);
    return t;
  }
  _getDefaultValues(t) {
    for (const r of this.columns) {
      const a = r.field || r.id;
      t[a] = r.defaultValue === void 0 ? El[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, a = {};
    for (const o of r) {
      const { field: s, label: i, header: c, type: p = "string", requiredIfNew: h = !1, required: y = !1, min: u = "", max: l = "", validate: b } = o, f = i || c || s;
      if (!f)
        continue;
      let d;
      switch (p) {
        case "string":
          d = ne.string().nullable().trim().label(f), u && !isNaN(Number(u)) && (d = d.min(Number(u), `${f} must be at least ${u} characters long`)), l && !isNaN(Number(l)) && (d = d.max(Number(l), `${f} must be at most ${l} characters long`)), y && (d = d.trim().required(`${f} is required`));
          break;
        case "boolean":
          d = ne.bool().nullable().transform((E, T) => T === "" ? null : E).label(f);
          break;
        case "radio":
        case "dayRadio":
          d = ne.mixed().label(f).required(`Select at least one option for ${f}`);
          break;
        case "date":
          d = ne.date().nullable().transform((E, T) => T === "" || T === null ? null : E).label(f).required(`${f} is required`);
          break;
        case "dateTime":
          d = ne.date().nullable().transform((E, T) => T === "" || T === null ? null : E).label(f);
          break;
        case "select":
        case "autocomplete":
          y ? d = ne.string().trim().label(f).required(`Select at least one ${f}`) : d = ne.string().nullable();
          break;
        case "password":
          d = ne.string().label(f).test("ignore-asterisks", `${f} must be a valid password.`, (E) => {
            if (E === "******") return !0;
            const T = Number(u) || 8, P = Number(l) || 50, S = o.regex || kt.password;
            return ne.string().min(T, `${f} must be at least ${T} characters`).max(P, `${f} must be at most ${P} characters`).matches(
              S,
              `${f} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(E);
          });
          break;
        case "email":
          d = ne.string().trim().matches(
            o.regex || kt.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          y ? d = ne.number().label(f).required(`${f} is required.`) : d = ne.number().nullable(), u !== void 0 && u !== "" && !isNaN(Number(u)) && (d = d.min(Number(u), `${f} must be greater than or equal to ${u}`)), l !== void 0 && l !== "" && !isNaN(Number(l)) && (d = d.max(Number(l), `${f} must be less than or equal to ${l}`));
          break;
        case "fileUpload":
          d = ne.string().trim().label(f);
          break;
        default:
          d = ne.mixed().nullable().label(f);
          break;
      }
      if (y && p !== "string" && (d = d.required(`${f} is required`)), h && (!t || t === "") && (d = d.trim().required(`${f} is required`)), b) {
        const E = kt.compareValidatorRegex.exec(b);
        if (E) {
          const T = E[1], P = r.find(
            (S) => (S.formField === T || S.field) === T
          );
          d = d.oneOf(
            [ne.ref(T)],
            `${f} must match ${P.label}`
          );
        }
      }
      a[s] = d;
    }
    return ne.object({ ...a, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ n(bl, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ n(zr, { model: this, showRowsSelected: Hr, ...r });
  ChildGrid = (t) => /* @__PURE__ */ D(fe, { children: [
    /* @__PURE__ */ n(zr, { model: this, ...t, customStyle: Cl, showRowsSelected: Hr }),
    /* @__PURE__ */ n(Ga, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ne as DialogComponent,
  zr as GridBase,
  li as HelpModal,
  _r as MuiTypography,
  dn as PageTitle,
  _s as RouterProvider,
  on as SnackbarContext,
  Bs as SnackbarProvider,
  $s as StateProvider,
  Ut as UiModel,
  ks as crudHelper,
  Uo as daDKGrid,
  Ho as deDEGrid,
  Ko as elGRGrid,
  Yo as esESGrid,
  Zo as frFRGrid,
  _t as httpRequest,
  Xo as itITGrid,
  ii as locales,
  ni as ptPT,
  ti as trTRGrid,
  Vo as useMobile,
  Dr as useRouter,
  qt as useSnackbar,
  Be as useStateContext
};
//# sourceMappingURL=index.js.map
