import { jsx as n, jsxs as D, Fragment as ye } from "react/jsx-runtime";
import * as qe from "react";
import Ct, { createContext as ir, useContext as Nr, useState as B, useEffect as fe, useRef as Ar, useCallback as A, useMemo as q, memo as Sa, useId as Rn, createElement as lr } from "react";
import kn from "@mui/material/Snackbar";
import Nn from "@mui/material/Alert";
import Me from "@mui/material/Button";
import Ln from "@mui/material/Dialog";
import $n from "@mui/material/DialogActions";
import Vn from "@mui/material/DialogContent";
import zn from "@mui/material/DialogContentText";
import Gn from "@mui/material/DialogTitle";
import * as rt from "@mui/x-data-grid-premium";
import { GridFooterContainer as qn, GridFooter as jn, getGridDateOperators as Pa, useGridSelector as Fa, gridFilterModelSelector as Wn, useGridApiRef as Ta, GridActionsCellItem as Ir, DataGridPremium as Ea, GridToolbarExportContainer as Un, Toolbar as Hn, ColumnsPanelTrigger as Yn, FilterPanelTrigger as Kn, GRID_CHECKBOX_SELECTION_COL_DEF as _n, getGridStringOperators as Jn, getGridBooleanOperators as Zn, useGridApiContext as Qn, gridRowSelectionStateSelector as Xn } from "@mui/x-data-grid-premium";
import Aa from "@mui/icons-material/Delete";
import eo from "@mui/icons-material/FileCopy";
import to from "@mui/icons-material/Article";
import Ia from "@mui/icons-material/Edit";
import tt from "@mui/material/Box";
import Nt from "@mui/material/Typography";
import sr from "@mui/material/TextField";
import { useTranslation as vt, withTranslation as ro } from "react-i18next";
import { Typography as ke, Dialog as ao, DialogTitle as no, Grid as we, DialogContent as oo, Card as io, CardContent as lo, Breadcrumbs as so, Link as co, Button as ct, IconButton as Lt, Box as Te, FormControl as xt, Select as Mr, MenuItem as Ye, Tooltip as wt, Menu as uo, List as po, ListItemButton as Sr, ListItemIcon as Pr, ListItem as fo, ListItemText as mo, TextField as ut, FormControlLabel as dt, Checkbox as ho, Stack as pa, InputLabel as fa, Badge as go, FormHelperText as pt, useTheme as Dt, Input as yo, FilledInput as bo, OutlinedInput as Co, InputAdornment as Ma, RadioGroup as Lr, Radio as bt, styled as xo, Avatar as wo, CircularProgress as vo, Divider as Do } from "@mui/material";
import So from "@mui/icons-material/Check";
import Or from "@mui/icons-material/Close";
import Po from "@mui/icons-material/Help";
import { Replay as Fo, Close as To, GridOn as Eo, TableChart as Fr, Code as Ao, Language as Io, DataObject as Mo } from "@mui/icons-material";
import X from "dayjs";
import Oo from "dayjs/plugin/utc";
import Bo from "dayjs/plugin/timezone";
import { DatePicker as Oa } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as rr } from "@mui/x-date-pickers/DateTimePicker";
import Ba from "dayjs/plugin/utc.js";
import { LocalizationProvider as Ra } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as ka } from "@mui/x-date-pickers/AdapterDayjs";
import Br from "@mui/icons-material/Add";
import Ro from "@mui/icons-material/Remove";
import ko from "@mui/icons-material/FilterListOff";
import No from "@mui/icons-material/ViewColumn";
import Lo from "@mui/icons-material/FilterList";
import { styled as cr } from "@mui/material/styles";
import $o from "@mui/icons-material/Save";
import ma from "@mui/icons-material/Settings";
import Vo from "@mui/icons-material/Refresh";
import { useFormik as Na } from "formik";
import * as me from "yup";
import { DateTimePicker as zo, DatePicker as Go } from "@mui/x-date-pickers";
import La from "@mui/material/MenuItem";
import qo from "@mui/icons-material/History";
import jo from "@mui/icons-material/FileDownload";
import $a from "@mui/material/Checkbox";
import Wo from "@mui/material/Paper";
import Uo from "@mui/material/Stack";
import Ho from "@mui/material/CircularProgress";
import Yo from "@mui/material/FormControlLabel";
import { NumberField as ar } from "@base-ui/react/number-field";
import Ko from "@mui/icons-material/KeyboardArrowUp";
import Va from "@mui/icons-material/KeyboardArrowDown";
import _o from "@mui/icons-material/VisibilityOff";
import Jo from "@mui/icons-material/Visibility";
import { TimePicker as Zo } from "@mui/x-date-pickers/TimePicker";
import Qo from "@mui/icons-material/Clear";
import ur from "@mui/material/FormControl";
import Xo from "@mui/material/InputLabel";
import ei from "@mui/material/Select";
import Tr from "@mui/material/Grid";
import za from "@mui/material/Autocomplete";
import ti from "@mui/material/Stepper";
import ri from "@mui/material/Step";
import ai from "@mui/material/StepLabel";
import { grey as ni } from "@mui/material/colors";
import oi from "@emotion/styled";
import ii from "@mui/material/Chip";
import { SimpleTreeView as li } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as ha } from "@mui/x-tree-view/TreeItem";
import si from "@mui/material/Input";
import ci from "@mui/material/Tab";
import ui from "@mui/material/Tabs";
const Ga = ir(null), di = "bottom", pi = "center", fi = Ct.forwardRef(function(r, t) {
  return /* @__PURE__ */ n(Nn, { elevation: 6, ref: t, variant: "filled", ...r });
}), Sc = ({ children: e }) => {
  const [r, t] = B(null), [a, o] = B(!1), [l, i] = B(null), [s, m] = B(null), b = function(f, C, h = "info", x) {
    typeof f != "string" && (f = f.toString()), C && typeof C != "string" && (C = C.toString()), t(C ? `${f}: ${C}` : f), i(h), o(!0), m(x);
  }, g = function(f, C, h = "error", x) {
    b(f, C, h, x);
  }, u = function() {
    o(!1), m(null), s && s();
  };
  return /* @__PURE__ */ D(ye, { children: [
    /* @__PURE__ */ n(
      Ga.Provider,
      {
        value: { showMessage: b, showError: g },
        children: e
      }
    ),
    /* @__PURE__ */ n(kn, { open: a, autoHideDuration: 6e3, onClose: u, anchorOrigin: { vertical: di, horizontal: pi }, children: /* @__PURE__ */ n(fi, { severity: l, children: r }) })
  ] });
}, St = function() {
  return Nr(Ga);
}, Ke = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: a, okText: o, cancelText: l, yesNo: i = !1, children: s, maxWidth: m = "sm", fullWidth: b = !0, ...g }) => (o = o || (i ? "Yes" : "Ok"), l = l || (i ? "No" : "Cancel"), /* @__PURE__ */ D(
  Ln,
  {
    ...g,
    open: e,
    onClose: a,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: m,
    fullWidth: b,
    children: [
      /* @__PURE__ */ n(Gn, { id: "alert-dialog-title", sx: { fontSize: s ? "inherit" : "1.25rem" }, children: t }),
      s && /* @__PURE__ */ n(Vn, { dividers: !0, children: /* @__PURE__ */ n(zn, { children: s }) }),
      (a || r) && /* @__PURE__ */ D($n, { children: [
        a && /* @__PURE__ */ n(Me, { onClick: a, children: l }),
        r && /* @__PURE__ */ n(Me, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Er = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, qa = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, mi = (e, r) => {
  const t = new URL(e);
  for (const a in r) {
    const o = typeof r[a] == "object" ? JSON.stringify(r[a]) : r[a];
    t.searchParams.append(a, o);
  }
  window.open(t, "_blank").focus();
}, ja = async (e) => {
  const {
    method: r = "GET",
    url: t,
    data: a,
    headers: o = {},
    credentials: l = "include",
    ...i
  } = e, s = {
    method: r,
    credentials: l,
    headers: {
      ...o
    },
    ...i
  };
  a && (o["Content-Type"] === "multipart/form-data" ? (delete s.headers["Content-Type"], s.body = a instanceof FormData ? a : qa(a)) : (s.headers["Content-Type"] = o["Content-Type"] || "application/json", s.body = typeof a == "string" ? a : JSON.stringify(a)));
  const m = await fetch(t, s), b = m.headers.get("content-type") || {};
  return {
    status: m.status,
    data: b.includes("application/json") ? await m.json() : await m.text(),
    headers: Object.fromEntries(m.headers.entries())
  };
}, $t = (e) => e?.message || e?.info || e?.error || e?.err, Ne = Object.freeze({
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
  jsonPayload: a = !1,
  additionalParams: o = {},
  additionalHeaders: l = {},
  dataParser: i = Ne.raw,
  onParseError: s
}) => {
  if (r.exportData)
    return mi(e, r);
  const m = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: a ? { ...l } : { "Content-Type": "multipart/form-data", ...l },
    ...o
  };
  r && Object.keys(r).length > 0 && (m.data = a ? r : qa(r));
  try {
    const b = await ja(m);
    let g = b.data;
    if (b.status === Er.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (b.status === Er.FORBIDDEN)
      return { error: !0, message: g.message || "Access Denied!" };
    if (b.status !== Er.OK)
      return { error: !0, message: g.message || "An error occurred" };
    try {
      g = i(g);
    } catch (u) {
      return s ? s(u, g) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: u.message,
        rawData: g
      };
    }
    return g;
  } catch (b) {
    return { error: !0, message: b.message || "Network error" };
  }
}, hi = ["date", "dateTime"], gi = ["singleSelect"], yi = 1e6, bi = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset();
function Ci(e) {
  const { operator: r, value: t, type: a } = e, o = ["isEmpty", "isNotEmpty"].includes(r), l = t != null && (t !== "" || a === "number" && t === 0 || a === "boolean" && t === !1);
  return o || l;
}
const xi = ({ gridColumns: e, page: r, pageSize: t, sortModel: a, filterModel: o, baseFilters: l, action: i = "list", extraParams: s = {}, model: m, api: b }) => {
  const g = i === "export" && m.isElasticExport === !0, u = [], f = [], C = [];
  e.forEach(({ lookup: S, type: k, field: E, keepLocal: T = !1, keepLocalDate: V, filterable: oe = !0, dependsOn: J }) => {
    hi.includes(k) && C.push({ field: E, keepLocal: T, keepLocalDate: V }), S && !u.includes(S) && gi.includes(k) && oe && (u.push(S), f.push({ lookup: S, dependsOn: J }));
  });
  const h = [];
  o?.items?.length && o.items.forEach((S) => {
    if (Ci(S)) {
      const { field: k, operator: E, filterField: T } = S;
      let { value: V } = S;
      const J = e.filter((W) => W?.field === S.field)[0]?.type;
      J === "boolean" ? V = V === "true" || V === !0 ? 1 : 0 : J === "number" && (V = Array.isArray(V) ? V.filter((W) => W) : V), V = S.filterValues || V, h.push({
        field: T || k,
        operator: E,
        value: V,
        type: J
      });
    }
  }), l && Array.isArray(l) && h.push(...l);
  const x = {
    start: r * t,
    limit: g ? m.exportSize || yi : t,
    ...s,
    logicalOperator: o.logicOperator,
    sort: a.map((S) => (S.filterField || S.field) + " " + S.sort).join(","),
    where: h,
    isElasticExport: g,
    model: m.module,
    fileName: m.overrideFileName
  };
  u.length && (x.lookups = u.join(",")), f.length && (x.lookupWithDeps = JSON.stringify(f)), m?.limitToSurveyed && (x.limitToSurveyed = m?.limitToSurveyed);
  let w = `${b}/${i}`;
  const c = new URLSearchParams();
  s.template && c.append("template", s.template), s.configFileName && c.append("configFileName", s.configFileName);
  const v = c.toString();
  return v && (w += `?${v}`), { requestData: x, url: w, where: h, dateColumns: C };
}, Rr = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: a = {}, action: o = "list", model: l } = e, { requestData: i, url: s, where: m, dateColumns: b } = xi(e);
  if (r) {
    i.responseType = r, i.columns = t, i.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof l.createRequestPayload == "function" && await l.createRequestPayload(i, { where: m, url: s, dataParsers: Ne, ...e });
    const f = document.createElement("form");
    if (f.setAttribute("method", "POST"), f.setAttribute("id", "exportForm"), f.setAttribute("target", "_blank"), !a.template)
      for (const C in i) {
        let h = i[C];
        if (h == null)
          continue;
        typeof h != "string" && (h = JSON.stringify(h));
        const x = document.createElement("input");
        x.type = "hidden", x.name = C, x.value = h, f.append(x);
      }
    f.setAttribute("action", i.url || s), document.body.appendChild(f), f.submit(), setTimeout(() => {
      f.remove();
    }, 0);
    return;
  }
  const g = {
    url: s,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0,
    params: i,
    dataParser: Ne.json
  };
  typeof l.createRequestPayload == "function" && await l.createRequestPayload(g, { where: m, dataParsers: Ne, ...e });
  const u = await et(g);
  if (u?.error || u?.success === !1)
    throw new Error($t(u) || "An error occurred while fetching data");
  return typeof l.parseResponsePayload == "function" && l.parseResponseActions.includes(o) ? await l.parseResponsePayload({ responseData: u, model: l, dateColumns: b, action: o, ...e }) : (u.records.forEach((f) => {
    b.forEach((C) => {
      const { field: h, keepLocal: x, keepLocalDate: w } = C;
      if (f[h]) {
        if (f[h] = new Date(f[h]), w) {
          const c = f[h].getTimezoneOffset() * 6e4;
          f[h] = new Date(f[h].getTime() + c);
        }
        if (x && !bi(f[h])) {
          const c = f[h].getTimezoneOffset() * 6e4;
          f[h] = new Date(f[h].getTime() + c);
        }
      }
    }), l.columns.forEach(({ field: C, displayIndex: h }) => {
      h && (f[C] = f[h]);
    });
  }), u);
}, nr = async (e = {}) => {
  let { api: r, id: t, model: a, parentFilters: o, where: l = {} } = e;
  r = r || a.api;
  const i = new URLSearchParams(), s = `${r}/${t ?? "-"}`, m = [];
  (a.formDef || a.columns)?.forEach((c) => {
    c.lookup && !m.includes(c.lookup) && !c.dependsOn && m.push(c.lookup);
  }), i.set("lookups", m), l && Object.keys(l)?.length && i.set("where", JSON.stringify(l));
  const g = {
    url: `${s}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(g, { action: "load", dataParsers: Ne, ...e });
  const u = await et(g);
  if (u?.error || u?.success === !1)
    throw new Error($t(u) || "Load failed");
  if (typeof a.parseResponsePayload == "function" && a.parseResponseActions.includes("load"))
    return await a.parseResponsePayload({ responseData: u, model: a, action: "load", ...e });
  const { data: f, lookups: C } = u || {};
  let h = f[a.linkColumn];
  const x = a.columns.find((c) => c.field === a.linkColumn);
  if (x && x.lookup && C && C[x.lookup] && C[x.lookup]?.length) {
    const c = C[x.lookup].find((v) => v.value === h);
    c && (h = c.label);
  }
  const w = { ...a.defaultValues };
  return { id: t, title: h, record: { ...w, ...f, ...o }, lookups: C };
}, $r = async function(e = {}) {
  const { id: r, api: t, model: a } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${t}/${r}`,
    additionalParams: { method: "DELETE" }
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(o, { action: "delete", dataParsers: Ne, ...e });
  const l = await et(o);
  if (l?.error || l?.success === !1)
    throw new Error($t(l) || "Delete failed");
  return !0;
}, Vr = async function(e = {}) {
  const { id: r, api: t, values: a, model: o } = e;
  let l, i;
  r !== 0 ? (l = `${t}/${r}`, i = "PUT") : (l = t, i = "POST");
  const s = {
    url: l,
    additionalParams: { method: i },
    params: a,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(s, { action: "save", dataParsers: Ne, ...e });
  const m = await et(s);
  if (m?.error || m?.success === !1)
    throw new Error($t(m) || "Save failed");
  return m;
}, Wa = async (e = {}) => {
  let { api: r, model: t, lookups: a, scopeId: o, reqData: l } = e;
  r = r || t.api;
  const i = new URLSearchParams(), s = `${r}/lookups`;
  i.set("lookups", a), i.set("scopeId", o);
  const m = {
    url: `${s}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0,
    ...l
  };
  typeof t.createRequestPayload == "function" && await t.createRequestPayload(m, { action: "lookups", dataParsers: Ne, ...e });
  const b = await et(m);
  if (b?.error || b?.success === !1)
    throw new Error($t(b) || "Could not load lookups");
  return typeof t.parseResponsePayload == "function" && t.parseResponseActions.includes("lookups") ? await t.parseResponsePayload({ responseData: b, model: t, action: "lookups", ...e }) : b;
}, Pc = {
  getList: Rr,
  getRecord: nr,
  deleteRecord: $r,
  saveRecord: Vr,
  getLookups: Wa
}, wi = ({ pagination: e, apiRef: r, tTranslate: t = (a) => a }) => {
  const a = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, l = r.current.state.rows.totalRowCount, i = Math.ceil(l / o), { t: s, i18n: m } = vt(), b = { t: s, i18n: m }, [g, u] = B(a + 1), f = function(x) {
    let w = x.target?.value;
    w === "" ? u("") : (w = parseInt(w), w = isNaN(w) || w < 1 ? 1 : w, u(w));
  };
  fe(() => {
    u(a + 1);
  }, [a, o]);
  const C = function() {
    let x = g === "" ? 1 : g;
    x = Math.max(x, 1), x = Math.min(x, i), r.current.setPage(x - 1), u(x), g === "" && u(1);
  }, h = (x) => {
    const w = x.which || x.keyCode, c = String.fromCharCode(w);
    /\d/.test(c) || x.preventDefault();
  };
  return /* @__PURE__ */ D(qn, { children: [
    /* @__PURE__ */ n(tt, { sx: { pl: 5 }, children: e && /* @__PURE__ */ D(ye, { children: [
      /* @__PURE__ */ D(Nt, { variant: "p", children: [
        t("Jump to page", b),
        ":"
      ] }),
      /* @__PURE__ */ n(
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
          value: g,
          onChange: f,
          onKeyPress: h,
          disabled: !l
        }
      ),
      /* @__PURE__ */ n(Me, { disabled: !l, size: "small", onClick: C, children: t("Go", b) })
    ] }) }),
    /* @__PURE__ */ n(jn, {})
  ] });
}, vi = /\${((\w+)\.)?(\w+)}/g, Di = function(e, r, { template: t = vi, keepMissingTags: a = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, l, i, s) {
    const m = i ? r[i] || {} : r;
    return m[s] === void 0 ? a ? o : "" : m[s];
  });
}, Qt = {
  replaceTags: Di
};
function ga({ variant: e = "h2", component: r = "h2", text: t = "", name: a = null, ...o }) {
  return /* @__PURE__ */ D(ke, { variant: e, component: r, ...o, children: [
    t,
    a && ` ${a}`
  ] });
}
function Si(e = !1) {
  const r = l(), [t, a] = B(r);
  function o() {
    setTimeout(() => {
      a(l());
    }, 10);
  }
  fe(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function l() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const s = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const m = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let b = null;
    return window.innerWidth <= window.innerHeight ? b = "portrait" : b = "landscape", { mobile: s, tablet: m, portrait: b === "portrait", landscape: b === "landscape" };
  }
  return e ? t.mobile : t;
}
const Pi = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Fi = {
  ...rt.daDK,
  ...Pi
}, Ti = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Ei = {
  ...rt.deDE,
  ...Ti
}, Ai = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Ii = {
  ...rt.elGR,
  ...Ai
}, Mi = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Oi = {
  ...rt.esES,
  ...Mi
}, Bi = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Ri = {
  ...rt.frFR,
  ...Bi
}, ki = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Ni = {
  ...rt.itIT,
  ...ki
}, Li = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, $i = {
  ...rt.trTR,
  ...Li
}, Vi = {
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
}, zi = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Gi = {
  ...rt.enUS,
  ...zi
}, qi = {
  en: Gi,
  "tr-TR": $i,
  "es-ES": Oi,
  "da-DK": Fi,
  "de-DE": Ei,
  "el-GR": Ii,
  "fr-FR": Ri,
  "pt-PT": Vi,
  "it-IT": Ni
};
X.extend(Oo);
X.extend(Bo);
const Ua = ir(), Ha = ir(null), ya = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Fc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, a] = B("en"), [o, l] = B("MM/DD/YYYY hh:mm:ss A"), [i, s] = B(null), [m, b] = B(null), [g, u] = B(null), [f, C] = B(null), [h, x] = B(""), [w, c] = B(!1), { t: v, i18n: S } = vt(), k = St(), E = Ar(r), T = A((P, M) => {
    E.current[P] = M;
  }, []), V = A((P) => E.current[P || "default"] || "", []), oe = A((P, M) => `${E.current[M || "default"] || ""}${P}`, []), J = A((P = !0) => {
    c(P);
  }, []), W = A((P, M, U) => {
    if (U != null) {
      const G = U;
      let ee = P ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return G && (ee = G.split(" "), ee[0] = ee[0].toUpperCase(), P ? ee = ee[0] : M ? ee = ee[0].toUpperCase() : (ee[1] += ee[1].includes(":ss") ? "" : ":ss", ee = ee.join(" "))), ee;
    }
    return P?.split(" ")[0] || "DD-MM-YYYY";
  }, []), te = A(({ value: P, useSystemFormat: M, showOnlyDate: U = !1, state: G, timeZone: ee, isUtc: ie = !1 }) => {
    if (!P) return "-";
    const Se = W(M, U, G);
    return ie ? X.utc(P).format(Se) : ee ? X(P).tz(ee).format(Se) : X(P).format(Se);
  }, [W]), re = A(() => {
    const P = t, M = qi[P];
    function U(G) {
      return P === "pt-PT" || P === "ptPT" ? M.components.MuiDataGrid.defaultProps.localeText[G] || G : M[G] || G;
    }
    return { getLocalizedString: U };
  }, [t]), H = A((P) => {
    a(P);
  }, []), L = A((P) => {
    s(P);
  }, []), be = A((P) => {
    u(P);
  }, []), se = A((P) => {
    C(P);
  }, []), ae = A((P) => {
    x(P);
  }, []), j = A((P) => {
    l(P);
  }, []), he = A((P) => {
    b(P);
  }, []), N = q(() => ({
    locale: t,
    dateTime: o,
    pageTitle: i,
    modal: m,
    pageBackButton: g,
    userData: f,
    timeZone: h
  }), [t, o, i, m, g, f, h]), Ce = q(() => ({
    // State data
    stateData: N,
    // Loader management
    isLoading: w,
    showLoader: J,
    // Snackbar utilities
    showMessage: k?.showMessage || ya,
    showError: k?.showError || ya,
    // i18n utilities
    dayjs: X,
    t: v,
    i18n: S,
    // Date/time utilities
    systemDateTimeFormat: W,
    formatDate: te,
    useLocalization: re,
    // API utilities
    getApiEndpoint: V,
    setApiEndpoint: T,
    buildUrl: oe,
    // App-level state setters with meaningful names
    setLocale: H,
    setPageTitle: L,
    setPageBackButton: be,
    setUserData: se,
    setTimeZone: ae,
    setDateTimeFormat: j,
    setModal: he
  }), [
    N,
    w,
    J,
    v,
    S,
    k,
    V,
    T,
    W,
    te,
    re,
    H,
    L,
    be,
    se,
    ae,
    j,
    he,
    oe
  ]);
  return /* @__PURE__ */ n(Ua.Provider, { value: Ce, children: e });
}, Tc = Ha.Provider, zr = () => Nr(Ha), Le = () => {
  const e = Nr(Ua);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, ji = () => {
  const [e, r] = B(), [t, a] = B(!1), { stateData: o, setModal: l } = Le(), i = o.modal, s = 16 / 9;
  let m = (window.outerWidth - 10) / window.innerWidth * 100;
  const b = () => {
    let u = document.getElementById("tutorial-iframe");
    u ? (u = u.offsetWidth, u = u / window.innerWidth) : u = 0.9;
    const f = window.innerWidth * u * (1 / s), C = window.innerHeight - 180;
    r(Math.min(f, C));
  };
  fe(() => {
    i?.status && (a(!0), b());
  }, [i, m]), fe(() => (window.addEventListener("resize", b), () => {
    window.removeEventListener("resize", b);
  }), []);
  function g() {
    const u = document.getElementById("tutorial-iframe");
    u.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ D(ao, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    l({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ n(no, { className: "pt-2 pb-0", children: /* @__PURE__ */ D(we, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ D(we, { size: 11, children: [
        /* @__PURE__ */ D(ke, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(ke, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(ye, { children: " " }) })
      ] }),
      /* @__PURE__ */ D(we, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(Fo, { className: "cursor_pointer mt-2 mr-2", onClick: g }),
        /* @__PURE__ */ n(To, { className: "cursor_pointer mt-2", onClick: () => {
          l({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ D(oo, { dividers: !0, children: [
      t && /* @__PURE__ */ n("div", { children: "Loading..." }),
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
function Wi({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: a = null,
  mobileRightComponent: o,
  title: l = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: s,
  breadcrumbs: m = [],
  enableBackButton: b = !1,
  breadcrumbColor: g,
  showHelpButton: u = !1,
  model: f
}) {
  const C = Si(!0), h = m.length - 1, x = s && m.length, { t: w, i18n: c } = vt(), v = q(() => ({ t: w, i18n: c }), [w, c]), S = f?.tTranslate ?? ((E) => E), k = () => {
    r(-1);
  };
  return fe(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ D(ye, { children: [
    /* @__PURE__ */ n(ga, { className: "print-only", text: S(e, v) }),
    x && /* @__PURE__ */ D(ye, { children: [
      /* @__PURE__ */ n(io, { sx: { mb: 3 }, children: /* @__PURE__ */ D(lo, { sx: { backgroundColor: g || "#fff" }, children: [
        /* @__PURE__ */ D(we, { container: !0, children: [
          /* @__PURE__ */ n(we, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(so, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: m.map((E, T) => T < h ? /* @__PURE__ */ n(co, { onClick: k, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: E.text }, T) : /* @__PURE__ */ n(ke, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: E.text }, T)) }) }),
          b && /* @__PURE__ */ n(we, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(ct, { variant: "contained", onClick: k, children: S("Back", v) }) }),
          u && /* @__PURE__ */ n(we, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Lt, { color: "primary", title: S("Help", v), size: "large", children: /* @__PURE__ */ n(Po, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Te, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: C ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          ga,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: S(e, v),
            name: t
          }
        ) }) }) }) }),
        !C && /* @__PURE__ */ D(ye, { children: [
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
      /* @__PURE__ */ n(ji, {})
    ] })
  ] });
}
const Ya = ro()(Wi), je = {
  filterFieldDataTypes: {
    Number: "number",
    String: "string",
    Boolean: "boolean"
  },
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
  emptyIdValues: [null, void 0, "", "0", 0],
  // Normalize filter values for filter inputs used by grids/queries.
  // - If the filter is multi-valued (operator is 'isAnyOf' or `isMultiple` is true),
  //   ensure an array is returned (empty array for empty input, or wrap single
  //   values into an array).
  // - If the filter is single-valued, return a scalar: if an array was passed,
  //   take the first element; otherwise return the value or an empty string.
  normalizeFilterValue: ({ value: e, operator: r, isMultiple: t }) => {
    const a = ["", null, void 0].includes(e);
    return r === "isAnyOf" || t ? Array.isArray(e) ? e : a ? [] : [e] : Array.isArray(e) ? e[0] ?? "" : e ?? "";
  }
}, Ka = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: a = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = a.find((l) => l.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[je.permissionsMapper.add],
    canEdit: t.edit && !!o[je.permissionsMapper.edit],
    canDelete: t.delete && !!o[[je.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
X.extend(Ba);
const Ui = {
  date: Oa,
  datetime: rr,
  dateTimeLocal: rr
}, Hi = "-10px", Yi = "-16px", Ki = (e) => {
  const { fixedFilterFormat: r } = je, { item: t, applyValue: a, convert: o } = e, { systemDateTimeFormat: l, stateData: i } = Le(), s = e?.type || "date", m = r[s], b = (x) => {
    const w = X(x);
    return w.isValid() && w.year() > 1900;
  }, g = l(i.dateTime), u = (x) => {
    if (!(s !== "date" && s !== "datetime" && s !== "dateTimeLocal" || ((c) => typeof c != "string" ? !1 : !X(c, g, !0).isValid())(x))) {
      if (o) {
        x = X(x).utc(), a({ ...t, value: x });
        return;
      }
      if (!b(x)) {
        a({ ...t, value: null });
        return;
      }
      a({ ...t, value: x.format(m) });
    }
  }, f = (x) => {
    if (x && x === r.OverrideDateFormat) {
      const w = x.split("-");
      return w.length === 3 ? w[1] : null;
    }
  }, C = Ui[s], h = s === "dateTimeLocal" ? t?.value ? X(t?.value.$d) : null : t?.value ? X(t.value) : null;
  return /* @__PURE__ */ n(Ra, { dateAdapter: ka, children: /* @__PURE__ */ n(
    C,
    {
      fullWidth: !0,
      format: g,
      value: h,
      onChange: u,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Hi,
            marginBottom: Yi,
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
        fieldMonthPlaceholder: () => f(g) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, kt = (e) => Pa().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ n(Ki, { ...t, ...e }) : void 0
})), _i = {
  IsAnyOf: "isAnyOf"
}, Ji = (e) => {
  const { column: r, item: t, applyValue: a, apiRef: o } = e, l = r?.dataRef?.current?.lookups;
  let i = r.customLookup || l[r.lookup] || [];
  typeof r.lookup == "string" && (i = i.map(({ label: u, value: f }) => ({
    label: u,
    value: f
  })));
  const s = Fa(o, Wn), m = q(
    () => s.items?.filter((u) => u.field === r.field),
    [r.field, s.items]
  ), b = A(
    (u) => {
      let f = u.target.value;
      if (s.items.length >= 1) {
        f = f.length === 1 ? f[0] : f;
        for (const x of s.items)
          x.field === t.field && (x.operator === _i.IsAnyOf ? f = Array.isArray(f) ? f : [f] : f = f === 0 ? "0" : f);
      }
      if (f.length === 0 && m[0]) {
        o.current.deleteFilterItem(m[0]);
        return;
      }
      const C = f, h = m[0] ? m[0] : t;
      a({ ...h, value: C });
    },
    [o, r.applyZeroFilter, m, t, a]
  ), g = m[0]?.value ?? "";
  return /* @__PURE__ */ n(xt, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    Mr,
    {
      label: r.field,
      variant: "standard",
      value: g,
      onChange: (u) => b(u),
      multiple: Array.isArray(g),
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 400,
            overflowY: "auto"
          }
        }
      },
      children: i?.map((u, f) => /* @__PURE__ */ n(Ye, { value: u.value, children: u.label }, f))
    }
  ) });
}, He = {
  Edit: "Edit",
  Delete: "Delete"
}, Be = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, Zi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, Qi = { pageSize: 50, page: 0 }, Xi = [5, 10, 20, 50, 100], el = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: a, tOpts: o }) => {
  const { getApiEndpoint: l } = Le(), i = l("GridPreferenceManager"), s = Ta(), m = St(), [b, g] = B(Be.NONE), [u, f] = B(null), [C, h] = B(!1), [x, w] = B({}), [c, v] = B(null), [S, k] = B(null), E = q(
    () => c == null ? [] : c.filter((P) => P.prefId !== 0),
    [c]
  ), T = q(() => [
    { field: "prefName", type: "string", width: 300, headerName: a("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: a("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: a("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Ir, { icon: /* @__PURE__ */ n(wt, { title: He.Edit, children: /* @__PURE__ */ n(Ia, {}) }), tabIndex: 1, "data-action": He.Edit, label: a("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Ir, { icon: /* @__PURE__ */ n(wt, { title: He.Delete, children: /* @__PURE__ */ n(Aa, {}) }), tabIndex: 2, "data-action": He.Delete, label: a("Delete", o), color: "error" }, 2)] }
  ], [a, o]), V = q(() => me.object({
    prefName: me.string().trim(!0).required(a("Preference Name is Required", o)).max(20, a("Maximum Length is ", o) + "20"),
    prefDesc: me.string().max(100, a("Maximum Length is ", o) + "100")
  }), [a, o]), oe = (P) => f(P?.currentTarget), J = () => f(null), W = () => {
    g(Be.NONE), J();
  }, te = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), k(null), t && t(null), J());
  }, re = A(async ({ applyDefault: P = !1 }) => {
    const M = await et({
      url: i,
      params: { action: "list", id: r },
      dataParser: Ne.json
    });
    if (!M?.preferences) {
      m.showMessage(a("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const U = M.preferences.filter((G) => G.prefName.trim() !== "");
    if (v(U), P) {
      const G = U.find((ee) => ee.isDefault);
      if (G)
        return { defaultPrefId: G.prefId, preferences: U };
      t && t(null);
    }
    return { preferences: U };
  }, [i, r, m, a, o, t]), H = A(async (P, M = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), P === 0) {
      te();
      return;
    }
    const U = M || c;
    if (!U) {
      m.showMessage(a("Preferences not loaded yet.", o));
      return;
    }
    const G = U.find((ie) => ie.prefId === P);
    if (!G?.prefValue) {
      m.showMessage(a("Failed to load preference.", o));
      return;
    }
    let ee;
    try {
      ee = typeof G.prefValue == "string" ? JSON.parse(G.prefValue) : G.prefValue;
    } catch {
      m.showMessage(a("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(ee), k(G.prefName), t && t(G.prefName), J();
  }, [e, te, c, t, m, a, o]), L = async (P) => {
    const M = P.prefName.trim(), U = M.toLocaleLowerCase();
    if (c.find((ee) => ee.prefName.toLocaleLowerCase() === U && ee.prefId !== P.prefId)) {
      h(!0);
      return;
    }
    const G = await et({
      url: i,
      params: {
        action: "save",
        id: r,
        prefId: P.prefId,
        prefName: M,
        prefDesc: P.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: P.isDefault
      },
      dataParser: Ne.json
    });
    if (G === !0 || G?.success === !0) {
      m.showMessage(a(`Preference ${b === Be.ADD ? "added" : "saved"} successfully.`, o)), W(), await re({ applyDefault: !1 });
      return;
    }
    m.showMessage(a("Error saving preference: ", o) + (G?.message || a("Unknown error", o)));
  }, be = async () => {
    const P = await et({
      url: i,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: Ne.json
    });
    if (P === !0 || P?.success === !0) {
      m.showMessage(a("Preference deleted successfully.", o)), await re({ applyDefault: !1 }), w({});
      return;
    }
    m.showMessage(a("Error deleting preference: ", o) + (P?.message || a("Unknown error", o)));
  }, se = (P) => {
    const M = P.field === "editAction" ? He.Edit : P.field === "deleteAction" ? He.Delete : null;
    if (P.id === 0 && M) {
      m.showMessage(a(`Default preference cannot be ${M === He.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    M === He.Edit && (g(Be.EDIT), j.setValues(P?.row)), M === He.Delete && w({
      prefId: P.id,
      preferenceName: P.row.prefName
    });
  }, ae = (P) => {
    g(P), J(), P === Be.ADD && j.resetForm();
  }, j = Na({
    initialValues: Zi,
    validationSchema: V,
    onSubmit: L,
    mode: "onBlur"
  });
  fe(() => {
    if (!r) return;
    (async () => {
      const M = await re({ applyDefault: !0 });
      M?.defaultPrefId && M?.preferences && await H(M.defaultPrefId, M.preferences);
    })();
  }, [r]);
  const he = q(() => ({
    noRowsLabel: a("No rows", o),
    columnMenuManageColumns: a("Manage columns", o),
    columnMenuHideColumn: a("Hide column", o),
    pinToLeft: a("Pin to left", o),
    pinToRight: a("Pin to right", o),
    columnMenuLabel: a("Menu", o),
    filterPanelRemoveAll: a("Remove all", o),
    columnsPanelTextFieldLabel: a("Find column", o),
    columnsPanelTextFieldPlaceholder: a("Column title", o),
    columnsPanelShowAllButton: a("Show all", o),
    columnsPanelHideAllButton: a("Hide all", o),
    booleanCellTrueLabel: a("Yes", o),
    toolbarColumnsLabel: a("Select columns", o),
    toolbarExportLabel: a("Export", o),
    booleanCellFalseLabel: a("No", o),
    paginationRowsPerPage: a("Rows per page", o),
    paginationDisplayedRows: ({ from: P, to: M, count: U }) => `${P}–${M} ${a("of", o)} ${U}`,
    toolbarQuickFilterLabel: a("Search", o),
    columnsManagementSearchTitle: a("Search", o),
    columnsManagementNoColumns: a("No columns", o)
  }), [a, o]), N = b === Be.MANAGE, Ce = b === Be.ADD || b === Be.EDIT;
  return /* @__PURE__ */ D(Te, { children: [
    /* @__PURE__ */ D(
      ct,
      {
        id: "grid-preferences-btn",
        "aria-controls": u ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": u ? "true" : void 0,
        onClick: oe,
        title: a("Preference", o),
        startIcon: /* @__PURE__ */ n(ma, {}),
        children: [
          a("Preferences", o),
          " ",
          S && `(${S})`
        ]
      }
    ),
    /* @__PURE__ */ D(
      uo,
      {
        id: "grid-preference-menu",
        anchorEl: u,
        open: !!u,
        onClose: J,
        component: po,
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
          /* @__PURE__ */ D(Ye, { component: Sr, dense: !0, onClick: () => ae(Be.ADD), children: [
            /* @__PURE__ */ n(Pr, { children: /* @__PURE__ */ n(Br, {}) }),
            a("Add Preference", o)
          ] }),
          /* @__PURE__ */ D(Ye, { component: Sr, dense: !0, onClick: () => ae(Be.MANAGE), children: [
            /* @__PURE__ */ n(Pr, { children: /* @__PURE__ */ n(ma, {}) }),
            a("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ D(Ye, { component: Sr, dense: !0, divider: c?.length > 0, onClick: () => H(0), children: [
            /* @__PURE__ */ n(Pr, { children: /* @__PURE__ */ n(Vo, {}) }),
            a("Reset to Default", o)
          ] }),
          c?.length > 0 && c?.map((P) => {
            const { prefName: M, prefDesc: U, prefId: G } = P;
            return /* @__PURE__ */ n(
              Ye,
              {
                onClick: () => H(G),
                component: fo,
                selected: S === M,
                title: a(U, o),
                dense: !0,
                children: /* @__PURE__ */ n(mo, { primary: M })
              },
              `pref-item-${G}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ke,
      {
        open: b !== Be.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ D(ke, { variant: "h5", children: [
          b,
          " ",
          a(N ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: N ? "md" : "sm",
        fullWidth: !0,
        children: [
          Ce && /* @__PURE__ */ D(
            we,
            {
              component: "form",
              onSubmit: j.handleSubmit,
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
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(
                  ut,
                  {
                    value: j.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ D("span", { children: [
                      a("Preference Name", o),
                      " ",
                      /* @__PURE__ */ n("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: j.handleChange,
                    error: !!j.errors.prefName,
                    helperText: j.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(
                  ut,
                  {
                    value: j.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: a("Preference Description", o),
                    name: "prefDesc",
                    onChange: j.handleChange,
                    error: !!j.errors.prefDesc,
                    helperText: j.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(
                  dt,
                  {
                    control: /* @__PURE__ */ n(
                      ho,
                      {
                        checked: j.values.isDefault,
                        name: "isDefault",
                        onChange: j.handleChange
                      }
                    ),
                    label: a("Default", o)
                  }
                ) }),
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ D(pa, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    ct,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n($o, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: a("Save", o)
                    }
                  ),
                  /* @__PURE__ */ n(
                    ct,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(Or, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: W,
                      disableElevation: !0,
                      children: a("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          N && /* @__PURE__ */ D(we, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(
              Ea,
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
                columns: T,
                pageSizeOptions: Xi,
                pagination: !0,
                rowCount: E.length,
                rows: E,
                getRowId: (P) => P.GridPreferenceId,
                slots: {
                  headerFilterMenu: !1
                },
                density: "compact",
                disableDensitySelector: !0,
                apiRef: s,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                initialState: {
                  pagination: {
                    paginationModel: Qi
                  }
                },
                localeText: he
              }
            ) }),
            /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(pa, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              ct,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(Or, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: W,
                disableElevation: !0,
                children: a("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ke,
      {
        open: C,
        onConfirm: () => h(!1),
        title: "",
        okText: a("Ok", o),
        cancelText: "",
        children: [
          '"',
          j.values.prefName.trim(),
          '": ',
          a("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ D(
      Ke,
      {
        open: !!x.preferenceName,
        onConfirm: be,
        onCancel: () => w({}),
        title: a("Confirm delete", o),
        yesNo: !0,
        children: [
          a("Are you sure you wish to delete", o),
          ' "',
          x.preferenceName,
          '"?'
        ]
      }
    )
  ] });
}, tl = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((a) => {
  t.lastIndex = 0;
  const o = t.exec(a);
  if (!o) return null;
  const [, l, i = "ASC"] = o;
  return {
    field: l.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), st = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: a, type: o, isPivotExport: l = !1, icon: i }) => /* @__PURE__ */ D(
  La,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": a,
    "data-is-pivot-export": l,
    children: [
      /* @__PURE__ */ n(tt, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: i }),
      e(o, r)
    ]
  }
), rl = ({ exportFormats: e, customExportOptions: r, ...t }) => /* @__PURE__ */ D(Un, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(st, { ...t, icon: /* @__PURE__ */ n(Eo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(st, { ...t, icon: /* @__PURE__ */ n(Fr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(st, { ...t, icon: /* @__PURE__ */ n(Fr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(st, { ...t, icon: /* @__PURE__ */ n(Ao, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(st, { ...t, icon: /* @__PURE__ */ n(Io, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(st, { ...t, icon: /* @__PURE__ */ n(Mo, { fontSize: "small" }), type: "JSON", contentType: "application/json" }),
  Array.isArray(r) && r.map((a, o) => /* @__PURE__ */ n(
    st,
    {
      ...t,
      icon: a.icon || /* @__PURE__ */ n(Fr, { fontSize: "small" }),
      type: a.label || "Excel",
      contentType: a.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      handleExport: a.handleExport || t.handleExport
    },
    a.key || o
  ))
] }), tr = (e, r) => {
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
}, al = (e = {}, r = {}) => {
  let t = !0;
  for (const a in e)
    e[a] !== r[a] && (t = !1);
  for (const a in r)
    a in e || (t = !1);
  return t;
};
X.extend(Ba);
const nl = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: a,
  tTranslate: o,
  tOpts: l
}) => {
  const { systemDateTimeFormat: i, stateData: s } = Le(), { fixedFilterFormat: m } = je, b = q(() => r?.items?.find((h) => h.field === e.field), [r, e.field]), g = q(() => {
    const h = b?.operator || e.toolbarFilter?.defaultOperator || tr(e.type);
    return ["isEmpty", "isNotEmpty"].includes(h) ? "" : b ? b.value : e.toolbarFilter?.defaultOperator === "isAnyOf" ? [] : "";
  }, [b, e.toolbarFilter?.defaultOperator, e.type]), u = A((h) => {
    const x = e.toolbarFilter?.defaultOperator || tr(e.type);
    t((w) => {
      const c = w?.items || [];
      if (h === "" || h === null || Array.isArray(h) && h.length === 0) {
        const k = c.filter((E) => E.field !== e.field);
        return {
          ...w,
          items: k
        };
      }
      const v = {
        field: e.field,
        operator: x,
        value: h,
        type: e.type
      }, S = c.filter((k) => k.field !== e.field);
      return {
        ...w,
        items: [...S, v]
      };
    });
  }, [e, t]), f = A((h, x) => x === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[h] || h : x === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[h] || h : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[h] || h, []);
  return (() => {
    const h = e.toolbarFilter?.label || e.headerName || e.label || e.field, x = e.toolbarFilter?.defaultOperator || tr(e.type), w = f(x, e.type), v = e.type === "number" || e.type === "string" && x !== "startsWith" ? e.type === "number" ? `${w} ${h}` : `${h} (${w})` : h;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ n(
          ut,
          {
            variant: "standard",
            label: o(v, l),
            value: g,
            onChange: (L) => u(L.target.value),
            type: "text",
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "number":
        return /* @__PURE__ */ n(
          ut,
          {
            variant: "standard",
            label: o(v, l),
            value: g,
            onChange: (L) => u(L.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const L = g === "" || g === void 0 || g === null ? "" : g === !0 || g === "true" ? "true" : g === !1 || g === "false" ? "false" : "";
        return /* @__PURE__ */ D(xt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(fa, { children: o(v, l) }),
          /* @__PURE__ */ D(
            Mr,
            {
              value: L,
              onChange: (be) => {
                const se = be.target.value;
                let ae;
                se === "" ? ae = "" : se === "true" ? ae = !0 : se === "false" ? ae = !1 : ae = se, u(ae);
              },
              size: "small",
              children: [
                /* @__PURE__ */ n(Ye, { value: "", children: o("All", l) }),
                /* @__PURE__ */ n(Ye, { value: "true", children: o("True", l) }),
                /* @__PURE__ */ n(Ye, { value: "false", children: o("False", l) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const S = e.customLookup || a?.[e.lookup] || [], k = typeof e.lookup == "string" ? S.map((L) => ({
          label: L?.label || "",
          value: L?.value ?? ""
        })) : S, E = b?.operator === "isAnyOf" || e.toolbarFilter?.defaultOperator === "isAnyOf", T = je.normalizeFilterValue({ value: g, operator: b?.operator, isMultiple: E }), V = 1;
        return /* @__PURE__ */ D(xt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(fa, { children: o(v, l) }),
          /* @__PURE__ */ n(
            Mr,
            {
              value: T,
              onChange: (L) => u(L.target.value),
              multiple: E,
              size: "small",
              renderValue: (L) => {
                const se = (Array.isArray(L) ? L : L != null && L !== "" ? [L] : []).map((N) => {
                  if (N && typeof N == "object" && "label" in N) return N.label;
                  const Ce = k.find((P) => String(P.value) === String(N));
                  return Ce ? Ce.label : "";
                }).filter(Boolean);
                if (se.length === 0) return "";
                if (se.length <= V) return se.join(", ");
                const ae = se.slice(0, V).join(", "), j = se.length - V, he = se.join(", ");
                return /* @__PURE__ */ n(wt, { title: he, placement: "top", children: /* @__PURE__ */ n("span", { children: `${ae} +${j}` }) });
              },
              children: k.map((L) => /* @__PURE__ */ n(Ye, { value: L.value, children: L.label }, L.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const oe = e.type, W = m[oe === "dateTime" ? "datetime" : oe], te = i(oe !== "dateTime", !1, s.dateTime), re = oe === "dateTime" ? zo : Go;
        let H = null;
        if (g) {
          const L = X(g);
          H = L.isValid() ? L : null;
        }
        return /* @__PURE__ */ n(Ra, { dateAdapter: ka, children: /* @__PURE__ */ n(
          re,
          {
            label: o(v, l),
            format: te,
            value: H,
            onChange: (L) => {
              !L || !L.isValid() ? u(null) : u(L.format(W));
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
        return /* @__PURE__ */ n(
          ut,
          {
            variant: "standard",
            label: o(v, l),
            value: g,
            onChange: (L) => u(L.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, Xt = cr(Me)({
  margin: "6px"
}), ol = cr(Hn)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), il = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: a,
    isReadOnly: o,
    canAdd: l,
    forAssignment: i,
    showAddIcon: s,
    onAdd: m,
    selectionApi: b,
    rowSelectionModel: g,
    selectAll: u,
    available: f,
    onAssign: C,
    assigned: h,
    onUnassign: x,
    effectivePermissions: w,
    clearFilters: c,
    handleExport: v,
    preferenceKey: S,
    apiRef: k,
    tTranslate: E,
    tOpts: T,
    filterModel: V,
    setFilterModel: oe,
    onPreferenceChange: J,
    toolbarItems: W,
    gridColumns: te,
    customExportOptions: re
  } = e, H = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), L = (N) => N != null && N !== "" && !(Array.isArray(N) && N.length === 0), se = ((N = []) => N.filter(
    (Ce) => ["isEmpty", "isNotEmpty"].includes(Ce.operator) || L(Ce.value)
  ))(V?.items || []).length || 0, ae = te?.filter((N) => N.toolbarFilter) || [], j = t?.lookups || {}, he = t?.records || [];
  return /* @__PURE__ */ D(ye, { children: [
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
            r.gridSubTitle && /* @__PURE__ */ D(Nt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              E(r.gridSubTitle, T)
            ] }),
            a && r.showPreferenceInHeader && /* @__PURE__ */ D(Nt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              E("Applied Preference", T),
              ": ",
              a
            ] }),
            (o || !l && !i) && /* @__PURE__ */ D(Nt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !l || o ? "" : r.title
            ] }),
            !i && l && !o && /* @__PURE__ */ n(Xt, { startIcon: s ? /* @__PURE__ */ n(Br, {}) : null, onClick: m, size: "medium", variant: "contained", children: E(H, T) }),
            !!e.headerActions && e.headerActions,
            b.length && he.length ? /* @__PURE__ */ n(
              Xt,
              {
                onClick: u,
                size: "medium",
                variant: "contained",
                children: g.ids.size === he.length ? E("Deselect All", T) : E("Select All", T)
              }
            ) : /* @__PURE__ */ n(ye, {}),
            f && /* @__PURE__ */ n(Xt, { startIcon: s ? /* @__PURE__ */ n(Br, {}) : null, onClick: C, size: "medium", variant: "contained", children: E("Assign", T) }),
            h && /* @__PURE__ */ n(Xt, { startIcon: s ? /* @__PURE__ */ n(Ro, {}) : null, onClick: x, size: "medium", variant: "contained", children: E("Remove", T) })
          ] }),
          /* @__PURE__ */ D(ol, { ...e, children: [
            w.showColumnsOrder && /* @__PURE__ */ n(
              Yn,
              {
                render: (N) => /* @__PURE__ */ n(
                  Me,
                  {
                    ...N,
                    startIcon: /* @__PURE__ */ n(No, {}),
                    size: "small",
                    variant: "text",
                    children: E("COLUMNS", T)
                  }
                )
              }
            ),
            w.filter && /* @__PURE__ */ D(ye, { children: [
              /* @__PURE__ */ n(
                Kn,
                {
                  render: (N) => /* @__PURE__ */ n(
                    Me,
                    {
                      ...N,
                      startIcon: /* @__PURE__ */ n(go, { badgeContent: se, color: "primary", children: /* @__PURE__ */ n(Lo, {}) }),
                      size: "small",
                      variant: "text",
                      children: E("FILTERS", T)
                    }
                  )
                }
              ),
              /* @__PURE__ */ n(Me, { startIcon: /* @__PURE__ */ n(ko, {}), onClick: c, size: "small", children: E("CLEAR FILTER", T) })
            ] }),
            w.export && /* @__PURE__ */ n(rl, { handleExport: v, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, customExportOptions: re, tTranslate: E, tOpts: T }),
            W,
            S && /* @__PURE__ */ n(
              el,
              {
                gridRef: k,
                preferenceKey: S,
                onPreferenceChange: J,
                t: E,
                tOpts: T
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ n(Te, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: ae.length > 0 && /* @__PURE__ */ n("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: ae.map((N) => /* @__PURE__ */ n(
      nl,
      {
        column: N,
        filterModel: V,
        setFilterModel: oe,
        lookupData: j,
        tTranslate: E,
        tOpts: T
      },
      N.field
    )) }) })
  ] });
}, ll = 50, sl = /(\w+)( ASC| DESC)?/i, cl = 6e4, ul = 0, dl = 1e6, Re = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, pl = {
  article: /* @__PURE__ */ n(to, {}),
  edit: /* @__PURE__ */ n(Ia, {}),
  copy: /* @__PURE__ */ n(eo, {}),
  delete: /* @__PURE__ */ n(Aa, {}),
  history: /* @__PURE__ */ n(qo, {}),
  download: /* @__PURE__ */ n(jo, {})
}, K = {
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
}, _a = ["isEmpty", "isNotEmpty"], fl = (e) => (e || []).filter((r) => _a.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), ml = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], hl = (e) => e.value ? /* @__PURE__ */ n(So, { style: { color: "green" } }) : /* @__PURE__ */ n(Or, { style: { color: "gray" } }), ba = cr("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), gl = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const a = Qn(), o = e.row[t], i = Fa(a, Xn)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ n(
    $a,
    {
      onClick: (m) => {
        m.stopPropagation(), r({ row: e.row });
      },
      checked: i,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, Ca = Sa(({
  model: e,
  columns: r,
  api: t,
  defaultSort: a,
  setActiveRecord: o,
  parentFilters: l,
  parent: i,
  where: s,
  title: m,
  showPageTitle: b,
  permissions: g,
  selected: u,
  assigned: f,
  available: C,
  disableCellRedirect: h = !1,
  onAssignChange: x,
  customStyle: w,
  onCellClick: c,
  showRowsSelected: v,
  showFullScreenLoader: S,
  customFilters: k,
  onRowDoubleClick: E,
  onRowClick: T = () => {
  },
  gridStyle: V,
  reRenderKey: oe,
  additionalFilters: J,
  onCellDoubleClickOverride: W,
  onAddOverride: te,
  dynamicColumns: re,
  toolbarItems: H,
  readOnly: L = !1,
  onListParamsChange: be,
  apiRef: se,
  baseFilters: ae,
  customExportOptions: j,
  sx: he,
  ...N
}) => {
  const [Ce, P] = B({ pageSize: ll, page: 0 }), [M, U] = B({ recordCount: 0, records: null, lookups: {} }), G = !!x, ee = v, [ie, Se] = B({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [Vt, _e] = B(!1), [We, dr] = B(null), ft = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [Pt, Ft] = B(!1), pe = St(), Tt = e.paginationMode === K.client ? K.client : K.server, { t: at, i18n: zt } = vt(), d = q(() => ({ t: at, i18n: zt }), [at, zt]), [mt, ve] = B(""), [Je, Ee] = B(tl(a || e.defaultSort, K, sl)), Et = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Et.items = [], e.defaultFilters.forEach((y) => {
    Et.items.push(y);
  }));
  const [Oe, Ae] = B({ ...Et }), { navigate: De, getParams: Gt, useParams: Ie, pathname: qt } = zr(), { id: pr } = Ie() || Gt, At = pr?.split("-")[0], Pe = se || Ta(), { idProperty: ue = "id", showHeaderFilters: It = !0, disableRowSelectionOnClick: fr = !0, hideTopFilters: Mt = !0, updatePageTitle: jt = !0, isElasticScreen: ht = !1, navigateBack: mr = !1, selectionApi: Ze = {}, debounceTimeOut: hr = 300, showFooter: z = !0, disableRowGrouping: Fe = !0 } = e, Z = e.readOnly === !0 || L, Ue = e.allowDoubleClick === !1, $e = Ar(M), nt = e.showAddIcon === !0, Wt = e.columns.filter(({ link: y }) => !!y).map((y) => y.link), { stateData: Ve, formatDate: ot, getApiEndpoint: gt, buildUrl: yt, setPageTitle: gr } = Le(), [tn, Ut] = B(!1), { timeZone: yr } = Ve, it = q(() => ({ ...K.permissions, ...e.permissions, ...g }), [e.permissions, g]), Gr = ["isEmpty", "isNotEmpty", "isAnyOf"], rn = Ve.userData || {}, Ht = e.columns.find((y) => y.type === "fileUpload")?.field || "", an = { add: it.add, edit: it.edit, delete: it.delete }, { canAdd: qr, canEdit: jr, canDelete: Wr } = Ka({ userData: rn, model: e, userDefinedPermissions: an }), p = e.tTranslate ?? ((y) => y), { addUrlParamKey: Yt, searchParamKey: Ot, hideBreadcrumb: nn = !1, tableName: Ur, showHistory: Hr = !0, hideBreadcrumbInGrid: on = !1, breadcrumbColor: ln, disablePivoting: sn = !1, columnHeaderHeight: cn = 70, disablePagination: Yr = !1 } = e, Kr = e.gridTitle || e.title, Bt = gt("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, Qe = new URLSearchParams(window.location.search), [_r, un] = B(null), [Jr, dn] = B(!Bt), ze = t || e.api, [br, Cr] = B(null), pn = q(() => new Set(br ? [br] : []), [br]), fn = typeof e.getDetailPanelContent == "function", [mn, Zr] = B([]);
  fe(() => {
    Pe.current && (Pe.current.prefKey = Bt);
  }, [Pe, Bt]);
  const Qr = A((y) => {
    un(y), dn(!0);
  }, []), hn = q(() => e.columnGroupingModel ? e.columnGroupingModel.map((y) => ({
    ...y,
    headerName: y.headerName ? p(y.headerName, d) : y.headerName
  })) : [], [e.columnGroupingModel, d, at, p]);
  fe(() => {
    Array.isArray(N.rowGroupingField) && Zr(N.rowGroupingField);
  }, [N.rowGroupingField]);
  const xr = Qe.has("baseData") && Qe.get("baseData"), Xr = q(() => {
    if (xr)
      try {
        const y = JSON.parse(xr);
        if (typeof y === K.object && y !== null)
          return y;
      } catch (y) {
        console.error("Failed to parse baseData from URL:", y);
      }
    return {};
  }, [xr]), gn = A(({ row: y }) => {
    const I = y[ue];
    Se((O) => {
      const F = new Set(O?.ids || []);
      return F.has(I) ? F.delete(I) : F.add(I), { type: "include", ids: F };
    });
  }, [ue]), ea = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (y) => ot({ value: y, useSystemFormat: !0, showOnlyDate: !1, state: Ve.dateTime, timeZone: yr }),
      filterOperators: kt({ columnType: "date", label: p("Value", d) })
    },
    dateTime: {
      valueFormatter: (y) => ot({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: Ve.dateTime, timeZone: yr }),
      filterOperators: kt({ columnType: "datetime", label: p("Value", d) })
    },
    dateTimeLocal: {
      valueFormatter: (y) => ot({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: Ve.dateTime, timeZone: yr }),
      filterOperators: kt({ type: "dateTimeLocal", convert: !0 })
    },
    localDateTime: {
      valueFormatter: (y) => ot({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: Ve.dateTime, isUtc: !0 }),
      filterOperators: kt({ columnType: "datetime", label: p("Value", d) })
    },
    boolean: {
      renderCell: hl
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (y) => /* @__PURE__ */ n(gl, { params: y, handleSelectRow: gn, idProperty: ue })
    }
  };
  fe(() => {
    $e.current = M;
  }, [M]), fe(() => {
    if (!k || !Object.keys(k).length) return;
    if (k.clear) {
      Ae({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const y = Object.entries(k).reduce((I, [O, F]) => (O === K.startDate || O === K.endDate ? I.push(F) : O in k && I.push({ field: O, value: F, operator: "equals", type: "string" }), I), []);
    Ae({ items: y, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [k]);
  const yn = A(({ field: y, lookupMap: I }) => ($e.current.lookups || {})[(I || {})[y]?.lookup] || [], []);
  fe(() => {
    N.isChildGrid;
  }, [N.isChildGrid, Mt]);
  const ta = A(
    ({ key: y, title: I, icon: O, color: F = "primary", disabled: R, otherProps: _ }) => /* @__PURE__ */ n(
      Ir,
      {
        icon: /* @__PURE__ */ n(wt, { title: p(I, d), children: pl[O] || O || p(I, d) }),
        "data-action": y,
        label: p(I, d),
        color: F,
        disabled: R,
        ..._
      },
      y
    ),
    [at, d, p]
  ), { customActions: Kt = [] } = e, _t = q(() => {
    const y = [];
    return !G && !Z && y.push(
      {
        key: Re.Edit,
        title: "Edit",
        icon: "edit",
        show: !!jr,
        disabled: (I) => I.canEdit === !1
      },
      {
        key: Re.Copy,
        title: "Copy",
        icon: "copy",
        show: !!it.copy
      },
      {
        key: Re.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Wr
      },
      {
        key: Re.History,
        title: "History",
        icon: "history",
        show: !!Hr
      },
      ...Kt
    ), y.push({
      key: Re.Download,
      title: "Download document",
      icon: "download",
      show: Ht.length > 0
    }), y.filter(({ show: I }) => I !== !1);
  }, [
    G,
    Z,
    jr,
    Wr,
    Hr,
    it.copy,
    Ht.length,
    Kt
  ]), bn = A(
    ({ row: y }) => _t.map(
      ({ key: I, title: O, icon: F, color: R, disabled: _, show: $, action: Q, ...le }) => ta({
        key: I,
        title: O || Q,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: F,
        color: R,
        disabled: _?.(y),
        otherProps: le
      })
    ),
    [_t, ta]
  ), { gridColumns: xe, pinnedColumns: ra, lookupMap: wr } = q(() => {
    let y = r || e.gridColumns || e.columns;
    re && (y = [...re, ...y]);
    const I = { left: [_n.field], right: [] }, O = [], F = {}, R = { ...ea, ...e.gridColumnTypes };
    for (const $ of y) {
      if ($.gridLabel === null || i && $.lookup === i || $.type === K.oneToMany && $.countInList === !1) continue;
      const Q = {};
      if ($.type === K.oneToMany && (Q.type = "number", Q.field = $.field.replace(/s$/, "Count")), R[$.type] && Object.assign(Q, R[$.type]), Q.valueOptions === K.lookup || $.type === K.boolean) {
        let ce = [];
        Q.valueOptions === K.lookup && (Q.valueOptions = (Y) => yn({ ...Y, lookupMap: F }), ce = [...Pa(), ...Jn()].filter((Y) => ["is", "not", "isAnyOf"].includes(Y.value))), $.type === K.boolean && (ce = Zn()), Q.filterOperators = ce.map((ne) => ({
          ...ne,
          InputComponent: ne.InputComponent ? (Y) => /* @__PURE__ */ n(
            Ji,
            {
              column: {
                ...$,
                ...$.type === K.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: $e
              },
              ...Y,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      if (($.linkTo || $.link) && (Q.cellClassName = "mui-grid-linkColumn"), $.hyperlinkURL && !$.renderCell) {
        const { hyperlinkURL: ce, hyperlinkIndex: ne } = $;
        Q.renderCell = (Y) => {
          const { value: de, formattedValue: Zt, row: Rt } = Y;
          if (de == null || de === "") return de;
          const Xe = ne ? Rt[ne] : de, Dr = ce.replace("{0}", encodeURIComponent(String(Xe)));
          return /* @__PURE__ */ n("a", { href: Dr, rel: "noopener noreferrer", target: "_blank", children: Zt ?? de });
        };
      }
      Fe || (Q.groupable = $.groupable ?? !1);
      const le = p((typeof $.gridLabel == "function" ? $.gridLabel({ column: $, t: p, tOpts: d }) : $.gridLabel) || $.label, d);
      O.push({ ...$, ...Q, headerName: le, description: le }), $.pinned && I[$.pinned === K.right ? K.right : K.left].push($.field), F[$.field] = $;
    }
    let _ = e.standard;
    return _ === !0 && (_ = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), _ && typeof _ === K.object && ml.forEach(({ key: $, field: Q, type: le, header: ce }) => {
      if (_[$] === !0) {
        const ne = { field: Q, type: le, headerName: p(ce, d), width: 200 };
        le === K.dateTime && (ne.filterOperators = kt({ columnType: "date" }), ne.valueFormatter = ea.dateTime.valueFormatter, ne.keepLocal = !0), O.push(ne);
      }
    }), _t.length && (O.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? K.defaultActionWidth) * _t.length,
      hidable: !1,
      getActions: bn,
      headerName: p("Actions", d)
    }), I.right.push("actions")), { gridColumns: O, pinnedColumns: I, lookupMap: F };
  }, [r, e, i, g, G, re, at, Ve?.dateTime]), vr = Ar(!1);
  fe(() => {
    if (vr.current) return;
    const y = xe?.filter((F) => F.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (y.length === 0) return;
    if (Oe.items.some(
      (F) => y.some((R) => R.field === F.field)
    )) {
      vr.current = !0;
      return;
    }
    const O = y.map((F) => {
      const R = tr(F.type, F.toolbarFilter?.defaultOperator), _ = je.normalizeFilterValue({
        operator: R,
        value: F.toolbarFilter.defaultFilterValue
      });
      return {
        field: F.field,
        operator: R,
        value: _,
        type: F.type
      };
    }).filter((F) => {
      const R = F.value;
      return !(Array.isArray(R) && R.length === 0);
    });
    O.length > 0 && Ae((F) => ({
      ...F,
      items: [...F.items, ...O]
    })), vr.current = !0;
  }, [xe]);
  const Ge = A(async ({ action: y = "list", extraParams: I = {}, isPivotExport: O = !1, contentType: F, columns: R } = {}) => {
    const { pageSize: _, page: $ } = Ce, Q = !!F, le = yt(O ? e.pivotApi : ze), ce = {
      ...Oe,
      items: fl(Oe.items)
    }, ne = Array.isArray(ae) ? [...ae] : [];
    e.joinColumn && At && ne.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(At) }), J && (ce.items = [...ce.items || [], ...J]);
    const Y = [];
    Array.isArray(ne) && Y.push(...ne), Array.isArray(l) && Y.push(...l);
    const de = {
      ...I,
      ...N.extraParams
      // Merge any custom params passed via component props
    };
    if ((f || C) && (de[f ? "include" : "exclude"] = Array.isArray(u) ? u.join(",") : u), O && (e.exportTemplate && (de.template = e.exportTemplate), e.configFileName && (de.configFileName = e.configFileName)), !(!ce.items.length || ce.items.every((Xe) => "value" in Xe && Xe.value !== void 0))) return;
    const Rt = {
      action: y,
      page: Q ? ul : $,
      pageSize: Q ? dl : _,
      sortModel: Je,
      filterModel: ce,
      gridColumns: xe,
      model: e,
      baseFilters: Y,
      api: le,
      extraParams: de
    };
    typeof be == "function" && be(Rt), Pe.current.listParams = Rt, Q || Ut(!0);
    try {
      const Xe = await Rr({ ...Rt, contentType: F, columns: R });
      !Q && Xe !== void 0 && U(Xe);
    } catch {
      pe.showError(p("An error occurred while fetching data", d)), Q || U((Dr) => ({ ...Dr, records: [], recordCount: 0 }));
    } finally {
      Q || Ut(!1);
    }
  }, [Ce, yt, e, ze, Oe, ae, At, f, C, u, N.extraParams, Je, xe, l, be, Pe, Rr, pe, J, pe]), lt = A(async ({ id: y, record: I = {}, mode: O }) => {
    if (o) {
      try {
        const R = yt(ze), _ = await nr({ id: y, api: R, model: e, parentFilters: l, where: s });
        o(_);
      } catch {
        pe.showError(p("Could not load record", d));
      }
      return;
    }
    let F = qt;
    F.endsWith("/") || (F += "/"), O === "copy" ? F += "0-" + y : F += y, Yt && (Qe.set(Yt, I[Yt]), F += `?${Qe.toString()}`), De(F);
  }, [o, ze, e, l, s, qt, Yt, Qe, De, nr, yt, pe, p, d]), aa = A(({ documentLink: y }) => {
    y && window.open(y, "_blank");
  }, []), Cn = A(async (y, I, O) => {
    let F = y.field === e.linkColumn ? Re.Edit : null;
    if (!F && y.field === K.actions && (F = O?.action, !F)) {
      const le = I.target.closest("button");
      le && (F = le.dataset.action);
    }
    const { row: R } = y;
    if (!Z) {
      if (c && typeof await c({ cellParams: y, event: I, details: O }) !== K.boolean)
        return;
      const le = wr[y.field] || {};
      if (le.linkTo) {
        De({
          pathname: Qt.replaceTags(le.linkTo, R)
        });
        return;
      }
      switch (F) {
        case Re.Edit:
          if (e.getDetailPanelContent) {
            const ne = R[ue];
            Cr((Y) => Y === ne ? null : ne);
            return;
          } else
            return lt({ id: R[ue], record: R });
        case Re.Copy:
          return lt({ id: R[ue], mode: "copy" });
        case Re.Delete:
          _e(!0), dr({ name: R[e.linkColumn], id: R[ue] });
          break;
        case Re.History:
          return De(`${gt("history")}?tableName=${Ur}&id=${R[ue]}&breadCrumb=${Ot ? Qe.get(Ot) : Kr}`);
        default:
          const ce = Kt.find((ne) => ne.action === F && typeof ne.onClick === K.function);
          if (ce) {
            ce.onClick({ row: R, navigate: De });
            return;
          }
          break;
      }
    }
    if (F === Re.Download && aa({ documentLink: R[Ht] }), !Wt.length)
      return;
    const { row: _ } = y, $ = wr[y.field] || {}, Q = {
      pathname: Qt.replaceTags($.linkTo, _)
    };
    e.addRecordToState && (Q.state = _), De(Q);
  }, [Z, c, wr, e, ue, Ht, De, Wt, Kt, Ur, Ot, Qe, Kr, gt, aa, lt]), xn = A(async () => {
    const y = yt(ze);
    try {
      await $r({ id: We.id, api: y, model: e }), pe.showMessage(p("Record Deleted Successfully.", d)), Ge();
    } catch (I) {
      pe.showError(p("Delete failed", d), I.message);
    } finally {
      _e(!1);
    }
  }, [ze, We?.id, pe, e, Ge, p, d]), na = A(() => {
    ve(null), _e(!1);
  }, []), wn = A((y) => (typeof N.processRowUpdate == "function" && N.processRowUpdate(y, M), y), [N.processRowUpdate, M]), vn = A((y) => {
    if (y.row.canEdit === !1)
      return;
    const { row: I } = y;
    if (typeof W === K.function) {
      W(y);
      return;
    }
    if (!Z && !Ue && !h && lt({ id: I[ue], record: I }), Z && e.rowRedirectLink) {
      const O = {
        pathname: Qt.replaceTags(e.rowRedirectLink, I)
      };
      e.addRecordToState && (O.state = I), De(O);
    }
    typeof E === K.function && E(y);
  }, [W, Z, Ue, h, lt, ue, e.rowRedirectLink, e.addRecordToState, De, E, Qt]), Dn = A(async () => {
    if (ie.ids.size < 1) {
      pe.showError(p("Please select at least one record to proceed", d));
      return;
    }
    const y = Array.from(ie.ids), I = new Map((M.records || []).map((R) => [R[ue], R]));
    let O = y.map((R) => ({ ...Xr, ...I.get(R) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (O = O.map(
      (R) => Object.fromEntries(e.selectionUpdateKeys.map((_) => [_, R[_]]))
    ));
    const F = yt(Ze || ze);
    Ut(!0);
    try {
      const R = await Vr({
        id: 0,
        api: `${F}/updateMany`,
        values: { items: O },
        model: e
      });
      if (R) {
        Ge();
        const _ = R.info ? R.info : p("Record Added Successfully.", d);
        pe.showMessage(_);
      }
    } catch (R) {
      pe.showError(R.message || p("An error occurred, please try after some time.", d));
    } finally {
      Ut(!1), Se({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), Ft(!1);
    }
  }, [ie.ids, pe, M.records, ue, Xr, e.selectionUpdateKeys, Ze, ze, e, Ge, p, d]), oa = A(() => {
    if (Ze.length > 0) {
      if (ie.ids.size > 0) {
        Ft(!0);
        return;
      }
      pe.showError(
        p("Please select at least one record to proceed", d)
      );
      return;
    }
    typeof te === K.function ? te() : lt({ id: 0 });
  }, [Ze, pe, te, lt, ie.ids.size, p, d]), ia = A(() => {
    Oe?.items?.length && Ae({ ...K.gridFilterModel });
  }, [Oe]), Jt = A(({ unassign: y, assign: I }) => {
    const O = Array.isArray(u) ? u : u.length ? u.split(",") : [], F = y ? O.filter((R) => !y.includes(parseInt(R))) : [...O, ...I];
    x(typeof u === K.string ? F.join(",") : F);
  }, [u, x]), la = A(() => {
    Jt({ assign: Array.from(ie.ids) });
  }, [Jt, ie.ids]), sa = A(() => {
    Jt({ unassign: Array.from(ie.ids) });
  }, [Jt, ie.ids]), ca = A(() => {
    const y = M.records || [];
    if (ie.ids.size === y.length)
      Se({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const O = y.map((F) => F[ue]);
      Se({
        type: "include",
        ids: new Set(O)
      });
    }
  }, [ie, M.records, ue]), Sn = A((y) => y[ue], [ue]), ua = A((y) => {
    if (M?.recordCount > cl) {
      pe.showMessage(p("Cannot export more than 60k records, please apply filters or reduce your results using filters", d));
      return;
    }
    const { orderedFields: I, columnVisibilityModel: O, lookup: F } = Pe.current.state.columns, R = y.target.dataset.isPivotExport === "true", _ = Object.keys(O).filter((Y) => O[Y] === !1), $ = new Set(xe.filter((Y) => Y.exportable === !1).map((Y) => Y.field)), Q = I.filter(
      (Y) => !$.has(Y) && !_.includes(Y) && Y !== "__check__" && Y !== "actions"
    );
    if (Q.length === 0) {
      pe.showMessage(p("You cannot export while all columns are hidden... please show at least 1 column before exporting", d));
      return;
    }
    const le = {}, ce = Object.fromEntries(xe.map((Y) => [Y.field, Y]));
    Q.forEach((Y) => {
      const de = F[Y], Zt = ce[Y];
      le[Y] = {
        field: Y,
        width: de.width,
        headerName: Zt?.headerName || de.headerName || de.field,
        type: de.type,
        keepLocal: de.keepLocal === !0,
        isParsable: de.isParsable,
        lookup: de.lookup,
        hyperlinkURL: de.hyperlinkURL,
        hyperlinkIndex: de.hyperlinkIndex
      };
    });
    const ne = e?.formActions?.export || R ? e?.formActions?.export || "export" : void 0;
    Ge({
      action: ne,
      isPivotExport: R,
      contentType: y.target.dataset.contentType,
      columns: le
    });
  }, [M?.recordCount, Pe, xe, pe, e, Ge, p, d]);
  fe(() => {
    !ze || !Jr || Ge();
  }, [ze, Jr, Ge]), fe(() => {
    if (!(N.isChildGrid || G || !jt))
      return gr({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        gr(null);
      };
  }, [gr, e.pageTitle, e.title, N.isChildGrid, G, jt]);
  const Pn = A((y) => {
    const { items: I } = y, O = I.map((F) => {
      const { field: R, operator: _, value: $ } = F, le = (xe.find((ce) => ce.field === R) || {}).type === K.Number;
      return _a.includes(_) ? { ...F, value: null } : le && $ < 0 ? { ...F, value: null } : Gr.includes(_) || le && !isNaN($) || !le ? (ht && xe.filter((ne) => ne.field === R)[0]?.isKeywordField && (F.filterField = `${F.field}.keyword`), { ...F }) : { ...F, value: le ? null : $ };
    });
    Ae({ ...y, items: O });
  }, [xe, K.Number, Gr, ht, Ae]), Fn = A((y) => {
    const I = y.map((O) => {
      const F = xe.filter(($) => $.field === O.field)[0] || {}, R = ht && F.isKeywordField, _ = { ...O, filterField: R ? `${O.field}.keyword` : O.field };
      return F.dataIndex && (_.filterField = F.dataIndex), _;
    });
    Ee(I);
  }, [xe, ht, Ee]), da = m || e.gridTitle || e.title, Tn = Ot ? [{ text: Qe.get(Ot) || da }] : [{ text: da }], En = A((y) => {
    Cr(y.size > 0 ? [...y].pop() : null);
  }, []), An = A((y) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...y,
    onRefresh: () => {
      Cr(null), Ge();
    },
    t: p,
    tOpts: d
  }) : null, [e.getDetailPanelContent, Ge, p, d]), In = q(() => ({
    filterValueTrue: p("Yes", d),
    filterValueFalse: p("No", d),
    noRowsLabel: p("No data", d),
    footerTotalRows: `${p("Total rows", d)}:`,
    MuiTablePagination: {
      labelRowsPerPage: p("Rows per page", d),
      labelDisplayedRows: ({ from: y, to: I, count: O }) => `${y}–${I} ${p("of", d)} ${O}`
    },
    toolbarQuickFilterPlaceholder: p(e?.searchPlaceholder || "Search...", d),
    toolbarColumns: p("Columns", d),
    toolbarFilters: p("Filters", d),
    toolbarExport: p("Export", d),
    filterPanelAddFilter: p("Add filter", d),
    filterPanelRemoveAll: p("Remove all", d),
    filterPanelDeleteIconLabel: p("Delete", d),
    filterPanelColumns: p("Columns", d),
    filterPanelOperator: p("Operator", d),
    filterPanelValue: p("Value", d),
    filterPanelInputLabel: p("Value", d),
    filterPanelInputPlaceholder: p("Filter value", d),
    columnMenuLabel: p("Menu", d),
    columnMenuShowColumns: p("Show columns", d),
    columnMenuManageColumns: p("Manage columns", d),
    columnMenuFilter: p("Filter", d),
    columnMenuHideColumn: p("Hide column", d),
    columnMenuManagePivot: p("Manage pivot", d),
    toolbarColumnsLabel: p("Select columns", d),
    toolbarExportLabel: p("Export", d),
    pivotDragToColumns: p("Drag here to pivot by", d),
    pivotDragToRows: p("Drag here to group by", d),
    pivotDragToValues: p("Drag here to create values", d),
    pivotColumns: p("Pivot columns", d),
    pivotRows: p("Row groups", d),
    pivotValues: p("Values", d),
    pivotMenuRows: p("Rows", d),
    pivotMenuColumns: p("Columns", d),
    pivotMenuValues: p("Values", d),
    pivotToggleLabel: p("Pivot", d),
    pivotSearchControlPlaceholder: p("Search pivot columns", d),
    columnMenuUnsort: p("Unsort", d),
    columnMenuSortAsc: p("Sort by ascending", d),
    columnMenuSortDesc: p("Sort by descending", d),
    columnMenuUnpin: p("Unpin", d),
    columnsPanelTextFieldLabel: p("Find column", d),
    columnsPanelTextFieldPlaceholder: p("Column title", d),
    columnsPanelHideAllButton: p("Hide all", d),
    columnsPanelShowAllButton: p("Show all", d),
    pinToLeft: p("Pin to left", d),
    pinToRight: p("Pin to right", d),
    unpin: p("Unpin", d),
    filterValueAny: p("any", d),
    filterOperatorIs: p("is", d),
    filterOperatorNot: p("is not", d),
    filterOperatorIsAnyOf: p("is any of", d),
    filterOperatorContains: p("contains", d),
    filterOperatorDoesNotContain: p("does not contain", d),
    filterOperatorEquals: p("equals", d),
    filterOperatorDoesNotEqual: p("does not equal", d),
    filterOperatorStartsWith: p("starts with", d),
    filterOperatorEndsWith: p("ends with", d),
    filterOperatorIsEmpty: p("is empty", d),
    filterOperatorIsNotEmpty: p("is not empty", d),
    filterOperatorAfter: p("is after", d),
    filterOperatorOnOrAfter: p("is on or after", d),
    filterOperatorBefore: p("is before", d),
    filterOperatorOnOrBefore: p("is on or before", d),
    toolbarFiltersTooltipHide: p("Hide filters", d),
    toolbarFiltersTooltipShow: p("Show filters", d),
    //filter textfield labels
    headerFilterOperatorContains: p("contains", d),
    headerFilterOperatorEquals: p("equals", d),
    headerFilterOperatorStartsWith: p("starts with", d),
    headerFilterOperatorEndsWith: p("ends with", d),
    headerFilterOperatorIsEmpty: p("is empty", d),
    headerFilterOperatorIsNotEmpty: p("is not empty", d),
    headerFilterOperatorAfter: p("is after", d),
    headerFilterOperatorOnOrAfter: p("is on or after", d),
    headerFilterOperatorBefore: p("is before", d),
    headerFilterOperatorOnOrBefore: p("is on or before", d),
    headerFilterOperatorIs: p("is", d),
    "headerFilterOperator=": p("equals", d),
    "headerFilterOperator!=": p("does not equal", d),
    "headerFilterOperator>": p("greater than", d),
    "headerFilterOperator>=": p("greater than or equal to", d),
    "headerFilterOperator<": p("less than", d),
    "headerFilterOperator<=": p("less than or equal to", d),
    columnsManagementSearchTitle: p("Search", d),
    columnsManagementNoColumns: p("No columns", d),
    paginationRowsPerPage: p("Rows per page", d),
    paginationDisplayedRows: ({ from: y, to: I, count: O }) => `${y}–${I} ${p("of", d)} ${O}`,
    toolbarQuickFilterLabel: p("Search", d),
    toolbarFiltersTooltipActive: (y) => `${y} ${p(y === 1 ? "active filter" : "active filters", d)}`,
    columnHeaderSortIconLabel: p("Sort", d),
    filterPanelOperatorAnd: p("And", d),
    filterPanelOperatorOr: p("Or", d),
    noResultsOverlayLabel: p("No results found", d),
    columnHeaderFiltersTooltipActive: (y) => `${y} ${p(y === 1 ? "active filter" : "active filters", d)}`,
    detailPanelToggle: p("Detail panel toggle", d),
    checkboxSelectionHeaderName: p("Checkbox selection", d),
    columnsManagementShowHideAllText: p("Show/Hide all", d),
    noColumnsOverlayLabel: p("No columns", d),
    noColumnsOverlayManageColumns: p("Manage columns", d),
    columnsManagementReset: p("Reset", d),
    groupColumn: (y) => `${p("Group by", d)} ${y}`,
    unGroupColumn: (y) => `${p("Ungroup", d)} ${y}`,
    footerRowSelected: (y) => {
      const I = y === 1 ? "item selected" : "items selected";
      return `${y.toLocaleString()} ${p(I, d)}`;
    }
  }), [p, d, e?.searchPlaceholder]), Mn = q(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: M,
      currentPreference: _r,
      isReadOnly: Z,
      canAdd: qr,
      forAssignment: G,
      showAddIcon: nt,
      onAdd: oa,
      selectionApi: Ze,
      rowSelectionModel: ie,
      selectAll: ca,
      available: C,
      onAssign: la,
      assigned: f,
      onUnassign: sa,
      effectivePermissions: it,
      clearFilters: ia,
      handleExport: ua,
      preferenceKey: Bt,
      apiRef: Pe,
      gridColumns: xe,
      tTranslate: p,
      tOpts: d,
      idProperty: ue,
      filterModel: Oe,
      setFilterModel: Ae,
      onPreferenceChange: Qr,
      toolbarItems: H,
      headerActions: N.headerActions,
      customExportOptions: j
    },
    footer: {
      pagination: Yr !== !0,
      apiRef: Pe,
      tTranslate: p,
      tOpts: d
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: p("Go to previous page", d),
        "aria-label": p("Go to previous page", d)
      },
      nextIconButtonProps: {
        title: p("Go to next page", d),
        "aria-label": p("Go to next page", d)
      }
    }
  }), [e, M, _r, Z, qr, G, nt, oa, Ze, ie, ca, C, la, f, sa, it, ia, ua, Bt, Pe, xe, p, d, ue, Oe, Ae, Qr, H, N.headerActions, j]), On = q(() => ({
    columns: {
      columnVisibilityModel: ft
    },
    pinnedColumns: ra
  }), [ft, ra]), Bn = q(() => ({
    headerFilterMenu: !1,
    toolbar: il,
    footer: wi
  }), []);
  return /* @__PURE__ */ D(ye, { children: [
    b !== !1 && /* @__PURE__ */ n(
      Ya,
      {
        navigate: De,
        showBreadcrumbs: !nn && !on,
        breadcrumbs: Tn,
        enableBackButton: mr,
        breadcrumbColor: ln,
        model: e
      }
    ),
    /* @__PURE__ */ D(Te, { style: V || w, children: [
      /* @__PURE__ */ n(Te, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        Ea,
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
            ...Array.isArray(he) ? he : he ? [he] : []
          ],
          headerFilters: It,
          unstable_headerFilters: It,
          checkboxSelection: G,
          loading: !M.records || tn,
          className: "pagination-fix",
          onCellClick: Cn,
          onCellDoubleClick: vn,
          columns: xe,
          paginationModel: Ce,
          pageSizeOptions: K.pageSizeOptions,
          onPaginationModelChange: P,
          pagination: !Yr,
          rowCount: M.recordCount,
          rows: M.records || [],
          sortModel: Je,
          paginationMode: Tt,
          sortingMode: Tt,
          filterMode: Tt,
          processRowUpdate: wn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Fn,
          onFilterModelChange: Pn,
          rowSelectionModel: ie,
          onRowSelectionModelChange: Se,
          filterModel: Oe,
          getRowId: Sn,
          onRowClick: T,
          slots: Bn,
          slotProps: Mn,
          hideFooterSelectedRowCount: ee,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Pe,
          disableAggregation: !0,
          disableRowGrouping: Fe,
          disableRowSelectionOnClick: fr,
          disablePivoting: sn,
          filterDebounceMs: hr,
          initialState: On,
          ...fn && {
            getDetailPanelContent: An,
            detailPanelExpandedRowIds: pn,
            onDetailPanelExpandedRowIdsChange: En
          },
          localeText: In,
          showToolbar: !0,
          columnHeaderHeight: cn,
          hideFooter: !z,
          rowGroupingModel: mn,
          onRowGroupingModelChange: (y) => Zr(y),
          getRowClassName: N.getRowClassName,
          columnGroupingModel: hn
        }
      ) }),
      mt && /* @__PURE__ */ D(Ke, { open: !!mt, onConfirm: na, onCancel: na, title: "Info", hideCancelButton: !0, children: [
        " ",
        mt
      ] }),
      Vt && !mt && /* @__PURE__ */ n(Ke, { open: Vt, onConfirm: xn, onCancel: () => _e(!1), title: p("Confirm Delete", d), okText: p("Ok", d), cancelText: p("Cancel", d), children: /* @__PURE__ */ D(ba, { children: [
        p("Are you sure you want to delete", d),
        " ",
        We.name && /* @__PURE__ */ n(wt, { style: { display: "inline" }, title: We.name, arrow: !0, children: We.name.length > 30 ? `${We.name.slice(0, 30)}...` : We.name }),
        " ?"
      ] }) }),
      Pt && /* @__PURE__ */ n(
        Ke,
        {
          open: Pt,
          onConfirm: Dn,
          onCancel: () => Ft(!1),
          title: p("Confirm Add", d),
          okText: p("Ok", d),
          cancelText: p("Cancel", d),
          children: /* @__PURE__ */ D(ba, { children: [
            p("Are you sure you want to add", d),
            " ",
            ie.ids.size,
            " ",
            p("records", { count: ie.ids.size, ...d }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, al), yl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = (s) => {
    t.setFieldValue(r, s.target.checked);
  }, l = q(() => t.values[r] ?? !!e.defaultValue, [t, e]), i = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ n(
      Yo,
      {
        control: /* @__PURE__ */ n(
          $a,
          {
            ...a,
            name: r,
            disabled: i || e.disabled === !0,
            checked: l,
            onChange: o,
            onBlur: t.handleBlur,
            defaultChecked: e.defaultValue
          }
        )
      }
    ),
    /* @__PURE__ */ n(pt, { error: t.touched[r] && !!t.errors[r], children: t.touched[r] && t.errors[r] })
  ] }, r);
}, kr = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = Dt(), l = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
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
      rows: l,
      fullWidth: !0,
      name: r,
      value: t.values[r],
      onChange: t.handleChange,
      onBlur: t.handleBlur,
      error: t.touched[r] && !!t.errors[r],
      helperText: t.touched[r] && t.errors[r],
      autoComplete: e.autoComplete,
      ...a,
      defaultValue: e.defaultValue
    },
    r
  );
};
function Ja(e, r) {
  const [t, a] = B(e);
  return fe(() => {
    const o = setTimeout(() => {
      a(e);
    }, r);
    return () => {
      clearTimeout(o);
    };
  }, [e, r]), t;
}
const xa = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, bl = {
  outlined: Co,
  filled: bo,
  standard: yo
}, Cl = () => /* @__PURE__ */ D(
  Ma,
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
        ar.Increment,
        {
          render: /* @__PURE__ */ n(Lt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ n(
            Ko,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        ar.Decrement,
        {
          render: /* @__PURE__ */ n(Lt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ n(
            Va,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), xl = ({ column: e, otherProps: r, formik: t, field: a, ...o }) => {
  const { min: l, max: i, readOnly: s } = e, m = Dt(), b = q(
    () => xa({ value: l, state: t.values }),
    [l, t.values]
  ), g = q(
    () => xa({ value: i, state: t.values }),
    [i, t.values]
  ), u = q(() => t.values[a] ?? null, [t.values[a]]), [f, C] = B(u), h = Ja(f, 400);
  fe(() => {
    h !== u && t.setFieldValue(a, h);
  }, [h]), fe(() => {
    u !== f && C(u);
  }, [u]);
  const x = (E) => {
    C(E);
  }, w = (E) => {
    t.setFieldTouched(a, !0), typeof o.onBlur == "function" && o.onBlur(E);
  }, c = Rn(), v = `number-field-${a}-${c}`, S = e.variant || "standard", k = bl[S];
  return /* @__PURE__ */ D(
    ar.Root,
    {
      value: f,
      onValueChange: x,
      min: b,
      max: g,
      disabled: s,
      render: (E, T) => /* @__PURE__ */ n(
        xt,
        {
          fullWidth: !0,
          ref: E.ref,
          error: t.touched[a] && !!t.errors[a],
          sx: s ? {
            backgroundColor: m.palette?.action?.disabled
          } : void 0,
          children: E.children
        }
      ),
      children: [
        /* @__PURE__ */ n(
          ar.Input,
          {
            render: (E, T) => /* @__PURE__ */ n(
              k,
              {
                id: v,
                inputRef: E.ref,
                value: T.inputValue,
                onChange: E.onChange,
                onBlur: (V) => {
                  E.onBlur(V), w(V);
                },
                inputProps: {
                  ...E,
                  "aria-describedby": t.touched[a] && t.errors[a] ? `${v}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ n(Cl, {}),
                sx: { pr: 0 },
                ...r
              }
            )
          }
        ),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ D(pt, { id: `${v}-error`, error: !0, children: [
          " ",
          t.errors[a],
          " "
        ] })
      ]
    }
  );
}, wl = ({ otherProps: e, ...r }) => {
  const [t, a] = Ct.useState(!1), o = () => a((m) => !m), l = (m) => {
    m.preventDefault();
  }, { readOnly: i = !1, disabled: s = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: s,
      endAdornment: /* @__PURE__ */ n(Ma, { position: "end", children: /* @__PURE__ */ n(
        Lt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: l,
          edge: "end",
          disabled: s,
          readOnly: i,
          size: "large",
          children: t ? /* @__PURE__ */ n(_o, {}) : /* @__PURE__ */ n(Jo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(kr, { otherProps: e, ...r });
}, vl = ({ column: e, field: r, formik: t, otherProps: a, fieldConfigs: o = {}, mode: l }) => {
  const i = l !== "copy" && o.disabled, { systemDateTimeFormat: s, stateData: m } = Le(), b = q(() => t.values[r] ? X(t.values[r]) : null, [t.values[r]]), g = e.minField ? t.values[e.minField] : void 0, u = e.maxField ? t.values[e.maxField] : void 0, f = q(() => e.min ? X(e.min) : e.minField && g ? X(g) : null, [e.min, e.minField, g]), C = q(() => e.max ? X(e.max) : e.maxField && u ? X(u) : null, [e.max, e.maxField, u]), h = A((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const c = X(x).hour(12).toISOString();
    t.setFieldValue(r, c);
  }, [r, t]);
  return /* @__PURE__ */ lr(
    Oa,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: s(!0, !1, m.dateTime),
      name: r,
      value: b,
      onChange: h,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: f,
      maxDate: C,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
}, Dl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: l } = Le(), i = q(() => t.values[r] ? X(t.values[r]) : null, [t.values[r]]);
  return /* @__PURE__ */ lr(
    rr,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, l.dateTime),
      name: r,
      value: i,
      onChange: (s) => t.setFieldValue(r, s),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? X(e.min) : null,
      maxDateTime: e.max ? X(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Sl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: l } = Le(), i = q(() => {
    const s = t.values[r];
    if (!s) return null;
    let m = new Date(s);
    const b = m.getTimezoneOffset() * 6e4;
    return m = new Date(m.getTime() + b), X(m);
  }, [t.values[r], e]);
  return /* @__PURE__ */ lr(
    rr,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, l.dateTime),
      name: r,
      value: i,
      onChange: (s) => {
        s ? t.setFieldValue(r, s.utcOffset(0, !0).toISOString()) : t.setFieldValue(r, null);
      },
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? X(e.min) : null,
      maxDateTime: e.max ? X(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Pl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  let o = t.values[r];
  return e.isUtc && (o = X.utc(o).utcOffset(X().utcOffset(), !0).format()), /* @__PURE__ */ lr(
    Zo,
    {
      ...a,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: X(o),
      onChange: (l) => (e.isUtc && (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, l)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Fl = [null, void 0, ""];
function Za({ column: e, formik: r, lookups: t, dependsOn: a = [], isAutoComplete: o = !1, userSelected: l, model: i }) {
  const [s, m] = B([]), { buildUrl: b } = Le(), g = St(), u = b(i.api), f = q(() => {
    const x = {};
    if (!a.length) return x;
    for (const w of a)
      x[w] = r.values[w];
    return x;
  }, a.map((x) => r.values[x])), C = q(() => a.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, a]), h = A(async () => {
    if (!e.lookup) return;
    if (!Object.values(f).every(
      (w) => !Fl.includes(w)
    )) {
      m([]);
      return;
    }
    try {
      const w = await Wa({
        api: u,
        model: i,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: f }] }
        }
      });
      m(w);
    } catch (w) {
      g.showError("Could not load lookups", w.message);
    }
  }, [e.lookup, f, u, i, t, g]);
  return fe(() => {
    a.length ? h() : (o || !l.current) && m(C || []);
  }, [a.length, h, o, C]), s;
}
const Tl = Ct.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], model: l, tTranslate: i, tOpts: s, ...m }) => {
  const b = Ct.useRef(!1), { placeHolder: g } = e, u = Za({ column: e, formik: t, lookups: a, dependsOn: o, userSelected: b, model: l }), f = Dt(), C = q(() => {
    let c = t.values[r];
    if (!c && !b.current && e.defaultValue !== void 0) {
      const v = e.defaultValue;
      if (v != null && v !== "" && u && u.length) {
        const S = u.find((k) => String(k.value) === String(v));
        S && (c = S.value, t.setFieldValue(r, S.value));
      }
    }
    if (u?.length && !c && !e.multiSelect && "IsDefault" in u[0]) {
      const v = u.find((S) => S.IsDefault);
      v && (c = v.value, t.setFieldValue(r, v.value));
    }
    return e.multiSelect && (!c || c.length === 0 ? c = [] : Array.isArray(c) || (c = c.split(",").map((v) => parseInt(v)))), c;
  }, [t.values[r], u, e.multiSelect, r]), h = A((c) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: c.target.value, options: u, event: c, t: i, tOpts: s }), t.handleChange(c), b.current = !0;
  }, [t.values[r], e.onChange, u]), x = q(() => e.multiSelect ? Array.isArray(C) && C.length > 0 : C !== "" && C !== null && C !== void 0 && Array.isArray(u) && u.some((c) => String(c.value) === String(C)), [C, e.multiSelect, u]), w = A((c) => {
    c.stopPropagation();
    const v = e.multiSelect ? [] : "";
    t.setFieldValue(r, v), typeof e.onChange == "function" && e.onChange({ formik: t, value: v, options: u, t: i, tOpts: s }), b.current = !0;
  }, [e.multiSelect, r, t, e.onChange, u, i, s]);
  return /* @__PURE__ */ D(
    ur,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(Xo, { children: g || "" }),
        /* @__PURE__ */ D(Te, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ n(
            ei,
            {
              IconComponent: Va,
              ...m,
              name: r,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(C) ? C : [] : `${C ?? ""}`,
              onChange: h,
              onBlur: t.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? f.palette?.action?.disabled : ""
              },
              children: Array.isArray(u) && u.map((c) => /* @__PURE__ */ n(La, { value: c.value, disabled: c.isDisabled, children: c.label }, c.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ n(
            Lt,
            {
              size: "small",
              onClick: w,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": i("Clear selection", s),
              children: /* @__PURE__ */ n(Qo, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ n(pt, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), wa = cr("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), El = ({ component: e, name: r, formik: t, field: a, column: o }) => {
  const { value: l } = t.getFieldProps(r || a), { setFieldValue: i } = t, s = e || o.relation, m = A((b) => {
    i(r || a, b);
  }, [i, r, a]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ n(wa, { children: `Available ${o.label}` }),
    /* @__PURE__ */ n(s, { selected: l, available: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ n(wa, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ n(s, { selected: l, assigned: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Al = ({ field: e, formik: r, orientation: t = "row", label: a, lookups: o, fieldConfigs: l = {}, mode: i, tTranslate: s, tOpts: m, ...b }) => {
  const g = (x) => {
    r.setFieldValue(e, x.target.value);
  }, u = o ? o[b.column.lookup] : [], f = Dt(), C = r.touched[e] && !!r.errors[e], h = i !== "copy" && l.disabled;
  return /* @__PURE__ */ D(ye, { children: [
    /* @__PURE__ */ n(xt, { component: "fieldset", error: C, children: /* @__PURE__ */ n(
      Lr,
      {
        row: t === "row",
        "aria-label": a,
        name: e,
        value: r.values[e] ?? "",
        onChange: g,
        children: u?.map((x, w) => /* @__PURE__ */ n(
          dt,
          {
            value: x.value,
            control: /* @__PURE__ */ n(bt, {}),
            label: s(x.label, m),
            disabled: h || (b?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          w
        ))
      }
    ) }),
    C && /* @__PURE__ */ n(pt, { style: { color: f.palette.error.main }, children: r.errors[e] })
  ] });
}, Il = {
  limitTags: 5
}, Ml = qe.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], fieldConfigs: l = {}, mode: i, model: s, ...m }) => {
  const b = Za({ column: e, formik: t, lookups: a, dependsOn: o, model: s, isAutoComplete: !0 });
  let g = t.values[r] || [];
  Array.isArray(g) || (g = g.split(", ").map(Number));
  const u = b.filter((h) => g.includes(h.value)) || [], f = i !== "copy" && l.disabled, C = (h, x) => {
    let w = x?.map((c) => c.value) || [];
    e.dataFormat !== "array" && (w = w.length ? w.join(", ") : ""), t.setFieldValue(r, w);
  };
  return /* @__PURE__ */ D(
    ur,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ n(
          za,
          {
            ...m,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || Il.limitTags,
            options: b || [],
            getOptionLabel: (h) => h.label || "",
            defaultValue: u,
            renderInput: (h) => /* @__PURE__ */ n(sr, { ...h, variant: "standard" }),
            onChange: C,
            value: u,
            size: "small",
            disabled: f
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ n(pt, { children: t.errors[r] })
      ]
    },
    r
  );
}), Ol = "#182eb5", Bl = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Rl = xo(wo)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Ol : "#ffffff",
  border: `1px solid ${ni[500]}`,
  color: r ? "white" : "black"
})), kl = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ n(
  Rl,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Nl = ({ name: e, field: r, formik: t, expired: a }) => {
  const { setFieldValue: o } = t, { value: l } = t.getFieldProps(e || r), i = "1000001", s = "0111110", m = "0".repeat(7), [b, g] = B(l || m), [u, f] = B(() => l ? l === i ? i : l === s ? s : "Custom" : ""), [C, h] = B(!1), x = A((v) => {
    if (Array.isArray(v)) {
      let S = m;
      for (const k of v)
        S = S.substring(0, k) + "1" + S.substring(k + 1);
      g(S), o(e || r, S), h(!0);
    } else {
      let S = C ? m : b;
      const k = S.slice(0, v) + (S[v] === "1" ? "0" : "1") + S.slice(v + 1);
      g(k), o(e || r, k), f("Custom"), h(!1);
    }
  }, [C, m, b, e, r, o]), w = Dt(), c = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ D(ye, { children: [
    /* @__PURE__ */ n(xt, { component: "fieldset", error: c, children: /* @__PURE__ */ D(
      Lr,
      {
        row: !0,
        name: e || r,
        value: u,
        onChange: (v) => {
          const S = v.target.value;
          f(S), S !== "Custom" ? (g(S), o(e || r, S), h(!0)) : (g(m), o(e || r, m), h(!1));
        },
        children: [
          /* @__PURE__ */ n(dt, { value: i, control: /* @__PURE__ */ n(bt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ n(dt, { value: s, control: /* @__PURE__ */ n(bt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(dt, { value: "Custom", control: /* @__PURE__ */ n(bt, {}), label: "Specific days" }),
          Bl.map((v, S) => /* @__PURE__ */ n(
            kl,
            {
              day: v,
              onClick: () => x(S),
              isSelected: u === "Custom" && b[S] === "1",
              disabled: a
            },
            v.value
          ))
        ]
      }
    ) }),
    c && /* @__PURE__ */ n(pt, { style: { color: w.palette.error.main }, children: t.errors[r] })
  ] });
}, Ll = ({ isAdd: e, column: r, field: t, formik: a, otherProps: o, fieldConfigs: l = {}, mode: i }) => {
  const s = Dt();
  let m = a.values[t] || [];
  Array.isArray(m) || (m = m.split(",").map((f) => f.trim()));
  const b = qe.useMemo(() => i === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: a }) : !!r.disabled, [i, l.disabled, r.disabled]), g = r.hasDefault && !e ? [m[0]] : [], u = A((f, C, h, x = {}) => {
    const w = C.pop()?.trim();
    C.includes(w) || C.push(w), g && g.includes(x.option) && h === "removeOption" && (C = [x.option]), r.dataFormat !== "array" && (C = C.length ? C.join(",") : ""), a.setFieldValue(t, C);
  }, [a, t]);
  return /* @__PURE__ */ D(
    ur,
    {
      fullWidth: !0,
      variant: "standard",
      error: a.touched[t] && !!a.errors[t],
      children: [
        /* @__PURE__ */ n(
          za,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: m,
            options: [],
            renderInput: (f) => /* @__PURE__ */ n(
              sr,
              {
                ...f,
                variant: "standard",
                InputProps: {
                  ...f.InputProps,
                  sx: {
                    ...f.InputProps?.sx,
                    ...b && { backgroundColor: s.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: u,
            size: "small",
            renderTags: (f, C) => f.map((h, x) => {
              const { key: w, ...c } = C({ index: x });
              return /* @__PURE__ */ n(
                ii,
                {
                  label: h,
                  ...c,
                  disabled: g.includes(h)
                },
                w
              );
            }),
            disabled: b
          }
        ),
        a.touched[t] && a.errors[t] && /* @__PURE__ */ n(pt, { children: a.errors[t] })
      ]
    },
    t
  );
}, $l = (e = []) => {
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
function Vl({ column: e, field: r, formik: t, lookups: a, fieldConfigs: o, mode: l }) {
  const i = a ? a[e.lookup] : [], s = $l(i), m = t.values[r]?.length ? t.values[r].split(", ") : [];
  let b;
  return l !== "copy" && (b = o?.disabled), /* @__PURE__ */ n(tt, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    li,
    {
      selectedItems: m,
      onSelectedItemsChange: (u, f) => {
        t.setFieldValue(r, f?.join(", ") || "");
      },
      disabled: b,
      multiSelect: !0,
      checkboxSelection: !0,
      children: s.map((u) => /* @__PURE__ */ n(ha, { itemId: u.value, label: u.label, children: u.children.map((f) => /* @__PURE__ */ n(ha, { itemId: f.value, label: f.label }, f.value)) }, u.value))
    }
  ) });
}
const zl = { maxLength: 500 }, { errorMapping: Gl } = je, ql = 1024 * 1024;
function jl({ column: e, field: r, formik: t }) {
  const a = t.values[r] || "", { getApiEndpoint: o } = Le(), { maxSize: l, formats: i } = e, s = o("upload"), m = o("media"), b = o(), [g, u] = B({
    isExternal: "no",
    selectedFile: null
  }), [f, C] = B(!1), h = St(), { getParams: x, useParams: w } = zr(), { associationId: c } = w() || x, v = c?.split("-")[0] || 1, S = (W) => {
    const te = W.target.value;
    u({
      ...g,
      isExternal: te,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, k = (W) => {
    t.setFieldValue(r, W.target.value);
  }, E = (W) => {
    const te = W.target.files[0];
    if (te) {
      if (l && te.size > l * ql) {
        h.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(te.type)) {
        h.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      u((re) => ({ ...re, selectedFile: te }));
    }
  }, T = async () => {
    if (g.selectedFile) {
      C(!0);
      try {
        const W = new FormData();
        W.append("file", g.selectedFile), W.append("DocumentGroupId", t.values.DocumentGroupId), W.append("AssociationId", v);
        const re = (await ja({
          method: "POST",
          url: s,
          data: W,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!re.success) {
          h.showError(re.message || "Upload failed");
          return;
        }
        const H = m + "/" + re.filePath;
        t.setFieldValue(r, H);
      } catch (W) {
        const te = (W.message.match(/status code (\d{3})/) || [])[1];
        h.showError(Gl[te]);
      } finally {
        C(!1);
      }
    }
  }, V = new URL(b, window.location.origin).hostname.toLowerCase();
  Ct.useEffect(() => {
    u({
      ...g,
      isExternal: a.toLowerCase().includes(V) ? "no" : "yes"
    });
  }, [a, u]);
  const oe = t.values[r]?.length > (e.max || zl.maxLength), J = oe ? "red" : "";
  return /* @__PURE__ */ D(Te, { children: [
    /* @__PURE__ */ D(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(ke, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ D(
        Lr,
        {
          row: !0,
          value: g.isExternal,
          onChange: S,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(dt, { value: "yes", control: /* @__PURE__ */ n(bt, {}), label: "Yes" }),
            /* @__PURE__ */ n(dt, { value: "no", control: /* @__PURE__ */ n(bt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ D(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(ke, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ D(Te, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        g.isExternal === "yes" ? /* @__PURE__ */ n(
          ut,
          {
            fullWidth: !0,
            value: a,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: J },
                "&.Mui-focused fieldset": { borderColor: J },
                "&:hover fieldset": { borderColor: J }
              }
            },
            onChange: k,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          ut,
          {
            fullWidth: !0,
            value: a,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        oe && /* @__PURE__ */ D(ke, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    g.isExternal === "no" && /* @__PURE__ */ D(Te, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ D(
        ct,
        {
          variant: "outlined",
          component: "label",
          disabled: f,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: E })
          ]
        }
      ),
      g.selectedFile && /* @__PURE__ */ n(wt, { title: g.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(ke, { variant: "body2", children: g.selectedFile.name.length > 20 ? `${g.selectedFile.name.substring(0, 20)}...` : g.selectedFile.name }) }),
      /* @__PURE__ */ n(
        ct,
        {
          variant: "contained",
          color: "primary",
          onClick: T,
          disabled: !g.selectedFile || f,
          children: f ? /* @__PURE__ */ n(vo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Wl = ({ field: e, formik: r }) => {
  const [t, a] = qe.useState({}), o = Ja(t, 300);
  qe.useEffect(() => {
    if (r.values[e])
      try {
        const i = JSON.parse(r.values[e]);
        a(i);
      } catch {
        a({});
      }
  }, [r.values[e]]), qe.useEffect(() => {
    const i = JSON.stringify(o);
    r.values[e] !== i && r.setFieldValue(e, i);
  }, [o, e, r, r.values[e]]);
  const l = (i, s) => {
    const m = { ...t, [i]: s };
    a(m);
  };
  return /* @__PURE__ */ n(
    ur,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[e] && !!r.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(t).map((i) => /* @__PURE__ */ D(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ D(Nt, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              si,
              {
                id: i,
                name: i,
                value: t[i],
                onChange: (s) => l(i, s.target.value),
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
}, Ul = {
  boolean: yl,
  select: Tl,
  string: kr,
  number: xl,
  password: wl,
  date: vl,
  dateTime: Dl,
  localDateTime: Sl,
  time: Pl,
  oneToMany: El,
  radio: Al,
  autocomplete: Ml,
  dayRadio: Nl,
  email: kr,
  chipInput: Ll,
  treeCheckbox: Vl,
  fileUpload: jl,
  json: Wl
}, va = { paddingTop: "2.5px", paddingBottom: "2.5px" }, Hl = oi("span")({
  color: "red !important"
}), Qa = (e) => {
  const { t: r, i18n: t } = vt(), a = qe.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((l) => l);
  return { translate: r, i18n: t, tOpts: a, tTranslate: o };
}, Yl = ({ tabColumns: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: s, mode: m, handleSubmit: b }) => {
  const [g, u] = qe.useState(/* @__PURE__ */ new Set()), { tOpts: f, tTranslate: C } = Qa(r), { activeStep: h, setActiveStep: x } = qe.useContext(en), w = {};
  for (let T = 0, V = r.columns.length; T < V; T++) {
    const { field: oe, skip: J } = r.columns[T];
    J && (w[J.step] = t.values[oe]);
  }
  const c = (T) => g.has(T) || w[T], v = () => {
    for (let T = h + 1; T < e.length; T++)
      if (!c(T))
        return !1;
    return !0;
  }, S = () => {
    let T = h + 1;
    for (; w[T]; )
      T++;
    u((V) => new Set(V).add(h)), T >= e.length || v() ? b() : x(T);
  }, k = () => {
    let T = h - 1;
    for (; w[T] && T > 0; )
      T--;
    x(T);
  };
  if (!e?.length)
    return null;
  const E = e[h];
  return /* @__PURE__ */ D(ye, { children: [
    /* @__PURE__ */ n(ti, { activeStep: h, sx: { marginBottom: "20px" }, children: e.map(({ title: T, key: V }, oe) => /* @__PURE__ */ n(ri, { completed: c(oe), children: /* @__PURE__ */ n(ai, { children: /* @__PURE__ */ n(ke, { sx: { fontSize: "20px" }, children: C(T, f) }) }) }, V)) }),
    /* @__PURE__ */ D(qe.Fragment, { children: [
      /* @__PURE__ */ n(Xa, { formElements: E.items, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: s, mode: m }),
      /* @__PURE__ */ D(tt, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        h !== 0 ? /* @__PURE__ */ n(Me, { color: "inherit", disabled: h === 0, onClick: k, variant: "contained", sx: { mr: 2 }, children: C("Back", f) }) : null,
        /* @__PURE__ */ n(Me, { onClick: S, variant: "contained", children: v() ? C("Finish", f) : C("Next", f) })
      ] })
    ] })
  ] });
}, Xa = ({ formElements: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: s, mode: m, isAdd: b }) => {
  const { tOpts: g, tTranslate: u } = Qa(r);
  return e?.length ? /* @__PURE__ */ n(ye, { children: e.map(({ Component: f, column: C, field: h, label: x, otherProps: w }, c) => {
    const v = typeof C.relation == "function";
    return /* @__PURE__ */ D(Tr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: v ? "flex-start" : "center", children: [
      C?.showLabel !== !1 ? /* @__PURE__ */ n(Tr, { size: { xs: 3 }, sx: va, children: /* @__PURE__ */ D(ke, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        u(C.label || h, g),
        ": ",
        C.required && /* @__PURE__ */ n(Hl, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ n(Tr, { size: { xs: v ? 12 : 9 }, sx: va, children: /* @__PURE__ */ n(f, { isAdd: b, model: r, fieldConfigs: s[h], mode: m, column: C, field: h, label: x, formik: t, data: a, onChange: o, combos: l, lookups: i, tTranslate: u, tOpts: g, ...w }) })
    ] }, c);
  }) }) : null;
}, Kl = function({ columns: e, tabs: r = {}, id: t, searchParams: a }) {
  const o = [], l = {};
  for (const s in r)
    l[s] = [];
  for (const s of e) {
    const m = s.type;
    if (s.label === null)
      continue;
    const { field: b, label: g, tab: u } = s, f = {};
    s.options && (f.options = s.options), s.dependsOn && (f.dependsOn = s.dependsOn);
    const C = Ul[m];
    if (!C || s.hideInAddGrid && t === "0")
      continue;
    (u && r[u] ? l[u] : o).push({ Component: C, field: b, label: g, column: { ...s, readOnly: a.has("showRelation") || s.readOnly }, otherProps: f });
  }
  const i = [];
  for (const s in l)
    i.push({ key: s, title: r[s], items: l[s] });
  return { formElements: o, tabColumns: i };
}, _l = ({ model: e, formik: r, data: t, combos: a, onChange: o, lookups: l, id: i, fieldConfigs: s, mode: m, handleSubmit: b }) => {
  const g = je.emptyIdValues.includes(i), { formElements: u, tabColumns: f } = qe.useMemo(() => {
    const C = e.formConfig?.showTabbed, h = new URLSearchParams(window.location.search), { formElements: x, tabColumns: w } = Kl({ columns: e.columns, tabs: C ? e.tabs : {}, id: i, searchParams: h });
    return { formElements: x, tabColumns: w, showTabs: C && w.length > 0 };
  }, [e]);
  return /* @__PURE__ */ D("div", { children: [
    /* @__PURE__ */ n(Xa, { isAdd: g, formElements: u, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: s, mode: m }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(Yl, { tabColumns: f, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: s, mode: m, handleSubmit: b }) })
  ] });
};
function Jl(e) {
  const { children: r, value: t, index: a, ...o } = e;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tabpanel",
      hidden: t !== a,
      id: `simple-tabpanel-${a}`,
      "aria-labelledby": `simple-tab-${a}`,
      ...o,
      children: t === a && /* @__PURE__ */ n(tt, { sx: { p: 3 }, children: r })
    }
  );
}
function Zl(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const Ql = Sa(({ relation: e, parentFilters: r, parent: t, where: a, models: o, readOnly: l }) => {
  const i = o.find(({ name: b }) => b === e);
  if (!i) return null;
  const s = { ...i, hideBreadcrumb: !0 }, m = s instanceof or ? s : new or(s);
  return m ? /* @__PURE__ */ n(
    m.ChildGrid,
    {
      readOnly: l,
      parentFilters: r,
      parent: t,
      model: s,
      where: a,
      isChildGrid: !0
    }
  ) : null;
}), Xl = Ct.memo(({ relations: e, parent: r, where: t = [], models: a, relationFilters: o, readOnly: l }) => {
  const [i, s] = B(0);
  return /* @__PURE__ */ D(tt, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(tt, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(ui, { value: i, onChange: (b, g) => {
      s(g);
    }, "aria-label": "relations tabs", children: e.map((b, g) => {
      const u = a.find(({ name: C }) => C === b) || {}, f = u.listTitle || u.title || b;
      return /* @__PURE__ */ n(
        ci,
        {
          label: f,
          ...Zl(g)
        },
        b
      );
    }) }) }),
    e.map((b, g) => /* @__PURE__ */ n(Jl, { value: i, index: g, children: /* @__PURE__ */ n(
      Ql,
      {
        readOnly: l,
        relation: b,
        models: a,
        parentFilters: o[b] || [],
        parent: r,
        where: t
      },
      b
    ) }, b))
  ] });
}), en = ir(1), es = {}, ge = {
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
}, ts = ({
  model: e,
  api: r,
  models: t,
  relationFilters: a = {},
  permissions: o = {},
  Layout: l = _l,
  baseSaveData: i = {},
  sx: s,
  readOnly: m,
  beforeSubmit: b,
  deletePromptText: g,
  detailPanelId: u = null,
  // Grid Row Detail Panel Id
  onCancel: f,
  onSaveSuccess: C
}) => {
  const h = e.formTitle || e.title, { t: x, i18n: w } = vt(), c = q(() => ({ t: x, i18n: w }), [x, w]), v = e?.tTranslate ?? ((z) => z), { navigate: S, getParams: k, useParams: E, pathname: T } = zr(), { relations: V = [] } = e, { stateData: oe, buildUrl: J, setPageTitle: W } = Le(), te = E() || k, { id: re = "" } = te, H = u || re.split("-")[ge.editIdIndex], L = new URLSearchParams(window.location.search), be = L.has(ge.baseData) && L.get(ge.baseData);
  if (be) {
    const z = JSON.parse(be);
    typeof z === ge.object && z !== null && (i = { ...i, ...z });
  }
  const [se, ae] = B(!0), [j, he] = B({}), [N, Ce] = B({}), [P, M] = B(!1), U = St(), [G, ee] = B(null), [ie, Se] = B(0), [Vt, _e] = B(!1), [We, dr] = B(null), [ft, Pt] = B(""), Ft = typeof e.applyFieldConfig === ge.function ? e.applyFieldConfig({ data: j, lookups: N }) : es, pe = J(e.api), Tt = re.includes("-") && re.split("-")[0] === "0" ? "copy" : "", at = oe.userData || {}, zt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: d } = Ka({
    userData: at,
    model: e,
    userDefinedPermissions: zt
  }), { hideBreadcrumb: mt = !1, navigateBack: ve } = e, Je = !("canEdit" in j) || j.canEdit, Ee = A(() => {
    let z;
    switch (typeof ve) {
      case ge.function:
        z = ve({ params: te, searchParams: L, data: j });
        break;
      case ge.number:
      case ge.string:
        z = ve;
        break;
      default:
        z = T.substring(0, T.lastIndexOf("/"));
        break;
    }
    S(z);
  }, [ve, S, te, L, j, T]), Et = q(() => je.emptyIdValues.includes(H), [H]), Oe = q(() => Et ? { ...e.initialValues, ...j, ...i } : { ...i, ...e.initialValues, ...j }, [e.initialValues, j, H]), Ae = r || pe, De = q(() => {
    if (u)
      return u;
    const z = re.split("-");
    return z.length > 1 ? z[ge.loadIdIndex] : H;
  }, [u, re, H]), Gt = A(async () => {
    ae(!0);
    try {
      const z = await nr({
        api: Ae,
        model: e,
        id: De
      });
      At(z);
    } catch (z) {
      pr("Could not load record", z.message);
    } finally {
      ae(!1);
    }
  }, [Ae, e, De]);
  fe(() => {
    Gt();
  }, [H, De, e, Ae, Gt]), fe(() => {
    ee(e.getValidationSchema({ id: H, tTranslate: v, tOpts: c }));
  }, [H, e, ee, x, c, v]);
  const Ie = Na({
    enableReinitialize: !0,
    initialValues: Oe,
    validationSchema: G,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (z, { resetForm: Fe }) => {
      Object.keys(z).forEach((Z) => {
        typeof z[Z] === ge.string && (z[Z] = z[Z].trim());
      }), ae(!0), Vr({
        id: H,
        api: pe,
        values: z,
        model: e
      }).then((Z) => {
        if (!Z) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof C === ge.function && C();
        const Ue = Z.info ? Z.info : `Record ${H === 0 ? "Added" : "Updated"} Successfully.`;
        U.showMessage(v(Ue, c)), ve !== !1 && Ee(), Fe({ values: Ie.values });
      }).catch((Z) => {
        U.showError(
          v("An error occurred, please try after some time.", c),
          Z
        ), e.reloadOnSave && Fe();
      }).finally(() => {
        ae(!1);
      });
    }
  }), qt = A(() => {
    Ie.resetForm(), _e(!1), typeof f === ge.function && f(), ve !== !1 && Ee();
  }, [Ie, f, ve, Ee]), pr = A((z, Fe) => {
    ae(!1), U.showError(v(z, c), Fe), Ee();
  }, [U, Ee, v, c]), At = function({ id: z, title: Fe, record: Z, lookups: Ue }) {
    const $e = re.indexOf("-") > -1, nt = !z || z === "0", Wt = nt ? ge.create : $e ? ge.copy : ge.edit, Ve = nt ? "" : Z[e.linkColumn], ot = [{ text: e.breadCrumbs }, { text: Wt }];
    $e && (Z[e.linkColumn] = ""), e.columns.forEach((gt) => {
      gt.skipCopy && $e && (Z[gt.field] = "");
    }), he(Z), Ce(Ue), ae(!1), Ve !== "" && ot.push({ text: Ve }), W({
      showBreadcrumbs: !0,
      breadcrumbs: ot
    });
  }, Pe = A((z) => {
    Ie.dirty && Je ? _e(!0) : (typeof f === ge.function && f(), ve !== !1 && Ee()), z.preventDefault();
  }, [Ie.dirty, Je, f, ve, Ee]), ue = A(async () => {
    try {
      M(!0), await $r({
        id: H,
        api: r || e.api,
        model: e
      }) === !0 && (U.showMessage(v("Record Deleted Successfully.", c)), ve !== !1 && Ee());
    } catch (z) {
      U.showError(v("An error occurred, please try after some time.", c), z?.message);
    } finally {
      M(!1);
    }
  }, [H, r, e.api, U, Pt, e, ve, Ee, v, c]), It = () => {
    Pt(null), M(!1);
  }, fr = A((z) => {
    const { name: Fe, value: Z } = z.target;
    he({ ...j, [Fe]: Z });
  }, [j]), Mt = A(async (z) => {
    z && z.preventDefault(), typeof b === ge.function && await b({ formik: Ie, model: e });
    const { errors: Fe } = Ie;
    Ie.handleSubmit();
    const Z = Object.keys(Fe)[0], Ue = Fe[Z];
    Ue && U.showError(v(Ue, c), null, "error");
    const $e = e.columns.find(
      (nt) => nt.field === Z
    ) || {};
    $e.tab && Se(Object.keys(e.tabs).indexOf($e.tab));
  }, [b, Ie, e, U, Se, v, c]), jt = [
    { text: v(h, c) },
    { text: v(H === "0" ? "New" : "Update", c) }
  ], ht = Number(H) !== 0 && !!V.length, mr = L.has("showRelation"), Ze = !Je || j.readOnlyRelations;
  g = g || v("Are you sure you want to delete ?", c);
  const { showPageTitle: hr = !0 } = e;
  return /* @__PURE__ */ D(ye, { children: [
    hr && /* @__PURE__ */ n(
      Ya,
      {
        navigate: S,
        title: h,
        showBreadcrumbs: !mt,
        breadcrumbs: jt,
        model: e,
        enableBackButton: ve !== void 0
      }
    ),
    /* @__PURE__ */ n(en.Provider, { value: { activeStep: ie, setActiveStep: Se }, children: /* @__PURE__ */ D(Wo, { sx: { padding: 2, ...s }, children: [
      se ? /* @__PURE__ */ n(tt, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ n(Ho, {}) }) : /* @__PURE__ */ D("form", { children: [
        /* @__PURE__ */ D(
          Uo,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              d && Je && !mr && !m && /* @__PURE__ */ n(
                Me,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Mt,
                  children: v("Save", c)
                }
              ),
              /* @__PURE__ */ n(
                Me,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Pe,
                  children: v("Cancel", c)
                }
              ),
              o.delete && /* @__PURE__ */ n(
                Me,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => M(!0),
                  children: v("Delete", c)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(
          l,
          {
            model: e,
            formik: Ie,
            data: j,
            fieldConfigs: Ft,
            onChange: fr,
            lookups: N,
            id: H,
            handleSubmit: Mt,
            mode: Tt
          }
        )
      ] }),
      ft && /* @__PURE__ */ D(
        Ke,
        {
          open: !!ft,
          onConfirm: It,
          onCancel: It,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            ft
          ]
        }
      ),
      /* @__PURE__ */ n(
        Ke,
        {
          open: Vt,
          onConfirm: qt,
          onCancel: () => _e(!1),
          title: v("Changes not saved", c),
          okText: v("Discard", c),
          cancelText: v("Continue", c),
          children: v("Would you like to continue to edit or discard changes?", c)
        }
      ),
      /* @__PURE__ */ n(
        Ke,
        {
          open: P,
          onConfirm: ue,
          onCancel: () => {
            M(!1), dr(null);
          },
          title: v(We ? "Error Deleting Record" : "Confirm Delete", c),
          children: g
        }
      ),
      ht ? /* @__PURE__ */ n(
        Xl,
        {
          readOnly: Ze,
          models: t,
          relationFilters: a,
          relations: V,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, er = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, rs = {}, Da = !0, as = {
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
    let { api: a, idProperty: o = a + "Id" } = r;
    const l = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    a || (a = `${t.replaceAll(er.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const i = { ...r.defaultValues }, s = l || t;
    Object.assign(this, {
      standard: !0,
      name: s,
      permissions: { ...or.defaultPermissions },
      idProperty: o,
      linkColumn: `${s}Name`,
      overrideFileName: t,
      preferenceId: s,
      tableName: s,
      module: l,
      ...r,
      api: a
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(i);
  }
  _getColumnVisibilityModel() {
    const r = {};
    for (const t of this.columns)
      t.hide === !0 && (r[t.id || t.field] = !1);
    return r;
  }
  _getDefaultValues(r) {
    for (const t of this.columns) {
      const a = t.field || t.id;
      r[a] = t.defaultValue === void 0 ? as[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: a = {} } = {}) {
    const { columns: o } = this, l = {};
    for (const i of o) {
      const { field: s, label: m, header: b, type: g = "string", requiredIfNew: u = !1, required: f = !1, min: C = "", max: h = "", validate: x } = i, w = m || b || s;
      if (!w || m === null || m === "") continue;
      let c;
      switch (g) {
        case "string":
          c = me.string().nullable().trim().label(w), C && !isNaN(Number(C)) && (c = c.min(Number(C), t(`${w} must be at least ${C} characters long`, a))), h && !isNaN(Number(h)) && (c = c.max(Number(h), t(`${w} must be at most ${h} characters long`, a))), f && (c = c.trim().required(t(`${w} is required`, a)));
          break;
        case "boolean":
          c = me.bool().nullable().transform((v, S) => S === "" ? null : v).label(w);
          break;
        case "radio":
        case "dayRadio":
          c = me.mixed().label(w), f && (c = c.required(t(`Select at least one option for ${w}`, a)));
          break;
        case "date":
          c = me.date().nullable().transform((v, S) => S === "" || S === null ? null : v).label(w), f && (c = c.required(t(`${w} is required`, a)));
          break;
        case "dateTime":
          c = me.date().nullable().transform((v, S) => S === "" || S === null ? null : v).label(w), f && (c = c.required(t(`${w} is required`, a)));
          break;
        case "select":
        case "autocomplete":
          f ? c = me.string().trim().label(w).required(t(`Select at least one ${w}`, a)) : c = me.string().nullable();
          break;
        case "password":
          c = me.string().label(w).test("ignore-asterisks", t(`${w} must be a valid password.`, a), (v) => {
            if (v === "******") return !0;
            const S = Number(C) || 8, k = Number(h) || 50, E = i.regex || er.password;
            return me.string().min(S, t(`${w} must be at least ${S} characters`, a)).max(k, t(`${w} must be at most ${k} characters`, a)).matches(
              E,
              t(`${w} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, a)
            ).isValidSync(v);
          });
          break;
        case "email":
          c = me.string().trim().matches(
            i.regex || er.email,
            t("Email must be a valid email", a)
          );
          break;
        case "number":
          f ? c = me.number().label(w).required(t(`${w} is required.`, a)) : c = me.number().nullable(), C !== void 0 && C !== "" && !isNaN(Number(C)) && (c = c.min(Number(C), t(`${w} must be greater than or equal to ${C}`, a))), h !== void 0 && h !== "" && !isNaN(Number(h)) && (c = c.max(Number(h), t(`${w} must be less than or equal to ${h}`, a)));
          break;
        case "fileUpload":
          c = me.string().trim().label(w);
          break;
        default:
          c = me.mixed().nullable().label(w);
          break;
      }
      if (f && g !== "string" && (c = c.required(t(`${w} is required`, a))), u && (!r || r === "") && (c = c.trim().required(t(`${w} is required`, a))), x) {
        const v = er.compareValidatorRegex.exec(x);
        if (v) {
          const S = v[1], k = o.find(
            (E) => (E.formField === S || E.field) === S
          );
          c = c.oneOf(
            [me.ref(S)],
            t(`${w} must match ${k.label}`, a)
          );
        }
      }
      l[s] = c;
    }
    return me.object({ ...l, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ n(ts, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ n(Ca, { model: this, showRowsSelected: Da, ...t });
  ChildGrid = (r) => /* @__PURE__ */ D(ye, { children: [
    /* @__PURE__ */ n(Ca, { model: this, ...r, customStyle: rs, showRowsSelected: Da }),
    /* @__PURE__ */ n(Do, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ke as DialogComponent,
  Ca as GridBase,
  ji as HelpModal,
  ga as MuiTypography,
  Ya as PageTitle,
  Tc as RouterProvider,
  Ga as SnackbarContext,
  Sc as SnackbarProvider,
  Fc as StateProvider,
  or as UiModel,
  Pc as crudHelper,
  Pi as daDKGrid,
  Ti as deDEGrid,
  Ai as elGRGrid,
  Mi as esESGrid,
  Bi as frFRGrid,
  et as httpRequest,
  ki as itITGrid,
  qi as locales,
  Vi as ptPT,
  Li as trTRGrid,
  Si as useMobile,
  zr as useRouter,
  St as useSnackbar,
  Le as useStateContext
};
//# sourceMappingURL=index.js.map
