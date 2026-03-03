import { jsx as a, jsxs as v, Fragment as ge } from "react/jsx-runtime";
import * as Ne from "react";
import gt, { createContext as tr, useContext as Or, useState as O, useEffect as fe, useRef as xr, useCallback as F, useMemo as Z, memo as Ca, useId as An, createElement as Mr } from "react";
import On from "@mui/material/Snackbar";
import Mn from "@mui/material/Alert";
import Te from "@mui/material/Button";
import In from "@mui/material/Dialog";
import Bn from "@mui/material/DialogActions";
import kn from "@mui/material/DialogContent";
import Rn from "@mui/material/DialogContentText";
import Nn from "@mui/material/DialogTitle";
import * as Xe from "@mui/x-data-grid-premium";
import { GridFooterContainer as Ln, GridFooter as $n, getGridDateOperators as wa, useGridSelector as xa, gridFilterModelSelector as zn, useGridApiRef as va, DataGridPremium as Da, GridActionsCellItem as vr, GridToolbarExportContainer as Vn, Toolbar as Gn, ColumnsPanelTrigger as qn, FilterPanelTrigger as Wn, GRID_CHECKBOX_SELECTION_COL_DEF as jn, getGridStringOperators as Un, getGridBooleanOperators as Hn, useGridApiContext as Yn, gridRowSelectionStateSelector as Kn } from "@mui/x-data-grid-premium";
import Pa from "@mui/icons-material/Delete";
import _n from "@mui/icons-material/FileCopy";
import Jn from "@mui/icons-material/Article";
import Sa from "@mui/icons-material/Edit";
import Qe from "@mui/material/Box";
import It from "@mui/material/Typography";
import rr from "@mui/material/TextField";
import { useTranslation as yt, withTranslation as Zn } from "react-i18next";
import { Typography as Oe, Dialog as Qn, DialogTitle as Xn, Grid as be, DialogContent as eo, Card as to, CardContent as ro, Breadcrumbs as ao, Link as no, Button as it, IconButton as Zt, Box as Se, FormControl as bt, Select as Dr, MenuItem as We, Menu as oo, List as io, ListItemButton as br, ListItemIcon as yr, ListItem as so, ListItemText as lo, TextField as st, FormControlLabel as lt, Checkbox as co, Stack as ia, Tooltip as Bt, InputLabel as sa, Badge as uo, FormHelperText as ct, useTheme as Ct, Input as po, FilledInput as fo, OutlinedInput as ho, InputAdornment as Ta, RadioGroup as Ir, Radio as mt, styled as mo, Avatar as go, CircularProgress as bo, Divider as yo } from "@mui/material";
import Co from "@mui/icons-material/Check";
import Pr from "@mui/icons-material/Close";
import wo from "@mui/icons-material/Help";
import { Replay as xo, Close as vo, GridOn as Do, TableChart as la, Code as Po, Language as So, DataObject as To } from "@mui/icons-material";
import ne from "dayjs";
import Fo from "dayjs/plugin/utc";
import Eo from "dayjs/plugin/timezone";
import { DatePicker as Fa } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Sr } from "@mui/x-date-pickers/DateTimePicker";
import Ea from "dayjs/plugin/utc.js";
import { LocalizationProvider as Aa } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Oa } from "@mui/x-date-pickers/AdapterDayjs";
import Tr from "@mui/icons-material/Add";
import Ao from "@mui/icons-material/Remove";
import Oo from "@mui/icons-material/FilterListOff";
import Mo from "@mui/icons-material/ViewColumn";
import Io from "@mui/icons-material/FilterList";
import { styled as ar } from "@mui/material/styles";
import Bo from "@mui/icons-material/Save";
import ca from "@mui/icons-material/Settings";
import ko from "@mui/icons-material/Refresh";
import { useFormik as Ma } from "formik";
import * as pe from "yup";
import { DateTimePicker as Ro, DatePicker as No } from "@mui/x-date-pickers";
import Ia from "@mui/material/MenuItem";
import Lo from "@mui/icons-material/History";
import $o from "@mui/icons-material/FileDownload";
import Ba from "@mui/material/Checkbox";
import zo from "@mui/material/Paper";
import Vo from "@mui/material/Stack";
import Go from "@mui/material/CircularProgress";
import qo from "@mui/material/FormControlLabel";
import { NumberField as Qt } from "@base-ui/react/number-field";
import Wo from "@mui/icons-material/KeyboardArrowUp";
import ka from "@mui/icons-material/KeyboardArrowDown";
import jo from "@mui/icons-material/VisibilityOff";
import Uo from "@mui/icons-material/Visibility";
import { TimePicker as Ho } from "@mui/x-date-pickers/TimePicker";
import nr from "@mui/material/FormControl";
import Yo from "@mui/material/InputLabel";
import Ko from "@mui/material/Select";
import Cr from "@mui/material/Grid";
import Ra from "@mui/material/Autocomplete";
import _o from "@mui/material/Stepper";
import Jo from "@mui/material/Step";
import Zo from "@mui/material/StepLabel";
import { grey as Qo } from "@mui/material/colors";
import Xo from "@emotion/styled";
import ei from "@mui/material/Chip";
import { SimpleTreeView as ti } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as da } from "@mui/x-tree-view/TreeItem";
import ri from "@mui/material/Input";
import ai from "@mui/material/Tab";
import ni from "@mui/material/Tabs";
const Na = tr(null), oi = "bottom", ii = "center", si = gt.forwardRef(function(t, r) {
  return /* @__PURE__ */ a(Mn, { elevation: 6, ref: r, variant: "filled", ...t });
}), bc = ({ children: e }) => {
  const [t, r] = O(null), [n, o] = O(!1), [s, i] = O(null), [d, f] = O(null), y = function(c, C, l = "info", p) {
    typeof c != "string" && (c = c.toString()), C && typeof C != "string" && (C = C.toString()), r(C ? `${c}: ${C}` : c), i(l), o(!0), f(p);
  }, g = function(c, C, l = "error", p) {
    y(c, C, l, p);
  }, u = function() {
    o(!1), f(null), d && d();
  };
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ a(
      Na.Provider,
      {
        value: { showMessage: y, showError: g },
        children: e
      }
    ),
    /* @__PURE__ */ a(On, { open: n, autoHideDuration: 6e3, onClose: u, anchorOrigin: { vertical: oi, horizontal: ii }, children: /* @__PURE__ */ a(si, { severity: s, children: t }) })
  ] });
}, wt = function() {
  return Or(Na);
}, je = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: n, okText: o, cancelText: s, yesNo: i = !1, children: d, maxWidth: f = "sm", fullWidth: y = !0, ...g }) => (o = o || (i ? "Yes" : "Ok"), s = s || (i ? "No" : "Cancel"), /* @__PURE__ */ v(
  In,
  {
    ...g,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: f,
    fullWidth: y,
    children: [
      /* @__PURE__ */ a(Nn, { id: "alert-dialog-title", sx: { fontSize: d ? "inherit" : "1.25rem" }, children: r }),
      d && /* @__PURE__ */ a(kn, { dividers: !0, children: /* @__PURE__ */ a(Rn, { children: d }) }),
      (n || t) && /* @__PURE__ */ v(Bn, { children: [
        n && /* @__PURE__ */ a(Te, { onClick: n, children: s }),
        t && /* @__PURE__ */ a(Te, { onClick: t, autoFocus: !0, children: o })
      ] })
    ]
  }
)), wr = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, La = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, li = (e, t) => {
  const r = new URL(e);
  for (const n in t) {
    const o = typeof t[n] == "object" ? JSON.stringify(t[n]) : t[n];
    r.searchParams.append(n, o);
  }
  window.open(r, "_blank").focus();
}, $a = async (e) => {
  const {
    method: t = "GET",
    url: r,
    data: n,
    headers: o = {},
    credentials: s = "include",
    ...i
  } = e, d = {
    method: t,
    credentials: s,
    headers: {
      ...o
    },
    ...i
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = n instanceof FormData ? n : La(n)) : (d.headers["Content-Type"] = o["Content-Type"] || "application/json", d.body = typeof n == "string" ? n : JSON.stringify(n)));
  const f = await fetch(r, d), y = f.headers.get("content-type") || {};
  return {
    status: f.status,
    data: y.includes("application/json") ? await f.json() : await f.text(),
    headers: Object.fromEntries(f.headers.entries())
  };
}, kt = (e) => e?.message || e?.info || e?.error || e?.err, Me = Object.freeze({
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
}), Je = async ({
  url: e,
  params: t = {},
  history: r,
  jsonPayload: n = !1,
  additionalParams: o = {},
  additionalHeaders: s = {},
  dataParser: i = Me.raw,
  onParseError: d
}) => {
  if (t.exportData)
    return li(e, t);
  const f = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: n ? { ...s } : { "Content-Type": "multipart/form-data", ...s },
    ...o
  };
  t && Object.keys(t).length > 0 && (f.data = n ? t : La(t));
  try {
    const y = await $a(f);
    let g = y.data;
    if (y.status === wr.SESSION_EXPIRED && r) {
      r("/login");
      return;
    }
    if (y.status === wr.FORBIDDEN)
      return { error: !0, message: g.message || "Access Denied!" };
    if (y.status !== wr.OK)
      return { error: !0, message: g.message || "An error occurred" };
    try {
      g = i(g);
    } catch (u) {
      return d ? d(u, g) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: u.message,
        rawData: g
      };
    }
    return g;
  } catch (y) {
    return { error: !0, message: y.message || "Network error" };
  }
}, ci = ["date", "dateTime"], di = ["singleSelect"], ui = 1e6, pi = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset();
function fi(e) {
  const { operator: t, value: r, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(t), s = r != null && (r !== "" || n === "number" && r === 0 || n === "boolean" && r === !1);
  return o || s;
}
const hi = ({ gridColumns: e, page: t, pageSize: r, sortModel: n, filterModel: o, baseFilters: s, action: i = "list", extraParams: d = {}, model: f, api: y }) => {
  const g = i === "export" && f.isElasticExport === !0, u = [], c = [], C = [];
  e.forEach(({ lookup: D, type: L, field: A, keepLocal: S = !1, keepLocalDate: G, filterable: te = !0, dependsOn: Q }) => {
    ci.includes(L) && C.push({ field: A, keepLocal: S, keepLocalDate: G }), D && !u.includes(D) && di.includes(L) && te && (u.push(D), c.push({ lookup: D, dependsOn: Q }));
  });
  const l = [];
  o?.items?.length && o.items.forEach((D) => {
    if (fi(D)) {
      const { field: L, operator: A, filterField: S } = D;
      let { value: G } = D;
      const Q = e.filter((j) => j?.field === D.field)[0]?.type;
      Q === "boolean" ? G = G === "true" || G === !0 ? 1 : 0 : Q === "number" && (G = Array.isArray(G) ? G.filter((j) => j) : G), G = D.filterValues || G, l.push({
        field: S || L,
        operator: A,
        value: G,
        type: Q
      });
    }
  }), s && Array.isArray(s) && l.push(...s);
  const p = {
    start: t * r,
    limit: g ? f.exportSize || ui : r,
    ...d,
    logicalOperator: o.logicOperator,
    sort: n.map((D) => (D.filterField || D.field) + " " + D.sort).join(","),
    where: l,
    isElasticExport: g,
    model: f.module,
    fileName: f.overrideFileName
  };
  u.length && (p.lookups = u.join(",")), c.length && (p.lookupWithDeps = JSON.stringify(c)), f?.limitToSurveyed && (p.limitToSurveyed = f?.limitToSurveyed);
  let w = `${y}/${i}`;
  const x = new URLSearchParams();
  d.template && x.append("template", d.template), d.configFileName && x.append("configFileName", d.configFileName);
  const T = x.toString();
  return T && (w += `?${T}`), { requestData: p, url: w, where: l, dateColumns: C };
}, Fr = async (e = {}) => {
  const { contentType: t, columns: r, extraParams: n = {}, action: o = "list", model: s } = e, { requestData: i, url: d, where: f, dateColumns: y } = hi(e);
  if (t) {
    i.responseType = t, i.columns = r, i.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof s.createRequestPayload == "function" && await s.createRequestPayload(i, { where: f, url: d, dataParsers: Me, ...e });
    const c = document.createElement("form");
    if (c.setAttribute("method", "POST"), c.setAttribute("id", "exportForm"), c.setAttribute("target", "_blank"), !n.template)
      for (const C in i) {
        let l = i[C];
        if (l == null)
          continue;
        typeof l != "string" && (l = JSON.stringify(l));
        const p = document.createElement("input");
        p.type = "hidden", p.name = C, p.value = l, c.append(p);
      }
    c.setAttribute("action", i.url || d), document.body.appendChild(c), c.submit(), setTimeout(() => {
      c.remove();
    }, 0);
    return;
  }
  const g = {
    url: d,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0,
    params: i,
    dataParser: Me.json
  };
  typeof s.createRequestPayload == "function" && await s.createRequestPayload(g, { where: f, dataParsers: Me, ...e });
  const u = await Je(g);
  if (u?.error || u?.success === !1)
    throw new Error(kt(u) || "An error occurred while fetching data");
  return typeof s.parseResponsePayload == "function" && s.parseResponseActions.includes(o) ? await s.parseResponsePayload({ responseData: u, model: s, dateColumns: y, action: o, ...e }) : (u.records.forEach((c) => {
    y.forEach((C) => {
      const { field: l, keepLocal: p, keepLocalDate: w } = C;
      if (c[l]) {
        if (c[l] = new Date(c[l]), w) {
          const x = c[l].getTimezoneOffset() * 6e4;
          c[l] = new Date(c[l].getTime() + x);
        }
        if (p && !pi(c[l])) {
          const x = c[l].getTimezoneOffset() * 6e4;
          c[l] = new Date(c[l].getTime() + x);
        }
      }
    }), s.columns.forEach(({ field: C, displayIndex: l }) => {
      l && (c[C] = c[l]);
    });
  }), u);
}, Xt = async (e = {}) => {
  let { api: t, id: r, model: n, parentFilters: o, where: s = {} } = e;
  t = t || n.api;
  const i = new URLSearchParams(), d = `${t}/${r ?? "-"}`, f = [];
  (n.formDef || n.columns)?.forEach((x) => {
    x.lookup && !f.includes(x.lookup) && !x.dependsOn && f.push(x.lookup);
  }), i.set("lookups", f), s && Object.keys(s)?.length && i.set("where", JSON.stringify(s));
  const g = {
    url: `${d}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(g, { action: "load", dataParsers: Me, ...e });
  const u = await Je(g);
  if (u?.error || u?.success === !1)
    throw new Error(kt(u) || "Load failed");
  if (typeof n.parseResponsePayload == "function" && n.parseResponseActions.includes("load"))
    return await n.parseResponsePayload({ responseData: u, model: n, action: "load", ...e });
  const { data: c, lookups: C } = u || {};
  let l = c[n.linkColumn];
  const p = n.columns.find((x) => x.field === n.linkColumn);
  if (p && p.lookup && C && C[p.lookup] && C[p.lookup]?.length) {
    const x = C[p.lookup].find((T) => T.value === l);
    x && (l = x.label);
  }
  const w = { ...n.defaultValues };
  return { id: r, title: l, record: { ...w, ...c, ...o }, lookups: C };
}, Br = async function(e = {}) {
  const { id: t, api: r, model: n } = e;
  if (!t)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${r}/${t}`,
    additionalParams: { method: "DELETE" }
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(o, { action: "delete", dataParsers: Me, ...e });
  const s = await Je(o);
  if (s?.error || s?.success === !1)
    throw new Error(kt(s) || "Delete failed");
  return !0;
}, kr = async function(e = {}) {
  const { id: t, api: r, values: n, model: o } = e;
  let s, i;
  t !== 0 ? (s = `${r}/${t}`, i = "PUT") : (s = r, i = "POST");
  const d = {
    url: s,
    additionalParams: { method: i },
    params: n,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(d, { action: "save", dataParsers: Me, ...e });
  const f = await Je(d);
  if (f?.error || f?.success === !1)
    throw new Error(kt(f) || "Save failed");
  return f;
}, za = async (e = {}) => {
  let { api: t, model: r, lookups: n, scopeId: o, reqData: s } = e;
  t = t || r.api;
  const i = new URLSearchParams(), d = `${t}/lookups`;
  i.set("lookups", n), i.set("scopeId", o);
  const f = {
    url: `${d}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0,
    ...s
  };
  typeof r.createRequestPayload == "function" && await r.createRequestPayload(f, { action: "lookups", dataParsers: Me, ...e });
  const y = await Je(f);
  if (y?.error || y?.success === !1)
    throw new Error(kt(y) || "Could not load lookups");
  return typeof r.parseResponsePayload == "function" && r.parseResponseActions.includes("lookups") ? await r.parseResponsePayload({ responseData: y, model: r, action: "lookups", ...e }) : y;
}, yc = {
  getList: Fr,
  getRecord: Xt,
  deleteRecord: Br,
  saveRecord: kr,
  getLookups: za
}, mi = ({ pagination: e, apiRef: t, tTranslate: r = (n) => n }) => {
  const n = t.current.state.pagination.paginationModel.page, o = t.current.state.pagination.paginationModel.pageSize, s = t.current.state.rows.totalRowCount, i = Math.ceil(s / o), { t: d, i18n: f } = yt(), y = { t: d, i18n: f }, [g, u] = O(n + 1), c = function(p) {
    let w = p.target?.value;
    w === "" ? u("") : (w = parseInt(w), w = isNaN(w) || w < 1 ? 1 : w, u(w));
  };
  fe(() => {
    u(n + 1);
  }, [n, o]);
  const C = function() {
    let p = g === "" ? 1 : g;
    p = Math.max(p, 1), p = Math.min(p, i), t.current.setPage(p - 1), u(p), g === "" && u(1);
  }, l = (p) => {
    const w = p.which || p.keyCode, x = String.fromCharCode(w);
    /\d/.test(x) || p.preventDefault();
  };
  return /* @__PURE__ */ v(Ln, { children: [
    /* @__PURE__ */ a(Qe, { sx: { pl: 5 }, children: e && /* @__PURE__ */ v(ge, { children: [
      /* @__PURE__ */ v(It, { variant: "p", children: [
        r("Jump to page", y),
        ":"
      ] }),
      /* @__PURE__ */ a(
        rr,
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
          onChange: c,
          onKeyPress: l,
          disabled: !s
        }
      ),
      /* @__PURE__ */ a(Te, { disabled: !s, size: "small", onClick: C, children: r("Go", y) })
    ] }) }),
    /* @__PURE__ */ a($n, {})
  ] });
}, gi = /\${((\w+)\.)?(\w+)}/g, bi = function(e, t, { template: r = gi, keepMissingTags: n = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(o, s, i, d) {
    const f = i ? t[i] || {} : t;
    return f[d] === void 0 ? n ? o : "" : f[d];
  });
}, Yt = {
  replaceTags: bi
};
function ua({ variant: e = "h2", component: t = "h2", text: r = "", name: n = null, ...o }) {
  return /* @__PURE__ */ v(Oe, { variant: e, component: t, ...o, children: [
    r,
    n && ` ${n}`
  ] });
}
function yi(e = !1) {
  const t = s(), [r, n] = O(t);
  function o() {
    setTimeout(() => {
      n(s());
    }, 10);
  }
  fe(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function s() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const d = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const f = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let y = null;
    return window.innerWidth <= window.innerHeight ? y = "portrait" : y = "landscape", { mobile: d, tablet: f, portrait: y === "portrait", landscape: y === "landscape" };
  }
  return e ? r.mobile : r;
}
const Ci = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, wi = {
  ...Xe.daDK,
  ...Ci
}, xi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, vi = {
  ...Xe.deDE,
  ...xi
}, Di = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Pi = {
  ...Xe.elGR,
  ...Di
}, Si = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Ti = {
  ...Xe.esES,
  ...Si
}, Fi = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Ei = {
  ...Xe.frFR,
  ...Fi
}, Ai = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Oi = {
  ...Xe.itIT,
  ...Ai
}, Mi = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Ii = {
  ...Xe.trTR,
  ...Mi
}, Bi = {
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
}, ki = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Ri = {
  ...Xe.enUS,
  ...ki
}, Ni = {
  en: Ri,
  "tr-TR": Ii,
  "es-ES": Ti,
  "da-DK": wi,
  "de-DE": vi,
  "el-GR": Pi,
  "fr-FR": Ei,
  "pt-PT": Bi,
  "it-IT": Oi
};
ne.extend(Fo);
ne.extend(Eo);
const Va = tr(), Ga = tr(null), pa = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Cc = ({ children: e, apiEndpoints: t = {} }) => {
  const [r, n] = O("en"), [o, s] = O("MM/DD/YYYY hh:mm:ss A"), [i, d] = O(null), [f, y] = O(null), [g, u] = O(null), [c, C] = O(null), [l, p] = O(""), [w, x] = O(!1), { t: T, i18n: D } = yt(), L = wt(), A = xr(t), S = F((I, N) => {
    A.current[I] = N;
  }, []), G = F((I) => A.current[I || "default"] || "", []), te = F((I, N) => `${A.current[N || "default"] || ""}${I}`, []), Q = F((I = !0) => {
    x(I);
  }, []), j = F((I, N, _) => {
    if (_ != null) {
      const K = _;
      let re = I ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return K && (re = K.split(" "), re[0] = re[0].toUpperCase(), I ? re = re[0] : N ? re = re[0].toUpperCase() : (re[1] += re[1].includes(":ss") ? "" : ":ss", re = re.join(" "))), re;
    }
    return I ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }, []), X = F(({ value: I, useSystemFormat: N, showOnlyDate: _ = !1, state: K, timeZone: re }) => {
    if (!I) return "-";
    const et = j(N, _, K);
    return re ? ne(I).tz(re).format(et) : ne(I).format(et);
  }, [j]), B = F(() => {
    const I = r, N = Ni[I];
    function _(K) {
      return I === "pt-PT" || I === "ptPT" ? N.components.MuiDataGrid.defaultProps.localeText[K] || K : N[K] || K;
    }
    return { getLocalizedString: _ };
  }, [r]), ee = F((I) => {
    n(I);
  }, []), ce = F((I) => {
    d(I);
  }, []), de = F((I) => {
    u(I);
  }, []), ve = F((I) => {
    C(I);
  }, []), q = F((I) => {
    p(I);
  }, []), W = F((I) => {
    s(I);
  }, []), Fe = F((I) => {
    y(I);
  }, []), $ = Z(() => ({
    locale: r,
    dateTime: o,
    pageTitle: i,
    modal: f,
    pageBackButton: g,
    userData: c,
    timeZone: l
  }), [r, o, i, f, g, c, l]), z = Z(() => ({
    // State data
    stateData: $,
    // Loader management
    isLoading: w,
    showLoader: Q,
    // Snackbar utilities
    showMessage: L?.showMessage || pa,
    showError: L?.showError || pa,
    // i18n utilities
    dayjs: ne,
    t: T,
    i18n: D,
    // Date/time utilities
    systemDateTimeFormat: j,
    formatDate: X,
    useLocalization: B,
    // API utilities
    getApiEndpoint: G,
    setApiEndpoint: S,
    buildUrl: te,
    // App-level state setters with meaningful names
    setLocale: ee,
    setPageTitle: ce,
    setPageBackButton: de,
    setUserData: ve,
    setTimeZone: q,
    setDateTimeFormat: W,
    setModal: Fe
  }), [
    $,
    w,
    Q,
    T,
    D,
    L,
    G,
    S,
    j,
    X,
    B,
    ee,
    ce,
    de,
    ve,
    q,
    W,
    Fe,
    te
  ]);
  return /* @__PURE__ */ a(Va.Provider, { value: z, children: e });
}, wc = Ga.Provider, Rr = () => Or(Ga), Le = () => {
  const e = Or(Va);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Li = () => {
  const [e, t] = O(), [r, n] = O(!1), { stateData: o, setModal: s } = Le(), i = o.modal, d = 16 / 9;
  let f = (window.outerWidth - 10) / window.innerWidth * 100;
  const y = () => {
    let u = document.getElementById("tutorial-iframe");
    u ? (u = u.offsetWidth, u = u / window.innerWidth) : u = 0.9;
    const c = window.innerWidth * u * (1 / d), C = window.innerHeight - 180;
    t(Math.min(c, C));
  };
  fe(() => {
    i?.status && (n(!0), y());
  }, [i, f]), fe(() => (window.addEventListener("resize", y), () => {
    window.removeEventListener("resize", y);
  }), []);
  function g() {
    const u = document.getElementById("tutorial-iframe");
    u.src = i?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: i?.status && /* @__PURE__ */ v(Qn, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    s({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(Xn, { className: "pt-2 pb-0", children: /* @__PURE__ */ v(be, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ v(be, { size: 11, children: [
        /* @__PURE__ */ v(Oe, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Oe, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ a(ge, { children: " " }) })
      ] }),
      /* @__PURE__ */ v(be, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(xo, { className: "cursor_pointer mt-2 mr-2", onClick: g }),
        /* @__PURE__ */ a(vo, { className: "cursor_pointer mt-2", onClick: () => {
          s({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ v(eo, { dividers: !0, children: [
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
function $i({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: s = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: d,
  breadcrumbs: f = [],
  enableBackButton: y = !1,
  breadcrumbColor: g,
  showHelpButton: u = !1,
  model: c
}) {
  const C = yi(!0), l = f.length - 1, p = d && f.length, { t: w, i18n: x } = yt(), T = Z(() => ({ t: w, i18n: x }), [w, x]), D = c?.tTranslate ?? ((A) => A), L = () => {
    t(-1);
  };
  return fe(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ a(ua, { className: "print-only", text: D(e, T) }),
    p && /* @__PURE__ */ v(ge, { children: [
      /* @__PURE__ */ a(to, { sx: { mb: 3 }, children: /* @__PURE__ */ v(ro, { sx: { backgroundColor: g || "#fff" }, children: [
        /* @__PURE__ */ v(be, { container: !0, children: [
          /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(ao, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: f.map((A, S) => S < l ? /* @__PURE__ */ a(no, { onClick: L, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: A.text }, S) : /* @__PURE__ */ a(Oe, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: A.text }, S)) }) }),
          (f.length > 1 || y) && /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(it, { variant: "contained", onClick: L, children: D("Back", T) }) }),
          u && /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(Zt, { color: "primary", title: D("Help", T), size: "large", children: /* @__PURE__ */ a(wo, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Se, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: C ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          ua,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: D(e, T),
            name: r
          }
        ) }) }) }) }),
        !C && /* @__PURE__ */ v(ge, { children: [
          /* @__PURE__ */ v(Se, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ v(Se, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a(Li, {})
    ] })
  ] });
}
const qa = Zn()($i), Ze = {
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
}, Wa = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: n = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const o = n.find((s) => s.Module === t.module);
  return o ? {
    canAdd: r.add && !!o[Ze.permissionsMapper.add],
    canEdit: r.edit && !!o[Ze.permissionsMapper.edit],
    canDelete: r.delete && !!o[[Ze.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
};
ne.extend(Ea);
const zi = {
  date: Fa,
  datetime: Sr,
  dateTimeLocal: Sr
}, Vi = "-10px", Gi = "-16px", qi = (e) => {
  const { fixedFilterFormat: t } = Ze, { item: r, applyValue: n, convert: o } = e, { systemDateTimeFormat: s, stateData: i } = Le(), d = e?.type || "date", f = t[d], y = (p) => {
    const w = ne(p);
    return w.isValid() && w.year() > 1900;
  }, g = s(i.dateTime), u = (p) => {
    if (!(d !== "date" && d !== "datetime" && d !== "dateTimeLocal" || ((x) => typeof x != "string" ? !1 : !ne(x, g, !0).isValid())(p))) {
      if (o) {
        p = ne(p).utc(), n({ ...r, value: p });
        return;
      }
      if (!y(p)) {
        n({ ...r, value: null });
        return;
      }
      n({ ...r, value: p.format(f) });
    }
  }, c = (p) => {
    if (p && p === t.OverrideDateFormat) {
      const w = p.split("-");
      return w.length === 3 ? w[1] : null;
    }
  }, C = zi[d], l = d === "dateTimeLocal" ? r?.value ? ne(r?.value.$d) : null : r?.value ? ne(r.value) : null;
  return /* @__PURE__ */ a(Aa, { dateAdapter: Oa, children: /* @__PURE__ */ a(
    C,
    {
      fullWidth: !0,
      format: g,
      value: l,
      onChange: u,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Vi,
            marginBottom: Gi
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => c(g) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Kt = (e) => wa().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ a(qi, { ...r, ...e }) : void 0
})), Wi = {
  IsAnyOf: "isAnyOf"
}, ji = (e) => {
  const { column: t, item: r, applyValue: n, apiRef: o } = e, s = t?.dataRef?.current?.lookups;
  let i = t.customLookup || s[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: u, value: c }) => ({
    label: u,
    value: c
  })));
  const d = xa(o, zn), f = Z(
    () => d.items?.filter((u) => u.field === t.field),
    [t.field, d.items]
  ), y = F(
    (u) => {
      let c = u.target.value;
      if (d.items.length >= 1) {
        c = c.length === 1 ? c[0] : c;
        for (const p of d.items)
          p.field === r.field && (p.operator === Wi.IsAnyOf ? c = Array.isArray(c) ? c : [c] : c = c === 0 ? "0" : c);
      }
      if (c.length === 0 && f[0]) {
        o.current.deleteFilterItem(f[0]);
        return;
      }
      const C = c, l = f[0] ? f[0] : r;
      n({ ...l, value: C });
    },
    [o, t.applyZeroFilter, f, r, n]
  ), g = f[0]?.value ?? "";
  return /* @__PURE__ */ a(bt, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    Dr,
    {
      label: t.field,
      variant: "standard",
      value: g,
      onChange: (u) => y(u),
      multiple: Array.isArray(g),
      MenuProps: {
        PaperProps: {
          style: {
            height: "fit-content",
            overflow: "hidden"
          }
        }
      },
      children: i?.map((u, c) => /* @__PURE__ */ a(We, { value: u.value, children: u.label }, c))
    }
  ) });
}, qe = {
  Edit: "Edit",
  Delete: "Delete"
}, Ee = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, Ui = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(vr, { icon: /* @__PURE__ */ a(Bt, { title: qe.Edit, children: /* @__PURE__ */ a(Sa, {}) }), tabIndex: 1, "data-action": qe.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(vr, { icon: /* @__PURE__ */ a(Bt, { title: qe.Delete, children: /* @__PURE__ */ a(Pa, {}) }), tabIndex: 2, "data-action": qe.Delete, label: "Delete", color: "error" }, 2)] }
], Hi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, Yi = { pageSize: 50, page: 0 }, Ki = [5, 10, 20, 50, 100], _i = ({ gridRef: e, preferenceKey: t, onPreferenceChange: r, t: n, tOpts: o }) => {
  const { getApiEndpoint: s } = Le(), i = s("GridPreferenceManager"), d = va(), f = wt(), [y, g] = O(Ee.NONE), [u, c] = O(null), [C, l] = O(!1), [p, w] = O({}), [x, T] = O(null), [D, L] = O(null), A = Z(
    () => x == null ? [] : x.filter(($) => $.prefId !== 0),
    [x]
  ), S = Z(() => pe.object({
    prefName: pe.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: pe.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), G = ($) => c($?.currentTarget), te = () => c(null), Q = () => {
    g(Ee.NONE), te();
  }, j = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), L(null), r && r(null), te());
  }, X = F(async ({ applyDefault: $ = !1 }) => {
    const z = await Je({
      url: i,
      params: { action: "list", id: t },
      dataParser: Me.json
    });
    if (!z?.preferences) {
      f.showMessage(n("Failed to load preferences.", o)), r && r(null);
      return;
    }
    const I = z.preferences.filter((N) => N.prefName.trim() !== "");
    if (T(I), $) {
      const N = I.find((_) => _.isDefault);
      if (N)
        return { defaultPrefId: N.prefId, preferences: I };
      r && r(null);
    }
    return { preferences: I };
  }, [i, t, f, n, o, r]), B = F(async ($, z = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), $ === 0) {
      j();
      return;
    }
    const I = z || x;
    if (!I) {
      f.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const N = I.find((K) => K.prefId === $);
    if (!N?.prefValue) {
      f.showMessage(n("Failed to load preference.", o));
      return;
    }
    let _;
    try {
      _ = typeof N.prefValue == "string" ? JSON.parse(N.prefValue) : N.prefValue;
    } catch {
      f.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(_), L(N.prefName), r && r(N.prefName), te();
  }, [e, j, x, r, f, n, o]), ee = async ($) => {
    const z = $.prefName.trim(), I = z.toLocaleLowerCase();
    if (x.find((_) => _.prefName.toLocaleLowerCase() === I && _.prefId !== $.prefId)) {
      l(!0);
      return;
    }
    const N = await Je({
      url: i,
      params: {
        action: "save",
        id: t,
        prefId: $.prefId,
        prefName: z,
        prefDesc: $.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: $.isDefault
      },
      dataParser: Me.json
    });
    if (N === !0 || N?.success === !0) {
      f.showMessage(n(`Preference ${y === Ee.ADD ? "added" : "saved"} successfully.`, o)), Q(), await X({ applyDefault: !1 });
      return;
    }
    f.showMessage(n("Error saving preference: ", o) + (N?.message || n("Unknown error", o)));
  }, ce = async () => {
    const $ = await Je({
      url: i,
      params: {
        action: "delete",
        id: t,
        prefIdArray: p.prefId
      },
      dataParser: Me.json
    });
    if ($ === !0 || $?.success === !0) {
      f.showMessage(n("Preference deleted successfully.", o)), await X({ applyDefault: !1 }), w({});
      return;
    }
    f.showMessage(n("Error deleting preference: ", o) + ($?.message || n("Unknown error", o)));
  }, de = ($) => {
    const z = $.field === "editAction" ? qe.Edit : $.field === "deleteAction" ? qe.Delete : null;
    if ($.id === 0 && z) {
      f.showMessage(n(`Default preference cannot be ${z === qe.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    z === qe.Edit && (g(Ee.EDIT), q.setValues($?.row)), z === qe.Delete && w({
      prefId: $.id,
      preferenceName: $.row.prefName
    });
  }, ve = ($) => {
    g($), te(), $ === Ee.ADD && q.resetForm();
  }, q = Ma({
    initialValues: Hi,
    validationSchema: S,
    onSubmit: ee,
    mode: "onBlur"
  });
  fe(() => {
    if (!t) return;
    (async () => {
      const z = await X({ applyDefault: !0 });
      z?.defaultPrefId && z?.preferences && await B(z.defaultPrefId, z.preferences);
    })();
  }, [t]);
  const W = y === Ee.MANAGE, Fe = y === Ee.ADD || y === Ee.EDIT;
  return /* @__PURE__ */ v(Se, { children: [
    /* @__PURE__ */ v(
      it,
      {
        id: "grid-preferences-btn",
        "aria-controls": u ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": u ? "true" : void 0,
        onClick: G,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(ca, {}),
        children: [
          n("Preferences", o),
          " ",
          D && `(${D})`
        ]
      }
    ),
    /* @__PURE__ */ v(
      oo,
      {
        id: "grid-preference-menu",
        anchorEl: u,
        open: !!u,
        onClose: te,
        component: io,
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
          /* @__PURE__ */ v(We, { component: br, dense: !0, onClick: () => ve(Ee.ADD), children: [
            /* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(Tr, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ v(We, { component: br, dense: !0, onClick: () => ve(Ee.MANAGE), children: [
            /* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(ca, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ v(We, { component: br, dense: !0, divider: x?.length > 0, onClick: () => B(0), children: [
            /* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(ko, {}) }),
            n("Reset to Default", o)
          ] }),
          x?.length > 0 && x?.map(($) => {
            const { prefName: z, prefDesc: I, prefId: N } = $;
            return /* @__PURE__ */ a(
              We,
              {
                onClick: () => B(N),
                component: so,
                selected: D === z,
                title: n(I, o),
                dense: !0,
                children: /* @__PURE__ */ a(lo, { primary: z })
              },
              `pref-item-${N}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: y !== Ee.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ v(Oe, { variant: "h5", children: [
          y,
          " ",
          n(W ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: W ? "md" : "sm",
        fullWidth: !0,
        children: [
          Fe && /* @__PURE__ */ v(
            be,
            {
              component: "form",
              onSubmit: q.handleSubmit,
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
                  st,
                  {
                    value: q.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ v("span", { children: [
                      n("Preference Name", o),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: q.handleChange,
                    error: !!q.errors.prefName,
                    helperText: q.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
                  st,
                  {
                    value: q.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: n("Preference Description", o),
                    name: "prefDesc",
                    onChange: q.handleChange,
                    error: !!q.errors.prefDesc,
                    helperText: q.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
                  lt,
                  {
                    control: /* @__PURE__ */ a(
                      co,
                      {
                        checked: q.values.isDefault,
                        name: "isDefault",
                        onChange: q.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ v(ia, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    it,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ a(Bo, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: n("Save", o)
                    }
                  ),
                  /* @__PURE__ */ a(
                    it,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ a(Pr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: Q,
                      disableElevation: !0,
                      children: n("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          W && /* @__PURE__ */ v(be, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
              Da,
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
                onCellClick: de,
                columns: Ui,
                pageSizeOptions: Ki,
                pagination: !0,
                rowCount: A.length,
                rows: A,
                getRowId: ($) => $.GridPreferenceId,
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
                    paginationModel: Yi
                  }
                }
              }
            ) }),
            /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(ia, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
              it,
              {
                type: "button",
                startIcon: /* @__PURE__ */ a(Pr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: Q,
                disableElevation: !0,
                children: n("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: C,
        onConfirm: () => l(!1),
        title: "",
        okText: n("Ok", o),
        cancelText: "",
        children: [
          '"',
          q.values.prefName.trim(),
          '": ',
          n("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ v(
      je,
      {
        open: !!p.preferenceName,
        onConfirm: ce,
        onCancel: () => w({}),
        title: n("Confirm delete", o),
        yesNo: !0,
        children: [
          n("Are you sure you wish to delete", o),
          ' "',
          p.preferenceName,
          '"?'
        ]
      }
    )
  ] });
}, Ji = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((n) => {
  r.lastIndex = 0;
  const o = r.exec(n);
  if (!o) return null;
  const [, s, i = "ASC"] = o;
  return {
    field: s.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), ht = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: n, type: o, isPivotExport: s = !1, icon: i }) => /* @__PURE__ */ v(
  Ia,
  {
    onClick: r,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": s,
    children: [
      /* @__PURE__ */ a(Qe, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: i }),
      e(o, t)
    ]
  }
), Zi = ({ exportFormats: e, ...t }) => /* @__PURE__ */ v(Vn, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ a(ht, { ...t, icon: /* @__PURE__ */ a(Do, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ a(ht, { ...t, icon: /* @__PURE__ */ a(la, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ a(ht, { ...t, icon: /* @__PURE__ */ a(la, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ a(ht, { ...t, icon: /* @__PURE__ */ a(Po, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ a(ht, { ...t, icon: /* @__PURE__ */ a(So, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ a(ht, { ...t, icon: /* @__PURE__ */ a(To, { fontSize: "small" }), type: "JSON", contentType: "application/json" })
] }), Er = (e, t) => {
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
}, Qi = (e = {}, t = {}) => {
  let r = !0;
  for (const n in e)
    e[n] !== t[n] && (r = !1);
  for (const n in t)
    n in e || (r = !1);
  return r;
};
ne.extend(Ea);
const Xi = ({
  column: e,
  filterModel: t,
  setFilterModel: r,
  lookupData: n,
  tTranslate: o,
  tOpts: s
}) => {
  const { systemDateTimeFormat: i, stateData: d } = Le(), { fixedFilterFormat: f } = Ze, y = Z(() => t?.items?.find((l) => l.field === e.field), [t, e.field]), g = Z(() => y ? y.value : e.toolbarFilter?.defaultOperator === "isAnyOf" ? [] : "", [y, e.toolbarFilter?.defaultOperator]), u = F((l) => {
    const p = e.toolbarFilter?.defaultOperator || Er(e.type);
    r((w) => {
      const x = w?.items || [];
      if (l === "" || l === null || Array.isArray(l) && l.length === 0) {
        const L = x.filter((A) => A.field !== e.field);
        return {
          ...w,
          items: L
        };
      }
      const T = {
        field: e.field,
        operator: p,
        value: l,
        type: e.type
      }, D = x.filter((L) => L.field !== e.field);
      return {
        ...w,
        items: [...D, T]
      };
    });
  }, [e, r]), c = F((l, p) => p === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[l] || l : p === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[l] || l : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[l] || l, []);
  return (() => {
    const l = e.toolbarFilter?.label || e.headerName || e.label || e.field, p = e.toolbarFilter?.defaultOperator || Er(e.type), w = c(p, e.type), T = e.type === "number" || e.type === "string" && p !== "startsWith" ? e.type === "number" ? `${w} ${l}` : `${l} (${w})` : l;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          st,
          {
            variant: "standard",
            label: o(T, s),
            value: g,
            onChange: (B) => u(B.target.value),
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
            label: o(T, s),
            value: g,
            onChange: (B) => u(B.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const B = g === "" || g === void 0 || g === null ? "" : g === !0 || g === "true" ? "true" : g === !1 || g === "false" ? "false" : "";
        return /* @__PURE__ */ v(bt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(sa, { children: o(T, s) }),
          /* @__PURE__ */ v(
            Dr,
            {
              value: B,
              onChange: (ee) => {
                const ce = ee.target.value;
                let de;
                ce === "" ? de = "" : ce === "true" ? de = !0 : ce === "false" ? de = !1 : de = ce, u(de);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(We, { value: "", children: o("All", s) }),
                /* @__PURE__ */ a(We, { value: "true", children: o("True", s) }),
                /* @__PURE__ */ a(We, { value: "false", children: o("False", s) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const D = e.customLookup || n?.[e.lookup] || [], L = typeof e.lookup == "string" ? D.map((B) => ({
          label: B?.label || "",
          value: B?.value ?? ""
        })) : D, A = y?.operator === "isAnyOf" || e.toolbarFilter?.defaultOperator === "isAnyOf";
        return /* @__PURE__ */ v(bt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(sa, { children: o(T, s) }),
          /* @__PURE__ */ a(
            Dr,
            {
              value: g,
              onChange: (B) => u(B.target.value),
              multiple: A,
              size: "small",
              children: L.map((B) => /* @__PURE__ */ a(We, { value: B.value, children: B.label }, B.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const S = e.type, te = f[S === "dateTime" ? "datetime" : S], Q = i(S !== "dateTime", !1, d.dateTime), j = S === "dateTime" ? Ro : No;
        let X = null;
        if (g) {
          const B = ne(g);
          X = B.isValid() ? B : null;
        }
        return /* @__PURE__ */ a(Aa, { dateAdapter: Oa, children: /* @__PURE__ */ a(
          j,
          {
            label: o(T, s),
            format: Q,
            value: X,
            onChange: (B) => {
              !B || !B.isValid() ? u(null) : u(B.format(te));
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
            label: o(T, s),
            value: g,
            onChange: (B) => u(B.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, _t = ar(Te)({
  margin: "6px"
}), es = ar(Gn)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), ts = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: n,
    isReadOnly: o,
    canAdd: s,
    forAssignment: i,
    showAddIcon: d,
    onAdd: f,
    selectionApi: y,
    rowSelectionModel: g,
    selectAll: u,
    available: c,
    onAssign: C,
    assigned: l,
    onUnassign: p,
    effectivePermissions: w,
    clearFilters: x,
    handleExport: T,
    preferenceKey: D,
    apiRef: L,
    tTranslate: A,
    tOpts: S,
    filterModel: G,
    setFilterModel: te,
    onPreferenceChange: Q,
    toolbarItems: j,
    gridColumns: X
  } = e, B = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), ee = G?.items?.length || 0, ce = X?.filter((q) => q.toolbarFilter) || [], de = r?.lookups || {}, ve = r?.records || [];
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ v(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "10px"
        },
        children: [
          /* @__PURE__ */ v("div", { children: [
            t.gridSubTitle && /* @__PURE__ */ v(It, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              A(t.gridSubTitle, S)
            ] }),
            n && t.showPreferenceInHeader && /* @__PURE__ */ v(It, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              A("Applied Preference", S),
              ": ",
              n
            ] }),
            (o || !s && !i) && /* @__PURE__ */ v(It, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !s || o ? "" : t.title
            ] }),
            !i && s && !o && /* @__PURE__ */ a(_t, { startIcon: d ? /* @__PURE__ */ a(Tr, {}) : null, onClick: f, size: "medium", variant: "contained", children: A(B, S) }),
            !!e.headerActions && e.headerActions,
            y.length && ve.length ? /* @__PURE__ */ a(
              _t,
              {
                onClick: u,
                size: "medium",
                variant: "contained",
                children: g.ids.size === ve.length ? A("Deselect All", S) : A("Select All", S)
              }
            ) : /* @__PURE__ */ a(ge, {}),
            c && /* @__PURE__ */ a(_t, { startIcon: d ? /* @__PURE__ */ a(Tr, {}) : null, onClick: C, size: "medium", variant: "contained", children: A("Assign", S) }),
            l && /* @__PURE__ */ a(_t, { startIcon: d ? /* @__PURE__ */ a(Ao, {}) : null, onClick: p, size: "medium", variant: "contained", children: A("Remove", S) })
          ] }),
          /* @__PURE__ */ v(es, { ...e, children: [
            w.showColumnsOrder && /* @__PURE__ */ a(
              qn,
              {
                render: (q) => /* @__PURE__ */ a(
                  Te,
                  {
                    ...q,
                    startIcon: /* @__PURE__ */ a(Mo, {}),
                    size: "small",
                    variant: "text",
                    children: A("COLUMNS", S)
                  }
                )
              }
            ),
            w.filter && /* @__PURE__ */ v(ge, { children: [
              /* @__PURE__ */ a(
                Wn,
                {
                  render: (q) => /* @__PURE__ */ a(
                    Te,
                    {
                      ...q,
                      startIcon: /* @__PURE__ */ a(uo, { badgeContent: ee, color: "primary", children: /* @__PURE__ */ a(Io, {}) }),
                      size: "small",
                      variant: "text",
                      children: A("FILTERS", S)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Te, { startIcon: /* @__PURE__ */ a(Oo, {}), onClick: x, size: "small", children: A("CLEAR FILTER", S) })
            ] }),
            w.export && /* @__PURE__ */ a(Zi, { handleExport: T, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: A, tOpts: S }),
            j,
            D && /* @__PURE__ */ a(
              _i,
              {
                gridRef: L,
                preferenceKey: D,
                onPreferenceChange: Q,
                t: A,
                tOpts: S
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Se, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: ce.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: ce.map((q) => /* @__PURE__ */ a(
      Xi,
      {
        column: q,
        filterModel: G,
        setFilterModel: te,
        lookupData: de,
        tTranslate: A,
        tOpts: S
      },
      q.field
    )) }) })
  ] });
}, rs = 50, as = /(\w+)( ASC| DESC)?/i, ns = 6e4, os = 0, is = 1e6, Ae = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, ss = {
  article: /* @__PURE__ */ a(Jn, {}),
  edit: /* @__PURE__ */ a(Sa, {}),
  copy: /* @__PURE__ */ a(_n, {}),
  delete: /* @__PURE__ */ a(Pa, {}),
  history: /* @__PURE__ */ a(Lo, {}),
  download: /* @__PURE__ */ a($o, {})
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
}, ls = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], cs = (e) => e.value ? /* @__PURE__ */ a(Co, { style: { color: "green" } }) : /* @__PURE__ */ a(Pr, { style: { color: "gray" } }), fa = ar("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), ds = ({ params: e, handleSelectRow: t, idProperty: r }) => {
  const n = Yn(), o = e.row[r], i = xa(n, Kn)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    Ba,
    {
      onClick: (f) => {
        f.stopPropagation(), t({ row: e.row });
      },
      checked: i,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, ha = Ca(({
  model: e,
  columns: t,
  api: r,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: s,
  parent: i,
  where: d,
  title: f,
  showPageTitle: y,
  permissions: g,
  selected: u,
  assigned: c,
  available: C,
  disableCellRedirect: l = !1,
  onAssignChange: p,
  customStyle: w,
  onCellClick: x,
  showRowsSelected: T,
  showFullScreenLoader: D,
  customFilters: L,
  onRowDoubleClick: A,
  onRowClick: S = () => {
  },
  gridStyle: G,
  reRenderKey: te,
  additionalFilters: Q,
  onCellDoubleClickOverride: j,
  onAddOverride: X,
  dynamicColumns: B,
  toolbarItems: ee,
  readOnly: ce = !1,
  onListParamsChange: de,
  apiRef: ve,
  baseFilters: q,
  ...W
}) => {
  const [Fe, $] = O({ pageSize: rs, page: 0 }), [z, I] = O({ recordCount: 0, records: null, lookups: {} }), N = !!p, _ = T, [K, re] = O({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [et, Ue] = O(!1), [$e, xt] = O(null), Rt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [Nt, tt] = O(!1), ue = wt(), vt = e.paginationMode === Y.client ? Y.client : Y.server, { t: He, i18n: Lt } = yt(), h = Z(() => ({ t: He, i18n: Lt }), [He, Lt]), [dt, or] = O(""), [Dt, ye] = O(Ji(n || e.defaultSort, Y, as)), Ye = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Ye.items = [], e.defaultFilters.forEach((b) => {
    Ye.items.push(b);
  }));
  const [he, Ie] = O({ ...Ye }), { navigate: De, getParams: Pt, useParams: St, pathname: Tt } = Rr(), { id: Pe } = St() || Pt, Ft = Pe?.split("-")[0], we = ve || va(), { idProperty: se = "id", showHeaderFilters: $t = !0, disableRowSelectionOnClick: ir = !0, hideTopFilters: Et = !0, updatePageTitle: zt = !0, isElasticScreen: rt = !1, navigateBack: sr = !1, selectionApi: Ke = {}, debounceTimeOut: lr = 300, showFooter: cr = !0, disableRowGrouping: Vt = !0 } = e, R = e.readOnly === !0 || ce, xe = e.allowDoubleClick === !1, ae = xr(z), ze = e.showAddIcon === !0, Ve = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: Be, formatDate: At, getApiEndpoint: ut, buildUrl: Ge, setPageTitle: pt } = Le(), [_a, Gt] = O(!1), { timeZone: dr } = Be, at = Z(() => ({ ...Y.permissions, ...e.permissions, ...g }), [e.permissions, g]), Nr = ["isEmpty", "isNotEmpty", "isAnyOf"], Ja = Be.userData || {}, qt = e.columns.find((b) => b.type === "fileUpload")?.field || "", Za = { add: at.add, edit: at.edit, delete: at.delete }, { canAdd: Lr, canEdit: $r, canDelete: zr } = Wa({ userData: Ja, model: e, userDefinedPermissions: Za }), m = e.tTranslate ?? ((b) => b), { addUrlParamKey: Wt, searchParamKey: Ot, hideBreadcrumb: Qa = !1, tableName: Vr, showHistory: Gr = !0, hideBreadcrumbInGrid: Xa = !1, breadcrumbColor: en, disablePivoting: tn = !1, columnHeaderHeight: rn = 70 } = e, qr = e.gridTitle || e.title, Mt = ut("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, _e = new URLSearchParams(window.location.search), [Wr, an] = O(null), [jr, nn] = O(!Mt), ke = r || e.api, [ur, pr] = O(null), on = Z(() => new Set(ur ? [ur] : []), [ur]), sn = typeof e.getDetailPanelContent == "function", [ln, Ur] = O([]);
  fe(() => {
    we.current && (we.current.prefKey = Mt);
  }, [we, Mt]);
  const Hr = F((b) => {
    an(b), nn(!0);
  }, []), cn = Z(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? m(b.headerName, h) : b.headerName
  })) : [], [e.columnGroupingModel, h, He, m]);
  fe(() => {
    Array.isArray(W.rowGroupingField) && Ur(W.rowGroupingField);
  }, [W.rowGroupingField]);
  const fr = _e.has("baseData") && _e.get("baseData"), Yr = Z(() => {
    if (fr)
      try {
        const b = JSON.parse(fr);
        if (typeof b === Y.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [fr]), dn = F(({ row: b }) => {
    const E = b[se];
    re((M) => {
      const P = new Set(M?.ids || []);
      return P.has(E) ? P.delete(E) : P.add(E), { type: "include", ids: P };
    });
  }, [se]), Kr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b) => At({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: Be.dateTime, timeZone: dr }),
      filterOperators: Kt({ columnType: "date", label: m("Value", h) })
    },
    dateTime: {
      valueFormatter: (b) => At({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Be.dateTime, timeZone: dr }),
      filterOperators: Kt({ columnType: "datetime", label: m("Value", h) })
    },
    dateTimeLocal: {
      valueFormatter: (b) => At({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Be.dateTime, timeZone: dr }),
      filterOperators: Kt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: cs
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ a(ds, { params: b, handleSelectRow: dn, idProperty: se })
    }
  };
  fe(() => {
    ae.current = z;
  }, [z]), fe(() => {
    if (!L || !Object.keys(L).length) return;
    if (L.clear) {
      Ie({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(L).reduce((E, [M, P]) => (M === Y.startDate || M === Y.endDate ? E.push(P) : M in L && E.push({ field: M, value: P, operator: "equals", type: "string" }), E), []);
    Ie({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [L]);
  const un = F(({ field: b, lookupMap: E }) => (ae.current.lookups || {})[(E || {})[b]?.lookup] || [], []);
  fe(() => {
    W.isChildGrid;
  }, [W.isChildGrid, Et]);
  const _r = F(
    ({ key: b, title: E, icon: M, color: P = "primary", disabled: k, otherProps: J }) => /* @__PURE__ */ a(
      vr,
      {
        icon: /* @__PURE__ */ a(Bt, { title: m(E, h), children: ss[M] || M || m(E, h) }),
        "data-action": b,
        label: m(E, h),
        color: P,
        disabled: k,
        ...J
      },
      b
    ),
    [He, h, m]
  ), { customActions: jt = [] } = e, Ut = Z(() => {
    const b = [];
    return !N && !R && b.push(
      {
        key: Ae.Edit,
        title: "Edit",
        icon: "edit",
        show: !!$r,
        disabled: (E) => E.canEdit === !1
      },
      {
        key: Ae.Copy,
        title: "Copy",
        icon: "copy",
        show: !!at.copy
      },
      {
        key: Ae.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!zr
      },
      {
        key: Ae.History,
        title: "History",
        icon: "history",
        show: !!Gr
      },
      ...jt
    ), b.push({
      key: Ae.Download,
      title: "Download document",
      icon: "download",
      show: qt.length > 0
    }), b.filter(({ show: E }) => E !== !1);
  }, [
    N,
    R,
    $r,
    zr,
    Gr,
    at.copy,
    qt.length,
    jt
  ]), pn = F(
    ({ row: b }) => Ut.map(
      ({ key: E, title: M, icon: P, color: k, disabled: J, show: V, action: H, ...le }) => _r({
        key: E,
        title: M || H,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: P,
        color: k,
        disabled: J?.(b),
        otherProps: le
      })
    ),
    [Ut, _r]
  ), { gridColumns: Ce, pinnedColumns: Jr, lookupMap: hr } = Z(() => {
    let b = t || e.gridColumns || e.columns;
    B && (b = [...B, ...b]);
    const E = { left: [jn.field], right: [] }, M = [], P = {}, k = { ...Kr, ...e.gridColumnTypes };
    for (const V of b) {
      if (V.gridLabel === null || i && V.lookup === i || V.type === Y.oneToMany && V.countInList === !1) continue;
      const H = {};
      if (V.type === Y.oneToMany && (H.type = "number", H.field = V.field.replace(/s$/, "Count")), k[V.type] && Object.assign(H, k[V.type]), H.valueOptions === Y.lookup || V.type === Y.boolean) {
        let oe = [];
        H.valueOptions === Y.lookup && (H.valueOptions = (ie) => un({ ...ie, lookupMap: P }), oe = [...wa(), ...Un()].filter((ie) => ["is", "not", "isAnyOf"].includes(ie.value))), V.type === Y.boolean && (oe = Hn()), H.filterOperators = oe.map((U) => ({
          ...U,
          InputComponent: U.InputComponent ? (ie) => /* @__PURE__ */ a(
            ji,
            {
              column: {
                ...V,
                ...V.type === Y.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: ae
              },
              ...ie,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (V.linkTo || V.link) && (H.cellClassName = "mui-grid-linkColumn"), Vt || (H.groupable = V.groupable ?? !1);
      const le = m((typeof V.gridLabel == "function" ? V.gridLabel({ column: V, t: m, tOpts: h }) : V.gridLabel) || V.label, h);
      M.push({ ...V, ...H, headerName: le, description: le }), V.pinned && E[V.pinned === Y.right ? Y.right : Y.left].push(V.field), P[V.field] = V;
    }
    let J = e.standard;
    return J === !0 && (J = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), J && typeof J === Y.object && ls.forEach(({ key: V, field: H, type: le, header: oe }) => {
      if (J[V] === !0) {
        const U = { field: H, type: le, headerName: m(oe, h), width: 200 };
        le === Y.dateTime && (U.filterOperators = Kt({ columnType: "date" }), U.valueFormatter = Kr.dateTime.valueFormatter, U.keepLocal = !0), M.push(U);
      }
    }), Ut.length && (M.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? Y.defaultActionWidth) * Ut.length,
      hidable: !1,
      getActions: pn,
      headerName: m("Actions", h)
    }), E.right.push("actions")), { gridColumns: M, pinnedColumns: E, lookupMap: P };
  }, [t, e, i, g, N, B, He]), mr = xr(!1);
  fe(() => {
    if (mr.current) return;
    const b = Ce?.filter((P) => P.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (he.items.some(
      (P) => b.some((k) => k.field === P.field)
    )) {
      mr.current = !0;
      return;
    }
    const M = b.map((P) => ({
      field: P.field,
      operator: Er(P.type, P.toolbarFilter?.defaultOperator),
      value: P.toolbarFilter.defaultFilterValue,
      type: P.type
    }));
    Ie((P) => ({
      ...P,
      items: [...P.items, ...M]
    })), mr.current = !0;
  }, [Ce]);
  const Re = F(async ({ action: b = "list", extraParams: E = {}, isPivotExport: M = !1, contentType: P, columns: k } = {}) => {
    const { pageSize: J, page: V } = Fe, H = !!P, le = Ge(M ? e.pivotApi : ke), oe = { ...he }, U = Array.isArray(q) ? [...q] : [];
    e.joinColumn && Ft && U.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Ft) }), Q && (oe.items = [...oe.items || [], ...Q]);
    const ie = [];
    Array.isArray(U) && ie.push(...U), Array.isArray(s) && ie.push(...s);
    const ft = {
      ...E,
      ...W.extraParams
      // Merge any custom params passed via component props
    };
    if ((c || C) && (ft[c ? "include" : "exclude"] = Array.isArray(u) ? u.join(",") : u), M && (e.exportTemplate && (ft.template = e.exportTemplate), e.configFileName && (ft.configFileName = e.configFileName)), !(!oe.items.length || oe.items.every((ot) => "value" in ot && ot.value !== void 0))) return;
    const gr = {
      action: b,
      page: H ? os : V,
      pageSize: H ? is : J,
      sortModel: Dt,
      filterModel: oe,
      gridColumns: Ce,
      model: e,
      baseFilters: ie,
      api: le,
      extraParams: ft
    };
    typeof de == "function" && de(gr), we.current.listParams = gr, H || Gt(!0);
    try {
      const ot = await Fr({ ...gr, contentType: P, columns: k });
      !H && ot !== void 0 && I(ot);
    } catch (ot) {
      ue.showError("An error occurred while fetching data", ot.message), H || I((En) => ({ ...En, records: [], recordCount: 0 }));
    } finally {
      H || Gt(!1);
    }
  }, [Fe, Ge, e, ke, he, q, Ft, c, C, u, W.extraParams, Dt, Ce, s, de, we, Fr, ue, Q]), nt = F(async ({ id: b, record: E = {}, mode: M }) => {
    if (o) {
      try {
        const k = Ge(ke), J = await Xt({ id: b, api: k, model: e, parentFilters: s, where: d });
        o(J);
      } catch (k) {
        ue.showError("Could not load record", k.message);
      }
      return;
    }
    let P = Tt;
    P.endsWith("/") || (P += "/"), M === "copy" ? P += "0-" + b : P += b, Wt && (_e.set(Wt, E[Wt]), P += `?${_e.toString()}`), De(P);
  }, [o, ke, e, s, d, Tt, Wt, _e, De, Xt, Ge, ue]), Zr = F(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), fn = F(async (b, E, M) => {
    let P = b.field === e.linkColumn ? Ae.Edit : null;
    if (!P && b.field === Y.actions && (P = M?.action, !P)) {
      const le = E.target.closest("button");
      le && (P = le.dataset.action);
    }
    const { row: k } = b;
    if (!R) {
      if (x && typeof await x({ cellParams: b, event: E, details: M }) !== Y.boolean)
        return;
      const le = hr[b.field] || {};
      if (le.linkTo) {
        De({
          pathname: Yt.replaceTags(le.linkTo, k)
        });
        return;
      }
      switch (P) {
        case Ae.Edit:
          if (e.getDetailPanelContent) {
            const U = k[se];
            pr((ie) => ie === U ? null : U);
            return;
          } else
            return nt({ id: k[se], record: k });
        case Ae.Copy:
          return nt({ id: k[se], mode: "copy" });
        case Ae.Delete:
          Ue(!0), xt({ name: k[e.linkColumn], id: k[se] });
          break;
        case Ae.History:
          return De(`${ut("history")}?tableName=${Vr}&id=${k[se]}&breadCrumb=${Ot ? _e.get(Ot) : qr}`);
        default:
          const oe = jt.find((U) => U.action === P && typeof U.onClick === Y.function);
          if (oe) {
            oe.onClick({ row: k, navigate: De });
            return;
          }
          break;
      }
    }
    if (P === Ae.Download && Zr({ documentLink: k[qt] }), !Ve.length)
      return;
    const { row: J } = b, V = hr[b.field] || {}, H = {
      pathname: Yt.replaceTags(V.linkTo, J)
    };
    e.addRecordToState && (H.state = J), De(H);
  }, [R, x, hr, e, se, qt, De, Ve, jt, Vr, Ot, _e, qr, ut, Zr, nt]), hn = F(async () => {
    const b = Ge(ke);
    try {
      await Br({ id: $e.id, api: b, model: e }), ue.showMessage("Record Deleted Successfully."), Re();
    } catch (E) {
      ue.showError("Delete failed", E.message);
    } finally {
      Ue(!1);
    }
  }, [ke, $e?.id, ue, e, Re]), Qr = F(() => {
    or(null), Ue(!1);
  }, []), mn = F((b) => (typeof W.processRowUpdate == "function" && W.processRowUpdate(b, z), b), [W.processRowUpdate, z]), gn = F((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: E } = b;
    if (typeof j === Y.function) {
      j(b);
      return;
    }
    if (!R && !xe && !l && nt({ id: E[se], record: E }), R && e.rowRedirectLink) {
      const M = {
        pathname: Yt.replaceTags(e.rowRedirectLink, E)
      };
      e.addRecordToState && (M.state = E), De(M);
    }
    typeof A === Y.function && A(b);
  }, [j, R, xe, l, nt, se, e.rowRedirectLink, e.addRecordToState, De, A, Yt]), bn = F(async () => {
    if (K.ids.size < 1) {
      ue.showError("Please select at least one record to proceed");
      return;
    }
    const b = Array.from(K.ids), E = new Map((z.records || []).map((k) => [k[se], k]));
    let M = b.map((k) => ({ ...Yr, ...E.get(k) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (M = M.map(
      (k) => Object.fromEntries(e.selectionUpdateKeys.map((J) => [J, k[J]]))
    ));
    const P = Ge(Ke || ke);
    Gt(!0);
    try {
      const k = await kr({
        id: 0,
        api: `${P}/updateMany`,
        values: { items: M },
        model: e
      });
      if (k) {
        Re();
        const J = k.info ? k.info : "Record Added Successfully.";
        ue.showMessage(J);
      }
    } catch (k) {
      ue.showError(k.message || "An error occurred, please try again later.");
    } finally {
      Gt(!1), re({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), tt(!1);
    }
  }, [K.ids, ue, z.records, se, Yr, e.selectionUpdateKeys, Ke, ke, e, Re]), Xr = F(() => {
    if (Ke.length > 0) {
      if (K.ids.size > 0) {
        tt(!0);
        return;
      }
      ue.showError(
        "Please select at least one record to proceed"
      );
      return;
    }
    typeof X === Y.function ? X() : nt({ id: 0 });
  }, [Ke, ue, X, nt, K.ids.size]), ea = F(() => {
    he?.items?.length && Ie({ ...Y.gridFilterModel });
  }, [he]), Ht = F(({ unassign: b, assign: E }) => {
    const M = Array.isArray(u) ? u : u.length ? u.split(",") : [], P = b ? M.filter((k) => !b.includes(parseInt(k))) : [...M, ...E];
    p(typeof u === Y.string ? P.join(",") : P);
  }, [u, p]), ta = F(() => {
    Ht({ assign: Array.from(K.ids) });
  }, [Ht, K.ids]), ra = F(() => {
    Ht({ unassign: Array.from(K.ids) });
  }, [Ht, K.ids]), aa = F(() => {
    const b = z.records || [];
    if (K.ids.size === b.length)
      re({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const M = b.map((P) => P[se]);
      re({
        type: "include",
        ids: new Set(M)
      });
    }
  }, [K, z.records, se]), yn = F((b) => b[se], [se]), na = F((b) => {
    if (z?.recordCount > ns) {
      ue.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: E, columnVisibilityModel: M, lookup: P } = we.current.state.columns, k = b.target.dataset.isPivotExport === "true", J = Object.keys(M).filter((U) => M[U] === !1), V = new Set(Ce.filter((U) => U.exportable === !1).map((U) => U.field)), H = E.filter(
      (U) => !V.has(U) && !J.includes(U) && U !== "__check__" && U !== "actions"
    );
    if (H.length === 0) {
      ue.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const le = {};
    H.forEach((U) => {
      const ie = P[U];
      le[U] = { field: U, width: ie.width, headerName: ie.headerName || ie.field, type: ie.type, keepLocal: ie.keepLocal === !0, isParsable: ie.isParsable, lookup: ie.lookup };
    });
    const oe = e?.formActions?.export || k ? e?.formActions?.export || "export" : void 0;
    Re({
      action: oe,
      isPivotExport: k,
      contentType: b.target.dataset.contentType,
      columns: le
    });
  }, [z?.recordCount, we, Ce, ue, e, Re]);
  fe(() => {
    !ke || !jr || Re();
  }, [ke, jr, Re]), fe(() => {
    if (!(W.isChildGrid || N || !zt))
      return pt({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        pt(null);
      };
  }, [pt, e.pageTitle, e.title, W.isChildGrid, N, zt]);
  const Cn = F((b) => {
    const { items: E } = b, M = E.map((P) => {
      const { field: k, operator: J, type: V, value: H } = P, le = Ce.find((ie) => ie.field === k) || {}, oe = le.type === Y.Number;
      return oe && H < 0 ? { ...P, value: null } : Nr.includes(J) || oe && !isNaN(H) || !oe ? (rt && Ce.filter((ft) => ft.field === k)[0]?.isKeywordField && (P.filterField = `${P.field}.keyword`), P.value = ["isEmpty", "isNotEmpty"].includes(J) ? null : H, { ...P, type: le.type }) : { field: k, operator: J, type: V, value: oe ? null : H };
    });
    b.items = M, Ie(b);
  }, [Ce, Y.Number, Nr, rt, Ie]), wn = F((b) => {
    const E = b.map((M) => {
      const P = Ce.filter((V) => V.field === M.field)[0] || {}, k = rt && P.isKeywordField, J = { ...M, filterField: k ? `${M.field}.keyword` : M.field };
      return P.dataIndex && (J.filterField = P.dataIndex), J;
    });
    ye(E);
  }, [Ce, rt, ye]), oa = f || e.gridTitle || e.title, xn = Ot ? [{ text: _e.get(Ot) || oa }] : [{ text: oa }], vn = F((b) => {
    pr(b.size > 0 ? [...b].pop() : null);
  }, []), Dn = F((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      pr(null), Re();
    },
    t: m,
    tOpts: h
  }) : null, [e.getDetailPanelContent, Re, m, h]), Pn = Z(() => ({
    filterValueTrue: m("Yes", h),
    filterValueFalse: m("No", h),
    noRowsLabel: m("No data", h),
    footerTotalRows: `${m("Total rows", h)}:`,
    MuiTablePagination: {
      labelRowsPerPage: m("Rows per page", h),
      labelDisplayedRows: ({ from: b, to: E, count: M }) => `${b}–${E} ${m("of", h)} ${M}`
    },
    toolbarQuickFilterPlaceholder: m(e?.searchPlaceholder || "Search...", h),
    toolbarColumns: m("Columns", h),
    toolbarFilters: m("Filters", h),
    toolbarExport: m("Export", h),
    filterPanelAddFilter: m("Add filter", h),
    filterPanelRemoveAll: m("Remove all", h),
    filterPanelDeleteIconLabel: m("Delete", h),
    filterPanelColumns: m("Columns", h),
    filterPanelOperator: m("Operator", h),
    filterPanelValue: m("Value", h),
    filterPanelInputLabel: m("Value", h),
    filterPanelInputPlaceholder: m("Filter value", h),
    columnMenuLabel: m("Menu", h),
    columnMenuShowColumns: m("Show columns", h),
    columnMenuManageColumns: m("Manage columns", h),
    columnMenuFilter: m("Filter", h),
    columnMenuHideColumn: m("Hide column", h),
    columnMenuManagePivot: m("Manage pivot", h),
    toolbarColumnsLabel: m("Select columns", h),
    toolbarExportLabel: m("Export", h),
    pivotDragToColumns: m("Drag here to pivot by", h),
    pivotDragToRows: m("Drag here to group by", h),
    pivotDragToValues: m("Drag here to create values", h),
    pivotColumns: m("Pivot columns", h),
    pivotRows: m("Row groups", h),
    pivotValues: m("Values", h),
    pivotMenuRows: m("Rows", h),
    pivotMenuColumns: m("Columns", h),
    pivotMenuValues: m("Values", h),
    pivotToggleLabel: m("Pivot", h),
    pivotSearchControlPlaceholder: m("Search pivot columns", h),
    columnMenuUnsort: m("Unsort", h),
    columnMenuSortAsc: m("Sort by ascending", h),
    columnMenuSortDesc: m("Sort by descending", h),
    columnMenuUnpin: m("Unpin", h),
    columnsPanelTextFieldLabel: m("Find column", h),
    columnsPanelTextFieldPlaceholder: m("Column title", h),
    columnsPanelHideAllButton: m("Hide all", h),
    columnsPanelShowAllButton: m("Show all", h),
    pinToLeft: m("Pin to left", h),
    pinToRight: m("Pin to right", h),
    unpin: m("Unpin", h),
    filterValueAny: m("any", h),
    filterOperatorIs: m("is", h),
    filterOperatorNot: m("is not", h),
    filterOperatorIsAnyOf: m("is any of", h),
    filterOperatorContains: m("contains", h),
    filterOperatorDoesNotContain: m("does not contain", h),
    filterOperatorEquals: m("equals", h),
    filterOperatorDoesNotEqual: m("does not equal", h),
    filterOperatorStartsWith: m("starts with", h),
    filterOperatorEndsWith: m("ends with", h),
    filterOperatorIsEmpty: m("is empty", h),
    filterOperatorIsNotEmpty: m("is not empty", h),
    filterOperatorAfter: m("is after", h),
    filterOperatorOnOrAfter: m("is on or after", h),
    filterOperatorBefore: m("is before", h),
    filterOperatorOnOrBefore: m("is on or before", h),
    toolbarFiltersTooltipHide: m("Hide filters", h),
    toolbarFiltersTooltipShow: m("Show filters", h),
    //filter textfield labels
    headerFilterOperatorContains: m("contains", h),
    headerFilterOperatorEquals: m("equals", h),
    headerFilterOperatorStartsWith: m("starts with", h),
    headerFilterOperatorEndsWith: m("ends with", h),
    headerFilterOperatorIsEmpty: m("is empty", h),
    headerFilterOperatorIsNotEmpty: m("is not empty", h),
    headerFilterOperatorAfter: m("is after", h),
    headerFilterOperatorOnOrAfter: m("is on or after", h),
    headerFilterOperatorBefore: m("is before", h),
    headerFilterOperatorOnOrBefore: m("is on or before", h),
    headerFilterOperatorIs: m("is", h),
    "headerFilterOperator=": m("equals", h),
    "headerFilterOperator!=": m("does not equal", h),
    "headerFilterOperator>": m("greater than", h),
    "headerFilterOperator>=": m("greater than or equal to", h),
    "headerFilterOperator<": m("less than", h),
    "headerFilterOperator<=": m("less than or equal to", h),
    columnsManagementSearchTitle: m("Search", h),
    columnsManagementNoColumns: m("No columns", h),
    paginationRowsPerPage: m("Rows per page", h),
    paginationDisplayedRows: ({ from: b, to: E, count: M }) => `${b}–${E} ${m("of", h)} ${M}`,
    toolbarQuickFilterLabel: m("Search", h),
    toolbarFiltersTooltipActive: (b) => `${b} ${m(b === 1 ? "active filter" : "active filters", h)}`,
    columnHeaderSortIconLabel: m("Sort", h),
    filterPanelOperatorAnd: m("And", h),
    filterPanelOperatorOr: m("Or", h),
    noResultsOverlayLabel: m("No results found", h),
    columnHeaderFiltersTooltipActive: (b) => `${b} ${m(b === 1 ? "active filter" : "active filters", h)}`,
    detailPanelToggle: m("Detail panel toggle", h),
    checkboxSelectionHeaderName: m("Checkbox selection", h),
    columnsManagementShowHideAllText: m("Show/Hide all", h),
    noColumnsOverlayLabel: m("No columns", h),
    noColumnsOverlayManageColumns: m("Manage columns", h),
    columnsManagementReset: m("Reset", h),
    groupColumn: (b) => `${m("Group by", h)} ${b}`,
    unGroupColumn: (b) => `${m("Ungroup", h)} ${b}`,
    footerRowSelected: (b) => {
      const E = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${m(E, h)}`;
    }
  }), [m, h, e?.searchPlaceholder]), Sn = Z(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: z,
      currentPreference: Wr,
      isReadOnly: R,
      canAdd: Lr,
      forAssignment: N,
      showAddIcon: ze,
      onAdd: Xr,
      selectionApi: Ke,
      rowSelectionModel: K,
      selectAll: aa,
      available: C,
      onAssign: ta,
      assigned: c,
      onUnassign: ra,
      effectivePermissions: at,
      clearFilters: ea,
      handleExport: na,
      preferenceKey: Mt,
      apiRef: we,
      gridColumns: Ce,
      tTranslate: m,
      tOpts: h,
      idProperty: se,
      filterModel: he,
      setFilterModel: Ie,
      onPreferenceChange: Hr,
      toolbarItems: ee,
      headerActions: W.headerActions
    },
    footer: {
      pagination: !0,
      apiRef: we,
      tTranslate: m,
      tOpts: h
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: m("Go to previous page", h),
        "aria-label": m("Go to previous page", h)
      },
      nextIconButtonProps: {
        title: m("Go to next page", h),
        "aria-label": m("Go to next page", h)
      }
    }
  }), [e, z, Wr, R, Lr, N, ze, Xr, Ke, K, aa, C, ta, c, ra, at, ea, na, Mt, we, Ce, m, h, se, he, Ie, Hr, ee, W.headerActions]), Tn = Z(() => ({
    columns: {
      columnVisibilityModel: Rt
    },
    pinnedColumns: Jr
  }), [Rt, Jr]), Fn = Z(() => ({
    headerFilterMenu: !1,
    toolbar: ts,
    footer: mi
  }), []);
  return /* @__PURE__ */ v(ge, { children: [
    y !== !1 && /* @__PURE__ */ a(
      qa,
      {
        navigate: De,
        showBreadcrumbs: !Qa && !Xa,
        breadcrumbs: xn,
        enableBackButton: sr,
        breadcrumbColor: en,
        model: e
      }
    ),
    /* @__PURE__ */ v(Se, { style: G || w, children: [
      /* @__PURE__ */ a(Se, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        Da,
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
          headerFilters: $t,
          unstable_headerFilters: $t,
          checkboxSelection: N,
          loading: !z.records || _a,
          className: "pagination-fix",
          onCellClick: fn,
          onCellDoubleClick: gn,
          columns: Ce,
          paginationModel: Fe,
          pageSizeOptions: Y.pageSizeOptions,
          onPaginationModelChange: $,
          pagination: !0,
          rowCount: z.recordCount,
          rows: z.records || [],
          sortModel: Dt,
          paginationMode: vt,
          sortingMode: vt,
          filterMode: vt,
          processRowUpdate: mn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: wn,
          onFilterModelChange: Cn,
          rowSelectionModel: K,
          onRowSelectionModelChange: re,
          filterModel: he,
          getRowId: yn,
          onRowClick: S,
          slots: Fn,
          slotProps: Sn,
          hideFooterSelectedRowCount: _,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: we,
          disableAggregation: !0,
          disableRowGrouping: Vt,
          disableRowSelectionOnClick: ir,
          disablePivoting: tn,
          filterDebounceMs: lr,
          initialState: Tn,
          ...sn && {
            getDetailPanelContent: Dn,
            detailPanelExpandedRowIds: on,
            onDetailPanelExpandedRowIdsChange: vn
          },
          localeText: Pn,
          showToolbar: !0,
          columnHeaderHeight: rn,
          hideFooter: !cr,
          rowGroupingModel: ln,
          onRowGroupingModelChange: (b) => Ur(b),
          getRowClassName: W.getRowClassName,
          columnGroupingModel: cn
        }
      ) }),
      dt && /* @__PURE__ */ v(je, { open: !!dt, onConfirm: Qr, onCancel: Qr, title: "Info", hideCancelButton: !0, children: [
        " ",
        dt
      ] }),
      et && !dt && /* @__PURE__ */ a(je, { open: et, onConfirm: hn, onCancel: () => Ue(!1), title: m("Confirm Delete", h), okText: m("Ok", h), cancelText: m("Cancel", h), children: /* @__PURE__ */ v(fa, { children: [
        m("Are you sure you want to delete", h),
        " ",
        $e.name && /* @__PURE__ */ a(Bt, { style: { display: "inline" }, title: $e.name, arrow: !0, children: $e.name.length > 30 ? `${$e.name.slice(0, 30)}...` : $e.name }),
        " ?"
      ] }) }),
      Nt && /* @__PURE__ */ a(
        je,
        {
          open: Nt,
          onConfirm: bn,
          onCancel: () => tt(!1),
          title: m("Confirm Add", h),
          okText: m("Ok", h),
          cancelText: m("Cancel", h),
          children: /* @__PURE__ */ v(fa, { children: [
            m("Are you sure you want to add", h),
            " ",
            K.ids.size,
            " ",
            m("records", { count: K.ids.size, ...h }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, Qi), us = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = (d) => {
    r.setFieldValue(t, d.target.checked);
  }, s = Z(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ a(
      qo,
      {
        control: /* @__PURE__ */ a(
          Ba,
          {
            ...n,
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
    /* @__PURE__ */ a(ct, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, Ar = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = Ct(), s = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ a(
    rr,
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
      ...n,
      defaultValue: e.defaultValue
    },
    t
  );
};
function ja(e, t) {
  const [r, n] = O(e);
  return fe(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}
const ma = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, ps = {
  outlined: ho,
  filled: fo,
  standard: po
}, fs = () => /* @__PURE__ */ v(
  Ta,
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
        Qt.Increment,
        {
          render: /* @__PURE__ */ a(Zt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ a(
            Wo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        Qt.Decrement,
        {
          render: /* @__PURE__ */ a(Zt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ a(
            ka,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), hs = ({ column: e, otherProps: t, formik: r, field: n, ...o }) => {
  const { min: s, max: i, readOnly: d } = e, f = Ct(), y = Z(
    () => ma({ value: s, state: r.values }),
    [s, r.values]
  ), g = Z(
    () => ma({ value: i, state: r.values }),
    [i, r.values]
  ), u = Z(() => r.values[n] ?? null, [r.values[n]]), [c, C] = O(u), l = ja(c, 400);
  fe(() => {
    l !== u && r.setFieldValue(n, l);
  }, [l]), fe(() => {
    u !== c && C(u);
  }, [u]);
  const p = (A) => {
    C(A);
  }, w = (A) => {
    r.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(A);
  }, x = An(), T = `number-field-${n}-${x}`, D = e.variant || "standard", L = ps[D];
  return /* @__PURE__ */ v(
    Qt.Root,
    {
      value: c,
      onValueChange: p,
      min: y,
      max: g,
      disabled: d,
      render: (A, S) => /* @__PURE__ */ a(
        bt,
        {
          fullWidth: !0,
          ref: A.ref,
          error: r.touched[n] && !!r.errors[n],
          sx: d ? {
            backgroundColor: f.palette?.action?.disabled
          } : void 0,
          children: A.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          Qt.Input,
          {
            render: (A, S) => /* @__PURE__ */ a(
              L,
              {
                id: T,
                inputRef: A.ref,
                value: S.inputValue,
                onChange: A.onChange,
                onBlur: (G) => {
                  A.onBlur(G), w(G);
                },
                inputProps: {
                  ...A,
                  "aria-describedby": r.touched[n] && r.errors[n] ? `${T}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(fs, {}),
                sx: { pr: 0 },
                ...t
              }
            )
          }
        ),
        r.touched[n] && r.errors[n] && /* @__PURE__ */ v(ct, { id: `${T}-error`, error: !0, children: [
          " ",
          r.errors[n],
          " "
        ] })
      ]
    }
  );
}, ms = ({ otherProps: e, ...t }) => {
  const [r, n] = gt.useState(!1), o = () => n((f) => !f), s = (f) => {
    f.preventDefault();
  }, { readOnly: i = !1, disabled: d = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: d,
      endAdornment: /* @__PURE__ */ a(Ta, { position: "end", children: /* @__PURE__ */ a(
        Zt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: s,
          edge: "end",
          disabled: d,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ a(jo, {}) : /* @__PURE__ */ a(Uo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(Ar, { otherProps: e, ...t });
}, gs = ({ column: e, field: t, formik: r, otherProps: n, fieldConfigs: o = {}, mode: s }) => {
  const i = s !== "copy" && o.disabled, { systemDateTimeFormat: d, stateData: f } = Le();
  return /* @__PURE__ */ Mr(
    Fa,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: d(!0, !1, f.dateTime),
      name: t,
      value: ne(r.values[t]),
      onChange: (y) => {
        const u = ne(y).hour(12).toISOString();
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
}, bs = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: s } = Le();
  return /* @__PURE__ */ Mr(
    Sr,
    {
      ...n,
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
}, ys = ({ column: e, field: t, formik: r, otherProps: n }) => {
  let o = r.values[t];
  return e.isUtc && (o = ne.utc(o).utcOffset(ne().utcOffset(), !0).format()), /* @__PURE__ */ Mr(
    Ho,
    {
      ...n,
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
}, Cs = [null, void 0, ""];
function Ua({ column: e, formik: t, lookups: r, dependsOn: n = [], isAutoComplete: o = !1, userSelected: s, model: i }) {
  const [d, f] = O([]), { buildUrl: y } = Le(), g = wt(), u = y(i.api), c = Z(() => {
    const p = {};
    if (!n.length) return p;
    for (const w of n)
      p[w] = t.values[w];
    return p;
  }, n.map((p) => t.values[p])), C = Z(() => n.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, n]), l = F(async () => {
    if (!e.lookup) return;
    if (!Object.values(c).every(
      (w) => !Cs.includes(w)
    )) {
      f([]);
      return;
    }
    try {
      const w = await za({
        api: u,
        model: i,
        lookups: r,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: c }] }
        }
      });
      f(w);
    } catch (w) {
      g.showError("Could not load lookups", w.message);
    }
  }, [e.lookup, c, u, i, r, g]);
  return fe(() => {
    n.length ? l() : (o || !s.current) && f(C || []);
  }, [n.length, l, o, C]), d;
}
const ws = gt.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], model: s, ...i }) => {
  const d = gt.useRef(!1), { placeHolder: f } = e, y = Ua({ column: e, formik: r, lookups: n, dependsOn: o, userSelected: d, model: s }), g = Ct(), u = Z(() => {
    let C = r.values[t];
    if (y?.length && !C && !e.multiSelect && "IsDefault" in y[0]) {
      const l = y.find((p) => p.IsDefault);
      l && (C = l.value, r.setFieldValue(t, l.value));
    }
    return e.multiSelect && (!C || C.length === 0 ? C = [] : Array.isArray(C) || (C = C.split(",").map((l) => parseInt(l)))), C;
  }, [r.values[t], y, e.multiSelect, t]), c = F((C) => {
    typeof e.onChange == "function" && e.onChange({ formik: r, value: C.target.value, options: y, event: C }), r.handleChange(C), d.current = !0;
  }, [r.values[t], e.onChange, y]);
  return /* @__PURE__ */ v(
    nr,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(Yo, { children: f || "" }),
        /* @__PURE__ */ a(
          Ko,
          {
            IconComponent: ka,
            ...i,
            name: t,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${u}`,
            onChange: c,
            onBlur: r.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? g.palette?.action?.disabled : ""
            },
            children: Array.isArray(y) && y.map((C) => /* @__PURE__ */ a(Ia, { value: C.value, disabled: C.isDisabled, children: C.label }, C.value))
          }
        ),
        /* @__PURE__ */ a(ct, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), ga = ar("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), xs = ({ component: e, name: t, formik: r, field: n, column: o }) => {
  const { value: s } = r.getFieldProps(t || n), { setFieldValue: i } = r, d = e || o.relation, f = F((y) => {
    i(t || n, y);
  }, [i, t, n]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ a(ga, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(d, { selected: s, available: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(ga, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(d, { selected: s, assigned: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, vs = ({ field: e, formik: t, orientation: r = "row", label: n, lookups: o, fieldConfigs: s = {}, mode: i, ...d }) => {
  const f = (C) => {
    t.setFieldValue(e, C.target.value);
  }, y = o ? o[d.column.lookup] : [], g = Ct(), u = t.touched[e] && !!t.errors[e], c = i !== "copy" && s.disabled;
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ a(bt, { component: "fieldset", error: u, children: /* @__PURE__ */ a(
      Ir,
      {
        row: r === "row",
        "aria-label": n,
        name: e,
        value: t.values[e] ?? "",
        onChange: f,
        children: y?.map((C, l) => /* @__PURE__ */ a(
          lt,
          {
            value: C.value,
            control: /* @__PURE__ */ a(mt, {}),
            label: C.label,
            disabled: c
          },
          l
        ))
      }
    ) }),
    u && /* @__PURE__ */ a(ct, { style: { color: g.palette.error.main }, children: t.errors[e] })
  ] });
}, Ds = {
  limitTags: 5
}, Ps = Ne.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], fieldConfigs: s = {}, mode: i, model: d, ...f }) => {
  const y = Ua({ column: e, formik: r, lookups: n, dependsOn: o, model: d, isAutoComplete: !0 });
  let g = r.values[t] || [];
  Array.isArray(g) || (g = g.split(", ").map(Number));
  const u = y.filter((l) => g.includes(l.value)) || [], c = i !== "copy" && s.disabled, C = (l, p) => {
    let w = p?.map((x) => x.value) || [];
    e.dataFormat !== "array" && (w = w.length ? w.join(", ") : ""), r.setFieldValue(t, w);
  };
  return /* @__PURE__ */ v(
    nr,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ a(
          Ra,
          {
            ...f,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || Ds.limitTags,
            options: y || [],
            getOptionLabel: (l) => l.label || "",
            defaultValue: u,
            renderInput: (l) => /* @__PURE__ */ a(rr, { ...l, variant: "standard" }),
            onChange: C,
            value: u,
            size: "small",
            disabled: c
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ a(ct, { children: r.errors[t] })
      ]
    },
    t
  );
}), Ss = "#182eb5", Ts = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Fs = mo(go)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Ss : "#ffffff",
  border: `1px solid ${Qo[500]}`,
  color: t ? "white" : "black"
})), Es = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ a(
  Fs,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), As = ({ name: e, field: t, formik: r, expired: n }) => {
  const { setFieldValue: o } = r, { value: s } = r.getFieldProps(e || t), i = "1000001", d = "0111110", f = "0".repeat(7), [y, g] = O(s || f), [u, c] = O(() => s ? s === i ? i : s === d ? d : "Custom" : ""), [C, l] = O(!1), p = F((T) => {
    if (Array.isArray(T)) {
      let D = f;
      for (const L of T)
        D = D.substring(0, L) + "1" + D.substring(L + 1);
      g(D), o(e || t, D), l(!0);
    } else {
      let D = C ? f : y;
      const L = D.slice(0, T) + (D[T] === "1" ? "0" : "1") + D.slice(T + 1);
      g(L), o(e || t, L), c("Custom"), l(!1);
    }
  }, [C, f, y, e, t, o]), w = Ct(), x = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ a(bt, { component: "fieldset", error: x, children: /* @__PURE__ */ v(
      Ir,
      {
        row: !0,
        name: e || t,
        value: u,
        onChange: (T) => {
          const D = T.target.value;
          c(D), D !== "Custom" ? (g(D), o(e || t, D), l(!0)) : (g(f), o(e || t, f), l(!1));
        },
        children: [
          /* @__PURE__ */ a(lt, { value: i, control: /* @__PURE__ */ a(mt, {}), label: "Weekends (Sat - Sun)", onClick: () => p([0, 6]) }),
          /* @__PURE__ */ a(lt, { value: d, control: /* @__PURE__ */ a(mt, {}), label: "Weekdays (Mon - Fri)", onClick: () => p([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(lt, { value: "Custom", control: /* @__PURE__ */ a(mt, {}), label: "Specific days" }),
          Ts.map((T, D) => /* @__PURE__ */ a(
            Es,
            {
              day: T,
              onClick: () => p(D),
              isSelected: u === "Custom" && y[D] === "1",
              disabled: n
            },
            T.value
          ))
        ]
      }
    ) }),
    x && /* @__PURE__ */ a(ct, { style: { color: w.palette.error.main }, children: r.errors[t] })
  ] });
}, Os = ({ isAdd: e, column: t, field: r, formik: n, otherProps: o, fieldConfigs: s = {}, mode: i }) => {
  const d = Ct();
  let f = n.values[r] || [];
  Array.isArray(f) || (f = f.split(",").map((c) => c.trim()));
  const y = Ne.useMemo(() => i === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: n }) : !!t.disabled, [i, s.disabled, t.disabled]), g = t.hasDefault && !e ? [f[0]] : [], u = F((c, C, l, p = {}) => {
    const w = C.pop()?.trim();
    C.includes(w) || C.push(w), g && g.includes(p.option) && l === "removeOption" && (C = [p.option]), t.dataFormat !== "array" && (C = C.length ? C.join(",") : ""), n.setFieldValue(r, C);
  }, [n, r]);
  return /* @__PURE__ */ v(
    nr,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[r] && !!n.errors[r],
      children: [
        /* @__PURE__ */ a(
          Ra,
          {
            ...o,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: f,
            options: [],
            renderInput: (c) => /* @__PURE__ */ a(
              rr,
              {
                ...c,
                variant: "standard",
                InputProps: {
                  ...c.InputProps,
                  sx: {
                    ...c.InputProps?.sx,
                    ...y && { backgroundColor: d.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: u,
            size: "small",
            renderTags: (c, C) => c.map((l, p) => {
              const { key: w, ...x } = C({ index: p });
              return /* @__PURE__ */ a(
                ei,
                {
                  label: l,
                  ...x,
                  disabled: g.includes(l)
                },
                w
              );
            }),
            disabled: y
          }
        ),
        n.touched[r] && n.errors[r] && /* @__PURE__ */ a(ct, { children: n.errors[r] })
      ]
    },
    r
  );
}, Ms = (e = []) => {
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
function Is({ column: e, field: t, formik: r, lookups: n, fieldConfigs: o, mode: s }) {
  const i = n ? n[e.lookup] : [], d = Ms(i), f = r.values[t]?.length ? r.values[t].split(", ") : [];
  let y;
  return s !== "copy" && (y = o?.disabled), /* @__PURE__ */ a(Qe, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    ti,
    {
      selectedItems: f,
      onSelectedItemsChange: (u, c) => {
        r.setFieldValue(t, c?.join(", ") || "");
      },
      disabled: y,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((u) => /* @__PURE__ */ a(da, { itemId: u.value, label: u.label, children: u.children.map((c) => /* @__PURE__ */ a(da, { itemId: c.value, label: c.label }, c.value)) }, u.value))
    }
  ) });
}
const Bs = { maxLength: 500 }, { errorMapping: ks } = Ze, Rs = 1024 * 1024;
function Ns({ column: e, field: t, formik: r }) {
  const n = r.values[t] || "", { getApiEndpoint: o } = Le(), { maxSize: s, formats: i } = e, d = o("upload"), f = o("media"), y = o(), [g, u] = O({
    isExternal: "no",
    selectedFile: null
  }), [c, C] = O(!1), l = wt(), { getParams: p, useParams: w } = Rr(), { associationId: x } = w() || p, T = x?.split("-")[0] || 1, D = (j) => {
    const X = j.target.value;
    u({
      ...g,
      isExternal: X,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, L = (j) => {
    r.setFieldValue(t, j.target.value);
  }, A = (j) => {
    const X = j.target.files[0];
    if (X) {
      if (s && X.size > s * Rs) {
        l.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(X.type)) {
        l.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      u((B) => ({ ...B, selectedFile: X }));
    }
  }, S = async () => {
    if (g.selectedFile) {
      C(!0);
      try {
        const j = new FormData();
        j.append("file", g.selectedFile), j.append("DocumentGroupId", r.values.DocumentGroupId), j.append("AssociationId", T);
        const B = (await $a({
          method: "POST",
          url: d,
          data: j,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!B.success) {
          l.showError(B.message || "Upload failed");
          return;
        }
        const ee = f + "/" + B.filePath;
        r.setFieldValue(t, ee);
      } catch (j) {
        const X = (j.message.match(/status code (\d{3})/) || [])[1];
        l.showError(ks[X]);
      } finally {
        C(!1);
      }
    }
  }, G = new URL(y, window.location.origin).hostname.toLowerCase();
  gt.useEffect(() => {
    u({
      ...g,
      isExternal: n.toLowerCase().includes(G) ? "no" : "yes"
    });
  }, [n, u]);
  const te = r.values[t]?.length > (e.max || Bs.maxLength), Q = te ? "red" : "";
  return /* @__PURE__ */ v(Se, { children: [
    /* @__PURE__ */ v(Se, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Oe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ v(
        Ir,
        {
          row: !0,
          value: g.isExternal,
          onChange: D,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ a(lt, { value: "yes", control: /* @__PURE__ */ a(mt, {}), label: "Yes" }),
            /* @__PURE__ */ a(lt, { value: "no", control: /* @__PURE__ */ a(mt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v(Se, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Oe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ v(Se, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        g.isExternal === "yes" ? /* @__PURE__ */ a(
          st,
          {
            fullWidth: !0,
            value: n,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: Q },
                "&.Mui-focused fieldset": { borderColor: Q },
                "&:hover fieldset": { borderColor: Q }
              }
            },
            onChange: L,
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
        te && /* @__PURE__ */ v(Oe, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    g.isExternal === "no" && /* @__PURE__ */ v(Se, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ v(
        it,
        {
          variant: "outlined",
          component: "label",
          disabled: c,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: A })
          ]
        }
      ),
      g.selectedFile && /* @__PURE__ */ a(Bt, { title: g.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Oe, { variant: "body2", children: g.selectedFile.name.length > 20 ? `${g.selectedFile.name.substring(0, 20)}...` : g.selectedFile.name }) }),
      /* @__PURE__ */ a(
        it,
        {
          variant: "contained",
          color: "primary",
          onClick: S,
          disabled: !g.selectedFile || c,
          children: c ? /* @__PURE__ */ a(bo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Ls = ({ field: e, formik: t }) => {
  const [r, n] = Ne.useState({}), o = ja(r, 300);
  Ne.useEffect(() => {
    if (t.values[e])
      try {
        const i = JSON.parse(t.values[e]);
        n(i);
      } catch {
        n({});
      }
  }, [t.values[e]]), Ne.useEffect(() => {
    const i = JSON.stringify(o);
    t.values[e] !== i && t.setFieldValue(e, i);
  }, [o, e, t, t.values[e]]);
  const s = (i, d) => {
    const f = { ...r, [i]: d };
    n(f);
  };
  return /* @__PURE__ */ a(
    nr,
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
            /* @__PURE__ */ v(It, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ a(
              ri,
              {
                id: i,
                name: i,
                value: r[i],
                onChange: (d) => s(i, d.target.value),
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
}, $s = {
  boolean: us,
  select: ws,
  string: Ar,
  number: hs,
  password: ms,
  date: gs,
  dateTime: bs,
  time: ys,
  oneToMany: xs,
  radio: vs,
  autocomplete: Ps,
  dayRadio: As,
  email: Ar,
  chipInput: Os,
  treeCheckbox: Is,
  fileUpload: Ns,
  json: Ls
}, ba = { paddingTop: "2.5px", paddingBottom: "2.5px" }, zs = Xo("span")({
  color: "red !important"
}), Ha = (e) => {
  const { t, i18n: r } = yt(), n = Ne.useMemo(() => ({ t, i18n: r }), [t, r]), o = e?.tTranslate ?? ((s) => s);
  return { translate: t, i18n: r, tOpts: n, tTranslate: o };
}, Vs = ({ tabColumns: e, model: t, formik: r, data: n, onChange: o, combos: s, lookups: i, fieldConfigs: d, mode: f, handleSubmit: y }) => {
  const [g, u] = Ne.useState(/* @__PURE__ */ new Set()), { tOpts: c, tTranslate: C } = Ha(t), { activeStep: l, setActiveStep: p } = Ne.useContext(Ka), w = {};
  for (let S = 0, G = t.columns.length; S < G; S++) {
    const { field: te, skip: Q } = t.columns[S];
    Q && (w[Q.step] = r.values[te]);
  }
  const x = (S) => g.has(S) || w[S], T = () => {
    for (let S = l + 1; S < e.length; S++)
      if (!x(S))
        return !1;
    return !0;
  }, D = () => {
    let S = l + 1;
    for (; w[S]; )
      S++;
    u((G) => new Set(G).add(l)), S >= e.length || T() ? y() : p(S);
  }, L = () => {
    let S = l - 1;
    for (; w[S] && S > 0; )
      S--;
    p(S);
  };
  if (!e?.length)
    return null;
  const A = e[l];
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ a(_o, { activeStep: l, sx: { marginBottom: "20px" }, children: e.map(({ title: S, key: G }, te) => /* @__PURE__ */ a(Jo, { completed: x(te), children: /* @__PURE__ */ a(Zo, { children: /* @__PURE__ */ a(Oe, { sx: { fontSize: "20px" }, children: C(S, c) }) }) }, G)) }),
    /* @__PURE__ */ v(Ne.Fragment, { children: [
      /* @__PURE__ */ a(Ya, { formElements: A.items, model: t, formik: r, data: n, onChange: o, combos: s, lookups: i, fieldConfigs: d, mode: f }),
      /* @__PURE__ */ v(Qe, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        l !== 0 ? /* @__PURE__ */ a(Te, { color: "inherit", disabled: l === 0, onClick: L, variant: "contained", sx: { mr: 2 }, children: C("Back", c) }) : null,
        /* @__PURE__ */ a(Te, { onClick: D, variant: "contained", children: T() ? C("Finish", c) : C("Next", c) })
      ] })
    ] })
  ] });
}, Ya = ({ formElements: e, model: t, formik: r, data: n, onChange: o, combos: s, lookups: i, fieldConfigs: d, mode: f, isAdd: y }) => {
  const { tOpts: g, tTranslate: u } = Ha(t);
  return e?.length ? /* @__PURE__ */ a(ge, { children: e.map(({ Component: c, column: C, field: l, label: p, otherProps: w }, x) => {
    const T = typeof C.relation == "function";
    return /* @__PURE__ */ v(Cr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: T ? "flex-start" : "center", children: [
      C?.showLabel !== !1 ? /* @__PURE__ */ a(Cr, { size: { xs: 3 }, sx: ba, children: /* @__PURE__ */ v(Oe, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        u(C.label || l, g),
        ": ",
        C.required && /* @__PURE__ */ a(zs, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ a(Cr, { size: { xs: T ? 12 : 9 }, sx: ba, children: /* @__PURE__ */ a(c, { isAdd: y, model: t, fieldConfigs: d[l], mode: f, column: C, field: l, label: p, formik: r, data: n, onChange: o, combos: s, lookups: i, ...w }) })
    ] }, x);
  }) }) : null;
}, Gs = function({ columns: e, tabs: t = {}, id: r, searchParams: n }) {
  const o = [], s = {};
  for (const d in t)
    s[d] = [];
  for (const d of e) {
    const f = d.type;
    if (d.label === null)
      continue;
    const { field: y, label: g, tab: u } = d, c = {};
    d.options && (c.options = d.options), d.dependsOn && (c.dependsOn = d.dependsOn);
    const C = $s[f];
    if (!C || d.hideInAddGrid && r === "0")
      continue;
    (u && t[u] ? s[u] : o).push({ Component: C, field: y, label: g, column: { ...d, readOnly: n.has("showRelation") || d.readOnly }, otherProps: c });
  }
  const i = [];
  for (const d in s)
    i.push({ key: d, title: t[d], items: s[d] });
  return { formElements: o, tabColumns: i };
}, qs = ({ model: e, formik: t, data: r, combos: n, onChange: o, lookups: s, id: i, fieldConfigs: d, mode: f, handleSubmit: y }) => {
  const g = Ze.emptyIdValues.includes(i), { formElements: u, tabColumns: c } = Ne.useMemo(() => {
    const C = e.formConfig?.showTabbed, l = new URLSearchParams(window.location.search), { formElements: p, tabColumns: w } = Gs({ columns: e.columns, tabs: C ? e.tabs : {}, id: i, searchParams: l });
    return { formElements: p, tabColumns: w, showTabs: C && w.length > 0 };
  }, [e]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ a(Ya, { isAdd: g, formElements: u, model: e, formik: t, data: r, onChange: o, combos: n, lookups: s, fieldConfigs: d, mode: f }),
    /* @__PURE__ */ a("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ a(Vs, { tabColumns: c, model: e, formik: t, data: r, onChange: o, combos: n, lookups: s, fieldConfigs: d, mode: f, handleSubmit: y }) })
  ] });
};
function Ws(e) {
  const { children: t, value: r, index: n, ...o } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      hidden: r !== n,
      id: `simple-tabpanel-${n}`,
      "aria-labelledby": `simple-tab-${n}`,
      ...o,
      children: r === n && /* @__PURE__ */ a(Qe, { sx: { p: 3 }, children: t })
    }
  );
}
function js(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const Us = Ca(({ relation: e, parentFilters: t, parent: r, where: n, models: o, readOnly: s }) => {
  const i = o.find(({ name: y }) => y === e);
  if (!i) return null;
  const d = { ...i, hideBreadcrumb: !0 }, f = d instanceof er ? d : new er(d);
  return f ? /* @__PURE__ */ a(
    f.ChildGrid,
    {
      readOnly: s,
      parentFilters: t,
      parent: r,
      model: d,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), Hs = gt.memo(({ relations: e, parent: t, where: r = [], models: n, relationFilters: o, readOnly: s }) => {
  const [i, d] = O(0);
  return /* @__PURE__ */ v(Qe, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(Qe, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(ni, { value: i, onChange: (y, g) => {
      d(g);
    }, "aria-label": "relations tabs", children: e.map((y, g) => {
      const u = n.find(({ name: C }) => C === y) || {}, c = u.listTitle || u.title || y;
      return /* @__PURE__ */ a(
        ai,
        {
          label: c,
          ...js(g)
        },
        y
      );
    }) }) }),
    e.map((y, g) => /* @__PURE__ */ a(Ws, { value: i, index: g, children: /* @__PURE__ */ a(
      Us,
      {
        readOnly: s,
        relation: y,
        models: n,
        parentFilters: o[y] || [],
        parent: t,
        where: r
      },
      y
    ) }, y))
  ] });
}), Ka = tr(1), Ys = {}, me = {
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
}, Ks = ({
  model: e,
  api: t,
  models: r,
  relationFilters: n = {},
  permissions: o = {},
  Layout: s = qs,
  baseSaveData: i = {},
  sx: d,
  readOnly: f,
  beforeSubmit: y,
  deletePromptText: g,
  detailPanelId: u = null,
  // Grid Row Detail Panel Id
  onCancel: c,
  onSaveSuccess: C
}) => {
  const l = e.formTitle || e.title, { t: p, i18n: w } = yt(), x = Z(() => ({ t: p, i18n: w }), [p, w]), T = e?.tTranslate ?? ((R) => R), { navigate: D, getParams: L, useParams: A, pathname: S } = Rr(), { relations: G = [] } = e, { stateData: te, buildUrl: Q, setPageTitle: j } = Le(), X = A() || L, { id: B = "" } = X, ee = u || B.split("-")[me.editIdIndex], ce = new URLSearchParams(window.location.search), de = ce.has(me.baseData) && ce.get(me.baseData);
  if (de) {
    const R = JSON.parse(de);
    typeof R === me.object && R !== null && (i = { ...i, ...R });
  }
  const [ve, q] = O(!0), [W, Fe] = O({}), [$, z] = O({}), [I, N] = O(!1), _ = wt(), [K, re] = O(null), [et, Ue] = O(0), [$e, xt] = O(!1), [Rt, Nt] = O(null), [tt, ue] = O(""), vt = typeof e.applyFieldConfig === me.function ? e.applyFieldConfig({ data: W, lookups: $ }) : Ys, He = Q(e.api), Lt = B.includes("-") && B.split("-")[0] === "0" ? "copy" : "", h = te.userData || {}, dt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: or } = Wa({
    userData: h,
    model: e,
    userDefinedPermissions: dt
  }), { hideBreadcrumb: Dt = !1, navigateBack: ye } = e, Ye = !("canEdit" in W) || W.canEdit, he = F(() => {
    let R;
    switch (typeof ye) {
      case me.function:
        R = ye({ params: X, searchParams: ce, data: W });
        break;
      case me.number:
      case me.string:
        R = ye;
        break;
      default:
        R = S.substring(0, S.lastIndexOf("/"));
        break;
    }
    D(R);
  }, [ye, D, X, ce, W, S]), Ie = Z(() => Ze.emptyIdValues.includes(ee), [ee]), De = Z(() => Ie ? { ...e.initialValues, ...W, ...i } : { ...i, ...e.initialValues, ...W }, [e.initialValues, W, ee]), Pt = t || He, St = Z(() => {
    if (u)
      return u;
    const R = B.split("-");
    return R.length > 1 ? R[me.loadIdIndex] : ee;
  }, [u, B, ee]), Tt = F(async () => {
    q(!0);
    try {
      const R = await Xt({
        api: Pt,
        model: e,
        id: St
      });
      se(R);
    } catch (R) {
      we("Could not load record", R.message);
    } finally {
      q(!1);
    }
  }, [Pt, e, St]);
  fe(() => {
    re(e.getValidationSchema({ id: ee, snackbar: _ })), Tt();
  }, [ee, St, e, Pt, _, re, Tt]);
  const Pe = Ma({
    enableReinitialize: !0,
    initialValues: De,
    validationSchema: K,
    validateOnBlur: !1,
    onSubmit: async (R, { resetForm: xe }) => {
      Object.keys(R).forEach((ae) => {
        typeof R[ae] === me.string && (R[ae] = R[ae].trim());
      }), q(!0), kr({
        id: ee,
        api: He,
        values: R,
        model: e
      }).then((ae) => {
        if (!ae) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof C === me.function && C();
        const ze = ae.info ? ae.info : `Record ${ee === 0 ? "Added" : "Updated"} Successfully.`;
        _.showMessage(ze), ye !== !1 && he(), xe({ values: Pe.values });
      }).catch((ae) => {
        _.showError(
          "An error occured.",
          ae
        ), e.reloadOnSave && xe();
      }).finally(() => {
        q(!1);
      });
    }
  }), Ft = F(() => {
    Pe.resetForm(), xt(!1), typeof c === me.function && c(), ye !== !1 && he();
  }, [Pe, c, ye, he]), we = F((R, xe) => {
    q(!1), _.showError(R, xe), he();
  }, [_, he]), se = function({ id: R, title: xe, record: ae, lookups: ze }) {
    const Ve = B.indexOf("-") > -1, Be = !R || R === "0", At = Be ? me.create : Ve ? me.copy : me.edit, ut = Be ? "" : ae[e.linkColumn], Ge = [{ text: e.breadCrumbs }, { text: At }];
    Ve && (ae[e.linkColumn] = ""), e.columns.forEach((pt) => {
      pt.skipCopy && Ve && (ae[pt.field] = "");
    }), Fe(ae), z(ze), q(!1), ut !== "" && Ge.push({ text: ut }), j({
      showBreadcrumbs: !0,
      breadcrumbs: Ge
    });
  }, $t = F((R) => {
    Pe.dirty && Ye ? xt(!0) : (typeof c === me.function && c(), ye !== !1 && he()), R.preventDefault();
  }, [Pe.dirty, Ye, c, ye, he]), ir = F(async () => {
    try {
      N(!0), await Br({
        id: ee,
        api: t || e.api,
        model: e
      }) === !0 && (_.showMessage("Record Deleted Successfully."), ye !== !1 && he());
    } catch {
      _.showError("An error occurred, please try after some time.");
    } finally {
      N(!1);
    }
  }, [ee, t, e.api, _, ue, e, ye, he]), Et = () => {
    ue(null), N(!1);
  }, zt = F((R) => {
    const { name: xe, value: ae } = R.target;
    Fe({ ...W, [xe]: ae });
  }, [W]), rt = F(async (R) => {
    R && R.preventDefault(), typeof y === me.function && await y({ formik: Pe, model: e });
    const { errors: xe } = Pe;
    Pe.handleSubmit();
    const ae = Object.keys(xe)[0], ze = xe[ae];
    ze && _.showError(ze, null, "error");
    const Ve = e.columns.find(
      (Be) => Be.field === ae
    ) || {};
    Ve.tab && Ue(Object.keys(e.tabs).indexOf(Ve.tab));
  }, [y, Pe, e, _, Ue]), sr = [
    { text: T(l, x) },
    { text: T(ee === "0" ? "New" : "Update", x) }
  ], Ke = Number(ee) !== 0 && !!G.length, lr = ce.has("showRelation"), cr = !Ye || W.readOnlyRelations;
  g = g || "Are you sure you want to delete ?";
  const { showPageTitle: Vt = !0 } = e;
  return /* @__PURE__ */ v(ge, { children: [
    Vt && /* @__PURE__ */ a(
      qa,
      {
        navigate: D,
        title: l,
        showBreadcrumbs: !Dt,
        breadcrumbs: sr,
        model: e
      }
    ),
    /* @__PURE__ */ a(Ka.Provider, { value: { activeStep: et, setActiveStep: Ue }, children: /* @__PURE__ */ v(zo, { sx: { padding: 2, ...d }, children: [
      ve ? /* @__PURE__ */ a(Qe, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(Go, {}) }) : /* @__PURE__ */ v("form", { children: [
        /* @__PURE__ */ v(
          Vo,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              or && Ye && !lr && !f && /* @__PURE__ */ a(
                Te,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: rt,
                  children: T("Save", x)
                }
              ),
              /* @__PURE__ */ a(
                Te,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: $t,
                  children: T("Cancel", x)
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Te,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => N(!0),
                  children: T("Delete", x)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          s,
          {
            model: e,
            formik: Pe,
            data: W,
            fieldConfigs: vt,
            onChange: zt,
            lookups: $,
            id: ee,
            handleSubmit: rt,
            mode: Lt
          }
        )
      ] }),
      tt && /* @__PURE__ */ v(
        je,
        {
          open: !!tt,
          onConfirm: Et,
          onCancel: Et,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            tt
          ]
        }
      ),
      /* @__PURE__ */ a(
        je,
        {
          open: $e,
          onConfirm: Ft,
          onCancel: () => xt(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ a(
        je,
        {
          open: I,
          onConfirm: ir,
          onCancel: () => {
            N(!1), Nt(null);
          },
          title: Rt ? "Error Deleting Record" : "Confirm Delete",
          children: g
        }
      ),
      Ke ? /* @__PURE__ */ a(
        Hs,
        {
          readOnly: cr,
          models: r,
          relationFilters: n,
          relations: G,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, Jt = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, _s = {}, ya = !0, Js = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class er {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "" } = t;
    let { api: n, idProperty: o = n + "Id" } = t;
    const s = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    n || (n = `${r.replaceAll(Jt.nonAlphaNumeric, "-").toLowerCase()}`, o = r.replaceAll(" ", "") + "Id");
    const i = { ...t.defaultValues }, d = s || r;
    Object.assign(this, {
      standard: !0,
      name: d,
      permissions: { ...er.defaultPermissions },
      idProperty: o,
      linkColumn: `${d}Name`,
      overrideFileName: r,
      preferenceId: d,
      tableName: d,
      module: s,
      ...t,
      api: n
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(i);
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
      t[n] = r.defaultValue === void 0 ? Js[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, n = {};
    for (const o of r) {
      const { field: s, label: i, header: d, type: f = "string", requiredIfNew: y = !1, required: g = !1, min: u = "", max: c = "", validate: C } = o, l = i || d || s;
      if (!l || i === null || i === "") continue;
      let p;
      switch (f) {
        case "string":
          p = pe.string().nullable().trim().label(l), u && !isNaN(Number(u)) && (p = p.min(Number(u), `${l} must be at least ${u} characters long`)), c && !isNaN(Number(c)) && (p = p.max(Number(c), `${l} must be at most ${c} characters long`)), g && (p = p.trim().required(`${l} is required`));
          break;
        case "boolean":
          p = pe.bool().nullable().transform((w, x) => x === "" ? null : w).label(l);
          break;
        case "radio":
        case "dayRadio":
          p = pe.mixed().label(l), g && (p = p.required(`Select at least one option for ${l}`));
          break;
        case "date":
          p = pe.date().nullable().transform((w, x) => x === "" || x === null ? null : w).label(l), g && (p = p.required(`${l} is required`));
          break;
        case "dateTime":
          p = pe.date().nullable().transform((w, x) => x === "" || x === null ? null : w).label(l), g && (p = p.required(`${l} is required`));
          break;
        case "select":
        case "autocomplete":
          g ? p = pe.string().trim().label(l).required(`Select at least one ${l}`) : p = pe.string().nullable();
          break;
        case "password":
          p = pe.string().label(l).test("ignore-asterisks", `${l} must be a valid password.`, (w) => {
            if (w === "******") return !0;
            const x = Number(u) || 8, T = Number(c) || 50, D = o.regex || Jt.password;
            return pe.string().min(x, `${l} must be at least ${x} characters`).max(T, `${l} must be at most ${T} characters`).matches(
              D,
              `${l} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(w);
          });
          break;
        case "email":
          p = pe.string().trim().matches(
            o.regex || Jt.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          g ? p = pe.number().label(l).required(`${l} is required.`) : p = pe.number().nullable(), u !== void 0 && u !== "" && !isNaN(Number(u)) && (p = p.min(Number(u), `${l} must be greater than or equal to ${u}`)), c !== void 0 && c !== "" && !isNaN(Number(c)) && (p = p.max(Number(c), `${l} must be less than or equal to ${c}`));
          break;
        case "fileUpload":
          p = pe.string().trim().label(l);
          break;
        default:
          p = pe.mixed().nullable().label(l);
          break;
      }
      if (g && f !== "string" && (p = p.required(`${l} is required`)), y && (!t || t === "") && (p = p.trim().required(`${l} is required`)), C) {
        const w = Jt.compareValidatorRegex.exec(C);
        if (w) {
          const x = w[1], T = r.find(
            (D) => (D.formField === x || D.field) === x
          );
          p = p.oneOf(
            [pe.ref(x)],
            `${l} must match ${T.label}`
          );
        }
      }
      n[s] = p;
    }
    return pe.object({ ...n, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ a(Ks, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ a(ha, { model: this, showRowsSelected: ya, ...r });
  ChildGrid = (t) => /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ a(ha, { model: this, ...t, customStyle: _s, showRowsSelected: ya }),
    /* @__PURE__ */ a(yo, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  je as DialogComponent,
  ha as GridBase,
  Li as HelpModal,
  ua as MuiTypography,
  qa as PageTitle,
  wc as RouterProvider,
  Na as SnackbarContext,
  bc as SnackbarProvider,
  Cc as StateProvider,
  er as UiModel,
  yc as crudHelper,
  Ci as daDKGrid,
  xi as deDEGrid,
  Di as elGRGrid,
  Si as esESGrid,
  Fi as frFRGrid,
  Je as httpRequest,
  Ai as itITGrid,
  Ni as locales,
  Bi as ptPT,
  Mi as trTRGrid,
  yi as useMobile,
  Rr as useRouter,
  wt as useSnackbar,
  Le as useStateContext
};
//# sourceMappingURL=index.js.map
