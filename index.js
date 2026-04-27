import { jsx as a, jsxs as P, Fragment as ye } from "react/jsx-runtime";
import * as Ke from "react";
import ft, { createContext as sr, useContext as $r, useState as O, useEffect as ce, useRef as ar, useCallback as T, useMemo as j, memo as Bn, useId as Ua, createElement as Vr } from "react";
import qa from "@mui/material/Snackbar";
import Ha from "@mui/material/Alert";
import Ne from "@mui/material/Button";
import Ya from "@mui/material/Dialog";
import Ka from "@mui/material/DialogActions";
import _a from "@mui/material/DialogContent";
import Ja from "@mui/material/DialogContentText";
import Za from "@mui/material/DialogTitle";
import * as tt from "@mui/x-data-grid-premium";
import { GridFooterContainer as Qa, GridFooter as Xa, getGridDateOperators as kn, useGridSelector as Rn, gridFilterModelSelector as eo, useGridApiRef as Nn, GridActionsCellItem as Or, DataGridPremium as Ln, GridToolbarExportContainer as to, Toolbar as ro, ColumnsPanelTrigger as no, FilterPanelTrigger as ao, GRID_CHECKBOX_SELECTION_COL_DEF as oo, getGridStringOperators as io, getGridBooleanOperators as lo, useGridApiContext as so, gridRowSelectionStateSelector as co } from "@mui/x-data-grid-premium";
import $n from "@mui/icons-material/Delete";
import uo from "@mui/icons-material/FileCopy";
import po from "@mui/icons-material/Article";
import Vn from "@mui/icons-material/Edit";
import Je from "@mui/material/Box";
import $t from "@mui/material/Typography";
import cr from "@mui/material/TextField";
import { useTranslation as ur, withTranslation as fo } from "react-i18next";
import { Typography as Re, Dialog as ho, DialogTitle as mo, Grid as Se, DialogContent as go, Card as bo, CardContent as yo, Breadcrumbs as Co, Link as xo, Button as ut, IconButton as Vt, Box as Ie, FormControl as St, Select as Br, MenuItem as Ye, Tooltip as Pt, Menu as wo, List as vo, ListItemButton as Fr, ListItemIcon as Ar, ListItem as Do, ListItemText as So, TextField as dt, FormControlLabel as pt, Checkbox as Po, Stack as wn, InputLabel as vn, Badge as Fo, FormHelperText as ht, useTheme as At, Input as Ao, FilledInput as Eo, OutlinedInput as To, InputAdornment as zn, RadioGroup as zr, Radio as Dt, styled as Io, Avatar as Mo, CircularProgress as Oo, Divider as Bo } from "@mui/material";
import ko from "@mui/icons-material/Check";
import kr from "@mui/icons-material/Close";
import Ro from "@mui/icons-material/Help";
import { Replay as No, Close as Lo, GridOn as $o, TableChart as Er, Code as Vo, Language as zo, DataObject as Go } from "@mui/icons-material";
import ae from "dayjs";
import Gn from "dayjs/plugin/utc";
import jo from "dayjs/plugin/timezone";
import { DatePicker as jn } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Wn } from "@mui/x-date-pickers/DateTimePicker";
import Gr from "dayjs/plugin/utc.js";
import { LocalizationProvider as Un } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as qn } from "@mui/x-date-pickers/AdapterDayjs";
import Rr from "@mui/icons-material/Add";
import Wo from "@mui/icons-material/Remove";
import Uo from "@mui/icons-material/FilterListOff";
import qo from "@mui/icons-material/ViewColumn";
import Ho from "@mui/icons-material/FilterList";
import { styled as dr } from "@mui/material/styles";
import Yo from "@mui/icons-material/Save";
import Dn from "@mui/icons-material/Settings";
import Ko from "@mui/icons-material/Refresh";
import { useFormik as Hn } from "formik";
import * as me from "yup";
import { DateTimePicker as _o, DatePicker as Jo } from "@mui/x-date-pickers";
import Yn from "@mui/material/MenuItem";
import Zo from "@mui/icons-material/History";
import Qo from "@mui/icons-material/FileDownload";
import Kn from "@mui/material/Checkbox";
import Xo from "@mui/material/Paper";
import ei from "@mui/material/Stack";
import ti from "@mui/material/CircularProgress";
import ri from "@mui/material/FormControlLabel";
import { NumberField as or } from "@base-ui/react/number-field";
import ni from "@mui/icons-material/KeyboardArrowUp";
import _n from "@mui/icons-material/KeyboardArrowDown";
import ai from "@mui/icons-material/VisibilityOff";
import oi from "@mui/icons-material/Visibility";
import { TimePicker as ii } from "@mui/x-date-pickers/TimePicker";
import li from "@mui/icons-material/Clear";
import pr from "@mui/material/FormControl";
import si from "@mui/material/InputLabel";
import ci from "@mui/material/Select";
import Tr from "@mui/material/Grid";
import Jn from "@mui/material/Autocomplete";
import ui from "@mui/material/Stepper";
import di from "@mui/material/Step";
import pi from "@mui/material/StepLabel";
import { grey as fi } from "@mui/material/colors";
import hi from "@emotion/styled";
import mi from "@mui/material/Chip";
import { SimpleTreeView as gi } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as Sn } from "@mui/x-tree-view/TreeItem";
import bi from "@mui/material/Input";
import yi from "@mui/material/Tab";
import Ci from "@mui/material/Tabs";
const Zn = sr(null), xi = "bottom", wi = "center", vi = ft.forwardRef(function(t, r) {
  return /* @__PURE__ */ a(Ha, { elevation: 6, ref: r, variant: "filled", ...t });
}), Lc = ({ children: e }) => {
  const [t, r] = O(null), [n, o] = O(!1), [l, s] = O(null), [p, h] = O(null), C = function(c, g, w = "info", x) {
    typeof c != "string" && (c = c.toString()), g && typeof g != "string" && (g = g.toString()), r(g ? `${c}: ${g}` : c), s(w), o(!0), h(x);
  }, y = function(c, g, w = "error", x) {
    C(c, g, w, x);
  }, m = function() {
    o(!1), h(null), p && p();
  };
  return /* @__PURE__ */ P(ye, { children: [
    /* @__PURE__ */ a(
      Zn.Provider,
      {
        value: { showMessage: C, showError: y },
        children: e
      }
    ),
    /* @__PURE__ */ a(qa, { open: n, autoHideDuration: 6e3, onClose: m, anchorOrigin: { vertical: xi, horizontal: wi }, children: /* @__PURE__ */ a(vi, { severity: l, children: t }) })
  ] });
}, Et = function() {
  return $r(Zn);
}, _e = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: n, okText: o, cancelText: l, yesNo: s = !1, children: p, maxWidth: h = "sm", fullWidth: C = !0, ...y }) => (o = o || (s ? "Yes" : "Ok"), l = l || (s ? "No" : "Cancel"), /* @__PURE__ */ P(
  Ya,
  {
    ...y,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: h,
    fullWidth: C,
    children: [
      /* @__PURE__ */ a(Za, { id: "alert-dialog-title", sx: { fontSize: p ? "inherit" : "1.25rem" }, children: r }),
      p && /* @__PURE__ */ a(_a, { dividers: !0, children: /* @__PURE__ */ a(Ja, { children: p }) }),
      (n || t) && /* @__PURE__ */ P(Ka, { children: [
        n && /* @__PURE__ */ a(Ne, { onClick: n, children: l }),
        t && /* @__PURE__ */ a(Ne, { onClick: t, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Ir = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Qn = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, Di = (e, t) => {
  const r = new URL(e);
  for (const n in t) {
    const o = typeof t[n] == "object" ? JSON.stringify(t[n]) : t[n];
    r.searchParams.append(n, o);
  }
  window.open(r, "_blank").focus();
}, Xn = async (e) => {
  const {
    method: t = "GET",
    url: r,
    data: n,
    headers: o = {},
    credentials: l = "include",
    ...s
  } = e, p = {
    method: t,
    credentials: l,
    headers: {
      ...o
    },
    ...s
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete p.headers["Content-Type"], p.body = n instanceof FormData ? n : Qn(n)) : (p.headers["Content-Type"] = o["Content-Type"] || "application/json", p.body = typeof n == "string" ? n : JSON.stringify(n)));
  const h = await fetch(r, p), C = h.headers.get("content-type") || {};
  return {
    status: h.status,
    data: C.includes("application/json") ? await h.json() : await h.text(),
    headers: Object.fromEntries(h.headers.entries())
  };
}, Si = (e) => e?.message || e?.info || e?.error || e?.err, Le = Object.freeze({
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
  params: t = {},
  history: r,
  jsonPayload: n = !1,
  method: o = "POST",
  signal: l,
  additionalParams: s = {},
  additionalHeaders: p = {},
  dataParser: h = Le.raw,
  onParseError: C
}) => {
  if (t.exportData)
    return Di(e, t);
  const y = {
    method: o,
    credentials: "include",
    url: e,
    headers: n ? { ...p } : { "Content-Type": "multipart/form-data", ...p },
    ...l && { signal: l },
    ...s
  };
  t && Object.keys(t).length > 0 && (y.data = n ? t : Qn(t));
  try {
    const m = await Xn(y);
    let c = m.data;
    if (m.status === Ir.SESSION_EXPIRED && r) {
      r("/login");
      return;
    }
    if (m.status === Ir.FORBIDDEN)
      return { error: !0, message: c.message || "Access Denied!" };
    if (m.status !== Ir.OK)
      return { error: !0, message: c.message || "An error occurred" };
    try {
      c = h(c);
    } catch (g) {
      return C ? C(g, c) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: g.message,
        rawData: c
      };
    }
    return c;
  } catch (m) {
    return m.name === "AbortError" ? { error: !0, aborted: !0, message: m.message || "Request aborted" } : { error: !0, message: m.message || "Network error" };
  }
}, Pi = ["date", "dateTime"], Fi = ["singleSelect"], Ai = 1e6;
function Ei(e) {
  const { operator: t, value: r, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(t), l = r != null && (r !== "" || n === "number" && r === 0 || n === "boolean" && r === !1);
  return o || l;
}
const Ti = (e, t = !1) => {
  if (typeof e != "string" || e === void 0 || e === null)
    return e;
  if (e.length === 0)
    return null;
  if (e.length === 17) {
    const n = +e.slice(0, 4), o = +e.slice(4, 6) - 1, l = +e.slice(6, 8), s = +e.slice(8, 10), p = +e.slice(10, 12), h = +e.slice(12, 14), C = +e.slice(14, 17);
    return t ? new Date(Date.UTC(n, o, l, s, p, h, C)) : new Date(n, o, l, s, p, h, C);
  }
  if (e.length === 24)
    return t ? new Date(e) : new Date(e.slice(0, -1));
  const r = new Date(e);
  return Number.isNaN(r.getTime()) ? e : r;
};
async function Ft(e, t) {
  typeof e.createRequestPayload == "function" && await e.createRequestPayload(t);
  const r = String(t.method ?? "").toUpperCase(), n = {
    url: t.url,
    method: t.method,
    jsonPayload: t.jsonPayload,
    dataParser: t.dataParser,
    signal: t.signal,
    responseType: t.responseType,
    columns: t.columns
  };
  return r !== "GET" && r !== "HEAD" && (n.params = t.params ?? { ...t.requestData, where: t.where }), n;
}
async function jr({ model: e, action: t, responseData: r, context: n = {} }) {
  return typeof e.parseResponsePayload == "function" && e.parseResponseActions?.includes(t) ? await e.parseResponsePayload({
    responseData: r,
    model: e,
    action: t,
    ...n
  }) : r;
}
function zt(e, t) {
  if (e?.error || e?.success === !1)
    throw new Error(Si(e) || t);
}
const Ii = ({ gridColumns: e, page: t, pageSize: r, sortModel: n, filterModel: o, baseFilters: l, action: s = "list", extraParams: p = {}, model: h, api: C }) => {
  const y = s === "export" && h.isElasticExport === !0, m = [], c = [], g = [];
  e.forEach(({ lookup: v, type: B, field: I, localize: A = !1, filterable: k = !0, dependsOn: te }) => {
    Pi.includes(B) && g.push({ field: I, localize: A }), v && !m.includes(v) && Fi.includes(B) && k && (m.push(v), c.push({ lookup: v, dependsOn: te }));
  });
  const w = [];
  o?.items?.length && o.items.forEach((v) => {
    if (Ei(v)) {
      const { field: B, operator: I, filterField: A } = v;
      let { value: k } = v;
      const K = e.filter((W) => W?.field === v.field)[0]?.type;
      K === "boolean" ? k = k === "true" || k === !0 ? 1 : 0 : K === "number" && (k = Array.isArray(k) ? k.filter((W) => W) : k), k = v.filterValues || k, w.push({
        field: A || B,
        operator: I,
        value: k,
        type: K
      });
    }
  }), l && Array.isArray(l) && w.push(...l);
  const x = {
    start: t * r,
    limit: y ? h.exportSize || Ai : r,
    ...p,
    logicalOperator: o.logicOperator,
    sort: n.map((v) => (v.filterField || v.field) + " " + v.sort).join(","),
    // Note: where is excluded here and returned separately to allow modification via createRequestPayload hook
    isElasticExport: y,
    model: h.module,
    fileName: h.overrideFileName
  };
  m.length && (x.lookups = m.join(",")), c.length && (x.lookupWithDeps = JSON.stringify(c)), h?.limitToSurveyed && (x.limitToSurveyed = h?.limitToSurveyed);
  let d = `${C}/${s}`;
  const i = new URLSearchParams();
  p.template && i.append("template", p.template), p.configFileName && i.append("configFileName", p.configFileName);
  const S = i.toString();
  return S && (d += `?${S}`), { requestData: x, url: d, where: w, dateColumns: g };
}, Nr = async (e = {}) => {
  const { contentType: t, columns: r, extraParams: n = {}, action: o = "list", model: l, signal: s } = e, { requestData: p, url: h, where: C, dateColumns: y } = Ii(e);
  if (t) {
    const g = await Ft(l, {
      where: C,
      url: h,
      requestData: p,
      dataParsers: Le,
      responseType: t,
      columns: r,
      action: o,
      ...e
    }), w = {
      ...g.params,
      columns: g.columns,
      responseType: g.responseType
    }, x = document.createElement("form");
    if (x.setAttribute("method", "POST"), x.setAttribute("id", "exportForm"), x.setAttribute("target", "_blank"), !n.template)
      for (const d in w) {
        let i = w[d];
        if (i == null)
          continue;
        typeof i != "string" && (i = JSON.stringify(i));
        const S = document.createElement("input");
        S.type = "hidden", S.name = d, S.value = i, x.append(S);
      }
    x.setAttribute("action", g.url), document.body.appendChild(x), x.submit(), setTimeout(() => {
      x.remove();
    }, 0);
    return;
  }
  const m = await Ft(l, {
    where: C,
    url: h,
    requestData: p,
    dataParsers: Le,
    dataParser: Le.json,
    jsonPayload: !0,
    action: o,
    signal: s,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    ...e
  }), c = await et(m);
  return c?.aborted || (zt(c, "An error occurred while fetching data"), await jr({ model: l, action: o, responseData: c, context: { dateColumns: y, model: l, action: o, ...e } }), c.records.forEach((g) => {
    y.forEach((w) => {
      const { field: x, localize: d } = w;
      g[x] && (g[x] = Ti(g[x], d));
    }), l.columns.forEach(({ field: w, displayIndex: x }) => {
      x && (g[w] = g[x]);
    });
  })), c;
}, ir = async (e = {}) => {
  let { api: t, id: r, model: n, parentFilters: o, where: l = {} } = e;
  t = t || n.api;
  const s = new URLSearchParams(), p = `${t}/${r ?? "-"}`, h = [];
  (n.formDef || n.columns)?.forEach((i) => {
    i.lookup && !h.includes(i.lookup) && !i.dependsOn && h.push(i.lookup);
  }), s.set("lookups", h), l && Object.keys(l)?.length && s.set("where", JSON.stringify(l));
  const y = await Ft(n, {
    url: `${p}?${s.toString()}`,
    method: "GET",
    lookupsToFetch: h,
    jsonPayload: !0,
    action: "load",
    dataParsers: Le,
    ...e
  }), m = await et(y);
  zt(m, "Load failed"), await jr({ model: n, action: "load", responseData: m, context: e });
  const { data: c, lookups: g } = m || {};
  let w = c[n.linkColumn];
  const x = n.columns.find((i) => i.field === n.linkColumn);
  if (x && x.lookup && g && g[x.lookup] && g[x.lookup]?.length) {
    const i = g[x.lookup].find((S) => S.value === w);
    i && (w = i.label);
  }
  const d = { ...n.defaultValues };
  return { id: r, title: w, record: { ...d, ...c, ...o }, lookups: g };
}, Wr = async function(e = {}) {
  const { id: t, api: r, model: n } = e;
  if (!t)
    throw new Error("Delete failed. No active record.");
  const o = await Ft(n, {
    url: `${r}/${t}`,
    method: "DELETE",
    dataParsers: Le,
    jsonPayload: !0,
    action: "delete",
    ...e
  }), l = await et(o);
  return zt(l, "Delete failed"), !0;
}, Ur = async function(e = {}) {
  const { id: t, api: r, values: n, model: o } = e;
  let l, s;
  t !== 0 ? (l = `${r}/${t}`, s = "PUT") : (l = r, s = "POST");
  const p = await Ft(o, {
    url: l,
    method: s,
    params: n,
    action: "save",
    jsonPayload: !0,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    dataParsers: Le,
    ...e
  }), h = await et(p);
  return zt(h, "Save failed"), h;
}, ea = async (e = {}) => {
  let { api: t, model: r, lookups: n, scopeId: o, reqData: l } = e;
  t = t || r.api;
  const s = new URLSearchParams(), p = `${t}/lookups`;
  s.set("lookups", n), s.set("scopeId", o);
  const h = await Ft(r, {
    url: `${p}?${s.toString()}`,
    method: "GET",
    lookups: n,
    scopeId: o,
    dataParsers: Le,
    dataParser: Le.json,
    jsonPayload: !0,
    action: "lookups",
    ...l,
    ...e
  }), C = await et(h);
  return zt(C, "Could not load lookups"), await jr({ model: r, action: "lookups", responseData: C, context: e });
}, $c = {
  getList: Nr,
  getRecord: ir,
  deleteRecord: Wr,
  saveRecord: Ur,
  getLookups: ea
}, Mi = ({ pagination: e, apiRef: t, tTranslate: r = (n) => n }) => {
  const n = t.current.state.pagination.paginationModel.page, o = t.current.state.pagination.paginationModel.pageSize, l = t.current.state.rows.totalRowCount, s = Math.ceil(l / o), { t: p, i18n: h } = ur(), C = { t: p, i18n: h }, [y, m] = O(n + 1), c = function(x) {
    let d = x.target?.value;
    d === "" ? m("") : (d = parseInt(d), d = isNaN(d) || d < 1 ? 1 : d, m(d));
  };
  ce(() => {
    m(n + 1);
  }, [n, o]);
  const g = function() {
    let x = y === "" ? 1 : y;
    x = Math.max(x, 1), x = Math.min(x, s), t.current.setPage(x - 1), m(x), y === "" && m(1);
  }, w = (x) => {
    const d = x.which || x.keyCode, i = String.fromCharCode(d);
    /\d/.test(i) || x.preventDefault();
  };
  return /* @__PURE__ */ P(Qa, { children: [
    /* @__PURE__ */ a(Je, { sx: { pl: 5 }, children: e && /* @__PURE__ */ P(ye, { children: [
      /* @__PURE__ */ P($t, { variant: "p", children: [
        r("Jump to page", C),
        ":"
      ] }),
      /* @__PURE__ */ a(
        cr,
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
          onChange: c,
          onKeyPress: w,
          disabled: !l
        }
      ),
      /* @__PURE__ */ a(Ne, { disabled: !l, size: "small", onClick: g, children: r("Go", C) })
    ] }) }),
    /* @__PURE__ */ a(Xa, {})
  ] });
}, Oi = /\${((\w+)\.)?(\w+)}/g, Bi = function(e, t, { template: r = Oi, keepMissingTags: n = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(o, l, s, p) {
    const h = s ? t[s] || {} : t;
    return h[p] === void 0 ? n ? o : "" : h[p];
  });
}, tr = {
  replaceTags: Bi
};
function Pn({ variant: e = "h2", component: t = "h2", text: r = "", name: n = null, ...o }) {
  return /* @__PURE__ */ P(Re, { variant: e, component: t, ...o, children: [
    r,
    n && ` ${n}`
  ] });
}
function ki(e = !1) {
  const t = l(), [r, n] = O(t);
  function o() {
    setTimeout(() => {
      n(l());
    }, 10);
  }
  ce(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function l() {
    let s = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const p = !!s.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    s = s.toLowerCase();
    const h = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(s);
    let C = null;
    return window.innerWidth <= window.innerHeight ? C = "portrait" : C = "landscape", { mobile: p, tablet: h, portrait: C === "portrait", landscape: C === "landscape" };
  }
  return e ? r.mobile : r;
}
const Ri = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Ni = {
  ...tt.daDK,
  ...Ri
}, Li = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, $i = {
  ...tt.deDE,
  ...Li
}, Vi = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, zi = {
  ...tt.elGR,
  ...Vi
}, Gi = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, ji = {
  ...tt.esES,
  ...Gi
}, Wi = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Ui = {
  ...tt.frFR,
  ...Wi
}, qi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Hi = {
  ...tt.itIT,
  ...qi
}, Yi = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Ki = {
  ...tt.trTR,
  ...Yi
}, _i = {
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
}, Ji = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Zi = {
  ...tt.enUS,
  ...Ji
}, Qi = {
  en: Zi,
  "tr-TR": Ki,
  "es-ES": ji,
  "da-DK": Ni,
  "de-DE": $i,
  "el-GR": zi,
  "fr-FR": Ui,
  "pt-PT": _i,
  "it-IT": Hi
};
ae.extend(Gn);
ae.extend(jo);
const ta = sr(), ra = sr(null), Fn = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Vc = ({ children: e, apiEndpoints: t = {} }) => {
  const [r, n] = O("en"), [o, l] = O("MM/DD/YYYY hh:mm:ss A"), [s, p] = O(null), [h, C] = O(null), [y, m] = O(null), [c, g] = O(null), [w, x] = O(""), [d, i] = O(!1), { t: S, i18n: v } = ur(), B = Et(), I = ar(t), A = T((D, N) => {
    I.current[D] = N;
  }, []), k = T((D) => I.current[D || "default"] || "", []), te = T((D, N) => `${I.current[N || "default"] || ""}${D}`, []), K = T((D = !0) => {
    i(D);
  }, []), W = T((D, N, ee) => {
    if (ee != null) {
      const H = ee;
      let $ = D ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return H && ($ = H.split(" "), $[0] = $[0].toUpperCase(), D ? $ = $[0] : N ? $ = $[0].toUpperCase() : ($[1] += $[1].includes(":ss") ? "" : ":ss", $ = $.join(" "))), $;
    }
    return D?.split(" ")[0] || "DD-MM-YYYY";
  }, []), _ = T(({ value: D, useSystemFormat: N, showOnlyDate: ee = !1, state: H }) => {
    if (!D) return null;
    const $ = W(N, ee, H);
    return ae(D).format($);
  }, [W]), U = T(() => {
    const D = r, N = Qi[D];
    function ee(H) {
      return D === "pt-PT" || D === "ptPT" ? N.components.MuiDataGrid.defaultProps.localeText[H] || H : N[H] || H;
    }
    return { getLocalizedString: ee };
  }, [r]), R = T((D) => {
    n(D);
  }, []), Pe = T((D) => {
    p(D);
  }, []), oe = T((D) => {
    m(D);
  }, []), se = T((D) => {
    g(D);
  }, []), re = T((D) => {
    x(D);
  }, []), X = T((D) => {
    l(D);
  }, []), fe = T((D) => {
    C(D);
  }, []), q = j(() => ({
    locale: r,
    dateTime: o,
    pageTitle: s,
    modal: h,
    pageBackButton: y,
    userData: c,
    timeZone: w
  }), [r, o, s, h, y, c, w]), Z = j(() => ({
    // State data
    stateData: q,
    // Loader management
    isLoading: d,
    showLoader: K,
    // Snackbar utilities
    showMessage: B?.showMessage || Fn,
    showError: B?.showError || Fn,
    // i18n utilities
    dayjs: ae,
    t: S,
    i18n: v,
    // Date/time utilities
    systemDateTimeFormat: W,
    formatDate: _,
    useLocalization: U,
    // API utilities
    getApiEndpoint: k,
    setApiEndpoint: A,
    buildUrl: te,
    // App-level state setters with meaningful names
    setLocale: R,
    setPageTitle: Pe,
    setPageBackButton: oe,
    setUserData: se,
    setTimeZone: re,
    setDateTimeFormat: X,
    setModal: fe
  }), [
    q,
    d,
    K,
    S,
    v,
    B,
    k,
    A,
    W,
    _,
    U,
    R,
    Pe,
    oe,
    se,
    re,
    X,
    fe,
    te
  ]);
  return /* @__PURE__ */ a(ta.Provider, { value: Z, children: e });
}, zc = ra.Provider, qr = () => $r(ra), We = () => {
  const e = $r(ta);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Xi = () => {
  const [e, t] = O(), [r, n] = O(!1), { stateData: o, setModal: l } = We(), s = o.modal, p = 16 / 9;
  let h = (window.outerWidth - 10) / window.innerWidth * 100;
  const C = () => {
    let m = document.getElementById("tutorial-iframe");
    m ? (m = m.offsetWidth, m = m / window.innerWidth) : m = 0.9;
    const c = window.innerWidth * m * (1 / p), g = window.innerHeight - 180;
    t(Math.min(c, g));
  };
  ce(() => {
    s?.status && (n(!0), C());
  }, [s, h]), ce(() => (window.addEventListener("resize", C), () => {
    window.removeEventListener("resize", C);
  }), []);
  function y() {
    const m = document.getElementById("tutorial-iframe");
    m.src = s?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: s?.status && /* @__PURE__ */ P(ho, { fullWidth: !0, maxWidth: "lg", open: s.status, onClose: () => {
    l({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(mo, { className: "pt-2 pb-0", children: /* @__PURE__ */ P(Se, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ P(Se, { size: 11, children: [
        /* @__PURE__ */ P(Re, { variant: "h7", component: "div", children: [
          " ",
          s?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Re, { variant: "caption", component: "div", children: s?.data?.subTitle || /* @__PURE__ */ a(ye, { children: " " }) })
      ] }),
      /* @__PURE__ */ P(Se, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(No, { className: "cursor_pointer mt-2 mr-2", onClick: y }),
        /* @__PURE__ */ a(Lo, { className: "cursor_pointer mt-2", onClick: () => {
          l({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ P(go, { dividers: !0, children: [
      r && /* @__PURE__ */ a("div", { children: "Loading..." }),
      s?.data?.url && /* @__PURE__ */ a(
        "iframe",
        {
          id: "tutorial-iframe",
          style: { width: "100%", height: `${e}px` },
          title: s?.data?.title || "",
          src: s?.data?.url,
          allowfullscreen: !0,
          frameborder: "0",
          loading: "lazy",
          onLoad: () => n(!1)
        }
      )
    ] })
  ] }) });
};
function el({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: l = "",
  titleClass: s = "text-theme-blue text-max-width",
  showBreadcrumbs: p,
  breadcrumbs: h = [],
  enableBackButton: C = !1,
  breadcrumbColor: y,
  showHelpButton: m = !1,
  model: c
}) {
  const g = ki(!0), w = h.length - 1, x = p && h.length, { t: d, i18n: i } = ur(), S = j(() => ({ t: d, i18n: i }), [d, i]), v = c?.tTranslate ?? ((I) => I), B = () => {
    t(-1);
  };
  return ce(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ P(ye, { children: [
    /* @__PURE__ */ a(Pn, { className: "print-only", text: v(e, S) }),
    x && /* @__PURE__ */ P(ye, { children: [
      /* @__PURE__ */ a(bo, { sx: { mb: 3 }, children: /* @__PURE__ */ P(yo, { sx: { backgroundColor: y || "#fff" }, children: [
        /* @__PURE__ */ P(Se, { container: !0, children: [
          /* @__PURE__ */ a(Se, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(Co, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${s} breadcrumbs-text-title text-max-width`, children: h.map((I, A) => A < w ? /* @__PURE__ */ a(xo, { onClick: B, className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: I.text }, A) : /* @__PURE__ */ a(Re, { className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", children: I.text }, A)) }) }),
          C && /* @__PURE__ */ a(Se, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(ut, { variant: "contained", onClick: B, children: v("Back", S) }) }),
          m && /* @__PURE__ */ a(Se, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(Vt, { color: "primary", title: v("Help", S), size: "large", children: /* @__PURE__ */ a(Ro, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Ie, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: g ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          Pn,
          {
            className: `${s} page-text-title`,
            variant: "p",
            text: v(e, S),
            name: r
          }
        ) }) }) }) }),
        !g && /* @__PURE__ */ P(ye, { children: [
          /* @__PURE__ */ P(Ie, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ P(Ie, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a(Xi, {})
    ] })
  ] });
}
const na = fo()(el), je = {
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
  normalizeFilterValue: ({ value: e, operator: t, isMultiple: r }) => {
    const n = ["", null, void 0].includes(e);
    return t === "isAnyOf" || r ? Array.isArray(e) ? e : n ? [] : [e] : Array.isArray(e) ? e[0] ?? "" : e ?? "";
  }
}, aa = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: n = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const o = n.find((l) => l.Module === t.module);
  return o ? {
    canAdd: r.add && !!o[je.permissionsMapper.add],
    canEdit: r.edit && !!o[je.permissionsMapper.edit],
    canDelete: r.delete && !!o[[je.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
};
ae.extend(Gr);
const tl = {
  date: jn,
  dateTime: Wn
}, rl = "-10px", nl = "-16px", al = (e) => {
  const { fixedFilterFormat: t } = je, { item: r, applyValue: n, convert: o, colDef: l } = e, { systemDateTimeFormat: s, stateData: p } = We(), h = l?.type || "date", C = t[h], y = l?.localize ?? e.localize ?? !1, m = (i) => {
    const S = ae(i);
    return S.isValid() && S.year() > 1900;
  }, c = s(h !== "dateTime", !1, p.dateTime), g = (i) => {
    if (!(h !== "date" && h !== "dateTime" || ((v) => typeof v != "string" ? !1 : !ae(v, c, !0).isValid())(i))) {
      if (o || y) {
        if (!i) {
          n({ ...r, value: null });
          return;
        }
        i = ae(i).utc(), n({ ...r, value: i });
        return;
      }
      if (!m(i)) {
        n({ ...r, value: null });
        return;
      }
      n({ ...r, value: i.format(C) });
    }
  }, w = (i) => {
    if (i && i === t.OverrideDateFormat) {
      const S = i.split("-");
      return S.length === 3 ? S[1] : null;
    }
  }, x = tl[h], d = r?.value ? ae(r.value) : null;
  return /* @__PURE__ */ a(Un, { dateAdapter: qn, children: /* @__PURE__ */ a(
    x,
    {
      fullWidth: !0,
      format: c,
      value: d,
      onChange: g,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: rl,
            marginBottom: nl,
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
}, Mr = (e) => kn().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ a(al, { ...r, ...e }) : void 0
})), ol = {
  IsAnyOf: "isAnyOf"
}, il = (e) => {
  const { column: t, item: r, applyValue: n, apiRef: o } = e, l = t?.dataRef?.current?.lookups;
  let s = t.customLookup || l[t.lookup] || [];
  typeof t.lookup == "string" && (s = s.map(({ label: m, value: c }) => ({
    label: m,
    value: c
  })));
  const p = Rn(o, eo), h = j(
    () => p.items?.filter((m) => m.field === t.field),
    [t.field, p.items]
  ), C = T(
    (m) => {
      let c = m.target.value;
      if (p.items.length >= 1) {
        c = c.length === 1 ? c[0] : c;
        for (const x of p.items)
          x.field === r.field && (x.operator === ol.IsAnyOf ? c = Array.isArray(c) ? c : [c] : c = c === 0 ? "0" : c);
      }
      if (c.length === 0 && h[0]) {
        o.current.deleteFilterItem(h[0]);
        return;
      }
      const g = c, w = h[0] ? h[0] : r;
      n({ ...w, value: g });
    },
    [o, t.applyZeroFilter, h, r, n]
  ), y = h[0]?.value ?? "";
  return /* @__PURE__ */ a(St, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    Br,
    {
      label: t.field,
      variant: "standard",
      value: y,
      onChange: (m) => C(m),
      multiple: Array.isArray(y),
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 400,
            overflowY: "auto"
          }
        }
      },
      children: s?.map((m, c) => /* @__PURE__ */ a(Ye, { value: m.value, children: e.tTranslate(m.label, e.tOpts) }, c))
    }
  ) });
}, He = {
  Edit: "Edit",
  Delete: "Delete"
}, $e = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, ll = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, sl = { pageSize: 50, page: 0 }, cl = [5, 10, 20, 50, 100], ul = ({ gridRef: e, preferenceKey: t, onPreferenceChange: r, t: n, tOpts: o }) => {
  const { getApiEndpoint: l } = We(), s = l("GridPreferenceManager"), p = Nn(), h = Et(), [C, y] = O($e.NONE), [m, c] = O(null), [g, w] = O(!1), [x, d] = O({}), [i, S] = O(null), [v, B] = O(null), I = j(
    () => i == null ? [] : i.filter((D) => D.prefId !== 0),
    [i]
  ), A = j(() => [
    { field: "prefName", type: "string", width: 300, headerName: n("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: n("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: n("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Or, { icon: /* @__PURE__ */ a(Pt, { title: He.Edit, children: /* @__PURE__ */ a(Vn, {}) }), tabIndex: 1, "data-action": He.Edit, label: n("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Or, { icon: /* @__PURE__ */ a(Pt, { title: He.Delete, children: /* @__PURE__ */ a($n, {}) }), tabIndex: 2, "data-action": He.Delete, label: n("Delete", o), color: "error" }, 2)] }
  ], [n, o]), k = j(() => me.object({
    prefName: me.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: me.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), te = (D) => c(D?.currentTarget), K = () => c(null), W = () => {
    y($e.NONE), K();
  }, _ = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), B(null), r && r(null), K());
  }, U = T(async ({ applyDefault: D = !1 }) => {
    const N = await et({
      url: s,
      params: { action: "list", id: t },
      dataParser: Le.json
    });
    if (!N?.preferences) {
      h.showMessage(n("Failed to load preferences.", o)), r && r(null);
      return;
    }
    const ee = N.preferences.filter((H) => H.prefName.trim() !== "");
    if (S(ee), D) {
      const H = ee.find(($) => $.isDefault);
      if (H)
        return { defaultPrefId: H.prefId, preferences: ee };
      r && r(null);
    }
    return { preferences: ee };
  }, [s, t, h, n, o, r]), R = T(async (D, N = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), D === 0) {
      _();
      return;
    }
    const ee = N || i;
    if (!ee) {
      h.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const H = ee.find((Me) => Me.prefId === D);
    if (!H?.prefValue) {
      h.showMessage(n("Failed to load preference.", o));
      return;
    }
    let $;
    try {
      $ = typeof H.prefValue == "string" ? JSON.parse(H.prefValue) : H.prefValue;
    } catch {
      h.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState($), B(H.prefName), r && r(H.prefName), K();
  }, [e, _, i, r, h, n, o]), Pe = async (D) => {
    const N = D.prefName.trim(), ee = N.toLocaleLowerCase();
    if (i.find(($) => $.prefName.toLocaleLowerCase() === ee && $.prefId !== D.prefId)) {
      w(!0);
      return;
    }
    const H = await et({
      url: s,
      params: {
        action: "save",
        id: t,
        prefId: D.prefId,
        prefName: N,
        prefDesc: D.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: D.isDefault
      },
      dataParser: Le.json
    });
    if (H === !0 || H?.success === !0) {
      h.showMessage(n(`Preference ${C === $e.ADD ? "added" : "saved"} successfully.`, o)), W(), await U({ applyDefault: !1 });
      return;
    }
    h.showMessage(n("Error saving preference: ", o) + (H?.message || n("Unknown error", o)));
  }, oe = async () => {
    const D = await et({
      url: s,
      params: {
        action: "delete",
        id: t,
        prefIdArray: x.prefId
      },
      dataParser: Le.json
    });
    if (D === !0 || D?.success === !0) {
      h.showMessage(n("Preference deleted successfully.", o)), await U({ applyDefault: !1 }), d({});
      return;
    }
    h.showMessage(n("Error deleting preference: ", o) + (D?.message || n("Unknown error", o)));
  }, se = (D) => {
    const N = D.field === "editAction" ? He.Edit : D.field === "deleteAction" ? He.Delete : null;
    if (D.id === 0 && N) {
      h.showMessage(n(`Default preference cannot be ${N === He.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    N === He.Edit && (y($e.EDIT), X.setValues(D?.row)), N === He.Delete && d({
      prefId: D.id,
      preferenceName: D.row.prefName
    });
  }, re = (D) => {
    y(D), K(), D === $e.ADD && X.resetForm();
  }, X = Hn({
    initialValues: ll,
    validationSchema: k,
    onSubmit: Pe,
    mode: "onBlur"
  });
  ce(() => {
    if (!t) return;
    (async () => {
      const N = await U({ applyDefault: !0 });
      N?.defaultPrefId && N?.preferences && await R(N.defaultPrefId, N.preferences);
    })();
  }, [t]);
  const fe = j(() => ({
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
    paginationDisplayedRows: ({ from: D, to: N, count: ee }) => `${D}–${N} ${n("of", o)} ${ee}`,
    toolbarQuickFilterLabel: n("Search", o),
    columnsManagementSearchTitle: n("Search", o),
    columnsManagementNoColumns: n("No columns", o)
  }), [n, o]), q = C === $e.MANAGE, Z = C === $e.ADD || C === $e.EDIT;
  return /* @__PURE__ */ P(Ie, { children: [
    /* @__PURE__ */ P(
      ut,
      {
        id: "grid-preferences-btn",
        "aria-controls": m ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": m ? "true" : void 0,
        onClick: te,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(Dn, {}),
        children: [
          n("Preferences", o),
          " ",
          v && `(${v})`
        ]
      }
    ),
    /* @__PURE__ */ P(
      wo,
      {
        id: "grid-preference-menu",
        anchorEl: m,
        open: !!m,
        onClose: K,
        component: vo,
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
          /* @__PURE__ */ P(Ye, { component: Fr, dense: !0, onClick: () => re($e.ADD), children: [
            /* @__PURE__ */ a(Ar, { children: /* @__PURE__ */ a(Rr, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ P(Ye, { component: Fr, dense: !0, onClick: () => re($e.MANAGE), children: [
            /* @__PURE__ */ a(Ar, { children: /* @__PURE__ */ a(Dn, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ P(Ye, { component: Fr, dense: !0, divider: i?.length > 0, onClick: () => R(0), children: [
            /* @__PURE__ */ a(Ar, { children: /* @__PURE__ */ a(Ko, {}) }),
            n("Reset to Default", o)
          ] }),
          i?.length > 0 && i?.map((D) => {
            const { prefName: N, prefDesc: ee, prefId: H } = D;
            return /* @__PURE__ */ a(
              Ye,
              {
                onClick: () => R(H),
                component: Do,
                selected: v === N,
                title: n(ee, o),
                dense: !0,
                children: /* @__PURE__ */ a(So, { primary: N })
              },
              `pref-item-${H}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ P(
      _e,
      {
        open: C !== $e.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ P(Re, { variant: "h5", children: [
          C,
          " ",
          n(q ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: q ? "md" : "sm",
        fullWidth: !0,
        children: [
          Z && /* @__PURE__ */ P(
            Se,
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
                /* @__PURE__ */ a(Se, { size: 12, children: /* @__PURE__ */ a(
                  dt,
                  {
                    value: X.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ P("span", { children: [
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
                /* @__PURE__ */ a(Se, { size: 12, children: /* @__PURE__ */ a(
                  dt,
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
                /* @__PURE__ */ a(Se, { size: 12, children: /* @__PURE__ */ a(
                  pt,
                  {
                    control: /* @__PURE__ */ a(
                      Po,
                      {
                        checked: X.values.isDefault,
                        name: "isDefault",
                        onChange: X.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(Se, { size: 12, children: /* @__PURE__ */ P(wn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    ut,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ a(Yo, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: n("Save", o)
                    }
                  ),
                  /* @__PURE__ */ a(
                    ut,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ a(kr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: W,
                      disableElevation: !0,
                      children: n("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          q && /* @__PURE__ */ P(Se, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ a(Se, { size: 12, children: /* @__PURE__ */ a(
              Ln,
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
                onCellClick: se,
                columns: A,
                pageSizeOptions: cl,
                pagination: !0,
                rowCount: I.length,
                rows: I,
                getRowId: (D) => D.GridPreferenceId,
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
                    paginationModel: sl
                  }
                },
                localeText: fe
              }
            ) }),
            /* @__PURE__ */ a(Se, { size: 12, children: /* @__PURE__ */ a(wn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
              ut,
              {
                type: "button",
                startIcon: /* @__PURE__ */ a(kr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: W,
                disableElevation: !0,
                children: n("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ P(
      _e,
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
    /* @__PURE__ */ P(
      _e,
      {
        open: !!x.preferenceName,
        onConfirm: oe,
        onCancel: () => d({}),
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
}, dl = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((n) => {
  r.lastIndex = 0;
  const o = r.exec(n);
  if (!o) return null;
  const [, l, s = "ASC"] = o;
  return {
    field: l.trim(),
    sort: s.trim().toLowerCase()
  };
}).filter(Boolean), ct = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: n, type: o, isPivotExport: l = !1, icon: s }) => /* @__PURE__ */ P(
  Yn,
  {
    onClick: r,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": l,
    children: [
      /* @__PURE__ */ a(Je, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: s }),
      e(o, t)
    ]
  }
), pl = ({ exportFormats: e, customExportOptions: t, isStaticDataMode: r = !1, ...n }) => {
  const o = [
    e.csv !== !1 && /* @__PURE__ */ a(ct, { ...n, icon: /* @__PURE__ */ a($o, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }, "csv"),
    e.excel !== !1 && /* @__PURE__ */ a(ct, { ...n, icon: /* @__PURE__ */ a(Er, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }, "excel"),
    !r && n.showPivotExportBtn && /* @__PURE__ */ a(ct, { ...n, icon: /* @__PURE__ */ a(Er, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }, "pivot"),
    !r && e.xml !== !1 && /* @__PURE__ */ a(ct, { ...n, icon: /* @__PURE__ */ a(Vo, { fontSize: "small" }), type: "XML", contentType: "text/xml" }, "xml"),
    !r && e.html !== !1 && /* @__PURE__ */ a(ct, { ...n, icon: /* @__PURE__ */ a(zo, { fontSize: "small" }), type: "HTML", contentType: "text/html" }, "html"),
    !r && e.json !== !1 && /* @__PURE__ */ a(ct, { ...n, icon: /* @__PURE__ */ a(Go, { fontSize: "small" }), type: "JSON", contentType: "application/json" }, "json"),
    !r && Array.isArray(t) && t.map((l, s) => /* @__PURE__ */ a(
      ct,
      {
        ...n,
        icon: l.icon || /* @__PURE__ */ a(Er, { fontSize: "small" }),
        type: l.label || "Excel",
        contentType: l.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        handleExport: l.handleExport || n.handleExport
      },
      l.key || s
    ))
  ].flat().filter(Boolean);
  return o.length === 0 ? null : /* @__PURE__ */ a(to, { ...n, children: o });
}, oa = (e, t) => {
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
}, fl = (e = {}, t = {}) => {
  let r = !0;
  for (const n in e)
    e[n] !== t[n] && (r = !1);
  for (const n in t)
    n in e || (r = !1);
  return r;
};
ae.extend(Gr);
const hl = ({
  column: e,
  filterModel: t,
  setFilterModel: r,
  lookupData: n,
  tTranslate: o,
  tOpts: l
}) => {
  const { systemDateTimeFormat: s, stateData: p } = We(), { fixedFilterFormat: h } = je, C = j(() => t?.items?.find((d) => d.field === e.field), [t, e.field]), y = C?.operator || e.toolbarFilter?.defaultOperator || oa(e.type), m = y === "isAnyOf", c = j(() => {
    if (["isEmpty", "isNotEmpty"].includes(y))
      return "";
    if (!C)
      return m ? [] : "";
    const d = C.value;
    return d ?? (m ? [] : "");
  }, [C, m]), g = T((d) => {
    r((i) => {
      const S = i?.items || [];
      if (d === "" || d === null || Array.isArray(d) && d.length === 0) {
        const I = S.filter((A) => A.field !== e.field);
        return {
          ...i,
          items: I
        };
      }
      const v = {
        field: e.field,
        operator: y,
        value: d,
        type: e.type
      }, B = S.filter((I) => I.field !== e.field);
      return {
        ...i,
        items: [...B, v]
      };
    });
  }, [e, r]), w = T((d, i) => i === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[d] || d : i === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[d] || d : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[d] || d, []);
  return (() => {
    const d = e.toolbarFilter?.label || e.headerName || e.label || e.field, i = w(y, e.type), v = e.type === "number" || e.type === "string" && y !== "startsWith" ? e.type === "number" ? `${i} ${d}` : `${d} (${i})` : d;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          dt,
          {
            variant: "standard",
            label: o(v, l),
            value: c,
            onChange: (R) => g(R.target.value),
            type: "text",
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "number":
        return /* @__PURE__ */ a(
          dt,
          {
            variant: "standard",
            label: o(v, l),
            value: c,
            onChange: (R) => g(R.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const R = c === "" || c === void 0 || c === null ? "" : c === !0 || c === "true" ? "true" : c === !1 || c === "false" ? "false" : "";
        return /* @__PURE__ */ P(St, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(vn, { children: o(v, l) }),
          /* @__PURE__ */ P(
            Br,
            {
              value: R,
              onChange: (Pe) => {
                const oe = Pe.target.value;
                let se;
                oe === "" ? se = "" : oe === "true" ? se = !0 : oe === "false" ? se = !1 : se = oe, g(se);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(Ye, { value: "", children: o("All", l) }),
                /* @__PURE__ */ a(Ye, { value: "true", children: o("True", l) }),
                /* @__PURE__ */ a(Ye, { value: "false", children: o("False", l) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const B = e.customLookup || n?.[e.lookup] || [], I = typeof e.lookup == "string" ? B.map((R) => ({
          label: R?.label || "",
          value: R?.value ?? ""
        })) : B, A = je.normalizeFilterValue({ value: c, operator: y, isMultiple: m }), k = 1;
        return /* @__PURE__ */ P(St, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(vn, { children: o(v, l) }),
          /* @__PURE__ */ a(
            Br,
            {
              value: A,
              onChange: (R) => g(R.target.value),
              multiple: m,
              size: "small",
              renderValue: (R) => {
                const oe = (Array.isArray(R) ? R : R != null && R !== "" ? [R] : []).map((fe) => {
                  if (fe && typeof fe == "object" && "label" in fe) return o(fe.label, l);
                  const q = I.find((Z) => String(Z.value) === String(fe));
                  return q ? o(q.label, l) : "";
                }).filter(Boolean);
                if (oe.length === 0) return "";
                if (oe.length <= k) return oe.join(", ");
                const se = oe.slice(0, k).join(", "), re = oe.length - k, X = oe.join(", ");
                return /* @__PURE__ */ a(Pt, { title: X, placement: "top", children: /* @__PURE__ */ a("span", { children: `${se} +${re}` }) });
              },
              children: I.map((R) => /* @__PURE__ */ a(Ye, { value: R.value, children: o(R.label, l) }, R.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const te = e.type, K = h[te], W = s(te === "date", !1, p.dateTime), _ = te === "dateTime" ? _o : Jo;
        let U = null;
        if (c) {
          const R = ae(c);
          U = R.isValid() ? R : null;
        }
        return /* @__PURE__ */ a(Un, { dateAdapter: qn, children: /* @__PURE__ */ a(
          _,
          {
            label: o(v, l),
            format: W,
            value: U,
            onChange: (R) => {
              !R || !R.isValid() ? g(null) : g(R.format(K));
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
          dt,
          {
            variant: "standard",
            label: o(v, l),
            value: c,
            onChange: (R) => g(R.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, rr = dr(Ne)({
  margin: "6px"
}), ml = dr(ro)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), gl = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: n,
    isReadOnly: o,
    canAdd: l,
    forAssignment: s,
    showAddIcon: p,
    onAdd: h,
    selectionApi: C,
    rowSelectionModel: y,
    selectAll: m,
    available: c,
    onAssign: g,
    assigned: w,
    onUnassign: x,
    effectivePermissions: d,
    clearFilters: i,
    handleExport: S,
    preferenceKey: v,
    apiRef: B,
    tTranslate: I,
    tOpts: A,
    filterModel: k,
    setFilterModel: te,
    onPreferenceChange: K,
    toolbarItems: W,
    gridColumns: _,
    customExportOptions: U,
    isStaticDataMode: R
  } = e, Pe = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), oe = (Z) => Z != null && Z !== "" && !(Array.isArray(Z) && Z.length === 0), re = ((Z = []) => Z.filter(
    (D) => ["isEmpty", "isNotEmpty"].includes(D.operator) || oe(D.value)
  ))(k?.items || []).length || 0, X = _?.filter((Z) => Z.toolbarFilter) || [], fe = r?.lookups || {}, q = r?.records || [];
  return /* @__PURE__ */ P(ye, { children: [
    /* @__PURE__ */ P(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "10px"
        },
        children: [
          /* @__PURE__ */ P("div", { children: [
            t.gridSubTitle && /* @__PURE__ */ P($t, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              I(t.gridSubTitle, A)
            ] }),
            n && t.showPreferenceInHeader && /* @__PURE__ */ P($t, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              I("Applied Preference", A),
              ": ",
              n
            ] }),
            (o || !l && !s) && /* @__PURE__ */ P($t, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !l || o ? "" : t.title
            ] }),
            !s && l && !o && /* @__PURE__ */ a(rr, { startIcon: p ? /* @__PURE__ */ a(Rr, {}) : null, onClick: h, size: "medium", variant: "contained", children: I(Pe, A) }),
            !!e.headerActions && e.headerActions,
            C.length && q.length ? /* @__PURE__ */ a(
              rr,
              {
                onClick: m,
                size: "medium",
                variant: "contained",
                children: y.ids.size === q.length ? I("Deselect All", A) : I("Select All", A)
              }
            ) : /* @__PURE__ */ a(ye, {}),
            c && /* @__PURE__ */ a(rr, { startIcon: p ? /* @__PURE__ */ a(Rr, {}) : null, onClick: g, size: "medium", variant: "contained", children: I("Assign", A) }),
            w && /* @__PURE__ */ a(rr, { startIcon: p ? /* @__PURE__ */ a(Wo, {}) : null, onClick: x, size: "medium", variant: "contained", children: I("Remove", A) })
          ] }),
          /* @__PURE__ */ P(ml, { ...e, children: [
            d.showColumnsOrder && /* @__PURE__ */ a(
              no,
              {
                render: (Z) => /* @__PURE__ */ a(
                  Ne,
                  {
                    ...Z,
                    startIcon: /* @__PURE__ */ a(qo, {}),
                    size: "small",
                    variant: "text",
                    children: I("COLUMNS", A)
                  }
                )
              }
            ),
            d.filter && /* @__PURE__ */ P(ye, { children: [
              /* @__PURE__ */ a(
                ao,
                {
                  render: (Z) => /* @__PURE__ */ a(
                    Ne,
                    {
                      ...Z,
                      startIcon: /* @__PURE__ */ a(Fo, { badgeContent: re, color: "primary", children: /* @__PURE__ */ a(Ho, {}) }),
                      size: "small",
                      variant: "text",
                      children: I("FILTERS", A)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Ne, { startIcon: /* @__PURE__ */ a(Uo, {}), onClick: i, size: "small", children: I("CLEAR FILTER", A) })
            ] }),
            d.export && /* @__PURE__ */ a(pl, { handleExport: S, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, customExportOptions: U, tTranslate: I, tOpts: A, isStaticDataMode: R }),
            W,
            v && /* @__PURE__ */ a(
              ul,
              {
                gridRef: B,
                preferenceKey: v,
                onPreferenceChange: K,
                t: I,
                tOpts: A
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Ie, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: X.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: X.map((Z) => /* @__PURE__ */ a(
      hl,
      {
        column: Z,
        filterModel: k,
        setFilterModel: te,
        lookupData: fe,
        tTranslate: I,
        tOpts: A
      },
      Z.field
    )) }) })
  ] });
};
function Gt(e) {
  const { t, i18n: r } = ur(), n = ft.useMemo(() => ({ t, i18n: r }), [t, r]), o = e?.tTranslate ?? ((l) => l);
  return { translate: t, i18n: r, tOpts: n, tTranslate: o };
}
const bl = 50, yl = /(\w+)( ASC| DESC)?/i, Cl = 6e4, xl = 0, wl = 1e6, Ve = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, vl = {
  article: /* @__PURE__ */ a(po, {}),
  edit: /* @__PURE__ */ a(Vn, {}),
  copy: /* @__PURE__ */ a(uo, {}),
  delete: /* @__PURE__ */ a($n, {}),
  history: /* @__PURE__ */ a(Zo, {}),
  download: /* @__PURE__ */ a(Qo, {})
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
}, ia = ["isEmpty", "isNotEmpty"], Dl = (e) => e, Sl = (e) => {
  const t = Array.isArray(e) ? e : Array.isArray(e?.records) ? e.records : [];
  return {
    records: t,
    recordCount: Number.isFinite(e?.recordCount) ? e.recordCount : t.length,
    lookups: e && typeof e.lookups == "object" && e.lookups !== null && !Array.isArray(e.lookups) ? e.lookups : {}
  };
}, Pl = (e) => (e || []).filter((t) => ia.includes(t.operator) ? !0 : t.value !== null && t.value !== void 0 && t.value !== ""), Fl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], Al = (e) => e.value ? /* @__PURE__ */ a(ko, { style: { color: "green" } }) : /* @__PURE__ */ a(kr, { style: { color: "gray" } }), An = dr("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), El = ({ params: e, handleSelectRow: t, idProperty: r }) => {
  const n = so(), o = e.row[r], s = Rn(n, co)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    Kn,
    {
      onClick: (h) => {
        h.stopPropagation(), t({ row: e.row });
      },
      checked: s,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, En = Bn(({
  model: e,
  columns: t,
  api: r,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: l,
  parent: s,
  where: p,
  title: h,
  showPageTitle: C,
  permissions: y,
  selected: m,
  assigned: c,
  available: g,
  disableCellRedirect: w = !1,
  onAssignChange: x,
  customStyle: d,
  onCellClick: i,
  showRowsSelected: S,
  showFullScreenLoader: v,
  customFilters: B,
  onRowDoubleClick: I,
  onRowClick: A = () => {
  },
  gridStyle: k,
  reRenderKey: te,
  additionalFilters: K,
  onCellDoubleClickOverride: W,
  onAddOverride: _,
  dynamicColumns: U,
  toolbarItems: R,
  readOnly: Pe = !1,
  onListParamsChange: oe,
  apiRef: se,
  baseFilters: re,
  customExportOptions: X,
  sx: fe,
  ...q
}) => {
  const Z = q.staticData ?? e.staticData, D = Array.isArray(Z) || Array.isArray(Z?.records), N = j(
    () => D ? Sl(Z) : null,
    [D, Z]
  ), [ee, H] = O({ pageSize: bl, page: 0 }), [$, Me] = O(() => N || { recordCount: 0, records: null, lookups: {} }), ze = !!x, Tt = S, [ge, rt] = O({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [mt, nt] = O(!1), [Ue, jt] = O(null), Wt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [Ut, It] = O(!1), ue = Et(), Mt = D || e.paginationMode === Y.client ? Y.client : Y.server, { translate: Ce, tOpts: u } = Gt(e), [Fe, fr] = O(""), [Ot, gt] = O(dl(n || e.defaultSort, Y, yl)), at = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (at.items = [], e.defaultFilters.forEach((b) => {
    at.items.push(b);
  }));
  const [Oe, he] = O({ ...at }), { navigate: Be, getParams: hr, useParams: mr, pathname: qt } = qr(), { id: gr } = mr() || hr, bt = gr?.split("-")[0], xe = se || Nn(), Ae = r || e.api, ot = D && !Ae, { idProperty: de = "id", showHeaderFilters: Ht = !0, disableRowSelectionOnClick: br = !0, hideTopFilters: Yt = !0, updatePageTitle: z = !0, isElasticScreen: we = !1, navigateBack: pe = !1, selectionApi: Ee = {}, debounceTimeOut: Ze = 300, showFooter: yt = !0, disableRowGrouping: Kt = !0 } = e, ke = e.readOnly === !0 || Pe || ot, Bt = e.allowDoubleClick === !1, Ct = ar($), it = ar(null);
  ce(() => () => {
    it.current?.abort(), it.current = null;
  }, []);
  const Yr = e.showAddIcon === !0, Kr = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: kt, formatDate: _r, getApiEndpoint: yr, buildUrl: xt, setPageTitle: Cr } = We(), [da, _t] = O(!1), { timeZone: gs } = kt, lt = j(() => ({ ...Y.permissions, ...e.permissions, ...y }), [e.permissions, y]), Jr = ["isEmpty", "isNotEmpty", "isAnyOf"], pa = kt.userData || {}, Jt = e.columns.find((b) => b.type === "fileUpload")?.field || "", fa = { add: lt.add, edit: lt.edit, delete: lt.delete }, { canAdd: Zr, canEdit: Qr, canDelete: Xr } = aa({ userData: pa, model: e, userDefinedPermissions: fa }), f = j(() => e.tTranslate ?? Dl, [e.tTranslate]), { addUrlParamKey: Zt, searchParamKey: Rt, hideBreadcrumb: ha = !1, tableName: en, showHistory: tn = !0, hideBreadcrumbInGrid: ma = !1, breadcrumbColor: ga, disablePivoting: ba = !1, columnHeaderHeight: ya = 70, disablePagination: rn = !1 } = e, nn = e.gridTitle || e.title, Nt = yr("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, Qe = new URLSearchParams(window.location.search), [an, Ca] = O(null), [on, xa] = O(!Nt), wt = f("This action requires an API endpoint.", u), [xr, wr] = O(null), wa = j(() => new Set(xr ? [xr] : []), [xr]), va = typeof e.getDetailPanelContent == "function", [Da, vr] = O([]);
  ce(() => {
    xe.current && (xe.current.prefKey = Nt);
  }, [xe, Nt]);
  const ln = T((b) => {
    Ca(b), xa(!0);
  }, []), Sa = j(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? f(b.headerName, u) : b.headerName
  })) : [], [e.columnGroupingModel, u, Ce, f]);
  ce(() => {
    Array.isArray(q.rowGroupingField) ? vr(q.rowGroupingField) : vr([]);
  }, [q.rowGroupingField]);
  const Dr = Qe.has("baseData") && Qe.get("baseData"), sn = j(() => {
    if (Dr)
      try {
        const b = JSON.parse(Dr);
        if (typeof b === Y.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [Dr]), Pa = T(({ row: b }) => {
    const E = b[de];
    rt((M) => {
      const F = new Set(M?.ids || []);
      return F.has(E) ? F.delete(E) : F.add(E), { type: "include", ids: F };
    });
  }, [de]), cn = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b, E, M) => _r({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: kt.dateTime }),
      filterOperators: Mr({ columnType: "date", label: f("Value", u) })
    },
    dateTime: {
      valueFormatter: (b, E, M) => _r({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: kt.dateTime }),
      filterOperators: Mr({ columnType: "dateTime", label: f("Value", u) })
    },
    boolean: {
      renderCell: Al
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ a(El, { params: b, handleSelectRow: Pa, idProperty: de })
    }
  };
  ce(() => {
    Ct.current = $, typeof q.onDataLoaded == "function" && q.onDataLoaded($);
  }, [$]), ce(() => {
    if (D) {
      Me(N);
      return;
    }
    Me((b) => ({
      ...b || {},
      records: [],
      recordCount: 0,
      lookups: {}
    }));
  }, [D, N]), ce(() => {
    if (!B || !Object.keys(B).length) return;
    if (B.clear) {
      he({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(B).reduce((E, [M, F]) => (M === Y.startDate || M === Y.endDate ? E.push(F) : M in B && E.push({ field: M, value: F, operator: "equals", type: "string" }), E), []);
    he({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [B]);
  const Fa = T(({ field: b, lookupMap: E }) => (Ct.current.lookups || {})[(E || {})[b]?.lookup] || [], []);
  ce(() => {
    q.isChildGrid;
  }, [q.isChildGrid, Yt]);
  const un = T(
    ({ key: b, title: E, icon: M, color: F = "primary", disabled: V, otherProps: G }) => /* @__PURE__ */ a(
      Or,
      {
        icon: /* @__PURE__ */ a(Pt, { title: f(E, u), children: vl[M] || M || f(E, u) }),
        "data-action": b,
        label: f(E, u),
        color: F,
        disabled: V,
        ...G
      },
      b
    ),
    [Ce, u, f]
  ), { customActions: Qt = [] } = e, Xt = j(() => {
    const b = [];
    return !ze && !ke && b.push(
      {
        key: Ve.Edit,
        title: "Edit",
        icon: "edit",
        show: !!Qr,
        disabled: (E) => E.canEdit === !1
      },
      {
        key: Ve.Copy,
        title: "Copy",
        icon: "copy",
        show: !!lt.copy
      },
      {
        key: Ve.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Xr
      },
      {
        key: Ve.History,
        title: "History",
        icon: "history",
        show: !!tn
      },
      ...Qt
    ), b.push({
      key: Ve.Download,
      title: "Download document",
      icon: "download",
      show: Jt.length > 0
    }), b.filter(({ show: E }) => E !== !1);
  }, [
    ze,
    ke,
    Qr,
    Xr,
    tn,
    lt.copy,
    Jt.length,
    Qt
  ]), Aa = T(
    ({ row: b }) => Xt.map(
      ({ key: E, title: M, icon: F, color: V, disabled: G, show: L, action: Q, ...ie }) => un({
        key: E,
        title: M || Q,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: F,
        color: V,
        disabled: G?.(b),
        otherProps: ie
      })
    ),
    [Xt, un]
  ), { gridColumns: ve, pinnedColumns: dn, lookupMap: Sr } = j(() => {
    let b = t || e.gridColumns || e.columns;
    U && (b = [...U, ...b]);
    const E = { left: [oo.field], right: [] }, M = [], F = {}, V = { ...cn, ...e.gridColumnTypes };
    for (const L of b) {
      if (L.gridLabel === null || s && L.lookup === s || L.type === Y.oneToMany && L.countInList === !1) continue;
      const Q = {};
      if (L.type === Y.oneToMany && (Q.type = "number", Q.field = L.field.replace(/s$/, "Count")), V[L.type] && Object.assign(Q, V[L.type]), Q.valueOptions === Y.lookup || L.type === Y.boolean) {
        let le = [];
        Q.valueOptions === Y.lookup && (Q.valueOptions = (De) => Fa({ ...De, lookupMap: F }), le = [...kn(), ...io()].filter((De) => ["is", "not", "isAnyOf"].includes(De.value))), L.type === Y.boolean && (le = lo()), Q.filterOperators = le.map((ne) => ({
          ...ne,
          InputComponent: ne.InputComponent ? (De) => /* @__PURE__ */ a(
            il,
            {
              column: {
                ...L,
                ...L.type === Y.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Ct
              },
              ...De,
              autoHighlight: !0,
              tTranslate: f,
              tOpts: u
            }
          ) : void 0
        }));
      }
      if ((L.linkTo || L.link) && (Q.cellClassName = "mui-grid-linkColumn"), L.hyperlinkURL && !L.renderCell) {
        const { hyperlinkURL: le, hyperlinkIndex: ne } = L;
        Q.renderCell = (De) => {
          const { value: J, formattedValue: Te, row: vt } = De;
          if (J == null || J === "") return J;
          const Xe = ne ? vt[ne] : J, Lt = le.replace("{0}", encodeURIComponent(String(Xe)));
          return /* @__PURE__ */ a("a", { href: Lt, rel: "noopener noreferrer", target: "_blank", children: Te ?? J });
        };
      }
      Kt || (Q.groupable = L.groupable ?? !1);
      const ie = f((typeof L.gridLabel == "function" ? L.gridLabel({ column: L, t: f, tOpts: u }) : L.gridLabel) || L.label, u);
      M.push({ ...L, ...Q, headerName: ie, description: ie }), L.pinned && E[L.pinned === Y.right ? Y.right : Y.left].push(L.field), F[L.field] = L;
    }
    let G = e.standard;
    return G === !0 && (G = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), G && typeof G === Y.object && Fl.forEach(({ key: L, field: Q, type: ie, header: le }) => {
      if (G[L] === !0) {
        const ne = { field: Q, type: ie, headerName: f(le, u), width: 200 };
        ie === Y.dateTime && (ne.filterOperators = Mr({ columnType: "dateTime" }), ne.valueFormatter = cn.dateTime.valueFormatter, ne.localize = !0), M.push(ne);
      }
    }), Xt.length && (M.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? Y.defaultActionWidth) * Xt.length,
      hidable: !1,
      getActions: Aa,
      headerName: f("Actions", u)
    }), E.right.push("actions")), { gridColumns: M, pinnedColumns: E, lookupMap: F };
  }, [t, e, s, y, ze, U, Ce, kt?.dateTime]), Pr = ar(!1);
  ce(() => {
    if (Pr.current) return;
    const b = ve?.filter((F) => F.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (Oe.items.some(
      (F) => b.some((V) => V.field === F.field)
    )) {
      Pr.current = !0;
      return;
    }
    const M = b.map((F) => {
      const V = oa(F.type, F.toolbarFilter?.defaultOperator), G = je.normalizeFilterValue({
        operator: V,
        value: F.toolbarFilter.defaultFilterValue
      });
      return {
        field: F.field,
        operator: V,
        value: G,
        type: F.type
      };
    }).filter((F) => {
      const V = F.value;
      return !(Array.isArray(V) && V.length === 0);
    });
    M.length > 0 && he((F) => ({
      ...F,
      items: [...F.items, ...M]
    })), Pr.current = !0;
  }, [ve]);
  const Ge = T(async ({ action: b = "list", extraParams: E = {}, isPivotExport: M = !1, contentType: F, columns: V } = {}) => {
    if (D) {
      F || Me(N);
      return;
    }
    const { pageSize: G, page: L } = ee, Q = !!F, ie = xt(M ? e.pivotApi : Ae), le = {
      ...Oe,
      items: Pl(Oe.items)
    }, ne = Array.isArray(re) ? [...re] : [];
    e.joinColumn && bt && ne.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(bt) }), K && (le.items = [...le.items || [], ...K]);
    const De = [];
    Array.isArray(ne) && De.push(...ne), Array.isArray(l) && De.push(...l);
    const J = {
      ...E,
      ...q.extraParams
      // Merge any custom params passed via component props
    };
    if ((c || g) && (J[c ? "include" : "exclude"] = Array.isArray(m) ? m.join(",") : m), M && (e.exportTemplate && (J.template = e.exportTemplate), e.configFileName && (J.configFileName = e.configFileName)), !(!le.items.length || le.items.every((qe) => "value" in qe && qe.value !== void 0))) return;
    let vt = null, Xe = null;
    Q || (it.current && it.current.abort(), Xe = new AbortController(), it.current = Xe, vt = Xe.signal);
    const Lt = {
      action: b,
      page: Q ? xl : L,
      pageSize: Q ? wl : G,
      sortModel: Ot,
      filterModel: le,
      gridColumns: ve,
      model: e,
      baseFilters: De,
      api: ie,
      extraParams: J
    };
    typeof oe == "function" && oe(Lt), xe.current.listParams = Lt, Q || _t(!0);
    try {
      const qe = await Nr({ ...Lt, contentType: F, columns: V, signal: vt });
      if (!Q && qe !== void 0 && it.current === Xe) {
        if (qe?.aborted) return;
        Me(qe);
      }
    } catch (qe) {
      if (qe?.aborted || qe?.name === "AbortError" || Xe?.signal?.aborted) return;
      ue.showError(f("An error occurred while fetching data", u)), Q || Me((Wa) => ({ ...Wa, records: [], recordCount: 0 }));
    } finally {
      !Q && it.current === Xe && _t(!1);
    }
  }, [D, N, ee, xt, e, Ae, Oe, re, bt, c, g, m, q.extraParams, Ot, ve, l, oe, xe, Nr, ue, K, f, u]), st = T(async ({ id: b, record: E = {}, mode: M }) => {
    if (o) {
      if (ot) {
        ue.showError(wt);
        return;
      }
      try {
        const V = xt(Ae), G = await ir({ id: b, api: V, model: e, parentFilters: l, where: p });
        o(G);
      } catch {
        ue.showError(f("Could not load record", u));
      }
      return;
    }
    let F = qt;
    F.endsWith("/") || (F += "/"), M === "copy" ? F += "0-" + b : F += b, Zt && (Qe.set(Zt, E[Zt]), F += `?${Qe.toString()}`), Be(F);
  }, [o, ot, Ae, wt, e, l, p, qt, Zt, Qe, Be, ir, xt, ue, f, u]), pn = T(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), Ea = T(async (b, E, M) => {
    let F = b.field === e.linkColumn ? Ve.Edit : null;
    if (!F && b.field === Y.actions && (F = M?.action, !F)) {
      const ie = E.target.closest("button");
      ie && (F = ie.dataset.action);
    }
    const { row: V } = b;
    if (!ke) {
      if (i && typeof await i({ cellParams: b, event: E, details: M }) !== Y.boolean)
        return;
      const ie = Sr[b.field] || {};
      if (ie.linkTo) {
        Be({
          pathname: tr.replaceTags(ie.linkTo, V)
        });
        return;
      }
      switch (F) {
        case Ve.Edit:
          if (e.getDetailPanelContent) {
            const ne = V[de];
            wr((De) => De === ne ? null : ne);
            return;
          } else
            return st({ id: V[de], record: V });
        case Ve.Copy:
          return st({ id: V[de], mode: "copy" });
        case Ve.Delete:
          nt(!0), jt({ name: V[e.linkColumn], id: V[de] });
          break;
        case Ve.History:
          return Be(`${yr("history")}?tableName=${en}&id=${V[de]}&breadCrumb=${Rt ? Qe.get(Rt) : nn}`);
        default:
          const le = Qt.find((ne) => ne.action === F && typeof ne.onClick === Y.function);
          if (le) {
            le.onClick({ row: V, navigate: Be });
            return;
          }
          break;
      }
    }
    if (F === Ve.Download && pn({ documentLink: V[Jt] }), !Kr.length)
      return;
    const { row: G } = b, L = Sr[b.field] || {}, Q = {
      pathname: tr.replaceTags(L.linkTo, G)
    };
    e.addRecordToState && (Q.state = G), Be(Q);
  }, [ke, i, Sr, e, de, Jt, Be, Kr, Qt, en, Rt, Qe, nn, yr, pn, st]), Ta = T(async () => {
    if (ot) {
      ue.showError(wt);
      return;
    }
    const b = xt(Ae);
    try {
      await Wr({ id: Ue.id, api: b, model: e }), ue.showMessage(f("Record Deleted Successfully.", u)), Ge();
    } catch (E) {
      ue.showError(f("Delete failed", u), E.message);
    } finally {
      nt(!1);
    }
  }, [ot, wt, Ae, Ue?.id, ue, e, Ge, f, u]), fn = T(() => {
    fr(null), nt(!1);
  }, []), Ia = T((b) => (typeof q.processRowUpdate == "function" && q.processRowUpdate(b, $), b), [q.processRowUpdate, $]), Ma = T((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: E } = b;
    if (typeof W === Y.function) {
      W(b);
      return;
    }
    if (!ke && !Bt && !w && st({ id: E[de], record: E }), ke && e.rowRedirectLink) {
      const M = {
        pathname: tr.replaceTags(e.rowRedirectLink, E)
      };
      e.addRecordToState && (M.state = E), Be(M);
    }
    typeof I === Y.function && I(b);
  }, [W, ke, Bt, w, st, de, e.rowRedirectLink, e.addRecordToState, Be, I, tr]), Oa = T(async () => {
    if (ge.ids.size < 1) {
      ue.showError(f("Please select at least one record to proceed", u));
      return;
    }
    const b = Array.from(ge.ids), E = new Map(($.records || []).map((G) => [G[de], G]));
    let M = b.map((G) => ({ ...sn, ...E.get(G) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (M = M.map(
      (G) => Object.fromEntries(e.selectionUpdateKeys.map((L) => [L, G[L]]))
    ));
    const F = Ee || Ae;
    if (!F) {
      ue.showError(wt);
      return;
    }
    const V = xt(F);
    _t(!0);
    try {
      const G = await Ur({
        id: 0,
        api: `${V}/updateMany`,
        values: { items: M },
        model: e
      });
      if (G) {
        Ge();
        const L = G.info ? G.info : f("Record Added Successfully.", u);
        ue.showMessage(L);
      }
    } catch (G) {
      ue.showError(G.message || f("An error occurred, please try after some time.", u));
    } finally {
      _t(!1), rt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), It(!1);
    }
  }, [ge.ids, ue, wt, $.records, de, sn, e.selectionUpdateKeys, Ee, Ae, e, Ge, f, u]), hn = T(() => {
    if (Ee.length > 0) {
      if (ge.ids.size > 0) {
        It(!0);
        return;
      }
      ue.showError(
        f("Please select at least one record to proceed", u)
      );
      return;
    }
    typeof _ === Y.function ? _() : st({ id: 0 });
  }, [Ee, ue, _, st, ge.ids.size, f, u]), mn = T(() => {
    Oe?.items?.length && he({ ...Y.gridFilterModel });
  }, [Oe]), er = T(({ unassign: b, assign: E }) => {
    const M = Array.isArray(m) ? m : m.length ? m.split(",") : [], F = b ? M.filter((V) => !b.includes(parseInt(V))) : [...M, ...E];
    x(typeof m === Y.string ? F.join(",") : F);
  }, [m, x]), gn = T(() => {
    er({ assign: Array.from(ge.ids) });
  }, [er, ge.ids]), bn = T(() => {
    er({ unassign: Array.from(ge.ids) });
  }, [er, ge.ids]), yn = T(() => {
    const b = $.records || [];
    if (ge.ids.size === b.length)
      rt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const M = b.map((F) => F[de]);
      rt({
        type: "include",
        ids: new Set(M)
      });
    }
  }, [ge, $.records, de]), Ba = T((b) => b[de], [de]), Cn = T((b) => {
    const E = b.currentTarget?.dataset?.contentType || b.target?.dataset?.contentType, M = (b.currentTarget?.dataset?.isPivotExport || b.target?.dataset?.isPivotExport) === "true";
    if (D) {
      if (E === "text/csv") {
        xe.current?.exportDataAsCsv?.();
        return;
      }
      if (E === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        xe.current?.exportDataAsExcel?.();
        return;
      }
      return;
    }
    if ($?.recordCount > Cl) {
      ue.showMessage(f("Cannot export more than 60k records, please apply filters or reduce your results using filters", u));
      return;
    }
    const { orderedFields: F, columnVisibilityModel: V, lookup: G } = xe.current.state.columns, L = Object.keys(V).filter((J) => V[J] === !1), Q = new Set(ve.filter((J) => J.exportable === !1).map((J) => J.field)), ie = F.filter(
      (J) => !Q.has(J) && !L.includes(J) && J !== "__check__" && J !== "actions"
    );
    if (ie.length === 0) {
      ue.showMessage(f("You cannot export while all columns are hidden... please show at least 1 column before exporting", u));
      return;
    }
    const le = {}, ne = Object.fromEntries(ve.map((J) => [J.field, J]));
    ie.forEach((J) => {
      const Te = G[J], vt = ne[J];
      le[J] = {
        field: J,
        width: Te.width,
        headerName: vt?.headerName || Te.headerName || Te.field,
        type: Te.type,
        isParsable: Te.isParsable,
        lookup: Te.lookup,
        hyperlinkURL: Te.hyperlinkURL,
        hyperlinkIndex: Te.hyperlinkIndex,
        localize: Te.localize,
        exportIndex: Te.exportIndex
      };
    });
    const De = e?.formActions?.export || M ? e?.formActions?.export || "export" : void 0;
    Ge({
      action: De,
      isPivotExport: M,
      contentType: E,
      columns: le
    });
  }, [D, $?.recordCount, xe, ve, ue, e, Ge, f, u]);
  ce(() => {
    !Ae && !D || !on || Ge();
  }, [Ae, D, on, Ge]), ce(() => {
    if (!(q.isChildGrid || ze || !z))
      return Cr({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        Cr(null);
      };
  }, [Cr, e.pageTitle, e.title, q.isChildGrid, ze, z]);
  const ka = T((b) => {
    const { items: E } = b, M = E.map((F) => {
      const { field: V, operator: G, value: L } = F, ie = (ve.find((le) => le.field === V) || {}).type === Y.Number;
      return ia.includes(G) ? { ...F, value: null } : ie && L < 0 ? { ...F, value: null } : Jr.includes(G) || ie && !isNaN(L) || !ie ? (we && ve.filter((ne) => ne.field === V)[0]?.isKeywordField && (F.filterField = `${F.field}.keyword`), { ...F }) : { ...F, value: ie ? null : L };
    });
    he({ ...b, items: M });
  }, [ve, Y.Number, Jr, we, he]), Ra = T((b) => {
    const E = b.map((M) => {
      const F = ve.filter((L) => L.field === M.field)[0] || {}, V = we && F.isKeywordField, G = { ...M, filterField: V ? `${M.field}.keyword` : M.field };
      return F.dataIndex && (G.filterField = F.dataIndex), G;
    });
    gt(E);
  }, [ve, we, gt]), xn = h || e.gridTitle || e.title, Na = Rt ? [{ text: Qe.get(Rt) || xn }] : [{ text: xn }], La = T((b) => {
    wr(b.size > 0 ? [...b].pop() : null);
  }, []), $a = T((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      wr(null), Ge();
    },
    t: f,
    tOpts: u
  }) : null, [e.getDetailPanelContent, Ge, f, u]), Va = j(() => ({
    filterValueTrue: f("Yes", u),
    filterValueFalse: f("No", u),
    noRowsLabel: f("No data", u),
    footerTotalRows: `${f("Total rows", u)}:`,
    MuiTablePagination: {
      labelRowsPerPage: f("Rows per page", u),
      labelDisplayedRows: ({ from: b, to: E, count: M }) => `${b}–${E} ${f("of", u)} ${M}`
    },
    toolbarQuickFilterPlaceholder: f(e?.searchPlaceholder || "Search...", u),
    toolbarColumns: f("Columns", u),
    toolbarFilters: f("Filters", u),
    toolbarExport: f("Export", u),
    filterPanelAddFilter: f("Add filter", u),
    filterPanelRemoveAll: f("Remove all", u),
    filterPanelDeleteIconLabel: f("Delete", u),
    filterPanelColumns: f("Columns", u),
    filterPanelOperator: f("Operator", u),
    filterPanelValue: f("Value", u),
    filterPanelInputLabel: f("Value", u),
    filterPanelInputPlaceholder: f("Filter value", u),
    columnMenuLabel: f("Menu", u),
    columnMenuShowColumns: f("Show columns", u),
    columnMenuManageColumns: f("Manage columns", u),
    columnMenuFilter: f("Filter", u),
    columnMenuHideColumn: f("Hide column", u),
    columnMenuManagePivot: f("Manage pivot", u),
    toolbarColumnsLabel: f("Select columns", u),
    toolbarExportLabel: f("Export", u),
    pivotDragToColumns: f("Drag here to pivot by", u),
    pivotDragToRows: f("Drag here to group by", u),
    pivotDragToValues: f("Drag here to create values", u),
    pivotColumns: f("Pivot columns", u),
    pivotRows: f("Row groups", u),
    pivotValues: f("Values", u),
    pivotMenuRows: f("Rows", u),
    pivotMenuColumns: f("Columns", u),
    pivotMenuValues: f("Values", u),
    pivotToggleLabel: f("Pivot", u),
    pivotSearchControlPlaceholder: f("Search pivot columns", u),
    columnMenuUnsort: f("Unsort", u),
    columnMenuSortAsc: f("Sort by ascending", u),
    columnMenuSortDesc: f("Sort by descending", u),
    columnMenuUnpin: f("Unpin", u),
    columnsPanelTextFieldLabel: f("Find column", u),
    columnsPanelTextFieldPlaceholder: f("Column title", u),
    columnsPanelHideAllButton: f("Hide all", u),
    columnsPanelShowAllButton: f("Show all", u),
    pinToLeft: f("Pin to left", u),
    pinToRight: f("Pin to right", u),
    unpin: f("Unpin", u),
    filterValueAny: f("any", u),
    filterOperatorIs: f("is", u),
    filterOperatorNot: f("is not", u),
    filterOperatorIsAnyOf: f("is any of", u),
    filterOperatorContains: f("contains", u),
    filterOperatorDoesNotContain: f("does not contain", u),
    filterOperatorEquals: f("equals", u),
    filterOperatorDoesNotEqual: f("does not equal", u),
    filterOperatorStartsWith: f("starts with", u),
    filterOperatorEndsWith: f("ends with", u),
    filterOperatorIsEmpty: f("is empty", u),
    filterOperatorIsNotEmpty: f("is not empty", u),
    filterOperatorAfter: f("is after", u),
    filterOperatorOnOrAfter: f("is on or after", u),
    filterOperatorBefore: f("is before", u),
    filterOperatorOnOrBefore: f("is on or before", u),
    toolbarFiltersTooltipHide: f("Hide filters", u),
    toolbarFiltersTooltipShow: f("Show filters", u),
    //filter textfield labels
    headerFilterOperatorContains: f("contains", u),
    headerFilterOperatorEquals: f("equals", u),
    headerFilterOperatorStartsWith: f("starts with", u),
    headerFilterOperatorEndsWith: f("ends with", u),
    headerFilterOperatorIsEmpty: f("is empty", u),
    headerFilterOperatorIsNotEmpty: f("is not empty", u),
    headerFilterOperatorAfter: f("is after", u),
    headerFilterOperatorOnOrAfter: f("is on or after", u),
    headerFilterOperatorBefore: f("is before", u),
    headerFilterOperatorOnOrBefore: f("is on or before", u),
    headerFilterOperatorIs: f("is", u),
    "headerFilterOperator=": f("equals", u),
    "headerFilterOperator!=": f("does not equal", u),
    "headerFilterOperator>": f("greater than", u),
    "headerFilterOperator>=": f("greater than or equal to", u),
    "headerFilterOperator<": f("less than", u),
    "headerFilterOperator<=": f("less than or equal to", u),
    columnsManagementSearchTitle: f("Search", u),
    columnsManagementNoColumns: f("No columns", u),
    paginationRowsPerPage: f("Rows per page", u),
    paginationDisplayedRows: ({ from: b, to: E, count: M }) => `${b}–${E} ${f("of", u)} ${M}`,
    toolbarQuickFilterLabel: f("Search", u),
    toolbarFiltersTooltipActive: (b) => `${b} ${f(b === 1 ? "active filter" : "active filters", u)}`,
    columnHeaderSortIconLabel: f("Sort", u),
    filterPanelOperatorAnd: f("And", u),
    filterPanelOperatorOr: f("Or", u),
    noResultsOverlayLabel: f("No results found", u),
    columnHeaderFiltersTooltipActive: (b) => `${b} ${f(b === 1 ? "active filter" : "active filters", u)}`,
    detailPanelToggle: f("Detail panel toggle", u),
    checkboxSelectionHeaderName: f("Checkbox selection", u),
    columnsManagementShowHideAllText: f("Show/Hide all", u),
    noColumnsOverlayLabel: f("No columns", u),
    noColumnsOverlayManageColumns: f("Manage columns", u),
    columnsManagementReset: f("Reset", u),
    groupColumn: (b) => `${f("Group by", u)} ${b}`,
    unGroupColumn: (b) => `${f("Ungroup", u)} ${b}`,
    footerRowSelected: (b) => {
      const E = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${f(E, u)}`;
    }
  }), [f, u, e?.searchPlaceholder]), za = j(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: $,
      currentPreference: an,
      isReadOnly: ke,
      canAdd: Zr,
      forAssignment: ze,
      showAddIcon: Yr,
      onAdd: hn,
      selectionApi: Ee,
      rowSelectionModel: ge,
      selectAll: yn,
      available: g,
      onAssign: gn,
      assigned: c,
      onUnassign: bn,
      effectivePermissions: lt,
      clearFilters: mn,
      handleExport: Cn,
      preferenceKey: Nt,
      apiRef: xe,
      gridColumns: ve,
      tTranslate: f,
      tOpts: u,
      idProperty: de,
      filterModel: Oe,
      setFilterModel: he,
      onPreferenceChange: ln,
      toolbarItems: R,
      headerActions: q.headerActions,
      customExportOptions: X,
      isStaticDataMode: D
    },
    footer: {
      pagination: rn !== !0,
      apiRef: xe,
      tTranslate: f,
      tOpts: u
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: f("Go to previous page", u),
        "aria-label": f("Go to previous page", u)
      },
      nextIconButtonProps: {
        title: f("Go to next page", u),
        "aria-label": f("Go to next page", u)
      }
    }
  }), [e, $, an, ke, Zr, ze, Yr, hn, Ee, ge, yn, g, gn, c, bn, lt, mn, Cn, Nt, xe, ve, f, u, de, Oe, he, ln, R, q.headerActions, X, D]), Ga = j(() => ({
    columns: {
      columnVisibilityModel: Wt
    },
    pinnedColumns: dn
  }), [Wt, dn]), ja = j(() => ({
    headerFilterMenu: !1,
    toolbar: gl,
    footer: Mi
  }), []);
  return /* @__PURE__ */ P(ye, { children: [
    C !== !1 && /* @__PURE__ */ a(
      na,
      {
        navigate: Be,
        showBreadcrumbs: !ha && !ma,
        breadcrumbs: Na,
        enableBackButton: pe,
        breadcrumbColor: ga,
        model: e
      }
    ),
    /* @__PURE__ */ P(Ie, { style: k || d, children: [
      /* @__PURE__ */ a(Ie, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        Ln,
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
            ...Array.isArray(fe) ? fe : fe ? [fe] : []
          ],
          headerFilters: Ht,
          unstable_headerFilters: Ht,
          checkboxSelection: ze,
          loading: !$.records || da,
          className: "pagination-fix",
          onCellClick: Ea,
          onCellDoubleClick: Ma,
          columns: ve,
          paginationModel: ee,
          pageSizeOptions: Y.pageSizeOptions,
          onPaginationModelChange: H,
          pagination: !rn,
          rowCount: $.recordCount,
          rows: $.records || [],
          sortModel: Ot,
          paginationMode: Mt,
          sortingMode: Mt,
          filterMode: Mt,
          processRowUpdate: Ia,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Ra,
          onFilterModelChange: ka,
          rowSelectionModel: ge,
          onRowSelectionModelChange: rt,
          filterModel: Oe,
          getRowId: Ba,
          onRowClick: A,
          slots: ja,
          slotProps: za,
          hideFooterSelectedRowCount: Tt,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: xe,
          disableAggregation: !0,
          disableRowGrouping: Kt,
          disableRowSelectionOnClick: br,
          disablePivoting: ba,
          filterDebounceMs: Ze,
          initialState: Ga,
          ...va && {
            getDetailPanelContent: $a,
            detailPanelExpandedRowIds: wa,
            onDetailPanelExpandedRowIdsChange: La
          },
          localeText: Va,
          showToolbar: !0,
          columnHeaderHeight: ya,
          hideFooter: !yt,
          rowGroupingModel: Da,
          onRowGroupingModelChange: (b) => vr(b),
          getRowClassName: q.getRowClassName,
          columnGroupingModel: Sa
        }
      ) }),
      Fe && /* @__PURE__ */ P(_e, { open: !!Fe, onConfirm: fn, onCancel: fn, title: "Info", hideCancelButton: !0, children: [
        " ",
        Fe
      ] }),
      mt && !Fe && /* @__PURE__ */ a(_e, { open: mt, onConfirm: Ta, onCancel: () => nt(!1), title: f("Confirm Delete", u), okText: f("Ok", u), cancelText: f("Cancel", u), children: /* @__PURE__ */ P(An, { children: [
        f("Are you sure you want to delete", u),
        " ",
        Ue.name && /* @__PURE__ */ a(Pt, { style: { display: "inline" }, title: Ue.name, arrow: !0, children: Ue.name.length > 30 ? `${Ue.name.slice(0, 30)}...` : Ue.name }),
        " ?"
      ] }) }),
      Ut && /* @__PURE__ */ a(
        _e,
        {
          open: Ut,
          onConfirm: Oa,
          onCancel: () => It(!1),
          title: f("Confirm Add", u),
          okText: f("Ok", u),
          cancelText: f("Cancel", u),
          children: /* @__PURE__ */ P(An, { children: [
            f("Are you sure you want to add", u),
            " ",
            ge.ids.size,
            " ",
            f("records", { count: ge.ids.size, ...u }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, fl), Tl = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = (p) => {
    r.setFieldValue(t, p.target.checked);
  }, l = j(() => r.values[t] ?? !!e.defaultValue, [r, e]), s = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ P("div", { children: [
    /* @__PURE__ */ a(
      ri,
      {
        control: /* @__PURE__ */ a(
          Kn,
          {
            ...n,
            name: t,
            disabled: s || e.disabled === !0,
            checked: l,
            onChange: o,
            onBlur: r.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ a(ht, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, Lr = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = At(), l = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ a(
    cr,
    {
      type: "text",
      variant: e.variant || "standard",
      InputProps: {
        readOnly: e.readOnly === !0,
        sx: e.readOnly ? { backgroundColor: o.palette?.action?.disabled } : void 0
      },
      required: e.required,
      multiline: e.multiline,
      rows: l,
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
function la(e, t) {
  const [r, n] = O(e);
  return ce(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}
const Tn = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, Il = {
  outlined: To,
  filled: Eo,
  standard: Ao
}, Ml = () => /* @__PURE__ */ P(
  zn,
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
        or.Increment,
        {
          render: /* @__PURE__ */ a(Vt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ a(
            ni,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        or.Decrement,
        {
          render: /* @__PURE__ */ a(Vt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ a(
            _n,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), Ol = ({ column: e, otherProps: t, formik: r, field: n, ...o }) => {
  const { min: l, max: s, readOnly: p, precision: h } = e, C = At(), y = j(
    () => Tn({ value: l, state: r.values }),
    [l, r.values]
  ), m = j(
    () => Tn({ value: s, state: r.values }),
    [s, r.values]
  ), c = j(() => r.values[n] ?? null, [r.values[n]]), [g, w] = O(c), x = la(g, 400);
  ce(() => {
    x !== c && r.setFieldValue(n, x);
  }, [x]), ce(() => {
    c !== g && w(c);
  }, [c]);
  const d = (k) => {
    w(k);
  }, i = (k) => {
    r.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(k);
  }, S = Ua(), v = `number-field-${n}-${S}`, B = e.variant || "standard", I = Il[B], A = j(() => {
    if (h !== void 0)
      return {
        maximumFractionDigits: h
      };
  }, [h]);
  return /* @__PURE__ */ P(
    or.Root,
    {
      value: g,
      onValueChange: d,
      min: y,
      max: m,
      disabled: p,
      format: A,
      render: (k, te) => /* @__PURE__ */ a(
        St,
        {
          fullWidth: !0,
          ref: k.ref,
          error: r.touched[n] && !!r.errors[n],
          sx: p ? {
            backgroundColor: C.palette?.action?.disabled
          } : void 0,
          children: k.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          or.Input,
          {
            render: (k, te) => /* @__PURE__ */ a(
              I,
              {
                id: v,
                inputRef: k.ref,
                value: te.inputValue,
                onChange: k.onChange,
                onBlur: (K) => {
                  k.onBlur(K), i(K);
                },
                inputProps: {
                  ...k,
                  "aria-describedby": r.touched[n] && r.errors[n] ? `${v}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(Ml, {}),
                sx: { pr: 0 },
                ...t
              }
            )
          }
        ),
        r.touched[n] && r.errors[n] && /* @__PURE__ */ P(ht, { id: `${v}-error`, error: !0, children: [
          " ",
          r.errors[n],
          " "
        ] })
      ]
    }
  );
}, Bl = ({ otherProps: e, ...t }) => {
  const [r, n] = ft.useState(!1), o = () => n((h) => !h), l = (h) => {
    h.preventDefault();
  }, { readOnly: s = !1, disabled: p = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: s,
      disabled: p,
      endAdornment: /* @__PURE__ */ a(zn, { position: "end", children: /* @__PURE__ */ a(
        Vt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: l,
          edge: "end",
          disabled: p,
          readOnly: s,
          size: "large",
          children: r ? /* @__PURE__ */ a(ai, {}) : /* @__PURE__ */ a(oi, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(Lr, { otherProps: e, ...t });
}, kl = ({ column: e, field: t, formik: r, otherProps: n, fieldConfigs: o = {}, mode: l }) => {
  const s = l !== "copy" && o.disabled, { systemDateTimeFormat: p, stateData: h } = We(), C = j(() => r.values[t] ? ae(r.values[t]) : null, [r.values[t]]), y = e.minField ? r.values[e.minField] : void 0, m = e.maxField ? r.values[e.maxField] : void 0, c = j(() => e.min ? ae(e.min) : e.minField && y ? ae(y) : null, [e.min, e.minField, y]), g = j(() => e.max ? ae(e.max) : e.maxField && m ? ae(m) : null, [e.max, e.maxField, m]), w = T((x) => {
    if (x === null) {
      r.setFieldValue(t, null);
      return;
    }
    const i = ae(x).hour(12).toISOString();
    r.setFieldValue(t, i);
  }, [t, r]);
  return /* @__PURE__ */ Vr(
    jn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: p(!0, !1, h.dateTime),
      name: t,
      value: C,
      onChange: w,
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: c,
      maxDate: g,
      disabled: s,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
};
ae.extend(Gn);
const Rl = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: l } = We(), s = j(() => {
    const p = r.values[t];
    return p ? ae(p) : null;
  }, [r.values[t], e]);
  return /* @__PURE__ */ Vr(
    Wn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: o(!1, !1, l.dateTime),
      name: t,
      value: s,
      onChange: (p) => {
        p ? e.localize ? r.setFieldValue(t, p.toISOString()) : r.setFieldValue(t, p.utcOffset(0, !0).toISOString()) : r.setFieldValue(t, null);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDateTime: e.min ? ae(e.min) : null,
      maxDateTime: e.max ? ae(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
};
ae.extend(Gr);
const Nl = ({ column: e, field: t, formik: r, otherProps: n }) => {
  let o = r.values[t];
  return !e.localize && o && (o = ae.utc(o).utcOffset(ae().utcOffset(), !0).format()), /* @__PURE__ */ Vr(
    ii,
    {
      ...n,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: o ? ae(o) : null,
      onChange: (l) => (e.localize || (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, l)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, Ll = [null, void 0, ""];
function sa({ column: e, formik: t, lookups: r, dependsOn: n = [], isAutoComplete: o = !1, userSelected: l, model: s }) {
  const [p, h] = O([]), { buildUrl: C } = We(), y = Et(), m = C(s.api), c = j(() => {
    const x = {};
    if (!n.length) return x;
    for (const d of n)
      x[d] = t.values[d];
    return x;
  }, n.map((x) => t.values[x])), g = j(() => n.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, n]), w = T(async () => {
    if (!e.lookup) return;
    if (!Object.values(c).every(
      (d) => !Ll.includes(d)
    )) {
      h([]);
      return;
    }
    try {
      const d = await ea({
        api: m,
        model: s,
        lookups: r,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: c }] }
        }
      });
      h(d);
    } catch (d) {
      y.showError("Could not load lookups", d.message);
    }
  }, [e.lookup, c, m, s, r, y]);
  return ce(() => {
    n.length ? w() : (o || !l.current) && h(g || []);
  }, [n.length, w, o, g]), p;
}
const $l = ft.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], model: l, tTranslate: s, tOpts: p, ...h }) => {
  const C = ft.useRef(!1), { placeHolder: y } = e, m = sa({ column: e, formik: r, lookups: n, dependsOn: o, userSelected: C, model: l }), c = At(), g = j(() => {
    let i = r.values[t];
    if (!i && !C.current && e.defaultValue !== void 0) {
      const S = e.defaultValue;
      if (S != null && S !== "" && m && m.length) {
        const v = m.find((B) => String(B.value) === String(S));
        v && (i = v.value, r.setFieldValue(t, v.value));
      }
    }
    if (m?.length && !i && !e.multiSelect && "IsDefault" in m[0]) {
      const S = m.find((v) => v.IsDefault);
      S && (i = S.value, r.setFieldValue(t, S.value));
    }
    return e.multiSelect && (!i || i.length === 0 ? i = [] : Array.isArray(i) || (i = i.split(",").map((S) => parseInt(S)))), i;
  }, [r.values[t], m, e.multiSelect, t]), w = T((i) => {
    typeof e.onChange == "function" && e.onChange({ formik: r, value: i.target.value, options: m, event: i, t: s, tOpts: p }), r.handleChange(i), C.current = !0;
  }, [r.values[t], e.onChange, m]), x = j(() => e.multiSelect ? Array.isArray(g) && g.length > 0 : g !== "" && g !== null && g !== void 0 && Array.isArray(m) && m.some((i) => String(i.value) === String(g)), [g, e.multiSelect, m]), d = T((i) => {
    i.stopPropagation();
    const S = e.multiSelect ? [] : "";
    r.setFieldValue(t, S), typeof e.onChange == "function" && e.onChange({ formik: r, value: S, options: m, event: i, t: s, tOpts: p }), C.current = !0;
  }, [e.multiSelect, t, r, e.onChange, m, s, p]);
  return /* @__PURE__ */ P(
    pr,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(si, { children: y || "" }),
        /* @__PURE__ */ P(Ie, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ a(
            ci,
            {
              IconComponent: _n,
              ...h,
              name: t,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(g) ? g : [] : `${g ?? ""}`,
              onChange: w,
              onBlur: r.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? c.palette?.action?.disabled : ""
              },
              children: Array.isArray(m) && m.map((i) => /* @__PURE__ */ a(Yn, { value: i.value, disabled: i.isDisabled, children: i.label }, i.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ a(
            Vt,
            {
              size: "small",
              onClick: d,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": s("Clear selection", p),
              children: /* @__PURE__ */ a(li, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ a(ht, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), In = dr("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Vl = ({ component: e, name: t, formik: r, field: n, column: o }) => {
  const { value: l } = r.getFieldProps(t || n), { setFieldValue: s } = r, p = e || o.relation, h = T((C) => {
    s(t || n, C);
  }, [s, t, n]);
  return /* @__PURE__ */ P("div", { children: [
    /* @__PURE__ */ a(In, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: l, available: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(In, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: l, assigned: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, zl = ({ field: e, formik: t, orientation: r = "row", label: n, lookups: o, fieldConfigs: l = {}, mode: s, tTranslate: p, tOpts: h, ...C }) => {
  const y = (x) => {
    t.setFieldValue(e, x.target.value);
  }, m = o ? o[C.column.lookup] : [], c = At(), g = t.touched[e] && !!t.errors[e], w = s !== "copy" && l.disabled;
  return /* @__PURE__ */ P(ye, { children: [
    /* @__PURE__ */ a(St, { component: "fieldset", error: g, children: /* @__PURE__ */ a(
      zr,
      {
        row: r === "row",
        "aria-label": n,
        name: e,
        value: t.values[e] ?? "",
        onChange: y,
        children: m?.map((x, d) => /* @__PURE__ */ a(
          pt,
          {
            value: x.value,
            control: /* @__PURE__ */ a(Dt, {}),
            label: p(x.label, h),
            disabled: w || (C?.column?.disableForValues || [])?.includes?.(t.values[e])
          },
          d
        ))
      }
    ) }),
    g && /* @__PURE__ */ a(ht, { style: { color: c.palette.error.main }, children: t.errors[e] })
  ] });
}, Gl = {
  limitTags: 5
}, jl = Ke.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], fieldConfigs: l = {}, mode: s, model: p, ...h }) => {
  const C = sa({ column: e, formik: r, lookups: n, dependsOn: o, model: p, isAutoComplete: !0 });
  let y = r.values[t] || [];
  Array.isArray(y) || (y = y.split(", ").map(Number));
  const m = C.filter((w) => y.includes(w.value)) || [], c = s !== "copy" && l.disabled, g = (w, x) => {
    let d = x?.map((i) => i.value) || [];
    e.dataFormat !== "array" && (d = d.length ? d.join(", ") : ""), r.setFieldValue(t, d);
  };
  return /* @__PURE__ */ P(
    pr,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ a(
          Jn,
          {
            ...h,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || Gl.limitTags,
            options: C || [],
            getOptionLabel: (w) => w.label || "",
            defaultValue: m,
            renderInput: (w) => /* @__PURE__ */ a(cr, { ...w, variant: "standard" }),
            onChange: g,
            value: m,
            size: "small",
            disabled: c
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ a(ht, { children: r.errors[t] })
      ]
    },
    t
  );
}), Wl = "#182eb5", Ul = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], ql = Io(Mo)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Wl : "#ffffff",
  border: `1px solid ${fi[500]}`,
  color: t ? "white" : "black"
})), Hl = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ a(
  ql,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Yl = ({ name: e, field: t, formik: r, expired: n }) => {
  const { setFieldValue: o } = r, { value: l } = r.getFieldProps(e || t), s = "1000001", p = "0111110", h = "0".repeat(7), [C, y] = O(l || h), [m, c] = O(() => l ? l === s ? s : l === p ? p : "Custom" : ""), [g, w] = O(!1), x = T((S) => {
    if (Array.isArray(S)) {
      let v = h;
      for (const B of S)
        v = v.substring(0, B) + "1" + v.substring(B + 1);
      y(v), o(e || t, v), w(!0);
    } else {
      let v = g ? h : C;
      const B = v.slice(0, S) + (v[S] === "1" ? "0" : "1") + v.slice(S + 1);
      y(B), o(e || t, B), c("Custom"), w(!1);
    }
  }, [g, h, C, e, t, o]), d = At(), i = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ P(ye, { children: [
    /* @__PURE__ */ a(St, { component: "fieldset", error: i, children: /* @__PURE__ */ P(
      zr,
      {
        row: !0,
        name: e || t,
        value: m,
        onChange: (S) => {
          const v = S.target.value;
          c(v), v !== "Custom" ? (y(v), o(e || t, v), w(!0)) : (y(h), o(e || t, h), w(!1));
        },
        children: [
          /* @__PURE__ */ a(pt, { value: s, control: /* @__PURE__ */ a(Dt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ a(pt, { value: p, control: /* @__PURE__ */ a(Dt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(pt, { value: "Custom", control: /* @__PURE__ */ a(Dt, {}), label: "Specific days" }),
          Ul.map((S, v) => /* @__PURE__ */ a(
            Hl,
            {
              day: S,
              onClick: () => x(v),
              isSelected: m === "Custom" && C[v] === "1",
              disabled: n
            },
            S.value
          ))
        ]
      }
    ) }),
    i && /* @__PURE__ */ a(ht, { style: { color: d.palette.error.main }, children: r.errors[t] })
  ] });
}, Kl = ({ isAdd: e, column: t, field: r, formik: n, otherProps: o, fieldConfigs: l = {}, mode: s }) => {
  const p = At();
  let h = n.values[r] || [];
  Array.isArray(h) || (h = h.split(",").map((c) => c.trim()));
  const C = Ke.useMemo(() => s === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: n }) : !!t.disabled, [s, l.disabled, t.disabled]), y = t.hasDefault && !e ? [h[0]] : [], m = T((c, g, w, x = {}) => {
    const d = g.pop()?.trim();
    g.includes(d) || g.push(d), y && y.includes(x.option) && w === "removeOption" && (g = [x.option]), t.dataFormat !== "array" && (g = g.length ? g.join(",") : ""), n.setFieldValue(r, g);
  }, [n, r]);
  return /* @__PURE__ */ P(
    pr,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[r] && !!n.errors[r],
      children: [
        /* @__PURE__ */ a(
          Jn,
          {
            ...o,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: h,
            options: [],
            renderInput: (c) => /* @__PURE__ */ a(
              cr,
              {
                ...c,
                variant: "standard",
                InputProps: {
                  ...c.InputProps,
                  sx: {
                    ...c.InputProps?.sx,
                    ...C && { backgroundColor: p.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: m,
            size: "small",
            renderTags: (c, g) => c.map((w, x) => {
              const { key: d, ...i } = g({ index: x });
              return /* @__PURE__ */ a(
                mi,
                {
                  label: w,
                  ...i,
                  disabled: y.includes(w)
                },
                d
              );
            }),
            disabled: C
          }
        ),
        n.touched[r] && n.errors[r] && /* @__PURE__ */ a(ht, { children: n.errors[r] })
      ]
    },
    r
  );
}, _l = (e = []) => {
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
function Jl({ column: e, field: t, formik: r, lookups: n, fieldConfigs: o, mode: l }) {
  const s = n ? n[e.lookup] : [], p = _l(s), h = r.values[t]?.length ? r.values[t].split(", ") : [];
  let C;
  return l !== "copy" && (C = o?.disabled), /* @__PURE__ */ a(Je, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    gi,
    {
      selectedItems: h,
      onSelectedItemsChange: (m, c) => {
        r.setFieldValue(t, c?.join(", ") || "");
      },
      disabled: C,
      multiSelect: !0,
      checkboxSelection: !0,
      children: p.map((m) => /* @__PURE__ */ a(Sn, { itemId: m.value, label: m.label, children: m.children.map((c) => /* @__PURE__ */ a(Sn, { itemId: c.value, label: c.label }, c.value)) }, m.value))
    }
  ) });
}
const Zl = { maxLength: 500 }, { errorMapping: Ql } = je, Xl = 1024 * 1024;
function es({ column: e, field: t, formik: r }) {
  const n = r.values[t] || "", { getApiEndpoint: o } = We(), { maxSize: l, formats: s } = e, p = o("upload"), h = o("media"), C = o(), [y, m] = O({
    isExternal: "no",
    selectedFile: null
  }), [c, g] = O(!1), w = Et(), { getParams: x, useParams: d } = qr(), { associationId: i } = d() || x, S = i?.split("-")[0] || 1, v = (W) => {
    const _ = W.target.value;
    m({
      ...y,
      isExternal: _,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, B = (W) => {
    r.setFieldValue(t, W.target.value);
  }, I = (W) => {
    const _ = W.target.files[0];
    if (_) {
      if (l && _.size > l * Xl) {
        w.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(s) && !s.includes(_.type)) {
        w.showError(`Invalid file format. Allowed formats: ${s.join(", ")}.`);
        return;
      }
      m((U) => ({ ...U, selectedFile: _ }));
    }
  }, A = async () => {
    if (y.selectedFile) {
      g(!0);
      try {
        const W = new FormData();
        W.append("file", y.selectedFile), W.append("DocumentGroupId", r.values.DocumentGroupId), W.append("AssociationId", S);
        const U = (await Xn({
          method: "POST",
          url: p,
          data: W,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!U.success) {
          w.showError(U.message || "Upload failed");
          return;
        }
        const R = h + "/" + U.filePath;
        r.setFieldValue(t, R);
      } catch (W) {
        const _ = (W.message.match(/status code (\d{3})/) || [])[1];
        w.showError(Ql[_]);
      } finally {
        g(!1);
      }
    }
  }, k = new URL(C, window.location.origin).hostname.toLowerCase();
  ft.useEffect(() => {
    m({
      ...y,
      isExternal: n.toLowerCase().includes(k) ? "no" : "yes"
    });
  }, [n, m]);
  const te = r.values[t]?.length > (e.max || Zl.maxLength), K = te ? "red" : "";
  return /* @__PURE__ */ P(Ie, { children: [
    /* @__PURE__ */ P(Ie, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Re, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ P(
        zr,
        {
          row: !0,
          value: y.isExternal,
          onChange: v,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ a(pt, { value: "yes", control: /* @__PURE__ */ a(Dt, {}), label: "Yes" }),
            /* @__PURE__ */ a(pt, { value: "no", control: /* @__PURE__ */ a(Dt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ P(Ie, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Re, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ P(Ie, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        y.isExternal === "yes" ? /* @__PURE__ */ a(
          dt,
          {
            fullWidth: !0,
            value: n,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: K },
                "&.Mui-focused fieldset": { borderColor: K },
                "&:hover fieldset": { borderColor: K }
              }
            },
            onChange: B,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ a(
          dt,
          {
            fullWidth: !0,
            value: n,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        te && /* @__PURE__ */ P(Re, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    y.isExternal === "no" && /* @__PURE__ */ P(Ie, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ P(
        ut,
        {
          variant: "outlined",
          component: "label",
          disabled: c,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: I })
          ]
        }
      ),
      y.selectedFile && /* @__PURE__ */ a(Pt, { title: y.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Re, { variant: "body2", children: y.selectedFile.name.length > 20 ? `${y.selectedFile.name.substring(0, 20)}...` : y.selectedFile.name }) }),
      /* @__PURE__ */ a(
        ut,
        {
          variant: "contained",
          color: "primary",
          onClick: A,
          disabled: !y.selectedFile || c,
          children: c ? /* @__PURE__ */ a(Oo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const ts = ({ field: e, formik: t }) => {
  const [r, n] = Ke.useState({}), o = la(r, 300);
  Ke.useEffect(() => {
    if (t.values[e])
      try {
        const s = JSON.parse(t.values[e]);
        n(s);
      } catch {
        n({});
      }
  }, [t.values[e]]), Ke.useEffect(() => {
    const s = JSON.stringify(o);
    t.values[e] !== s && t.setFieldValue(e, s);
  }, [o, e, t, t.values[e]]);
  const l = (s, p) => {
    const h = { ...r, [s]: p };
    n(h);
  };
  return /* @__PURE__ */ a(
    pr,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[e] && !!t.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(r).map((s) => /* @__PURE__ */ P(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ P($t, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              s,
              ":"
            ] }),
            /* @__PURE__ */ a(
              bi,
              {
                id: s,
                name: s,
                value: r[s],
                onChange: (p) => l(s, p.target.value),
                fullWidth: !0,
                style: { flex: 2 }
              }
            )
          ]
        },
        s
      ))
    },
    e
  );
}, rs = {
  boolean: Tl,
  select: $l,
  string: Lr,
  number: Ol,
  password: Bl,
  date: kl,
  dateTime: Rl,
  time: Nl,
  oneToMany: Vl,
  radio: zl,
  autocomplete: jl,
  dayRadio: Yl,
  email: Lr,
  chipInput: Kl,
  treeCheckbox: Jl,
  fileUpload: es,
  json: ts
}, Mn = { paddingTop: "2.5px", paddingBottom: "2.5px" }, ca = "20px", ns = hi("span")({
  color: "red !important"
}), as = ({ tabColumns: e, model: t, formik: r, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: h, handleSubmit: C }) => {
  const [y, m] = Ke.useState(/* @__PURE__ */ new Set()), { tOpts: c, tTranslate: g } = Gt(t), { activeStep: w, setActiveStep: x } = Ke.useContext(ua), d = {};
  for (let A = 0, k = t.columns.length; A < k; A++) {
    const { field: te, skip: K } = t.columns[A];
    K && (d[K.step] = r.values[te]);
  }
  const i = (A) => y.has(A) || d[A], S = () => {
    for (let A = w + 1; A < e.length; A++)
      if (!i(A))
        return !1;
    return !0;
  }, v = () => {
    let A = w + 1;
    for (; d[A]; )
      A++;
    m((k) => new Set(k).add(w)), A >= e.length || S() ? C() : x(A);
  }, B = () => {
    let A = w - 1;
    for (; d[A] && A > 0; )
      A--;
    x(A);
  };
  if (!e?.length)
    return null;
  const I = e[w];
  return /* @__PURE__ */ P(ye, { children: [
    /* @__PURE__ */ a(ui, { activeStep: w, sx: { marginBottom: "20px" }, children: e.map(({ title: A, key: k }, te) => /* @__PURE__ */ a(di, { completed: i(te), children: /* @__PURE__ */ a(pi, { children: /* @__PURE__ */ a(Re, { sx: { fontSize: "20px" }, children: g(A, c) }) }) }, k)) }),
    /* @__PURE__ */ P(Ke.Fragment, { children: [
      /* @__PURE__ */ a(Hr, { formElements: I.items, model: t, formik: r, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: h }),
      /* @__PURE__ */ P(Je, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        w !== 0 ? /* @__PURE__ */ a(Ne, { color: "inherit", disabled: w === 0, onClick: B, variant: "contained", sx: { mr: 2 }, children: g("Back", c) }) : null,
        /* @__PURE__ */ a(Ne, { onClick: v, variant: "contained", children: S() ? g("Finish", c) : g("Next", c) })
      ] })
    ] })
  ] });
}, os = ({ tabColumns: e, model: t, formik: r, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: h, isAdd: C }) => {
  const { tOpts: y, tTranslate: m } = Gt(t);
  return e?.length ? /* @__PURE__ */ a(ye, { children: e.map(({ key: c, title: g, items: w }, x) => /* @__PURE__ */ P(
    Je,
    {
      sx: {
        position: "relative",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        px: 3,
        pt: 3,
        pb: 2,
        mt: x === 0 ? 0 : ca
      },
      children: [
        /* @__PURE__ */ a(
          Re,
          {
            component: "h3",
            variant: "h6",
            sx: {
              position: "absolute",
              top: "-0.75em",
              left: 16,
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: 1.5,
              bgcolor: "background.paper",
              px: "6px"
            },
            children: m(g, y)
          }
        ),
        /* @__PURE__ */ a(Hr, { isAdd: C, formElements: w, model: t, formik: r, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: h })
      ]
    },
    c
  )) }) : null;
}, Hr = ({ formElements: e, model: t, formik: r, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: h, isAdd: C }) => {
  const { tOpts: y, tTranslate: m } = Gt(t);
  return e?.length ? /* @__PURE__ */ a(ye, { children: e.map(({ Component: c, column: g, field: w, label: x, otherProps: d }, i) => {
    const S = typeof g.relation == "function";
    return /* @__PURE__ */ P(Tr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: S ? "flex-start" : "center", children: [
      g?.showLabel !== !1 ? /* @__PURE__ */ a(Tr, { size: { xs: 3 }, sx: Mn, children: /* @__PURE__ */ P(Re, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        m(g.label || w, y),
        ": ",
        g.required && /* @__PURE__ */ a(ns, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ a(Tr, { size: { xs: S ? 12 : 9 }, sx: Mn, children: /* @__PURE__ */ a(c, { isAdd: C, model: t, fieldConfigs: p[w], mode: h, column: g, field: w, label: x, formik: r, data: n, onChange: o, combos: l, lookups: s, tTranslate: m, tOpts: y, ...d }) })
    ] }, i);
  }) }) : null;
}, is = function({ columns: e, tabs: t = {}, id: r, searchParams: n }) {
  const o = [], l = {};
  for (const p in t)
    l[p] = [];
  for (const p of e) {
    const h = p.type;
    if (p.label === null)
      continue;
    const { field: C, label: y, tab: m } = p, c = {};
    p.options && (c.options = p.options), p.dependsOn && (c.dependsOn = p.dependsOn);
    const g = rs[h];
    if (!g || p.hideInAddGrid && r === "0")
      continue;
    (m && t[m] ? l[m] : o).push({ Component: g, field: C, label: y, column: { ...p, readOnly: n.has("showRelation") || p.readOnly }, otherProps: c });
  }
  const s = [];
  for (const p in l)
    s.push({ key: p, title: t[p], items: l[p] });
  return { formElements: o, tabColumns: s };
}, ls = ({ model: e, formik: t, data: r, combos: n, onChange: o, lookups: l, id: s, fieldConfigs: p, mode: h, handleSubmit: C }) => {
  const y = je.emptyIdValues.includes(s), { formElements: m, tabColumns: c, showTabs: g, showGrouped: w } = Ke.useMemo(() => {
    const x = e.formConfig?.showTabbed, d = x === !0, i = x === "group" || x !== !0 && x !== "group" && e.formConfig?.showGrouped === !0, S = new URLSearchParams(window.location.search), v = d || i ? e.tabs : {}, { formElements: B, tabColumns: I } = is({ columns: e.columns, tabs: v, id: s, searchParams: S }), A = I.length > 0, k = d && A;
    return { formElements: B, tabColumns: I, showTabs: k, showGrouped: !k && i && A };
  }, [e]);
  return /* @__PURE__ */ P("div", { children: [
    /* @__PURE__ */ a(Hr, { isAdd: y, formElements: m, model: e, formik: t, data: r, onChange: o, combos: n, lookups: l, fieldConfigs: p, mode: h }),
    /* @__PURE__ */ P("div", { style: { marginTop: g ? ca : 0 }, children: [
      g && /* @__PURE__ */ a(as, { tabColumns: c, model: e, formik: t, data: r, onChange: o, combos: n, lookups: l, fieldConfigs: p, mode: h, handleSubmit: C }),
      w && /* @__PURE__ */ a(os, { isAdd: y, tabColumns: c, model: e, formik: t, data: r, onChange: o, combos: n, lookups: l, fieldConfigs: p, mode: h })
    ] })
  ] });
};
function ss(e) {
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
function cs(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const us = Bn(({ relation: e, parentFilters: t, parent: r, where: n, models: o, readOnly: l }) => {
  const s = o.find(({ name: C }) => C === e);
  if (!s) return null;
  const p = { ...s, hideBreadcrumb: !0 }, h = p instanceof lr ? p : new lr(p);
  return h ? /* @__PURE__ */ a(
    h.ChildGrid,
    {
      readOnly: l,
      parentFilters: t,
      parent: r,
      model: p,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), ds = ft.memo(({ relations: e, parent: t, where: r = [], models: n, relationFilters: o, readOnly: l }) => {
  const [s, p] = O(0);
  return /* @__PURE__ */ P(Je, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(Je, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(Ci, { value: s, onChange: (C, y) => {
      p(y);
    }, "aria-label": "relations tabs", children: e.map((C, y) => {
      const m = n.find(({ name: g }) => g === C) || {}, c = m.listTitle || m.title || C;
      return /* @__PURE__ */ a(
        yi,
        {
          label: c,
          ...cs(y)
        },
        C
      );
    }) }) }),
    e.map((C, y) => /* @__PURE__ */ a(ss, { value: s, index: y, children: /* @__PURE__ */ a(
      us,
      {
        readOnly: l,
        relation: C,
        models: n,
        parentFilters: o[C] || [],
        parent: t,
        where: r
      },
      C
    ) }, C))
  ] });
}), ua = sr(1), ps = {}, be = {
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
}, fs = ({
  model: e,
  api: t,
  models: r,
  relationFilters: n = {},
  permissions: o = {},
  Layout: l = ls,
  baseSaveData: s = {},
  sx: p,
  readOnly: h,
  beforeSubmit: C,
  deletePromptText: y,
  detailPanelId: m = null,
  // Grid Row Detail Panel Id
  onCancel: c,
  onSaveSuccess: g
}) => {
  const w = e.formTitle || e.title, { translate: x, tOpts: d, tTranslate: i } = Gt(e), { navigate: S, getParams: v, useParams: B, pathname: I } = qr(), { relations: A = [] } = e, { stateData: k, buildUrl: te, setPageTitle: K } = We(), W = B() || v, { id: _ = "" } = W, U = m || _.split("-")[be.editIdIndex], R = new URLSearchParams(window.location.search), Pe = R.has(be.baseData) && R.get(be.baseData);
  if (Pe) {
    const z = JSON.parse(Pe);
    typeof z === be.object && z !== null && (s = { ...s, ...z });
  }
  const [oe, se] = O(!0), [re, X] = O({}), [fe, q] = O({}), [Z, D] = O(!1), N = Et(), [ee, H] = O(null), [$, Me] = O(0), [ze, Tt] = O(!1), [ge, rt] = O(null), [mt, nt] = O(""), Ue = typeof e.applyFieldConfig === be.function ? e.applyFieldConfig({ data: re, lookups: fe }) : ps, jt = te(e.api), Wt = _.includes("-") && _.split("-")[0] === "0" ? "copy" : "", Ut = k.userData || {}, It = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: ue } = aa({
    userData: Ut,
    model: e,
    userDefinedPermissions: It
  }), { hideBreadcrumb: Mt = !1, navigateBack: Ce } = e, u = !("canEdit" in re) || re.canEdit, Fe = T(() => {
    let z;
    switch (typeof Ce) {
      case be.function:
        z = Ce({ params: W, searchParams: R, data: re });
        break;
      case be.number:
      case be.string:
        z = Ce;
        break;
      default:
        z = I.substring(0, I.lastIndexOf("/"));
        break;
    }
    S(z);
  }, [Ce, S, W, R, re, I]), fr = j(() => je.emptyIdValues.includes(U), [U]), Ot = j(() => fr ? { ...e.initialValues, ...re, ...s } : { ...s, ...e.initialValues, ...re }, [e.initialValues, re, U]), gt = t || jt, at = j(() => {
    if (m)
      return m;
    const z = _.split("-");
    return z.length > 1 ? z[be.loadIdIndex] : U;
  }, [m, _, U]), Oe = T(async () => {
    se(!0);
    try {
      const z = await ir({
        api: gt,
        model: e,
        id: at
      });
      mr(z);
    } catch (z) {
      hr("Could not load record", z.message);
    } finally {
      se(!1);
    }
  }, [gt, e, at]);
  ce(() => {
    Oe();
  }, [U, at, e, gt, Oe]), ce(() => {
    H(e.getValidationSchema({ id: U, tTranslate: i, tOpts: d }));
  }, [U, e, H, x, d, i]);
  const he = Hn({
    enableReinitialize: !0,
    initialValues: Ot,
    validationSchema: ee,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (z, { resetForm: we }) => {
      Object.keys(z).forEach((pe) => {
        typeof z[pe] === be.string && (z[pe] = z[pe].trim());
      }), se(!0), Ur({
        id: U,
        api: jt,
        values: z,
        model: e
      }).then((pe) => {
        if (!pe) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof g === be.function && g();
        const Ee = pe.info ? pe.info : `Record ${U === 0 ? "Added" : "Updated"} Successfully.`;
        N.showMessage(i(Ee, d)), Ce !== !1 && Fe(), we({ values: he.values });
      }).catch((pe) => {
        N.showError(
          i("An error occurred, please try after some time.", d),
          pe
        ), e.reloadOnSave && we();
      }).finally(() => {
        se(!1);
      });
    }
  }), Be = T(() => {
    he.resetForm(), Tt(!1), typeof c === be.function && c(), Ce !== !1 && Fe();
  }, [he, c, Ce, Fe]), hr = T((z, we) => {
    se(!1), N.showError(i(z, d), we), Fe();
  }, [N, Fe, i, d]), mr = function({ id: z, title: we, record: pe, lookups: Ee }) {
    const Ze = _.indexOf("-") > -1, yt = !z || z === "0", Kt = yt ? be.create : Ze ? be.copy : be.edit, ke = yt ? "" : pe[e.linkColumn], Bt = [{ text: e.breadCrumbs }, { text: Kt }];
    Ze && (pe[e.linkColumn] = ""), e.columns.forEach((Ct) => {
      Ct.skipCopy && Ze && (pe[Ct.field] = "");
    }), X(pe), q(Ee), se(!1), ke !== "" && Bt.push({ text: ke }), K({
      showBreadcrumbs: !0,
      breadcrumbs: Bt
    });
  }, qt = T((z) => {
    he.dirty && u ? Tt(!0) : (typeof c === be.function && c(), Ce !== !1 && Fe()), z.preventDefault();
  }, [he.dirty, u, c, Ce, Fe]), gr = T(async () => {
    try {
      D(!0), await Wr({
        id: U,
        api: t || e.api,
        model: e
      }) === !0 && (N.showMessage(i("Record Deleted Successfully.", d)), Ce !== !1 && Fe());
    } catch (z) {
      N.showError(i("An error occurred, please try after some time.", d), z?.message);
    } finally {
      D(!1);
    }
  }, [U, t, e.api, N, nt, e, Ce, Fe, i, d]), bt = () => {
    nt(null), D(!1);
  }, xe = T((z) => {
    const { name: we, value: pe } = z.target;
    X({ ...re, [we]: pe });
  }, [re]), Ae = T(async (z) => {
    z && z.preventDefault(), typeof C === be.function && await C({ formik: he, model: e });
    const { errors: we } = he;
    he.handleSubmit();
    const pe = Object.keys(we)[0], Ee = we[pe];
    Ee && N.showError(i(Ee, d), null, "error");
    const Ze = e.columns.find(
      (yt) => yt.field === pe
    ) || {};
    Ze.tab && Me(Object.keys(e.tabs).indexOf(Ze.tab));
  }, [C, he, e, N, Me, i, d]), ot = [
    { text: i(w, d) },
    { text: i(U === "0" ? "New" : "Update", d) }
  ], de = Number(U) !== 0 && !!A.length, Ht = R.has("showRelation"), br = !u || re.readOnlyRelations;
  y = y || i("Are you sure you want to delete ?", d);
  const { showPageTitle: Yt = !0 } = e;
  return /* @__PURE__ */ P(ye, { children: [
    Yt && /* @__PURE__ */ a(
      na,
      {
        navigate: S,
        title: w,
        showBreadcrumbs: !Mt,
        breadcrumbs: ot,
        model: e,
        enableBackButton: Ce !== void 0
      }
    ),
    /* @__PURE__ */ a(ua.Provider, { value: { activeStep: $, setActiveStep: Me }, children: /* @__PURE__ */ P(Xo, { sx: { padding: 2, ...p }, children: [
      oe ? /* @__PURE__ */ a(Je, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(ti, {}) }) : /* @__PURE__ */ P("form", { children: [
        /* @__PURE__ */ P(
          ei,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              ue && u && !Ht && !h && /* @__PURE__ */ a(
                Ne,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Ae,
                  children: i("Save", d)
                }
              ),
              /* @__PURE__ */ a(
                Ne,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: qt,
                  children: i("Cancel", d)
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Ne,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => D(!0),
                  children: i("Delete", d)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          l,
          {
            model: e,
            formik: he,
            data: re,
            fieldConfigs: Ue,
            onChange: xe,
            lookups: fe,
            id: U,
            handleSubmit: Ae,
            mode: Wt
          }
        )
      ] }),
      mt && /* @__PURE__ */ P(
        _e,
        {
          open: !!mt,
          onConfirm: bt,
          onCancel: bt,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            mt
          ]
        }
      ),
      /* @__PURE__ */ a(
        _e,
        {
          open: ze,
          onConfirm: Be,
          onCancel: () => Tt(!1),
          title: i("Changes not saved", d),
          okText: i("Discard", d),
          cancelText: i("Continue", d),
          children: i("Would you like to continue to edit or discard changes?", d)
        }
      ),
      /* @__PURE__ */ a(
        _e,
        {
          open: Z,
          onConfirm: gr,
          onCancel: () => {
            D(!1), rt(null);
          },
          title: i(ge ? "Error Deleting Record" : "Confirm Delete", d),
          children: y
        }
      ),
      de ? /* @__PURE__ */ a(
        ds,
        {
          readOnly: br,
          models: r,
          relationFilters: n,
          relations: A,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, nr = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, hs = {}, On = !0, ms = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class lr {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "" } = t;
    let { api: n, idProperty: o = n + "Id" } = t;
    const l = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    n || (n = `${r.replaceAll(nr.nonAlphaNumeric, "-").toLowerCase()}`, o = r.replaceAll(" ", "") + "Id");
    const s = { ...t.defaultValues }, p = l || r;
    Object.assign(this, {
      standard: !0,
      name: p,
      permissions: { ...lr.defaultPermissions },
      idProperty: o,
      linkColumn: `${p}Name`,
      overrideFileName: r,
      preferenceId: p,
      tableName: p,
      module: l,
      ...t,
      api: n
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(s);
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
      t[n] = r.defaultValue === void 0 ? ms[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t, tTranslate: r = (o) => o, tOpts: n = {} } = {}) {
    const { columns: o } = this, l = {};
    for (const s of o) {
      const { field: p, label: h, header: C, type: y = "string", requiredIfNew: m = !1, required: c = !1, min: g = "", max: w = "", validate: x } = s, d = h || C || p;
      if (!d || h === null || h === "") continue;
      let i;
      switch (y) {
        case "string":
          i = me.string().nullable().trim().label(d), g && !isNaN(Number(g)) && (i = i.min(Number(g), r(`${d} must be at least ${g} characters long`, n))), w && !isNaN(Number(w)) && (i = i.max(Number(w), r(`${d} must be at most ${w} characters long`, n))), c && (i = i.trim().required(r(`${d} is required`, n)));
          break;
        case "boolean":
          i = me.bool().nullable().transform((S, v) => v === "" ? null : S).label(d);
          break;
        case "radio":
        case "dayRadio":
          i = me.mixed().label(d), c && (i = i.required(r(`Select at least one option for ${d}`, n)));
          break;
        case "date":
          i = me.date().nullable().transform((S, v) => v === "" || v === null ? null : S).label(d), c && (i = i.required(r(`${d} is required`, n)));
          break;
        case "dateTime":
          i = me.date().nullable().transform((S, v) => v === "" || v === null ? null : S).label(d), c && (i = i.required(r(`${d} is required`, n)));
          break;
        case "select":
        case "autocomplete":
          c ? i = me.string().trim().label(d).required(r(`Select at least one ${d}`, n)) : i = me.string().nullable();
          break;
        case "password":
          i = me.string().label(d).test("ignore-asterisks", r(`${d} must be a valid password.`, n), (S) => {
            if (S === "******") return !0;
            const v = Number(g) || 8, B = Number(w) || 50, I = s.regex || nr.password;
            return me.string().min(v, r(`${d} must be at least ${v} characters`, n)).max(B, r(`${d} must be at most ${B} characters`, n)).matches(
              I,
              r(`${d} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, n)
            ).isValidSync(S);
          });
          break;
        case "email":
          i = me.string().trim().matches(
            s.regex || nr.email,
            r("Email must be a valid email", n)
          );
          break;
        case "number":
          c ? i = me.number().label(d).required(r(`${d} is required.`, n)) : i = me.number().nullable(), g !== void 0 && g !== "" && !isNaN(Number(g)) && (i = i.min(Number(g), r(`${d} must be greater than or equal to ${g}`, n))), w !== void 0 && w !== "" && !isNaN(Number(w)) && (i = i.max(Number(w), r(`${d} must be less than or equal to ${w}`, n)));
          break;
        case "fileUpload":
          i = me.string().trim().label(d);
          break;
        default:
          i = me.mixed().nullable().label(d);
          break;
      }
      if (c && y !== "string" && (i = i.required(r(`${d} is required`, n))), m && (!t || t === "") && (i = i.trim().required(r(`${d} is required`, n))), x) {
        const S = nr.compareValidatorRegex.exec(x);
        if (S) {
          const v = S[1], B = o.find(
            (I) => (I.formField === v || I.field) === v
          );
          i = i.oneOf(
            [me.ref(v)],
            r(`${d} must match ${B.label}`, n)
          );
        }
      }
      l[p] = i;
    }
    return me.object({ ...l, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ a(fs, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ a(En, { model: this, showRowsSelected: On, ...r });
  ChildGrid = (t) => /* @__PURE__ */ P(ye, { children: [
    /* @__PURE__ */ a(En, { model: this, ...t, customStyle: hs, showRowsSelected: On }),
    /* @__PURE__ */ a(Bo, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  _e as DialogComponent,
  En as GridBase,
  Xi as HelpModal,
  Pn as MuiTypography,
  na as PageTitle,
  zc as RouterProvider,
  Zn as SnackbarContext,
  Lc as SnackbarProvider,
  Vc as StateProvider,
  lr as UiModel,
  $c as crudHelper,
  Ri as daDKGrid,
  Li as deDEGrid,
  Vi as elGRGrid,
  Gi as esESGrid,
  Wi as frFRGrid,
  et as httpRequest,
  qi as itITGrid,
  Qi as locales,
  _i as ptPT,
  Yi as trTRGrid,
  ki as useMobile,
  Gt as useModelTranslation,
  qr as useRouter,
  Et as useSnackbar,
  We as useStateContext
};
//# sourceMappingURL=index.js.map
