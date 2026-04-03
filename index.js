import { jsx as n, jsxs as S, Fragment as ye } from "react/jsx-runtime";
import * as ze from "react";
import wt, { createContext as ar, useContext as Br, useState as O, useEffect as fe, useRef as Fr, useCallback as A, useMemo as j, memo as Da, useId as Rn, createElement as kr } from "react";
import Bn from "@mui/material/Snackbar";
import kn from "@mui/material/Alert";
import Ae from "@mui/material/Button";
import Nn from "@mui/material/Dialog";
import Ln from "@mui/material/DialogActions";
import $n from "@mui/material/DialogContent";
import Vn from "@mui/material/DialogContentText";
import zn from "@mui/material/DialogTitle";
import * as et from "@mui/x-data-grid-premium";
import { GridFooterContainer as Gn, GridFooter as qn, getGridDateOperators as Sa, useGridSelector as Pa, gridFilterModelSelector as jn, useGridApiRef as Fa, GridActionsCellItem as Er, DataGridPremium as Ea, GridToolbarExportContainer as Un, Toolbar as Wn, ColumnsPanelTrigger as Hn, FilterPanelTrigger as Yn, GRID_CHECKBOX_SELECTION_COL_DEF as Kn, getGridStringOperators as _n, getGridBooleanOperators as Jn, useGridApiContext as Zn, gridRowSelectionStateSelector as Qn } from "@mui/x-data-grid-premium";
import Ta from "@mui/icons-material/Delete";
import Xn from "@mui/icons-material/FileCopy";
import eo from "@mui/icons-material/Article";
import Aa from "@mui/icons-material/Edit";
import Xe from "@mui/material/Box";
import Rt from "@mui/material/Typography";
import nr from "@mui/material/TextField";
import { useTranslation as St, withTranslation as to } from "react-i18next";
import { Typography as Be, Dialog as ro, DialogTitle as ao, Grid as we, DialogContent as no, Card as oo, CardContent as io, Breadcrumbs as lo, Link as so, Button as lt, IconButton as Bt, Box as Te, FormControl as vt, Select as Tr, MenuItem as He, Tooltip as Dt, Menu as co, List as uo, ListItemButton as wr, ListItemIcon as vr, ListItem as po, ListItemText as fo, TextField as st, FormControlLabel as ct, Checkbox as ho, Stack as da, InputLabel as pa, Badge as mo, FormHelperText as ut, useTheme as Pt, Input as go, FilledInput as bo, OutlinedInput as yo, InputAdornment as Ma, RadioGroup as Nr, Radio as xt, styled as Co, Avatar as xo, CircularProgress as wo, Divider as vo } from "@mui/material";
import Do from "@mui/icons-material/Check";
import Ar from "@mui/icons-material/Close";
import So from "@mui/icons-material/Help";
import { Replay as Po, Close as Fo, GridOn as Eo, TableChart as Dr, Code as To, Language as Ao, DataObject as Mo } from "@mui/icons-material";
import ne from "dayjs";
import Io from "dayjs/plugin/utc";
import Oo from "dayjs/plugin/timezone";
import { DatePicker as Ia } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Mr } from "@mui/x-date-pickers/DateTimePicker";
import Oa from "dayjs/plugin/utc.js";
import { LocalizationProvider as Ra } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Ba } from "@mui/x-date-pickers/AdapterDayjs";
import Ir from "@mui/icons-material/Add";
import Ro from "@mui/icons-material/Remove";
import Bo from "@mui/icons-material/FilterListOff";
import ko from "@mui/icons-material/ViewColumn";
import No from "@mui/icons-material/FilterList";
import { styled as or } from "@mui/material/styles";
import Lo from "@mui/icons-material/Save";
import fa from "@mui/icons-material/Settings";
import $o from "@mui/icons-material/Refresh";
import { useFormik as ka } from "formik";
import * as me from "yup";
import { DateTimePicker as Vo, DatePicker as zo } from "@mui/x-date-pickers";
import Na from "@mui/material/MenuItem";
import Go from "@mui/icons-material/History";
import qo from "@mui/icons-material/FileDownload";
import La from "@mui/material/Checkbox";
import jo from "@mui/material/Paper";
import Uo from "@mui/material/Stack";
import Wo from "@mui/material/CircularProgress";
import Ho from "@mui/material/FormControlLabel";
import { NumberField as er } from "@base-ui/react/number-field";
import Yo from "@mui/icons-material/KeyboardArrowUp";
import $a from "@mui/icons-material/KeyboardArrowDown";
import Ko from "@mui/icons-material/VisibilityOff";
import _o from "@mui/icons-material/Visibility";
import { TimePicker as Jo } from "@mui/x-date-pickers/TimePicker";
import Zo from "@mui/icons-material/Clear";
import ir from "@mui/material/FormControl";
import Qo from "@mui/material/InputLabel";
import Xo from "@mui/material/Select";
import Sr from "@mui/material/Grid";
import Va from "@mui/material/Autocomplete";
import ei from "@mui/material/Stepper";
import ti from "@mui/material/Step";
import ri from "@mui/material/StepLabel";
import { grey as ai } from "@mui/material/colors";
import ni from "@emotion/styled";
import oi from "@mui/material/Chip";
import { SimpleTreeView as ii } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as ha } from "@mui/x-tree-view/TreeItem";
import li from "@mui/material/Input";
import si from "@mui/material/Tab";
import ci from "@mui/material/Tabs";
const za = ar(null), ui = "bottom", di = "center", pi = wt.forwardRef(function(r, t) {
  return /* @__PURE__ */ n(kn, { elevation: 6, ref: t, variant: "filled", ...r });
}), vc = ({ children: e }) => {
  const [r, t] = O(null), [a, o] = O(!1), [l, i] = O(null), [d, h] = O(null), C = function(f, y, m = "info", x) {
    typeof f != "string" && (f = f.toString()), y && typeof y != "string" && (y = y.toString()), t(y ? `${f}: ${y}` : f), i(m), o(!0), h(x);
  }, g = function(f, y, m = "error", x) {
    C(f, y, m, x);
  }, c = function() {
    o(!1), h(null), d && d();
  };
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ n(
      za.Provider,
      {
        value: { showMessage: C, showError: g },
        children: e
      }
    ),
    /* @__PURE__ */ n(Bn, { open: a, autoHideDuration: 6e3, onClose: c, anchorOrigin: { vertical: ui, horizontal: di }, children: /* @__PURE__ */ n(pi, { severity: l, children: r }) })
  ] });
}, Ft = function() {
  return Br(za);
}, Ye = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: a, okText: o, cancelText: l, yesNo: i = !1, children: d, maxWidth: h = "sm", fullWidth: C = !0, ...g }) => (o = o || (i ? "Yes" : "Ok"), l = l || (i ? "No" : "Cancel"), /* @__PURE__ */ S(
  Nn,
  {
    ...g,
    open: e,
    onClose: a,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: h,
    fullWidth: C,
    children: [
      /* @__PURE__ */ n(zn, { id: "alert-dialog-title", sx: { fontSize: d ? "inherit" : "1.25rem" }, children: t }),
      d && /* @__PURE__ */ n($n, { dividers: !0, children: /* @__PURE__ */ n(Vn, { children: d }) }),
      (a || r) && /* @__PURE__ */ S(Ln, { children: [
        a && /* @__PURE__ */ n(Ae, { onClick: a, children: l }),
        r && /* @__PURE__ */ n(Ae, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Pr = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Ga = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, fi = (e, r) => {
  const t = new URL(e);
  for (const a in r) {
    const o = typeof r[a] == "object" ? JSON.stringify(r[a]) : r[a];
    t.searchParams.append(a, o);
  }
  window.open(t, "_blank").focus();
}, qa = async (e) => {
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
  a && (o["Content-Type"] === "multipart/form-data" ? (delete d.headers["Content-Type"], d.body = a instanceof FormData ? a : Ga(a)) : (d.headers["Content-Type"] = o["Content-Type"] || "application/json", d.body = typeof a == "string" ? a : JSON.stringify(a)));
  const h = await fetch(t, d), C = h.headers.get("content-type") || {};
  return {
    status: h.status,
    data: C.includes("application/json") ? await h.json() : await h.text(),
    headers: Object.fromEntries(h.headers.entries())
  };
}, kt = (e) => e?.message || e?.info || e?.error || e?.err, ke = Object.freeze({
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
  dataParser: i = ke.raw,
  onParseError: d
}) => {
  if (r.exportData)
    return fi(e, r);
  const h = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: a ? { ...l } : { "Content-Type": "multipart/form-data", ...l },
    ...o
  };
  r && Object.keys(r).length > 0 && (h.data = a ? r : Ga(r));
  try {
    const C = await qa(h);
    let g = C.data;
    if (C.status === Pr.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (C.status === Pr.FORBIDDEN)
      return { error: !0, message: g.message || "Access Denied!" };
    if (C.status !== Pr.OK)
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
}, hi = ["date", "dateTime"], mi = ["singleSelect"], gi = 1e6, bi = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset();
function yi(e) {
  const { operator: r, value: t, type: a } = e, o = ["isEmpty", "isNotEmpty"].includes(r), l = t != null && (t !== "" || a === "number" && t === 0 || a === "boolean" && t === !1);
  return o || l;
}
const Ci = ({ gridColumns: e, page: r, pageSize: t, sortModel: a, filterModel: o, baseFilters: l, action: i = "list", extraParams: d = {}, model: h, api: C }) => {
  const g = i === "export" && h.isElasticExport === !0, c = [], f = [], y = [];
  e.forEach(({ lookup: P, type: B, field: T, keepLocal: E = !1, keepLocalDate: G, filterable: oe = !0, dependsOn: Z }) => {
    hi.includes(B) && y.push({ field: T, keepLocal: E, keepLocalDate: G }), P && !c.includes(P) && mi.includes(B) && oe && (c.push(P), f.push({ lookup: P, dependsOn: Z }));
  });
  const m = [];
  o?.items?.length && o.items.forEach((P) => {
    if (yi(P)) {
      const { field: B, operator: T, filterField: E } = P;
      let { value: G } = P;
      const Z = e.filter((W) => W?.field === P.field)[0]?.type;
      Z === "boolean" ? G = G === "true" || G === !0 ? 1 : 0 : Z === "number" && (G = Array.isArray(G) ? G.filter((W) => W) : G), G = P.filterValues || G, m.push({
        field: E || B,
        operator: T,
        value: G,
        type: Z
      });
    }
  }), l && Array.isArray(l) && m.push(...l);
  const x = {
    start: r * t,
    limit: g ? h.exportSize || gi : t,
    ...d,
    logicalOperator: o.logicOperator,
    sort: a.map((P) => (P.filterField || P.field) + " " + P.sort).join(","),
    where: m,
    isElasticExport: g,
    model: h.module,
    fileName: h.overrideFileName
  };
  c.length && (x.lookups = c.join(",")), f.length && (x.lookupWithDeps = JSON.stringify(f)), h?.limitToSurveyed && (x.limitToSurveyed = h?.limitToSurveyed);
  let w = `${C}/${i}`;
  const s = new URLSearchParams();
  d.template && s.append("template", d.template), d.configFileName && s.append("configFileName", d.configFileName);
  const v = s.toString();
  return v && (w += `?${v}`), { requestData: x, url: w, where: m, dateColumns: y };
}, Or = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: a = {}, action: o = "list", model: l } = e, { requestData: i, url: d, where: h, dateColumns: C } = Ci(e);
  if (r) {
    i.responseType = r, i.columns = t, i.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof l.createRequestPayload == "function" && await l.createRequestPayload(i, { where: h, url: d, dataParsers: ke, ...e });
    const f = document.createElement("form");
    if (f.setAttribute("method", "POST"), f.setAttribute("id", "exportForm"), f.setAttribute("target", "_blank"), !a.template)
      for (const y in i) {
        let m = i[y];
        if (m == null)
          continue;
        typeof m != "string" && (m = JSON.stringify(m));
        const x = document.createElement("input");
        x.type = "hidden", x.name = y, x.value = m, f.append(x);
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
    dataParser: ke.json
  };
  typeof l.createRequestPayload == "function" && await l.createRequestPayload(g, { where: h, dataParsers: ke, ...e });
  const c = await Qe(g);
  if (c?.error || c?.success === !1)
    throw new Error(kt(c) || "An error occurred while fetching data");
  return typeof l.parseResponsePayload == "function" && l.parseResponseActions.includes(o) ? await l.parseResponsePayload({ responseData: c, model: l, dateColumns: C, action: o, ...e }) : (c.records.forEach((f) => {
    C.forEach((y) => {
      const { field: m, keepLocal: x, keepLocalDate: w } = y;
      if (f[m]) {
        if (f[m] = new Date(f[m]), w) {
          const s = f[m].getTimezoneOffset() * 6e4;
          f[m] = new Date(f[m].getTime() + s);
        }
        if (x && !bi(f[m])) {
          const s = f[m].getTimezoneOffset() * 6e4;
          f[m] = new Date(f[m].getTime() + s);
        }
      }
    }), l.columns.forEach(({ field: y, displayIndex: m }) => {
      m && (f[y] = f[m]);
    });
  }), c);
}, tr = async (e = {}) => {
  let { api: r, id: t, model: a, parentFilters: o, where: l = {} } = e;
  r = r || a.api;
  const i = new URLSearchParams(), d = `${r}/${t ?? "-"}`, h = [];
  (a.formDef || a.columns)?.forEach((s) => {
    s.lookup && !h.includes(s.lookup) && !s.dependsOn && h.push(s.lookup);
  }), i.set("lookups", h), l && Object.keys(l)?.length && i.set("where", JSON.stringify(l));
  const g = {
    url: `${d}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(g, { action: "load", dataParsers: ke, ...e });
  const c = await Qe(g);
  if (c?.error || c?.success === !1)
    throw new Error(kt(c) || "Load failed");
  if (typeof a.parseResponsePayload == "function" && a.parseResponseActions.includes("load"))
    return await a.parseResponsePayload({ responseData: c, model: a, action: "load", ...e });
  const { data: f, lookups: y } = c || {};
  let m = f[a.linkColumn];
  const x = a.columns.find((s) => s.field === a.linkColumn);
  if (x && x.lookup && y && y[x.lookup] && y[x.lookup]?.length) {
    const s = y[x.lookup].find((v) => v.value === m);
    s && (m = s.label);
  }
  const w = { ...a.defaultValues };
  return { id: t, title: m, record: { ...w, ...f, ...o }, lookups: y };
}, Lr = async function(e = {}) {
  const { id: r, api: t, model: a } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${t}/${r}`,
    additionalParams: { method: "DELETE" }
  };
  typeof a.createRequestPayload == "function" && await a.createRequestPayload(o, { action: "delete", dataParsers: ke, ...e });
  const l = await Qe(o);
  if (l?.error || l?.success === !1)
    throw new Error(kt(l) || "Delete failed");
  return !0;
}, $r = async function(e = {}) {
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
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(d, { action: "save", dataParsers: ke, ...e });
  const h = await Qe(d);
  if (h?.error || h?.success === !1)
    throw new Error(kt(h) || "Save failed");
  return h;
}, ja = async (e = {}) => {
  let { api: r, model: t, lookups: a, scopeId: o, reqData: l } = e;
  r = r || t.api;
  const i = new URLSearchParams(), d = `${r}/lookups`;
  i.set("lookups", a), i.set("scopeId", o);
  const h = {
    url: `${d}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0,
    ...l
  };
  typeof t.createRequestPayload == "function" && await t.createRequestPayload(h, { action: "lookups", dataParsers: ke, ...e });
  const C = await Qe(h);
  if (C?.error || C?.success === !1)
    throw new Error(kt(C) || "Could not load lookups");
  return typeof t.parseResponsePayload == "function" && t.parseResponseActions.includes("lookups") ? await t.parseResponsePayload({ responseData: C, model: t, action: "lookups", ...e }) : C;
}, Dc = {
  getList: Or,
  getRecord: tr,
  deleteRecord: Lr,
  saveRecord: $r,
  getLookups: ja
}, xi = ({ pagination: e, apiRef: r, tTranslate: t = (a) => a }) => {
  const a = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, l = r.current.state.rows.totalRowCount, i = Math.ceil(l / o), { t: d, i18n: h } = St(), C = { t: d, i18n: h }, [g, c] = O(a + 1), f = function(x) {
    let w = x.target?.value;
    w === "" ? c("") : (w = parseInt(w), w = isNaN(w) || w < 1 ? 1 : w, c(w));
  };
  fe(() => {
    c(a + 1);
  }, [a, o]);
  const y = function() {
    let x = g === "" ? 1 : g;
    x = Math.max(x, 1), x = Math.min(x, i), r.current.setPage(x - 1), c(x), g === "" && c(1);
  }, m = (x) => {
    const w = x.which || x.keyCode, s = String.fromCharCode(w);
    /\d/.test(s) || x.preventDefault();
  };
  return /* @__PURE__ */ S(Gn, { children: [
    /* @__PURE__ */ n(Xe, { sx: { pl: 5 }, children: e && /* @__PURE__ */ S(ye, { children: [
      /* @__PURE__ */ S(Rt, { variant: "p", children: [
        t("Jump to page", C),
        ":"
      ] }),
      /* @__PURE__ */ n(
        nr,
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
          onKeyPress: m,
          disabled: !l
        }
      ),
      /* @__PURE__ */ n(Ae, { disabled: !l, size: "small", onClick: y, children: t("Go", C) })
    ] }) }),
    /* @__PURE__ */ n(qn, {})
  ] });
}, wi = /\${((\w+)\.)?(\w+)}/g, vi = function(e, r, { template: t = wi, keepMissingTags: a = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, l, i, d) {
    const h = i ? r[i] || {} : r;
    return h[d] === void 0 ? a ? o : "" : h[d];
  });
}, _t = {
  replaceTags: vi
};
function ma({ variant: e = "h2", component: r = "h2", text: t = "", name: a = null, ...o }) {
  return /* @__PURE__ */ S(Be, { variant: e, component: r, ...o, children: [
    t,
    a && ` ${a}`
  ] });
}
function Di(e = !1) {
  const r = l(), [t, a] = O(r);
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
    const d = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const h = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let C = null;
    return window.innerWidth <= window.innerHeight ? C = "portrait" : C = "landscape", { mobile: d, tablet: h, portrait: C === "portrait", landscape: C === "landscape" };
  }
  return e ? t.mobile : t;
}
const Si = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Pi = {
  ...et.daDK,
  ...Si
}, Fi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Ei = {
  ...et.deDE,
  ...Fi
}, Ti = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Ai = {
  ...et.elGR,
  ...Ti
}, Mi = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Ii = {
  ...et.esES,
  ...Mi
}, Oi = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Ri = {
  ...et.frFR,
  ...Oi
}, Bi = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, ki = {
  ...et.itIT,
  ...Bi
}, Ni = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Li = {
  ...et.trTR,
  ...Ni
}, $i = {
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
}, Vi = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, zi = {
  ...et.enUS,
  ...Vi
}, Gi = {
  en: zi,
  "tr-TR": Li,
  "es-ES": Ii,
  "da-DK": Pi,
  "de-DE": Ei,
  "el-GR": Ai,
  "fr-FR": Ri,
  "pt-PT": $i,
  "it-IT": ki
};
ne.extend(Io);
ne.extend(Oo);
const Ua = ar(), Wa = ar(null), ga = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Sc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, a] = O("en"), [o, l] = O("MM/DD/YYYY hh:mm:ss A"), [i, d] = O(null), [h, C] = O(null), [g, c] = O(null), [f, y] = O(null), [m, x] = O(""), [w, s] = O(!1), { t: v, i18n: P } = St(), B = Ft(), T = Fr(r), E = A((D, $) => {
    T.current[D] = $;
  }, []), G = A((D) => T.current[D || "default"] || "", []), oe = A((D, $) => `${T.current[$ || "default"] || ""}${D}`, []), Z = A((D = !0) => {
    s(D);
  }, []), W = A((D, $, V) => {
    if (V != null) {
      const Y = V;
      let L = D ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return Y && (L = Y.split(" "), L[0] = L[0].toUpperCase(), D ? L = L[0] : $ ? L = L[0].toUpperCase() : (L[1] += L[1].includes(":ss") ? "" : ":ss", L = L.join(" "))), L;
    }
    return D?.split(" ")[0] || "DD-MM-YYYY";
  }, []), ee = A(({ value: D, useSystemFormat: $, showOnlyDate: V = !1, state: Y, timeZone: L }) => {
    if (!D) return "-";
    const Se = W($, V, Y);
    return L ? ne(D).tz(L).format(Se) : ne(D).format(Se);
  }, [W]), te = A(() => {
    const D = t, $ = Gi[D];
    function V(Y) {
      return D === "pt-PT" || D === "ptPT" ? $.components.MuiDataGrid.defaultProps.localeText[Y] || Y : $[Y] || Y;
    }
    return { getLocalizedString: V };
  }, [t]), H = A((D) => {
    a(D);
  }, []), k = A((D) => {
    d(D);
  }, []), Ce = A((D) => {
    c(D);
  }, []), le = A((D) => {
    y(D);
  }, []), re = A((D) => {
    x(D);
  }, []), q = A((D) => {
    l(D);
  }, []), X = A((D) => {
    C(D);
  }, []), U = j(() => ({
    locale: t,
    dateTime: o,
    pageTitle: i,
    modal: h,
    pageBackButton: g,
    userData: f,
    timeZone: m
  }), [t, o, i, h, g, f, m]), De = j(() => ({
    // State data
    stateData: U,
    // Loader management
    isLoading: w,
    showLoader: Z,
    // Snackbar utilities
    showMessage: B?.showMessage || ga,
    showError: B?.showError || ga,
    // i18n utilities
    dayjs: ne,
    t: v,
    i18n: P,
    // Date/time utilities
    systemDateTimeFormat: W,
    formatDate: ee,
    useLocalization: te,
    // API utilities
    getApiEndpoint: G,
    setApiEndpoint: E,
    buildUrl: oe,
    // App-level state setters with meaningful names
    setLocale: H,
    setPageTitle: k,
    setPageBackButton: Ce,
    setUserData: le,
    setTimeZone: re,
    setDateTimeFormat: q,
    setModal: X
  }), [
    U,
    w,
    Z,
    v,
    P,
    B,
    G,
    E,
    W,
    ee,
    te,
    H,
    k,
    Ce,
    le,
    re,
    q,
    X,
    oe
  ]);
  return /* @__PURE__ */ n(Ua.Provider, { value: De, children: e });
}, Pc = Wa.Provider, Vr = () => Br(Wa), qe = () => {
  const e = Br(Ua);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, qi = () => {
  const [e, r] = O(), [t, a] = O(!1), { stateData: o, setModal: l } = qe(), i = o.modal, d = 16 / 9;
  let h = (window.outerWidth - 10) / window.innerWidth * 100;
  const C = () => {
    let c = document.getElementById("tutorial-iframe");
    c ? (c = c.offsetWidth, c = c / window.innerWidth) : c = 0.9;
    const f = window.innerWidth * c * (1 / d), y = window.innerHeight - 180;
    r(Math.min(f, y));
  };
  fe(() => {
    i?.status && (a(!0), C());
  }, [i, h]), fe(() => (window.addEventListener("resize", C), () => {
    window.removeEventListener("resize", C);
  }), []);
  function g() {
    const c = document.getElementById("tutorial-iframe");
    c.src = i?.data?.url;
  }
  return /* @__PURE__ */ n("div", { children: i?.status && /* @__PURE__ */ S(ro, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    l({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ n(ao, { className: "pt-2 pb-0", children: /* @__PURE__ */ S(we, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ S(we, { size: 11, children: [
        /* @__PURE__ */ S(Be, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ n(Be, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ n(ye, { children: " " }) })
      ] }),
      /* @__PURE__ */ S(we, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ n(Po, { className: "cursor_pointer mt-2 mr-2", onClick: g }),
        /* @__PURE__ */ n(Fo, { className: "cursor_pointer mt-2", onClick: () => {
          l({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ S(no, { dividers: !0, children: [
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
function ji({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: a = null,
  mobileRightComponent: o,
  title: l = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: d,
  breadcrumbs: h = [],
  enableBackButton: C = !1,
  breadcrumbColor: g,
  showHelpButton: c = !1,
  model: f
}) {
  const y = Di(!0), m = h.length - 1, x = d && h.length, { t: w, i18n: s } = St(), v = j(() => ({ t: w, i18n: s }), [w, s]), P = f?.tTranslate ?? ((T) => T), B = () => {
    r(-1);
  };
  return fe(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ n(ma, { className: "print-only", text: P(e, v) }),
    x && /* @__PURE__ */ S(ye, { children: [
      /* @__PURE__ */ n(oo, { sx: { mb: 3 }, children: /* @__PURE__ */ S(io, { sx: { backgroundColor: g || "#fff" }, children: [
        /* @__PURE__ */ S(we, { container: !0, children: [
          /* @__PURE__ */ n(we, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ n(lo, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: h.map((T, E) => E < m ? /* @__PURE__ */ n(so, { onClick: B, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: T.text }, E) : /* @__PURE__ */ n(Be, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: T.text }, E)) }) }),
          C && /* @__PURE__ */ n(we, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(lt, { variant: "contained", onClick: B, children: P("Back", v) }) }),
          c && /* @__PURE__ */ n(we, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ n(Bt, { color: "primary", title: P("Help", v), size: "large", children: /* @__PURE__ */ n(So, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ n(Te, { className: "app-page-title--first", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { style: { display: y ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ n("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ n(
          ma,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: P(e, v),
            name: t
          }
        ) }) }) }) }),
        !y && /* @__PURE__ */ S(ye, { children: [
          /* @__PURE__ */ S(Te, { children: [
            " ",
            a && /* @__PURE__ */ n(a, {}),
            " "
          ] }),
          /* @__PURE__ */ S(Te, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ n(qi, {})
    ] })
  ] });
}
const Ha = to()(ji), Ge = {
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
}, Ya = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: a = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = a.find((l) => l.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[Ge.permissionsMapper.add],
    canEdit: t.edit && !!o[Ge.permissionsMapper.edit],
    canDelete: t.delete && !!o[[Ge.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
ne.extend(Oa);
const Ui = {
  date: Ia,
  datetime: Mr,
  dateTimeLocal: Mr
}, Wi = "-10px", Hi = "-16px", Yi = (e) => {
  const { fixedFilterFormat: r } = Ge, { item: t, applyValue: a, convert: o } = e, { systemDateTimeFormat: l, stateData: i } = qe(), d = e?.type || "date", h = r[d], C = (x) => {
    const w = ne(x);
    return w.isValid() && w.year() > 1900;
  }, g = l(i.dateTime), c = (x) => {
    if (!(d !== "date" && d !== "datetime" && d !== "dateTimeLocal" || ((s) => typeof s != "string" ? !1 : !ne(s, g, !0).isValid())(x))) {
      if (o) {
        x = ne(x).utc(), a({ ...t, value: x });
        return;
      }
      if (!C(x)) {
        a({ ...t, value: null });
        return;
      }
      a({ ...t, value: x.format(h) });
    }
  }, f = (x) => {
    if (x && x === r.OverrideDateFormat) {
      const w = x.split("-");
      return w.length === 3 ? w[1] : null;
    }
  }, y = Ui[d], m = d === "dateTimeLocal" ? t?.value ? ne(t?.value.$d) : null : t?.value ? ne(t.value) : null;
  return /* @__PURE__ */ n(Ra, { dateAdapter: Ba, children: /* @__PURE__ */ n(
    y,
    {
      fullWidth: !0,
      format: g,
      value: m,
      onChange: c,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Wi,
            marginBottom: Hi,
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
}, Jt = (e) => Sa().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ n(Yi, { ...t, ...e }) : void 0
})), Ki = {
  IsAnyOf: "isAnyOf"
}, _i = (e) => {
  const { column: r, item: t, applyValue: a, apiRef: o } = e, l = r?.dataRef?.current?.lookups;
  let i = r.customLookup || l[r.lookup] || [];
  typeof r.lookup == "string" && (i = i.map(({ label: c, value: f }) => ({
    label: c,
    value: f
  })));
  const d = Pa(o, jn), h = j(
    () => d.items?.filter((c) => c.field === r.field),
    [r.field, d.items]
  ), C = A(
    (c) => {
      let f = c.target.value;
      if (d.items.length >= 1) {
        f = f.length === 1 ? f[0] : f;
        for (const x of d.items)
          x.field === t.field && (x.operator === Ki.IsAnyOf ? f = Array.isArray(f) ? f : [f] : f = f === 0 ? "0" : f);
      }
      if (f.length === 0 && h[0]) {
        o.current.deleteFilterItem(h[0]);
        return;
      }
      const y = f, m = h[0] ? h[0] : t;
      a({ ...m, value: y });
    },
    [o, r.applyZeroFilter, h, t, a]
  ), g = h[0]?.value ?? "";
  return /* @__PURE__ */ n(vt, { variant: "standard", className: "w-100", children: /* @__PURE__ */ n(
    Tr,
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
      children: i?.map((c, f) => /* @__PURE__ */ n(He, { value: c.value, children: c.label }, f))
    }
  ) });
}, We = {
  Edit: "Edit",
  Delete: "Delete"
}, Oe = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, Ji = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, Zi = { pageSize: 50, page: 0 }, Qi = [5, 10, 20, 50, 100], Xi = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: a, tOpts: o }) => {
  const { getApiEndpoint: l } = qe(), i = l("GridPreferenceManager"), d = Fa(), h = Ft(), [C, g] = O(Oe.NONE), [c, f] = O(null), [y, m] = O(!1), [x, w] = O({}), [s, v] = O(null), [P, B] = O(null), T = j(
    () => s == null ? [] : s.filter((D) => D.prefId !== 0),
    [s]
  ), E = j(() => [
    { field: "prefName", type: "string", width: 300, headerName: a("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: a("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: a("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Er, { icon: /* @__PURE__ */ n(Dt, { title: We.Edit, children: /* @__PURE__ */ n(Aa, {}) }), tabIndex: 1, "data-action": We.Edit, label: a("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ n(Er, { icon: /* @__PURE__ */ n(Dt, { title: We.Delete, children: /* @__PURE__ */ n(Ta, {}) }), tabIndex: 2, "data-action": We.Delete, label: a("Delete", o), color: "error" }, 2)] }
  ], [a, o]), G = j(() => me.object({
    prefName: me.string().trim(!0).required(a("Preference Name is Required", o)).max(20, a("Maximum Length is ", o) + "20"),
    prefDesc: me.string().max(100, a("Maximum Length is ", o) + "100")
  }), [a, o]), oe = (D) => f(D?.currentTarget), Z = () => f(null), W = () => {
    g(Oe.NONE), Z();
  }, ee = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), B(null), t && t(null), Z());
  }, te = A(async ({ applyDefault: D = !1 }) => {
    const $ = await Qe({
      url: i,
      params: { action: "list", id: r },
      dataParser: ke.json
    });
    if (!$?.preferences) {
      h.showMessage(a("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const V = $.preferences.filter((Y) => Y.prefName.trim() !== "");
    if (v(V), D) {
      const Y = V.find((L) => L.isDefault);
      if (Y)
        return { defaultPrefId: Y.prefId, preferences: V };
      t && t(null);
    }
    return { preferences: V };
  }, [i, r, h, a, o, t]), H = A(async (D, $ = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), D === 0) {
      ee();
      return;
    }
    const V = $ || s;
    if (!V) {
      h.showMessage(a("Preferences not loaded yet.", o));
      return;
    }
    const Y = V.find((Se) => Se.prefId === D);
    if (!Y?.prefValue) {
      h.showMessage(a("Failed to load preference.", o));
      return;
    }
    let L;
    try {
      L = typeof Y.prefValue == "string" ? JSON.parse(Y.prefValue) : Y.prefValue;
    } catch {
      h.showMessage(a("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(L), B(Y.prefName), t && t(Y.prefName), Z();
  }, [e, ee, s, t, h, a, o]), k = async (D) => {
    const $ = D.prefName.trim(), V = $.toLocaleLowerCase();
    if (s.find((L) => L.prefName.toLocaleLowerCase() === V && L.prefId !== D.prefId)) {
      m(!0);
      return;
    }
    const Y = await Qe({
      url: i,
      params: {
        action: "save",
        id: r,
        prefId: D.prefId,
        prefName: $,
        prefDesc: D.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: D.isDefault
      },
      dataParser: ke.json
    });
    if (Y === !0 || Y?.success === !0) {
      h.showMessage(a(`Preference ${C === Oe.ADD ? "added" : "saved"} successfully.`, o)), W(), await te({ applyDefault: !1 });
      return;
    }
    h.showMessage(a("Error saving preference: ", o) + (Y?.message || a("Unknown error", o)));
  }, Ce = async () => {
    const D = await Qe({
      url: i,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: ke.json
    });
    if (D === !0 || D?.success === !0) {
      h.showMessage(a("Preference deleted successfully.", o)), await te({ applyDefault: !1 }), w({});
      return;
    }
    h.showMessage(a("Error deleting preference: ", o) + (D?.message || a("Unknown error", o)));
  }, le = (D) => {
    const $ = D.field === "editAction" ? We.Edit : D.field === "deleteAction" ? We.Delete : null;
    if (D.id === 0 && $) {
      h.showMessage(a(`Default preference cannot be ${$ === We.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    $ === We.Edit && (g(Oe.EDIT), q.setValues(D?.row)), $ === We.Delete && w({
      prefId: D.id,
      preferenceName: D.row.prefName
    });
  }, re = (D) => {
    g(D), Z(), D === Oe.ADD && q.resetForm();
  }, q = ka({
    initialValues: Ji,
    validationSchema: G,
    onSubmit: k,
    mode: "onBlur"
  });
  fe(() => {
    if (!r) return;
    (async () => {
      const $ = await te({ applyDefault: !0 });
      $?.defaultPrefId && $?.preferences && await H($.defaultPrefId, $.preferences);
    })();
  }, [r]);
  const X = j(() => ({
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
    paginationDisplayedRows: ({ from: D, to: $, count: V }) => `${D}–${$} ${a("of", o)} ${V}`,
    toolbarQuickFilterLabel: a("Search", o),
    columnsManagementSearchTitle: a("Search", o),
    columnsManagementNoColumns: a("No columns", o)
  }), [a, o]), U = C === Oe.MANAGE, De = C === Oe.ADD || C === Oe.EDIT;
  return /* @__PURE__ */ S(Te, { children: [
    /* @__PURE__ */ S(
      lt,
      {
        id: "grid-preferences-btn",
        "aria-controls": c ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": c ? "true" : void 0,
        onClick: oe,
        title: a("Preference", o),
        startIcon: /* @__PURE__ */ n(fa, {}),
        children: [
          a("Preferences", o),
          " ",
          P && `(${P})`
        ]
      }
    ),
    /* @__PURE__ */ S(
      co,
      {
        id: "grid-preference-menu",
        anchorEl: c,
        open: !!c,
        onClose: Z,
        component: uo,
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
          /* @__PURE__ */ S(He, { component: wr, dense: !0, onClick: () => re(Oe.ADD), children: [
            /* @__PURE__ */ n(vr, { children: /* @__PURE__ */ n(Ir, {}) }),
            a("Add Preference", o)
          ] }),
          /* @__PURE__ */ S(He, { component: wr, dense: !0, onClick: () => re(Oe.MANAGE), children: [
            /* @__PURE__ */ n(vr, { children: /* @__PURE__ */ n(fa, {}) }),
            a("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ S(He, { component: wr, dense: !0, divider: s?.length > 0, onClick: () => H(0), children: [
            /* @__PURE__ */ n(vr, { children: /* @__PURE__ */ n($o, {}) }),
            a("Reset to Default", o)
          ] }),
          s?.length > 0 && s?.map((D) => {
            const { prefName: $, prefDesc: V, prefId: Y } = D;
            return /* @__PURE__ */ n(
              He,
              {
                onClick: () => H(Y),
                component: po,
                selected: P === $,
                title: a(V, o),
                dense: !0,
                children: /* @__PURE__ */ n(fo, { primary: $ })
              },
              `pref-item-${Y}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ S(
      Ye,
      {
        open: C !== Oe.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ S(Be, { variant: "h5", children: [
          C,
          " ",
          a(U ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: U ? "md" : "sm",
        fullWidth: !0,
        children: [
          De && /* @__PURE__ */ S(
            we,
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
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(
                  st,
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
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(
                  st,
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
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(
                  ct,
                  {
                    control: /* @__PURE__ */ n(
                      ho,
                      {
                        checked: q.values.isDefault,
                        name: "isDefault",
                        onChange: q.handleChange
                      }
                    ),
                    label: a("Default", o)
                  }
                ) }),
                /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ S(da, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ n(
                    lt,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ n(Lo, {}),
                      color: "primary",
                      variant: "contained",
                      disableElevation: !0,
                      children: a("Save", o)
                    }
                  ),
                  /* @__PURE__ */ n(
                    lt,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ n(Ar, {}),
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
          U && /* @__PURE__ */ S(we, { container: !0, rowGap: 2, children: [
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
                onCellClick: le,
                columns: E,
                pageSizeOptions: Qi,
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
                    paginationModel: Zi
                  }
                },
                localeText: X
              }
            ) }),
            /* @__PURE__ */ n(we, { size: 12, children: /* @__PURE__ */ n(da, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ n(
              lt,
              {
                type: "button",
                startIcon: /* @__PURE__ */ n(Ar, {}),
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
    /* @__PURE__ */ S(
      Ye,
      {
        open: y,
        onConfirm: () => m(!1),
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
      Ye,
      {
        open: !!x.preferenceName,
        onConfirm: Ce,
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
}, el = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((a) => {
  t.lastIndex = 0;
  const o = t.exec(a);
  if (!o) return null;
  const [, l, i = "ASC"] = o;
  return {
    field: l.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), it = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: a, type: o, isPivotExport: l = !1, icon: i }) => /* @__PURE__ */ S(
  Na,
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
), tl = ({ exportFormats: e, customExportOptions: r, ...t }) => /* @__PURE__ */ S(Un, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ n(it, { ...t, icon: /* @__PURE__ */ n(Eo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ n(it, { ...t, icon: /* @__PURE__ */ n(Dr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ n(it, { ...t, icon: /* @__PURE__ */ n(Dr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ n(it, { ...t, icon: /* @__PURE__ */ n(To, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ n(it, { ...t, icon: /* @__PURE__ */ n(Ao, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ n(it, { ...t, icon: /* @__PURE__ */ n(Mo, { fontSize: "small" }), type: "JSON", contentType: "application/json" }),
  Array.isArray(r) && r.map((a, o) => /* @__PURE__ */ n(
    it,
    {
      ...t,
      icon: a.icon || /* @__PURE__ */ n(Dr, { fontSize: "small" }),
      type: a.label || "Excel",
      contentType: a.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      handleExport: a.handleExport || t.handleExport
    },
    a.key || o
  ))
] }), Xt = (e, r) => {
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
}, rl = (e = {}, r = {}) => {
  let t = !0;
  for (const a in e)
    e[a] !== r[a] && (t = !1);
  for (const a in r)
    a in e || (t = !1);
  return t;
};
ne.extend(Oa);
const al = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: a,
  tTranslate: o,
  tOpts: l
}) => {
  const { systemDateTimeFormat: i, stateData: d } = qe(), { fixedFilterFormat: h } = Ge, C = j(() => r?.items?.find((m) => m.field === e.field), [r, e.field]), g = j(() => {
    const m = C?.operator || e.toolbarFilter?.defaultOperator || Xt(e.type);
    return ["isEmpty", "isNotEmpty"].includes(m) ? "" : C ? C.value : e.toolbarFilter?.defaultOperator === "isAnyOf" ? [] : "";
  }, [C, e.toolbarFilter?.defaultOperator, e.type]), c = A((m) => {
    const x = e.toolbarFilter?.defaultOperator || Xt(e.type);
    t((w) => {
      const s = w?.items || [];
      if (m === "" || m === null || Array.isArray(m) && m.length === 0) {
        const B = s.filter((T) => T.field !== e.field);
        return {
          ...w,
          items: B
        };
      }
      const v = {
        field: e.field,
        operator: x,
        value: m,
        type: e.type
      }, P = s.filter((B) => B.field !== e.field);
      return {
        ...w,
        items: [...P, v]
      };
    });
  }, [e, t]), f = A((m, x) => x === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[m] || m : x === "string" ? {
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
    const m = e.toolbarFilter?.label || e.headerName || e.label || e.field, x = e.toolbarFilter?.defaultOperator || Xt(e.type), w = f(x, e.type), v = e.type === "number" || e.type === "string" && x !== "startsWith" ? e.type === "number" ? `${w} ${m}` : `${m} (${w})` : m;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ n(
          st,
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
          st,
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
        return /* @__PURE__ */ S(vt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(pa, { children: o(v, l) }),
          /* @__PURE__ */ S(
            Tr,
            {
              value: k,
              onChange: (Ce) => {
                const le = Ce.target.value;
                let re;
                le === "" ? re = "" : le === "true" ? re = !0 : le === "false" ? re = !1 : re = le, c(re);
              },
              size: "small",
              children: [
                /* @__PURE__ */ n(He, { value: "", children: o("All", l) }),
                /* @__PURE__ */ n(He, { value: "true", children: o("True", l) }),
                /* @__PURE__ */ n(He, { value: "false", children: o("False", l) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const P = e.customLookup || a?.[e.lookup] || [], B = typeof e.lookup == "string" ? P.map((k) => ({
          label: k?.label || "",
          value: k?.value ?? ""
        })) : P, T = C?.operator === "isAnyOf" || e.toolbarFilter?.defaultOperator === "isAnyOf", E = Ge.normalizeFilterValue({ value: g, operator: C?.operator, isMultiple: T }), G = 1;
        return /* @__PURE__ */ S(vt, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ n(pa, { children: o(v, l) }),
          /* @__PURE__ */ n(
            Tr,
            {
              value: E,
              onChange: (k) => c(k.target.value),
              multiple: T,
              size: "small",
              renderValue: (k) => {
                const le = (Array.isArray(k) ? k : k != null && k !== "" ? [k] : []).map((U) => {
                  if (U && typeof U == "object" && "label" in U) return U.label;
                  const De = B.find((D) => String(D.value) === String(U));
                  return De ? De.label : "";
                }).filter(Boolean);
                if (le.length === 0) return "";
                if (le.length <= G) return le.join(", ");
                const re = le.slice(0, G).join(", "), q = le.length - G, X = le.join(", ");
                return /* @__PURE__ */ n(Dt, { title: X, placement: "top", children: /* @__PURE__ */ n("span", { children: `${re} +${q}` }) });
              },
              children: B.map((k) => /* @__PURE__ */ n(He, { value: k.value, children: k.label }, k.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const oe = e.type, W = h[oe === "dateTime" ? "datetime" : oe], ee = i(oe !== "dateTime", !1, d.dateTime), te = oe === "dateTime" ? Vo : zo;
        let H = null;
        if (g) {
          const k = ne(g);
          H = k.isValid() ? k : null;
        }
        return /* @__PURE__ */ n(Ra, { dateAdapter: Ba, children: /* @__PURE__ */ n(
          te,
          {
            label: o(v, l),
            format: ee,
            value: H,
            onChange: (k) => {
              !k || !k.isValid() ? c(null) : c(k.format(W));
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
          st,
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
}, Zt = or(Ae)({
  margin: "6px"
}), nl = or(Wn)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), ol = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: a,
    isReadOnly: o,
    canAdd: l,
    forAssignment: i,
    showAddIcon: d,
    onAdd: h,
    selectionApi: C,
    rowSelectionModel: g,
    selectAll: c,
    available: f,
    onAssign: y,
    assigned: m,
    onUnassign: x,
    effectivePermissions: w,
    clearFilters: s,
    handleExport: v,
    preferenceKey: P,
    apiRef: B,
    tTranslate: T,
    tOpts: E,
    filterModel: G,
    setFilterModel: oe,
    onPreferenceChange: Z,
    toolbarItems: W,
    gridColumns: ee,
    customExportOptions: te
  } = e, H = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), k = (U) => U != null && U !== "" && !(Array.isArray(U) && U.length === 0), le = ((U = []) => U.filter(
    (De) => ["isEmpty", "isNotEmpty"].includes(De.operator) || k(De.value)
  ))(G?.items || []).length || 0, re = ee?.filter((U) => U.toolbarFilter) || [], q = t?.lookups || {}, X = t?.records || [];
  return /* @__PURE__ */ S(ye, { children: [
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
            r.gridSubTitle && /* @__PURE__ */ S(Rt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              T(r.gridSubTitle, E)
            ] }),
            a && r.showPreferenceInHeader && /* @__PURE__ */ S(Rt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              T("Applied Preference", E),
              ": ",
              a
            ] }),
            (o || !l && !i) && /* @__PURE__ */ S(Rt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !l || o ? "" : r.title
            ] }),
            !i && l && !o && /* @__PURE__ */ n(Zt, { startIcon: d ? /* @__PURE__ */ n(Ir, {}) : null, onClick: h, size: "medium", variant: "contained", children: T(H, E) }),
            !!e.headerActions && e.headerActions,
            C.length && X.length ? /* @__PURE__ */ n(
              Zt,
              {
                onClick: c,
                size: "medium",
                variant: "contained",
                children: g.ids.size === X.length ? T("Deselect All", E) : T("Select All", E)
              }
            ) : /* @__PURE__ */ n(ye, {}),
            f && /* @__PURE__ */ n(Zt, { startIcon: d ? /* @__PURE__ */ n(Ir, {}) : null, onClick: y, size: "medium", variant: "contained", children: T("Assign", E) }),
            m && /* @__PURE__ */ n(Zt, { startIcon: d ? /* @__PURE__ */ n(Ro, {}) : null, onClick: x, size: "medium", variant: "contained", children: T("Remove", E) })
          ] }),
          /* @__PURE__ */ S(nl, { ...e, children: [
            w.showColumnsOrder && /* @__PURE__ */ n(
              Hn,
              {
                render: (U) => /* @__PURE__ */ n(
                  Ae,
                  {
                    ...U,
                    startIcon: /* @__PURE__ */ n(ko, {}),
                    size: "small",
                    variant: "text",
                    children: T("COLUMNS", E)
                  }
                )
              }
            ),
            w.filter && /* @__PURE__ */ S(ye, { children: [
              /* @__PURE__ */ n(
                Yn,
                {
                  render: (U) => /* @__PURE__ */ n(
                    Ae,
                    {
                      ...U,
                      startIcon: /* @__PURE__ */ n(mo, { badgeContent: le, color: "primary", children: /* @__PURE__ */ n(No, {}) }),
                      size: "small",
                      variant: "text",
                      children: T("FILTERS", E)
                    }
                  )
                }
              ),
              /* @__PURE__ */ n(Ae, { startIcon: /* @__PURE__ */ n(Bo, {}), onClick: s, size: "small", children: T("CLEAR FILTER", E) })
            ] }),
            w.export && /* @__PURE__ */ n(tl, { handleExport: v, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, customExportOptions: te, tTranslate: T, tOpts: E }),
            W,
            P && /* @__PURE__ */ n(
              Xi,
              {
                gridRef: B,
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
    /* @__PURE__ */ n(Te, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: re.length > 0 && /* @__PURE__ */ n("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: re.map((U) => /* @__PURE__ */ n(
      al,
      {
        column: U,
        filterModel: G,
        setFilterModel: oe,
        lookupData: q,
        tTranslate: T,
        tOpts: E
      },
      U.field
    )) }) })
  ] });
}, il = 50, ll = /(\w+)( ASC| DESC)?/i, sl = 6e4, cl = 0, ul = 1e6, Re = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, dl = {
  article: /* @__PURE__ */ n(eo, {}),
  edit: /* @__PURE__ */ n(Aa, {}),
  copy: /* @__PURE__ */ n(Xn, {}),
  delete: /* @__PURE__ */ n(Ta, {}),
  history: /* @__PURE__ */ n(Go, {}),
  download: /* @__PURE__ */ n(qo, {})
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
}, Ka = ["isEmpty", "isNotEmpty"], pl = (e) => (e || []).filter((r) => Ka.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), fl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], hl = (e) => e.value ? /* @__PURE__ */ n(Do, { style: { color: "green" } }) : /* @__PURE__ */ n(Ar, { style: { color: "gray" } }), ba = or("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), ml = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const a = Zn(), o = e.row[t], i = Pa(a, Qn)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ n(
    La,
    {
      onClick: (h) => {
        h.stopPropagation(), r({ row: e.row });
      },
      checked: i,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, ya = Da(({
  model: e,
  columns: r,
  api: t,
  defaultSort: a,
  setActiveRecord: o,
  parentFilters: l,
  parent: i,
  where: d,
  title: h,
  showPageTitle: C,
  permissions: g,
  selected: c,
  assigned: f,
  available: y,
  disableCellRedirect: m = !1,
  onAssignChange: x,
  customStyle: w,
  onCellClick: s,
  showRowsSelected: v,
  showFullScreenLoader: P,
  customFilters: B,
  onRowDoubleClick: T,
  onRowClick: E = () => {
  },
  gridStyle: G,
  reRenderKey: oe,
  additionalFilters: Z,
  onCellDoubleClickOverride: W,
  onAddOverride: ee,
  dynamicColumns: te,
  toolbarItems: H,
  readOnly: k = !1,
  onListParamsChange: Ce,
  apiRef: le,
  baseFilters: re,
  customExportOptions: q,
  ...X
}) => {
  const [U, De] = O({ pageSize: il, page: 0 }), [D, $] = O({ recordCount: 0, records: null, lookups: {} }), V = !!x, Y = v, [L, Se] = O({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [dt, pt] = O(!1), [Me, lr] = O(null), Nt = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [ft, ht] = O(!1), he = Ft(), mt = e.paginationMode === _.client ? _.client : _.server, { t: tt, i18n: Lt } = St(), u = j(() => ({ t: tt, i18n: Lt }), [tt, Lt]), [gt, sr] = O(""), [be, rt] = O(el(a || e.defaultSort, _, ll)), Pe = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Pe.items = [], e.defaultFilters.forEach((b) => {
    Pe.items.push(b);
  }));
  const [Ie, Ne] = O({ ...Pe }), { navigate: ve, getParams: Et, useParams: $t, pathname: Fe } = Vr(), { id: cr } = $t() || Et, Tt = cr?.split("-")[0], Ee = le || Fa(), { idProperty: ue = "id", showHeaderFilters: Vt = !0, disableRowSelectionOnClick: zt = !0, hideTopFilters: Gt = !0, updatePageTitle: At = !0, isElasticScreen: bt = !1, navigateBack: ur = !1, selectionApi: Ke = {}, debounceTimeOut: dr = 300, showFooter: pr = !0, disableRowGrouping: z = !0 } = e, pe = e.readOnly === !0 || k, se = e.allowDoubleClick === !1, Le = Fr(D), je = e.showAddIcon === !0, at = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: _e, formatDate: yt, getApiEndpoint: Ct, buildUrl: Ue, setPageTitle: fr } = qe(), [en, qt] = O(!1), { timeZone: hr } = _e, nt = j(() => ({ ..._.permissions, ...e.permissions, ...g }), [e.permissions, g]), zr = ["isEmpty", "isNotEmpty", "isAnyOf"], tn = _e.userData || {}, jt = e.columns.find((b) => b.type === "fileUpload")?.field || "", rn = { add: nt.add, edit: nt.edit, delete: nt.delete }, { canAdd: Gr, canEdit: qr, canDelete: jr } = Ya({ userData: tn, model: e, userDefinedPermissions: rn }), p = e.tTranslate ?? ((b) => b), { addUrlParamKey: Ut, searchParamKey: Mt, hideBreadcrumb: an = !1, tableName: Ur, showHistory: Wr = !0, hideBreadcrumbInGrid: nn = !1, breadcrumbColor: on, disablePivoting: ln = !1, columnHeaderHeight: sn = 70, disablePagination: Hr = !1 } = e, Yr = e.gridTitle || e.title, It = Ct("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, Je = new URLSearchParams(window.location.search), [Kr, cn] = O(null), [_r, un] = O(!It), $e = t || e.api, [mr, gr] = O(null), dn = j(() => new Set(mr ? [mr] : []), [mr]), pn = typeof e.getDetailPanelContent == "function", [fn, Jr] = O([]);
  fe(() => {
    Ee.current && (Ee.current.prefKey = It);
  }, [Ee, It]);
  const Zr = A((b) => {
    cn(b), un(!0);
  }, []), hn = j(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? p(b.headerName, u) : b.headerName
  })) : [], [e.columnGroupingModel, u, tt, p]);
  fe(() => {
    Array.isArray(X.rowGroupingField) && Jr(X.rowGroupingField);
  }, [X.rowGroupingField]);
  const br = Je.has("baseData") && Je.get("baseData"), Qr = j(() => {
    if (br)
      try {
        const b = JSON.parse(br);
        if (typeof b === _.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [br]), mn = A(({ row: b }) => {
    const M = b[ue];
    Se((I) => {
      const F = new Set(I?.ids || []);
      return F.has(M) ? F.delete(M) : F.add(M), { type: "include", ids: F };
    });
  }, [ue]), Xr = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b) => yt({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: _e.dateTime, timeZone: hr }),
      filterOperators: Jt({ columnType: "date", label: p("Value", u) })
    },
    dateTime: {
      valueFormatter: (b) => yt({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: _e.dateTime, timeZone: hr }),
      filterOperators: Jt({ columnType: "datetime", label: p("Value", u) })
    },
    dateTimeLocal: {
      valueFormatter: (b) => yt({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: _e.dateTime, timeZone: hr }),
      filterOperators: Jt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: hl
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ n(ml, { params: b, handleSelectRow: mn, idProperty: ue })
    }
  };
  fe(() => {
    Le.current = D;
  }, [D]), fe(() => {
    if (!B || !Object.keys(B).length) return;
    if (B.clear) {
      Ne({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(B).reduce((M, [I, F]) => (I === _.startDate || I === _.endDate ? M.push(F) : I in B && M.push({ field: I, value: F, operator: "equals", type: "string" }), M), []);
    Ne({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [B]);
  const gn = A(({ field: b, lookupMap: M }) => (Le.current.lookups || {})[(M || {})[b]?.lookup] || [], []);
  fe(() => {
    X.isChildGrid;
  }, [X.isChildGrid, Gt]);
  const ea = A(
    ({ key: b, title: M, icon: I, color: F = "primary", disabled: R, otherProps: J }) => /* @__PURE__ */ n(
      Er,
      {
        icon: /* @__PURE__ */ n(Dt, { title: p(M, u), children: dl[I] || I || p(M, u) }),
        "data-action": b,
        label: p(M, u),
        color: F,
        disabled: R,
        ...J
      },
      b
    ),
    [tt, u, p]
  ), { customActions: Wt = [] } = e, Ht = j(() => {
    const b = [];
    return !V && !pe && b.push(
      {
        key: Re.Edit,
        title: "Edit",
        icon: "edit",
        show: !!qr,
        disabled: (M) => M.canEdit === !1
      },
      {
        key: Re.Copy,
        title: "Copy",
        icon: "copy",
        show: !!nt.copy
      },
      {
        key: Re.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!jr
      },
      {
        key: Re.History,
        title: "History",
        icon: "history",
        show: !!Wr
      },
      ...Wt
    ), b.push({
      key: Re.Download,
      title: "Download document",
      icon: "download",
      show: jt.length > 0
    }), b.filter(({ show: M }) => M !== !1);
  }, [
    V,
    pe,
    qr,
    jr,
    Wr,
    nt.copy,
    jt.length,
    Wt
  ]), bn = A(
    ({ row: b }) => Ht.map(
      ({ key: M, title: I, icon: F, color: R, disabled: J, show: N, action: Q, ...ie }) => ea({
        key: M,
        title: I || Q,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: F,
        color: R,
        disabled: J?.(b),
        otherProps: ie
      })
    ),
    [Ht, ea]
  ), { gridColumns: xe, pinnedColumns: ta, lookupMap: yr } = j(() => {
    let b = r || e.gridColumns || e.columns;
    te && (b = [...te, ...b]);
    const M = { left: [Kn.field], right: [] }, I = [], F = {}, R = { ...Xr, ...e.gridColumnTypes };
    for (const N of b) {
      if (N.gridLabel === null || i && N.lookup === i || N.type === _.oneToMany && N.countInList === !1) continue;
      const Q = {};
      if (N.type === _.oneToMany && (Q.type = "number", Q.field = N.field.replace(/s$/, "Count")), R[N.type] && Object.assign(Q, R[N.type]), Q.valueOptions === _.lookup || N.type === _.boolean) {
        let ce = [];
        Q.valueOptions === _.lookup && (Q.valueOptions = (K) => gn({ ...K, lookupMap: F }), ce = [...Sa(), ..._n()].filter((K) => ["is", "not", "isAnyOf"].includes(K.value))), N.type === _.boolean && (ce = Jn()), Q.filterOperators = ce.map((ae) => ({
          ...ae,
          InputComponent: ae.InputComponent ? (K) => /* @__PURE__ */ n(
            _i,
            {
              column: {
                ...N,
                ...N.type === _.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Le
              },
              ...K,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      if ((N.linkTo || N.link) && (Q.cellClassName = "mui-grid-linkColumn"), N.hyperlinkURL && !N.renderCell) {
        const { hyperlinkURL: ce, hyperlinkIndex: ae } = N;
        Q.renderCell = (K) => {
          const { value: de, formattedValue: Kt, row: Ot } = K;
          if (de == null || de === "") return de;
          const Ze = ae ? Ot[ae] : de, xr = ce.replace("{0}", encodeURIComponent(String(Ze)));
          return /* @__PURE__ */ n("a", { href: xr, rel: "noopener noreferrer", target: "_blank", children: Kt ?? de });
        };
      }
      z || (Q.groupable = N.groupable ?? !1);
      const ie = p((typeof N.gridLabel == "function" ? N.gridLabel({ column: N, t: p, tOpts: u }) : N.gridLabel) || N.label, u);
      I.push({ ...N, ...Q, headerName: ie, description: ie }), N.pinned && M[N.pinned === _.right ? _.right : _.left].push(N.field), F[N.field] = N;
    }
    let J = e.standard;
    return J === !0 && (J = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), J && typeof J === _.object && fl.forEach(({ key: N, field: Q, type: ie, header: ce }) => {
      if (J[N] === !0) {
        const ae = { field: Q, type: ie, headerName: p(ce, u), width: 200 };
        ie === _.dateTime && (ae.filterOperators = Jt({ columnType: "date" }), ae.valueFormatter = Xr.dateTime.valueFormatter, ae.keepLocal = !0), I.push(ae);
      }
    }), Ht.length && (I.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? _.defaultActionWidth) * Ht.length,
      hidable: !1,
      getActions: bn,
      headerName: p("Actions", u)
    }), M.right.push("actions")), { gridColumns: I, pinnedColumns: M, lookupMap: F };
  }, [r, e, i, g, V, te, tt, _e?.dateTime]), Cr = Fr(!1);
  fe(() => {
    if (Cr.current) return;
    const b = xe?.filter((F) => F.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (Ie.items.some(
      (F) => b.some((R) => R.field === F.field)
    )) {
      Cr.current = !0;
      return;
    }
    const I = b.map((F) => {
      const R = Xt(F.type, F.toolbarFilter?.defaultOperator), J = Ge.normalizeFilterValue({
        operator: R,
        value: F.toolbarFilter.defaultFilterValue
      });
      return {
        field: F.field,
        operator: R,
        value: J,
        type: F.type
      };
    }).filter((F) => {
      const R = F.value;
      return !(Array.isArray(R) && R.length === 0);
    });
    I.length > 0 && Ne((F) => ({
      ...F,
      items: [...F.items, ...I]
    })), Cr.current = !0;
  }, [xe]);
  const Ve = A(async ({ action: b = "list", extraParams: M = {}, isPivotExport: I = !1, contentType: F, columns: R } = {}) => {
    const { pageSize: J, page: N } = U, Q = !!F, ie = Ue(I ? e.pivotApi : $e), ce = {
      ...Ie,
      items: pl(Ie.items)
    }, ae = Array.isArray(re) ? [...re] : [];
    e.joinColumn && Tt && ae.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(Tt) }), Z && (ce.items = [...ce.items || [], ...Z]);
    const K = [];
    Array.isArray(ae) && K.push(...ae), Array.isArray(l) && K.push(...l);
    const de = {
      ...M,
      ...X.extraParams
      // Merge any custom params passed via component props
    };
    if ((f || y) && (de[f ? "include" : "exclude"] = Array.isArray(c) ? c.join(",") : c), I && (e.exportTemplate && (de.template = e.exportTemplate), e.configFileName && (de.configFileName = e.configFileName)), !(!ce.items.length || ce.items.every((Ze) => "value" in Ze && Ze.value !== void 0))) return;
    const Ot = {
      action: b,
      page: Q ? cl : N,
      pageSize: Q ? ul : J,
      sortModel: be,
      filterModel: ce,
      gridColumns: xe,
      model: e,
      baseFilters: K,
      api: ie,
      extraParams: de
    };
    typeof Ce == "function" && Ce(Ot), Ee.current.listParams = Ot, Q || qt(!0);
    try {
      const Ze = await Or({ ...Ot, contentType: F, columns: R });
      !Q && Ze !== void 0 && $(Ze);
    } catch {
      he.showError(p("An error occurred while fetching data", u)), Q || $((xr) => ({ ...xr, records: [], recordCount: 0 }));
    } finally {
      Q || qt(!1);
    }
  }, [U, Ue, e, $e, Ie, re, Tt, f, y, c, X.extraParams, be, xe, l, Ce, Ee, Or, he, Z, he]), ot = A(async ({ id: b, record: M = {}, mode: I }) => {
    if (o) {
      try {
        const R = Ue($e), J = await tr({ id: b, api: R, model: e, parentFilters: l, where: d });
        o(J);
      } catch {
        he.showError(p("Could not load record", u));
      }
      return;
    }
    let F = Fe;
    F.endsWith("/") || (F += "/"), I === "copy" ? F += "0-" + b : F += b, Ut && (Je.set(Ut, M[Ut]), F += `?${Je.toString()}`), ve(F);
  }, [o, $e, e, l, d, Fe, Ut, Je, ve, tr, Ue, he, p, u]), ra = A(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), yn = A(async (b, M, I) => {
    let F = b.field === e.linkColumn ? Re.Edit : null;
    if (!F && b.field === _.actions && (F = I?.action, !F)) {
      const ie = M.target.closest("button");
      ie && (F = ie.dataset.action);
    }
    const { row: R } = b;
    if (!pe) {
      if (s && typeof await s({ cellParams: b, event: M, details: I }) !== _.boolean)
        return;
      const ie = yr[b.field] || {};
      if (ie.linkTo) {
        ve({
          pathname: _t.replaceTags(ie.linkTo, R)
        });
        return;
      }
      switch (F) {
        case Re.Edit:
          if (e.getDetailPanelContent) {
            const ae = R[ue];
            gr((K) => K === ae ? null : ae);
            return;
          } else
            return ot({ id: R[ue], record: R });
        case Re.Copy:
          return ot({ id: R[ue], mode: "copy" });
        case Re.Delete:
          pt(!0), lr({ name: R[e.linkColumn], id: R[ue] });
          break;
        case Re.History:
          return ve(`${Ct("history")}?tableName=${Ur}&id=${R[ue]}&breadCrumb=${Mt ? Je.get(Mt) : Yr}`);
        default:
          const ce = Wt.find((ae) => ae.action === F && typeof ae.onClick === _.function);
          if (ce) {
            ce.onClick({ row: R, navigate: ve });
            return;
          }
          break;
      }
    }
    if (F === Re.Download && ra({ documentLink: R[jt] }), !at.length)
      return;
    const { row: J } = b, N = yr[b.field] || {}, Q = {
      pathname: _t.replaceTags(N.linkTo, J)
    };
    e.addRecordToState && (Q.state = J), ve(Q);
  }, [pe, s, yr, e, ue, jt, ve, at, Wt, Ur, Mt, Je, Yr, Ct, ra, ot]), Cn = A(async () => {
    const b = Ue($e);
    try {
      await Lr({ id: Me.id, api: b, model: e }), he.showMessage(p("Record Deleted Successfully.", u)), Ve();
    } catch (M) {
      he.showError(p("Delete failed", u), M.message);
    } finally {
      pt(!1);
    }
  }, [$e, Me?.id, he, e, Ve, p, u]), aa = A(() => {
    sr(null), pt(!1);
  }, []), xn = A((b) => (typeof X.processRowUpdate == "function" && X.processRowUpdate(b, D), b), [X.processRowUpdate, D]), wn = A((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: M } = b;
    if (typeof W === _.function) {
      W(b);
      return;
    }
    if (!pe && !se && !m && ot({ id: M[ue], record: M }), pe && e.rowRedirectLink) {
      const I = {
        pathname: _t.replaceTags(e.rowRedirectLink, M)
      };
      e.addRecordToState && (I.state = M), ve(I);
    }
    typeof T === _.function && T(b);
  }, [W, pe, se, m, ot, ue, e.rowRedirectLink, e.addRecordToState, ve, T, _t]), vn = A(async () => {
    if (L.ids.size < 1) {
      he.showError(p("Please select at least one record to proceed", u));
      return;
    }
    const b = Array.from(L.ids), M = new Map((D.records || []).map((R) => [R[ue], R]));
    let I = b.map((R) => ({ ...Qr, ...M.get(R) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (I = I.map(
      (R) => Object.fromEntries(e.selectionUpdateKeys.map((J) => [J, R[J]]))
    ));
    const F = Ue(Ke || $e);
    qt(!0);
    try {
      const R = await $r({
        id: 0,
        api: `${F}/updateMany`,
        values: { items: I },
        model: e
      });
      if (R) {
        Ve();
        const J = R.info ? R.info : p("Record Added Successfully.", u);
        he.showMessage(J);
      }
    } catch (R) {
      he.showError(R.message || p("An error occurred, please try after some time.", u));
    } finally {
      qt(!1), Se({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), ht(!1);
    }
  }, [L.ids, he, D.records, ue, Qr, e.selectionUpdateKeys, Ke, $e, e, Ve, p, u]), na = A(() => {
    if (Ke.length > 0) {
      if (L.ids.size > 0) {
        ht(!0);
        return;
      }
      he.showError(
        p("Please select at least one record to proceed", u)
      );
      return;
    }
    typeof ee === _.function ? ee() : ot({ id: 0 });
  }, [Ke, he, ee, ot, L.ids.size, p, u]), oa = A(() => {
    Ie?.items?.length && Ne({ ..._.gridFilterModel });
  }, [Ie]), Yt = A(({ unassign: b, assign: M }) => {
    const I = Array.isArray(c) ? c : c.length ? c.split(",") : [], F = b ? I.filter((R) => !b.includes(parseInt(R))) : [...I, ...M];
    x(typeof c === _.string ? F.join(",") : F);
  }, [c, x]), ia = A(() => {
    Yt({ assign: Array.from(L.ids) });
  }, [Yt, L.ids]), la = A(() => {
    Yt({ unassign: Array.from(L.ids) });
  }, [Yt, L.ids]), sa = A(() => {
    const b = D.records || [];
    if (L.ids.size === b.length)
      Se({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const I = b.map((F) => F[ue]);
      Se({
        type: "include",
        ids: new Set(I)
      });
    }
  }, [L, D.records, ue]), Dn = A((b) => b[ue], [ue]), ca = A((b) => {
    if (D?.recordCount > sl) {
      he.showMessage(p("Cannot export more than 60k records, please apply filters or reduce your results using filters", u));
      return;
    }
    const { orderedFields: M, columnVisibilityModel: I, lookup: F } = Ee.current.state.columns, R = b.target.dataset.isPivotExport === "true", J = Object.keys(I).filter((K) => I[K] === !1), N = new Set(xe.filter((K) => K.exportable === !1).map((K) => K.field)), Q = M.filter(
      (K) => !N.has(K) && !J.includes(K) && K !== "__check__" && K !== "actions"
    );
    if (Q.length === 0) {
      he.showMessage(p("You cannot export while all columns are hidden... please show at least 1 column before exporting", u));
      return;
    }
    const ie = {}, ce = Object.fromEntries(xe.map((K) => [K.field, K]));
    Q.forEach((K) => {
      const de = F[K], Kt = ce[K];
      ie[K] = {
        field: K,
        width: de.width,
        headerName: Kt?.headerName || de.headerName || de.field,
        type: de.type,
        keepLocal: de.keepLocal === !0,
        isParsable: de.isParsable,
        lookup: de.lookup,
        hyperlinkURL: de.hyperlinkURL,
        hyperlinkIndex: de.hyperlinkIndex
      };
    });
    const ae = e?.formActions?.export || R ? e?.formActions?.export || "export" : void 0;
    Ve({
      action: ae,
      isPivotExport: R,
      contentType: b.target.dataset.contentType,
      columns: ie
    });
  }, [D?.recordCount, Ee, xe, he, e, Ve, p, u]);
  fe(() => {
    !$e || !_r || Ve();
  }, [$e, _r, Ve]), fe(() => {
    if (!(X.isChildGrid || V || !At))
      return fr({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        fr(null);
      };
  }, [fr, e.pageTitle, e.title, X.isChildGrid, V, At]);
  const Sn = A((b) => {
    const { items: M } = b, I = M.map((F) => {
      const { field: R, operator: J, value: N } = F, ie = (xe.find((ce) => ce.field === R) || {}).type === _.Number;
      return Ka.includes(J) ? { ...F, value: null } : ie && N < 0 ? { ...F, value: null } : zr.includes(J) || ie && !isNaN(N) || !ie ? (bt && xe.filter((ae) => ae.field === R)[0]?.isKeywordField && (F.filterField = `${F.field}.keyword`), { ...F }) : { ...F, value: ie ? null : N };
    });
    Ne({ ...b, items: I });
  }, [xe, _.Number, zr, bt, Ne]), Pn = A((b) => {
    const M = b.map((I) => {
      const F = xe.filter((N) => N.field === I.field)[0] || {}, R = bt && F.isKeywordField, J = { ...I, filterField: R ? `${I.field}.keyword` : I.field };
      return F.dataIndex && (J.filterField = F.dataIndex), J;
    });
    rt(M);
  }, [xe, bt, rt]), ua = h || e.gridTitle || e.title, Fn = Mt ? [{ text: Je.get(Mt) || ua }] : [{ text: ua }], En = A((b) => {
    gr(b.size > 0 ? [...b].pop() : null);
  }, []), Tn = A((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      gr(null), Ve();
    },
    t: p,
    tOpts: u
  }) : null, [e.getDetailPanelContent, Ve, p, u]), An = j(() => ({
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
  }), [p, u, e?.searchPlaceholder]), Mn = j(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: D,
      currentPreference: Kr,
      isReadOnly: pe,
      canAdd: Gr,
      forAssignment: V,
      showAddIcon: je,
      onAdd: na,
      selectionApi: Ke,
      rowSelectionModel: L,
      selectAll: sa,
      available: y,
      onAssign: ia,
      assigned: f,
      onUnassign: la,
      effectivePermissions: nt,
      clearFilters: oa,
      handleExport: ca,
      preferenceKey: It,
      apiRef: Ee,
      gridColumns: xe,
      tTranslate: p,
      tOpts: u,
      idProperty: ue,
      filterModel: Ie,
      setFilterModel: Ne,
      onPreferenceChange: Zr,
      toolbarItems: H,
      headerActions: X.headerActions,
      customExportOptions: q
    },
    footer: {
      pagination: Hr !== !0,
      apiRef: Ee,
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
  }), [e, D, Kr, pe, Gr, V, je, na, Ke, L, sa, y, ia, f, la, nt, oa, ca, It, Ee, xe, p, u, ue, Ie, Ne, Zr, H, X.headerActions, q]), In = j(() => ({
    columns: {
      columnVisibilityModel: Nt
    },
    pinnedColumns: ta
  }), [Nt, ta]), On = j(() => ({
    headerFilterMenu: !1,
    toolbar: ol,
    footer: xi
  }), []);
  return /* @__PURE__ */ S(ye, { children: [
    C !== !1 && /* @__PURE__ */ n(
      Ha,
      {
        navigate: ve,
        showBreadcrumbs: !an && !nn,
        breadcrumbs: Fn,
        enableBackButton: ur,
        breadcrumbColor: on,
        model: e
      }
    ),
    /* @__PURE__ */ S(Te, { style: G || w, children: [
      /* @__PURE__ */ n(Te, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ n(
        Ea,
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
          headerFilters: Vt,
          unstable_headerFilters: Vt,
          checkboxSelection: V,
          loading: !D.records || en,
          className: "pagination-fix",
          onCellClick: yn,
          onCellDoubleClick: wn,
          columns: xe,
          paginationModel: U,
          pageSizeOptions: _.pageSizeOptions,
          onPaginationModelChange: De,
          pagination: !Hr,
          rowCount: D.recordCount,
          rows: D.records || [],
          sortModel: be,
          paginationMode: mt,
          sortingMode: mt,
          filterMode: mt,
          processRowUpdate: xn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Pn,
          onFilterModelChange: Sn,
          rowSelectionModel: L,
          onRowSelectionModelChange: Se,
          filterModel: Ie,
          getRowId: Dn,
          onRowClick: E,
          slots: On,
          slotProps: Mn,
          hideFooterSelectedRowCount: Y,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Ee,
          disableAggregation: !0,
          disableRowGrouping: z,
          disableRowSelectionOnClick: zt,
          disablePivoting: ln,
          filterDebounceMs: dr,
          initialState: In,
          ...pn && {
            getDetailPanelContent: Tn,
            detailPanelExpandedRowIds: dn,
            onDetailPanelExpandedRowIdsChange: En
          },
          localeText: An,
          showToolbar: !0,
          columnHeaderHeight: sn,
          hideFooter: !pr,
          rowGroupingModel: fn,
          onRowGroupingModelChange: (b) => Jr(b),
          getRowClassName: X.getRowClassName,
          columnGroupingModel: hn
        }
      ) }),
      gt && /* @__PURE__ */ S(Ye, { open: !!gt, onConfirm: aa, onCancel: aa, title: "Info", hideCancelButton: !0, children: [
        " ",
        gt
      ] }),
      dt && !gt && /* @__PURE__ */ n(Ye, { open: dt, onConfirm: Cn, onCancel: () => pt(!1), title: p("Confirm Delete", u), okText: p("Ok", u), cancelText: p("Cancel", u), children: /* @__PURE__ */ S(ba, { children: [
        p("Are you sure you want to delete", u),
        " ",
        Me.name && /* @__PURE__ */ n(Dt, { style: { display: "inline" }, title: Me.name, arrow: !0, children: Me.name.length > 30 ? `${Me.name.slice(0, 30)}...` : Me.name }),
        " ?"
      ] }) }),
      ft && /* @__PURE__ */ n(
        Ye,
        {
          open: ft,
          onConfirm: vn,
          onCancel: () => ht(!1),
          title: p("Confirm Add", u),
          okText: p("Ok", u),
          cancelText: p("Cancel", u),
          children: /* @__PURE__ */ S(ba, { children: [
            p("Are you sure you want to add", u),
            " ",
            L.ids.size,
            " ",
            p("records", { count: L.ids.size, ...u }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, rl), gl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = (d) => {
    t.setFieldValue(r, d.target.checked);
  }, l = j(() => t.values[r] ?? !!e.defaultValue, [t, e]), i = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ n(
      Ho,
      {
        control: /* @__PURE__ */ n(
          La,
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
    /* @__PURE__ */ n(ut, { error: t.touched[r] && !!t.errors[r], children: t.touched[r] && t.errors[r] })
  ] }, r);
}, Rr = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const o = Pt(), l = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ n(
    nr,
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
function _a(e, r) {
  const [t, a] = O(e);
  return fe(() => {
    const o = setTimeout(() => {
      a(e);
    }, r);
    return () => {
      clearTimeout(o);
    };
  }, [e, r]), t;
}
const Ca = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, bl = {
  outlined: yo,
  filled: bo,
  standard: go
}, yl = () => /* @__PURE__ */ S(
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
        er.Increment,
        {
          render: /* @__PURE__ */ n(Bt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ n(
            Yo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        er.Decrement,
        {
          render: /* @__PURE__ */ n(Bt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ n(
            $a,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), Cl = ({ column: e, otherProps: r, formik: t, field: a, ...o }) => {
  const { min: l, max: i, readOnly: d } = e, h = Pt(), C = j(
    () => Ca({ value: l, state: t.values }),
    [l, t.values]
  ), g = j(
    () => Ca({ value: i, state: t.values }),
    [i, t.values]
  ), c = j(() => t.values[a] ?? null, [t.values[a]]), [f, y] = O(c), m = _a(f, 400);
  fe(() => {
    m !== c && t.setFieldValue(a, m);
  }, [m]), fe(() => {
    c !== f && y(c);
  }, [c]);
  const x = (T) => {
    y(T);
  }, w = (T) => {
    t.setFieldTouched(a, !0), typeof o.onBlur == "function" && o.onBlur(T);
  }, s = Rn(), v = `number-field-${a}-${s}`, P = e.variant || "standard", B = bl[P];
  return /* @__PURE__ */ S(
    er.Root,
    {
      value: f,
      onValueChange: x,
      min: C,
      max: g,
      disabled: d,
      render: (T, E) => /* @__PURE__ */ n(
        vt,
        {
          fullWidth: !0,
          ref: T.ref,
          error: t.touched[a] && !!t.errors[a],
          sx: d ? {
            backgroundColor: h.palette?.action?.disabled
          } : void 0,
          children: T.children
        }
      ),
      children: [
        /* @__PURE__ */ n(
          er.Input,
          {
            render: (T, E) => /* @__PURE__ */ n(
              B,
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
                endAdornment: /* @__PURE__ */ n(yl, {}),
                sx: { pr: 0 },
                ...r
              }
            )
          }
        ),
        t.touched[a] && t.errors[a] && /* @__PURE__ */ S(ut, { id: `${v}-error`, error: !0, children: [
          " ",
          t.errors[a],
          " "
        ] })
      ]
    }
  );
}, xl = ({ otherProps: e, ...r }) => {
  const [t, a] = wt.useState(!1), o = () => a((h) => !h), l = (h) => {
    h.preventDefault();
  }, { readOnly: i = !1, disabled: d = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: d,
      endAdornment: /* @__PURE__ */ n(Ma, { position: "end", children: /* @__PURE__ */ n(
        Bt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: l,
          edge: "end",
          disabled: d,
          readOnly: i,
          size: "large",
          children: t ? /* @__PURE__ */ n(Ko, {}) : /* @__PURE__ */ n(_o, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ n(Rr, { otherProps: e, ...r });
}, wl = ({ column: e, field: r, formik: t, otherProps: a, fieldConfigs: o = {}, mode: l }) => {
  const i = l !== "copy" && o.disabled, { systemDateTimeFormat: d, stateData: h } = qe(), C = j(() => t.values[r] ? ne(t.values[r]) : null, [t.values[r]]), g = e.minField ? t.values[e.minField] : void 0, c = e.maxField ? t.values[e.maxField] : void 0, f = j(() => e.min ? ne(e.min) : e.minField && g ? ne(g) : null, [e.min, e.minField, g]), y = j(() => e.max ? ne(e.max) : e.maxField && c ? ne(c) : null, [e.max, e.maxField, c]), m = A((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const s = ne(x).hour(12).toISOString();
    t.setFieldValue(r, s);
  }, [r, t]);
  return /* @__PURE__ */ kr(
    Ia,
    {
      ...a,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: d(!0, !1, h.dateTime),
      name: r,
      value: C,
      onChange: m,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: f,
      maxDate: y,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
}, vl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  const { systemDateTimeFormat: o, stateData: l } = qe(), i = j(() => t.values[r] ? ne(t.values[r]) : null, [t.values[r]]);
  return /* @__PURE__ */ kr(
    Mr,
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
      minDateTime: e.min ? ne(e.min) : null,
      maxDateTime: e.max ? ne(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Dl = ({ column: e, field: r, formik: t, otherProps: a }) => {
  let o = t.values[r];
  return e.isUtc && (o = ne.utc(o).utcOffset(ne().utcOffset(), !0).format()), /* @__PURE__ */ kr(
    Jo,
    {
      ...a,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: ne(o),
      onChange: (l) => (e.isUtc && (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, l)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Sl = [null, void 0, ""];
function Ja({ column: e, formik: r, lookups: t, dependsOn: a = [], isAutoComplete: o = !1, userSelected: l, model: i }) {
  const [d, h] = O([]), { buildUrl: C } = qe(), g = Ft(), c = C(i.api), f = j(() => {
    const x = {};
    if (!a.length) return x;
    for (const w of a)
      x[w] = r.values[w];
    return x;
  }, a.map((x) => r.values[x])), y = j(() => a.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, a]), m = A(async () => {
    if (!e.lookup) return;
    if (!Object.values(f).every(
      (w) => !Sl.includes(w)
    )) {
      h([]);
      return;
    }
    try {
      const w = await ja({
        api: c,
        model: i,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: f }] }
        }
      });
      h(w);
    } catch (w) {
      g.showError("Could not load lookups", w.message);
    }
  }, [e.lookup, f, c, i, t, g]);
  return fe(() => {
    a.length ? m() : (o || !l.current) && h(y || []);
  }, [a.length, m, o, y]), d;
}
const Pl = wt.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], model: l, tTranslate: i, tOpts: d, ...h }) => {
  const C = wt.useRef(!1), { placeHolder: g } = e, c = Ja({ column: e, formik: t, lookups: a, dependsOn: o, userSelected: C, model: l }), f = Pt(), y = j(() => {
    let s = t.values[r];
    if (!s && !C.current && e.defaultValue !== void 0) {
      const v = e.defaultValue;
      if (v != null && v !== "" && c && c.length) {
        const P = c.find((B) => String(B.value) === String(v));
        P && (s = P.value, t.setFieldValue(r, P.value));
      }
    }
    if (c?.length && !s && !e.multiSelect && "IsDefault" in c[0]) {
      const v = c.find((P) => P.IsDefault);
      v && (s = v.value, t.setFieldValue(r, v.value));
    }
    return e.multiSelect && (!s || s.length === 0 ? s = [] : Array.isArray(s) || (s = s.split(",").map((v) => parseInt(v)))), s;
  }, [t.values[r], c, e.multiSelect, r]), m = A((s) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: s.target.value, options: c, event: s, t: i, tOpts: d }), t.handleChange(s), C.current = !0;
  }, [t.values[r], e.onChange, c]), x = j(() => e.multiSelect ? Array.isArray(y) && y.length > 0 : y !== "" && y !== null && y !== void 0 && Array.isArray(c) && c.some((s) => String(s.value) === String(y)), [y, e.multiSelect, c]), w = A((s) => {
    s.stopPropagation();
    const v = e.multiSelect ? [] : "";
    t.setFieldValue(r, v), typeof e.onChange == "function" && e.onChange({ formik: t, value: v, options: c, t: i, tOpts: d }), C.current = !0;
  }, [e.multiSelect, r, t, e.onChange, c, i, d]);
  return /* @__PURE__ */ S(
    ir,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ n(Qo, { children: g || "" }),
        /* @__PURE__ */ S(Te, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ n(
            Xo,
            {
              IconComponent: $a,
              ...h,
              name: r,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(y) ? y : [] : `${y ?? ""}`,
              onChange: m,
              onBlur: t.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? f.palette?.action?.disabled : ""
              },
              children: Array.isArray(c) && c.map((s) => /* @__PURE__ */ n(Na, { value: s.value, disabled: s.isDisabled, children: s.label }, s.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ n(
            Bt,
            {
              size: "small",
              onClick: w,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": i("Clear selection", d),
              children: /* @__PURE__ */ n(Zo, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ n(ut, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), xa = or("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Fl = ({ component: e, name: r, formik: t, field: a, column: o }) => {
  const { value: l } = t.getFieldProps(r || a), { setFieldValue: i } = t, d = e || o.relation, h = A((C) => {
    i(r || a, C);
  }, [i, r, a]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ n(xa, { children: `Available ${o.label}` }),
    /* @__PURE__ */ n(d, { selected: l, available: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ n(xa, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ n(d, { selected: l, assigned: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, El = ({ field: e, formik: r, orientation: t = "row", label: a, lookups: o, fieldConfigs: l = {}, mode: i, tTranslate: d, tOpts: h, ...C }) => {
  const g = (x) => {
    r.setFieldValue(e, x.target.value);
  }, c = o ? o[C.column.lookup] : [], f = Pt(), y = r.touched[e] && !!r.errors[e], m = i !== "copy" && l.disabled;
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ n(vt, { component: "fieldset", error: y, children: /* @__PURE__ */ n(
      Nr,
      {
        row: t === "row",
        "aria-label": a,
        name: e,
        value: r.values[e] ?? "",
        onChange: g,
        children: c?.map((x, w) => /* @__PURE__ */ n(
          ct,
          {
            value: x.value,
            control: /* @__PURE__ */ n(xt, {}),
            label: d(x.label, h),
            disabled: m || (C?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          w
        ))
      }
    ) }),
    y && /* @__PURE__ */ n(ut, { style: { color: f.palette.error.main }, children: r.errors[e] })
  ] });
}, Tl = {
  limitTags: 5
}, Al = ze.memo(({ column: e, field: r, formik: t, lookups: a, dependsOn: o = [], fieldConfigs: l = {}, mode: i, model: d, ...h }) => {
  const C = Ja({ column: e, formik: t, lookups: a, dependsOn: o, model: d, isAutoComplete: !0 });
  let g = t.values[r] || [];
  Array.isArray(g) || (g = g.split(", ").map(Number));
  const c = C.filter((m) => g.includes(m.value)) || [], f = i !== "copy" && l.disabled, y = (m, x) => {
    let w = x?.map((s) => s.value) || [];
    e.dataFormat !== "array" && (w = w.length ? w.join(", ") : ""), t.setFieldValue(r, w);
  };
  return /* @__PURE__ */ S(
    ir,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ n(
          Va,
          {
            ...h,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || Tl.limitTags,
            options: C || [],
            getOptionLabel: (m) => m.label || "",
            defaultValue: c,
            renderInput: (m) => /* @__PURE__ */ n(nr, { ...m, variant: "standard" }),
            onChange: y,
            value: c,
            size: "small",
            disabled: f
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ n(ut, { children: t.errors[r] })
      ]
    },
    r
  );
}), Ml = "#182eb5", Il = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Ol = Co(xo)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Ml : "#ffffff",
  border: `1px solid ${ai[500]}`,
  color: r ? "white" : "black"
})), Rl = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ n(
  Ol,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Bl = ({ name: e, field: r, formik: t, expired: a }) => {
  const { setFieldValue: o } = t, { value: l } = t.getFieldProps(e || r), i = "1000001", d = "0111110", h = "0".repeat(7), [C, g] = O(l || h), [c, f] = O(() => l ? l === i ? i : l === d ? d : "Custom" : ""), [y, m] = O(!1), x = A((v) => {
    if (Array.isArray(v)) {
      let P = h;
      for (const B of v)
        P = P.substring(0, B) + "1" + P.substring(B + 1);
      g(P), o(e || r, P), m(!0);
    } else {
      let P = y ? h : C;
      const B = P.slice(0, v) + (P[v] === "1" ? "0" : "1") + P.slice(v + 1);
      g(B), o(e || r, B), f("Custom"), m(!1);
    }
  }, [y, h, C, e, r, o]), w = Pt(), s = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ n(vt, { component: "fieldset", error: s, children: /* @__PURE__ */ S(
      Nr,
      {
        row: !0,
        name: e || r,
        value: c,
        onChange: (v) => {
          const P = v.target.value;
          f(P), P !== "Custom" ? (g(P), o(e || r, P), m(!0)) : (g(h), o(e || r, h), m(!1));
        },
        children: [
          /* @__PURE__ */ n(ct, { value: i, control: /* @__PURE__ */ n(xt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ n(ct, { value: d, control: /* @__PURE__ */ n(xt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ n(ct, { value: "Custom", control: /* @__PURE__ */ n(xt, {}), label: "Specific days" }),
          Il.map((v, P) => /* @__PURE__ */ n(
            Rl,
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
    s && /* @__PURE__ */ n(ut, { style: { color: w.palette.error.main }, children: t.errors[r] })
  ] });
}, kl = ({ isAdd: e, column: r, field: t, formik: a, otherProps: o, fieldConfigs: l = {}, mode: i }) => {
  const d = Pt();
  let h = a.values[t] || [];
  Array.isArray(h) || (h = h.split(",").map((f) => f.trim()));
  const C = ze.useMemo(() => i === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: a }) : !!r.disabled, [i, l.disabled, r.disabled]), g = r.hasDefault && !e ? [h[0]] : [], c = A((f, y, m, x = {}) => {
    const w = y.pop()?.trim();
    y.includes(w) || y.push(w), g && g.includes(x.option) && m === "removeOption" && (y = [x.option]), r.dataFormat !== "array" && (y = y.length ? y.join(",") : ""), a.setFieldValue(t, y);
  }, [a, t]);
  return /* @__PURE__ */ S(
    ir,
    {
      fullWidth: !0,
      variant: "standard",
      error: a.touched[t] && !!a.errors[t],
      children: [
        /* @__PURE__ */ n(
          Va,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: h,
            options: [],
            renderInput: (f) => /* @__PURE__ */ n(
              nr,
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
            renderTags: (f, y) => f.map((m, x) => {
              const { key: w, ...s } = y({ index: x });
              return /* @__PURE__ */ n(
                oi,
                {
                  label: m,
                  ...s,
                  disabled: g.includes(m)
                },
                w
              );
            }),
            disabled: C
          }
        ),
        a.touched[t] && a.errors[t] && /* @__PURE__ */ n(ut, { children: a.errors[t] })
      ]
    },
    t
  );
}, Nl = (e = []) => {
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
function Ll({ column: e, field: r, formik: t, lookups: a, fieldConfigs: o, mode: l }) {
  const i = a ? a[e.lookup] : [], d = Nl(i), h = t.values[r]?.length ? t.values[r].split(", ") : [];
  let C;
  return l !== "copy" && (C = o?.disabled), /* @__PURE__ */ n(Xe, { sx: { minHeight: 350 }, children: /* @__PURE__ */ n(
    ii,
    {
      selectedItems: h,
      onSelectedItemsChange: (c, f) => {
        t.setFieldValue(r, f?.join(", ") || "");
      },
      disabled: C,
      multiSelect: !0,
      checkboxSelection: !0,
      children: d.map((c) => /* @__PURE__ */ n(ha, { itemId: c.value, label: c.label, children: c.children.map((f) => /* @__PURE__ */ n(ha, { itemId: f.value, label: f.label }, f.value)) }, c.value))
    }
  ) });
}
const $l = { maxLength: 500 }, { errorMapping: Vl } = Ge, zl = 1024 * 1024;
function Gl({ column: e, field: r, formik: t }) {
  const a = t.values[r] || "", { getApiEndpoint: o } = qe(), { maxSize: l, formats: i } = e, d = o("upload"), h = o("media"), C = o(), [g, c] = O({
    isExternal: "no",
    selectedFile: null
  }), [f, y] = O(!1), m = Ft(), { getParams: x, useParams: w } = Vr(), { associationId: s } = w() || x, v = s?.split("-")[0] || 1, P = (W) => {
    const ee = W.target.value;
    c({
      ...g,
      isExternal: ee,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, B = (W) => {
    t.setFieldValue(r, W.target.value);
  }, T = (W) => {
    const ee = W.target.files[0];
    if (ee) {
      if (l && ee.size > l * zl) {
        m.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(ee.type)) {
        m.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      c((te) => ({ ...te, selectedFile: ee }));
    }
  }, E = async () => {
    if (g.selectedFile) {
      y(!0);
      try {
        const W = new FormData();
        W.append("file", g.selectedFile), W.append("DocumentGroupId", t.values.DocumentGroupId), W.append("AssociationId", v);
        const te = (await qa({
          method: "POST",
          url: d,
          data: W,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!te.success) {
          m.showError(te.message || "Upload failed");
          return;
        }
        const H = h + "/" + te.filePath;
        t.setFieldValue(r, H);
      } catch (W) {
        const ee = (W.message.match(/status code (\d{3})/) || [])[1];
        m.showError(Vl[ee]);
      } finally {
        y(!1);
      }
    }
  }, G = new URL(C, window.location.origin).hostname.toLowerCase();
  wt.useEffect(() => {
    c({
      ...g,
      isExternal: a.toLowerCase().includes(G) ? "no" : "yes"
    });
  }, [a, c]);
  const oe = t.values[r]?.length > (e.max || $l.maxLength), Z = oe ? "red" : "";
  return /* @__PURE__ */ S(Te, { children: [
    /* @__PURE__ */ S(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Be, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ S(
        Nr,
        {
          row: !0,
          value: g.isExternal,
          onChange: P,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ n(ct, { value: "yes", control: /* @__PURE__ */ n(xt, {}), label: "Yes" }),
            /* @__PURE__ */ n(ct, { value: "no", control: /* @__PURE__ */ n(xt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ S(Te, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ n(Be, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ S(Te, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        g.isExternal === "yes" ? /* @__PURE__ */ n(
          st,
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
            onChange: B,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ n(
          st,
          {
            fullWidth: !0,
            value: a,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        oe && /* @__PURE__ */ S(Be, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    g.isExternal === "no" && /* @__PURE__ */ S(Te, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ S(
        lt,
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
      g.selectedFile && /* @__PURE__ */ n(Dt, { title: g.selectedFile.name, arrow: !0, children: /* @__PURE__ */ n(Be, { variant: "body2", children: g.selectedFile.name.length > 20 ? `${g.selectedFile.name.substring(0, 20)}...` : g.selectedFile.name }) }),
      /* @__PURE__ */ n(
        lt,
        {
          variant: "contained",
          color: "primary",
          onClick: E,
          disabled: !g.selectedFile || f,
          children: f ? /* @__PURE__ */ n(wo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const ql = ({ field: e, formik: r }) => {
  const [t, a] = ze.useState({}), o = _a(t, 300);
  ze.useEffect(() => {
    if (r.values[e])
      try {
        const i = JSON.parse(r.values[e]);
        a(i);
      } catch {
        a({});
      }
  }, [r.values[e]]), ze.useEffect(() => {
    const i = JSON.stringify(o);
    r.values[e] !== i && r.setFieldValue(e, i);
  }, [o, e, r, r.values[e]]);
  const l = (i, d) => {
    const h = { ...t, [i]: d };
    a(h);
  };
  return /* @__PURE__ */ n(
    ir,
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
            /* @__PURE__ */ S(Rt, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ n(
              li,
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
}, jl = {
  boolean: gl,
  select: Pl,
  string: Rr,
  number: Cl,
  password: xl,
  date: wl,
  dateTime: vl,
  time: Dl,
  oneToMany: Fl,
  radio: El,
  autocomplete: Al,
  dayRadio: Bl,
  email: Rr,
  chipInput: kl,
  treeCheckbox: Ll,
  fileUpload: Gl,
  json: ql
}, wa = { paddingTop: "2.5px", paddingBottom: "2.5px" }, Ul = ni("span")({
  color: "red !important"
}), Za = (e) => {
  const { t: r, i18n: t } = St(), a = ze.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((l) => l);
  return { translate: r, i18n: t, tOpts: a, tTranslate: o };
}, Wl = ({ tabColumns: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: d, mode: h, handleSubmit: C }) => {
  const [g, c] = ze.useState(/* @__PURE__ */ new Set()), { tOpts: f, tTranslate: y } = Za(r), { activeStep: m, setActiveStep: x } = ze.useContext(Xa), w = {};
  for (let E = 0, G = r.columns.length; E < G; E++) {
    const { field: oe, skip: Z } = r.columns[E];
    Z && (w[Z.step] = t.values[oe]);
  }
  const s = (E) => g.has(E) || w[E], v = () => {
    for (let E = m + 1; E < e.length; E++)
      if (!s(E))
        return !1;
    return !0;
  }, P = () => {
    let E = m + 1;
    for (; w[E]; )
      E++;
    c((G) => new Set(G).add(m)), E >= e.length || v() ? C() : x(E);
  }, B = () => {
    let E = m - 1;
    for (; w[E] && E > 0; )
      E--;
    x(E);
  };
  if (!e?.length)
    return null;
  const T = e[m];
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ n(ei, { activeStep: m, sx: { marginBottom: "20px" }, children: e.map(({ title: E, key: G }, oe) => /* @__PURE__ */ n(ti, { completed: s(oe), children: /* @__PURE__ */ n(ri, { children: /* @__PURE__ */ n(Be, { sx: { fontSize: "20px" }, children: y(E, f) }) }) }, G)) }),
    /* @__PURE__ */ S(ze.Fragment, { children: [
      /* @__PURE__ */ n(Qa, { formElements: T.items, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: d, mode: h }),
      /* @__PURE__ */ S(Xe, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        m !== 0 ? /* @__PURE__ */ n(Ae, { color: "inherit", disabled: m === 0, onClick: B, variant: "contained", sx: { mr: 2 }, children: y("Back", f) }) : null,
        /* @__PURE__ */ n(Ae, { onClick: P, variant: "contained", children: v() ? y("Finish", f) : y("Next", f) })
      ] })
    ] })
  ] });
}, Qa = ({ formElements: e, model: r, formik: t, data: a, onChange: o, combos: l, lookups: i, fieldConfigs: d, mode: h, isAdd: C }) => {
  const { tOpts: g, tTranslate: c } = Za(r);
  return e?.length ? /* @__PURE__ */ n(ye, { children: e.map(({ Component: f, column: y, field: m, label: x, otherProps: w }, s) => {
    const v = typeof y.relation == "function";
    return /* @__PURE__ */ S(Sr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: v ? "flex-start" : "center", children: [
      y?.showLabel !== !1 ? /* @__PURE__ */ n(Sr, { size: { xs: 3 }, sx: wa, children: /* @__PURE__ */ S(Be, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        c(y.label || m, g),
        ": ",
        y.required && /* @__PURE__ */ n(Ul, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ n(Sr, { size: { xs: v ? 12 : 9 }, sx: wa, children: /* @__PURE__ */ n(f, { isAdd: C, model: r, fieldConfigs: d[m], mode: h, column: y, field: m, label: x, formik: t, data: a, onChange: o, combos: l, lookups: i, tTranslate: c, tOpts: g, ...w }) })
    ] }, s);
  }) }) : null;
}, Hl = function({ columns: e, tabs: r = {}, id: t, searchParams: a }) {
  const o = [], l = {};
  for (const d in r)
    l[d] = [];
  for (const d of e) {
    const h = d.type;
    if (d.label === null)
      continue;
    const { field: C, label: g, tab: c } = d, f = {};
    d.options && (f.options = d.options), d.dependsOn && (f.dependsOn = d.dependsOn);
    const y = jl[h];
    if (!y || d.hideInAddGrid && t === "0")
      continue;
    (c && r[c] ? l[c] : o).push({ Component: y, field: C, label: g, column: { ...d, readOnly: a.has("showRelation") || d.readOnly }, otherProps: f });
  }
  const i = [];
  for (const d in l)
    i.push({ key: d, title: r[d], items: l[d] });
  return { formElements: o, tabColumns: i };
}, Yl = ({ model: e, formik: r, data: t, combos: a, onChange: o, lookups: l, id: i, fieldConfigs: d, mode: h, handleSubmit: C }) => {
  const g = Ge.emptyIdValues.includes(i), { formElements: c, tabColumns: f } = ze.useMemo(() => {
    const y = e.formConfig?.showTabbed, m = new URLSearchParams(window.location.search), { formElements: x, tabColumns: w } = Hl({ columns: e.columns, tabs: y ? e.tabs : {}, id: i, searchParams: m });
    return { formElements: x, tabColumns: w, showTabs: y && w.length > 0 };
  }, [e]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ n(Qa, { isAdd: g, formElements: c, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: d, mode: h }),
    /* @__PURE__ */ n("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ n(Wl, { tabColumns: f, model: e, formik: r, data: t, onChange: o, combos: a, lookups: l, fieldConfigs: d, mode: h, handleSubmit: C }) })
  ] });
};
function Kl(e) {
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
function _l(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const Jl = Da(({ relation: e, parentFilters: r, parent: t, where: a, models: o, readOnly: l }) => {
  const i = o.find(({ name: C }) => C === e);
  if (!i) return null;
  const d = { ...i, hideBreadcrumb: !0 }, h = d instanceof rr ? d : new rr(d);
  return h ? /* @__PURE__ */ n(
    h.ChildGrid,
    {
      readOnly: l,
      parentFilters: r,
      parent: t,
      model: d,
      where: a,
      isChildGrid: !0
    }
  ) : null;
}), Zl = wt.memo(({ relations: e, parent: r, where: t = [], models: a, relationFilters: o, readOnly: l }) => {
  const [i, d] = O(0);
  return /* @__PURE__ */ S(Xe, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ n(Xe, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ n(ci, { value: i, onChange: (C, g) => {
      d(g);
    }, "aria-label": "relations tabs", children: e.map((C, g) => {
      const c = a.find(({ name: y }) => y === C) || {}, f = c.listTitle || c.title || C;
      return /* @__PURE__ */ n(
        si,
        {
          label: f,
          ..._l(g)
        },
        C
      );
    }) }) }),
    e.map((C, g) => /* @__PURE__ */ n(Kl, { value: i, index: g, children: /* @__PURE__ */ n(
      Jl,
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
}), Xa = ar(1), Ql = {}, ge = {
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
}, Xl = ({
  model: e,
  api: r,
  models: t,
  relationFilters: a = {},
  permissions: o = {},
  Layout: l = Yl,
  baseSaveData: i = {},
  sx: d,
  readOnly: h,
  beforeSubmit: C,
  deletePromptText: g,
  detailPanelId: c = null,
  // Grid Row Detail Panel Id
  onCancel: f,
  onSaveSuccess: y
}) => {
  const m = e.formTitle || e.title, { t: x, i18n: w } = St(), s = j(() => ({ t: x, i18n: w }), [x, w]), v = e?.tTranslate ?? ((z) => z), { navigate: P, getParams: B, useParams: T, pathname: E } = Vr(), { relations: G = [] } = e, { stateData: oe, buildUrl: Z, setPageTitle: W } = qe(), ee = T() || B, { id: te = "" } = ee, H = c || te.split("-")[ge.editIdIndex], k = new URLSearchParams(window.location.search), Ce = k.has(ge.baseData) && k.get(ge.baseData);
  if (Ce) {
    const z = JSON.parse(Ce);
    typeof z === ge.object && z !== null && (i = { ...i, ...z });
  }
  const [le, re] = O(!0), [q, X] = O({}), [U, De] = O({}), [D, $] = O(!1), V = Ft(), [Y, L] = O(null), [Se, dt] = O(0), [pt, Me] = O(!1), [lr, Nt] = O(null), [ft, ht] = O(""), he = typeof e.applyFieldConfig === ge.function ? e.applyFieldConfig({ data: q, lookups: U }) : Ql, mt = Z(e.api), tt = te.includes("-") && te.split("-")[0] === "0" ? "copy" : "", Lt = oe.userData || {}, u = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: gt } = Ya({
    userData: Lt,
    model: e,
    userDefinedPermissions: u
  }), { hideBreadcrumb: sr = !1, navigateBack: be } = e, rt = !("canEdit" in q) || q.canEdit, Pe = A(() => {
    let z;
    switch (typeof be) {
      case ge.function:
        z = be({ params: ee, searchParams: k, data: q });
        break;
      case ge.number:
      case ge.string:
        z = be;
        break;
      default:
        z = E.substring(0, E.lastIndexOf("/"));
        break;
    }
    P(z);
  }, [be, P, ee, k, q, E]), Ie = j(() => Ge.emptyIdValues.includes(H), [H]), Ne = j(() => Ie ? { ...e.initialValues, ...q, ...i } : { ...i, ...e.initialValues, ...q }, [e.initialValues, q, H]), ve = r || mt, Et = j(() => {
    if (c)
      return c;
    const z = te.split("-");
    return z.length > 1 ? z[ge.loadIdIndex] : H;
  }, [c, te, H]), $t = A(async () => {
    re(!0);
    try {
      const z = await tr({
        api: ve,
        model: e,
        id: Et
      });
      Ee(z);
    } catch (z) {
      Tt("Could not load record", z.message);
    } finally {
      re(!1);
    }
  }, [ve, e, Et]);
  fe(() => {
    $t();
  }, [H, Et, e, ve, $t]), fe(() => {
    L(e.getValidationSchema({ id: H, tTranslate: v, tOpts: s }));
  }, [H, e, L, x, s, v]);
  const Fe = ka({
    enableReinitialize: !0,
    initialValues: Ne,
    validationSchema: Y,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (z, { resetForm: pe }) => {
      Object.keys(z).forEach((se) => {
        typeof z[se] === ge.string && (z[se] = z[se].trim());
      }), re(!0), $r({
        id: H,
        api: mt,
        values: z,
        model: e
      }).then((se) => {
        if (!se) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof y === ge.function && y();
        const Le = se.info ? se.info : `Record ${H === 0 ? "Added" : "Updated"} Successfully.`;
        V.showMessage(v(Le, s)), be !== !1 && Pe(), pe({ values: Fe.values });
      }).catch((se) => {
        V.showError(
          v("An error occurred, please try after some time.", s),
          se
        ), e.reloadOnSave && pe();
      }).finally(() => {
        re(!1);
      });
    }
  }), cr = A(() => {
    Fe.resetForm(), Me(!1), typeof f === ge.function && f(), be !== !1 && Pe();
  }, [Fe, f, be, Pe]), Tt = A((z, pe) => {
    re(!1), V.showError(v(z, s), pe), Pe();
  }, [V, Pe, v, s]), Ee = function({ id: z, title: pe, record: se, lookups: Le }) {
    const je = te.indexOf("-") > -1, at = !z || z === "0", _e = at ? ge.create : je ? ge.copy : ge.edit, yt = at ? "" : se[e.linkColumn], Ct = [{ text: e.breadCrumbs }, { text: _e }];
    je && (se[e.linkColumn] = ""), e.columns.forEach((Ue) => {
      Ue.skipCopy && je && (se[Ue.field] = "");
    }), X(se), De(Le), re(!1), yt !== "" && Ct.push({ text: yt }), W({
      showBreadcrumbs: !0,
      breadcrumbs: Ct
    });
  }, ue = A((z) => {
    Fe.dirty && rt ? Me(!0) : (typeof f === ge.function && f(), be !== !1 && Pe()), z.preventDefault();
  }, [Fe.dirty, rt, f, be, Pe]), Vt = A(async () => {
    try {
      $(!0), await Lr({
        id: H,
        api: r || e.api,
        model: e
      }) === !0 && (V.showMessage(v("Record Deleted Successfully.", s)), be !== !1 && Pe());
    } catch (z) {
      V.showError(v("An error occurred, please try after some time.", s), z?.message);
    } finally {
      $(!1);
    }
  }, [H, r, e.api, V, ht, e, be, Pe, v, s]), zt = () => {
    ht(null), $(!1);
  }, Gt = A((z) => {
    const { name: pe, value: se } = z.target;
    X({ ...q, [pe]: se });
  }, [q]), At = A(async (z) => {
    z && z.preventDefault(), typeof C === ge.function && await C({ formik: Fe, model: e });
    const { errors: pe } = Fe;
    Fe.handleSubmit();
    const se = Object.keys(pe)[0], Le = pe[se];
    Le && V.showError(v(Le, s), null, "error");
    const je = e.columns.find(
      (at) => at.field === se
    ) || {};
    je.tab && dt(Object.keys(e.tabs).indexOf(je.tab));
  }, [C, Fe, e, V, dt, v, s]), bt = [
    { text: v(m, s) },
    { text: v(H === "0" ? "New" : "Update", s) }
  ], ur = Number(H) !== 0 && !!G.length, Ke = k.has("showRelation"), dr = !rt || q.readOnlyRelations;
  g = g || v("Are you sure you want to delete ?", s);
  const { showPageTitle: pr = !0 } = e;
  return /* @__PURE__ */ S(ye, { children: [
    pr && /* @__PURE__ */ n(
      Ha,
      {
        navigate: P,
        title: m,
        showBreadcrumbs: !sr,
        breadcrumbs: bt,
        model: e,
        enableBackButton: be !== void 0
      }
    ),
    /* @__PURE__ */ n(Xa.Provider, { value: { activeStep: Se, setActiveStep: dt }, children: /* @__PURE__ */ S(jo, { sx: { padding: 2, ...d }, children: [
      le ? /* @__PURE__ */ n(Xe, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ n(Wo, {}) }) : /* @__PURE__ */ S("form", { children: [
        /* @__PURE__ */ S(
          Uo,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              gt && rt && !Ke && !h && /* @__PURE__ */ n(
                Ae,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: At,
                  children: v("Save", s)
                }
              ),
              /* @__PURE__ */ n(
                Ae,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: ue,
                  children: v("Cancel", s)
                }
              ),
              o.delete && /* @__PURE__ */ n(
                Ae,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => $(!0),
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
            formik: Fe,
            data: q,
            fieldConfigs: he,
            onChange: Gt,
            lookups: U,
            id: H,
            handleSubmit: At,
            mode: tt
          }
        )
      ] }),
      ft && /* @__PURE__ */ S(
        Ye,
        {
          open: !!ft,
          onConfirm: zt,
          onCancel: zt,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            ft
          ]
        }
      ),
      /* @__PURE__ */ n(
        Ye,
        {
          open: pt,
          onConfirm: cr,
          onCancel: () => Me(!1),
          title: v("Changes not saved", s),
          okText: v("Discard", s),
          cancelText: v("Continue", s),
          children: v("Would you like to continue to edit or discard changes?", s)
        }
      ),
      /* @__PURE__ */ n(
        Ye,
        {
          open: D,
          onConfirm: Vt,
          onCancel: () => {
            $(!1), Nt(null);
          },
          title: v(lr ? "Error Deleting Record" : "Confirm Delete", s),
          children: g
        }
      ),
      ur ? /* @__PURE__ */ n(
        Zl,
        {
          readOnly: dr,
          models: t,
          relationFilters: a,
          relations: G,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, Qt = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, es = {}, va = !0, ts = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class rr {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(r) {
    const { title: t = "" } = r;
    let { api: a, idProperty: o = a + "Id" } = r;
    const l = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    a || (a = `${t.replaceAll(Qt.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const i = { ...r.defaultValues }, d = l || t;
    Object.assign(this, {
      standard: !0,
      name: d,
      permissions: { ...rr.defaultPermissions },
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
      r[a] = t.defaultValue === void 0 ? ts[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: a = {} } = {}) {
    const { columns: o } = this, l = {};
    for (const i of o) {
      const { field: d, label: h, header: C, type: g = "string", requiredIfNew: c = !1, required: f = !1, min: y = "", max: m = "", validate: x } = i, w = h || C || d;
      if (!w || h === null || h === "") continue;
      let s;
      switch (g) {
        case "string":
          s = me.string().nullable().trim().label(w), y && !isNaN(Number(y)) && (s = s.min(Number(y), t(`${w} must be at least ${y} characters long`, a))), m && !isNaN(Number(m)) && (s = s.max(Number(m), t(`${w} must be at most ${m} characters long`, a))), f && (s = s.trim().required(t(`${w} is required`, a)));
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
            const P = Number(y) || 8, B = Number(m) || 50, T = i.regex || Qt.password;
            return me.string().min(P, t(`${w} must be at least ${P} characters`, a)).max(B, t(`${w} must be at most ${B} characters`, a)).matches(
              T,
              t(`${w} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, a)
            ).isValidSync(v);
          });
          break;
        case "email":
          s = me.string().trim().matches(
            i.regex || Qt.email,
            t("Email must be a valid email", a)
          );
          break;
        case "number":
          f ? s = me.number().label(w).required(t(`${w} is required.`, a)) : s = me.number().nullable(), y !== void 0 && y !== "" && !isNaN(Number(y)) && (s = s.min(Number(y), t(`${w} must be greater than or equal to ${y}`, a))), m !== void 0 && m !== "" && !isNaN(Number(m)) && (s = s.max(Number(m), t(`${w} must be less than or equal to ${m}`, a)));
          break;
        case "fileUpload":
          s = me.string().trim().label(w);
          break;
        default:
          s = me.mixed().nullable().label(w);
          break;
      }
      if (f && g !== "string" && (s = s.required(t(`${w} is required`, a))), c && (!r || r === "") && (s = s.trim().required(t(`${w} is required`, a))), x) {
        const v = Qt.compareValidatorRegex.exec(x);
        if (v) {
          const P = v[1], B = o.find(
            (T) => (T.formField === P || T.field) === P
          );
          s = s.oneOf(
            [me.ref(P)],
            t(`${w} must match ${B.label}`, a)
          );
        }
      }
      l[d] = s;
    }
    return me.object({ ...l, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ n(Xl, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ n(ya, { model: this, showRowsSelected: va, ...t });
  ChildGrid = (r) => /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ n(ya, { model: this, ...r, customStyle: es, showRowsSelected: va }),
    /* @__PURE__ */ n(vo, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  Ye as DialogComponent,
  ya as GridBase,
  qi as HelpModal,
  ma as MuiTypography,
  Ha as PageTitle,
  Pc as RouterProvider,
  za as SnackbarContext,
  vc as SnackbarProvider,
  Sc as StateProvider,
  rr as UiModel,
  Dc as crudHelper,
  Si as daDKGrid,
  Fi as deDEGrid,
  Ti as elGRGrid,
  Mi as esESGrid,
  Oi as frFRGrid,
  Qe as httpRequest,
  Bi as itITGrid,
  Gi as locales,
  $i as ptPT,
  Ni as trTRGrid,
  Di as useMobile,
  Vr as useRouter,
  Ft as useSnackbar,
  qe as useStateContext
};
//# sourceMappingURL=index.js.map
