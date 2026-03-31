import { jsx as n, jsxs as S, Fragment as be } from "react/jsx-runtime";
import * as Ve from "react";
import xt, { createContext as tr, useContext as Or, useState as O, useEffect as de, useRef as Sr, useCallback as A, useMemo as j, memo as wa, useId as On, createElement as Br } from "react";
import Bn from "@mui/material/Snackbar";
import Rn from "@mui/material/Alert";
import Te from "@mui/material/Button";
import kn from "@mui/material/Dialog";
import Nn from "@mui/material/DialogActions";
import Ln from "@mui/material/DialogContent";
import $n from "@mui/material/DialogContentText";
import Vn from "@mui/material/DialogTitle";
import * as Qe from "@mui/x-data-grid-premium";
import { GridFooterContainer as zn, GridFooter as Gn, getGridDateOperators as va, useGridSelector as Da, gridFilterModelSelector as qn, useGridApiRef as Sa, GridActionsCellItem as Pr, DataGridPremium as Pa, GridToolbarExportContainer as jn, Toolbar as Wn, ColumnsPanelTrigger as Un, FilterPanelTrigger as Hn, GRID_CHECKBOX_SELECTION_COL_DEF as Yn, getGridStringOperators as Kn, getGridBooleanOperators as _n, useGridApiContext as Jn, gridRowSelectionStateSelector as Zn } from "@mui/x-data-grid-premium";
import Fa from "@mui/icons-material/Delete";
import Qn from "@mui/icons-material/FileCopy";
import Xn from "@mui/icons-material/Article";
import Ea from "@mui/icons-material/Edit";
import Ze from "@mui/material/Box";
import It from "@mui/material/Typography";
import rr from "@mui/material/TextField";
import { useTranslation as Dt, withTranslation as eo } from "react-i18next";
import { Typography as Be, Dialog as to, DialogTitle as ro, Grid as Ce, DialogContent as ao, Card as no, CardContent as oo, Breadcrumbs as io, Link as lo, Button as ot, IconButton as Ot, Box as Ee, FormControl as wt, Select as Fr, MenuItem as Ue, Tooltip as vt, Menu as so, List as co, ListItemButton as Cr, ListItemIcon as xr, ListItem as uo, ListItemText as po, TextField as it, FormControlLabel as lt, Checkbox as fo, Stack as ca, InputLabel as ua, Badge as mo, FormHelperText as st, useTheme as St, Input as ho, FilledInput as go, OutlinedInput as bo, InputAdornment as Ta, RadioGroup as Rr, Radio as Ct, styled as yo, Avatar as Co, CircularProgress as xo, Divider as wo } from "@mui/material";
import vo from "@mui/icons-material/Check";
import Er from "@mui/icons-material/Close";
import Do from "@mui/icons-material/Help";
import { Replay as So, Close as Po, GridOn as Fo, TableChart as wr, Code as Eo, Language as To, DataObject as Ao } from "@mui/icons-material";
import ae from "dayjs";
import Mo from "dayjs/plugin/utc";
import Io from "dayjs/plugin/timezone";
import { DatePicker as Aa } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Tr } from "@mui/x-date-pickers/DateTimePicker";
import Ma from "dayjs/plugin/utc.js";
import { LocalizationProvider as Ia } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Oa } from "@mui/x-date-pickers/AdapterDayjs";
import Ar from "@mui/icons-material/Add";
import Oo from "@mui/icons-material/Remove";
import Bo from "@mui/icons-material/FilterListOff";
import Ro from "@mui/icons-material/ViewColumn";
import ko from "@mui/icons-material/FilterList";
import { styled as ar } from "@mui/material/styles";
import No from "@mui/icons-material/Save";
import da from "@mui/icons-material/Settings";
import Lo from "@mui/icons-material/Refresh";
import { useFormik as Ba } from "formik";
import * as me from "yup";
import { DateTimePicker as $o, DatePicker as Vo } from "@mui/x-date-pickers";
import Ra from "@mui/material/MenuItem";
import zo from "@mui/icons-material/History";
import Go from "@mui/icons-material/FileDownload";
import ka from "@mui/material/Checkbox";
import qo from "@mui/material/Paper";
import jo from "@mui/material/Stack";
import Wo from "@mui/material/CircularProgress";
import Uo from "@mui/material/FormControlLabel";
import { NumberField as Qt } from "@base-ui/react/number-field";
import Ho from "@mui/icons-material/KeyboardArrowUp";
import Na from "@mui/icons-material/KeyboardArrowDown";
import Yo from "@mui/icons-material/VisibilityOff";
import Ko from "@mui/icons-material/Visibility";
import { TimePicker as _o } from "@mui/x-date-pickers/TimePicker";
import Jo from "@mui/icons-material/Clear";
import nr from "@mui/material/FormControl";
import Zo from "@mui/material/InputLabel";
import Qo from "@mui/material/Select";
import vr from "@mui/material/Grid";
import La from "@mui/material/Autocomplete";
import Xo from "@mui/material/Stepper";
import ei from "@mui/material/Step";
import ti from "@mui/material/StepLabel";
import { grey as ri } from "@mui/material/colors";
import ai from "@emotion/styled";
import ni from "@mui/material/Chip";
import { SimpleTreeView as oi } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as pa } from "@mui/x-tree-view/TreeItem";
import ii from "@mui/material/Input";
import li from "@mui/material/Tab";
import si from "@mui/material/Tabs";
const $a = tr(null), ci = "bottom", ui = "center", di = xt.forwardRef(function(r, t) {
  return /* @__PURE__ */ n(Rn, { elevation: 6, ref: t, variant: "filled", ...r });
}), vc = ({ children: e }) => {
  const [r, t] = O(null), [a, o] = O(!1), [l, i] = O(null), [d, m] = O(null), C = function(f, y, h = "info", x) {
    typeof f != "string" && (f = f.toString()), y && typeof y != "string" && (y = y.toString()), t(y ? `${f}: ${y}` : f), i(h), o(!0), m(x);
  }, g = function(f, y, h = "error", x) {
    C(f, y, h, x);
  }, c = function() {
    o(!1), m(null), d && d();
  };
  return /* @__PURE__ */ S(be, { children: [
    /* @__PURE__ */ n(
      $a.Provider,
      {
        value: { showMessage: C, showError: g },
        children: e
      }
    ),
    /* @__PURE__ */ n(Bn, { open: a, autoHideDuration: 6e3, onClose: c, anchorOrigin: { vertical: ci, horizontal: ui }, children: /* @__PURE__ */ n(di, { severity: l, children: r }) })
  ] });
}, Pt = function() {
  return Or($a);
}, He = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: a, okText: o, cancelText: l, yesNo: i = !1, children: d, maxWidth: m = "sm", fullWidth: C = !0, ...g }) => (o = o || (i ? "Yes" : "Ok"), l = l || (i ? "No" : "Cancel"), /* @__PURE__ */ S(
  kn,
  {
    ...g,
    open: e,
    onClose: a,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: m,
    fullWidth: C,
    children: [
      /* @__PURE__ */ n(Vn, { id: "alert-dialog-title", sx: { fontSize: d ? "inherit" : "1.25rem" }, children: t }),
      d && /* @__PURE__ */ n(Ln, { dividers: !0, children: /* @__PURE__ */ n($n, { children: d }) }),
      (a || r) && /* @__PURE__ */ S(Nn, { children: [
        a && /* @__PURE__ */ n(Te, { onClick: a, children: l }),
        r && /* @__PURE__ */ n(Te, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Dr = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Va = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, pi = (e, r) => {
  const t = new URL(e);
  for (const a in r) {
    const o = typeof r[a] == "object" ? JSON.stringify(r[a]) : r[a];
    t.searchParams.append(a, o);
  }
  window.open(t, "_blank").focus();
}, za = async (e) => {
  const {
    method: r = "GET",
    url: t,
    data: a,
    headers: o = {},
    credentials: l = "include",
    ...i
  } = e, d = {
    method: r,
    credentials: l,
    headers: {
      ...o
    },
    ...i
  };
  a && (o["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = a instanceof FormData ? a : Va(a)) : (d.headers["Content-Type"] = o["Content-Type"] || "application/json", d.body = typeof a == "string" ? a : JSON.stringify(a)));
  const m = await fetch(t, d), C = m.headers.get("content-type") || {};
  return {
    status: m.status,
    data: C.includes("application/json") ? await m.json() : await m.text(),
    headers: Object.fromEntries(m.headers.entries())
  };
}, Bt = (e) => e?.message || e?.info || e?.error || e?.err, Re = Object.freeze({
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
  params: r = {},
  history: t,
  jsonPayload: a = !1,
  additionalParams: o = {},
  additionalHeaders: l = {},
  dataParser: i = Re.raw,
  onParseError: d
}) => {
  if (r.exportData)
    return pi(e, r);
  const m = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: a ? { ...l } : { "Content-Type": "multipart/form-data", ...l },
    ...o
  };
  r && Object.keys(r).length > 0 && (m.data = a ? r : Va(r));
  try {
    const C = await za(m);
    let g = C.data;
    if (C.status === Dr.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (C.status === Dr.FORBIDDEN)
      return { error: !0, message: g.message || "Access Denied!" };
    if (C.status !== Dr.OK)
      return { error: !0, message: g.message || "An error occurred" };
    try {
      g = i(g);
    } catch (c) {
      return d ? d(c, g) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: c.message,
        rawData: g
      };
    }
    return g;
  } catch (C) {
    return { error: !0, message: C.message || "Network error" };
  }
}, fi = ["date", "dateTime"], mi = ["singleSelect"], hi = 1e6, gi = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset();
function bi(e) {
  const { operator: r, value: t, type: a } = e, o = ["isEmpty", "isNotEmpty"].includes(r), l = t != null && (t !== "" || a === "number" && t === 0 || a === "boolean" && t === !1);
  return o || l;
}
const yi = ({ gridColumns: e, page: r, pageSize: t, sortModel: a, filterModel: o, baseFilters: l, action: i = "list", extraParams: d = {}, model: m, api: C }) => {
  const g = i === "export" && m.isElasticExport === !0, c = [], f = [], y = [];
  e.forEach(({ lookup: P, type: R, field: T, keepLocal: E = !1, keepLocalDate: G, filterable: ne = !0, dependsOn: Z }) => {
    fi.includes(R) && y.push({ field: T, keepLocal: E, keepLocalDate: G }), P && !c.includes(P) && mi.includes(R) && ne && (c.push(P), f.push({ lookup: P, dependsOn: Z }));
  });
  const h = [];
  o?.items?.length && o.items.forEach((P) => {
    if (bi(P)) {
      const { field: R, operator: T, filterField: E } = P;
      let { value: G } = P;
      const Z = e.filter((U) => U?.field === P.field)[0]?.type;
      Z === "boolean" ? G = G === "true" || G === !0 ? 1 : 0 : Z === "number" && (G = Array.isArray(G) ? G.filter((U) => U) : G), G = P.filterValues || G, h.push({
        field: E || R,
        operator: T,
        value: G,
        type: Z
      });
    }
  }), l && Array.isArray(l) && h.push(...l);
  const x = {
    start: r * t,
    limit: g ? m.exportSize || hi : t,
    ...d,
    logicalOperator: o.logicOperator,
    sort: a.map((P) => (P.filterField || P.field) + " " + P.sort).join(","),
    where: h,
    isElasticExport: g,
    model: m.module,
    fileName: m.overrideFileName
  };
  c.length && (x.lookups = c.join(",")), f.length && (x.lookupWithDeps = JSON.stringify(f)), m?.limitToSurveyed && (x.limitToSurveyed = m?.limitToSurveyed);
  let w = `${C}/${i}`;
  const s = new URLSearchParams();
  d.template && s.append("template", d.template), d.configFileName && s.append("configFileName", d.configFileName);
  const v = s.toString();
  return v && (w += `?${v}`), { requestData: x, url: w, where: h, dateColumns: y };
}, Mr = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: a = {}, action: o = "list", model: l } = e, { requestData: i, url: d, where: m, dateColumns: C } = yi(e);
  if (r) {
    i.responseType = r, i.columns = t, i.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof l.createRequestPayload == "function" && await l.createRequestPayload(i, { where: m, url: d, dataParsers: Re, ...e });
    const f = document.createElement("form");
    if (f.setAttribute("method", "POST"), f.setAttribute("id", "exportForm"), f.setAttribute("target", "_blank"), !a.template)
      for (const y in i) {
        let h = i[y];
        if (h == null)
          continue;
        typeof h != "string" && (h = JSON.stringify(h));
        const x = document.createElement("input");
        x.type = "hidden", x.name = y, x.value = h, f.append(x);
      }
    f.setAttribute("action", i.url || d), document.body.appendChild(f), f.submit(), setTimeout(() => {
      f.remove();
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
    dataParser: Re.json
  };
  typeof l.createRequestPayload == "function" && await l.createRequestPayload(g, { where: m, dataParsers: Re, ...e });
  const c = await Je(g);
  if (c?.error || c?.success === !1)
    throw new Error(Bt(c) || "An error occurred while fetching data");
  return typeof l.parseResponsePayload == "function" && l.parseResponseActions.includes(o) ? await l.parseResponsePayload({ responseData: c, model: l, dateColumns: C, action: o, ...e }) : (c.records.forEach((f) => {
    C.forEach((y) => {
      const { field: h, keepLocal: x, keepLocalDate: w } = y;
      if (f[h]) {
        if (f[h] = new Date(f[h]), w) {
          const s = f[h].getTimezoneOffset() * 6e4;
          f[h] = new Date(f[h].getTime() + s);
        }
        if (x && !gi(f[h])) {
          const s = f[h].getTimezoneOffset() * 6e4;
          f[h] = new Date(f[h].getTime() + s);
        }
      }
    }), l.columns.forEach(({ field: y, displayIndex: h }) => {
      h && (f[y] = f[h]);
    });
  }), c);
}, Xt = async (e = {}) => {
  let { api: r, id: t, model: a, parentFilters: o, where: l = {} } = e;
  r = r || a.api;
  const i = new URLSearchParams(), d = `${r}/${t ?? "-"}`, m = [];
  (a.formDef || a.columns)?.forEach((s) => {
    s.lookup && !m.includes(s.lookup) && !s.dependsOn && m.push(s.lookup);
  }), i.set("lookups", m), l && Object.keys(l)?.length && i.set("where", JSON.stringify(l));
  const g = {
    url: `${d}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(g, { action: "load", dataParsers: Re, ...e });
  const c = await Je(g);
  if (c?.error || c?.success === !1)
    throw new Error(Bt(c) || "Load failed");
  if (typeof a.parseResponsePayload == "function" && a.parseResponseActions.includes("load"))
    return await a.parseResponsePayload({ responseData: c, model: a, action: "load", ...e });
  const { data: f, lookups: y } = c || {};
  let h = f[a.linkColumn];
  const x = a.columns.find((s) => s.field === a.linkColumn);
  if (x && x.lookup && y && y[x.lookup] && y[x.lookup]?.length) {
    const s = y[x.lookup].find((v) => v.value === h);
    s && (h = s.label);
  }
  const w = { ...a.defaultValues };
  return { id: t, title: h, record: { ...w, ...f, ...o }, lookups: y };
}, kr = async function(e = {}) {
  const { id: r, api: t, model: a } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${t}/${r}`,
    additionalParams: { method: "DELETE" }
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(o, { action: "delete", dataParsers: Re, ...e });
  const l = await Je(o);
  if (l?.error || l?.success === !1)
    throw new Error(Bt(l) || "Delete failed");
  return !0;
}, Nr = async function(e = {}) {
  const { id: r, api: t, values: a, model: o } = e;
  let l, i;
  r !== 0 ? (l = `${t}/${r}`, i = "PUT") : (l = t, i = "POST");
  const d = {
    url: l,
    additionalParams: { method: i },
    params: a,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(d, { action: "save", dataParsers: Re, ...e });
  const m = await Je(d);
  if (m?.error || m?.success === !1)
    throw new Error(Bt(m) || "Save failed");
  return m;
}, Ga = async (e = {}) => {
  let { api: r, model: t, lookups: a, scopeId: o, reqData: l } = e;
  r = r || t.api;
  const i = new URLSearchParams(), d = `${r}/lookups`;
  i.set("lookups", a), i.set("scopeId", o);
  const m = {
    url: `${d}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0,
    ...l
  };
  typeof t.createRequestPayload == "function" && await t.createRequestPayload(m, { action: "lookups", dataParsers: Re, ...e });
  const C = await Je(m);
  if (C?.error || C?.success === !1)
    throw new Error(Bt(C) || "Could not load lookups");
  return typeof t.parseResponsePayload == "function" && t.parseResponseActions.includes("lookups") ? await t.parseResponsePayload({ responseData: C, model: t, action: "lookups", ...e }) : C;
}, Dc = {
  getList: Mr,
  getRecord: Xt,
  deleteRecord: kr,
  saveRecord: Nr,
  getLookups: Ga
}, Ci = ({ pagination: e, apiRef: r, tTranslate: t = (a) => a }) => {
  const a = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, l = r.current.state.rows.totalRowCount, i = Math.ceil(l / o), { t: d, i18n: m } = Dt(), C = { t: d, i18n: m }, [g, c] = O(a + 1), f = function(x) {
    let w = x.target?.value;
    w === "" ? c("") : (w = parseInt(w), w = isNaN(w) || w < 1 ? 1 : w, c(w));
  };
  de(() => {
    c(a + 1);
  }, [a, o]);
  const y = function() {
    let x = g === "" ? 1 : g;
    x = Math.max(x, 1), x = Math.min(x, i), r.current.setPage(x - 1), c(x), g === "" && c(1);
  }, h = (x) => {
    const w = x.which || x.keyCode, s = String.fromCharCode(w);
    /\d/.test(s) || x.preventDefault();
  };
  return /* @__PURE__ */ S(zn, { children: [
    /* @__PURE__ */ n(Ze, { sx: { pl: 5 }, children: e && /* @__PURE__ */ S(be, { children: [
      /* @__PURE__ */ S(It, { variant: "p", children: [
        t("Jump to page", C),
        ":"
      ] }),
      /* @__PURE__ */ n(
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
          onChange: f,
          onKeyPress: h,
          disabled: !l
        }
      ),
      /* @__PURE__ */ n(Te, { disabled: !l, size: "small", onClick: y, children: t("Go", C) })
    ] }) }),
    /* @__PURE__ */ n(Gn, {})
  ] });
}, xi = /\${((\w+)\.)?(\w+)}/g, wi = function(e, r, { template: t = xi, keepMissingTags: a = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, l, i, d) {
    const m = i ? r[i] || {} : r;
    return m[d] === void 0 ? a ? o : "" : m[d];
  });
}, Yt = {
  replaceTags: wi
};
function fa({ variant: e = "h2", component: r = "h2", text: t = "", name: a = null, ...o }) {
  return /* @__PURE__ */ S(Be, { variant: e, component: r, ...o, children: [
    t,
    a && ` ${a}`
  ] });
}
function vi(e = !1) {
  const r = l(), [t, a] = O(r);
  function o() {
    setTimeout(() => {
      a(l());
    }, 10);
  }
  de(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function l() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const d = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const m = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let C = null;
    return window.innerWidth <= window.innerHeight ? C = "portrait" : C = "landscape", { mobile: d, tablet: m, portrait: C === "portrait", landscape: C === "landscape" };
  }
  return e ? t.mobile : t;
}
const Di = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Si = {
  ...Qe.daDK,
  ...Di
}, Pi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Fi = {
  ...Qe.deDE,
  ...Pi
}, Ei = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Ti = {
  ...Qe.elGR,
  ...Ei
}, Ai = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Mi = {
  ...Qe.esES,
  ...Ai
}, Ii = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Oi = {
  ...Qe.frFR,
  ...Ii
}, Bi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Ri = {
  ...Qe.itIT,
  ...Bi
}, ki = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Ni = {
  ...Qe.trTR,
  ...ki
}, Li = {
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
}, $i = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Vi = {
  ...Qe.enUS,
  ...$i
}, zi = {
  en: Vi,
  "tr-TR": Ni,
  "es-ES": Mi,
  "da-DK": Si,
  "de-DE": Fi,
  "el-GR": Ti,
  "fr-FR": Oi,
  "pt-PT": Li,
  "it-IT": Ri
};
ae.extend(Mo);
ae.extend(Io);
const qa = tr(), ja = tr(null), ma = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Sc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, a] = O("en"), [o, l] = O("MM/DD/YYYY hh:mm:ss A"), [i, d] = O(null), [m, C] = O(null), [g, c] = O(null), [f, y] = O(null), [h, x] = O(""), [w, s] = O(!1), { t: v, i18n: P } = Dt(), R = Pt(), T = Sr(r), E = A((D, L) => {
    T.current[D] = L;
  }, []), G = A((D) => T.current[D || "default"] || "", []), ne = A((D, L) => `${T.current[L || "default"] || ""}${D}`, []), Z = A((D = !0) => {
    s(D);
  }, []), U = A((D, L, $) => {
    if ($ != null) {
      const K = $;
      let N = D ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return K && (N = K.split(" "), N[0] = N[0].toUpperCase(), D ? N = N[0] : L ? N = N[0].toUpperCase() : (N[1] += N[1].includes(":ss") ? "" : ":ss", N = N.join(" "))), N;
    }
    return D?.split(" ")[0] || "DD-MM-YYYY";
  }, []), ee = A(({ value: D, useSystemFormat: L, showOnlyDate: $ = !1, state: K, timeZone: N }) => {
    if (!D) return "-";
    const De = U(L, $, K);
    return N ? ae(D).tz(N).format(De) : ae(D).format(De);
  }, [U]), te = A(() => {
    const D = t, L = zi[D];
    function $(K) {
      return D === "pt-PT" || D === "ptPT" ? L.components.MuiDataGrid.defaultProps.localeText[K] || K : L[K] || K;
    }
    return { getLocalizedString: $ };
  }, [t]), Y = A((D) => {
    a(D);
  }, []), k = A((D) => {
    d(D);
  }, []), ye = A((D) => {
    c(D);
  }, []), ie = A((D) => {
    y(D);
  }, []), re = A((D) => {
    x(D);
  }, []), q = A((D) => {
    l(D);
  }, []), Q = A((D) => {
    C(D);
  }, []), W = j(() => ({
    locale: t,
    dateTime: o,
    pageTitle: i,
    modal: m,
    pageBackButton: g,
    userData: f,
    timeZone: h
  }), [t, o, i, m, g, f, h]), ve = j(() => ({
    // State data
    stateData: W,
    // Loader management
    isLoading: w,
    showLoader: Z,
    // Snackbar utilities
    showMessage: R?.showMessage || ma,
    showError: R?.showError || ma,
    // i18n utilities
    dayjs: ae,
    t: v,
    i18n: P,
    // Date/time utilities
    systemDateTimeFormat: U,
    formatDate: ee,
    useLocalization: te,
    // API utilities
    getApiEndpoint: G,
    setApiEndpoint: E,
    buildUrl: ne,
    // App-level state setters with meaningful names
    setLocale: Y,
    setPageTitle: k,
    setPageBackButton: ye,
    setUserData: ie,
    setTimeZone: re,
    setDateTimeFormat: q,
    setModal: Q
  }), [
    W,
    w,
    Z,
    v,
    P,
    R,
    G,
    E,
    U,
    ee,
    te,
    Y,
    k,
    ye,
    ie,
    re,
    q,
    Q,
    ne
  ]);
  return /* @__PURE__ */ n(qa.Provider, { value: ve, children: e });
}, Pc = ja.Provider, Lr = () => Or(ja), Ge = () => {
  const e = Or(qa);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Gi = () => {
  const [e, r] = O(), [t, a] = O(!1), { stateData: o, setModal: l } = Ge(), i = o.modal, d = 16 / 9;
  let m = (window.outerWidth - 10) / window.innerWidth * 100;
  const C = () => {
    let c = document.getElementById("tutorial-iframe");
    c ? (c = c.offsetWidth, c = c / window.innerWidth) : c = 0.9;
    const f = window.innerWidth * c * (1 / d), y = window.innerHeight - 180;
    r(Math.min(f, y));
  };
  de(() => {
    i?.status && (a(!0), C());
  }, [i, m]), de(() => (window.addEventListener("resize", C), () => {
    window.removeEventListener("resize", C);
  }), []);
  function g() {
    const c = document.getElementById("tutorial-iframe");
    c.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ S(to, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    l({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ n(ro, { className: "pt-2 pb-0", children: /* @__PURE__ */ S(Ce, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ S(Ce, { size: 11, children: [
        /* @__PURE__ */ S(Be, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(Be, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(be, { children: " " }) })
      ] }),
      /* @__PURE__ */ S(Ce, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(So, { className: "cursor_pointer mt-2 mr-2", onClick: g }),
        /* @__PURE__ */ n(Po, { className: "cursor_pointer mt-2", onClick: () => {
          l({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ S(ao, { dividers: !0, children: [
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
function qi({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: a = null,
  mobileRightComponent: o,
  title: l = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: d,
  breadcrumbs: m = [],
  enableBackButton: C = !1,
  breadcrumbColor: g,
  showHelpButton: c = !1,
  model: f
}) {
  const y = vi(!0), h = m.length - 1, x = d && m.length, { t: w, i18n: s } = Dt(), v = j(() => ({ t: w, i18n: s }), [w, s]), P = f?.tTranslate ?? ((T) => T), R = () => {
    r(-1);
  };
  return de(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ S(be, { children: [
    /* @__PURE__ */ n(fa, { className: "print-only", text: P(e, v) }),
    x && /* @__PURE__ */ S(be, { children: [
      /* @__PURE__ */ n(no, { sx: { mb: 3 }, children: /* @__PURE__ */ S(oo, { sx: { backgroundColor: g || "#fff" }, children: [
        /* @__PURE__ */ S(Ce, { container: !0, children: [
          /* @__PURE__ */ n(Ce, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(io, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: m.map((T, E) => E < h ? /* @__PURE__ */ n(lo, { onClick: R, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: T.text }, E) : /* @__PURE__ */ n(Be, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: T.text }, E)) }) }),
          C && /* @__PURE__ */ n(Ce, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(ot, { variant: "contained", onClick: R, children: P("Back", v) }) }),
          c && /* @__PURE__ */ n(Ce, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Ot, { color: "primary", title: P("Help", v), size: "large", children: /* @__PURE__ */ n(Do, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Ee, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: y ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          fa,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: P(e, v),
            name: t
          }
        ) }) }) }) }),
        !y && /* @__PURE__ */ S(be, { children: [
          /* @__PURE__ */ S(Ee, { children: [
            " ",
            a && /* @__PURE__ */ n(a, {}),
            " "
          ] }),
          /* @__PURE__ */ S(Ee, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n(Gi, {})
    ] })
  ] });
}
const Wa = eo()(qi), ze = {
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
}, Ua = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: a = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = a.find((l) => l.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[ze.permissionsMapper.add],
    canEdit: t.edit && !!o[ze.permissionsMapper.edit],
    canDelete: t.delete && !!o[[ze.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
ae.extend(Ma);
const ji = {
  date: Aa,
  datetime: Tr,
  dateTimeLocal: Tr
}, Wi = "-10px", Ui = "-16px", Hi = (e) => {
  const { fixedFilterFormat: r } = ze, { item: t, applyValue: a, convert: o } = e, { systemDateTimeFormat: l, stateData: i } = Ge(), d = e?.type || "date", m = r[d], C = (x) => {
    const w = ae(x);
    return w.isValid() && w.year() > 1900;
  }, g = l(i.dateTime), c = (x) => {
    if (!(d !== "date" && d !== "datetime" && d !== "dateTimeLocal" || ((s) => typeof s != "string" ? !1 : !ae(s, g, !0).isValid())(x))) {
      if (o) {
        x = ae(x).utc(), a({ ...t, value: x });
        return;
      }
      if (!C(x)) {
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
  }, y = ji[d], h = d === "dateTimeLocal" ? t?.value ? ae(t?.value.$d) : null : t?.value ? ae(t.value) : null;
  return /* @__PURE__ */ n(Ia, { dateAdapter: Oa, children: /* @__PURE__ */ n(
    y,
    {
      fullWidth: !0,
      format: g,
      value: h,
      onChange: c,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Wi,
            marginBottom: Ui,
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
}, Kt = (e) => va().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ n(Hi, { ...t, ...e }) : void 0
})), Yi = {
  IsAnyOf: "isAnyOf"
}, Ki = (e) => {
  const { column: r, item: t, applyValue: a, apiRef: o } = e, l = r?.dataRef?.current?.lookups;
  let i = r.customLookup || l[r.lookup] || [];
  typeof r.lookup == "string" && (i = i.map(({ label: c, value: f }) => ({
    label: c,
    value: f
  })));
  const d = Da(o, qn), m = j(
    () => d.items?.filter((c) => c.field === r.field),
    [r.field, d.items]
  ), C = A(
    (c) => {
      let f = c.target.value;
      if (d.items.length >= 1) {
        f = f.length === 1 ? f[0] : f;
        for (const x of d.items)
          x.field === t.field && (x.operator === Yi.IsAnyOf ? f = Array.isArray(f) ? f : [f] : f = f === 0 ? "0" : f);
      }
      if (f.length === 0 && m[0]) {
        o.current.deleteFilterItem(m[0]);
        return;
      }
      const y = f, h = m[0] ? m[0] : t;
      a({ ...h, value: y });
    },
    [o, r.applyZeroFilter, m, t, a]
  ), g = m[0]?.value ?? "";
  return /* @__PURE__ */ n(wt, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    Fr,
    {
      label: r.field,
      variant: "standard",
      value: g,
      onChange: (c) => C(c),
      multiple: Array.isArray(g),
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 400,
            overflowY: "auto"
          }
        }
      },
      children: i?.map((c, f) => /* @__PURE__ */ n(Ue, { value: c.value, children: c.label }, f))
    }
  ) });
}, We = {
  Edit: "Edit",
  Delete: "Delete"
}, Ie = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, _i = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, Ji = { pageSize: 50, page: 0 }, Zi = [5, 10, 20, 50, 100], Qi = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: a, tOpts: o }) => {
  const { getApiEndpoint: l } = Ge(), i = l("GridPreferenceManager"), d = Sa(), m = Pt(), [C, g] = O(Ie.NONE), [c, f] = O(null), [y, h] = O(!1), [x, w] = O({}), [s, v] = O(null), [P, R] = O(null), T = j(
    () => s == null ? [] : s.filter((D) => D.prefId !== 0),
    [s]
  ), E = j(() => [
    { field: "prefName", type: "string", width: 300, headerName: a("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: a("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: a("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Pr, { icon: /* @__PURE__ */ n(vt, { title: We.Edit, children: /* @__PURE__ */ n(Ea, {}) }), tabIndex: 1, "data-action": We.Edit, label: a("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Pr, { icon: /* @__PURE__ */ n(vt, { title: We.Delete, children: /* @__PURE__ */ n(Fa, {}) }), tabIndex: 2, "data-action": We.Delete, label: a("Delete", o), color: "error" }, 2)] }
  ], [a, o]), G = j(() => me.object({
    prefName: me.string().trim(!0).required(a("Preference Name is Required", o)).max(20, a("Maximum Length is ", o) + "20"),
    prefDesc: me.string().max(100, a("Maximum Length is ", o) + "100")
  }), [a, o]), ne = (D) => f(D?.currentTarget), Z = () => f(null), U = () => {
    g(Ie.NONE), Z();
  }, ee = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), R(null), t && t(null), Z());
  }, te = A(async ({ applyDefault: D = !1 }) => {
    const L = await Je({
      url: i,
      params: { action: "list", id: r },
      dataParser: Re.json
    });
    if (!L?.preferences) {
      m.showMessage(a("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const $ = L.preferences.filter((K) => K.prefName.trim() !== "");
    if (v($), D) {
      const K = $.find((N) => N.isDefault);
      if (K)
        return { defaultPrefId: K.prefId, preferences: $ };
      t && t(null);
    }
    return { preferences: $ };
  }, [i, r, m, a, o, t]), Y = A(async (D, L = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), D === 0) {
      ee();
      return;
    }
    const $ = L || s;
    if (!$) {
      m.showMessage(a("Preferences not loaded yet.", o));
      return;
    }
    const K = $.find((De) => De.prefId === D);
    if (!K?.prefValue) {
      m.showMessage(a("Failed to load preference.", o));
      return;
    }
    let N;
    try {
      N = typeof K.prefValue == "string" ? JSON.parse(K.prefValue) : K.prefValue;
    } catch {
      m.showMessage(a("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(N), R(K.prefName), t && t(K.prefName), Z();
  }, [e, ee, s, t, m, a, o]), k = async (D) => {
    const L = D.prefName.trim(), $ = L.toLocaleLowerCase();
    if (s.find((N) => N.prefName.toLocaleLowerCase() === $ && N.prefId !== D.prefId)) {
      h(!0);
      return;
    }
    const K = await Je({
      url: i,
      params: {
        action: "save",
        id: r,
        prefId: D.prefId,
        prefName: L,
        prefDesc: D.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: D.isDefault
      },
      dataParser: Re.json
    });
    if (K === !0 || K?.success === !0) {
      m.showMessage(a(`Preference ${C === Ie.ADD ? "added" : "saved"} successfully.`, o)), U(), await te({ applyDefault: !1 });
      return;
    }
    m.showMessage(a("Error saving preference: ", o) + (K?.message || a("Unknown error", o)));
  }, ye = async () => {
    const D = await Je({
      url: i,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: Re.json
    });
    if (D === !0 || D?.success === !0) {
      m.showMessage(a("Preference deleted successfully.", o)), await te({ applyDefault: !1 }), w({});
      return;
    }
    m.showMessage(a("Error deleting preference: ", o) + (D?.message || a("Unknown error", o)));
  }, ie = (D) => {
    const L = D.field === "editAction" ? We.Edit : D.field === "deleteAction" ? We.Delete : null;
    if (D.id === 0 && L) {
      m.showMessage(a(`Default preference cannot be ${L === We.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    L === We.Edit && (g(Ie.EDIT), q.setValues(D?.row)), L === We.Delete && w({
      prefId: D.id,
      preferenceName: D.row.prefName
    });
  }, re = (D) => {
    g(D), Z(), D === Ie.ADD && q.resetForm();
  }, q = Ba({
    initialValues: _i,
    validationSchema: G,
    onSubmit: k,
    mode: "onBlur"
  });
  de(() => {
    if (!r) return;
    (async () => {
      const L = await te({ applyDefault: !0 });
      L?.defaultPrefId && L?.preferences && await Y(L.defaultPrefId, L.preferences);
    })();
  }, [r]);
  const Q = j(() => ({
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
    paginationDisplayedRows: ({ from: D, to: L, count: $ }) => `${D}–${L} ${a("of", o)} ${$}`,
    toolbarQuickFilterLabel: a("Search", o),
    columnsManagementSearchTitle: a("Search", o),
    columnsManagementNoColumns: a("No columns", o)
  }), [a, o]), W = C === Ie.MANAGE, ve = C === Ie.ADD || C === Ie.EDIT;
  return /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ S(
      ot,
      {
        id: "grid-preferences-btn",
        "aria-controls": c ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": c ? "true" : void 0,
        onClick: ne,
        title: a("Preference", o),
        startIcon: /* @__PURE__ */ n(da, {}),
        children: [
          a("Preferences", o),
          " ",
          P && `(${P})`
        ]
      }
    ),
    /* @__PURE__ */ S(
      so,
      {
        id: "grid-preference-menu",
        anchorEl: c,
        open: !!c,
        onClose: Z,
        component: co,
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
          /* @__PURE__ */ S(Ue, { component: Cr, dense: !0, onClick: () => re(Ie.ADD), children: [
            /* @__PURE__ */ n(xr, { children: /* @__PURE__ */ n(Ar, {}) }),
            a("Add Preference", o)
          ] }),
          /* @__PURE__ */ S(Ue, { component: Cr, dense: !0, onClick: () => re(Ie.MANAGE), children: [
            /* @__PURE__ */ n(xr, { children: /* @__PURE__ */ n(da, {}) }),
            a("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ S(Ue, { component: Cr, dense: !0, divider: s?.length > 0, onClick: () => Y(0), children: [
            /* @__PURE__ */ n(xr, { children: /* @__PURE__ */ n(Lo, {}) }),
            a("Reset to Default", o)
          ] }),
          s?.length > 0 && s?.map((D) => {
            const { prefName: L, prefDesc: $, prefId: K } = D;
            return /* @__PURE__ */ n(
              Ue,
              {
                onClick: () => Y(K),
                component: uo,
                selected: P === L,
                title: a($, o),
                dense: !0,
                children: /* @__PURE__ */ n(po, { primary: L })
              },
              `pref-item-${K}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ S(
      He,
      {
        open: C !== Ie.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ S(Be, { variant: "h5", children: [
          C,
          " ",
          a(W ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: W ? "md" : "sm",
        fullWidth: !0,
        children: [
          ve && /* @__PURE__ */ S(
            Ce,
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
                /* @__PURE__ */ n(Ce, { size: 12, children: /* @__PURE__ */ n(
                  it,
                  {
                    value: q.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ S("span", { children: [
                      a("Preference Name", o),
                      " ",
                      /* @__PURE__ */ n("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: q.handleChange,
                    error: !!q.errors.prefName,
                    helperText: q.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(Ce, { size: 12, children: /* @__PURE__ */ n(
                  it,
                  {
                    value: q.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: a("Preference Description", o),
                    name: "prefDesc",
                    onChange: q.handleChange,
                    error: !!q.errors.prefDesc,
                    helperText: q.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(Ce, { size: 12, children: /* @__PURE__ */ n(
                  lt,
                  {
                    control: /* @__PURE__ */ n(
                      fo,
                      {
                        checked: q.values.isDefault,
                        name: "isDefault",
                        onChange: q.handleChange
                      }
                    ),
                    label: a("Default", o)
                  }
                ) }),
                /* @__PURE__ */ n(Ce, { size: 12, children: /* @__PURE__ */ S(ca, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    ot,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(No, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: a("Save", o)
                    }
                  ),
                  /* @__PURE__ */ n(
                    ot,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(Er, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: U,
                      disableElevation: !0,
                      children: a("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          W && /* @__PURE__ */ S(Ce, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(Ce, { size: 12, children: /* @__PURE__ */ n(
              Pa,
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
                pageSizeOptions: Zi,
                pagination: !0,
                rowCount: T.length,
                rows: T,
                getRowId: (D) => D.GridPreferenceId,
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
                    paginationModel: Ji
                  }
                },
                localeText: Q
              }
            ) }),
            /* @__PURE__ */ n(Ce, { size: 12, children: /* @__PURE__ */ n(ca, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              ot,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(Er, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: U,
                disableElevation: !0,
                children: a("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ S(
      He,
      {
        open: y,
        onConfirm: () => h(!1),
        title: "",
        okText: a("Ok", o),
        cancelText: "",
        children: [
          '"',
          q.values.prefName.trim(),
          '": ',
          a("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ S(
      He,
      {
        open: !!x.preferenceName,
        onConfirm: ye,
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
}, Xi = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((a) => {
  t.lastIndex = 0;
  const o = t.exec(a);
  if (!o) return null;
  const [, l, i = "ASC"] = o;
  return {
    field: l.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), nt = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: a, type: o, isPivotExport: l = !1, icon: i }) => /* @__PURE__ */ S(
  Ra,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": a,
    "data-is-pivot-export": l,
    children: [
      /* @__PURE__ */ n(Ze, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: i }),
      e(o, r)
    ]
  }
), el = ({ exportFormats: e, customExportOptions: r, ...t }) => /* @__PURE__ */ S(jn, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(nt, { ...t, icon: /* @__PURE__ */ n(Fo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(nt, { ...t, icon: /* @__PURE__ */ n(wr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(nt, { ...t, icon: /* @__PURE__ */ n(wr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(nt, { ...t, icon: /* @__PURE__ */ n(Eo, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(nt, { ...t, icon: /* @__PURE__ */ n(To, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(nt, { ...t, icon: /* @__PURE__ */ n(Ao, { fontSize: "small" }), type: "JSON", contentType: "application/json" }),
  Array.isArray(r) && r.map((a, o) => /* @__PURE__ */ n(
    nt,
    {
      ...t,
      icon: a.icon || /* @__PURE__ */ n(wr, { fontSize: "small" }),
      type: a.label || "Excel",
      contentType: a.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      handleExport: a.handleExport || t.handleExport
    },
    a.key || o
  ))
] }), Zt = (e, r) => {
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
}, tl = (e = {}, r = {}) => {
  let t = !0;
  for (const a in e)
    e[a] !== r[a] && (t = !1);
  for (const a in r)
    a in e || (t = !1);
  return t;
};
ae.extend(Ma);
const rl = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: a,
  tTranslate: o,
  tOpts: l
}) => {
  const { systemDateTimeFormat: i, stateData: d } = Ge(), { fixedFilterFormat: m } = ze, C = j(() => r?.items?.find((h) => h.field === e.field), [r, e.field]), g = j(() => {
    const h = C?.operator || e.toolbarFilter?.defaultOperator || Zt(e.type);
    return ["isEmpty", "isNotEmpty"].includes(h) ? "" : C ? C.value : e.toolbarFilter?.defaultOperator === "isAnyOf" ? [] : "";
  }, [C, e.toolbarFilter?.defaultOperator, e.type]), c = A((h) => {
    const x = e.toolbarFilter?.defaultOperator || Zt(e.type);
    t((w) => {
      const s = w?.items || [];
      if (h === "" || h === null || Array.isArray(h) && h.length === 0) {
        const R = s.filter((T) => T.field !== e.field);
        return {
          ...w,
          items: R
        };
      }
      const v = {
        field: e.field,
        operator: x,
        value: h,
        type: e.type
      }, P = s.filter((R) => R.field !== e.field);
      return {
        ...w,
        items: [...P, v]
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
    const h = e.toolbarFilter?.label || e.headerName || e.label || e.field, x = e.toolbarFilter?.defaultOperator || Zt(e.type), w = f(x, e.type), v = e.type === "number" || e.type === "string" && x !== "startsWith" ? e.type === "number" ? `${w} ${h}` : `${h} (${w})` : h;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ n(
          it,
          {
            variant: "standard",
            label: o(v, l),
            value: g,
            onChange: (k) => c(k.target.value),
            type: "text",
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "number":
        return /* @__PURE__ */ n(
          it,
          {
            variant: "standard",
            label: o(v, l),
            value: g,
            onChange: (k) => c(k.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const k = g === "" || g === void 0 || g === null ? "" : g === !0 || g === "true" ? "true" : g === !1 || g === "false" ? "false" : "";
        return /* @__PURE__ */ S(wt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(ua, { children: o(v, l) }),
          /* @__PURE__ */ S(
            Fr,
            {
              value: k,
              onChange: (ye) => {
                const ie = ye.target.value;
                let re;
                ie === "" ? re = "" : ie === "true" ? re = !0 : ie === "false" ? re = !1 : re = ie, c(re);
              },
              size: "small",
              children: [
                /* @__PURE__ */ n(Ue, { value: "", children: o("All", l) }),
                /* @__PURE__ */ n(Ue, { value: "true", children: o("True", l) }),
                /* @__PURE__ */ n(Ue, { value: "false", children: o("False", l) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const P = e.customLookup || a?.[e.lookup] || [], R = typeof e.lookup == "string" ? P.map((k) => ({
          label: k?.label || "",
          value: k?.value ?? ""
        })) : P, T = C?.operator === "isAnyOf" || e.toolbarFilter?.defaultOperator === "isAnyOf", E = ze.normalizeFilterValue({ value: g, operator: C?.operator, isMultiple: T }), G = 1;
        return /* @__PURE__ */ S(wt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(ua, { children: o(v, l) }),
          /* @__PURE__ */ n(
            Fr,
            {
              value: E,
              onChange: (k) => c(k.target.value),
              multiple: T,
              size: "small",
              renderValue: (k) => {
                const ie = (Array.isArray(k) ? k : k != null && k !== "" ? [k] : []).map((W) => {
                  if (W && typeof W == "object" && "label" in W) return W.label;
                  const ve = R.find((D) => String(D.value) === String(W));
                  return ve ? ve.label : "";
                }).filter(Boolean);
                if (ie.length === 0) return "";
                if (ie.length <= G) return ie.join(", ");
                const re = ie.slice(0, G).join(", "), q = ie.length - G, Q = ie.join(", ");
                return /* @__PURE__ */ n(vt, { title: Q, placement: "top", children: /* @__PURE__ */ n("span", { children: `${re} +${q}` }) });
              },
              children: R.map((k) => /* @__PURE__ */ n(Ue, { value: k.value, children: k.label }, k.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const ne = e.type, U = m[ne === "dateTime" ? "datetime" : ne], ee = i(ne !== "dateTime", !1, d.dateTime), te = ne === "dateTime" ? $o : Vo;
        let Y = null;
        if (g) {
          const k = ae(g);
          Y = k.isValid() ? k : null;
        }
        return /* @__PURE__ */ n(Ia, { dateAdapter: Oa, children: /* @__PURE__ */ n(
          te,
          {
            label: o(v, l),
            format: ee,
            value: Y,
            onChange: (k) => {
              !k || !k.isValid() ? c(null) : c(k.format(U));
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
          it,
          {
            variant: "standard",
            label: o(v, l),
            value: g,
            onChange: (k) => c(k.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, _t = ar(Te)({
  margin: "6px"
}), al = ar(Wn)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), nl = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: a,
    isReadOnly: o,
    canAdd: l,
    forAssignment: i,
    showAddIcon: d,
    onAdd: m,
    selectionApi: C,
    rowSelectionModel: g,
    selectAll: c,
    available: f,
    onAssign: y,
    assigned: h,
    onUnassign: x,
    effectivePermissions: w,
    clearFilters: s,
    handleExport: v,
    preferenceKey: P,
    apiRef: R,
    tTranslate: T,
    tOpts: E,
    filterModel: G,
    setFilterModel: ne,
    onPreferenceChange: Z,
    toolbarItems: U,
    gridColumns: ee,
    customExportOptions: te
  } = e, Y = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), k = (W) => W != null && W !== "" && !(Array.isArray(W) && W.length === 0), ie = ((W = []) => W.filter(
    (ve) => ["isEmpty", "isNotEmpty"].includes(ve.operator) || k(ve.value)
  ))(G?.items || []).length || 0, re = ee?.filter((W) => W.toolbarFilter) || [], q = t?.lookups || {}, Q = t?.records || [];
  return /* @__PURE__ */ S(be, { children: [
    /* @__PURE__ */ S(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "10px"
        },
        children: [
          /* @__PURE__ */ S("div", { children: [
            r.gridSubTitle && /* @__PURE__ */ S(It, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              T(r.gridSubTitle, E)
            ] }),
            a && r.showPreferenceInHeader && /* @__PURE__ */ S(It, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              T("Applied Preference", E),
              ": ",
              a
            ] }),
            (o || !l && !i) && /* @__PURE__ */ S(It, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !l || o ? "" : r.title
            ] }),
            !i && l && !o && /* @__PURE__ */ n(_t, { startIcon: d ? /* @__PURE__ */ n(Ar, {}) : null, onClick: m, size: "medium", variant: "contained", children: T(Y, E) }),
            !!e.headerActions && e.headerActions,
            C.length && Q.length ? /* @__PURE__ */ n(
              _t,
              {
                onClick: c,
                size: "medium",
                variant: "contained",
                children: g.ids.size === Q.length ? T("Deselect All", E) : T("Select All", E)
              }
            ) : /* @__PURE__ */ n(be, {}),
            f && /* @__PURE__ */ n(_t, { startIcon: d ? /* @__PURE__ */ n(Ar, {}) : null, onClick: y, size: "medium", variant: "contained", children: T("Assign", E) }),
            h && /* @__PURE__ */ n(_t, { startIcon: d ? /* @__PURE__ */ n(Oo, {}) : null, onClick: x, size: "medium", variant: "contained", children: T("Remove", E) })
          ] }),
          /* @__PURE__ */ S(al, { ...e, children: [
            w.showColumnsOrder && /* @__PURE__ */ n(
              Un,
              {
                render: (W) => /* @__PURE__ */ n(
                  Te,
                  {
                    ...W,
                    startIcon: /* @__PURE__ */ n(Ro, {}),
                    size: "small",
                    variant: "text",
                    children: T("COLUMNS", E)
                  }
                )
              }
            ),
            w.filter && /* @__PURE__ */ S(be, { children: [
              /* @__PURE__ */ n(
                Hn,
                {
                  render: (W) => /* @__PURE__ */ n(
                    Te,
                    {
                      ...W,
                      startIcon: /* @__PURE__ */ n(mo, { badgeContent: ie, color: "primary", children: /* @__PURE__ */ n(ko, {}) }),
                      size: "small",
                      variant: "text",
                      children: T("FILTERS", E)
                    }
                  )
                }
              ),
              /* @__PURE__ */ n(Te, { startIcon: /* @__PURE__ */ n(Bo, {}), onClick: s, size: "small", children: T("CLEAR FILTER", E) })
            ] }),
            w.export && /* @__PURE__ */ n(el, { handleExport: v, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, customExportOptions: te, tTranslate: T, tOpts: E }),
            U,
            P && /* @__PURE__ */ n(
              Qi,
              {
                gridRef: R,
                preferenceKey: P,
                onPreferenceChange: Z,
                t: T,
                tOpts: E
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ n(Ee, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: re.length > 0 && /* @__PURE__ */ n("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: re.map((W) => /* @__PURE__ */ n(
      rl,
      {
        column: W,
        filterModel: G,
        setFilterModel: ne,
        lookupData: q,
        tTranslate: T,
        tOpts: E
      },
      W.field
    )) }) })
  ] });
}, ol = 50, il = /(\w+)( ASC| DESC)?/i, ll = 6e4, sl = 0, cl = 1e6, Oe = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, ul = {
  article: /* @__PURE__ */ n(Xn, {}),
  edit: /* @__PURE__ */ n(Ea, {}),
  copy: /* @__PURE__ */ n(Qn, {}),
  delete: /* @__PURE__ */ n(Fa, {}),
  history: /* @__PURE__ */ n(zo, {}),
  download: /* @__PURE__ */ n(Go, {})
}, _ = {
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
}, Ha = ["isEmpty", "isNotEmpty"], dl = (e) => (e || []).filter((r) => Ha.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), pl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], fl = (e) => e.value ? /* @__PURE__ */ n(vo, { style: { color: "green" } }) : /* @__PURE__ */ n(Er, { style: { color: "gray" } }), ha = ar("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), ml = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const a = Jn(), o = e.row[t], i = Da(a, Zn)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ n(
    ka,
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
}, ga = wa(({
  model: e,
  columns: r,
  api: t,
  defaultSort: a,
  setActiveRecord: o,
  parentFilters: l,
  parent: i,
  where: d,
  title: m,
  showPageTitle: C,
  permissions: g,
  selected: c,
  assigned: f,
  available: y,
  disableCellRedirect: h = !1,
  onAssignChange: x,
  customStyle: w,
  onCellClick: s,
  showRowsSelected: v,
  showFullScreenLoader: P,
  customFilters: R,
  onRowDoubleClick: T,
  onRowClick: E = () => {
  },
  gridStyle: G,
  reRenderKey: ne,
  additionalFilters: Z,
  onCellDoubleClickOverride: U,
  onAddOverride: ee,
  dynamicColumns: te,
  toolbarItems: Y,
  readOnly: k = !1,
  onListParamsChange: ye,
  apiRef: ie,
  baseFilters: re,
  customExportOptions: q,
  ...Q
}) => {
  const [W, ve] = O({ pageSize: ol, page: 0 }), [D, L] = O({ recordCount: 0, records: null, lookups: {} }), $ = !!x, K = v, [N, De] = O({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [ct, ut] = O(!1), [Ae, or] = O(null), Rt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [dt, pt] = O(!1), pe = Pt(), ft = e.paginationMode === _.client ? _.client : _.server, { t: Xe, i18n: kt } = Dt(), u = j(() => ({ t: Xe, i18n: kt }), [Xe, kt]), [mt, ir] = O(""), [ge, et] = O(Xi(a || e.defaultSort, _, il)), Se = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Se.items = [], e.defaultFilters.forEach((b) => {
    Se.items.push(b);
  }));
  const [Me, ke] = O({ ...Se }), { navigate: xe, getParams: Ft, useParams: Nt, pathname: Pe } = Lr(), { id: lr } = Nt() || Ft, Et = lr?.split("-")[0], Fe = ie || Sa(), { idProperty: se = "id", showHeaderFilters: Lt = !0, disableRowSelectionOnClick: $t = !0, hideTopFilters: Vt = !0, updatePageTitle: Tt = !0, isElasticScreen: ht = !1, navigateBack: sr = !1, selectionApi: Ye = {}, debounceTimeOut: cr = 300, showFooter: ur = !0, disableRowGrouping: V = !0 } = e, ce = e.readOnly === !0 || k, le = e.allowDoubleClick === !1, Ne = Sr(D), qe = e.showAddIcon === !0, tt = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: Ke, formatDate: gt, getApiEndpoint: bt, buildUrl: je, setPageTitle: dr } = Ge(), [Qa, zt] = O(!1), { timeZone: pr } = Ke, rt = j(() => ({ ..._.permissions, ...e.permissions, ...g }), [e.permissions, g]), $r = ["isEmpty", "isNotEmpty", "isAnyOf"], Xa = Ke.userData || {}, Gt = e.columns.find((b) => b.type === "fileUpload")?.field || "", en = { add: rt.add, edit: rt.edit, delete: rt.delete }, { canAdd: Vr, canEdit: zr, canDelete: Gr } = Ua({ userData: Xa, model: e, userDefinedPermissions: en }), p = e.tTranslate ?? ((b) => b), { addUrlParamKey: qt, searchParamKey: At, hideBreadcrumb: tn = !1, tableName: qr, showHistory: jr = !0, hideBreadcrumbInGrid: rn = !1, breadcrumbColor: an, disablePivoting: nn = !1, columnHeaderHeight: on = 70, disablePagination: Wr = !1 } = e, Ur = e.gridTitle || e.title, Mt = bt("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, _e = new URLSearchParams(window.location.search), [Hr, ln] = O(null), [Yr, sn] = O(!Mt), Le = t || e.api, [fr, mr] = O(null), cn = j(() => new Set(fr ? [fr] : []), [fr]), un = typeof e.getDetailPanelContent == "function", [dn, Kr] = O([]);
  de(() => {
    Fe.current && (Fe.current.prefKey = Mt);
  }, [Fe, Mt]);
  const _r = A((b) => {
    ln(b), sn(!0);
  }, []), pn = j(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? p(b.headerName, u) : b.headerName
  })) : [], [e.columnGroupingModel, u, Xe, p]);
  de(() => {
    Array.isArray(Q.rowGroupingField) && Kr(Q.rowGroupingField);
  }, [Q.rowGroupingField]);
  const hr = _e.has("baseData") && _e.get("baseData"), Jr = j(() => {
    if (hr)
      try {
        const b = JSON.parse(hr);
        if (typeof b === _.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [hr]), fn = A(({ row: b }) => {
    const M = b[se];
    De((I) => {
      const F = new Set(I?.ids || []);
      return F.has(M) ? F.delete(M) : F.add(M), { type: "include", ids: F };
    });
  }, [se]), Zr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b) => gt({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: Ke.dateTime, timeZone: pr }),
      filterOperators: Kt({ columnType: "date", label: p("Value", u) })
    },
    dateTime: {
      valueFormatter: (b) => gt({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Ke.dateTime, timeZone: pr }),
      filterOperators: Kt({ columnType: "datetime", label: p("Value", u) })
    },
    dateTimeLocal: {
      valueFormatter: (b) => gt({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Ke.dateTime, timeZone: pr }),
      filterOperators: Kt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: fl
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ n(ml, { params: b, handleSelectRow: fn, idProperty: se })
    }
  };
  de(() => {
    Ne.current = D;
  }, [D]), de(() => {
    if (!R || !Object.keys(R).length) return;
    if (R.clear) {
      ke({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(R).reduce((M, [I, F]) => (I === _.startDate || I === _.endDate ? M.push(F) : I in R && M.push({ field: I, value: F, operator: "equals", type: "string" }), M), []);
    ke({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [R]);
  const mn = A(({ field: b, lookupMap: M }) => (Ne.current.lookups || {})[(M || {})[b]?.lookup] || [], []);
  de(() => {
    Q.isChildGrid;
  }, [Q.isChildGrid, Vt]);
  const Qr = A(
    ({ key: b, title: M, icon: I, color: F = "primary", disabled: B, otherProps: J }) => /* @__PURE__ */ n(
      Pr,
      {
        icon: /* @__PURE__ */ n(vt, { title: p(M, u), children: ul[I] || I || p(M, u) }),
        "data-action": b,
        label: p(M, u),
        color: F,
        disabled: B,
        ...J
      },
      b
    ),
    [Xe, u, p]
  ), { customActions: jt = [] } = e, Wt = j(() => {
    const b = [];
    return !$ && !ce && b.push(
      {
        key: Oe.Edit,
        title: "Edit",
        icon: "edit",
        show: !!zr,
        disabled: (M) => M.canEdit === !1
      },
      {
        key: Oe.Copy,
        title: "Copy",
        icon: "copy",
        show: !!rt.copy
      },
      {
        key: Oe.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Gr
      },
      {
        key: Oe.History,
        title: "History",
        icon: "history",
        show: !!jr
      },
      ...jt
    ), b.push({
      key: Oe.Download,
      title: "Download document",
      icon: "download",
      show: Gt.length > 0
    }), b.filter(({ show: M }) => M !== !1);
  }, [
    $,
    ce,
    zr,
    Gr,
    jr,
    rt.copy,
    Gt.length,
    jt
  ]), hn = A(
    ({ row: b }) => Wt.map(
      ({ key: M, title: I, icon: F, color: B, disabled: J, show: z, action: X, ...oe }) => Qr({
        key: M,
        title: I || X,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: F,
        color: B,
        disabled: J?.(b),
        otherProps: oe
      })
    ),
    [Wt, Qr]
  ), { gridColumns: we, pinnedColumns: Xr, lookupMap: gr } = j(() => {
    let b = r || e.gridColumns || e.columns;
    te && (b = [...te, ...b]);
    const M = { left: [Yn.field], right: [] }, I = [], F = {}, B = { ...Zr, ...e.gridColumnTypes };
    for (const z of b) {
      if (z.gridLabel === null || i && z.lookup === i || z.type === _.oneToMany && z.countInList === !1) continue;
      const X = {};
      if (z.type === _.oneToMany && (X.type = "number", X.field = z.field.replace(/s$/, "Count")), B[z.type] && Object.assign(X, B[z.type]), X.valueOptions === _.lookup || z.type === _.boolean) {
        let ue = [];
        X.valueOptions === _.lookup && (X.valueOptions = (fe) => mn({ ...fe, lookupMap: F }), ue = [...va(), ...Kn()].filter((fe) => ["is", "not", "isAnyOf"].includes(fe.value))), z.type === _.boolean && (ue = _n()), X.filterOperators = ue.map((H) => ({
          ...H,
          InputComponent: H.InputComponent ? (fe) => /* @__PURE__ */ n(
            Ki,
            {
              column: {
                ...z,
                ...z.type === _.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Ne
              },
              ...fe,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (z.linkTo || z.link) && (X.cellClassName = "mui-grid-linkColumn"), V || (X.groupable = z.groupable ?? !1);
      const oe = p((typeof z.gridLabel == "function" ? z.gridLabel({ column: z, t: p, tOpts: u }) : z.gridLabel) || z.label, u);
      I.push({ ...z, ...X, headerName: oe, description: oe }), z.pinned && M[z.pinned === _.right ? _.right : _.left].push(z.field), F[z.field] = z;
    }
    let J = e.standard;
    return J === !0 && (J = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), J && typeof J === _.object && pl.forEach(({ key: z, field: X, type: oe, header: ue }) => {
      if (J[z] === !0) {
        const H = { field: X, type: oe, headerName: p(ue, u), width: 200 };
        oe === _.dateTime && (H.filterOperators = Kt({ columnType: "date" }), H.valueFormatter = Zr.dateTime.valueFormatter, H.keepLocal = !0), I.push(H);
      }
    }), Wt.length && (I.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? _.defaultActionWidth) * Wt.length,
      hidable: !1,
      getActions: hn,
      headerName: p("Actions", u)
    }), M.right.push("actions")), { gridColumns: I, pinnedColumns: M, lookupMap: F };
  }, [r, e, i, g, $, te, Xe, Ke?.dateTime]), br = Sr(!1);
  de(() => {
    if (br.current) return;
    const b = we?.filter((F) => F.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (Me.items.some(
      (F) => b.some((B) => B.field === F.field)
    )) {
      br.current = !0;
      return;
    }
    const I = b.map((F) => {
      const B = Zt(F.type, F.toolbarFilter?.defaultOperator), J = ze.normalizeFilterValue({
        operator: B,
        value: F.toolbarFilter.defaultFilterValue
      });
      return {
        field: F.field,
        operator: B,
        value: J,
        type: F.type
      };
    }).filter((F) => {
      const B = F.value;
      return !(Array.isArray(B) && B.length === 0);
    });
    I.length > 0 && ke((F) => ({
      ...F,
      items: [...F.items, ...I]
    })), br.current = !0;
  }, [we]);
  const $e = A(async ({ action: b = "list", extraParams: M = {}, isPivotExport: I = !1, contentType: F, columns: B } = {}) => {
    const { pageSize: J, page: z } = W, X = !!F, oe = je(I ? e.pivotApi : Le), ue = {
      ...Me,
      items: dl(Me.items)
    }, H = Array.isArray(re) ? [...re] : [];
    e.joinColumn && Et && H.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Et) }), Z && (ue.items = [...ue.items || [], ...Z]);
    const fe = [];
    Array.isArray(H) && fe.push(...H), Array.isArray(l) && fe.push(...l);
    const Ht = {
      ...M,
      ...Q.extraParams
      // Merge any custom params passed via component props
    };
    if ((f || y) && (Ht[f ? "include" : "exclude"] = Array.isArray(c) ? c.join(",") : c), I && (e.exportTemplate && (Ht.template = e.exportTemplate), e.configFileName && (Ht.configFileName = e.configFileName)), !(!ue.items.length || ue.items.every((yt) => "value" in yt && yt.value !== void 0))) return;
    const yr = {
      action: b,
      page: X ? sl : z,
      pageSize: X ? cl : J,
      sortModel: ge,
      filterModel: ue,
      gridColumns: we,
      model: e,
      baseFilters: fe,
      api: oe,
      extraParams: Ht
    };
    typeof ye == "function" && ye(yr), Fe.current.listParams = yr, X || zt(!0);
    try {
      const yt = await Mr({ ...yr, contentType: F, columns: B });
      !X && yt !== void 0 && L(yt);
    } catch {
      pe.showError(p("An error occurred while fetching data", u)), X || L((In) => ({ ...In, records: [], recordCount: 0 }));
    } finally {
      X || zt(!1);
    }
  }, [W, je, e, Le, Me, re, Et, f, y, c, Q.extraParams, ge, we, l, ye, Fe, Mr, pe, Z, pe]), at = A(async ({ id: b, record: M = {}, mode: I }) => {
    if (o) {
      try {
        const B = je(Le), J = await Xt({ id: b, api: B, model: e, parentFilters: l, where: d });
        o(J);
      } catch {
        pe.showError(p("Could not load record", u));
      }
      return;
    }
    let F = Pe;
    F.endsWith("/") || (F += "/"), I === "copy" ? F += "0-" + b : F += b, qt && (_e.set(qt, M[qt]), F += `?${_e.toString()}`), xe(F);
  }, [o, Le, e, l, d, Pe, qt, _e, xe, Xt, je, pe, p, u]), ea = A(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), gn = A(async (b, M, I) => {
    let F = b.field === e.linkColumn ? Oe.Edit : null;
    if (!F && b.field === _.actions && (F = I?.action, !F)) {
      const oe = M.target.closest("button");
      oe && (F = oe.dataset.action);
    }
    const { row: B } = b;
    if (!ce) {
      if (s && typeof await s({ cellParams: b, event: M, details: I }) !== _.boolean)
        return;
      const oe = gr[b.field] || {};
      if (oe.linkTo) {
        xe({
          pathname: Yt.replaceTags(oe.linkTo, B)
        });
        return;
      }
      switch (F) {
        case Oe.Edit:
          if (e.getDetailPanelContent) {
            const H = B[se];
            mr((fe) => fe === H ? null : H);
            return;
          } else
            return at({ id: B[se], record: B });
        case Oe.Copy:
          return at({ id: B[se], mode: "copy" });
        case Oe.Delete:
          ut(!0), or({ name: B[e.linkColumn], id: B[se] });
          break;
        case Oe.History:
          return xe(`${bt("history")}?tableName=${qr}&id=${B[se]}&breadCrumb=${At ? _e.get(At) : Ur}`);
        default:
          const ue = jt.find((H) => H.action === F && typeof H.onClick === _.function);
          if (ue) {
            ue.onClick({ row: B, navigate: xe });
            return;
          }
          break;
      }
    }
    if (F === Oe.Download && ea({ documentLink: B[Gt] }), !tt.length)
      return;
    const { row: J } = b, z = gr[b.field] || {}, X = {
      pathname: Yt.replaceTags(z.linkTo, J)
    };
    e.addRecordToState && (X.state = J), xe(X);
  }, [ce, s, gr, e, se, Gt, xe, tt, jt, qr, At, _e, Ur, bt, ea, at]), bn = A(async () => {
    const b = je(Le);
    try {
      await kr({ id: Ae.id, api: b, model: e }), pe.showMessage(p("Record Deleted Successfully.", u)), $e();
    } catch (M) {
      pe.showError(p("Delete failed", u), M.message);
    } finally {
      ut(!1);
    }
  }, [Le, Ae?.id, pe, e, $e, p, u]), ta = A(() => {
    ir(null), ut(!1);
  }, []), yn = A((b) => (typeof Q.processRowUpdate == "function" && Q.processRowUpdate(b, D), b), [Q.processRowUpdate, D]), Cn = A((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: M } = b;
    if (typeof U === _.function) {
      U(b);
      return;
    }
    if (!ce && !le && !h && at({ id: M[se], record: M }), ce && e.rowRedirectLink) {
      const I = {
        pathname: Yt.replaceTags(e.rowRedirectLink, M)
      };
      e.addRecordToState && (I.state = M), xe(I);
    }
    typeof T === _.function && T(b);
  }, [U, ce, le, h, at, se, e.rowRedirectLink, e.addRecordToState, xe, T, Yt]), xn = A(async () => {
    if (N.ids.size < 1) {
      pe.showError(p("Please select at least one record to proceed", u));
      return;
    }
    const b = Array.from(N.ids), M = new Map((D.records || []).map((B) => [B[se], B]));
    let I = b.map((B) => ({ ...Jr, ...M.get(B) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (I = I.map(
      (B) => Object.fromEntries(e.selectionUpdateKeys.map((J) => [J, B[J]]))
    ));
    const F = je(Ye || Le);
    zt(!0);
    try {
      const B = await Nr({
        id: 0,
        api: `${F}/updateMany`,
        values: { items: I },
        model: e
      });
      if (B) {
        $e();
        const J = B.info ? B.info : p("Record Added Successfully.", u);
        pe.showMessage(J);
      }
    } catch (B) {
      pe.showError(B.message || p("An error occurred, please try after some time.", u));
    } finally {
      zt(!1), De({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), pt(!1);
    }
  }, [N.ids, pe, D.records, se, Jr, e.selectionUpdateKeys, Ye, Le, e, $e, p, u]), ra = A(() => {
    if (Ye.length > 0) {
      if (N.ids.size > 0) {
        pt(!0);
        return;
      }
      pe.showError(
        p("Please select at least one record to proceed", u)
      );
      return;
    }
    typeof ee === _.function ? ee() : at({ id: 0 });
  }, [Ye, pe, ee, at, N.ids.size, p, u]), aa = A(() => {
    Me?.items?.length && ke({ ..._.gridFilterModel });
  }, [Me]), Ut = A(({ unassign: b, assign: M }) => {
    const I = Array.isArray(c) ? c : c.length ? c.split(",") : [], F = b ? I.filter((B) => !b.includes(parseInt(B))) : [...I, ...M];
    x(typeof c === _.string ? F.join(",") : F);
  }, [c, x]), na = A(() => {
    Ut({ assign: Array.from(N.ids) });
  }, [Ut, N.ids]), oa = A(() => {
    Ut({ unassign: Array.from(N.ids) });
  }, [Ut, N.ids]), ia = A(() => {
    const b = D.records || [];
    if (N.ids.size === b.length)
      De({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const I = b.map((F) => F[se]);
      De({
        type: "include",
        ids: new Set(I)
      });
    }
  }, [N, D.records, se]), wn = A((b) => b[se], [se]), la = A((b) => {
    if (D?.recordCount > ll) {
      pe.showMessage(p("Cannot export more than 60k records, please apply filters or reduce your results using filters", u));
      return;
    }
    const { orderedFields: M, columnVisibilityModel: I, lookup: F } = Fe.current.state.columns, B = b.target.dataset.isPivotExport === "true", J = Object.keys(I).filter((H) => I[H] === !1), z = new Set(we.filter((H) => H.exportable === !1).map((H) => H.field)), X = M.filter(
      (H) => !z.has(H) && !J.includes(H) && H !== "__check__" && H !== "actions"
    );
    if (X.length === 0) {
      pe.showMessage(p("You cannot export while all columns are hidden... please show at least 1 column before exporting", u));
      return;
    }
    const oe = {};
    X.forEach((H) => {
      const fe = F[H];
      oe[H] = { field: H, width: fe.width, headerName: fe.headerName || fe.field, type: fe.type, keepLocal: fe.keepLocal === !0, isParsable: fe.isParsable, lookup: fe.lookup };
    });
    const ue = e?.formActions?.export || B ? e?.formActions?.export || "export" : void 0;
    $e({
      action: ue,
      isPivotExport: B,
      contentType: b.target.dataset.contentType,
      columns: oe
    });
  }, [D?.recordCount, Fe, we, pe, e, $e, p, u]);
  de(() => {
    !Le || !Yr || $e();
  }, [Le, Yr, $e]), de(() => {
    if (!(Q.isChildGrid || $ || !Tt))
      return dr({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        dr(null);
      };
  }, [dr, e.pageTitle, e.title, Q.isChildGrid, $, Tt]);
  const vn = A((b) => {
    const { items: M } = b, I = M.map((F) => {
      const { field: B, operator: J, value: z } = F, oe = (we.find((ue) => ue.field === B) || {}).type === _.Number;
      return Ha.includes(J) ? { ...F, value: null } : oe && z < 0 ? { ...F, value: null } : $r.includes(J) || oe && !isNaN(z) || !oe ? (ht && we.filter((H) => H.field === B)[0]?.isKeywordField && (F.filterField = `${F.field}.keyword`), { ...F }) : { ...F, value: oe ? null : z };
    });
    ke({ ...b, items: I });
  }, [we, _.Number, $r, ht, ke]), Dn = A((b) => {
    const M = b.map((I) => {
      const F = we.filter((z) => z.field === I.field)[0] || {}, B = ht && F.isKeywordField, J = { ...I, filterField: B ? `${I.field}.keyword` : I.field };
      return F.dataIndex && (J.filterField = F.dataIndex), J;
    });
    et(M);
  }, [we, ht, et]), sa = m || e.gridTitle || e.title, Sn = At ? [{ text: _e.get(At) || sa }] : [{ text: sa }], Pn = A((b) => {
    mr(b.size > 0 ? [...b].pop() : null);
  }, []), Fn = A((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      mr(null), $e();
    },
    t: p,
    tOpts: u
  }) : null, [e.getDetailPanelContent, $e, p, u]), En = j(() => ({
    filterValueTrue: p("Yes", u),
    filterValueFalse: p("No", u),
    noRowsLabel: p("No data", u),
    footerTotalRows: `${p("Total rows", u)}:`,
    MuiTablePagination: {
      labelRowsPerPage: p("Rows per page", u),
      labelDisplayedRows: ({ from: b, to: M, count: I }) => `${b}–${M} ${p("of", u)} ${I}`
    },
    toolbarQuickFilterPlaceholder: p(e?.searchPlaceholder || "Search...", u),
    toolbarColumns: p("Columns", u),
    toolbarFilters: p("Filters", u),
    toolbarExport: p("Export", u),
    filterPanelAddFilter: p("Add filter", u),
    filterPanelRemoveAll: p("Remove all", u),
    filterPanelDeleteIconLabel: p("Delete", u),
    filterPanelColumns: p("Columns", u),
    filterPanelOperator: p("Operator", u),
    filterPanelValue: p("Value", u),
    filterPanelInputLabel: p("Value", u),
    filterPanelInputPlaceholder: p("Filter value", u),
    columnMenuLabel: p("Menu", u),
    columnMenuShowColumns: p("Show columns", u),
    columnMenuManageColumns: p("Manage columns", u),
    columnMenuFilter: p("Filter", u),
    columnMenuHideColumn: p("Hide column", u),
    columnMenuManagePivot: p("Manage pivot", u),
    toolbarColumnsLabel: p("Select columns", u),
    toolbarExportLabel: p("Export", u),
    pivotDragToColumns: p("Drag here to pivot by", u),
    pivotDragToRows: p("Drag here to group by", u),
    pivotDragToValues: p("Drag here to create values", u),
    pivotColumns: p("Pivot columns", u),
    pivotRows: p("Row groups", u),
    pivotValues: p("Values", u),
    pivotMenuRows: p("Rows", u),
    pivotMenuColumns: p("Columns", u),
    pivotMenuValues: p("Values", u),
    pivotToggleLabel: p("Pivot", u),
    pivotSearchControlPlaceholder: p("Search pivot columns", u),
    columnMenuUnsort: p("Unsort", u),
    columnMenuSortAsc: p("Sort by ascending", u),
    columnMenuSortDesc: p("Sort by descending", u),
    columnMenuUnpin: p("Unpin", u),
    columnsPanelTextFieldLabel: p("Find column", u),
    columnsPanelTextFieldPlaceholder: p("Column title", u),
    columnsPanelHideAllButton: p("Hide all", u),
    columnsPanelShowAllButton: p("Show all", u),
    pinToLeft: p("Pin to left", u),
    pinToRight: p("Pin to right", u),
    unpin: p("Unpin", u),
    filterValueAny: p("any", u),
    filterOperatorIs: p("is", u),
    filterOperatorNot: p("is not", u),
    filterOperatorIsAnyOf: p("is any of", u),
    filterOperatorContains: p("contains", u),
    filterOperatorDoesNotContain: p("does not contain", u),
    filterOperatorEquals: p("equals", u),
    filterOperatorDoesNotEqual: p("does not equal", u),
    filterOperatorStartsWith: p("starts with", u),
    filterOperatorEndsWith: p("ends with", u),
    filterOperatorIsEmpty: p("is empty", u),
    filterOperatorIsNotEmpty: p("is not empty", u),
    filterOperatorAfter: p("is after", u),
    filterOperatorOnOrAfter: p("is on or after", u),
    filterOperatorBefore: p("is before", u),
    filterOperatorOnOrBefore: p("is on or before", u),
    toolbarFiltersTooltipHide: p("Hide filters", u),
    toolbarFiltersTooltipShow: p("Show filters", u),
    //filter textfield labels
    headerFilterOperatorContains: p("contains", u),
    headerFilterOperatorEquals: p("equals", u),
    headerFilterOperatorStartsWith: p("starts with", u),
    headerFilterOperatorEndsWith: p("ends with", u),
    headerFilterOperatorIsEmpty: p("is empty", u),
    headerFilterOperatorIsNotEmpty: p("is not empty", u),
    headerFilterOperatorAfter: p("is after", u),
    headerFilterOperatorOnOrAfter: p("is on or after", u),
    headerFilterOperatorBefore: p("is before", u),
    headerFilterOperatorOnOrBefore: p("is on or before", u),
    headerFilterOperatorIs: p("is", u),
    "headerFilterOperator=": p("equals", u),
    "headerFilterOperator!=": p("does not equal", u),
    "headerFilterOperator>": p("greater than", u),
    "headerFilterOperator>=": p("greater than or equal to", u),
    "headerFilterOperator<": p("less than", u),
    "headerFilterOperator<=": p("less than or equal to", u),
    columnsManagementSearchTitle: p("Search", u),
    columnsManagementNoColumns: p("No columns", u),
    paginationRowsPerPage: p("Rows per page", u),
    paginationDisplayedRows: ({ from: b, to: M, count: I }) => `${b}–${M} ${p("of", u)} ${I}`,
    toolbarQuickFilterLabel: p("Search", u),
    toolbarFiltersTooltipActive: (b) => `${b} ${p(b === 1 ? "active filter" : "active filters", u)}`,
    columnHeaderSortIconLabel: p("Sort", u),
    filterPanelOperatorAnd: p("And", u),
    filterPanelOperatorOr: p("Or", u),
    noResultsOverlayLabel: p("No results found", u),
    columnHeaderFiltersTooltipActive: (b) => `${b} ${p(b === 1 ? "active filter" : "active filters", u)}`,
    detailPanelToggle: p("Detail panel toggle", u),
    checkboxSelectionHeaderName: p("Checkbox selection", u),
    columnsManagementShowHideAllText: p("Show/Hide all", u),
    noColumnsOverlayLabel: p("No columns", u),
    noColumnsOverlayManageColumns: p("Manage columns", u),
    columnsManagementReset: p("Reset", u),
    groupColumn: (b) => `${p("Group by", u)} ${b}`,
    unGroupColumn: (b) => `${p("Ungroup", u)} ${b}`,
    footerRowSelected: (b) => {
      const M = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${p(M, u)}`;
    }
  }), [p, u, e?.searchPlaceholder]), Tn = j(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: D,
      currentPreference: Hr,
      isReadOnly: ce,
      canAdd: Vr,
      forAssignment: $,
      showAddIcon: qe,
      onAdd: ra,
      selectionApi: Ye,
      rowSelectionModel: N,
      selectAll: ia,
      available: y,
      onAssign: na,
      assigned: f,
      onUnassign: oa,
      effectivePermissions: rt,
      clearFilters: aa,
      handleExport: la,
      preferenceKey: Mt,
      apiRef: Fe,
      gridColumns: we,
      tTranslate: p,
      tOpts: u,
      idProperty: se,
      filterModel: Me,
      setFilterModel: ke,
      onPreferenceChange: _r,
      toolbarItems: Y,
      headerActions: Q.headerActions,
      customExportOptions: q
    },
    footer: {
      pagination: Wr !== !0,
      apiRef: Fe,
      tTranslate: p,
      tOpts: u
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: p("Go to previous page", u),
        "aria-label": p("Go to previous page", u)
      },
      nextIconButtonProps: {
        title: p("Go to next page", u),
        "aria-label": p("Go to next page", u)
      }
    }
  }), [e, D, Hr, ce, Vr, $, qe, ra, Ye, N, ia, y, na, f, oa, rt, aa, la, Mt, Fe, we, p, u, se, Me, ke, _r, Y, Q.headerActions, q]), An = j(() => ({
    columns: {
      columnVisibilityModel: Rt
    },
    pinnedColumns: Xr
  }), [Rt, Xr]), Mn = j(() => ({
    headerFilterMenu: !1,
    toolbar: nl,
    footer: Ci
  }), []);
  return /* @__PURE__ */ S(be, { children: [
    C !== !1 && /* @__PURE__ */ n(
      Wa,
      {
        navigate: xe,
        showBreadcrumbs: !tn && !rn,
        breadcrumbs: Sn,
        enableBackButton: sr,
        breadcrumbColor: an,
        model: e
      }
    ),
    /* @__PURE__ */ S(Ee, { style: G || w, children: [
      /* @__PURE__ */ n(Ee, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        Pa,
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
          checkboxSelection: $,
          loading: !D.records || Qa,
          className: "pagination-fix",
          onCellClick: gn,
          onCellDoubleClick: Cn,
          columns: we,
          paginationModel: W,
          pageSizeOptions: _.pageSizeOptions,
          onPaginationModelChange: ve,
          pagination: !Wr,
          rowCount: D.recordCount,
          rows: D.records || [],
          sortModel: ge,
          paginationMode: ft,
          sortingMode: ft,
          filterMode: ft,
          processRowUpdate: yn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Dn,
          onFilterModelChange: vn,
          rowSelectionModel: N,
          onRowSelectionModelChange: De,
          filterModel: Me,
          getRowId: wn,
          onRowClick: E,
          slots: Mn,
          slotProps: Tn,
          hideFooterSelectedRowCount: K,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Fe,
          disableAggregation: !0,
          disableRowGrouping: V,
          disableRowSelectionOnClick: $t,
          disablePivoting: nn,
          filterDebounceMs: cr,
          initialState: An,
          ...un && {
            getDetailPanelContent: Fn,
            detailPanelExpandedRowIds: cn,
            onDetailPanelExpandedRowIdsChange: Pn
          },
          localeText: En,
          showToolbar: !0,
          columnHeaderHeight: on,
          hideFooter: !ur,
          rowGroupingModel: dn,
          onRowGroupingModelChange: (b) => Kr(b),
          getRowClassName: Q.getRowClassName,
          columnGroupingModel: pn
        }
      ) }),
      mt && /* @__PURE__ */ S(He, { open: !!mt, onConfirm: ta, onCancel: ta, title: "Info", hideCancelButton: !0, children: [
        " ",
        mt
      ] }),
      ct && !mt && /* @__PURE__ */ n(He, { open: ct, onConfirm: bn, onCancel: () => ut(!1), title: p("Confirm Delete", u), okText: p("Ok", u), cancelText: p("Cancel", u), children: /* @__PURE__ */ S(ha, { children: [
        p("Are you sure you want to delete", u),
        " ",
        Ae.name && /* @__PURE__ */ n(vt, { style: { display: "inline" }, title: Ae.name, arrow: !0, children: Ae.name.length > 30 ? `${Ae.name.slice(0, 30)}...` : Ae.name }),
        " ?"
      ] }) }),
      dt && /* @__PURE__ */ n(
        He,
        {
          open: dt,
          onConfirm: xn,
          onCancel: () => pt(!1),
          title: p("Confirm Add", u),
          okText: p("Ok", u),
          cancelText: p("Cancel", u),
          children: /* @__PURE__ */ S(ha, { children: [
            p("Are you sure you want to add", u),
            " ",
            N.ids.size,
            " ",
            p("records", { count: N.ids.size, ...u }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, tl), hl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = (d) => {
    t.setFieldValue(r, d.target.checked);
  }, l = j(() => t.values[r] ?? !!e.defaultValue, [t, e]), i = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ n(
      Uo,
      {
        control: /* @__PURE__ */ n(
          ka,
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
    /* @__PURE__ */ n(st, { error: t.touched[r] && !!t.errors[r], children: t.touched[r] && t.errors[r] })
  ] }, r);
}, Ir = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = St(), l = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
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
function Ya(e, r) {
  const [t, a] = O(e);
  return de(() => {
    const o = setTimeout(() => {
      a(e);
    }, r);
    return () => {
      clearTimeout(o);
    };
  }, [e, r]), t;
}
const ba = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, gl = {
  outlined: bo,
  filled: go,
  standard: ho
}, bl = () => /* @__PURE__ */ S(
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
      /* @__PURE__ */ n(
        Qt.Increment,
        {
          render: /* @__PURE__ */ n(Ot, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ n(
            Ho,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        Qt.Decrement,
        {
          render: /* @__PURE__ */ n(Ot, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ n(
            Na,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), yl = ({ column: e, otherProps: r, formik: t, field: a, ...o }) => {
  const { min: l, max: i, readOnly: d } = e, m = St(), C = j(
    () => ba({ value: l, state: t.values }),
    [l, t.values]
  ), g = j(
    () => ba({ value: i, state: t.values }),
    [i, t.values]
  ), c = j(() => t.values[a] ?? null, [t.values[a]]), [f, y] = O(c), h = Ya(f, 400);
  de(() => {
    h !== c && t.setFieldValue(a, h);
  }, [h]), de(() => {
    c !== f && y(c);
  }, [c]);
  const x = (T) => {
    y(T);
  }, w = (T) => {
    t.setFieldTouched(a, !0), typeof o.onBlur == "function" && o.onBlur(T);
  }, s = On(), v = `number-field-${a}-${s}`, P = e.variant || "standard", R = gl[P];
  return /* @__PURE__ */ S(
    Qt.Root,
    {
      value: f,
      onValueChange: x,
      min: C,
      max: g,
      disabled: d,
      render: (T, E) => /* @__PURE__ */ n(
        wt,
        {
          fullWidth: !0,
          ref: T.ref,
          error: t.touched[a] && !!t.errors[a],
          sx: d ? {
            backgroundColor: m.palette?.action?.disabled
          } : void 0,
          children: T.children
        }
      ),
      children: [
        /* @__PURE__ */ n(
          Qt.Input,
          {
            render: (T, E) => /* @__PURE__ */ n(
              R,
              {
                id: v,
                inputRef: T.ref,
                value: E.inputValue,
                onChange: T.onChange,
                onBlur: (G) => {
                  T.onBlur(G), w(G);
                },
                inputProps: {
                  ...T,
                  "aria-describedby": t.touched[a] && t.errors[a] ? `${v}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ n(bl, {}),
                sx: { pr: 0 },
                ...r
              }
            )
          }
        ),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ S(st, { id: `${v}-error`, error: !0, children: [
          " ",
          t.errors[a],
          " "
        ] })
      ]
    }
  );
}, Cl = ({ otherProps: e, ...r }) => {
  const [t, a] = xt.useState(!1), o = () => a((m) => !m), l = (m) => {
    m.preventDefault();
  }, { readOnly: i = !1, disabled: d = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: d,
      endAdornment: /* @__PURE__ */ n(Ta, { position: "end", children: /* @__PURE__ */ n(
        Ot,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: l,
          edge: "end",
          disabled: d,
          readOnly: i,
          size: "large",
          children: t ? /* @__PURE__ */ n(Yo, {}) : /* @__PURE__ */ n(Ko, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(Ir, { otherProps: e, ...r });
}, xl = ({ column: e, field: r, formik: t, otherProps: a, fieldConfigs: o = {}, mode: l }) => {
  const i = l !== "copy" && o.disabled, { systemDateTimeFormat: d, stateData: m } = Ge(), C = j(() => t.values[r] ? ae(t.values[r]) : null, [t.values[r]]), g = e.minField ? t.values[e.minField] : void 0, c = e.maxField ? t.values[e.maxField] : void 0, f = j(() => e.min ? ae(e.min) : e.minField && g ? ae(g) : null, [e.min, e.minField, g]), y = j(() => e.max ? ae(e.max) : e.maxField && c ? ae(c) : null, [e.max, e.maxField, c]), h = A((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const s = ae(x).hour(12).toISOString();
    t.setFieldValue(r, s);
  }, [r, t]);
  return /* @__PURE__ */ Br(
    Aa,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: d(!0, !1, m.dateTime),
      name: r,
      value: C,
      onChange: h,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: f,
      maxDate: y,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
}, wl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: l } = Ge(), i = j(() => t.values[r] ? ae(t.values[r]) : null, [t.values[r]]);
  return /* @__PURE__ */ Br(
    Tr,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, l.dateTime),
      name: r,
      value: i,
      onChange: (d) => t.setFieldValue(r, d),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? ae(e.min) : null,
      maxDateTime: e.max ? ae(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, vl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  let o = t.values[r];
  return e.isUtc && (o = ae.utc(o).utcOffset(ae().utcOffset(), !0).format()), /* @__PURE__ */ Br(
    _o,
    {
      ...a,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: ae(o),
      onChange: (l) => (e.isUtc && (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, l)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Dl = [null, void 0, ""];
function Ka({ column: e, formik: r, lookups: t, dependsOn: a = [], isAutoComplete: o = !1, userSelected: l, model: i }) {
  const [d, m] = O([]), { buildUrl: C } = Ge(), g = Pt(), c = C(i.api), f = j(() => {
    const x = {};
    if (!a.length) return x;
    for (const w of a)
      x[w] = r.values[w];
    return x;
  }, a.map((x) => r.values[x])), y = j(() => a.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, a]), h = A(async () => {
    if (!e.lookup) return;
    if (!Object.values(f).every(
      (w) => !Dl.includes(w)
    )) {
      m([]);
      return;
    }
    try {
      const w = await Ga({
        api: c,
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
  }, [e.lookup, f, c, i, t, g]);
  return de(() => {
    a.length ? h() : (o || !l.current) && m(y || []);
  }, [a.length, h, o, y]), d;
}
const Sl = xt.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], model: l, tTranslate: i, tOpts: d, ...m }) => {
  const C = xt.useRef(!1), { placeHolder: g } = e, c = Ka({ column: e, formik: t, lookups: a, dependsOn: o, userSelected: C, model: l }), f = St(), y = j(() => {
    let s = t.values[r];
    if (!s && !C.current && e.defaultValue !== void 0) {
      const v = e.defaultValue;
      if (v != null && v !== "" && c && c.length) {
        const P = c.find((R) => String(R.value) === String(v));
        P && (s = P.value, t.setFieldValue(r, P.value));
      }
    }
    if (c?.length && !s && !e.multiSelect && "IsDefault" in c[0]) {
      const v = c.find((P) => P.IsDefault);
      v && (s = v.value, t.setFieldValue(r, v.value));
    }
    return e.multiSelect && (!s || s.length === 0 ? s = [] : Array.isArray(s) || (s = s.split(",").map((v) => parseInt(v)))), s;
  }, [t.values[r], c, e.multiSelect, r]), h = A((s) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: s.target.value, options: c, event: s, t: i, tOpts: d }), t.handleChange(s), C.current = !0;
  }, [t.values[r], e.onChange, c]), x = j(() => e.multiSelect ? Array.isArray(y) && y.length > 0 : y !== "" && y !== null && y !== void 0 && Array.isArray(c) && c.some((s) => String(s.value) === String(y)), [y, e.multiSelect, c]), w = A((s) => {
    s.stopPropagation();
    const v = e.multiSelect ? [] : "";
    t.setFieldValue(r, v), typeof e.onChange == "function" && e.onChange({ formik: t, value: v, options: c, t: i, tOpts: d }), C.current = !0;
  }, [e.multiSelect, r, t, e.onChange, c, i, d]);
  return /* @__PURE__ */ S(
    nr,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(Zo, { children: g || "" }),
        /* @__PURE__ */ S(Ee, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ n(
            Qo,
            {
              IconComponent: Na,
              ...m,
              name: r,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(y) ? y : [] : `${y ?? ""}`,
              onChange: h,
              onBlur: t.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? f.palette?.action?.disabled : ""
              },
              children: Array.isArray(c) && c.map((s) => /* @__PURE__ */ n(Ra, { value: s.value, disabled: s.isDisabled, children: s.label }, s.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ n(
            Ot,
            {
              size: "small",
              onClick: w,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": i("Clear selection", d),
              children: /* @__PURE__ */ n(Jo, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ n(st, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), ya = ar("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Pl = ({ component: e, name: r, formik: t, field: a, column: o }) => {
  const { value: l } = t.getFieldProps(r || a), { setFieldValue: i } = t, d = e || o.relation, m = A((C) => {
    i(r || a, C);
  }, [i, r, a]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ n(ya, { children: `Available ${o.label}` }),
    /* @__PURE__ */ n(d, { selected: l, available: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ n(ya, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ n(d, { selected: l, assigned: !0, onAssignChange: m, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Fl = ({ field: e, formik: r, orientation: t = "row", label: a, lookups: o, fieldConfigs: l = {}, mode: i, tTranslate: d, tOpts: m, ...C }) => {
  const g = (x) => {
    r.setFieldValue(e, x.target.value);
  }, c = o ? o[C.column.lookup] : [], f = St(), y = r.touched[e] && !!r.errors[e], h = i !== "copy" && l.disabled;
  return /* @__PURE__ */ S(be, { children: [
    /* @__PURE__ */ n(wt, { component: "fieldset", error: y, children: /* @__PURE__ */ n(
      Rr,
      {
        row: t === "row",
        "aria-label": a,
        name: e,
        value: r.values[e] ?? "",
        onChange: g,
        children: c?.map((x, w) => /* @__PURE__ */ n(
          lt,
          {
            value: x.value,
            control: /* @__PURE__ */ n(Ct, {}),
            label: d(x.label, m),
            disabled: h || (C?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          w
        ))
      }
    ) }),
    y && /* @__PURE__ */ n(st, { style: { color: f.palette.error.main }, children: r.errors[e] })
  ] });
}, El = {
  limitTags: 5
}, Tl = Ve.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], fieldConfigs: l = {}, mode: i, model: d, ...m }) => {
  const C = Ka({ column: e, formik: t, lookups: a, dependsOn: o, model: d, isAutoComplete: !0 });
  let g = t.values[r] || [];
  Array.isArray(g) || (g = g.split(", ").map(Number));
  const c = C.filter((h) => g.includes(h.value)) || [], f = i !== "copy" && l.disabled, y = (h, x) => {
    let w = x?.map((s) => s.value) || [];
    e.dataFormat !== "array" && (w = w.length ? w.join(", ") : ""), t.setFieldValue(r, w);
  };
  return /* @__PURE__ */ S(
    nr,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ n(
          La,
          {
            ...m,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || El.limitTags,
            options: C || [],
            getOptionLabel: (h) => h.label || "",
            defaultValue: c,
            renderInput: (h) => /* @__PURE__ */ n(rr, { ...h, variant: "standard" }),
            onChange: y,
            value: c,
            size: "small",
            disabled: f
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ n(st, { children: t.errors[r] })
      ]
    },
    r
  );
}), Al = "#182eb5", Ml = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Il = yo(Co)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Al : "#ffffff",
  border: `1px solid ${ri[500]}`,
  color: r ? "white" : "black"
})), Ol = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ n(
  Il,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Bl = ({ name: e, field: r, formik: t, expired: a }) => {
  const { setFieldValue: o } = t, { value: l } = t.getFieldProps(e || r), i = "1000001", d = "0111110", m = "0".repeat(7), [C, g] = O(l || m), [c, f] = O(() => l ? l === i ? i : l === d ? d : "Custom" : ""), [y, h] = O(!1), x = A((v) => {
    if (Array.isArray(v)) {
      let P = m;
      for (const R of v)
        P = P.substring(0, R) + "1" + P.substring(R + 1);
      g(P), o(e || r, P), h(!0);
    } else {
      let P = y ? m : C;
      const R = P.slice(0, v) + (P[v] === "1" ? "0" : "1") + P.slice(v + 1);
      g(R), o(e || r, R), f("Custom"), h(!1);
    }
  }, [y, m, C, e, r, o]), w = St(), s = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ S(be, { children: [
    /* @__PURE__ */ n(wt, { component: "fieldset", error: s, children: /* @__PURE__ */ S(
      Rr,
      {
        row: !0,
        name: e || r,
        value: c,
        onChange: (v) => {
          const P = v.target.value;
          f(P), P !== "Custom" ? (g(P), o(e || r, P), h(!0)) : (g(m), o(e || r, m), h(!1));
        },
        children: [
          /* @__PURE__ */ n(lt, { value: i, control: /* @__PURE__ */ n(Ct, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ n(lt, { value: d, control: /* @__PURE__ */ n(Ct, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(lt, { value: "Custom", control: /* @__PURE__ */ n(Ct, {}), label: "Specific days" }),
          Ml.map((v, P) => /* @__PURE__ */ n(
            Ol,
            {
              day: v,
              onClick: () => x(P),
              isSelected: c === "Custom" && C[P] === "1",
              disabled: a
            },
            v.value
          ))
        ]
      }
    ) }),
    s && /* @__PURE__ */ n(st, { style: { color: w.palette.error.main }, children: t.errors[r] })
  ] });
}, Rl = ({ isAdd: e, column: r, field: t, formik: a, otherProps: o, fieldConfigs: l = {}, mode: i }) => {
  const d = St();
  let m = a.values[t] || [];
  Array.isArray(m) || (m = m.split(",").map((f) => f.trim()));
  const C = Ve.useMemo(() => i === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: a }) : !!r.disabled, [i, l.disabled, r.disabled]), g = r.hasDefault && !e ? [m[0]] : [], c = A((f, y, h, x = {}) => {
    const w = y.pop()?.trim();
    y.includes(w) || y.push(w), g && g.includes(x.option) && h === "removeOption" && (y = [x.option]), r.dataFormat !== "array" && (y = y.length ? y.join(",") : ""), a.setFieldValue(t, y);
  }, [a, t]);
  return /* @__PURE__ */ S(
    nr,
    {
      fullWidth: !0,
      variant: "standard",
      error: a.touched[t] && !!a.errors[t],
      children: [
        /* @__PURE__ */ n(
          La,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: m,
            options: [],
            renderInput: (f) => /* @__PURE__ */ n(
              rr,
              {
                ...f,
                variant: "standard",
                InputProps: {
                  ...f.InputProps,
                  sx: {
                    ...f.InputProps?.sx,
                    ...C && { backgroundColor: d.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: c,
            size: "small",
            renderTags: (f, y) => f.map((h, x) => {
              const { key: w, ...s } = y({ index: x });
              return /* @__PURE__ */ n(
                ni,
                {
                  label: h,
                  ...s,
                  disabled: g.includes(h)
                },
                w
              );
            }),
            disabled: C
          }
        ),
        a.touched[t] && a.errors[t] && /* @__PURE__ */ n(st, { children: a.errors[t] })
      ]
    },
    t
  );
}, kl = (e = []) => {
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
function Nl({ column: e, field: r, formik: t, lookups: a, fieldConfigs: o, mode: l }) {
  const i = a ? a[e.lookup] : [], d = kl(i), m = t.values[r]?.length ? t.values[r].split(", ") : [];
  let C;
  return l !== "copy" && (C = o?.disabled), /* @__PURE__ */ n(Ze, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    oi,
    {
      selectedItems: m,
      onSelectedItemsChange: (c, f) => {
        t.setFieldValue(r, f?.join(", ") || "");
      },
      disabled: C,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((c) => /* @__PURE__ */ n(pa, { itemId: c.value, label: c.label, children: c.children.map((f) => /* @__PURE__ */ n(pa, { itemId: f.value, label: f.label }, f.value)) }, c.value))
    }
  ) });
}
const Ll = { maxLength: 500 }, { errorMapping: $l } = ze, Vl = 1024 * 1024;
function zl({ column: e, field: r, formik: t }) {
  const a = t.values[r] || "", { getApiEndpoint: o } = Ge(), { maxSize: l, formats: i } = e, d = o("upload"), m = o("media"), C = o(), [g, c] = O({
    isExternal: "no",
    selectedFile: null
  }), [f, y] = O(!1), h = Pt(), { getParams: x, useParams: w } = Lr(), { associationId: s } = w() || x, v = s?.split("-")[0] || 1, P = (U) => {
    const ee = U.target.value;
    c({
      ...g,
      isExternal: ee,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, R = (U) => {
    t.setFieldValue(r, U.target.value);
  }, T = (U) => {
    const ee = U.target.files[0];
    if (ee) {
      if (l && ee.size > l * Vl) {
        h.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(ee.type)) {
        h.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      c((te) => ({ ...te, selectedFile: ee }));
    }
  }, E = async () => {
    if (g.selectedFile) {
      y(!0);
      try {
        const U = new FormData();
        U.append("file", g.selectedFile), U.append("DocumentGroupId", t.values.DocumentGroupId), U.append("AssociationId", v);
        const te = (await za({
          method: "POST",
          url: d,
          data: U,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!te.success) {
          h.showError(te.message || "Upload failed");
          return;
        }
        const Y = m + "/" + te.filePath;
        t.setFieldValue(r, Y);
      } catch (U) {
        const ee = (U.message.match(/status code (\d{3})/) || [])[1];
        h.showError($l[ee]);
      } finally {
        y(!1);
      }
    }
  }, G = new URL(C, window.location.origin).hostname.toLowerCase();
  xt.useEffect(() => {
    c({
      ...g,
      isExternal: a.toLowerCase().includes(G) ? "no" : "yes"
    });
  }, [a, c]);
  const ne = t.values[r]?.length > (e.max || Ll.maxLength), Z = ne ? "red" : "";
  return /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ S(Ee, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Be, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ S(
        Rr,
        {
          row: !0,
          value: g.isExternal,
          onChange: P,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(lt, { value: "yes", control: /* @__PURE__ */ n(Ct, {}), label: "Yes" }),
            /* @__PURE__ */ n(lt, { value: "no", control: /* @__PURE__ */ n(Ct, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ S(Ee, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Be, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ S(Ee, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        g.isExternal === "yes" ? /* @__PURE__ */ n(
          it,
          {
            fullWidth: !0,
            value: a,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: Z },
                "&.Mui-focused fieldset": { borderColor: Z },
                "&:hover fieldset": { borderColor: Z }
              }
            },
            onChange: R,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          it,
          {
            fullWidth: !0,
            value: a,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        ne && /* @__PURE__ */ S(Be, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    g.isExternal === "no" && /* @__PURE__ */ S(Ee, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ S(
        ot,
        {
          variant: "outlined",
          component: "label",
          disabled: f,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: T })
          ]
        }
      ),
      g.selectedFile && /* @__PURE__ */ n(vt, { title: g.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(Be, { variant: "body2", children: g.selectedFile.name.length > 20 ? `${g.selectedFile.name.substring(0, 20)}...` : g.selectedFile.name }) }),
      /* @__PURE__ */ n(
        ot,
        {
          variant: "contained",
          color: "primary",
          onClick: E,
          disabled: !g.selectedFile || f,
          children: f ? /* @__PURE__ */ n(xo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Gl = ({ field: e, formik: r }) => {
  const [t, a] = Ve.useState({}), o = Ya(t, 300);
  Ve.useEffect(() => {
    if (r.values[e])
      try {
        const i = JSON.parse(r.values[e]);
        a(i);
      } catch {
        a({});
      }
  }, [r.values[e]]), Ve.useEffect(() => {
    const i = JSON.stringify(o);
    r.values[e] !== i && r.setFieldValue(e, i);
  }, [o, e, r, r.values[e]]);
  const l = (i, d) => {
    const m = { ...t, [i]: d };
    a(m);
  };
  return /* @__PURE__ */ n(
    nr,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[e] && !!r.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(t).map((i) => /* @__PURE__ */ S(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ S(It, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              ii,
              {
                id: i,
                name: i,
                value: t[i],
                onChange: (d) => l(i, d.target.value),
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
}, ql = {
  boolean: hl,
  select: Sl,
  string: Ir,
  number: yl,
  password: Cl,
  date: xl,
  dateTime: wl,
  time: vl,
  oneToMany: Pl,
  radio: Fl,
  autocomplete: Tl,
  dayRadio: Bl,
  email: Ir,
  chipInput: Rl,
  treeCheckbox: Nl,
  fileUpload: zl,
  json: Gl
}, Ca = { paddingTop: "2.5px", paddingBottom: "2.5px" }, jl = ai("span")({
  color: "red !important"
}), _a = (e) => {
  const { t: r, i18n: t } = Dt(), a = Ve.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((l) => l);
  return { translate: r, i18n: t, tOpts: a, tTranslate: o };
}, Wl = ({ tabColumns: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: d, mode: m, handleSubmit: C }) => {
  const [g, c] = Ve.useState(/* @__PURE__ */ new Set()), { tOpts: f, tTranslate: y } = _a(r), { activeStep: h, setActiveStep: x } = Ve.useContext(Za), w = {};
  for (let E = 0, G = r.columns.length; E < G; E++) {
    const { field: ne, skip: Z } = r.columns[E];
    Z && (w[Z.step] = t.values[ne]);
  }
  const s = (E) => g.has(E) || w[E], v = () => {
    for (let E = h + 1; E < e.length; E++)
      if (!s(E))
        return !1;
    return !0;
  }, P = () => {
    let E = h + 1;
    for (; w[E]; )
      E++;
    c((G) => new Set(G).add(h)), E >= e.length || v() ? C() : x(E);
  }, R = () => {
    let E = h - 1;
    for (; w[E] && E > 0; )
      E--;
    x(E);
  };
  if (!e?.length)
    return null;
  const T = e[h];
  return /* @__PURE__ */ S(be, { children: [
    /* @__PURE__ */ n(Xo, { activeStep: h, sx: { marginBottom: "20px" }, children: e.map(({ title: E, key: G }, ne) => /* @__PURE__ */ n(ei, { completed: s(ne), children: /* @__PURE__ */ n(ti, { children: /* @__PURE__ */ n(Be, { sx: { fontSize: "20px" }, children: y(E, f) }) }) }, G)) }),
    /* @__PURE__ */ S(Ve.Fragment, { children: [
      /* @__PURE__ */ n(Ja, { formElements: T.items, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: d, mode: m }),
      /* @__PURE__ */ S(Ze, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        h !== 0 ? /* @__PURE__ */ n(Te, { color: "inherit", disabled: h === 0, onClick: R, variant: "contained", sx: { mr: 2 }, children: y("Back", f) }) : null,
        /* @__PURE__ */ n(Te, { onClick: P, variant: "contained", children: v() ? y("Finish", f) : y("Next", f) })
      ] })
    ] })
  ] });
}, Ja = ({ formElements: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: d, mode: m, isAdd: C }) => {
  const { tOpts: g, tTranslate: c } = _a(r);
  return e?.length ? /* @__PURE__ */ n(be, { children: e.map(({ Component: f, column: y, field: h, label: x, otherProps: w }, s) => {
    const v = typeof y.relation == "function";
    return /* @__PURE__ */ S(vr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: v ? "flex-start" : "center", children: [
      y?.showLabel !== !1 ? /* @__PURE__ */ n(vr, { size: { xs: 3 }, sx: Ca, children: /* @__PURE__ */ S(Be, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        c(y.label || h, g),
        ": ",
        y.required && /* @__PURE__ */ n(jl, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ n(vr, { size: { xs: v ? 12 : 9 }, sx: Ca, children: /* @__PURE__ */ n(f, { isAdd: C, model: r, fieldConfigs: d[h], mode: m, column: y, field: h, label: x, formik: t, data: a, onChange: o, combos: l, lookups: i, tTranslate: c, tOpts: g, ...w }) })
    ] }, s);
  }) }) : null;
}, Ul = function({ columns: e, tabs: r = {}, id: t, searchParams: a }) {
  const o = [], l = {};
  for (const d in r)
    l[d] = [];
  for (const d of e) {
    const m = d.type;
    if (d.label === null)
      continue;
    const { field: C, label: g, tab: c } = d, f = {};
    d.options && (f.options = d.options), d.dependsOn && (f.dependsOn = d.dependsOn);
    const y = ql[m];
    if (!y || d.hideInAddGrid && t === "0")
      continue;
    (c && r[c] ? l[c] : o).push({ Component: y, field: C, label: g, column: { ...d, readOnly: a.has("showRelation") || d.readOnly }, otherProps: f });
  }
  const i = [];
  for (const d in l)
    i.push({ key: d, title: r[d], items: l[d] });
  return { formElements: o, tabColumns: i };
}, Hl = ({ model: e, formik: r, data: t, combos: a, onChange: o, lookups: l, id: i, fieldConfigs: d, mode: m, handleSubmit: C }) => {
  const g = ze.emptyIdValues.includes(i), { formElements: c, tabColumns: f } = Ve.useMemo(() => {
    const y = e.formConfig?.showTabbed, h = new URLSearchParams(window.location.search), { formElements: x, tabColumns: w } = Ul({ columns: e.columns, tabs: y ? e.tabs : {}, id: i, searchParams: h });
    return { formElements: x, tabColumns: w, showTabs: y && w.length > 0 };
  }, [e]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ n(Ja, { isAdd: g, formElements: c, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: d, mode: m }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(Wl, { tabColumns: f, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: d, mode: m, handleSubmit: C }) })
  ] });
};
function Yl(e) {
  const { children: r, value: t, index: a, ...o } = e;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tabpanel",
      hidden: t !== a,
      id: `simple-tabpanel-${a}`,
      "aria-labelledby": `simple-tab-${a}`,
      ...o,
      children: t === a && /* @__PURE__ */ n(Ze, { sx: { p: 3 }, children: r })
    }
  );
}
function Kl(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const _l = wa(({ relation: e, parentFilters: r, parent: t, where: a, models: o, readOnly: l }) => {
  const i = o.find(({ name: C }) => C === e);
  if (!i) return null;
  const d = { ...i, hideBreadcrumb: !0 }, m = d instanceof er ? d : new er(d);
  return m ? /* @__PURE__ */ n(
    m.ChildGrid,
    {
      readOnly: l,
      parentFilters: r,
      parent: t,
      model: d,
      where: a,
      isChildGrid: !0
    }
  ) : null;
}), Jl = xt.memo(({ relations: e, parent: r, where: t = [], models: a, relationFilters: o, readOnly: l }) => {
  const [i, d] = O(0);
  return /* @__PURE__ */ S(Ze, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(Ze, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(si, { value: i, onChange: (C, g) => {
      d(g);
    }, "aria-label": "relations tabs", children: e.map((C, g) => {
      const c = a.find(({ name: y }) => y === C) || {}, f = c.listTitle || c.title || C;
      return /* @__PURE__ */ n(
        li,
        {
          label: f,
          ...Kl(g)
        },
        C
      );
    }) }) }),
    e.map((C, g) => /* @__PURE__ */ n(Yl, { value: i, index: g, children: /* @__PURE__ */ n(
      _l,
      {
        readOnly: l,
        relation: C,
        models: a,
        parentFilters: o[C] || [],
        parent: r,
        where: t
      },
      C
    ) }, C))
  ] });
}), Za = tr(1), Zl = {}, he = {
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
}, Ql = ({
  model: e,
  api: r,
  models: t,
  relationFilters: a = {},
  permissions: o = {},
  Layout: l = Hl,
  baseSaveData: i = {},
  sx: d,
  readOnly: m,
  beforeSubmit: C,
  deletePromptText: g,
  detailPanelId: c = null,
  // Grid Row Detail Panel Id
  onCancel: f,
  onSaveSuccess: y
}) => {
  const h = e.formTitle || e.title, { t: x, i18n: w } = Dt(), s = j(() => ({ t: x, i18n: w }), [x, w]), v = e?.tTranslate ?? ((V) => V), { navigate: P, getParams: R, useParams: T, pathname: E } = Lr(), { relations: G = [] } = e, { stateData: ne, buildUrl: Z, setPageTitle: U } = Ge(), ee = T() || R, { id: te = "" } = ee, Y = c || te.split("-")[he.editIdIndex], k = new URLSearchParams(window.location.search), ye = k.has(he.baseData) && k.get(he.baseData);
  if (ye) {
    const V = JSON.parse(ye);
    typeof V === he.object && V !== null && (i = { ...i, ...V });
  }
  const [ie, re] = O(!0), [q, Q] = O({}), [W, ve] = O({}), [D, L] = O(!1), $ = Pt(), [K, N] = O(null), [De, ct] = O(0), [ut, Ae] = O(!1), [or, Rt] = O(null), [dt, pt] = O(""), pe = typeof e.applyFieldConfig === he.function ? e.applyFieldConfig({ data: q, lookups: W }) : Zl, ft = Z(e.api), Xe = te.includes("-") && te.split("-")[0] === "0" ? "copy" : "", kt = ne.userData || {}, u = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: mt } = Ua({
    userData: kt,
    model: e,
    userDefinedPermissions: u
  }), { hideBreadcrumb: ir = !1, navigateBack: ge } = e, et = !("canEdit" in q) || q.canEdit, Se = A(() => {
    let V;
    switch (typeof ge) {
      case he.function:
        V = ge({ params: ee, searchParams: k, data: q });
        break;
      case he.number:
      case he.string:
        V = ge;
        break;
      default:
        V = E.substring(0, E.lastIndexOf("/"));
        break;
    }
    P(V);
  }, [ge, P, ee, k, q, E]), Me = j(() => ze.emptyIdValues.includes(Y), [Y]), ke = j(() => Me ? { ...e.initialValues, ...q, ...i } : { ...i, ...e.initialValues, ...q }, [e.initialValues, q, Y]), xe = r || ft, Ft = j(() => {
    if (c)
      return c;
    const V = te.split("-");
    return V.length > 1 ? V[he.loadIdIndex] : Y;
  }, [c, te, Y]), Nt = A(async () => {
    re(!0);
    try {
      const V = await Xt({
        api: xe,
        model: e,
        id: Ft
      });
      Fe(V);
    } catch (V) {
      Et("Could not load record", V.message);
    } finally {
      re(!1);
    }
  }, [xe, e, Ft]);
  de(() => {
    Nt();
  }, [Y, Ft, e, xe, Nt]), de(() => {
    N(e.getValidationSchema({ id: Y, tTranslate: v, tOpts: s }));
  }, [Y, e, N, x, s, v]);
  const Pe = Ba({
    enableReinitialize: !0,
    initialValues: ke,
    validationSchema: K,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (V, { resetForm: ce }) => {
      Object.keys(V).forEach((le) => {
        typeof V[le] === he.string && (V[le] = V[le].trim());
      }), re(!0), Nr({
        id: Y,
        api: ft,
        values: V,
        model: e
      }).then((le) => {
        if (!le) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof y === he.function && y();
        const Ne = le.info ? le.info : `Record ${Y === 0 ? "Added" : "Updated"} Successfully.`;
        $.showMessage(v(Ne, s)), ge !== !1 && Se(), ce({ values: Pe.values });
      }).catch((le) => {
        $.showError(
          v("An error occurred, please try after some time.", s),
          le
        ), e.reloadOnSave && ce();
      }).finally(() => {
        re(!1);
      });
    }
  }), lr = A(() => {
    Pe.resetForm(), Ae(!1), typeof f === he.function && f(), ge !== !1 && Se();
  }, [Pe, f, ge, Se]), Et = A((V, ce) => {
    re(!1), $.showError(v(V, s), ce), Se();
  }, [$, Se, v, s]), Fe = function({ id: V, title: ce, record: le, lookups: Ne }) {
    const qe = te.indexOf("-") > -1, tt = !V || V === "0", Ke = tt ? he.create : qe ? he.copy : he.edit, gt = tt ? "" : le[e.linkColumn], bt = [{ text: e.breadCrumbs }, { text: Ke }];
    qe && (le[e.linkColumn] = ""), e.columns.forEach((je) => {
      je.skipCopy && qe && (le[je.field] = "");
    }), Q(le), ve(Ne), re(!1), gt !== "" && bt.push({ text: gt }), U({
      showBreadcrumbs: !0,
      breadcrumbs: bt
    });
  }, se = A((V) => {
    Pe.dirty && et ? Ae(!0) : (typeof f === he.function && f(), ge !== !1 && Se()), V.preventDefault();
  }, [Pe.dirty, et, f, ge, Se]), Lt = A(async () => {
    try {
      L(!0), await kr({
        id: Y,
        api: r || e.api,
        model: e
      }) === !0 && ($.showMessage(v("Record Deleted Successfully.", s)), ge !== !1 && Se());
    } catch (V) {
      $.showError(v("An error occurred, please try after some time.", s), V?.message);
    } finally {
      L(!1);
    }
  }, [Y, r, e.api, $, pt, e, ge, Se, v, s]), $t = () => {
    pt(null), L(!1);
  }, Vt = A((V) => {
    const { name: ce, value: le } = V.target;
    Q({ ...q, [ce]: le });
  }, [q]), Tt = A(async (V) => {
    V && V.preventDefault(), typeof C === he.function && await C({ formik: Pe, model: e });
    const { errors: ce } = Pe;
    Pe.handleSubmit();
    const le = Object.keys(ce)[0], Ne = ce[le];
    Ne && $.showError(v(Ne, s), null, "error");
    const qe = e.columns.find(
      (tt) => tt.field === le
    ) || {};
    qe.tab && ct(Object.keys(e.tabs).indexOf(qe.tab));
  }, [C, Pe, e, $, ct, v, s]), ht = [
    { text: v(h, s) },
    { text: v(Y === "0" ? "New" : "Update", s) }
  ], sr = Number(Y) !== 0 && !!G.length, Ye = k.has("showRelation"), cr = !et || q.readOnlyRelations;
  g = g || v("Are you sure you want to delete ?", s);
  const { showPageTitle: ur = !0 } = e;
  return /* @__PURE__ */ S(be, { children: [
    ur && /* @__PURE__ */ n(
      Wa,
      {
        navigate: P,
        title: h,
        showBreadcrumbs: !ir,
        breadcrumbs: ht,
        model: e,
        enableBackButton: ge !== void 0
      }
    ),
    /* @__PURE__ */ n(Za.Provider, { value: { activeStep: De, setActiveStep: ct }, children: /* @__PURE__ */ S(qo, { sx: { padding: 2, ...d }, children: [
      ie ? /* @__PURE__ */ n(Ze, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ n(Wo, {}) }) : /* @__PURE__ */ S("form", { children: [
        /* @__PURE__ */ S(
          jo,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              mt && et && !Ye && !m && /* @__PURE__ */ n(
                Te,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Tt,
                  children: v("Save", s)
                }
              ),
              /* @__PURE__ */ n(
                Te,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: se,
                  children: v("Cancel", s)
                }
              ),
              o.delete && /* @__PURE__ */ n(
                Te,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => L(!0),
                  children: v("Delete", s)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(
          l,
          {
            model: e,
            formik: Pe,
            data: q,
            fieldConfigs: pe,
            onChange: Vt,
            lookups: W,
            id: Y,
            handleSubmit: Tt,
            mode: Xe
          }
        )
      ] }),
      dt && /* @__PURE__ */ S(
        He,
        {
          open: !!dt,
          onConfirm: $t,
          onCancel: $t,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            dt
          ]
        }
      ),
      /* @__PURE__ */ n(
        He,
        {
          open: ut,
          onConfirm: lr,
          onCancel: () => Ae(!1),
          title: v("Changes not saved", s),
          okText: v("Discard", s),
          cancelText: v("Continue", s),
          children: v("Would you like to continue to edit or discard changes?", s)
        }
      ),
      /* @__PURE__ */ n(
        He,
        {
          open: D,
          onConfirm: Lt,
          onCancel: () => {
            L(!1), Rt(null);
          },
          title: v(or ? "Error Deleting Record" : "Confirm Delete", s),
          children: g
        }
      ),
      sr ? /* @__PURE__ */ n(
        Jl,
        {
          readOnly: cr,
          models: t,
          relationFilters: a,
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
}, Xl = {}, xa = !0, es = {
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
  constructor(r) {
    const { title: t = "" } = r;
    let { api: a, idProperty: o = a + "Id" } = r;
    const l = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    a || (a = `${t.replaceAll(Jt.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const i = { ...r.defaultValues }, d = l || t;
    Object.assign(this, {
      standard: !0,
      name: d,
      permissions: { ...er.defaultPermissions },
      idProperty: o,
      linkColumn: `${d}Name`,
      overrideFileName: t,
      preferenceId: d,
      tableName: d,
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
      r[a] = t.defaultValue === void 0 ? es[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: a = {} } = {}) {
    const { columns: o } = this, l = {};
    for (const i of o) {
      const { field: d, label: m, header: C, type: g = "string", requiredIfNew: c = !1, required: f = !1, min: y = "", max: h = "", validate: x } = i, w = m || C || d;
      if (!w || m === null || m === "") continue;
      let s;
      switch (g) {
        case "string":
          s = me.string().nullable().trim().label(w), y && !isNaN(Number(y)) && (s = s.min(Number(y), t(`${w} must be at least ${y} characters long`, a))), h && !isNaN(Number(h)) && (s = s.max(Number(h), t(`${w} must be at most ${h} characters long`, a))), f && (s = s.trim().required(t(`${w} is required`, a)));
          break;
        case "boolean":
          s = me.bool().nullable().transform((v, P) => P === "" ? null : v).label(w);
          break;
        case "radio":
        case "dayRadio":
          s = me.mixed().label(w), f && (s = s.required(t(`Select at least one option for ${w}`, a)));
          break;
        case "date":
          s = me.date().nullable().transform((v, P) => P === "" || P === null ? null : v).label(w), f && (s = s.required(t(`${w} is required`, a)));
          break;
        case "dateTime":
          s = me.date().nullable().transform((v, P) => P === "" || P === null ? null : v).label(w), f && (s = s.required(t(`${w} is required`, a)));
          break;
        case "select":
        case "autocomplete":
          f ? s = me.string().trim().label(w).required(t(`Select at least one ${w}`, a)) : s = me.string().nullable();
          break;
        case "password":
          s = me.string().label(w).test("ignore-asterisks", t(`${w} must be a valid password.`, a), (v) => {
            if (v === "******") return !0;
            const P = Number(y) || 8, R = Number(h) || 50, T = i.regex || Jt.password;
            return me.string().min(P, t(`${w} must be at least ${P} characters`, a)).max(R, t(`${w} must be at most ${R} characters`, a)).matches(
              T,
              t(`${w} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, a)
            ).isValidSync(v);
          });
          break;
        case "email":
          s = me.string().trim().matches(
            i.regex || Jt.email,
            t("Email must be a valid email", a)
          );
          break;
        case "number":
          f ? s = me.number().label(w).required(t(`${w} is required.`, a)) : s = me.number().nullable(), y !== void 0 && y !== "" && !isNaN(Number(y)) && (s = s.min(Number(y), t(`${w} must be greater than or equal to ${y}`, a))), h !== void 0 && h !== "" && !isNaN(Number(h)) && (s = s.max(Number(h), t(`${w} must be less than or equal to ${h}`, a)));
          break;
        case "fileUpload":
          s = me.string().trim().label(w);
          break;
        default:
          s = me.mixed().nullable().label(w);
          break;
      }
      if (f && g !== "string" && (s = s.required(t(`${w} is required`, a))), c && (!r || r === "") && (s = s.trim().required(t(`${w} is required`, a))), x) {
        const v = Jt.compareValidatorRegex.exec(x);
        if (v) {
          const P = v[1], R = o.find(
            (T) => (T.formField === P || T.field) === P
          );
          s = s.oneOf(
            [me.ref(P)],
            t(`${w} must match ${R.label}`, a)
          );
        }
      }
      l[d] = s;
    }
    return me.object({ ...l, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ n(Ql, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ n(ga, { model: this, showRowsSelected: xa, ...t });
  ChildGrid = (r) => /* @__PURE__ */ S(be, { children: [
    /* @__PURE__ */ n(ga, { model: this, ...r, customStyle: Xl, showRowsSelected: xa }),
    /* @__PURE__ */ n(wo, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  He as DialogComponent,
  ga as GridBase,
  Gi as HelpModal,
  fa as MuiTypography,
  Wa as PageTitle,
  Pc as RouterProvider,
  $a as SnackbarContext,
  vc as SnackbarProvider,
  Sc as StateProvider,
  er as UiModel,
  Dc as crudHelper,
  Di as daDKGrid,
  Pi as deDEGrid,
  Ei as elGRGrid,
  Ai as esESGrid,
  Ii as frFRGrid,
  Je as httpRequest,
  Bi as itITGrid,
  zi as locales,
  Li as ptPT,
  ki as trTRGrid,
  vi as useMobile,
  Lr as useRouter,
  Pt as useSnackbar,
  Ge as useStateContext
};
//# sourceMappingURL=index.js.map
