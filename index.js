import { jsx as n, jsxs as v, Fragment as ge } from "react/jsx-runtime";
import * as Le from "react";
import gt, { createContext as rr, useContext as Mr, useState as B, useEffect as ce, useRef as vr, useCallback as A, useMemo as U, memo as xa, useId as Mn, createElement as Ir } from "react";
import In from "@mui/material/Snackbar";
import On from "@mui/material/Alert";
import Se from "@mui/material/Button";
import Bn from "@mui/material/Dialog";
import Rn from "@mui/material/DialogActions";
import kn from "@mui/material/DialogContent";
import Nn from "@mui/material/DialogContentText";
import Ln from "@mui/material/DialogTitle";
import * as et from "@mui/x-data-grid-premium";
import { GridFooterContainer as $n, GridFooter as zn, getGridDateOperators as wa, useGridSelector as va, gridFilterModelSelector as Vn, useGridApiRef as Da, GridActionsCellItem as Dr, DataGridPremium as Pa, GridToolbarExportContainer as Gn, Toolbar as qn, ColumnsPanelTrigger as Wn, FilterPanelTrigger as jn, GRID_CHECKBOX_SELECTION_COL_DEF as Un, getGridStringOperators as Hn, getGridBooleanOperators as Yn, useGridApiContext as Kn, gridRowSelectionStateSelector as _n } from "@mui/x-data-grid-premium";
import Sa from "@mui/icons-material/Delete";
import Jn from "@mui/icons-material/FileCopy";
import Zn from "@mui/icons-material/Article";
import Fa from "@mui/icons-material/Edit";
import Xe from "@mui/material/Box";
import Ot from "@mui/material/Typography";
import ar from "@mui/material/TextField";
import { useTranslation as yt, withTranslation as Qn } from "react-i18next";
import { Typography as Ie, Dialog as Xn, DialogTitle as eo, Grid as ye, DialogContent as to, Card as ro, CardContent as ao, Breadcrumbs as no, Link as oo, Button as ot, IconButton as Qt, Box as Pe, FormControl as bt, Select as Pr, MenuItem as Ue, Tooltip as Bt, Menu as io, List as lo, ListItemButton as yr, ListItemIcon as Cr, ListItem as so, ListItemText as co, TextField as it, FormControlLabel as lt, Checkbox as uo, Stack as la, InputLabel as sa, Badge as po, FormHelperText as st, useTheme as Ct, Input as fo, FilledInput as mo, OutlinedInput as ho, InputAdornment as Ta, RadioGroup as Or, Radio as ht, styled as go, Avatar as bo, CircularProgress as yo, Divider as Co } from "@mui/material";
import xo from "@mui/icons-material/Check";
import Sr from "@mui/icons-material/Close";
import wo from "@mui/icons-material/Help";
import { Replay as vo, Close as Do, GridOn as Po, TableChart as ca, Code as So, Language as Fo, DataObject as To } from "@mui/icons-material";
import te from "dayjs";
import Eo from "dayjs/plugin/utc";
import Ao from "dayjs/plugin/timezone";
import { DatePicker as Ea } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Fr } from "@mui/x-date-pickers/DateTimePicker";
import Aa from "dayjs/plugin/utc.js";
import { LocalizationProvider as Ma } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Ia } from "@mui/x-date-pickers/AdapterDayjs";
import Tr from "@mui/icons-material/Add";
import Mo from "@mui/icons-material/Remove";
import Io from "@mui/icons-material/FilterListOff";
import Oo from "@mui/icons-material/ViewColumn";
import Bo from "@mui/icons-material/FilterList";
import { styled as nr } from "@mui/material/styles";
import Ro from "@mui/icons-material/Save";
import ua from "@mui/icons-material/Settings";
import ko from "@mui/icons-material/Refresh";
import { useFormik as Oa } from "formik";
import * as ue from "yup";
import { DateTimePicker as No, DatePicker as Lo } from "@mui/x-date-pickers";
import Ba from "@mui/material/MenuItem";
import $o from "@mui/icons-material/History";
import zo from "@mui/icons-material/FileDownload";
import Ra from "@mui/material/Checkbox";
import Vo from "@mui/material/Paper";
import Go from "@mui/material/Stack";
import qo from "@mui/material/CircularProgress";
import Wo from "@mui/material/FormControlLabel";
import { NumberField as Xt } from "@base-ui/react/number-field";
import jo from "@mui/icons-material/KeyboardArrowUp";
import ka from "@mui/icons-material/KeyboardArrowDown";
import Uo from "@mui/icons-material/VisibilityOff";
import Ho from "@mui/icons-material/Visibility";
import { TimePicker as Yo } from "@mui/x-date-pickers/TimePicker";
import or from "@mui/material/FormControl";
import Ko from "@mui/material/InputLabel";
import _o from "@mui/material/Select";
import xr from "@mui/material/Grid";
import Na from "@mui/material/Autocomplete";
import Jo from "@mui/material/Stepper";
import Zo from "@mui/material/Step";
import Qo from "@mui/material/StepLabel";
import { grey as Xo } from "@mui/material/colors";
import ei from "@emotion/styled";
import ti from "@mui/material/Chip";
import { SimpleTreeView as ri } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as da } from "@mui/x-tree-view/TreeItem";
import ai from "@mui/material/Input";
import ni from "@mui/material/Tab";
import oi from "@mui/material/Tabs";
const La = rr(null), ii = "bottom", li = "center", si = gt.forwardRef(function(r, t) {
  return /* @__PURE__ */ n(On, { elevation: 6, ref: t, variant: "filled", ...r });
}), bc = ({ children: e }) => {
  const [r, t] = B(null), [a, o] = B(!1), [l, i] = B(null), [u, f] = B(null), x = function(p, w, m = "info", h) {
    typeof p != "string" && (p = p.toString()), w && typeof w != "string" && (w = w.toString()), t(w ? `${p}: ${w}` : p), i(m), o(!0), f(h);
  }, g = function(p, w, m = "error", h) {
    x(p, w, m, h);
  }, d = function() {
    o(!1), f(null), u && u();
  };
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ n(
      La.Provider,
      {
        value: { showMessage: x, showError: g },
        children: e
      }
    ),
    /* @__PURE__ */ n(In, { open: a, autoHideDuration: 6e3, onClose: d, anchorOrigin: { vertical: ii, horizontal: li }, children: /* @__PURE__ */ n(si, { severity: l, children: r }) })
  ] });
}, xt = function() {
  return Mr(La);
}, He = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: a, okText: o, cancelText: l, yesNo: i = !1, children: u, maxWidth: f = "sm", fullWidth: x = !0, ...g }) => (o = o || (i ? "Yes" : "Ok"), l = l || (i ? "No" : "Cancel"), /* @__PURE__ */ v(
  Bn,
  {
    ...g,
    open: e,
    onClose: a,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: f,
    fullWidth: x,
    children: [
      /* @__PURE__ */ n(Ln, { id: "alert-dialog-title", sx: { fontSize: u ? "inherit" : "1.25rem" }, children: t }),
      u && /* @__PURE__ */ n(kn, { dividers: !0, children: /* @__PURE__ */ n(Nn, { children: u }) }),
      (a || r) && /* @__PURE__ */ v(Rn, { children: [
        a && /* @__PURE__ */ n(Se, { onClick: a, children: l }),
        r && /* @__PURE__ */ n(Se, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), wr = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, $a = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, ci = (e, r) => {
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
  } = e, u = {
    method: r,
    credentials: l,
    headers: {
      ...o
    },
    ...i
  };
  a && (o["Content-Type"] === "multipart/form-data" ? (delete u.headers["Content-Type"], u.body = a instanceof FormData ? a : $a(a)) : (u.headers["Content-Type"] = o["Content-Type"] || "application/json", u.body = typeof a == "string" ? a : JSON.stringify(a)));
  const f = await fetch(t, u), x = f.headers.get("content-type") || {};
  return {
    status: f.status,
    data: x.includes("application/json") ? await f.json() : await f.text(),
    headers: Object.fromEntries(f.headers.entries())
  };
}, Rt = (e) => e?.message || e?.info || e?.error || e?.err, Oe = Object.freeze({
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
}), Qe = async ({
  url: e,
  params: r = {},
  history: t,
  jsonPayload: a = !1,
  additionalParams: o = {},
  additionalHeaders: l = {},
  dataParser: i = Oe.raw,
  onParseError: u
}) => {
  if (r.exportData)
    return ci(e, r);
  const f = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: a ? { ...l } : { "Content-Type": "multipart/form-data", ...l },
    ...o
  };
  r && Object.keys(r).length > 0 && (f.data = a ? r : $a(r));
  try {
    const x = await za(f);
    let g = x.data;
    if (x.status === wr.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (x.status === wr.FORBIDDEN)
      return { error: !0, message: g.message || "Access Denied!" };
    if (x.status !== wr.OK)
      return { error: !0, message: g.message || "An error occurred" };
    try {
      g = i(g);
    } catch (d) {
      return u ? u(d, g) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: d.message,
        rawData: g
      };
    }
    return g;
  } catch (x) {
    return { error: !0, message: x.message || "Network error" };
  }
}, ui = ["date", "dateTime"], di = ["singleSelect"], pi = 1e6, fi = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset();
function mi(e) {
  const { operator: r, value: t, type: a } = e, o = ["isEmpty", "isNotEmpty"].includes(r), l = t != null && (t !== "" || a === "number" && t === 0 || a === "boolean" && t === !1);
  return o || l;
}
const hi = ({ gridColumns: e, page: r, pageSize: t, sortModel: a, filterModel: o, baseFilters: l, action: i = "list", extraParams: u = {}, model: f, api: x }) => {
  const g = i === "export" && f.isElasticExport === !0, d = [], p = [], w = [];
  e.forEach(({ lookup: P, type: k, field: E, keepLocal: T = !1, keepLocalDate: V, filterable: le = !0, dependsOn: J }) => {
    ui.includes(k) && w.push({ field: E, keepLocal: T, keepLocalDate: V }), P && !d.includes(P) && di.includes(k) && le && (d.push(P), p.push({ lookup: P, dependsOn: J }));
  });
  const m = [];
  o?.items?.length && o.items.forEach((P) => {
    if (mi(P)) {
      const { field: k, operator: E, filterField: T } = P;
      let { value: V } = P;
      const J = e.filter((q) => q?.field === P.field)[0]?.type;
      J === "boolean" ? V = V === "true" || V === !0 ? 1 : 0 : J === "number" && (V = Array.isArray(V) ? V.filter((q) => q) : V), V = P.filterValues || V, m.push({
        field: T || k,
        operator: E,
        value: V,
        type: J
      });
    }
  }), l && Array.isArray(l) && m.push(...l);
  const h = {
    start: r * t,
    limit: g ? f.exportSize || pi : t,
    ...u,
    logicalOperator: o.logicOperator,
    sort: a.map((P) => (P.filterField || P.field) + " " + P.sort).join(","),
    where: m,
    isElasticExport: g,
    model: f.module,
    fileName: f.overrideFileName
  };
  d.length && (h.lookups = d.join(",")), p.length && (h.lookupWithDeps = JSON.stringify(p)), f?.limitToSurveyed && (h.limitToSurveyed = f?.limitToSurveyed);
  let C = `${x}/${i}`;
  const b = new URLSearchParams();
  u.template && b.append("template", u.template), u.configFileName && b.append("configFileName", u.configFileName);
  const D = b.toString();
  return D && (C += `?${D}`), { requestData: h, url: C, where: m, dateColumns: w };
}, Er = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: a = {}, action: o = "list", model: l } = e, { requestData: i, url: u, where: f, dateColumns: x } = hi(e);
  if (r) {
    i.responseType = r, i.columns = t, i.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof l.createRequestPayload == "function" && await l.createRequestPayload(i, { where: f, url: u, dataParsers: Oe, ...e });
    const p = document.createElement("form");
    if (p.setAttribute("method", "POST"), p.setAttribute("id", "exportForm"), p.setAttribute("target", "_blank"), !a.template)
      for (const w in i) {
        let m = i[w];
        if (m == null)
          continue;
        typeof m != "string" && (m = JSON.stringify(m));
        const h = document.createElement("input");
        h.type = "hidden", h.name = w, h.value = m, p.append(h);
      }
    p.setAttribute("action", i.url || u), document.body.appendChild(p), p.submit(), setTimeout(() => {
      p.remove();
    }, 0);
    return;
  }
  const g = {
    url: u,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0,
    params: i,
    dataParser: Oe.json
  };
  typeof l.createRequestPayload == "function" && await l.createRequestPayload(g, { where: f, dataParsers: Oe, ...e });
  const d = await Qe(g);
  if (d?.error || d?.success === !1)
    throw new Error(Rt(d) || "An error occurred while fetching data");
  return typeof l.parseResponsePayload == "function" && l.parseResponseActions.includes(o) ? await l.parseResponsePayload({ responseData: d, model: l, dateColumns: x, action: o, ...e }) : (d.records.forEach((p) => {
    x.forEach((w) => {
      const { field: m, keepLocal: h, keepLocalDate: C } = w;
      if (p[m]) {
        if (p[m] = new Date(p[m]), C) {
          const b = p[m].getTimezoneOffset() * 6e4;
          p[m] = new Date(p[m].getTime() + b);
        }
        if (h && !fi(p[m])) {
          const b = p[m].getTimezoneOffset() * 6e4;
          p[m] = new Date(p[m].getTime() + b);
        }
      }
    }), l.columns.forEach(({ field: w, displayIndex: m }) => {
      m && (p[w] = p[m]);
    });
  }), d);
}, er = async (e = {}) => {
  let { api: r, id: t, model: a, parentFilters: o, where: l = {} } = e;
  r = r || a.api;
  const i = new URLSearchParams(), u = `${r}/${t ?? "-"}`, f = [];
  (a.formDef || a.columns)?.forEach((b) => {
    b.lookup && !f.includes(b.lookup) && !b.dependsOn && f.push(b.lookup);
  }), i.set("lookups", f), l && Object.keys(l)?.length && i.set("where", JSON.stringify(l));
  const g = {
    url: `${u}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(g, { action: "load", dataParsers: Oe, ...e });
  const d = await Qe(g);
  if (d?.error || d?.success === !1)
    throw new Error(Rt(d) || "Load failed");
  if (typeof a.parseResponsePayload == "function" && a.parseResponseActions.includes("load"))
    return await a.parseResponsePayload({ responseData: d, model: a, action: "load", ...e });
  const { data: p, lookups: w } = d || {};
  let m = p[a.linkColumn];
  const h = a.columns.find((b) => b.field === a.linkColumn);
  if (h && h.lookup && w && w[h.lookup] && w[h.lookup]?.length) {
    const b = w[h.lookup].find((D) => D.value === m);
    b && (m = b.label);
  }
  const C = { ...a.defaultValues };
  return { id: t, title: m, record: { ...C, ...p, ...o }, lookups: w };
}, Br = async function(e = {}) {
  const { id: r, api: t, model: a } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${t}/${r}`,
    additionalParams: { method: "DELETE" }
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(o, { action: "delete", dataParsers: Oe, ...e });
  const l = await Qe(o);
  if (l?.error || l?.success === !1)
    throw new Error(Rt(l) || "Delete failed");
  return !0;
}, Rr = async function(e = {}) {
  const { id: r, api: t, values: a, model: o } = e;
  let l, i;
  r !== 0 ? (l = `${t}/${r}`, i = "PUT") : (l = t, i = "POST");
  const u = {
    url: l,
    additionalParams: { method: i },
    params: a,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(u, { action: "save", dataParsers: Oe, ...e });
  const f = await Qe(u);
  if (f?.error || f?.success === !1)
    throw new Error(Rt(f) || "Save failed");
  return f;
}, Va = async (e = {}) => {
  let { api: r, model: t, lookups: a, scopeId: o, reqData: l } = e;
  r = r || t.api;
  const i = new URLSearchParams(), u = `${r}/lookups`;
  i.set("lookups", a), i.set("scopeId", o);
  const f = {
    url: `${u}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0,
    ...l
  };
  typeof t.createRequestPayload == "function" && await t.createRequestPayload(f, { action: "lookups", dataParsers: Oe, ...e });
  const x = await Qe(f);
  if (x?.error || x?.success === !1)
    throw new Error(Rt(x) || "Could not load lookups");
  return typeof t.parseResponsePayload == "function" && t.parseResponseActions.includes("lookups") ? await t.parseResponsePayload({ responseData: x, model: t, action: "lookups", ...e }) : x;
}, yc = {
  getList: Er,
  getRecord: er,
  deleteRecord: Br,
  saveRecord: Rr,
  getLookups: Va
}, gi = ({ pagination: e, apiRef: r, tTranslate: t = (a) => a }) => {
  const a = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, l = r.current.state.rows.totalRowCount, i = Math.ceil(l / o), { t: u, i18n: f } = yt(), x = { t: u, i18n: f }, [g, d] = B(a + 1), p = function(h) {
    let C = h.target?.value;
    C === "" ? d("") : (C = parseInt(C), C = isNaN(C) || C < 1 ? 1 : C, d(C));
  };
  ce(() => {
    d(a + 1);
  }, [a, o]);
  const w = function() {
    let h = g === "" ? 1 : g;
    h = Math.max(h, 1), h = Math.min(h, i), r.current.setPage(h - 1), d(h), g === "" && d(1);
  }, m = (h) => {
    const C = h.which || h.keyCode, b = String.fromCharCode(C);
    /\d/.test(b) || h.preventDefault();
  };
  return /* @__PURE__ */ v($n, { children: [
    /* @__PURE__ */ n(Xe, { sx: { pl: 5 }, children: e && /* @__PURE__ */ v(ge, { children: [
      /* @__PURE__ */ v(Ot, { variant: "p", children: [
        t("Jump to page", x),
        ":"
      ] }),
      /* @__PURE__ */ n(
        ar,
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
          onChange: p,
          onKeyPress: m,
          disabled: !l
        }
      ),
      /* @__PURE__ */ n(Se, { disabled: !l, size: "small", onClick: w, children: t("Go", x) })
    ] }) }),
    /* @__PURE__ */ n(zn, {})
  ] });
}, bi = /\${((\w+)\.)?(\w+)}/g, yi = function(e, r, { template: t = bi, keepMissingTags: a = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, l, i, u) {
    const f = i ? r[i] || {} : r;
    return f[u] === void 0 ? a ? o : "" : f[u];
  });
}, Yt = {
  replaceTags: yi
};
function pa({ variant: e = "h2", component: r = "h2", text: t = "", name: a = null, ...o }) {
  return /* @__PURE__ */ v(Ie, { variant: e, component: r, ...o, children: [
    t,
    a && ` ${a}`
  ] });
}
function Ci(e = !1) {
  const r = l(), [t, a] = B(r);
  function o() {
    setTimeout(() => {
      a(l());
    }, 10);
  }
  ce(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function l() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const u = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const f = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let x = null;
    return window.innerWidth <= window.innerHeight ? x = "portrait" : x = "landscape", { mobile: u, tablet: f, portrait: x === "portrait", landscape: x === "landscape" };
  }
  return e ? t.mobile : t;
}
const xi = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, wi = {
  ...et.daDK,
  ...xi
}, vi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Di = {
  ...et.deDE,
  ...vi
}, Pi = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Si = {
  ...et.elGR,
  ...Pi
}, Fi = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Ti = {
  ...et.esES,
  ...Fi
}, Ei = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Ai = {
  ...et.frFR,
  ...Ei
}, Mi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Ii = {
  ...et.itIT,
  ...Mi
}, Oi = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Bi = {
  ...et.trTR,
  ...Oi
}, Ri = {
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
}, ki = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Ni = {
  ...et.enUS,
  ...ki
}, Li = {
  en: Ni,
  "tr-TR": Bi,
  "es-ES": Ti,
  "da-DK": wi,
  "de-DE": Di,
  "el-GR": Si,
  "fr-FR": Ai,
  "pt-PT": Ri,
  "it-IT": Ii
};
te.extend(Eo);
te.extend(Ao);
const Ga = rr(), qa = rr(null), fa = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Cc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, a] = B("en"), [o, l] = B("MM/DD/YYYY hh:mm:ss A"), [i, u] = B(null), [f, x] = B(null), [g, d] = B(null), [p, w] = B(null), [m, h] = B(""), [C, b] = B(!1), { t: D, i18n: P } = yt(), k = xt(), E = vr(r), T = A((S, N) => {
    E.current[S] = N;
  }, []), V = A((S) => E.current[S || "default"] || "", []), le = A((S, N) => `${E.current[N || "default"] || ""}${S}`, []), J = A((S = !0) => {
    b(S);
  }, []), q = A((S, N, W) => {
    if (W != null) {
      const $ = W;
      let H = S ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return $ && (H = $.split(" "), H[0] = H[0].toUpperCase(), S ? H = H[0] : N ? H = H[0].toUpperCase() : (H[1] += H[1].includes(":ss") ? "" : ":ss", H = H.join(" "))), H;
    }
    return S?.split(" ")[0] || "DD-MM-YYYY";
  }, []), Q = A(({ value: S, useSystemFormat: N, showOnlyDate: W = !1, state: $, timeZone: H }) => {
    if (!S) return "-";
    const Be = q(N, W, $);
    return H ? te(S).tz(H).format(Be) : te(S).format(Be);
  }, [q]), Z = A(() => {
    const S = t, N = Li[S];
    function W($) {
      return S === "pt-PT" || S === "ptPT" ? N.components.MuiDataGrid.defaultProps.localeText[$] || $ : N[$] || $;
    }
    return { getLocalizedString: W };
  }, [t]), R = A((S) => {
    a(S);
  }, []), fe = A((S) => {
    u(S);
  }, []), de = A((S) => {
    d(S);
  }, []), me = A((S) => {
    w(S);
  }, []), X = A((S) => {
    h(S);
  }, []), z = A((S) => {
    l(S);
  }, []), Fe = A((S) => {
    x(S);
  }, []), Te = U(() => ({
    locale: t,
    dateTime: o,
    pageTitle: i,
    modal: f,
    pageBackButton: g,
    userData: p,
    timeZone: m
  }), [t, o, i, f, g, p, m]), re = U(() => ({
    // State data
    stateData: Te,
    // Loader management
    isLoading: C,
    showLoader: J,
    // Snackbar utilities
    showMessage: k?.showMessage || fa,
    showError: k?.showError || fa,
    // i18n utilities
    dayjs: te,
    t: D,
    i18n: P,
    // Date/time utilities
    systemDateTimeFormat: q,
    formatDate: Q,
    useLocalization: Z,
    // API utilities
    getApiEndpoint: V,
    setApiEndpoint: T,
    buildUrl: le,
    // App-level state setters with meaningful names
    setLocale: R,
    setPageTitle: fe,
    setPageBackButton: de,
    setUserData: me,
    setTimeZone: X,
    setDateTimeFormat: z,
    setModal: Fe
  }), [
    Te,
    C,
    J,
    D,
    P,
    k,
    V,
    T,
    q,
    Q,
    Z,
    R,
    fe,
    de,
    me,
    X,
    z,
    Fe,
    le
  ]);
  return /* @__PURE__ */ n(Ga.Provider, { value: re, children: e });
}, xc = qa.Provider, kr = () => Mr(qa), ze = () => {
  const e = Mr(Ga);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, $i = () => {
  const [e, r] = B(), [t, a] = B(!1), { stateData: o, setModal: l } = ze(), i = o.modal, u = 16 / 9;
  let f = (window.outerWidth - 10) / window.innerWidth * 100;
  const x = () => {
    let d = document.getElementById("tutorial-iframe");
    d ? (d = d.offsetWidth, d = d / window.innerWidth) : d = 0.9;
    const p = window.innerWidth * d * (1 / u), w = window.innerHeight - 180;
    r(Math.min(p, w));
  };
  ce(() => {
    i?.status && (a(!0), x());
  }, [i, f]), ce(() => (window.addEventListener("resize", x), () => {
    window.removeEventListener("resize", x);
  }), []);
  function g() {
    const d = document.getElementById("tutorial-iframe");
    d.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ v(Xn, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    l({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ n(eo, { className: "pt-2 pb-0", children: /* @__PURE__ */ v(ye, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ v(ye, { size: 11, children: [
        /* @__PURE__ */ v(Ie, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(Ie, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(ge, { children: " " }) })
      ] }),
      /* @__PURE__ */ v(ye, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(vo, { className: "cursor_pointer mt-2 mr-2", onClick: g }),
        /* @__PURE__ */ n(Do, { className: "cursor_pointer mt-2", onClick: () => {
          l({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ v(to, { dividers: !0, children: [
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
function zi({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: a = null,
  mobileRightComponent: o,
  title: l = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: u,
  breadcrumbs: f = [],
  enableBackButton: x = !1,
  breadcrumbColor: g,
  showHelpButton: d = !1,
  model: p
}) {
  const w = Ci(!0), m = f.length - 1, h = u && f.length, { t: C, i18n: b } = yt(), D = U(() => ({ t: C, i18n: b }), [C, b]), P = p?.tTranslate ?? ((E) => E), k = () => {
    r(-1);
  };
  return ce(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ n(pa, { className: "print-only", text: P(e, D) }),
    h && /* @__PURE__ */ v(ge, { children: [
      /* @__PURE__ */ n(ro, { sx: { mb: 3 }, children: /* @__PURE__ */ v(ao, { sx: { backgroundColor: g || "#fff" }, children: [
        /* @__PURE__ */ v(ye, { container: !0, children: [
          /* @__PURE__ */ n(ye, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(no, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: f.map((E, T) => T < m ? /* @__PURE__ */ n(oo, { onClick: k, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: E.text }, T) : /* @__PURE__ */ n(Ie, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: E.text }, T)) }) }),
          x && /* @__PURE__ */ n(ye, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(ot, { variant: "contained", onClick: k, children: P("Back", D) }) }),
          d && /* @__PURE__ */ n(ye, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Qt, { color: "primary", title: P("Help", D), size: "large", children: /* @__PURE__ */ n(wo, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Pe, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: w ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          pa,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: P(e, D),
            name: t
          }
        ) }) }) }) }),
        !w && /* @__PURE__ */ v(ge, { children: [
          /* @__PURE__ */ v(Pe, { children: [
            " ",
            a && /* @__PURE__ */ n(a, {}),
            " "
          ] }),
          /* @__PURE__ */ v(Pe, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n($i, {})
    ] })
  ] });
}
const Wa = Qn()(zi), $e = {
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
}, ja = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: a = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = a.find((l) => l.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[$e.permissionsMapper.add],
    canEdit: t.edit && !!o[$e.permissionsMapper.edit],
    canDelete: t.delete && !!o[[$e.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
te.extend(Aa);
const Vi = {
  date: Ea,
  datetime: Fr,
  dateTimeLocal: Fr
}, Gi = "-10px", qi = "-16px", Wi = (e) => {
  const { fixedFilterFormat: r } = $e, { item: t, applyValue: a, convert: o } = e, { systemDateTimeFormat: l, stateData: i } = ze(), u = e?.type || "date", f = r[u], x = (h) => {
    const C = te(h);
    return C.isValid() && C.year() > 1900;
  }, g = l(i.dateTime), d = (h) => {
    if (!(u !== "date" && u !== "datetime" && u !== "dateTimeLocal" || ((b) => typeof b != "string" ? !1 : !te(b, g, !0).isValid())(h))) {
      if (o) {
        h = te(h).utc(), a({ ...t, value: h });
        return;
      }
      if (!x(h)) {
        a({ ...t, value: null });
        return;
      }
      a({ ...t, value: h.format(f) });
    }
  }, p = (h) => {
    if (h && h === r.OverrideDateFormat) {
      const C = h.split("-");
      return C.length === 3 ? C[1] : null;
    }
  }, w = Vi[u], m = u === "dateTimeLocal" ? t?.value ? te(t?.value.$d) : null : t?.value ? te(t.value) : null;
  return /* @__PURE__ */ n(Ma, { dateAdapter: Ia, children: /* @__PURE__ */ n(
    w,
    {
      fullWidth: !0,
      format: g,
      value: m,
      onChange: d,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Gi,
            marginBottom: qi,
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
        fieldMonthPlaceholder: () => p(g) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Kt = (e) => wa().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ n(Wi, { ...t, ...e }) : void 0
})), ji = {
  IsAnyOf: "isAnyOf"
}, Ui = (e) => {
  const { column: r, item: t, applyValue: a, apiRef: o } = e, l = r?.dataRef?.current?.lookups;
  let i = r.customLookup || l[r.lookup] || [];
  typeof r.lookup == "string" && (i = i.map(({ label: d, value: p }) => ({
    label: d,
    value: p
  })));
  const u = va(o, Vn), f = U(
    () => u.items?.filter((d) => d.field === r.field),
    [r.field, u.items]
  ), x = A(
    (d) => {
      let p = d.target.value;
      if (u.items.length >= 1) {
        p = p.length === 1 ? p[0] : p;
        for (const h of u.items)
          h.field === t.field && (h.operator === ji.IsAnyOf ? p = Array.isArray(p) ? p : [p] : p = p === 0 ? "0" : p);
      }
      if (p.length === 0 && f[0]) {
        o.current.deleteFilterItem(f[0]);
        return;
      }
      const w = p, m = f[0] ? f[0] : t;
      a({ ...m, value: w });
    },
    [o, r.applyZeroFilter, f, t, a]
  ), g = f[0]?.value ?? "";
  return /* @__PURE__ */ n(bt, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    Pr,
    {
      label: r.field,
      variant: "standard",
      value: g,
      onChange: (d) => x(d),
      multiple: Array.isArray(g),
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 400,
            overflowY: "auto"
          }
        }
      },
      children: i?.map((d, p) => /* @__PURE__ */ n(Ue, { value: d.value, children: d.label }, p))
    }
  ) });
}, je = {
  Edit: "Edit",
  Delete: "Delete"
}, Ae = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, Hi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, Yi = { pageSize: 50, page: 0 }, Ki = [5, 10, 20, 50, 100], _i = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: a, tOpts: o }) => {
  const { getApiEndpoint: l } = ze(), i = l("GridPreferenceManager"), u = Da(), f = xt(), [x, g] = B(Ae.NONE), [d, p] = B(null), [w, m] = B(!1), [h, C] = B({}), [b, D] = B(null), [P, k] = B(null), E = U(
    () => b == null ? [] : b.filter((S) => S.prefId !== 0),
    [b]
  ), T = U(() => [
    { field: "prefName", type: "string", width: 300, headerName: a("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: a("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: a("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Dr, { icon: /* @__PURE__ */ n(Bt, { title: je.Edit, children: /* @__PURE__ */ n(Fa, {}) }), tabIndex: 1, "data-action": je.Edit, label: a("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Dr, { icon: /* @__PURE__ */ n(Bt, { title: je.Delete, children: /* @__PURE__ */ n(Sa, {}) }), tabIndex: 2, "data-action": je.Delete, label: a("Delete", o), color: "error" }, 2)] }
  ], [a, o]), V = U(() => ue.object({
    prefName: ue.string().trim(!0).required(a("Preference Name is Required", o)).max(20, a("Maximum Length is ", o) + "20"),
    prefDesc: ue.string().max(100, a("Maximum Length is ", o) + "100")
  }), [a, o]), le = (S) => p(S?.currentTarget), J = () => p(null), q = () => {
    g(Ae.NONE), J();
  }, Q = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), k(null), t && t(null), J());
  }, Z = A(async ({ applyDefault: S = !1 }) => {
    const N = await Qe({
      url: i,
      params: { action: "list", id: r },
      dataParser: Oe.json
    });
    if (!N?.preferences) {
      f.showMessage(a("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const W = N.preferences.filter(($) => $.prefName.trim() !== "");
    if (D(W), S) {
      const $ = W.find((H) => H.isDefault);
      if ($)
        return { defaultPrefId: $.prefId, preferences: W };
      t && t(null);
    }
    return { preferences: W };
  }, [i, r, f, a, o, t]), R = A(async (S, N = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), S === 0) {
      Q();
      return;
    }
    const W = N || b;
    if (!W) {
      f.showMessage(a("Preferences not loaded yet.", o));
      return;
    }
    const $ = W.find((Be) => Be.prefId === S);
    if (!$?.prefValue) {
      f.showMessage(a("Failed to load preference.", o));
      return;
    }
    let H;
    try {
      H = typeof $.prefValue == "string" ? JSON.parse($.prefValue) : $.prefValue;
    } catch {
      f.showMessage(a("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(H), k($.prefName), t && t($.prefName), J();
  }, [e, Q, b, t, f, a, o]), fe = async (S) => {
    const N = S.prefName.trim(), W = N.toLocaleLowerCase();
    if (b.find((H) => H.prefName.toLocaleLowerCase() === W && H.prefId !== S.prefId)) {
      m(!0);
      return;
    }
    const $ = await Qe({
      url: i,
      params: {
        action: "save",
        id: r,
        prefId: S.prefId,
        prefName: N,
        prefDesc: S.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: S.isDefault
      },
      dataParser: Oe.json
    });
    if ($ === !0 || $?.success === !0) {
      f.showMessage(a(`Preference ${x === Ae.ADD ? "added" : "saved"} successfully.`, o)), q(), await Z({ applyDefault: !1 });
      return;
    }
    f.showMessage(a("Error saving preference: ", o) + ($?.message || a("Unknown error", o)));
  }, de = async () => {
    const S = await Qe({
      url: i,
      params: {
        action: "delete",
        id: r,
        prefIdArray: h.prefId
      },
      dataParser: Oe.json
    });
    if (S === !0 || S?.success === !0) {
      f.showMessage(a("Preference deleted successfully.", o)), await Z({ applyDefault: !1 }), C({});
      return;
    }
    f.showMessage(a("Error deleting preference: ", o) + (S?.message || a("Unknown error", o)));
  }, me = (S) => {
    const N = S.field === "editAction" ? je.Edit : S.field === "deleteAction" ? je.Delete : null;
    if (S.id === 0 && N) {
      f.showMessage(a(`Default preference cannot be ${N === je.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    N === je.Edit && (g(Ae.EDIT), z.setValues(S?.row)), N === je.Delete && C({
      prefId: S.id,
      preferenceName: S.row.prefName
    });
  }, X = (S) => {
    g(S), J(), S === Ae.ADD && z.resetForm();
  }, z = Oa({
    initialValues: Hi,
    validationSchema: V,
    onSubmit: fe,
    mode: "onBlur"
  });
  ce(() => {
    if (!r) return;
    (async () => {
      const N = await Z({ applyDefault: !0 });
      N?.defaultPrefId && N?.preferences && await R(N.defaultPrefId, N.preferences);
    })();
  }, [r]);
  const Fe = U(() => ({
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
    paginationDisplayedRows: ({ from: S, to: N, count: W }) => `${S}–${N} ${a("of", o)} ${W}`,
    toolbarQuickFilterLabel: a("Search", o),
    columnsManagementSearchTitle: a("Search", o),
    columnsManagementNoColumns: a("No columns", o)
  }), [a, o]), Te = x === Ae.MANAGE, re = x === Ae.ADD || x === Ae.EDIT;
  return /* @__PURE__ */ v(Pe, { children: [
    /* @__PURE__ */ v(
      ot,
      {
        id: "grid-preferences-btn",
        "aria-controls": d ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": d ? "true" : void 0,
        onClick: le,
        title: a("Preference", o),
        startIcon: /* @__PURE__ */ n(ua, {}),
        children: [
          a("Preferences", o),
          " ",
          P && `(${P})`
        ]
      }
    ),
    /* @__PURE__ */ v(
      io,
      {
        id: "grid-preference-menu",
        anchorEl: d,
        open: !!d,
        onClose: J,
        component: lo,
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
          /* @__PURE__ */ v(Ue, { component: yr, dense: !0, onClick: () => X(Ae.ADD), children: [
            /* @__PURE__ */ n(Cr, { children: /* @__PURE__ */ n(Tr, {}) }),
            a("Add Preference", o)
          ] }),
          /* @__PURE__ */ v(Ue, { component: yr, dense: !0, onClick: () => X(Ae.MANAGE), children: [
            /* @__PURE__ */ n(Cr, { children: /* @__PURE__ */ n(ua, {}) }),
            a("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ v(Ue, { component: yr, dense: !0, divider: b?.length > 0, onClick: () => R(0), children: [
            /* @__PURE__ */ n(Cr, { children: /* @__PURE__ */ n(ko, {}) }),
            a("Reset to Default", o)
          ] }),
          b?.length > 0 && b?.map((S) => {
            const { prefName: N, prefDesc: W, prefId: $ } = S;
            return /* @__PURE__ */ n(
              Ue,
              {
                onClick: () => R($),
                component: so,
                selected: P === N,
                title: a(W, o),
                dense: !0,
                children: /* @__PURE__ */ n(co, { primary: N })
              },
              `pref-item-${$}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ v(
      He,
      {
        open: x !== Ae.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ v(Ie, { variant: "h5", children: [
          x,
          " ",
          a(Te ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: Te ? "md" : "sm",
        fullWidth: !0,
        children: [
          re && /* @__PURE__ */ v(
            ye,
            {
              component: "form",
              onSubmit: z.handleSubmit,
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
                /* @__PURE__ */ n(ye, { size: 12, children: /* @__PURE__ */ n(
                  it,
                  {
                    value: z.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ v("span", { children: [
                      a("Preference Name", o),
                      " ",
                      /* @__PURE__ */ n("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: z.handleChange,
                    error: !!z.errors.prefName,
                    helperText: z.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(ye, { size: 12, children: /* @__PURE__ */ n(
                  it,
                  {
                    value: z.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: a("Preference Description", o),
                    name: "prefDesc",
                    onChange: z.handleChange,
                    error: !!z.errors.prefDesc,
                    helperText: z.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ n(ye, { size: 12, children: /* @__PURE__ */ n(
                  lt,
                  {
                    control: /* @__PURE__ */ n(
                      uo,
                      {
                        checked: z.values.isDefault,
                        name: "isDefault",
                        onChange: z.handleChange
                      }
                    ),
                    label: a("Default", o)
                  }
                ) }),
                /* @__PURE__ */ n(ye, { size: 12, children: /* @__PURE__ */ v(la, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    ot,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(Ro, {}),
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
                      startIcon: /* @__PURE__ */ n(Sr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: q,
                      disableElevation: !0,
                      children: a("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          Te && /* @__PURE__ */ v(ye, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ n(ye, { size: 12, children: /* @__PURE__ */ n(
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
                onCellClick: me,
                columns: T,
                pageSizeOptions: Ki,
                pagination: !0,
                rowCount: E.length,
                rows: E,
                getRowId: (S) => S.GridPreferenceId,
                slots: {
                  headerFilterMenu: !1
                },
                density: "compact",
                disableDensitySelector: !0,
                apiRef: u,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                initialState: {
                  pagination: {
                    paginationModel: Yi
                  }
                },
                localeText: Fe
              }
            ) }),
            /* @__PURE__ */ n(ye, { size: 12, children: /* @__PURE__ */ n(la, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              ot,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(Sr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: q,
                disableElevation: !0,
                children: a("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ v(
      He,
      {
        open: w,
        onConfirm: () => m(!1),
        title: "",
        okText: a("Ok", o),
        cancelText: "",
        children: [
          '"',
          z.values.prefName.trim(),
          '": ',
          a("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ v(
      He,
      {
        open: !!h.preferenceName,
        onConfirm: de,
        onCancel: () => C({}),
        title: a("Confirm delete", o),
        yesNo: !0,
        children: [
          a("Are you sure you wish to delete", o),
          ' "',
          h.preferenceName,
          '"?'
        ]
      }
    )
  ] });
}, Ji = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((a) => {
  t.lastIndex = 0;
  const o = t.exec(a);
  if (!o) return null;
  const [, l, i = "ASC"] = o;
  return {
    field: l.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), mt = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: a, type: o, isPivotExport: l = !1, icon: i }) => /* @__PURE__ */ v(
  Ba,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": a,
    "data-is-pivot-export": l,
    children: [
      /* @__PURE__ */ n(Xe, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: i }),
      e(o, r)
    ]
  }
), Zi = ({ exportFormats: e, ...r }) => /* @__PURE__ */ v(Gn, { ...r, children: [
  e.csv !== !1 && /* @__PURE__ */ n(mt, { ...r, icon: /* @__PURE__ */ n(Po, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(mt, { ...r, icon: /* @__PURE__ */ n(ca, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  r.showPivotExportBtn && /* @__PURE__ */ n(mt, { ...r, icon: /* @__PURE__ */ n(ca, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(mt, { ...r, icon: /* @__PURE__ */ n(So, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(mt, { ...r, icon: /* @__PURE__ */ n(Fo, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(mt, { ...r, icon: /* @__PURE__ */ n(To, { fontSize: "small" }), type: "JSON", contentType: "application/json" })
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
}, Qi = (e = {}, r = {}) => {
  let t = !0;
  for (const a in e)
    e[a] !== r[a] && (t = !1);
  for (const a in r)
    a in e || (t = !1);
  return t;
};
te.extend(Aa);
const Xi = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: a,
  tTranslate: o,
  tOpts: l
}) => {
  const { systemDateTimeFormat: i, stateData: u } = ze(), { fixedFilterFormat: f } = $e, x = U(() => r?.items?.find((m) => m.field === e.field), [r, e.field]), g = U(() => {
    const m = x?.operator || e.toolbarFilter?.defaultOperator || Zt(e.type);
    return ["isEmpty", "isNotEmpty"].includes(m) ? "" : x ? x.value : e.toolbarFilter?.defaultOperator === "isAnyOf" ? [] : "";
  }, [x, e.toolbarFilter?.defaultOperator, e.type]), d = A((m) => {
    const h = e.toolbarFilter?.defaultOperator || Zt(e.type);
    t((C) => {
      const b = C?.items || [];
      if (m === "" || m === null || Array.isArray(m) && m.length === 0) {
        const k = b.filter((E) => E.field !== e.field);
        return {
          ...C,
          items: k
        };
      }
      const D = {
        field: e.field,
        operator: h,
        value: m,
        type: e.type
      }, P = b.filter((k) => k.field !== e.field);
      return {
        ...C,
        items: [...P, D]
      };
    });
  }, [e, t]), p = A((m, h) => h === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[m] || m : h === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[m] || m : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[m] || m, []);
  return (() => {
    const m = e.toolbarFilter?.label || e.headerName || e.label || e.field, h = e.toolbarFilter?.defaultOperator || Zt(e.type), C = p(h, e.type), D = e.type === "number" || e.type === "string" && h !== "startsWith" ? e.type === "number" ? `${C} ${m}` : `${m} (${C})` : m;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ n(
          it,
          {
            variant: "standard",
            label: o(D, l),
            value: g,
            onChange: (R) => d(R.target.value),
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
            label: o(D, l),
            value: g,
            onChange: (R) => d(R.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const R = g === "" || g === void 0 || g === null ? "" : g === !0 || g === "true" ? "true" : g === !1 || g === "false" ? "false" : "";
        return /* @__PURE__ */ v(bt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(sa, { children: o(D, l) }),
          /* @__PURE__ */ v(
            Pr,
            {
              value: R,
              onChange: (fe) => {
                const de = fe.target.value;
                let me;
                de === "" ? me = "" : de === "true" ? me = !0 : de === "false" ? me = !1 : me = de, d(me);
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
        const P = e.customLookup || a?.[e.lookup] || [], k = typeof e.lookup == "string" ? P.map((R) => ({
          label: R?.label || "",
          value: R?.value ?? ""
        })) : P, E = x?.operator === "isAnyOf" || e.toolbarFilter?.defaultOperator === "isAnyOf", T = $e.normalizeFilterValue({ value: g, operator: x?.operator, isMultiple: E });
        return /* @__PURE__ */ v(bt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(sa, { children: o(D, l) }),
          /* @__PURE__ */ n(
            Pr,
            {
              value: T,
              onChange: (R) => d(R.target.value),
              multiple: E,
              size: "small",
              children: k.map((R) => /* @__PURE__ */ n(Ue, { value: R.value, children: R.label }, R.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const V = e.type, J = f[V === "dateTime" ? "datetime" : V], q = i(V !== "dateTime", !1, u.dateTime), Q = V === "dateTime" ? No : Lo;
        let Z = null;
        if (g) {
          const R = te(g);
          Z = R.isValid() ? R : null;
        }
        return /* @__PURE__ */ n(Ma, { dateAdapter: Ia, children: /* @__PURE__ */ n(
          Q,
          {
            label: o(D, l),
            format: q,
            value: Z,
            onChange: (R) => {
              !R || !R.isValid() ? d(null) : d(R.format(J));
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
            label: o(D, l),
            value: g,
            onChange: (R) => d(R.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, _t = nr(Se)({
  margin: "6px"
}), el = nr(qn)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), tl = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: a,
    isReadOnly: o,
    canAdd: l,
    forAssignment: i,
    showAddIcon: u,
    onAdd: f,
    selectionApi: x,
    rowSelectionModel: g,
    selectAll: d,
    available: p,
    onAssign: w,
    assigned: m,
    onUnassign: h,
    effectivePermissions: C,
    clearFilters: b,
    handleExport: D,
    preferenceKey: P,
    apiRef: k,
    tTranslate: E,
    tOpts: T,
    filterModel: V,
    setFilterModel: le,
    onPreferenceChange: J,
    toolbarItems: q,
    gridColumns: Q
  } = e, Z = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), R = V?.items?.length || 0, fe = Q?.filter((X) => X.toolbarFilter) || [], de = t?.lookups || {}, me = t?.records || [];
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
            r.gridSubTitle && /* @__PURE__ */ v(Ot, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              E(r.gridSubTitle, T)
            ] }),
            a && r.showPreferenceInHeader && /* @__PURE__ */ v(Ot, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              E("Applied Preference", T),
              ": ",
              a
            ] }),
            (o || !l && !i) && /* @__PURE__ */ v(Ot, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !l || o ? "" : r.title
            ] }),
            !i && l && !o && /* @__PURE__ */ n(_t, { startIcon: u ? /* @__PURE__ */ n(Tr, {}) : null, onClick: f, size: "medium", variant: "contained", children: E(Z, T) }),
            !!e.headerActions && e.headerActions,
            x.length && me.length ? /* @__PURE__ */ n(
              _t,
              {
                onClick: d,
                size: "medium",
                variant: "contained",
                children: g.ids.size === me.length ? E("Deselect All", T) : E("Select All", T)
              }
            ) : /* @__PURE__ */ n(ge, {}),
            p && /* @__PURE__ */ n(_t, { startIcon: u ? /* @__PURE__ */ n(Tr, {}) : null, onClick: w, size: "medium", variant: "contained", children: E("Assign", T) }),
            m && /* @__PURE__ */ n(_t, { startIcon: u ? /* @__PURE__ */ n(Mo, {}) : null, onClick: h, size: "medium", variant: "contained", children: E("Remove", T) })
          ] }),
          /* @__PURE__ */ v(el, { ...e, children: [
            C.showColumnsOrder && /* @__PURE__ */ n(
              Wn,
              {
                render: (X) => /* @__PURE__ */ n(
                  Se,
                  {
                    ...X,
                    startIcon: /* @__PURE__ */ n(Oo, {}),
                    size: "small",
                    variant: "text",
                    children: E("COLUMNS", T)
                  }
                )
              }
            ),
            C.filter && /* @__PURE__ */ v(ge, { children: [
              /* @__PURE__ */ n(
                jn,
                {
                  render: (X) => /* @__PURE__ */ n(
                    Se,
                    {
                      ...X,
                      startIcon: /* @__PURE__ */ n(po, { badgeContent: R, color: "primary", children: /* @__PURE__ */ n(Bo, {}) }),
                      size: "small",
                      variant: "text",
                      children: E("FILTERS", T)
                    }
                  )
                }
              ),
              /* @__PURE__ */ n(Se, { startIcon: /* @__PURE__ */ n(Io, {}), onClick: b, size: "small", children: E("CLEAR FILTER", T) })
            ] }),
            C.export && /* @__PURE__ */ n(Zi, { handleExport: D, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, tTranslate: E, tOpts: T }),
            q,
            P && /* @__PURE__ */ n(
              _i,
              {
                gridRef: k,
                preferenceKey: P,
                onPreferenceChange: J,
                t: E,
                tOpts: T
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ n(Pe, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: fe.length > 0 && /* @__PURE__ */ n("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: fe.map((X) => /* @__PURE__ */ n(
      Xi,
      {
        column: X,
        filterModel: V,
        setFilterModel: le,
        lookupData: de,
        tTranslate: E,
        tOpts: T
      },
      X.field
    )) }) })
  ] });
}, rl = 50, al = /(\w+)( ASC| DESC)?/i, nl = 6e4, ol = 0, il = 1e6, Me = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, ll = {
  article: /* @__PURE__ */ n(Zn, {}),
  edit: /* @__PURE__ */ n(Fa, {}),
  copy: /* @__PURE__ */ n(Jn, {}),
  delete: /* @__PURE__ */ n(Sa, {}),
  history: /* @__PURE__ */ n($o, {}),
  download: /* @__PURE__ */ n(zo, {})
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
}, sl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], cl = (e) => e.value ? /* @__PURE__ */ n(xo, { style: { color: "green" } }) : /* @__PURE__ */ n(Sr, { style: { color: "gray" } }), ma = nr("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), ul = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const a = Kn(), o = e.row[t], i = va(a, _n)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ n(
    Ra,
    {
      onClick: (f) => {
        f.stopPropagation(), r({ row: e.row });
      },
      checked: i,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, ha = xa(({
  model: e,
  columns: r,
  api: t,
  defaultSort: a,
  setActiveRecord: o,
  parentFilters: l,
  parent: i,
  where: u,
  title: f,
  showPageTitle: x,
  permissions: g,
  selected: d,
  assigned: p,
  available: w,
  disableCellRedirect: m = !1,
  onAssignChange: h,
  customStyle: C,
  onCellClick: b,
  showRowsSelected: D,
  showFullScreenLoader: P,
  customFilters: k,
  onRowDoubleClick: E,
  onRowClick: T = () => {
  },
  gridStyle: V,
  reRenderKey: le,
  additionalFilters: J,
  onCellDoubleClickOverride: q,
  onAddOverride: Q,
  dynamicColumns: Z,
  toolbarItems: R,
  readOnly: fe = !1,
  onListParamsChange: de,
  apiRef: me,
  baseFilters: X,
  ...z
}) => {
  const [Fe, Te] = B({ pageSize: rl, page: 0 }), [re, S] = B({ recordCount: 0, records: null, lookups: {} }), N = !!h, W = D, [$, H] = B({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [Be, Ye] = B(!1), [Ve, wt] = B(null), kt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [Nt, tt] = B(!1), se = xt(), vt = e.paginationMode === _.client ? _.client : _.server, { t: Ke, i18n: Lt } = yt(), s = U(() => ({ t: Ke, i18n: Lt }), [Ke, Lt]), [ct, ir] = B(""), [Dt, be] = B(Ji(a || e.defaultSort, _, al)), _e = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (_e.items = [], e.defaultFilters.forEach((y) => {
    _e.items.push(y);
  }));
  const [pe, Re] = B({ ..._e }), { navigate: ve, getParams: Pt, useParams: St, pathname: Ft } = kr(), { id: De } = St() || Pt, Tt = De?.split("-")[0], xe = me || Da(), { idProperty: oe = "id", showHeaderFilters: $t = !0, disableRowSelectionOnClick: lr = !0, hideTopFilters: Et = !0, updatePageTitle: zt = !0, isElasticScreen: rt = !1, navigateBack: sr = !1, selectionApi: Je = {}, debounceTimeOut: cr = 300, showFooter: ur = !0, disableRowGrouping: Vt = !0 } = e, L = e.readOnly === !0 || fe, we = e.allowDoubleClick === !1, ee = vr(re), Ge = e.showAddIcon === !0, qe = e.columns.filter(({ link: y }) => !!y).map((y) => y.link), { stateData: Ee, formatDate: At, getApiEndpoint: ut, buildUrl: We, setPageTitle: dt } = ze(), [Ja, Gt] = B(!1), { timeZone: dr } = Ee, at = U(() => ({ ..._.permissions, ...e.permissions, ...g }), [e.permissions, g]), Nr = ["isEmpty", "isNotEmpty", "isAnyOf"], Za = Ee.userData || {}, qt = e.columns.find((y) => y.type === "fileUpload")?.field || "", Qa = { add: at.add, edit: at.edit, delete: at.delete }, { canAdd: Lr, canEdit: $r, canDelete: zr } = ja({ userData: Za, model: e, userDefinedPermissions: Qa }), c = e.tTranslate ?? ((y) => y), { addUrlParamKey: Wt, searchParamKey: Mt, hideBreadcrumb: Xa = !1, tableName: Vr, showHistory: Gr = !0, hideBreadcrumbInGrid: en = !1, breadcrumbColor: tn, disablePivoting: rn = !1, columnHeaderHeight: an = 70, disablePagination: qr = !1 } = e, Wr = e.gridTitle || e.title, It = ut("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, Ze = new URLSearchParams(window.location.search), [jr, nn] = B(null), [Ur, on] = B(!It), ke = t || e.api, [pr, fr] = B(null), ln = U(() => new Set(pr ? [pr] : []), [pr]), sn = typeof e.getDetailPanelContent == "function", [cn, Hr] = B([]);
  ce(() => {
    xe.current && (xe.current.prefKey = It);
  }, [xe, It]);
  const Yr = A((y) => {
    nn(y), on(!0);
  }, []), un = U(() => e.columnGroupingModel ? e.columnGroupingModel.map((y) => ({
    ...y,
    headerName: y.headerName ? c(y.headerName, s) : y.headerName
  })) : [], [e.columnGroupingModel, s, Ke, c]);
  ce(() => {
    Array.isArray(z.rowGroupingField) && Hr(z.rowGroupingField);
  }, [z.rowGroupingField]);
  const mr = Ze.has("baseData") && Ze.get("baseData"), Kr = U(() => {
    if (mr)
      try {
        const y = JSON.parse(mr);
        if (typeof y === _.object && y !== null)
          return y;
      } catch (y) {
        console.error("Failed to parse baseData from URL:", y);
      }
    return {};
  }, [mr]), dn = A(({ row: y }) => {
    const M = y[oe];
    H((I) => {
      const F = new Set(I?.ids || []);
      return F.has(M) ? F.delete(M) : F.add(M), { type: "include", ids: F };
    });
  }, [oe]), _r = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (y) => At({ value: y, useSystemFormat: !0, showOnlyDate: !1, state: Ee.dateTime, timeZone: dr }),
      filterOperators: Kt({ columnType: "date", label: c("Value", s) })
    },
    dateTime: {
      valueFormatter: (y) => At({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: Ee.dateTime, timeZone: dr }),
      filterOperators: Kt({ columnType: "datetime", label: c("Value", s) })
    },
    dateTimeLocal: {
      valueFormatter: (y) => At({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: Ee.dateTime, timeZone: dr }),
      filterOperators: Kt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: cl
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (y) => /* @__PURE__ */ n(ul, { params: y, handleSelectRow: dn, idProperty: oe })
    }
  };
  ce(() => {
    ee.current = re;
  }, [re]), ce(() => {
    if (!k || !Object.keys(k).length) return;
    if (k.clear) {
      Re({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const y = Object.entries(k).reduce((M, [I, F]) => (I === _.startDate || I === _.endDate ? M.push(F) : I in k && M.push({ field: I, value: F, operator: "equals", type: "string" }), M), []);
    Re({ items: y, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [k]);
  const pn = A(({ field: y, lookupMap: M }) => (ee.current.lookups || {})[(M || {})[y]?.lookup] || [], []);
  ce(() => {
    z.isChildGrid;
  }, [z.isChildGrid, Et]);
  const Jr = A(
    ({ key: y, title: M, icon: I, color: F = "primary", disabled: O, otherProps: Y }) => /* @__PURE__ */ n(
      Dr,
      {
        icon: /* @__PURE__ */ n(Bt, { title: c(M, s), children: ll[I] || I || c(M, s) }),
        "data-action": y,
        label: c(M, s),
        color: F,
        disabled: O,
        ...Y
      },
      y
    ),
    [Ke, s, c]
  ), { customActions: jt = [] } = e, Ut = U(() => {
    const y = [];
    return !N && !L && y.push(
      {
        key: Me.Edit,
        title: "Edit",
        icon: "edit",
        show: !!$r,
        disabled: (M) => M.canEdit === !1
      },
      {
        key: Me.Copy,
        title: "Copy",
        icon: "copy",
        show: !!at.copy
      },
      {
        key: Me.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!zr
      },
      {
        key: Me.History,
        title: "History",
        icon: "history",
        show: !!Gr
      },
      ...jt
    ), y.push({
      key: Me.Download,
      title: "Download document",
      icon: "download",
      show: qt.length > 0
    }), y.filter(({ show: M }) => M !== !1);
  }, [
    N,
    L,
    $r,
    zr,
    Gr,
    at.copy,
    qt.length,
    jt
  ]), fn = A(
    ({ row: y }) => Ut.map(
      ({ key: M, title: I, icon: F, color: O, disabled: Y, show: G, action: K, ...ie }) => Jr({
        key: M,
        title: I || K,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: F,
        color: O,
        disabled: Y?.(y),
        otherProps: ie
      })
    ),
    [Ut, Jr]
  ), { gridColumns: Ce, pinnedColumns: Zr, lookupMap: hr } = U(() => {
    let y = r || e.gridColumns || e.columns;
    Z && (y = [...Z, ...y]);
    const M = { left: [Un.field], right: [] }, I = [], F = {}, O = { ..._r, ...e.gridColumnTypes };
    for (const G of y) {
      if (G.gridLabel === null || i && G.lookup === i || G.type === _.oneToMany && G.countInList === !1) continue;
      const K = {};
      if (G.type === _.oneToMany && (K.type = "number", K.field = G.field.replace(/s$/, "Count")), O[G.type] && Object.assign(K, O[G.type]), K.valueOptions === _.lookup || G.type === _.boolean) {
        let ae = [];
        K.valueOptions === _.lookup && (K.valueOptions = (ne) => pn({ ...ne, lookupMap: F }), ae = [...wa(), ...Hn()].filter((ne) => ["is", "not", "isAnyOf"].includes(ne.value))), G.type === _.boolean && (ae = Yn()), K.filterOperators = ae.map((j) => ({
          ...j,
          InputComponent: j.InputComponent ? (ne) => /* @__PURE__ */ n(
            Ui,
            {
              column: {
                ...G,
                ...G.type === _.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: ee
              },
              ...ne,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (G.linkTo || G.link) && (K.cellClassName = "mui-grid-linkColumn"), Vt || (K.groupable = G.groupable ?? !1);
      const ie = c((typeof G.gridLabel == "function" ? G.gridLabel({ column: G, t: c, tOpts: s }) : G.gridLabel) || G.label, s);
      I.push({ ...G, ...K, headerName: ie, description: ie }), G.pinned && M[G.pinned === _.right ? _.right : _.left].push(G.field), F[G.field] = G;
    }
    let Y = e.standard;
    return Y === !0 && (Y = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), Y && typeof Y === _.object && sl.forEach(({ key: G, field: K, type: ie, header: ae }) => {
      if (Y[G] === !0) {
        const j = { field: K, type: ie, headerName: c(ae, s), width: 200 };
        ie === _.dateTime && (j.filterOperators = Kt({ columnType: "date" }), j.valueFormatter = _r.dateTime.valueFormatter, j.keepLocal = !0), I.push(j);
      }
    }), Ut.length && (I.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? _.defaultActionWidth) * Ut.length,
      hidable: !1,
      getActions: fn,
      headerName: c("Actions", s)
    }), M.right.push("actions")), { gridColumns: I, pinnedColumns: M, lookupMap: F };
  }, [r, e, i, g, N, Z, Ke, Ee?.dateTime]), gr = vr(!1);
  ce(() => {
    if (gr.current) return;
    const y = Ce?.filter((F) => F.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (y.length === 0) return;
    if (pe.items.some(
      (F) => y.some((O) => O.field === F.field)
    )) {
      gr.current = !0;
      return;
    }
    const I = y.map((F) => {
      const O = Zt(F.type, F.toolbarFilter?.defaultOperator), Y = $e.normalizeFilterValue({
        operator: O,
        value: F.toolbarFilter.defaultFilterValue
      });
      return {
        field: F.field,
        operator: O,
        value: Y,
        type: F.type
      };
    }).filter((F) => {
      const O = F.value;
      return !(Array.isArray(O) && O.length === 0);
    });
    I.length > 0 && Re((F) => ({
      ...F,
      items: [...F.items, ...I]
    })), gr.current = !0;
  }, [Ce]);
  const Ne = A(async ({ action: y = "list", extraParams: M = {}, isPivotExport: I = !1, contentType: F, columns: O } = {}) => {
    const { pageSize: Y, page: G } = Fe, K = !!F, ie = We(I ? e.pivotApi : ke), ae = { ...pe }, j = Array.isArray(X) ? [...X] : [];
    e.joinColumn && Tt && j.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Tt) }), J && (ae.items = [...ae.items || [], ...J]);
    const ne = [];
    Array.isArray(j) && ne.push(...j), Array.isArray(l) && ne.push(...l);
    const pt = {
      ...M,
      ...z.extraParams
      // Merge any custom params passed via component props
    };
    if ((p || w) && (pt[p ? "include" : "exclude"] = Array.isArray(d) ? d.join(",") : d), I && (e.exportTemplate && (pt.template = e.exportTemplate), e.configFileName && (pt.configFileName = e.configFileName)), !(!ae.items.length || ae.items.every((ft) => "value" in ft && ft.value !== void 0))) return;
    const br = {
      action: y,
      page: K ? ol : G,
      pageSize: K ? il : Y,
      sortModel: Dt,
      filterModel: ae,
      gridColumns: Ce,
      model: e,
      baseFilters: ne,
      api: ie,
      extraParams: pt
    };
    typeof de == "function" && de(br), xe.current.listParams = br, K || Gt(!0);
    try {
      const ft = await Er({ ...br, contentType: F, columns: O });
      !K && ft !== void 0 && S(ft);
    } catch {
      se.showError(c("An error occurred while fetching data", s)), K || S((An) => ({ ...An, records: [], recordCount: 0 }));
    } finally {
      K || Gt(!1);
    }
  }, [Fe, We, e, ke, pe, X, Tt, p, w, d, z.extraParams, Dt, Ce, l, de, xe, Er, se, J, se]), nt = A(async ({ id: y, record: M = {}, mode: I }) => {
    if (o) {
      try {
        const O = We(ke), Y = await er({ id: y, api: O, model: e, parentFilters: l, where: u });
        o(Y);
      } catch {
        se.showError(c("Could not load record", s));
      }
      return;
    }
    let F = Ft;
    F.endsWith("/") || (F += "/"), I === "copy" ? F += "0-" + y : F += y, Wt && (Ze.set(Wt, M[Wt]), F += `?${Ze.toString()}`), ve(F);
  }, [o, ke, e, l, u, Ft, Wt, Ze, ve, er, We, se, c, s]), Qr = A(({ documentLink: y }) => {
    y && window.open(y, "_blank");
  }, []), mn = A(async (y, M, I) => {
    let F = y.field === e.linkColumn ? Me.Edit : null;
    if (!F && y.field === _.actions && (F = I?.action, !F)) {
      const ie = M.target.closest("button");
      ie && (F = ie.dataset.action);
    }
    const { row: O } = y;
    if (!L) {
      if (b && typeof await b({ cellParams: y, event: M, details: I }) !== _.boolean)
        return;
      const ie = hr[y.field] || {};
      if (ie.linkTo) {
        ve({
          pathname: Yt.replaceTags(ie.linkTo, O)
        });
        return;
      }
      switch (F) {
        case Me.Edit:
          if (e.getDetailPanelContent) {
            const j = O[oe];
            fr((ne) => ne === j ? null : j);
            return;
          } else
            return nt({ id: O[oe], record: O });
        case Me.Copy:
          return nt({ id: O[oe], mode: "copy" });
        case Me.Delete:
          Ye(!0), wt({ name: O[e.linkColumn], id: O[oe] });
          break;
        case Me.History:
          return ve(`${ut("history")}?tableName=${Vr}&id=${O[oe]}&breadCrumb=${Mt ? Ze.get(Mt) : Wr}`);
        default:
          const ae = jt.find((j) => j.action === F && typeof j.onClick === _.function);
          if (ae) {
            ae.onClick({ row: O, navigate: ve });
            return;
          }
          break;
      }
    }
    if (F === Me.Download && Qr({ documentLink: O[qt] }), !qe.length)
      return;
    const { row: Y } = y, G = hr[y.field] || {}, K = {
      pathname: Yt.replaceTags(G.linkTo, Y)
    };
    e.addRecordToState && (K.state = Y), ve(K);
  }, [L, b, hr, e, oe, qt, ve, qe, jt, Vr, Mt, Ze, Wr, ut, Qr, nt]), hn = A(async () => {
    const y = We(ke);
    try {
      await Br({ id: Ve.id, api: y, model: e }), se.showMessage(c("Record Deleted Successfully.", s)), Ne();
    } catch (M) {
      se.showError(c("Delete failed", s), M.message);
    } finally {
      Ye(!1);
    }
  }, [ke, Ve?.id, se, e, Ne, c, s]), Xr = A(() => {
    ir(null), Ye(!1);
  }, []), gn = A((y) => (typeof z.processRowUpdate == "function" && z.processRowUpdate(y, re), y), [z.processRowUpdate, re]), bn = A((y) => {
    if (y.row.canEdit === !1)
      return;
    const { row: M } = y;
    if (typeof q === _.function) {
      q(y);
      return;
    }
    if (!L && !we && !m && nt({ id: M[oe], record: M }), L && e.rowRedirectLink) {
      const I = {
        pathname: Yt.replaceTags(e.rowRedirectLink, M)
      };
      e.addRecordToState && (I.state = M), ve(I);
    }
    typeof E === _.function && E(y);
  }, [q, L, we, m, nt, oe, e.rowRedirectLink, e.addRecordToState, ve, E, Yt]), yn = A(async () => {
    if ($.ids.size < 1) {
      se.showError(c("Please select at least one record to proceed", s));
      return;
    }
    const y = Array.from($.ids), M = new Map((re.records || []).map((O) => [O[oe], O]));
    let I = y.map((O) => ({ ...Kr, ...M.get(O) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (I = I.map(
      (O) => Object.fromEntries(e.selectionUpdateKeys.map((Y) => [Y, O[Y]]))
    ));
    const F = We(Je || ke);
    Gt(!0);
    try {
      const O = await Rr({
        id: 0,
        api: `${F}/updateMany`,
        values: { items: I },
        model: e
      });
      if (O) {
        Ne();
        const Y = O.info ? O.info : c("Record Added Successfully.", s);
        se.showMessage(Y);
      }
    } catch (O) {
      se.showError(O.message || c("An error occurred, please try after some time.", s));
    } finally {
      Gt(!1), H({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), tt(!1);
    }
  }, [$.ids, se, re.records, oe, Kr, e.selectionUpdateKeys, Je, ke, e, Ne, c, s]), ea = A(() => {
    if (Je.length > 0) {
      if ($.ids.size > 0) {
        tt(!0);
        return;
      }
      se.showError(
        c("Please select at least one record to proceed", s)
      );
      return;
    }
    typeof Q === _.function ? Q() : nt({ id: 0 });
  }, [Je, se, Q, nt, $.ids.size, c, s]), ta = A(() => {
    pe?.items?.length && Re({ ..._.gridFilterModel });
  }, [pe]), Ht = A(({ unassign: y, assign: M }) => {
    const I = Array.isArray(d) ? d : d.length ? d.split(",") : [], F = y ? I.filter((O) => !y.includes(parseInt(O))) : [...I, ...M];
    h(typeof d === _.string ? F.join(",") : F);
  }, [d, h]), ra = A(() => {
    Ht({ assign: Array.from($.ids) });
  }, [Ht, $.ids]), aa = A(() => {
    Ht({ unassign: Array.from($.ids) });
  }, [Ht, $.ids]), na = A(() => {
    const y = re.records || [];
    if ($.ids.size === y.length)
      H({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const I = y.map((F) => F[oe]);
      H({
        type: "include",
        ids: new Set(I)
      });
    }
  }, [$, re.records, oe]), Cn = A((y) => y[oe], [oe]), oa = A((y) => {
    if (re?.recordCount > nl) {
      se.showMessage(c("Cannot export more than 60k records, please apply filters or reduce your results using filters", s));
      return;
    }
    const { orderedFields: M, columnVisibilityModel: I, lookup: F } = xe.current.state.columns, O = y.target.dataset.isPivotExport === "true", Y = Object.keys(I).filter((j) => I[j] === !1), G = new Set(Ce.filter((j) => j.exportable === !1).map((j) => j.field)), K = M.filter(
      (j) => !G.has(j) && !Y.includes(j) && j !== "__check__" && j !== "actions"
    );
    if (K.length === 0) {
      se.showMessage(c("You cannot export while all columns are hidden... please show at least 1 column before exporting", s));
      return;
    }
    const ie = {};
    K.forEach((j) => {
      const ne = F[j];
      ie[j] = { field: j, width: ne.width, headerName: ne.headerName || ne.field, type: ne.type, keepLocal: ne.keepLocal === !0, isParsable: ne.isParsable, lookup: ne.lookup };
    });
    const ae = e?.formActions?.export || O ? e?.formActions?.export || "export" : void 0;
    Ne({
      action: ae,
      isPivotExport: O,
      contentType: y.target.dataset.contentType,
      columns: ie
    });
  }, [re?.recordCount, xe, Ce, se, e, Ne, c, s]);
  ce(() => {
    !ke || !Ur || Ne();
  }, [ke, Ur, Ne]), ce(() => {
    if (!(z.isChildGrid || N || !zt))
      return dt({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        dt(null);
      };
  }, [dt, e.pageTitle, e.title, z.isChildGrid, N, zt]);
  const xn = A((y) => {
    const { items: M } = y, I = M.map((F) => {
      const { field: O, operator: Y, type: G, value: K } = F, ie = Ce.find((ne) => ne.field === O) || {}, ae = ie.type === _.Number;
      return ae && K < 0 ? { ...F, value: null } : Nr.includes(Y) || ae && !isNaN(K) || !ae ? (rt && Ce.filter((pt) => pt.field === O)[0]?.isKeywordField && (F.filterField = `${F.field}.keyword`), F.value = ["isEmpty", "isNotEmpty"].includes(Y) ? null : K, { ...F, type: ie.type }) : { field: O, operator: Y, type: G, value: ae ? null : K };
    });
    y.items = I, Re(y);
  }, [Ce, _.Number, Nr, rt, Re]), wn = A((y) => {
    const M = y.map((I) => {
      const F = Ce.filter((G) => G.field === I.field)[0] || {}, O = rt && F.isKeywordField, Y = { ...I, filterField: O ? `${I.field}.keyword` : I.field };
      return F.dataIndex && (Y.filterField = F.dataIndex), Y;
    });
    be(M);
  }, [Ce, rt, be]), ia = f || e.gridTitle || e.title, vn = Mt ? [{ text: Ze.get(Mt) || ia }] : [{ text: ia }], Dn = A((y) => {
    fr(y.size > 0 ? [...y].pop() : null);
  }, []), Pn = A((y) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...y,
    onRefresh: () => {
      fr(null), Ne();
    },
    t: c,
    tOpts: s
  }) : null, [e.getDetailPanelContent, Ne, c, s]), Sn = U(() => ({
    filterValueTrue: c("Yes", s),
    filterValueFalse: c("No", s),
    noRowsLabel: c("No data", s),
    footerTotalRows: `${c("Total rows", s)}:`,
    MuiTablePagination: {
      labelRowsPerPage: c("Rows per page", s),
      labelDisplayedRows: ({ from: y, to: M, count: I }) => `${y}–${M} ${c("of", s)} ${I}`
    },
    toolbarQuickFilterPlaceholder: c(e?.searchPlaceholder || "Search...", s),
    toolbarColumns: c("Columns", s),
    toolbarFilters: c("Filters", s),
    toolbarExport: c("Export", s),
    filterPanelAddFilter: c("Add filter", s),
    filterPanelRemoveAll: c("Remove all", s),
    filterPanelDeleteIconLabel: c("Delete", s),
    filterPanelColumns: c("Columns", s),
    filterPanelOperator: c("Operator", s),
    filterPanelValue: c("Value", s),
    filterPanelInputLabel: c("Value", s),
    filterPanelInputPlaceholder: c("Filter value", s),
    columnMenuLabel: c("Menu", s),
    columnMenuShowColumns: c("Show columns", s),
    columnMenuManageColumns: c("Manage columns", s),
    columnMenuFilter: c("Filter", s),
    columnMenuHideColumn: c("Hide column", s),
    columnMenuManagePivot: c("Manage pivot", s),
    toolbarColumnsLabel: c("Select columns", s),
    toolbarExportLabel: c("Export", s),
    pivotDragToColumns: c("Drag here to pivot by", s),
    pivotDragToRows: c("Drag here to group by", s),
    pivotDragToValues: c("Drag here to create values", s),
    pivotColumns: c("Pivot columns", s),
    pivotRows: c("Row groups", s),
    pivotValues: c("Values", s),
    pivotMenuRows: c("Rows", s),
    pivotMenuColumns: c("Columns", s),
    pivotMenuValues: c("Values", s),
    pivotToggleLabel: c("Pivot", s),
    pivotSearchControlPlaceholder: c("Search pivot columns", s),
    columnMenuUnsort: c("Unsort", s),
    columnMenuSortAsc: c("Sort by ascending", s),
    columnMenuSortDesc: c("Sort by descending", s),
    columnMenuUnpin: c("Unpin", s),
    columnsPanelTextFieldLabel: c("Find column", s),
    columnsPanelTextFieldPlaceholder: c("Column title", s),
    columnsPanelHideAllButton: c("Hide all", s),
    columnsPanelShowAllButton: c("Show all", s),
    pinToLeft: c("Pin to left", s),
    pinToRight: c("Pin to right", s),
    unpin: c("Unpin", s),
    filterValueAny: c("any", s),
    filterOperatorIs: c("is", s),
    filterOperatorNot: c("is not", s),
    filterOperatorIsAnyOf: c("is any of", s),
    filterOperatorContains: c("contains", s),
    filterOperatorDoesNotContain: c("does not contain", s),
    filterOperatorEquals: c("equals", s),
    filterOperatorDoesNotEqual: c("does not equal", s),
    filterOperatorStartsWith: c("starts with", s),
    filterOperatorEndsWith: c("ends with", s),
    filterOperatorIsEmpty: c("is empty", s),
    filterOperatorIsNotEmpty: c("is not empty", s),
    filterOperatorAfter: c("is after", s),
    filterOperatorOnOrAfter: c("is on or after", s),
    filterOperatorBefore: c("is before", s),
    filterOperatorOnOrBefore: c("is on or before", s),
    toolbarFiltersTooltipHide: c("Hide filters", s),
    toolbarFiltersTooltipShow: c("Show filters", s),
    //filter textfield labels
    headerFilterOperatorContains: c("contains", s),
    headerFilterOperatorEquals: c("equals", s),
    headerFilterOperatorStartsWith: c("starts with", s),
    headerFilterOperatorEndsWith: c("ends with", s),
    headerFilterOperatorIsEmpty: c("is empty", s),
    headerFilterOperatorIsNotEmpty: c("is not empty", s),
    headerFilterOperatorAfter: c("is after", s),
    headerFilterOperatorOnOrAfter: c("is on or after", s),
    headerFilterOperatorBefore: c("is before", s),
    headerFilterOperatorOnOrBefore: c("is on or before", s),
    headerFilterOperatorIs: c("is", s),
    "headerFilterOperator=": c("equals", s),
    "headerFilterOperator!=": c("does not equal", s),
    "headerFilterOperator>": c("greater than", s),
    "headerFilterOperator>=": c("greater than or equal to", s),
    "headerFilterOperator<": c("less than", s),
    "headerFilterOperator<=": c("less than or equal to", s),
    columnsManagementSearchTitle: c("Search", s),
    columnsManagementNoColumns: c("No columns", s),
    paginationRowsPerPage: c("Rows per page", s),
    paginationDisplayedRows: ({ from: y, to: M, count: I }) => `${y}–${M} ${c("of", s)} ${I}`,
    toolbarQuickFilterLabel: c("Search", s),
    toolbarFiltersTooltipActive: (y) => `${y} ${c(y === 1 ? "active filter" : "active filters", s)}`,
    columnHeaderSortIconLabel: c("Sort", s),
    filterPanelOperatorAnd: c("And", s),
    filterPanelOperatorOr: c("Or", s),
    noResultsOverlayLabel: c("No results found", s),
    columnHeaderFiltersTooltipActive: (y) => `${y} ${c(y === 1 ? "active filter" : "active filters", s)}`,
    detailPanelToggle: c("Detail panel toggle", s),
    checkboxSelectionHeaderName: c("Checkbox selection", s),
    columnsManagementShowHideAllText: c("Show/Hide all", s),
    noColumnsOverlayLabel: c("No columns", s),
    noColumnsOverlayManageColumns: c("Manage columns", s),
    columnsManagementReset: c("Reset", s),
    groupColumn: (y) => `${c("Group by", s)} ${y}`,
    unGroupColumn: (y) => `${c("Ungroup", s)} ${y}`,
    footerRowSelected: (y) => {
      const M = y === 1 ? "item selected" : "items selected";
      return `${y.toLocaleString()} ${c(M, s)}`;
    }
  }), [c, s, e?.searchPlaceholder]), Fn = U(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: re,
      currentPreference: jr,
      isReadOnly: L,
      canAdd: Lr,
      forAssignment: N,
      showAddIcon: Ge,
      onAdd: ea,
      selectionApi: Je,
      rowSelectionModel: $,
      selectAll: na,
      available: w,
      onAssign: ra,
      assigned: p,
      onUnassign: aa,
      effectivePermissions: at,
      clearFilters: ta,
      handleExport: oa,
      preferenceKey: It,
      apiRef: xe,
      gridColumns: Ce,
      tTranslate: c,
      tOpts: s,
      idProperty: oe,
      filterModel: pe,
      setFilterModel: Re,
      onPreferenceChange: Yr,
      toolbarItems: R,
      headerActions: z.headerActions
    },
    footer: {
      pagination: qr ?? !0,
      apiRef: xe,
      tTranslate: c,
      tOpts: s
    },
    panel: {
      placement: "bottom-end"
    },
    pagination: {
      backIconButtonProps: {
        title: c("Go to previous page", s),
        "aria-label": c("Go to previous page", s)
      },
      nextIconButtonProps: {
        title: c("Go to next page", s),
        "aria-label": c("Go to next page", s)
      }
    }
  }), [e, re, jr, L, Lr, N, Ge, ea, Je, $, na, w, ra, p, aa, at, ta, oa, It, xe, Ce, c, s, oe, pe, Re, Yr, R, z.headerActions]), Tn = U(() => ({
    columns: {
      columnVisibilityModel: kt
    },
    pinnedColumns: Zr
  }), [kt, Zr]), En = U(() => ({
    headerFilterMenu: !1,
    toolbar: tl,
    footer: gi
  }), []);
  return /* @__PURE__ */ v(ge, { children: [
    x !== !1 && /* @__PURE__ */ n(
      Wa,
      {
        navigate: ve,
        showBreadcrumbs: !Xa && !en,
        breadcrumbs: vn,
        enableBackButton: sr,
        breadcrumbColor: tn,
        model: e
      }
    ),
    /* @__PURE__ */ v(Pe, { style: V || C, children: [
      /* @__PURE__ */ n(Pe, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
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
          headerFilters: $t,
          unstable_headerFilters: $t,
          checkboxSelection: N,
          loading: !re.records || Ja,
          className: "pagination-fix",
          onCellClick: mn,
          onCellDoubleClick: bn,
          columns: Ce,
          paginationModel: Fe,
          pageSizeOptions: _.pageSizeOptions,
          onPaginationModelChange: Te,
          pagination: !qr,
          rowCount: re.recordCount,
          rows: re.records || [],
          sortModel: Dt,
          paginationMode: vt,
          sortingMode: vt,
          filterMode: vt,
          processRowUpdate: gn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: wn,
          onFilterModelChange: xn,
          rowSelectionModel: $,
          onRowSelectionModelChange: H,
          filterModel: pe,
          getRowId: Cn,
          onRowClick: T,
          slots: En,
          slotProps: Fn,
          hideFooterSelectedRowCount: W,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: xe,
          disableAggregation: !0,
          disableRowGrouping: Vt,
          disableRowSelectionOnClick: lr,
          disablePivoting: rn,
          filterDebounceMs: cr,
          initialState: Tn,
          ...sn && {
            getDetailPanelContent: Pn,
            detailPanelExpandedRowIds: ln,
            onDetailPanelExpandedRowIdsChange: Dn
          },
          localeText: Sn,
          showToolbar: !0,
          columnHeaderHeight: an,
          hideFooter: !ur,
          rowGroupingModel: cn,
          onRowGroupingModelChange: (y) => Hr(y),
          getRowClassName: z.getRowClassName,
          columnGroupingModel: un
        }
      ) }),
      ct && /* @__PURE__ */ v(He, { open: !!ct, onConfirm: Xr, onCancel: Xr, title: "Info", hideCancelButton: !0, children: [
        " ",
        ct
      ] }),
      Be && !ct && /* @__PURE__ */ n(He, { open: Be, onConfirm: hn, onCancel: () => Ye(!1), title: c("Confirm Delete", s), okText: c("Ok", s), cancelText: c("Cancel", s), children: /* @__PURE__ */ v(ma, { children: [
        c("Are you sure you want to delete", s),
        " ",
        Ve.name && /* @__PURE__ */ n(Bt, { style: { display: "inline" }, title: Ve.name, arrow: !0, children: Ve.name.length > 30 ? `${Ve.name.slice(0, 30)}...` : Ve.name }),
        " ?"
      ] }) }),
      Nt && /* @__PURE__ */ n(
        He,
        {
          open: Nt,
          onConfirm: yn,
          onCancel: () => tt(!1),
          title: c("Confirm Add", s),
          okText: c("Ok", s),
          cancelText: c("Cancel", s),
          children: /* @__PURE__ */ v(ma, { children: [
            c("Are you sure you want to add", s),
            " ",
            $.ids.size,
            " ",
            c("records", { count: $.ids.size, ...s }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, Qi), dl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = (u) => {
    t.setFieldValue(r, u.target.checked);
  }, l = U(() => t.values[r] ?? !!e.defaultValue, [t, e]), i = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(
      Wo,
      {
        control: /* @__PURE__ */ n(
          Ra,
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
}, Ar = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = Ct(), l = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
    ar,
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
function Ua(e, r) {
  const [t, a] = B(e);
  return ce(() => {
    const o = setTimeout(() => {
      a(e);
    }, r);
    return () => {
      clearTimeout(o);
    };
  }, [e, r]), t;
}
const ga = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, pl = {
  outlined: ho,
  filled: mo,
  standard: fo
}, fl = () => /* @__PURE__ */ v(
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
        Xt.Increment,
        {
          render: /* @__PURE__ */ n(Qt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ n(
            jo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        Xt.Decrement,
        {
          render: /* @__PURE__ */ n(Qt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ n(
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
), ml = ({ column: e, otherProps: r, formik: t, field: a, ...o }) => {
  const { min: l, max: i, readOnly: u } = e, f = Ct(), x = U(
    () => ga({ value: l, state: t.values }),
    [l, t.values]
  ), g = U(
    () => ga({ value: i, state: t.values }),
    [i, t.values]
  ), d = U(() => t.values[a] ?? null, [t.values[a]]), [p, w] = B(d), m = Ua(p, 400);
  ce(() => {
    m !== d && t.setFieldValue(a, m);
  }, [m]), ce(() => {
    d !== p && w(d);
  }, [d]);
  const h = (E) => {
    w(E);
  }, C = (E) => {
    t.setFieldTouched(a, !0), typeof o.onBlur == "function" && o.onBlur(E);
  }, b = Mn(), D = `number-field-${a}-${b}`, P = e.variant || "standard", k = pl[P];
  return /* @__PURE__ */ v(
    Xt.Root,
    {
      value: p,
      onValueChange: h,
      min: x,
      max: g,
      disabled: u,
      render: (E, T) => /* @__PURE__ */ n(
        bt,
        {
          fullWidth: !0,
          ref: E.ref,
          error: t.touched[a] && !!t.errors[a],
          sx: u ? {
            backgroundColor: f.palette?.action?.disabled
          } : void 0,
          children: E.children
        }
      ),
      children: [
        /* @__PURE__ */ n(
          Xt.Input,
          {
            render: (E, T) => /* @__PURE__ */ n(
              k,
              {
                id: D,
                inputRef: E.ref,
                value: T.inputValue,
                onChange: E.onChange,
                onBlur: (V) => {
                  E.onBlur(V), C(V);
                },
                inputProps: {
                  ...E,
                  "aria-describedby": t.touched[a] && t.errors[a] ? `${D}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ n(fl, {}),
                sx: { pr: 0 },
                ...r
              }
            )
          }
        ),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ v(st, { id: `${D}-error`, error: !0, children: [
          " ",
          t.errors[a],
          " "
        ] })
      ]
    }
  );
}, hl = ({ otherProps: e, ...r }) => {
  const [t, a] = gt.useState(!1), o = () => a((f) => !f), l = (f) => {
    f.preventDefault();
  }, { readOnly: i = !1, disabled: u = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: u,
      endAdornment: /* @__PURE__ */ n(Ta, { position: "end", children: /* @__PURE__ */ n(
        Qt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: l,
          edge: "end",
          disabled: u,
          readOnly: i,
          size: "large",
          children: t ? /* @__PURE__ */ n(Uo, {}) : /* @__PURE__ */ n(Ho, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(Ar, { otherProps: e, ...r });
}, gl = ({ column: e, field: r, formik: t, otherProps: a, fieldConfigs: o = {}, mode: l }) => {
  const i = l !== "copy" && o.disabled, { systemDateTimeFormat: u, stateData: f } = ze(), x = U(() => t.values[r] ? te(t.values[r]) : null, [t.values[r]]), g = A((d) => {
    if (d === null) {
      t.setFieldValue(r, null);
      return;
    }
    const w = te(d).hour(12).toISOString();
    t.setFieldValue(r, w);
  }, [r, t]);
  return /* @__PURE__ */ Ir(
    Ea,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: u(!0, !1, f.dateTime),
      name: r,
      value: x,
      onChange: g,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: e.min ? te(e.min) : null,
      maxDate: e.max ? te(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, bl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: l } = ze(), i = U(() => t.values[r] ? te(t.values[r]) : null, [t.values[r]]);
  return /* @__PURE__ */ Ir(
    Fr,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, l.dateTime),
      name: r,
      value: i,
      onChange: (u) => t.setFieldValue(r, u),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? te(e.min) : null,
      maxDateTime: e.max ? te(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, yl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  let o = t.values[r];
  return e.isUtc && (o = te.utc(o).utcOffset(te().utcOffset(), !0).format()), /* @__PURE__ */ Ir(
    Yo,
    {
      ...a,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: te(o),
      onChange: (l) => (e.isUtc && (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, l)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Cl = [null, void 0, ""];
function Ha({ column: e, formik: r, lookups: t, dependsOn: a = [], isAutoComplete: o = !1, userSelected: l, model: i }) {
  const [u, f] = B([]), { buildUrl: x } = ze(), g = xt(), d = x(i.api), p = U(() => {
    const h = {};
    if (!a.length) return h;
    for (const C of a)
      h[C] = r.values[C];
    return h;
  }, a.map((h) => r.values[h])), w = U(() => a.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, a]), m = A(async () => {
    if (!e.lookup) return;
    if (!Object.values(p).every(
      (C) => !Cl.includes(C)
    )) {
      f([]);
      return;
    }
    try {
      const C = await Va({
        api: d,
        model: i,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: p }] }
        }
      });
      f(C);
    } catch (C) {
      g.showError("Could not load lookups", C.message);
    }
  }, [e.lookup, p, d, i, t, g]);
  return ce(() => {
    a.length ? m() : (o || !l.current) && f(w || []);
  }, [a.length, m, o, w]), u;
}
const xl = gt.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], model: l, tTranslate: i, tOpts: u, ...f }) => {
  const x = gt.useRef(!1), { placeHolder: g } = e, d = Ha({ column: e, formik: t, lookups: a, dependsOn: o, userSelected: x, model: l }), p = Ct(), w = U(() => {
    let h = t.values[r];
    if (d?.length && !h && !e.multiSelect && "IsDefault" in d[0]) {
      const C = d.find((b) => b.IsDefault);
      C && (h = C.value, t.setFieldValue(r, C.value));
    }
    return e.multiSelect && (!h || h.length === 0 ? h = [] : Array.isArray(h) || (h = h.split(",").map((C) => parseInt(C)))), h;
  }, [t.values[r], d, e.multiSelect, r]), m = A((h) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: h.target.value, options: d, event: h, t: i, tOpts: u }), t.handleChange(h), x.current = !0;
  }, [t.values[r], e.onChange, d]);
  return /* @__PURE__ */ v(
    or,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(Ko, { children: g || "" }),
        /* @__PURE__ */ n(
          _o,
          {
            IconComponent: ka,
            ...f,
            name: r,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${w}`,
            onChange: m,
            onBlur: t.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? p.palette?.action?.disabled : ""
            },
            children: Array.isArray(d) && d.map((h) => /* @__PURE__ */ n(Ba, { value: h.value, disabled: h.isDisabled, children: h.label }, h.value))
          }
        ),
        /* @__PURE__ */ n(st, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), ba = nr("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), wl = ({ component: e, name: r, formik: t, field: a, column: o }) => {
  const { value: l } = t.getFieldProps(r || a), { setFieldValue: i } = t, u = e || o.relation, f = A((x) => {
    i(r || a, x);
  }, [i, r, a]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(ba, { children: `Available ${o.label}` }),
    /* @__PURE__ */ n(u, { selected: l, available: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ n(ba, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ n(u, { selected: l, assigned: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, vl = ({ field: e, formik: r, orientation: t = "row", label: a, lookups: o, fieldConfigs: l = {}, mode: i, ...u }) => {
  const f = (w) => {
    r.setFieldValue(e, w.target.value);
  }, x = o ? o[u.column.lookup] : [], g = Ct(), d = r.touched[e] && !!r.errors[e], p = i !== "copy" && l.disabled;
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ n(bt, { component: "fieldset", error: d, children: /* @__PURE__ */ n(
      Or,
      {
        row: t === "row",
        "aria-label": a,
        name: e,
        value: r.values[e] ?? "",
        onChange: f,
        children: x?.map((w, m) => /* @__PURE__ */ n(
          lt,
          {
            value: w.value,
            control: /* @__PURE__ */ n(ht, {}),
            label: w.label,
            disabled: p
          },
          m
        ))
      }
    ) }),
    d && /* @__PURE__ */ n(st, { style: { color: g.palette.error.main }, children: r.errors[e] })
  ] });
}, Dl = {
  limitTags: 5
}, Pl = Le.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], fieldConfigs: l = {}, mode: i, model: u, ...f }) => {
  const x = Ha({ column: e, formik: t, lookups: a, dependsOn: o, model: u, isAutoComplete: !0 });
  let g = t.values[r] || [];
  Array.isArray(g) || (g = g.split(", ").map(Number));
  const d = x.filter((m) => g.includes(m.value)) || [], p = i !== "copy" && l.disabled, w = (m, h) => {
    let C = h?.map((b) => b.value) || [];
    e.dataFormat !== "array" && (C = C.length ? C.join(", ") : ""), t.setFieldValue(r, C);
  };
  return /* @__PURE__ */ v(
    or,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ n(
          Na,
          {
            ...f,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || Dl.limitTags,
            options: x || [],
            getOptionLabel: (m) => m.label || "",
            defaultValue: d,
            renderInput: (m) => /* @__PURE__ */ n(ar, { ...m, variant: "standard" }),
            onChange: w,
            value: d,
            size: "small",
            disabled: p
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ n(st, { children: t.errors[r] })
      ]
    },
    r
  );
}), Sl = "#182eb5", Fl = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Tl = go(bo)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Sl : "#ffffff",
  border: `1px solid ${Xo[500]}`,
  color: r ? "white" : "black"
})), El = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ n(
  Tl,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Al = ({ name: e, field: r, formik: t, expired: a }) => {
  const { setFieldValue: o } = t, { value: l } = t.getFieldProps(e || r), i = "1000001", u = "0111110", f = "0".repeat(7), [x, g] = B(l || f), [d, p] = B(() => l ? l === i ? i : l === u ? u : "Custom" : ""), [w, m] = B(!1), h = A((D) => {
    if (Array.isArray(D)) {
      let P = f;
      for (const k of D)
        P = P.substring(0, k) + "1" + P.substring(k + 1);
      g(P), o(e || r, P), m(!0);
    } else {
      let P = w ? f : x;
      const k = P.slice(0, D) + (P[D] === "1" ? "0" : "1") + P.slice(D + 1);
      g(k), o(e || r, k), p("Custom"), m(!1);
    }
  }, [w, f, x, e, r, o]), C = Ct(), b = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ n(bt, { component: "fieldset", error: b, children: /* @__PURE__ */ v(
      Or,
      {
        row: !0,
        name: e || r,
        value: d,
        onChange: (D) => {
          const P = D.target.value;
          p(P), P !== "Custom" ? (g(P), o(e || r, P), m(!0)) : (g(f), o(e || r, f), m(!1));
        },
        children: [
          /* @__PURE__ */ n(lt, { value: i, control: /* @__PURE__ */ n(ht, {}), label: "Weekends (Sat - Sun)", onClick: () => h([0, 6]) }),
          /* @__PURE__ */ n(lt, { value: u, control: /* @__PURE__ */ n(ht, {}), label: "Weekdays (Mon - Fri)", onClick: () => h([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(lt, { value: "Custom", control: /* @__PURE__ */ n(ht, {}), label: "Specific days" }),
          Fl.map((D, P) => /* @__PURE__ */ n(
            El,
            {
              day: D,
              onClick: () => h(P),
              isSelected: d === "Custom" && x[P] === "1",
              disabled: a
            },
            D.value
          ))
        ]
      }
    ) }),
    b && /* @__PURE__ */ n(st, { style: { color: C.palette.error.main }, children: t.errors[r] })
  ] });
}, Ml = ({ isAdd: e, column: r, field: t, formik: a, otherProps: o, fieldConfigs: l = {}, mode: i }) => {
  const u = Ct();
  let f = a.values[t] || [];
  Array.isArray(f) || (f = f.split(",").map((p) => p.trim()));
  const x = Le.useMemo(() => i === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: a }) : !!r.disabled, [i, l.disabled, r.disabled]), g = r.hasDefault && !e ? [f[0]] : [], d = A((p, w, m, h = {}) => {
    const C = w.pop()?.trim();
    w.includes(C) || w.push(C), g && g.includes(h.option) && m === "removeOption" && (w = [h.option]), r.dataFormat !== "array" && (w = w.length ? w.join(",") : ""), a.setFieldValue(t, w);
  }, [a, t]);
  return /* @__PURE__ */ v(
    or,
    {
      fullWidth: !0,
      variant: "standard",
      error: a.touched[t] && !!a.errors[t],
      children: [
        /* @__PURE__ */ n(
          Na,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: f,
            options: [],
            renderInput: (p) => /* @__PURE__ */ n(
              ar,
              {
                ...p,
                variant: "standard",
                InputProps: {
                  ...p.InputProps,
                  sx: {
                    ...p.InputProps?.sx,
                    ...x && { backgroundColor: u.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: d,
            size: "small",
            renderTags: (p, w) => p.map((m, h) => {
              const { key: C, ...b } = w({ index: h });
              return /* @__PURE__ */ n(
                ti,
                {
                  label: m,
                  ...b,
                  disabled: g.includes(m)
                },
                C
              );
            }),
            disabled: x
          }
        ),
        a.touched[t] && a.errors[t] && /* @__PURE__ */ n(st, { children: a.errors[t] })
      ]
    },
    t
  );
}, Il = (e = []) => {
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
function Ol({ column: e, field: r, formik: t, lookups: a, fieldConfigs: o, mode: l }) {
  const i = a ? a[e.lookup] : [], u = Il(i), f = t.values[r]?.length ? t.values[r].split(", ") : [];
  let x;
  return l !== "copy" && (x = o?.disabled), /* @__PURE__ */ n(Xe, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    ri,
    {
      selectedItems: f,
      onSelectedItemsChange: (d, p) => {
        t.setFieldValue(r, p?.join(", ") || "");
      },
      disabled: x,
      multiSelect: !0,
      checkboxSelection: !0,
      children: u.map((d) => /* @__PURE__ */ n(da, { itemId: d.value, label: d.label, children: d.children.map((p) => /* @__PURE__ */ n(da, { itemId: p.value, label: p.label }, p.value)) }, d.value))
    }
  ) });
}
const Bl = { maxLength: 500 }, { errorMapping: Rl } = $e, kl = 1024 * 1024;
function Nl({ column: e, field: r, formik: t }) {
  const a = t.values[r] || "", { getApiEndpoint: o } = ze(), { maxSize: l, formats: i } = e, u = o("upload"), f = o("media"), x = o(), [g, d] = B({
    isExternal: "no",
    selectedFile: null
  }), [p, w] = B(!1), m = xt(), { getParams: h, useParams: C } = kr(), { associationId: b } = C() || h, D = b?.split("-")[0] || 1, P = (q) => {
    const Q = q.target.value;
    d({
      ...g,
      isExternal: Q,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, k = (q) => {
    t.setFieldValue(r, q.target.value);
  }, E = (q) => {
    const Q = q.target.files[0];
    if (Q) {
      if (l && Q.size > l * kl) {
        m.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(Q.type)) {
        m.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      d((Z) => ({ ...Z, selectedFile: Q }));
    }
  }, T = async () => {
    if (g.selectedFile) {
      w(!0);
      try {
        const q = new FormData();
        q.append("file", g.selectedFile), q.append("DocumentGroupId", t.values.DocumentGroupId), q.append("AssociationId", D);
        const Z = (await za({
          method: "POST",
          url: u,
          data: q,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!Z.success) {
          m.showError(Z.message || "Upload failed");
          return;
        }
        const R = f + "/" + Z.filePath;
        t.setFieldValue(r, R);
      } catch (q) {
        const Q = (q.message.match(/status code (\d{3})/) || [])[1];
        m.showError(Rl[Q]);
      } finally {
        w(!1);
      }
    }
  }, V = new URL(x, window.location.origin).hostname.toLowerCase();
  gt.useEffect(() => {
    d({
      ...g,
      isExternal: a.toLowerCase().includes(V) ? "no" : "yes"
    });
  }, [a, d]);
  const le = t.values[r]?.length > (e.max || Bl.maxLength), J = le ? "red" : "";
  return /* @__PURE__ */ v(Pe, { children: [
    /* @__PURE__ */ v(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Ie, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ v(
        Or,
        {
          row: !0,
          value: g.isExternal,
          onChange: P,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(lt, { value: "yes", control: /* @__PURE__ */ n(ht, {}), label: "Yes" }),
            /* @__PURE__ */ n(lt, { value: "no", control: /* @__PURE__ */ n(ht, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Ie, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ v(Pe, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        g.isExternal === "yes" ? /* @__PURE__ */ n(
          it,
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
          it,
          {
            fullWidth: !0,
            value: a,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        le && /* @__PURE__ */ v(Ie, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    g.isExternal === "no" && /* @__PURE__ */ v(Pe, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ v(
        ot,
        {
          variant: "outlined",
          component: "label",
          disabled: p,
          children: [
            "Choose File",
            /* @__PURE__ */ n("input", { type: "file", hidden: !0, onChange: E })
          ]
        }
      ),
      g.selectedFile && /* @__PURE__ */ n(Bt, { title: g.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(Ie, { variant: "body2", children: g.selectedFile.name.length > 20 ? `${g.selectedFile.name.substring(0, 20)}...` : g.selectedFile.name }) }),
      /* @__PURE__ */ n(
        ot,
        {
          variant: "contained",
          color: "primary",
          onClick: T,
          disabled: !g.selectedFile || p,
          children: p ? /* @__PURE__ */ n(yo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Ll = ({ field: e, formik: r }) => {
  const [t, a] = Le.useState({}), o = Ua(t, 300);
  Le.useEffect(() => {
    if (r.values[e])
      try {
        const i = JSON.parse(r.values[e]);
        a(i);
      } catch {
        a({});
      }
  }, [r.values[e]]), Le.useEffect(() => {
    const i = JSON.stringify(o);
    r.values[e] !== i && r.setFieldValue(e, i);
  }, [o, e, r, r.values[e]]);
  const l = (i, u) => {
    const f = { ...t, [i]: u };
    a(f);
  };
  return /* @__PURE__ */ n(
    or,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[e] && !!r.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(t).map((i) => /* @__PURE__ */ v(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ v(Ot, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              ai,
              {
                id: i,
                name: i,
                value: t[i],
                onChange: (u) => l(i, u.target.value),
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
}, $l = {
  boolean: dl,
  select: xl,
  string: Ar,
  number: ml,
  password: hl,
  date: gl,
  dateTime: bl,
  time: yl,
  oneToMany: wl,
  radio: vl,
  autocomplete: Pl,
  dayRadio: Al,
  email: Ar,
  chipInput: Ml,
  treeCheckbox: Ol,
  fileUpload: Nl,
  json: Ll
}, ya = { paddingTop: "2.5px", paddingBottom: "2.5px" }, zl = ei("span")({
  color: "red !important"
}), Ya = (e) => {
  const { t: r, i18n: t } = yt(), a = Le.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((l) => l);
  return { translate: r, i18n: t, tOpts: a, tTranslate: o };
}, Vl = ({ tabColumns: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: u, mode: f, handleSubmit: x }) => {
  const [g, d] = Le.useState(/* @__PURE__ */ new Set()), { tOpts: p, tTranslate: w } = Ya(r), { activeStep: m, setActiveStep: h } = Le.useContext(_a), C = {};
  for (let T = 0, V = r.columns.length; T < V; T++) {
    const { field: le, skip: J } = r.columns[T];
    J && (C[J.step] = t.values[le]);
  }
  const b = (T) => g.has(T) || C[T], D = () => {
    for (let T = m + 1; T < e.length; T++)
      if (!b(T))
        return !1;
    return !0;
  }, P = () => {
    let T = m + 1;
    for (; C[T]; )
      T++;
    d((V) => new Set(V).add(m)), T >= e.length || D() ? x() : h(T);
  }, k = () => {
    let T = m - 1;
    for (; C[T] && T > 0; )
      T--;
    h(T);
  };
  if (!e?.length)
    return null;
  const E = e[m];
  return /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ n(Jo, { activeStep: m, sx: { marginBottom: "20px" }, children: e.map(({ title: T, key: V }, le) => /* @__PURE__ */ n(Zo, { completed: b(le), children: /* @__PURE__ */ n(Qo, { children: /* @__PURE__ */ n(Ie, { sx: { fontSize: "20px" }, children: w(T, p) }) }) }, V)) }),
    /* @__PURE__ */ v(Le.Fragment, { children: [
      /* @__PURE__ */ n(Ka, { formElements: E.items, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: u, mode: f }),
      /* @__PURE__ */ v(Xe, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        m !== 0 ? /* @__PURE__ */ n(Se, { color: "inherit", disabled: m === 0, onClick: k, variant: "contained", sx: { mr: 2 }, children: w("Back", p) }) : null,
        /* @__PURE__ */ n(Se, { onClick: P, variant: "contained", children: D() ? w("Finish", p) : w("Next", p) })
      ] })
    ] })
  ] });
}, Ka = ({ formElements: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: u, mode: f, isAdd: x }) => {
  const { tOpts: g, tTranslate: d } = Ya(r);
  return e?.length ? /* @__PURE__ */ n(ge, { children: e.map(({ Component: p, column: w, field: m, label: h, otherProps: C }, b) => {
    const D = typeof w.relation == "function";
    return /* @__PURE__ */ v(xr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: D ? "flex-start" : "center", children: [
      w?.showLabel !== !1 ? /* @__PURE__ */ n(xr, { size: { xs: 3 }, sx: ya, children: /* @__PURE__ */ v(Ie, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        d(w.label || m, g),
        ": ",
        w.required && /* @__PURE__ */ n(zl, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ n(xr, { size: { xs: D ? 12 : 9 }, sx: ya, children: /* @__PURE__ */ n(p, { isAdd: x, model: r, fieldConfigs: u[m], mode: f, column: w, field: m, label: h, formik: t, data: a, onChange: o, combos: l, lookups: i, tTranslate: d, tOpts: g, ...C }) })
    ] }, b);
  }) }) : null;
}, Gl = function({ columns: e, tabs: r = {}, id: t, searchParams: a }) {
  const o = [], l = {};
  for (const u in r)
    l[u] = [];
  for (const u of e) {
    const f = u.type;
    if (u.label === null)
      continue;
    const { field: x, label: g, tab: d } = u, p = {};
    u.options && (p.options = u.options), u.dependsOn && (p.dependsOn = u.dependsOn);
    const w = $l[f];
    if (!w || u.hideInAddGrid && t === "0")
      continue;
    (d && r[d] ? l[d] : o).push({ Component: w, field: x, label: g, column: { ...u, readOnly: a.has("showRelation") || u.readOnly }, otherProps: p });
  }
  const i = [];
  for (const u in l)
    i.push({ key: u, title: r[u], items: l[u] });
  return { formElements: o, tabColumns: i };
}, ql = ({ model: e, formik: r, data: t, combos: a, onChange: o, lookups: l, id: i, fieldConfigs: u, mode: f, handleSubmit: x }) => {
  const g = $e.emptyIdValues.includes(i), { formElements: d, tabColumns: p } = Le.useMemo(() => {
    const w = e.formConfig?.showTabbed, m = new URLSearchParams(window.location.search), { formElements: h, tabColumns: C } = Gl({ columns: e.columns, tabs: w ? e.tabs : {}, id: i, searchParams: m });
    return { formElements: h, tabColumns: C, showTabs: w && C.length > 0 };
  }, [e]);
  return /* @__PURE__ */ v("div", { children: [
    /* @__PURE__ */ n(Ka, { isAdd: g, formElements: d, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: u, mode: f }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(Vl, { tabColumns: p, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: u, mode: f, handleSubmit: x }) })
  ] });
};
function Wl(e) {
  const { children: r, value: t, index: a, ...o } = e;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "tabpanel",
      hidden: t !== a,
      id: `simple-tabpanel-${a}`,
      "aria-labelledby": `simple-tab-${a}`,
      ...o,
      children: t === a && /* @__PURE__ */ n(Xe, { sx: { p: 3 }, children: r })
    }
  );
}
function jl(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const Ul = xa(({ relation: e, parentFilters: r, parent: t, where: a, models: o, readOnly: l }) => {
  const i = o.find(({ name: x }) => x === e);
  if (!i) return null;
  const u = { ...i, hideBreadcrumb: !0 }, f = u instanceof tr ? u : new tr(u);
  return f ? /* @__PURE__ */ n(
    f.ChildGrid,
    {
      readOnly: l,
      parentFilters: r,
      parent: t,
      model: u,
      where: a,
      isChildGrid: !0
    }
  ) : null;
}), Hl = gt.memo(({ relations: e, parent: r, where: t = [], models: a, relationFilters: o, readOnly: l }) => {
  const [i, u] = B(0);
  return /* @__PURE__ */ v(Xe, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(Xe, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(oi, { value: i, onChange: (x, g) => {
      u(g);
    }, "aria-label": "relations tabs", children: e.map((x, g) => {
      const d = a.find(({ name: w }) => w === x) || {}, p = d.listTitle || d.title || x;
      return /* @__PURE__ */ n(
        ni,
        {
          label: p,
          ...jl(g)
        },
        x
      );
    }) }) }),
    e.map((x, g) => /* @__PURE__ */ n(Wl, { value: i, index: g, children: /* @__PURE__ */ n(
      Ul,
      {
        readOnly: l,
        relation: x,
        models: a,
        parentFilters: o[x] || [],
        parent: r,
        where: t
      },
      x
    ) }, x))
  ] });
}), _a = rr(1), Yl = {}, he = {
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
}, Kl = ({
  model: e,
  api: r,
  models: t,
  relationFilters: a = {},
  permissions: o = {},
  Layout: l = ql,
  baseSaveData: i = {},
  sx: u,
  readOnly: f,
  beforeSubmit: x,
  deletePromptText: g,
  detailPanelId: d = null,
  // Grid Row Detail Panel Id
  onCancel: p,
  onSaveSuccess: w
}) => {
  const m = e.formTitle || e.title, { t: h, i18n: C } = yt(), b = U(() => ({ t: h, i18n: C }), [h, C]), D = e?.tTranslate ?? ((L) => L), { navigate: P, getParams: k, useParams: E, pathname: T } = kr(), { relations: V = [] } = e, { stateData: le, buildUrl: J, setPageTitle: q } = ze(), Q = E() || k, { id: Z = "" } = Q, R = d || Z.split("-")[he.editIdIndex], fe = new URLSearchParams(window.location.search), de = fe.has(he.baseData) && fe.get(he.baseData);
  if (de) {
    const L = JSON.parse(de);
    typeof L === he.object && L !== null && (i = { ...i, ...L });
  }
  const [me, X] = B(!0), [z, Fe] = B({}), [Te, re] = B({}), [S, N] = B(!1), W = xt(), [$, H] = B(null), [Be, Ye] = B(0), [Ve, wt] = B(!1), [kt, Nt] = B(null), [tt, se] = B(""), vt = typeof e.applyFieldConfig === he.function ? e.applyFieldConfig({ data: z, lookups: Te }) : Yl, Ke = J(e.api), Lt = Z.includes("-") && Z.split("-")[0] === "0" ? "copy" : "", s = le.userData || {}, ct = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: ir } = ja({
    userData: s,
    model: e,
    userDefinedPermissions: ct
  }), { hideBreadcrumb: Dt = !1, navigateBack: be } = e, _e = !("canEdit" in z) || z.canEdit, pe = A(() => {
    let L;
    switch (typeof be) {
      case he.function:
        L = be({ params: Q, searchParams: fe, data: z });
        break;
      case he.number:
      case he.string:
        L = be;
        break;
      default:
        L = T.substring(0, T.lastIndexOf("/"));
        break;
    }
    P(L);
  }, [be, P, Q, fe, z, T]), Re = U(() => $e.emptyIdValues.includes(R), [R]), ve = U(() => Re ? { ...e.initialValues, ...z, ...i } : { ...i, ...e.initialValues, ...z }, [e.initialValues, z, R]), Pt = r || Ke, St = U(() => {
    if (d)
      return d;
    const L = Z.split("-");
    return L.length > 1 ? L[he.loadIdIndex] : R;
  }, [d, Z, R]), Ft = A(async () => {
    X(!0);
    try {
      const L = await er({
        api: Pt,
        model: e,
        id: St
      });
      oe(L);
    } catch (L) {
      xe("Could not load record", L.message);
    } finally {
      X(!1);
    }
  }, [Pt, e, St]);
  ce(() => {
    Ft();
  }, [R, St, e, Pt, Ft]), ce(() => {
    H(e.getValidationSchema({ id: R, tTranslate: D, tOpts: b }));
  }, [R, e, H, h, b, D]);
  const De = Oa({
    enableReinitialize: !0,
    initialValues: ve,
    validationSchema: $,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (L, { resetForm: we }) => {
      Object.keys(L).forEach((ee) => {
        typeof L[ee] === he.string && (L[ee] = L[ee].trim());
      }), X(!0), Rr({
        id: R,
        api: Ke,
        values: L,
        model: e
      }).then((ee) => {
        if (!ee) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof w === he.function && w();
        const Ge = ee.info ? ee.info : `Record ${R === 0 ? "Added" : "Updated"} Successfully.`;
        W.showMessage(D(Ge, b)), be !== !1 && pe(), we({ values: De.values });
      }).catch((ee) => {
        W.showError(
          D("An error occurred, please try after some time.", b),
          ee
        ), e.reloadOnSave && we();
      }).finally(() => {
        X(!1);
      });
    }
  }), Tt = A(() => {
    De.resetForm(), wt(!1), typeof p === he.function && p(), be !== !1 && pe();
  }, [De, p, be, pe]), xe = A((L, we) => {
    X(!1), W.showError(D(L, b), we), pe();
  }, [W, pe, D, b]), oe = function({ id: L, title: we, record: ee, lookups: Ge }) {
    const qe = Z.indexOf("-") > -1, Ee = !L || L === "0", At = Ee ? he.create : qe ? he.copy : he.edit, ut = Ee ? "" : ee[e.linkColumn], We = [{ text: e.breadCrumbs }, { text: At }];
    qe && (ee[e.linkColumn] = ""), e.columns.forEach((dt) => {
      dt.skipCopy && qe && (ee[dt.field] = "");
    }), Fe(ee), re(Ge), X(!1), ut !== "" && We.push({ text: ut }), q({
      showBreadcrumbs: !0,
      breadcrumbs: We
    });
  }, $t = A((L) => {
    De.dirty && _e ? wt(!0) : (typeof p === he.function && p(), be !== !1 && pe()), L.preventDefault();
  }, [De.dirty, _e, p, be, pe]), lr = A(async () => {
    try {
      N(!0), await Br({
        id: R,
        api: r || e.api,
        model: e
      }) === !0 && (W.showMessage(D("Record Deleted Successfully.", b)), be !== !1 && pe());
    } catch (L) {
      W.showError(D("An error occurred, please try after some time.", b), L?.message);
    } finally {
      N(!1);
    }
  }, [R, r, e.api, W, se, e, be, pe, D, b]), Et = () => {
    se(null), N(!1);
  }, zt = A((L) => {
    const { name: we, value: ee } = L.target;
    Fe({ ...z, [we]: ee });
  }, [z]), rt = A(async (L) => {
    L && L.preventDefault(), typeof x === he.function && await x({ formik: De, model: e });
    const { errors: we } = De;
    De.handleSubmit();
    const ee = Object.keys(we)[0], Ge = we[ee];
    Ge && W.showError(D(Ge, b), null, "error");
    const qe = e.columns.find(
      (Ee) => Ee.field === ee
    ) || {};
    qe.tab && Ye(Object.keys(e.tabs).indexOf(qe.tab));
  }, [x, De, e, W, Ye, D, b]), sr = [
    { text: D(m, b) },
    { text: D(R === "0" ? "New" : "Update", b) }
  ], Je = Number(R) !== 0 && !!V.length, cr = fe.has("showRelation"), ur = !_e || z.readOnlyRelations;
  g = g || D("Are you sure you want to delete ?", b);
  const { showPageTitle: Vt = !0 } = e;
  return /* @__PURE__ */ v(ge, { children: [
    Vt && /* @__PURE__ */ n(
      Wa,
      {
        navigate: P,
        title: m,
        showBreadcrumbs: !Dt,
        breadcrumbs: sr,
        model: e,
        enableBackButton: be !== void 0
      }
    ),
    /* @__PURE__ */ n(_a.Provider, { value: { activeStep: Be, setActiveStep: Ye }, children: /* @__PURE__ */ v(Vo, { sx: { padding: 2, ...u }, children: [
      me ? /* @__PURE__ */ n(Xe, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ n(qo, {}) }) : /* @__PURE__ */ v("form", { children: [
        /* @__PURE__ */ v(
          Go,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              ir && _e && !cr && !f && /* @__PURE__ */ n(
                Se,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: rt,
                  children: D("Save", b)
                }
              ),
              /* @__PURE__ */ n(
                Se,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: $t,
                  children: D("Cancel", b)
                }
              ),
              o.delete && /* @__PURE__ */ n(
                Se,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => N(!0),
                  children: D("Delete", b)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(
          l,
          {
            model: e,
            formik: De,
            data: z,
            fieldConfigs: vt,
            onChange: zt,
            lookups: Te,
            id: R,
            handleSubmit: rt,
            mode: Lt
          }
        )
      ] }),
      tt && /* @__PURE__ */ v(
        He,
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
      /* @__PURE__ */ n(
        He,
        {
          open: Ve,
          onConfirm: Tt,
          onCancel: () => wt(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ n(
        He,
        {
          open: S,
          onConfirm: lr,
          onCancel: () => {
            N(!1), Nt(null);
          },
          title: kt ? "Error Deleting Record" : "Confirm Delete",
          children: g
        }
      ),
      Je ? /* @__PURE__ */ n(
        Hl,
        {
          readOnly: ur,
          models: t,
          relationFilters: a,
          relations: V,
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
}, _l = {}, Ca = !0, Jl = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class tr {
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
    const i = { ...r.defaultValues }, u = l || t;
    Object.assign(this, {
      standard: !0,
      name: u,
      permissions: { ...tr.defaultPermissions },
      idProperty: o,
      linkColumn: `${u}Name`,
      overrideFileName: t,
      preferenceId: u,
      tableName: u,
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
      r[a] = t.defaultValue === void 0 ? Jl[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: a = {} } = {}) {
    const { columns: o } = this, l = {};
    for (const i of o) {
      const { field: u, label: f, header: x, type: g = "string", requiredIfNew: d = !1, required: p = !1, min: w = "", max: m = "", validate: h } = i, C = f || x || u;
      if (!C || f === null || f === "") continue;
      let b;
      switch (g) {
        case "string":
          b = ue.string().nullable().trim().label(C), w && !isNaN(Number(w)) && (b = b.min(Number(w), t(`${C} must be at least ${w} characters long`, a))), m && !isNaN(Number(m)) && (b = b.max(Number(m), t(`${C} must be at most ${m} characters long`, a))), p && (b = b.trim().required(t(`${C} is required`, a)));
          break;
        case "boolean":
          b = ue.bool().nullable().transform((D, P) => P === "" ? null : D).label(C);
          break;
        case "radio":
        case "dayRadio":
          b = ue.mixed().label(C), p && (b = b.required(t(`Select at least one option for ${C}`, a)));
          break;
        case "date":
          b = ue.date().nullable().transform((D, P) => P === "" || P === null ? null : D).label(C), p && (b = b.required(t(`${C} is required`, a)));
          break;
        case "dateTime":
          b = ue.date().nullable().transform((D, P) => P === "" || P === null ? null : D).label(C), p && (b = b.required(t(`${C} is required`, a)));
          break;
        case "select":
        case "autocomplete":
          p ? b = ue.string().trim().label(C).required(t(`Select at least one ${C}`, a)) : b = ue.string().nullable();
          break;
        case "password":
          b = ue.string().label(C).test("ignore-asterisks", t(`${C} must be a valid password.`, a), (D) => {
            if (D === "******") return !0;
            const P = Number(w) || 8, k = Number(m) || 50, E = i.regex || Jt.password;
            return ue.string().min(P, t(`${C} must be at least ${P} characters`, a)).max(k, t(`${C} must be at most ${k} characters`, a)).matches(
              E,
              t(`${C} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, a)
            ).isValidSync(D);
          });
          break;
        case "email":
          b = ue.string().trim().matches(
            i.regex || Jt.email,
            t("Email must be a valid email", a)
          );
          break;
        case "number":
          p ? b = ue.number().label(C).required(t(`${C} is required.`, a)) : b = ue.number().nullable(), w !== void 0 && w !== "" && !isNaN(Number(w)) && (b = b.min(Number(w), t(`${C} must be greater than or equal to ${w}`, a))), m !== void 0 && m !== "" && !isNaN(Number(m)) && (b = b.max(Number(m), t(`${C} must be less than or equal to ${m}`, a)));
          break;
        case "fileUpload":
          b = ue.string().trim().label(C);
          break;
        default:
          b = ue.mixed().nullable().label(C);
          break;
      }
      if (p && g !== "string" && (b = b.required(t(`${C} is required`, a))), d && (!r || r === "") && (b = b.trim().required(t(`${C} is required`, a))), h) {
        const D = Jt.compareValidatorRegex.exec(h);
        if (D) {
          const P = D[1], k = o.find(
            (E) => (E.formField === P || E.field) === P
          );
          b = b.oneOf(
            [ue.ref(P)],
            t(`${C} must match ${k.label}`, a)
          );
        }
      }
      l[u] = b;
    }
    return ue.object({ ...l, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ n(Kl, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ n(ha, { model: this, showRowsSelected: Ca, ...t });
  ChildGrid = (r) => /* @__PURE__ */ v(ge, { children: [
    /* @__PURE__ */ n(ha, { model: this, ...r, customStyle: _l, showRowsSelected: Ca }),
    /* @__PURE__ */ n(Co, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  He as DialogComponent,
  ha as GridBase,
  $i as HelpModal,
  pa as MuiTypography,
  Wa as PageTitle,
  xc as RouterProvider,
  La as SnackbarContext,
  bc as SnackbarProvider,
  Cc as StateProvider,
  tr as UiModel,
  yc as crudHelper,
  xi as daDKGrid,
  vi as deDEGrid,
  Pi as elGRGrid,
  Fi as esESGrid,
  Ei as frFRGrid,
  Qe as httpRequest,
  Mi as itITGrid,
  Li as locales,
  Ri as ptPT,
  Oi as trTRGrid,
  Ci as useMobile,
  kr as useRouter,
  xt as useSnackbar,
  ze as useStateContext
};
//# sourceMappingURL=index.js.map
