import { jsx as a, jsxs as D, Fragment as be } from "react/jsx-runtime";
import * as Ye from "react";
import ut, { createContext as ir, useContext as Nr, useState as B, useEffect as fe, useRef as rr, useCallback as T, useMemo as W, memo as En, useId as $a, createElement as Lr } from "react";
import Va from "@mui/material/Snackbar";
import za from "@mui/material/Alert";
import Me from "@mui/material/Button";
import Ga from "@mui/material/Dialog";
import ja from "@mui/material/DialogActions";
import Ua from "@mui/material/DialogContent";
import Wa from "@mui/material/DialogContentText";
import Ha from "@mui/material/DialogTitle";
import * as rt from "@mui/x-data-grid-premium";
import { GridFooterContainer as qa, GridFooter as Ya, getGridDateOperators as An, useGridSelector as Tn, gridFilterModelSelector as Ka, useGridApiRef as In, GridActionsCellItem as Ir, DataGridPremium as Mn, GridToolbarExportContainer as _a, Toolbar as Ja, ColumnsPanelTrigger as Za, FilterPanelTrigger as Qa, GRID_CHECKBOX_SELECTION_COL_DEF as Xa, getGridStringOperators as eo, getGridBooleanOperators as to, useGridApiContext as ro, gridRowSelectionStateSelector as no } from "@mui/x-data-grid-premium";
import On from "@mui/icons-material/Delete";
import ao from "@mui/icons-material/FileCopy";
import oo from "@mui/icons-material/Article";
import Bn from "@mui/icons-material/Edit";
import tt from "@mui/material/Box";
import Lt from "@mui/material/Typography";
import lr from "@mui/material/TextField";
import { useTranslation as sr, withTranslation as io } from "react-i18next";
import { Typography as Ne, Dialog as lo, DialogTitle as so, Grid as Ce, DialogContent as co, Card as uo, CardContent as po, Breadcrumbs as fo, Link as ho, Button as lt, IconButton as $t, Box as Pe, FormControl as Ct, Select as Mr, MenuItem as qe, Tooltip as xt, Menu as mo, List as go, ListItemButton as Sr, ListItemIcon as Fr, ListItem as bo, ListItemText as yo, TextField as st, FormControlLabel as ct, Checkbox as Co, Stack as mn, InputLabel as gn, Badge as xo, FormHelperText as dt, useTheme as vt, Input as wo, FilledInput as vo, OutlinedInput as Do, InputAdornment as Rn, RadioGroup as $r, Radio as yt, styled as So, Avatar as Fo, CircularProgress as Po, Divider as Eo } from "@mui/material";
import Ao from "@mui/icons-material/Check";
import Or from "@mui/icons-material/Close";
import To from "@mui/icons-material/Help";
import { Replay as Io, Close as Mo, GridOn as Oo, TableChart as Pr, Code as Bo, Language as Ro, DataObject as ko } from "@mui/icons-material";
import ae from "dayjs";
import kn from "dayjs/plugin/utc";
import No from "dayjs/plugin/timezone";
import { DatePicker as Nn } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Ln } from "@mui/x-date-pickers/DateTimePicker";
import Vr from "dayjs/plugin/utc.js";
import { LocalizationProvider as $n } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Vn } from "@mui/x-date-pickers/AdapterDayjs";
import Br from "@mui/icons-material/Add";
import Lo from "@mui/icons-material/Remove";
import $o from "@mui/icons-material/FilterListOff";
import Vo from "@mui/icons-material/ViewColumn";
import zo from "@mui/icons-material/FilterList";
import { styled as cr } from "@mui/material/styles";
import Go from "@mui/icons-material/Save";
import bn from "@mui/icons-material/Settings";
import jo from "@mui/icons-material/Refresh";
import { useFormik as zn } from "formik";
import * as he from "yup";
import { DateTimePicker as Uo, DatePicker as Wo } from "@mui/x-date-pickers";
import Gn from "@mui/material/MenuItem";
import Ho from "@mui/icons-material/History";
import qo from "@mui/icons-material/FileDownload";
import jn from "@mui/material/Checkbox";
import Yo from "@mui/material/Paper";
import Ko from "@mui/material/Stack";
import _o from "@mui/material/CircularProgress";
import Jo from "@mui/material/FormControlLabel";
import { NumberField as nr } from "@base-ui/react/number-field";
import Zo from "@mui/icons-material/KeyboardArrowUp";
import Un from "@mui/icons-material/KeyboardArrowDown";
import Qo from "@mui/icons-material/VisibilityOff";
import Xo from "@mui/icons-material/Visibility";
import { TimePicker as ei } from "@mui/x-date-pickers/TimePicker";
import ti from "@mui/icons-material/Clear";
import ur from "@mui/material/FormControl";
import ri from "@mui/material/InputLabel";
import ni from "@mui/material/Select";
import Er from "@mui/material/Grid";
import Wn from "@mui/material/Autocomplete";
import ai from "@mui/material/Stepper";
import oi from "@mui/material/Step";
import ii from "@mui/material/StepLabel";
import { grey as li } from "@mui/material/colors";
import si from "@emotion/styled";
import ci from "@mui/material/Chip";
import { SimpleTreeView as ui } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as yn } from "@mui/x-tree-view/TreeItem";
import di from "@mui/material/Input";
import pi from "@mui/material/Tab";
import fi from "@mui/material/Tabs";
const Hn = ir(null), hi = "bottom", mi = "center", gi = ut.forwardRef(function(r, t) {
  return /* @__PURE__ */ a(za, { elevation: 6, ref: t, variant: "filled", ...r });
}), Tc = ({ children: e }) => {
  const [r, t] = B(null), [n, o] = B(!1), [s, l] = B(null), [p, m] = B(null), y = function(c, g, w = "info", x) {
    typeof c != "string" && (c = c.toString()), g && typeof g != "string" && (g = g.toString()), t(g ? `${c}: ${g}` : c), l(w), o(!0), m(x);
  }, C = function(c, g, w = "error", x) {
    y(c, g, w, x);
  }, h = function() {
    o(!1), m(null), p && p();
  };
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(
      Hn.Provider,
      {
        value: { showMessage: y, showError: C },
        children: e
      }
    ),
    /* @__PURE__ */ a(Va, { open: n, autoHideDuration: 6e3, onClose: h, anchorOrigin: { vertical: hi, horizontal: mi }, children: /* @__PURE__ */ a(gi, { severity: s, children: r }) })
  ] });
}, Dt = function() {
  return Nr(Hn);
}, Ke = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: n, okText: o, cancelText: s, yesNo: l = !1, children: p, maxWidth: m = "sm", fullWidth: y = !0, ...C }) => (o = o || (l ? "Yes" : "Ok"), s = s || (l ? "No" : "Cancel"), /* @__PURE__ */ D(
  Ga,
  {
    ...C,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: m,
    fullWidth: y,
    children: [
      /* @__PURE__ */ a(Ha, { id: "alert-dialog-title", sx: { fontSize: p ? "inherit" : "1.25rem" }, children: t }),
      p && /* @__PURE__ */ a(Ua, { dividers: !0, children: /* @__PURE__ */ a(Wa, { children: p }) }),
      (n || r) && /* @__PURE__ */ D(ja, { children: [
        n && /* @__PURE__ */ a(Me, { onClick: n, children: s }),
        r && /* @__PURE__ */ a(Me, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Ar = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, qn = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, bi = (e, r) => {
  const t = new URL(e);
  for (const n in r) {
    const o = typeof r[n] == "object" ? JSON.stringify(r[n]) : r[n];
    t.searchParams.append(n, o);
  }
  window.open(t, "_blank").focus();
}, Yn = async (e) => {
  const {
    method: r = "GET",
    url: t,
    data: n,
    headers: o = {},
    credentials: s = "include",
    ...l
  } = e, p = {
    method: r,
    credentials: s,
    headers: {
      ...o
    },
    ...l
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete p.headers["Content-Type"], p.body = n instanceof FormData ? n : qn(n)) : (p.headers["Content-Type"] = o["Content-Type"] || "application/json", p.body = typeof n == "string" ? n : JSON.stringify(n)));
  const m = await fetch(t, p), y = m.headers.get("content-type") || {};
  return {
    status: m.status,
    data: y.includes("application/json") ? await m.json() : await m.text(),
    headers: Object.fromEntries(m.headers.entries())
  };
}, yi = (e) => e?.message || e?.info || e?.error || e?.err, Oe = Object.freeze({
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
}), et = async ({
  url: e,
  params: r = {},
  history: t,
  jsonPayload: n = !1,
  method: o = "POST",
  signal: s,
  additionalParams: l = {},
  additionalHeaders: p = {},
  dataParser: m = Oe.raw,
  onParseError: y
}) => {
  if (r.exportData)
    return bi(e, r);
  const C = {
    method: o,
    credentials: "include",
    url: e,
    headers: n ? { ...p } : { "Content-Type": "multipart/form-data", ...p },
    ...s && { signal: s },
    ...l
  };
  r && Object.keys(r).length > 0 && (C.data = n ? r : qn(r));
  try {
    const h = await Yn(C);
    let c = h.data;
    if (h.status === Ar.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (h.status === Ar.FORBIDDEN)
      return { error: !0, message: c.message || "Access Denied!" };
    if (h.status !== Ar.OK)
      return { error: !0, message: c.message || "An error occurred" };
    try {
      c = m(c);
    } catch (g) {
      return y ? y(g, c) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: g.message,
        rawData: c
      };
    }
    return c;
  } catch (h) {
    return h.name === "AbortError" ? { error: !0, aborted: !0, message: h.message || "Request aborted" } : { error: !0, message: h.message || "Network error" };
  }
}, Ci = ["date", "dateTime"], xi = ["singleSelect"], wi = 1e6;
function vi(e) {
  const { operator: r, value: t, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(r), s = t != null && (t !== "" || n === "number" && t === 0 || n === "boolean" && t === !1);
  return o || s;
}
const Di = (e, r = !1) => {
  if (typeof e != "string" || e === void 0 || e === null)
    return e;
  if (e.length === 0)
    return null;
  if (e.length === 17) {
    const n = +e.slice(0, 4), o = +e.slice(4, 6) - 1, s = +e.slice(6, 8), l = +e.slice(8, 10), p = +e.slice(10, 12), m = +e.slice(12, 14), y = +e.slice(14, 17);
    return r ? new Date(Date.UTC(n, o, s, l, p, m, y)) : new Date(n, o, s, l, p, m, y);
  }
  if (e.length === 24)
    return r ? new Date(e) : new Date(e.slice(0, -1));
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t;
};
async function wt(e, r) {
  typeof e.createRequestPayload == "function" && await e.createRequestPayload(r);
  const t = String(r.method ?? "").toUpperCase(), n = {
    url: r.url,
    method: r.method,
    jsonPayload: r.jsonPayload,
    dataParser: r.dataParser,
    signal: r.signal,
    responseType: r.responseType,
    columns: r.columns
  };
  return t !== "GET" && t !== "HEAD" && (n.params = r.params ?? { ...r.requestData, where: r.where }), n;
}
async function zr({ model: e, action: r, responseData: t, context: n = {} }) {
  return typeof e.parseResponsePayload == "function" && e.parseResponseActions?.includes(r) ? await e.parseResponsePayload({
    responseData: t,
    model: e,
    action: r,
    ...n
  }) : t;
}
function Vt(e, r) {
  if (e?.error || e?.success === !1)
    throw new Error(yi(e) || r);
}
const Si = ({ gridColumns: e, page: r, pageSize: t, sortModel: n, filterModel: o, baseFilters: s, action: l = "list", extraParams: p = {}, model: m, api: y }) => {
  const C = l === "export" && m.isElasticExport === !0, h = [], c = [], g = [];
  e.forEach(({ lookup: v, type: k, field: O, localize: E = !1, filterable: L = !0, dependsOn: te }) => {
    Ci.includes(k) && g.push({ field: O, localize: E }), v && !h.includes(v) && xi.includes(k) && L && (h.push(v), c.push({ lookup: v, dependsOn: te }));
  });
  const w = [];
  o?.items?.length && o.items.forEach((v) => {
    if (vi(v)) {
      const { field: k, operator: O, filterField: E } = v;
      let { value: L } = v;
      const H = e.filter((j) => j?.field === v.field)[0]?.type;
      H === "boolean" ? L = L === "true" || L === !0 ? 1 : 0 : H === "number" && (L = Array.isArray(L) ? L.filter((j) => j) : L), L = v.filterValues || L, w.push({
        field: E || k,
        operator: O,
        value: L,
        type: H
      });
    }
  }), s && Array.isArray(s) && w.push(...s);
  const x = {
    start: r * t,
    limit: C ? m.exportSize || wi : t,
    ...p,
    logicalOperator: o.logicOperator,
    sort: n.map((v) => (v.filterField || v.field) + " " + v.sort).join(","),
    // Note: where is excluded here and returned separately to allow modification via createRequestPayload hook
    isElasticExport: C,
    model: m.module,
    fileName: m.overrideFileName
  };
  h.length && (x.lookups = h.join(",")), c.length && (x.lookupWithDeps = JSON.stringify(c)), m?.limitToSurveyed && (x.limitToSurveyed = m?.limitToSurveyed);
  let u = `${y}/${l}`;
  const i = new URLSearchParams();
  p.template && i.append("template", p.template), p.configFileName && i.append("configFileName", p.configFileName);
  const S = i.toString();
  return S && (u += `?${S}`), { requestData: x, url: u, where: w, dateColumns: g };
}, Rr = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: n = {}, action: o = "list", model: s, signal: l } = e, { requestData: p, url: m, where: y, dateColumns: C } = Si(e);
  if (r) {
    const g = await wt(s, {
      where: y,
      url: m,
      requestData: p,
      dataParsers: Oe,
      responseType: r,
      columns: t,
      action: o,
      ...e
    }), w = {
      ...g.params,
      columns: g.columns,
      responseType: g.responseType
    }, x = document.createElement("form");
    if (x.setAttribute("method", "POST"), x.setAttribute("id", "exportForm"), x.setAttribute("target", "_blank"), !n.template)
      for (const u in w) {
        let i = w[u];
        if (i == null)
          continue;
        typeof i != "string" && (i = JSON.stringify(i));
        const S = document.createElement("input");
        S.type = "hidden", S.name = u, S.value = i, x.append(S);
      }
    x.setAttribute("action", g.url), document.body.appendChild(x), x.submit(), setTimeout(() => {
      x.remove();
    }, 0);
    return;
  }
  const h = await wt(s, {
    where: y,
    url: m,
    requestData: p,
    dataParsers: Oe,
    dataParser: Oe.json,
    jsonPayload: !0,
    action: o,
    signal: l,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    ...e
  }), c = await et(h);
  return c?.aborted || (Vt(c, "An error occurred while fetching data"), await zr({ model: s, action: o, responseData: c, context: { dateColumns: C, model: s, action: o, ...e } }), c.records.forEach((g) => {
    C.forEach((w) => {
      const { field: x, localize: u } = w;
      g[x] && (g[x] = Di(g[x], u));
    }), s.columns.forEach(({ field: w, displayIndex: x }) => {
      x && (g[w] = g[x]);
    });
  })), c;
}, ar = async (e = {}) => {
  let { api: r, id: t, model: n, parentFilters: o, where: s = {} } = e;
  r = r || n.api;
  const l = new URLSearchParams(), p = `${r}/${t ?? "-"}`, m = [];
  (n.formDef || n.columns)?.forEach((i) => {
    i.lookup && !m.includes(i.lookup) && !i.dependsOn && m.push(i.lookup);
  }), l.set("lookups", m), s && Object.keys(s)?.length && l.set("where", JSON.stringify(s));
  const C = await wt(n, {
    url: `${p}?${l.toString()}`,
    method: "GET",
    lookupsToFetch: m,
    jsonPayload: !0,
    action: "load",
    dataParsers: Oe,
    ...e
  }), h = await et(C);
  Vt(h, "Load failed"), await zr({ model: n, action: "load", responseData: h, context: e });
  const { data: c, lookups: g } = h || {};
  let w = c[n.linkColumn];
  const x = n.columns.find((i) => i.field === n.linkColumn);
  if (x && x.lookup && g && g[x.lookup] && g[x.lookup]?.length) {
    const i = g[x.lookup].find((S) => S.value === w);
    i && (w = i.label);
  }
  const u = { ...n.defaultValues };
  return { id: t, title: w, record: { ...u, ...c, ...o }, lookups: g };
}, Gr = async function(e = {}) {
  const { id: r, api: t, model: n } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = await wt(n, {
    url: `${t}/${r}`,
    method: "DELETE",
    dataParsers: Oe,
    jsonPayload: !0,
    action: "delete",
    ...e
  }), s = await et(o);
  return Vt(s, "Delete failed"), !0;
}, jr = async function(e = {}) {
  const { id: r, api: t, values: n, model: o } = e;
  let s, l;
  r !== 0 ? (s = `${t}/${r}`, l = "PUT") : (s = t, l = "POST");
  const p = await wt(o, {
    url: s,
    method: l,
    params: n,
    action: "save",
    jsonPayload: !0,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    dataParsers: Oe,
    ...e
  }), m = await et(p);
  return Vt(m, "Save failed"), m;
}, Kn = async (e = {}) => {
  let { api: r, model: t, lookups: n, scopeId: o, reqData: s } = e;
  r = r || t.api;
  const l = new URLSearchParams(), p = `${r}/lookups`;
  l.set("lookups", n), l.set("scopeId", o);
  const m = await wt(t, {
    url: `${p}?${l.toString()}`,
    method: "GET",
    lookups: n,
    scopeId: o,
    dataParsers: Oe,
    dataParser: Oe.json,
    jsonPayload: !0,
    action: "lookups",
    ...s,
    ...e
  }), y = await et(m);
  return Vt(y, "Could not load lookups"), await zr({ model: t, action: "lookups", responseData: y, context: e });
}, Ic = {
  getList: Rr,
  getRecord: ar,
  deleteRecord: Gr,
  saveRecord: jr,
  getLookups: Kn
}, Fi = ({ pagination: e, apiRef: r, tTranslate: t = (n) => n }) => {
  const n = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, s = r.current.state.rows.totalRowCount, l = Math.ceil(s / o), { t: p, i18n: m } = sr(), y = { t: p, i18n: m }, [C, h] = B(n + 1), c = function(x) {
    let u = x.target?.value;
    u === "" ? h("") : (u = parseInt(u), u = isNaN(u) || u < 1 ? 1 : u, h(u));
  };
  fe(() => {
    h(n + 1);
  }, [n, o]);
  const g = function() {
    let x = C === "" ? 1 : C;
    x = Math.max(x, 1), x = Math.min(x, l), r.current.setPage(x - 1), h(x), C === "" && h(1);
  }, w = (x) => {
    const u = x.which || x.keyCode, i = String.fromCharCode(u);
    /\d/.test(i) || x.preventDefault();
  };
  return /* @__PURE__ */ D(qa, { children: [
    /* @__PURE__ */ a(tt, { sx: { pl: 5 }, children: e && /* @__PURE__ */ D(be, { children: [
      /* @__PURE__ */ D(Lt, { variant: "p", children: [
        t("Jump to page", y),
        ":"
      ] }),
      /* @__PURE__ */ a(
        lr,
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
          value: C,
          onChange: c,
          onKeyPress: w,
          disabled: !s
        }
      ),
      /* @__PURE__ */ a(Me, { disabled: !s, size: "small", onClick: g, children: t("Go", y) })
    ] }) }),
    /* @__PURE__ */ a(Ya, {})
  ] });
}, Pi = /\${((\w+)\.)?(\w+)}/g, Ei = function(e, r, { template: t = Pi, keepMissingTags: n = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, s, l, p) {
    const m = l ? r[l] || {} : r;
    return m[p] === void 0 ? n ? o : "" : m[p];
  });
}, Xt = {
  replaceTags: Ei
};
function Cn({ variant: e = "h2", component: r = "h2", text: t = "", name: n = null, ...o }) {
  return /* @__PURE__ */ D(Ne, { variant: e, component: r, ...o, children: [
    t,
    n && ` ${n}`
  ] });
}
function Ai(e = !1) {
  const r = s(), [t, n] = B(r);
  function o() {
    setTimeout(() => {
      n(s());
    }, 10);
  }
  fe(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function s() {
    let l = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const p = !!l.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    l = l.toLowerCase();
    const m = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(l);
    let y = null;
    return window.innerWidth <= window.innerHeight ? y = "portrait" : y = "landscape", { mobile: p, tablet: m, portrait: y === "portrait", landscape: y === "landscape" };
  }
  return e ? t.mobile : t;
}
const Ti = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Ii = {
  ...rt.daDK,
  ...Ti
}, Mi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Oi = {
  ...rt.deDE,
  ...Mi
}, Bi = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Ri = {
  ...rt.elGR,
  ...Bi
}, ki = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Ni = {
  ...rt.esES,
  ...ki
}, Li = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, $i = {
  ...rt.frFR,
  ...Li
}, Vi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, zi = {
  ...rt.itIT,
  ...Vi
}, Gi = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, ji = {
  ...rt.trTR,
  ...Gi
}, Ui = {
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
          footerTotalVisibleRows: (e, r) => `${e.toLocaleString()} de ${r.toLocaleString()}`,
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
}, Wi = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Hi = {
  ...rt.enUS,
  ...Wi
}, qi = {
  en: Hi,
  "tr-TR": ji,
  "es-ES": Ni,
  "da-DK": Ii,
  "de-DE": Oi,
  "el-GR": Ri,
  "fr-FR": $i,
  "pt-PT": Ui,
  "it-IT": zi
};
ae.extend(kn);
ae.extend(No);
const _n = ir(), Jn = ir(null), xn = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Mc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, n] = B("en"), [o, s] = B("MM/DD/YYYY hh:mm:ss A"), [l, p] = B(null), [m, y] = B(null), [C, h] = B(null), [c, g] = B(null), [w, x] = B(""), [u, i] = B(!1), { t: S, i18n: v } = sr(), k = Dt(), O = rr(r), E = T((F, A) => {
    O.current[F] = A;
  }, []), L = T((F) => O.current[F || "default"] || "", []), te = T((F, A) => `${O.current[A || "default"] || ""}${F}`, []), H = T((F = !0) => {
    i(F);
  }, []), j = T((F, A, ee) => {
    if (ee != null) {
      const z = ee;
      let re = F ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return z && (re = z.split(" "), re[0] = re[0].toUpperCase(), F ? re = re[0] : A ? re = re[0].toUpperCase() : (re[1] += re[1].includes(":ss") ? "" : ":ss", re = re.join(" "))), re;
    }
    return F?.split(" ")[0] || "DD-MM-YYYY";
  }, []), _ = T(({ value: F, useSystemFormat: A, showOnlyDate: ee = !1, state: z }) => {
    if (!F) return null;
    const re = j(A, ee, z);
    return ae(F).format(re);
  }, [j]), U = T(() => {
    const F = t, A = qi[F];
    function ee(z) {
      return F === "pt-PT" || F === "ptPT" ? A.components.MuiDataGrid.defaultProps.localeText[z] || z : A[z] || z;
    }
    return { getLocalizedString: ee };
  }, [t]), N = T((F) => {
    n(F);
  }, []), xe = T((F) => {
    p(F);
  }, []), oe = T((F) => {
    h(F);
  }, []), ie = T((F) => {
    g(F);
  }, []), Q = T((F) => {
    x(F);
  }, []), X = T((F) => {
    s(F);
  }, []), de = T((F) => {
    y(F);
  }, []), $ = W(() => ({
    locale: t,
    dateTime: o,
    pageTitle: l,
    modal: m,
    pageBackButton: C,
    userData: c,
    timeZone: w
  }), [t, o, l, m, C, c, w]), we = W(() => ({
    // State data
    stateData: $,
    // Loader management
    isLoading: u,
    showLoader: H,
    // Snackbar utilities
    showMessage: k?.showMessage || xn,
    showError: k?.showError || xn,
    // i18n utilities
    dayjs: ae,
    t: S,
    i18n: v,
    // Date/time utilities
    systemDateTimeFormat: j,
    formatDate: _,
    useLocalization: U,
    // API utilities
    getApiEndpoint: L,
    setApiEndpoint: E,
    buildUrl: te,
    // App-level state setters with meaningful names
    setLocale: N,
    setPageTitle: xe,
    setPageBackButton: oe,
    setUserData: ie,
    setTimeZone: Q,
    setDateTimeFormat: X,
    setModal: de
  }), [
    $,
    u,
    H,
    S,
    v,
    k,
    L,
    E,
    j,
    _,
    U,
    N,
    xe,
    oe,
    ie,
    Q,
    X,
    de,
    te
  ]);
  return /* @__PURE__ */ a(_n.Provider, { value: we, children: e });
}, Oc = Jn.Provider, Ur = () => Nr(Jn), Ge = () => {
  const e = Nr(_n);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Yi = () => {
  const [e, r] = B(), [t, n] = B(!1), { stateData: o, setModal: s } = Ge(), l = o.modal, p = 16 / 9;
  let m = (window.outerWidth - 10) / window.innerWidth * 100;
  const y = () => {
    let h = document.getElementById("tutorial-iframe");
    h ? (h = h.offsetWidth, h = h / window.innerWidth) : h = 0.9;
    const c = window.innerWidth * h * (1 / p), g = window.innerHeight - 180;
    r(Math.min(c, g));
  };
  fe(() => {
    l?.status && (n(!0), y());
  }, [l, m]), fe(() => (window.addEventListener("resize", y), () => {
    window.removeEventListener("resize", y);
  }), []);
  function C() {
    const h = document.getElementById("tutorial-iframe");
    h.src = l?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: l?.status && /* @__PURE__ */ D(lo, { fullWidth: !0, maxWidth: "lg", open: l.status, onClose: () => {
    s({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(so, { className: "pt-2 pb-0", children: /* @__PURE__ */ D(Ce, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ D(Ce, { size: 11, children: [
        /* @__PURE__ */ D(Ne, { variant: "h7", component: "div", children: [
          " ",
          l?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Ne, { variant: "caption", component: "div", children: l?.data?.subTitle || /* @__PURE__ */ a(be, { children: " " }) })
      ] }),
      /* @__PURE__ */ D(Ce, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(Io, { className: "cursor_pointer mt-2 mr-2", onClick: C }),
        /* @__PURE__ */ a(Mo, { className: "cursor_pointer mt-2", onClick: () => {
          s({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ D(co, { dividers: !0, children: [
      t && /* @__PURE__ */ a("div", { children: "Loading..." }),
      l?.data?.url && /* @__PURE__ */ a(
        "iframe",
        {
          id: "tutorial-iframe",
          style: { width: "100%", height: `${e}px` },
          title: l?.data?.title || "",
          src: l?.data?.url,
          allowfullscreen: !0,
          frameborder: "0",
          loading: "lazy",
          onLoad: () => n(!1)
        }
      )
    ] })
  ] }) });
};
function Ki({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: s = "",
  titleClass: l = "text-theme-blue text-max-width",
  showBreadcrumbs: p,
  breadcrumbs: m = [],
  enableBackButton: y = !1,
  breadcrumbColor: C,
  showHelpButton: h = !1,
  model: c
}) {
  const g = Ai(!0), w = m.length - 1, x = p && m.length, { t: u, i18n: i } = sr(), S = W(() => ({ t: u, i18n: i }), [u, i]), v = c?.tTranslate ?? ((O) => O), k = () => {
    r(-1);
  };
  return fe(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(Cn, { className: "print-only", text: v(e, S) }),
    x && /* @__PURE__ */ D(be, { children: [
      /* @__PURE__ */ a(uo, { sx: { mb: 3 }, children: /* @__PURE__ */ D(po, { sx: { backgroundColor: C || "#fff" }, children: [
        /* @__PURE__ */ D(Ce, { container: !0, children: [
          /* @__PURE__ */ a(Ce, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(fo, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${l} breadcrumbs-text-title text-max-width`, children: m.map((O, E) => E < w ? /* @__PURE__ */ a(ho, { onClick: k, className: `${l} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: O.text }, E) : /* @__PURE__ */ a(Ne, { className: `${l} breadcrumbs-text-title text-max-width`, variant: "inherit", children: O.text }, E)) }) }),
          y && /* @__PURE__ */ a(Ce, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(lt, { variant: "contained", onClick: k, children: v("Back", S) }) }),
          h && /* @__PURE__ */ a(Ce, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a($t, { color: "primary", title: v("Help", S), size: "large", children: /* @__PURE__ */ a(To, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Pe, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: g ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          Cn,
          {
            className: `${l} page-text-title`,
            variant: "p",
            text: v(e, S),
            name: t
          }
        ) }) }) }) }),
        !g && /* @__PURE__ */ D(be, { children: [
          /* @__PURE__ */ D(Pe, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ D(Pe, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a(Yi, {})
    ] })
  ] });
}
const Zn = io()(Ki), ze = {
  filterFieldDataTypes: {
    Number: "number",
    String: "string",
    Boolean: "boolean"
  },
  fixedFilterFormat: {
    date: "YYYY-MM-DD",
    dateTime: "YYYY-MM-DD hh:mm:ss a",
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
  emptyIdValues: [null, void 0, "", "0", 0],
  // Normalize filter values for filter inputs used by grids/queries.
  // - If the filter is multi-valued (operator is 'isAnyOf' or `isMultiple` is true),
  //   ensure an array is returned (empty array for empty input, or wrap single
  //   values into an array).
  // - If the filter is single-valued, return a scalar: if an array was passed,
  //   take the first element; otherwise return the value or an empty string.
  normalizeFilterValue: ({ value: e, operator: r, isMultiple: t }) => {
    const n = ["", null, void 0].includes(e);
    return r === "isAnyOf" || t ? Array.isArray(e) ? e : n ? [] : [e] : Array.isArray(e) ? e[0] ?? "" : e ?? "";
  }
}, Qn = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: n = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = n.find((s) => s.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[ze.permissionsMapper.add],
    canEdit: t.edit && !!o[ze.permissionsMapper.edit],
    canDelete: t.delete && !!o[[ze.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
ae.extend(Vr);
const _i = {
  date: Nn,
  dateTime: Ln
}, Ji = "-10px", Zi = "-16px", Qi = (e) => {
  const { fixedFilterFormat: r } = ze, { item: t, applyValue: n, convert: o, colDef: s } = e, { systemDateTimeFormat: l, stateData: p } = Ge(), m = s?.type || "date", y = r[m], C = s?.localize ?? e.localize ?? !1, h = (i) => {
    const S = ae(i);
    return S.isValid() && S.year() > 1900;
  }, c = l(m !== "dateTime", !1, p.dateTime), g = (i) => {
    if (!(m !== "date" && m !== "dateTime" || ((v) => typeof v != "string" ? !1 : !ae(v, c, !0).isValid())(i))) {
      if (o || C) {
        if (!i) {
          n({ ...t, value: null });
          return;
        }
        i = ae(i).utc(), n({ ...t, value: i });
        return;
      }
      if (!h(i)) {
        n({ ...t, value: null });
        return;
      }
      n({ ...t, value: i.format(y) });
    }
  }, w = (i) => {
    if (i && i === r.OverrideDateFormat) {
      const S = i.split("-");
      return S.length === 3 ? S[1] : null;
    }
  }, x = _i[m], u = t?.value ? ae(t.value) : null;
  return /* @__PURE__ */ a($n, { dateAdapter: Vn, children: /* @__PURE__ */ a(
    x,
    {
      fullWidth: !0,
      format: c,
      value: u,
      onChange: g,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Ji,
            marginBottom: Zi,
            "& .MuiInputLabel-root": {
              marginTop: "5px"
            },
            "& .MuiInput-root": {
              marginTop: "5px"
            },
            "&.MuiFormControl-root.MuiPickersTextField-root": {
              marginTop: "-20px"
            }
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => w(c) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Tr = (e) => An().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ a(Qi, { ...t, ...e }) : void 0
})), Xi = {
  IsAnyOf: "isAnyOf"
}, el = (e) => {
  const { column: r, item: t, applyValue: n, apiRef: o } = e, s = r?.dataRef?.current?.lookups;
  let l = r.customLookup || s[r.lookup] || [];
  typeof r.lookup == "string" && (l = l.map(({ label: h, value: c }) => ({
    label: h,
    value: c
  })));
  const p = Tn(o, Ka), m = W(
    () => p.items?.filter((h) => h.field === r.field),
    [r.field, p.items]
  ), y = T(
    (h) => {
      let c = h.target.value;
      if (p.items.length >= 1) {
        c = c.length === 1 ? c[0] : c;
        for (const x of p.items)
          x.field === t.field && (x.operator === Xi.IsAnyOf ? c = Array.isArray(c) ? c : [c] : c = c === 0 ? "0" : c);
      }
      if (c.length === 0 && m[0]) {
        o.current.deleteFilterItem(m[0]);
        return;
      }
      const g = c, w = m[0] ? m[0] : t;
      n({ ...w, value: g });
    },
    [o, r.applyZeroFilter, m, t, n]
  ), C = m[0]?.value ?? "";
  return /* @__PURE__ */ a(Ct, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    Mr,
    {
      label: r.field,
      variant: "standard",
      value: C,
      onChange: (h) => y(h),
      multiple: Array.isArray(C),
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 400,
            overflowY: "auto"
          }
        }
      },
      children: l?.map((h, c) => /* @__PURE__ */ a(qe, { value: h.value, children: e.tTranslate(h.label, e.tOpts) }, c))
    }
  ) });
}, He = {
  Edit: "Edit",
  Delete: "Delete"
}, Re = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, tl = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, rl = { pageSize: 50, page: 0 }, nl = [5, 10, 20, 50, 100], al = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: n, tOpts: o }) => {
  const { getApiEndpoint: s } = Ge(), l = s("GridPreferenceManager"), p = In(), m = Dt(), [y, C] = B(Re.NONE), [h, c] = B(null), [g, w] = B(!1), [x, u] = B({}), [i, S] = B(null), [v, k] = B(null), O = W(
    () => i == null ? [] : i.filter((F) => F.prefId !== 0),
    [i]
  ), E = W(() => [
    { field: "prefName", type: "string", width: 300, headerName: n("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: n("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: n("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ir, { icon: /* @__PURE__ */ a(xt, { title: He.Edit, children: /* @__PURE__ */ a(Bn, {}) }), tabIndex: 1, "data-action": He.Edit, label: n("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ir, { icon: /* @__PURE__ */ a(xt, { title: He.Delete, children: /* @__PURE__ */ a(On, {}) }), tabIndex: 2, "data-action": He.Delete, label: n("Delete", o), color: "error" }, 2)] }
  ], [n, o]), L = W(() => he.object({
    prefName: he.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: he.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), te = (F) => c(F?.currentTarget), H = () => c(null), j = () => {
    C(Re.NONE), H();
  }, _ = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), k(null), t && t(null), H());
  }, U = T(async ({ applyDefault: F = !1 }) => {
    const A = await et({
      url: l,
      params: { action: "list", id: r },
      dataParser: Oe.json
    });
    if (!A?.preferences) {
      m.showMessage(n("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const ee = A.preferences.filter((z) => z.prefName.trim() !== "");
    if (S(ee), F) {
      const z = ee.find((re) => re.isDefault);
      if (z)
        return { defaultPrefId: z.prefId, preferences: ee };
      t && t(null);
    }
    return { preferences: ee };
  }, [l, r, m, n, o, t]), N = T(async (F, A = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), F === 0) {
      _();
      return;
    }
    const ee = A || i;
    if (!ee) {
      m.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const z = ee.find((le) => le.prefId === F);
    if (!z?.prefValue) {
      m.showMessage(n("Failed to load preference.", o));
      return;
    }
    let re;
    try {
      re = typeof z.prefValue == "string" ? JSON.parse(z.prefValue) : z.prefValue;
    } catch {
      m.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(re), k(z.prefName), t && t(z.prefName), H();
  }, [e, _, i, t, m, n, o]), xe = async (F) => {
    const A = F.prefName.trim(), ee = A.toLocaleLowerCase();
    if (i.find((re) => re.prefName.toLocaleLowerCase() === ee && re.prefId !== F.prefId)) {
      w(!0);
      return;
    }
    const z = await et({
      url: l,
      params: {
        action: "save",
        id: r,
        prefId: F.prefId,
        prefName: A,
        prefDesc: F.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: F.isDefault
      },
      dataParser: Oe.json
    });
    if (z === !0 || z?.success === !0) {
      m.showMessage(n(`Preference ${y === Re.ADD ? "added" : "saved"} successfully.`, o)), j(), await U({ applyDefault: !1 });
      return;
    }
    m.showMessage(n("Error saving preference: ", o) + (z?.message || n("Unknown error", o)));
  }, oe = async () => {
    const F = await et({
      url: l,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: Oe.json
    });
    if (F === !0 || F?.success === !0) {
      m.showMessage(n("Preference deleted successfully.", o)), await U({ applyDefault: !1 }), u({});
      return;
    }
    m.showMessage(n("Error deleting preference: ", o) + (F?.message || n("Unknown error", o)));
  }, ie = (F) => {
    const A = F.field === "editAction" ? He.Edit : F.field === "deleteAction" ? He.Delete : null;
    if (F.id === 0 && A) {
      m.showMessage(n(`Default preference cannot be ${A === He.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    A === He.Edit && (C(Re.EDIT), X.setValues(F?.row)), A === He.Delete && u({
      prefId: F.id,
      preferenceName: F.row.prefName
    });
  }, Q = (F) => {
    C(F), H(), F === Re.ADD && X.resetForm();
  }, X = zn({
    initialValues: tl,
    validationSchema: L,
    onSubmit: xe,
    mode: "onBlur"
  });
  fe(() => {
    if (!r) return;
    (async () => {
      const A = await U({ applyDefault: !0 });
      A?.defaultPrefId && A?.preferences && await N(A.defaultPrefId, A.preferences);
    })();
  }, [r]);
  const de = W(() => ({
    noRowsLabel: n("No rows", o),
    columnMenuManageColumns: n("Manage columns", o),
    columnMenuHideColumn: n("Hide column", o),
    pinToLeft: n("Pin to left", o),
    pinToRight: n("Pin to right", o),
    columnMenuLabel: n("Menu", o),
    filterPanelRemoveAll: n("Remove all", o),
    columnsPanelTextFieldLabel: n("Find column", o),
    columnsPanelTextFieldPlaceholder: n("Column title", o),
    columnsPanelShowAllButton: n("Show all", o),
    columnsPanelHideAllButton: n("Hide all", o),
    booleanCellTrueLabel: n("Yes", o),
    toolbarColumnsLabel: n("Select columns", o),
    toolbarExportLabel: n("Export", o),
    booleanCellFalseLabel: n("No", o),
    paginationRowsPerPage: n("Rows per page", o),
    paginationDisplayedRows: ({ from: F, to: A, count: ee }) => `${F}–${A} ${n("of", o)} ${ee}`,
    toolbarQuickFilterLabel: n("Search", o),
    columnsManagementSearchTitle: n("Search", o),
    columnsManagementNoColumns: n("No columns", o)
  }), [n, o]), $ = y === Re.MANAGE, we = y === Re.ADD || y === Re.EDIT;
  return /* @__PURE__ */ D(Pe, { children: [
    /* @__PURE__ */ D(
      lt,
      {
        id: "grid-preferences-btn",
        "aria-controls": h ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": h ? "true" : void 0,
        onClick: te,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(bn, {}),
        children: [
          n("Preferences", o),
          " ",
          v && `(${v})`
        ]
      }
    ),
    /* @__PURE__ */ D(
      mo,
      {
        id: "grid-preference-menu",
        anchorEl: h,
        open: !!h,
        onClose: H,
        component: go,
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
          /* @__PURE__ */ D(qe, { component: Sr, dense: !0, onClick: () => Q(Re.ADD), children: [
            /* @__PURE__ */ a(Fr, { children: /* @__PURE__ */ a(Br, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ D(qe, { component: Sr, dense: !0, onClick: () => Q(Re.MANAGE), children: [
            /* @__PURE__ */ a(Fr, { children: /* @__PURE__ */ a(bn, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ D(qe, { component: Sr, dense: !0, divider: i?.length > 0, onClick: () => N(0), children: [
            /* @__PURE__ */ a(Fr, { children: /* @__PURE__ */ a(jo, {}) }),
            n("Reset to Default", o)
          ] }),
          i?.length > 0 && i?.map((F) => {
            const { prefName: A, prefDesc: ee, prefId: z } = F;
            return /* @__PURE__ */ a(
              qe,
              {
                onClick: () => N(z),
                component: bo,
                selected: v === A,
                title: n(ee, o),
                dense: !0,
                children: /* @__PURE__ */ a(yo, { primary: A })
              },
              `pref-item-${z}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ke,
      {
        open: y !== Re.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ D(Ne, { variant: "h5", children: [
          y,
          " ",
          n($ ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: $ ? "md" : "sm",
        fullWidth: !0,
        children: [
          we && /* @__PURE__ */ D(
            Ce,
            {
              component: "form",
              onSubmit: X.handleSubmit,
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
                /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(
                  st,
                  {
                    value: X.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ D("span", { children: [
                      n("Preference Name", o),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: X.handleChange,
                    error: !!X.errors.prefName,
                    helperText: X.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(
                  st,
                  {
                    value: X.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: n("Preference Description", o),
                    name: "prefDesc",
                    onChange: X.handleChange,
                    error: !!X.errors.prefDesc,
                    helperText: X.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(
                  ct,
                  {
                    control: /* @__PURE__ */ a(
                      Co,
                      {
                        checked: X.values.isDefault,
                        name: "isDefault",
                        onChange: X.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ D(mn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    lt,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ a(Go, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: n("Save", o)
                    }
                  ),
                  /* @__PURE__ */ a(
                    lt,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ a(Or, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: j,
                      disableElevation: !0,
                      children: n("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          $ && /* @__PURE__ */ D(Ce, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(
              Mn,
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
                onCellClick: ie,
                columns: E,
                pageSizeOptions: nl,
                pagination: !0,
                rowCount: O.length,
                rows: O,
                getRowId: (F) => F.GridPreferenceId,
                slots: {
                  headerFilterMenu: !1
                },
                density: "compact",
                disableDensitySelector: !0,
                apiRef: p,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                initialState: {
                  pagination: {
                    paginationModel: rl
                  }
                },
                localeText: de
              }
            ) }),
            /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(mn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
              lt,
              {
                type: "button",
                startIcon: /* @__PURE__ */ a(Or, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: j,
                disableElevation: !0,
                children: n("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ke,
      {
        open: g,
        onConfirm: () => w(!1),
        title: "",
        okText: n("Ok", o),
        cancelText: "",
        children: [
          '"',
          X.values.prefName.trim(),
          '": ',
          n("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ke,
      {
        open: !!x.preferenceName,
        onConfirm: oe,
        onCancel: () => u({}),
        title: n("Confirm delete", o),
        yesNo: !0,
        children: [
          n("Are you sure you wish to delete", o),
          ' "',
          x.preferenceName,
          '"?'
        ]
      }
    )
  ] });
}, ol = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((n) => {
  t.lastIndex = 0;
  const o = t.exec(n);
  if (!o) return null;
  const [, s, l = "ASC"] = o;
  return {
    field: s.trim(),
    sort: l.trim().toLowerCase()
  };
}).filter(Boolean), it = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: n, type: o, isPivotExport: s = !1, icon: l }) => /* @__PURE__ */ D(
  Gn,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": s,
    children: [
      /* @__PURE__ */ a(tt, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: l }),
      e(o, r)
    ]
  }
), il = ({ exportFormats: e, customExportOptions: r, ...t }) => /* @__PURE__ */ D(_a, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Oo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Pr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Pr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Bo, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Ro, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(ko, { fontSize: "small" }), type: "JSON", contentType: "application/json" }),
  Array.isArray(r) && r.map((n, o) => /* @__PURE__ */ a(
    it,
    {
      ...t,
      icon: n.icon || /* @__PURE__ */ a(Pr, { fontSize: "small" }),
      type: n.label || "Excel",
      contentType: n.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      handleExport: n.handleExport || t.handleExport
    },
    n.key || o
  ))
] }), Xn = (e, r) => {
  if (r) return r;
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
}, ll = (e = {}, r = {}) => {
  let t = !0;
  for (const n in e)
    e[n] !== r[n] && (t = !1);
  for (const n in r)
    n in e || (t = !1);
  return t;
};
ae.extend(Vr);
const sl = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: n,
  tTranslate: o,
  tOpts: s
}) => {
  const { systemDateTimeFormat: l, stateData: p } = Ge(), { fixedFilterFormat: m } = ze, y = W(() => r?.items?.find((u) => u.field === e.field), [r, e.field]), C = y?.operator || e.toolbarFilter?.defaultOperator || Xn(e.type), h = C === "isAnyOf", c = W(() => {
    if (["isEmpty", "isNotEmpty"].includes(C))
      return "";
    if (!y)
      return h ? [] : "";
    const u = y.value;
    return u ?? (h ? [] : "");
  }, [y, h]), g = T((u) => {
    t((i) => {
      const S = i?.items || [];
      if (u === "" || u === null || Array.isArray(u) && u.length === 0) {
        const O = S.filter((E) => E.field !== e.field);
        return {
          ...i,
          items: O
        };
      }
      const v = {
        field: e.field,
        operator: C,
        value: u,
        type: e.type
      }, k = S.filter((O) => O.field !== e.field);
      return {
        ...i,
        items: [...k, v]
      };
    });
  }, [e, t]), w = T((u, i) => i === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[u] || u : i === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[u] || u : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[u] || u, []);
  return (() => {
    const u = e.toolbarFilter?.label || e.headerName || e.label || e.field, i = w(C, e.type), v = e.type === "number" || e.type === "string" && C !== "startsWith" ? e.type === "number" ? `${i} ${u}` : `${u} (${i})` : u;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          st,
          {
            variant: "standard",
            label: o(v, s),
            value: c,
            onChange: (N) => g(N.target.value),
            type: "text",
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "number":
        return /* @__PURE__ */ a(
          st,
          {
            variant: "standard",
            label: o(v, s),
            value: c,
            onChange: (N) => g(N.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const N = c === "" || c === void 0 || c === null ? "" : c === !0 || c === "true" ? "true" : c === !1 || c === "false" ? "false" : "";
        return /* @__PURE__ */ D(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(gn, { children: o(v, s) }),
          /* @__PURE__ */ D(
            Mr,
            {
              value: N,
              onChange: (xe) => {
                const oe = xe.target.value;
                let ie;
                oe === "" ? ie = "" : oe === "true" ? ie = !0 : oe === "false" ? ie = !1 : ie = oe, g(ie);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(qe, { value: "", children: o("All", s) }),
                /* @__PURE__ */ a(qe, { value: "true", children: o("True", s) }),
                /* @__PURE__ */ a(qe, { value: "false", children: o("False", s) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const k = e.customLookup || n?.[e.lookup] || [], O = typeof e.lookup == "string" ? k.map((N) => ({
          label: N?.label || "",
          value: N?.value ?? ""
        })) : k, E = ze.normalizeFilterValue({ value: c, operator: C, isMultiple: h }), L = 1;
        return /* @__PURE__ */ D(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(gn, { children: o(v, s) }),
          /* @__PURE__ */ a(
            Mr,
            {
              value: E,
              onChange: (N) => g(N.target.value),
              multiple: h,
              size: "small",
              renderValue: (N) => {
                const oe = (Array.isArray(N) ? N : N != null && N !== "" ? [N] : []).map((de) => {
                  if (de && typeof de == "object" && "label" in de) return o(de.label, s);
                  const $ = O.find((we) => String(we.value) === String(de));
                  return $ ? o($.label, s) : "";
                }).filter(Boolean);
                if (oe.length === 0) return "";
                if (oe.length <= L) return oe.join(", ");
                const ie = oe.slice(0, L).join(", "), Q = oe.length - L, X = oe.join(", ");
                return /* @__PURE__ */ a(xt, { title: X, placement: "top", children: /* @__PURE__ */ a("span", { children: `${ie} +${Q}` }) });
              },
              children: O.map((N) => /* @__PURE__ */ a(qe, { value: N.value, children: o(N.label, s) }, N.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const te = e.type, H = m[te], j = l(te === "date", !1, p.dateTime), _ = te === "dateTime" ? Uo : Wo;
        let U = null;
        if (c) {
          const N = ae(c);
          U = N.isValid() ? N : null;
        }
        return /* @__PURE__ */ a($n, { dateAdapter: Vn, children: /* @__PURE__ */ a(
          _,
          {
            label: o(v, s),
            format: j,
            value: U,
            onChange: (N) => {
              !N || !N.isValid() ? g(null) : g(N.format(H));
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
          st,
          {
            variant: "standard",
            label: o(v, s),
            value: c,
            onChange: (N) => g(N.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, er = cr(Me)({
  margin: "6px"
}), cl = cr(Ja)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), ul = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: n,
    isReadOnly: o,
    canAdd: s,
    forAssignment: l,
    showAddIcon: p,
    onAdd: m,
    selectionApi: y,
    rowSelectionModel: C,
    selectAll: h,
    available: c,
    onAssign: g,
    assigned: w,
    onUnassign: x,
    effectivePermissions: u,
    clearFilters: i,
    handleExport: S,
    preferenceKey: v,
    apiRef: k,
    tTranslate: O,
    tOpts: E,
    filterModel: L,
    setFilterModel: te,
    onPreferenceChange: H,
    toolbarItems: j,
    gridColumns: _,
    customExportOptions: U
  } = e, N = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), xe = ($) => $ != null && $ !== "" && !(Array.isArray($) && $.length === 0), ie = (($ = []) => $.filter(
    (we) => ["isEmpty", "isNotEmpty"].includes(we.operator) || xe(we.value)
  ))(L?.items || []).length || 0, Q = _?.filter(($) => $.toolbarFilter) || [], X = t?.lookups || {}, de = t?.records || [];
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ D(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "10px"
        },
        children: [
          /* @__PURE__ */ D("div", { children: [
            r.gridSubTitle && /* @__PURE__ */ D(Lt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              O(r.gridSubTitle, E)
            ] }),
            n && r.showPreferenceInHeader && /* @__PURE__ */ D(Lt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              O("Applied Preference", E),
              ": ",
              n
            ] }),
            (o || !s && !l) && /* @__PURE__ */ D(Lt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !s || o ? "" : r.title
            ] }),
            !l && s && !o && /* @__PURE__ */ a(er, { startIcon: p ? /* @__PURE__ */ a(Br, {}) : null, onClick: m, size: "medium", variant: "contained", children: O(N, E) }),
            !!e.headerActions && e.headerActions,
            y.length && de.length ? /* @__PURE__ */ a(
              er,
              {
                onClick: h,
                size: "medium",
                variant: "contained",
                children: C.ids.size === de.length ? O("Deselect All", E) : O("Select All", E)
              }
            ) : /* @__PURE__ */ a(be, {}),
            c && /* @__PURE__ */ a(er, { startIcon: p ? /* @__PURE__ */ a(Br, {}) : null, onClick: g, size: "medium", variant: "contained", children: O("Assign", E) }),
            w && /* @__PURE__ */ a(er, { startIcon: p ? /* @__PURE__ */ a(Lo, {}) : null, onClick: x, size: "medium", variant: "contained", children: O("Remove", E) })
          ] }),
          /* @__PURE__ */ D(cl, { ...e, children: [
            u.showColumnsOrder && /* @__PURE__ */ a(
              Za,
              {
                render: ($) => /* @__PURE__ */ a(
                  Me,
                  {
                    ...$,
                    startIcon: /* @__PURE__ */ a(Vo, {}),
                    size: "small",
                    variant: "text",
                    children: O("COLUMNS", E)
                  }
                )
              }
            ),
            u.filter && /* @__PURE__ */ D(be, { children: [
              /* @__PURE__ */ a(
                Qa,
                {
                  render: ($) => /* @__PURE__ */ a(
                    Me,
                    {
                      ...$,
                      startIcon: /* @__PURE__ */ a(xo, { badgeContent: ie, color: "primary", children: /* @__PURE__ */ a(zo, {}) }),
                      size: "small",
                      variant: "text",
                      children: O("FILTERS", E)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Me, { startIcon: /* @__PURE__ */ a($o, {}), onClick: i, size: "small", children: O("CLEAR FILTER", E) })
            ] }),
            u.export && /* @__PURE__ */ a(il, { handleExport: S, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, customExportOptions: U, tTranslate: O, tOpts: E }),
            j,
            v && /* @__PURE__ */ a(
              al,
              {
                gridRef: k,
                preferenceKey: v,
                onPreferenceChange: H,
                t: O,
                tOpts: E
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Pe, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: Q.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: Q.map(($) => /* @__PURE__ */ a(
      sl,
      {
        column: $,
        filterModel: L,
        setFilterModel: te,
        lookupData: X,
        tTranslate: O,
        tOpts: E
      },
      $.field
    )) }) })
  ] });
};
function dr(e) {
  const { t: r, i18n: t } = sr(), n = ut.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((s) => s);
  return { translate: r, i18n: t, tOpts: n, tTranslate: o };
}
const dl = 50, pl = /(\w+)( ASC| DESC)?/i, fl = 6e4, hl = 0, ml = 1e6, ke = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, gl = {
  article: /* @__PURE__ */ a(oo, {}),
  edit: /* @__PURE__ */ a(Bn, {}),
  copy: /* @__PURE__ */ a(ao, {}),
  delete: /* @__PURE__ */ a(On, {}),
  history: /* @__PURE__ */ a(Ho, {}),
  download: /* @__PURE__ */ a(qo, {})
}, Y = {
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
}, ea = ["isEmpty", "isNotEmpty"], bl = (e) => e, yl = (e) => (e || []).filter((r) => ea.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), Cl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], xl = (e) => e.value ? /* @__PURE__ */ a(Ao, { style: { color: "green" } }) : /* @__PURE__ */ a(Or, { style: { color: "gray" } }), wn = cr("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), wl = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const n = ro(), o = e.row[t], l = Tn(n, no)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    jn,
    {
      onClick: (m) => {
        m.stopPropagation(), r({ row: e.row });
      },
      checked: l,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, vn = En(({
  model: e,
  columns: r,
  api: t,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: s,
  parent: l,
  where: p,
  title: m,
  showPageTitle: y,
  permissions: C,
  selected: h,
  assigned: c,
  available: g,
  disableCellRedirect: w = !1,
  onAssignChange: x,
  customStyle: u,
  onCellClick: i,
  showRowsSelected: S,
  showFullScreenLoader: v,
  customFilters: k,
  onRowDoubleClick: O,
  onRowClick: E = () => {
  },
  gridStyle: L,
  reRenderKey: te,
  additionalFilters: H,
  onCellDoubleClickOverride: j,
  onAddOverride: _,
  dynamicColumns: U,
  toolbarItems: N,
  readOnly: xe = !1,
  onListParamsChange: oe,
  apiRef: ie,
  baseFilters: Q,
  customExportOptions: X,
  sx: de,
  ...$
}) => {
  const [we, F] = B({ pageSize: dl, page: 0 }), [A, ee] = B({ recordCount: 0, records: null, lookups: {} }), z = !!x, re = S, [le, nt] = B({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [pt, ft] = B(!1), [je, St] = B(null), Ft = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [zt, ht] = B(!1), me = Dt(), Pt = e.paginationMode === Y.client ? Y.client : Y.server, { translate: Et, tOpts: d } = dr(e), [mt, ve] = B(""), [_e, Ee] = B(ol(n || e.defaultSort, Y, pl)), At = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (At.items = [], e.defaultFilters.forEach((b) => {
    At.items.push(b);
  }));
  const [Be, Ae] = B({ ...At }), { navigate: De, getParams: Gt, useParams: Te, pathname: jt } = Ur(), { id: pr } = Te() || Gt, Tt = pr?.split("-")[0], Se = ie || In(), { idProperty: pe = "id", showHeaderFilters: It = !0, disableRowSelectionOnClick: fr = !0, hideTopFilters: Mt = !0, updatePageTitle: Ut = !0, isElasticScreen: gt = !1, navigateBack: hr = !1, selectionApi: Je = {}, debounceTimeOut: mr = 300, showFooter: G = !0, disableRowGrouping: Fe = !0 } = e, Z = e.readOnly === !0 || xe, Ue = e.allowDoubleClick === !1, Le = rr(A), Ie = rr(null);
  fe(() => () => {
    Ie.current?.abort(), Ie.current = null;
  }, []);
  const Wt = e.showAddIcon === !0, Ot = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: Ze, formatDate: Bt, getApiEndpoint: gr, buildUrl: bt, setPageTitle: br } = Ge(), [oa, Ht] = B(!1), { timeZone: ss } = Ze, at = W(() => ({ ...Y.permissions, ...e.permissions, ...C }), [e.permissions, C]), Wr = ["isEmpty", "isNotEmpty", "isAnyOf"], ia = Ze.userData || {}, qt = e.columns.find((b) => b.type === "fileUpload")?.field || "", la = { add: at.add, edit: at.edit, delete: at.delete }, { canAdd: Hr, canEdit: qr, canDelete: Yr } = Qn({ userData: ia, model: e, userDefinedPermissions: la }), f = W(() => e.tTranslate ?? bl, [e.tTranslate]), { addUrlParamKey: Yt, searchParamKey: Rt, hideBreadcrumb: sa = !1, tableName: Kr, showHistory: _r = !0, hideBreadcrumbInGrid: ca = !1, breadcrumbColor: ua, disablePivoting: da = !1, columnHeaderHeight: pa = 70, disablePagination: Jr = !1 } = e, Zr = e.gridTitle || e.title, kt = gr("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, Qe = new URLSearchParams(window.location.search), [Qr, fa] = B(null), [Xr, ha] = B(!kt), $e = t || e.api, [yr, Cr] = B(null), ma = W(() => new Set(yr ? [yr] : []), [yr]), ga = typeof e.getDetailPanelContent == "function", [ba, xr] = B([]);
  fe(() => {
    Se.current && (Se.current.prefKey = kt);
  }, [Se, kt]);
  const en = T((b) => {
    fa(b), ha(!0);
  }, []), ya = W(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? f(b.headerName, d) : b.headerName
  })) : [], [e.columnGroupingModel, d, Et, f]);
  fe(() => {
    Array.isArray($.rowGroupingField) ? xr($.rowGroupingField) : xr([]);
  }, [$.rowGroupingField]);
  const wr = Qe.has("baseData") && Qe.get("baseData"), tn = W(() => {
    if (wr)
      try {
        const b = JSON.parse(wr);
        if (typeof b === Y.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [wr]), Ca = T(({ row: b }) => {
    const I = b[pe];
    nt((M) => {
      const P = new Set(M?.ids || []);
      return P.has(I) ? P.delete(I) : P.add(I), { type: "include", ids: P };
    });
  }, [pe]), rn = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b, I, M) => Bt({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: Ze.dateTime }),
      filterOperators: Tr({ columnType: "date", label: f("Value", d) })
    },
    dateTime: {
      valueFormatter: (b, I, M) => Bt({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Ze.dateTime }),
      filterOperators: Tr({ columnType: "dateTime", label: f("Value", d) })
    },
    boolean: {
      renderCell: xl
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ a(wl, { params: b, handleSelectRow: Ca, idProperty: pe })
    }
  };
  fe(() => {
    Le.current = A, typeof $.onDataLoaded == "function" && $.onDataLoaded(A);
  }, [A]), fe(() => {
    if (!k || !Object.keys(k).length) return;
    if (k.clear) {
      Ae({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(k).reduce((I, [M, P]) => (M === Y.startDate || M === Y.endDate ? I.push(P) : M in k && I.push({ field: M, value: P, operator: "equals", type: "string" }), I), []);
    Ae({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [k]);
  const xa = T(({ field: b, lookupMap: I }) => (Le.current.lookups || {})[(I || {})[b]?.lookup] || [], []);
  fe(() => {
    $.isChildGrid;
  }, [$.isChildGrid, Mt]);
  const nn = T(
    ({ key: b, title: I, icon: M, color: P = "primary", disabled: R, otherProps: K }) => /* @__PURE__ */ a(
      Ir,
      {
        icon: /* @__PURE__ */ a(xt, { title: f(I, d), children: gl[M] || M || f(I, d) }),
        "data-action": b,
        label: f(I, d),
        color: P,
        disabled: R,
        ...K
      },
      b
    ),
    [Et, d, f]
  ), { customActions: Kt = [] } = e, _t = W(() => {
    const b = [];
    return !z && !Z && b.push(
      {
        key: ke.Edit,
        title: "Edit",
        icon: "edit",
        show: !!qr,
        disabled: (I) => I.canEdit === !1
      },
      {
        key: ke.Copy,
        title: "Copy",
        icon: "copy",
        show: !!at.copy
      },
      {
        key: ke.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Yr
      },
      {
        key: ke.History,
        title: "History",
        icon: "history",
        show: !!_r
      },
      ...Kt
    ), b.push({
      key: ke.Download,
      title: "Download document",
      icon: "download",
      show: qt.length > 0
    }), b.filter(({ show: I }) => I !== !1);
  }, [
    z,
    Z,
    qr,
    Yr,
    _r,
    at.copy,
    qt.length,
    Kt
  ]), wa = T(
    ({ row: b }) => _t.map(
      ({ key: I, title: M, icon: P, color: R, disabled: K, show: V, action: J, ...se }) => nn({
        key: I,
        title: M || J,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: P,
        color: R,
        disabled: K?.(b),
        otherProps: se
      })
    ),
    [_t, nn]
  ), { gridColumns: ye, pinnedColumns: an, lookupMap: vr } = W(() => {
    let b = r || e.gridColumns || e.columns;
    U && (b = [...U, ...b]);
    const I = { left: [Xa.field], right: [] }, M = [], P = {}, R = { ...rn, ...e.gridColumnTypes };
    for (const V of b) {
      if (V.gridLabel === null || l && V.lookup === l || V.type === Y.oneToMany && V.countInList === !1) continue;
      const J = {};
      if (V.type === Y.oneToMany && (J.type = "number", J.field = V.field.replace(/s$/, "Count")), R[V.type] && Object.assign(J, R[V.type]), J.valueOptions === Y.lookup || V.type === Y.boolean) {
        let ce = [];
        J.valueOptions === Y.lookup && (J.valueOptions = (q) => xa({ ...q, lookupMap: P }), ce = [...An(), ...eo()].filter((q) => ["is", "not", "isAnyOf"].includes(q.value))), V.type === Y.boolean && (ce = to()), J.filterOperators = ce.map((ne) => ({
          ...ne,
          InputComponent: ne.InputComponent ? (q) => /* @__PURE__ */ a(
            el,
            {
              column: {
                ...V,
                ...V.type === Y.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Le
              },
              ...q,
              autoHighlight: !0,
              tTranslate: f,
              tOpts: d
            }
          ) : void 0
        }));
      }
      if ((V.linkTo || V.link) && (J.cellClassName = "mui-grid-linkColumn"), V.hyperlinkURL && !V.renderCell) {
        const { hyperlinkURL: ce, hyperlinkIndex: ne } = V;
        J.renderCell = (q) => {
          const { value: ue, formattedValue: Zt, row: Qt } = q;
          if (ue == null || ue === "") return ue;
          const Xe = ne ? Qt[ne] : ue, Nt = ce.replace("{0}", encodeURIComponent(String(Xe)));
          return /* @__PURE__ */ a("a", { href: Nt, rel: "noopener noreferrer", target: "_blank", children: Zt ?? ue });
        };
      }
      Fe || (J.groupable = V.groupable ?? !1);
      const se = f((typeof V.gridLabel == "function" ? V.gridLabel({ column: V, t: f, tOpts: d }) : V.gridLabel) || V.label, d);
      M.push({ ...V, ...J, headerName: se, description: se }), V.pinned && I[V.pinned === Y.right ? Y.right : Y.left].push(V.field), P[V.field] = V;
    }
    let K = e.standard;
    return K === !0 && (K = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), K && typeof K === Y.object && Cl.forEach(({ key: V, field: J, type: se, header: ce }) => {
      if (K[V] === !0) {
        const ne = { field: J, type: se, headerName: f(ce, d), width: 200 };
        se === Y.dateTime && (ne.filterOperators = Tr({ columnType: "dateTime" }), ne.valueFormatter = rn.dateTime.valueFormatter, ne.localize = !0), M.push(ne);
      }
    }), _t.length && (M.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? Y.defaultActionWidth) * _t.length,
      hidable: !1,
      getActions: wa,
      headerName: f("Actions", d)
    }), I.right.push("actions")), { gridColumns: M, pinnedColumns: I, lookupMap: P };
  }, [r, e, l, C, z, U, Et, Ze?.dateTime]), Dr = rr(!1);
  fe(() => {
    if (Dr.current) return;
    const b = ye?.filter((P) => P.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (Be.items.some(
      (P) => b.some((R) => R.field === P.field)
    )) {
      Dr.current = !0;
      return;
    }
    const M = b.map((P) => {
      const R = Xn(P.type, P.toolbarFilter?.defaultOperator), K = ze.normalizeFilterValue({
        operator: R,
        value: P.toolbarFilter.defaultFilterValue
      });
      return {
        field: P.field,
        operator: R,
        value: K,
        type: P.type
      };
    }).filter((P) => {
      const R = P.value;
      return !(Array.isArray(R) && R.length === 0);
    });
    M.length > 0 && Ae((P) => ({
      ...P,
      items: [...P.items, ...M]
    })), Dr.current = !0;
  }, [ye]);
  const Ve = T(async ({ action: b = "list", extraParams: I = {}, isPivotExport: M = !1, contentType: P, columns: R } = {}) => {
    const { pageSize: K, page: V } = we, J = !!P, se = bt(M ? e.pivotApi : $e), ce = {
      ...Be,
      items: yl(Be.items)
    }, ne = Array.isArray(Q) ? [...Q] : [];
    e.joinColumn && Tt && ne.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Tt) }), H && (ce.items = [...ce.items || [], ...H]);
    const q = [];
    Array.isArray(ne) && q.push(...ne), Array.isArray(s) && q.push(...s);
    const ue = {
      ...I,
      ...$.extraParams
      // Merge any custom params passed via component props
    };
    if ((c || g) && (ue[c ? "include" : "exclude"] = Array.isArray(h) ? h.join(",") : h), M && (e.exportTemplate && (ue.template = e.exportTemplate), e.configFileName && (ue.configFileName = e.configFileName)), !(!ce.items.length || ce.items.every((We) => "value" in We && We.value !== void 0))) return;
    let Qt = null, Xe = null;
    J || (Ie.current && Ie.current.abort(), Xe = new AbortController(), Ie.current = Xe, Qt = Xe.signal);
    const Nt = {
      action: b,
      page: J ? hl : V,
      pageSize: J ? ml : K,
      sortModel: _e,
      filterModel: ce,
      gridColumns: ye,
      model: e,
      baseFilters: q,
      api: se,
      extraParams: ue
    };
    typeof oe == "function" && oe(Nt), Se.current.listParams = Nt, J || Ht(!0);
    try {
      const We = await Rr({ ...Nt, contentType: P, columns: R, signal: Qt });
      if (!J && We !== void 0 && Ie.current === Xe) {
        if (We?.aborted) return;
        ee(We);
      }
    } catch (We) {
      if (We?.aborted || We?.name === "AbortError" || Xe?.signal?.aborted) return;
      me.showError(f("An error occurred while fetching data", d)), J || ee((La) => ({ ...La, records: [], recordCount: 0 }));
    } finally {
      !J && Ie.current === Xe && Ht(!1);
    }
  }, [we, bt, e, $e, Be, Q, Tt, c, g, h, $.extraParams, _e, ye, s, oe, Se, Rr, me, H, f, d]), ot = T(async ({ id: b, record: I = {}, mode: M }) => {
    if (o) {
      try {
        const R = bt($e), K = await ar({ id: b, api: R, model: e, parentFilters: s, where: p });
        o(K);
      } catch {
        me.showError(f("Could not load record", d));
      }
      return;
    }
    let P = jt;
    P.endsWith("/") || (P += "/"), M === "copy" ? P += "0-" + b : P += b, Yt && (Qe.set(Yt, I[Yt]), P += `?${Qe.toString()}`), De(P);
  }, [o, $e, e, s, p, jt, Yt, Qe, De, ar, bt, me, f, d]), on = T(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), va = T(async (b, I, M) => {
    let P = b.field === e.linkColumn ? ke.Edit : null;
    if (!P && b.field === Y.actions && (P = M?.action, !P)) {
      const se = I.target.closest("button");
      se && (P = se.dataset.action);
    }
    const { row: R } = b;
    if (!Z) {
      if (i && typeof await i({ cellParams: b, event: I, details: M }) !== Y.boolean)
        return;
      const se = vr[b.field] || {};
      if (se.linkTo) {
        De({
          pathname: Xt.replaceTags(se.linkTo, R)
        });
        return;
      }
      switch (P) {
        case ke.Edit:
          if (e.getDetailPanelContent) {
            const ne = R[pe];
            Cr((q) => q === ne ? null : ne);
            return;
          } else
            return ot({ id: R[pe], record: R });
        case ke.Copy:
          return ot({ id: R[pe], mode: "copy" });
        case ke.Delete:
          ft(!0), St({ name: R[e.linkColumn], id: R[pe] });
          break;
        case ke.History:
          return De(`${gr("history")}?tableName=${Kr}&id=${R[pe]}&breadCrumb=${Rt ? Qe.get(Rt) : Zr}`);
        default:
          const ce = Kt.find((ne) => ne.action === P && typeof ne.onClick === Y.function);
          if (ce) {
            ce.onClick({ row: R, navigate: De });
            return;
          }
          break;
      }
    }
    if (P === ke.Download && on({ documentLink: R[qt] }), !Ot.length)
      return;
    const { row: K } = b, V = vr[b.field] || {}, J = {
      pathname: Xt.replaceTags(V.linkTo, K)
    };
    e.addRecordToState && (J.state = K), De(J);
  }, [Z, i, vr, e, pe, qt, De, Ot, Kt, Kr, Rt, Qe, Zr, gr, on, ot]), Da = T(async () => {
    const b = bt($e);
    try {
      await Gr({ id: je.id, api: b, model: e }), me.showMessage(f("Record Deleted Successfully.", d)), Ve();
    } catch (I) {
      me.showError(f("Delete failed", d), I.message);
    } finally {
      ft(!1);
    }
  }, [$e, je?.id, me, e, Ve, f, d]), ln = T(() => {
    ve(null), ft(!1);
  }, []), Sa = T((b) => (typeof $.processRowUpdate == "function" && $.processRowUpdate(b, A), b), [$.processRowUpdate, A]), Fa = T((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: I } = b;
    if (typeof j === Y.function) {
      j(b);
      return;
    }
    if (!Z && !Ue && !w && ot({ id: I[pe], record: I }), Z && e.rowRedirectLink) {
      const M = {
        pathname: Xt.replaceTags(e.rowRedirectLink, I)
      };
      e.addRecordToState && (M.state = I), De(M);
    }
    typeof O === Y.function && O(b);
  }, [j, Z, Ue, w, ot, pe, e.rowRedirectLink, e.addRecordToState, De, O, Xt]), Pa = T(async () => {
    if (le.ids.size < 1) {
      me.showError(f("Please select at least one record to proceed", d));
      return;
    }
    const b = Array.from(le.ids), I = new Map((A.records || []).map((R) => [R[pe], R]));
    let M = b.map((R) => ({ ...tn, ...I.get(R) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (M = M.map(
      (R) => Object.fromEntries(e.selectionUpdateKeys.map((K) => [K, R[K]]))
    ));
    const P = bt(Je || $e);
    Ht(!0);
    try {
      const R = await jr({
        id: 0,
        api: `${P}/updateMany`,
        values: { items: M },
        model: e
      });
      if (R) {
        Ve();
        const K = R.info ? R.info : f("Record Added Successfully.", d);
        me.showMessage(K);
      }
    } catch (R) {
      me.showError(R.message || f("An error occurred, please try after some time.", d));
    } finally {
      Ht(!1), nt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), ht(!1);
    }
  }, [le.ids, me, A.records, pe, tn, e.selectionUpdateKeys, Je, $e, e, Ve, f, d]), sn = T(() => {
    if (Je.length > 0) {
      if (le.ids.size > 0) {
        ht(!0);
        return;
      }
      me.showError(
        f("Please select at least one record to proceed", d)
      );
      return;
    }
    typeof _ === Y.function ? _() : ot({ id: 0 });
  }, [Je, me, _, ot, le.ids.size, f, d]), cn = T(() => {
    Be?.items?.length && Ae({ ...Y.gridFilterModel });
  }, [Be]), Jt = T(({ unassign: b, assign: I }) => {
    const M = Array.isArray(h) ? h : h.length ? h.split(",") : [], P = b ? M.filter((R) => !b.includes(parseInt(R))) : [...M, ...I];
    x(typeof h === Y.string ? P.join(",") : P);
  }, [h, x]), un = T(() => {
    Jt({ assign: Array.from(le.ids) });
  }, [Jt, le.ids]), dn = T(() => {
    Jt({ unassign: Array.from(le.ids) });
  }, [Jt, le.ids]), pn = T(() => {
    const b = A.records || [];
    if (le.ids.size === b.length)
      nt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const M = b.map((P) => P[pe]);
      nt({
        type: "include",
        ids: new Set(M)
      });
    }
  }, [le, A.records, pe]), Ea = T((b) => b[pe], [pe]), fn = T((b) => {
    if (A?.recordCount > fl) {
      me.showMessage(f("Cannot export more than 60k records, please apply filters or reduce your results using filters", d));
      return;
    }
    const { orderedFields: I, columnVisibilityModel: M, lookup: P } = Se.current.state.columns, R = b.target.dataset.isPivotExport === "true", K = Object.keys(M).filter((q) => M[q] === !1), V = new Set(ye.filter((q) => q.exportable === !1).map((q) => q.field)), J = I.filter(
      (q) => !V.has(q) && !K.includes(q) && q !== "__check__" && q !== "actions"
    );
    if (J.length === 0) {
      me.showMessage(f("You cannot export while all columns are hidden... please show at least 1 column before exporting", d));
      return;
    }
    const se = {}, ce = Object.fromEntries(ye.map((q) => [q.field, q]));
    J.forEach((q) => {
      const ue = P[q], Zt = ce[q];
      se[q] = {
        field: q,
        width: ue.width,
        headerName: Zt?.headerName || ue.headerName || ue.field,
        type: ue.type,
        isParsable: ue.isParsable,
        lookup: ue.lookup,
        hyperlinkURL: ue.hyperlinkURL,
        hyperlinkIndex: ue.hyperlinkIndex,
        localize: ue.localize,
        exportIndex: ue.exportIndex
      };
    });
    const ne = e?.formActions?.export || R ? e?.formActions?.export || "export" : void 0;
    Ve({
      action: ne,
      isPivotExport: R,
      contentType: b.target.dataset.contentType,
      columns: se
    });
  }, [A?.recordCount, Se, ye, me, e, Ve, f, d]);
  fe(() => {
    !$e || !Xr || Ve();
  }, [$e, Xr, Ve]), fe(() => {
    if (!($.isChildGrid || z || !Ut))
      return br({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        br(null);
      };
  }, [br, e.pageTitle, e.title, $.isChildGrid, z, Ut]);
  const Aa = T((b) => {
    const { items: I } = b, M = I.map((P) => {
      const { field: R, operator: K, value: V } = P, se = (ye.find((ce) => ce.field === R) || {}).type === Y.Number;
      return ea.includes(K) ? { ...P, value: null } : se && V < 0 ? { ...P, value: null } : Wr.includes(K) || se && !isNaN(V) || !se ? (gt && ye.filter((ne) => ne.field === R)[0]?.isKeywordField && (P.filterField = `${P.field}.keyword`), { ...P }) : { ...P, value: se ? null : V };
    });
    Ae({ ...b, items: M });
  }, [ye, Y.Number, Wr, gt, Ae]), Ta = T((b) => {
    const I = b.map((M) => {
      const P = ye.filter((V) => V.field === M.field)[0] || {}, R = gt && P.isKeywordField, K = { ...M, filterField: R ? `${M.field}.keyword` : M.field };
      return P.dataIndex && (K.filterField = P.dataIndex), K;
    });
    Ee(I);
  }, [ye, gt, Ee]), hn = m || e.gridTitle || e.title, Ia = Rt ? [{ text: Qe.get(Rt) || hn }] : [{ text: hn }], Ma = T((b) => {
    Cr(b.size > 0 ? [...b].pop() : null);
  }, []), Oa = T((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      Cr(null), Ve();
    },
    t: f,
    tOpts: d
  }) : null, [e.getDetailPanelContent, Ve, f, d]), Ba = W(() => ({
    filterValueTrue: f("Yes", d),
    filterValueFalse: f("No", d),
    noRowsLabel: f("No data", d),
    footerTotalRows: `${f("Total rows", d)}:`,
    MuiTablePagination: {
      labelRowsPerPage: f("Rows per page", d),
      labelDisplayedRows: ({ from: b, to: I, count: M }) => `${b}–${I} ${f("of", d)} ${M}`
    },
    toolbarQuickFilterPlaceholder: f(e?.searchPlaceholder || "Search...", d),
    toolbarColumns: f("Columns", d),
    toolbarFilters: f("Filters", d),
    toolbarExport: f("Export", d),
    filterPanelAddFilter: f("Add filter", d),
    filterPanelRemoveAll: f("Remove all", d),
    filterPanelDeleteIconLabel: f("Delete", d),
    filterPanelColumns: f("Columns", d),
    filterPanelOperator: f("Operator", d),
    filterPanelValue: f("Value", d),
    filterPanelInputLabel: f("Value", d),
    filterPanelInputPlaceholder: f("Filter value", d),
    columnMenuLabel: f("Menu", d),
    columnMenuShowColumns: f("Show columns", d),
    columnMenuManageColumns: f("Manage columns", d),
    columnMenuFilter: f("Filter", d),
    columnMenuHideColumn: f("Hide column", d),
    columnMenuManagePivot: f("Manage pivot", d),
    toolbarColumnsLabel: f("Select columns", d),
    toolbarExportLabel: f("Export", d),
    pivotDragToColumns: f("Drag here to pivot by", d),
    pivotDragToRows: f("Drag here to group by", d),
    pivotDragToValues: f("Drag here to create values", d),
    pivotColumns: f("Pivot columns", d),
    pivotRows: f("Row groups", d),
    pivotValues: f("Values", d),
    pivotMenuRows: f("Rows", d),
    pivotMenuColumns: f("Columns", d),
    pivotMenuValues: f("Values", d),
    pivotToggleLabel: f("Pivot", d),
    pivotSearchControlPlaceholder: f("Search pivot columns", d),
    columnMenuUnsort: f("Unsort", d),
    columnMenuSortAsc: f("Sort by ascending", d),
    columnMenuSortDesc: f("Sort by descending", d),
    columnMenuUnpin: f("Unpin", d),
    columnsPanelTextFieldLabel: f("Find column", d),
    columnsPanelTextFieldPlaceholder: f("Column title", d),
    columnsPanelHideAllButton: f("Hide all", d),
    columnsPanelShowAllButton: f("Show all", d),
    pinToLeft: f("Pin to left", d),
    pinToRight: f("Pin to right", d),
    unpin: f("Unpin", d),
    filterValueAny: f("any", d),
    filterOperatorIs: f("is", d),
    filterOperatorNot: f("is not", d),
    filterOperatorIsAnyOf: f("is any of", d),
    filterOperatorContains: f("contains", d),
    filterOperatorDoesNotContain: f("does not contain", d),
    filterOperatorEquals: f("equals", d),
    filterOperatorDoesNotEqual: f("does not equal", d),
    filterOperatorStartsWith: f("starts with", d),
    filterOperatorEndsWith: f("ends with", d),
    filterOperatorIsEmpty: f("is empty", d),
    filterOperatorIsNotEmpty: f("is not empty", d),
    filterOperatorAfter: f("is after", d),
    filterOperatorOnOrAfter: f("is on or after", d),
    filterOperatorBefore: f("is before", d),
    filterOperatorOnOrBefore: f("is on or before", d),
    toolbarFiltersTooltipHide: f("Hide filters", d),
    toolbarFiltersTooltipShow: f("Show filters", d),
    //filter textfield labels
    headerFilterOperatorContains: f("contains", d),
    headerFilterOperatorEquals: f("equals", d),
    headerFilterOperatorStartsWith: f("starts with", d),
    headerFilterOperatorEndsWith: f("ends with", d),
    headerFilterOperatorIsEmpty: f("is empty", d),
    headerFilterOperatorIsNotEmpty: f("is not empty", d),
    headerFilterOperatorAfter: f("is after", d),
    headerFilterOperatorOnOrAfter: f("is on or after", d),
    headerFilterOperatorBefore: f("is before", d),
    headerFilterOperatorOnOrBefore: f("is on or before", d),
    headerFilterOperatorIs: f("is", d),
    "headerFilterOperator=": f("equals", d),
    "headerFilterOperator!=": f("does not equal", d),
    "headerFilterOperator>": f("greater than", d),
    "headerFilterOperator>=": f("greater than or equal to", d),
    "headerFilterOperator<": f("less than", d),
    "headerFilterOperator<=": f("less than or equal to", d),
    columnsManagementSearchTitle: f("Search", d),
    columnsManagementNoColumns: f("No columns", d),
    paginationRowsPerPage: f("Rows per page", d),
    paginationDisplayedRows: ({ from: b, to: I, count: M }) => `${b}–${I} ${f("of", d)} ${M}`,
    toolbarQuickFilterLabel: f("Search", d),
    toolbarFiltersTooltipActive: (b) => `${b} ${f(b === 1 ? "active filter" : "active filters", d)}`,
    columnHeaderSortIconLabel: f("Sort", d),
    filterPanelOperatorAnd: f("And", d),
    filterPanelOperatorOr: f("Or", d),
    noResultsOverlayLabel: f("No results found", d),
    columnHeaderFiltersTooltipActive: (b) => `${b} ${f(b === 1 ? "active filter" : "active filters", d)}`,
    detailPanelToggle: f("Detail panel toggle", d),
    checkboxSelectionHeaderName: f("Checkbox selection", d),
    columnsManagementShowHideAllText: f("Show/Hide all", d),
    noColumnsOverlayLabel: f("No columns", d),
    noColumnsOverlayManageColumns: f("Manage columns", d),
    columnsManagementReset: f("Reset", d),
    groupColumn: (b) => `${f("Group by", d)} ${b}`,
    unGroupColumn: (b) => `${f("Ungroup", d)} ${b}`,
    footerRowSelected: (b) => {
      const I = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${f(I, d)}`;
    }
  }), [f, d, e?.searchPlaceholder]), Ra = W(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: A,
      currentPreference: Qr,
      isReadOnly: Z,
      canAdd: Hr,
      forAssignment: z,
      showAddIcon: Wt,
      onAdd: sn,
      selectionApi: Je,
      rowSelectionModel: le,
      selectAll: pn,
      available: g,
      onAssign: un,
      assigned: c,
      onUnassign: dn,
      effectivePermissions: at,
      clearFilters: cn,
      handleExport: fn,
      preferenceKey: kt,
      apiRef: Se,
      gridColumns: ye,
      tTranslate: f,
      tOpts: d,
      idProperty: pe,
      filterModel: Be,
      setFilterModel: Ae,
      onPreferenceChange: en,
      toolbarItems: N,
      headerActions: $.headerActions,
      customExportOptions: X
    },
    footer: {
      pagination: Jr !== !0,
      apiRef: Se,
      tTranslate: f,
      tOpts: d
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: f("Go to previous page", d),
        "aria-label": f("Go to previous page", d)
      },
      nextIconButtonProps: {
        title: f("Go to next page", d),
        "aria-label": f("Go to next page", d)
      }
    }
  }), [e, A, Qr, Z, Hr, z, Wt, sn, Je, le, pn, g, un, c, dn, at, cn, fn, kt, Se, ye, f, d, pe, Be, Ae, en, N, $.headerActions, X]), ka = W(() => ({
    columns: {
      columnVisibilityModel: Ft
    },
    pinnedColumns: an
  }), [Ft, an]), Na = W(() => ({
    headerFilterMenu: !1,
    toolbar: ul,
    footer: Fi
  }), []);
  return /* @__PURE__ */ D(be, { children: [
    y !== !1 && /* @__PURE__ */ a(
      Zn,
      {
        navigate: De,
        showBreadcrumbs: !sa && !ca,
        breadcrumbs: Ia,
        enableBackButton: hr,
        breadcrumbColor: ua,
        model: e
      }
    ),
    /* @__PURE__ */ D(Pe, { style: L || u, children: [
      /* @__PURE__ */ a(Pe, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        Mn,
        {
          sx: [
            {
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
            ...Array.isArray(de) ? de : de ? [de] : []
          ],
          headerFilters: It,
          unstable_headerFilters: It,
          checkboxSelection: z,
          loading: !A.records || oa,
          className: "pagination-fix",
          onCellClick: va,
          onCellDoubleClick: Fa,
          columns: ye,
          paginationModel: we,
          pageSizeOptions: Y.pageSizeOptions,
          onPaginationModelChange: F,
          pagination: !Jr,
          rowCount: A.recordCount,
          rows: A.records || [],
          sortModel: _e,
          paginationMode: Pt,
          sortingMode: Pt,
          filterMode: Pt,
          processRowUpdate: Sa,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Ta,
          onFilterModelChange: Aa,
          rowSelectionModel: le,
          onRowSelectionModelChange: nt,
          filterModel: Be,
          getRowId: Ea,
          onRowClick: E,
          slots: Na,
          slotProps: Ra,
          hideFooterSelectedRowCount: re,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Se,
          disableAggregation: !0,
          disableRowGrouping: Fe,
          disableRowSelectionOnClick: fr,
          disablePivoting: da,
          filterDebounceMs: mr,
          initialState: ka,
          ...ga && {
            getDetailPanelContent: Oa,
            detailPanelExpandedRowIds: ma,
            onDetailPanelExpandedRowIdsChange: Ma
          },
          localeText: Ba,
          showToolbar: !0,
          columnHeaderHeight: pa,
          hideFooter: !G,
          rowGroupingModel: ba,
          onRowGroupingModelChange: (b) => xr(b),
          getRowClassName: $.getRowClassName,
          columnGroupingModel: ya
        }
      ) }),
      mt && /* @__PURE__ */ D(Ke, { open: !!mt, onConfirm: ln, onCancel: ln, title: "Info", hideCancelButton: !0, children: [
        " ",
        mt
      ] }),
      pt && !mt && /* @__PURE__ */ a(Ke, { open: pt, onConfirm: Da, onCancel: () => ft(!1), title: f("Confirm Delete", d), okText: f("Ok", d), cancelText: f("Cancel", d), children: /* @__PURE__ */ D(wn, { children: [
        f("Are you sure you want to delete", d),
        " ",
        je.name && /* @__PURE__ */ a(xt, { style: { display: "inline" }, title: je.name, arrow: !0, children: je.name.length > 30 ? `${je.name.slice(0, 30)}...` : je.name }),
        " ?"
      ] }) }),
      zt && /* @__PURE__ */ a(
        Ke,
        {
          open: zt,
          onConfirm: Pa,
          onCancel: () => ht(!1),
          title: f("Confirm Add", d),
          okText: f("Ok", d),
          cancelText: f("Cancel", d),
          children: /* @__PURE__ */ D(wn, { children: [
            f("Are you sure you want to add", d),
            " ",
            le.ids.size,
            " ",
            f("records", { count: le.ids.size, ...d }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, ll), vl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = (p) => {
    t.setFieldValue(r, p.target.checked);
  }, s = W(() => t.values[r] ?? !!e.defaultValue, [t, e]), l = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ a(
      Jo,
      {
        control: /* @__PURE__ */ a(
          jn,
          {
            ...n,
            name: r,
            disabled: l || e.disabled === !0,
            checked: s,
            onChange: o,
            onBlur: t.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ a(dt, { error: t.touched[r] && !!t.errors[r], children: t.touched[r] && t.errors[r] })
  ] }, r);
}, kr = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = vt(), s = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ a(
    lr,
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
      name: r,
      value: t.values[r],
      onChange: t.handleChange,
      onBlur: t.handleBlur,
      error: t.touched[r] && !!t.errors[r],
      helperText: t.touched[r] && t.errors[r],
      autoComplete: e.autoComplete,
      ...n,
      defaultValue: e.defaultValue
    },
    r
  );
};
function ta(e, r) {
  const [t, n] = B(e);
  return fe(() => {
    const o = setTimeout(() => {
      n(e);
    }, r);
    return () => {
      clearTimeout(o);
    };
  }, [e, r]), t;
}
const Dn = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, Dl = {
  outlined: Do,
  filled: vo,
  standard: wo
}, Sl = () => /* @__PURE__ */ D(
  Rn,
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
        nr.Increment,
        {
          render: /* @__PURE__ */ a($t, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ a(
            Zo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        nr.Decrement,
        {
          render: /* @__PURE__ */ a($t, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ a(
            Un,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), Fl = ({ column: e, otherProps: r, formik: t, field: n, ...o }) => {
  const { min: s, max: l, readOnly: p, precision: m } = e, y = vt(), C = W(
    () => Dn({ value: s, state: t.values }),
    [s, t.values]
  ), h = W(
    () => Dn({ value: l, state: t.values }),
    [l, t.values]
  ), c = W(() => t.values[n] ?? null, [t.values[n]]), [g, w] = B(c), x = ta(g, 400);
  fe(() => {
    x !== c && t.setFieldValue(n, x);
  }, [x]), fe(() => {
    c !== g && w(c);
  }, [c]);
  const u = (L) => {
    w(L);
  }, i = (L) => {
    t.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(L);
  }, S = $a(), v = `number-field-${n}-${S}`, k = e.variant || "standard", O = Dl[k], E = W(() => {
    if (m !== void 0)
      return {
        maximumFractionDigits: m
      };
  }, [m]);
  return /* @__PURE__ */ D(
    nr.Root,
    {
      value: g,
      onValueChange: u,
      min: C,
      max: h,
      disabled: p,
      format: E,
      render: (L, te) => /* @__PURE__ */ a(
        Ct,
        {
          fullWidth: !0,
          ref: L.ref,
          error: t.touched[n] && !!t.errors[n],
          sx: p ? {
            backgroundColor: y.palette?.action?.disabled
          } : void 0,
          children: L.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          nr.Input,
          {
            render: (L, te) => /* @__PURE__ */ a(
              O,
              {
                id: v,
                inputRef: L.ref,
                value: te.inputValue,
                onChange: L.onChange,
                onBlur: (H) => {
                  L.onBlur(H), i(H);
                },
                inputProps: {
                  ...L,
                  "aria-describedby": t.touched[n] && t.errors[n] ? `${v}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(Sl, {}),
                sx: { pr: 0 },
                ...r
              }
            )
          }
        ),
        t.touched[n] && t.errors[n] && /* @__PURE__ */ D(dt, { id: `${v}-error`, error: !0, children: [
          " ",
          t.errors[n],
          " "
        ] })
      ]
    }
  );
}, Pl = ({ otherProps: e, ...r }) => {
  const [t, n] = ut.useState(!1), o = () => n((m) => !m), s = (m) => {
    m.preventDefault();
  }, { readOnly: l = !1, disabled: p = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: l,
      disabled: p,
      endAdornment: /* @__PURE__ */ a(Rn, { position: "end", children: /* @__PURE__ */ a(
        $t,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: s,
          edge: "end",
          disabled: p,
          readOnly: l,
          size: "large",
          children: t ? /* @__PURE__ */ a(Qo, {}) : /* @__PURE__ */ a(Xo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(kr, { otherProps: e, ...r });
}, El = ({ column: e, field: r, formik: t, otherProps: n, fieldConfigs: o = {}, mode: s }) => {
  const l = s !== "copy" && o.disabled, { systemDateTimeFormat: p, stateData: m } = Ge(), y = W(() => t.values[r] ? ae(t.values[r]) : null, [t.values[r]]), C = e.minField ? t.values[e.minField] : void 0, h = e.maxField ? t.values[e.maxField] : void 0, c = W(() => e.min ? ae(e.min) : e.minField && C ? ae(C) : null, [e.min, e.minField, C]), g = W(() => e.max ? ae(e.max) : e.maxField && h ? ae(h) : null, [e.max, e.maxField, h]), w = T((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const i = ae(x).hour(12).toISOString();
    t.setFieldValue(r, i);
  }, [r, t]);
  return /* @__PURE__ */ Lr(
    Nn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: p(!0, !1, m.dateTime),
      name: r,
      value: y,
      onChange: w,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: c,
      maxDate: g,
      disabled: l,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
};
ae.extend(kn);
const Al = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: s } = Ge(), l = W(() => {
    const p = t.values[r];
    return p ? ae(p) : null;
  }, [t.values[r], e]);
  return /* @__PURE__ */ Lr(
    Ln,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, s.dateTime),
      name: r,
      value: l,
      onChange: (p) => {
        p ? e.localize ? t.setFieldValue(r, p.toISOString()) : t.setFieldValue(r, p.utcOffset(0, !0).toISOString()) : t.setFieldValue(r, null);
      },
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? ae(e.min) : null,
      maxDateTime: e.max ? ae(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
};
ae.extend(Vr);
const Tl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  let o = t.values[r];
  return !e.localize && o && (o = ae.utc(o).utcOffset(ae().utcOffset(), !0).format()), /* @__PURE__ */ Lr(
    ei,
    {
      ...n,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: o ? ae(o) : null,
      onChange: (s) => (e.localize || (s = s && s.isValid() ? s.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, s)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Il = [null, void 0, ""];
function ra({ column: e, formik: r, lookups: t, dependsOn: n = [], isAutoComplete: o = !1, userSelected: s, model: l }) {
  const [p, m] = B([]), { buildUrl: y } = Ge(), C = Dt(), h = y(l.api), c = W(() => {
    const x = {};
    if (!n.length) return x;
    for (const u of n)
      x[u] = r.values[u];
    return x;
  }, n.map((x) => r.values[x])), g = W(() => n.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, n]), w = T(async () => {
    if (!e.lookup) return;
    if (!Object.values(c).every(
      (u) => !Il.includes(u)
    )) {
      m([]);
      return;
    }
    try {
      const u = await Kn({
        api: h,
        model: l,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: c }] }
        }
      });
      m(u);
    } catch (u) {
      C.showError("Could not load lookups", u.message);
    }
  }, [e.lookup, c, h, l, t, C]);
  return fe(() => {
    n.length ? w() : (o || !s.current) && m(g || []);
  }, [n.length, w, o, g]), p;
}
const Ml = ut.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], model: s, tTranslate: l, tOpts: p, ...m }) => {
  const y = ut.useRef(!1), { placeHolder: C } = e, h = ra({ column: e, formik: t, lookups: n, dependsOn: o, userSelected: y, model: s }), c = vt(), g = W(() => {
    let i = t.values[r];
    if (!i && !y.current && e.defaultValue !== void 0) {
      const S = e.defaultValue;
      if (S != null && S !== "" && h && h.length) {
        const v = h.find((k) => String(k.value) === String(S));
        v && (i = v.value, t.setFieldValue(r, v.value));
      }
    }
    if (h?.length && !i && !e.multiSelect && "IsDefault" in h[0]) {
      const S = h.find((v) => v.IsDefault);
      S && (i = S.value, t.setFieldValue(r, S.value));
    }
    return e.multiSelect && (!i || i.length === 0 ? i = [] : Array.isArray(i) || (i = i.split(",").map((S) => parseInt(S)))), i;
  }, [t.values[r], h, e.multiSelect, r]), w = T((i) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: i.target.value, options: h, event: i, t: l, tOpts: p }), t.handleChange(i), y.current = !0;
  }, [t.values[r], e.onChange, h]), x = W(() => e.multiSelect ? Array.isArray(g) && g.length > 0 : g !== "" && g !== null && g !== void 0 && Array.isArray(h) && h.some((i) => String(i.value) === String(g)), [g, e.multiSelect, h]), u = T((i) => {
    i.stopPropagation();
    const S = e.multiSelect ? [] : "";
    t.setFieldValue(r, S), typeof e.onChange == "function" && e.onChange({ formik: t, value: S, options: h, event: i, t: l, tOpts: p }), y.current = !0;
  }, [e.multiSelect, r, t, e.onChange, h, l, p]);
  return /* @__PURE__ */ D(
    ur,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(ri, { children: C || "" }),
        /* @__PURE__ */ D(Pe, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ a(
            ni,
            {
              IconComponent: Un,
              ...m,
              name: r,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(g) ? g : [] : `${g ?? ""}`,
              onChange: w,
              onBlur: t.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? c.palette?.action?.disabled : ""
              },
              children: Array.isArray(h) && h.map((i) => /* @__PURE__ */ a(Gn, { value: i.value, disabled: i.isDisabled, children: i.label }, i.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ a(
            $t,
            {
              size: "small",
              onClick: u,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": l("Clear selection", p),
              children: /* @__PURE__ */ a(ti, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ a(dt, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), Sn = cr("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Ol = ({ component: e, name: r, formik: t, field: n, column: o }) => {
  const { value: s } = t.getFieldProps(r || n), { setFieldValue: l } = t, p = e || o.relation, m = T((y) => {
    l(r || n, y);
  }, [l, r, n]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ a(Sn, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: s, available: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(Sn, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: s, assigned: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Bl = ({ field: e, formik: r, orientation: t = "row", label: n, lookups: o, fieldConfigs: s = {}, mode: l, tTranslate: p, tOpts: m, ...y }) => {
  const C = (x) => {
    r.setFieldValue(e, x.target.value);
  }, h = o ? o[y.column.lookup] : [], c = vt(), g = r.touched[e] && !!r.errors[e], w = l !== "copy" && s.disabled;
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: g, children: /* @__PURE__ */ a(
      $r,
      {
        row: t === "row",
        "aria-label": n,
        name: e,
        value: r.values[e] ?? "",
        onChange: C,
        children: h?.map((x, u) => /* @__PURE__ */ a(
          ct,
          {
            value: x.value,
            control: /* @__PURE__ */ a(yt, {}),
            label: p(x.label, m),
            disabled: w || (y?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          u
        ))
      }
    ) }),
    g && /* @__PURE__ */ a(dt, { style: { color: c.palette.error.main }, children: r.errors[e] })
  ] });
}, Rl = {
  limitTags: 5
}, kl = Ye.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], fieldConfigs: s = {}, mode: l, model: p, ...m }) => {
  const y = ra({ column: e, formik: t, lookups: n, dependsOn: o, model: p, isAutoComplete: !0 });
  let C = t.values[r] || [];
  Array.isArray(C) || (C = C.split(", ").map(Number));
  const h = y.filter((w) => C.includes(w.value)) || [], c = l !== "copy" && s.disabled, g = (w, x) => {
    let u = x?.map((i) => i.value) || [];
    e.dataFormat !== "array" && (u = u.length ? u.join(", ") : ""), t.setFieldValue(r, u);
  };
  return /* @__PURE__ */ D(
    ur,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ a(
          Wn,
          {
            ...m,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || Rl.limitTags,
            options: y || [],
            getOptionLabel: (w) => w.label || "",
            defaultValue: h,
            renderInput: (w) => /* @__PURE__ */ a(lr, { ...w, variant: "standard" }),
            onChange: g,
            value: h,
            size: "small",
            disabled: c
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ a(dt, { children: t.errors[r] })
      ]
    },
    r
  );
}), Nl = "#182eb5", Ll = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], $l = So(Fo)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Nl : "#ffffff",
  border: `1px solid ${li[500]}`,
  color: r ? "white" : "black"
})), Vl = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ a(
  $l,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), zl = ({ name: e, field: r, formik: t, expired: n }) => {
  const { setFieldValue: o } = t, { value: s } = t.getFieldProps(e || r), l = "1000001", p = "0111110", m = "0".repeat(7), [y, C] = B(s || m), [h, c] = B(() => s ? s === l ? l : s === p ? p : "Custom" : ""), [g, w] = B(!1), x = T((S) => {
    if (Array.isArray(S)) {
      let v = m;
      for (const k of S)
        v = v.substring(0, k) + "1" + v.substring(k + 1);
      C(v), o(e || r, v), w(!0);
    } else {
      let v = g ? m : y;
      const k = v.slice(0, S) + (v[S] === "1" ? "0" : "1") + v.slice(S + 1);
      C(k), o(e || r, k), c("Custom"), w(!1);
    }
  }, [g, m, y, e, r, o]), u = vt(), i = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: i, children: /* @__PURE__ */ D(
      $r,
      {
        row: !0,
        name: e || r,
        value: h,
        onChange: (S) => {
          const v = S.target.value;
          c(v), v !== "Custom" ? (C(v), o(e || r, v), w(!0)) : (C(m), o(e || r, m), w(!1));
        },
        children: [
          /* @__PURE__ */ a(ct, { value: l, control: /* @__PURE__ */ a(yt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ a(ct, { value: p, control: /* @__PURE__ */ a(yt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(ct, { value: "Custom", control: /* @__PURE__ */ a(yt, {}), label: "Specific days" }),
          Ll.map((S, v) => /* @__PURE__ */ a(
            Vl,
            {
              day: S,
              onClick: () => x(v),
              isSelected: h === "Custom" && y[v] === "1",
              disabled: n
            },
            S.value
          ))
        ]
      }
    ) }),
    i && /* @__PURE__ */ a(dt, { style: { color: u.palette.error.main }, children: t.errors[r] })
  ] });
}, Gl = ({ isAdd: e, column: r, field: t, formik: n, otherProps: o, fieldConfigs: s = {}, mode: l }) => {
  const p = vt();
  let m = n.values[t] || [];
  Array.isArray(m) || (m = m.split(",").map((c) => c.trim()));
  const y = Ye.useMemo(() => l === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: n }) : !!r.disabled, [l, s.disabled, r.disabled]), C = r.hasDefault && !e ? [m[0]] : [], h = T((c, g, w, x = {}) => {
    const u = g.pop()?.trim();
    g.includes(u) || g.push(u), C && C.includes(x.option) && w === "removeOption" && (g = [x.option]), r.dataFormat !== "array" && (g = g.length ? g.join(",") : ""), n.setFieldValue(t, g);
  }, [n, t]);
  return /* @__PURE__ */ D(
    ur,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[t] && !!n.errors[t],
      children: [
        /* @__PURE__ */ a(
          Wn,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: m,
            options: [],
            renderInput: (c) => /* @__PURE__ */ a(
              lr,
              {
                ...c,
                variant: "standard",
                InputProps: {
                  ...c.InputProps,
                  sx: {
                    ...c.InputProps?.sx,
                    ...y && { backgroundColor: p.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: h,
            size: "small",
            renderTags: (c, g) => c.map((w, x) => {
              const { key: u, ...i } = g({ index: x });
              return /* @__PURE__ */ a(
                ci,
                {
                  label: w,
                  ...i,
                  disabled: C.includes(w)
                },
                u
              );
            }),
            disabled: y
          }
        ),
        n.touched[t] && n.errors[t] && /* @__PURE__ */ a(dt, { children: n.errors[t] })
      ]
    },
    t
  );
}, jl = (e = []) => {
  const r = {};
  return e.forEach((t) => {
    t.ParentId && r[t.ParentId] ? r[t.ParentId].children.push({
      value: t.value?.toString(),
      label: t.label
    }) : r[t.ParentId] = {
      label: t.ParentName,
      value: "Parent" + t.ParentId.toString(),
      children: [{
        value: t.value?.toString(),
        label: t.label
      }]
    };
  }), Object.values(r);
};
function Ul({ column: e, field: r, formik: t, lookups: n, fieldConfigs: o, mode: s }) {
  const l = n ? n[e.lookup] : [], p = jl(l), m = t.values[r]?.length ? t.values[r].split(", ") : [];
  let y;
  return s !== "copy" && (y = o?.disabled), /* @__PURE__ */ a(tt, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    ui,
    {
      selectedItems: m,
      onSelectedItemsChange: (h, c) => {
        t.setFieldValue(r, c?.join(", ") || "");
      },
      disabled: y,
      multiSelect: !0,
      checkboxSelection: !0,
      children: p.map((h) => /* @__PURE__ */ a(yn, { itemId: h.value, label: h.label, children: h.children.map((c) => /* @__PURE__ */ a(yn, { itemId: c.value, label: c.label }, c.value)) }, h.value))
    }
  ) });
}
const Wl = { maxLength: 500 }, { errorMapping: Hl } = ze, ql = 1024 * 1024;
function Yl({ column: e, field: r, formik: t }) {
  const n = t.values[r] || "", { getApiEndpoint: o } = Ge(), { maxSize: s, formats: l } = e, p = o("upload"), m = o("media"), y = o(), [C, h] = B({
    isExternal: "no",
    selectedFile: null
  }), [c, g] = B(!1), w = Dt(), { getParams: x, useParams: u } = Ur(), { associationId: i } = u() || x, S = i?.split("-")[0] || 1, v = (j) => {
    const _ = j.target.value;
    h({
      ...C,
      isExternal: _,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, k = (j) => {
    t.setFieldValue(r, j.target.value);
  }, O = (j) => {
    const _ = j.target.files[0];
    if (_) {
      if (s && _.size > s * ql) {
        w.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(l) && !l.includes(_.type)) {
        w.showError(`Invalid file format. Allowed formats: ${l.join(", ")}.`);
        return;
      }
      h((U) => ({ ...U, selectedFile: _ }));
    }
  }, E = async () => {
    if (C.selectedFile) {
      g(!0);
      try {
        const j = new FormData();
        j.append("file", C.selectedFile), j.append("DocumentGroupId", t.values.DocumentGroupId), j.append("AssociationId", S);
        const U = (await Yn({
          method: "POST",
          url: p,
          data: j,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!U.success) {
          w.showError(U.message || "Upload failed");
          return;
        }
        const N = m + "/" + U.filePath;
        t.setFieldValue(r, N);
      } catch (j) {
        const _ = (j.message.match(/status code (\d{3})/) || [])[1];
        w.showError(Hl[_]);
      } finally {
        g(!1);
      }
    }
  }, L = new URL(y, window.location.origin).hostname.toLowerCase();
  ut.useEffect(() => {
    h({
      ...C,
      isExternal: n.toLowerCase().includes(L) ? "no" : "yes"
    });
  }, [n, h]);
  const te = t.values[r]?.length > (e.max || Wl.maxLength), H = te ? "red" : "";
  return /* @__PURE__ */ D(Pe, { children: [
    /* @__PURE__ */ D(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Ne, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ D(
        $r,
        {
          row: !0,
          value: C.isExternal,
          onChange: v,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ a(ct, { value: "yes", control: /* @__PURE__ */ a(yt, {}), label: "Yes" }),
            /* @__PURE__ */ a(ct, { value: "no", control: /* @__PURE__ */ a(yt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ D(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Ne, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ D(Pe, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        C.isExternal === "yes" ? /* @__PURE__ */ a(
          st,
          {
            fullWidth: !0,
            value: n,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: H },
                "&.Mui-focused fieldset": { borderColor: H },
                "&:hover fieldset": { borderColor: H }
              }
            },
            onChange: k,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ a(
          st,
          {
            fullWidth: !0,
            value: n,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        te && /* @__PURE__ */ D(Ne, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    C.isExternal === "no" && /* @__PURE__ */ D(Pe, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ D(
        lt,
        {
          variant: "outlined",
          component: "label",
          disabled: c,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: O })
          ]
        }
      ),
      C.selectedFile && /* @__PURE__ */ a(xt, { title: C.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Ne, { variant: "body2", children: C.selectedFile.name.length > 20 ? `${C.selectedFile.name.substring(0, 20)}...` : C.selectedFile.name }) }),
      /* @__PURE__ */ a(
        lt,
        {
          variant: "contained",
          color: "primary",
          onClick: E,
          disabled: !C.selectedFile || c,
          children: c ? /* @__PURE__ */ a(Po, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Kl = ({ field: e, formik: r }) => {
  const [t, n] = Ye.useState({}), o = ta(t, 300);
  Ye.useEffect(() => {
    if (r.values[e])
      try {
        const l = JSON.parse(r.values[e]);
        n(l);
      } catch {
        n({});
      }
  }, [r.values[e]]), Ye.useEffect(() => {
    const l = JSON.stringify(o);
    r.values[e] !== l && r.setFieldValue(e, l);
  }, [o, e, r, r.values[e]]);
  const s = (l, p) => {
    const m = { ...t, [l]: p };
    n(m);
  };
  return /* @__PURE__ */ a(
    ur,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[e] && !!r.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(t).map((l) => /* @__PURE__ */ D(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ D(Lt, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              l,
              ":"
            ] }),
            /* @__PURE__ */ a(
              di,
              {
                id: l,
                name: l,
                value: t[l],
                onChange: (p) => s(l, p.target.value),
                fullWidth: !0,
                style: { flex: 2 }
              }
            )
          ]
        },
        l
      ))
    },
    e
  );
}, _l = {
  boolean: vl,
  select: Ml,
  string: kr,
  number: Fl,
  password: Pl,
  date: El,
  dateTime: Al,
  time: Tl,
  oneToMany: Ol,
  radio: Bl,
  autocomplete: kl,
  dayRadio: zl,
  email: kr,
  chipInput: Gl,
  treeCheckbox: Ul,
  fileUpload: Yl,
  json: Kl
}, Fn = { paddingTop: "2.5px", paddingBottom: "2.5px" }, Jl = si("span")({
  color: "red !important"
}), Zl = ({ tabColumns: e, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: p, mode: m, handleSubmit: y }) => {
  const [C, h] = Ye.useState(/* @__PURE__ */ new Set()), { tOpts: c, tTranslate: g } = dr(r), { activeStep: w, setActiveStep: x } = Ye.useContext(aa), u = {};
  for (let E = 0, L = r.columns.length; E < L; E++) {
    const { field: te, skip: H } = r.columns[E];
    H && (u[H.step] = t.values[te]);
  }
  const i = (E) => C.has(E) || u[E], S = () => {
    for (let E = w + 1; E < e.length; E++)
      if (!i(E))
        return !1;
    return !0;
  }, v = () => {
    let E = w + 1;
    for (; u[E]; )
      E++;
    h((L) => new Set(L).add(w)), E >= e.length || S() ? y() : x(E);
  }, k = () => {
    let E = w - 1;
    for (; u[E] && E > 0; )
      E--;
    x(E);
  };
  if (!e?.length)
    return null;
  const O = e[w];
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(ai, { activeStep: w, sx: { marginBottom: "20px" }, children: e.map(({ title: E, key: L }, te) => /* @__PURE__ */ a(oi, { completed: i(te), children: /* @__PURE__ */ a(ii, { children: /* @__PURE__ */ a(Ne, { sx: { fontSize: "20px" }, children: g(E, c) }) }) }, L)) }),
    /* @__PURE__ */ D(Ye.Fragment, { children: [
      /* @__PURE__ */ a(na, { formElements: O.items, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: p, mode: m }),
      /* @__PURE__ */ D(tt, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        w !== 0 ? /* @__PURE__ */ a(Me, { color: "inherit", disabled: w === 0, onClick: k, variant: "contained", sx: { mr: 2 }, children: g("Back", c) }) : null,
        /* @__PURE__ */ a(Me, { onClick: v, variant: "contained", children: S() ? g("Finish", c) : g("Next", c) })
      ] })
    ] })
  ] });
}, na = ({ formElements: e, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: p, mode: m, isAdd: y }) => {
  const { tOpts: C, tTranslate: h } = dr(r);
  return e?.length ? /* @__PURE__ */ a(be, { children: e.map(({ Component: c, column: g, field: w, label: x, otherProps: u }, i) => {
    const S = typeof g.relation == "function";
    return /* @__PURE__ */ D(Er, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: S ? "flex-start" : "center", children: [
      g?.showLabel !== !1 ? /* @__PURE__ */ a(Er, { size: { xs: 3 }, sx: Fn, children: /* @__PURE__ */ D(Ne, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        h(g.label || w, C),
        ": ",
        g.required && /* @__PURE__ */ a(Jl, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ a(Er, { size: { xs: S ? 12 : 9 }, sx: Fn, children: /* @__PURE__ */ a(c, { isAdd: y, model: r, fieldConfigs: p[w], mode: m, column: g, field: w, label: x, formik: t, data: n, onChange: o, combos: s, lookups: l, tTranslate: h, tOpts: C, ...u }) })
    ] }, i);
  }) }) : null;
}, Ql = function({ columns: e, tabs: r = {}, id: t, searchParams: n }) {
  const o = [], s = {};
  for (const p in r)
    s[p] = [];
  for (const p of e) {
    const m = p.type;
    if (p.label === null)
      continue;
    const { field: y, label: C, tab: h } = p, c = {};
    p.options && (c.options = p.options), p.dependsOn && (c.dependsOn = p.dependsOn);
    const g = _l[m];
    if (!g || p.hideInAddGrid && t === "0")
      continue;
    (h && r[h] ? s[h] : o).push({ Component: g, field: y, label: C, column: { ...p, readOnly: n.has("showRelation") || p.readOnly }, otherProps: c });
  }
  const l = [];
  for (const p in s)
    l.push({ key: p, title: r[p], items: s[p] });
  return { formElements: o, tabColumns: l };
}, Xl = ({ model: e, formik: r, data: t, combos: n, onChange: o, lookups: s, id: l, fieldConfigs: p, mode: m, handleSubmit: y }) => {
  const C = ze.emptyIdValues.includes(l), { formElements: h, tabColumns: c } = Ye.useMemo(() => {
    const g = e.formConfig?.showTabbed, w = new URLSearchParams(window.location.search), { formElements: x, tabColumns: u } = Ql({ columns: e.columns, tabs: g ? e.tabs : {}, id: l, searchParams: w });
    return { formElements: x, tabColumns: u, showTabs: g && u.length > 0 };
  }, [e]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ a(na, { isAdd: C, formElements: h, model: e, formik: r, data: t, onChange: o, combos: n, lookups: s, fieldConfigs: p, mode: m }),
    /* @__PURE__ */ a("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ a(Zl, { tabColumns: c, model: e, formik: r, data: t, onChange: o, combos: n, lookups: s, fieldConfigs: p, mode: m, handleSubmit: y }) })
  ] });
};
function es(e) {
  const { children: r, value: t, index: n, ...o } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      hidden: t !== n,
      id: `simple-tabpanel-${n}`,
      "aria-labelledby": `simple-tab-${n}`,
      ...o,
      children: t === n && /* @__PURE__ */ a(tt, { sx: { p: 3 }, children: r })
    }
  );
}
function ts(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const rs = En(({ relation: e, parentFilters: r, parent: t, where: n, models: o, readOnly: s }) => {
  const l = o.find(({ name: y }) => y === e);
  if (!l) return null;
  const p = { ...l, hideBreadcrumb: !0 }, m = p instanceof or ? p : new or(p);
  return m ? /* @__PURE__ */ a(
    m.ChildGrid,
    {
      readOnly: s,
      parentFilters: r,
      parent: t,
      model: p,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), ns = ut.memo(({ relations: e, parent: r, where: t = [], models: n, relationFilters: o, readOnly: s }) => {
  const [l, p] = B(0);
  return /* @__PURE__ */ D(tt, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(tt, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(fi, { value: l, onChange: (y, C) => {
      p(C);
    }, "aria-label": "relations tabs", children: e.map((y, C) => {
      const h = n.find(({ name: g }) => g === y) || {}, c = h.listTitle || h.title || y;
      return /* @__PURE__ */ a(
        pi,
        {
          label: c,
          ...ts(C)
        },
        y
      );
    }) }) }),
    e.map((y, C) => /* @__PURE__ */ a(es, { value: l, index: C, children: /* @__PURE__ */ a(
      rs,
      {
        readOnly: s,
        relation: y,
        models: n,
        parentFilters: o[y] || [],
        parent: r,
        where: t
      },
      y
    ) }, y))
  ] });
}), aa = ir(1), as = {}, ge = {
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
}, os = ({
  model: e,
  api: r,
  models: t,
  relationFilters: n = {},
  permissions: o = {},
  Layout: s = Xl,
  baseSaveData: l = {},
  sx: p,
  readOnly: m,
  beforeSubmit: y,
  deletePromptText: C,
  detailPanelId: h = null,
  // Grid Row Detail Panel Id
  onCancel: c,
  onSaveSuccess: g
}) => {
  const w = e.formTitle || e.title, { translate: x, tOpts: u, tTranslate: i } = dr(e), { navigate: S, getParams: v, useParams: k, pathname: O } = Ur(), { relations: E = [] } = e, { stateData: L, buildUrl: te, setPageTitle: H } = Ge(), j = k() || v, { id: _ = "" } = j, U = h || _.split("-")[ge.editIdIndex], N = new URLSearchParams(window.location.search), xe = N.has(ge.baseData) && N.get(ge.baseData);
  if (xe) {
    const G = JSON.parse(xe);
    typeof G === ge.object && G !== null && (l = { ...l, ...G });
  }
  const [oe, ie] = B(!0), [Q, X] = B({}), [de, $] = B({}), [we, F] = B(!1), A = Dt(), [ee, z] = B(null), [re, le] = B(0), [nt, pt] = B(!1), [ft, je] = B(null), [St, Ft] = B(""), zt = typeof e.applyFieldConfig === ge.function ? e.applyFieldConfig({ data: Q, lookups: de }) : as, ht = te(e.api), me = _.includes("-") && _.split("-")[0] === "0" ? "copy" : "", Pt = L.userData || {}, Et = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: d } = Qn({
    userData: Pt,
    model: e,
    userDefinedPermissions: Et
  }), { hideBreadcrumb: mt = !1, navigateBack: ve } = e, _e = !("canEdit" in Q) || Q.canEdit, Ee = T(() => {
    let G;
    switch (typeof ve) {
      case ge.function:
        G = ve({ params: j, searchParams: N, data: Q });
        break;
      case ge.number:
      case ge.string:
        G = ve;
        break;
      default:
        G = O.substring(0, O.lastIndexOf("/"));
        break;
    }
    S(G);
  }, [ve, S, j, N, Q, O]), At = W(() => ze.emptyIdValues.includes(U), [U]), Be = W(() => At ? { ...e.initialValues, ...Q, ...l } : { ...l, ...e.initialValues, ...Q }, [e.initialValues, Q, U]), Ae = r || ht, De = W(() => {
    if (h)
      return h;
    const G = _.split("-");
    return G.length > 1 ? G[ge.loadIdIndex] : U;
  }, [h, _, U]), Gt = T(async () => {
    ie(!0);
    try {
      const G = await ar({
        api: Ae,
        model: e,
        id: De
      });
      Tt(G);
    } catch (G) {
      pr("Could not load record", G.message);
    } finally {
      ie(!1);
    }
  }, [Ae, e, De]);
  fe(() => {
    Gt();
  }, [U, De, e, Ae, Gt]), fe(() => {
    z(e.getValidationSchema({ id: U, tTranslate: i, tOpts: u }));
  }, [U, e, z, x, u, i]);
  const Te = zn({
    enableReinitialize: !0,
    initialValues: Be,
    validationSchema: ee,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (G, { resetForm: Fe }) => {
      Object.keys(G).forEach((Z) => {
        typeof G[Z] === ge.string && (G[Z] = G[Z].trim());
      }), ie(!0), jr({
        id: U,
        api: ht,
        values: G,
        model: e
      }).then((Z) => {
        if (!Z) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof g === ge.function && g();
        const Ue = Z.info ? Z.info : `Record ${U === 0 ? "Added" : "Updated"} Successfully.`;
        A.showMessage(i(Ue, u)), ve !== !1 && Ee(), Fe({ values: Te.values });
      }).catch((Z) => {
        A.showError(
          i("An error occurred, please try after some time.", u),
          Z
        ), e.reloadOnSave && Fe();
      }).finally(() => {
        ie(!1);
      });
    }
  }), jt = T(() => {
    Te.resetForm(), pt(!1), typeof c === ge.function && c(), ve !== !1 && Ee();
  }, [Te, c, ve, Ee]), pr = T((G, Fe) => {
    ie(!1), A.showError(i(G, u), Fe), Ee();
  }, [A, Ee, i, u]), Tt = function({ id: G, title: Fe, record: Z, lookups: Ue }) {
    const Le = _.indexOf("-") > -1, Ie = !G || G === "0", Wt = Ie ? ge.create : Le ? ge.copy : ge.edit, Ot = Ie ? "" : Z[e.linkColumn], Ze = [{ text: e.breadCrumbs }, { text: Wt }];
    Le && (Z[e.linkColumn] = ""), e.columns.forEach((Bt) => {
      Bt.skipCopy && Le && (Z[Bt.field] = "");
    }), X(Z), $(Ue), ie(!1), Ot !== "" && Ze.push({ text: Ot }), H({
      showBreadcrumbs: !0,
      breadcrumbs: Ze
    });
  }, Se = T((G) => {
    Te.dirty && _e ? pt(!0) : (typeof c === ge.function && c(), ve !== !1 && Ee()), G.preventDefault();
  }, [Te.dirty, _e, c, ve, Ee]), pe = T(async () => {
    try {
      F(!0), await Gr({
        id: U,
        api: r || e.api,
        model: e
      }) === !0 && (A.showMessage(i("Record Deleted Successfully.", u)), ve !== !1 && Ee());
    } catch (G) {
      A.showError(i("An error occurred, please try after some time.", u), G?.message);
    } finally {
      F(!1);
    }
  }, [U, r, e.api, A, Ft, e, ve, Ee, i, u]), It = () => {
    Ft(null), F(!1);
  }, fr = T((G) => {
    const { name: Fe, value: Z } = G.target;
    X({ ...Q, [Fe]: Z });
  }, [Q]), Mt = T(async (G) => {
    G && G.preventDefault(), typeof y === ge.function && await y({ formik: Te, model: e });
    const { errors: Fe } = Te;
    Te.handleSubmit();
    const Z = Object.keys(Fe)[0], Ue = Fe[Z];
    Ue && A.showError(i(Ue, u), null, "error");
    const Le = e.columns.find(
      (Ie) => Ie.field === Z
    ) || {};
    Le.tab && le(Object.keys(e.tabs).indexOf(Le.tab));
  }, [y, Te, e, A, le, i, u]), Ut = [
    { text: i(w, u) },
    { text: i(U === "0" ? "New" : "Update", u) }
  ], gt = Number(U) !== 0 && !!E.length, hr = N.has("showRelation"), Je = !_e || Q.readOnlyRelations;
  C = C || i("Are you sure you want to delete ?", u);
  const { showPageTitle: mr = !0 } = e;
  return /* @__PURE__ */ D(be, { children: [
    mr && /* @__PURE__ */ a(
      Zn,
      {
        navigate: S,
        title: w,
        showBreadcrumbs: !mt,
        breadcrumbs: Ut,
        model: e,
        enableBackButton: ve !== void 0
      }
    ),
    /* @__PURE__ */ a(aa.Provider, { value: { activeStep: re, setActiveStep: le }, children: /* @__PURE__ */ D(Yo, { sx: { padding: 2, ...p }, children: [
      oe ? /* @__PURE__ */ a(tt, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(_o, {}) }) : /* @__PURE__ */ D("form", { children: [
        /* @__PURE__ */ D(
          Ko,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              d && _e && !hr && !m && /* @__PURE__ */ a(
                Me,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Mt,
                  children: i("Save", u)
                }
              ),
              /* @__PURE__ */ a(
                Me,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Se,
                  children: i("Cancel", u)
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Me,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => F(!0),
                  children: i("Delete", u)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          s,
          {
            model: e,
            formik: Te,
            data: Q,
            fieldConfigs: zt,
            onChange: fr,
            lookups: de,
            id: U,
            handleSubmit: Mt,
            mode: me
          }
        )
      ] }),
      St && /* @__PURE__ */ D(
        Ke,
        {
          open: !!St,
          onConfirm: It,
          onCancel: It,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            St
          ]
        }
      ),
      /* @__PURE__ */ a(
        Ke,
        {
          open: nt,
          onConfirm: jt,
          onCancel: () => pt(!1),
          title: i("Changes not saved", u),
          okText: i("Discard", u),
          cancelText: i("Continue", u),
          children: i("Would you like to continue to edit or discard changes?", u)
        }
      ),
      /* @__PURE__ */ a(
        Ke,
        {
          open: we,
          onConfirm: pe,
          onCancel: () => {
            F(!1), je(null);
          },
          title: i(ft ? "Error Deleting Record" : "Confirm Delete", u),
          children: C
        }
      ),
      gt ? /* @__PURE__ */ a(
        ns,
        {
          readOnly: Je,
          models: t,
          relationFilters: n,
          relations: E,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, tr = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, is = {}, Pn = !0, ls = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class or {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(r) {
    const { title: t = "" } = r;
    let { api: n, idProperty: o = n + "Id" } = r;
    const s = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    n || (n = `${t.replaceAll(tr.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const l = { ...r.defaultValues }, p = s || t;
    Object.assign(this, {
      standard: !0,
      name: p,
      permissions: { ...or.defaultPermissions },
      idProperty: o,
      linkColumn: `${p}Name`,
      overrideFileName: t,
      preferenceId: p,
      tableName: p,
      module: s,
      ...r,
      api: n
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(l);
  }
  _getColumnVisibilityModel() {
    const r = {};
    for (const t of this.columns)
      t.hide === !0 && (r[t.id || t.field] = !1);
    return r;
  }
  _getDefaultValues(r) {
    for (const t of this.columns) {
      const n = t.field || t.id;
      r[n] = t.defaultValue === void 0 ? ls[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: n = {} } = {}) {
    const { columns: o } = this, s = {};
    for (const l of o) {
      const { field: p, label: m, header: y, type: C = "string", requiredIfNew: h = !1, required: c = !1, min: g = "", max: w = "", validate: x } = l, u = m || y || p;
      if (!u || m === null || m === "") continue;
      let i;
      switch (C) {
        case "string":
          i = he.string().nullable().trim().label(u), g && !isNaN(Number(g)) && (i = i.min(Number(g), t(`${u} must be at least ${g} characters long`, n))), w && !isNaN(Number(w)) && (i = i.max(Number(w), t(`${u} must be at most ${w} characters long`, n))), c && (i = i.trim().required(t(`${u} is required`, n)));
          break;
        case "boolean":
          i = he.bool().nullable().transform((S, v) => v === "" ? null : S).label(u);
          break;
        case "radio":
        case "dayRadio":
          i = he.mixed().label(u), c && (i = i.required(t(`Select at least one option for ${u}`, n)));
          break;
        case "date":
          i = he.date().nullable().transform((S, v) => v === "" || v === null ? null : S).label(u), c && (i = i.required(t(`${u} is required`, n)));
          break;
        case "dateTime":
          i = he.date().nullable().transform((S, v) => v === "" || v === null ? null : S).label(u), c && (i = i.required(t(`${u} is required`, n)));
          break;
        case "select":
        case "autocomplete":
          c ? i = he.string().trim().label(u).required(t(`Select at least one ${u}`, n)) : i = he.string().nullable();
          break;
        case "password":
          i = he.string().label(u).test("ignore-asterisks", t(`${u} must be a valid password.`, n), (S) => {
            if (S === "******") return !0;
            const v = Number(g) || 8, k = Number(w) || 50, O = l.regex || tr.password;
            return he.string().min(v, t(`${u} must be at least ${v} characters`, n)).max(k, t(`${u} must be at most ${k} characters`, n)).matches(
              O,
              t(`${u} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, n)
            ).isValidSync(S);
          });
          break;
        case "email":
          i = he.string().trim().matches(
            l.regex || tr.email,
            t("Email must be a valid email", n)
          );
          break;
        case "number":
          c ? i = he.number().label(u).required(t(`${u} is required.`, n)) : i = he.number().nullable(), g !== void 0 && g !== "" && !isNaN(Number(g)) && (i = i.min(Number(g), t(`${u} must be greater than or equal to ${g}`, n))), w !== void 0 && w !== "" && !isNaN(Number(w)) && (i = i.max(Number(w), t(`${u} must be less than or equal to ${w}`, n)));
          break;
        case "fileUpload":
          i = he.string().trim().label(u);
          break;
        default:
          i = he.mixed().nullable().label(u);
          break;
      }
      if (c && C !== "string" && (i = i.required(t(`${u} is required`, n))), h && (!r || r === "") && (i = i.trim().required(t(`${u} is required`, n))), x) {
        const S = tr.compareValidatorRegex.exec(x);
        if (S) {
          const v = S[1], k = o.find(
            (O) => (O.formField === v || O.field) === v
          );
          i = i.oneOf(
            [he.ref(v)],
            t(`${u} must match ${k.label}`, n)
          );
        }
      }
      s[p] = i;
    }
    return he.object({ ...s, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ a(os, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ a(vn, { model: this, showRowsSelected: Pn, ...t });
  ChildGrid = (r) => /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(vn, { model: this, ...r, customStyle: is, showRowsSelected: Pn }),
    /* @__PURE__ */ a(Eo, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ke as DialogComponent,
  vn as GridBase,
  Yi as HelpModal,
  Cn as MuiTypography,
  Zn as PageTitle,
  Oc as RouterProvider,
  Hn as SnackbarContext,
  Tc as SnackbarProvider,
  Mc as StateProvider,
  or as UiModel,
  Ic as crudHelper,
  Ti as daDKGrid,
  Mi as deDEGrid,
  Bi as elGRGrid,
  ki as esESGrid,
  Li as frFRGrid,
  et as httpRequest,
  Vi as itITGrid,
  qi as locales,
  Ui as ptPT,
  Gi as trTRGrid,
  Ai as useMobile,
  dr as useModelTranslation,
  Ur as useRouter,
  Dt as useSnackbar,
  Ge as useStateContext
};
//# sourceMappingURL=index.js.map
