import { jsx as a, jsxs as F, Fragment as ye } from "react/jsx-runtime";
import * as Ye from "react";
import ht, { createContext as cr, useContext as Vr, useState as O, useEffect as le, useRef as or, useCallback as T, useMemo as U, memo as $n, useId as Ya, createElement as zr } from "react";
import Ka from "@mui/material/Snackbar";
import Ja from "@mui/material/Alert";
import Be from "@mui/material/Button";
import Za from "@mui/material/Dialog";
import Qa from "@mui/material/DialogActions";
import Xa from "@mui/material/DialogContent";
import eo from "@mui/material/DialogContentText";
import to from "@mui/material/DialogTitle";
import * as rt from "@mui/x-data-grid-premium";
import { GridFooterContainer as ro, GridFooter as no, getGridDateOperators as ao, useGridApiRef as Vn, GridActionsCellItem as Rr, DataGridPremium as zn, GridToolbarExportContainer as oo, Toolbar as io, ColumnsPanelTrigger as lo, FilterPanelTrigger as so, GRID_CHECKBOX_SELECTION_COL_DEF as co, useGridApiContext as uo, useGridSelector as po, gridRowSelectionStateSelector as fo } from "@mui/x-data-grid-premium";
import Gn from "@mui/icons-material/Delete";
import ho from "@mui/icons-material/FileCopy";
import mo from "@mui/icons-material/Article";
import jn from "@mui/icons-material/Edit";
import Je from "@mui/material/Box";
import Nt from "@mui/material/Typography";
import ur from "@mui/material/TextField";
import { useTranslation as dr, withTranslation as go } from "react-i18next";
import { Typography as Oe, Dialog as bo, DialogTitle as yo, Grid as De, DialogContent as Co, Card as xo, CardContent as wo, Breadcrumbs as vo, Link as Do, Button as dt, IconButton as Lt, Box as Te, Tooltip as St, Menu as So, List as Fo, MenuItem as et, ListItemButton as Ar, ListItemIcon as Tr, ListItem as Po, ListItemText as Eo, TextField as pt, FormControlLabel as ft, Checkbox as Ao, Stack as Fn, FormControl as $t, InputLabel as Pn, Select as En, Badge as To, FormHelperText as mt, useTheme as Pt, Input as Mo, FilledInput as Io, OutlinedInput as Oo, InputAdornment as Wn, RadioGroup as Gr, Radio as Dt, styled as Bo, Avatar as Ro, CircularProgress as ko, Divider as No } from "@mui/material";
import Lo from "@mui/icons-material/Check";
import kr from "@mui/icons-material/Close";
import $o from "@mui/icons-material/Help";
import { Replay as Vo, Close as zo, GridOn as Go, TableChart as Mr, Code as jo, Language as Wo, DataObject as Uo } from "@mui/icons-material";
import ne from "dayjs";
import Un from "dayjs/plugin/utc";
import qo from "dayjs/plugin/timezone";
import { DatePicker as qn } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Hn } from "@mui/x-date-pickers/DateTimePicker";
import jr from "dayjs/plugin/utc.js";
import { LocalizationProvider as _n } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Yn } from "@mui/x-date-pickers/AdapterDayjs";
import Nr from "@mui/icons-material/Add";
import Ho from "@mui/icons-material/Remove";
import _o from "@mui/icons-material/FilterListOff";
import Yo from "@mui/icons-material/ViewColumn";
import Ko from "@mui/icons-material/FilterList";
import { styled as pr } from "@mui/material/styles";
import Jo from "@mui/icons-material/Save";
import An from "@mui/icons-material/Settings";
import Zo from "@mui/icons-material/Refresh";
import { useFormik as Kn } from "formik";
import * as me from "yup";
import { DateTimePicker as Qo, DatePicker as Xo } from "@mui/x-date-pickers";
import Jn from "@mui/material/MenuItem";
import ei from "@mui/icons-material/History";
import ti from "@mui/icons-material/FileDownload";
import Zn from "@mui/material/Checkbox";
import ri from "@mui/material/Paper";
import ni from "@mui/material/Stack";
import ai from "@mui/material/CircularProgress";
import oi from "@mui/material/FormControlLabel";
import { NumberField as ir } from "@base-ui/react/number-field";
import ii from "@mui/icons-material/KeyboardArrowUp";
import Qn from "@mui/icons-material/KeyboardArrowDown";
import li from "@mui/icons-material/VisibilityOff";
import si from "@mui/icons-material/Visibility";
import { TimePicker as ci } from "@mui/x-date-pickers/TimePicker";
import ui from "@mui/icons-material/Clear";
import fr from "@mui/material/FormControl";
import di from "@mui/material/InputLabel";
import pi from "@mui/material/Select";
import Ir from "@mui/material/Grid";
import Xn from "@mui/material/Autocomplete";
import fi from "@mui/material/Stepper";
import hi from "@mui/material/Step";
import mi from "@mui/material/StepLabel";
import { grey as gi } from "@mui/material/colors";
import bi from "@emotion/styled";
import yi from "@mui/material/Chip";
import { SimpleTreeView as Ci } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as Tn } from "@mui/x-tree-view/TreeItem";
import xi from "@mui/material/Input";
import wi from "@mui/material/Tab";
import vi from "@mui/material/Tabs";
const ea = cr(null), Di = "bottom", Si = "center", Fi = ht.forwardRef(function(r, t) {
  return /* @__PURE__ */ a(Ja, { elevation: 6, ref: t, variant: "filled", ...r });
}), zc = ({ children: e }) => {
  const [r, t] = O(null), [n, o] = O(!1), [l, s] = O(null), [p, f] = O(null), y = function(h, g, w = "info", x) {
    typeof h != "string" && (h = h.toString()), g && typeof g != "string" && (g = g.toString()), t(g ? `${h}: ${g}` : h), s(w), o(!0), f(x);
  }, C = function(h, g, w = "error", x) {
    y(h, g, w, x);
  }, m = function() {
    o(!1), f(null), p && p();
  };
  return /* @__PURE__ */ F(ye, { children: [
    /* @__PURE__ */ a(
      ea.Provider,
      {
        value: { showMessage: y, showError: C },
        children: e
      }
    ),
    /* @__PURE__ */ a(Ka, { open: n, autoHideDuration: 6e3, onClose: m, anchorOrigin: { vertical: Di, horizontal: Si }, children: /* @__PURE__ */ a(Fi, { severity: l, children: r }) })
  ] });
}, Et = function() {
  return Vr(ea);
}, Ke = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: n, okText: o, cancelText: l, yesNo: s = !1, children: p, maxWidth: f = "sm", fullWidth: y = !0, ...C }) => (o = o || (s ? "Yes" : "Ok"), l = l || (s ? "No" : "Cancel"), /* @__PURE__ */ F(
  Za,
  {
    ...C,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: f,
    fullWidth: y,
    children: [
      /* @__PURE__ */ a(to, { id: "alert-dialog-title", sx: { fontSize: p ? "inherit" : "1.25rem" }, children: t }),
      p && /* @__PURE__ */ a(Xa, { dividers: !0, children: /* @__PURE__ */ a(eo, { children: p }) }),
      (n || r) && /* @__PURE__ */ F(Qa, { children: [
        n && /* @__PURE__ */ a(Be, { onClick: n, children: l }),
        r && /* @__PURE__ */ a(Be, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Or = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, ta = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, Pi = (e, r) => {
  const t = new URL(e);
  for (const n in r) {
    const o = typeof r[n] == "object" ? JSON.stringify(r[n]) : r[n];
    t.searchParams.append(n, o);
  }
  window.open(t, "_blank").focus();
}, ra = async (e) => {
  const {
    method: r = "GET",
    url: t,
    data: n,
    headers: o = {},
    credentials: l = "include",
    ...s
  } = e, p = {
    method: r,
    credentials: l,
    headers: {
      ...o
    },
    ...s
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete p.headers["Content-Type"], p.body = n instanceof FormData ? n : ta(n)) : (p.headers["Content-Type"] = o["Content-Type"] || "application/json", p.body = typeof n == "string" ? n : JSON.stringify(n)));
  const f = await fetch(t, p), y = f.headers.get("content-type") || {};
  return {
    status: f.status,
    data: y.includes("application/json") ? await f.json() : await f.text(),
    headers: Object.fromEntries(f.headers.entries())
  };
}, Ei = (e) => e?.message || e?.info || e?.error || e?.err, Re = Object.freeze({
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
  signal: l,
  additionalParams: s = {},
  additionalHeaders: p = {},
  dataParser: f = Re.raw,
  onParseError: y
}) => {
  if (r.exportData)
    return Pi(e, r);
  const C = {
    method: o,
    credentials: "include",
    url: e,
    headers: n ? { ...p } : { "Content-Type": "multipart/form-data", ...p },
    ...l && { signal: l },
    ...s
  };
  r && Object.keys(r).length > 0 && (C.data = n ? r : ta(r));
  try {
    const m = await ra(C);
    let h = m.data;
    if (m.status === Or.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (m.status === Or.FORBIDDEN)
      return { error: !0, message: h.message || "Access Denied!" };
    if (m.status !== Or.OK)
      return { error: !0, message: h.message || "An error occurred" };
    try {
      h = f(h);
    } catch (g) {
      return y ? y(g, h) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: g.message,
        rawData: h
      };
    }
    return h;
  } catch (m) {
    return m.name === "AbortError" ? { error: !0, aborted: !0, message: m.message || "Request aborted" } : { error: !0, message: m.message || "Network error" };
  }
}, Ai = ["date", "dateTime"], Ti = ["singleSelect"], Mi = 1e6;
function Ii(e) {
  const { operator: r, value: t, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(r), l = t != null && (t !== "" || n === "number" && t === 0 || n === "boolean" && t === !1);
  return o || l;
}
const Oi = (e, r = !1) => {
  if (typeof e != "string" || e === void 0 || e === null)
    return e;
  if (e.length === 0)
    return null;
  if (e.length === 17) {
    const n = +e.slice(0, 4), o = +e.slice(4, 6) - 1, l = +e.slice(6, 8), s = +e.slice(8, 10), p = +e.slice(10, 12), f = +e.slice(12, 14), y = +e.slice(14, 17);
    return r ? new Date(Date.UTC(n, o, l, s, p, f, y)) : new Date(n, o, l, s, p, f, y);
  }
  if (e.length === 24)
    return r ? new Date(e) : new Date(e.slice(0, -1));
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t;
};
async function Ft(e, r) {
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
async function Wr({ model: e, action: r, responseData: t, context: n = {} }) {
  return typeof e.parseResponsePayload == "function" && e.parseResponseActions?.includes(r) ? await e.parseResponsePayload({
    responseData: t,
    model: e,
    action: r,
    ...n
  }) : t;
}
function Vt(e, r) {
  if (e?.error || e?.success === !1)
    throw new Error(Ei(e) || r);
}
const Bi = ({ gridColumns: e, page: r, pageSize: t, sortModel: n, filterModel: o, baseFilters: l, action: s = "list", extraParams: p = {}, model: f, api: y }) => {
  const C = s === "export" && f.isElasticExport === !0, m = [], h = [], g = [];
  e.forEach(({ lookup: v, type: B, field: M, localize: E = !1, filterable: R = !0, dependsOn: X }) => {
    Ai.includes(B) && g.push({ field: M, localize: E }), v && !m.includes(v) && Ti.includes(B) && R && (m.push(v), h.push({ lookup: v, dependsOn: X }));
  });
  const w = [];
  o?.items?.length && o.items.forEach((v) => {
    if (Ii(v)) {
      const { field: B, operator: M, filterField: E } = v;
      let { value: R } = v;
      const _ = e.filter((j) => j?.field === v.field)[0]?.type;
      _ === "boolean" ? R = R === "true" || R === !0 ? 1 : 0 : _ === "number" && (R = Array.isArray(R) ? R.filter((j) => j) : R), R = v.filterValues || R, w.push({
        field: E || B,
        operator: M,
        value: R,
        type: _
      });
    }
  }), l && Array.isArray(l) && w.push(...l);
  const x = {
    start: r * t,
    limit: C ? f.exportSize || Mi : t,
    ...p,
    logicalOperator: o.logicOperator,
    sort: n.map((v) => (v.filterField || v.field) + " " + v.sort).join(","),
    // Note: where is excluded here and returned separately to allow modification via createRequestPayload hook
    isElasticExport: C,
    model: f.module,
    fileName: f.overrideFileName
  };
  m.length && (x.lookups = m.join(",")), h.length && (x.lookupWithDeps = JSON.stringify(h)), f?.limitToSurveyed && (x.limitToSurveyed = f?.limitToSurveyed);
  let u = `${y}/${s}`;
  const i = new URLSearchParams();
  p.template && i.append("template", p.template), p.configFileName && i.append("configFileName", p.configFileName);
  const S = i.toString();
  return S && (u += `?${S}`), { requestData: x, url: u, where: w, dateColumns: g };
}, Lr = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: n = {}, action: o = "list", model: l, signal: s } = e, { requestData: p, url: f, where: y, dateColumns: C } = Bi(e);
  if (r) {
    const g = await Ft(l, {
      where: y,
      url: f,
      requestData: p,
      dataParsers: Re,
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
  const m = await Ft(l, {
    where: y,
    url: f,
    requestData: p,
    dataParsers: Re,
    dataParser: Re.json,
    jsonPayload: !0,
    action: o,
    signal: s,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    ...e
  }), h = await tt(m);
  return h?.aborted || (Vt(h, "An error occurred while fetching data"), await Wr({ model: l, action: o, responseData: h, context: { dateColumns: C, model: l, action: o, ...e } }), h.records.forEach((g) => {
    C.forEach((w) => {
      const { field: x, localize: u } = w;
      g[x] && (g[x] = Oi(g[x], u));
    }), l.columns.forEach(({ field: w, displayIndex: x }) => {
      x && (g[w] = g[x]);
    });
  })), h;
}, lr = async (e = {}) => {
  let { api: r, id: t, model: n, parentFilters: o, where: l = {} } = e;
  r = r || n.api;
  const s = new URLSearchParams(), p = `${r}/${t ?? "-"}`, f = [];
  (n.formDef || n.columns)?.forEach((i) => {
    i.lookup && !f.includes(i.lookup) && !i.dependsOn && f.push(i.lookup);
  }), s.set("lookups", f), l && Object.keys(l)?.length && s.set("where", JSON.stringify(l));
  const C = await Ft(n, {
    url: `${p}?${s.toString()}`,
    method: "GET",
    lookupsToFetch: f,
    jsonPayload: !0,
    action: "load",
    dataParsers: Re,
    ...e
  }), m = await tt(C);
  Vt(m, "Load failed"), await Wr({ model: n, action: "load", responseData: m, context: e });
  const { data: h, lookups: g } = m || {};
  let w = h[n.linkColumn];
  const x = n.columns.find((i) => i.field === n.linkColumn);
  if (x && x.lookup && g && g[x.lookup] && g[x.lookup]?.length) {
    const i = g[x.lookup].find((S) => S.value === w);
    i && (w = i.label);
  }
  const u = { ...n.defaultValues };
  return { id: t, title: w, record: { ...u, ...h, ...o }, lookups: g };
}, Ur = async function(e = {}) {
  const { id: r, api: t, model: n } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = await Ft(n, {
    url: `${t}/${r}`,
    method: "DELETE",
    dataParsers: Re,
    jsonPayload: !0,
    action: "delete",
    ...e
  }), l = await tt(o);
  return Vt(l, "Delete failed"), !0;
}, qr = async function(e = {}) {
  const { id: r, api: t, values: n, model: o } = e;
  let l, s;
  r !== 0 ? (l = `${t}/${r}`, s = "PUT") : (l = t, s = "POST");
  const p = await Ft(o, {
    url: l,
    method: s,
    params: n,
    action: "save",
    jsonPayload: !0,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    dataParsers: Re,
    ...e
  }), f = await tt(p);
  return Vt(f, "Save failed"), f;
}, na = async (e = {}) => {
  let { api: r, model: t, lookups: n, scopeId: o, reqData: l } = e;
  r = r || t.api;
  const s = new URLSearchParams(), p = `${r}/lookups`;
  s.set("lookups", n), s.set("scopeId", o);
  const f = await Ft(t, {
    url: `${p}?${s.toString()}`,
    method: "GET",
    lookups: n,
    scopeId: o,
    dataParsers: Re,
    dataParser: Re.json,
    jsonPayload: !0,
    action: "lookups",
    ...l,
    ...e
  }), y = await tt(f);
  return Vt(y, "Could not load lookups"), await Wr({ model: t, action: "lookups", responseData: y, context: e });
}, Gc = {
  getList: Lr,
  getRecord: lr,
  deleteRecord: Ur,
  saveRecord: qr,
  getLookups: na
}, Ri = ({ pagination: e, apiRef: r, tTranslate: t = (n) => n }) => {
  const n = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, l = r.current.state.rows.totalRowCount, s = Math.ceil(l / o), { t: p, i18n: f } = dr(), y = { t: p, i18n: f }, [C, m] = O(n + 1), h = function(x) {
    let u = x.target?.value;
    u === "" ? m("") : (u = parseInt(u), u = isNaN(u) || u < 1 ? 1 : u, m(u));
  };
  le(() => {
    m(n + 1);
  }, [n, o]);
  const g = function() {
    let x = C === "" ? 1 : C;
    x = Math.max(x, 1), x = Math.min(x, s), r.current.setPage(x - 1), m(x), C === "" && m(1);
  }, w = (x) => {
    const u = x.which || x.keyCode, i = String.fromCharCode(u);
    /\d/.test(i) || x.preventDefault();
  };
  return /* @__PURE__ */ F(ro, { children: [
    /* @__PURE__ */ a(Je, { sx: { pl: 5 }, children: e && /* @__PURE__ */ F(ye, { children: [
      /* @__PURE__ */ F(Nt, { variant: "p", children: [
        t("Jump to page", y),
        ":"
      ] }),
      /* @__PURE__ */ a(
        ur,
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
          onChange: h,
          onKeyPress: w,
          disabled: !l
        }
      ),
      /* @__PURE__ */ a(Be, { disabled: !l, size: "small", onClick: g, children: t("Go", y) })
    ] }) }),
    /* @__PURE__ */ a(no, {})
  ] });
}, ki = /\${((\w+)\.)?(\w+)}/g, Ni = function(e, r, { template: t = ki, keepMissingTags: n = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, l, s, p) {
    const f = s ? r[s] || {} : r;
    return f[p] === void 0 ? n ? o : "" : f[p];
  });
}, rr = {
  replaceTags: Ni
};
function Mn({ variant: e = "h2", component: r = "h2", text: t = "", name: n = null, ...o }) {
  return /* @__PURE__ */ F(Oe, { variant: e, component: r, ...o, children: [
    t,
    n && ` ${n}`
  ] });
}
function Li(e = !1) {
  const r = l(), [t, n] = O(r);
  function o() {
    setTimeout(() => {
      n(l());
    }, 10);
  }
  le(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function l() {
    let s = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const p = !!s.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    s = s.toLowerCase();
    const f = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(s);
    let y = null;
    return window.innerWidth <= window.innerHeight ? y = "portrait" : y = "landscape", { mobile: p, tablet: f, portrait: y === "portrait", landscape: y === "landscape" };
  }
  return e ? t.mobile : t;
}
const $i = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Vi = {
  ...rt.daDK,
  ...$i
}, zi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Gi = {
  ...rt.deDE,
  ...zi
}, ji = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Wi = {
  ...rt.elGR,
  ...ji
}, Ui = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, qi = {
  ...rt.esES,
  ...Ui
}, Hi = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, _i = {
  ...rt.frFR,
  ...Hi
}, Yi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Ki = {
  ...rt.itIT,
  ...Yi
}, Ji = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Zi = {
  ...rt.trTR,
  ...Ji
}, Qi = {
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
}, Xi = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, el = {
  ...rt.enUS,
  ...Xi
}, tl = {
  en: el,
  "tr-TR": Zi,
  "es-ES": qi,
  "da-DK": Vi,
  "de-DE": Gi,
  "el-GR": Wi,
  "fr-FR": _i,
  "pt-PT": Qi,
  "it-IT": Ki
};
ne.extend(Un);
ne.extend(qo);
const aa = cr(), oa = cr(null), In = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), jc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, n] = O("en"), [o, l] = O("MM/DD/YYYY hh:mm:ss A"), [s, p] = O(null), [f, y] = O(null), [C, m] = O(null), [h, g] = O(null), [w, x] = O(""), [u, i] = O(!1), { t: S, i18n: v } = dr(), B = Et(), M = or(r), E = T((D, N) => {
    M.current[D] = N;
  }, []), R = T((D) => M.current[D || "default"] || "", []), X = T((D, N) => `${M.current[N || "default"] || ""}${D}`, []), _ = T((D = !0) => {
    i(D);
  }, []), j = T((D, N, ee) => {
    if (ee != null) {
      const H = ee;
      let $ = D ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return H && ($ = H.split(" "), $[0] = $[0].toUpperCase(), D ? $ = $[0] : N ? $ = $[0].toUpperCase() : ($[1] += $[1].includes(":ss") ? "" : ":ss", $ = $.join(" "))), $;
    }
    return D?.split(" ")[0] || "DD-MM-YYYY";
  }, []), Y = T(({ value: D, useSystemFormat: N, showOnlyDate: ee = !1, state: H }) => {
    if (!D) return null;
    const $ = j(N, ee, H);
    return ne(D).format($);
  }, [j]), W = T(() => {
    const D = t, N = tl[D];
    function ee(H) {
      return D === "pt-PT" || D === "ptPT" ? N.components.MuiDataGrid.defaultProps.localeText[H] || H : N[H] || H;
    }
    return { getLocalizedString: ee };
  }, [t]), k = T((D) => {
    n(D);
  }, []), Se = T((D) => {
    p(D);
  }, []), ae = T((D) => {
    m(D);
  }, []), ie = T((D) => {
    g(D);
  }, []), re = T((D) => {
    x(D);
  }, []), Q = T((D) => {
    l(D);
  }, []), fe = T((D) => {
    y(D);
  }, []), q = U(() => ({
    locale: t,
    dateTime: o,
    pageTitle: s,
    modal: f,
    pageBackButton: C,
    userData: h,
    timeZone: w
  }), [t, o, s, f, C, h, w]), Z = U(() => ({
    // State data
    stateData: q,
    // Loader management
    isLoading: u,
    showLoader: _,
    // Snackbar utilities
    showMessage: B?.showMessage || In,
    showError: B?.showError || In,
    // i18n utilities
    dayjs: ne,
    t: S,
    i18n: v,
    // Date/time utilities
    systemDateTimeFormat: j,
    formatDate: Y,
    useLocalization: W,
    // API utilities
    getApiEndpoint: R,
    setApiEndpoint: E,
    buildUrl: X,
    // App-level state setters with meaningful names
    setLocale: k,
    setPageTitle: Se,
    setPageBackButton: ae,
    setUserData: ie,
    setTimeZone: re,
    setDateTimeFormat: Q,
    setModal: fe
  }), [
    q,
    u,
    _,
    S,
    v,
    B,
    R,
    E,
    j,
    Y,
    W,
    k,
    Se,
    ae,
    ie,
    re,
    Q,
    fe,
    X
  ]);
  return /* @__PURE__ */ a(aa.Provider, { value: Z, children: e });
}, Wc = oa.Provider, Hr = () => Vr(oa), je = () => {
  const e = Vr(aa);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, rl = () => {
  const [e, r] = O(), [t, n] = O(!1), { stateData: o, setModal: l } = je(), s = o.modal, p = 16 / 9;
  let f = (window.outerWidth - 10) / window.innerWidth * 100;
  const y = () => {
    let m = document.getElementById("tutorial-iframe");
    m ? (m = m.offsetWidth, m = m / window.innerWidth) : m = 0.9;
    const h = window.innerWidth * m * (1 / p), g = window.innerHeight - 180;
    r(Math.min(h, g));
  };
  le(() => {
    s?.status && (n(!0), y());
  }, [s, f]), le(() => (window.addEventListener("resize", y), () => {
    window.removeEventListener("resize", y);
  }), []);
  function C() {
    const m = document.getElementById("tutorial-iframe");
    m.src = s?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: s?.status && /* @__PURE__ */ F(bo, { fullWidth: !0, maxWidth: "lg", open: s.status, onClose: () => {
    l({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(yo, { className: "pt-2 pb-0", children: /* @__PURE__ */ F(De, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ F(De, { size: 11, children: [
        /* @__PURE__ */ F(Oe, { variant: "h7", component: "div", children: [
          " ",
          s?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Oe, { variant: "caption", component: "div", children: s?.data?.subTitle || /* @__PURE__ */ a(ye, { children: " " }) })
      ] }),
      /* @__PURE__ */ F(De, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(Vo, { className: "cursor_pointer mt-2 mr-2", onClick: C }),
        /* @__PURE__ */ a(zo, { className: "cursor_pointer mt-2", onClick: () => {
          l({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ F(Co, { dividers: !0, children: [
      t && /* @__PURE__ */ a("div", { children: "Loading..." }),
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
function nl({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: l = "",
  titleClass: s = "text-theme-blue text-max-width",
  showBreadcrumbs: p,
  breadcrumbs: f = [],
  enableBackButton: y = !1,
  breadcrumbColor: C,
  showHelpButton: m = !1,
  model: h
}) {
  const g = Li(!0), w = f.length - 1, x = p && f.length, { t: u, i18n: i } = dr(), S = U(() => ({ t: u, i18n: i }), [u, i]), v = h?.tTranslate ?? ((M) => M), B = () => {
    r(-1);
  };
  return le(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ F(ye, { children: [
    /* @__PURE__ */ a(Mn, { className: "print-only", text: v(e, S) }),
    x && /* @__PURE__ */ F(ye, { children: [
      /* @__PURE__ */ a(xo, { sx: { mb: 3 }, children: /* @__PURE__ */ F(wo, { sx: { backgroundColor: C || "#fff" }, children: [
        /* @__PURE__ */ F(De, { container: !0, children: [
          /* @__PURE__ */ a(De, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(vo, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${s} breadcrumbs-text-title text-max-width`, children: f.map((M, E) => E < w ? /* @__PURE__ */ a(Do, { onClick: B, className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: M.text }, E) : /* @__PURE__ */ a(Oe, { className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", children: M.text }, E)) }) }),
          y && /* @__PURE__ */ a(De, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(dt, { variant: "contained", onClick: B, children: v("Back", S) }) }),
          m && /* @__PURE__ */ a(De, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(Lt, { color: "primary", title: v("Help", S), size: "large", children: /* @__PURE__ */ a($o, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Te, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: g ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          Mn,
          {
            className: `${s} page-text-title`,
            variant: "p",
            text: v(e, S),
            name: t
          }
        ) }) }) }) }),
        !g && /* @__PURE__ */ F(ye, { children: [
          /* @__PURE__ */ F(Te, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ F(Te, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a(rl, {})
    ] })
  ] });
}
const ia = go()(nl), Ge = {
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
}, la = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: n = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = n.find((l) => l.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[Ge.permissionsMapper.add],
    canEdit: t.edit && !!o[Ge.permissionsMapper.edit],
    canDelete: t.delete && !!o[[Ge.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
ne.extend(jr);
const al = {
  date: qn,
  dateTime: Hn
}, ol = "-10px", il = "-16px", ll = (e) => {
  const { fixedFilterFormat: r } = Ge, { item: t, applyValue: n, convert: o, colDef: l } = e, { systemDateTimeFormat: s, stateData: p } = je(), f = l?.type || "date", y = r[f], C = l?.localize ?? e.localize ?? !1, m = (i) => {
    const S = ne(i);
    return S.isValid() && S.year() > 1900;
  }, h = s(f !== "dateTime", !1, p.dateTime), g = (i) => {
    if (!(f !== "date" && f !== "dateTime" || ((v) => typeof v != "string" ? !1 : !ne(v, h, !0).isValid())(i))) {
      if (o || C) {
        if (!i) {
          n({ ...t, value: null });
          return;
        }
        i = ne(i).utc(), n({ ...t, value: i });
        return;
      }
      if (!m(i)) {
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
  }, x = al[f], u = t?.value ? ne(t.value) : null;
  return /* @__PURE__ */ a(_n, { dateAdapter: Yn, children: /* @__PURE__ */ a(
    x,
    {
      fullWidth: !0,
      format: h,
      value: u,
      onChange: g,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: ol,
            marginBottom: il,
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
        fieldMonthPlaceholder: () => w(h) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Br = (e) => ao().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ a(ll, { ...t, ...e }) : void 0
})), _e = {
  Edit: "Edit",
  Delete: "Delete"
}, ke = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, sl = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, cl = { pageSize: 50, page: 0 }, ul = [5, 10, 20, 50, 100], dl = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: n, tOpts: o }) => {
  const { getApiEndpoint: l } = je(), s = l("GridPreferenceManager"), p = Vn(), f = Et(), [y, C] = O(ke.NONE), [m, h] = O(null), [g, w] = O(!1), [x, u] = O({}), [i, S] = O(null), [v, B] = O(null), M = U(
    () => i == null ? [] : i.filter((D) => D.prefId !== 0),
    [i]
  ), E = U(() => [
    { field: "prefName", type: "string", width: 300, headerName: n("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: n("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: n("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Rr, { icon: /* @__PURE__ */ a(St, { title: _e.Edit, children: /* @__PURE__ */ a(jn, {}) }), tabIndex: 1, "data-action": _e.Edit, label: n("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Rr, { icon: /* @__PURE__ */ a(St, { title: _e.Delete, children: /* @__PURE__ */ a(Gn, {}) }), tabIndex: 2, "data-action": _e.Delete, label: n("Delete", o), color: "error" }, 2)] }
  ], [n, o]), R = U(() => me.object({
    prefName: me.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: me.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), X = (D) => h(D?.currentTarget), _ = () => h(null), j = () => {
    C(ke.NONE), _();
  }, Y = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), B(null), t && t(null), _());
  }, W = T(async ({ applyDefault: D = !1 }) => {
    const N = await tt({
      url: s,
      params: { action: "list", id: r },
      dataParser: Re.json
    });
    if (!N?.preferences) {
      f.showMessage(n("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const ee = N.preferences.filter((H) => H.prefName.trim() !== "");
    if (S(ee), D) {
      const H = ee.find(($) => $.isDefault);
      if (H)
        return { defaultPrefId: H.prefId, preferences: ee };
      t && t(null);
    }
    return { preferences: ee };
  }, [s, r, f, n, o, t]), k = T(async (D, N = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), D === 0) {
      Y();
      return;
    }
    const ee = N || i;
    if (!ee) {
      f.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const H = ee.find((Me) => Me.prefId === D);
    if (!H?.prefValue) {
      f.showMessage(n("Failed to load preference.", o));
      return;
    }
    let $;
    try {
      $ = typeof H.prefValue == "string" ? JSON.parse(H.prefValue) : H.prefValue;
    } catch {
      f.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState($), B(H.prefName), t && t(H.prefName), _();
  }, [e, Y, i, t, f, n, o]), Se = async (D) => {
    const N = D.prefName.trim(), ee = N.toLocaleLowerCase();
    if (i.find(($) => $.prefName.toLocaleLowerCase() === ee && $.prefId !== D.prefId)) {
      w(!0);
      return;
    }
    const H = await tt({
      url: s,
      params: {
        action: "save",
        id: r,
        prefId: D.prefId,
        prefName: N,
        prefDesc: D.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: D.isDefault
      },
      dataParser: Re.json
    });
    if (H === !0 || H?.success === !0) {
      f.showMessage(n(`Preference ${y === ke.ADD ? "added" : "saved"} successfully.`, o)), j(), await W({ applyDefault: !1 });
      return;
    }
    f.showMessage(n("Error saving preference: ", o) + (H?.message || n("Unknown error", o)));
  }, ae = async () => {
    const D = await tt({
      url: s,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: Re.json
    });
    if (D === !0 || D?.success === !0) {
      f.showMessage(n("Preference deleted successfully.", o)), await W({ applyDefault: !1 }), u({});
      return;
    }
    f.showMessage(n("Error deleting preference: ", o) + (D?.message || n("Unknown error", o)));
  }, ie = (D) => {
    const N = D.field === "editAction" ? _e.Edit : D.field === "deleteAction" ? _e.Delete : null;
    if (D.id === 0 && N) {
      f.showMessage(n(`Default preference cannot be ${N === _e.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    N === _e.Edit && (C(ke.EDIT), Q.setValues(D?.row)), N === _e.Delete && u({
      prefId: D.id,
      preferenceName: D.row.prefName
    });
  }, re = (D) => {
    C(D), _(), D === ke.ADD && Q.resetForm();
  }, Q = Kn({
    initialValues: sl,
    validationSchema: R,
    onSubmit: Se,
    mode: "onBlur"
  });
  le(() => {
    if (!r) return;
    (async () => {
      const N = await W({ applyDefault: !0 });
      N?.defaultPrefId && N?.preferences && await k(N.defaultPrefId, N.preferences);
    })();
  }, [r]);
  const fe = U(() => ({
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
  }), [n, o]), q = y === ke.MANAGE, Z = y === ke.ADD || y === ke.EDIT;
  return /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ F(
      dt,
      {
        id: "grid-preferences-btn",
        "aria-controls": m ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": m ? "true" : void 0,
        onClick: X,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(An, {}),
        children: [
          n("Preferences", o),
          " ",
          v && `(${v})`
        ]
      }
    ),
    /* @__PURE__ */ F(
      So,
      {
        id: "grid-preference-menu",
        anchorEl: m,
        open: !!m,
        onClose: _,
        component: Fo,
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
          /* @__PURE__ */ F(et, { component: Ar, dense: !0, onClick: () => re(ke.ADD), children: [
            /* @__PURE__ */ a(Tr, { children: /* @__PURE__ */ a(Nr, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ F(et, { component: Ar, dense: !0, onClick: () => re(ke.MANAGE), children: [
            /* @__PURE__ */ a(Tr, { children: /* @__PURE__ */ a(An, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ F(et, { component: Ar, dense: !0, divider: i?.length > 0, onClick: () => k(0), children: [
            /* @__PURE__ */ a(Tr, { children: /* @__PURE__ */ a(Zo, {}) }),
            n("Reset to Default", o)
          ] }),
          i?.length > 0 && i?.map((D) => {
            const { prefName: N, prefDesc: ee, prefId: H } = D;
            return /* @__PURE__ */ a(
              et,
              {
                onClick: () => k(H),
                component: Po,
                selected: v === N,
                title: n(ee, o),
                dense: !0,
                children: /* @__PURE__ */ a(Eo, { primary: N })
              },
              `pref-item-${H}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ F(
      Ke,
      {
        open: y !== ke.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ F(Oe, { variant: "h5", children: [
          y,
          " ",
          n(q ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: q ? "md" : "sm",
        fullWidth: !0,
        children: [
          Z && /* @__PURE__ */ F(
            De,
            {
              component: "form",
              onSubmit: Q.handleSubmit,
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
                /* @__PURE__ */ a(De, { size: 12, children: /* @__PURE__ */ a(
                  pt,
                  {
                    value: Q.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ F("span", { children: [
                      n("Preference Name", o),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: Q.handleChange,
                    error: !!Q.errors.prefName,
                    helperText: Q.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(De, { size: 12, children: /* @__PURE__ */ a(
                  pt,
                  {
                    value: Q.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: n("Preference Description", o),
                    name: "prefDesc",
                    onChange: Q.handleChange,
                    error: !!Q.errors.prefDesc,
                    helperText: Q.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(De, { size: 12, children: /* @__PURE__ */ a(
                  ft,
                  {
                    control: /* @__PURE__ */ a(
                      Ao,
                      {
                        checked: Q.values.isDefault,
                        name: "isDefault",
                        onChange: Q.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(De, { size: 12, children: /* @__PURE__ */ F(Fn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    dt,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ a(Jo, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: n("Save", o)
                    }
                  ),
                  /* @__PURE__ */ a(
                    dt,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ a(kr, {}),
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
          q && /* @__PURE__ */ F(De, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ a(De, { size: 12, children: /* @__PURE__ */ a(
              zn,
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
                pageSizeOptions: ul,
                pagination: !0,
                rowCount: M.length,
                rows: M,
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
                    paginationModel: cl
                  }
                },
                localeText: fe
              }
            ) }),
            /* @__PURE__ */ a(De, { size: 12, children: /* @__PURE__ */ a(Fn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
              dt,
              {
                type: "button",
                startIcon: /* @__PURE__ */ a(kr, {}),
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
    /* @__PURE__ */ F(
      Ke,
      {
        open: g,
        onConfirm: () => w(!1),
        title: "",
        okText: n("Ok", o),
        cancelText: "",
        children: [
          '"',
          Q.values.prefName.trim(),
          '": ',
          n("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ F(
      Ke,
      {
        open: !!x.preferenceName,
        onConfirm: ae,
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
}, pl = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((n) => {
  t.lastIndex = 0;
  const o = t.exec(n);
  if (!o) return null;
  const [, l, s = "ASC"] = o;
  return {
    field: l.trim(),
    sort: s.trim().toLowerCase()
  };
}).filter(Boolean), ut = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: n, type: o, isPivotExport: l = !1, icon: s }) => /* @__PURE__ */ F(
  Jn,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": l,
    children: [
      /* @__PURE__ */ a(Je, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: s }),
      e(o, r)
    ]
  }
), fl = ({ exportFormats: e, customExportOptions: r, isStaticDataMode: t = !1, ...n }) => {
  const o = [
    e.csv !== !1 && /* @__PURE__ */ a(ut, { ...n, icon: /* @__PURE__ */ a(Go, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }, "csv"),
    e.excel !== !1 && /* @__PURE__ */ a(ut, { ...n, icon: /* @__PURE__ */ a(Mr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }, "excel"),
    !t && n.showPivotExportBtn && /* @__PURE__ */ a(ut, { ...n, icon: /* @__PURE__ */ a(Mr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }, "pivot"),
    !t && e.xml !== !1 && /* @__PURE__ */ a(ut, { ...n, icon: /* @__PURE__ */ a(jo, { fontSize: "small" }), type: "XML", contentType: "text/xml" }, "xml"),
    !t && e.html !== !1 && /* @__PURE__ */ a(ut, { ...n, icon: /* @__PURE__ */ a(Wo, { fontSize: "small" }), type: "HTML", contentType: "text/html" }, "html"),
    !t && e.json !== !1 && /* @__PURE__ */ a(ut, { ...n, icon: /* @__PURE__ */ a(Uo, { fontSize: "small" }), type: "JSON", contentType: "application/json" }, "json"),
    !t && Array.isArray(r) && r.map((l, s) => /* @__PURE__ */ a(
      ut,
      {
        ...n,
        icon: l.icon || /* @__PURE__ */ a(Mr, { fontSize: "small" }),
        type: l.label || "Excel",
        contentType: l.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        handleExport: l.handleExport || n.handleExport
      },
      l.key || s
    ))
  ].flat().filter(Boolean);
  return o.length === 0 ? null : /* @__PURE__ */ a(oo, { ...n, children: o });
}, sa = (e, r) => {
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
}, hl = (e = {}, r = {}) => {
  let t = !0;
  for (const n in e)
    e[n] !== r[n] && (t = !1);
  for (const n in r)
    n in e || (t = !1);
  return t;
};
ne.extend(jr);
const ml = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: n,
  tTranslate: o,
  tOpts: l
}) => {
  const { systemDateTimeFormat: s, stateData: p } = je(), { fixedFilterFormat: f } = Ge, y = U(() => r?.items?.find((u) => u.field === e.field), [r, e.field]), C = y?.operator || e.toolbarFilter?.defaultOperator || sa(e.type), m = C === "isAnyOf", h = U(() => {
    if (["isEmpty", "isNotEmpty"].includes(C))
      return "";
    if (!y)
      return m ? [] : "";
    const u = y.value;
    return u ?? (m ? [] : "");
  }, [y, m]), g = T((u) => {
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
        operator: C,
        value: u,
        type: e.type
      }, B = S.filter((M) => M.field !== e.field);
      return {
        ...i,
        items: [...B, v]
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
          pt,
          {
            variant: "standard",
            label: o(v, l),
            value: h,
            onChange: (k) => g(k.target.value),
            type: "text",
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "number":
        return /* @__PURE__ */ a(
          pt,
          {
            variant: "standard",
            label: o(v, l),
            value: h,
            onChange: (k) => g(k.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const k = h === "" || h === void 0 || h === null ? "" : h === !0 || h === "true" ? "true" : h === !1 || h === "false" ? "false" : "";
        return /* @__PURE__ */ F($t, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(Pn, { children: o(v, l) }),
          /* @__PURE__ */ F(
            En,
            {
              value: k,
              onChange: (Se) => {
                const ae = Se.target.value;
                let ie;
                ae === "" ? ie = "" : ae === "true" ? ie = !0 : ae === "false" ? ie = !1 : ie = ae, g(ie);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(et, { value: "", children: o("All", l) }),
                /* @__PURE__ */ a(et, { value: "true", children: o("True", l) }),
                /* @__PURE__ */ a(et, { value: "false", children: o("False", l) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const B = e.customLookup || n?.[e.lookup] || [], M = typeof e.lookup == "string" ? B.map((k) => ({
          label: k?.label || "",
          value: k?.value ?? ""
        })) : B, E = Ge.normalizeFilterValue({ value: h, operator: C, isMultiple: m }), R = 1;
        return /* @__PURE__ */ F($t, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(Pn, { children: o(v, l) }),
          /* @__PURE__ */ a(
            En,
            {
              value: E,
              onChange: (k) => g(k.target.value),
              multiple: m,
              size: "small",
              renderValue: (k) => {
                const ae = (Array.isArray(k) ? k : k != null && k !== "" ? [k] : []).map((fe) => {
                  if (fe && typeof fe == "object" && "label" in fe) return o(fe.label, l);
                  const q = M.find((Z) => String(Z.value) === String(fe));
                  return q ? o(q.label, l) : "";
                }).filter(Boolean);
                if (ae.length === 0) return "";
                if (ae.length <= R) return ae.join(", ");
                const ie = ae.slice(0, R).join(", "), re = ae.length - R, Q = ae.join(", ");
                return /* @__PURE__ */ a(St, { title: Q, placement: "top", children: /* @__PURE__ */ a("span", { children: `${ie} +${re}` }) });
              },
              children: M.map((k) => /* @__PURE__ */ a(et, { value: k.value, children: o(k.label, l) }, k.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const X = e.type, _ = f[X], j = s(X === "date", !1, p.dateTime), Y = X === "dateTime" ? Qo : Xo;
        let W = null;
        if (h) {
          const k = ne(h);
          W = k.isValid() ? k : null;
        }
        return /* @__PURE__ */ a(_n, { dateAdapter: Yn, children: /* @__PURE__ */ a(
          Y,
          {
            label: o(v, l),
            format: j,
            value: W,
            onChange: (k) => {
              !k || !k.isValid() ? g(null) : g(k.format(_));
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
          pt,
          {
            variant: "standard",
            label: o(v, l),
            value: h,
            onChange: (k) => g(k.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, nr = pr(Be)({
  margin: "6px"
}), gl = pr(io)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), bl = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: n,
    isReadOnly: o,
    canAdd: l,
    forAssignment: s,
    showAddIcon: p,
    onAdd: f,
    selectionApi: y,
    rowSelectionModel: C,
    selectAll: m,
    available: h,
    onAssign: g,
    assigned: w,
    onUnassign: x,
    effectivePermissions: u,
    clearFilters: i,
    handleExport: S,
    preferenceKey: v,
    apiRef: B,
    tTranslate: M,
    tOpts: E,
    filterModel: R,
    setFilterModel: X,
    onPreferenceChange: _,
    toolbarItems: j,
    gridColumns: Y,
    customExportOptions: W,
    isStaticDataMode: k
  } = e, Se = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), ae = (Z) => Z != null && Z !== "" && !(Array.isArray(Z) && Z.length === 0), re = ((Z = []) => Z.filter(
    (D) => ["isEmpty", "isNotEmpty"].includes(D.operator) || ae(D.value)
  ))(R?.items || []).length || 0, Q = Y?.filter((Z) => Z.toolbarFilter) || [], fe = t?.lookups || {}, q = t?.records || [];
  return /* @__PURE__ */ F(ye, { children: [
    /* @__PURE__ */ F(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "10px"
        },
        children: [
          /* @__PURE__ */ F("div", { children: [
            r.gridSubTitle && /* @__PURE__ */ F(Nt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              M(r.gridSubTitle, E)
            ] }),
            n && r.showPreferenceInHeader && /* @__PURE__ */ F(Nt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              M("Applied Preference", E),
              ": ",
              n
            ] }),
            (o || !l && !s) && /* @__PURE__ */ F(Nt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !l || o ? "" : r.title
            ] }),
            !s && l && !o && /* @__PURE__ */ a(nr, { startIcon: p ? /* @__PURE__ */ a(Nr, {}) : null, onClick: f, size: "medium", variant: "contained", children: M(Se, E) }),
            !!e.headerActions && e.headerActions,
            y.length && q.length ? /* @__PURE__ */ a(
              nr,
              {
                onClick: m,
                size: "medium",
                variant: "contained",
                children: C.ids.size === q.length ? M("Deselect All", E) : M("Select All", E)
              }
            ) : /* @__PURE__ */ a(ye, {}),
            h && /* @__PURE__ */ a(nr, { startIcon: p ? /* @__PURE__ */ a(Nr, {}) : null, onClick: g, size: "medium", variant: "contained", children: M("Assign", E) }),
            w && /* @__PURE__ */ a(nr, { startIcon: p ? /* @__PURE__ */ a(Ho, {}) : null, onClick: x, size: "medium", variant: "contained", children: M("Remove", E) })
          ] }),
          /* @__PURE__ */ F(gl, { ...e, children: [
            u.showColumnsOrder && /* @__PURE__ */ a(
              lo,
              {
                render: (Z) => /* @__PURE__ */ a(
                  Be,
                  {
                    ...Z,
                    startIcon: /* @__PURE__ */ a(Yo, {}),
                    size: "small",
                    variant: "text",
                    children: M("COLUMNS", E)
                  }
                )
              }
            ),
            u.filter && /* @__PURE__ */ F(ye, { children: [
              /* @__PURE__ */ a(
                so,
                {
                  render: (Z) => /* @__PURE__ */ a(
                    Be,
                    {
                      ...Z,
                      startIcon: /* @__PURE__ */ a(To, { badgeContent: re, color: "primary", children: /* @__PURE__ */ a(Ko, {}) }),
                      size: "small",
                      variant: "text",
                      children: M("FILTERS", E)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Be, { startIcon: /* @__PURE__ */ a(_o, {}), onClick: i, size: "small", children: M("CLEAR FILTER", E) })
            ] }),
            u.export && /* @__PURE__ */ a(fl, { handleExport: S, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, customExportOptions: W, tTranslate: M, tOpts: E, isStaticDataMode: k }),
            j,
            v && /* @__PURE__ */ a(
              dl,
              {
                gridRef: B,
                preferenceKey: v,
                onPreferenceChange: _,
                t: M,
                tOpts: E
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Te, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: Q.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: Q.map((Z) => /* @__PURE__ */ a(
      ml,
      {
        column: Z,
        filterModel: R,
        setFilterModel: X,
        lookupData: fe,
        tTranslate: M,
        tOpts: E
      },
      Z.field
    )) }) })
  ] });
};
function zt(e) {
  const { t: r, i18n: t } = dr(), n = ht.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((l) => l);
  return { translate: r, i18n: t, tOpts: n, tTranslate: o };
}
const yl = 50, Cl = /(\w+)( ASC| DESC)?/i, xl = 6e4, wl = 0, ca = 1e6, Ne = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, vl = {
  article: /* @__PURE__ */ a(mo, {}),
  edit: /* @__PURE__ */ a(jn, {}),
  copy: /* @__PURE__ */ a(ho, {}),
  delete: /* @__PURE__ */ a(Gn, {}),
  history: /* @__PURE__ */ a(ei, {}),
  download: /* @__PURE__ */ a(ti, {})
}, J = {
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
}, ua = ["isEmpty", "isNotEmpty"], Dl = Object.freeze([]), Sl = Object.freeze({
  items: [],
  logicOperator: "and",
  quickFilterValues: [],
  quickFilterLogicOperator: "and"
}), Fl = Object.freeze({ page: 0, pageSize: ca }), Pl = (e) => e, El = (e) => {
  const r = Array.isArray(e) ? e : Array.isArray(e?.records) ? e.records : [];
  return {
    records: r,
    recordCount: Number.isFinite(e?.recordCount) ? e.recordCount : r.length,
    lookups: e && typeof e.lookups == "object" && e.lookups !== null && !Array.isArray(e.lookups) ? e.lookups : {}
  };
}, Al = (e) => (e || []).filter((r) => ua.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), Tl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], Ml = (e) => e.value ? /* @__PURE__ */ a(Lo, { style: { color: "green" } }) : /* @__PURE__ */ a(kr, { style: { color: "gray" } }), On = pr("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), Il = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const n = uo(), o = e.row[t], s = po(n, fo)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    Zn,
    {
      onClick: (f) => {
        f.stopPropagation(), r({ row: e.row });
      },
      checked: s,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, Bn = $n(({
  model: e,
  columns: r,
  api: t,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: l,
  parent: s,
  where: p,
  title: f,
  showPageTitle: y,
  permissions: C,
  selected: m,
  assigned: h,
  available: g,
  disableCellRedirect: w = !1,
  onAssignChange: x,
  customStyle: u,
  onCellClick: i,
  showRowsSelected: S,
  showFullScreenLoader: v,
  customFilters: B,
  onRowDoubleClick: M,
  onRowClick: E = () => {
  },
  gridStyle: R,
  reRenderKey: X,
  additionalFilters: _,
  onCellDoubleClickOverride: j,
  onAddOverride: Y,
  dynamicColumns: W,
  toolbarItems: k,
  readOnly: Se = !1,
  onListParamsChange: ae,
  apiRef: ie,
  baseFilters: re,
  customExportOptions: Q,
  sx: fe,
  ...q
}) => {
  const Z = q.staticData ?? e.staticData, D = Array.isArray(Z) || Array.isArray(Z?.records), N = U(
    () => D ? El(Z) : null,
    [D, Z]
  ), [ee, H] = O({ pageSize: yl, page: 0 }), [$, Me] = O(() => N || { recordCount: 0, records: null, lookups: {} }), Le = !!x, At = S, [ge, nt] = O({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [gt, at] = O(!1), [We, Gt] = O(null), jt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [Wt, Tt] = O(!1), se = Et(), Ut = D || e.localSortAndFilter || e.paginationMode === J.client ? J.client : J.server, { translate: Ce, tOpts: c } = zt(e), [Fe, hr] = O(""), [qt, bt] = O(pl(n || e.defaultSort, J, Cl)), ot = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (ot.items = [], e.defaultFilters.forEach((b) => {
    ot.items.push(b);
  }));
  const [$e, he] = O({ ...ot }), { navigate: Ie, getParams: mr, useParams: gr, pathname: Ht } = Hr(), { id: br } = gr() || mr, yt = br?.split("-")[0], xe = ie || Vn(), Pe = t || e.api, it = D && !Pe, { idProperty: ce = "id", showHeaderFilters: _t = !0, disableRowSelectionOnClick: yr = !0, hideTopFilters: Yt = !0, updatePageTitle: z = !0, isElasticScreen: we = !1, navigateBack: ue = !1, selectionApi: Ee = {}, debounceTimeOut: Ze = 300, showFooter: Ct = !0, disableRowGrouping: Kt = !0, localSortAndFilter: Ve = !1 } = e, Mt = D || Ve ? J.client : Ut, It = Ve ? Dl : qt, Cr = Ve ? Sl : $e, Yr = Ve ? Fl : ee, Ue = e.readOnly === !0 || Se || it, Kr = e.allowDoubleClick === !1, Jr = or($), lt = or(null);
  le(() => () => {
    lt.current?.abort(), lt.current = null;
  }, []);
  const Zr = e.showAddIcon === !0, Qr = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: Ot, formatDate: Xr, getApiEndpoint: xr, buildUrl: xt, setPageTitle: wr } = je(), [ma, Jt] = O(!1), { timeZone: Cs } = Ot, st = U(() => ({ ...J.permissions, ...e.permissions, ...C }), [e.permissions, C]), en = ["isEmpty", "isNotEmpty", "isAnyOf"], ga = Ot.userData || {}, Zt = e.columns.find((b) => b.type === "fileUpload")?.field || "", ba = { add: st.add, edit: st.edit, delete: st.delete }, { canAdd: tn, canEdit: rn, canDelete: nn } = la({ userData: ga, model: e, userDefinedPermissions: ba }), d = U(() => e.tTranslate ?? Pl, [e.tTranslate]), { addUrlParamKey: Qt, searchParamKey: Bt, hideBreadcrumb: ya = !1, tableName: an, showHistory: on = !0, hideBreadcrumbInGrid: Ca = !1, breadcrumbColor: xa, disablePivoting: wa = !1, columnHeaderHeight: va = 70, disablePagination: ln = !1 } = e, sn = e.gridTitle || e.title, Rt = xr("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, Qe = new URLSearchParams(window.location.search), [cn, Da] = O(null), [un, Sa] = O(!Rt), wt = d("This action requires an API endpoint.", c), [vr, Dr] = O(null), Fa = U(() => new Set(vr ? [vr] : []), [vr]), Pa = typeof e.getDetailPanelContent == "function", [Ea, Sr] = O([]);
  le(() => {
    xe.current && (xe.current.prefKey = Rt);
  }, [xe, Rt]);
  const dn = T((b) => {
    Da(b), Sa(!0);
  }, []), Aa = U(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? d(b.headerName, c) : b.headerName
  })) : [], [e.columnGroupingModel, c, Ce, d]);
  le(() => {
    Array.isArray(q.rowGroupingField) ? Sr(q.rowGroupingField) : Sr([]);
  }, [q.rowGroupingField]);
  const Fr = Qe.has("baseData") && Qe.get("baseData"), pn = U(() => {
    if (Fr)
      try {
        const b = JSON.parse(Fr);
        if (typeof b === J.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [Fr]), Ta = T(({ row: b }) => {
    const A = b[ce];
    nt((I) => {
      const P = new Set(I?.ids || []);
      return P.has(A) ? P.delete(A) : P.add(A), { type: "include", ids: P };
    });
  }, [ce]), fn = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b, A, I) => Xr({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: Ot.dateTime }),
      filterOperators: Br({ columnType: "date", label: d("Value", c) })
    },
    dateTime: {
      valueFormatter: (b, A, I) => Xr({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Ot.dateTime }),
      filterOperators: Br({ columnType: "dateTime", label: d("Value", c) })
    },
    boolean: {
      renderCell: Ml
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ a(Il, { params: b, handleSelectRow: Ta, idProperty: ce })
    }
  };
  le(() => {
    Jr.current = $, typeof q.onDataLoaded == "function" && q.onDataLoaded($);
  }, [$]), le(() => {
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
  }, [D, N]), le(() => {
    if (!B || !Object.keys(B).length) return;
    if (B.clear) {
      he({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(B).reduce((A, [I, P]) => (I === J.startDate || I === J.endDate ? A.push(P) : I in B && A.push({ field: I, value: P, operator: "equals", type: "string" }), A), []);
    he({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [B]);
  const Ma = T(({ field: b, lookupMap: A }) => {
    const I = Jr.current.lookups || {}, P = A || {};
    return P[b]?.customLookup || I[P[b]?.lookup] || [];
  }, []);
  le(() => {
    q.isChildGrid;
  }, [q.isChildGrid, Yt]);
  const hn = T(
    ({ key: b, title: A, icon: I, color: P = "primary", disabled: V, otherProps: G }) => /* @__PURE__ */ a(
      Rr,
      {
        icon: /* @__PURE__ */ a(St, { title: d(A, c), children: vl[I] || I || d(A, c) }),
        "data-action": b,
        label: d(A, c),
        color: P,
        disabled: V,
        ...G
      },
      b
    ),
    [Ce, c, d]
  ), { customActions: Xt = [] } = e, er = U(() => {
    const b = [];
    return !Le && !Ue && b.push(
      {
        key: Ne.Edit,
        title: "Edit",
        icon: "edit",
        show: !!rn,
        disabled: (A) => A.canEdit === !1
      },
      {
        key: Ne.Copy,
        title: "Copy",
        icon: "copy",
        show: !!st.copy
      },
      {
        key: Ne.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!nn
      },
      {
        key: Ne.History,
        title: "History",
        icon: "history",
        show: !!on
      },
      ...Xt
    ), b.push({
      key: Ne.Download,
      title: "Download document",
      icon: "download",
      show: Zt.length > 0
    }), b.filter(({ show: A }) => A !== !1);
  }, [
    Le,
    Ue,
    rn,
    nn,
    on,
    st.copy,
    Zt.length,
    Xt
  ]), Ia = T(
    ({ row: b }) => er.map(
      ({ key: A, title: I, icon: P, color: V, disabled: G, show: L, action: te, ...oe }) => hn({
        key: A,
        title: I || te,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: P,
        color: V,
        disabled: G?.(b),
        otherProps: oe
      })
    ),
    [er, hn]
  ), { gridColumns: ve, pinnedColumns: mn, lookupMap: Pr } = U(() => {
    let b = r || e.gridColumns || e.columns;
    W && (b = [...W, ...b]);
    const A = { left: [co.field], right: [] }, I = [], P = {}, V = { ...fn, ...e.gridColumnTypes };
    for (const L of b) {
      if (L.gridLabel === null || s && L.lookup === s || L.type === J.oneToMany && L.countInList === !1) continue;
      const te = {};
      if (L.type === J.oneToMany && (te.type = "number", te.field = L.field.replace(/s$/, "Count")), V[L.type] && Object.assign(te, V[L.type]), te.valueOptions === J.lookup && (te.valueOptions = (de) => Ma({ ...de, lookupMap: P })), (L.linkTo || L.link) && (te.cellClassName = "mui-grid-linkColumn"), L.hyperlinkURL && !L.renderCell) {
        const { hyperlinkURL: de, hyperlinkIndex: pe } = L;
        te.renderCell = (qe) => {
          const { value: K, formattedValue: Ae, row: vt } = qe;
          if (K == null || K === "") return K;
          const Xe = pe ? vt[pe] : K, kt = de.replace("{0}", encodeURIComponent(String(Xe)));
          return /* @__PURE__ */ a("a", { href: kt, rel: "noopener noreferrer", target: "_blank", children: Ae ?? K });
        };
      }
      Kt || (te.groupable = L.groupable ?? !1);
      const oe = d((typeof L.gridLabel == "function" ? L.gridLabel({ column: L, t: d, tOpts: c }) : L.gridLabel) || L.label, c);
      I.push({ ...L, ...te, headerName: oe, description: oe }), L.pinned && A[L.pinned === J.right ? J.right : J.left].push(L.field), P[L.field] = L;
    }
    let G = e.standard;
    return G === !0 && (G = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), G && typeof G === J.object && Tl.forEach(({ key: L, field: te, type: oe, header: de }) => {
      if (G[L] === !0) {
        const pe = { field: te, type: oe, headerName: d(de, c), width: 200 };
        oe === J.dateTime && (pe.filterOperators = Br({ columnType: "dateTime" }), pe.valueFormatter = fn.dateTime.valueFormatter, pe.localize = !0), I.push(pe);
      }
    }), er.length && (I.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? J.defaultActionWidth) * er.length,
      hidable: !1,
      getActions: Ia,
      headerName: d("Actions", c)
    }), A.right.push("actions")), { gridColumns: I, pinnedColumns: A, lookupMap: P };
  }, [r, e, s, C, Le, W, Ce, Ot?.dateTime]), Er = or(!1);
  le(() => {
    if (Er.current) return;
    const b = ve?.filter((P) => P.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if ($e.items.some(
      (P) => b.some((V) => V.field === P.field)
    )) {
      Er.current = !0;
      return;
    }
    const I = b.map((P) => {
      const V = sa(P.type, P.toolbarFilter?.defaultOperator), G = Ge.normalizeFilterValue({
        operator: V,
        value: P.toolbarFilter.defaultFilterValue
      });
      return {
        field: P.field,
        operator: V,
        value: G,
        type: P.type
      };
    }).filter((P) => {
      const V = P.value;
      return !(Array.isArray(V) && V.length === 0);
    });
    I.length > 0 && he((P) => ({
      ...P,
      items: [...P.items, ...I]
    })), Er.current = !0;
  }, [ve]);
  const ze = T(async ({ action: b = "list", extraParams: A = {}, isPivotExport: I = !1, contentType: P, columns: V } = {}) => {
    if (D) {
      P || Me(N);
      return;
    }
    const { pageSize: G, page: L } = Yr, te = !!P, oe = xt(I ? e.pivotApi : Pe), de = {
      ...Cr,
      items: Al(Cr.items)
    }, pe = Array.isArray(re) ? [...re] : [];
    e.joinColumn && yt && pe.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(yt) }), _ && (de.items = [...de.items || [], ..._]);
    const qe = [];
    Array.isArray(pe) && qe.push(...pe), Array.isArray(l) && qe.push(...l);
    const K = {
      ...A,
      ...q.extraParams
      // Merge any custom params passed via component props
    };
    if ((h || g) && (K[h ? "include" : "exclude"] = Array.isArray(m) ? m.join(",") : m), I && (e.exportTemplate && (K.template = e.exportTemplate), e.configFileName && (K.configFileName = e.configFileName)), !(!de.items.length || de.items.every((He) => "value" in He && He.value !== void 0))) return;
    let vt = null, Xe = null;
    te || (lt.current && lt.current.abort(), Xe = new AbortController(), lt.current = Xe, vt = Xe.signal);
    const kt = {
      action: b,
      page: te ? wl : L,
      pageSize: te ? ca : G,
      sortModel: It,
      filterModel: de,
      gridColumns: ve,
      model: e,
      baseFilters: qe,
      api: oe,
      extraParams: K
    };
    typeof ae == "function" && ae(kt), xe.current.listParams = kt, te || Jt(!0);
    try {
      const He = await Lr({ ...kt, contentType: P, columns: V, signal: vt });
      if (!te && He !== void 0 && lt.current === Xe) {
        if (He?.aborted) return;
        Me(He);
      }
    } catch (He) {
      if (He?.aborted || He?.name === "AbortError" || Xe?.signal?.aborted) return;
      se.showError(d("An error occurred while fetching data", c)), te || Me((_a) => ({ ..._a, records: [], recordCount: 0 }));
    } finally {
      !te && lt.current === Xe && Jt(!1);
    }
  }, [D, N, Yr, xt, e, Pe, Cr, re, yt, h, g, m, q.extraParams, It, ve, l, ae, xe, Lr, se, _, d, c]), ct = T(async ({ id: b, record: A = {}, mode: I }) => {
    if (o) {
      if (it) {
        se.showError(wt);
        return;
      }
      try {
        const V = xt(Pe), G = await lr({ id: b, api: V, model: e, parentFilters: l, where: p });
        o(G);
      } catch {
        se.showError(d("Could not load record", c));
      }
      return;
    }
    let P = Ht;
    P.endsWith("/") || (P += "/"), I === "copy" ? P += "0-" + b : P += b, Qt && (Qe.set(Qt, A[Qt]), P += `?${Qe.toString()}`), Ie(P);
  }, [o, it, Pe, wt, e, l, p, Ht, Qt, Qe, Ie, lr, xt, se, d, c]), gn = T(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), Oa = T(async (b, A, I) => {
    let P = b.field === e.linkColumn ? Ne.Edit : null;
    if (!P && b.field === J.actions && (P = I?.action, !P)) {
      const oe = A.target.closest("button");
      oe && (P = oe.dataset.action);
    }
    const { row: V } = b;
    if (!Ue) {
      if (i && typeof await i({ cellParams: b, event: A, details: I }) !== J.boolean)
        return;
      const oe = Pr[b.field] || {};
      if (oe.linkTo) {
        Ie({
          pathname: rr.replaceTags(oe.linkTo, V)
        });
        return;
      }
      switch (P) {
        case Ne.Edit:
          if (e.getDetailPanelContent) {
            const pe = V[ce];
            Dr((qe) => qe === pe ? null : pe);
            return;
          } else
            return ct({ id: V[ce], record: V });
        case Ne.Copy:
          return ct({ id: V[ce], mode: "copy" });
        case Ne.Delete:
          at(!0), Gt({ name: V[e.linkColumn], id: V[ce] });
          break;
        case Ne.History:
          return Ie(`${xr("history")}?tableName=${an}&id=${V[ce]}&breadCrumb=${Bt ? Qe.get(Bt) : sn}`);
        default:
          const de = Xt.find((pe) => pe.action === P && typeof pe.onClick === J.function);
          if (de) {
            de.onClick({ row: V, navigate: Ie });
            return;
          }
          break;
      }
    }
    if (P === Ne.Download && gn({ documentLink: V[Zt] }), !Qr.length)
      return;
    const { row: G } = b, L = Pr[b.field] || {}, te = {
      pathname: rr.replaceTags(L.linkTo, G)
    };
    e.addRecordToState && (te.state = G), Ie(te);
  }, [Ue, i, Pr, e, ce, Zt, Ie, Qr, Xt, an, Bt, Qe, sn, xr, gn, ct]), Ba = T(async () => {
    if (it) {
      se.showError(wt);
      return;
    }
    const b = xt(Pe);
    try {
      await Ur({ id: We.id, api: b, model: e }), se.showMessage(d("Record Deleted Successfully.", c)), ze();
    } catch (A) {
      se.showError(d("Delete failed", c), A.message);
    } finally {
      at(!1);
    }
  }, [it, wt, Pe, We?.id, se, e, ze, d, c]), bn = T(() => {
    hr(null), at(!1);
  }, []), Ra = T((b) => (typeof q.processRowUpdate == "function" && q.processRowUpdate(b, $), b), [q.processRowUpdate, $]), ka = T((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: A } = b;
    if (typeof j === J.function) {
      j(b);
      return;
    }
    if (!Ue && !Kr && !w && ct({ id: A[ce], record: A }), Ue && e.rowRedirectLink) {
      const I = {
        pathname: rr.replaceTags(e.rowRedirectLink, A)
      };
      e.addRecordToState && (I.state = A), Ie(I);
    }
    typeof M === J.function && M(b);
  }, [j, Ue, Kr, w, ct, ce, e.rowRedirectLink, e.addRecordToState, Ie, M, rr]), Na = T(async () => {
    if (ge.ids.size < 1) {
      se.showError(d("Please select at least one record to proceed", c));
      return;
    }
    const b = Array.from(ge.ids), A = new Map(($.records || []).map((G) => [G[ce], G]));
    let I = b.map((G) => ({ ...pn, ...A.get(G) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (I = I.map(
      (G) => Object.fromEntries(e.selectionUpdateKeys.map((L) => [L, G[L]]))
    ));
    const P = Ee || Pe;
    if (!P) {
      se.showError(wt);
      return;
    }
    const V = xt(P);
    Jt(!0);
    try {
      const G = await qr({
        id: 0,
        api: `${V}/updateMany`,
        values: { items: I },
        model: e
      });
      if (G) {
        ze();
        const L = G.info ? G.info : d("Record Added Successfully.", c);
        se.showMessage(L);
      }
    } catch (G) {
      se.showError(G.message || d("An error occurred, please try after some time.", c));
    } finally {
      Jt(!1), nt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), Tt(!1);
    }
  }, [ge.ids, se, wt, $.records, ce, pn, e.selectionUpdateKeys, Ee, Pe, e, ze, d, c]), yn = T(() => {
    if (Ee.length > 0) {
      if (ge.ids.size > 0) {
        Tt(!0);
        return;
      }
      se.showError(
        d("Please select at least one record to proceed", c)
      );
      return;
    }
    typeof Y === J.function ? Y() : ct({ id: 0 });
  }, [Ee, se, Y, ct, ge.ids.size, d, c]), Cn = T(() => {
    $e?.items?.length && he({ ...J.gridFilterModel });
  }, [$e]), tr = T(({ unassign: b, assign: A }) => {
    const I = Array.isArray(m) ? m : m.length ? m.split(",") : [], P = b ? I.filter((V) => !b.includes(parseInt(V))) : [...I, ...A];
    x(typeof m === J.string ? P.join(",") : P);
  }, [m, x]), xn = T(() => {
    tr({ assign: Array.from(ge.ids) });
  }, [tr, ge.ids]), wn = T(() => {
    tr({ unassign: Array.from(ge.ids) });
  }, [tr, ge.ids]), vn = T(() => {
    const b = $.records || [];
    if (ge.ids.size === b.length)
      nt({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const I = b.map((P) => P[ce]);
      nt({
        type: "include",
        ids: new Set(I)
      });
    }
  }, [ge, $.records, ce]), La = T((b) => b[ce], [ce]), Dn = T((b) => {
    const A = b.currentTarget?.dataset?.contentType || b.target?.dataset?.contentType, I = (b.currentTarget?.dataset?.isPivotExport || b.target?.dataset?.isPivotExport) === "true";
    if (D || Ve) {
      if (A === "text/csv") {
        xe.current?.exportDataAsCsv?.();
        return;
      }
      if (A === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        xe.current?.exportDataAsExcel?.();
        return;
      }
      return;
    }
    if ($?.recordCount > xl) {
      se.showMessage(d("Cannot export more than 60k records, please apply filters or reduce your results using filters", c));
      return;
    }
    const { orderedFields: P, columnVisibilityModel: V, lookup: G } = xe.current.state.columns, L = Object.keys(V).filter((K) => V[K] === !1), te = new Set(ve.filter((K) => K.exportable === !1).map((K) => K.field)), oe = P.filter(
      (K) => !te.has(K) && !L.includes(K) && K !== "__check__" && K !== "actions"
    );
    if (oe.length === 0) {
      se.showMessage(d("You cannot export while all columns are hidden... please show at least 1 column before exporting", c));
      return;
    }
    const de = {}, pe = Object.fromEntries(ve.map((K) => [K.field, K]));
    oe.forEach((K) => {
      const Ae = G[K], vt = pe[K];
      de[K] = {
        field: K,
        width: Ae.width,
        headerName: vt?.headerName || Ae.headerName || Ae.field,
        type: Ae.type,
        isParsable: Ae.isParsable,
        lookup: Ae.lookup,
        hyperlinkURL: Ae.hyperlinkURL,
        hyperlinkIndex: Ae.hyperlinkIndex,
        localize: Ae.localize,
        exportIndex: Ae.exportIndex
      };
    });
    const qe = e?.formActions?.export || I ? e?.formActions?.export || "export" : void 0;
    ze({
      action: qe,
      isPivotExport: I,
      contentType: A,
      columns: de
    });
  }, [D, Ve, $?.recordCount, xe, ve, se, e, ze, d, c]);
  le(() => {
    !Pe && !D || !un || ze();
  }, [Pe, D, un, ze]), le(() => {
    if (!(q.isChildGrid || Le || !z))
      return wr({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        wr(null);
      };
  }, [wr, e.pageTitle, e.title, q.isChildGrid, Le, z]);
  const $a = T((b) => {
    const { items: A } = b, I = A.map((P) => {
      const { field: V, operator: G, value: L } = P, oe = (ve.find((de) => de.field === V) || {}).type === J.Number;
      return ua.includes(G) ? { ...P, value: null } : oe && L < 0 ? { ...P, value: null } : en.includes(G) || oe && !isNaN(L) || !oe ? (we && ve.filter((pe) => pe.field === V)[0]?.isKeywordField && (P.filterField = `${P.field}.keyword`), { ...P }) : { ...P, value: oe ? null : L };
    });
    he({ ...b, items: I });
  }, [ve, J.Number, en, we, he]), Va = T((b) => {
    const A = b.map((I) => {
      const P = ve.filter((L) => L.field === I.field)[0] || {}, V = we && P.isKeywordField, G = { ...I, filterField: V ? `${I.field}.keyword` : I.field };
      return P.dataIndex && (G.filterField = P.dataIndex), G;
    });
    bt(A);
  }, [ve, we, bt]), Sn = f || e.gridTitle || e.title, za = Bt ? [{ text: Qe.get(Bt) || Sn }] : [{ text: Sn }], Ga = T((b) => {
    Dr(b.size > 0 ? [...b].pop() : null);
  }, []), ja = T((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      Dr(null), ze();
    },
    t: d,
    tOpts: c
  }) : null, [e.getDetailPanelContent, ze, d, c]), Wa = U(() => ({
    filterValueTrue: d("Yes", c),
    filterValueFalse: d("No", c),
    noRowsLabel: d("No data", c),
    footerTotalRows: `${d("Total rows", c)}:`,
    MuiTablePagination: {
      labelRowsPerPage: d("Rows per page", c),
      labelDisplayedRows: ({ from: b, to: A, count: I }) => `${b}–${A} ${d("of", c)} ${I}`
    },
    toolbarQuickFilterPlaceholder: d(e?.searchPlaceholder || "Search...", c),
    toolbarColumns: d("Columns", c),
    toolbarFilters: d("Filters", c),
    toolbarExport: d("Export", c),
    filterPanelAddFilter: d("Add filter", c),
    filterPanelRemoveAll: d("Remove all", c),
    filterPanelDeleteIconLabel: d("Delete", c),
    filterPanelColumns: d("Columns", c),
    filterPanelOperator: d("Operator", c),
    filterPanelValue: d("Value", c),
    filterPanelInputLabel: d("Value", c),
    filterPanelInputPlaceholder: d("Filter value", c),
    columnMenuLabel: d("Menu", c),
    columnMenuShowColumns: d("Show columns", c),
    columnMenuManageColumns: d("Manage columns", c),
    columnMenuFilter: d("Filter", c),
    columnMenuHideColumn: d("Hide column", c),
    columnMenuManagePivot: d("Manage pivot", c),
    toolbarColumnsLabel: d("Select columns", c),
    toolbarExportLabel: d("Export", c),
    pivotDragToColumns: d("Drag here to pivot by", c),
    pivotDragToRows: d("Drag here to group by", c),
    pivotDragToValues: d("Drag here to create values", c),
    pivotColumns: d("Pivot columns", c),
    pivotRows: d("Row groups", c),
    pivotValues: d("Values", c),
    pivotMenuRows: d("Rows", c),
    pivotMenuColumns: d("Columns", c),
    pivotMenuValues: d("Values", c),
    pivotToggleLabel: d("Pivot", c),
    pivotSearchControlPlaceholder: d("Search pivot columns", c),
    columnMenuUnsort: d("Unsort", c),
    columnMenuSortAsc: d("Sort by ascending", c),
    columnMenuSortDesc: d("Sort by descending", c),
    columnMenuUnpin: d("Unpin", c),
    columnsPanelTextFieldLabel: d("Find column", c),
    columnsPanelTextFieldPlaceholder: d("Column title", c),
    columnsPanelHideAllButton: d("Hide all", c),
    columnsPanelShowAllButton: d("Show all", c),
    pinToLeft: d("Pin to left", c),
    pinToRight: d("Pin to right", c),
    unpin: d("Unpin", c),
    filterValueAny: d("any", c),
    filterOperatorIs: d("is", c),
    filterOperatorNot: d("is not", c),
    filterOperatorIsAnyOf: d("is any of", c),
    filterOperatorContains: d("contains", c),
    filterOperatorDoesNotContain: d("does not contain", c),
    filterOperatorEquals: d("equals", c),
    filterOperatorDoesNotEqual: d("does not equal", c),
    filterOperatorStartsWith: d("starts with", c),
    filterOperatorEndsWith: d("ends with", c),
    filterOperatorIsEmpty: d("is empty", c),
    filterOperatorIsNotEmpty: d("is not empty", c),
    filterOperatorAfter: d("is after", c),
    filterOperatorOnOrAfter: d("is on or after", c),
    filterOperatorBefore: d("is before", c),
    filterOperatorOnOrBefore: d("is on or before", c),
    toolbarFiltersTooltipHide: d("Hide filters", c),
    toolbarFiltersTooltipShow: d("Show filters", c),
    //filter textfield labels
    headerFilterOperatorContains: d("contains", c),
    headerFilterOperatorEquals: d("equals", c),
    headerFilterOperatorStartsWith: d("starts with", c),
    headerFilterOperatorEndsWith: d("ends with", c),
    headerFilterOperatorIsEmpty: d("is empty", c),
    headerFilterOperatorIsNotEmpty: d("is not empty", c),
    headerFilterOperatorAfter: d("is after", c),
    headerFilterOperatorOnOrAfter: d("is on or after", c),
    headerFilterOperatorBefore: d("is before", c),
    headerFilterOperatorOnOrBefore: d("is on or before", c),
    headerFilterOperatorIs: d("is", c),
    "headerFilterOperator=": d("equals", c),
    "headerFilterOperator!=": d("does not equal", c),
    "headerFilterOperator>": d("greater than", c),
    "headerFilterOperator>=": d("greater than or equal to", c),
    "headerFilterOperator<": d("less than", c),
    "headerFilterOperator<=": d("less than or equal to", c),
    columnsManagementSearchTitle: d("Search", c),
    columnsManagementNoColumns: d("No columns", c),
    paginationRowsPerPage: d("Rows per page", c),
    paginationDisplayedRows: ({ from: b, to: A, count: I }) => `${b}–${A} ${d("of", c)} ${I}`,
    toolbarQuickFilterLabel: d("Search", c),
    toolbarFiltersTooltipActive: (b) => `${b} ${d(b === 1 ? "active filter" : "active filters", c)}`,
    columnHeaderSortIconLabel: d("Sort", c),
    filterPanelOperatorAnd: d("And", c),
    filterPanelOperatorOr: d("Or", c),
    noResultsOverlayLabel: d("No results found", c),
    columnHeaderFiltersTooltipActive: (b) => `${b} ${d(b === 1 ? "active filter" : "active filters", c)}`,
    detailPanelToggle: d("Detail panel toggle", c),
    checkboxSelectionHeaderName: d("Checkbox selection", c),
    columnsManagementShowHideAllText: d("Show/Hide all", c),
    noColumnsOverlayLabel: d("No columns", c),
    noColumnsOverlayManageColumns: d("Manage columns", c),
    columnsManagementReset: d("Reset", c),
    groupColumn: (b) => `${d("Group by", c)} ${b}`,
    unGroupColumn: (b) => `${d("Ungroup", c)} ${b}`,
    footerRowSelected: (b) => {
      const A = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${d(A, c)}`;
    }
  }), [d, c, e?.searchPlaceholder]), Ua = U(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: $,
      currentPreference: cn,
      isReadOnly: Ue,
      canAdd: tn,
      forAssignment: Le,
      showAddIcon: Zr,
      onAdd: yn,
      selectionApi: Ee,
      rowSelectionModel: ge,
      selectAll: vn,
      available: g,
      onAssign: xn,
      assigned: h,
      onUnassign: wn,
      effectivePermissions: st,
      clearFilters: Cn,
      handleExport: Dn,
      preferenceKey: Rt,
      apiRef: xe,
      gridColumns: ve,
      tTranslate: d,
      tOpts: c,
      idProperty: ce,
      filterModel: $e,
      setFilterModel: he,
      onPreferenceChange: dn,
      toolbarItems: k,
      headerActions: q.headerActions,
      customExportOptions: Q,
      isStaticDataMode: D || Ve
    },
    footer: {
      pagination: ln !== !0,
      apiRef: xe,
      tTranslate: d,
      tOpts: c
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: d("Go to previous page", c),
        "aria-label": d("Go to previous page", c)
      },
      nextIconButtonProps: {
        title: d("Go to next page", c),
        "aria-label": d("Go to next page", c)
      }
    }
  }), [e, $, cn, Ue, tn, Le, Zr, yn, Ee, ge, vn, g, xn, h, wn, st, Cn, Dn, Rt, xe, ve, d, c, ce, $e, he, dn, k, q.headerActions, Q, D]), qa = U(() => ({
    columns: {
      columnVisibilityModel: jt
    },
    pinnedColumns: mn
  }), [jt, mn]), Ha = U(() => ({
    headerFilterMenu: !1,
    toolbar: bl,
    footer: Ri
  }), []);
  return /* @__PURE__ */ F(ye, { children: [
    y !== !1 && /* @__PURE__ */ a(
      ia,
      {
        navigate: Ie,
        showBreadcrumbs: !ya && !Ca,
        breadcrumbs: za,
        enableBackButton: ue,
        breadcrumbColor: xa,
        model: e
      }
    ),
    /* @__PURE__ */ F(Te, { style: R || u, children: [
      /* @__PURE__ */ a(Te, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        zn,
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
          headerFilters: _t,
          unstable_headerFilters: _t,
          checkboxSelection: Le,
          loading: !$.records || ma,
          className: "pagination-fix",
          onCellClick: Oa,
          onCellDoubleClick: ka,
          columns: ve,
          paginationModel: ee,
          pageSizeOptions: J.pageSizeOptions,
          onPaginationModelChange: H,
          pagination: !ln,
          rowCount: $.recordCount,
          rows: $.records || [],
          sortModel: qt,
          paginationMode: Ut,
          sortingMode: Mt,
          filterMode: Mt,
          processRowUpdate: Ra,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Va,
          onFilterModelChange: $a,
          rowSelectionModel: ge,
          onRowSelectionModelChange: nt,
          filterModel: $e,
          getRowId: La,
          onRowClick: E,
          slots: Ha,
          slotProps: Ua,
          hideFooterSelectedRowCount: At,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: xe,
          disableAggregation: !0,
          disableRowGrouping: Kt,
          disableRowSelectionOnClick: yr,
          disablePivoting: wa,
          filterDebounceMs: Ze,
          initialState: qa,
          ...Pa && {
            getDetailPanelContent: ja,
            detailPanelExpandedRowIds: Fa,
            onDetailPanelExpandedRowIdsChange: Ga
          },
          localeText: Wa,
          showToolbar: !0,
          columnHeaderHeight: va,
          hideFooter: !Ct,
          rowGroupingModel: Ea,
          onRowGroupingModelChange: (b) => Sr(b),
          getRowClassName: q.getRowClassName,
          columnGroupingModel: Aa
        }
      ) }),
      Fe && /* @__PURE__ */ F(Ke, { open: !!Fe, onConfirm: bn, onCancel: bn, title: "Info", hideCancelButton: !0, children: [
        " ",
        Fe
      ] }),
      gt && !Fe && /* @__PURE__ */ a(Ke, { open: gt, onConfirm: Ba, onCancel: () => at(!1), title: d("Confirm Delete", c), okText: d("Ok", c), cancelText: d("Cancel", c), children: /* @__PURE__ */ F(On, { children: [
        d("Are you sure you want to delete", c),
        " ",
        We.name && /* @__PURE__ */ a(St, { style: { display: "inline" }, title: We.name, arrow: !0, children: We.name.length > 30 ? `${We.name.slice(0, 30)}...` : We.name }),
        " ?"
      ] }) }),
      Wt && /* @__PURE__ */ a(
        Ke,
        {
          open: Wt,
          onConfirm: Na,
          onCancel: () => Tt(!1),
          title: d("Confirm Add", c),
          okText: d("Ok", c),
          cancelText: d("Cancel", c),
          children: /* @__PURE__ */ F(On, { children: [
            d("Are you sure you want to add", c),
            " ",
            ge.ids.size,
            " ",
            d("records", { count: ge.ids.size, ...c }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, hl), Ol = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = (p) => {
    t.setFieldValue(r, p.target.checked);
  }, l = U(() => t.values[r] ?? !!e.defaultValue, [t, e]), s = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ F("div", { children: [
    /* @__PURE__ */ a(
      oi,
      {
        control: /* @__PURE__ */ a(
          Zn,
          {
            ...n,
            name: r,
            disabled: s || e.disabled === !0,
            checked: l,
            onChange: o,
            onBlur: t.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ a(mt, { error: t.touched[r] && !!t.errors[r], children: t.touched[r] && t.errors[r] })
  ] }, r);
}, $r = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = Pt(), l = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ a(
    ur,
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
function da(e, r) {
  const [t, n] = O(e);
  return le(() => {
    const o = setTimeout(() => {
      n(e);
    }, r);
    return () => {
      clearTimeout(o);
    };
  }, [e, r]), t;
}
const Rn = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, Bl = {
  outlined: Oo,
  filled: Io,
  standard: Mo
}, Rl = () => /* @__PURE__ */ F(
  Wn,
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
        ir.Increment,
        {
          render: /* @__PURE__ */ a(Lt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ a(
            ii,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        ir.Decrement,
        {
          render: /* @__PURE__ */ a(Lt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ a(
            Qn,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), kl = ({ column: e, otherProps: r, formik: t, field: n, ...o }) => {
  const { min: l, max: s, readOnly: p, precision: f } = e, y = Pt(), C = U(
    () => Rn({ value: l, state: t.values }),
    [l, t.values]
  ), m = U(
    () => Rn({ value: s, state: t.values }),
    [s, t.values]
  ), h = U(() => t.values[n] ?? null, [t.values[n]]), [g, w] = O(h), x = da(g, 400);
  le(() => {
    x !== h && t.setFieldValue(n, x);
  }, [x]), le(() => {
    h !== g && w(h);
  }, [h]);
  const u = (R) => {
    w(R);
  }, i = (R) => {
    t.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(R);
  }, S = Ya(), v = `number-field-${n}-${S}`, B = e.variant || "standard", M = Bl[B], E = U(() => {
    if (f !== void 0)
      return {
        maximumFractionDigits: f
      };
  }, [f]);
  return /* @__PURE__ */ F(
    ir.Root,
    {
      value: g,
      onValueChange: u,
      min: C,
      max: m,
      disabled: p,
      format: E,
      render: (R, X) => /* @__PURE__ */ a(
        $t,
        {
          fullWidth: !0,
          ref: R.ref,
          error: t.touched[n] && !!t.errors[n],
          sx: p ? {
            backgroundColor: y.palette?.action?.disabled
          } : void 0,
          children: R.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          ir.Input,
          {
            render: (R, X) => /* @__PURE__ */ a(
              M,
              {
                id: v,
                inputRef: R.ref,
                value: X.inputValue,
                onChange: R.onChange,
                onBlur: (_) => {
                  R.onBlur(_), i(_);
                },
                inputProps: {
                  ...R,
                  "aria-describedby": t.touched[n] && t.errors[n] ? `${v}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(Rl, {}),
                sx: { pr: 0 },
                ...r
              }
            )
          }
        ),
        t.touched[n] && t.errors[n] && /* @__PURE__ */ F(mt, { id: `${v}-error`, error: !0, children: [
          " ",
          t.errors[n],
          " "
        ] })
      ]
    }
  );
}, Nl = ({ otherProps: e, ...r }) => {
  const [t, n] = ht.useState(!1), o = () => n((f) => !f), l = (f) => {
    f.preventDefault();
  }, { readOnly: s = !1, disabled: p = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: s,
      disabled: p,
      endAdornment: /* @__PURE__ */ a(Wn, { position: "end", children: /* @__PURE__ */ a(
        Lt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: l,
          edge: "end",
          disabled: p,
          readOnly: s,
          size: "large",
          children: t ? /* @__PURE__ */ a(li, {}) : /* @__PURE__ */ a(si, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a($r, { otherProps: e, ...r });
}, Ll = ({ column: e, field: r, formik: t, otherProps: n, fieldConfigs: o = {}, mode: l }) => {
  const s = l !== "copy" && o.disabled, { systemDateTimeFormat: p, stateData: f } = je(), y = U(() => t.values[r] ? ne(t.values[r]) : null, [t.values[r]]), C = e.minField ? t.values[e.minField] : void 0, m = e.maxField ? t.values[e.maxField] : void 0, h = U(() => e.min ? ne(e.min) : e.minField && C ? ne(C) : null, [e.min, e.minField, C]), g = U(() => e.max ? ne(e.max) : e.maxField && m ? ne(m) : null, [e.max, e.maxField, m]), w = T((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const i = ne(x).hour(12).toISOString();
    t.setFieldValue(r, i);
  }, [r, t]);
  return /* @__PURE__ */ zr(
    qn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: p(!0, !1, f.dateTime),
      name: r,
      value: y,
      onChange: w,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: h,
      maxDate: g,
      disabled: s,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
};
ne.extend(Un);
const $l = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: l } = je(), s = U(() => {
    const p = t.values[r];
    return p ? ne(p) : null;
  }, [t.values[r], e]);
  return /* @__PURE__ */ zr(
    Hn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, l.dateTime),
      name: r,
      value: s,
      onChange: (p) => {
        p ? e.localize ? t.setFieldValue(r, p.toISOString()) : t.setFieldValue(r, p.utcOffset(0, !0).toISOString()) : t.setFieldValue(r, null);
      },
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? ne(e.min) : null,
      maxDateTime: e.max ? ne(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
};
ne.extend(jr);
const Vl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  let o = t.values[r];
  return !e.localize && o && (o = ne.utc(o).utcOffset(ne().utcOffset(), !0).format()), /* @__PURE__ */ zr(
    ci,
    {
      ...n,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: o ? ne(o) : null,
      onChange: (l) => (e.localize || (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, l)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, zl = [null, void 0, ""];
function pa({ column: e, formik: r, lookups: t, dependsOn: n = [], isAutoComplete: o = !1, userSelected: l, model: s }) {
  const [p, f] = O([]), { buildUrl: y } = je(), C = Et(), m = y(s.api), h = U(() => {
    const x = {};
    if (!n.length) return x;
    for (const u of n)
      x[u] = r.values[u];
    return x;
  }, n.map((x) => r.values[x])), g = U(() => n.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, n]), w = T(async () => {
    if (!e.lookup) return;
    if (!Object.values(h).every(
      (u) => !zl.includes(u)
    )) {
      f([]);
      return;
    }
    try {
      const u = await na({
        api: m,
        model: s,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: h }] }
        }
      });
      f(u);
    } catch (u) {
      C.showError("Could not load lookups", u.message);
    }
  }, [e.lookup, h, m, s, t, C]);
  return le(() => {
    n.length ? w() : (o || !l.current) && f(g || []);
  }, [n.length, w, o, g]), p;
}
const Gl = ht.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], model: l, tTranslate: s, tOpts: p, ...f }) => {
  const y = ht.useRef(!1), { placeHolder: C } = e, m = pa({ column: e, formik: t, lookups: n, dependsOn: o, userSelected: y, model: l }), h = Pt(), g = U(() => {
    let i = t.values[r];
    if (!i && !y.current && e.defaultValue !== void 0) {
      const S = e.defaultValue;
      if (S != null && S !== "" && m && m.length) {
        const v = m.find((B) => String(B.value) === String(S));
        v && (i = v.value, t.setFieldValue(r, v.value));
      }
    }
    if (m?.length && !i && !e.multiSelect && "IsDefault" in m[0]) {
      const S = m.find((v) => v.IsDefault);
      S && (i = S.value, t.setFieldValue(r, S.value));
    }
    return e.multiSelect && (!i || i.length === 0 ? i = [] : Array.isArray(i) || (i = i.split(",").map((S) => parseInt(S)))), i;
  }, [t.values[r], m, e.multiSelect, r]), w = T((i) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: i.target.value, options: m, event: i, t: s, tOpts: p }), t.handleChange(i), y.current = !0;
  }, [t.values[r], e.onChange, m]), x = U(() => e.multiSelect ? Array.isArray(g) && g.length > 0 : g !== "" && g !== null && g !== void 0 && Array.isArray(m) && m.some((i) => String(i.value) === String(g)), [g, e.multiSelect, m]), u = T((i) => {
    i.stopPropagation();
    const S = e.multiSelect ? [] : "";
    t.setFieldValue(r, S), typeof e.onChange == "function" && e.onChange({ formik: t, value: S, options: m, event: i, t: s, tOpts: p }), y.current = !0;
  }, [e.multiSelect, r, t, e.onChange, m, s, p]);
  return /* @__PURE__ */ F(
    fr,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(di, { children: C || "" }),
        /* @__PURE__ */ F(Te, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ a(
            pi,
            {
              IconComponent: Qn,
              ...f,
              name: r,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(g) ? g : [] : `${g ?? ""}`,
              onChange: w,
              onBlur: t.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? h.palette?.action?.disabled : ""
              },
              children: Array.isArray(m) && m.map((i) => /* @__PURE__ */ a(Jn, { value: i.value, disabled: i.isDisabled, children: i.label }, i.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ a(
            Lt,
            {
              size: "small",
              onClick: u,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": s("Clear selection", p),
              children: /* @__PURE__ */ a(ui, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ a(mt, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), kn = pr("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), jl = ({ component: e, name: r, formik: t, field: n, column: o }) => {
  const { value: l } = t.getFieldProps(r || n), { setFieldValue: s } = t, p = e || o.relation, f = T((y) => {
    s(r || n, y);
  }, [s, r, n]);
  return /* @__PURE__ */ F("div", { children: [
    /* @__PURE__ */ a(kn, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: l, available: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(kn, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: l, assigned: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Wl = ({ field: e, formik: r, orientation: t = "row", label: n, lookups: o, fieldConfigs: l = {}, mode: s, tTranslate: p, tOpts: f, ...y }) => {
  const C = (x) => {
    r.setFieldValue(e, x.target.value);
  }, m = o ? o[y.column.lookup] : [], h = Pt(), g = r.touched[e] && !!r.errors[e], w = s !== "copy" && l.disabled;
  return /* @__PURE__ */ F(ye, { children: [
    /* @__PURE__ */ a($t, { component: "fieldset", error: g, children: /* @__PURE__ */ a(
      Gr,
      {
        row: t === "row",
        "aria-label": n,
        name: e,
        value: r.values[e] ?? "",
        onChange: C,
        children: m?.map((x, u) => /* @__PURE__ */ a(
          ft,
          {
            value: x.value,
            control: /* @__PURE__ */ a(Dt, {}),
            label: p(x.label, f),
            disabled: w || (y?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          u
        ))
      }
    ) }),
    g && /* @__PURE__ */ a(mt, { style: { color: h.palette.error.main }, children: r.errors[e] })
  ] });
}, Ul = {
  limitTags: 5
}, ql = Ye.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], fieldConfigs: l = {}, mode: s, model: p, ...f }) => {
  const y = pa({ column: e, formik: t, lookups: n, dependsOn: o, model: p, isAutoComplete: !0 });
  let C = t.values[r] || [];
  Array.isArray(C) || (C = C.split(", ").map(Number));
  const m = y.filter((w) => C.includes(w.value)) || [], h = s !== "copy" && l.disabled, g = (w, x) => {
    let u = x?.map((i) => i.value) || [];
    e.dataFormat !== "array" && (u = u.length ? u.join(", ") : ""), t.setFieldValue(r, u);
  };
  return /* @__PURE__ */ F(
    fr,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ a(
          Xn,
          {
            ...f,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || Ul.limitTags,
            options: y || [],
            getOptionLabel: (w) => w.label || "",
            defaultValue: m,
            renderInput: (w) => /* @__PURE__ */ a(ur, { ...w, variant: "standard" }),
            onChange: g,
            value: m,
            size: "small",
            disabled: h
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ a(mt, { children: t.errors[r] })
      ]
    },
    r
  );
}), Hl = "#182eb5", _l = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Yl = Bo(Ro)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Hl : "#ffffff",
  border: `1px solid ${gi[500]}`,
  color: r ? "white" : "black"
})), Kl = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ a(
  Yl,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Jl = ({ name: e, field: r, formik: t, expired: n }) => {
  const { setFieldValue: o } = t, { value: l } = t.getFieldProps(e || r), s = "1000001", p = "0111110", f = "0".repeat(7), [y, C] = O(l || f), [m, h] = O(() => l ? l === s ? s : l === p ? p : "Custom" : ""), [g, w] = O(!1), x = T((S) => {
    if (Array.isArray(S)) {
      let v = f;
      for (const B of S)
        v = v.substring(0, B) + "1" + v.substring(B + 1);
      C(v), o(e || r, v), w(!0);
    } else {
      let v = g ? f : y;
      const B = v.slice(0, S) + (v[S] === "1" ? "0" : "1") + v.slice(S + 1);
      C(B), o(e || r, B), h("Custom"), w(!1);
    }
  }, [g, f, y, e, r, o]), u = Pt(), i = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ F(ye, { children: [
    /* @__PURE__ */ a($t, { component: "fieldset", error: i, children: /* @__PURE__ */ F(
      Gr,
      {
        row: !0,
        name: e || r,
        value: m,
        onChange: (S) => {
          const v = S.target.value;
          h(v), v !== "Custom" ? (C(v), o(e || r, v), w(!0)) : (C(f), o(e || r, f), w(!1));
        },
        children: [
          /* @__PURE__ */ a(ft, { value: s, control: /* @__PURE__ */ a(Dt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ a(ft, { value: p, control: /* @__PURE__ */ a(Dt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(ft, { value: "Custom", control: /* @__PURE__ */ a(Dt, {}), label: "Specific days" }),
          _l.map((S, v) => /* @__PURE__ */ a(
            Kl,
            {
              day: S,
              onClick: () => x(v),
              isSelected: m === "Custom" && y[v] === "1",
              disabled: n
            },
            S.value
          ))
        ]
      }
    ) }),
    i && /* @__PURE__ */ a(mt, { style: { color: u.palette.error.main }, children: t.errors[r] })
  ] });
}, Zl = ({ isAdd: e, column: r, field: t, formik: n, otherProps: o, fieldConfigs: l = {}, mode: s }) => {
  const p = Pt();
  let f = n.values[t] || [];
  Array.isArray(f) || (f = f.split(",").map((h) => h.trim()));
  const y = Ye.useMemo(() => s === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: n }) : !!r.disabled, [s, l.disabled, r.disabled]), C = r.hasDefault && !e ? [f[0]] : [], m = T((h, g, w, x = {}) => {
    const u = g.pop()?.trim();
    g.includes(u) || g.push(u), C && C.includes(x.option) && w === "removeOption" && (g = [x.option]), r.dataFormat !== "array" && (g = g.length ? g.join(",") : ""), n.setFieldValue(t, g);
  }, [n, t]);
  return /* @__PURE__ */ F(
    fr,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[t] && !!n.errors[t],
      children: [
        /* @__PURE__ */ a(
          Xn,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: f,
            options: [],
            renderInput: (h) => /* @__PURE__ */ a(
              ur,
              {
                ...h,
                variant: "standard",
                InputProps: {
                  ...h.InputProps,
                  sx: {
                    ...h.InputProps?.sx,
                    ...y && { backgroundColor: p.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: m,
            size: "small",
            renderTags: (h, g) => h.map((w, x) => {
              const { key: u, ...i } = g({ index: x });
              return /* @__PURE__ */ a(
                yi,
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
        n.touched[t] && n.errors[t] && /* @__PURE__ */ a(mt, { children: n.errors[t] })
      ]
    },
    t
  );
}, Ql = (e = []) => {
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
function Xl({ column: e, field: r, formik: t, lookups: n, fieldConfigs: o, mode: l }) {
  const s = n ? n[e.lookup] : [], p = Ql(s), f = t.values[r]?.length ? t.values[r].split(", ") : [];
  let y;
  return l !== "copy" && (y = o?.disabled), /* @__PURE__ */ a(Je, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    Ci,
    {
      selectedItems: f,
      onSelectedItemsChange: (m, h) => {
        t.setFieldValue(r, h?.join(", ") || "");
      },
      disabled: y,
      multiSelect: !0,
      checkboxSelection: !0,
      children: p.map((m) => /* @__PURE__ */ a(Tn, { itemId: m.value, label: m.label, children: m.children.map((h) => /* @__PURE__ */ a(Tn, { itemId: h.value, label: h.label }, h.value)) }, m.value))
    }
  ) });
}
const es = { maxLength: 500 }, { errorMapping: ts } = Ge, rs = 1024 * 1024;
function ns({ column: e, field: r, formik: t }) {
  const n = t.values[r] || "", { getApiEndpoint: o } = je(), { maxSize: l, formats: s } = e, p = o("upload"), f = o("media"), y = o(), [C, m] = O({
    isExternal: "no",
    selectedFile: null
  }), [h, g] = O(!1), w = Et(), { getParams: x, useParams: u } = Hr(), { associationId: i } = u() || x, S = i?.split("-")[0] || 1, v = (j) => {
    const Y = j.target.value;
    m({
      ...C,
      isExternal: Y,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, B = (j) => {
    t.setFieldValue(r, j.target.value);
  }, M = (j) => {
    const Y = j.target.files[0];
    if (Y) {
      if (l && Y.size > l * rs) {
        w.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(s) && !s.includes(Y.type)) {
        w.showError(`Invalid file format. Allowed formats: ${s.join(", ")}.`);
        return;
      }
      m((W) => ({ ...W, selectedFile: Y }));
    }
  }, E = async () => {
    if (C.selectedFile) {
      g(!0);
      try {
        const j = new FormData();
        j.append("file", C.selectedFile), j.append("DocumentGroupId", t.values.DocumentGroupId), j.append("AssociationId", S);
        const W = (await ra({
          method: "POST",
          url: p,
          data: j,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!W.success) {
          w.showError(W.message || "Upload failed");
          return;
        }
        const k = f + "/" + W.filePath;
        t.setFieldValue(r, k);
      } catch (j) {
        const Y = (j.message.match(/status code (\d{3})/) || [])[1];
        w.showError(ts[Y]);
      } finally {
        g(!1);
      }
    }
  }, R = new URL(y, window.location.origin).hostname.toLowerCase();
  ht.useEffect(() => {
    m({
      ...C,
      isExternal: n.toLowerCase().includes(R) ? "no" : "yes"
    });
  }, [n, m]);
  const X = t.values[r]?.length > (e.max || es.maxLength), _ = X ? "red" : "";
  return /* @__PURE__ */ F(Te, { children: [
    /* @__PURE__ */ F(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Oe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ F(
        Gr,
        {
          row: !0,
          value: C.isExternal,
          onChange: v,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ a(ft, { value: "yes", control: /* @__PURE__ */ a(Dt, {}), label: "Yes" }),
            /* @__PURE__ */ a(ft, { value: "no", control: /* @__PURE__ */ a(Dt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ F(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Oe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ F(Te, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        C.isExternal === "yes" ? /* @__PURE__ */ a(
          pt,
          {
            fullWidth: !0,
            value: n,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: _ },
                "&.Mui-focused fieldset": { borderColor: _ },
                "&:hover fieldset": { borderColor: _ }
              }
            },
            onChange: B,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ a(
          pt,
          {
            fullWidth: !0,
            value: n,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        X && /* @__PURE__ */ F(Oe, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    C.isExternal === "no" && /* @__PURE__ */ F(Te, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ F(
        dt,
        {
          variant: "outlined",
          component: "label",
          disabled: h,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: M })
          ]
        }
      ),
      C.selectedFile && /* @__PURE__ */ a(St, { title: C.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Oe, { variant: "body2", children: C.selectedFile.name.length > 20 ? `${C.selectedFile.name.substring(0, 20)}...` : C.selectedFile.name }) }),
      /* @__PURE__ */ a(
        dt,
        {
          variant: "contained",
          color: "primary",
          onClick: E,
          disabled: !C.selectedFile || h,
          children: h ? /* @__PURE__ */ a(ko, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const as = ({ field: e, formik: r }) => {
  const [t, n] = Ye.useState({}), o = da(t, 300);
  Ye.useEffect(() => {
    if (r.values[e])
      try {
        const s = JSON.parse(r.values[e]);
        n(s);
      } catch {
        n({});
      }
  }, [r.values[e]]), Ye.useEffect(() => {
    const s = JSON.stringify(o);
    r.values[e] !== s && r.setFieldValue(e, s);
  }, [o, e, r, r.values[e]]);
  const l = (s, p) => {
    const f = { ...t, [s]: p };
    n(f);
  };
  return /* @__PURE__ */ a(
    fr,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[e] && !!r.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(t).map((s) => /* @__PURE__ */ F(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ F(Nt, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              s,
              ":"
            ] }),
            /* @__PURE__ */ a(
              xi,
              {
                id: s,
                name: s,
                value: t[s],
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
}, os = {
  boolean: Ol,
  select: Gl,
  string: $r,
  number: kl,
  password: Nl,
  date: Ll,
  dateTime: $l,
  time: Vl,
  oneToMany: jl,
  radio: Wl,
  autocomplete: ql,
  dayRadio: Jl,
  email: $r,
  chipInput: Zl,
  treeCheckbox: Xl,
  fileUpload: ns,
  json: as
}, Nn = { paddingTop: "2.5px", paddingBottom: "2.5px" }, fa = "20px", is = bi("span")({
  color: "red !important"
}), ls = ({ tabColumns: e, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: f, handleSubmit: y }) => {
  const [C, m] = Ye.useState(/* @__PURE__ */ new Set()), { tOpts: h, tTranslate: g } = zt(r), { activeStep: w, setActiveStep: x } = Ye.useContext(ha), u = {};
  for (let E = 0, R = r.columns.length; E < R; E++) {
    const { field: X, skip: _ } = r.columns[E];
    _ && (u[_.step] = t.values[X]);
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
    m((R) => new Set(R).add(w)), E >= e.length || S() ? y() : x(E);
  }, B = () => {
    let E = w - 1;
    for (; u[E] && E > 0; )
      E--;
    x(E);
  };
  if (!e?.length)
    return null;
  const M = e[w];
  return /* @__PURE__ */ F(ye, { children: [
    /* @__PURE__ */ a(fi, { activeStep: w, sx: { marginBottom: "20px" }, children: e.map(({ title: E, key: R }, X) => /* @__PURE__ */ a(hi, { completed: i(X), children: /* @__PURE__ */ a(mi, { children: /* @__PURE__ */ a(Oe, { sx: { fontSize: "20px" }, children: g(E, h) }) }) }, R)) }),
    /* @__PURE__ */ F(Ye.Fragment, { children: [
      /* @__PURE__ */ a(_r, { formElements: M.items, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: f }),
      /* @__PURE__ */ F(Je, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        w !== 0 ? /* @__PURE__ */ a(Be, { color: "inherit", disabled: w === 0, onClick: B, variant: "contained", sx: { mr: 2 }, children: g("Back", h) }) : null,
        /* @__PURE__ */ a(Be, { onClick: v, variant: "contained", children: S() ? g("Finish", h) : g("Next", h) })
      ] })
    ] })
  ] });
}, ss = ({ tabColumns: e, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: f, isAdd: y }) => {
  const { tOpts: C, tTranslate: m } = zt(r);
  return e?.length ? /* @__PURE__ */ a(ye, { children: e.map(({ key: h, title: g, items: w }, x) => /* @__PURE__ */ F(
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
        mt: x === 0 ? 0 : fa
      },
      children: [
        /* @__PURE__ */ a(
          Oe,
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
            children: m(g, C)
          }
        ),
        /* @__PURE__ */ a(_r, { isAdd: y, formElements: w, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: f })
      ]
    },
    h
  )) }) : null;
}, _r = ({ formElements: e, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: p, mode: f, isAdd: y }) => {
  const { tOpts: C, tTranslate: m } = zt(r);
  return e?.length ? /* @__PURE__ */ a(ye, { children: e.map(({ Component: h, column: g, field: w, label: x, otherProps: u }, i) => {
    const S = typeof g.relation == "function";
    return /* @__PURE__ */ F(Ir, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: S ? "flex-start" : "center", children: [
      g?.showLabel !== !1 ? /* @__PURE__ */ a(Ir, { size: { xs: 3 }, sx: Nn, children: /* @__PURE__ */ F(Oe, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        m(g.label || w, C),
        ": ",
        g.required && /* @__PURE__ */ a(is, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ a(Ir, { size: { xs: S ? 12 : 9 }, sx: Nn, children: /* @__PURE__ */ a(h, { isAdd: y, model: r, fieldConfigs: p[w], mode: f, column: g, field: w, label: x, formik: t, data: n, onChange: o, combos: l, lookups: s, tTranslate: m, tOpts: C, ...u }) })
    ] }, i);
  }) }) : null;
}, cs = function({ columns: e, tabs: r = {}, id: t, searchParams: n }) {
  const o = [], l = {};
  for (const p in r)
    l[p] = [];
  for (const p of e) {
    const f = p.type;
    if (p.label === null)
      continue;
    const { field: y, label: C, tab: m } = p, h = {};
    p.options && (h.options = p.options), p.dependsOn && (h.dependsOn = p.dependsOn);
    const g = os[f];
    if (!g || p.hideInAddGrid && t === "0")
      continue;
    (m && r[m] ? l[m] : o).push({ Component: g, field: y, label: C, column: { ...p, readOnly: n.has("showRelation") || p.readOnly }, otherProps: h });
  }
  const s = [];
  for (const p in l)
    s.push({ key: p, title: r[p], items: l[p] });
  return { formElements: o, tabColumns: s };
}, us = ({ model: e, formik: r, data: t, combos: n, onChange: o, lookups: l, id: s, fieldConfigs: p, mode: f, handleSubmit: y }) => {
  const C = Ge.emptyIdValues.includes(s), { formElements: m, tabColumns: h, showTabs: g, showGrouped: w } = Ye.useMemo(() => {
    const x = e.formConfig?.showTabbed, u = x === !0, i = x === "group" || x !== !0 && x !== "group" && e.formConfig?.showGrouped === !0, S = new URLSearchParams(window.location.search), v = u || i ? e.tabs : {}, { formElements: B, tabColumns: M } = cs({ columns: e.columns, tabs: v, id: s, searchParams: S }), E = M.length > 0, R = u && E;
    return { formElements: B, tabColumns: M, showTabs: R, showGrouped: !R && i && E };
  }, [e]);
  return /* @__PURE__ */ F("div", { children: [
    /* @__PURE__ */ a(_r, { isAdd: C, formElements: m, model: e, formik: r, data: t, onChange: o, combos: n, lookups: l, fieldConfigs: p, mode: f }),
    /* @__PURE__ */ F("div", { style: { marginTop: g ? fa : 0 }, children: [
      g && /* @__PURE__ */ a(ls, { tabColumns: h, model: e, formik: r, data: t, onChange: o, combos: n, lookups: l, fieldConfigs: p, mode: f, handleSubmit: y }),
      w && /* @__PURE__ */ a(ss, { isAdd: C, tabColumns: h, model: e, formik: r, data: t, onChange: o, combos: n, lookups: l, fieldConfigs: p, mode: f })
    ] })
  ] });
};
function ds(e) {
  const { children: r, value: t, index: n, ...o } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      hidden: t !== n,
      id: `simple-tabpanel-${n}`,
      "aria-labelledby": `simple-tab-${n}`,
      ...o,
      children: t === n && /* @__PURE__ */ a(Je, { sx: { p: 3 }, children: r })
    }
  );
}
function ps(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const fs = $n(({ relation: e, parentFilters: r, parent: t, where: n, models: o, readOnly: l }) => {
  const s = o.find(({ name: y }) => y === e);
  if (!s) return null;
  const p = { ...s, hideBreadcrumb: !0 }, f = p instanceof sr ? p : new sr(p);
  return f ? /* @__PURE__ */ a(
    f.ChildGrid,
    {
      readOnly: l,
      parentFilters: r,
      parent: t,
      model: p,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), hs = ht.memo(({ relations: e, parent: r, where: t = [], models: n, relationFilters: o, readOnly: l }) => {
  const [s, p] = O(0);
  return /* @__PURE__ */ F(Je, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(Je, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(vi, { value: s, onChange: (y, C) => {
      p(C);
    }, "aria-label": "relations tabs", children: e.map((y, C) => {
      const m = n.find(({ name: g }) => g === y) || {}, h = m.listTitle || m.title || y;
      return /* @__PURE__ */ a(
        wi,
        {
          label: h,
          ...ps(C)
        },
        y
      );
    }) }) }),
    e.map((y, C) => /* @__PURE__ */ a(ds, { value: s, index: C, children: /* @__PURE__ */ a(
      fs,
      {
        readOnly: l,
        relation: y,
        models: n,
        parentFilters: o[y] || [],
        parent: r,
        where: t
      },
      y
    ) }, y))
  ] });
}), ha = cr(1), ms = {}, be = {
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
}, gs = ({
  model: e,
  api: r,
  models: t,
  relationFilters: n = {},
  permissions: o = {},
  Layout: l = us,
  baseSaveData: s = {},
  sx: p,
  readOnly: f,
  beforeSubmit: y,
  deletePromptText: C,
  detailPanelId: m = null,
  // Grid Row Detail Panel Id
  onCancel: h,
  onSaveSuccess: g
}) => {
  const w = e.formTitle || e.title, { translate: x, tOpts: u, tTranslate: i } = zt(e), { navigate: S, getParams: v, useParams: B, pathname: M } = Hr(), { relations: E = [] } = e, { stateData: R, buildUrl: X, setPageTitle: _ } = je(), j = B() || v, { id: Y = "" } = j, W = m || Y.split("-")[be.editIdIndex], k = new URLSearchParams(window.location.search), Se = k.has(be.baseData) && k.get(be.baseData);
  if (Se) {
    const z = JSON.parse(Se);
    typeof z === be.object && z !== null && (s = { ...s, ...z });
  }
  const [ae, ie] = O(!0), [re, Q] = O({}), [fe, q] = O({}), [Z, D] = O(!1), N = Et(), [ee, H] = O(null), [$, Me] = O(0), [Le, At] = O(!1), [ge, nt] = O(null), [gt, at] = O(""), We = typeof e.applyFieldConfig === be.function ? e.applyFieldConfig({ data: re, lookups: fe }) : ms, Gt = X(e.api), jt = Y.includes("-") && Y.split("-")[0] === "0" ? "copy" : "", Wt = R.userData || {}, Tt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: se } = la({
    userData: Wt,
    model: e,
    userDefinedPermissions: Tt
  }), { hideBreadcrumb: Ut = !1, navigateBack: Ce } = e, c = !("canEdit" in re) || re.canEdit, Fe = T(() => {
    let z;
    switch (typeof Ce) {
      case be.function:
        z = Ce({ params: j, searchParams: k, data: re });
        break;
      case be.number:
      case be.string:
        z = Ce;
        break;
      default:
        z = M.substring(0, M.lastIndexOf("/"));
        break;
    }
    S(z);
  }, [Ce, S, j, k, re, M]), hr = U(() => Ge.emptyIdValues.includes(W), [W]), qt = U(() => hr ? { ...e.initialValues, ...re, ...s } : { ...s, ...e.initialValues, ...re }, [e.initialValues, re, W]), bt = r || Gt, ot = U(() => {
    if (m)
      return m;
    const z = Y.split("-");
    return z.length > 1 ? z[be.loadIdIndex] : W;
  }, [m, Y, W]), $e = T(async () => {
    ie(!0);
    try {
      const z = await lr({
        api: bt,
        model: e,
        id: ot
      });
      gr(z);
    } catch (z) {
      mr("Could not load record", z.message);
    } finally {
      ie(!1);
    }
  }, [bt, e, ot]);
  le(() => {
    $e();
  }, [W, ot, e, bt, $e]), le(() => {
    H(e.getValidationSchema({ id: W, tTranslate: i, tOpts: u }));
  }, [W, e, H, x, u, i]);
  const he = Kn({
    enableReinitialize: !0,
    initialValues: qt,
    validationSchema: ee,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (z, { resetForm: we }) => {
      Object.keys(z).forEach((ue) => {
        typeof z[ue] === be.string && (z[ue] = z[ue].trim());
      }), ie(!0), qr({
        id: W,
        api: Gt,
        values: z,
        model: e
      }).then((ue) => {
        if (!ue) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof g === be.function && g();
        const Ee = ue.info ? ue.info : `Record ${W === 0 ? "Added" : "Updated"} Successfully.`;
        N.showMessage(i(Ee, u)), Ce !== !1 && Fe(), we({ values: he.values });
      }).catch((ue) => {
        N.showError(
          i("An error occurred, please try after some time.", u),
          ue
        ), e.reloadOnSave && we();
      }).finally(() => {
        ie(!1);
      });
    }
  }), Ie = T(() => {
    he.resetForm(), At(!1), typeof h === be.function && h(), Ce !== !1 && Fe();
  }, [he, h, Ce, Fe]), mr = T((z, we) => {
    ie(!1), N.showError(i(z, u), we), Fe();
  }, [N, Fe, i, u]), gr = function({ id: z, title: we, record: ue, lookups: Ee }) {
    const Ze = Y.indexOf("-") > -1, Ct = !z || z === "0", Kt = Ct ? be.create : Ze ? be.copy : be.edit, Ve = Ct ? "" : ue[e.linkColumn], Mt = [{ text: e.breadCrumbs }, { text: Kt }];
    Ze && (ue[e.linkColumn] = ""), e.columns.forEach((It) => {
      It.skipCopy && Ze && (ue[It.field] = "");
    }), Q(ue), q(Ee), ie(!1), Ve !== "" && Mt.push({ text: Ve }), _({
      showBreadcrumbs: !0,
      breadcrumbs: Mt
    });
  }, Ht = T((z) => {
    he.dirty && c ? At(!0) : (typeof h === be.function && h(), Ce !== !1 && Fe()), z.preventDefault();
  }, [he.dirty, c, h, Ce, Fe]), br = T(async () => {
    try {
      D(!0), await Ur({
        id: W,
        api: r || e.api,
        model: e
      }) === !0 && (N.showMessage(i("Record Deleted Successfully.", u)), Ce !== !1 && Fe());
    } catch (z) {
      N.showError(i("An error occurred, please try after some time.", u), z?.message);
    } finally {
      D(!1);
    }
  }, [W, r, e.api, N, at, e, Ce, Fe, i, u]), yt = () => {
    at(null), D(!1);
  }, xe = T((z) => {
    const { name: we, value: ue } = z.target;
    Q({ ...re, [we]: ue });
  }, [re]), Pe = T(async (z) => {
    z && z.preventDefault(), typeof y === be.function && await y({ formik: he, model: e });
    const { errors: we } = he;
    he.handleSubmit();
    const ue = Object.keys(we)[0], Ee = we[ue];
    Ee && N.showError(i(Ee, u), null, "error");
    const Ze = e.columns.find(
      (Ct) => Ct.field === ue
    ) || {};
    Ze.tab && Me(Object.keys(e.tabs).indexOf(Ze.tab));
  }, [y, he, e, N, Me, i, u]), it = [
    { text: i(w, u) },
    { text: i(W === "0" ? "New" : "Update", u) }
  ], ce = Number(W) !== 0 && !!E.length, _t = k.has("showRelation"), yr = !c || re.readOnlyRelations;
  C = C || i("Are you sure you want to delete ?", u);
  const { showPageTitle: Yt = !0 } = e;
  return /* @__PURE__ */ F(ye, { children: [
    Yt && /* @__PURE__ */ a(
      ia,
      {
        navigate: S,
        title: w,
        showBreadcrumbs: !Ut,
        breadcrumbs: it,
        model: e,
        enableBackButton: Ce !== void 0
      }
    ),
    /* @__PURE__ */ a(ha.Provider, { value: { activeStep: $, setActiveStep: Me }, children: /* @__PURE__ */ F(ri, { sx: { padding: 2, ...p }, children: [
      ae ? /* @__PURE__ */ a(Je, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(ai, {}) }) : /* @__PURE__ */ F("form", { children: [
        /* @__PURE__ */ F(
          ni,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              se && c && !_t && !f && /* @__PURE__ */ a(
                Be,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Pe,
                  children: i("Save", u)
                }
              ),
              /* @__PURE__ */ a(
                Be,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Ht,
                  children: i("Cancel", u)
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Be,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => D(!0),
                  children: i("Delete", u)
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
            fieldConfigs: We,
            onChange: xe,
            lookups: fe,
            id: W,
            handleSubmit: Pe,
            mode: jt
          }
        )
      ] }),
      gt && /* @__PURE__ */ F(
        Ke,
        {
          open: !!gt,
          onConfirm: yt,
          onCancel: yt,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            gt
          ]
        }
      ),
      /* @__PURE__ */ a(
        Ke,
        {
          open: Le,
          onConfirm: Ie,
          onCancel: () => At(!1),
          title: i("Changes not saved", u),
          okText: i("Discard", u),
          cancelText: i("Continue", u),
          children: i("Would you like to continue to edit or discard changes?", u)
        }
      ),
      /* @__PURE__ */ a(
        Ke,
        {
          open: Z,
          onConfirm: br,
          onCancel: () => {
            D(!1), nt(null);
          },
          title: i(ge ? "Error Deleting Record" : "Confirm Delete", u),
          children: C
        }
      ),
      ce ? /* @__PURE__ */ a(
        hs,
        {
          readOnly: yr,
          models: t,
          relationFilters: n,
          relations: E,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, ar = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, bs = {}, Ln = !0, ys = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class sr {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(r) {
    const { title: t = "" } = r;
    let { api: n, idProperty: o = n + "Id" } = r;
    const l = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    n || (n = `${t.replaceAll(ar.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const s = { ...r.defaultValues }, p = l || t;
    Object.assign(this, {
      standard: !0,
      name: p,
      permissions: { ...sr.defaultPermissions },
      idProperty: o,
      linkColumn: `${p}Name`,
      overrideFileName: t,
      preferenceId: p,
      tableName: p,
      module: l,
      ...r,
      api: n
    }), this._applyColumnDefaults(), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(s);
  }
  _applyColumnDefaults() {
    for (const r of this.columns)
      r.type || (r.type = "string");
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
      r[n] = t.defaultValue === void 0 ? ys[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: n = {} } = {}) {
    const { columns: o } = this, l = {};
    for (const s of o) {
      const { field: p, label: f, header: y, type: C = "string", requiredIfNew: m = !1, required: h = !1, min: g = "", max: w = "", validate: x } = s, u = f || y || p;
      if (!u || f === null || f === "") continue;
      let i;
      switch (C) {
        case "string":
          i = me.string().nullable().trim().label(u), g && !isNaN(Number(g)) && (i = i.min(Number(g), t(`${u} must be at least ${g} characters long`, n))), w && !isNaN(Number(w)) && (i = i.max(Number(w), t(`${u} must be at most ${w} characters long`, n))), h && (i = i.trim().required(t(`${u} is required`, n)));
          break;
        case "boolean":
          i = me.bool().nullable().transform((S, v) => v === "" ? null : S).label(u);
          break;
        case "radio":
        case "dayRadio":
          i = me.mixed().label(u), h && (i = i.required(t(`Select at least one option for ${u}`, n)));
          break;
        case "date":
          i = me.date().nullable().transform((S, v) => v === "" || v === null ? null : S).label(u), h && (i = i.required(t(`${u} is required`, n)));
          break;
        case "dateTime":
          i = me.date().nullable().transform((S, v) => v === "" || v === null ? null : S).label(u), h && (i = i.required(t(`${u} is required`, n)));
          break;
        case "select":
        case "autocomplete":
          h ? i = me.string().trim().label(u).required(t(`Select at least one ${u}`, n)) : i = me.string().nullable();
          break;
        case "password":
          i = me.string().label(u).test("ignore-asterisks", t(`${u} must be a valid password.`, n), (S) => {
            if (S === "******") return !0;
            const v = Number(g) || 8, B = Number(w) || 50, M = s.regex || ar.password;
            return me.string().min(v, t(`${u} must be at least ${v} characters`, n)).max(B, t(`${u} must be at most ${B} characters`, n)).matches(
              M,
              t(`${u} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, n)
            ).isValidSync(S);
          });
          break;
        case "email":
          i = me.string().trim().matches(
            s.regex || ar.email,
            t("Email must be a valid email", n)
          );
          break;
        case "number":
          h ? i = me.number().label(u).required(t(`${u} is required.`, n)) : i = me.number().nullable(), g !== void 0 && g !== "" && !isNaN(Number(g)) && (i = i.min(Number(g), t(`${u} must be greater than or equal to ${g}`, n))), w !== void 0 && w !== "" && !isNaN(Number(w)) && (i = i.max(Number(w), t(`${u} must be less than or equal to ${w}`, n)));
          break;
        case "fileUpload":
          i = me.string().trim().label(u);
          break;
        default:
          i = me.mixed().nullable().label(u);
          break;
      }
      if (h && C !== "string" && (i = i.required(t(`${u} is required`, n))), m && (!r || r === "") && (i = i.trim().required(t(`${u} is required`, n))), x) {
        const S = ar.compareValidatorRegex.exec(x);
        if (S) {
          const v = S[1], B = o.find(
            (M) => (M.formField === v || M.field) === v
          );
          i = i.oneOf(
            [me.ref(v)],
            t(`${u} must match ${B.label}`, n)
          );
        }
      }
      l[p] = i;
    }
    return me.object({ ...l, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ a(gs, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ a(Bn, { model: this, showRowsSelected: Ln, ...t });
  ChildGrid = (r) => /* @__PURE__ */ F(ye, { children: [
    /* @__PURE__ */ a(Bn, { model: this, ...r, customStyle: bs, showRowsSelected: Ln }),
    /* @__PURE__ */ a(No, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ke as DialogComponent,
  Bn as GridBase,
  rl as HelpModal,
  Mn as MuiTypography,
  ia as PageTitle,
  Wc as RouterProvider,
  ea as SnackbarContext,
  zc as SnackbarProvider,
  jc as StateProvider,
  sr as UiModel,
  Gc as crudHelper,
  $i as daDKGrid,
  zi as deDEGrid,
  ji as elGRGrid,
  Ui as esESGrid,
  Hi as frFRGrid,
  tt as httpRequest,
  Yi as itITGrid,
  tl as locales,
  Qi as ptPT,
  Ji as trTRGrid,
  Li as useMobile,
  zt as useModelTranslation,
  Hr as useRouter,
  Et as useSnackbar,
  je as useStateContext
};
//# sourceMappingURL=index.js.map
