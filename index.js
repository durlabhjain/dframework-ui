import { jsx as n, jsxs as v, Fragment as he } from "react/jsx-runtime";
import * as Le from "react";
import pt, { createContext as Ut, useContext as br, useState as F, useEffect as se, useReducer as ra, useRef as Kr, useMemo as pe, useCallback as de, memo as Yr, useId as na, createElement as Cr } from "react";
import aa from "@mui/material/Snackbar";
import oa from "@mui/material/Alert";
import Ee from "@mui/material/Button";
import ia from "@mui/material/Dialog";
import la from "@mui/material/DialogActions";
import sa from "@mui/material/DialogContent";
import ca from "@mui/material/DialogContentText";
import ua from "@mui/material/DialogTitle";
import * as We from "@mui/x-data-grid-premium";
import { GridFooterContainer as da, GridFooter as pa, getGridDateOperators as Jr, useGridApiRef as Zr, DataGridPremium as Qr, GridActionsCellItem as Re, useGridSelector as fa, gridFilterModelSelector as ma, GridToolbarExportContainer as ha, Toolbar as ga, GRID_CHECKBOX_SELECTION_COL_DEF as ya, getGridStringOperators as ba, getGridBooleanOperators as Ca, ColumnsPanelTrigger as Ea, FilterPanelTrigger as va } from "@mui/x-data-grid-premium";
import Xr from "@mui/icons-material/Delete";
import Br from "@mui/icons-material/FileCopy";
import xa from "@mui/icons-material/Article";
import mr from "@mui/icons-material/Edit";
import Da from "@mui/icons-material/FilterListOff";
import Lr from "@mui/icons-material/Add";
import Ta from "@mui/icons-material/Remove";
import Tt from "@mui/material/Typography";
import He from "@mui/material/Box";
import jt from "@mui/material/TextField";
import { useTranslation as en, withTranslation as wa } from "react-i18next";
import { Typography as we, Dialog as Sa, DialogTitle as Aa, Grid as me, DialogContent as Oa, Card as Pa, CardContent as Fa, Breadcrumbs as Ia, Link as Ma, Button as Xe, IconButton as $t, Box as Te, Menu as Ra, List as Ba, MenuItem as Dt, ListItemButton as dr, ListItemIcon as La, ListItem as Na, ListItemText as ka, TextField as _t, FormControlLabel as et, Checkbox as $a, Stack as Nr, Tooltip as De, FormControl as Ht, Select as _a, Badge as Va, FormHelperText as rt, useTheme as ft, Input as za, FilledInput as Ga, OutlinedInput as Ua, InputAdornment as tn, FormLabel as ja, RadioGroup as Er, Radio as dt, styled as Ha, Avatar as Wa, CircularProgress as qa, Divider as Ka } from "@mui/material";
import Ya from "@mui/icons-material/Check";
import hr from "@mui/icons-material/Close";
import Ja from "@mui/icons-material/Help";
import { Replay as Za, Close as Qa, GridOn as Xa, TableChart as kr, Code as eo, Language as to, DataObject as ro } from "@mui/icons-material";
import ne from "dayjs";
import no from "dayjs/plugin/utc";
import ao from "dayjs/plugin/timezone";
import { DatePicker as rn } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as gr } from "@mui/x-date-pickers/DateTimePicker";
import oo from "dayjs/plugin/utc.js";
import { LocalizationProvider as io } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as lo } from "@mui/x-date-pickers/AdapterDayjs";
import so from "@mui/icons-material/Save";
import $r from "@mui/icons-material/Settings";
import { useFormik as nn } from "formik";
import * as oe from "yup";
import co from "@mui/icons-material/History";
import uo from "@mui/icons-material/FileDownload";
import an from "@mui/material/Checkbox";
import on from "@mui/material/MenuItem";
import { styled as Wt } from "@mui/material/styles";
import po from "@mui/icons-material/ViewColumn";
import fo from "@mui/icons-material/FilterList";
import mo from "@mui/material/Paper";
import ho from "@mui/material/Stack";
import go from "@mui/material/CircularProgress";
import yo from "@mui/material/FormControlLabel";
import { NumberField as Vt } from "@base-ui/react/number-field";
import bo from "@mui/icons-material/KeyboardArrowUp";
import ln from "@mui/icons-material/KeyboardArrowDown";
import Co from "@mui/icons-material/VisibilityOff";
import Eo from "@mui/icons-material/Visibility";
import { TimePicker as vo } from "@mui/x-date-pickers/TimePicker";
import qt from "@mui/material/FormControl";
import xo from "@mui/material/InputLabel";
import Do from "@mui/material/Select";
import pr from "@mui/material/Grid";
import sn from "@mui/material/Autocomplete";
import To from "@mui/material/Stepper";
import wo from "@mui/material/Step";
import So from "@mui/material/StepLabel";
import { grey as Ao } from "@mui/material/colors";
import Oo from "@emotion/styled";
import Po from "@mui/material/Chip";
import { SimpleTreeView as Fo } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as _r } from "@mui/x-tree-view/TreeItem";
import Io from "@mui/material/Input";
import Mo from "@mui/material/Tab";
import Ro from "@mui/material/Tabs";
const cn = Ut(null), Bo = "bottom", Lo = "center", No = pt.forwardRef(function(t, r) {
  return /* @__PURE__ */ n(oa, { elevation: 6, ref: r, variant: "filled", ...t });
}), zs = ({ children: e }) => {
  const [t, r] = F(null), [a, o] = F(!1), [s, i] = F(null), [c, p] = F(null), m = function(l, y, h = "info", d) {
    typeof l != "string" && (l = l.toString()), y && typeof y != "string" && (y = y.toString()), r(y ? `${l}: ${y}` : l), i(h), o(!0), p(d);
  }, b = function(l, y, h = "error", d) {
    m(l, y, h, d);
  }, u = function() {
    o(!1), p(null), c && c();
  };
  return /* @__PURE__ */ v(he, { children: [
    /* @__PURE__ */ n(
      cn.Provider,
      {
        value: { showMessage: m, showError: b },
        children: e
      }
    ),
    /* @__PURE__ */ n(aa, { open: a, autoHideDuration: 6e3, onClose: u, anchorOrigin: { vertical: Bo, horizontal: Lo }, children: /* @__PURE__ */ n(No, { severity: s, children: t }) })
  ] });
}, Kt = function() {
  return br(cn);
}, Ne = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: a, okText: o, cancelText: s, yesNo: i = !1, children: c, maxWidth: p = "sm", fullWidth: m = !0, ...b }) => (o = o || (i ? "Yes" : "Ok"), s = s || (i ? "No" : "Cancel"), /* @__PURE__ */ v(
  ia,
  {
    ...b,
    open: e,
    onClose: a,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: p,
    fullWidth: m,
    children: [
      /* @__PURE__ */ n(ua, { id: "alert-dialog-title", sx: { fontSize: c ? "inherit" : "1.25rem" }, children: r }),
      c && /* @__PURE__ */ n(sa, { dividers: !0, children: /* @__PURE__ */ n(ca, { children: c }) }),
      (a || t) && /* @__PURE__ */ v(la, { children: [
        a && /* @__PURE__ */ n(Ee, { onClick: a, children: s }),
        t && /* @__PURE__ */ n(Ee, { onClick: t, autoFocus: !0, children: o })
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
let xt = 0;
const Ae = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, un = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, ko = (e, t) => {
  const r = new URL(e);
  for (const a in t) {
    const o = typeof t[a] == "object" ? JSON.stringify(t[a]) : t[a];
    r.searchParams.append(a, o);
  }
  window.open(r, "_blank").focus();
}, nt = async (e) => {
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
  a && (o["Content-Type"] === "multipart/form-data" ? (delete c.headers["Content-Type"], c.body = a instanceof FormData ? a : un(a)) : (c.headers["Content-Type"] = o["Content-Type"] || "application/json", c.body = typeof a == "string" ? a : JSON.stringify(a)));
  const p = await fetch(r, c), m = p.headers.get("content-type") || {};
  return {
    status: p.status,
    data: m.includes("application/json") ? await p.json() : await p.text(),
    headers: Object.fromEntries(p.headers.entries())
  };
}, Nt = {
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
}, kt = async ({
  url: e,
  params: t = {},
  history: r,
  jsonPayload: a = !1,
  additionalParams: o = {},
  additionalHeaders: s = {},
  disableLoader: i = !1,
  dispatchData: c,
  dataParser: p = Nt.raw,
  onParseError: m
}) => {
  if (t.exportData)
    return ko(e, t);
  i = i || typeof c != "function", i || c({ type: Z.UPDATE_LOADER_STATE, payload: !0 }), xt++;
  const b = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: a ? { ...s } : { "Content-Type": "multipart/form-data", ...s },
    ...o
  };
  t && (b.data = a ? t : un(t));
  try {
    const u = await nt(b);
    xt--;
    let l = u.data;
    if (xt === 0 && !i && c({ type: "UPDATE_LOADER_STATE", payload: !1 }), u.status === Ae.SESSION_EXPIRED && r) {
      r("/login");
      return;
    }
    if (u.status !== Ae.OK)
      return { error: !0, message: l.message || "An error occurred" };
    try {
      l = p(l);
    } catch (y) {
      return m ? m(y, l) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: y.message,
        rawData: l
      };
    }
    return l;
  } catch (u) {
    return xt--, xt === 0 && !i && c({ type: "UPDATE_LOADER_STATE", payload: !1 }), { error: !0, message: u.message || "Network error" };
  }
}, $o = ["date", "dateTime"], _o = ["singleSelect"], Vr = 200, Vo = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset(), Oe = (e, t) => e.status === Ae.SESSION_EXPIRED ? (t("Session Expired!"), setTimeout(() => {
  window.location.href = "/";
}, Vr), !0) : e.status === Ae.FORBIDDEN ? (t("Access Denied!"), setTimeout(() => {
  window.location.href = "/";
}, Vr), !0) : (e.status === Ae.INTERNAL_SERVER_ERROR && t("Internal Server Error"), !1);
function zo(e) {
  const { operator: t, value: r, type: a } = e, o = ["isEmpty", "isNotEmpty"].includes(t), s = r != null && (r !== "" || a === "number" && r === 0 || a === "boolean" && r === !1);
  return o || s;
}
const dn = async ({ gridColumns: e, setIsLoading: t, setData: r, page: a, pageSize: o, sortModel: s, filterModel: i, api: c, parentFilters: p, action: m = "list", setError: b, extraParams: u, contentType: l, columns: y, controllerType: h = "node", template: d = null, configFileName: E = null, dispatchData: x, showFullScreenLoader: S = !1, model: A, baseFilters: T = null, isElasticExport: D }) => {
  l || S && x({ type: Z.UPDATE_LOADER_STATE, payload: !0 });
  const V = [], re = [], ce = [];
  e.forEach(({ lookup: N, type: ae, field: q, keepLocal: $ = !1, keepLocalDate: k, filterable: H = !0, dependsOn: fe }) => {
    $o.includes(ae) && ce.push({ field: q, keepLocal: $, keepLocalDate: k }), N && !V.includes(N) && _o.includes(ae) && H && (V.push(N), re.push({ lookup: N, dependsOn: fe }));
  });
  const Y = [];
  i?.items?.length && i.items.forEach((N) => {
    if (zo(N)) {
      const { field: ae, operator: q, filterField: $ } = N;
      let { value: k } = N;
      const fe = e.filter((I) => I?.field === N.field)[0]?.type;
      fe === "boolean" ? k = k === "true" || k === !0 ? 1 : 0 : fe === "number" && (k = Array.isArray(k) ? k.filter((I) => I) : k), k = N.filterValues || k, Y.push({
        field: $ || ae,
        operator: q,
        value: k,
        type: fe
      });
    }
  }), p && Y.push(...p), T && Y.push(...T);
  const R = {
    start: a * o,
    limit: D ? A.exportSize : o,
    ...u,
    logicalOperator: i.logicOperator,
    sort: s.map((N) => (N.filterField || N.field) + " " + N.sort).join(","),
    where: Y,
    isElasticExport: D,
    model: A.module,
    fileName: A.overrideFileName
  };
  V.length && (R.lookups = V.join(",")), re.length && (R.lookupWithDeps = JSON.stringify(re)), A?.limitToSurveyed && (R.limitToSurveyed = A?.limitToSurveyed);
  const J = {};
  let K = h === "cs" ? `${c}?action=${m}&asArray=0` : `${c}/${m}`;
  if (d !== null && (K += `&template=${d}`), E !== null && (K += `&configFileName=${E}`), l) {
    const N = document.createElement("form");
    if (R.responseType = l, R.columns = y, R.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), N.setAttribute("method", "POST"), N.setAttribute("id", "exportForm"), N.setAttribute("target", "_blank"), d === null)
      for (const ae in R) {
        let q = R[ae];
        if (q == null)
          continue;
        typeof q != "string" && (q = JSON.stringify(q));
        const $ = document.createElement("input");
        $.type = "hidden", $.name = ae, $.value = q, N.append($);
      }
    N.setAttribute("action", K), document.body.appendChild(N), N.submit(), setTimeout(() => {
      document.getElementById("exportForm").remove();
    }, 3e3);
    return;
  }
  try {
    t(!0);
    const N = {
      url: K,
      method: "POST",
      data: R,
      headers: {
        "Content-Type": "application/json",
        ...J
      },
      credentials: "include"
    };
    r((q) => ({
      ...q,
      records: []
      // reset records to empty array before fetching new data
    }));
    const ae = await nt(N);
    if (ae.status === Ae.OK) {
      const { records: q } = ae.data;
      q && q.forEach(($) => {
        ce.forEach((k) => {
          const { field: H, keepLocal: fe, keepLocalDate: I } = k;
          if ($[H]) {
            if ($[H] = new Date($[H]), I) {
              const B = $[H].getTimezoneOffset() * 6e4;
              $[H] = new Date($[H].getTime() + B);
            }
            if (fe && !Vo($[H])) {
              const B = $[H].getTimezoneOffset() * 6e4;
              $[H] = new Date($[H].getTime() + B);
            }
          }
        }), A.columns.forEach(({ field: k, displayIndex: H }) => {
          H && ($[k] = $[H]);
        });
      }), r(ae.data);
    } else Oe(ae, b) || b(ae.statusText);
  } catch (N) {
    N.response && !Oe(N.response, b) ? b("Could not list record", N.message || N.toString()) : b("Network failure or server unreachable. Please try again.");
  } finally {
    t(!1), !l && S && x({ type: Z.UPDATE_LOADER_STATE, payload: !1 });
  }
}, zt = async ({ api: e, id: t, setIsLoading: r, setActiveRecord: a, model: o, parentFilters: s, where: i = {}, setError: c }) => {
  e = e || o.api, r(!0);
  const p = new URLSearchParams(), m = `${e}/${t ?? "-"}`, b = [];
  (o.formDef || o.columns)?.forEach((l) => {
    l.lookup && !b.includes(l.lookup) && !l.dependsOn && b.push(l.lookup);
  }), p.set("lookups", b), i && Object.keys(i)?.length && p.set("where", JSON.stringify(i));
  try {
    const l = await nt({
      url: `${m}?${p.toString()}`,
      method: "GET",
      credentials: "include"
    });
    if (l.status === Ae.OK) {
      const { data: y, lookups: h } = l.data;
      let d = y[o.linkColumn];
      const E = o.columns.find((S) => S.field === o.linkColumn);
      if (E && E.lookup && h && h[E.lookup] && h[E.lookup]?.length) {
        const S = h[E.lookup].find((A) => A.value === d);
        S && (d = S.label);
      }
      const x = { ...o.defaultValues };
      a({ id: t, title: d, record: { ...x, ...y, ...s }, lookups: h });
    } else Oe(l, c) || c("Could not load record", l.body.toString());
  } catch (l) {
    l.response && Oe(l.response, c) && c("Could not load record", l.message || l.toString());
  } finally {
    r(!1);
  }
}, vr = async function({ id: e, api: t, setIsLoading: r, setError: a }) {
  const o = { success: !1, error: "" };
  if (!e) {
    a("Deleted failed. No active record.");
    return;
  }
  r(!0);
  try {
    const s = await nt({
      url: `${t}/${e}`,
      method: "DELETE",
      credentials: "include"
    });
    if (s.status === Ae.OK)
      return s.data && !s.data.success ? (o.success = !1, a("Delete failed", s.data.message), !1) : (o.success = !0, !0);
    Oe(s, a) || a("Delete failed", s.body);
  } catch (s) {
    s.response && !Oe(s.response, a) && a("Could not delete record", s.message || s.toString());
  } finally {
    r(!1);
  }
  return o;
}, xr = async function({ id: e, api: t, values: r, setIsLoading: a, setError: o }) {
  let s, i;
  e !== 0 ? (s = `${t}/${e}`, i = "PUT") : (s = t, i = "POST");
  try {
    a(!0);
    const c = await nt({
      url: s,
      method: i,
      data: r,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (c.status === Ae.OK) {
      const p = c.data;
      if (p.success)
        return p;
      o("Save failed", p.err || p.message);
    } else Oe(c, o) || o("Save failed", c.body);
  } catch (c) {
    c.response && !Oe(c.response, o) && o("Could not save record", c.message || c.toString());
  } finally {
    a(!1);
  }
  return !1;
}, Go = async ({ api: e, setIsLoading: t, setActiveRecord: r, model: a, setError: o, lookups: s, scopeId: i }) => {
  e = e || a.api, t(!0);
  const c = new URLSearchParams(), p = `${e}/lookups`;
  c.set("lookups", s), c.set("scopeId", i);
  try {
    const m = await nt({
      url: `${p}?${c.toString()}`,
      method: "GET",
      credentials: "include"
    });
    m.status === Ae.OK ? r(m.data) : Oe(m, o) || o("Could not load lookups", m.statusText);
  } catch (m) {
    m.response && !Oe(m.response, o) && o("Could not load lookups", m.message || m.toString());
  } finally {
    t(!1);
  }
}, Gs = {
  getList: dn,
  getRecord: zt,
  deleteRecord: vr,
  saveRecord: xr,
  getLookups: Go
}, Uo = ({ pagination: e, apiRef: t, tTranslate: r = (a) => a }) => {
  const a = t.current.state.pagination.paginationModel.page, o = t.current.state.pagination.paginationModel.pageSize, s = t.current.state.rows.totalRowCount, i = Math.ceil(s / o), { t: c, i18n: p } = en(), m = { t: c, i18n: p }, [b, u] = F(a + 1), l = function(d) {
    let E = d.target?.value;
    E === "" ? u("") : (E = parseInt(E), E = isNaN(E) || E < 1 ? 1 : E, u(E));
  };
  se(() => {
    u(a + 1);
  }, [a, o]);
  const y = function() {
    let d = b === "" ? 1 : b;
    d = Math.max(d, 1), d = Math.min(d, i), t.current.setPage(d - 1), u(d), b === "" && u(1);
  }, h = (d) => {
    const E = d.which || d.keyCode, x = String.fromCharCode(E);
    /\d/.test(x) || d.preventDefault();
  };
  return /* @__PURE__ */ v(da, { children: [
    /* @__PURE__ */ n(He, { sx: { pl: 5 }, children: e && /* @__PURE__ */ v(he, { children: [
      /* @__PURE__ */ v(Tt, { variant: "p", children: [
        r("Jump to page", m),
        ":"
      ] }),
      /* @__PURE__ */ n(
        jt,
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
          value: b,
          onChange: l,
          onKeyPress: h,
          disabled: !s
        }
      ),
      /* @__PURE__ */ n(Ee, { disabled: !s, size: "small", onClick: y, children: r("Go", m) })
    ] }) }),
    /* @__PURE__ */ n(pa, {})
  ] });
}, jo = /\${((\w+)\.)?(\w+)}/g, Ho = function(e, t, { template: r = jo, keepMissingTags: a = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(o, s, i, c) {
    const p = i ? t[i] || {} : t;
    return p[c] === void 0 ? a ? o : "" : p[c];
  });
}, fr = {
  replaceTags: Ho
};
function zr({ variant: e = "h2", component: t = "h2", text: r = "", name: a = null, ...o }) {
  return /* @__PURE__ */ v(we, { variant: e, component: t, ...o, children: [
    r,
    a && ` ${a}`
  ] });
}
function Wo(e = !1) {
  const t = s(), [r, a] = F(t);
  function o() {
    setTimeout(() => {
      a(s());
    }, 10);
  }
  se(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function s() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const c = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const p = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let m = null;
    return window.innerWidth <= window.innerHeight ? m = "portrait" : m = "landscape", { mobile: c, tablet: p, portrait: m === "portrait", landscape: m === "landscape" };
  }
  return e ? r.mobile : r;
}
const qo = (e, t) => {
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
}, Ko = {
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
}, Yo = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Jo = {
  ...We.daDK,
  ...Yo
}, Zo = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Qo = {
  ...We.deDE,
  ...Zo
}, Xo = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, ei = {
  ...We.elGR,
  ...Xo
}, ti = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, ri = {
  ...We.esES,
  ...ti
}, ni = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, ai = {
  ...We.frFR,
  ...ni
}, oi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, ii = {
  ...We.itIT,
  ...oi
}, li = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, si = {
  ...We.trTR,
  ...li
}, ci = {
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
}, ui = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, di = {
  ...We.enUS,
  ...ui
}, pi = {
  en: di,
  "tr-TR": si,
  "es-ES": ri,
  "da-DK": Jo,
  "de-DE": Qo,
  "el-GR": ei,
  "fr-FR": ai,
  "pt-PT": ci,
  "it-IT": ii
};
ne.extend(no);
ne.extend(ao);
const pn = Ut(), fn = Ut(null), Us = ({ children: e, apiEndpoints: t = {} }) => {
  const [r, a] = ra(qo, Ko), o = Kr(t);
  function s(u, l) {
    o.current[u] = l;
  }
  function i(u) {
    return o.current[u];
  }
  function c(u, l) {
    return `${o.current[u || "default"] || ""}${l}`;
  }
  function p(u, l, y) {
    if (y != null) {
      const h = y;
      let d = u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return h && (d = h.split(" "), d[0] = d[0].toUpperCase(), u ? d = d[0] : l ? d = d[0].toUpperCase() : (d[1] += d[1].includes(":ss") ? "" : ":ss", d = d.join(" "))), d;
    }
    return u ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }
  function m({ value: u, useSystemFormat: l, showOnlyDate: y = !1, state: h, timeZone: d }) {
    if (!u) return "-";
    const E = p(l, y, h);
    return d ? ne(u).tz(d).format(E) : ne(u).format(E);
  }
  function b() {
    const u = r.dataLocalization, l = pi[u];
    function y(h) {
      return u === "pt-PT" || u === "ptPT" ? l.components.MuiDataGrid.defaultProps.localeText[h] || h : l[h] || h;
    }
    return { getLocalizedString: y };
  }
  return /* @__PURE__ */ n(pn.Provider, { value: { stateData: r, dispatchData: a, systemDateTimeFormat: p, formatDate: m, useLocalization: b, getApiEndpoint: i, setApiEndpoint: s, buildUrl: c }, children: e });
}, js = fn.Provider, Dr = () => br(fn), ke = () => {
  const e = br(pn);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, fi = () => {
  const [e, t] = F(), [r, a] = F(!1), { stateData: o, dispatchData: s } = ke(), i = o.modal, c = 16 / 9;
  let p = (window.outerWidth - 10) / window.innerWidth * 100;
  const m = () => {
    let u = document.getElementById("tutorial-iframe");
    u ? (u = u.offsetWidth, u = u / window.innerWidth) : u = 0.9;
    const l = window.innerWidth * u * (1 / c), y = window.innerHeight - 180;
    t(Math.min(l, y));
  };
  se(() => {
    i?.status && (a(!0), m());
  }, [i, p]), se(() => (window.addEventListener("resize", m), () => {
    window.removeEventListener("resize", m);
  }), []);
  function b() {
    const u = document.getElementById("tutorial-iframe");
    u.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ v(Sa, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    s({
      type: Z.OPEN_MODAL,
      payload: { status: !1, data: {} }
    });
  }, children: [
    /* @__PURE__ */ n(Aa, { className: "pt-2 pb-0", children: /* @__PURE__ */ v(me, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ v(me, { size: 11, children: [
        /* @__PURE__ */ v(we, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(we, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(he, { children: " " }) })
      ] }),
      /* @__PURE__ */ v(me, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(Za, { className: "cursor_pointer mt-2 mr-2", onClick: b }),
        /* @__PURE__ */ n(Qa, { className: "cursor_pointer mt-2", onClick: () => {
          s({
            type: Z.OPEN_MODAL,
            payload: { status: !1, data: {} }
          });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ v(Oa, { dividers: !0, children: [
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
function mi({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: a = null,
  mobileRightComponent: o,
  title: s = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: c,
  breadcrumbs: p = [],
  enableBackButton: m = !1,
  breadcrumbColor: b,
  showHelpButton: u = !1
}) {
  const l = Wo(!0), y = p.length - 1, h = c && p.length, d = () => {
    t(-1);
  };
  return se(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ v(he, { children: [
    /* @__PURE__ */ n(zr, { className: "print-only", text: e }),
    h && /* @__PURE__ */ v(he, { children: [
      /* @__PURE__ */ n(Pa, { sx: { mb: 3 }, children: /* @__PURE__ */ v(Fa, { sx: { backgroundColor: b || "#fff" }, children: [
        /* @__PURE__ */ v(me, { container: !0, children: [
          /* @__PURE__ */ n(me, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(Ia, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: p.map((E, x) => x < y ? /* @__PURE__ */ n(Ma, { onClick: d, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: E.text }, x) : /* @__PURE__ */ n(we, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: E.text }, x)) }) }),
          (p.length > 1 || m) && /* @__PURE__ */ n(me, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Xe, { variant: "contained", onClick: d, children: "Back" }) }),
          u && /* @__PURE__ */ n(me, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n($t, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ n(Ja, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Te, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: l ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          zr,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !l && /* @__PURE__ */ v(he, { children: [
          /* @__PURE__ */ v(Te, { children: [
            " ",
            a && /* @__PURE__ */ n(a, {}),
            " "
          ] }),
          /* @__PURE__ */ v(Te, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n(fi, {})
    ] })
  ] });
}
const mn = wa()(mi), tt = {
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
}, hn = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: a = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const o = a.find((s) => s.Module === t.module);
  return o ? {
    canAdd: r.add && !!o[tt.permissionsMapper.add],
    canEdit: r.edit && !!o[tt.permissionsMapper.edit],
    canDelete: r.delete && !!o[[tt.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
};
ne.extend(oo);
const hi = {
  date: rn,
  datetime: gr,
  dateTimeLocal: gr
}, gi = "-10px", yi = "-16px", bi = (e) => {
  const { fixedFilterFormat: t } = tt, { item: r, applyValue: a, convert: o } = e, { systemDateTimeFormat: s, stateData: i } = ke(), c = e?.type || "date", p = t[c], m = (d) => {
    const E = ne(d);
    return E.isValid() && E.year() > 1900;
  }, b = s(i.dateTime), u = (d) => {
    if (!(c !== "date" && c !== "datetime" && c !== "dateTimeLocal" || ((x) => typeof x != "string" ? !1 : !ne(x, b, !0).isValid())(d))) {
      if (o) {
        d = ne(d).utc(), a({ ...r, value: d });
        return;
      }
      if (!m(d)) {
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
  }, y = hi[c], h = c === "dateTimeLocal" ? r?.value ? ne(r?.value.$d) : null : r?.value ? ne(r.value) : null;
  return /* @__PURE__ */ n(io, { dateAdapter: lo, children: /* @__PURE__ */ n(
    y,
    {
      fullWidth: !0,
      format: b,
      value: h,
      onChange: u,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: gi,
            marginBottom: yi
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => l(b) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Rt = (e) => Jr().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ n(bi, { ...r, ...e }) : void 0
})), Be = {
  Edit: "Edit",
  Delete: "Delete"
}, xe = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, Ci = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Re, { icon: /* @__PURE__ */ n(De, { title: Be.Edit, children: /* @__PURE__ */ n(mr, {}) }), tabIndex: 1, "data-action": Be.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Re, { icon: /* @__PURE__ */ n(De, { title: Be.Delete, children: /* @__PURE__ */ n(Xr, {}) }), tabIndex: 2, "data-action": Be.Delete, label: "Delete", color: "error" }, 2)] }
], Ei = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, vi = { pageSize: 50, page: 0 }, xi = [5, 10, 20, 50, 100], Di = ({ gridRef: e, onPreferenceChange: t, t: r, tOpts: a }) => {
  const { getApiEndpoint: o } = ke(), s = o("GridPreferenceManager"), i = e.current?.prefKey, c = Zr(), p = Kt(), [m, b] = F(xe.NONE), [u, l] = F(null), [y, h] = F(!1), [d, E] = F({}), [x, S] = F(null), [A, T] = F(null), D = pe(
    () => x == null ? [] : x.filter((I) => I.prefId !== 0),
    [x]
  ), V = pe(() => oe.object({
    prefName: oe.string().trim(!0).required(r("Preference Name is Required")).max(20, r("Maximum Length is ", a) + "20"),
    prefDesc: oe.string().max(100, r("Maximum Length is ", a) + "100")
  }), [r, a]), re = (I) => l(I?.currentTarget), ce = () => l(null), Y = () => {
    b(xe.NONE), ce();
  }, R = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), T(null), t && t(null), ce());
  }, J = de(async ({ applyDefault: I = !1 }) => {
    const B = await kt({
      url: s,
      params: { action: "list", id: i },
      dataParser: Nt.json
    });
    if (!B?.preferences) {
      p.showMessage(r("Failed to load preferences.", a)), t && t(null);
      return;
    }
    const le = B.preferences.filter((ee) => ee.prefName.trim() !== "");
    if (S(le), I) {
      const ee = le.find((ue) => ue.isDefault);
      if (ee)
        return { defaultPrefId: ee.prefId, preferences: le };
      t && t(null);
    }
    return { preferences: le };
  }, [s, i, p, r, a, t]), K = de(async (I, B = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), I === 0) {
      R();
      return;
    }
    const le = B || x;
    if (!le) {
      p.showMessage(r("Preferences not loaded yet.", a));
      return;
    }
    const ee = le.find((ge) => ge.prefId === I);
    if (!ee?.prefValue) {
      p.showMessage(r("Failed to load preference.", a));
      return;
    }
    let ue;
    try {
      ue = typeof ee.prefValue == "string" ? JSON.parse(ee.prefValue) : ee.prefValue;
    } catch {
      p.showMessage(r("Failed to parse preference data.", a));
      return;
    }
    e.current.restoreState(ue), T(ee.prefName), t && t(ee.prefName), ce();
  }, [e, R, x, t, p, r, a]), N = async (I) => {
    const B = I.prefName.trim(), le = B.toLocaleLowerCase();
    if (x.find((ue) => ue.prefName.toLocaleLowerCase() === le && ue.prefId !== I.prefId)) {
      h(!0);
      return;
    }
    const ee = await kt({
      url: s,
      params: {
        action: "save",
        id: i,
        prefId: I.prefId,
        prefName: B,
        prefDesc: I.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: I.isDefault
      },
      dataParser: Nt.json
    });
    if (ee === !0 || ee?.success === !0) {
      p.showMessage(r(`Preference ${m === xe.ADD ? "added" : "saved"} successfully.`, a)), Y(), await J({ applyDefault: !1 });
      return;
    }
    p.showMessage(r("Error saving preference: ", a) + (ee?.message || r("Unknown error", a)));
  }, ae = async () => {
    const I = await kt({
      url: s,
      params: {
        action: "delete",
        id: i,
        prefIdArray: d.prefId
      },
      dataParser: Nt.json
    });
    if (I === !0 || I?.success === !0) {
      p.showMessage(r("Preference deleted successfully.", a)), await J({ applyDefault: !1 }), E({});
      return;
    }
    p.showMessage(r("Error deleting preference: ", a) + (I?.message || r("Unknown error", a)));
  }, q = (I) => {
    const B = I.field === "editAction" ? Be.Edit : I.field === "deleteAction" ? Be.Delete : null;
    if (I.id === 0 && B) {
      p.showMessage(r(`Default preference cannot be ${B === Be.Edit ? "edited" : "deleted"}`, a));
      return;
    }
    B === Be.Edit && (b(xe.EDIT), k.setValues(I?.row)), B === Be.Delete && E({
      prefId: I.id,
      preferenceName: I.row.prefName
    });
  }, $ = (I) => {
    b(I), ce(), I === xe.ADD && k.resetForm();
  }, k = nn({
    initialValues: Ei,
    validationSchema: V,
    onSubmit: N,
    mode: "onBlur"
  });
  se(() => {
    if (!i) return;
    (async () => {
      const B = await J({ applyDefault: !0 });
      B?.defaultPrefId && B?.preferences && await K(B.defaultPrefId, B.preferences);
    })();
  }, [i]);
  const H = m === xe.MANAGE, fe = m === xe.ADD || m === xe.EDIT;
  return /* @__PURE__ */ v(Te, { children: [
    /* @__PURE__ */ v(
      Xe,
      {
        id: "grid-preferences-btn",
        "aria-controls": u ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": u ? "true" : void 0,
        onClick: re,
        title: r("Preference", a),
        startIcon: /* @__PURE__ */ n($r, {}),
        children: [
          r("Preferences", a),
          " ",
          A && `(${A})`
        ]
      }
    ),
    /* @__PURE__ */ v(
      Ra,
      {
        id: "grid-preference-menu",
        anchorEl: u,
        open: !!u,
        onClose: ce,
        component: Ba,
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
          /* @__PURE__ */ n(Dt, { component: dr, dense: !0, onClick: () => $(xe.ADD), children: r("Add Preference", a) }),
          /* @__PURE__ */ v(Dt, { component: dr, dense: !0, onClick: () => $(xe.MANAGE), children: [
            /* @__PURE__ */ n(La, { children: /* @__PURE__ */ n($r, {}) }),
            r("Manage Preferences", a)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ n(Dt, { component: dr, dense: !0, divider: x?.length > 0, onClick: () => K(0), children: r("Reset to Default", a) }),
          x?.length > 0 && x?.map((I) => {
            const { prefName: B, prefDesc: le, prefId: ee } = I;
            return /* @__PURE__ */ n(
              Dt,
              {
                onClick: () => K(ee),
                component: Na,
                selected: A === B,
                title: r(le, a),
                dense: !0,
                children: /* @__PURE__ */ n(ka, { primary: B })
              },
              `pref-item-${ee}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ v(
      Ne,
      {
        open: m !== xe.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ v(we, { variant: "h5", children: [
          m,
          " ",
          r(H ? "Preferences" : "Preference", a)
        ] }),
        maxWidth: H ? "md" : "sm",
        fullWidth: !0,
        children: [
          fe && /* @__PURE__ */ v(
            me,
            {
              component: "form",
              onSubmit: k.handleSubmit,
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
                /* @__PURE__ */ n(me, { size: 12, children: /* @__PURE__ */ n(
                  _t,
                  {
                    value: k.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ v("span", { children: [
                      r("Preference Name", a),
                      " ",
                      /* @__PURE__ */ n("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: k.handleChange,
                    error: !!k.errors.prefName,
                    helperText: k.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(me, { size: 12, children: /* @__PURE__ */ n(
                  _t,
                  {
                    value: k.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: r("Preference Description", a),
                    name: "prefDesc",
                    onChange: k.handleChange,
                    error: !!k.errors.prefDesc,
                    helperText: k.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(me, { size: 12, children: /* @__PURE__ */ n(
                  et,
                  {
                    control: /* @__PURE__ */ n(
                      $a,
                      {
                        checked: k.values.isDefault,
                        name: "isDefault",
                        onChange: k.handleChange
                      }
                    ),
                    label: r("Default", a)
                  }
                ) }),
                /* @__PURE__ */ n(me, { size: 12, children: /* @__PURE__ */ v(Nr, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    Xe,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(so, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: r("Save", a)
                    }
                  ),
                  /* @__PURE__ */ n(
                    Xe,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(hr, {}),
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
          H && /* @__PURE__ */ v(me, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(me, { size: 12, children: /* @__PURE__ */ n(
              Qr,
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
                onCellClick: q,
                columns: Ci,
                pageSizeOptions: xi,
                pagination: !0,
                rowCount: D.length,
                rows: D,
                getRowId: (I) => I.GridPreferenceId,
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
                    paginationModel: vi
                  }
                }
              }
            ) }),
            /* @__PURE__ */ n(me, { size: 12, children: /* @__PURE__ */ n(Nr, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              Xe,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(hr, {}),
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
    /* @__PURE__ */ v(
      Ne,
      {
        open: y,
        onConfirm: () => h(!1),
        title: "",
        okText: r("Ok", a),
        cancelText: "",
        children: [
          '"',
          k.values.prefName.trim(),
          '": ',
          r("name already in use, please use another name.", a)
        ]
      }
    ),
    /* @__PURE__ */ v(
      Ne,
      {
        open: !!d.preferenceName,
        onConfirm: ae,
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
}, Ti = {
  IsAnyOf: "isAnyOf"
}, wi = (e) => {
  const { column: t, item: r, applyValue: a, apiRef: o } = e, s = t?.dataRef?.current?.lookups;
  let i = t.customLookup || s[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: u, value: l }) => ({
    label: u,
    value: l
  })));
  const c = fa(o, ma), p = pe(
    () => c.items?.filter((u) => u.field === t.field),
    [t.field, c.items]
  ), m = de(
    (u) => {
      let l = u.target.value;
      if (c.items.length >= 1) {
        l = l.length === 1 ? l[0] : l;
        for (const d of c.items)
          d.field === r.field && (d.operator === Ti.IsAnyOf ? l = Array.isArray(l) ? l : [l] : l = l === 0 ? "0" : l);
      }
      if (l.length === 0 && p[0]) {
        o.current.deleteFilterItem(p[0]);
        return;
      }
      const y = l, h = p[0] ? p[0] : r;
      a({ ...h, value: y });
    },
    [o, t.applyZeroFilter, p, r, a]
  ), b = p[0]?.value ?? "";
  return /* @__PURE__ */ n(Ht, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    _a,
    {
      label: t.field,
      variant: "standard",
      value: b,
      onChange: (u) => m(u),
      multiple: Array.isArray(b),
      MenuProps: {
        PaperProps: {
          style: {
            height: "fit-content",
            overflow: "hidden"
          }
        }
      },
      children: i?.map((u, l) => /* @__PURE__ */ n(Dt, { value: u.value, children: u.label }, l))
    }
  ) });
}, Si = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((a) => {
  r.lastIndex = 0;
  const o = r.exec(a);
  if (!o) return null;
  const [, s, i = "ASC"] = o;
  return {
    field: s.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), ut = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: a, type: o, isPivotExport: s = !1, icon: i }) => /* @__PURE__ */ v(
  on,
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
), Ai = ({ exportFormats: e, ...t }) => /* @__PURE__ */ v(ha, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(ut, { ...t, icon: /* @__PURE__ */ n(Xa, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(ut, { ...t, icon: /* @__PURE__ */ n(kr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(ut, { ...t, icon: /* @__PURE__ */ n(kr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(ut, { ...t, icon: /* @__PURE__ */ n(eo, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(ut, { ...t, icon: /* @__PURE__ */ n(to, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(ut, { ...t, icon: /* @__PURE__ */ n(ro, { fontSize: "small" }), type: "JSON", contentType: "application/json" })
] }), Oi = (e = {}, t = {}) => {
  let r = !0;
  for (const a in e)
    e[a] !== t[a] && (r = !1);
  for (const a in t)
    a in e || (r = !1);
  return r;
}, Pi = 50, Fi = /(\w+)( ASC| DESC)?/i, Ii = 6e4, be = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, Mi = {
  article: /* @__PURE__ */ n(xa, {})
}, j = {
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
}, Ri = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], Bi = (e) => e.value ? /* @__PURE__ */ n(Ya, { style: { color: "green" } }) : /* @__PURE__ */ n(hr, { style: { color: "gray" } }), Gr = Wt("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), Bt = Wt(Ee)({
  margin: "6px"
}), Li = Wt(ga)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), Ni = ({ params: e, selectedSet: t, handleSelectRow: r, idProperty: a }) => {
  const o = e.row[a], s = t.has(o);
  return /* @__PURE__ */ n(
    an,
    {
      onClick: (c) => {
        c.stopPropagation(), r({ row: e.row });
      },
      checked: s,
      color: "primary",
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, ki = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: a,
    isReadOnly: o,
    canAdd: s,
    forAssignment: i,
    showAddIcon: c,
    onAdd: p,
    selectionApi: m,
    selectedSet: b,
    selectAll: u,
    available: l,
    onAssign: y,
    assigned: h,
    onUnassign: d,
    effectivePermissions: E,
    clearFilters: x,
    handleExport: S,
    preferenceKey: A,
    apiRef: T,
    tTranslate: D,
    tOpts: V,
    filterModel: re,
    onPreferenceChange: ce,
    toolbarItems: Y
  } = e, R = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), J = re?.items?.length || 0;
  return /* @__PURE__ */ v(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px"
      },
      children: [
        /* @__PURE__ */ v("div", { children: [
          t.gridSubTitle && /* @__PURE__ */ v(Tt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            D(t.gridSubTitle, V)
          ] }),
          a && t.showPreferenceInHeader && /* @__PURE__ */ v(Tt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
            D("Applied Preference", V),
            ": ",
            a
          ] }),
          (o || !s && !i) && /* @__PURE__ */ v(Tt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
            " ",
            !s || o ? "" : t.title
          ] }),
          !i && s && !o && /* @__PURE__ */ n(Bt, { startIcon: c ? /* @__PURE__ */ n(Lr, {}) : null, onClick: p, size: "medium", variant: "contained", children: D(R, V) }),
          m.length && r.records.length ? /* @__PURE__ */ n(
            Bt,
            {
              onClick: u,
              size: "medium",
              variant: "contained",
              children: b.size === r.records.length ? D("Deselect All", V) : D("Select All", V)
            }
          ) : /* @__PURE__ */ n(he, {}),
          l && /* @__PURE__ */ n(Bt, { startIcon: c ? /* @__PURE__ */ n(Lr, {}) : null, onClick: y, size: "medium", variant: "contained", children: D("Assign", V) }),
          h && /* @__PURE__ */ n(Bt, { startIcon: c ? /* @__PURE__ */ n(Ta, {}) : null, onClick: d, size: "medium", variant: "contained", children: D("Remove", V) })
        ] }),
        /* @__PURE__ */ v(Li, { ...e, children: [
          E.showColumnsOrder && /* @__PURE__ */ n(
            Ea,
            {
              render: (K) => /* @__PURE__ */ n(
                Ee,
                {
                  ...K,
                  startIcon: /* @__PURE__ */ n(po, {}),
                  size: "small",
                  variant: "text",
                  children: D("COLUMNS", V)
                }
              )
            }
          ),
          E.filter && /* @__PURE__ */ v(he, { children: [
            /* @__PURE__ */ n(
              va,
              {
                render: (K) => /* @__PURE__ */ n(
                  Ee,
                  {
                    ...K,
                    startIcon: /* @__PURE__ */ n(Va, { badgeContent: J, color: "primary", children: /* @__PURE__ */ n(fo, {}) }),
                    size: "small",
                    variant: "text",
                    children: D("FILTERS", V)
                  }
                )
              }
            ),
            /* @__PURE__ */ n(Ee, { startIcon: /* @__PURE__ */ n(Da, {}), onClick: x, size: "small", children: D("CLEAR FILTER", V) })
          ] }),
          E.export && /* @__PURE__ */ n(Ai, { handleExport: S, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: D, tOpts: V }),
          Y,
          A && /* @__PURE__ */ n(
            Di,
            {
              gridRef: T,
              onPreferenceChange: ce,
              t: D,
              tOpts: V
            }
          )
        ] })
      ]
    }
  );
}, Ur = Yr(({
  model: e,
  columns: t,
  api: r,
  defaultSort: a,
  setActiveRecord: o,
  parentFilters: s,
  parent: i,
  where: c,
  title: p,
  showPageTitle: m,
  permissions: b,
  selected: u,
  assigned: l,
  available: y,
  disableCellRedirect: h = !1,
  onAssignChange: d,
  customStyle: E,
  onCellClick: x,
  showRowsSelected: S,
  showFullScreenLoader: A,
  customFilters: T,
  onRowDoubleClick: D,
  onRowClick: V = () => {
  },
  gridStyle: re,
  reRenderKey: ce,
  additionalFilters: Y,
  onCellDoubleClickOverride: R,
  onAddOverride: J,
  dynamicColumns: K,
  toolbarItems: N,
  readOnly: ae = !1,
  onListParamsChange: q,
  apiRef: $,
  baseFilters: k,
  ...H
}) => {
  const [fe, I] = F({ pageSize: Pi, page: 0 }), [B, le] = F({ recordCount: 0, records: [], lookups: {} }), [ee, ue] = F(!0), ge = !!d, wt = S, [$e, _e] = F([]), [mt, qe] = F(!1), [Ve, Yt] = F(null), Jt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [St, ve] = F(!1), ie = Kt(), ht = e.paginationMode === j.client ? j.client : j.server, { t: At, i18n: Pe } = en(), f = { t: At, i18n: Pe }, [at, Ot] = F(""), [gt, Zt] = F(Si(a || e.defaultSort, j, Fi)), ot = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (ot.items = [], e.defaultFilters.forEach((C) => {
    ot.items.push(C);
  }));
  const [ze, Ke] = F({ ...ot }), { navigate: ye, getParams: Qt, useParams: Xt, pathname: it } = Dr(), { id: er } = Xt() || Qt, _ = er?.split("-")[0], te = $ || Zr(), { idProperty: G = "id", showHeaderFilters: Fe = !0, disableRowSelectionOnClick: Ge = !0, hideTopFilters: lt = !0, updatePageTitle: tr = !0, isElasticScreen: Ue = !1, navigateBack: Pt = !1, selectionApi: Ye = {} } = e, Je = e.readOnly === !0 || ae, En = e.allowDoubleClick === !1, rr = Kr(B), vn = e.showAddIcon === !0, Tr = e.columns.filter(({ link: C }) => !!C).map((C) => C.link), { stateData: yt, dispatchData: Ze, formatDate: nr, getApiEndpoint: ar, buildUrl: or } = ke(), { timeZone: ir } = yt, bt = { ...j.permissions, ...e.permissions, ...b }, xn = ["isEmpty", "isNotEmpty", "isAnyOf"], Dn = yt.getUserData || {}, lr = e.columns.find((C) => C.type === "fileUpload")?.field || "", Tn = { add: bt.add, edit: bt.edit, delete: bt.delete }, { canAdd: wn, canEdit: wr, canDelete: Sn } = hn({ userData: Dn, model: e, userDefinedPermissions: Tn }), g = e.tTranslate ?? ((C) => C), { addUrlParamKey: Ft, searchParamKey: Ct, hideBreadcrumb: An = !1, tableName: Sr, showHistory: On = !0, hideBreadcrumbInGrid: Pn = !1, breadcrumbColor: Fn, disablePivoting: In = !1, columnHeaderHeight: Mn = 70 } = e, Ar = e.gridTitle || e.title, It = ar("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, je = new URLSearchParams(window.location.search), [Rn, Bn] = F(null), [Or, Ln] = F(!It), Qe = r || e.api;
  se(() => {
    te.current && (te.current.prefKey = It);
  }, [te, It]);
  const Nn = (C) => {
    Bn(C), Ln(!0);
  }, sr = je.has("baseData") && je.get("baseData"), kn = pe(() => {
    if (sr)
      try {
        const C = JSON.parse(sr);
        if (typeof C === j.object && C !== null)
          return C;
      } catch (C) {
        console.error("Failed to parse baseData from URL:", C);
      }
    return {};
  }, [sr]), [Se, st] = F(/* @__PURE__ */ new Set()), $n = de(({ row: C }) => {
    const w = C[G];
    st((P) => {
      const O = new Set(P);
      return O.has(w) ? O.delete(w) : O.add(w), _e(Array.from(O)), O;
    });
  }, [G, st, _e]), cr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (C) => nr({ value: C, useSystemFormat: !0, showOnlyDate: !1, state: yt.dateTime, timeZone: ir }),
      filterOperators: Rt({ columnType: "date", label: g("Value", f) })
    },
    dateTime: {
      valueFormatter: (C) => nr({ value: C, useSystemFormat: !1, showOnlyDate: !1, state: yt.dateTime, timeZone: ir }),
      filterOperators: Rt({ columnType: "datetime", label: g("Value", f) })
    },
    dateTimeLocal: {
      valueFormatter: (C) => nr({ value: C, useSystemFormat: !1, showOnlyDate: !1, state: yt.dateTime, timeZone: ir }),
      filterOperators: Rt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: Bi
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (C) => /* @__PURE__ */ n(Ni, { params: C, selectedSet: Se, handleSelectRow: $n, idProperty: G })
    }
  };
  se(() => {
    rr.current = B;
  }, [B]), se(() => {
    if (!T || !Object.keys(T).length) return;
    if (T.clear) {
      Ke({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const C = Object.entries(T).reduce((w, [P, O]) => (P === j.startDate || P === j.endDate ? w.push(O) : P in T && w.push({ field: P, value: O, operator: "equals", type: "string" }), w), []);
    Ke({ items: C, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [T]);
  const _n = de(({ field: C, lookupMap: w }) => (rr.current.lookups || {})[(w || {})[C]?.lookup] || [], []);
  se(() => {
    H.isChildGrid || !lt || Ze({
      type: Z.PASS_FILTERS_TO_HEADER,
      payload: {
        filterButton: null,
        hidden: { search: !0, operation: !0, export: !0, print: !0, filter: !0 }
      }
    });
  }, []);
  const { customActions: Mt = [] } = e, { gridColumns: Ie, pinnedColumns: Vn, lookupMap: ur } = pe(() => {
    let C = t || e.gridColumns || e.columns;
    K && (C = [...K, ...C]);
    const w = { left: [ya.field], right: [] }, P = [], O = {};
    for (const L of C) {
      if (L.gridLabel === null || i && L.lookup === i || L.type === j.oneToMany && L.countInList === !1) continue;
      const U = {};
      if (L.type === j.oneToMany && (U.type = "number", U.field = L.field.replace(/s$/, "Count")), cr[L.type] && Object.assign(U, cr[L.type]), U.valueOptions === j.lookup || L.type === j.boolean) {
        let z = [];
        U.valueOptions === j.lookup && (U.valueOptions = (Me) => _n({ ...Me, lookupMap: O }), z = [...Jr(), ...ba()].filter((Me) => ["is", "not", "isAnyOf"].includes(Me.value))), L.type === j.boolean && (z = Ca()), U.filterOperators = z.map((X) => ({
          ...X,
          InputComponent: X.InputComponent ? (Me) => /* @__PURE__ */ n(
            wi,
            {
              column: {
                ...L,
                ...L.type === j.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: rr
              },
              ...Me,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (L.linkTo || L.link) && (U.cellClassName = "mui-grid-linkColumn");
      const Q = g(L.gridLabel || L.label, f);
      P.push({ ...L, ...U, headerName: Q, description: Q }), L.pinned && w[L.pinned === j.right ? j.right : j.left].push(L.field), O[L.field] = L;
    }
    let M = e.standard;
    M === !0 && (M = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), M && typeof M === j.object && Ri.forEach(({ key: L, field: U, type: Q, header: z }) => {
      if (M[L] === !0) {
        const X = { field: U, type: Q, headerName: g(z, f), width: 200 };
        Q === j.dateTime && (X.filterOperators = Rt({ columnType: "date" }), X.valueFormatter = cr.dateTime.valueFormatter, X.keepLocal = !0), P.push(X);
      }
    });
    const W = [];
    return !ge && !Je && (wr && W.push(/* @__PURE__ */ n(Re, { icon: /* @__PURE__ */ n(De, { title: "Edit", children: /* @__PURE__ */ n(mr, {}) }), "data-action": be.Edit, label: "Edit", color: "primary" })), bt.copy && W.push(/* @__PURE__ */ n(Re, { icon: /* @__PURE__ */ v(De, { title: "Copy", children: [
      /* @__PURE__ */ n(Br, {}),
      " "
    ] }), "data-action": be.Copy, label: "Copy", color: "primary" })), Sn && W.push(/* @__PURE__ */ n(Re, { icon: /* @__PURE__ */ v(De, { title: "Delete", children: [
      /* @__PURE__ */ n(Xr, {}),
      " "
    ] }), "data-action": be.Delete, label: "Delete", color: "error" })), On && W.push(/* @__PURE__ */ n(Re, { icon: /* @__PURE__ */ v(De, { title: "History", children: [
      /* @__PURE__ */ n(co, {}),
      " "
    ] }), "data-action": be.History, label: "History", color: "primary" })), Mt.length && Mt.forEach(({ icon: L, action: U, color: Q }) => {
      W.push(
        /* @__PURE__ */ n(
          Re,
          {
            icon: /* @__PURE__ */ n(De, { title: U, children: Mi[L] || /* @__PURE__ */ n(Br, {}) }),
            "data-action": U,
            label: U,
            color: Q || "primary"
          }
        )
      );
    })), lr.length && W.push(/* @__PURE__ */ n(Re, { icon: /* @__PURE__ */ v(De, { title: "Download document", children: [
      /* @__PURE__ */ n(uo, {}),
      " "
    ] }), "data-action": be.Download, label: "Download document", color: "primary" })), W.length && P.push({
      field: "actions",
      type: "actions",
      label: "",
      width: W.length * 50,
      hidable: !1,
      getActions: (L) => {
        const U = [...W];
        if (wr && !Je) {
          const Q = L.row.canEdit === !1;
          U[0] = /* @__PURE__ */ n(
            Re,
            {
              icon: /* @__PURE__ */ n(De, { title: "Edit", children: /* @__PURE__ */ n(mr, {}) }),
              "data-action": be.Edit,
              label: "Edit",
              color: "primary",
              disabled: Q
            }
          );
        }
        return U;
      }
    }), w.right.push("actions"), { gridColumns: P, pinnedColumns: w, lookupMap: O };
  }, [t, e, i, b, ge, K, At]), Et = (C = "list", w = {}, P, O, M, W) => {
    const { pageSize: L, page: U } = fe, Q = or(e.controllerType, M ? e.pivotApi : Qe);
    (l || y) && (w[l ? "include" : "exclude"] = Array.isArray(u) ? u.join(",") : u);
    const z = { ...ze }, X = Array.isArray(k) ? [...k] : [];
    if (e.joinColumn && _ && X.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(_) }), Y && (z.items = [...z.items || [], ...Y]), w = { ...w, ...H.extraParams }, !(!z.items.length || z.items.every((Rr) => "value" in Rr && Rr.value !== void 0))) return;
    const vt = {
      action: C,
      page: P ? 0 : U,
      pageSize: P ? 1e6 : L,
      sortModel: gt,
      filterModel: z,
      controllerType: e.controllerType,
      api: Q,
      gridColumns: Ie,
      model: e,
      parentFilters: s,
      extraParams: w,
      contentType: P,
      columns: O,
      template: M ? e.exportTemplate : null,
      configFileName: M ? e.configFileName : null,
      baseFilters: X,
      isElasticExport: W
    };
    return typeof q == "function" && q(vt), te.current.listParams = vt, dn({
      ...vt,
      setError: ie.showError,
      setIsLoading: ue,
      setData: le,
      dispatchData: Ze,
      showFullScreenLoader: A,
      history: ye
    });
  }, ct = de(({ id: C, record: w = {}, mode: P }) => {
    if (o) {
      zt({ id: C, api: Qe, setIsLoading: ue, setActiveRecord: o, model: e, parentFilters: s, where: c });
      return;
    }
    let O = it;
    O.endsWith("/") || (O += "/"), P === "copy" ? (O += "0-" + C, Ze({ type: "UPDATE_FORM_MODE", payload: "copy" })) : (O += C, Ze({ type: "UPDATE_FORM_MODE", payload: "" })), Ft && (je.set(Ft, w[Ft]), O += `?${je.toString()}`), ye(O);
  }, [o, Qe, e, s, c, it, Ft, je, ye, Ze, zt]), Pr = de(({ documentLink: C }) => {
    C && window.open(C, "_blank");
  }, []), zn = de(async (C, w, P) => {
    let O = C.field === e.linkColumn ? be.Edit : null;
    if (!O && C.field === j.actions && (O = P?.action, !O)) {
      const Q = w.target.closest("button");
      Q && (O = Q.dataset.action);
    }
    const { row: M } = C;
    if (!Je) {
      if (x && typeof await x({ cellParams: C, event: w, details: P }) !== j.boolean)
        return;
      const Q = ur[C.field] || {};
      if (Q.linkTo) {
        ye({
          pathname: fr.replaceTags(Q.linkTo, M)
        });
        return;
      }
      switch (O) {
        case be.Edit:
          return ct({ id: M[G], record: M });
        case be.Copy:
          return ct({ id: M[G], mode: "copy" });
        case be.Delete:
          qe(!0), Yt({ name: M[e.linkColumn], id: M[G] });
          break;
        case be.History:
          return ye(`${ar("history")}?tableName=${Sr}&id=${M[G]}&breadCrumb=${Ct ? je.get(Ct) : Ar}`);
        default:
          const z = Mt.find((X) => X.action === O && typeof X.onClick === j.function);
          if (z) {
            z.onClick({ row: M, navigate: ye });
            return;
          }
          break;
      }
    }
    if (O === be.Download && Pr({ documentLink: M[lr] }), !Tr.length)
      return;
    const { row: W } = C, L = ur[C.field] || {}, U = {
      pathname: fr.replaceTags(L.linkTo, W)
    };
    e.addRecordToState && (U.state = W), ye(U);
  }, [Je, x, ur, e, G, lr, ye, Tr, Mt, Sr, Ct, je, Ar, ar, Pr, ct]), Gn = async function() {
    const C = or(e.controllerType, Qe);
    await vr({ id: Ve.id, api: C, setIsLoading: ue, setError: ie.showError, setErrorMessage: Ot }) === !0 ? (qe(!1), ie.showMessage("Record Deleted Successfully."), Et()) : qe(!1);
  }, Fr = () => {
    Ot(null), qe(!1);
  }, Un = (C) => (typeof H.processRowUpdate == "function" && H.processRowUpdate(C, B), C), jn = (C) => {
    if (C.row.canEdit === !1)
      return;
    const { row: w } = C;
    if (typeof R === j.function) {
      R(C);
      return;
    }
    if (!Je && !En && !h && ct({ id: w[G], record: w }), Je && e.rowRedirectLink) {
      const P = {
        pathname: fr.replaceTags(e.rowRedirectLink, w)
      };
      e.addRecordToState && (P.state = w), ye(P);
    }
    typeof D === j.function && D(C);
  }, Hn = async () => {
    if (Se.size < 1) {
      ie.showError("Please select at least one record to proceed");
      return;
    }
    const C = Array.from(Se), w = new Map(B.records.map((M) => [M[G], M]));
    let P = C.map((M) => ({ ...kn, ...w.get(M) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (P = P.map(
      (M) => Object.fromEntries(e.selectionUpdateKeys.map((W) => [W, M[W]]))
    ));
    const O = or(e.controllerType, Qe);
    try {
      const M = await xr({
        id: 0,
        api: `${O}${Ye || r}/updateMany`,
        values: { items: P },
        setIsLoading: ue,
        setError: ie.showError
      });
      if (M) {
        Et();
        const W = M.info ? M.info : "Record Added Successfully.";
        ie.showMessage(W);
      }
    } catch (M) {
      ie.showError(M.message || "An error occurred, please try again later.");
    } finally {
      st(/* @__PURE__ */ new Set()), ue(!1), ve(!1);
    }
  }, Wn = de(() => {
    if (Ye.length > 0) {
      if (Se.size) {
        ve(!0);
        return;
      }
      ie.showError(
        "Please select at least one record to proceed"
      ), ue(!1);
      return;
    }
    typeof J === j.function ? J() : ct({ id: 0 });
  }, [Ye, Se.size, ie, J, ct]), qn = de(() => {
    ze?.items?.length && Ke({ ...j.gridFilterModel });
  }, [ze]), Ir = ({ unassign: C, assign: w }) => {
    const P = Array.isArray(u) ? u : u.length ? u.split(",") : [], O = C ? P.filter((M) => !C.includes(parseInt(M))) : [...P, ...w];
    d(typeof u === j.string ? O.join(",") : O);
  }, Kn = () => {
    Ir({ assign: $e });
  }, Yn = () => {
    Ir({ unassign: $e });
  }, Jn = de(() => {
    if (Se.size === B.records.length)
      st(/* @__PURE__ */ new Set()), _e([]);
    else {
      const C = B.records.map((w) => w[G]);
      st(new Set(C)), _e(C);
    }
  }, [Se.size, B.records, G, _e, st]), Zn = (C) => C[G], Qn = de((C) => {
    if (B?.recordCount > Ii) {
      ie.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: w, columnVisibilityModel: P, lookup: O } = te.current.state.columns, M = C.target.dataset.isPivotExport === "true", W = Object.keys(P).filter((z) => P[z] === !1), L = new Set(Ie.filter((z) => z.exportable === !1).map((z) => z.field)), U = w.filter(
      (z) => !L.has(z) && !W.includes(z) && z !== "__check__" && z !== "actions"
    );
    if (U.length === 0) {
      ie.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const Q = {};
    U.forEach((z) => {
      const X = O[z];
      Q[z] = { field: z, width: X.width, headerName: X.headerName || X.field, type: X.type, keepLocal: X.keepLocal === !0, isParsable: X.isParsable, lookup: X.lookup };
    }), Et(
      M ? "export" : void 0,
      void 0,
      C.target.dataset.contentType,
      Q,
      M,
      Ue
    );
  }, [B?.recordCount, te, Ie, ie, Et, Ue]);
  se(() => {
    !Qe || !Or || Et();
  }, [fe, e, l, y, u, ze, _, Y, H.extraParams, gt, Qe, Ie, s, Ue, Or, k]), se(() => {
    if (!(H.isChildGrid || ge || !tr))
      return Ze({ type: Z.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: e.pageTitle || e.title, title: e.title } }), () => {
        Ze({
          type: Z.PAGE_TITLE_DETAILS,
          payload: null
        });
      };
  }, []);
  const Xn = (C) => {
    const { items: w } = C, P = w.map((O) => {
      const { field: M, operator: W, type: L, value: U } = O, Q = Ie.find((Me) => Me.field === M) || {}, z = Q.type === j.number;
      return z && U < 0 ? { ...O, value: null } : xn.includes(W) || z && !isNaN(U) || !z ? (Ue && Ie.filter((vt) => vt.field === M)[0]?.isKeywordField && (O.filterField = `${O.field}.keyword`), O.value = ["isEmpty", "isNotEmpty"].includes(W) ? null : U, { ...O, type: Q.type }) : { field: M, operator: W, type: L, value: z ? null : U };
    });
    C.items = P, Ke(C);
  }, ea = (C) => {
    const w = C.map((P) => {
      const O = Ie.filter((L) => L.field === P.field)[0] || {}, M = Ue && O.isKeywordField, W = { ...P, filterField: M ? `${P.field}.keyword` : P.field };
      return O.dataIndex && (W.filterField = O.dataIndex), W;
    });
    Zt(w);
  }, Mr = p || e.gridTitle || e.title, ta = Ct ? [{ text: je.get(Ct) || Mr }] : [{ text: Mr }];
  return /* @__PURE__ */ v(he, { children: [
    m !== !1 && /* @__PURE__ */ n(
      mn,
      {
        navigate: ye,
        showBreadcrumbs: !An && !Pn,
        breadcrumbs: ta,
        enableBackButton: Pt,
        breadcrumbColor: Fn
      }
    ),
    /* @__PURE__ */ v(Te, { style: re || E, children: [
      /* @__PURE__ */ n(Te, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        Qr,
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
          headerFilters: Fe,
          unstable_headerFilters: Fe,
          checkboxSelection: ge,
          loading: ee,
          className: "pagination-fix",
          onCellClick: zn,
          onCellDoubleClick: jn,
          columns: Ie,
          paginationModel: fe,
          pageSizeOptions: j.pageSizeOptions,
          onPaginationModelChange: I,
          pagination: !0,
          rowCount: B.recordCount,
          rows: B.records,
          sortModel: gt,
          paginationMode: ht,
          sortingMode: ht,
          filterMode: ht,
          processRowUpdate: Un,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: ea,
          onFilterModelChange: Xn,
          rowSelection: $e,
          onRowSelectionModelChange: _e,
          filterModel: ze,
          getRowId: Zn,
          onRowClick: V,
          slots: {
            headerFilterMenu: !1,
            toolbar: ki,
            footer: Uo
          },
          slotProps: {
            toolbar: {
              model: e,
              data: B,
              currentPreference: Rn,
              isReadOnly: Je,
              canAdd: wn,
              forAssignment: ge,
              showAddIcon: vn,
              onAdd: Wn,
              selectionApi: Ye,
              selectedSet: Se,
              selectAll: Jn,
              available: y,
              onAssign: Kn,
              assigned: l,
              onUnassign: Yn,
              effectivePermissions: bt,
              clearFilters: qn,
              handleExport: Qn,
              preferenceKey: It,
              apiRef: te,
              gridColumns: Ie,
              tTranslate: g,
              tOpts: f,
              idProperty: G,
              filterModel: ze,
              onPreferenceChange: Nn,
              toolbarItems: N
            },
            footer: {
              pagination: !0,
              apiRef: te,
              tTranslate: g,
              tOpts: f
            },
            panel: {
              placement: "bottom-end"
            }
          },
          hideFooterSelectedRowCount: wt,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: te,
          disableAggregation: !0,
          disableRowGrouping: !0,
          disableRowSelectionOnClick: Ge,
          disablePivoting: In,
          initialState: {
            columns: {
              columnVisibilityModel: Jt
            },
            pinnedColumns: Vn
          },
          localeText: {
            filterValueTrue: g("Yes", f),
            filterValueFalse: g("No", f),
            noRowsLabel: g("No data", f),
            footerTotalRows: `${g("Total rows", f)}:`,
            MuiTablePagination: {
              labelRowsPerPage: g("Rows per page", f),
              labelDisplayedRows: ({ from: C, to: w, count: P }) => `${C}–${w} ${g("of", f)} ${P}`
            },
            toolbarQuickFilterPlaceholder: g(e?.searchPlaceholder || "Search...", f),
            toolbarColumns: g("Columns", f),
            toolbarFilters: g("Filters", f),
            toolbarExport: g("Export", f),
            filterPanelAddFilter: g("Add filter", f),
            filterPanelRemoveAll: g("Remove all", f),
            filterPanelDeleteIconLabel: g("Delete", f),
            filterPanelColumns: g("Columns", f),
            filterPanelOperator: g("Operator", f),
            filterPanelValue: g("Value", f),
            filterPanelInputLabel: g("Value", f),
            filterPanelInputPlaceholder: g("Filter value", f),
            columnMenuLabel: g("Menu", f),
            columnMenuShowColumns: g("Show columns", f),
            columnMenuManageColumns: g("Manage columns", f),
            columnMenuFilter: g("Filter", f),
            columnMenuHideColumn: g("Hide column", f),
            columnMenuManagePivot: g("Manage pivot", f),
            toolbarColumnsLabel: g("Select columns", f),
            toolbarExportLabel: g("Export", f),
            pivotDragToColumns: g("Drag here to pivot by", f),
            pivotDragToRows: g("Drag here to group by", f),
            pivotDragToValues: g("Drag here to create values", f),
            pivotColumns: g("Pivot columns", f),
            pivotRows: g("Row groups", f),
            pivotValues: g("Values", f),
            pivotMenuRows: g("Rows", f),
            pivotMenuColumns: g("Columns", f),
            pivotMenuValues: g("Values", f),
            pivotToggleLabel: g("Pivot", f),
            pivotSearchControlPlaceholder: g("Search pivot columns", f),
            columnMenuUnsort: g("Unsort", f),
            columnMenuSortAsc: g("Sort by ascending", f),
            columnMenuSortDesc: g("Sort by descending", f),
            columnMenuUnpin: g("Unpin", f),
            columnsPanelTextFieldLabel: g("Find column", f),
            columnsPanelTextFieldPlaceholder: g("Column title", f),
            columnsPanelHideAllButton: g("Hide all", f),
            columnsPanelShowAllButton: g("Show all", f),
            pinToLeft: g("Pin to left", f),
            pinToRight: g("Pin to right", f),
            unpin: g("Unpin", f),
            filterValueAny: g("any", f),
            filterOperatorIs: g("is", f),
            filterOperatorNot: g("is not", f),
            filterOperatorIsAnyOf: g("is any of", f),
            filterOperatorContains: g("contains", f),
            filterOperatorDoesNotContain: g("does not contain", f),
            filterOperatorEquals: g("equals", f),
            filterOperatorDoesNotEqual: g("does not equal", f),
            filterOperatorStartsWith: g("starts with", f),
            filterOperatorEndsWith: g("ends with", f),
            filterOperatorIsEmpty: g("is empty", f),
            filterOperatorIsNotEmpty: g("is not empty", f),
            filterOperatorAfter: g("is after", f),
            filterOperatorOnOrAfter: g("is on or after", f),
            filterOperatorBefore: g("is before", f),
            filterOperatorOnOrBefore: g("is on or before", f),
            toolbarFiltersTooltipHide: g("Hide filters", f),
            toolbarFiltersTooltipShow: g("Show filters", f),
            //filter textfield labels
            headerFilterOperatorContains: g("contains", f),
            headerFilterOperatorEquals: g("equals", f),
            headerFilterOperatorStartsWith: g("starts with", f),
            headerFilterOperatorEndsWith: g("ends with", f),
            headerFilterOperatorIsEmpty: g("is empty", f),
            headerFilterOperatorIsNotEmpty: g("is not empty", f),
            headerFilterOperatorAfter: g("is after", f),
            headerFilterOperatorOnOrAfter: g("is on or after", f),
            headerFilterOperatorBefore: g("is before", f),
            headerFilterOperatorOnOrBefore: g("is on or before", f),
            headerFilterOperatorIs: g("is", f),
            "headerFilterOperator=": g("equals", f),
            "headerFilterOperator!=": g("does not equal", f),
            "headerFilterOperator>": g("greater than", f),
            "headerFilterOperator>=": g("greater than or equal to", f),
            "headerFilterOperator<": g("less than", f),
            "headerFilterOperator<=": g("less than or equal to", f),
            columnsManagementSearchTitle: g("Search", f),
            columnsManagementNoColumns: g("No columns", f),
            paginationRowsPerPage: g("Rows per page", f),
            paginationDisplayedRows: ({ from: C, to: w, count: P }) => `${C}–${w} ${g("of", f)} ${P}`,
            toolbarQuickFilterLabel: g("Search", f),
            toolbarFiltersTooltipActive: (C) => `${C} ${g(C === 1 ? "active filter" : "active filters", f)}`,
            columnHeaderSortIconLabel: g("Sort", f),
            filterPanelOperatorAnd: g("And", f),
            filterPanelOperatorOr: g("Or", f),
            noResultsOverlayLabel: g("No results found", f),
            columnHeaderFiltersTooltipActive: (C) => `${C} ${g(C === 1 ? "active filter" : "active filters", f)}`,
            detailPanelToggle: g("Detail panel toggle", f),
            checkboxSelectionHeaderName: g("Checkbox selection", f),
            columnsManagementShowHideAllText: g("Show/Hide all", f),
            noColumnsOverlayLabel: g("No columns", f),
            noColumnsOverlayManageColumns: g("Manage columns", f),
            columnsManagementReset: g("Reset", f),
            groupColumn: (C) => `${g("Group by", f)} ${C}`,
            unGroupColumn: (C) => `${g("Ungroup", f)} ${C}`,
            footerRowSelected: (C) => {
              const w = C === 1 ? "item selected" : "items selected";
              return `${C.toLocaleString()} ${g(w, f)}`;
            }
          },
          showToolbar: !0,
          columnHeaderHeight: Mn
        }
      ) }),
      at && /* @__PURE__ */ v(Ne, { open: !!at, onConfirm: Fr, onCancel: Fr, title: "Info", hideCancelButton: !0, children: [
        " ",
        at
      ] }),
      mt && !at && /* @__PURE__ */ n(Ne, { open: mt, onConfirm: Gn, onCancel: () => qe(!1), title: "Confirm Delete", children: /* @__PURE__ */ v(Gr, { children: [
        g("Are you sure you want to delete", f),
        " ",
        Ve.name && /* @__PURE__ */ n(De, { style: { display: "inline" }, title: Ve.name, arrow: !0, children: Ve.name.length > 30 ? `${Ve.name.slice(0, 30)}...` : Ve.name }),
        " ?"
      ] }) }),
      St && /* @__PURE__ */ n(
        Ne,
        {
          open: St,
          onConfirm: Hn,
          onCancel: () => ve(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ v(Gr, { children: [
            g("Are you sure you want to add", f),
            " ",
            Se.size,
            " ",
            g("records", { count: Se.size, ...f }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, Oi), $i = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const o = (c) => {
    r.setFieldValue(t, c.target.checked);
  }, s = pe(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(
      yo,
      {
        control: /* @__PURE__ */ n(
          an,
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
    /* @__PURE__ */ n(rt, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, yr = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const o = ft(), s = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
    jt,
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
function gn(e, t) {
  const [r, a] = F(e);
  return se(() => {
    const o = setTimeout(() => {
      a(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}
const jr = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, _i = {
  outlined: Ua,
  filled: Ga,
  standard: za
}, Vi = () => /* @__PURE__ */ v(
  tn,
  {
    position: "end",
    sx: {
      flexDirection: "column",
      maxHeight: "unset",
      alignSelf: "stretch",
      ml: 0,
      "& button": {
        py: 0,
        flex: 1,
        borderRadius: 0.5
      }
    },
    children: [
      /* @__PURE__ */ n(
        Vt.Increment,
        {
          render: /* @__PURE__ */ n($t, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ n(
            bo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        Vt.Decrement,
        {
          render: /* @__PURE__ */ n($t, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ n(
            ln,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), zi = ({ column: e, otherProps: t, formik: r, field: a, ...o }) => {
  const { min: s, max: i, readOnly: c } = e, p = ft(), m = pe(
    () => jr({ value: s, state: r.values }),
    [s, r.values]
  ), b = pe(
    () => jr({ value: i, state: r.values }),
    [i, r.values]
  ), u = pe(() => r.values[a] ?? null, [r.values[a]]), [l, y] = F(u), h = gn(l, 400);
  se(() => {
    h !== u && r.setFieldValue(a, h);
  }, [h]), se(() => {
    u !== l && y(u);
  }, [u]);
  const d = (D) => {
    y(D);
  }, E = (D) => {
    r.setFieldTouched(a, !0), typeof o.onBlur == "function" && o.onBlur(D);
  }, x = na(), S = `number-field-${a}-${x}`, A = e.variant || "standard", T = _i[A];
  return /* @__PURE__ */ v(
    Vt.Root,
    {
      value: l,
      onValueChange: d,
      min: m,
      max: b,
      disabled: c,
      render: (D, V) => /* @__PURE__ */ n(
        Ht,
        {
          fullWidth: !0,
          ref: D.ref,
          error: r.touched[a] && !!r.errors[a],
          sx: c ? {
            backgroundColor: p.palette?.action?.disabled
          } : void 0,
          children: D.children
        }
      ),
      children: [
        /* @__PURE__ */ n(
          Vt.Input,
          {
            render: (D, V) => /* @__PURE__ */ n(
              T,
              {
                id: S,
                inputRef: D.ref,
                value: V.inputValue,
                onChange: D.onChange,
                onBlur: (re) => {
                  D.onBlur(re), E(re);
                },
                inputProps: {
                  ...D,
                  "aria-describedby": r.touched[a] && r.errors[a] ? `${S}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ n(Vi, {}),
                sx: { pr: 0 },
                ...t
              }
            )
          }
        ),
        r.touched[a] && r.errors[a] && /* @__PURE__ */ v(rt, { id: `${S}-error`, error: !0, children: [
          " ",
          r.errors[a],
          " "
        ] })
      ]
    }
  );
}, Gi = ({ otherProps: e, ...t }) => {
  const [r, a] = pt.useState(!1), o = () => a((p) => !p), s = (p) => {
    p.preventDefault();
  }, { readOnly: i = !1, disabled: c = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: c,
      endAdornment: /* @__PURE__ */ n(tn, { position: "end", children: /* @__PURE__ */ n(
        $t,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: s,
          edge: "end",
          disabled: c,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ n(Co, {}) : /* @__PURE__ */ n(Eo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(yr, { otherProps: e, ...t });
}, Ui = ({ column: e, field: t, formik: r, otherProps: a, fieldConfigs: o = {}, mode: s }) => {
  const i = s !== "copy" && o.disabled, { systemDateTimeFormat: c, stateData: p } = ke();
  return /* @__PURE__ */ Cr(
    rn,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: c(!0, !1, p.dateTime),
      name: t,
      value: ne(r.values[t]),
      onChange: (m) => {
        const u = ne(m).hour(12).toISOString();
        r.setFieldValue(t, u);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: e.min ? ne(e.min) : null,
      maxDate: e.max ? ne(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, ji = ({ column: e, field: t, formik: r, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: s } = ke();
  return /* @__PURE__ */ Cr(
    gr,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: o(!1, !1, s.dateTime),
      name: t,
      value: ne(r.values[t]),
      onChange: (i) => r.setFieldValue(t, i),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDateTime: e.min ? ne(e.min) : null,
      maxDateTime: e.max ? ne(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Hi = ({ column: e, field: t, formik: r, otherProps: a }) => {
  let o = r.values[t];
  return e.isUtc && (o = ne.utc(o).utcOffset(ne().utcOffset(), !0).format()), /* @__PURE__ */ Cr(
    vo,
    {
      ...a,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: ne(o),
      onChange: (s) => (e.isUtc && (s = s && s.isValid() ? s.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, s)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Wi = [null, void 0, ""];
function yn({ column: e, formik: t, lookups: r, dependsOn: a = [], isAutoComplete: o = !1, userSelected: s, model: i }) {
  const [c, p] = F([]), { stateData: m } = ke(), b = m?.gridSettings?.permissions?.Url || "", u = pe(() => `${b}${i?.api || ""}`, [b, i?.api]), l = pe(() => {
    const d = {};
    if (!a.length) return d;
    for (const E of a)
      d[E] = t.values[E];
    return d;
  }, a.map((d) => t.values[d])), y = pe(() => a.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, a]), h = async () => {
    if (!e.lookup) return;
    if (!Object.values(l).every(
      (S) => !Wi.includes(S)
    )) {
      p([]);
      return;
    }
    let E = [];
    const x = {
      lookups: [{ lookup: e.lookup, where: l }]
    };
    try {
      const S = await kt({ url: `${u}/combo`, params: x, disableLoader: !0, jsonPayload: !0 });
      S && S.success && S.lookups ? E = S.lookups[e.lookup] || [] : E = [];
    } catch {
      E = [];
    } finally {
      p(E);
    }
  };
  return se(() => {
    a.length ? h() : (o || !s.current) && p(y);
  }, [l, y, u, e.lookup]), c;
}
const qi = pt.memo(({ column: e, field: t, formik: r, lookups: a, dependsOn: o = [], model: s, ...i }) => {
  const c = pt.useRef(!1), { placeHolder: p } = e, m = yn({ column: e, formik: r, lookups: a, dependsOn: o, userSelected: c, model: s }), b = ft(), u = pe(() => {
    let y = r.values[t];
    if (m?.length && !y && !e.multiSelect && "IsDefault" in m[0]) {
      const h = m.find((d) => d.IsDefault);
      h && (y = h.value, r.setFieldValue(t, h.value));
    }
    return e.multiSelect && (!y || y.length === 0 ? y = [] : Array.isArray(y) || (y = y.split(",").map((h) => parseInt(h)))), y;
  }, [r.values[t], m, e.multiSelect, t]), l = de((y) => {
    r.handleChange(y), c.current = !0;
  }, [r]);
  return /* @__PURE__ */ v(
    qt,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(xo, { children: p || "" }),
        /* @__PURE__ */ n(
          Do,
          {
            IconComponent: ln,
            ...i,
            name: t,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${u}`,
            onChange: l,
            onBlur: r.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? b.palette?.action?.disabled : ""
            },
            children: Array.isArray(m) && m.map((y) => /* @__PURE__ */ n(on, { value: y.value, disabled: y.isDisabled, children: y.label }, y.value))
          }
        ),
        /* @__PURE__ */ n(rt, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), Hr = Wt("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Ki = ({ component: e, name: t, formik: r, field: a, column: o }) => {
  const { value: s } = r.getFieldProps(t || a), { setFieldValue: i } = r, c = e || o.relation, p = de((m) => {
    i(t || a, m);
  }, [i, t, a]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(Hr, { children: `Available ${o.label}` }),
    /* @__PURE__ */ n(c, { selected: s, available: !0, onAssignChange: p, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ n(Hr, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ n(c, { selected: s, assigned: !0, onAssignChange: p, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Yi = ({ field: e, formik: t, orientation: r = "row", label: a, lookups: o, fieldConfigs: s = {}, mode: i, ...c }) => {
  const p = (y) => {
    t.setFieldValue(e, y.target.value);
  }, m = o ? o[c.column.lookup] : [], b = ft(), u = t.touched[e] && !!t.errors[e], l = i !== "copy" && s.disabled;
  return /* @__PURE__ */ v(he, { children: [
    /* @__PURE__ */ v(Ht, { component: "fieldset", error: u, children: [
      /* @__PURE__ */ n(ja, { component: "legend", children: a }),
      /* @__PURE__ */ n(
        Er,
        {
          row: r === "row",
          "aria-label": a,
          name: e,
          value: t.values[e],
          onChange: p,
          children: m?.map((y, h) => /* @__PURE__ */ n(
            et,
            {
              value: y.value,
              control: /* @__PURE__ */ n(dt, {}),
              label: y.label,
              disabled: l
            },
            h
          ))
        }
      )
    ] }),
    u && /* @__PURE__ */ n(rt, { style: { color: b.palette.error.main }, children: t.errors[e] })
  ] });
}, Ji = {
  limitTags: 5
}, Zi = Le.memo(({ column: e, field: t, formik: r, lookups: a, dependsOn: o = [], fieldConfigs: s = {}, mode: i, model: c, ...p }) => {
  const m = yn({ column: e, formik: r, lookups: a, dependsOn: o, model: c, isAutoComplete: !0 });
  let b = r.values[t] || [];
  Array.isArray(b) || (b = b.split(", ").map(Number));
  const u = m.filter((h) => b.includes(h.value)) || [], l = i !== "copy" && s.disabled, y = (h, d) => {
    let E = d?.map((x) => x.value) || [];
    e.dataFormat !== "array" && (E = E.length ? E.join(", ") : ""), r.setFieldValue(t, E);
  };
  return /* @__PURE__ */ v(
    qt,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ n(
          sn,
          {
            ...p,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || Ji.limitTags,
            options: m || [],
            getOptionLabel: (h) => h.label || "",
            defaultValue: u,
            renderInput: (h) => /* @__PURE__ */ n(jt, { ...h, variant: "standard" }),
            onChange: y,
            value: u,
            size: "small",
            disabled: l
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ n(rt, { children: r.errors[t] })
      ]
    },
    t
  );
}), Qi = "#182eb5", Xi = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], el = Ha(Wa)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Qi : "#ffffff",
  border: `1px solid ${Ao[500]}`,
  color: t ? "white" : "black"
})), tl = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ n(
  el,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), rl = ({ name: e, field: t, formik: r, expired: a }) => {
  const { setFieldValue: o } = r, { value: s } = r.getFieldProps(e || t), i = "1000001", c = "0111110", p = "0".repeat(7), [m, b] = F(s || p), [u, l] = F(() => s ? s === i ? i : s === c ? c : "Custom" : ""), [y, h] = F(!1), d = de((S) => {
    if (Array.isArray(S)) {
      let A = p;
      for (const T of S)
        A = A.substring(0, T) + "1" + A.substring(T + 1);
      b(A), o(e || t, A), h(!0);
    } else {
      let A = y ? p : m;
      const T = A.slice(0, S) + (A[S] === "1" ? "0" : "1") + A.slice(S + 1);
      b(T), o(e || t, T), l("Custom"), h(!1);
    }
  }, [y, p, m, e, t, o]), E = ft(), x = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ v(he, { children: [
    /* @__PURE__ */ n(Ht, { component: "fieldset", error: x, children: /* @__PURE__ */ v(
      Er,
      {
        row: !0,
        name: e || t,
        value: u,
        onChange: (S) => {
          const A = S.target.value;
          l(A), A !== "Custom" ? (b(A), o(e || t, A), h(!0)) : (b(p), o(e || t, p), h(!1));
        },
        children: [
          /* @__PURE__ */ n(et, { value: i, control: /* @__PURE__ */ n(dt, {}), label: "Weekends (Sat - Sun)", onClick: () => d([0, 6]) }),
          /* @__PURE__ */ n(et, { value: c, control: /* @__PURE__ */ n(dt, {}), label: "Weekdays (Mon - Fri)", onClick: () => d([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(et, { value: "Custom", control: /* @__PURE__ */ n(dt, {}), label: "Specific days" }),
          Xi.map((S, A) => /* @__PURE__ */ n(
            tl,
            {
              day: S,
              onClick: () => d(A),
              isSelected: u === "Custom" && m[A] === "1",
              disabled: a
            },
            S.value
          ))
        ]
      }
    ) }),
    x && /* @__PURE__ */ n(rt, { style: { color: E.palette.error.main }, children: r.errors[t] })
  ] });
}, nl = ({ isAdd: e, column: t, field: r, formik: a, otherProps: o, fieldConfigs: s = {}, mode: i }) => {
  const c = ft();
  let p = a.values[r] || [];
  Array.isArray(p) || (p = p.split(",").map((l) => l.trim()));
  const m = Le.useMemo(() => i === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: a }) : !!t.disabled, [i, s.disabled, t.disabled]), b = t.hasDefault && !e ? [p[0]] : [], u = de((l, y, h, d = {}) => {
    const E = y.pop()?.trim();
    y.includes(E) || y.push(E), b && b.includes(d.option) && h === "removeOption" && (y = [d.option]), t.dataFormat !== "array" && (y = y.length ? y.join(",") : ""), a.setFieldValue(r, y);
  }, [a, r]);
  return /* @__PURE__ */ v(
    qt,
    {
      fullWidth: !0,
      variant: "standard",
      error: a.touched[r] && !!a.errors[r],
      children: [
        /* @__PURE__ */ n(
          sn,
          {
            ...o,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: p,
            options: [],
            renderInput: (l) => /* @__PURE__ */ n(
              jt,
              {
                ...l,
                variant: "standard",
                InputProps: {
                  ...l.InputProps,
                  sx: {
                    ...l.InputProps?.sx,
                    ...m && { backgroundColor: c.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: u,
            size: "small",
            renderTags: (l, y) => l.map((h, d) => {
              const { key: E, ...x } = y({ index: d });
              return /* @__PURE__ */ n(
                Po,
                {
                  label: h,
                  ...x,
                  disabled: b.includes(h)
                },
                E
              );
            }),
            disabled: m
          }
        ),
        a.touched[r] && a.errors[r] && /* @__PURE__ */ n(rt, { children: a.errors[r] })
      ]
    },
    r
  );
}, al = (e = []) => {
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
function ol({ column: e, field: t, formik: r, lookups: a, fieldConfigs: o, mode: s }) {
  const i = a ? a[e.lookup] : [], c = al(i), p = r.values[t]?.length ? r.values[t].split(", ") : [];
  let m;
  return s !== "copy" && (m = o?.disabled), /* @__PURE__ */ n(He, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    Fo,
    {
      selectedItems: p,
      onSelectedItemsChange: (u, l) => {
        r.setFieldValue(t, l?.join(", ") || "");
      },
      disabled: m,
      multiSelect: !0,
      checkboxSelection: !0,
      children: c.map((u) => /* @__PURE__ */ n(_r, { itemId: u.value, label: u.label, children: u.children.map((l) => /* @__PURE__ */ n(_r, { itemId: l.value, label: l.label }, l.value)) }, u.value))
    }
  ) });
}
const il = { maxLength: 500 }, { errorMapping: ll } = tt, sl = 1024 * 1024;
function cl({ column: e, field: t, formik: r }) {
  const a = r.values[t] || "", { stateData: o } = ke(), { maxSize: s, formats: i } = e, { uploadApi: c, mediaApi: p, Url: m } = o?.gridSettings?.permissions, [b, u] = F({
    isExternal: "no",
    selectedFile: null
  }), [l, y] = F(!1), h = Kt(), { getParams: d, useParams: E } = Dr(), { associationId: x } = E() || d, S = x?.split("-")[0] || 1, A = (R) => {
    const J = R.target.value;
    u({
      ...b,
      isExternal: J,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, T = (R) => {
    r.setFieldValue(t, R.target.value);
  }, D = (R) => {
    const J = R.target.files[0];
    if (J) {
      if (s && J.size > s * sl) {
        h.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(J.type)) {
        h.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      u((K) => ({ ...K, selectedFile: J }));
    }
  }, V = async () => {
    if (b.selectedFile) {
      y(!0);
      try {
        const R = new FormData();
        R.append("file", b.selectedFile), R.append("DocumentGroupId", r.values.DocumentGroupId), R.append("AssociationId", S);
        const K = (await nt({
          method: "POST",
          url: c,
          data: R,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!K.success) {
          h.showError(K.message || "Upload failed");
          return;
        }
        const N = p + "/" + K.filePath;
        r.setFieldValue(t, N);
      } catch (R) {
        const J = (R.message.match(/status code (\d{3})/) || [])[1];
        h.showError(ll[J]);
      } finally {
        y(!1);
      }
    }
  }, re = new URL(m, window.location.origin).hostname.toLowerCase();
  pt.useEffect(() => {
    u({
      ...b,
      isExternal: a.toLowerCase().includes(re) ? "no" : "yes"
    });
  }, [a, u]);
  const ce = r.values[t]?.length > (e.max || il.maxLength), Y = ce ? "red" : "";
  return /* @__PURE__ */ v(Te, { children: [
    /* @__PURE__ */ v(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(we, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ v(
        Er,
        {
          row: !0,
          value: b.isExternal,
          onChange: A,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(et, { value: "yes", control: /* @__PURE__ */ n(dt, {}), label: "Yes" }),
            /* @__PURE__ */ n(et, { value: "no", control: /* @__PURE__ */ n(dt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(we, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ v(Te, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        b.isExternal === "yes" ? /* @__PURE__ */ n(
          _t,
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
            onChange: T,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          _t,
          {
            fullWidth: !0,
            value: a,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        ce && /* @__PURE__ */ v(we, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    b.isExternal === "no" && /* @__PURE__ */ v(Te, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ v(
        Xe,
        {
          variant: "outlined",
          component: "label",
          disabled: l,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: D })
          ]
        }
      ),
      b.selectedFile && /* @__PURE__ */ n(De, { title: b.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(we, { variant: "body2", children: b.selectedFile.name.length > 20 ? `${b.selectedFile.name.substring(0, 20)}...` : b.selectedFile.name }) }),
      /* @__PURE__ */ n(
        Xe,
        {
          variant: "contained",
          color: "primary",
          onClick: V,
          disabled: !b.selectedFile || l,
          children: l ? /* @__PURE__ */ n(qa, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const ul = ({ field: e, formik: t }) => {
  const [r, a] = Le.useState({}), o = gn(r, 300);
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
    qt,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[e] && !!t.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(r).map((i) => /* @__PURE__ */ v(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ v(Tt, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              Io,
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
}, dl = {
  boolean: $i,
  select: qi,
  string: yr,
  number: zi,
  password: Gi,
  date: Ui,
  dateTime: ji,
  time: Hi,
  oneToMany: Ki,
  radio: Yi,
  autocomplete: Zi,
  dayRadio: rl,
  email: yr,
  chipInput: nl,
  treeCheckbox: ol,
  fileUpload: cl,
  json: ul
}, Wr = { paddingTop: "2.5px", paddingBottom: "2.5px" }, pl = Oo("span")({
  color: "red !important"
}), fl = ({ tabColumns: e, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: c, mode: p, handleSubmit: m }) => {
  const [b, u] = Le.useState(/* @__PURE__ */ new Set()), { activeStep: l, setActiveStep: y } = Le.useContext(Cn), h = {};
  for (let T = 0, D = t.columns.length; T < D; T++) {
    const { field: V, skip: re } = t.columns[T];
    re && (h[re.step] = r.values[V]);
  }
  const d = (T) => b.has(T) || h[T], E = () => {
    for (let T = l + 1; T < e.length; T++)
      if (!d(T))
        return !1;
    return !0;
  }, x = () => {
    let T = l + 1;
    for (; h[T]; )
      T++;
    u((D) => new Set(D).add(l)), T >= e.length || E() ? m() : y(T);
  }, S = () => {
    let T = l - 1;
    for (; h[T] && T > 0; )
      T--;
    y(T);
  };
  if (!e?.length)
    return null;
  const A = e[l];
  return /* @__PURE__ */ v(he, { children: [
    /* @__PURE__ */ n(To, { activeStep: l, sx: { marginBottom: "20px" }, children: e.map(({ title: T, key: D }, V) => /* @__PURE__ */ n(wo, { completed: d(V), children: /* @__PURE__ */ n(So, { children: /* @__PURE__ */ n(we, { sx: { fontSize: "20px" }, children: T }) }) }, D)) }),
    /* @__PURE__ */ v(Le.Fragment, { children: [
      /* @__PURE__ */ n(bn, { formElements: A.items, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: c, mode: p }),
      /* @__PURE__ */ v(He, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        l !== 0 ? /* @__PURE__ */ v(Ee, { color: "inherit", disabled: l === 0, onClick: S, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ n(Ee, { onClick: x, variant: "contained", children: E() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, bn = ({ formElements: e, model: t, formik: r, data: a, onChange: o, combos: s, lookups: i, fieldConfigs: c, mode: p, isAdd: m }) => e?.length ? /* @__PURE__ */ n(he, { children: e.map(({ Component: b, column: u, field: l, label: y, otherProps: h }, d) => {
  const E = typeof u.relation == "function";
  return /* @__PURE__ */ v(pr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: E ? "flex-start" : "center", children: [
    u?.showLabel !== !1 ? /* @__PURE__ */ n(pr, { size: { xs: 3 }, sx: Wr, children: /* @__PURE__ */ v(we, { sx: { fontSize: "16px", fontWeight: "bold" }, children: [
      u.label || l,
      ": ",
      u.required && /* @__PURE__ */ n(pl, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ n(pr, { size: { xs: E ? 12 : 9 }, sx: Wr, children: /* @__PURE__ */ n(b, { isAdd: m, model: t, fieldConfigs: c[l], mode: p, column: u, field: l, label: y, formik: r, data: a, onChange: o, combos: s, lookups: i, ...h }) })
  ] }, d);
}) }) : null, ml = function({ columns: e, tabs: t = {}, id: r, searchParams: a }) {
  const o = [], s = {};
  for (const c in t)
    s[c] = [];
  for (const c of e) {
    const p = c.type;
    if (c.label === null)
      continue;
    const { field: m, label: b, tab: u } = c, l = {};
    c.options && (l.options = c.options), c.dependsOn && (l.dependsOn = c.dependsOn);
    const y = dl[p];
    if (!y || c.hideInAddGrid && r === "0")
      continue;
    (u && t[u] ? s[u] : o).push({ Component: y, field: m, label: b, column: { ...c, readOnly: a.has("showRelation") || c.readOnly }, otherProps: l });
  }
  const i = [];
  for (const c in s)
    i.push({ key: c, title: t[c], items: s[c] });
  return { formElements: o, tabColumns: i };
}, hl = ({ model: e, formik: t, data: r, combos: a, onChange: o, lookups: s, id: i, fieldConfigs: c, mode: p, handleSubmit: m }) => {
  const b = tt.emptyIdValues.includes(i), { formElements: u, tabColumns: l } = Le.useMemo(() => {
    const y = e.formConfig?.showTabbed, h = new URLSearchParams(window.location.search), { formElements: d, tabColumns: E } = ml({ columns: e.columns, tabs: y ? e.tabs : {}, id: i, searchParams: h });
    return { formElements: d, tabColumns: E, showTabs: y && E.length > 0 };
  }, [e]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(bn, { isAdd: b, formElements: u, model: e, formik: t, data: r, onChange: o, combos: a, lookups: s, fieldConfigs: c, mode: p }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(fl, { tabColumns: l, model: e, formik: t, data: r, onChange: o, combos: a, lookups: s, fieldConfigs: c, mode: p, handleSubmit: m }) })
  ] });
};
function gl(e) {
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
function yl(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const bl = Yr(({ relation: e, parentFilters: t, parent: r, where: a, models: o, readOnly: s }) => {
  const i = o.find(({ name: m }) => m === e);
  if (!i) return null;
  const c = { ...i, hideBreadcrumb: !0 }, p = c instanceof Gt ? c : new Gt(c);
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
}), Cl = pt.memo(({ relations: e, parent: t, where: r = [], models: a, relationFilters: o, readOnly: s }) => {
  const [i, c] = F(0);
  return /* @__PURE__ */ v(He, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(He, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(Ro, { value: i, onChange: (m, b) => {
      c(b);
    }, "aria-label": "relations tabs", children: e.map((m, b) => {
      const u = a.find(({ name: y }) => y === m) || {}, l = u.listTitle || u.title || m;
      return /* @__PURE__ */ n(
        Mo,
        {
          label: l,
          ...yl(b)
        },
        m
      );
    }) }) }),
    e.map((m, b) => /* @__PURE__ */ n(gl, { value: i, index: b, children: /* @__PURE__ */ n(
      bl,
      {
        readOnly: s,
        relation: m,
        models: a,
        parentFilters: o[m] || [],
        parent: t,
        where: r
      },
      m
    ) }, m))
  ] });
}), Cn = Ut(1), El = {}, Ce = {
  object: "object",
  function: "function",
  baseData: "baseData",
  string: "string",
  create: "Create",
  copy: "Copy",
  edit: "Edit",
  number: "number"
}, vl = ({
  model: e,
  api: t,
  models: r,
  relationFilters: a = {},
  permissions: o = {},
  Layout: s = hl,
  baseSaveData: i = {},
  sx: c,
  readOnly: p,
  beforeSubmit: m,
  deletePromptText: b
}) => {
  const u = e.formTitle || e.title, { navigate: l, getParams: y, useParams: h, pathname: d } = Dr(), { relations: E = [] } = e, { dispatchData: x, stateData: S } = ke(), A = h() || y, { id: T = "" } = A, D = T.split("-")[0], V = new URLSearchParams(window.location.search), re = V.has(Ce.baseData) && V.get(Ce.baseData);
  if (re) {
    const _ = JSON.parse(re);
    typeof _ === Ce.object && _ !== null && (i = { ...i, ..._ });
  }
  const [ce, Y] = F(!0), [R, J] = F({}), [K, N] = F(null), [ae, q] = F(!1), $ = Kt(), [k, H] = F(null), [fe, I] = F(0), [B, le] = F(!1), [ee, ue] = F(null), [ge, wt] = F(""), $e = S?.gridSettings?.permissions?.Url || "", _e = typeof e.applyFieldConfig === Ce.function ? e.applyFieldConfig({ data: R, lookups: K }) : El, mt = pe(() => `${$e}${e.api || t || ""}`, [$e, e.api, t]), { mode: qe } = S.dataForm, Ve = S.getUserData || {}, Yt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: Jt } = hn({
    userData: Ve,
    model: e,
    userDefinedPermissions: Yt
  }), { hideBreadcrumb: St = !1, navigateBack: ve } = e, ie = () => {
    let _;
    switch (typeof ve) {
      case Ce.function:
        _ = ve({ params: A, searchParams: V, data: R });
        break;
      case Ce.number:
      case Ce.string:
        _ = ve;
        break;
      default:
        _ = d.substring(0, d.lastIndexOf("/"));
        break;
    }
    l(_);
  }, ht = pe(() => tt.emptyIdValues.includes(D), [D]), At = pe(() => ht ? { ...e.initialValues, ...R, ...i } : { ...i, ...e.initialValues, ...R }, [e.initialValues, R, D]);
  se(() => {
    if (!$e) return;
    H(e.getValidationSchema({ id: D, snackbar: $ }));
    const _ = T.split("-");
    zt({
      ...{
        api: t || mt,
        model: e,
        setError: at
      },
      id: _.length > 1 ? _[1] : _[0],
      setIsLoading: Y,
      setActiveRecord: Ot
    });
  }, [D, T, e, $e]);
  const Pe = nn({
    enableReinitialize: !0,
    initialValues: At,
    validationSchema: k,
    validateOnBlur: !1,
    onSubmit: async (_, { resetForm: te }) => {
      Object.keys(_).forEach((G) => {
        typeof _[G] === Ce.string && (_[G] = _[G].trim());
      }), Y(!0), xr({
        id: D,
        api: mt,
        values: _,
        setIsLoading: Y,
        setError: $.showError
      }).then((G) => {
        if (!G) return;
        if (e.reloadOnSave)
          return window.location.reload();
        const Fe = G.info ? G.info : `Record ${D === 0 ? "Added" : "Updated"} Successfully.`;
        $.showMessage(Fe), ve !== !1 && ie(), te({ values: Pe.values });
      }).catch((G) => {
        $.showError(
          "An error occured.",
          G
        ), e.reloadOnSave && te();
      }).finally(() => Y(!1));
    }
  }), f = () => {
    Pe.resetForm(), le(!1), ve !== !1 && ie();
  }, at = function(_, te) {
    $.showError(_, te), ie();
  }, Ot = function({ id: _, title: te, record: G, lookups: Fe }) {
    const Ge = T.indexOf("-") > -1, lt = !_ || _ === "0", tr = lt ? Ce.create : Ge ? Ce.copy : Ce.edit, Ue = lt ? "" : G[e.linkColumn], Pt = [{ text: e.breadCrumbs }, { text: tr }];
    Ge && (G[e.linkColumn] = ""), e.columns.forEach((Ye) => {
      Ye.skipCopy && Ge && (G[Ye.field] = "");
    }), J(G), N(Fe), Ue !== "" && Pt.push({ text: Ue }), x({
      type: Z.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: !0,
        breadcrumbs: Pt
      }
    });
  }, gt = function(_) {
    Pe.dirty && it ? le(!0) : ve !== !1 && ie(), _.preventDefault();
  }, Zt = async function() {
    try {
      q(!0), await vr({
        id: D,
        api: t || e.api,
        setIsLoading: Y,
        setError: $.showError,
        setErrorMessage: wt
      }) === !0 && ($.showMessage("Record Deleted Successfully."), ve !== !1 && ie());
    } catch {
      $.showError("An error occurred, please try after some time.");
    } finally {
      q(!1);
    }
  }, ot = () => {
    wt(null), q(!1);
  };
  if (ce)
    return /* @__PURE__ */ n(He, { sx: { display: "flex", pt: "20%", justifyContent: "center" }, children: /* @__PURE__ */ n(go, {}) });
  const ze = function(_) {
    const { name: te, value: G } = _.target;
    J({ ...R, [te]: G });
  }, Ke = async function(_) {
    _ && _.preventDefault(), typeof m === Ce.function && await m({ formik: Pe });
    const { errors: te } = Pe;
    Pe.handleSubmit();
    const G = Object.keys(te)[0], Fe = te[G];
    Fe && $.showError(Fe, null, "error");
    const Ge = e.columns.find(
      (lt) => lt.field === G
    ) || {};
    Ge.tab && I(Object.keys(e.tabs).indexOf(Ge.tab));
  }, ye = [
    { text: u },
    { text: D === "0" ? "New" : "Update" }
  ], Qt = Number(D) !== 0 && !!E.length, Xt = V.has("showRelation"), it = !("canEdit" in R) || R.canEdit, er = !it || R.readOnlyRelations;
  return b = b || "Are you sure you want to delete ?", /* @__PURE__ */ v(he, { children: [
    /* @__PURE__ */ n(
      mn,
      {
        navigate: l,
        title: u,
        showBreadcrumbs: !St,
        breadcrumbs: ye,
        model: e
      }
    ),
    /* @__PURE__ */ n(Cn.Provider, { value: { activeStep: fe, setActiveStep: I }, children: /* @__PURE__ */ v(mo, { sx: { padding: 2, ...c }, children: [
      /* @__PURE__ */ v("form", { children: [
        /* @__PURE__ */ v(
          ho,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              Jt && it && !Xt && !p && /* @__PURE__ */ n(
                Ee,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Ke,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ n(
                Ee,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: gt,
                  children: "Cancel"
                }
              ),
              o.delete && /* @__PURE__ */ n(
                Ee,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => q(!0),
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
            formik: Pe,
            data: R,
            fieldConfigs: _e,
            onChange: ze,
            lookups: K,
            id: D,
            handleSubmit: Ke,
            mode: qe
          }
        )
      ] }),
      ge && /* @__PURE__ */ v(
        Ne,
        {
          open: !!ge,
          onConfirm: ot,
          onCancel: ot,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            ge
          ]
        }
      ),
      /* @__PURE__ */ n(
        Ne,
        {
          open: B,
          onConfirm: f,
          onCancel: () => le(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ n(
        Ne,
        {
          open: ae,
          onConfirm: Zt,
          onCancel: () => {
            q(!1), ue(null);
          },
          title: ee ? "Error Deleting Record" : "Confirm Delete",
          children: b
        }
      ),
      Qt ? /* @__PURE__ */ n(
        Cl,
        {
          readOnly: er,
          models: r,
          relationFilters: a,
          relations: E,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, Lt = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, xl = {}, qr = !0, Dl = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class Gt {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "", controllerType: a } = t;
    let { api: o, idProperty: s = o + "Id" } = t;
    const i = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    o || (o = `${r.replaceAll(Lt.nonAlphaNumeric, "-").toLowerCase()}`, s = r.replaceAll(" ", "") + "Id"), o = a === "cs" ? `${o}.ashx` : `${o}`;
    const c = { ...t.defaultValues }, p = i || r;
    Object.assign(this, {
      standard: !0,
      name: p,
      permissions: { ...Gt.defaultPermissions },
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
      t[a] = r.defaultValue === void 0 ? Dl[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, a = {};
    for (const o of r) {
      const { field: s, label: i, header: c, type: p = "string", requiredIfNew: m = !1, required: b = !1, min: u = "", max: l = "", validate: y } = o, h = i || c || s;
      if (!h)
        continue;
      let d;
      switch (p) {
        case "string":
          d = oe.string().nullable().trim().label(h), u && !isNaN(Number(u)) && (d = d.min(Number(u), `${h} must be at least ${u} characters long`)), l && !isNaN(Number(l)) && (d = d.max(Number(l), `${h} must be at most ${l} characters long`)), b && (d = d.trim().required(`${h} is required`));
          break;
        case "boolean":
          d = oe.bool().nullable().transform((E, x) => x === "" ? null : E).label(h);
          break;
        case "radio":
        case "dayRadio":
          d = oe.mixed().label(h).required(`Select at least one option for ${h}`);
          break;
        case "date":
          d = oe.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(h).required(`${h} is required`);
          break;
        case "dateTime":
          d = oe.date().nullable().transform((E, x) => x === "" || x === null ? null : E).label(h);
          break;
        case "select":
        case "autocomplete":
          b ? d = oe.string().trim().label(h).required(`Select at least one ${h}`) : d = oe.string().nullable();
          break;
        case "password":
          d = oe.string().label(h).test("ignore-asterisks", `${h} must be a valid password.`, (E) => {
            if (E === "******") return !0;
            const x = Number(u) || 8, S = Number(l) || 50, A = o.regex || Lt.password;
            return oe.string().min(x, `${h} must be at least ${x} characters`).max(S, `${h} must be at most ${S} characters`).matches(
              A,
              `${h} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(E);
          });
          break;
        case "email":
          d = oe.string().trim().matches(
            o.regex || Lt.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          b ? d = oe.number().label(h).required(`${h} is required.`) : d = oe.number().nullable(), u !== void 0 && u !== "" && !isNaN(Number(u)) && (d = d.min(Number(u), `${h} must be greater than or equal to ${u}`)), l !== void 0 && l !== "" && !isNaN(Number(l)) && (d = d.max(Number(l), `${h} must be less than or equal to ${l}`));
          break;
        case "fileUpload":
          d = oe.string().trim().label(h);
          break;
        default:
          d = oe.mixed().nullable().label(h);
          break;
      }
      if (b && p !== "string" && (d = d.required(`${h} is required`)), m && (!t || t === "") && (d = d.trim().required(`${h} is required`)), y) {
        const E = Lt.compareValidatorRegex.exec(y);
        if (E) {
          const x = E[1], S = r.find(
            (A) => (A.formField === x || A.field) === x
          );
          d = d.oneOf(
            [oe.ref(x)],
            `${h} must match ${S.label}`
          );
        }
      }
      a[s] = d;
    }
    return oe.object({ ...a, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ n(vl, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ n(Ur, { model: this, showRowsSelected: qr, ...r });
  ChildGrid = (t) => /* @__PURE__ */ v(he, { children: [
    /* @__PURE__ */ n(Ur, { model: this, ...t, customStyle: xl, showRowsSelected: qr }),
    /* @__PURE__ */ n(Ka, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ne as DialogComponent,
  Ur as GridBase,
  fi as HelpModal,
  zr as MuiTypography,
  mn as PageTitle,
  js as RouterProvider,
  cn as SnackbarContext,
  zs as SnackbarProvider,
  Us as StateProvider,
  Gt as UiModel,
  Gs as crudHelper,
  Yo as daDKGrid,
  Zo as deDEGrid,
  Xo as elGRGrid,
  ti as esESGrid,
  ni as frFRGrid,
  kt as httpRequest,
  oi as itITGrid,
  pi as locales,
  ci as ptPT,
  li as trTRGrid,
  Wo as useMobile,
  Dr as useRouter,
  Kt as useSnackbar,
  ke as useStateContext
};
//# sourceMappingURL=index.js.map
