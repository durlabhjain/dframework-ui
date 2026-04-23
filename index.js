import { jsx as a, jsxs as D, Fragment as be } from "react/jsx-runtime";
import * as Ye from "react";
import ut, { createContext as lr, useContext as Nr, useState as B, useEffect as fe, useRef as nr, useCallback as T, useMemo as U, memo as An, useId as Va, createElement as Lr } from "react";
import za from "@mui/material/Snackbar";
import Ga from "@mui/material/Alert";
import Oe from "@mui/material/Button";
import ja from "@mui/material/Dialog";
import Wa from "@mui/material/DialogActions";
import Ua from "@mui/material/DialogContent";
import Ha from "@mui/material/DialogContentText";
import qa from "@mui/material/DialogTitle";
import * as rt from "@mui/x-data-grid-premium";
import { GridFooterContainer as Ya, GridFooter as Ka, getGridDateOperators as Tn, useGridSelector as In, gridFilterModelSelector as _a, useGridApiRef as Mn, GridActionsCellItem as Ir, DataGridPremium as On, GridToolbarExportContainer as Ja, Toolbar as Za, ColumnsPanelTrigger as Qa, FilterPanelTrigger as Xa, GRID_CHECKBOX_SELECTION_COL_DEF as eo, getGridStringOperators as to, getGridBooleanOperators as ro, useGridApiContext as no, gridRowSelectionStateSelector as ao } from "@mui/x-data-grid-premium";
import Bn from "@mui/icons-material/Delete";
import oo from "@mui/icons-material/FileCopy";
import io from "@mui/icons-material/Article";
import Rn from "@mui/icons-material/Edit";
import _e from "@mui/material/Box";
import Lt from "@mui/material/Typography";
import sr from "@mui/material/TextField";
import { useTranslation as cr, withTranslation as lo } from "react-i18next";
import { Typography as Me, Dialog as so, DialogTitle as co, Grid as Ce, DialogContent as uo, Card as po, CardContent as fo, Breadcrumbs as ho, Link as mo, Button as lt, IconButton as $t, Box as Pe, FormControl as Ct, Select as Mr, MenuItem as qe, Tooltip as xt, Menu as go, List as bo, ListItemButton as Sr, ListItemIcon as Fr, ListItem as yo, ListItemText as Co, TextField as st, FormControlLabel as ct, Checkbox as xo, Stack as gn, InputLabel as bn, Badge as wo, FormHelperText as dt, useTheme as vt, Input as vo, FilledInput as Do, OutlinedInput as So, InputAdornment as kn, RadioGroup as $r, Radio as yt, styled as Fo, Avatar as Po, CircularProgress as Eo, Divider as Ao } from "@mui/material";
import To from "@mui/icons-material/Check";
import Or from "@mui/icons-material/Close";
import Io from "@mui/icons-material/Help";
import { Replay as Mo, Close as Oo, GridOn as Bo, TableChart as Pr, Code as Ro, Language as ko, DataObject as No } from "@mui/icons-material";
import ae from "dayjs";
import Nn from "dayjs/plugin/utc";
import Lo from "dayjs/plugin/timezone";
import { DatePicker as Ln } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as $n } from "@mui/x-date-pickers/DateTimePicker";
import Vr from "dayjs/plugin/utc.js";
import { LocalizationProvider as Vn } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as zn } from "@mui/x-date-pickers/AdapterDayjs";
import Br from "@mui/icons-material/Add";
import $o from "@mui/icons-material/Remove";
import Vo from "@mui/icons-material/FilterListOff";
import zo from "@mui/icons-material/ViewColumn";
import Go from "@mui/icons-material/FilterList";
import { styled as ur } from "@mui/material/styles";
import jo from "@mui/icons-material/Save";
import yn from "@mui/icons-material/Settings";
import Wo from "@mui/icons-material/Refresh";
import { useFormik as Gn } from "formik";
import * as he from "yup";
import { DateTimePicker as Uo, DatePicker as Ho } from "@mui/x-date-pickers";
import jn from "@mui/material/MenuItem";
import qo from "@mui/icons-material/History";
import Yo from "@mui/icons-material/FileDownload";
import Wn from "@mui/material/Checkbox";
import Ko from "@mui/material/Paper";
import _o from "@mui/material/Stack";
import Jo from "@mui/material/CircularProgress";
import Zo from "@mui/material/FormControlLabel";
import { NumberField as ar } from "@base-ui/react/number-field";
import Qo from "@mui/icons-material/KeyboardArrowUp";
import Un from "@mui/icons-material/KeyboardArrowDown";
import Xo from "@mui/icons-material/VisibilityOff";
import ei from "@mui/icons-material/Visibility";
import { TimePicker as ti } from "@mui/x-date-pickers/TimePicker";
import ri from "@mui/icons-material/Clear";
import dr from "@mui/material/FormControl";
import ni from "@mui/material/InputLabel";
import ai from "@mui/material/Select";
import Er from "@mui/material/Grid";
import Hn from "@mui/material/Autocomplete";
import oi from "@mui/material/Stepper";
import ii from "@mui/material/Step";
import li from "@mui/material/StepLabel";
import { grey as si } from "@mui/material/colors";
import ci from "@emotion/styled";
import ui from "@mui/material/Chip";
import { SimpleTreeView as di } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as Cn } from "@mui/x-tree-view/TreeItem";
import pi from "@mui/material/Input";
import fi from "@mui/material/Tab";
import hi from "@mui/material/Tabs";
const qn = lr(null), mi = "bottom", gi = "center", bi = ut.forwardRef(function(r, t) {
  return /* @__PURE__ */ a(Ga, { elevation: 6, ref: t, variant: "filled", ...r });
}), Mc = ({ children: e }) => {
  const [r, t] = B(null), [n, o] = B(!1), [s, l] = B(null), [d, h] = B(null), C = function(c, g, w = "info", x) {
    typeof c != "string" && (c = c.toString()), g && typeof g != "string" && (g = g.toString()), t(g ? `${c}: ${g}` : c), l(w), o(!0), h(x);
  }, y = function(c, g, w = "error", x) {
    C(c, g, w, x);
  }, m = function() {
    o(!1), h(null), d && d();
  };
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(
      qn.Provider,
      {
        value: { showMessage: C, showError: y },
        children: e
      }
    ),
    /* @__PURE__ */ a(za, { open: n, autoHideDuration: 6e3, onClose: m, anchorOrigin: { vertical: mi, horizontal: gi }, children: /* @__PURE__ */ a(bi, { severity: s, children: r }) })
  ] });
}, Dt = function() {
  return Nr(qn);
}, Ke = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: n, okText: o, cancelText: s, yesNo: l = !1, children: d, maxWidth: h = "sm", fullWidth: C = !0, ...y }) => (o = o || (l ? "Yes" : "Ok"), s = s || (l ? "No" : "Cancel"), /* @__PURE__ */ D(
  ja,
  {
    ...y,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: h,
    fullWidth: C,
    children: [
      /* @__PURE__ */ a(qa, { id: "alert-dialog-title", sx: { fontSize: d ? "inherit" : "1.25rem" }, children: t }),
      d && /* @__PURE__ */ a(Ua, { dividers: !0, children: /* @__PURE__ */ a(Ha, { children: d }) }),
      (n || r) && /* @__PURE__ */ D(Wa, { children: [
        n && /* @__PURE__ */ a(Oe, { onClick: n, children: s }),
        r && /* @__PURE__ */ a(Oe, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Ar = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Yn = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, yi = (e, r) => {
  const t = new URL(e);
  for (const n in r) {
    const o = typeof r[n] == "object" ? JSON.stringify(r[n]) : r[n];
    t.searchParams.append(n, o);
  }
  window.open(t, "_blank").focus();
}, Kn = async (e) => {
  const {
    method: r = "GET",
    url: t,
    data: n,
    headers: o = {},
    credentials: s = "include",
    ...l
  } = e, d = {
    method: r,
    credentials: s,
    headers: {
      ...o
    },
    ...l
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = n instanceof FormData ? n : Yn(n)) : (d.headers["Content-Type"] = o["Content-Type"] || "application/json", d.body = typeof n == "string" ? n : JSON.stringify(n)));
  const h = await fetch(t, d), C = h.headers.get("content-type") || {};
  return {
    status: h.status,
    data: C.includes("application/json") ? await h.json() : await h.text(),
    headers: Object.fromEntries(h.headers.entries())
  };
}, Ci = (e) => e?.message || e?.info || e?.error || e?.err, Be = Object.freeze({
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
}), tt = async ({
  url: e,
  params: r = {},
  history: t,
  jsonPayload: n = !1,
  method: o = "POST",
  signal: s,
  additionalParams: l = {},
  additionalHeaders: d = {},
  dataParser: h = Be.raw,
  onParseError: C
}) => {
  if (r.exportData)
    return yi(e, r);
  const y = {
    method: o,
    credentials: "include",
    url: e,
    headers: n ? { ...d } : { "Content-Type": "multipart/form-data", ...d },
    ...s && { signal: s },
    ...l
  };
  r && Object.keys(r).length > 0 && (y.data = n ? r : Yn(r));
  try {
    const m = await Kn(y);
    let c = m.data;
    if (m.status === Ar.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (m.status === Ar.FORBIDDEN)
      return { error: !0, message: c.message || "Access Denied!" };
    if (m.status !== Ar.OK)
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
}, xi = ["date", "dateTime"], wi = ["singleSelect"], vi = 1e6;
function Di(e) {
  const { operator: r, value: t, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(r), s = t != null && (t !== "" || n === "number" && t === 0 || n === "boolean" && t === !1);
  return o || s;
}
const Si = (e, r = !1) => {
  if (typeof e != "string" || e === void 0 || e === null)
    return e;
  if (e.length === 0)
    return null;
  if (e.length === 17) {
    const n = +e.slice(0, 4), o = +e.slice(4, 6) - 1, s = +e.slice(6, 8), l = +e.slice(8, 10), d = +e.slice(10, 12), h = +e.slice(12, 14), C = +e.slice(14, 17);
    return r ? new Date(Date.UTC(n, o, s, l, d, h, C)) : new Date(n, o, s, l, d, h, C);
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
    throw new Error(Ci(e) || r);
}
const Fi = ({ gridColumns: e, page: r, pageSize: t, sortModel: n, filterModel: o, baseFilters: s, action: l = "list", extraParams: d = {}, model: h, api: C }) => {
  const y = l === "export" && h.isElasticExport === !0, m = [], c = [], g = [];
  e.forEach(({ lookup: v, type: k, field: M, localize: E = !1, filterable: N = !0, dependsOn: Q }) => {
    xi.includes(k) && g.push({ field: M, localize: E }), v && !m.includes(v) && wi.includes(k) && N && (m.push(v), c.push({ lookup: v, dependsOn: Q }));
  });
  const w = [];
  o?.items?.length && o.items.forEach((v) => {
    if (Di(v)) {
      const { field: k, operator: M, filterField: E } = v;
      let { value: N } = v;
      const H = e.filter((j) => j?.field === v.field)[0]?.type;
      H === "boolean" ? N = N === "true" || N === !0 ? 1 : 0 : H === "number" && (N = Array.isArray(N) ? N.filter((j) => j) : N), N = v.filterValues || N, w.push({
        field: E || k,
        operator: M,
        value: N,
        type: H
      });
    }
  }), s && Array.isArray(s) && w.push(...s);
  const x = {
    start: r * t,
    limit: y ? h.exportSize || vi : t,
    ...d,
    logicalOperator: o.logicOperator,
    sort: n.map((v) => (v.filterField || v.field) + " " + v.sort).join(","),
    // Note: where is excluded here and returned separately to allow modification via createRequestPayload hook
    isElasticExport: y,
    model: h.module,
    fileName: h.overrideFileName
  };
  m.length && (x.lookups = m.join(",")), c.length && (x.lookupWithDeps = JSON.stringify(c)), h?.limitToSurveyed && (x.limitToSurveyed = h?.limitToSurveyed);
  let u = `${C}/${l}`;
  const i = new URLSearchParams();
  d.template && i.append("template", d.template), d.configFileName && i.append("configFileName", d.configFileName);
  const S = i.toString();
  return S && (u += `?${S}`), { requestData: x, url: u, where: w, dateColumns: g };
}, Rr = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: n = {}, action: o = "list", model: s, signal: l } = e, { requestData: d, url: h, where: C, dateColumns: y } = Fi(e);
  if (r) {
    const g = await wt(s, {
      where: C,
      url: h,
      requestData: d,
      dataParsers: Be,
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
  const m = await wt(s, {
    where: C,
    url: h,
    requestData: d,
    dataParsers: Be,
    dataParser: Be.json,
    jsonPayload: !0,
    action: o,
    signal: l,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    ...e
  }), c = await tt(m);
  return c?.aborted || (Vt(c, "An error occurred while fetching data"), await zr({ model: s, action: o, responseData: c, context: { dateColumns: y, model: s, action: o, ...e } }), c.records.forEach((g) => {
    y.forEach((w) => {
      const { field: x, localize: u } = w;
      g[x] && (g[x] = Si(g[x], u));
    }), s.columns.forEach(({ field: w, displayIndex: x }) => {
      x && (g[w] = g[x]);
    });
  })), c;
}, or = async (e = {}) => {
  let { api: r, id: t, model: n, parentFilters: o, where: s = {} } = e;
  r = r || n.api;
  const l = new URLSearchParams(), d = `${r}/${t ?? "-"}`, h = [];
  (n.formDef || n.columns)?.forEach((i) => {
    i.lookup && !h.includes(i.lookup) && !i.dependsOn && h.push(i.lookup);
  }), l.set("lookups", h), s && Object.keys(s)?.length && l.set("where", JSON.stringify(s));
  const y = await wt(n, {
    url: `${d}?${l.toString()}`,
    method: "GET",
    lookupsToFetch: h,
    jsonPayload: !0,
    action: "load",
    dataParsers: Be,
    ...e
  }), m = await tt(y);
  Vt(m, "Load failed"), await zr({ model: n, action: "load", responseData: m, context: e });
  const { data: c, lookups: g } = m || {};
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
    dataParsers: Be,
    jsonPayload: !0,
    action: "delete",
    ...e
  }), s = await tt(o);
  return Vt(s, "Delete failed"), !0;
}, jr = async function(e = {}) {
  const { id: r, api: t, values: n, model: o } = e;
  let s, l;
  r !== 0 ? (s = `${t}/${r}`, l = "PUT") : (s = t, l = "POST");
  const d = await wt(o, {
    url: s,
    method: l,
    params: n,
    action: "save",
    jsonPayload: !0,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    dataParsers: Be,
    ...e
  }), h = await tt(d);
  return Vt(h, "Save failed"), h;
}, _n = async (e = {}) => {
  let { api: r, model: t, lookups: n, scopeId: o, reqData: s } = e;
  r = r || t.api;
  const l = new URLSearchParams(), d = `${r}/lookups`;
  l.set("lookups", n), l.set("scopeId", o);
  const h = await wt(t, {
    url: `${d}?${l.toString()}`,
    method: "GET",
    lookups: n,
    scopeId: o,
    dataParsers: Be,
    dataParser: Be.json,
    jsonPayload: !0,
    action: "lookups",
    ...s,
    ...e
  }), C = await tt(h);
  return Vt(C, "Could not load lookups"), await zr({ model: t, action: "lookups", responseData: C, context: e });
}, Oc = {
  getList: Rr,
  getRecord: or,
  deleteRecord: Gr,
  saveRecord: jr,
  getLookups: _n
}, Pi = ({ pagination: e, apiRef: r, tTranslate: t = (n) => n }) => {
  const n = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, s = r.current.state.rows.totalRowCount, l = Math.ceil(s / o), { t: d, i18n: h } = cr(), C = { t: d, i18n: h }, [y, m] = B(n + 1), c = function(x) {
    let u = x.target?.value;
    u === "" ? m("") : (u = parseInt(u), u = isNaN(u) || u < 1 ? 1 : u, m(u));
  };
  fe(() => {
    m(n + 1);
  }, [n, o]);
  const g = function() {
    let x = y === "" ? 1 : y;
    x = Math.max(x, 1), x = Math.min(x, l), r.current.setPage(x - 1), m(x), y === "" && m(1);
  }, w = (x) => {
    const u = x.which || x.keyCode, i = String.fromCharCode(u);
    /\d/.test(i) || x.preventDefault();
  };
  return /* @__PURE__ */ D(Ya, { children: [
    /* @__PURE__ */ a(_e, { sx: { pl: 5 }, children: e && /* @__PURE__ */ D(be, { children: [
      /* @__PURE__ */ D(Lt, { variant: "p", children: [
        t("Jump to page", C),
        ":"
      ] }),
      /* @__PURE__ */ a(
        sr,
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
          disabled: !s
        }
      ),
      /* @__PURE__ */ a(Oe, { disabled: !s, size: "small", onClick: g, children: t("Go", C) })
    ] }) }),
    /* @__PURE__ */ a(Ka, {})
  ] });
}, Ei = /\${((\w+)\.)?(\w+)}/g, Ai = function(e, r, { template: t = Ei, keepMissingTags: n = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, s, l, d) {
    const h = l ? r[l] || {} : r;
    return h[d] === void 0 ? n ? o : "" : h[d];
  });
}, er = {
  replaceTags: Ai
};
function xn({ variant: e = "h2", component: r = "h2", text: t = "", name: n = null, ...o }) {
  return /* @__PURE__ */ D(Me, { variant: e, component: r, ...o, children: [
    t,
    n && ` ${n}`
  ] });
}
function Ti(e = !1) {
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
    const d = !!l.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    l = l.toLowerCase();
    const h = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(l);
    let C = null;
    return window.innerWidth <= window.innerHeight ? C = "portrait" : C = "landscape", { mobile: d, tablet: h, portrait: C === "portrait", landscape: C === "landscape" };
  }
  return e ? t.mobile : t;
}
const Ii = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Mi = {
  ...rt.daDK,
  ...Ii
}, Oi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Bi = {
  ...rt.deDE,
  ...Oi
}, Ri = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, ki = {
  ...rt.elGR,
  ...Ri
}, Ni = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Li = {
  ...rt.esES,
  ...Ni
}, $i = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Vi = {
  ...rt.frFR,
  ...$i
}, zi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Gi = {
  ...rt.itIT,
  ...zi
}, ji = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Wi = {
  ...rt.trTR,
  ...ji
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
}, Hi = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, qi = {
  ...rt.enUS,
  ...Hi
}, Yi = {
  en: qi,
  "tr-TR": Wi,
  "es-ES": Li,
  "da-DK": Mi,
  "de-DE": Bi,
  "el-GR": ki,
  "fr-FR": Vi,
  "pt-PT": Ui,
  "it-IT": Gi
};
ae.extend(Nn);
ae.extend(Lo);
const Jn = lr(), Zn = lr(null), wn = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Bc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, n] = B("en"), [o, s] = B("MM/DD/YYYY hh:mm:ss A"), [l, d] = B(null), [h, C] = B(null), [y, m] = B(null), [c, g] = B(null), [w, x] = B(""), [u, i] = B(!1), { t: S, i18n: v } = cr(), k = Dt(), M = nr(r), E = T((F, A) => {
    M.current[F] = A;
  }, []), N = T((F) => M.current[F || "default"] || "", []), Q = T((F, A) => `${M.current[A || "default"] || ""}${F}`, []), H = T((F = !0) => {
    i(F);
  }, []), j = T((F, A, te) => {
    if (te != null) {
      const z = te;
      let re = F ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return z && (re = z.split(" "), re[0] = re[0].toUpperCase(), F ? re = re[0] : A ? re = re[0].toUpperCase() : (re[1] += re[1].includes(":ss") ? "" : ":ss", re = re.join(" "))), re;
    }
    return F?.split(" ")[0] || "DD-MM-YYYY";
  }, []), _ = T(({ value: F, useSystemFormat: A, showOnlyDate: te = !1, state: z }) => {
    if (!F) return null;
    const re = j(A, te, z);
    return ae(F).format(re);
  }, [j]), W = T(() => {
    const F = t, A = Yi[F];
    function te(z) {
      return F === "pt-PT" || F === "ptPT" ? A.components.MuiDataGrid.defaultProps.localeText[z] || z : A[z] || z;
    }
    return { getLocalizedString: te };
  }, [t]), L = T((F) => {
    n(F);
  }, []), xe = T((F) => {
    d(F);
  }, []), oe = T((F) => {
    m(F);
  }, []), ie = T((F) => {
    g(F);
  }, []), X = T((F) => {
    x(F);
  }, []), ee = T((F) => {
    s(F);
  }, []), de = T((F) => {
    C(F);
  }, []), $ = U(() => ({
    locale: t,
    dateTime: o,
    pageTitle: l,
    modal: h,
    pageBackButton: y,
    userData: c,
    timeZone: w
  }), [t, o, l, h, y, c, w]), we = U(() => ({
    // State data
    stateData: $,
    // Loader management
    isLoading: u,
    showLoader: H,
    // Snackbar utilities
    showMessage: k?.showMessage || wn,
    showError: k?.showError || wn,
    // i18n utilities
    dayjs: ae,
    t: S,
    i18n: v,
    // Date/time utilities
    systemDateTimeFormat: j,
    formatDate: _,
    useLocalization: W,
    // API utilities
    getApiEndpoint: N,
    setApiEndpoint: E,
    buildUrl: Q,
    // App-level state setters with meaningful names
    setLocale: L,
    setPageTitle: xe,
    setPageBackButton: oe,
    setUserData: ie,
    setTimeZone: X,
    setDateTimeFormat: ee,
    setModal: de
  }), [
    $,
    u,
    H,
    S,
    v,
    k,
    N,
    E,
    j,
    _,
    W,
    L,
    xe,
    oe,
    ie,
    X,
    ee,
    de,
    Q
  ]);
  return /* @__PURE__ */ a(Jn.Provider, { value: we, children: e });
}, Rc = Zn.Provider, Wr = () => Nr(Zn), Ge = () => {
  const e = Nr(Jn);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Ki = () => {
  const [e, r] = B(), [t, n] = B(!1), { stateData: o, setModal: s } = Ge(), l = o.modal, d = 16 / 9;
  let h = (window.outerWidth - 10) / window.innerWidth * 100;
  const C = () => {
    let m = document.getElementById("tutorial-iframe");
    m ? (m = m.offsetWidth, m = m / window.innerWidth) : m = 0.9;
    const c = window.innerWidth * m * (1 / d), g = window.innerHeight - 180;
    r(Math.min(c, g));
  };
  fe(() => {
    l?.status && (n(!0), C());
  }, [l, h]), fe(() => (window.addEventListener("resize", C), () => {
    window.removeEventListener("resize", C);
  }), []);
  function y() {
    const m = document.getElementById("tutorial-iframe");
    m.src = l?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: l?.status && /* @__PURE__ */ D(so, { fullWidth: !0, maxWidth: "lg", open: l.status, onClose: () => {
    s({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(co, { className: "pt-2 pb-0", children: /* @__PURE__ */ D(Ce, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ D(Ce, { size: 11, children: [
        /* @__PURE__ */ D(Me, { variant: "h7", component: "div", children: [
          " ",
          l?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Me, { variant: "caption", component: "div", children: l?.data?.subTitle || /* @__PURE__ */ a(be, { children: " " }) })
      ] }),
      /* @__PURE__ */ D(Ce, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(Mo, { className: "cursor_pointer mt-2 mr-2", onClick: y }),
        /* @__PURE__ */ a(Oo, { className: "cursor_pointer mt-2", onClick: () => {
          s({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ D(uo, { dividers: !0, children: [
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
function _i({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: s = "",
  titleClass: l = "text-theme-blue text-max-width",
  showBreadcrumbs: d,
  breadcrumbs: h = [],
  enableBackButton: C = !1,
  breadcrumbColor: y,
  showHelpButton: m = !1,
  model: c
}) {
  const g = Ti(!0), w = h.length - 1, x = d && h.length, { t: u, i18n: i } = cr(), S = U(() => ({ t: u, i18n: i }), [u, i]), v = c?.tTranslate ?? ((M) => M), k = () => {
    r(-1);
  };
  return fe(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(xn, { className: "print-only", text: v(e, S) }),
    x && /* @__PURE__ */ D(be, { children: [
      /* @__PURE__ */ a(po, { sx: { mb: 3 }, children: /* @__PURE__ */ D(fo, { sx: { backgroundColor: y || "#fff" }, children: [
        /* @__PURE__ */ D(Ce, { container: !0, children: [
          /* @__PURE__ */ a(Ce, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(ho, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${l} breadcrumbs-text-title text-max-width`, children: h.map((M, E) => E < w ? /* @__PURE__ */ a(mo, { onClick: k, className: `${l} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: M.text }, E) : /* @__PURE__ */ a(Me, { className: `${l} breadcrumbs-text-title text-max-width`, variant: "inherit", children: M.text }, E)) }) }),
          C && /* @__PURE__ */ a(Ce, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(lt, { variant: "contained", onClick: k, children: v("Back", S) }) }),
          m && /* @__PURE__ */ a(Ce, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a($t, { color: "primary", title: v("Help", S), size: "large", children: /* @__PURE__ */ a(Io, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Pe, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: g ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          xn,
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
      /* @__PURE__ */ a(Ki, {})
    ] })
  ] });
}
const Qn = lo()(_i), ze = {
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
}, Xn = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
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
const Ji = {
  date: Ln,
  dateTime: $n
}, Zi = "-10px", Qi = "-16px", Xi = (e) => {
  const { fixedFilterFormat: r } = ze, { item: t, applyValue: n, convert: o, colDef: s } = e, { systemDateTimeFormat: l, stateData: d } = Ge(), h = s?.type || "date", C = r[h], y = s?.localize ?? e.localize ?? !1, m = (i) => {
    const S = ae(i);
    return S.isValid() && S.year() > 1900;
  }, c = l(h !== "dateTime", !1, d.dateTime), g = (i) => {
    if (!(h !== "date" && h !== "dateTime" || ((v) => typeof v != "string" ? !1 : !ae(v, c, !0).isValid())(i))) {
      if (o || y) {
        if (!i) {
          n({ ...t, value: null });
          return;
        }
        i = ae(i).utc(), n({ ...t, value: i });
        return;
      }
      if (!m(i)) {
        n({ ...t, value: null });
        return;
      }
      n({ ...t, value: i.format(C) });
    }
  }, w = (i) => {
    if (i && i === r.OverrideDateFormat) {
      const S = i.split("-");
      return S.length === 3 ? S[1] : null;
    }
  }, x = Ji[h], u = t?.value ? ae(t.value) : null;
  return /* @__PURE__ */ a(Vn, { dateAdapter: zn, children: /* @__PURE__ */ a(
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
            marginTop: Zi,
            marginBottom: Qi,
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
}, Tr = (e) => Tn().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ a(Xi, { ...t, ...e }) : void 0
})), el = {
  IsAnyOf: "isAnyOf"
}, tl = (e) => {
  const { column: r, item: t, applyValue: n, apiRef: o } = e, s = r?.dataRef?.current?.lookups;
  let l = r.customLookup || s[r.lookup] || [];
  typeof r.lookup == "string" && (l = l.map(({ label: m, value: c }) => ({
    label: m,
    value: c
  })));
  const d = In(o, _a), h = U(
    () => d.items?.filter((m) => m.field === r.field),
    [r.field, d.items]
  ), C = T(
    (m) => {
      let c = m.target.value;
      if (d.items.length >= 1) {
        c = c.length === 1 ? c[0] : c;
        for (const x of d.items)
          x.field === t.field && (x.operator === el.IsAnyOf ? c = Array.isArray(c) ? c : [c] : c = c === 0 ? "0" : c);
      }
      if (c.length === 0 && h[0]) {
        o.current.deleteFilterItem(h[0]);
        return;
      }
      const g = c, w = h[0] ? h[0] : t;
      n({ ...w, value: g });
    },
    [o, r.applyZeroFilter, h, t, n]
  ), y = h[0]?.value ?? "";
  return /* @__PURE__ */ a(Ct, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    Mr,
    {
      label: r.field,
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
      children: l?.map((m, c) => /* @__PURE__ */ a(qe, { value: m.value, children: e.tTranslate(m.label, e.tOpts) }, c))
    }
  ) });
}, He = {
  Edit: "Edit",
  Delete: "Delete"
}, ke = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, rl = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, nl = { pageSize: 50, page: 0 }, al = [5, 10, 20, 50, 100], ol = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: n, tOpts: o }) => {
  const { getApiEndpoint: s } = Ge(), l = s("GridPreferenceManager"), d = Mn(), h = Dt(), [C, y] = B(ke.NONE), [m, c] = B(null), [g, w] = B(!1), [x, u] = B({}), [i, S] = B(null), [v, k] = B(null), M = U(
    () => i == null ? [] : i.filter((F) => F.prefId !== 0),
    [i]
  ), E = U(() => [
    { field: "prefName", type: "string", width: 300, headerName: n("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: n("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: n("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ir, { icon: /* @__PURE__ */ a(xt, { title: He.Edit, children: /* @__PURE__ */ a(Rn, {}) }), tabIndex: 1, "data-action": He.Edit, label: n("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ir, { icon: /* @__PURE__ */ a(xt, { title: He.Delete, children: /* @__PURE__ */ a(Bn, {}) }), tabIndex: 2, "data-action": He.Delete, label: n("Delete", o), color: "error" }, 2)] }
  ], [n, o]), N = U(() => he.object({
    prefName: he.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: he.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), Q = (F) => c(F?.currentTarget), H = () => c(null), j = () => {
    y(ke.NONE), H();
  }, _ = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), k(null), t && t(null), H());
  }, W = T(async ({ applyDefault: F = !1 }) => {
    const A = await tt({
      url: l,
      params: { action: "list", id: r },
      dataParser: Be.json
    });
    if (!A?.preferences) {
      h.showMessage(n("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const te = A.preferences.filter((z) => z.prefName.trim() !== "");
    if (S(te), F) {
      const z = te.find((re) => re.isDefault);
      if (z)
        return { defaultPrefId: z.prefId, preferences: te };
      t && t(null);
    }
    return { preferences: te };
  }, [l, r, h, n, o, t]), L = T(async (F, A = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), F === 0) {
      _();
      return;
    }
    const te = A || i;
    if (!te) {
      h.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const z = te.find((le) => le.prefId === F);
    if (!z?.prefValue) {
      h.showMessage(n("Failed to load preference.", o));
      return;
    }
    let re;
    try {
      re = typeof z.prefValue == "string" ? JSON.parse(z.prefValue) : z.prefValue;
    } catch {
      h.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(re), k(z.prefName), t && t(z.prefName), H();
  }, [e, _, i, t, h, n, o]), xe = async (F) => {
    const A = F.prefName.trim(), te = A.toLocaleLowerCase();
    if (i.find((re) => re.prefName.toLocaleLowerCase() === te && re.prefId !== F.prefId)) {
      w(!0);
      return;
    }
    const z = await tt({
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
      dataParser: Be.json
    });
    if (z === !0 || z?.success === !0) {
      h.showMessage(n(`Preference ${C === ke.ADD ? "added" : "saved"} successfully.`, o)), j(), await W({ applyDefault: !1 });
      return;
    }
    h.showMessage(n("Error saving preference: ", o) + (z?.message || n("Unknown error", o)));
  }, oe = async () => {
    const F = await tt({
      url: l,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: Be.json
    });
    if (F === !0 || F?.success === !0) {
      h.showMessage(n("Preference deleted successfully.", o)), await W({ applyDefault: !1 }), u({});
      return;
    }
    h.showMessage(n("Error deleting preference: ", o) + (F?.message || n("Unknown error", o)));
  }, ie = (F) => {
    const A = F.field === "editAction" ? He.Edit : F.field === "deleteAction" ? He.Delete : null;
    if (F.id === 0 && A) {
      h.showMessage(n(`Default preference cannot be ${A === He.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    A === He.Edit && (y(ke.EDIT), ee.setValues(F?.row)), A === He.Delete && u({
      prefId: F.id,
      preferenceName: F.row.prefName
    });
  }, X = (F) => {
    y(F), H(), F === ke.ADD && ee.resetForm();
  }, ee = Gn({
    initialValues: rl,
    validationSchema: N,
    onSubmit: xe,
    mode: "onBlur"
  });
  fe(() => {
    if (!r) return;
    (async () => {
      const A = await W({ applyDefault: !0 });
      A?.defaultPrefId && A?.preferences && await L(A.defaultPrefId, A.preferences);
    })();
  }, [r]);
  const de = U(() => ({
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
    paginationDisplayedRows: ({ from: F, to: A, count: te }) => `${F}–${A} ${n("of", o)} ${te}`,
    toolbarQuickFilterLabel: n("Search", o),
    columnsManagementSearchTitle: n("Search", o),
    columnsManagementNoColumns: n("No columns", o)
  }), [n, o]), $ = C === ke.MANAGE, we = C === ke.ADD || C === ke.EDIT;
  return /* @__PURE__ */ D(Pe, { children: [
    /* @__PURE__ */ D(
      lt,
      {
        id: "grid-preferences-btn",
        "aria-controls": m ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": m ? "true" : void 0,
        onClick: Q,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(yn, {}),
        children: [
          n("Preferences", o),
          " ",
          v && `(${v})`
        ]
      }
    ),
    /* @__PURE__ */ D(
      go,
      {
        id: "grid-preference-menu",
        anchorEl: m,
        open: !!m,
        onClose: H,
        component: bo,
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
          /* @__PURE__ */ D(qe, { component: Sr, dense: !0, onClick: () => X(ke.ADD), children: [
            /* @__PURE__ */ a(Fr, { children: /* @__PURE__ */ a(Br, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ D(qe, { component: Sr, dense: !0, onClick: () => X(ke.MANAGE), children: [
            /* @__PURE__ */ a(Fr, { children: /* @__PURE__ */ a(yn, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ D(qe, { component: Sr, dense: !0, divider: i?.length > 0, onClick: () => L(0), children: [
            /* @__PURE__ */ a(Fr, { children: /* @__PURE__ */ a(Wo, {}) }),
            n("Reset to Default", o)
          ] }),
          i?.length > 0 && i?.map((F) => {
            const { prefName: A, prefDesc: te, prefId: z } = F;
            return /* @__PURE__ */ a(
              qe,
              {
                onClick: () => L(z),
                component: yo,
                selected: v === A,
                title: n(te, o),
                dense: !0,
                children: /* @__PURE__ */ a(Co, { primary: A })
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
        open: C !== ke.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ D(Me, { variant: "h5", children: [
          C,
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
              onSubmit: ee.handleSubmit,
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
                    value: ee.values.prefName,
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
                    onChange: ee.handleChange,
                    error: !!ee.errors.prefName,
                    helperText: ee.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(
                  st,
                  {
                    value: ee.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: n("Preference Description", o),
                    name: "prefDesc",
                    onChange: ee.handleChange,
                    error: !!ee.errors.prefDesc,
                    helperText: ee.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(
                  ct,
                  {
                    control: /* @__PURE__ */ a(
                      xo,
                      {
                        checked: ee.values.isDefault,
                        name: "isDefault",
                        onChange: ee.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ D(gn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    lt,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ a(jo, {}),
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
              On,
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
                pageSizeOptions: al,
                pagination: !0,
                rowCount: M.length,
                rows: M,
                getRowId: (F) => F.GridPreferenceId,
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
                    paginationModel: nl
                  }
                },
                localeText: de
              }
            ) }),
            /* @__PURE__ */ a(Ce, { size: 12, children: /* @__PURE__ */ a(gn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
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
          ee.values.prefName.trim(),
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
}, il = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((n) => {
  t.lastIndex = 0;
  const o = t.exec(n);
  if (!o) return null;
  const [, s, l = "ASC"] = o;
  return {
    field: s.trim(),
    sort: l.trim().toLowerCase()
  };
}).filter(Boolean), it = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: n, type: o, isPivotExport: s = !1, icon: l }) => /* @__PURE__ */ D(
  jn,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": s,
    children: [
      /* @__PURE__ */ a(_e, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: l }),
      e(o, r)
    ]
  }
), ll = ({ exportFormats: e, customExportOptions: r, ...t }) => /* @__PURE__ */ D(Ja, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Bo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Pr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Pr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(Ro, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(ko, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ a(it, { ...t, icon: /* @__PURE__ */ a(No, { fontSize: "small" }), type: "JSON", contentType: "application/json" }),
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
] }), ea = (e, r) => {
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
}, sl = (e = {}, r = {}) => {
  let t = !0;
  for (const n in e)
    e[n] !== r[n] && (t = !1);
  for (const n in r)
    n in e || (t = !1);
  return t;
};
ae.extend(Vr);
const cl = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: n,
  tTranslate: o,
  tOpts: s
}) => {
  const { systemDateTimeFormat: l, stateData: d } = Ge(), { fixedFilterFormat: h } = ze, C = U(() => r?.items?.find((u) => u.field === e.field), [r, e.field]), y = C?.operator || e.toolbarFilter?.defaultOperator || ea(e.type), m = y === "isAnyOf", c = U(() => {
    if (["isEmpty", "isNotEmpty"].includes(y))
      return "";
    if (!C)
      return m ? [] : "";
    const u = C.value;
    return u ?? (m ? [] : "");
  }, [C, m]), g = T((u) => {
    t((i) => {
      const S = i?.items || [];
      if (u === "" || u === null || Array.isArray(u) && u.length === 0) {
        const M = S.filter((E) => E.field !== e.field);
        return {
          ...i,
          items: M
        };
      }
      const v = {
        field: e.field,
        operator: y,
        value: u,
        type: e.type
      }, k = S.filter((M) => M.field !== e.field);
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
    const u = e.toolbarFilter?.label || e.headerName || e.label || e.field, i = w(y, e.type), v = e.type === "number" || e.type === "string" && y !== "startsWith" ? e.type === "number" ? `${i} ${u}` : `${u} (${i})` : u;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          st,
          {
            variant: "standard",
            label: o(v, s),
            value: c,
            onChange: (L) => g(L.target.value),
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
            onChange: (L) => g(L.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const L = c === "" || c === void 0 || c === null ? "" : c === !0 || c === "true" ? "true" : c === !1 || c === "false" ? "false" : "";
        return /* @__PURE__ */ D(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(bn, { children: o(v, s) }),
          /* @__PURE__ */ D(
            Mr,
            {
              value: L,
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
        const k = e.customLookup || n?.[e.lookup] || [], M = typeof e.lookup == "string" ? k.map((L) => ({
          label: L?.label || "",
          value: L?.value ?? ""
        })) : k, E = ze.normalizeFilterValue({ value: c, operator: y, isMultiple: m }), N = 1;
        return /* @__PURE__ */ D(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(bn, { children: o(v, s) }),
          /* @__PURE__ */ a(
            Mr,
            {
              value: E,
              onChange: (L) => g(L.target.value),
              multiple: m,
              size: "small",
              renderValue: (L) => {
                const oe = (Array.isArray(L) ? L : L != null && L !== "" ? [L] : []).map((de) => {
                  if (de && typeof de == "object" && "label" in de) return o(de.label, s);
                  const $ = M.find((we) => String(we.value) === String(de));
                  return $ ? o($.label, s) : "";
                }).filter(Boolean);
                if (oe.length === 0) return "";
                if (oe.length <= N) return oe.join(", ");
                const ie = oe.slice(0, N).join(", "), X = oe.length - N, ee = oe.join(", ");
                return /* @__PURE__ */ a(xt, { title: ee, placement: "top", children: /* @__PURE__ */ a("span", { children: `${ie} +${X}` }) });
              },
              children: M.map((L) => /* @__PURE__ */ a(qe, { value: L.value, children: o(L.label, s) }, L.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const Q = e.type, H = h[Q], j = l(Q === "date", !1, d.dateTime), _ = Q === "dateTime" ? Uo : Ho;
        let W = null;
        if (c) {
          const L = ae(c);
          W = L.isValid() ? L : null;
        }
        return /* @__PURE__ */ a(Vn, { dateAdapter: zn, children: /* @__PURE__ */ a(
          _,
          {
            label: o(v, s),
            format: j,
            value: W,
            onChange: (L) => {
              !L || !L.isValid() ? g(null) : g(L.format(H));
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
            onChange: (L) => g(L.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, tr = ur(Oe)({
  margin: "6px"
}), ul = ur(Za)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), dl = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: n,
    isReadOnly: o,
    canAdd: s,
    forAssignment: l,
    showAddIcon: d,
    onAdd: h,
    selectionApi: C,
    rowSelectionModel: y,
    selectAll: m,
    available: c,
    onAssign: g,
    assigned: w,
    onUnassign: x,
    effectivePermissions: u,
    clearFilters: i,
    handleExport: S,
    preferenceKey: v,
    apiRef: k,
    tTranslate: M,
    tOpts: E,
    filterModel: N,
    setFilterModel: Q,
    onPreferenceChange: H,
    toolbarItems: j,
    gridColumns: _,
    customExportOptions: W
  } = e, L = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), xe = ($) => $ != null && $ !== "" && !(Array.isArray($) && $.length === 0), ie = (($ = []) => $.filter(
    (we) => ["isEmpty", "isNotEmpty"].includes(we.operator) || xe(we.value)
  ))(N?.items || []).length || 0, X = _?.filter(($) => $.toolbarFilter) || [], ee = t?.lookups || {}, de = t?.records || [];
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
              M(r.gridSubTitle, E)
            ] }),
            n && r.showPreferenceInHeader && /* @__PURE__ */ D(Lt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              M("Applied Preference", E),
              ": ",
              n
            ] }),
            (o || !s && !l) && /* @__PURE__ */ D(Lt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !s || o ? "" : r.title
            ] }),
            !l && s && !o && /* @__PURE__ */ a(tr, { startIcon: d ? /* @__PURE__ */ a(Br, {}) : null, onClick: h, size: "medium", variant: "contained", children: M(L, E) }),
            !!e.headerActions && e.headerActions,
            C.length && de.length ? /* @__PURE__ */ a(
              tr,
              {
                onClick: m,
                size: "medium",
                variant: "contained",
                children: y.ids.size === de.length ? M("Deselect All", E) : M("Select All", E)
              }
            ) : /* @__PURE__ */ a(be, {}),
            c && /* @__PURE__ */ a(tr, { startIcon: d ? /* @__PURE__ */ a(Br, {}) : null, onClick: g, size: "medium", variant: "contained", children: M("Assign", E) }),
            w && /* @__PURE__ */ a(tr, { startIcon: d ? /* @__PURE__ */ a($o, {}) : null, onClick: x, size: "medium", variant: "contained", children: M("Remove", E) })
          ] }),
          /* @__PURE__ */ D(ul, { ...e, children: [
            u.showColumnsOrder && /* @__PURE__ */ a(
              Qa,
              {
                render: ($) => /* @__PURE__ */ a(
                  Oe,
                  {
                    ...$,
                    startIcon: /* @__PURE__ */ a(zo, {}),
                    size: "small",
                    variant: "text",
                    children: M("COLUMNS", E)
                  }
                )
              }
            ),
            u.filter && /* @__PURE__ */ D(be, { children: [
              /* @__PURE__ */ a(
                Xa,
                {
                  render: ($) => /* @__PURE__ */ a(
                    Oe,
                    {
                      ...$,
                      startIcon: /* @__PURE__ */ a(wo, { badgeContent: ie, color: "primary", children: /* @__PURE__ */ a(Go, {}) }),
                      size: "small",
                      variant: "text",
                      children: M("FILTERS", E)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Oe, { startIcon: /* @__PURE__ */ a(Vo, {}), onClick: i, size: "small", children: M("CLEAR FILTER", E) })
            ] }),
            u.export && /* @__PURE__ */ a(ll, { handleExport: S, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, customExportOptions: W, tTranslate: M, tOpts: E }),
            j,
            v && /* @__PURE__ */ a(
              ol,
              {
                gridRef: k,
                preferenceKey: v,
                onPreferenceChange: H,
                t: M,
                tOpts: E
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Pe, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: X.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: X.map(($) => /* @__PURE__ */ a(
      cl,
      {
        column: $,
        filterModel: N,
        setFilterModel: Q,
        lookupData: ee,
        tTranslate: M,
        tOpts: E
      },
      $.field
    )) }) })
  ] });
};
function zt(e) {
  const { t: r, i18n: t } = cr(), n = ut.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((s) => s);
  return { translate: r, i18n: t, tOpts: n, tTranslate: o };
}
const pl = 50, fl = /(\w+)( ASC| DESC)?/i, hl = 6e4, ml = 0, gl = 1e6, Ne = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, bl = {
  article: /* @__PURE__ */ a(io, {}),
  edit: /* @__PURE__ */ a(Rn, {}),
  copy: /* @__PURE__ */ a(oo, {}),
  delete: /* @__PURE__ */ a(Bn, {}),
  history: /* @__PURE__ */ a(qo, {}),
  download: /* @__PURE__ */ a(Yo, {})
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
}, ta = ["isEmpty", "isNotEmpty"], yl = (e) => e, Cl = (e) => (e || []).filter((r) => ta.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), xl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], wl = (e) => e.value ? /* @__PURE__ */ a(To, { style: { color: "green" } }) : /* @__PURE__ */ a(Or, { style: { color: "gray" } }), vn = ur("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), vl = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const n = no(), o = e.row[t], l = In(n, ao)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    Wn,
    {
      onClick: (h) => {
        h.stopPropagation(), r({ row: e.row });
      },
      checked: l,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, Dn = An(({
  model: e,
  columns: r,
  api: t,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: s,
  parent: l,
  where: d,
  title: h,
  showPageTitle: C,
  permissions: y,
  selected: m,
  assigned: c,
  available: g,
  disableCellRedirect: w = !1,
  onAssignChange: x,
  customStyle: u,
  onCellClick: i,
  showRowsSelected: S,
  showFullScreenLoader: v,
  customFilters: k,
  onRowDoubleClick: M,
  onRowClick: E = () => {
  },
  gridStyle: N,
  reRenderKey: Q,
  additionalFilters: H,
  onCellDoubleClickOverride: j,
  onAddOverride: _,
  dynamicColumns: W,
  toolbarItems: L,
  readOnly: xe = !1,
  onListParamsChange: oe,
  apiRef: ie,
  baseFilters: X,
  customExportOptions: ee,
  sx: de,
  ...$
}) => {
  const [we, F] = B({ pageSize: pl, page: 0 }), [A, te] = B({ recordCount: 0, records: null, lookups: {} }), z = !!x, re = S, [le, nt] = B({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [pt, ft] = B(!1), [je, St] = B(null), Ft = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [Gt, ht] = B(!1), me = Dt(), Pt = e.paginationMode === Y.client ? Y.client : Y.server, { translate: Et, tOpts: p } = zt(e), [mt, ve] = B(""), [Je, Ee] = B(il(n || e.defaultSort, Y, fl)), At = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (At.items = [], e.defaultFilters.forEach((b) => {
    At.items.push(b);
  }));
  const [Re, Ae] = B({ ...At }), { navigate: De, getParams: jt, useParams: Te, pathname: Wt } = Wr(), { id: pr } = Te() || jt, Tt = pr?.split("-")[0], Se = ie || Mn(), { idProperty: pe = "id", showHeaderFilters: It = !0, disableRowSelectionOnClick: fr = !0, hideTopFilters: Mt = !0, updatePageTitle: Ut = !0, isElasticScreen: gt = !1, navigateBack: hr = !1, selectionApi: Ze = {}, debounceTimeOut: mr = 300, showFooter: G = !0, disableRowGrouping: Fe = !0 } = e, Z = e.readOnly === !0 || xe, We = e.allowDoubleClick === !1, Le = nr(A), Ie = nr(null);
  fe(() => () => {
    Ie.current?.abort(), Ie.current = null;
  }, []);
  const Ht = e.showAddIcon === !0, Ot = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: Qe, formatDate: Bt, getApiEndpoint: gr, buildUrl: bt, setPageTitle: br } = Ge(), [ia, qt] = B(!1), { timeZone: us } = Qe, at = U(() => ({ ...Y.permissions, ...e.permissions, ...y }), [e.permissions, y]), Hr = ["isEmpty", "isNotEmpty", "isAnyOf"], la = Qe.userData || {}, Yt = e.columns.find((b) => b.type === "fileUpload")?.field || "", sa = { add: at.add, edit: at.edit, delete: at.delete }, { canAdd: qr, canEdit: Yr, canDelete: Kr } = Xn({ userData: la, model: e, userDefinedPermissions: sa }), f = U(() => e.tTranslate ?? yl, [e.tTranslate]), { addUrlParamKey: Kt, searchParamKey: Rt, hideBreadcrumb: ca = !1, tableName: _r, showHistory: Jr = !0, hideBreadcrumbInGrid: ua = !1, breadcrumbColor: da, disablePivoting: pa = !1, columnHeaderHeight: fa = 70, disablePagination: Zr = !1 } = e, Qr = e.gridTitle || e.title, kt = gr("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, Xe = new URLSearchParams(window.location.search), [Xr, ha] = B(null), [en, ma] = B(!kt), $e = t || e.api, [yr, Cr] = B(null), ga = U(() => new Set(yr ? [yr] : []), [yr]), ba = typeof e.getDetailPanelContent == "function", [ya, xr] = B([]);
  fe(() => {
    Se.current && (Se.current.prefKey = kt);
  }, [Se, kt]);
  const tn = T((b) => {
    ha(b), ma(!0);
  }, []), Ca = U(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? f(b.headerName, p) : b.headerName
  })) : [], [e.columnGroupingModel, p, Et, f]);
  fe(() => {
    Array.isArray($.rowGroupingField) ? xr($.rowGroupingField) : xr([]);
  }, [$.rowGroupingField]);
  const wr = Xe.has("baseData") && Xe.get("baseData"), rn = U(() => {
    if (wr)
      try {
        const b = JSON.parse(wr);
        if (typeof b === Y.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [wr]), xa = T(({ row: b }) => {
    const I = b[pe];
    nt((O) => {
      const P = new Set(O?.ids || []);
      return P.has(I) ? P.delete(I) : P.add(I), { type: "include", ids: P };
    });
  }, [pe]), nn = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b, I, O) => Bt({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: Qe.dateTime }),
      filterOperators: Tr({ columnType: "date", label: f("Value", p) })
    },
    dateTime: {
      valueFormatter: (b, I, O) => Bt({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Qe.dateTime }),
      filterOperators: Tr({ columnType: "dateTime", label: f("Value", p) })
    },
    boolean: {
      renderCell: wl
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ a(vl, { params: b, handleSelectRow: xa, idProperty: pe })
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
    const b = Object.entries(k).reduce((I, [O, P]) => (O === Y.startDate || O === Y.endDate ? I.push(P) : O in k && I.push({ field: O, value: P, operator: "equals", type: "string" }), I), []);
    Ae({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [k]);
  const wa = T(({ field: b, lookupMap: I }) => (Le.current.lookups || {})[(I || {})[b]?.lookup] || [], []);
  fe(() => {
    $.isChildGrid;
  }, [$.isChildGrid, Mt]);
  const an = T(
    ({ key: b, title: I, icon: O, color: P = "primary", disabled: R, otherProps: K }) => /* @__PURE__ */ a(
      Ir,
      {
        icon: /* @__PURE__ */ a(xt, { title: f(I, p), children: bl[O] || O || f(I, p) }),
        "data-action": b,
        label: f(I, p),
        color: P,
        disabled: R,
        ...K
      },
      b
    ),
    [Et, p, f]
  ), { customActions: _t = [] } = e, Jt = U(() => {
    const b = [];
    return !z && !Z && b.push(
      {
        key: Ne.Edit,
        title: "Edit",
        icon: "edit",
        show: !!Yr,
        disabled: (I) => I.canEdit === !1
      },
      {
        key: Ne.Copy,
        title: "Copy",
        icon: "copy",
        show: !!at.copy
      },
      {
        key: Ne.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Kr
      },
      {
        key: Ne.History,
        title: "History",
        icon: "history",
        show: !!Jr
      },
      ..._t
    ), b.push({
      key: Ne.Download,
      title: "Download document",
      icon: "download",
      show: Yt.length > 0
    }), b.filter(({ show: I }) => I !== !1);
  }, [
    z,
    Z,
    Yr,
    Kr,
    Jr,
    at.copy,
    Yt.length,
    _t
  ]), va = T(
    ({ row: b }) => Jt.map(
      ({ key: I, title: O, icon: P, color: R, disabled: K, show: V, action: J, ...se }) => an({
        key: I,
        title: O || J,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: P,
        color: R,
        disabled: K?.(b),
        otherProps: se
      })
    ),
    [Jt, an]
  ), { gridColumns: ye, pinnedColumns: on, lookupMap: vr } = U(() => {
    let b = r || e.gridColumns || e.columns;
    W && (b = [...W, ...b]);
    const I = { left: [eo.field], right: [] }, O = [], P = {}, R = { ...nn, ...e.gridColumnTypes };
    for (const V of b) {
      if (V.gridLabel === null || l && V.lookup === l || V.type === Y.oneToMany && V.countInList === !1) continue;
      const J = {};
      if (V.type === Y.oneToMany && (J.type = "number", J.field = V.field.replace(/s$/, "Count")), R[V.type] && Object.assign(J, R[V.type]), J.valueOptions === Y.lookup || V.type === Y.boolean) {
        let ce = [];
        J.valueOptions === Y.lookup && (J.valueOptions = (q) => wa({ ...q, lookupMap: P }), ce = [...Tn(), ...to()].filter((q) => ["is", "not", "isAnyOf"].includes(q.value))), V.type === Y.boolean && (ce = ro()), J.filterOperators = ce.map((ne) => ({
          ...ne,
          InputComponent: ne.InputComponent ? (q) => /* @__PURE__ */ a(
            tl,
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
              tOpts: p
            }
          ) : void 0
        }));
      }
      if ((V.linkTo || V.link) && (J.cellClassName = "mui-grid-linkColumn"), V.hyperlinkURL && !V.renderCell) {
        const { hyperlinkURL: ce, hyperlinkIndex: ne } = V;
        J.renderCell = (q) => {
          const { value: ue, formattedValue: Qt, row: Xt } = q;
          if (ue == null || ue === "") return ue;
          const et = ne ? Xt[ne] : ue, Nt = ce.replace("{0}", encodeURIComponent(String(et)));
          return /* @__PURE__ */ a("a", { href: Nt, rel: "noopener noreferrer", target: "_blank", children: Qt ?? ue });
        };
      }
      Fe || (J.groupable = V.groupable ?? !1);
      const se = f((typeof V.gridLabel == "function" ? V.gridLabel({ column: V, t: f, tOpts: p }) : V.gridLabel) || V.label, p);
      O.push({ ...V, ...J, headerName: se, description: se }), V.pinned && I[V.pinned === Y.right ? Y.right : Y.left].push(V.field), P[V.field] = V;
    }
    let K = e.standard;
    return K === !0 && (K = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), K && typeof K === Y.object && xl.forEach(({ key: V, field: J, type: se, header: ce }) => {
      if (K[V] === !0) {
        const ne = { field: J, type: se, headerName: f(ce, p), width: 200 };
        se === Y.dateTime && (ne.filterOperators = Tr({ columnType: "dateTime" }), ne.valueFormatter = nn.dateTime.valueFormatter, ne.localize = !0), O.push(ne);
      }
    }), Jt.length && (O.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? Y.defaultActionWidth) * Jt.length,
      hidable: !1,
      getActions: va,
      headerName: f("Actions", p)
    }), I.right.push("actions")), { gridColumns: O, pinnedColumns: I, lookupMap: P };
  }, [r, e, l, y, z, W, Et, Qe?.dateTime]), Dr = nr(!1);
  fe(() => {
    if (Dr.current) return;
    const b = ye?.filter((P) => P.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (Re.items.some(
      (P) => b.some((R) => R.field === P.field)
    )) {
      Dr.current = !0;
      return;
    }
    const O = b.map((P) => {
      const R = ea(P.type, P.toolbarFilter?.defaultOperator), K = ze.normalizeFilterValue({
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
    O.length > 0 && Ae((P) => ({
      ...P,
      items: [...P.items, ...O]
    })), Dr.current = !0;
  }, [ye]);
  const Ve = T(async ({ action: b = "list", extraParams: I = {}, isPivotExport: O = !1, contentType: P, columns: R } = {}) => {
    const { pageSize: K, page: V } = we, J = !!P, se = bt(O ? e.pivotApi : $e), ce = {
      ...Re,
      items: Cl(Re.items)
    }, ne = Array.isArray(X) ? [...X] : [];
    e.joinColumn && Tt && ne.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Tt) }), H && (ce.items = [...ce.items || [], ...H]);
    const q = [];
    Array.isArray(ne) && q.push(...ne), Array.isArray(s) && q.push(...s);
    const ue = {
      ...I,
      ...$.extraParams
      // Merge any custom params passed via component props
    };
    if ((c || g) && (ue[c ? "include" : "exclude"] = Array.isArray(m) ? m.join(",") : m), O && (e.exportTemplate && (ue.template = e.exportTemplate), e.configFileName && (ue.configFileName = e.configFileName)), !(!ce.items.length || ce.items.every((Ue) => "value" in Ue && Ue.value !== void 0))) return;
    let Xt = null, et = null;
    J || (Ie.current && Ie.current.abort(), et = new AbortController(), Ie.current = et, Xt = et.signal);
    const Nt = {
      action: b,
      page: J ? ml : V,
      pageSize: J ? gl : K,
      sortModel: Je,
      filterModel: ce,
      gridColumns: ye,
      model: e,
      baseFilters: q,
      api: se,
      extraParams: ue
    };
    typeof oe == "function" && oe(Nt), Se.current.listParams = Nt, J || qt(!0);
    try {
      const Ue = await Rr({ ...Nt, contentType: P, columns: R, signal: Xt });
      if (!J && Ue !== void 0 && Ie.current === et) {
        if (Ue?.aborted) return;
        te(Ue);
      }
    } catch (Ue) {
      if (Ue?.aborted || Ue?.name === "AbortError" || et?.signal?.aborted) return;
      me.showError(f("An error occurred while fetching data", p)), J || te(($a) => ({ ...$a, records: [], recordCount: 0 }));
    } finally {
      !J && Ie.current === et && qt(!1);
    }
  }, [we, bt, e, $e, Re, X, Tt, c, g, m, $.extraParams, Je, ye, s, oe, Se, Rr, me, H, f, p]), ot = T(async ({ id: b, record: I = {}, mode: O }) => {
    if (o) {
      try {
        const R = bt($e), K = await or({ id: b, api: R, model: e, parentFilters: s, where: d });
        o(K);
      } catch {
        me.showError(f("Could not load record", p));
      }
      return;
    }
    let P = Wt;
    P.endsWith("/") || (P += "/"), O === "copy" ? P += "0-" + b : P += b, Kt && (Xe.set(Kt, I[Kt]), P += `?${Xe.toString()}`), De(P);
  }, [o, $e, e, s, d, Wt, Kt, Xe, De, or, bt, me, f, p]), ln = T(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), Da = T(async (b, I, O) => {
    let P = b.field === e.linkColumn ? Ne.Edit : null;
    if (!P && b.field === Y.actions && (P = O?.action, !P)) {
      const se = I.target.closest("button");
      se && (P = se.dataset.action);
    }
    const { row: R } = b;
    if (!Z) {
      if (i && typeof await i({ cellParams: b, event: I, details: O }) !== Y.boolean)
        return;
      const se = vr[b.field] || {};
      if (se.linkTo) {
        De({
          pathname: er.replaceTags(se.linkTo, R)
        });
        return;
      }
      switch (P) {
        case Ne.Edit:
          if (e.getDetailPanelContent) {
            const ne = R[pe];
            Cr((q) => q === ne ? null : ne);
            return;
          } else
            return ot({ id: R[pe], record: R });
        case Ne.Copy:
          return ot({ id: R[pe], mode: "copy" });
        case Ne.Delete:
          ft(!0), St({ name: R[e.linkColumn], id: R[pe] });
          break;
        case Ne.History:
          return De(`${gr("history")}?tableName=${_r}&id=${R[pe]}&breadCrumb=${Rt ? Xe.get(Rt) : Qr}`);
        default:
          const ce = _t.find((ne) => ne.action === P && typeof ne.onClick === Y.function);
          if (ce) {
            ce.onClick({ row: R, navigate: De });
            return;
          }
          break;
      }
    }
    if (P === Ne.Download && ln({ documentLink: R[Yt] }), !Ot.length)
      return;
    const { row: K } = b, V = vr[b.field] || {}, J = {
      pathname: er.replaceTags(V.linkTo, K)
    };
    e.addRecordToState && (J.state = K), De(J);
  }, [Z, i, vr, e, pe, Yt, De, Ot, _t, _r, Rt, Xe, Qr, gr, ln, ot]), Sa = T(async () => {
    const b = bt($e);
    try {
      await Gr({ id: je.id, api: b, model: e }), me.showMessage(f("Record Deleted Successfully.", p)), Ve();
    } catch (I) {
      me.showError(f("Delete failed", p), I.message);
    } finally {
      ft(!1);
    }
  }, [$e, je?.id, me, e, Ve, f, p]), sn = T(() => {
    ve(null), ft(!1);
  }, []), Fa = T((b) => (typeof $.processRowUpdate == "function" && $.processRowUpdate(b, A), b), [$.processRowUpdate, A]), Pa = T((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: I } = b;
    if (typeof j === Y.function) {
      j(b);
      return;
    }
    if (!Z && !We && !w && ot({ id: I[pe], record: I }), Z && e.rowRedirectLink) {
      const O = {
        pathname: er.replaceTags(e.rowRedirectLink, I)
      };
      e.addRecordToState && (O.state = I), De(O);
    }
    typeof M === Y.function && M(b);
  }, [j, Z, We, w, ot, pe, e.rowRedirectLink, e.addRecordToState, De, M, er]), Ea = T(async () => {
    if (le.ids.size < 1) {
      me.showError(f("Please select at least one record to proceed", p));
      return;
    }
    const b = Array.from(le.ids), I = new Map((A.records || []).map((R) => [R[pe], R]));
    let O = b.map((R) => ({ ...rn, ...I.get(R) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (O = O.map(
      (R) => Object.fromEntries(e.selectionUpdateKeys.map((K) => [K, R[K]]))
    ));
    const P = bt(Ze || $e);
    qt(!0);
    try {
      const R = await jr({
        id: 0,
        api: `${P}/updateMany`,
        values: { items: O },
        model: e
      });
      if (R) {
        Ve();
        const K = R.info ? R.info : f("Record Added Successfully.", p);
        me.showMessage(K);
      }
    } catch (R) {
      me.showError(R.message || f("An error occurred, please try after some time.", p));
    } finally {
      qt(!1), nt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), ht(!1);
    }
  }, [le.ids, me, A.records, pe, rn, e.selectionUpdateKeys, Ze, $e, e, Ve, f, p]), cn = T(() => {
    if (Ze.length > 0) {
      if (le.ids.size > 0) {
        ht(!0);
        return;
      }
      me.showError(
        f("Please select at least one record to proceed", p)
      );
      return;
    }
    typeof _ === Y.function ? _() : ot({ id: 0 });
  }, [Ze, me, _, ot, le.ids.size, f, p]), un = T(() => {
    Re?.items?.length && Ae({ ...Y.gridFilterModel });
  }, [Re]), Zt = T(({ unassign: b, assign: I }) => {
    const O = Array.isArray(m) ? m : m.length ? m.split(",") : [], P = b ? O.filter((R) => !b.includes(parseInt(R))) : [...O, ...I];
    x(typeof m === Y.string ? P.join(",") : P);
  }, [m, x]), dn = T(() => {
    Zt({ assign: Array.from(le.ids) });
  }, [Zt, le.ids]), pn = T(() => {
    Zt({ unassign: Array.from(le.ids) });
  }, [Zt, le.ids]), fn = T(() => {
    const b = A.records || [];
    if (le.ids.size === b.length)
      nt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const O = b.map((P) => P[pe]);
      nt({
        type: "include",
        ids: new Set(O)
      });
    }
  }, [le, A.records, pe]), Aa = T((b) => b[pe], [pe]), hn = T((b) => {
    if (A?.recordCount > hl) {
      me.showMessage(f("Cannot export more than 60k records, please apply filters or reduce your results using filters", p));
      return;
    }
    const { orderedFields: I, columnVisibilityModel: O, lookup: P } = Se.current.state.columns, R = b.target.dataset.isPivotExport === "true", K = Object.keys(O).filter((q) => O[q] === !1), V = new Set(ye.filter((q) => q.exportable === !1).map((q) => q.field)), J = I.filter(
      (q) => !V.has(q) && !K.includes(q) && q !== "__check__" && q !== "actions"
    );
    if (J.length === 0) {
      me.showMessage(f("You cannot export while all columns are hidden... please show at least 1 column before exporting", p));
      return;
    }
    const se = {}, ce = Object.fromEntries(ye.map((q) => [q.field, q]));
    J.forEach((q) => {
      const ue = P[q], Qt = ce[q];
      se[q] = {
        field: q,
        width: ue.width,
        headerName: Qt?.headerName || ue.headerName || ue.field,
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
  }, [A?.recordCount, Se, ye, me, e, Ve, f, p]);
  fe(() => {
    !$e || !en || Ve();
  }, [$e, en, Ve]), fe(() => {
    if (!($.isChildGrid || z || !Ut))
      return br({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        br(null);
      };
  }, [br, e.pageTitle, e.title, $.isChildGrid, z, Ut]);
  const Ta = T((b) => {
    const { items: I } = b, O = I.map((P) => {
      const { field: R, operator: K, value: V } = P, se = (ye.find((ce) => ce.field === R) || {}).type === Y.Number;
      return ta.includes(K) ? { ...P, value: null } : se && V < 0 ? { ...P, value: null } : Hr.includes(K) || se && !isNaN(V) || !se ? (gt && ye.filter((ne) => ne.field === R)[0]?.isKeywordField && (P.filterField = `${P.field}.keyword`), { ...P }) : { ...P, value: se ? null : V };
    });
    Ae({ ...b, items: O });
  }, [ye, Y.Number, Hr, gt, Ae]), Ia = T((b) => {
    const I = b.map((O) => {
      const P = ye.filter((V) => V.field === O.field)[0] || {}, R = gt && P.isKeywordField, K = { ...O, filterField: R ? `${O.field}.keyword` : O.field };
      return P.dataIndex && (K.filterField = P.dataIndex), K;
    });
    Ee(I);
  }, [ye, gt, Ee]), mn = h || e.gridTitle || e.title, Ma = Rt ? [{ text: Xe.get(Rt) || mn }] : [{ text: mn }], Oa = T((b) => {
    Cr(b.size > 0 ? [...b].pop() : null);
  }, []), Ba = T((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      Cr(null), Ve();
    },
    t: f,
    tOpts: p
  }) : null, [e.getDetailPanelContent, Ve, f, p]), Ra = U(() => ({
    filterValueTrue: f("Yes", p),
    filterValueFalse: f("No", p),
    noRowsLabel: f("No data", p),
    footerTotalRows: `${f("Total rows", p)}:`,
    MuiTablePagination: {
      labelRowsPerPage: f("Rows per page", p),
      labelDisplayedRows: ({ from: b, to: I, count: O }) => `${b}–${I} ${f("of", p)} ${O}`
    },
    toolbarQuickFilterPlaceholder: f(e?.searchPlaceholder || "Search...", p),
    toolbarColumns: f("Columns", p),
    toolbarFilters: f("Filters", p),
    toolbarExport: f("Export", p),
    filterPanelAddFilter: f("Add filter", p),
    filterPanelRemoveAll: f("Remove all", p),
    filterPanelDeleteIconLabel: f("Delete", p),
    filterPanelColumns: f("Columns", p),
    filterPanelOperator: f("Operator", p),
    filterPanelValue: f("Value", p),
    filterPanelInputLabel: f("Value", p),
    filterPanelInputPlaceholder: f("Filter value", p),
    columnMenuLabel: f("Menu", p),
    columnMenuShowColumns: f("Show columns", p),
    columnMenuManageColumns: f("Manage columns", p),
    columnMenuFilter: f("Filter", p),
    columnMenuHideColumn: f("Hide column", p),
    columnMenuManagePivot: f("Manage pivot", p),
    toolbarColumnsLabel: f("Select columns", p),
    toolbarExportLabel: f("Export", p),
    pivotDragToColumns: f("Drag here to pivot by", p),
    pivotDragToRows: f("Drag here to group by", p),
    pivotDragToValues: f("Drag here to create values", p),
    pivotColumns: f("Pivot columns", p),
    pivotRows: f("Row groups", p),
    pivotValues: f("Values", p),
    pivotMenuRows: f("Rows", p),
    pivotMenuColumns: f("Columns", p),
    pivotMenuValues: f("Values", p),
    pivotToggleLabel: f("Pivot", p),
    pivotSearchControlPlaceholder: f("Search pivot columns", p),
    columnMenuUnsort: f("Unsort", p),
    columnMenuSortAsc: f("Sort by ascending", p),
    columnMenuSortDesc: f("Sort by descending", p),
    columnMenuUnpin: f("Unpin", p),
    columnsPanelTextFieldLabel: f("Find column", p),
    columnsPanelTextFieldPlaceholder: f("Column title", p),
    columnsPanelHideAllButton: f("Hide all", p),
    columnsPanelShowAllButton: f("Show all", p),
    pinToLeft: f("Pin to left", p),
    pinToRight: f("Pin to right", p),
    unpin: f("Unpin", p),
    filterValueAny: f("any", p),
    filterOperatorIs: f("is", p),
    filterOperatorNot: f("is not", p),
    filterOperatorIsAnyOf: f("is any of", p),
    filterOperatorContains: f("contains", p),
    filterOperatorDoesNotContain: f("does not contain", p),
    filterOperatorEquals: f("equals", p),
    filterOperatorDoesNotEqual: f("does not equal", p),
    filterOperatorStartsWith: f("starts with", p),
    filterOperatorEndsWith: f("ends with", p),
    filterOperatorIsEmpty: f("is empty", p),
    filterOperatorIsNotEmpty: f("is not empty", p),
    filterOperatorAfter: f("is after", p),
    filterOperatorOnOrAfter: f("is on or after", p),
    filterOperatorBefore: f("is before", p),
    filterOperatorOnOrBefore: f("is on or before", p),
    toolbarFiltersTooltipHide: f("Hide filters", p),
    toolbarFiltersTooltipShow: f("Show filters", p),
    //filter textfield labels
    headerFilterOperatorContains: f("contains", p),
    headerFilterOperatorEquals: f("equals", p),
    headerFilterOperatorStartsWith: f("starts with", p),
    headerFilterOperatorEndsWith: f("ends with", p),
    headerFilterOperatorIsEmpty: f("is empty", p),
    headerFilterOperatorIsNotEmpty: f("is not empty", p),
    headerFilterOperatorAfter: f("is after", p),
    headerFilterOperatorOnOrAfter: f("is on or after", p),
    headerFilterOperatorBefore: f("is before", p),
    headerFilterOperatorOnOrBefore: f("is on or before", p),
    headerFilterOperatorIs: f("is", p),
    "headerFilterOperator=": f("equals", p),
    "headerFilterOperator!=": f("does not equal", p),
    "headerFilterOperator>": f("greater than", p),
    "headerFilterOperator>=": f("greater than or equal to", p),
    "headerFilterOperator<": f("less than", p),
    "headerFilterOperator<=": f("less than or equal to", p),
    columnsManagementSearchTitle: f("Search", p),
    columnsManagementNoColumns: f("No columns", p),
    paginationRowsPerPage: f("Rows per page", p),
    paginationDisplayedRows: ({ from: b, to: I, count: O }) => `${b}–${I} ${f("of", p)} ${O}`,
    toolbarQuickFilterLabel: f("Search", p),
    toolbarFiltersTooltipActive: (b) => `${b} ${f(b === 1 ? "active filter" : "active filters", p)}`,
    columnHeaderSortIconLabel: f("Sort", p),
    filterPanelOperatorAnd: f("And", p),
    filterPanelOperatorOr: f("Or", p),
    noResultsOverlayLabel: f("No results found", p),
    columnHeaderFiltersTooltipActive: (b) => `${b} ${f(b === 1 ? "active filter" : "active filters", p)}`,
    detailPanelToggle: f("Detail panel toggle", p),
    checkboxSelectionHeaderName: f("Checkbox selection", p),
    columnsManagementShowHideAllText: f("Show/Hide all", p),
    noColumnsOverlayLabel: f("No columns", p),
    noColumnsOverlayManageColumns: f("Manage columns", p),
    columnsManagementReset: f("Reset", p),
    groupColumn: (b) => `${f("Group by", p)} ${b}`,
    unGroupColumn: (b) => `${f("Ungroup", p)} ${b}`,
    footerRowSelected: (b) => {
      const I = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${f(I, p)}`;
    }
  }), [f, p, e?.searchPlaceholder]), ka = U(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: A,
      currentPreference: Xr,
      isReadOnly: Z,
      canAdd: qr,
      forAssignment: z,
      showAddIcon: Ht,
      onAdd: cn,
      selectionApi: Ze,
      rowSelectionModel: le,
      selectAll: fn,
      available: g,
      onAssign: dn,
      assigned: c,
      onUnassign: pn,
      effectivePermissions: at,
      clearFilters: un,
      handleExport: hn,
      preferenceKey: kt,
      apiRef: Se,
      gridColumns: ye,
      tTranslate: f,
      tOpts: p,
      idProperty: pe,
      filterModel: Re,
      setFilterModel: Ae,
      onPreferenceChange: tn,
      toolbarItems: L,
      headerActions: $.headerActions,
      customExportOptions: ee
    },
    footer: {
      pagination: Zr !== !0,
      apiRef: Se,
      tTranslate: f,
      tOpts: p
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: f("Go to previous page", p),
        "aria-label": f("Go to previous page", p)
      },
      nextIconButtonProps: {
        title: f("Go to next page", p),
        "aria-label": f("Go to next page", p)
      }
    }
  }), [e, A, Xr, Z, qr, z, Ht, cn, Ze, le, fn, g, dn, c, pn, at, un, hn, kt, Se, ye, f, p, pe, Re, Ae, tn, L, $.headerActions, ee]), Na = U(() => ({
    columns: {
      columnVisibilityModel: Ft
    },
    pinnedColumns: on
  }), [Ft, on]), La = U(() => ({
    headerFilterMenu: !1,
    toolbar: dl,
    footer: Pi
  }), []);
  return /* @__PURE__ */ D(be, { children: [
    C !== !1 && /* @__PURE__ */ a(
      Qn,
      {
        navigate: De,
        showBreadcrumbs: !ca && !ua,
        breadcrumbs: Ma,
        enableBackButton: hr,
        breadcrumbColor: da,
        model: e
      }
    ),
    /* @__PURE__ */ D(Pe, { style: N || u, children: [
      /* @__PURE__ */ a(Pe, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        On,
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
          loading: !A.records || ia,
          className: "pagination-fix",
          onCellClick: Da,
          onCellDoubleClick: Pa,
          columns: ye,
          paginationModel: we,
          pageSizeOptions: Y.pageSizeOptions,
          onPaginationModelChange: F,
          pagination: !Zr,
          rowCount: A.recordCount,
          rows: A.records || [],
          sortModel: Je,
          paginationMode: Pt,
          sortingMode: Pt,
          filterMode: Pt,
          processRowUpdate: Fa,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Ia,
          onFilterModelChange: Ta,
          rowSelectionModel: le,
          onRowSelectionModelChange: nt,
          filterModel: Re,
          getRowId: Aa,
          onRowClick: E,
          slots: La,
          slotProps: ka,
          hideFooterSelectedRowCount: re,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Se,
          disableAggregation: !0,
          disableRowGrouping: Fe,
          disableRowSelectionOnClick: fr,
          disablePivoting: pa,
          filterDebounceMs: mr,
          initialState: Na,
          ...ba && {
            getDetailPanelContent: Ba,
            detailPanelExpandedRowIds: ga,
            onDetailPanelExpandedRowIdsChange: Oa
          },
          localeText: Ra,
          showToolbar: !0,
          columnHeaderHeight: fa,
          hideFooter: !G,
          rowGroupingModel: ya,
          onRowGroupingModelChange: (b) => xr(b),
          getRowClassName: $.getRowClassName,
          columnGroupingModel: Ca
        }
      ) }),
      mt && /* @__PURE__ */ D(Ke, { open: !!mt, onConfirm: sn, onCancel: sn, title: "Info", hideCancelButton: !0, children: [
        " ",
        mt
      ] }),
      pt && !mt && /* @__PURE__ */ a(Ke, { open: pt, onConfirm: Sa, onCancel: () => ft(!1), title: f("Confirm Delete", p), okText: f("Ok", p), cancelText: f("Cancel", p), children: /* @__PURE__ */ D(vn, { children: [
        f("Are you sure you want to delete", p),
        " ",
        je.name && /* @__PURE__ */ a(xt, { style: { display: "inline" }, title: je.name, arrow: !0, children: je.name.length > 30 ? `${je.name.slice(0, 30)}...` : je.name }),
        " ?"
      ] }) }),
      Gt && /* @__PURE__ */ a(
        Ke,
        {
          open: Gt,
          onConfirm: Ea,
          onCancel: () => ht(!1),
          title: f("Confirm Add", p),
          okText: f("Ok", p),
          cancelText: f("Cancel", p),
          children: /* @__PURE__ */ D(vn, { children: [
            f("Are you sure you want to add", p),
            " ",
            le.ids.size,
            " ",
            f("records", { count: le.ids.size, ...p }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, sl), Dl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = (d) => {
    t.setFieldValue(r, d.target.checked);
  }, s = U(() => t.values[r] ?? !!e.defaultValue, [t, e]), l = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ a(
      Zo,
      {
        control: /* @__PURE__ */ a(
          Wn,
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
    sr,
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
function ra(e, r) {
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
const Sn = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, Sl = {
  outlined: So,
  filled: Do,
  standard: vo
}, Fl = () => /* @__PURE__ */ D(
  kn,
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
        ar.Increment,
        {
          render: /* @__PURE__ */ a($t, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ a(
            Qo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        ar.Decrement,
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
), Pl = ({ column: e, otherProps: r, formik: t, field: n, ...o }) => {
  const { min: s, max: l, readOnly: d, precision: h } = e, C = vt(), y = U(
    () => Sn({ value: s, state: t.values }),
    [s, t.values]
  ), m = U(
    () => Sn({ value: l, state: t.values }),
    [l, t.values]
  ), c = U(() => t.values[n] ?? null, [t.values[n]]), [g, w] = B(c), x = ra(g, 400);
  fe(() => {
    x !== c && t.setFieldValue(n, x);
  }, [x]), fe(() => {
    c !== g && w(c);
  }, [c]);
  const u = (N) => {
    w(N);
  }, i = (N) => {
    t.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(N);
  }, S = Va(), v = `number-field-${n}-${S}`, k = e.variant || "standard", M = Sl[k], E = U(() => {
    if (h !== void 0)
      return {
        maximumFractionDigits: h
      };
  }, [h]);
  return /* @__PURE__ */ D(
    ar.Root,
    {
      value: g,
      onValueChange: u,
      min: y,
      max: m,
      disabled: d,
      format: E,
      render: (N, Q) => /* @__PURE__ */ a(
        Ct,
        {
          fullWidth: !0,
          ref: N.ref,
          error: t.touched[n] && !!t.errors[n],
          sx: d ? {
            backgroundColor: C.palette?.action?.disabled
          } : void 0,
          children: N.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          ar.Input,
          {
            render: (N, Q) => /* @__PURE__ */ a(
              M,
              {
                id: v,
                inputRef: N.ref,
                value: Q.inputValue,
                onChange: N.onChange,
                onBlur: (H) => {
                  N.onBlur(H), i(H);
                },
                inputProps: {
                  ...N,
                  "aria-describedby": t.touched[n] && t.errors[n] ? `${v}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(Fl, {}),
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
}, El = ({ otherProps: e, ...r }) => {
  const [t, n] = ut.useState(!1), o = () => n((h) => !h), s = (h) => {
    h.preventDefault();
  }, { readOnly: l = !1, disabled: d = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: l,
      disabled: d,
      endAdornment: /* @__PURE__ */ a(kn, { position: "end", children: /* @__PURE__ */ a(
        $t,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: s,
          edge: "end",
          disabled: d,
          readOnly: l,
          size: "large",
          children: t ? /* @__PURE__ */ a(Xo, {}) : /* @__PURE__ */ a(ei, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(kr, { otherProps: e, ...r });
}, Al = ({ column: e, field: r, formik: t, otherProps: n, fieldConfigs: o = {}, mode: s }) => {
  const l = s !== "copy" && o.disabled, { systemDateTimeFormat: d, stateData: h } = Ge(), C = U(() => t.values[r] ? ae(t.values[r]) : null, [t.values[r]]), y = e.minField ? t.values[e.minField] : void 0, m = e.maxField ? t.values[e.maxField] : void 0, c = U(() => e.min ? ae(e.min) : e.minField && y ? ae(y) : null, [e.min, e.minField, y]), g = U(() => e.max ? ae(e.max) : e.maxField && m ? ae(m) : null, [e.max, e.maxField, m]), w = T((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const i = ae(x).hour(12).toISOString();
    t.setFieldValue(r, i);
  }, [r, t]);
  return /* @__PURE__ */ Lr(
    Ln,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: d(!0, !1, h.dateTime),
      name: r,
      value: C,
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
ae.extend(Nn);
const Tl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: s } = Ge(), l = U(() => {
    const d = t.values[r];
    return d ? ae(d) : null;
  }, [t.values[r], e]);
  return /* @__PURE__ */ Lr(
    $n,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, s.dateTime),
      name: r,
      value: l,
      onChange: (d) => {
        d ? e.localize ? t.setFieldValue(r, d.toISOString()) : t.setFieldValue(r, d.utcOffset(0, !0).toISOString()) : t.setFieldValue(r, null);
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
const Il = ({ column: e, field: r, formik: t, otherProps: n }) => {
  let o = t.values[r];
  return !e.localize && o && (o = ae.utc(o).utcOffset(ae().utcOffset(), !0).format()), /* @__PURE__ */ Lr(
    ti,
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
}, Ml = [null, void 0, ""];
function na({ column: e, formik: r, lookups: t, dependsOn: n = [], isAutoComplete: o = !1, userSelected: s, model: l }) {
  const [d, h] = B([]), { buildUrl: C } = Ge(), y = Dt(), m = C(l.api), c = U(() => {
    const x = {};
    if (!n.length) return x;
    for (const u of n)
      x[u] = r.values[u];
    return x;
  }, n.map((x) => r.values[x])), g = U(() => n.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, n]), w = T(async () => {
    if (!e.lookup) return;
    if (!Object.values(c).every(
      (u) => !Ml.includes(u)
    )) {
      h([]);
      return;
    }
    try {
      const u = await _n({
        api: m,
        model: l,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: c }] }
        }
      });
      h(u);
    } catch (u) {
      y.showError("Could not load lookups", u.message);
    }
  }, [e.lookup, c, m, l, t, y]);
  return fe(() => {
    n.length ? w() : (o || !s.current) && h(g || []);
  }, [n.length, w, o, g]), d;
}
const Ol = ut.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], model: s, tTranslate: l, tOpts: d, ...h }) => {
  const C = ut.useRef(!1), { placeHolder: y } = e, m = na({ column: e, formik: t, lookups: n, dependsOn: o, userSelected: C, model: s }), c = vt(), g = U(() => {
    let i = t.values[r];
    if (!i && !C.current && e.defaultValue !== void 0) {
      const S = e.defaultValue;
      if (S != null && S !== "" && m && m.length) {
        const v = m.find((k) => String(k.value) === String(S));
        v && (i = v.value, t.setFieldValue(r, v.value));
      }
    }
    if (m?.length && !i && !e.multiSelect && "IsDefault" in m[0]) {
      const S = m.find((v) => v.IsDefault);
      S && (i = S.value, t.setFieldValue(r, S.value));
    }
    return e.multiSelect && (!i || i.length === 0 ? i = [] : Array.isArray(i) || (i = i.split(",").map((S) => parseInt(S)))), i;
  }, [t.values[r], m, e.multiSelect, r]), w = T((i) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: i.target.value, options: m, event: i, t: l, tOpts: d }), t.handleChange(i), C.current = !0;
  }, [t.values[r], e.onChange, m]), x = U(() => e.multiSelect ? Array.isArray(g) && g.length > 0 : g !== "" && g !== null && g !== void 0 && Array.isArray(m) && m.some((i) => String(i.value) === String(g)), [g, e.multiSelect, m]), u = T((i) => {
    i.stopPropagation();
    const S = e.multiSelect ? [] : "";
    t.setFieldValue(r, S), typeof e.onChange == "function" && e.onChange({ formik: t, value: S, options: m, event: i, t: l, tOpts: d }), C.current = !0;
  }, [e.multiSelect, r, t, e.onChange, m, l, d]);
  return /* @__PURE__ */ D(
    dr,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(ni, { children: y || "" }),
        /* @__PURE__ */ D(Pe, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ a(
            ai,
            {
              IconComponent: Un,
              ...h,
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
              children: Array.isArray(m) && m.map((i) => /* @__PURE__ */ a(jn, { value: i.value, disabled: i.isDisabled, children: i.label }, i.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ a(
            $t,
            {
              size: "small",
              onClick: u,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": l("Clear selection", d),
              children: /* @__PURE__ */ a(ri, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ a(dt, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), Fn = ur("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Bl = ({ component: e, name: r, formik: t, field: n, column: o }) => {
  const { value: s } = t.getFieldProps(r || n), { setFieldValue: l } = t, d = e || o.relation, h = T((C) => {
    l(r || n, C);
  }, [l, r, n]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ a(Fn, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(d, { selected: s, available: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(Fn, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(d, { selected: s, assigned: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Rl = ({ field: e, formik: r, orientation: t = "row", label: n, lookups: o, fieldConfigs: s = {}, mode: l, tTranslate: d, tOpts: h, ...C }) => {
  const y = (x) => {
    r.setFieldValue(e, x.target.value);
  }, m = o ? o[C.column.lookup] : [], c = vt(), g = r.touched[e] && !!r.errors[e], w = l !== "copy" && s.disabled;
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: g, children: /* @__PURE__ */ a(
      $r,
      {
        row: t === "row",
        "aria-label": n,
        name: e,
        value: r.values[e] ?? "",
        onChange: y,
        children: m?.map((x, u) => /* @__PURE__ */ a(
          ct,
          {
            value: x.value,
            control: /* @__PURE__ */ a(yt, {}),
            label: d(x.label, h),
            disabled: w || (C?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          u
        ))
      }
    ) }),
    g && /* @__PURE__ */ a(dt, { style: { color: c.palette.error.main }, children: r.errors[e] })
  ] });
}, kl = {
  limitTags: 5
}, Nl = Ye.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], fieldConfigs: s = {}, mode: l, model: d, ...h }) => {
  const C = na({ column: e, formik: t, lookups: n, dependsOn: o, model: d, isAutoComplete: !0 });
  let y = t.values[r] || [];
  Array.isArray(y) || (y = y.split(", ").map(Number));
  const m = C.filter((w) => y.includes(w.value)) || [], c = l !== "copy" && s.disabled, g = (w, x) => {
    let u = x?.map((i) => i.value) || [];
    e.dataFormat !== "array" && (u = u.length ? u.join(", ") : ""), t.setFieldValue(r, u);
  };
  return /* @__PURE__ */ D(
    dr,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ a(
          Hn,
          {
            ...h,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || kl.limitTags,
            options: C || [],
            getOptionLabel: (w) => w.label || "",
            defaultValue: m,
            renderInput: (w) => /* @__PURE__ */ a(sr, { ...w, variant: "standard" }),
            onChange: g,
            value: m,
            size: "small",
            disabled: c
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ a(dt, { children: t.errors[r] })
      ]
    },
    r
  );
}), Ll = "#182eb5", $l = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Vl = Fo(Po)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Ll : "#ffffff",
  border: `1px solid ${si[500]}`,
  color: r ? "white" : "black"
})), zl = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ a(
  Vl,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Gl = ({ name: e, field: r, formik: t, expired: n }) => {
  const { setFieldValue: o } = t, { value: s } = t.getFieldProps(e || r), l = "1000001", d = "0111110", h = "0".repeat(7), [C, y] = B(s || h), [m, c] = B(() => s ? s === l ? l : s === d ? d : "Custom" : ""), [g, w] = B(!1), x = T((S) => {
    if (Array.isArray(S)) {
      let v = h;
      for (const k of S)
        v = v.substring(0, k) + "1" + v.substring(k + 1);
      y(v), o(e || r, v), w(!0);
    } else {
      let v = g ? h : C;
      const k = v.slice(0, S) + (v[S] === "1" ? "0" : "1") + v.slice(S + 1);
      y(k), o(e || r, k), c("Custom"), w(!1);
    }
  }, [g, h, C, e, r, o]), u = vt(), i = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: i, children: /* @__PURE__ */ D(
      $r,
      {
        row: !0,
        name: e || r,
        value: m,
        onChange: (S) => {
          const v = S.target.value;
          c(v), v !== "Custom" ? (y(v), o(e || r, v), w(!0)) : (y(h), o(e || r, h), w(!1));
        },
        children: [
          /* @__PURE__ */ a(ct, { value: l, control: /* @__PURE__ */ a(yt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ a(ct, { value: d, control: /* @__PURE__ */ a(yt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(ct, { value: "Custom", control: /* @__PURE__ */ a(yt, {}), label: "Specific days" }),
          $l.map((S, v) => /* @__PURE__ */ a(
            zl,
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
    i && /* @__PURE__ */ a(dt, { style: { color: u.palette.error.main }, children: t.errors[r] })
  ] });
}, jl = ({ isAdd: e, column: r, field: t, formik: n, otherProps: o, fieldConfigs: s = {}, mode: l }) => {
  const d = vt();
  let h = n.values[t] || [];
  Array.isArray(h) || (h = h.split(",").map((c) => c.trim()));
  const C = Ye.useMemo(() => l === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: n }) : !!r.disabled, [l, s.disabled, r.disabled]), y = r.hasDefault && !e ? [h[0]] : [], m = T((c, g, w, x = {}) => {
    const u = g.pop()?.trim();
    g.includes(u) || g.push(u), y && y.includes(x.option) && w === "removeOption" && (g = [x.option]), r.dataFormat !== "array" && (g = g.length ? g.join(",") : ""), n.setFieldValue(t, g);
  }, [n, t]);
  return /* @__PURE__ */ D(
    dr,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[t] && !!n.errors[t],
      children: [
        /* @__PURE__ */ a(
          Hn,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: h,
            options: [],
            renderInput: (c) => /* @__PURE__ */ a(
              sr,
              {
                ...c,
                variant: "standard",
                InputProps: {
                  ...c.InputProps,
                  sx: {
                    ...c.InputProps?.sx,
                    ...C && { backgroundColor: d.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: m,
            size: "small",
            renderTags: (c, g) => c.map((w, x) => {
              const { key: u, ...i } = g({ index: x });
              return /* @__PURE__ */ a(
                ui,
                {
                  label: w,
                  ...i,
                  disabled: y.includes(w)
                },
                u
              );
            }),
            disabled: C
          }
        ),
        n.touched[t] && n.errors[t] && /* @__PURE__ */ a(dt, { children: n.errors[t] })
      ]
    },
    t
  );
}, Wl = (e = []) => {
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
  const l = n ? n[e.lookup] : [], d = Wl(l), h = t.values[r]?.length ? t.values[r].split(", ") : [];
  let C;
  return s !== "copy" && (C = o?.disabled), /* @__PURE__ */ a(_e, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    di,
    {
      selectedItems: h,
      onSelectedItemsChange: (m, c) => {
        t.setFieldValue(r, c?.join(", ") || "");
      },
      disabled: C,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((m) => /* @__PURE__ */ a(Cn, { itemId: m.value, label: m.label, children: m.children.map((c) => /* @__PURE__ */ a(Cn, { itemId: c.value, label: c.label }, c.value)) }, m.value))
    }
  ) });
}
const Hl = { maxLength: 500 }, { errorMapping: ql } = ze, Yl = 1024 * 1024;
function Kl({ column: e, field: r, formik: t }) {
  const n = t.values[r] || "", { getApiEndpoint: o } = Ge(), { maxSize: s, formats: l } = e, d = o("upload"), h = o("media"), C = o(), [y, m] = B({
    isExternal: "no",
    selectedFile: null
  }), [c, g] = B(!1), w = Dt(), { getParams: x, useParams: u } = Wr(), { associationId: i } = u() || x, S = i?.split("-")[0] || 1, v = (j) => {
    const _ = j.target.value;
    m({
      ...y,
      isExternal: _,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, k = (j) => {
    t.setFieldValue(r, j.target.value);
  }, M = (j) => {
    const _ = j.target.files[0];
    if (_) {
      if (s && _.size > s * Yl) {
        w.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(l) && !l.includes(_.type)) {
        w.showError(`Invalid file format. Allowed formats: ${l.join(", ")}.`);
        return;
      }
      m((W) => ({ ...W, selectedFile: _ }));
    }
  }, E = async () => {
    if (y.selectedFile) {
      g(!0);
      try {
        const j = new FormData();
        j.append("file", y.selectedFile), j.append("DocumentGroupId", t.values.DocumentGroupId), j.append("AssociationId", S);
        const W = (await Kn({
          method: "POST",
          url: d,
          data: j,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!W.success) {
          w.showError(W.message || "Upload failed");
          return;
        }
        const L = h + "/" + W.filePath;
        t.setFieldValue(r, L);
      } catch (j) {
        const _ = (j.message.match(/status code (\d{3})/) || [])[1];
        w.showError(ql[_]);
      } finally {
        g(!1);
      }
    }
  }, N = new URL(C, window.location.origin).hostname.toLowerCase();
  ut.useEffect(() => {
    m({
      ...y,
      isExternal: n.toLowerCase().includes(N) ? "no" : "yes"
    });
  }, [n, m]);
  const Q = t.values[r]?.length > (e.max || Hl.maxLength), H = Q ? "red" : "";
  return /* @__PURE__ */ D(Pe, { children: [
    /* @__PURE__ */ D(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Me, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ D(
        $r,
        {
          row: !0,
          value: y.isExternal,
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
      /* @__PURE__ */ a(Me, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ D(Pe, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        y.isExternal === "yes" ? /* @__PURE__ */ a(
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
        Q && /* @__PURE__ */ D(Me, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    y.isExternal === "no" && /* @__PURE__ */ D(Pe, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ D(
        lt,
        {
          variant: "outlined",
          component: "label",
          disabled: c,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: M })
          ]
        }
      ),
      y.selectedFile && /* @__PURE__ */ a(xt, { title: y.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Me, { variant: "body2", children: y.selectedFile.name.length > 20 ? `${y.selectedFile.name.substring(0, 20)}...` : y.selectedFile.name }) }),
      /* @__PURE__ */ a(
        lt,
        {
          variant: "contained",
          color: "primary",
          onClick: E,
          disabled: !y.selectedFile || c,
          children: c ? /* @__PURE__ */ a(Eo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const _l = ({ field: e, formik: r }) => {
  const [t, n] = Ye.useState({}), o = ra(t, 300);
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
  const s = (l, d) => {
    const h = { ...t, [l]: d };
    n(h);
  };
  return /* @__PURE__ */ a(
    dr,
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
              pi,
              {
                id: l,
                name: l,
                value: t[l],
                onChange: (d) => s(l, d.target.value),
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
}, Jl = {
  boolean: Dl,
  select: Ol,
  string: kr,
  number: Pl,
  password: El,
  date: Al,
  dateTime: Tl,
  time: Il,
  oneToMany: Bl,
  radio: Rl,
  autocomplete: Nl,
  dayRadio: Gl,
  email: kr,
  chipInput: jl,
  treeCheckbox: Ul,
  fileUpload: Kl,
  json: _l
}, Pn = { paddingTop: "2.5px", paddingBottom: "2.5px" }, aa = "20px", Zl = ci("span")({
  color: "red !important"
}), Ql = ({ tabColumns: e, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: d, mode: h, handleSubmit: C }) => {
  const [y, m] = Ye.useState(/* @__PURE__ */ new Set()), { tOpts: c, tTranslate: g } = zt(r), { activeStep: w, setActiveStep: x } = Ye.useContext(oa), u = {};
  for (let E = 0, N = r.columns.length; E < N; E++) {
    const { field: Q, skip: H } = r.columns[E];
    H && (u[H.step] = t.values[Q]);
  }
  const i = (E) => y.has(E) || u[E], S = () => {
    for (let E = w + 1; E < e.length; E++)
      if (!i(E))
        return !1;
    return !0;
  }, v = () => {
    let E = w + 1;
    for (; u[E]; )
      E++;
    m((N) => new Set(N).add(w)), E >= e.length || S() ? C() : x(E);
  }, k = () => {
    let E = w - 1;
    for (; u[E] && E > 0; )
      E--;
    x(E);
  };
  if (!e?.length)
    return null;
  const M = e[w];
  return /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(oi, { activeStep: w, sx: { marginBottom: "20px" }, children: e.map(({ title: E, key: N }, Q) => /* @__PURE__ */ a(ii, { completed: i(Q), children: /* @__PURE__ */ a(li, { children: /* @__PURE__ */ a(Me, { sx: { fontSize: "20px" }, children: g(E, c) }) }) }, N)) }),
    /* @__PURE__ */ D(Ye.Fragment, { children: [
      /* @__PURE__ */ a(Ur, { formElements: M.items, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: d, mode: h }),
      /* @__PURE__ */ D(_e, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        w !== 0 ? /* @__PURE__ */ a(Oe, { color: "inherit", disabled: w === 0, onClick: k, variant: "contained", sx: { mr: 2 }, children: g("Back", c) }) : null,
        /* @__PURE__ */ a(Oe, { onClick: v, variant: "contained", children: S() ? g("Finish", c) : g("Next", c) })
      ] })
    ] })
  ] });
}, Xl = ({ tabColumns: e, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: d, mode: h, isAdd: C }) => {
  const { tOpts: y, tTranslate: m } = zt(r);
  return e?.length ? /* @__PURE__ */ a(be, { children: e.map(({ key: c, title: g, items: w }, x) => /* @__PURE__ */ D(
    _e,
    {
      sx: {
        position: "relative",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        px: 3,
        pt: 3,
        pb: 2,
        mt: x === 0 ? 0 : aa
      },
      children: [
        /* @__PURE__ */ a(
          Me,
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
        /* @__PURE__ */ a(Ur, { isAdd: C, formElements: w, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: d, mode: h })
      ]
    },
    c
  )) }) : null;
}, Ur = ({ formElements: e, model: r, formik: t, data: n, onChange: o, combos: s, lookups: l, fieldConfigs: d, mode: h, isAdd: C }) => {
  const { tOpts: y, tTranslate: m } = zt(r);
  return e?.length ? /* @__PURE__ */ a(be, { children: e.map(({ Component: c, column: g, field: w, label: x, otherProps: u }, i) => {
    const S = typeof g.relation == "function";
    return /* @__PURE__ */ D(Er, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: S ? "flex-start" : "center", children: [
      g?.showLabel !== !1 ? /* @__PURE__ */ a(Er, { size: { xs: 3 }, sx: Pn, children: /* @__PURE__ */ D(Me, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        m(g.label || w, y),
        ": ",
        g.required && /* @__PURE__ */ a(Zl, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ a(Er, { size: { xs: S ? 12 : 9 }, sx: Pn, children: /* @__PURE__ */ a(c, { isAdd: C, model: r, fieldConfigs: d[w], mode: h, column: g, field: w, label: x, formik: t, data: n, onChange: o, combos: s, lookups: l, tTranslate: m, tOpts: y, ...u }) })
    ] }, i);
  }) }) : null;
}, es = function({ columns: e, tabs: r = {}, id: t, searchParams: n }) {
  const o = [], s = {};
  for (const d in r)
    s[d] = [];
  for (const d of e) {
    const h = d.type;
    if (d.label === null)
      continue;
    const { field: C, label: y, tab: m } = d, c = {};
    d.options && (c.options = d.options), d.dependsOn && (c.dependsOn = d.dependsOn);
    const g = Jl[h];
    if (!g || d.hideInAddGrid && t === "0")
      continue;
    (m && r[m] ? s[m] : o).push({ Component: g, field: C, label: y, column: { ...d, readOnly: n.has("showRelation") || d.readOnly }, otherProps: c });
  }
  const l = [];
  for (const d in s)
    l.push({ key: d, title: r[d], items: s[d] });
  return { formElements: o, tabColumns: l };
}, ts = ({ model: e, formik: r, data: t, combos: n, onChange: o, lookups: s, id: l, fieldConfigs: d, mode: h, handleSubmit: C }) => {
  const y = ze.emptyIdValues.includes(l), { formElements: m, tabColumns: c, showTabs: g, showGrouped: w } = Ye.useMemo(() => {
    const x = e.formConfig?.showTabbed, u = x === !0, i = x === "group" || x !== !0 && x !== "group" && e.formConfig?.showGrouped === !0, S = new URLSearchParams(window.location.search), v = u || i ? e.tabs : {}, { formElements: k, tabColumns: M } = es({ columns: e.columns, tabs: v, id: l, searchParams: S }), E = M.length > 0, N = u && E;
    return { formElements: k, tabColumns: M, showTabs: N, showGrouped: !N && i && E };
  }, [e]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ a(Ur, { isAdd: y, formElements: m, model: e, formik: r, data: t, onChange: o, combos: n, lookups: s, fieldConfigs: d, mode: h }),
    /* @__PURE__ */ D("div", { style: { marginTop: g ? aa : 0 }, children: [
      g && /* @__PURE__ */ a(Ql, { tabColumns: c, model: e, formik: r, data: t, onChange: o, combos: n, lookups: s, fieldConfigs: d, mode: h, handleSubmit: C }),
      w && /* @__PURE__ */ a(Xl, { isAdd: y, tabColumns: c, model: e, formik: r, data: t, onChange: o, combos: n, lookups: s, fieldConfigs: d, mode: h })
    ] })
  ] });
};
function rs(e) {
  const { children: r, value: t, index: n, ...o } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      hidden: t !== n,
      id: `simple-tabpanel-${n}`,
      "aria-labelledby": `simple-tab-${n}`,
      ...o,
      children: t === n && /* @__PURE__ */ a(_e, { sx: { p: 3 }, children: r })
    }
  );
}
function ns(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const as = An(({ relation: e, parentFilters: r, parent: t, where: n, models: o, readOnly: s }) => {
  const l = o.find(({ name: C }) => C === e);
  if (!l) return null;
  const d = { ...l, hideBreadcrumb: !0 }, h = d instanceof ir ? d : new ir(d);
  return h ? /* @__PURE__ */ a(
    h.ChildGrid,
    {
      readOnly: s,
      parentFilters: r,
      parent: t,
      model: d,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), os = ut.memo(({ relations: e, parent: r, where: t = [], models: n, relationFilters: o, readOnly: s }) => {
  const [l, d] = B(0);
  return /* @__PURE__ */ D(_e, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(_e, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(hi, { value: l, onChange: (C, y) => {
      d(y);
    }, "aria-label": "relations tabs", children: e.map((C, y) => {
      const m = n.find(({ name: g }) => g === C) || {}, c = m.listTitle || m.title || C;
      return /* @__PURE__ */ a(
        fi,
        {
          label: c,
          ...ns(y)
        },
        C
      );
    }) }) }),
    e.map((C, y) => /* @__PURE__ */ a(rs, { value: l, index: y, children: /* @__PURE__ */ a(
      as,
      {
        readOnly: s,
        relation: C,
        models: n,
        parentFilters: o[C] || [],
        parent: r,
        where: t
      },
      C
    ) }, C))
  ] });
}), oa = lr(1), is = {}, ge = {
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
}, ls = ({
  model: e,
  api: r,
  models: t,
  relationFilters: n = {},
  permissions: o = {},
  Layout: s = ts,
  baseSaveData: l = {},
  sx: d,
  readOnly: h,
  beforeSubmit: C,
  deletePromptText: y,
  detailPanelId: m = null,
  // Grid Row Detail Panel Id
  onCancel: c,
  onSaveSuccess: g
}) => {
  const w = e.formTitle || e.title, { translate: x, tOpts: u, tTranslate: i } = zt(e), { navigate: S, getParams: v, useParams: k, pathname: M } = Wr(), { relations: E = [] } = e, { stateData: N, buildUrl: Q, setPageTitle: H } = Ge(), j = k() || v, { id: _ = "" } = j, W = m || _.split("-")[ge.editIdIndex], L = new URLSearchParams(window.location.search), xe = L.has(ge.baseData) && L.get(ge.baseData);
  if (xe) {
    const G = JSON.parse(xe);
    typeof G === ge.object && G !== null && (l = { ...l, ...G });
  }
  const [oe, ie] = B(!0), [X, ee] = B({}), [de, $] = B({}), [we, F] = B(!1), A = Dt(), [te, z] = B(null), [re, le] = B(0), [nt, pt] = B(!1), [ft, je] = B(null), [St, Ft] = B(""), Gt = typeof e.applyFieldConfig === ge.function ? e.applyFieldConfig({ data: X, lookups: de }) : is, ht = Q(e.api), me = _.includes("-") && _.split("-")[0] === "0" ? "copy" : "", Pt = N.userData || {}, Et = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: p } = Xn({
    userData: Pt,
    model: e,
    userDefinedPermissions: Et
  }), { hideBreadcrumb: mt = !1, navigateBack: ve } = e, Je = !("canEdit" in X) || X.canEdit, Ee = T(() => {
    let G;
    switch (typeof ve) {
      case ge.function:
        G = ve({ params: j, searchParams: L, data: X });
        break;
      case ge.number:
      case ge.string:
        G = ve;
        break;
      default:
        G = M.substring(0, M.lastIndexOf("/"));
        break;
    }
    S(G);
  }, [ve, S, j, L, X, M]), At = U(() => ze.emptyIdValues.includes(W), [W]), Re = U(() => At ? { ...e.initialValues, ...X, ...l } : { ...l, ...e.initialValues, ...X }, [e.initialValues, X, W]), Ae = r || ht, De = U(() => {
    if (m)
      return m;
    const G = _.split("-");
    return G.length > 1 ? G[ge.loadIdIndex] : W;
  }, [m, _, W]), jt = T(async () => {
    ie(!0);
    try {
      const G = await or({
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
    jt();
  }, [W, De, e, Ae, jt]), fe(() => {
    z(e.getValidationSchema({ id: W, tTranslate: i, tOpts: u }));
  }, [W, e, z, x, u, i]);
  const Te = Gn({
    enableReinitialize: !0,
    initialValues: Re,
    validationSchema: te,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (G, { resetForm: Fe }) => {
      Object.keys(G).forEach((Z) => {
        typeof G[Z] === ge.string && (G[Z] = G[Z].trim());
      }), ie(!0), jr({
        id: W,
        api: ht,
        values: G,
        model: e
      }).then((Z) => {
        if (!Z) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof g === ge.function && g();
        const We = Z.info ? Z.info : `Record ${W === 0 ? "Added" : "Updated"} Successfully.`;
        A.showMessage(i(We, u)), ve !== !1 && Ee(), Fe({ values: Te.values });
      }).catch((Z) => {
        A.showError(
          i("An error occurred, please try after some time.", u),
          Z
        ), e.reloadOnSave && Fe();
      }).finally(() => {
        ie(!1);
      });
    }
  }), Wt = T(() => {
    Te.resetForm(), pt(!1), typeof c === ge.function && c(), ve !== !1 && Ee();
  }, [Te, c, ve, Ee]), pr = T((G, Fe) => {
    ie(!1), A.showError(i(G, u), Fe), Ee();
  }, [A, Ee, i, u]), Tt = function({ id: G, title: Fe, record: Z, lookups: We }) {
    const Le = _.indexOf("-") > -1, Ie = !G || G === "0", Ht = Ie ? ge.create : Le ? ge.copy : ge.edit, Ot = Ie ? "" : Z[e.linkColumn], Qe = [{ text: e.breadCrumbs }, { text: Ht }];
    Le && (Z[e.linkColumn] = ""), e.columns.forEach((Bt) => {
      Bt.skipCopy && Le && (Z[Bt.field] = "");
    }), ee(Z), $(We), ie(!1), Ot !== "" && Qe.push({ text: Ot }), H({
      showBreadcrumbs: !0,
      breadcrumbs: Qe
    });
  }, Se = T((G) => {
    Te.dirty && Je ? pt(!0) : (typeof c === ge.function && c(), ve !== !1 && Ee()), G.preventDefault();
  }, [Te.dirty, Je, c, ve, Ee]), pe = T(async () => {
    try {
      F(!0), await Gr({
        id: W,
        api: r || e.api,
        model: e
      }) === !0 && (A.showMessage(i("Record Deleted Successfully.", u)), ve !== !1 && Ee());
    } catch (G) {
      A.showError(i("An error occurred, please try after some time.", u), G?.message);
    } finally {
      F(!1);
    }
  }, [W, r, e.api, A, Ft, e, ve, Ee, i, u]), It = () => {
    Ft(null), F(!1);
  }, fr = T((G) => {
    const { name: Fe, value: Z } = G.target;
    ee({ ...X, [Fe]: Z });
  }, [X]), Mt = T(async (G) => {
    G && G.preventDefault(), typeof C === ge.function && await C({ formik: Te, model: e });
    const { errors: Fe } = Te;
    Te.handleSubmit();
    const Z = Object.keys(Fe)[0], We = Fe[Z];
    We && A.showError(i(We, u), null, "error");
    const Le = e.columns.find(
      (Ie) => Ie.field === Z
    ) || {};
    Le.tab && le(Object.keys(e.tabs).indexOf(Le.tab));
  }, [C, Te, e, A, le, i, u]), Ut = [
    { text: i(w, u) },
    { text: i(W === "0" ? "New" : "Update", u) }
  ], gt = Number(W) !== 0 && !!E.length, hr = L.has("showRelation"), Ze = !Je || X.readOnlyRelations;
  y = y || i("Are you sure you want to delete ?", u);
  const { showPageTitle: mr = !0 } = e;
  return /* @__PURE__ */ D(be, { children: [
    mr && /* @__PURE__ */ a(
      Qn,
      {
        navigate: S,
        title: w,
        showBreadcrumbs: !mt,
        breadcrumbs: Ut,
        model: e,
        enableBackButton: ve !== void 0
      }
    ),
    /* @__PURE__ */ a(oa.Provider, { value: { activeStep: re, setActiveStep: le }, children: /* @__PURE__ */ D(Ko, { sx: { padding: 2, ...d }, children: [
      oe ? /* @__PURE__ */ a(_e, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(Jo, {}) }) : /* @__PURE__ */ D("form", { children: [
        /* @__PURE__ */ D(
          _o,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              p && Je && !hr && !h && /* @__PURE__ */ a(
                Oe,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Mt,
                  children: i("Save", u)
                }
              ),
              /* @__PURE__ */ a(
                Oe,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Se,
                  children: i("Cancel", u)
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Oe,
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
            data: X,
            fieldConfigs: Gt,
            onChange: fr,
            lookups: de,
            id: W,
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
          onConfirm: Wt,
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
          children: y
        }
      ),
      gt ? /* @__PURE__ */ a(
        os,
        {
          readOnly: Ze,
          models: t,
          relationFilters: n,
          relations: E,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, rr = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, ss = {}, En = !0, cs = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class ir {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(r) {
    const { title: t = "" } = r;
    let { api: n, idProperty: o = n + "Id" } = r;
    const s = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    n || (n = `${t.replaceAll(rr.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const l = { ...r.defaultValues }, d = s || t;
    Object.assign(this, {
      standard: !0,
      name: d,
      permissions: { ...ir.defaultPermissions },
      idProperty: o,
      linkColumn: `${d}Name`,
      overrideFileName: t,
      preferenceId: d,
      tableName: d,
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
      r[n] = t.defaultValue === void 0 ? cs[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: n = {} } = {}) {
    const { columns: o } = this, s = {};
    for (const l of o) {
      const { field: d, label: h, header: C, type: y = "string", requiredIfNew: m = !1, required: c = !1, min: g = "", max: w = "", validate: x } = l, u = h || C || d;
      if (!u || h === null || h === "") continue;
      let i;
      switch (y) {
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
            const v = Number(g) || 8, k = Number(w) || 50, M = l.regex || rr.password;
            return he.string().min(v, t(`${u} must be at least ${v} characters`, n)).max(k, t(`${u} must be at most ${k} characters`, n)).matches(
              M,
              t(`${u} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, n)
            ).isValidSync(S);
          });
          break;
        case "email":
          i = he.string().trim().matches(
            l.regex || rr.email,
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
      if (c && y !== "string" && (i = i.required(t(`${u} is required`, n))), m && (!r || r === "") && (i = i.trim().required(t(`${u} is required`, n))), x) {
        const S = rr.compareValidatorRegex.exec(x);
        if (S) {
          const v = S[1], k = o.find(
            (M) => (M.formField === v || M.field) === v
          );
          i = i.oneOf(
            [he.ref(v)],
            t(`${u} must match ${k.label}`, n)
          );
        }
      }
      s[d] = i;
    }
    return he.object({ ...s, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ a(ls, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ a(Dn, { model: this, showRowsSelected: En, ...t });
  ChildGrid = (r) => /* @__PURE__ */ D(be, { children: [
    /* @__PURE__ */ a(Dn, { model: this, ...r, customStyle: ss, showRowsSelected: En }),
    /* @__PURE__ */ a(Ao, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ke as DialogComponent,
  Dn as GridBase,
  Ki as HelpModal,
  xn as MuiTypography,
  Qn as PageTitle,
  Rc as RouterProvider,
  qn as SnackbarContext,
  Mc as SnackbarProvider,
  Bc as StateProvider,
  ir as UiModel,
  Oc as crudHelper,
  Ii as daDKGrid,
  Oi as deDEGrid,
  Ri as elGRGrid,
  Ni as esESGrid,
  $i as frFRGrid,
  tt as httpRequest,
  zi as itITGrid,
  Yi as locales,
  Ui as ptPT,
  ji as trTRGrid,
  Ti as useMobile,
  zt as useModelTranslation,
  Wr as useRouter,
  Dt as useSnackbar,
  Ge as useStateContext
};
//# sourceMappingURL=index.js.map
