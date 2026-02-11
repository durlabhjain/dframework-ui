import { jsx as a, jsxs as E, Fragment as ge } from "react/jsx-runtime";
import * as qe from "react";
import dt, { createContext as Kt, useContext as Tr, useState as L, useEffect as fe, useReducer as xn, useRef as yr, useMemo as X, useCallback as $, memo as fa, useId as En, createElement as Sr } from "react";
import vn from "@mui/material/Snackbar";
import Dn from "@mui/material/Alert";
import Ae from "@mui/material/Button";
import wn from "@mui/material/Dialog";
import Tn from "@mui/material/DialogActions";
import Sn from "@mui/material/DialogContent";
import Pn from "@mui/material/DialogContentText";
import An from "@mui/material/DialogTitle";
import * as Ze from "@mui/x-data-grid-premium";
import { GridFooterContainer as On, GridFooter as Fn, getGridDateOperators as ha, useGridSelector as ma, gridFilterModelSelector as In, useGridApiRef as ga, DataGridPremium as ya, GridActionsCellItem as br, GridToolbarExportContainer as Mn, Toolbar as Rn, ColumnsPanelTrigger as Ln, FilterPanelTrigger as Bn, GRID_CHECKBOX_SELECTION_COL_DEF as Nn, getGridStringOperators as kn, getGridBooleanOperators as $n, useGridApiContext as _n, gridRowSelectionStateSelector as zn } from "@mui/x-data-grid-premium";
import ba from "@mui/icons-material/Delete";
import Vn from "@mui/icons-material/FileCopy";
import Gn from "@mui/icons-material/Article";
import Ca from "@mui/icons-material/Edit";
import Je from "@mui/material/Box";
import St from "@mui/material/Typography";
import Jt from "@mui/material/TextField";
import { useTranslation as xa, withTranslation as Un } from "react-i18next";
import { Typography as Me, Dialog as qn, DialogTitle as jn, Grid as be, DialogContent as Wn, Card as Hn, CardContent as Yn, Breadcrumbs as Kn, Link as Jn, Button as tt, IconButton as jt, Box as Pe, FormControl as pt, Select as Cr, MenuItem as Ue, Menu as Zn, List as Qn, ListItemButton as fr, ListItemIcon as hr, ListItem as Xn, ListItemText as eo, TextField as rt, FormControlLabel as at, Checkbox as to, Stack as ta, Tooltip as Pt, InputLabel as ra, Badge as ro, FormHelperText as nt, useTheme as ft, Input as ao, FilledInput as no, OutlinedInput as oo, InputAdornment as Ea, RadioGroup as Pr, Radio as ut, styled as io, Avatar as so, CircularProgress as lo, Divider as co } from "@mui/material";
import uo from "@mui/icons-material/Check";
import xr from "@mui/icons-material/Close";
import po from "@mui/icons-material/Help";
import { Replay as fo, Close as ho, GridOn as mo, TableChart as aa, Code as go, Language as yo, DataObject as bo } from "@mui/icons-material";
import ne from "dayjs";
import Co from "dayjs/plugin/utc";
import xo from "dayjs/plugin/timezone";
import { DatePicker as va } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Er } from "@mui/x-date-pickers/DateTimePicker";
import Da from "dayjs/plugin/utc.js";
import { LocalizationProvider as wa } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Ta } from "@mui/x-date-pickers/AdapterDayjs";
import vr from "@mui/icons-material/Add";
import Eo from "@mui/icons-material/Remove";
import vo from "@mui/icons-material/FilterListOff";
import Do from "@mui/icons-material/ViewColumn";
import wo from "@mui/icons-material/FilterList";
import { styled as Zt } from "@mui/material/styles";
import To from "@mui/icons-material/Save";
import na from "@mui/icons-material/Settings";
import So from "@mui/icons-material/Refresh";
import { useFormik as Sa } from "formik";
import * as de from "yup";
import { DateTimePicker as Po, DatePicker as Ao } from "@mui/x-date-pickers";
import Pa from "@mui/material/MenuItem";
import Oo from "@mui/icons-material/History";
import Fo from "@mui/icons-material/FileDownload";
import Aa from "@mui/material/Checkbox";
import Io from "@mui/material/Paper";
import Mo from "@mui/material/Stack";
import Ro from "@mui/material/CircularProgress";
import Lo from "@mui/material/FormControlLabel";
import { NumberField as Wt } from "@base-ui/react/number-field";
import Bo from "@mui/icons-material/KeyboardArrowUp";
import Oa from "@mui/icons-material/KeyboardArrowDown";
import No from "@mui/icons-material/VisibilityOff";
import ko from "@mui/icons-material/Visibility";
import { TimePicker as $o } from "@mui/x-date-pickers/TimePicker";
import Qt from "@mui/material/FormControl";
import _o from "@mui/material/InputLabel";
import zo from "@mui/material/Select";
import mr from "@mui/material/Grid";
import Fa from "@mui/material/Autocomplete";
import Vo from "@mui/material/Stepper";
import Go from "@mui/material/Step";
import Uo from "@mui/material/StepLabel";
import { grey as qo } from "@mui/material/colors";
import jo from "@emotion/styled";
import Wo from "@mui/material/Chip";
import { SimpleTreeView as Ho } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as oa } from "@mui/x-tree-view/TreeItem";
import Yo from "@mui/material/Input";
import Ko from "@mui/material/Tab";
import Jo from "@mui/material/Tabs";
const Ia = Kt(null), Zo = "bottom", Qo = "center", Xo = dt.forwardRef(function(t, r) {
  return /* @__PURE__ */ a(Dn, { elevation: 6, ref: r, variant: "filled", ...t });
}), ic = ({ children: e }) => {
  const [t, r] = L(null), [n, o] = L(!1), [c, i] = L(null), [d, p] = L(null), y = function(u, g, f = "info", l) {
    typeof u != "string" && (u = u.toString()), g && typeof g != "string" && (g = g.toString()), r(g ? `${u}: ${g}` : u), i(f), o(!0), p(l);
  }, m = function(u, g, f = "error", l) {
    y(u, g, f, l);
  }, s = function() {
    o(!1), p(null), d && d();
  };
  return /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ a(
      Ia.Provider,
      {
        value: { showMessage: y, showError: m },
        children: e
      }
    ),
    /* @__PURE__ */ a(vn, { open: n, autoHideDuration: 6e3, onClose: s, anchorOrigin: { vertical: Zo, horizontal: Qo }, children: /* @__PURE__ */ a(Xo, { severity: c, children: t }) })
  ] });
}, At = function() {
  return Tr(Ia);
}, je = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: n, okText: o, cancelText: c, yesNo: i = !1, children: d, maxWidth: p = "sm", fullWidth: y = !0, ...m }) => (o = o || (i ? "Yes" : "Ok"), c = c || (i ? "No" : "Cancel"), /* @__PURE__ */ E(
  wn,
  {
    ...m,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: p,
    fullWidth: y,
    children: [
      /* @__PURE__ */ a(An, { id: "alert-dialog-title", sx: { fontSize: d ? "inherit" : "1.25rem" }, children: r }),
      d && /* @__PURE__ */ a(Sn, { dividers: !0, children: /* @__PURE__ */ a(Pn, { children: d }) }),
      (n || t) && /* @__PURE__ */ E(Tn, { children: [
        n && /* @__PURE__ */ a(Ae, { onClick: n, children: c }),
        t && /* @__PURE__ */ a(Ae, { onClick: t, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Q = {
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
const gr = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Ma = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, ei = (e, t) => {
  const r = new URL(e);
  for (const n in t) {
    const o = typeof t[n] == "object" ? JSON.stringify(t[n]) : t[n];
    r.searchParams.append(n, o);
  }
  window.open(r, "_blank").focus();
}, Ra = async (e) => {
  const {
    method: t = "GET",
    url: r,
    data: n,
    headers: o = {},
    credentials: c = "include",
    ...i
  } = e, d = {
    method: t,
    credentials: c,
    headers: {
      ...o
    },
    ...i
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = n instanceof FormData ? n : Ma(n)) : (d.headers["Content-Type"] = o["Content-Type"] || "application/json", d.body = typeof n == "string" ? n : JSON.stringify(n)));
  const p = await fetch(r, d), y = p.headers.get("content-type") || {};
  return {
    status: p.status,
    data: y.includes("application/json") ? await p.json() : await p.text(),
    headers: Object.fromEntries(p.headers.entries())
  };
}, Re = Object.freeze({
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
}), Ye = async ({
  url: e,
  params: t = {},
  history: r,
  jsonPayload: n = !1,
  additionalParams: o = {},
  additionalHeaders: c = {},
  disableLoader: i = !1,
  dispatchData: d,
  dataParser: p = Re.raw,
  onParseError: y
}) => {
  if (t.exportData)
    return ei(e, t);
  i = i || typeof d != "function", i || d({ type: Q.UPDATE_LOADER_STATE, payload: !0 }), Tt++;
  const m = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: n ? { ...c } : { "Content-Type": "multipart/form-data", ...c },
    ...o
  };
  t && Object.keys(t).length > 0 && (m.data = n ? t : Ma(t));
  try {
    const s = await Ra(m);
    Tt--;
    let u = s.data;
    if (Tt === 0 && !i && d({ type: Q.UPDATE_LOADER_STATE, payload: !1 }), s.status === gr.SESSION_EXPIRED && r) {
      r("/login");
      return;
    }
    if (s.status === gr.FORBIDDEN)
      return { error: !0, message: u.message || "Access Denied!" };
    if (s.status !== gr.OK)
      return { error: !0, message: u.message || "An error occurred" };
    try {
      u = p(u);
    } catch (g) {
      return y ? y(g, u) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: g.message,
        rawData: u
      };
    }
    return u;
  } catch (s) {
    return Tt--, Tt === 0 && !i && d({ type: Q.UPDATE_LOADER_STATE, payload: !1 }), { error: !0, message: s.message || "Network error" };
  }
}, ti = ["date", "dateTime"], ri = ["singleSelect"], ai = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset(), Ot = (e) => e?.message || e?.info || e?.error;
function ni(e) {
  const { operator: t, value: r, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(t), c = r != null && (r !== "" || n === "number" && r === 0 || n === "boolean" && r === !1);
  return o || c;
}
const La = async ({ gridColumns: e, setData: t, page: r, pageSize: n, sortModel: o, filterModel: c, api: i, parentFilters: d, action: p = "list", setError: y, extraParams: m, contentType: s, columns: u, controllerType: g = "node", template: f = null, configFileName: l = null, dispatchData: x, showFullScreenLoader: v = !1, model: w, baseFilters: P = null, isElasticExport: T, history: I = null }) => {
  s || v && x({ type: Q.UPDATE_LOADER_STATE, payload: !0 });
  const V = [], ee = [], te = [];
  e.forEach(({ lookup: B, type: _, field: N, keepLocal: Z = !1, keepLocalDate: A, filterable: pe = !0, dependsOn: ce }) => {
    ti.includes(_) && te.push({ field: N, keepLocal: Z, keepLocalDate: A }), B && !V.includes(B) && ri.includes(_) && pe && (V.push(B), ee.push({ lookup: B, dependsOn: ce }));
  });
  const G = [];
  c?.items?.length && c.items.forEach((B) => {
    if (ni(B)) {
      const { field: _, operator: N, filterField: Z } = B;
      let { value: A } = B;
      const ce = e.filter((O) => O?.field === B.field)[0]?.type;
      ce === "boolean" ? A = A === "true" || A === !0 ? 1 : 0 : ce === "number" && (A = Array.isArray(A) ? A.filter((O) => O) : A), A = B.filterValues || A, G.push({
        field: Z || _,
        operator: N,
        value: A,
        type: ce
      });
    }
  }), d && G.push(...d), P && G.push(...P);
  const k = {
    start: r * n,
    limit: T ? w.exportSize : n,
    ...m,
    logicalOperator: c.logicOperator,
    sort: o.map((B) => (B.filterField || B.field) + " " + B.sort).join(","),
    where: G,
    isElasticExport: T,
    model: w.module,
    fileName: w.overrideFileName
  };
  V.length && (k.lookups = V.join(",")), ee.length && (k.lookupWithDeps = JSON.stringify(ee)), w?.limitToSurveyed && (k.limitToSurveyed = w?.limitToSurveyed);
  const K = {};
  let M = g === "cs" ? `${i}?action=${p}&asArray=0` : `${i}/${p}`;
  if (f !== null && (M += `&template=${f}`), l !== null && (M += `&configFileName=${l}`), s) {
    const B = document.createElement("form");
    if (k.responseType = s, k.columns = u, k.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof w.createRequestPayload == "function" && await w.createRequestPayload(k, { where: G, sortModel: o, page: r, pageSize: n, parentFilters: d, action: p, url: M, dataParsers: Re, model: w }), B.setAttribute("method", "POST"), B.setAttribute("id", "exportForm"), B.setAttribute("target", "_blank"), f === null)
      for (const _ in k) {
        let N = k[_];
        if (N == null)
          continue;
        typeof N != "string" && (N = JSON.stringify(N));
        const Z = document.createElement("input");
        Z.type = "hidden", Z.name = _, Z.value = N, B.append(Z);
      }
    B.setAttribute("action", k.url || M), document.body.appendChild(B), B.submit(), setTimeout(() => {
      document.getElementById("exportForm").remove();
    }, 3e3);
    return;
  }
  try {
    const B = {
      url: M,
      additionalHeaders: {
        "Content-Type": "application/json",
        ...K
      },
      dispatchData: x,
      jsonPayload: !0,
      params: k,
      dataParser: Re.json,
      history: I
    };
    typeof w.createRequestPayload == "function" && await w.createRequestPayload(B, { where: G, sortModel: o, page: r, pageSize: n, parentFilters: d, action: p, dataParsers: Re, model: w });
    const _ = await Ye(B);
    if (_?.error || _?.success === !1) {
      const N = Ot(_);
      y("An error occurred while fetching data", N), t((Z) => ({ ...Z, records: [], recordCount: 0 }));
      return;
    }
    if (typeof w.parseResponsePayload == "function" && w.parseResponseActions.includes(p)) {
      const N = await w.parseResponsePayload({ responseData: _, model: w, dateColumns: te, action: p });
      t(N);
      return;
    }
    _.records.forEach((N) => {
      te.forEach((Z) => {
        const { field: A, keepLocal: pe, keepLocalDate: ce } = Z;
        if (N[A]) {
          if (N[A] = new Date(N[A]), ce) {
            const O = N[A].getTimezoneOffset() * 6e4;
            N[A] = new Date(N[A].getTime() + O);
          }
          if (pe && !ai(N[A])) {
            const O = N[A].getTimezoneOffset() * 6e4;
            N[A] = new Date(N[A].getTime() + O);
          }
        }
      }), w.columns.forEach(({ field: Z, displayIndex: A }) => {
        A && (N[Z] = N[A]);
      });
    }), t(_);
  } catch {
    y("Network failure or server unreachable. Please try again.");
  }
}, Ht = async ({ api: e, id: t, setActiveRecord: r, model: n, parentFilters: o, where: c = {}, setError: i, dispatchData: d }) => {
  e = e || n.api;
  const p = new URLSearchParams(), y = `${e}/${t ?? "-"}`, m = [];
  (n.formDef || n.columns)?.forEach((g) => {
    g.lookup && !m.includes(g.lookup) && !g.dependsOn && m.push(g.lookup);
  }), p.set("lookups", m), c && Object.keys(c)?.length && p.set("where", JSON.stringify(c));
  const u = {
    url: `${y}?${p.toString()}`,
    additionalParams: { method: "GET" },
    dispatchData: d,
    jsonPayload: !0
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(u, { id: t, parentFilters: o, model: n, where: c, api: e, action: "load", dataParsers: Re });
  try {
    const g = await Ye(u);
    if (g?.error || g?.success === !1) {
      const P = Ot(g);
      i("Load failed", P);
      return;
    }
    if (typeof n.parseResponsePayload == "function" && n.parseResponseActions.includes("load")) {
      const P = await n.parseResponsePayload({ responseData: g, model: n, action: "load" });
      r(P);
      return;
    }
    const { data: f, lookups: l } = g || {};
    let x = f[n.linkColumn];
    const v = n.columns.find((P) => P.field === n.linkColumn);
    if (v && v.lookup && l && l[v.lookup] && l[v.lookup]?.length) {
      const P = l[v.lookup].find((T) => T.value === x);
      P && (x = P.label);
    }
    const w = { ...n.defaultValues };
    r({ id: t, title: x, record: { ...w, ...f, ...o }, lookups: l });
  } catch (g) {
    i("Could not load record", g.message || g.toString());
  }
}, Ar = async function({ id: e, api: t, setError: r, model: n }) {
  const o = { success: !1, error: "" };
  if (!e) {
    r("Deleted failed. No active record.");
    return;
  }
  const c = {
    url: `${t}/${e}`,
    additionalParams: { method: "DELETE" }
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(c, { id: e, model: n, api: t, action: "delete", dataParsers: Re });
  try {
    const i = await Ye(c);
    if (i?.error || i?.success === !1) {
      o.success = !1;
      const d = Ot(i);
      return r("Delete failed", d), !1;
    }
    return o.success = !0, !0;
  } catch (i) {
    r("Could not delete record", i.message || i.toString());
  }
  return o;
}, Or = async function({ id: e, api: t, values: r, setError: n, model: o, dispatchData: c }) {
  let i, d;
  e !== 0 ? (i = `${t}/${e}`, d = "PUT") : (i = t, d = "POST");
  const p = {
    url: i,
    additionalParams: { method: d },
    params: r,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0,
    dispatchData: c
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(p, { id: e, model: o, values: r, api: t, action: "save", dataParsers: Re });
  try {
    const y = await Ye(p);
    if (y?.error || y?.success === !1) {
      const m = Ot(y);
      return n("Save failed", m), !1;
    }
    return y;
  } catch (y) {
    n("Could not save record", y.message || y.toString());
  }
  return !1;
}, Ba = async ({ api: e, setActiveRecord: t, model: r, setError: n, lookups: o, scopeId: c, reqData: i }) => {
  e = e || r.api;
  const d = new URLSearchParams(), p = `${e}/lookups`;
  d.set("lookups", o), d.set("scopeId", c);
  const y = {
    url: `${p}?${d.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0,
    ...i
  };
  try {
    typeof r.createRequestPayload == "function" && await r.createRequestPayload(y, { model: r, lookups: o, scopeId: c, dataParsers: Re, action: "lookups", api: e });
    const m = await Ye(y);
    if (m?.error || m?.success === !1) {
      const s = Ot(m);
      return n("Could not load lookups", s), !1;
    }
    if (typeof r.parseResponsePayload == "function" && r.parseResponseActions.includes("lookups")) {
      const s = await r.parseResponsePayload({ responseData: m, model: r, action: "lookups" });
      t(s);
      return;
    }
    t(m);
  } catch (m) {
    n("Could not load lookups", m.message || m.toString());
  }
}, sc = {
  getList: La,
  getRecord: Ht,
  deleteRecord: Ar,
  saveRecord: Or,
  getLookups: Ba
}, oi = ({ pagination: e, apiRef: t, tTranslate: r = (n) => n }) => {
  const n = t.current.state.pagination.paginationModel.page, o = t.current.state.pagination.paginationModel.pageSize, c = t.current.state.rows.totalRowCount, i = Math.ceil(c / o), { t: d, i18n: p } = xa(), y = { t: d, i18n: p }, [m, s] = L(n + 1), u = function(l) {
    let x = l.target?.value;
    x === "" ? s("") : (x = parseInt(x), x = isNaN(x) || x < 1 ? 1 : x, s(x));
  };
  fe(() => {
    s(n + 1);
  }, [n, o]);
  const g = function() {
    let l = m === "" ? 1 : m;
    l = Math.max(l, 1), l = Math.min(l, i), t.current.setPage(l - 1), s(l), m === "" && s(1);
  }, f = (l) => {
    const x = l.which || l.keyCode, v = String.fromCharCode(x);
    /\d/.test(v) || l.preventDefault();
  };
  return /* @__PURE__ */ E(On, { children: [
    /* @__PURE__ */ a(Je, { sx: { pl: 5 }, children: e && /* @__PURE__ */ E(ge, { children: [
      /* @__PURE__ */ E(St, { variant: "p", children: [
        r("Jump to page", y),
        ":"
      ] }),
      /* @__PURE__ */ a(
        Jt,
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
          value: m,
          onChange: u,
          onKeyPress: f,
          disabled: !c
        }
      ),
      /* @__PURE__ */ a(Ae, { disabled: !c, size: "small", onClick: g, children: r("Go", y) })
    ] }) }),
    /* @__PURE__ */ a(Fn, {})
  ] });
}, ii = /\${((\w+)\.)?(\w+)}/g, si = function(e, t, { template: r = ii, keepMissingTags: n = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(o, c, i, d) {
    const p = i ? t[i] || {} : t;
    return p[d] === void 0 ? n ? o : "" : p[d];
  });
}, Vt = {
  replaceTags: si
};
function ia({ variant: e = "h2", component: t = "h2", text: r = "", name: n = null, ...o }) {
  return /* @__PURE__ */ E(Me, { variant: e, component: t, ...o, children: [
    r,
    n && ` ${n}`
  ] });
}
function li(e = !1) {
  const t = c(), [r, n] = L(t);
  function o() {
    setTimeout(() => {
      n(c());
    }, 10);
  }
  fe(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function c() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const d = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const p = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let y = null;
    return window.innerWidth <= window.innerHeight ? y = "portrait" : y = "landscape", { mobile: d, tablet: p, portrait: y === "portrait", landscape: y === "landscape" };
  }
  return e ? r.mobile : r;
}
const ci = (e, t) => {
  switch (t.type) {
    case Q.UPDATE_LOCALIZATION:
      return { ...e, dataLocalization: t.payload };
    case Q.UPDATE_DATE_TIME:
      return { ...e, dateTime: t.payload };
    case Q.UPDATE_FORM_MODE:
      return { ...e, dataForm: t.payload };
    case Q.PAGE_TITLE_DETAILS:
      return { ...e, pageTitleDetails: t.payload };
    case Q.OPEN_MODAL:
      return { ...e, modal: t.payload };
    case Q.SET_PAGE_BACK_BUTTON:
      return { ...e, pageBackButton: t.payload };
    case Q.SET_GRID_SETTINGS:
      return { ...e, gridSettings: t.payload };
    case Q.SET_LOCAL_LOCALIZATION:
      return { ...e, getLocal: t.payload };
    case Q.USER_DATA:
      return { ...e, getUserData: t.payload };
    case Q.UDPATE_PREFERENCES:
      return { ...e, preferences: t.payload };
    case Q.SET_CURRENT_PREFERENCE_NAME:
      return { ...e, currentPreference: t.payload };
    case Q.TOTAL_PREFERENCES:
      return { ...e, totalPreferences: t.payload };
    case Q.UPDATE_LOADER_STATE:
      return { ...e, loaderOpen: t.payload };
    case Q.PASS_FILTERS_TO_HEADER:
      return { ...e, filtersInHeader: t.payload };
    case Q.SET_TIMEZONE:
      return { ...e, timeZone: t.payload };
    default:
      return e;
  }
}, ui = {
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
}, di = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, pi = {
  ...Ze.daDK,
  ...di
}, fi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, hi = {
  ...Ze.deDE,
  ...fi
}, mi = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, gi = {
  ...Ze.elGR,
  ...mi
}, yi = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, bi = {
  ...Ze.esES,
  ...yi
}, Ci = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, xi = {
  ...Ze.frFR,
  ...Ci
}, Ei = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, vi = {
  ...Ze.itIT,
  ...Ei
}, Di = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, wi = {
  ...Ze.trTR,
  ...Di
}, Ti = {
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
}, Si = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Pi = {
  ...Ze.enUS,
  ...Si
}, Ai = {
  en: Pi,
  "tr-TR": wi,
  "es-ES": bi,
  "da-DK": pi,
  "de-DE": hi,
  "el-GR": gi,
  "fr-FR": xi,
  "pt-PT": Ti,
  "it-IT": vi
};
ne.extend(Co);
ne.extend(xo);
const Na = Kt(), ka = Kt(null), lc = ({ children: e, apiEndpoints: t = {} }) => {
  const [r, n] = xn(ci, ui), o = yr(t);
  function c(s, u) {
    o.current[s] = u;
  }
  function i(s) {
    return o.current[s];
  }
  function d(s, u) {
    return `${o.current[s || "default"] || ""}${u}`;
  }
  function p(s, u, g) {
    if (g != null) {
      const f = g;
      let l = s ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return f && (l = f.split(" "), l[0] = l[0].toUpperCase(), s ? l = l[0] : u ? l = l[0].toUpperCase() : (l[1] += l[1].includes(":ss") ? "" : ":ss", l = l.join(" "))), l;
    }
    return s ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }
  function y({ value: s, useSystemFormat: u, showOnlyDate: g = !1, state: f, timeZone: l }) {
    if (!s) return "-";
    const x = p(u, g, f);
    return l ? ne(s).tz(l).format(x) : ne(s).format(x);
  }
  function m() {
    const s = r.dataLocalization, u = Ai[s];
    function g(f) {
      return s === "pt-PT" || s === "ptPT" ? u.components.MuiDataGrid.defaultProps.localeText[f] || f : u[f] || f;
    }
    return { getLocalizedString: g };
  }
  return /* @__PURE__ */ a(Na.Provider, { value: { stateData: r, dispatchData: n, systemDateTimeFormat: p, formatDate: y, useLocalization: m, getApiEndpoint: i, setApiEndpoint: c, buildUrl: d }, children: e });
}, cc = ka.Provider, Fr = () => Tr(ka), Ne = () => {
  const e = Tr(Na);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Oi = () => {
  const [e, t] = L(), [r, n] = L(!1), { stateData: o, dispatchData: c } = Ne(), i = o.modal, d = 16 / 9;
  let p = (window.outerWidth - 10) / window.innerWidth * 100;
  const y = () => {
    let s = document.getElementById("tutorial-iframe");
    s ? (s = s.offsetWidth, s = s / window.innerWidth) : s = 0.9;
    const u = window.innerWidth * s * (1 / d), g = window.innerHeight - 180;
    t(Math.min(u, g));
  };
  fe(() => {
    i?.status && (n(!0), y());
  }, [i, p]), fe(() => (window.addEventListener("resize", y), () => {
    window.removeEventListener("resize", y);
  }), []);
  function m() {
    const s = document.getElementById("tutorial-iframe");
    s.src = i?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: i?.status && /* @__PURE__ */ E(qn, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    c({
      type: Q.OPEN_MODAL,
      payload: { status: !1, data: {} }
    });
  }, children: [
    /* @__PURE__ */ a(jn, { className: "pt-2 pb-0", children: /* @__PURE__ */ E(be, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ E(be, { size: 11, children: [
        /* @__PURE__ */ E(Me, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Me, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ a(ge, { children: " " }) })
      ] }),
      /* @__PURE__ */ E(be, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(fo, { className: "cursor_pointer mt-2 mr-2", onClick: m }),
        /* @__PURE__ */ a(ho, { className: "cursor_pointer mt-2", onClick: () => {
          c({
            type: Q.OPEN_MODAL,
            payload: { status: !1, data: {} }
          });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ E(Wn, { dividers: !0, children: [
      r && /* @__PURE__ */ a("div", { children: "Loading..." }),
      i?.data?.url && /* @__PURE__ */ a(
        "iframe",
        {
          id: "tutorial-iframe",
          style: { width: "100%", height: `${e}px` },
          title: i?.data?.title || "",
          src: i?.data?.url,
          allowfullscreen: !0,
          frameborder: "0",
          loading: "lazy",
          onLoad: () => n(!1)
        }
      )
    ] })
  ] }) });
};
function Fi({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: c = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: d,
  breadcrumbs: p = [],
  enableBackButton: y = !1,
  breadcrumbColor: m,
  showHelpButton: s = !1
}) {
  const u = li(!0), g = p.length - 1, f = d && p.length, l = () => {
    t(-1);
  };
  return fe(() => {
    c && (document.title = c);
  }, [c]), /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ a(ia, { className: "print-only", text: e }),
    f && /* @__PURE__ */ E(ge, { children: [
      /* @__PURE__ */ a(Hn, { sx: { mb: 3 }, children: /* @__PURE__ */ E(Yn, { sx: { backgroundColor: m || "#fff" }, children: [
        /* @__PURE__ */ E(be, { container: !0, children: [
          /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(Kn, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: p.map((x, v) => v < g ? /* @__PURE__ */ a(Jn, { onClick: l, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: x.text }, v) : /* @__PURE__ */ a(Me, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: x.text }, v)) }) }),
          (p.length > 1 || y) && /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(tt, { variant: "contained", onClick: l, children: "Back" }) }),
          s && /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(jt, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ a(po, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Pe, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: u ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          ia,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !u && /* @__PURE__ */ E(ge, { children: [
          /* @__PURE__ */ E(Pe, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ E(Pe, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a(Oi, {})
    ] })
  ] });
}
const $a = Un()(Fi), Ke = {
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
}, _a = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: n = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const o = n.find((c) => c.Module === t.module);
  return o ? {
    canAdd: r.add && !!o[Ke.permissionsMapper.add],
    canEdit: r.edit && !!o[Ke.permissionsMapper.edit],
    canDelete: r.delete && !!o[[Ke.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
};
ne.extend(Da);
const Ii = {
  date: va,
  datetime: Er,
  dateTimeLocal: Er
}, Mi = "-10px", Ri = "-16px", Li = (e) => {
  const { fixedFilterFormat: t } = Ke, { item: r, applyValue: n, convert: o } = e, { systemDateTimeFormat: c, stateData: i } = Ne(), d = e?.type || "date", p = t[d], y = (l) => {
    const x = ne(l);
    return x.isValid() && x.year() > 1900;
  }, m = c(i.dateTime), s = (l) => {
    if (!(d !== "date" && d !== "datetime" && d !== "dateTimeLocal" || ((v) => typeof v != "string" ? !1 : !ne(v, m, !0).isValid())(l))) {
      if (o) {
        l = ne(l).utc(), n({ ...r, value: l });
        return;
      }
      if (!y(l)) {
        n({ ...r, value: null });
        return;
      }
      n({ ...r, value: l.format(p) });
    }
  }, u = (l) => {
    if (l && l === t.OverrideDateFormat) {
      const x = l.split("-");
      return x.length === 3 ? x[1] : null;
    }
  }, g = Ii[d], f = d === "dateTimeLocal" ? r?.value ? ne(r?.value.$d) : null : r?.value ? ne(r.value) : null;
  return /* @__PURE__ */ a(wa, { dateAdapter: Ta, children: /* @__PURE__ */ a(
    g,
    {
      fullWidth: !0,
      format: m,
      value: f,
      onChange: s,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Mi,
            marginBottom: Ri
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => u(m) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Gt = (e) => ha().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ a(Li, { ...r, ...e }) : void 0
})), Bi = {
  IsAnyOf: "isAnyOf"
}, Ni = (e) => {
  const { column: t, item: r, applyValue: n, apiRef: o } = e, c = t?.dataRef?.current?.lookups;
  let i = t.customLookup || c[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: s, value: u }) => ({
    label: s,
    value: u
  })));
  const d = ma(o, In), p = X(
    () => d.items?.filter((s) => s.field === t.field),
    [t.field, d.items]
  ), y = $(
    (s) => {
      let u = s.target.value;
      if (d.items.length >= 1) {
        u = u.length === 1 ? u[0] : u;
        for (const l of d.items)
          l.field === r.field && (l.operator === Bi.IsAnyOf ? u = Array.isArray(u) ? u : [u] : u = u === 0 ? "0" : u);
      }
      if (u.length === 0 && p[0]) {
        o.current.deleteFilterItem(p[0]);
        return;
      }
      const g = u, f = p[0] ? p[0] : r;
      n({ ...f, value: g });
    },
    [o, t.applyZeroFilter, p, r, n]
  ), m = p[0]?.value ?? "";
  return /* @__PURE__ */ a(pt, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    Cr,
    {
      label: t.field,
      variant: "standard",
      value: m,
      onChange: (s) => y(s),
      multiple: Array.isArray(m),
      MenuProps: {
        PaperProps: {
          style: {
            height: "fit-content",
            overflow: "hidden"
          }
        }
      },
      children: i?.map((s, u) => /* @__PURE__ */ a(Ue, { value: s.value, children: s.label }, u))
    }
  ) });
}, Ge = {
  Edit: "Edit",
  Delete: "Delete"
}, Fe = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, ki = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(br, { icon: /* @__PURE__ */ a(Pt, { title: Ge.Edit, children: /* @__PURE__ */ a(Ca, {}) }), tabIndex: 1, "data-action": Ge.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(br, { icon: /* @__PURE__ */ a(Pt, { title: Ge.Delete, children: /* @__PURE__ */ a(ba, {}) }), tabIndex: 2, "data-action": Ge.Delete, label: "Delete", color: "error" }, 2)] }
], $i = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, _i = { pageSize: 50, page: 0 }, zi = [5, 10, 20, 50, 100], Vi = ({ gridRef: e, preferenceKey: t, onPreferenceChange: r, t: n, tOpts: o }) => {
  const { getApiEndpoint: c } = Ne(), i = c("GridPreferenceManager"), d = ga(), p = At(), [y, m] = L(Fe.NONE), [s, u] = L(null), [g, f] = L(!1), [l, x] = L({}), [v, w] = L(null), [P, T] = L(null), I = X(
    () => v == null ? [] : v.filter((O) => O.prefId !== 0),
    [v]
  ), V = X(() => de.object({
    prefName: de.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: de.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), ee = (O) => u(O?.currentTarget), te = () => u(null), G = () => {
    m(Fe.NONE), te();
  }, k = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), T(null), r && r(null), te());
  }, K = $(async ({ applyDefault: O = !1 }) => {
    const z = await Ye({
      url: i,
      params: { action: "list", id: t },
      dataParser: Re.json
    });
    if (!z?.preferences) {
      p.showMessage(n("Failed to load preferences.", o)), r && r(null);
      return;
    }
    const ye = z.preferences.filter((H) => H.prefName.trim() !== "");
    if (w(ye), O) {
      const H = ye.find((ve) => ve.isDefault);
      if (H)
        return { defaultPrefId: H.prefId, preferences: ye };
      r && r(null);
    }
    return { preferences: ye };
  }, [i, t, p, n, o, r]), M = $(async (O, z = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), O === 0) {
      k();
      return;
    }
    const ye = z || v;
    if (!ye) {
      p.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const H = ye.find((oe) => oe.prefId === O);
    if (!H?.prefValue) {
      p.showMessage(n("Failed to load preference.", o));
      return;
    }
    let ve;
    try {
      ve = typeof H.prefValue == "string" ? JSON.parse(H.prefValue) : H.prefValue;
    } catch {
      p.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(ve), T(H.prefName), r && r(H.prefName), te();
  }, [e, k, v, r, p, n, o]), B = async (O) => {
    const z = O.prefName.trim(), ye = z.toLocaleLowerCase();
    if (v.find((ve) => ve.prefName.toLocaleLowerCase() === ye && ve.prefId !== O.prefId)) {
      f(!0);
      return;
    }
    const H = await Ye({
      url: i,
      params: {
        action: "save",
        id: t,
        prefId: O.prefId,
        prefName: z,
        prefDesc: O.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: O.isDefault
      },
      dataParser: Re.json
    });
    if (H === !0 || H?.success === !0) {
      p.showMessage(n(`Preference ${y === Fe.ADD ? "added" : "saved"} successfully.`, o)), G(), await K({ applyDefault: !1 });
      return;
    }
    p.showMessage(n("Error saving preference: ", o) + (H?.message || n("Unknown error", o)));
  }, _ = async () => {
    const O = await Ye({
      url: i,
      params: {
        action: "delete",
        id: t,
        prefIdArray: l.prefId
      },
      dataParser: Re.json
    });
    if (O === !0 || O?.success === !0) {
      p.showMessage(n("Preference deleted successfully.", o)), await K({ applyDefault: !1 }), x({});
      return;
    }
    p.showMessage(n("Error deleting preference: ", o) + (O?.message || n("Unknown error", o)));
  }, N = (O) => {
    const z = O.field === "editAction" ? Ge.Edit : O.field === "deleteAction" ? Ge.Delete : null;
    if (O.id === 0 && z) {
      p.showMessage(n(`Default preference cannot be ${z === Ge.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    z === Ge.Edit && (m(Fe.EDIT), A.setValues(O?.row)), z === Ge.Delete && x({
      prefId: O.id,
      preferenceName: O.row.prefName
    });
  }, Z = (O) => {
    m(O), te(), O === Fe.ADD && A.resetForm();
  }, A = Sa({
    initialValues: $i,
    validationSchema: V,
    onSubmit: B,
    mode: "onBlur"
  });
  fe(() => {
    if (!t) return;
    (async () => {
      const z = await K({ applyDefault: !0 });
      z?.defaultPrefId && z?.preferences && await M(z.defaultPrefId, z.preferences);
    })();
  }, [t]);
  const pe = y === Fe.MANAGE, ce = y === Fe.ADD || y === Fe.EDIT;
  return /* @__PURE__ */ E(Pe, { children: [
    /* @__PURE__ */ E(
      tt,
      {
        id: "grid-preferences-btn",
        "aria-controls": s ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": s ? "true" : void 0,
        onClick: ee,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(na, {}),
        children: [
          n("Preferences", o),
          " ",
          P && `(${P})`
        ]
      }
    ),
    /* @__PURE__ */ E(
      Zn,
      {
        id: "grid-preference-menu",
        anchorEl: s,
        open: !!s,
        onClose: te,
        component: Qn,
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
          /* @__PURE__ */ E(Ue, { component: fr, dense: !0, onClick: () => Z(Fe.ADD), children: [
            /* @__PURE__ */ a(hr, { children: /* @__PURE__ */ a(vr, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ E(Ue, { component: fr, dense: !0, onClick: () => Z(Fe.MANAGE), children: [
            /* @__PURE__ */ a(hr, { children: /* @__PURE__ */ a(na, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ E(Ue, { component: fr, dense: !0, divider: v?.length > 0, onClick: () => M(0), children: [
            /* @__PURE__ */ a(hr, { children: /* @__PURE__ */ a(So, {}) }),
            n("Reset to Default", o)
          ] }),
          v?.length > 0 && v?.map((O) => {
            const { prefName: z, prefDesc: ye, prefId: H } = O;
            return /* @__PURE__ */ a(
              Ue,
              {
                onClick: () => M(H),
                component: Xn,
                selected: P === z,
                title: n(ye, o),
                dense: !0,
                children: /* @__PURE__ */ a(eo, { primary: z })
              },
              `pref-item-${H}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ E(
      je,
      {
        open: y !== Fe.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ E(Me, { variant: "h5", children: [
          y,
          " ",
          n(pe ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: pe ? "md" : "sm",
        fullWidth: !0,
        children: [
          ce && /* @__PURE__ */ E(
            be,
            {
              component: "form",
              onSubmit: A.handleSubmit,
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
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
                  rt,
                  {
                    value: A.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ E("span", { children: [
                      n("Preference Name", o),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: A.handleChange,
                    error: !!A.errors.prefName,
                    helperText: A.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
                  rt,
                  {
                    value: A.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: n("Preference Description", o),
                    name: "prefDesc",
                    onChange: A.handleChange,
                    error: !!A.errors.prefDesc,
                    helperText: A.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
                  at,
                  {
                    control: /* @__PURE__ */ a(
                      to,
                      {
                        checked: A.values.isDefault,
                        name: "isDefault",
                        onChange: A.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ E(ta, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    tt,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ a(To, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: n("Save", o)
                    }
                  ),
                  /* @__PURE__ */ a(
                    tt,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ a(xr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: G,
                      disableElevation: !0,
                      children: n("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          pe && /* @__PURE__ */ E(be, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
              ya,
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
                onCellClick: N,
                columns: ki,
                pageSizeOptions: zi,
                pagination: !0,
                rowCount: I.length,
                rows: I,
                getRowId: (O) => O.GridPreferenceId,
                slots: {
                  headerFilterMenu: !1
                },
                density: "compact",
                disableDensitySelector: !0,
                apiRef: d,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                initialState: {
                  pagination: {
                    paginationModel: _i
                  }
                }
              }
            ) }),
            /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(ta, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
              tt,
              {
                type: "button",
                startIcon: /* @__PURE__ */ a(xr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: G,
                disableElevation: !0,
                children: n("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ E(
      je,
      {
        open: g,
        onConfirm: () => f(!1),
        title: "",
        okText: n("Ok", o),
        cancelText: "",
        children: [
          '"',
          A.values.prefName.trim(),
          '": ',
          n("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ E(
      je,
      {
        open: !!l.preferenceName,
        onConfirm: _,
        onCancel: () => x({}),
        title: n("Confirm delete", o),
        yesNo: !0,
        children: [
          n("Are you sure you wish to delete", o),
          ' "',
          l.preferenceName,
          '"?'
        ]
      }
    )
  ] });
}, Gi = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((n) => {
  r.lastIndex = 0;
  const o = r.exec(n);
  if (!o) return null;
  const [, c, i = "ASC"] = o;
  return {
    field: c.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), ct = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: n, type: o, isPivotExport: c = !1, icon: i }) => /* @__PURE__ */ E(
  Pa,
  {
    onClick: r,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": c,
    children: [
      /* @__PURE__ */ a(Je, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: i }),
      e(o, t)
    ]
  }
), Ui = ({ exportFormats: e, ...t }) => /* @__PURE__ */ E(Mn, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ a(ct, { ...t, icon: /* @__PURE__ */ a(mo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ a(ct, { ...t, icon: /* @__PURE__ */ a(aa, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ a(ct, { ...t, icon: /* @__PURE__ */ a(aa, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ a(ct, { ...t, icon: /* @__PURE__ */ a(go, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ a(ct, { ...t, icon: /* @__PURE__ */ a(yo, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ a(ct, { ...t, icon: /* @__PURE__ */ a(bo, { fontSize: "small" }), type: "JSON", contentType: "application/json" })
] }), Dr = (e, t) => {
  if (t) return t;
  switch (e) {
    case "string":
      return "startsWith";
    case "number":
      return "=";
    case "date":
    case "dateTime":
      return "is";
    case "boolean":
      return "is";
    case "select":
    case "lookup":
      return "isAnyOf";
    default:
      return "startsWith";
  }
}, qi = (e = {}, t = {}) => {
  let r = !0;
  for (const n in e)
    e[n] !== t[n] && (r = !1);
  for (const n in t)
    n in e || (r = !1);
  return r;
};
ne.extend(Da);
const ji = ({
  column: e,
  filterModel: t,
  setFilterModel: r,
  lookupData: n,
  tTranslate: o,
  tOpts: c
}) => {
  const { systemDateTimeFormat: i, stateData: d } = Ne(), { fixedFilterFormat: p } = Ke, y = X(() => t?.items?.find((f) => f.field === e.field), [t, e.field]), m = X(() => y ? y.value : e.toolbarFilter?.defaultOperator === "isAnyOf" ? [] : "", [y, e.toolbarFilter?.defaultOperator]), s = $((f) => {
    const l = e.toolbarFilter?.defaultOperator || Dr(e.type);
    r((x) => {
      const v = x?.items || [];
      if (f === "" || f === null || Array.isArray(f) && f.length === 0) {
        const T = v.filter((I) => I.field !== e.field);
        return {
          ...x,
          items: T
        };
      }
      const w = {
        field: e.field,
        operator: l,
        value: f,
        type: e.type
      }, P = v.filter((T) => T.field !== e.field);
      return {
        ...x,
        items: [...P, w]
      };
    });
  }, [e, r]), u = $((f, l) => l === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[f] || f : l === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[f] || f : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[f] || f, []);
  return (() => {
    const f = e.toolbarFilter?.label || e.headerName || e.label || e.field, l = e.toolbarFilter?.defaultOperator || Dr(e.type), x = u(l, e.type), w = e.type === "number" || e.type === "string" && l !== "startsWith" ? e.type === "number" ? `${x} ${f}` : `${f} (${x})` : f;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          rt,
          {
            variant: "standard",
            label: o(w, c),
            value: m,
            onChange: (M) => s(M.target.value),
            type: "text",
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "number":
        return /* @__PURE__ */ a(
          rt,
          {
            variant: "standard",
            label: o(w, c),
            value: m,
            onChange: (M) => s(M.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const M = m === "" || m === void 0 || m === null ? "" : m === !0 || m === "true" ? "true" : m === !1 || m === "false" ? "false" : "";
        return /* @__PURE__ */ E(pt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(ra, { children: o(w, c) }),
          /* @__PURE__ */ E(
            Cr,
            {
              value: M,
              onChange: (B) => {
                const _ = B.target.value;
                let N;
                _ === "" ? N = "" : _ === "true" ? N = !0 : _ === "false" ? N = !1 : N = _, s(N);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(Ue, { value: "", children: o("All", c) }),
                /* @__PURE__ */ a(Ue, { value: "true", children: o("True", c) }),
                /* @__PURE__ */ a(Ue, { value: "false", children: o("False", c) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const P = e.customLookup || n?.[e.lookup] || [], T = typeof e.lookup == "string" ? P.map((M) => ({
          label: M?.label || "",
          value: M?.value ?? ""
        })) : P, I = y?.operator === "isAnyOf" || e.toolbarFilter?.defaultOperator === "isAnyOf";
        return /* @__PURE__ */ E(pt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(ra, { children: o(w, c) }),
          /* @__PURE__ */ a(
            Cr,
            {
              value: m,
              onChange: (M) => s(M.target.value),
              multiple: I,
              size: "small",
              children: T.map((M) => /* @__PURE__ */ a(Ue, { value: M.value, children: M.label }, M.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const V = e.type, te = p[V === "dateTime" ? "datetime" : V], G = i(V !== "dateTime", !1, d.dateTime), k = V === "dateTime" ? Po : Ao;
        let K = null;
        if (m) {
          const M = ne(m);
          K = M.isValid() ? M : null;
        }
        return /* @__PURE__ */ a(wa, { dateAdapter: Ta, children: /* @__PURE__ */ a(
          k,
          {
            label: o(w, c),
            format: G,
            value: K,
            onChange: (M) => {
              !M || !M.isValid() ? s(null) : s(M.format(te));
            },
            slotProps: {
              textField: {
                variant: "standard",
                size: "small",
                sx: { minWidth: 150 }
              }
            }
          }
        ) });
      default:
        return /* @__PURE__ */ a(
          rt,
          {
            variant: "standard",
            label: o(w, c),
            value: m,
            onChange: (M) => s(M.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, Ut = Zt(Ae)({
  margin: "6px"
}), Wi = Zt(Rn)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), Hi = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: n,
    isReadOnly: o,
    canAdd: c,
    forAssignment: i,
    showAddIcon: d,
    onAdd: p,
    selectionApi: y,
    rowSelectionModel: m,
    selectAll: s,
    available: u,
    onAssign: g,
    assigned: f,
    onUnassign: l,
    effectivePermissions: x,
    clearFilters: v,
    handleExport: w,
    preferenceKey: P,
    apiRef: T,
    tTranslate: I,
    tOpts: V,
    filterModel: ee,
    setFilterModel: te,
    onPreferenceChange: G,
    toolbarItems: k,
    gridColumns: K
  } = e, M = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), B = ee?.items?.length || 0, _ = K?.filter((A) => A.toolbarFilter) || [], N = r?.lookups || {}, Z = r?.records || [];
  return /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ E(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "10px"
        },
        children: [
          /* @__PURE__ */ E("div", { children: [
            t.gridSubTitle && /* @__PURE__ */ E(St, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              I(t.gridSubTitle, V)
            ] }),
            n && t.showPreferenceInHeader && /* @__PURE__ */ E(St, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              I("Applied Preference", V),
              ": ",
              n
            ] }),
            (o || !c && !i) && /* @__PURE__ */ E(St, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !c || o ? "" : t.title
            ] }),
            !i && c && !o && /* @__PURE__ */ a(Ut, { startIcon: d ? /* @__PURE__ */ a(vr, {}) : null, onClick: p, size: "medium", variant: "contained", children: I(M, V) }),
            y.length && Z.length ? /* @__PURE__ */ a(
              Ut,
              {
                onClick: s,
                size: "medium",
                variant: "contained",
                children: m.ids.size === Z.length ? I("Deselect All", V) : I("Select All", V)
              }
            ) : /* @__PURE__ */ a(ge, {}),
            u && /* @__PURE__ */ a(Ut, { startIcon: d ? /* @__PURE__ */ a(vr, {}) : null, onClick: g, size: "medium", variant: "contained", children: I("Assign", V) }),
            f && /* @__PURE__ */ a(Ut, { startIcon: d ? /* @__PURE__ */ a(Eo, {}) : null, onClick: l, size: "medium", variant: "contained", children: I("Remove", V) })
          ] }),
          /* @__PURE__ */ E(Wi, { ...e, children: [
            x.showColumnsOrder && /* @__PURE__ */ a(
              Ln,
              {
                render: (A) => /* @__PURE__ */ a(
                  Ae,
                  {
                    ...A,
                    startIcon: /* @__PURE__ */ a(Do, {}),
                    size: "small",
                    variant: "text",
                    children: I("COLUMNS", V)
                  }
                )
              }
            ),
            x.filter && /* @__PURE__ */ E(ge, { children: [
              /* @__PURE__ */ a(
                Bn,
                {
                  render: (A) => /* @__PURE__ */ a(
                    Ae,
                    {
                      ...A,
                      startIcon: /* @__PURE__ */ a(ro, { badgeContent: B, color: "primary", children: /* @__PURE__ */ a(wo, {}) }),
                      size: "small",
                      variant: "text",
                      children: I("FILTERS", V)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Ae, { startIcon: /* @__PURE__ */ a(vo, {}), onClick: v, size: "small", children: I("CLEAR FILTER", V) })
            ] }),
            x.export && /* @__PURE__ */ a(Ui, { handleExport: w, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: I, tOpts: V }),
            k,
            P && /* @__PURE__ */ a(
              Vi,
              {
                gridRef: T,
                preferenceKey: P,
                onPreferenceChange: G,
                t: I,
                tOpts: V
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Pe, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: _.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: _.map((A) => /* @__PURE__ */ a(
      ji,
      {
        column: A,
        filterModel: ee,
        setFilterModel: te,
        lookupData: N,
        tTranslate: I,
        tOpts: V
      },
      A.field
    )) }) })
  ] });
}, Yi = 50, Ki = /(\w+)( ASC| DESC)?/i, Ji = 6e4, Ie = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, Zi = {
  article: /* @__PURE__ */ a(Gn, {}),
  edit: /* @__PURE__ */ a(Ca, {}),
  copy: /* @__PURE__ */ a(Vn, {}),
  delete: /* @__PURE__ */ a(ba, {}),
  history: /* @__PURE__ */ a(Oo, {}),
  download: /* @__PURE__ */ a(Fo, {})
}, W = {
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
  pageSizeOptions: [5, 10, 20, 50, 100],
  defaultActionWidth: 50
}, Qi = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], Xi = (e) => e.value ? /* @__PURE__ */ a(uo, { style: { color: "green" } }) : /* @__PURE__ */ a(xr, { style: { color: "gray" } }), sa = Zt("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), es = ({ params: e, handleSelectRow: t, idProperty: r }) => {
  const n = _n(), o = e.row[r], i = ma(n, zn)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    Aa,
    {
      onClick: (p) => {
        p.stopPropagation(), t({ row: e.row });
      },
      checked: i,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, la = fa(({
  model: e,
  columns: t,
  api: r,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: c,
  parent: i,
  where: d,
  title: p,
  showPageTitle: y,
  permissions: m,
  selected: s,
  assigned: u,
  available: g,
  disableCellRedirect: f = !1,
  onAssignChange: l,
  customStyle: x,
  onCellClick: v,
  showRowsSelected: w,
  showFullScreenLoader: P,
  customFilters: T,
  onRowDoubleClick: I,
  onRowClick: V = () => {
  },
  gridStyle: ee,
  reRenderKey: te,
  additionalFilters: G,
  onCellDoubleClickOverride: k,
  onAddOverride: K,
  dynamicColumns: M,
  toolbarItems: B,
  readOnly: _ = !1,
  onListParamsChange: N,
  apiRef: Z,
  baseFilters: A,
  ...pe
}) => {
  const [ce, O] = L({ pageSize: Yi, page: 0 }), [z, ye] = L({ recordCount: 0, records: null, lookups: {} }), H = !!l, ve = w, [oe, ke] = L({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [Ft, Qe] = L(!1), [Oe, ht] = L(null), It = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [ot, mt] = L(!1), he = At(), gt = e.paginationMode === W.client ? W.client : W.server, { t: yt, i18n: Mt } = xa(), h = X(() => ({ t: yt, i18n: Mt }), [yt, Mt]), [$e, De] = L(""), [bt, Rt] = L(Gi(n || e.defaultSort, W, Ki)), Ce = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Ce.items = [], e.defaultFilters.forEach((C) => {
    Ce.items.push(C);
  }));
  const [Le, Be] = L({ ...Ce }), { navigate: we, getParams: Xt, useParams: er, pathname: Ct } = Fr(), { id: tr } = er() || Xt, it = tr?.split("-")[0], Se = Z || ga(), { idProperty: ie = "id", showHeaderFilters: Lt = !0, disableRowSelectionOnClick: rr = !0, hideTopFilters: ar = !0, updatePageTitle: q = !0, isElasticScreen: se = !1, navigateBack: re = !1, selectionApi: Te = {}, debounceTimeOut: We = 300 } = e, xe = e.readOnly === !0 || _, Bt = e.allowDoubleClick === !1, st = yr(z), xt = e.showAddIcon === !0, Et = e.columns.filter(({ link: C }) => !!C).map((C) => C.link), { stateData: lt, dispatchData: _e, formatDate: nr, getApiEndpoint: or, buildUrl: ir } = Ne(), { timeZone: sr } = lt, Xe = X(() => ({ ...W.permissions, ...e.permissions, ...m }), [e.permissions, m]), Ir = ["isEmpty", "isNotEmpty", "isAnyOf"], qa = lt.getUserData || {}, Nt = e.columns.find((C) => C.type === "fileUpload")?.field || "", ja = { add: Xe.add, edit: Xe.edit, delete: Xe.delete }, { canAdd: Mr, canEdit: Rr, canDelete: Lr } = _a({ userData: qa, model: e, userDefinedPermissions: ja }), b = e.tTranslate ?? ((C) => C), { addUrlParamKey: kt, searchParamKey: vt, hideBreadcrumb: Wa = !1, tableName: Br, showHistory: Nr = !0, hideBreadcrumbInGrid: Ha = !1, breadcrumbColor: Ya, disablePivoting: Ka = !1, columnHeaderHeight: Ja = 70 } = e, kr = e.gridTitle || e.title, Dt = or("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, He = new URLSearchParams(window.location.search), [$r, Za] = L(null), [_r, Qa] = L(!Dt), ze = r || e.api, [lr, cr] = L(null), Xa = X(() => new Set(lr ? [lr] : []), [lr]), en = typeof e.getDetailPanelContent == "function";
  fe(() => {
    Se.current && (Se.current.prefKey = Dt);
  }, [Se, Dt]);
  const zr = $((C) => {
    Za(C), Qa(!0);
  }, []), ur = He.has("baseData") && He.get("baseData"), Vr = X(() => {
    if (ur)
      try {
        const C = JSON.parse(ur);
        if (typeof C === W.object && C !== null)
          return C;
      } catch (C) {
        console.error("Failed to parse baseData from URL:", C);
      }
    return {};
  }, [ur]), tn = $(({ row: C }) => {
    const S = C[ie];
    ke((F) => {
      const D = new Set(F?.ids || []);
      return D.has(S) ? D.delete(S) : D.add(S), { type: "include", ids: D };
    });
  }, [ie]), Gr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (C) => nr({ value: C, useSystemFormat: !0, showOnlyDate: !1, state: lt.dateTime, timeZone: sr }),
      filterOperators: Gt({ columnType: "date", label: b("Value", h) })
    },
    dateTime: {
      valueFormatter: (C) => nr({ value: C, useSystemFormat: !1, showOnlyDate: !1, state: lt.dateTime, timeZone: sr }),
      filterOperators: Gt({ columnType: "datetime", label: b("Value", h) })
    },
    dateTimeLocal: {
      valueFormatter: (C) => nr({ value: C, useSystemFormat: !1, showOnlyDate: !1, state: lt.dateTime, timeZone: sr }),
      filterOperators: Gt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: Xi
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (C) => /* @__PURE__ */ a(es, { params: C, handleSelectRow: tn, idProperty: ie })
    }
  };
  fe(() => {
    st.current = z;
  }, [z]), fe(() => {
    if (!T || !Object.keys(T).length) return;
    if (T.clear) {
      Be({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const C = Object.entries(T).reduce((S, [F, D]) => (F === W.startDate || F === W.endDate ? S.push(D) : F in T && S.push({ field: F, value: D, operator: "equals", type: "string" }), S), []);
    Be({ items: C, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [T]);
  const rn = $(({ field: C, lookupMap: S }) => (st.current.lookups || {})[(S || {})[C]?.lookup] || [], []);
  fe(() => {
    pe.isChildGrid || !ar || _e({
      type: Q.PASS_FILTERS_TO_HEADER,
      payload: {
        filterButton: null,
        hidden: { search: !0, operation: !0, export: !0, print: !0, filter: !0 }
      }
    });
  }, []);
  const Ur = $(
    ({ key: C, title: S, icon: F, color: D = "primary", disabled: R, otherProps: Y }) => /* @__PURE__ */ a(
      br,
      {
        icon: /* @__PURE__ */ a(Pt, { title: S, children: Zi[F] || F }),
        "data-action": C,
        label: S,
        color: D,
        disabled: R,
        ...Y
      },
      C
    ),
    []
  ), { customActions: $t = [] } = e, _t = X(() => {
    const C = [];
    return !H && !xe && C.push(
      {
        key: Ie.Edit,
        title: "Edit",
        icon: "edit",
        show: !!Rr,
        disabled: (S) => S.canEdit === !1
      },
      {
        key: Ie.Copy,
        title: "Copy",
        icon: "copy",
        show: !!Xe.copy
      },
      {
        key: Ie.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Lr
      },
      {
        key: Ie.History,
        title: "History",
        icon: "history",
        show: !!Nr
      },
      ...$t
    ), C.push({
      key: Ie.Download,
      title: "Download document",
      icon: "download",
      show: Nt.length > 0
    }), C.filter(({ show: S }) => S !== !1);
  }, [
    H,
    xe,
    Rr,
    Lr,
    Nr,
    Xe.copy,
    Nt.length,
    $t
  ]), an = $(
    ({ row: C }) => _t.map(
      ({ key: S, title: F, icon: D, color: R, disabled: Y, show: U, action: J, ...le }) => Ur({
        key: S,
        title: F || J,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: D,
        color: R,
        disabled: Y?.(C),
        otherProps: le
      })
    ),
    [_t, Ur]
  ), { gridColumns: Ee, pinnedColumns: qr, lookupMap: dr } = X(() => {
    let C = t || e.gridColumns || e.columns;
    M && (C = [...M, ...C]);
    const S = { left: [Nn.field], right: [] }, F = [], D = {}, R = { ...Gr, ...e.gridColumnTypes };
    for (const U of C) {
      if (U.gridLabel === null || i && U.lookup === i || U.type === W.oneToMany && U.countInList === !1) continue;
      const J = {};
      if (U.type === W.oneToMany && (J.type = "number", J.field = U.field.replace(/s$/, "Count")), R[U.type] && Object.assign(J, R[U.type]), J.valueOptions === W.lookup || U.type === W.boolean) {
        let ae = [];
        J.valueOptions === W.lookup && (J.valueOptions = (ue) => rn({ ...ue, lookupMap: D }), ae = [...ha(), ...kn()].filter((ue) => ["is", "not", "isAnyOf"].includes(ue.value))), U.type === W.boolean && (ae = $n()), J.filterOperators = ae.map((j) => ({
          ...j,
          InputComponent: j.InputComponent ? (ue) => /* @__PURE__ */ a(
            Ni,
            {
              column: {
                ...U,
                ...U.type === W.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: st
              },
              ...ue,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (U.linkTo || U.link) && (J.cellClassName = "mui-grid-linkColumn");
      const le = b(U.gridLabel || U.label, h);
      F.push({ ...U, ...J, headerName: le, description: le }), U.pinned && S[U.pinned === W.right ? W.right : W.left].push(U.field), D[U.field] = U;
    }
    let Y = e.standard;
    return Y === !0 && (Y = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), Y && typeof Y === W.object && Qi.forEach(({ key: U, field: J, type: le, header: ae }) => {
      if (Y[U] === !0) {
        const j = { field: J, type: le, headerName: b(ae, h), width: 200 };
        le === W.dateTime && (j.filterOperators = Gt({ columnType: "date" }), j.valueFormatter = Gr.dateTime.valueFormatter, j.keepLocal = !0), F.push(j);
      }
    }), _t.length && (F.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? W.defaultActionWidth) * _t.length,
      hidable: !1,
      getActions: an,
      headerName: b("Actions", h)
    }), S.right.push("actions")), { gridColumns: F, pinnedColumns: S, lookupMap: D };
  }, [t, e, i, m, H, M, yt]), pr = yr(!1);
  fe(() => {
    if (pr.current) return;
    const C = Ee?.filter((D) => D.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (C.length === 0) return;
    if (Le.items.some(
      (D) => C.some((R) => R.field === D.field)
    )) {
      pr.current = !0;
      return;
    }
    const F = C.map((D) => ({
      field: D.field,
      operator: Dr(D.type, D.toolbarFilter?.defaultOperator),
      value: D.toolbarFilter.defaultFilterValue,
      type: D.type
    }));
    Be((D) => ({
      ...D,
      items: [...D.items, ...F]
    })), pr.current = !0;
  }, [Ee]);
  const Ve = (C = "list", S = {}, F, D, R, Y) => {
    const { pageSize: U, page: J } = ce, le = ir(e.controllerType, R ? e.pivotApi : ze);
    (u || g) && (S[u ? "include" : "exclude"] = Array.isArray(s) ? s.join(",") : s);
    const ae = { ...Le }, j = Array.isArray(A) ? [...A] : [];
    if (e.joinColumn && it && j.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(it) }), G && (ae.items = [...ae.items || [], ...G]), S = { ...S, ...pe.extraParams }, !(!ae.items.length || ae.items.every((ea) => "value" in ea && ea.value !== void 0))) return;
    const wt = {
      action: C,
      page: F ? 0 : J,
      pageSize: F ? 1e6 : U,
      sortModel: bt,
      filterModel: ae,
      controllerType: e.controllerType,
      api: le,
      gridColumns: Ee,
      model: e,
      parentFilters: c,
      extraParams: S,
      contentType: F,
      columns: D,
      template: R ? e.exportTemplate : null,
      configFileName: R ? e.configFileName : null,
      baseFilters: j,
      isElasticExport: Y
    };
    return typeof N == "function" && N(wt), Se.current.listParams = wt, La({
      ...wt,
      setError: he.showError,
      setData: ye,
      dispatchData: _e,
      showFullScreenLoader: P,
      history: we
    });
  }, et = $(({ id: C, record: S = {}, mode: F }) => {
    if (o) {
      Ht({ id: C, api: ze, setActiveRecord: o, model: e, parentFilters: c, where: d, setError: he.showError });
      return;
    }
    let D = Ct;
    D.endsWith("/") || (D += "/"), F === "copy" ? (D += "0-" + C, _e({ type: "UPDATE_FORM_MODE", payload: "copy" })) : (D += C, _e({ type: "UPDATE_FORM_MODE", payload: "" })), kt && (He.set(kt, S[kt]), D += `?${He.toString()}`), we(D);
  }, [o, ze, e, c, d, Ct, kt, He, we, _e, Ht]), jr = $(({ documentLink: C }) => {
    C && window.open(C, "_blank");
  }, []), nn = $(async (C, S, F) => {
    let D = C.field === e.linkColumn ? Ie.Edit : null;
    if (!D && C.field === W.actions && (D = F?.action, !D)) {
      const le = S.target.closest("button");
      le && (D = le.dataset.action);
    }
    const { row: R } = C;
    if (!xe) {
      if (v && typeof await v({ cellParams: C, event: S, details: F }) !== W.boolean)
        return;
      const le = dr[C.field] || {};
      if (le.linkTo) {
        we({
          pathname: Vt.replaceTags(le.linkTo, R)
        });
        return;
      }
      switch (D) {
        case Ie.Edit:
          if (e.getDetailPanelContent) {
            const j = R[ie];
            cr((ue) => ue === j ? null : j);
            return;
          } else
            return et({ id: R[ie], record: R });
        case Ie.Copy:
          return et({ id: R[ie], mode: "copy" });
        case Ie.Delete:
          Qe(!0), ht({ name: R[e.linkColumn], id: R[ie] });
          break;
        case Ie.History:
          return we(`${or("history")}?tableName=${Br}&id=${R[ie]}&breadCrumb=${vt ? He.get(vt) : kr}`);
        default:
          const ae = $t.find((j) => j.action === D && typeof j.onClick === W.function);
          if (ae) {
            ae.onClick({ row: R, navigate: we });
            return;
          }
          break;
      }
    }
    if (D === Ie.Download && jr({ documentLink: R[Nt] }), !Et.length)
      return;
    const { row: Y } = C, U = dr[C.field] || {}, J = {
      pathname: Vt.replaceTags(U.linkTo, Y)
    };
    e.addRecordToState && (J.state = Y), we(J);
  }, [xe, v, dr, e, ie, Nt, we, Et, $t, Br, vt, He, kr, or, jr, et]), on = $(async () => {
    const C = ir(e.controllerType, ze);
    await Ar({ id: Oe.id, api: C, setError: he.showError, setErrorMessage: De, model: e }) === !0 ? (Qe(!1), he.showMessage("Record Deleted Successfully."), Ve()) : Qe(!1);
  }, [e.controllerType, ze, Oe?.id, he, De, e, Ve]), Wr = $(() => {
    De(null), Qe(!1);
  }, []), sn = $((C) => (typeof pe.processRowUpdate == "function" && pe.processRowUpdate(C, z), C), [pe.processRowUpdate, z]), ln = $((C) => {
    if (C.row.canEdit === !1)
      return;
    const { row: S } = C;
    if (typeof k === W.function) {
      k(C);
      return;
    }
    if (!xe && !Bt && !f && et({ id: S[ie], record: S }), xe && e.rowRedirectLink) {
      const F = {
        pathname: Vt.replaceTags(e.rowRedirectLink, S)
      };
      e.addRecordToState && (F.state = S), we(F);
    }
    typeof I === W.function && I(C);
  }, [k, xe, Bt, f, et, ie, e.rowRedirectLink, e.addRecordToState, we, I, Vt]), cn = $(async () => {
    if (oe.ids.size < 1) {
      he.showError("Please select at least one record to proceed");
      return;
    }
    const C = Array.from(oe.ids), S = new Map((z.records || []).map((R) => [R[ie], R]));
    let F = C.map((R) => ({ ...Vr, ...S.get(R) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (F = F.map(
      (R) => Object.fromEntries(e.selectionUpdateKeys.map((Y) => [Y, R[Y]]))
    ));
    const D = ir(e.controllerType, Te || ze);
    try {
      const R = await Or({
        id: 0,
        api: `${D}/updateMany`,
        values: { items: F },
        setError: he.showError,
        model: e,
        dispatchData: _e
      });
      if (R) {
        Ve();
        const Y = R.info ? R.info : "Record Added Successfully.";
        he.showMessage(Y);
      }
    } catch (R) {
      he.showError(R.message || "An error occurred, please try again later.");
    } finally {
      ke({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), mt(!1);
    }
  }, [oe.ids, he, z.records, ie, Vr, e.selectionUpdateKeys, e.controllerType, Te, ze, e, _e, Ve]), Hr = $(() => {
    if (Te.length > 0) {
      if (oe.ids.size > 0) {
        mt(!0);
        return;
      }
      he.showError(
        "Please select at least one record to proceed"
      );
      return;
    }
    typeof K === W.function ? K() : et({ id: 0 });
  }, [Te, he, K, et, oe.ids.size]), Yr = $(() => {
    Le?.items?.length && Be({ ...W.gridFilterModel });
  }, [Le]), zt = $(({ unassign: C, assign: S }) => {
    const F = Array.isArray(s) ? s : s.length ? s.split(",") : [], D = C ? F.filter((R) => !C.includes(parseInt(R))) : [...F, ...S];
    l(typeof s === W.string ? D.join(",") : D);
  }, [s, l]), Kr = $(() => {
    zt({ assign: Array.from(oe.ids) });
  }, [zt, oe.ids]), Jr = $(() => {
    zt({ unassign: Array.from(oe.ids) });
  }, [zt, oe.ids]), Zr = $(() => {
    const C = z.records || [];
    if (oe.ids.size === C.length)
      ke({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const F = C.map((D) => D[ie]);
      ke({
        type: "include",
        ids: new Set(F)
      });
    }
  }, [oe, z.records, ie]), un = $((C) => C[ie], [ie]), Qr = $((C) => {
    if (z?.recordCount > Ji) {
      he.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: S, columnVisibilityModel: F, lookup: D } = Se.current.state.columns, R = C.target.dataset.isPivotExport === "true", Y = Object.keys(F).filter((j) => F[j] === !1), U = new Set(Ee.filter((j) => j.exportable === !1).map((j) => j.field)), J = S.filter(
      (j) => !U.has(j) && !Y.includes(j) && j !== "__check__" && j !== "actions"
    );
    if (J.length === 0) {
      he.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const le = {};
    J.forEach((j) => {
      const ue = D[j];
      le[j] = { field: j, width: ue.width, headerName: ue.headerName || ue.field, type: ue.type, keepLocal: ue.keepLocal === !0, isParsable: ue.isParsable, lookup: ue.lookup };
    });
    const ae = e?.formActions?.export || R ? e?.formActions?.export || "export" : void 0;
    Ve(
      ae,
      void 0,
      C.target.dataset.contentType,
      le,
      R,
      se
    );
  }, [z?.recordCount, Se, Ee, he, Ve, se]);
  fe(() => {
    !ze || !_r || Ve();
  }, [ce, e, u, g, s, Le, it, G, pe.extraParams, bt, ze, Ee, c, se, _r, A]), fe(() => {
    if (!(pe.isChildGrid || H || !q))
      return _e({ type: Q.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: e.pageTitle || e.title, title: e.title } }), () => {
        _e({
          type: Q.PAGE_TITLE_DETAILS,
          payload: null
        });
      };
  }, []);
  const dn = $((C) => {
    const { items: S } = C, F = S.map((D) => {
      const { field: R, operator: Y, type: U, value: J } = D, le = Ee.find((ue) => ue.field === R) || {}, ae = le.type === W.Number;
      return ae && J < 0 ? { ...D, value: null } : Ir.includes(Y) || ae && !isNaN(J) || !ae ? (se && Ee.filter((wt) => wt.field === R)[0]?.isKeywordField && (D.filterField = `${D.field}.keyword`), D.value = ["isEmpty", "isNotEmpty"].includes(Y) ? null : J, { ...D, type: le.type }) : { field: R, operator: Y, type: U, value: ae ? null : J };
    });
    C.items = F, Be(C);
  }, [Ee, W.Number, Ir, se, Be]), pn = $((C) => {
    const S = C.map((F) => {
      const D = Ee.filter((U) => U.field === F.field)[0] || {}, R = se && D.isKeywordField, Y = { ...F, filterField: R ? `${F.field}.keyword` : F.field };
      return D.dataIndex && (Y.filterField = D.dataIndex), Y;
    });
    Rt(S);
  }, [Ee, se, Rt]), Xr = p || e.gridTitle || e.title, fn = vt ? [{ text: He.get(vt) || Xr }] : [{ text: Xr }], hn = $((C) => {
    cr(C.size > 0 ? [...C].pop() : null);
  }, []), mn = $((C) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...C,
    onRefresh: () => {
      cr(null), Ve();
    }
  }) : null, [e.getDetailPanelContent, Ve]), gn = X(() => ({
    filterValueTrue: b("Yes", h),
    filterValueFalse: b("No", h),
    noRowsLabel: b("No data", h),
    footerTotalRows: `${b("Total rows", h)}:`,
    MuiTablePagination: {
      labelRowsPerPage: b("Rows per page", h),
      labelDisplayedRows: ({ from: C, to: S, count: F }) => `${C}–${S} ${b("of", h)} ${F}`
    },
    toolbarQuickFilterPlaceholder: b(e?.searchPlaceholder || "Search...", h),
    toolbarColumns: b("Columns", h),
    toolbarFilters: b("Filters", h),
    toolbarExport: b("Export", h),
    filterPanelAddFilter: b("Add filter", h),
    filterPanelRemoveAll: b("Remove all", h),
    filterPanelDeleteIconLabel: b("Delete", h),
    filterPanelColumns: b("Columns", h),
    filterPanelOperator: b("Operator", h),
    filterPanelValue: b("Value", h),
    filterPanelInputLabel: b("Value", h),
    filterPanelInputPlaceholder: b("Filter value", h),
    columnMenuLabel: b("Menu", h),
    columnMenuShowColumns: b("Show columns", h),
    columnMenuManageColumns: b("Manage columns", h),
    columnMenuFilter: b("Filter", h),
    columnMenuHideColumn: b("Hide column", h),
    columnMenuManagePivot: b("Manage pivot", h),
    toolbarColumnsLabel: b("Select columns", h),
    toolbarExportLabel: b("Export", h),
    pivotDragToColumns: b("Drag here to pivot by", h),
    pivotDragToRows: b("Drag here to group by", h),
    pivotDragToValues: b("Drag here to create values", h),
    pivotColumns: b("Pivot columns", h),
    pivotRows: b("Row groups", h),
    pivotValues: b("Values", h),
    pivotMenuRows: b("Rows", h),
    pivotMenuColumns: b("Columns", h),
    pivotMenuValues: b("Values", h),
    pivotToggleLabel: b("Pivot", h),
    pivotSearchControlPlaceholder: b("Search pivot columns", h),
    columnMenuUnsort: b("Unsort", h),
    columnMenuSortAsc: b("Sort by ascending", h),
    columnMenuSortDesc: b("Sort by descending", h),
    columnMenuUnpin: b("Unpin", h),
    columnsPanelTextFieldLabel: b("Find column", h),
    columnsPanelTextFieldPlaceholder: b("Column title", h),
    columnsPanelHideAllButton: b("Hide all", h),
    columnsPanelShowAllButton: b("Show all", h),
    pinToLeft: b("Pin to left", h),
    pinToRight: b("Pin to right", h),
    unpin: b("Unpin", h),
    filterValueAny: b("any", h),
    filterOperatorIs: b("is", h),
    filterOperatorNot: b("is not", h),
    filterOperatorIsAnyOf: b("is any of", h),
    filterOperatorContains: b("contains", h),
    filterOperatorDoesNotContain: b("does not contain", h),
    filterOperatorEquals: b("equals", h),
    filterOperatorDoesNotEqual: b("does not equal", h),
    filterOperatorStartsWith: b("starts with", h),
    filterOperatorEndsWith: b("ends with", h),
    filterOperatorIsEmpty: b("is empty", h),
    filterOperatorIsNotEmpty: b("is not empty", h),
    filterOperatorAfter: b("is after", h),
    filterOperatorOnOrAfter: b("is on or after", h),
    filterOperatorBefore: b("is before", h),
    filterOperatorOnOrBefore: b("is on or before", h),
    toolbarFiltersTooltipHide: b("Hide filters", h),
    toolbarFiltersTooltipShow: b("Show filters", h),
    //filter textfield labels
    headerFilterOperatorContains: b("contains", h),
    headerFilterOperatorEquals: b("equals", h),
    headerFilterOperatorStartsWith: b("starts with", h),
    headerFilterOperatorEndsWith: b("ends with", h),
    headerFilterOperatorIsEmpty: b("is empty", h),
    headerFilterOperatorIsNotEmpty: b("is not empty", h),
    headerFilterOperatorAfter: b("is after", h),
    headerFilterOperatorOnOrAfter: b("is on or after", h),
    headerFilterOperatorBefore: b("is before", h),
    headerFilterOperatorOnOrBefore: b("is on or before", h),
    headerFilterOperatorIs: b("is", h),
    "headerFilterOperator=": b("equals", h),
    "headerFilterOperator!=": b("does not equal", h),
    "headerFilterOperator>": b("greater than", h),
    "headerFilterOperator>=": b("greater than or equal to", h),
    "headerFilterOperator<": b("less than", h),
    "headerFilterOperator<=": b("less than or equal to", h),
    columnsManagementSearchTitle: b("Search", h),
    columnsManagementNoColumns: b("No columns", h),
    paginationRowsPerPage: b("Rows per page", h),
    paginationDisplayedRows: ({ from: C, to: S, count: F }) => `${C}–${S} ${b("of", h)} ${F}`,
    toolbarQuickFilterLabel: b("Search", h),
    toolbarFiltersTooltipActive: (C) => `${C} ${b(C === 1 ? "active filter" : "active filters", h)}`,
    columnHeaderSortIconLabel: b("Sort", h),
    filterPanelOperatorAnd: b("And", h),
    filterPanelOperatorOr: b("Or", h),
    noResultsOverlayLabel: b("No results found", h),
    columnHeaderFiltersTooltipActive: (C) => `${C} ${b(C === 1 ? "active filter" : "active filters", h)}`,
    detailPanelToggle: b("Detail panel toggle", h),
    checkboxSelectionHeaderName: b("Checkbox selection", h),
    columnsManagementShowHideAllText: b("Show/Hide all", h),
    noColumnsOverlayLabel: b("No columns", h),
    noColumnsOverlayManageColumns: b("Manage columns", h),
    columnsManagementReset: b("Reset", h),
    groupColumn: (C) => `${b("Group by", h)} ${C}`,
    unGroupColumn: (C) => `${b("Ungroup", h)} ${C}`,
    footerRowSelected: (C) => {
      const S = C === 1 ? "item selected" : "items selected";
      return `${C.toLocaleString()} ${b(S, h)}`;
    }
  }), [b, h, e?.searchPlaceholder]), yn = X(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: z,
      currentPreference: $r,
      isReadOnly: xe,
      canAdd: Mr,
      forAssignment: H,
      showAddIcon: xt,
      onAdd: Hr,
      selectionApi: Te,
      rowSelectionModel: oe,
      selectAll: Zr,
      available: g,
      onAssign: Kr,
      assigned: u,
      onUnassign: Jr,
      effectivePermissions: Xe,
      clearFilters: Yr,
      handleExport: Qr,
      preferenceKey: Dt,
      apiRef: Se,
      gridColumns: Ee,
      tTranslate: b,
      tOpts: h,
      idProperty: ie,
      filterModel: Le,
      setFilterModel: Be,
      onPreferenceChange: zr,
      toolbarItems: B
    },
    footer: {
      pagination: !0,
      apiRef: Se,
      tTranslate: b,
      tOpts: h
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: b("Go to previous page", h),
        "aria-label": b("Go to previous page", h)
      },
      nextIconButtonProps: {
        title: b("Go to next page", h),
        "aria-label": b("Go to next page", h)
      }
    }
  }), [e, z, $r, xe, Mr, H, xt, Hr, Te, oe, Zr, g, Kr, u, Jr, Xe, Yr, Qr, Dt, Se, Ee, b, h, ie, Le, Be, zr, B]), bn = X(() => ({
    columns: {
      columnVisibilityModel: It
    },
    pinnedColumns: qr
  }), [It, qr]), Cn = X(() => ({
    headerFilterMenu: !1,
    toolbar: Hi,
    footer: oi
  }), []);
  return /* @__PURE__ */ E(ge, { children: [
    y !== !1 && /* @__PURE__ */ a(
      $a,
      {
        navigate: we,
        showBreadcrumbs: !Wa && !Ha,
        breadcrumbs: fn,
        enableBackButton: re,
        breadcrumbColor: Ya
      }
    ),
    /* @__PURE__ */ E(Pe, { style: ee || x, children: [
      /* @__PURE__ */ a(Pe, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        ya,
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
            },
            "& .MuiDataGrid-detailPanelToggleCell, & .MuiDataGrid-cell--withRenderer.MuiDataGrid-cell--detailPanelToggle": {
              display: "none"
            }
          },
          headerFilters: Lt,
          unstable_headerFilters: Lt,
          checkboxSelection: H,
          loading: !z.records || lt.loaderOpen,
          className: "pagination-fix",
          onCellClick: nn,
          onCellDoubleClick: ln,
          columns: Ee,
          paginationModel: ce,
          pageSizeOptions: W.pageSizeOptions,
          onPaginationModelChange: O,
          pagination: !0,
          rowCount: z.recordCount,
          rows: z.records || [],
          sortModel: bt,
          paginationMode: gt,
          sortingMode: gt,
          filterMode: gt,
          processRowUpdate: sn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: pn,
          onFilterModelChange: dn,
          rowSelectionModel: oe,
          onRowSelectionModelChange: ke,
          filterModel: Le,
          getRowId: un,
          onRowClick: V,
          slots: Cn,
          slotProps: yn,
          hideFooterSelectedRowCount: ve,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Se,
          disableAggregation: !0,
          disableRowGrouping: !0,
          disableRowSelectionOnClick: rr,
          disablePivoting: Ka,
          filterDebounceMs: We,
          initialState: bn,
          ...en && {
            getDetailPanelContent: mn,
            detailPanelExpandedRowIds: Xa,
            onDetailPanelExpandedRowIdsChange: hn
          },
          localeText: gn,
          showToolbar: !0,
          columnHeaderHeight: Ja
        }
      ) }),
      $e && /* @__PURE__ */ E(je, { open: !!$e, onConfirm: Wr, onCancel: Wr, title: "Info", hideCancelButton: !0, children: [
        " ",
        $e
      ] }),
      Ft && !$e && /* @__PURE__ */ a(je, { open: Ft, onConfirm: on, onCancel: () => Qe(!1), title: "Confirm Delete", children: /* @__PURE__ */ E(sa, { children: [
        b("Are you sure you want to delete", h),
        " ",
        Oe.name && /* @__PURE__ */ a(Pt, { style: { display: "inline" }, title: Oe.name, arrow: !0, children: Oe.name.length > 30 ? `${Oe.name.slice(0, 30)}...` : Oe.name }),
        " ?"
      ] }) }),
      ot && /* @__PURE__ */ a(
        je,
        {
          open: ot,
          onConfirm: cn,
          onCancel: () => mt(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ E(sa, { children: [
            b("Are you sure you want to add", h),
            " ",
            oe.ids.size,
            " ",
            b("records", { count: oe.ids.size, ...h }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, qi), ts = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = (d) => {
    r.setFieldValue(t, d.target.checked);
  }, c = X(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ E("div", { children: [
    /* @__PURE__ */ a(
      Lo,
      {
        control: /* @__PURE__ */ a(
          Aa,
          {
            ...n,
            name: t,
            disabled: i || e.disabled === !0,
            checked: c,
            onChange: o,
            onBlur: r.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ a(nt, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, wr = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = ft(), c = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ a(
    Jt,
    {
      type: "text",
      variant: e.variant || "standard",
      InputProps: {
        readOnly: e.readOnly === !0,
        sx: e.readOnly ? { backgroundColor: o.palette?.action?.disabled } : void 0
      },
      required: e.required,
      multiline: e.multiline,
      rows: c,
      fullWidth: !0,
      name: t,
      value: r.values[t],
      onChange: r.handleChange,
      onBlur: r.handleBlur,
      error: r.touched[t] && !!r.errors[t],
      helperText: r.touched[t] && r.errors[t],
      autoComplete: e.autoComplete,
      ...n,
      defaultValue: e.defaultValue
    },
    t
  );
};
function za(e, t) {
  const [r, n] = L(e);
  return fe(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}
const ca = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, rs = {
  outlined: oo,
  filled: no,
  standard: ao
}, as = () => /* @__PURE__ */ E(
  Ea,
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
      /* @__PURE__ */ a(
        Wt.Increment,
        {
          render: /* @__PURE__ */ a(jt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ a(
            Bo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        Wt.Decrement,
        {
          render: /* @__PURE__ */ a(jt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ a(
            Oa,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), ns = ({ column: e, otherProps: t, formik: r, field: n, ...o }) => {
  const { min: c, max: i, readOnly: d } = e, p = ft(), y = X(
    () => ca({ value: c, state: r.values }),
    [c, r.values]
  ), m = X(
    () => ca({ value: i, state: r.values }),
    [i, r.values]
  ), s = X(() => r.values[n] ?? null, [r.values[n]]), [u, g] = L(s), f = za(u, 400);
  fe(() => {
    f !== s && r.setFieldValue(n, f);
  }, [f]), fe(() => {
    s !== u && g(s);
  }, [s]);
  const l = (I) => {
    g(I);
  }, x = (I) => {
    r.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(I);
  }, v = En(), w = `number-field-${n}-${v}`, P = e.variant || "standard", T = rs[P];
  return /* @__PURE__ */ E(
    Wt.Root,
    {
      value: u,
      onValueChange: l,
      min: y,
      max: m,
      disabled: d,
      render: (I, V) => /* @__PURE__ */ a(
        pt,
        {
          fullWidth: !0,
          ref: I.ref,
          error: r.touched[n] && !!r.errors[n],
          sx: d ? {
            backgroundColor: p.palette?.action?.disabled
          } : void 0,
          children: I.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          Wt.Input,
          {
            render: (I, V) => /* @__PURE__ */ a(
              T,
              {
                id: w,
                inputRef: I.ref,
                value: V.inputValue,
                onChange: I.onChange,
                onBlur: (ee) => {
                  I.onBlur(ee), x(ee);
                },
                inputProps: {
                  ...I,
                  "aria-describedby": r.touched[n] && r.errors[n] ? `${w}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(as, {}),
                sx: { pr: 0 },
                ...t
              }
            )
          }
        ),
        r.touched[n] && r.errors[n] && /* @__PURE__ */ E(nt, { id: `${w}-error`, error: !0, children: [
          " ",
          r.errors[n],
          " "
        ] })
      ]
    }
  );
}, os = ({ otherProps: e, ...t }) => {
  const [r, n] = dt.useState(!1), o = () => n((p) => !p), c = (p) => {
    p.preventDefault();
  }, { readOnly: i = !1, disabled: d = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: d,
      endAdornment: /* @__PURE__ */ a(Ea, { position: "end", children: /* @__PURE__ */ a(
        jt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: c,
          edge: "end",
          disabled: d,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ a(No, {}) : /* @__PURE__ */ a(ko, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(wr, { otherProps: e, ...t });
}, is = ({ column: e, field: t, formik: r, otherProps: n, fieldConfigs: o = {}, mode: c }) => {
  const i = c !== "copy" && o.disabled, { systemDateTimeFormat: d, stateData: p } = Ne();
  return /* @__PURE__ */ Sr(
    va,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: d(!0, !1, p.dateTime),
      name: t,
      value: ne(r.values[t]),
      onChange: (y) => {
        const s = ne(y).hour(12).toISOString();
        r.setFieldValue(t, s);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: e.min ? ne(e.min) : null,
      maxDate: e.max ? ne(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, ss = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: c } = Ne();
  return /* @__PURE__ */ Sr(
    Er,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: o(!1, !1, c.dateTime),
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
}, ls = ({ column: e, field: t, formik: r, otherProps: n }) => {
  let o = r.values[t];
  return e.isUtc && (o = ne.utc(o).utcOffset(ne().utcOffset(), !0).format()), /* @__PURE__ */ Sr(
    $o,
    {
      ...n,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: ne(o),
      onChange: (c) => (e.isUtc && (c = c && c.isValid() ? c.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, c)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, cs = [null, void 0, ""];
function Va({ column: e, formik: t, lookups: r, dependsOn: n = [], isAutoComplete: o = !1, userSelected: c, model: i }) {
  const [d, p] = L([]), { buildUrl: y } = Ne(), m = At(), s = y(i.controllerType, i.api), u = X(() => {
    const l = {};
    if (!n.length) return l;
    for (const x of n)
      l[x] = t.values[x];
    return l;
  }, n.map((l) => t.values[l])), g = X(() => n.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, n]), f = async () => {
    if (!e.lookup) return;
    if (!Object.values(u).every(
      (x) => !cs.includes(x)
    )) {
      p([]);
      return;
    }
    Ba({
      api: s,
      setActiveRecord: p,
      model: i,
      setError: m.showError,
      lookups: r,
      reqData: {
        params: { lookups: [{ lookup: e.lookup, where: u }] }
      }
    });
  };
  return fe(() => {
    n.length ? f() : (o || !c.current) && p(g || []);
  }, [u, g, r, s, e.lookup]), d;
}
const us = dt.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], model: c, ...i }) => {
  const d = dt.useRef(!1), { placeHolder: p } = e, y = Va({ column: e, formik: r, lookups: n, dependsOn: o, userSelected: d, model: c }), m = ft(), s = X(() => {
    let g = r.values[t];
    if (y?.length && !g && !e.multiSelect && "IsDefault" in y[0]) {
      const f = y.find((l) => l.IsDefault);
      f && (g = f.value, r.setFieldValue(t, f.value));
    }
    return e.multiSelect && (!g || g.length === 0 ? g = [] : Array.isArray(g) || (g = g.split(",").map((f) => parseInt(f)))), g;
  }, [r.values[t], y, e.multiSelect, t]), u = $((g) => {
    typeof e.onChange == "function" && e.onChange({ formik: r, value: g.target.value, options: y, event: g }), r.handleChange(g), d.current = !0;
  }, [r.values[t], e.onChange, y]);
  return /* @__PURE__ */ E(
    Qt,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(_o, { children: p || "" }),
        /* @__PURE__ */ a(
          zo,
          {
            IconComponent: Oa,
            ...i,
            name: t,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${s}`,
            onChange: u,
            onBlur: r.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? m.palette?.action?.disabled : ""
            },
            children: Array.isArray(y) && y.map((g) => /* @__PURE__ */ a(Pa, { value: g.value, disabled: g.isDisabled, children: g.label }, g.value))
          }
        ),
        /* @__PURE__ */ a(nt, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), ua = Zt("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), ds = ({ component: e, name: t, formik: r, field: n, column: o }) => {
  const { value: c } = r.getFieldProps(t || n), { setFieldValue: i } = r, d = e || o.relation, p = $((y) => {
    i(t || n, y);
  }, [i, t, n]);
  return /* @__PURE__ */ E("div", { children: [
    /* @__PURE__ */ a(ua, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(d, { selected: c, available: !0, onAssignChange: p, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(ua, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(d, { selected: c, assigned: !0, onAssignChange: p, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, ps = ({ field: e, formik: t, orientation: r = "row", label: n, lookups: o, fieldConfigs: c = {}, mode: i, ...d }) => {
  const p = (g) => {
    t.setFieldValue(e, g.target.value);
  }, y = o ? o[d.column.lookup] : [], m = ft(), s = t.touched[e] && !!t.errors[e], u = i !== "copy" && c.disabled;
  return /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ a(pt, { component: "fieldset", error: s, children: /* @__PURE__ */ a(
      Pr,
      {
        row: r === "row",
        "aria-label": n,
        name: e,
        value: t.values[e] ?? "",
        onChange: p,
        children: y?.map((g, f) => /* @__PURE__ */ a(
          at,
          {
            value: g.value,
            control: /* @__PURE__ */ a(ut, {}),
            label: g.label,
            disabled: u
          },
          f
        ))
      }
    ) }),
    s && /* @__PURE__ */ a(nt, { style: { color: m.palette.error.main }, children: t.errors[e] })
  ] });
}, fs = {
  limitTags: 5
}, hs = qe.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], fieldConfigs: c = {}, mode: i, model: d, ...p }) => {
  const y = Va({ column: e, formik: r, lookups: n, dependsOn: o, model: d, isAutoComplete: !0 });
  let m = r.values[t] || [];
  Array.isArray(m) || (m = m.split(", ").map(Number));
  const s = y.filter((f) => m.includes(f.value)) || [], u = i !== "copy" && c.disabled, g = (f, l) => {
    let x = l?.map((v) => v.value) || [];
    e.dataFormat !== "array" && (x = x.length ? x.join(", ") : ""), r.setFieldValue(t, x);
  };
  return /* @__PURE__ */ E(
    Qt,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ a(
          Fa,
          {
            ...p,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || fs.limitTags,
            options: y || [],
            getOptionLabel: (f) => f.label || "",
            defaultValue: s,
            renderInput: (f) => /* @__PURE__ */ a(Jt, { ...f, variant: "standard" }),
            onChange: g,
            value: s,
            size: "small",
            disabled: u
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ a(nt, { children: r.errors[t] })
      ]
    },
    t
  );
}), ms = "#182eb5", gs = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], ys = io(so)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? ms : "#ffffff",
  border: `1px solid ${qo[500]}`,
  color: t ? "white" : "black"
})), bs = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ a(
  ys,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Cs = ({ name: e, field: t, formik: r, expired: n }) => {
  const { setFieldValue: o } = r, { value: c } = r.getFieldProps(e || t), i = "1000001", d = "0111110", p = "0".repeat(7), [y, m] = L(c || p), [s, u] = L(() => c ? c === i ? i : c === d ? d : "Custom" : ""), [g, f] = L(!1), l = $((w) => {
    if (Array.isArray(w)) {
      let P = p;
      for (const T of w)
        P = P.substring(0, T) + "1" + P.substring(T + 1);
      m(P), o(e || t, P), f(!0);
    } else {
      let P = g ? p : y;
      const T = P.slice(0, w) + (P[w] === "1" ? "0" : "1") + P.slice(w + 1);
      m(T), o(e || t, T), u("Custom"), f(!1);
    }
  }, [g, p, y, e, t, o]), x = ft(), v = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ a(pt, { component: "fieldset", error: v, children: /* @__PURE__ */ E(
      Pr,
      {
        row: !0,
        name: e || t,
        value: s,
        onChange: (w) => {
          const P = w.target.value;
          u(P), P !== "Custom" ? (m(P), o(e || t, P), f(!0)) : (m(p), o(e || t, p), f(!1));
        },
        children: [
          /* @__PURE__ */ a(at, { value: i, control: /* @__PURE__ */ a(ut, {}), label: "Weekends (Sat - Sun)", onClick: () => l([0, 6]) }),
          /* @__PURE__ */ a(at, { value: d, control: /* @__PURE__ */ a(ut, {}), label: "Weekdays (Mon - Fri)", onClick: () => l([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(at, { value: "Custom", control: /* @__PURE__ */ a(ut, {}), label: "Specific days" }),
          gs.map((w, P) => /* @__PURE__ */ a(
            bs,
            {
              day: w,
              onClick: () => l(P),
              isSelected: s === "Custom" && y[P] === "1",
              disabled: n
            },
            w.value
          ))
        ]
      }
    ) }),
    v && /* @__PURE__ */ a(nt, { style: { color: x.palette.error.main }, children: r.errors[t] })
  ] });
}, xs = ({ isAdd: e, column: t, field: r, formik: n, otherProps: o, fieldConfigs: c = {}, mode: i }) => {
  const d = ft();
  let p = n.values[r] || [];
  Array.isArray(p) || (p = p.split(",").map((u) => u.trim()));
  const y = qe.useMemo(() => i === "copy" ? !0 : typeof c.disabled < "u" ? c.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: n }) : !!t.disabled, [i, c.disabled, t.disabled]), m = t.hasDefault && !e ? [p[0]] : [], s = $((u, g, f, l = {}) => {
    const x = g.pop()?.trim();
    g.includes(x) || g.push(x), m && m.includes(l.option) && f === "removeOption" && (g = [l.option]), t.dataFormat !== "array" && (g = g.length ? g.join(",") : ""), n.setFieldValue(r, g);
  }, [n, r]);
  return /* @__PURE__ */ E(
    Qt,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[r] && !!n.errors[r],
      children: [
        /* @__PURE__ */ a(
          Fa,
          {
            ...o,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: p,
            options: [],
            renderInput: (u) => /* @__PURE__ */ a(
              Jt,
              {
                ...u,
                variant: "standard",
                InputProps: {
                  ...u.InputProps,
                  sx: {
                    ...u.InputProps?.sx,
                    ...y && { backgroundColor: d.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: s,
            size: "small",
            renderTags: (u, g) => u.map((f, l) => {
              const { key: x, ...v } = g({ index: l });
              return /* @__PURE__ */ a(
                Wo,
                {
                  label: f,
                  ...v,
                  disabled: m.includes(f)
                },
                x
              );
            }),
            disabled: y
          }
        ),
        n.touched[r] && n.errors[r] && /* @__PURE__ */ a(nt, { children: n.errors[r] })
      ]
    },
    r
  );
}, Es = (e = []) => {
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
function vs({ column: e, field: t, formik: r, lookups: n, fieldConfigs: o, mode: c }) {
  const i = n ? n[e.lookup] : [], d = Es(i), p = r.values[t]?.length ? r.values[t].split(", ") : [];
  let y;
  return c !== "copy" && (y = o?.disabled), /* @__PURE__ */ a(Je, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    Ho,
    {
      selectedItems: p,
      onSelectedItemsChange: (s, u) => {
        r.setFieldValue(t, u?.join(", ") || "");
      },
      disabled: y,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((s) => /* @__PURE__ */ a(oa, { itemId: s.value, label: s.label, children: s.children.map((u) => /* @__PURE__ */ a(oa, { itemId: u.value, label: u.label }, u.value)) }, s.value))
    }
  ) });
}
const Ds = { maxLength: 500 }, { errorMapping: ws } = Ke, Ts = 1024 * 1024;
function Ss({ column: e, field: t, formik: r }) {
  const n = r.values[t] || "", { stateData: o } = Ne(), { maxSize: c, formats: i } = e, { uploadApi: d, mediaApi: p, Url: y } = o?.gridSettings?.permissions, [m, s] = L({
    isExternal: "no",
    selectedFile: null
  }), [u, g] = L(!1), f = At(), { getParams: l, useParams: x } = Fr(), { associationId: v } = x() || l, w = v?.split("-")[0] || 1, P = (k) => {
    const K = k.target.value;
    s({
      ...m,
      isExternal: K,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, T = (k) => {
    r.setFieldValue(t, k.target.value);
  }, I = (k) => {
    const K = k.target.files[0];
    if (K) {
      if (c && K.size > c * Ts) {
        f.showError(`File size exceeds the maximum limit of ${c} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(K.type)) {
        f.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      s((M) => ({ ...M, selectedFile: K }));
    }
  }, V = async () => {
    if (m.selectedFile) {
      g(!0);
      try {
        const k = new FormData();
        k.append("file", m.selectedFile), k.append("DocumentGroupId", r.values.DocumentGroupId), k.append("AssociationId", w);
        const M = (await Ra({
          method: "POST",
          url: d,
          data: k,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!M.success) {
          f.showError(M.message || "Upload failed");
          return;
        }
        const B = p + "/" + M.filePath;
        r.setFieldValue(t, B);
      } catch (k) {
        const K = (k.message.match(/status code (\d{3})/) || [])[1];
        f.showError(ws[K]);
      } finally {
        g(!1);
      }
    }
  }, ee = new URL(y, window.location.origin).hostname.toLowerCase();
  dt.useEffect(() => {
    s({
      ...m,
      isExternal: n.toLowerCase().includes(ee) ? "no" : "yes"
    });
  }, [n, s]);
  const te = r.values[t]?.length > (e.max || Ds.maxLength), G = te ? "red" : "";
  return /* @__PURE__ */ E(Pe, { children: [
    /* @__PURE__ */ E(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Me, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ E(
        Pr,
        {
          row: !0,
          value: m.isExternal,
          onChange: P,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ a(at, { value: "yes", control: /* @__PURE__ */ a(ut, {}), label: "Yes" }),
            /* @__PURE__ */ a(at, { value: "no", control: /* @__PURE__ */ a(ut, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ E(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Me, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ E(Pe, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        m.isExternal === "yes" ? /* @__PURE__ */ a(
          rt,
          {
            fullWidth: !0,
            value: n,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: G },
                "&.Mui-focused fieldset": { borderColor: G },
                "&:hover fieldset": { borderColor: G }
              }
            },
            onChange: T,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ a(
          rt,
          {
            fullWidth: !0,
            value: n,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        te && /* @__PURE__ */ E(Me, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    m.isExternal === "no" && /* @__PURE__ */ E(Pe, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ E(
        tt,
        {
          variant: "outlined",
          component: "label",
          disabled: u,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: I })
          ]
        }
      ),
      m.selectedFile && /* @__PURE__ */ a(Pt, { title: m.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Me, { variant: "body2", children: m.selectedFile.name.length > 20 ? `${m.selectedFile.name.substring(0, 20)}...` : m.selectedFile.name }) }),
      /* @__PURE__ */ a(
        tt,
        {
          variant: "contained",
          color: "primary",
          onClick: V,
          disabled: !m.selectedFile || u,
          children: u ? /* @__PURE__ */ a(lo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Ps = ({ field: e, formik: t }) => {
  const [r, n] = qe.useState({}), o = za(r, 300);
  qe.useEffect(() => {
    if (t.values[e])
      try {
        const i = JSON.parse(t.values[e]);
        n(i);
      } catch {
        n({});
      }
  }, [t.values[e]]), qe.useEffect(() => {
    const i = JSON.stringify(o);
    t.values[e] !== i && t.setFieldValue(e, i);
  }, [o, e, t, t.values[e]]);
  const c = (i, d) => {
    const p = { ...r, [i]: d };
    n(p);
  };
  return /* @__PURE__ */ a(
    Qt,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[e] && !!t.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(r).map((i) => /* @__PURE__ */ E(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ E(St, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ a(
              Yo,
              {
                id: i,
                name: i,
                value: r[i],
                onChange: (d) => c(i, d.target.value),
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
}, As = {
  boolean: ts,
  select: us,
  string: wr,
  number: ns,
  password: os,
  date: is,
  dateTime: ss,
  time: ls,
  oneToMany: ds,
  radio: ps,
  autocomplete: hs,
  dayRadio: Cs,
  email: wr,
  chipInput: xs,
  treeCheckbox: vs,
  fileUpload: Ss,
  json: Ps
}, da = { paddingTop: "2.5px", paddingBottom: "2.5px" }, Os = jo("span")({
  color: "red !important"
}), Fs = ({ tabColumns: e, model: t, formik: r, data: n, onChange: o, combos: c, lookups: i, fieldConfigs: d, mode: p, handleSubmit: y }) => {
  const [m, s] = qe.useState(/* @__PURE__ */ new Set()), { activeStep: u, setActiveStep: g } = qe.useContext(Ua), f = {};
  for (let T = 0, I = t.columns.length; T < I; T++) {
    const { field: V, skip: ee } = t.columns[T];
    ee && (f[ee.step] = r.values[V]);
  }
  const l = (T) => m.has(T) || f[T], x = () => {
    for (let T = u + 1; T < e.length; T++)
      if (!l(T))
        return !1;
    return !0;
  }, v = () => {
    let T = u + 1;
    for (; f[T]; )
      T++;
    s((I) => new Set(I).add(u)), T >= e.length || x() ? y() : g(T);
  }, w = () => {
    let T = u - 1;
    for (; f[T] && T > 0; )
      T--;
    g(T);
  };
  if (!e?.length)
    return null;
  const P = e[u];
  return /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ a(Vo, { activeStep: u, sx: { marginBottom: "20px" }, children: e.map(({ title: T, key: I }, V) => /* @__PURE__ */ a(Go, { completed: l(V), children: /* @__PURE__ */ a(Uo, { children: /* @__PURE__ */ a(Me, { sx: { fontSize: "20px" }, children: T }) }) }, I)) }),
    /* @__PURE__ */ E(qe.Fragment, { children: [
      /* @__PURE__ */ a(Ga, { formElements: P.items, model: t, formik: r, data: n, onChange: o, combos: c, lookups: i, fieldConfigs: d, mode: p }),
      /* @__PURE__ */ E(Je, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        u !== 0 ? /* @__PURE__ */ E(Ae, { color: "inherit", disabled: u === 0, onClick: w, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ a(Ae, { onClick: v, variant: "contained", children: x() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, Ga = ({ formElements: e, model: t, formik: r, data: n, onChange: o, combos: c, lookups: i, fieldConfigs: d, mode: p, isAdd: y }) => e?.length ? /* @__PURE__ */ a(ge, { children: e.map(({ Component: m, column: s, field: u, label: g, otherProps: f }, l) => {
  const x = typeof s.relation == "function";
  return /* @__PURE__ */ E(mr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: x ? "flex-start" : "center", children: [
    s?.showLabel !== !1 ? /* @__PURE__ */ a(mr, { size: { xs: 3 }, sx: da, children: /* @__PURE__ */ E(Me, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
      s.label || u,
      ": ",
      s.required && /* @__PURE__ */ a(Os, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ a(mr, { size: { xs: x ? 12 : 9 }, sx: da, children: /* @__PURE__ */ a(m, { isAdd: y, model: t, fieldConfigs: d[u], mode: p, column: s, field: u, label: g, formik: r, data: n, onChange: o, combos: c, lookups: i, ...f }) })
  ] }, l);
}) }) : null, Is = function({ columns: e, tabs: t = {}, id: r, searchParams: n }) {
  const o = [], c = {};
  for (const d in t)
    c[d] = [];
  for (const d of e) {
    const p = d.type;
    if (d.label === null)
      continue;
    const { field: y, label: m, tab: s } = d, u = {};
    d.options && (u.options = d.options), d.dependsOn && (u.dependsOn = d.dependsOn);
    const g = As[p];
    if (!g || d.hideInAddGrid && r === "0")
      continue;
    (s && t[s] ? c[s] : o).push({ Component: g, field: y, label: m, column: { ...d, readOnly: n.has("showRelation") || d.readOnly }, otherProps: u });
  }
  const i = [];
  for (const d in c)
    i.push({ key: d, title: t[d], items: c[d] });
  return { formElements: o, tabColumns: i };
}, Ms = ({ model: e, formik: t, data: r, combos: n, onChange: o, lookups: c, id: i, fieldConfigs: d, mode: p, handleSubmit: y }) => {
  const m = Ke.emptyIdValues.includes(i), { formElements: s, tabColumns: u } = qe.useMemo(() => {
    const g = e.formConfig?.showTabbed, f = new URLSearchParams(window.location.search), { formElements: l, tabColumns: x } = Is({ columns: e.columns, tabs: g ? e.tabs : {}, id: i, searchParams: f });
    return { formElements: l, tabColumns: x, showTabs: g && x.length > 0 };
  }, [e]);
  return /* @__PURE__ */ E("div", { children: [
    /* @__PURE__ */ a(Ga, { isAdd: m, formElements: s, model: e, formik: t, data: r, onChange: o, combos: n, lookups: c, fieldConfigs: d, mode: p }),
    /* @__PURE__ */ a("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ a(Fs, { tabColumns: u, model: e, formik: t, data: r, onChange: o, combos: n, lookups: c, fieldConfigs: d, mode: p, handleSubmit: y }) })
  ] });
};
function Rs(e) {
  const { children: t, value: r, index: n, ...o } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      hidden: r !== n,
      id: `simple-tabpanel-${n}`,
      "aria-labelledby": `simple-tab-${n}`,
      ...o,
      children: r === n && /* @__PURE__ */ a(Je, { sx: { p: 3 }, children: t })
    }
  );
}
function Ls(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const Bs = fa(({ relation: e, parentFilters: t, parent: r, where: n, models: o, readOnly: c }) => {
  const i = o.find(({ name: y }) => y === e);
  if (!i) return null;
  const d = { ...i, hideBreadcrumb: !0 }, p = d instanceof Yt ? d : new Yt(d);
  return p ? /* @__PURE__ */ a(
    p.ChildGrid,
    {
      readOnly: c,
      parentFilters: t,
      parent: r,
      model: d,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), Ns = dt.memo(({ relations: e, parent: t, where: r = [], models: n, relationFilters: o, readOnly: c }) => {
  const [i, d] = L(0);
  return /* @__PURE__ */ E(Je, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(Je, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(Jo, { value: i, onChange: (y, m) => {
      d(m);
    }, "aria-label": "relations tabs", children: e.map((y, m) => {
      const s = n.find(({ name: g }) => g === y) || {}, u = s.listTitle || s.title || y;
      return /* @__PURE__ */ a(
        Ko,
        {
          label: u,
          ...Ls(m)
        },
        y
      );
    }) }) }),
    e.map((y, m) => /* @__PURE__ */ a(Rs, { value: i, index: m, children: /* @__PURE__ */ a(
      Bs,
      {
        readOnly: c,
        relation: y,
        models: n,
        parentFilters: o[y] || [],
        parent: t,
        where: r
      },
      y
    ) }, y))
  ] });
}), Ua = Kt(1), ks = {}, me = {
  object: "object",
  function: "function",
  baseData: "baseData",
  string: "string",
  create: "Create",
  copy: "Copy",
  edit: "Edit",
  number: "number",
  loadIdIndex: 1,
  editIdIndex: 0
}, $s = ({
  model: e,
  api: t,
  models: r,
  relationFilters: n = {},
  permissions: o = {},
  Layout: c = Ms,
  baseSaveData: i = {},
  sx: d,
  readOnly: p,
  beforeSubmit: y,
  deletePromptText: m,
  detailPanelId: s = null,
  // Grid Row Detail Panel Id
  onCancel: u,
  onSaveSuccess: g
}) => {
  const f = e.formTitle || e.title, { navigate: l, getParams: x, useParams: v, pathname: w } = Fr(), { relations: P = [] } = e, { dispatchData: T, stateData: I, buildUrl: V } = Ne(), ee = v() || x, { id: te = "" } = ee, G = s || te.split("-")[me.editIdIndex], k = new URLSearchParams(window.location.search), K = k.has(me.baseData) && k.get(me.baseData);
  if (K) {
    const q = JSON.parse(K);
    typeof q === me.object && q !== null && (i = { ...i, ...q });
  }
  const [M, B] = L(!0), [_, N] = L({}), [Z, A] = L({}), [pe, ce] = L(!1), O = At(), [z, ye] = L(null), [H, ve] = L(0), [oe, ke] = L(!1), [Ft, Qe] = L(null), [Oe, ht] = L(""), It = typeof e.applyFieldConfig === me.function ? e.applyFieldConfig({ data: _, lookups: Z }) : ks, ot = V(e.controllerType, e.api), { mode: mt } = I.dataForm, he = I.getUserData || {}, gt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: yt } = _a({
    userData: he,
    model: e,
    userDefinedPermissions: gt
  }), { hideBreadcrumb: Mt = !1, navigateBack: h } = e, $e = !("canEdit" in _) || _.canEdit, De = $(() => {
    let q;
    switch (typeof h) {
      case me.function:
        q = h({ params: ee, searchParams: k, data: _ });
        break;
      case me.number:
      case me.string:
        q = h;
        break;
      default:
        q = w.substring(0, w.lastIndexOf("/"));
        break;
    }
    l(q);
  }, [h, l, ee, k, _, w]), bt = X(() => Ke.emptyIdValues.includes(G), [G]), Rt = X(() => bt ? { ...e.initialValues, ..._, ...i } : { ...i, ...e.initialValues, ..._ }, [e.initialValues, _, G]);
  fe(() => {
    const q = t || ot;
    if (!q) return;
    B(!0), ye(e.getValidationSchema({ id: G, snackbar: O }));
    const se = te.split("-");
    Ht({
      ...{
        api: q,
        model: e,
        setError: Be
      },
      id: s || (se.length > 1 ? se[me.loadIdIndex] : G),
      setActiveRecord: we,
      dispatchData: T
    });
  }, [G, te, e, t, ot, s, T]);
  const Ce = Sa({
    enableReinitialize: !0,
    initialValues: Rt,
    validationSchema: z,
    validateOnBlur: !1,
    onSubmit: async (q, { resetForm: se }) => {
      Object.keys(q).forEach((re) => {
        typeof q[re] === me.string && (q[re] = q[re].trim());
      }), B(!0), Or({
        id: G,
        api: ot,
        values: q,
        setError: O.showError,
        model: e,
        dispatchData: T
      }).then((re) => {
        if (!re) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof g === me.function && g();
        const Te = re.info ? re.info : `Record ${G === 0 ? "Added" : "Updated"} Successfully.`;
        O.showMessage(Te), h !== !1 && De(), se({ values: Ce.values });
      }).catch((re) => {
        O.showError(
          "An error occured.",
          re
        ), e.reloadOnSave && se();
      }).finally(() => {
        B(!1);
      });
    }
  }), Le = $(() => {
    Ce.resetForm(), ke(!1), typeof u === me.function && u(), h !== !1 && De();
  }, [Ce, u, h, De]), Be = $((q, se) => {
    B(!1), O.showError(q, se), De();
  }, [O, De]), we = function({ id: q, title: se, record: re, lookups: Te }) {
    const We = te.indexOf("-") > -1, xe = !q || q === "0", Bt = xe ? me.create : We ? me.copy : me.edit, st = xe ? "" : re[e.linkColumn], xt = [{ text: e.breadCrumbs }, { text: Bt }];
    We && (re[e.linkColumn] = ""), e.columns.forEach((Et) => {
      Et.skipCopy && We && (re[Et.field] = "");
    }), N(re), A(Te), B(!1), st !== "" && xt.push({ text: st }), T({
      type: Q.PAGE_TITLE_DETAILS,
      payload: {
        showBreadcrumbs: !0,
        breadcrumbs: xt
      }
    });
  }, Xt = $((q) => {
    Ce.dirty && $e ? ke(!0) : (typeof u === me.function && u(), h !== !1 && De()), q.preventDefault();
  }, [Ce.dirty, $e, u, h, De]), er = $(async () => {
    try {
      ce(!0), await Ar({
        id: G,
        api: t || e.api,
        setError: O.showError,
        setErrorMessage: ht,
        model: e
      }) === !0 && (O.showMessage("Record Deleted Successfully."), h !== !1 && De());
    } catch {
      O.showError("An error occurred, please try after some time.");
    } finally {
      ce(!1);
    }
  }, [G, t, e.api, O, ht, e, h, De]), Ct = () => {
    ht(null), ce(!1);
  }, tr = $((q) => {
    const { name: se, value: re } = q.target;
    N({ ..._, [se]: re });
  }, [_]), it = $(async (q) => {
    q && q.preventDefault(), typeof y === me.function && await y({ formik: Ce, model: e });
    const { errors: se } = Ce;
    Ce.handleSubmit();
    const re = Object.keys(se)[0], Te = se[re];
    Te && O.showError(Te, null, "error");
    const We = e.columns.find(
      (xe) => xe.field === re
    ) || {};
    We.tab && ve(Object.keys(e.tabs).indexOf(We.tab));
  }, [y, Ce, e, O, ve]), Se = [
    { text: f },
    { text: G === "0" ? "New" : "Update" }
  ], ie = Number(G) !== 0 && !!P.length, Lt = k.has("showRelation"), rr = !$e || _.readOnlyRelations;
  m = m || "Are you sure you want to delete ?";
  const { showPageTitle: ar = !0 } = e;
  return /* @__PURE__ */ E(ge, { children: [
    ar && /* @__PURE__ */ a(
      $a,
      {
        navigate: l,
        title: f,
        showBreadcrumbs: !Mt,
        breadcrumbs: Se,
        model: e
      }
    ),
    /* @__PURE__ */ a(Ua.Provider, { value: { activeStep: H, setActiveStep: ve }, children: /* @__PURE__ */ E(Io, { sx: { padding: 2, ...d }, children: [
      M ? /* @__PURE__ */ a(Je, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(Ro, {}) }) : /* @__PURE__ */ E("form", { children: [
        /* @__PURE__ */ E(
          Mo,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              yt && $e && !Lt && !p && /* @__PURE__ */ a(
                Ae,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: it,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ a(
                Ae,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Xt,
                  children: "Cancel"
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Ae,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => ce(!0),
                  children: "Delete"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          c,
          {
            model: e,
            formik: Ce,
            data: _,
            fieldConfigs: It,
            onChange: tr,
            lookups: Z,
            id: G,
            handleSubmit: it,
            mode: mt
          }
        )
      ] }),
      Oe && /* @__PURE__ */ E(
        je,
        {
          open: !!Oe,
          onConfirm: Ct,
          onCancel: Ct,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            Oe
          ]
        }
      ),
      /* @__PURE__ */ a(
        je,
        {
          open: oe,
          onConfirm: Le,
          onCancel: () => ke(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ a(
        je,
        {
          open: pe,
          onConfirm: er,
          onCancel: () => {
            ce(!1), Qe(null);
          },
          title: Ft ? "Error Deleting Record" : "Confirm Delete",
          children: m
        }
      ),
      ie ? /* @__PURE__ */ a(
        Ns,
        {
          readOnly: rr,
          models: r,
          relationFilters: n,
          relations: P,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, qt = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, _s = {}, pa = !0, zs = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class Yt {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "", controllerType: n } = t;
    let { api: o, idProperty: c = o + "Id" } = t;
    const i = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    o || (o = `${r.replaceAll(qt.nonAlphaNumeric, "-").toLowerCase()}`, c = r.replaceAll(" ", "") + "Id"), o = n === "cs" ? `${o}.ashx` : `${o}`;
    const d = { ...t.defaultValues }, p = i || r;
    Object.assign(this, {
      standard: !0,
      name: p,
      permissions: { ...Yt.defaultPermissions },
      idProperty: c,
      linkColumn: `${p}Name`,
      overrideFileName: r,
      preferenceId: p,
      tableName: p,
      module: i,
      ...t,
      api: o
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(d);
  }
  _getColumnVisibilityModel() {
    const t = {};
    for (const r of this.columns)
      r.hide === !0 && (t[r.id || r.field] = !1);
    return t;
  }
  _getDefaultValues(t) {
    for (const r of this.columns) {
      const n = r.field || r.id;
      t[n] = r.defaultValue === void 0 ? zs[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, n = {};
    for (const o of r) {
      const { field: c, label: i, header: d, type: p = "string", requiredIfNew: y = !1, required: m = !1, min: s = "", max: u = "", validate: g } = o, f = i || d || c;
      if (!f || i === null || i === "") continue;
      let l;
      switch (p) {
        case "string":
          l = de.string().nullable().trim().label(f), s && !isNaN(Number(s)) && (l = l.min(Number(s), `${f} must be at least ${s} characters long`)), u && !isNaN(Number(u)) && (l = l.max(Number(u), `${f} must be at most ${u} characters long`)), m && (l = l.trim().required(`${f} is required`));
          break;
        case "boolean":
          l = de.bool().nullable().transform((x, v) => v === "" ? null : x).label(f);
          break;
        case "radio":
        case "dayRadio":
          l = de.mixed().label(f), m && (l = l.required(`Select at least one option for ${f}`));
          break;
        case "date":
          l = de.date().nullable().transform((x, v) => v === "" || v === null ? null : x).label(f), m && (l = l.required(`${f} is required`));
          break;
        case "dateTime":
          l = de.date().nullable().transform((x, v) => v === "" || v === null ? null : x).label(f), m && (l = l.required(`${f} is required`));
          break;
        case "select":
        case "autocomplete":
          m ? l = de.string().trim().label(f).required(`Select at least one ${f}`) : l = de.string().nullable();
          break;
        case "password":
          l = de.string().label(f).test("ignore-asterisks", `${f} must be a valid password.`, (x) => {
            if (x === "******") return !0;
            const v = Number(s) || 8, w = Number(u) || 50, P = o.regex || qt.password;
            return de.string().min(v, `${f} must be at least ${v} characters`).max(w, `${f} must be at most ${w} characters`).matches(
              P,
              `${f} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(x);
          });
          break;
        case "email":
          l = de.string().trim().matches(
            o.regex || qt.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          m ? l = de.number().label(f).required(`${f} is required.`) : l = de.number().nullable(), s !== void 0 && s !== "" && !isNaN(Number(s)) && (l = l.min(Number(s), `${f} must be greater than or equal to ${s}`)), u !== void 0 && u !== "" && !isNaN(Number(u)) && (l = l.max(Number(u), `${f} must be less than or equal to ${u}`));
          break;
        case "fileUpload":
          l = de.string().trim().label(f);
          break;
        default:
          l = de.mixed().nullable().label(f);
          break;
      }
      if (m && p !== "string" && (l = l.required(`${f} is required`)), y && (!t || t === "") && (l = l.trim().required(`${f} is required`)), g) {
        const x = qt.compareValidatorRegex.exec(g);
        if (x) {
          const v = x[1], w = r.find(
            (P) => (P.formField === v || P.field) === v
          );
          l = l.oneOf(
            [de.ref(v)],
            `${f} must match ${w.label}`
          );
        }
      }
      n[c] = l;
    }
    return de.object({ ...n, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ a($s, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ a(la, { model: this, showRowsSelected: pa, ...r });
  ChildGrid = (t) => /* @__PURE__ */ E(ge, { children: [
    /* @__PURE__ */ a(la, { model: this, ...t, customStyle: _s, showRowsSelected: pa }),
    /* @__PURE__ */ a(co, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  je as DialogComponent,
  la as GridBase,
  Oi as HelpModal,
  ia as MuiTypography,
  $a as PageTitle,
  cc as RouterProvider,
  Ia as SnackbarContext,
  ic as SnackbarProvider,
  lc as StateProvider,
  Yt as UiModel,
  sc as crudHelper,
  di as daDKGrid,
  fi as deDEGrid,
  mi as elGRGrid,
  yi as esESGrid,
  Ci as frFRGrid,
  Ye as httpRequest,
  Ei as itITGrid,
  Ai as locales,
  Ti as ptPT,
  Di as trTRGrid,
  li as useMobile,
  Fr as useRouter,
  At as useSnackbar,
  Ne as useStateContext
};
//# sourceMappingURL=index.js.map
