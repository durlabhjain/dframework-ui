import { jsx as a, jsxs as w, Fragment as ge } from "react/jsx-runtime";
import * as Ge from "react";
import ft, { createContext as Zt, useContext as Tr, useState as I, useEffect as he, useRef as yr, useCallback as F, useMemo as X, memo as ga, useId as Dn, createElement as Er } from "react";
import Pn from "@mui/material/Snackbar";
import Sn from "@mui/material/Alert";
import Se from "@mui/material/Button";
import Fn from "@mui/material/Dialog";
import Tn from "@mui/material/DialogActions";
import En from "@mui/material/DialogContent";
import An from "@mui/material/DialogContentText";
import In from "@mui/material/DialogTitle";
import * as Ke from "@mui/x-data-grid-premium";
import { GridFooterContainer as On, GridFooter as Mn, getGridDateOperators as ba, useGridSelector as ya, gridFilterModelSelector as Bn, useGridApiRef as Ca, DataGridPremium as xa, GridActionsCellItem as Cr, GridToolbarExportContainer as kn, Toolbar as Rn, ColumnsPanelTrigger as Nn, FilterPanelTrigger as Ln, GRID_CHECKBOX_SELECTION_COL_DEF as $n, getGridStringOperators as zn, getGridBooleanOperators as Vn, useGridApiContext as Gn, gridRowSelectionStateSelector as qn } from "@mui/x-data-grid-premium";
import wa from "@mui/icons-material/Delete";
import Wn from "@mui/icons-material/FileCopy";
import jn from "@mui/icons-material/Article";
import va from "@mui/icons-material/Edit";
import Ye from "@mui/material/Box";
import Ft from "@mui/material/Typography";
import Qt from "@mui/material/TextField";
import { useTranslation as Ar, withTranslation as Un } from "react-i18next";
import { Typography as Oe, Dialog as Hn, DialogTitle as Yn, Grid as be, DialogContent as Kn, Card as _n, CardContent as Jn, Breadcrumbs as Zn, Link as Qn, Button as tt, IconButton as Yt, Box as Pe, FormControl as ht, Select as xr, MenuItem as Ve, Menu as Xn, List as eo, ListItemButton as hr, ListItemIcon as mr, ListItem as to, ListItemText as ro, TextField as rt, FormControlLabel as at, Checkbox as ao, Stack as aa, Tooltip as Tt, InputLabel as na, Badge as no, FormHelperText as nt, useTheme as mt, Input as oo, FilledInput as io, OutlinedInput as so, InputAdornment as Da, RadioGroup as Ir, Radio as pt, styled as lo, Avatar as co, CircularProgress as uo, Divider as po } from "@mui/material";
import fo from "@mui/icons-material/Check";
import wr from "@mui/icons-material/Close";
import ho from "@mui/icons-material/Help";
import { Replay as mo, Close as go, GridOn as bo, TableChart as oa, Code as yo, Language as Co, DataObject as xo } from "@mui/icons-material";
import re from "dayjs";
import wo from "dayjs/plugin/utc";
import vo from "dayjs/plugin/timezone";
import { DatePicker as Pa } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as vr } from "@mui/x-date-pickers/DateTimePicker";
import Sa from "dayjs/plugin/utc.js";
import { LocalizationProvider as Fa } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Ta } from "@mui/x-date-pickers/AdapterDayjs";
import Dr from "@mui/icons-material/Add";
import Do from "@mui/icons-material/Remove";
import Po from "@mui/icons-material/FilterListOff";
import So from "@mui/icons-material/ViewColumn";
import Fo from "@mui/icons-material/FilterList";
import { styled as Xt } from "@mui/material/styles";
import To from "@mui/icons-material/Save";
import ia from "@mui/icons-material/Settings";
import Eo from "@mui/icons-material/Refresh";
import { useFormik as Ea } from "formik";
import * as ue from "yup";
import { DateTimePicker as Ao, DatePicker as Io } from "@mui/x-date-pickers";
import Aa from "@mui/material/MenuItem";
import Oo from "@mui/icons-material/History";
import Mo from "@mui/icons-material/FileDownload";
import Ia from "@mui/material/Checkbox";
import Bo from "@mui/material/Paper";
import ko from "@mui/material/Stack";
import Ro from "@mui/material/CircularProgress";
import No from "@mui/material/FormControlLabel";
import { NumberField as Kt } from "@base-ui/react/number-field";
import Lo from "@mui/icons-material/KeyboardArrowUp";
import Oa from "@mui/icons-material/KeyboardArrowDown";
import $o from "@mui/icons-material/VisibilityOff";
import zo from "@mui/icons-material/Visibility";
import { TimePicker as Vo } from "@mui/x-date-pickers/TimePicker";
import er from "@mui/material/FormControl";
import Go from "@mui/material/InputLabel";
import qo from "@mui/material/Select";
import gr from "@mui/material/Grid";
import Ma from "@mui/material/Autocomplete";
import Wo from "@mui/material/Stepper";
import jo from "@mui/material/Step";
import Uo from "@mui/material/StepLabel";
import { grey as Ho } from "@mui/material/colors";
import Yo from "@emotion/styled";
import Ko from "@mui/material/Chip";
import { SimpleTreeView as _o } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as sa } from "@mui/x-tree-view/TreeItem";
import Jo from "@mui/material/Input";
import Zo from "@mui/material/Tab";
import Qo from "@mui/material/Tabs";
const Ba = Zt(null), Xo = "bottom", ei = "center", ti = ft.forwardRef(function(t, r) {
  return /* @__PURE__ */ a(Sn, { elevation: 6, ref: r, variant: "filled", ...t });
}), uc = ({ children: e }) => {
  const [t, r] = I(null), [n, o] = I(!1), [s, i] = I(null), [p, f] = I(null), g = function(l, C, c = "info", u) {
    typeof l != "string" && (l = l.toString()), C && typeof C != "string" && (C = C.toString()), r(C ? `${l}: ${C}` : l), i(c), o(!0), f(u);
  }, m = function(l, C, c = "error", u) {
    g(l, C, c, u);
  }, d = function() {
    o(!1), f(null), p && p();
  };
  return /* @__PURE__ */ w(ge, { children: [
    /* @__PURE__ */ a(
      Ba.Provider,
      {
        value: { showMessage: g, showError: m },
        children: e
      }
    ),
    /* @__PURE__ */ a(Pn, { open: n, autoHideDuration: 6e3, onClose: d, anchorOrigin: { vertical: Xo, horizontal: ei }, children: /* @__PURE__ */ a(ti, { severity: s, children: t }) })
  ] });
}, gt = function() {
  return Tr(Ba);
}, qe = ({ open: e, onConfirm: t, title: r = "Confirm", onCancel: n, okText: o, cancelText: s, yesNo: i = !1, children: p, maxWidth: f = "sm", fullWidth: g = !0, ...m }) => (o = o || (i ? "Yes" : "Ok"), s = s || (i ? "No" : "Cancel"), /* @__PURE__ */ w(
  Fn,
  {
    ...m,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: f,
    fullWidth: g,
    children: [
      /* @__PURE__ */ a(In, { id: "alert-dialog-title", sx: { fontSize: p ? "inherit" : "1.25rem" }, children: r }),
      p && /* @__PURE__ */ a(En, { dividers: !0, children: /* @__PURE__ */ a(An, { children: p }) }),
      (n || t) && /* @__PURE__ */ w(Tn, { children: [
        n && /* @__PURE__ */ a(Se, { onClick: n, children: s }),
        t && /* @__PURE__ */ a(Se, { onClick: t, autoFocus: !0, children: o })
      ] })
    ]
  }
)), br = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, ka = (e) => {
  const t = new FormData();
  for (const r in e)
    typeof e[r] == "object" ? t.append(r, JSON.stringify(e[r])) : t.append(r, e[r]);
  return t;
}, ri = (e, t) => {
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
    credentials: s = "include",
    ...i
  } = e, p = {
    method: t,
    credentials: s,
    headers: {
      ...o
    },
    ...i
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete p.headers["Content-Type"], p.body = n instanceof FormData ? n : ka(n)) : (p.headers["Content-Type"] = o["Content-Type"] || "application/json", p.body = typeof n == "string" ? n : JSON.stringify(n)));
  const f = await fetch(r, p), g = f.headers.get("content-type") || {};
  return {
    status: f.status,
    data: g.includes("application/json") ? await f.json() : await f.text(),
    headers: Object.fromEntries(f.headers.entries())
  };
}, Et = (e) => e?.message || e?.info || e?.error || e?.err, Me = Object.freeze({
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
}), Ue = async ({
  url: e,
  params: t = {},
  history: r,
  jsonPayload: n = !1,
  additionalParams: o = {},
  additionalHeaders: s = {},
  dataParser: i = Me.raw,
  onParseError: p
}) => {
  if (t.exportData)
    return ri(e, t);
  const f = {
    method: "POST",
    credentials: "include",
    url: e,
    headers: n ? { ...s } : { "Content-Type": "multipart/form-data", ...s },
    ...o
  };
  t && Object.keys(t).length > 0 && (f.data = n ? t : ka(t));
  try {
    const g = await Ra(f);
    let m = g.data;
    if (g.status === br.SESSION_EXPIRED && r) {
      r("/login");
      return;
    }
    if (g.status === br.FORBIDDEN)
      return { error: !0, message: m.message || "Access Denied!" };
    if (g.status !== br.OK)
      return { error: !0, message: m.message || "An error occurred" };
    try {
      m = i(m);
    } catch (d) {
      return p ? p(d, m) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: d.message,
        rawData: m
      };
    }
    return m;
  } catch (g) {
    return { error: !0, message: g.message || "Network error" };
  }
}, ai = ["date", "dateTime"], ni = ["singleSelect"], oi = 1e6, ii = (e) => (/* @__PURE__ */ new Date()).getTimezoneOffset() === new Date(e).getTimezoneOffset();
function si(e) {
  const { operator: t, value: r, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(t), s = r != null && (r !== "" || n === "number" && r === 0 || n === "boolean" && r === !1);
  return o || s;
}
const li = ({ gridColumns: e, page: t, pageSize: r, sortModel: n, filterModel: o, baseFilters: s, action: i = "list", extraParams: p = {}, model: f, api: g }) => {
  const m = i === "export" && f.isElasticExport === !0, d = [], l = [], C = [];
  e.forEach(({ lookup: P, type: S, field: E, keepLocal: $ = !1, keepLocalDate: q, filterable: ee = !0, dependsOn: V }) => {
    ai.includes(S) && C.push({ field: E, keepLocal: $, keepLocalDate: q }), P && !d.includes(P) && ni.includes(S) && ee && (d.push(P), l.push({ lookup: P, dependsOn: V }));
  });
  const c = [];
  o?.items?.length && o.items.forEach((P) => {
    if (si(P)) {
      const { field: S, operator: E, filterField: $ } = P;
      let { value: q } = P;
      const V = e.filter((G) => G?.field === P.field)[0]?.type;
      V === "boolean" ? q = q === "true" || q === !0 ? 1 : 0 : V === "number" && (q = Array.isArray(q) ? q.filter((G) => G) : q), q = P.filterValues || q, c.push({
        field: $ || S,
        operator: E,
        value: q,
        type: V
      });
    }
  }), s && Array.isArray(s) && c.push(...s);
  const u = {
    start: t * r,
    limit: m ? f.exportSize || oi : r,
    ...p,
    logicalOperator: o.logicOperator,
    sort: n.map((P) => (P.filterField || P.field) + " " + P.sort).join(","),
    where: c,
    isElasticExport: m,
    model: f.module,
    fileName: f.overrideFileName
  };
  d.length && (u.lookups = d.join(",")), l.length && (u.lookupWithDeps = JSON.stringify(l)), f?.limitToSurveyed && (u.limitToSurveyed = f?.limitToSurveyed);
  let x = `${g}/${i}`;
  const v = new URLSearchParams();
  p.template && v.append("template", p.template), p.configFileName && v.append("configFileName", p.configFileName);
  const M = v.toString();
  return M && (x += `?${M}`), { requestData: u, url: x, where: c, dateColumns: C };
}, Pr = async (e = {}) => {
  const { contentType: t, columns: r, extraParams: n = {}, action: o = "list", model: s } = e, { requestData: i, url: p, where: f, dateColumns: g } = li(e);
  if (t) {
    i.responseType = t, i.columns = r, i.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof s.createRequestPayload == "function" && await s.createRequestPayload(i, { where: f, url: p, dataParsers: Me, ...e });
    const l = document.createElement("form");
    if (l.setAttribute("method", "POST"), l.setAttribute("id", "exportForm"), l.setAttribute("target", "_blank"), !n.template)
      for (const C in i) {
        let c = i[C];
        if (c == null)
          continue;
        typeof c != "string" && (c = JSON.stringify(c));
        const u = document.createElement("input");
        u.type = "hidden", u.name = C, u.value = c, l.append(u);
      }
    l.setAttribute("action", i.url || p), document.body.appendChild(l), l.submit(), setTimeout(() => {
      l.remove();
    }, 0);
    return;
  }
  const m = {
    url: p,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0,
    params: i,
    dataParser: Me.json
  };
  typeof s.createRequestPayload == "function" && await s.createRequestPayload(m, { where: f, dataParsers: Me, ...e });
  const d = await Ue(m);
  if (d?.error || d?.success === !1)
    throw new Error(Et(d) || "An error occurred while fetching data");
  return typeof s.parseResponsePayload == "function" && s.parseResponseActions.includes(o) ? await s.parseResponsePayload({ responseData: d, model: s, dateColumns: g, action: o, ...e }) : (d.records.forEach((l) => {
    g.forEach((C) => {
      const { field: c, keepLocal: u, keepLocalDate: x } = C;
      if (l[c]) {
        if (l[c] = new Date(l[c]), x) {
          const v = l[c].getTimezoneOffset() * 6e4;
          l[c] = new Date(l[c].getTime() + v);
        }
        if (u && !ii(l[c])) {
          const v = l[c].getTimezoneOffset() * 6e4;
          l[c] = new Date(l[c].getTime() + v);
        }
      }
    }), s.columns.forEach(({ field: C, displayIndex: c }) => {
      c && (l[C] = l[c]);
    });
  }), d);
}, _t = async (e = {}) => {
  let { api: t, id: r, model: n, parentFilters: o, where: s = {} } = e;
  t = t || n.api;
  const i = new URLSearchParams(), p = `${t}/${r ?? "-"}`, f = [];
  (n.formDef || n.columns)?.forEach((v) => {
    v.lookup && !f.includes(v.lookup) && !v.dependsOn && f.push(v.lookup);
  }), i.set("lookups", f), s && Object.keys(s)?.length && i.set("where", JSON.stringify(s));
  const m = {
    url: `${p}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(m, { action: "load", dataParsers: Me, ...e });
  const d = await Ue(m);
  if (d?.error || d?.success === !1)
    throw new Error(Et(d) || "Load failed");
  if (typeof n.parseResponsePayload == "function" && n.parseResponseActions.includes("load"))
    return await n.parseResponsePayload({ responseData: d, model: n, action: "load", ...e });
  const { data: l, lookups: C } = d || {};
  let c = l[n.linkColumn];
  const u = n.columns.find((v) => v.field === n.linkColumn);
  if (u && u.lookup && C && C[u.lookup] && C[u.lookup]?.length) {
    const v = C[u.lookup].find((M) => M.value === c);
    v && (c = v.label);
  }
  const x = { ...n.defaultValues };
  return { id: r, title: c, record: { ...x, ...l, ...o }, lookups: C };
}, Or = async function(e = {}) {
  const { id: t, api: r, model: n } = e;
  if (!t)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${r}/${t}`,
    additionalParams: { method: "DELETE" }
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(o, { action: "delete", dataParsers: Me, ...e });
  const s = await Ue(o);
  if (s?.error || s?.success === !1)
    throw new Error(Et(s) || "Delete failed");
  return !0;
}, Mr = async function(e = {}) {
  const { id: t, api: r, values: n, model: o } = e;
  let s, i;
  t !== 0 ? (s = `${r}/${t}`, i = "PUT") : (s = r, i = "POST");
  const p = {
    url: s,
    additionalParams: { method: i },
    params: n,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(p, { action: "save", dataParsers: Me, ...e });
  const f = await Ue(p);
  if (f?.error || f?.success === !1)
    throw new Error(Et(f) || "Save failed");
  return f;
}, Na = async (e = {}) => {
  let { api: t, model: r, lookups: n, scopeId: o, reqData: s } = e;
  t = t || r.api;
  const i = new URLSearchParams(), p = `${t}/lookups`;
  i.set("lookups", n), i.set("scopeId", o);
  const f = {
    url: `${p}?${i.toString()}`,
    additionalParams: { method: "GET" },
    jsonPayload: !0,
    ...s
  };
  typeof r.createRequestPayload == "function" && await r.createRequestPayload(f, { action: "lookups", dataParsers: Me, ...e });
  const g = await Ue(f);
  if (g?.error || g?.success === !1)
    throw new Error(Et(g) || "Could not load lookups");
  return typeof r.parseResponsePayload == "function" && r.parseResponseActions.includes("lookups") ? await r.parseResponsePayload({ responseData: g, model: r, action: "lookups", ...e }) : g;
}, pc = {
  getList: Pr,
  getRecord: _t,
  deleteRecord: Or,
  saveRecord: Mr,
  getLookups: Na
}, ci = ({ pagination: e, apiRef: t, tTranslate: r = (n) => n }) => {
  const n = t.current.state.pagination.paginationModel.page, o = t.current.state.pagination.paginationModel.pageSize, s = t.current.state.rows.totalRowCount, i = Math.ceil(s / o), { t: p, i18n: f } = Ar(), g = { t: p, i18n: f }, [m, d] = I(n + 1), l = function(u) {
    let x = u.target?.value;
    x === "" ? d("") : (x = parseInt(x), x = isNaN(x) || x < 1 ? 1 : x, d(x));
  };
  he(() => {
    d(n + 1);
  }, [n, o]);
  const C = function() {
    let u = m === "" ? 1 : m;
    u = Math.max(u, 1), u = Math.min(u, i), t.current.setPage(u - 1), d(u), m === "" && d(1);
  }, c = (u) => {
    const x = u.which || u.keyCode, v = String.fromCharCode(x);
    /\d/.test(v) || u.preventDefault();
  };
  return /* @__PURE__ */ w(On, { children: [
    /* @__PURE__ */ a(Ye, { sx: { pl: 5 }, children: e && /* @__PURE__ */ w(ge, { children: [
      /* @__PURE__ */ w(Ft, { variant: "p", children: [
        r("Jump to page", g),
        ":"
      ] }),
      /* @__PURE__ */ a(
        Qt,
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
          onChange: l,
          onKeyPress: c,
          disabled: !s
        }
      ),
      /* @__PURE__ */ a(Se, { disabled: !s, size: "small", onClick: C, children: r("Go", g) })
    ] }) }),
    /* @__PURE__ */ a(Mn, {})
  ] });
}, di = /\${((\w+)\.)?(\w+)}/g, ui = function(e, t, { template: r = di, keepMissingTags: n = !1 } = {}) {
  return !e || !t ? e : e.replace(r, function(o, s, i, p) {
    const f = i ? t[i] || {} : t;
    return f[p] === void 0 ? n ? o : "" : f[p];
  });
}, Wt = {
  replaceTags: ui
};
function la({ variant: e = "h2", component: t = "h2", text: r = "", name: n = null, ...o }) {
  return /* @__PURE__ */ w(Oe, { variant: e, component: t, ...o, children: [
    r,
    n && ` ${n}`
  ] });
}
function pi(e = !1) {
  const t = s(), [r, n] = I(t);
  function o() {
    setTimeout(() => {
      n(s());
    }, 10);
  }
  he(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function s() {
    let i = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const p = !!i.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    i = i.toLowerCase();
    const f = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(i);
    let g = null;
    return window.innerWidth <= window.innerHeight ? g = "portrait" : g = "landscape", { mobile: p, tablet: f, portrait: g === "portrait", landscape: g === "landscape" };
  }
  return e ? r.mobile : r;
}
const fi = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, hi = {
  ...Ke.daDK,
  ...fi
}, mi = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, gi = {
  ...Ke.deDE,
  ...mi
}, bi = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, yi = {
  ...Ke.elGR,
  ...bi
}, Ci = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, xi = {
  ...Ke.esES,
  ...Ci
}, wi = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, vi = {
  ...Ke.frFR,
  ...wi
}, Di = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, Pi = {
  ...Ke.itIT,
  ...Di
}, Si = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Fi = {
  ...Ke.trTR,
  ...Si
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
}, Ei = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, Ai = {
  ...Ke.enUS,
  ...Ei
}, Ii = {
  en: Ai,
  "tr-TR": Fi,
  "es-ES": xi,
  "da-DK": hi,
  "de-DE": gi,
  "el-GR": yi,
  "fr-FR": vi,
  "pt-PT": Ti,
  "it-IT": Pi
};
re.extend(wo);
re.extend(vo);
const La = Zt(), $a = Zt(null), ca = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), fc = ({ children: e, apiEndpoints: t = {} }) => {
  const [r, n] = I("en"), [o, s] = I("MM/DD/YYYY hh:mm:ss A"), [i, p] = I(null), [f, g] = I(null), [m, d] = I(null), [l, C] = I(null), [c, u] = I(""), [x, v] = I(!1), { t: M, i18n: P } = Ar(), S = gt(), E = yr(t), $ = F((O, z) => {
    E.current[O] = z;
  }, []), q = F((O) => E.current[O || "default"] || "", []), ee = F((O, z) => `${E.current[z || "default"] || ""}${O}`, []), V = F((O = !0) => {
    v(O);
  }, []), G = F((O, z, ae) => {
    if (ae != null) {
      const Y = ae;
      let te = O ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return Y && (te = Y.split(" "), te[0] = te[0].toUpperCase(), O ? te = te[0] : z ? te = te[0].toUpperCase() : (te[1] += te[1].includes(":ss") ? "" : ":ss", te = te.join(" "))), te;
    }
    return O ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
  }, []), Z = F(({ value: O, useSystemFormat: z, showOnlyDate: ae = !1, state: Y, timeZone: te }) => {
    if (!O) return "-";
    const _e = G(z, ae, Y);
    return te ? re(O).tz(te).format(_e) : re(O).format(_e);
  }, [G]), R = F(() => {
    const O = r, z = Ii[O];
    function ae(Y) {
      return O === "pt-PT" || O === "ptPT" ? z.components.MuiDataGrid.defaultProps.localeText[Y] || Y : z[Y] || Y;
    }
    return { getLocalizedString: ae };
  }, [r]), ce = F((O) => {
    n(O);
  }, []), Q = F((O) => {
    p(O);
  }, []), de = F((O) => {
    d(O);
  }, []), we = F((O) => {
    C(O);
  }, []), U = F((O) => {
    u(O);
  }, []), pe = F((O) => {
    s(O);
  }, []), ye = F((O) => {
    g(O);
  }, []), B = X(() => ({
    locale: r,
    dateTime: o,
    pageTitle: i,
    modal: f,
    pageBackButton: m,
    userData: l,
    timeZone: c
  }), [r, o, i, f, m, l, c]), L = X(() => ({
    // State data
    stateData: B,
    // Loader management
    isLoading: x,
    showLoader: V,
    // Snackbar utilities
    showMessage: S?.showMessage || ca,
    showError: S?.showError || ca,
    // i18n utilities
    dayjs: re,
    t: M,
    i18n: P,
    // Date/time utilities
    systemDateTimeFormat: G,
    formatDate: Z,
    useLocalization: R,
    // API utilities
    getApiEndpoint: q,
    setApiEndpoint: $,
    buildUrl: ee,
    // App-level state setters with meaningful names
    setLocale: ce,
    setPageTitle: Q,
    setPageBackButton: de,
    setUserData: we,
    setTimeZone: U,
    setDateTimeFormat: pe,
    setModal: ye
  }), [
    B,
    x,
    V,
    M,
    P,
    S,
    q,
    $,
    G,
    Z,
    R,
    ce,
    Q,
    de,
    we,
    U,
    pe,
    ye,
    ee
  ]);
  return /* @__PURE__ */ a(La.Provider, { value: L, children: e });
}, hc = $a.Provider, Br = () => Tr($a), Ne = () => {
  const e = Tr(La);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Oi = () => {
  const [e, t] = I(), [r, n] = I(!1), { stateData: o, setModal: s } = Ne(), i = o.modal, p = 16 / 9;
  let f = (window.outerWidth - 10) / window.innerWidth * 100;
  const g = () => {
    let d = document.getElementById("tutorial-iframe");
    d ? (d = d.offsetWidth, d = d / window.innerWidth) : d = 0.9;
    const l = window.innerWidth * d * (1 / p), C = window.innerHeight - 180;
    t(Math.min(l, C));
  };
  he(() => {
    i?.status && (n(!0), g());
  }, [i, f]), he(() => (window.addEventListener("resize", g), () => {
    window.removeEventListener("resize", g);
  }), []);
  function m() {
    const d = document.getElementById("tutorial-iframe");
    d.src = i?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: i?.status && /* @__PURE__ */ w(Hn, { fullWidth: !0, maxWidth: "lg", open: i.status, onClose: () => {
    s({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(Yn, { className: "pt-2 pb-0", children: /* @__PURE__ */ w(be, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ w(be, { size: 11, children: [
        /* @__PURE__ */ w(Oe, { variant: "h7", component: "div", children: [
          " ",
          i?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Oe, { variant: "caption", component: "div", children: i?.data?.subTitle || /* @__PURE__ */ a(ge, { children: " " }) })
      ] }),
      /* @__PURE__ */ w(be, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(mo, { className: "cursor_pointer mt-2 mr-2", onClick: m }),
        /* @__PURE__ */ a(go, { className: "cursor_pointer mt-2", onClick: () => {
          s({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ w(Kn, { dividers: !0, children: [
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
function Mi({
  titleHeading: e,
  navigate: t,
  name: r = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: s = "",
  titleClass: i = "text-theme-blue text-max-width",
  showBreadcrumbs: p,
  breadcrumbs: f = [],
  enableBackButton: g = !1,
  breadcrumbColor: m,
  showHelpButton: d = !1
}) {
  const l = pi(!0), C = f.length - 1, c = p && f.length, u = () => {
    t(-1);
  };
  return he(() => {
    s && (document.title = s);
  }, [s]), /* @__PURE__ */ w(ge, { children: [
    /* @__PURE__ */ a(la, { className: "print-only", text: e }),
    c && /* @__PURE__ */ w(ge, { children: [
      /* @__PURE__ */ a(_n, { sx: { mb: 3 }, children: /* @__PURE__ */ w(Jn, { sx: { backgroundColor: m || "#fff" }, children: [
        /* @__PURE__ */ w(be, { container: !0, children: [
          /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(Zn, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${i} breadcrumbs-text-title text-max-width`, children: f.map((x, v) => v < C ? /* @__PURE__ */ a(Qn, { onClick: u, className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: x.text }, v) : /* @__PURE__ */ a(Oe, { className: `${i} breadcrumbs-text-title text-max-width`, variant: "inherit", children: x.text }, v)) }) }),
          (f.length > 1 || g) && /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(tt, { variant: "contained", onClick: u, children: "Back" }) }),
          d && /* @__PURE__ */ a(be, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(Yt, { color: "primary", title: "Help", size: "large", children: /* @__PURE__ */ a(ho, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Pe, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: l ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          la,
          {
            className: `${i} page-text-title`,
            variant: "p",
            text: e,
            name: r
          }
        ) }) }) }) }),
        !l && /* @__PURE__ */ w(ge, { children: [
          /* @__PURE__ */ w(Pe, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ w(Pe, { children: [
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
const za = Un()(Mi), He = {
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
}, Va = ({ userData: e = {}, model: t, userDefinedPermissions: r }) => {
  const { permissions: n = [] } = e;
  r = r || { add: !0, edit: !0, delete: !0 };
  const o = n.find((s) => s.Module === t.module);
  return o ? {
    canAdd: r.add && !!o[He.permissionsMapper.add],
    canEdit: r.edit && !!o[He.permissionsMapper.edit],
    canDelete: r.delete && !!o[[He.permissionsMapper.delete]]
  } : { canAdd: r.add, canEdit: r.edit, canDelete: r.delete };
};
re.extend(Sa);
const Bi = {
  date: Pa,
  datetime: vr,
  dateTimeLocal: vr
}, ki = "-10px", Ri = "-16px", Ni = (e) => {
  const { fixedFilterFormat: t } = He, { item: r, applyValue: n, convert: o } = e, { systemDateTimeFormat: s, stateData: i } = Ne(), p = e?.type || "date", f = t[p], g = (u) => {
    const x = re(u);
    return x.isValid() && x.year() > 1900;
  }, m = s(i.dateTime), d = (u) => {
    if (!(p !== "date" && p !== "datetime" && p !== "dateTimeLocal" || ((v) => typeof v != "string" ? !1 : !re(v, m, !0).isValid())(u))) {
      if (o) {
        u = re(u).utc(), n({ ...r, value: u });
        return;
      }
      if (!g(u)) {
        n({ ...r, value: null });
        return;
      }
      n({ ...r, value: u.format(f) });
    }
  }, l = (u) => {
    if (u && u === t.OverrideDateFormat) {
      const x = u.split("-");
      return x.length === 3 ? x[1] : null;
    }
  }, C = Bi[p], c = p === "dateTimeLocal" ? r?.value ? re(r?.value.$d) : null : r?.value ? re(r.value) : null;
  return /* @__PURE__ */ a(Fa, { dateAdapter: Ta, children: /* @__PURE__ */ a(
    C,
    {
      fullWidth: !0,
      format: m,
      value: c,
      onChange: d,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: ki,
            marginBottom: Ri
          }
        }
      },
      localeText: {
        fieldMonthPlaceholder: () => l(m) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, jt = (e) => ba().map((t) => ({
  ...t,
  InputComponent: t.InputComponent ? (r) => /* @__PURE__ */ a(Ni, { ...r, ...e }) : void 0
})), Li = {
  IsAnyOf: "isAnyOf"
}, $i = (e) => {
  const { column: t, item: r, applyValue: n, apiRef: o } = e, s = t?.dataRef?.current?.lookups;
  let i = t.customLookup || s[t.lookup] || [];
  typeof t.lookup == "string" && (i = i.map(({ label: d, value: l }) => ({
    label: d,
    value: l
  })));
  const p = ya(o, Bn), f = X(
    () => p.items?.filter((d) => d.field === t.field),
    [t.field, p.items]
  ), g = F(
    (d) => {
      let l = d.target.value;
      if (p.items.length >= 1) {
        l = l.length === 1 ? l[0] : l;
        for (const u of p.items)
          u.field === r.field && (u.operator === Li.IsAnyOf ? l = Array.isArray(l) ? l : [l] : l = l === 0 ? "0" : l);
      }
      if (l.length === 0 && f[0]) {
        o.current.deleteFilterItem(f[0]);
        return;
      }
      const C = l, c = f[0] ? f[0] : r;
      n({ ...c, value: C });
    },
    [o, t.applyZeroFilter, f, r, n]
  ), m = f[0]?.value ?? "";
  return /* @__PURE__ */ a(ht, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    xr,
    {
      label: t.field,
      variant: "standard",
      value: m,
      onChange: (d) => g(d),
      multiple: Array.isArray(m),
      MenuProps: {
        PaperProps: {
          style: {
            height: "fit-content",
            overflow: "hidden"
          }
        }
      },
      children: i?.map((d, l) => /* @__PURE__ */ a(Ve, { value: d.value, children: d.label }, l))
    }
  ) });
}, ze = {
  Edit: "Edit",
  Delete: "Delete"
}, Ae = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, zi = [
  { field: "prefName", type: "string", width: 300, headerName: "Preference Name", sortable: !1, filterable: !1 },
  { field: "prefDesc", type: "string", width: 300, headerName: "Preference Description", sortable: !1, filterable: !1 },
  { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: !1, filterable: !1 },
  { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Cr, { icon: /* @__PURE__ */ a(Tt, { title: ze.Edit, children: /* @__PURE__ */ a(va, {}) }), tabIndex: 1, "data-action": ze.Edit, label: "Edit", color: "primary" }, 1)] },
  { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Cr, { icon: /* @__PURE__ */ a(Tt, { title: ze.Delete, children: /* @__PURE__ */ a(wa, {}) }), tabIndex: 2, "data-action": ze.Delete, label: "Delete", color: "error" }, 2)] }
], Vi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, Gi = { pageSize: 50, page: 0 }, qi = [5, 10, 20, 50, 100], Wi = ({ gridRef: e, preferenceKey: t, onPreferenceChange: r, t: n, tOpts: o }) => {
  const { getApiEndpoint: s } = Ne(), i = s("GridPreferenceManager"), p = Ca(), f = gt(), [g, m] = I(Ae.NONE), [d, l] = I(null), [C, c] = I(!1), [u, x] = I({}), [v, M] = I(null), [P, S] = I(null), E = X(
    () => v == null ? [] : v.filter((B) => B.prefId !== 0),
    [v]
  ), $ = X(() => ue.object({
    prefName: ue.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: ue.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), q = (B) => l(B?.currentTarget), ee = () => l(null), V = () => {
    m(Ae.NONE), ee();
  }, G = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), S(null), r && r(null), ee());
  }, Z = F(async ({ applyDefault: B = !1 }) => {
    const L = await Ue({
      url: i,
      params: { action: "list", id: t },
      dataParser: Me.json
    });
    if (!L?.preferences) {
      f.showMessage(n("Failed to load preferences.", o)), r && r(null);
      return;
    }
    const O = L.preferences.filter((z) => z.prefName.trim() !== "");
    if (M(O), B) {
      const z = O.find((ae) => ae.isDefault);
      if (z)
        return { defaultPrefId: z.prefId, preferences: O };
      r && r(null);
    }
    return { preferences: O };
  }, [i, t, f, n, o, r]), R = F(async (B, L = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), B === 0) {
      G();
      return;
    }
    const O = L || v;
    if (!O) {
      f.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const z = O.find((Y) => Y.prefId === B);
    if (!z?.prefValue) {
      f.showMessage(n("Failed to load preference.", o));
      return;
    }
    let ae;
    try {
      ae = typeof z.prefValue == "string" ? JSON.parse(z.prefValue) : z.prefValue;
    } catch {
      f.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(ae), S(z.prefName), r && r(z.prefName), ee();
  }, [e, G, v, r, f, n, o]), ce = async (B) => {
    const L = B.prefName.trim(), O = L.toLocaleLowerCase();
    if (v.find((ae) => ae.prefName.toLocaleLowerCase() === O && ae.prefId !== B.prefId)) {
      c(!0);
      return;
    }
    const z = await Ue({
      url: i,
      params: {
        action: "save",
        id: t,
        prefId: B.prefId,
        prefName: L,
        prefDesc: B.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: B.isDefault
      },
      dataParser: Me.json
    });
    if (z === !0 || z?.success === !0) {
      f.showMessage(n(`Preference ${g === Ae.ADD ? "added" : "saved"} successfully.`, o)), V(), await Z({ applyDefault: !1 });
      return;
    }
    f.showMessage(n("Error saving preference: ", o) + (z?.message || n("Unknown error", o)));
  }, Q = async () => {
    const B = await Ue({
      url: i,
      params: {
        action: "delete",
        id: t,
        prefIdArray: u.prefId
      },
      dataParser: Me.json
    });
    if (B === !0 || B?.success === !0) {
      f.showMessage(n("Preference deleted successfully.", o)), await Z({ applyDefault: !1 }), x({});
      return;
    }
    f.showMessage(n("Error deleting preference: ", o) + (B?.message || n("Unknown error", o)));
  }, de = (B) => {
    const L = B.field === "editAction" ? ze.Edit : B.field === "deleteAction" ? ze.Delete : null;
    if (B.id === 0 && L) {
      f.showMessage(n(`Default preference cannot be ${L === ze.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    L === ze.Edit && (m(Ae.EDIT), U.setValues(B?.row)), L === ze.Delete && x({
      prefId: B.id,
      preferenceName: B.row.prefName
    });
  }, we = (B) => {
    m(B), ee(), B === Ae.ADD && U.resetForm();
  }, U = Ea({
    initialValues: Vi,
    validationSchema: $,
    onSubmit: ce,
    mode: "onBlur"
  });
  he(() => {
    if (!t) return;
    (async () => {
      const L = await Z({ applyDefault: !0 });
      L?.defaultPrefId && L?.preferences && await R(L.defaultPrefId, L.preferences);
    })();
  }, [t]);
  const pe = g === Ae.MANAGE, ye = g === Ae.ADD || g === Ae.EDIT;
  return /* @__PURE__ */ w(Pe, { children: [
    /* @__PURE__ */ w(
      tt,
      {
        id: "grid-preferences-btn",
        "aria-controls": d ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": d ? "true" : void 0,
        onClick: q,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(ia, {}),
        children: [
          n("Preferences", o),
          " ",
          P && `(${P})`
        ]
      }
    ),
    /* @__PURE__ */ w(
      Xn,
      {
        id: "grid-preference-menu",
        anchorEl: d,
        open: !!d,
        onClose: ee,
        component: eo,
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
          /* @__PURE__ */ w(Ve, { component: hr, dense: !0, onClick: () => we(Ae.ADD), children: [
            /* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(Dr, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ w(Ve, { component: hr, dense: !0, onClick: () => we(Ae.MANAGE), children: [
            /* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(ia, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ w(Ve, { component: hr, dense: !0, divider: v?.length > 0, onClick: () => R(0), children: [
            /* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(Eo, {}) }),
            n("Reset to Default", o)
          ] }),
          v?.length > 0 && v?.map((B) => {
            const { prefName: L, prefDesc: O, prefId: z } = B;
            return /* @__PURE__ */ a(
              Ve,
              {
                onClick: () => R(z),
                component: to,
                selected: P === L,
                title: n(O, o),
                dense: !0,
                children: /* @__PURE__ */ a(ro, { primary: L })
              },
              `pref-item-${z}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ w(
      qe,
      {
        open: g !== Ae.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ w(Oe, { variant: "h5", children: [
          g,
          " ",
          n(pe ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: pe ? "md" : "sm",
        fullWidth: !0,
        children: [
          ye && /* @__PURE__ */ w(
            be,
            {
              component: "form",
              onSubmit: U.handleSubmit,
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
                    value: U.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ w("span", { children: [
                      n("Preference Name", o),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: U.handleChange,
                    error: !!U.errors.prefName,
                    helperText: U.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
                  rt,
                  {
                    value: U.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: n("Preference Description", o),
                    name: "prefDesc",
                    onChange: U.handleChange,
                    error: !!U.errors.prefDesc,
                    helperText: U.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
                  at,
                  {
                    control: /* @__PURE__ */ a(
                      ao,
                      {
                        checked: U.values.isDefault,
                        name: "isDefault",
                        onChange: U.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ w(aa, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
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
                      startIcon: /* @__PURE__ */ a(wr, {}),
                      color: "error",
                      variant: "contained",
                      size: "small",
                      onClick: V,
                      disableElevation: !0,
                      children: n("Close", o)
                    }
                  )
                ] }) })
              ]
            }
          ),
          pe && /* @__PURE__ */ w(be, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(
              xa,
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
                columns: zi,
                pageSizeOptions: qi,
                pagination: !0,
                rowCount: E.length,
                rows: E,
                getRowId: (B) => B.GridPreferenceId,
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
                    paginationModel: Gi
                  }
                }
              }
            ) }),
            /* @__PURE__ */ a(be, { size: 12, children: /* @__PURE__ */ a(aa, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
              tt,
              {
                type: "button",
                startIcon: /* @__PURE__ */ a(wr, {}),
                color: "error",
                variant: "contained",
                size: "small",
                onClick: V,
                disableElevation: !0,
                children: n("Close", o)
              }
            ) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w(
      qe,
      {
        open: C,
        onConfirm: () => c(!1),
        title: "",
        okText: n("Ok", o),
        cancelText: "",
        children: [
          '"',
          U.values.prefName.trim(),
          '": ',
          n("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ w(
      qe,
      {
        open: !!u.preferenceName,
        onConfirm: Q,
        onCancel: () => x({}),
        title: n("Confirm delete", o),
        yesNo: !0,
        children: [
          n("Are you sure you wish to delete", o),
          ' "',
          u.preferenceName,
          '"?'
        ]
      }
    )
  ] });
}, ji = (e, t, r) => typeof e !== t.string ? [] : e.split(",").map((n) => {
  r.lastIndex = 0;
  const o = r.exec(n);
  if (!o) return null;
  const [, s, i = "ASC"] = o;
  return {
    field: s.trim(),
    sort: i.trim().toLowerCase()
  };
}).filter(Boolean), ut = ({ tTranslate: e, tOpts: t, handleExport: r, contentType: n, type: o, isPivotExport: s = !1, icon: i }) => /* @__PURE__ */ w(
  Aa,
  {
    onClick: r,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": s,
    children: [
      /* @__PURE__ */ a(Ye, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: i }),
      e(o, t)
    ]
  }
), Ui = ({ exportFormats: e, ...t }) => /* @__PURE__ */ w(kn, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ a(ut, { ...t, icon: /* @__PURE__ */ a(bo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ a(ut, { ...t, icon: /* @__PURE__ */ a(oa, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ a(ut, { ...t, icon: /* @__PURE__ */ a(oa, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ a(ut, { ...t, icon: /* @__PURE__ */ a(yo, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ a(ut, { ...t, icon: /* @__PURE__ */ a(Co, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ a(ut, { ...t, icon: /* @__PURE__ */ a(xo, { fontSize: "small" }), type: "JSON", contentType: "application/json" })
] }), Sr = (e, t) => {
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
}, Hi = (e = {}, t = {}) => {
  let r = !0;
  for (const n in e)
    e[n] !== t[n] && (r = !1);
  for (const n in t)
    n in e || (r = !1);
  return r;
};
re.extend(Sa);
const Yi = ({
  column: e,
  filterModel: t,
  setFilterModel: r,
  lookupData: n,
  tTranslate: o,
  tOpts: s
}) => {
  const { systemDateTimeFormat: i, stateData: p } = Ne(), { fixedFilterFormat: f } = He, g = X(() => t?.items?.find((c) => c.field === e.field), [t, e.field]), m = X(() => g ? g.value : e.toolbarFilter?.defaultOperator === "isAnyOf" ? [] : "", [g, e.toolbarFilter?.defaultOperator]), d = F((c) => {
    const u = e.toolbarFilter?.defaultOperator || Sr(e.type);
    r((x) => {
      const v = x?.items || [];
      if (c === "" || c === null || Array.isArray(c) && c.length === 0) {
        const S = v.filter((E) => E.field !== e.field);
        return {
          ...x,
          items: S
        };
      }
      const M = {
        field: e.field,
        operator: u,
        value: c,
        type: e.type
      }, P = v.filter((S) => S.field !== e.field);
      return {
        ...x,
        items: [...P, M]
      };
    });
  }, [e, r]), l = F((c, u) => u === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[c] || c : u === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[c] || c : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[c] || c, []);
  return (() => {
    const c = e.toolbarFilter?.label || e.headerName || e.label || e.field, u = e.toolbarFilter?.defaultOperator || Sr(e.type), x = l(u, e.type), M = e.type === "number" || e.type === "string" && u !== "startsWith" ? e.type === "number" ? `${x} ${c}` : `${c} (${x})` : c;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          rt,
          {
            variant: "standard",
            label: o(M, s),
            value: m,
            onChange: (R) => d(R.target.value),
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
            label: o(M, s),
            value: m,
            onChange: (R) => d(R.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const R = m === "" || m === void 0 || m === null ? "" : m === !0 || m === "true" ? "true" : m === !1 || m === "false" ? "false" : "";
        return /* @__PURE__ */ w(ht, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(na, { children: o(M, s) }),
          /* @__PURE__ */ w(
            xr,
            {
              value: R,
              onChange: (ce) => {
                const Q = ce.target.value;
                let de;
                Q === "" ? de = "" : Q === "true" ? de = !0 : Q === "false" ? de = !1 : de = Q, d(de);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(Ve, { value: "", children: o("All", s) }),
                /* @__PURE__ */ a(Ve, { value: "true", children: o("True", s) }),
                /* @__PURE__ */ a(Ve, { value: "false", children: o("False", s) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const P = e.customLookup || n?.[e.lookup] || [], S = typeof e.lookup == "string" ? P.map((R) => ({
          label: R?.label || "",
          value: R?.value ?? ""
        })) : P, E = g?.operator === "isAnyOf" || e.toolbarFilter?.defaultOperator === "isAnyOf";
        return /* @__PURE__ */ w(ht, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(na, { children: o(M, s) }),
          /* @__PURE__ */ a(
            xr,
            {
              value: m,
              onChange: (R) => d(R.target.value),
              multiple: E,
              size: "small",
              children: S.map((R) => /* @__PURE__ */ a(Ve, { value: R.value, children: R.label }, R.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const $ = e.type, ee = f[$ === "dateTime" ? "datetime" : $], V = i($ !== "dateTime", !1, p.dateTime), G = $ === "dateTime" ? Ao : Io;
        let Z = null;
        if (m) {
          const R = re(m);
          Z = R.isValid() ? R : null;
        }
        return /* @__PURE__ */ a(Fa, { dateAdapter: Ta, children: /* @__PURE__ */ a(
          G,
          {
            label: o(M, s),
            format: V,
            value: Z,
            onChange: (R) => {
              !R || !R.isValid() ? d(null) : d(R.format(ee));
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
            label: o(M, s),
            value: m,
            onChange: (R) => d(R.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, Ut = Xt(Se)({
  margin: "6px"
}), Ki = Xt(Rn)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), _i = function(e) {
  const {
    model: t,
    data: r,
    currentPreference: n,
    isReadOnly: o,
    canAdd: s,
    forAssignment: i,
    showAddIcon: p,
    onAdd: f,
    selectionApi: g,
    rowSelectionModel: m,
    selectAll: d,
    available: l,
    onAssign: C,
    assigned: c,
    onUnassign: u,
    effectivePermissions: x,
    clearFilters: v,
    handleExport: M,
    preferenceKey: P,
    apiRef: S,
    tTranslate: E,
    tOpts: $,
    filterModel: q,
    setFilterModel: ee,
    onPreferenceChange: V,
    toolbarItems: G,
    gridColumns: Z
  } = e, R = t.customAddText || (t.title ? `Add ${t.title}` : "Add"), ce = q?.items?.length || 0, Q = Z?.filter((U) => U.toolbarFilter) || [], de = r?.lookups || {}, we = r?.records || [];
  return /* @__PURE__ */ w(ge, { children: [
    /* @__PURE__ */ w(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "10px"
        },
        children: [
          /* @__PURE__ */ w("div", { children: [
            t.gridSubTitle && /* @__PURE__ */ w(Ft, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              E(t.gridSubTitle, $)
            ] }),
            n && t.showPreferenceInHeader && /* @__PURE__ */ w(Ft, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              E("Applied Preference", $),
              ": ",
              n
            ] }),
            (o || !s && !i) && /* @__PURE__ */ w(Ft, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !s || o ? "" : t.title
            ] }),
            !i && s && !o && /* @__PURE__ */ a(Ut, { startIcon: p ? /* @__PURE__ */ a(Dr, {}) : null, onClick: f, size: "medium", variant: "contained", children: E(R, $) }),
            g.length && we.length ? /* @__PURE__ */ a(
              Ut,
              {
                onClick: d,
                size: "medium",
                variant: "contained",
                children: m.ids.size === we.length ? E("Deselect All", $) : E("Select All", $)
              }
            ) : /* @__PURE__ */ a(ge, {}),
            l && /* @__PURE__ */ a(Ut, { startIcon: p ? /* @__PURE__ */ a(Dr, {}) : null, onClick: C, size: "medium", variant: "contained", children: E("Assign", $) }),
            c && /* @__PURE__ */ a(Ut, { startIcon: p ? /* @__PURE__ */ a(Do, {}) : null, onClick: u, size: "medium", variant: "contained", children: E("Remove", $) })
          ] }),
          /* @__PURE__ */ w(Ki, { ...e, children: [
            x.showColumnsOrder && /* @__PURE__ */ a(
              Nn,
              {
                render: (U) => /* @__PURE__ */ a(
                  Se,
                  {
                    ...U,
                    startIcon: /* @__PURE__ */ a(So, {}),
                    size: "small",
                    variant: "text",
                    children: E("COLUMNS", $)
                  }
                )
              }
            ),
            x.filter && /* @__PURE__ */ w(ge, { children: [
              /* @__PURE__ */ a(
                Ln,
                {
                  render: (U) => /* @__PURE__ */ a(
                    Se,
                    {
                      ...U,
                      startIcon: /* @__PURE__ */ a(no, { badgeContent: ce, color: "primary", children: /* @__PURE__ */ a(Fo, {}) }),
                      size: "small",
                      variant: "text",
                      children: E("FILTERS", $)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Se, { startIcon: /* @__PURE__ */ a(Po, {}), onClick: v, size: "small", children: E("CLEAR FILTER", $) })
            ] }),
            x.export && /* @__PURE__ */ a(Ui, { handleExport: M, showPivotExportBtn: t.pivotApi, exportFormats: t.exportFormats || {}, tTranslate: E, tOpts: $ }),
            G,
            P && /* @__PURE__ */ a(
              Wi,
              {
                gridRef: S,
                preferenceKey: P,
                onPreferenceChange: V,
                t: E,
                tOpts: $
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Pe, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: Q.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: Q.map((U) => /* @__PURE__ */ a(
      Yi,
      {
        column: U,
        filterModel: q,
        setFilterModel: ee,
        lookupData: de,
        tTranslate: E,
        tOpts: $
      },
      U.field
    )) }) })
  ] });
}, Ji = 50, Zi = /(\w+)( ASC| DESC)?/i, Qi = 6e4, Xi = 0, es = 1e6, Ie = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, ts = {
  article: /* @__PURE__ */ a(jn, {}),
  edit: /* @__PURE__ */ a(va, {}),
  copy: /* @__PURE__ */ a(Wn, {}),
  delete: /* @__PURE__ */ a(wa, {}),
  history: /* @__PURE__ */ a(Oo, {}),
  download: /* @__PURE__ */ a(Mo, {})
}, H = {
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
}, rs = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], as = (e) => e.value ? /* @__PURE__ */ a(fo, { style: { color: "green" } }) : /* @__PURE__ */ a(wr, { style: { color: "gray" } }), da = Xt("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), ns = ({ params: e, handleSelectRow: t, idProperty: r }) => {
  const n = Gn(), o = e.row[r], i = ya(n, qn)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    Ia,
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
}, ua = ga(({
  model: e,
  columns: t,
  api: r,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: s,
  parent: i,
  where: p,
  title: f,
  showPageTitle: g,
  permissions: m,
  selected: d,
  assigned: l,
  available: C,
  disableCellRedirect: c = !1,
  onAssignChange: u,
  customStyle: x,
  onCellClick: v,
  showRowsSelected: M,
  showFullScreenLoader: P,
  customFilters: S,
  onRowDoubleClick: E,
  onRowClick: $ = () => {
  },
  gridStyle: q,
  reRenderKey: ee,
  additionalFilters: V,
  onCellDoubleClickOverride: G,
  onAddOverride: Z,
  dynamicColumns: R,
  toolbarItems: ce,
  readOnly: Q = !1,
  onListParamsChange: de,
  apiRef: we,
  baseFilters: U,
  ...pe
}) => {
  const [ye, B] = I({ pageSize: Ji, page: 0 }), [L, O] = I({ recordCount: 0, records: null, lookups: {} }), z = !!u, ae = M, [Y, te] = I({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [_e, ot] = I(!1), [Fe, At] = I(null), It = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [bt, yt] = I(!1), fe = gt(), Ct = e.paginationMode === H.client ? H.client : H.server, { t: xt, i18n: Ot } = Ar(), h = X(() => ({ t: xt, i18n: Ot }), [xt, Ot]), [Le, Te] = I(""), [wt, Mt] = I(ji(n || e.defaultSort, H, Zi)), Je = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Je.items = [], e.defaultFilters.forEach((y) => {
    Je.items.push(y);
  }));
  const [ve, Ee] = I({ ...Je }), { navigate: ie, getParams: tr, useParams: rr, pathname: Bt } = Br(), { id: ar } = rr() || tr, vt = ar?.split("-")[0], Ce = we || Ca(), { idProperty: se = "id", showHeaderFilters: Dt = !0, disableRowSelectionOnClick: nr = !0, hideTopFilters: kt = !0, updatePageTitle: Rt = !0, isElasticScreen: it = !1, navigateBack: or = !1, selectionApi: N = {}, debounceTimeOut: De = 300 } = e, _ = e.readOnly === !0 || Q, $e = e.allowDoubleClick === !1, Be = yr(L), Ze = e.showAddIcon === !0, Nt = e.columns.filter(({ link: y }) => !!y).map((y) => y.link), { stateData: We, formatDate: st, getApiEndpoint: lt, buildUrl: ct, setPageTitle: ir } = Ne(), [Ua, Lt] = I(!1), { timeZone: sr } = We, Qe = X(() => ({ ...H.permissions, ...e.permissions, ...m }), [e.permissions, m]), kr = ["isEmpty", "isNotEmpty", "isAnyOf"], Ha = We.userData || {}, $t = e.columns.find((y) => y.type === "fileUpload")?.field || "", Ya = { add: Qe.add, edit: Qe.edit, delete: Qe.delete }, { canAdd: Rr, canEdit: Nr, canDelete: Lr } = Va({ userData: Ha, model: e, userDefinedPermissions: Ya }), b = e.tTranslate ?? ((y) => y), { addUrlParamKey: zt, searchParamKey: Pt, hideBreadcrumb: Ka = !1, tableName: $r, showHistory: zr = !0, hideBreadcrumbInGrid: _a = !1, breadcrumbColor: Ja, disablePivoting: Za = !1, columnHeaderHeight: Qa = 70 } = e, Vr = e.gridTitle || e.title, St = lt("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, je = new URLSearchParams(window.location.search), [Gr, Xa] = I(null), [qr, en] = I(!St), ke = r || e.api, [lr, cr] = I(null), tn = X(() => new Set(lr ? [lr] : []), [lr]), rn = typeof e.getDetailPanelContent == "function";
  he(() => {
    Ce.current && (Ce.current.prefKey = St);
  }, [Ce, St]);
  const Wr = F((y) => {
    Xa(y), en(!0);
  }, []), dr = je.has("baseData") && je.get("baseData"), jr = X(() => {
    if (dr)
      try {
        const y = JSON.parse(dr);
        if (typeof y === H.object && y !== null)
          return y;
      } catch (y) {
        console.error("Failed to parse baseData from URL:", y);
      }
    return {};
  }, [dr]), an = F(({ row: y }) => {
    const T = y[se];
    te((A) => {
      const D = new Set(A?.ids || []);
      return D.has(T) ? D.delete(T) : D.add(T), { type: "include", ids: D };
    });
  }, [se]), Ur = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (y) => st({ value: y, useSystemFormat: !0, showOnlyDate: !1, state: We.dateTime, timeZone: sr }),
      filterOperators: jt({ columnType: "date", label: b("Value", h) })
    },
    dateTime: {
      valueFormatter: (y) => st({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: We.dateTime, timeZone: sr }),
      filterOperators: jt({ columnType: "datetime", label: b("Value", h) })
    },
    dateTimeLocal: {
      valueFormatter: (y) => st({ value: y, useSystemFormat: !1, showOnlyDate: !1, state: We.dateTime, timeZone: sr }),
      filterOperators: jt({ type: "dateTimeLocal", convert: !0 })
    },
    boolean: {
      renderCell: as
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (y) => /* @__PURE__ */ a(ns, { params: y, handleSelectRow: an, idProperty: se })
    }
  };
  he(() => {
    Be.current = L;
  }, [L]), he(() => {
    if (!S || !Object.keys(S).length) return;
    if (S.clear) {
      Ee({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const y = Object.entries(S).reduce((T, [A, D]) => (A === H.startDate || A === H.endDate ? T.push(D) : A in S && T.push({ field: A, value: D, operator: "equals", type: "string" }), T), []);
    Ee({ items: y, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [S]);
  const nn = F(({ field: y, lookupMap: T }) => (Be.current.lookups || {})[(T || {})[y]?.lookup] || [], []);
  he(() => {
    pe.isChildGrid;
  }, [pe.isChildGrid, kt]);
  const Hr = F(
    ({ key: y, title: T, icon: A, color: D = "primary", disabled: k, otherProps: K }) => /* @__PURE__ */ a(
      Cr,
      {
        icon: /* @__PURE__ */ a(Tt, { title: T, children: ts[A] || A }),
        "data-action": y,
        label: T,
        color: D,
        disabled: k,
        ...K
      },
      y
    ),
    []
  ), { customActions: Vt = [] } = e, Gt = X(() => {
    const y = [];
    return !z && !_ && y.push(
      {
        key: Ie.Edit,
        title: "Edit",
        icon: "edit",
        show: !!Nr,
        disabled: (T) => T.canEdit === !1
      },
      {
        key: Ie.Copy,
        title: "Copy",
        icon: "copy",
        show: !!Qe.copy
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
        show: !!zr
      },
      ...Vt
    ), y.push({
      key: Ie.Download,
      title: "Download document",
      icon: "download",
      show: $t.length > 0
    }), y.filter(({ show: T }) => T !== !1);
  }, [
    z,
    _,
    Nr,
    Lr,
    zr,
    Qe.copy,
    $t.length,
    Vt
  ]), on = F(
    ({ row: y }) => Gt.map(
      ({ key: T, title: A, icon: D, color: k, disabled: K, show: W, action: J, ...le }) => Hr({
        key: T,
        title: A || J,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: D,
        color: k,
        disabled: K?.(y),
        otherProps: le
      })
    ),
    [Gt, Hr]
  ), { gridColumns: xe, pinnedColumns: Yr, lookupMap: ur } = X(() => {
    let y = t || e.gridColumns || e.columns;
    R && (y = [...R, ...y]);
    const T = { left: [$n.field], right: [] }, A = [], D = {}, k = { ...Ur, ...e.gridColumnTypes };
    for (const W of y) {
      if (W.gridLabel === null || i && W.lookup === i || W.type === H.oneToMany && W.countInList === !1) continue;
      const J = {};
      if (W.type === H.oneToMany && (J.type = "number", J.field = W.field.replace(/s$/, "Count")), k[W.type] && Object.assign(J, k[W.type]), J.valueOptions === H.lookup || W.type === H.boolean) {
        let ne = [];
        J.valueOptions === H.lookup && (J.valueOptions = (oe) => nn({ ...oe, lookupMap: D }), ne = [...ba(), ...zn()].filter((oe) => ["is", "not", "isAnyOf"].includes(oe.value))), W.type === H.boolean && (ne = Vn()), J.filterOperators = ne.map((j) => ({
          ...j,
          InputComponent: j.InputComponent ? (oe) => /* @__PURE__ */ a(
            $i,
            {
              column: {
                ...W,
                ...W.type === H.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Be
              },
              ...oe,
              autoHighlight: !0
            }
          ) : void 0
        }));
      }
      (W.linkTo || W.link) && (J.cellClassName = "mui-grid-linkColumn");
      const le = b(W.gridLabel || W.label, h);
      A.push({ ...W, ...J, headerName: le, description: le }), W.pinned && T[W.pinned === H.right ? H.right : H.left].push(W.field), D[W.field] = W;
    }
    let K = e.standard;
    return K === !0 && (K = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), K && typeof K === H.object && rs.forEach(({ key: W, field: J, type: le, header: ne }) => {
      if (K[W] === !0) {
        const j = { field: J, type: le, headerName: b(ne, h), width: 200 };
        le === H.dateTime && (j.filterOperators = jt({ columnType: "date" }), j.valueFormatter = Ur.dateTime.valueFormatter, j.keepLocal = !0), A.push(j);
      }
    }), Gt.length && (A.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? H.defaultActionWidth) * Gt.length,
      hidable: !1,
      getActions: on,
      headerName: b("Actions", h)
    }), T.right.push("actions")), { gridColumns: A, pinnedColumns: T, lookupMap: D };
  }, [t, e, i, m, z, R, xt]), pr = yr(!1);
  he(() => {
    if (pr.current) return;
    const y = xe?.filter((D) => D.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (y.length === 0) return;
    if (ve.items.some(
      (D) => y.some((k) => k.field === D.field)
    )) {
      pr.current = !0;
      return;
    }
    const A = y.map((D) => ({
      field: D.field,
      operator: Sr(D.type, D.toolbarFilter?.defaultOperator),
      value: D.toolbarFilter.defaultFilterValue,
      type: D.type
    }));
    Ee((D) => ({
      ...D,
      items: [...D.items, ...A]
    })), pr.current = !0;
  }, [xe]);
  const Re = F(async ({ action: y = "list", extraParams: T = {}, isPivotExport: A = !1, contentType: D, columns: k } = {}) => {
    const { pageSize: K, page: W } = ye, J = !!D, le = ct(A ? e.pivotApi : ke), ne = { ...ve }, j = Array.isArray(U) ? [...U] : [];
    e.joinColumn && vt && j.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(vt) }), V && (ne.items = [...ne.items || [], ...V]);
    const oe = [];
    Array.isArray(j) && oe.push(...j), Array.isArray(s) && oe.push(...s);
    const dt = {
      ...T,
      ...pe.extraParams
      // Merge any custom params passed via component props
    };
    if ((l || C) && (dt[l ? "include" : "exclude"] = Array.isArray(d) ? d.join(",") : d), A && (e.exportTemplate && (dt.template = e.exportTemplate), e.configFileName && (dt.configFileName = e.configFileName)), !(!ne.items.length || ne.items.every((et) => "value" in et && et.value !== void 0))) return;
    const fr = {
      action: y,
      page: J ? Xi : W,
      pageSize: J ? es : K,
      sortModel: wt,
      filterModel: ne,
      gridColumns: xe,
      model: e,
      baseFilters: oe,
      api: le,
      extraParams: dt
    };
    typeof de == "function" && de(fr), Ce.current.listParams = fr, Lt(!0);
    try {
      const et = await Pr({ ...fr, contentType: D, columns: k });
      !J && et !== void 0 && O(et);
    } catch (et) {
      fe.showError("An error occurred while fetching data", et.message), J || O((vn) => ({ ...vn, records: [], recordCount: 0 }));
    } finally {
      Lt(!1);
    }
  }, [ye, ct, e, ke, ve, U, vt, l, C, d, pe.extraParams, wt, xe, s, de, Ce, Pr, fe]), Xe = F(async ({ id: y, record: T = {}, mode: A }) => {
    if (o) {
      try {
        const k = ct(ke), K = await _t({ id: y, api: k, model: e, parentFilters: s, where: p });
        o(K);
      } catch (k) {
        fe.showError("Could not load record", k.message);
      }
      return;
    }
    let D = Bt;
    D.endsWith("/") || (D += "/"), A === "copy" ? D += "0-" + y : D += y, zt && (je.set(zt, T[zt]), D += `?${je.toString()}`), ie(D);
  }, [o, ke, e, s, p, Bt, zt, je, ie, _t, ct, fe]), Kr = F(({ documentLink: y }) => {
    y && window.open(y, "_blank");
  }, []), sn = F(async (y, T, A) => {
    let D = y.field === e.linkColumn ? Ie.Edit : null;
    if (!D && y.field === H.actions && (D = A?.action, !D)) {
      const le = T.target.closest("button");
      le && (D = le.dataset.action);
    }
    const { row: k } = y;
    if (!_) {
      if (v && typeof await v({ cellParams: y, event: T, details: A }) !== H.boolean)
        return;
      const le = ur[y.field] || {};
      if (le.linkTo) {
        ie({
          pathname: Wt.replaceTags(le.linkTo, k)
        });
        return;
      }
      switch (D) {
        case Ie.Edit:
          if (e.getDetailPanelContent) {
            const j = k[se];
            cr((oe) => oe === j ? null : j);
            return;
          } else
            return Xe({ id: k[se], record: k });
        case Ie.Copy:
          return Xe({ id: k[se], mode: "copy" });
        case Ie.Delete:
          ot(!0), At({ name: k[e.linkColumn], id: k[se] });
          break;
        case Ie.History:
          return ie(`${lt("history")}?tableName=${$r}&id=${k[se]}&breadCrumb=${Pt ? je.get(Pt) : Vr}`);
        default:
          const ne = Vt.find((j) => j.action === D && typeof j.onClick === H.function);
          if (ne) {
            ne.onClick({ row: k, navigate: ie });
            return;
          }
          break;
      }
    }
    if (D === Ie.Download && Kr({ documentLink: k[$t] }), !Nt.length)
      return;
    const { row: K } = y, W = ur[y.field] || {}, J = {
      pathname: Wt.replaceTags(W.linkTo, K)
    };
    e.addRecordToState && (J.state = K), ie(J);
  }, [_, v, ur, e, se, $t, ie, Nt, Vt, $r, Pt, je, Vr, lt, Kr, Xe]), ln = F(async () => {
    const y = ct(ke);
    try {
      await Or({ id: Fe.id, api: y, model: e }), fe.showMessage("Record Deleted Successfully."), Re();
    } catch (T) {
      fe.showError("Delete failed", T.message);
    } finally {
      ot(!1);
    }
  }, [ke, Fe?.id, fe, e, Re]), _r = F(() => {
    Te(null), ot(!1);
  }, []), cn = F((y) => (typeof pe.processRowUpdate == "function" && pe.processRowUpdate(y, L), y), [pe.processRowUpdate, L]), dn = F((y) => {
    if (y.row.canEdit === !1)
      return;
    const { row: T } = y;
    if (typeof G === H.function) {
      G(y);
      return;
    }
    if (!_ && !$e && !c && Xe({ id: T[se], record: T }), _ && e.rowRedirectLink) {
      const A = {
        pathname: Wt.replaceTags(e.rowRedirectLink, T)
      };
      e.addRecordToState && (A.state = T), ie(A);
    }
    typeof E === H.function && E(y);
  }, [G, _, $e, c, Xe, se, e.rowRedirectLink, e.addRecordToState, ie, E, Wt]), un = F(async () => {
    if (Y.ids.size < 1) {
      fe.showError("Please select at least one record to proceed");
      return;
    }
    const y = Array.from(Y.ids), T = new Map((L.records || []).map((k) => [k[se], k]));
    let A = y.map((k) => ({ ...jr, ...T.get(k) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (A = A.map(
      (k) => Object.fromEntries(e.selectionUpdateKeys.map((K) => [K, k[K]]))
    ));
    const D = ct(N || ke);
    Lt(!0);
    try {
      const k = await Mr({
        id: 0,
        api: `${D}/updateMany`,
        values: { items: A },
        model: e
      });
      if (k) {
        Re();
        const K = k.info ? k.info : "Record Added Successfully.";
        fe.showMessage(K);
      }
    } catch (k) {
      fe.showError(k.message || "An error occurred, please try again later.");
    } finally {
      Lt(!1), te({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), yt(!1);
    }
  }, [Y.ids, fe, L.records, se, jr, e.selectionUpdateKeys, N, ke, e, Re]), Jr = F(() => {
    if (N.length > 0) {
      if (Y.ids.size > 0) {
        yt(!0);
        return;
      }
      fe.showError(
        "Please select at least one record to proceed"
      );
      return;
    }
    typeof Z === H.function ? Z() : Xe({ id: 0 });
  }, [N, fe, Z, Xe, Y.ids.size]), Zr = F(() => {
    ve?.items?.length && Ee({ ...H.gridFilterModel });
  }, [ve]), qt = F(({ unassign: y, assign: T }) => {
    const A = Array.isArray(d) ? d : d.length ? d.split(",") : [], D = y ? A.filter((k) => !y.includes(parseInt(k))) : [...A, ...T];
    u(typeof d === H.string ? D.join(",") : D);
  }, [d, u]), Qr = F(() => {
    qt({ assign: Array.from(Y.ids) });
  }, [qt, Y.ids]), Xr = F(() => {
    qt({ unassign: Array.from(Y.ids) });
  }, [qt, Y.ids]), ea = F(() => {
    const y = L.records || [];
    if (Y.ids.size === y.length)
      te({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const A = y.map((D) => D[se]);
      te({
        type: "include",
        ids: new Set(A)
      });
    }
  }, [Y, L.records, se]), pn = F((y) => y[se], [se]), ta = F((y) => {
    if (L?.recordCount > Qi) {
      fe.showMessage("Cannot export more than 60k records, please apply filters or reduce your results using filters");
      return;
    }
    const { orderedFields: T, columnVisibilityModel: A, lookup: D } = Ce.current.state.columns, k = y.target.dataset.isPivotExport === "true", K = Object.keys(A).filter((j) => A[j] === !1), W = new Set(xe.filter((j) => j.exportable === !1).map((j) => j.field)), J = T.filter(
      (j) => !W.has(j) && !K.includes(j) && j !== "__check__" && j !== "actions"
    );
    if (J.length === 0) {
      fe.showMessage("You cannot export while all columns are hidden... please show at least 1 column before exporting");
      return;
    }
    const le = {};
    J.forEach((j) => {
      const oe = D[j];
      le[j] = { field: j, width: oe.width, headerName: oe.headerName || oe.field, type: oe.type, keepLocal: oe.keepLocal === !0, isParsable: oe.isParsable, lookup: oe.lookup };
    });
    const ne = e?.formActions?.export || k ? e?.formActions?.export || "export" : void 0;
    Re({
      action: ne,
      isPivotExport: k,
      contentType: y.target.dataset.contentType,
      columns: le
    });
  }, [L?.recordCount, Ce, xe, fe, e, Re]);
  he(() => {
    !ke || !qr || Re();
  }, [ke, qr, Re]), he(() => {
    if (!(pe.isChildGrid || z || !Rt))
      return ir({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        ir(null);
      };
  }, [ir, e.pageTitle, e.title, pe.isChildGrid, z, Rt]);
  const fn = F((y) => {
    const { items: T } = y, A = T.map((D) => {
      const { field: k, operator: K, type: W, value: J } = D, le = xe.find((oe) => oe.field === k) || {}, ne = le.type === H.Number;
      return ne && J < 0 ? { ...D, value: null } : kr.includes(K) || ne && !isNaN(J) || !ne ? (it && xe.filter((dt) => dt.field === k)[0]?.isKeywordField && (D.filterField = `${D.field}.keyword`), D.value = ["isEmpty", "isNotEmpty"].includes(K) ? null : J, { ...D, type: le.type }) : { field: k, operator: K, type: W, value: ne ? null : J };
    });
    y.items = A, Ee(y);
  }, [xe, H.Number, kr, it, Ee]), hn = F((y) => {
    const T = y.map((A) => {
      const D = xe.filter((W) => W.field === A.field)[0] || {}, k = it && D.isKeywordField, K = { ...A, filterField: k ? `${A.field}.keyword` : A.field };
      return D.dataIndex && (K.filterField = D.dataIndex), K;
    });
    Mt(T);
  }, [xe, it, Mt]), ra = f || e.gridTitle || e.title, mn = Pt ? [{ text: je.get(Pt) || ra }] : [{ text: ra }], gn = F((y) => {
    cr(y.size > 0 ? [...y].pop() : null);
  }, []), bn = F((y) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...y,
    onRefresh: () => {
      cr(null), Re();
    }
  }) : null, [e.getDetailPanelContent, Re]), yn = X(() => ({
    filterValueTrue: b("Yes", h),
    filterValueFalse: b("No", h),
    noRowsLabel: b("No data", h),
    footerTotalRows: `${b("Total rows", h)}:`,
    MuiTablePagination: {
      labelRowsPerPage: b("Rows per page", h),
      labelDisplayedRows: ({ from: y, to: T, count: A }) => `${y}–${T} ${b("of", h)} ${A}`
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
    paginationDisplayedRows: ({ from: y, to: T, count: A }) => `${y}–${T} ${b("of", h)} ${A}`,
    toolbarQuickFilterLabel: b("Search", h),
    toolbarFiltersTooltipActive: (y) => `${y} ${b(y === 1 ? "active filter" : "active filters", h)}`,
    columnHeaderSortIconLabel: b("Sort", h),
    filterPanelOperatorAnd: b("And", h),
    filterPanelOperatorOr: b("Or", h),
    noResultsOverlayLabel: b("No results found", h),
    columnHeaderFiltersTooltipActive: (y) => `${y} ${b(y === 1 ? "active filter" : "active filters", h)}`,
    detailPanelToggle: b("Detail panel toggle", h),
    checkboxSelectionHeaderName: b("Checkbox selection", h),
    columnsManagementShowHideAllText: b("Show/Hide all", h),
    noColumnsOverlayLabel: b("No columns", h),
    noColumnsOverlayManageColumns: b("Manage columns", h),
    columnsManagementReset: b("Reset", h),
    groupColumn: (y) => `${b("Group by", h)} ${y}`,
    unGroupColumn: (y) => `${b("Ungroup", h)} ${y}`,
    footerRowSelected: (y) => {
      const T = y === 1 ? "item selected" : "items selected";
      return `${y.toLocaleString()} ${b(T, h)}`;
    }
  }), [b, h, e?.searchPlaceholder]), Cn = X(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: L,
      currentPreference: Gr,
      isReadOnly: _,
      canAdd: Rr,
      forAssignment: z,
      showAddIcon: Ze,
      onAdd: Jr,
      selectionApi: N,
      rowSelectionModel: Y,
      selectAll: ea,
      available: C,
      onAssign: Qr,
      assigned: l,
      onUnassign: Xr,
      effectivePermissions: Qe,
      clearFilters: Zr,
      handleExport: ta,
      preferenceKey: St,
      apiRef: Ce,
      gridColumns: xe,
      tTranslate: b,
      tOpts: h,
      idProperty: se,
      filterModel: ve,
      setFilterModel: Ee,
      onPreferenceChange: Wr,
      toolbarItems: ce
    },
    footer: {
      pagination: !0,
      apiRef: Ce,
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
  }), [e, L, Gr, _, Rr, z, Ze, Jr, N, Y, ea, C, Qr, l, Xr, Qe, Zr, ta, St, Ce, xe, b, h, se, ve, Ee, Wr, ce]), xn = X(() => ({
    columns: {
      columnVisibilityModel: It
    },
    pinnedColumns: Yr
  }), [It, Yr]), wn = X(() => ({
    headerFilterMenu: !1,
    toolbar: _i,
    footer: ci
  }), []);
  return /* @__PURE__ */ w(ge, { children: [
    g !== !1 && /* @__PURE__ */ a(
      za,
      {
        navigate: ie,
        showBreadcrumbs: !Ka && !_a,
        breadcrumbs: mn,
        enableBackButton: or,
        breadcrumbColor: Ja
      }
    ),
    /* @__PURE__ */ w(Pe, { style: q || x, children: [
      /* @__PURE__ */ a(Pe, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        xa,
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
          headerFilters: Dt,
          unstable_headerFilters: Dt,
          checkboxSelection: z,
          loading: !L.records || Ua,
          className: "pagination-fix",
          onCellClick: sn,
          onCellDoubleClick: dn,
          columns: xe,
          paginationModel: ye,
          pageSizeOptions: H.pageSizeOptions,
          onPaginationModelChange: B,
          pagination: !0,
          rowCount: L.recordCount,
          rows: L.records || [],
          sortModel: wt,
          paginationMode: Ct,
          sortingMode: Ct,
          filterMode: Ct,
          processRowUpdate: cn,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: hn,
          onFilterModelChange: fn,
          rowSelectionModel: Y,
          onRowSelectionModelChange: te,
          filterModel: ve,
          getRowId: pn,
          onRowClick: $,
          slots: wn,
          slotProps: Cn,
          hideFooterSelectedRowCount: ae,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Ce,
          disableAggregation: !0,
          disableRowGrouping: !0,
          disableRowSelectionOnClick: nr,
          disablePivoting: Za,
          filterDebounceMs: De,
          initialState: xn,
          ...rn && {
            getDetailPanelContent: bn,
            detailPanelExpandedRowIds: tn,
            onDetailPanelExpandedRowIdsChange: gn
          },
          localeText: yn,
          showToolbar: !0,
          columnHeaderHeight: Qa
        }
      ) }),
      Le && /* @__PURE__ */ w(qe, { open: !!Le, onConfirm: _r, onCancel: _r, title: "Info", hideCancelButton: !0, children: [
        " ",
        Le
      ] }),
      _e && !Le && /* @__PURE__ */ a(qe, { open: _e, onConfirm: ln, onCancel: () => ot(!1), title: "Confirm Delete", children: /* @__PURE__ */ w(da, { children: [
        b("Are you sure you want to delete", h),
        " ",
        Fe.name && /* @__PURE__ */ a(Tt, { style: { display: "inline" }, title: Fe.name, arrow: !0, children: Fe.name.length > 30 ? `${Fe.name.slice(0, 30)}...` : Fe.name }),
        " ?"
      ] }) }),
      bt && /* @__PURE__ */ a(
        qe,
        {
          open: bt,
          onConfirm: un,
          onCancel: () => yt(!1),
          title: "Confirm Add",
          children: /* @__PURE__ */ w(da, { children: [
            b("Are you sure you want to add", h),
            " ",
            Y.ids.size,
            " ",
            b("records", { count: Y.ids.size, ...h }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, Hi), os = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = (p) => {
    r.setFieldValue(t, p.target.checked);
  }, s = X(() => r.values[t] ?? !!e.defaultValue, [r, e]), i = typeof e.readOnly == "function" ? e.readOnly(r) : e.readOnly;
  return /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ a(
      No,
      {
        control: /* @__PURE__ */ a(
          Ia,
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
    /* @__PURE__ */ a(nt, { error: r.touched[t] && !!r.errors[t], children: r.touched[t] && r.errors[t] })
  ] }, t);
}, Fr = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const o = mt(), s = e.rows || (e.multiline ? 5 : 1);
  return /* @__PURE__ */ a(
    Qt,
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
function Ga(e, t) {
  const [r, n] = I(e);
  return he(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}
const pa = ({ value: e, state: t }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const r = e.slice(1, -1);
    return t[r] !== void 0 ? t[r] : e;
  }
  return e;
}, is = {
  outlined: so,
  filled: io,
  standard: oo
}, ss = () => /* @__PURE__ */ w(
  Da,
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
        Kt.Increment,
        {
          render: /* @__PURE__ */ a(Yt, { size: "small", "aria-label": "Increase" }),
          children: /* @__PURE__ */ a(
            Lo,
            {
              fontSize: "small",
              sx: { transform: "translateY(2px)" }
            }
          )
        }
      ),
      /* @__PURE__ */ a(
        Kt.Decrement,
        {
          render: /* @__PURE__ */ a(Yt, { size: "small", "aria-label": "Decrease" }),
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
), ls = ({ column: e, otherProps: t, formik: r, field: n, ...o }) => {
  const { min: s, max: i, readOnly: p } = e, f = mt(), g = X(
    () => pa({ value: s, state: r.values }),
    [s, r.values]
  ), m = X(
    () => pa({ value: i, state: r.values }),
    [i, r.values]
  ), d = X(() => r.values[n] ?? null, [r.values[n]]), [l, C] = I(d), c = Ga(l, 400);
  he(() => {
    c !== d && r.setFieldValue(n, c);
  }, [c]), he(() => {
    d !== l && C(d);
  }, [d]);
  const u = (E) => {
    C(E);
  }, x = (E) => {
    r.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(E);
  }, v = Dn(), M = `number-field-${n}-${v}`, P = e.variant || "standard", S = is[P];
  return /* @__PURE__ */ w(
    Kt.Root,
    {
      value: l,
      onValueChange: u,
      min: g,
      max: m,
      disabled: p,
      render: (E, $) => /* @__PURE__ */ a(
        ht,
        {
          fullWidth: !0,
          ref: E.ref,
          error: r.touched[n] && !!r.errors[n],
          sx: p ? {
            backgroundColor: f.palette?.action?.disabled
          } : void 0,
          children: E.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          Kt.Input,
          {
            render: (E, $) => /* @__PURE__ */ a(
              S,
              {
                id: M,
                inputRef: E.ref,
                value: $.inputValue,
                onChange: E.onChange,
                onBlur: (q) => {
                  E.onBlur(q), x(q);
                },
                inputProps: {
                  ...E,
                  "aria-describedby": r.touched[n] && r.errors[n] ? `${M}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(ss, {}),
                sx: { pr: 0 },
                ...t
              }
            )
          }
        ),
        r.touched[n] && r.errors[n] && /* @__PURE__ */ w(nt, { id: `${M}-error`, error: !0, children: [
          " ",
          r.errors[n],
          " "
        ] })
      ]
    }
  );
}, cs = ({ otherProps: e, ...t }) => {
  const [r, n] = ft.useState(!1), o = () => n((f) => !f), s = (f) => {
    f.preventDefault();
  }, { readOnly: i = !1, disabled: p = !1 } = t.column || {};
  return e = {
    type: r ? "text" : "password",
    InputProps: {
      readOnly: i,
      disabled: p,
      endAdornment: /* @__PURE__ */ a(Da, { position: "end", children: /* @__PURE__ */ a(
        Yt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: s,
          edge: "end",
          disabled: p,
          readOnly: i,
          size: "large",
          children: r ? /* @__PURE__ */ a($o, {}) : /* @__PURE__ */ a(zo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(Fr, { otherProps: e, ...t });
}, ds = ({ column: e, field: t, formik: r, otherProps: n, fieldConfigs: o = {}, mode: s }) => {
  const i = s !== "copy" && o.disabled, { systemDateTimeFormat: p, stateData: f } = Ne();
  return /* @__PURE__ */ Er(
    Pa,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: p(!0, !1, f.dateTime),
      name: t,
      value: re(r.values[t]),
      onChange: (g) => {
        const d = re(g).hour(12).toISOString();
        r.setFieldValue(t, d);
      },
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDate: e.min ? re(e.min) : null,
      maxDate: e.max ? re(e.max) : null,
      disabled: i,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, us = ({ column: e, field: t, formik: r, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: s } = Ne();
  return /* @__PURE__ */ Er(
    vr,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: t,
      fullWidth: !0,
      format: o(!1, !1, s.dateTime),
      name: t,
      value: re(r.values[t]),
      onChange: (i) => r.setFieldValue(t, i),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      minDateTime: e.min ? re(e.min) : null,
      maxDateTime: e.max ? re(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, ps = ({ column: e, field: t, formik: r, otherProps: n }) => {
  let o = r.values[t];
  return e.isUtc && (o = re.utc(o).utcOffset(re().utcOffset(), !0).format()), /* @__PURE__ */ Er(
    Vo,
    {
      ...n,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: t,
      fullWidth: !0,
      name: t,
      value: re(o),
      onChange: (s) => (e.isUtc && (s = s && s.isValid() ? s.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), r.setFieldValue(t, s)),
      onBlur: r.handleBlur,
      helperText: r.touched[t] && r.errors[t],
      slotProps: { textField: { fullWidth: !0, helperText: r.errors[t], variant: "standard" } }
    }
  );
}, fs = [null, void 0, ""];
function qa({ column: e, formik: t, lookups: r, dependsOn: n = [], isAutoComplete: o = !1, userSelected: s, model: i }) {
  const [p, f] = I([]), { buildUrl: g } = Ne(), m = gt(), d = g(i.api), l = X(() => {
    const u = {};
    if (!n.length) return u;
    for (const x of n)
      u[x] = t.values[x];
    return u;
  }, n.map((u) => t.values[u])), C = X(() => n.length ? [] : typeof e.lookup == "string" ? r[e.lookup] : e.lookup, [e.lookup, r, n]), c = F(async () => {
    if (!e.lookup) return;
    if (!Object.values(l).every(
      (x) => !fs.includes(x)
    )) {
      f([]);
      return;
    }
    try {
      const x = await Na({
        api: d,
        model: i,
        lookups: r,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: l }] }
        }
      });
      f(x);
    } catch (x) {
      m.showError("Could not load lookups", x.message);
    }
  }, [e.lookup, l, d, i, r, m]);
  return he(() => {
    n.length ? c() : (o || !s.current) && f(C || []);
  }, [n.length, c, o, C]), p;
}
const hs = ft.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], model: s, ...i }) => {
  const p = ft.useRef(!1), { placeHolder: f } = e, g = qa({ column: e, formik: r, lookups: n, dependsOn: o, userSelected: p, model: s }), m = mt(), d = X(() => {
    let C = r.values[t];
    if (g?.length && !C && !e.multiSelect && "IsDefault" in g[0]) {
      const c = g.find((u) => u.IsDefault);
      c && (C = c.value, r.setFieldValue(t, c.value));
    }
    return e.multiSelect && (!C || C.length === 0 ? C = [] : Array.isArray(C) || (C = C.split(",").map((c) => parseInt(c)))), C;
  }, [r.values[t], g, e.multiSelect, t]), l = F((C) => {
    typeof e.onChange == "function" && e.onChange({ formik: r, value: C.target.value, options: g, event: C }), r.handleChange(C), p.current = !0;
  }, [r.values[t], e.onChange, g]);
  return /* @__PURE__ */ w(
    er,
    {
      fullWidth: !0,
      error: r.touched[t] && r.errors[t],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(Go, { children: f || "" }),
        /* @__PURE__ */ a(
          qo,
          {
            IconComponent: Oa,
            ...i,
            name: t,
            multiple: e.multiSelect === !0,
            readOnly: e.readOnly === !0,
            value: `${d}`,
            onChange: l,
            onBlur: r.handleBlur,
            sx: {
              backgroundColor: e.readOnly ? m.palette?.action?.disabled : ""
            },
            children: Array.isArray(g) && g.map((C) => /* @__PURE__ */ a(Aa, { value: C.value, disabled: C.isDisabled, children: C.label }, C.value))
          }
        ),
        /* @__PURE__ */ a(nt, { children: r.touched[t] && r.errors[t] })
      ]
    },
    t
  );
}), fa = Xt("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), ms = ({ component: e, name: t, formik: r, field: n, column: o }) => {
  const { value: s } = r.getFieldProps(t || n), { setFieldValue: i } = r, p = e || o.relation, f = F((g) => {
    i(t || n, g);
  }, [i, t, n]);
  return /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ a(fa, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: s, available: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(fa, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(p, { selected: s, assigned: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, gs = ({ field: e, formik: t, orientation: r = "row", label: n, lookups: o, fieldConfigs: s = {}, mode: i, ...p }) => {
  const f = (C) => {
    t.setFieldValue(e, C.target.value);
  }, g = o ? o[p.column.lookup] : [], m = mt(), d = t.touched[e] && !!t.errors[e], l = i !== "copy" && s.disabled;
  return /* @__PURE__ */ w(ge, { children: [
    /* @__PURE__ */ a(ht, { component: "fieldset", error: d, children: /* @__PURE__ */ a(
      Ir,
      {
        row: r === "row",
        "aria-label": n,
        name: e,
        value: t.values[e] ?? "",
        onChange: f,
        children: g?.map((C, c) => /* @__PURE__ */ a(
          at,
          {
            value: C.value,
            control: /* @__PURE__ */ a(pt, {}),
            label: C.label,
            disabled: l
          },
          c
        ))
      }
    ) }),
    d && /* @__PURE__ */ a(nt, { style: { color: m.palette.error.main }, children: t.errors[e] })
  ] });
}, bs = {
  limitTags: 5
}, ys = Ge.memo(({ column: e, field: t, formik: r, lookups: n, dependsOn: o = [], fieldConfigs: s = {}, mode: i, model: p, ...f }) => {
  const g = qa({ column: e, formik: r, lookups: n, dependsOn: o, model: p, isAutoComplete: !0 });
  let m = r.values[t] || [];
  Array.isArray(m) || (m = m.split(", ").map(Number));
  const d = g.filter((c) => m.includes(c.value)) || [], l = i !== "copy" && s.disabled, C = (c, u) => {
    let x = u?.map((v) => v.value) || [];
    e.dataFormat !== "array" && (x = x.length ? x.join(", ") : ""), r.setFieldValue(t, x);
  };
  return /* @__PURE__ */ w(
    er,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[t] && !!r.errors[t],
      children: [
        /* @__PURE__ */ a(
          Ma,
          {
            ...f,
            multiple: !0,
            id: t,
            limitTags: e.limitTags || bs.limitTags,
            options: g || [],
            getOptionLabel: (c) => c.label || "",
            defaultValue: d,
            renderInput: (c) => /* @__PURE__ */ a(Qt, { ...c, variant: "standard" }),
            onChange: C,
            value: d,
            size: "small",
            disabled: l
          }
        ),
        r.touched[t] && r.errors[t] && /* @__PURE__ */ a(nt, { children: r.errors[t] })
      ]
    },
    t
  );
}), Cs = "#182eb5", xs = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], ws = lo(co)(({ theme: e, isSelected: t }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: t ? Cs : "#ffffff",
  border: `1px solid ${Ho[500]}`,
  color: t ? "white" : "black"
})), vs = ({ day: e, onClick: t, isSelected: r }) => /* @__PURE__ */ a(
  ws,
  {
    onClick: () => t(e.value),
    isSelected: r,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), Ds = ({ name: e, field: t, formik: r, expired: n }) => {
  const { setFieldValue: o } = r, { value: s } = r.getFieldProps(e || t), i = "1000001", p = "0111110", f = "0".repeat(7), [g, m] = I(s || f), [d, l] = I(() => s ? s === i ? i : s === p ? p : "Custom" : ""), [C, c] = I(!1), u = F((M) => {
    if (Array.isArray(M)) {
      let P = f;
      for (const S of M)
        P = P.substring(0, S) + "1" + P.substring(S + 1);
      m(P), o(e || t, P), c(!0);
    } else {
      let P = C ? f : g;
      const S = P.slice(0, M) + (P[M] === "1" ? "0" : "1") + P.slice(M + 1);
      m(S), o(e || t, S), l("Custom"), c(!1);
    }
  }, [C, f, g, e, t, o]), x = mt(), v = r.touched[t] && !!r.errors[t];
  return /* @__PURE__ */ w(ge, { children: [
    /* @__PURE__ */ a(ht, { component: "fieldset", error: v, children: /* @__PURE__ */ w(
      Ir,
      {
        row: !0,
        name: e || t,
        value: d,
        onChange: (M) => {
          const P = M.target.value;
          l(P), P !== "Custom" ? (m(P), o(e || t, P), c(!0)) : (m(f), o(e || t, f), c(!1));
        },
        children: [
          /* @__PURE__ */ a(at, { value: i, control: /* @__PURE__ */ a(pt, {}), label: "Weekends (Sat - Sun)", onClick: () => u([0, 6]) }),
          /* @__PURE__ */ a(at, { value: p, control: /* @__PURE__ */ a(pt, {}), label: "Weekdays (Mon - Fri)", onClick: () => u([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(at, { value: "Custom", control: /* @__PURE__ */ a(pt, {}), label: "Specific days" }),
          xs.map((M, P) => /* @__PURE__ */ a(
            vs,
            {
              day: M,
              onClick: () => u(P),
              isSelected: d === "Custom" && g[P] === "1",
              disabled: n
            },
            M.value
          ))
        ]
      }
    ) }),
    v && /* @__PURE__ */ a(nt, { style: { color: x.palette.error.main }, children: r.errors[t] })
  ] });
}, Ps = ({ isAdd: e, column: t, field: r, formik: n, otherProps: o, fieldConfigs: s = {}, mode: i }) => {
  const p = mt();
  let f = n.values[r] || [];
  Array.isArray(f) || (f = f.split(",").map((l) => l.trim()));
  const g = Ge.useMemo(() => i === "copy" ? !0 : typeof s.disabled < "u" ? s.disabled : typeof t.disabled == "function" ? t.disabled({ isAdd: e, formik: n }) : !!t.disabled, [i, s.disabled, t.disabled]), m = t.hasDefault && !e ? [f[0]] : [], d = F((l, C, c, u = {}) => {
    const x = C.pop()?.trim();
    C.includes(x) || C.push(x), m && m.includes(u.option) && c === "removeOption" && (C = [u.option]), t.dataFormat !== "array" && (C = C.length ? C.join(",") : ""), n.setFieldValue(r, C);
  }, [n, r]);
  return /* @__PURE__ */ w(
    er,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[r] && !!n.errors[r],
      children: [
        /* @__PURE__ */ a(
          Ma,
          {
            ...o,
            multiple: !0,
            id: r,
            freeSolo: !0,
            value: f,
            options: [],
            renderInput: (l) => /* @__PURE__ */ a(
              Qt,
              {
                ...l,
                variant: "standard",
                InputProps: {
                  ...l.InputProps,
                  sx: {
                    ...l.InputProps?.sx,
                    ...g && { backgroundColor: p.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: d,
            size: "small",
            renderTags: (l, C) => l.map((c, u) => {
              const { key: x, ...v } = C({ index: u });
              return /* @__PURE__ */ a(
                Ko,
                {
                  label: c,
                  ...v,
                  disabled: m.includes(c)
                },
                x
              );
            }),
            disabled: g
          }
        ),
        n.touched[r] && n.errors[r] && /* @__PURE__ */ a(nt, { children: n.errors[r] })
      ]
    },
    r
  );
}, Ss = (e = []) => {
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
function Fs({ column: e, field: t, formik: r, lookups: n, fieldConfigs: o, mode: s }) {
  const i = n ? n[e.lookup] : [], p = Ss(i), f = r.values[t]?.length ? r.values[t].split(", ") : [];
  let g;
  return s !== "copy" && (g = o?.disabled), /* @__PURE__ */ a(Ye, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    _o,
    {
      selectedItems: f,
      onSelectedItemsChange: (d, l) => {
        r.setFieldValue(t, l?.join(", ") || "");
      },
      disabled: g,
      multiSelect: !0,
      checkboxSelection: !0,
      children: p.map((d) => /* @__PURE__ */ a(sa, { itemId: d.value, label: d.label, children: d.children.map((l) => /* @__PURE__ */ a(sa, { itemId: l.value, label: l.label }, l.value)) }, d.value))
    }
  ) });
}
const Ts = { maxLength: 500 }, { errorMapping: Es } = He, As = 1024 * 1024;
function Is({ column: e, field: t, formik: r }) {
  const n = r.values[t] || "", { getApiEndpoint: o } = Ne(), { maxSize: s, formats: i } = e, p = o("upload"), f = o("media"), g = o(), [m, d] = I({
    isExternal: "no",
    selectedFile: null
  }), [l, C] = I(!1), c = gt(), { getParams: u, useParams: x } = Br(), { associationId: v } = x() || u, M = v?.split("-")[0] || 1, P = (G) => {
    const Z = G.target.value;
    d({
      ...m,
      isExternal: Z,
      selectedFile: null
    }), r.setFieldValue(t, r.values[t]);
  }, S = (G) => {
    r.setFieldValue(t, G.target.value);
  }, E = (G) => {
    const Z = G.target.files[0];
    if (Z) {
      if (s && Z.size > s * As) {
        c.showError(`File size exceeds the maximum limit of ${s} MB.`);
        return;
      }
      if (Array.isArray(i) && !i.includes(Z.type)) {
        c.showError(`Invalid file format. Allowed formats: ${i.join(", ")}.`);
        return;
      }
      d((R) => ({ ...R, selectedFile: Z }));
    }
  }, $ = async () => {
    if (m.selectedFile) {
      C(!0);
      try {
        const G = new FormData();
        G.append("file", m.selectedFile), G.append("DocumentGroupId", r.values.DocumentGroupId), G.append("AssociationId", M);
        const R = (await Ra({
          method: "POST",
          url: p,
          data: G,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!R.success) {
          c.showError(R.message || "Upload failed");
          return;
        }
        const ce = f + "/" + R.filePath;
        r.setFieldValue(t, ce);
      } catch (G) {
        const Z = (G.message.match(/status code (\d{3})/) || [])[1];
        c.showError(Es[Z]);
      } finally {
        C(!1);
      }
    }
  }, q = new URL(g, window.location.origin).hostname.toLowerCase();
  ft.useEffect(() => {
    d({
      ...m,
      isExternal: n.toLowerCase().includes(q) ? "no" : "yes"
    });
  }, [n, d]);
  const ee = r.values[t]?.length > (e.max || Ts.maxLength), V = ee ? "red" : "";
  return /* @__PURE__ */ w(Pe, { children: [
    /* @__PURE__ */ w(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Oe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ w(
        Ir,
        {
          row: !0,
          value: m.isExternal,
          onChange: P,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ a(at, { value: "yes", control: /* @__PURE__ */ a(pt, {}), label: "Yes" }),
            /* @__PURE__ */ a(at, { value: "no", control: /* @__PURE__ */ a(pt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ w(Pe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Oe, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ w(Pe, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        m.isExternal === "yes" ? /* @__PURE__ */ a(
          rt,
          {
            fullWidth: !0,
            value: n,
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: V },
                "&.Mui-focused fieldset": { borderColor: V },
                "&:hover fieldset": { borderColor: V }
              }
            },
            onChange: S,
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
        ee && /* @__PURE__ */ w(Oe, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    m.isExternal === "no" && /* @__PURE__ */ w(Pe, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ w(
        tt,
        {
          variant: "outlined",
          component: "label",
          disabled: l,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: E })
          ]
        }
      ),
      m.selectedFile && /* @__PURE__ */ a(Tt, { title: m.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Oe, { variant: "body2", children: m.selectedFile.name.length > 20 ? `${m.selectedFile.name.substring(0, 20)}...` : m.selectedFile.name }) }),
      /* @__PURE__ */ a(
        tt,
        {
          variant: "contained",
          color: "primary",
          onClick: $,
          disabled: !m.selectedFile || l,
          children: l ? /* @__PURE__ */ a(uo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Os = ({ field: e, formik: t }) => {
  const [r, n] = Ge.useState({}), o = Ga(r, 300);
  Ge.useEffect(() => {
    if (t.values[e])
      try {
        const i = JSON.parse(t.values[e]);
        n(i);
      } catch {
        n({});
      }
  }, [t.values[e]]), Ge.useEffect(() => {
    const i = JSON.stringify(o);
    t.values[e] !== i && t.setFieldValue(e, i);
  }, [o, e, t, t.values[e]]);
  const s = (i, p) => {
    const f = { ...r, [i]: p };
    n(f);
  };
  return /* @__PURE__ */ a(
    er,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[e] && !!t.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(r).map((i) => /* @__PURE__ */ w(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ w(Ft, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              i,
              ":"
            ] }),
            /* @__PURE__ */ a(
              Jo,
              {
                id: i,
                name: i,
                value: r[i],
                onChange: (p) => s(i, p.target.value),
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
}, Ms = {
  boolean: os,
  select: hs,
  string: Fr,
  number: ls,
  password: cs,
  date: ds,
  dateTime: us,
  time: ps,
  oneToMany: ms,
  radio: gs,
  autocomplete: ys,
  dayRadio: Ds,
  email: Fr,
  chipInput: Ps,
  treeCheckbox: Fs,
  fileUpload: Is,
  json: Os
}, ha = { paddingTop: "2.5px", paddingBottom: "2.5px" }, Bs = Yo("span")({
  color: "red !important"
}), ks = ({ tabColumns: e, model: t, formik: r, data: n, onChange: o, combos: s, lookups: i, fieldConfigs: p, mode: f, handleSubmit: g }) => {
  const [m, d] = Ge.useState(/* @__PURE__ */ new Set()), { activeStep: l, setActiveStep: C } = Ge.useContext(ja), c = {};
  for (let S = 0, E = t.columns.length; S < E; S++) {
    const { field: $, skip: q } = t.columns[S];
    q && (c[q.step] = r.values[$]);
  }
  const u = (S) => m.has(S) || c[S], x = () => {
    for (let S = l + 1; S < e.length; S++)
      if (!u(S))
        return !1;
    return !0;
  }, v = () => {
    let S = l + 1;
    for (; c[S]; )
      S++;
    d((E) => new Set(E).add(l)), S >= e.length || x() ? g() : C(S);
  }, M = () => {
    let S = l - 1;
    for (; c[S] && S > 0; )
      S--;
    C(S);
  };
  if (!e?.length)
    return null;
  const P = e[l];
  return /* @__PURE__ */ w(ge, { children: [
    /* @__PURE__ */ a(Wo, { activeStep: l, sx: { marginBottom: "20px" }, children: e.map(({ title: S, key: E }, $) => /* @__PURE__ */ a(jo, { completed: u($), children: /* @__PURE__ */ a(Uo, { children: /* @__PURE__ */ a(Oe, { sx: { fontSize: "20px" }, children: S }) }) }, E)) }),
    /* @__PURE__ */ w(Ge.Fragment, { children: [
      /* @__PURE__ */ a(Wa, { formElements: P.items, model: t, formik: r, data: n, onChange: o, combos: s, lookups: i, fieldConfigs: p, mode: f }),
      /* @__PURE__ */ w(Ye, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        l !== 0 ? /* @__PURE__ */ w(Se, { color: "inherit", disabled: l === 0, onClick: M, variant: "contained", sx: { mr: 2 }, children: [
          " ",
          "Back"
        ] }) : null,
        /* @__PURE__ */ a(Se, { onClick: v, variant: "contained", children: x() ? "Finish" : "Next" })
      ] })
    ] })
  ] });
}, Wa = ({ formElements: e, model: t, formik: r, data: n, onChange: o, combos: s, lookups: i, fieldConfigs: p, mode: f, isAdd: g }) => e?.length ? /* @__PURE__ */ a(ge, { children: e.map(({ Component: m, column: d, field: l, label: C, otherProps: c }, u) => {
  const x = typeof d.relation == "function";
  return /* @__PURE__ */ w(gr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: x ? "flex-start" : "center", children: [
    d?.showLabel !== !1 ? /* @__PURE__ */ a(gr, { size: { xs: 3 }, sx: ha, children: /* @__PURE__ */ w(Oe, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
      d.label || l,
      ": ",
      d.required && /* @__PURE__ */ a(Bs, { children: "*" })
    ] }) }) : null,
    /* @__PURE__ */ a(gr, { size: { xs: x ? 12 : 9 }, sx: ha, children: /* @__PURE__ */ a(m, { isAdd: g, model: t, fieldConfigs: p[l], mode: f, column: d, field: l, label: C, formik: r, data: n, onChange: o, combos: s, lookups: i, ...c }) })
  ] }, u);
}) }) : null, Rs = function({ columns: e, tabs: t = {}, id: r, searchParams: n }) {
  const o = [], s = {};
  for (const p in t)
    s[p] = [];
  for (const p of e) {
    const f = p.type;
    if (p.label === null)
      continue;
    const { field: g, label: m, tab: d } = p, l = {};
    p.options && (l.options = p.options), p.dependsOn && (l.dependsOn = p.dependsOn);
    const C = Ms[f];
    if (!C || p.hideInAddGrid && r === "0")
      continue;
    (d && t[d] ? s[d] : o).push({ Component: C, field: g, label: m, column: { ...p, readOnly: n.has("showRelation") || p.readOnly }, otherProps: l });
  }
  const i = [];
  for (const p in s)
    i.push({ key: p, title: t[p], items: s[p] });
  return { formElements: o, tabColumns: i };
}, Ns = ({ model: e, formik: t, data: r, combos: n, onChange: o, lookups: s, id: i, fieldConfigs: p, mode: f, handleSubmit: g }) => {
  const m = He.emptyIdValues.includes(i), { formElements: d, tabColumns: l } = Ge.useMemo(() => {
    const C = e.formConfig?.showTabbed, c = new URLSearchParams(window.location.search), { formElements: u, tabColumns: x } = Rs({ columns: e.columns, tabs: C ? e.tabs : {}, id: i, searchParams: c });
    return { formElements: u, tabColumns: x, showTabs: C && x.length > 0 };
  }, [e]);
  return /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ a(Wa, { isAdd: m, formElements: d, model: e, formik: t, data: r, onChange: o, combos: n, lookups: s, fieldConfigs: p, mode: f }),
    /* @__PURE__ */ a("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ a(ks, { tabColumns: l, model: e, formik: t, data: r, onChange: o, combos: n, lookups: s, fieldConfigs: p, mode: f, handleSubmit: g }) })
  ] });
};
function Ls(e) {
  const { children: t, value: r, index: n, ...o } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      hidden: r !== n,
      id: `simple-tabpanel-${n}`,
      "aria-labelledby": `simple-tab-${n}`,
      ...o,
      children: r === n && /* @__PURE__ */ a(Ye, { sx: { p: 3 }, children: t })
    }
  );
}
function $s(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const zs = ga(({ relation: e, parentFilters: t, parent: r, where: n, models: o, readOnly: s }) => {
  const i = o.find(({ name: g }) => g === e);
  if (!i) return null;
  const p = { ...i, hideBreadcrumb: !0 }, f = p instanceof Jt ? p : new Jt(p);
  return f ? /* @__PURE__ */ a(
    f.ChildGrid,
    {
      readOnly: s,
      parentFilters: t,
      parent: r,
      model: p,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), Vs = ft.memo(({ relations: e, parent: t, where: r = [], models: n, relationFilters: o, readOnly: s }) => {
  const [i, p] = I(0);
  return /* @__PURE__ */ w(Ye, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(Ye, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(Qo, { value: i, onChange: (g, m) => {
      p(m);
    }, "aria-label": "relations tabs", children: e.map((g, m) => {
      const d = n.find(({ name: C }) => C === g) || {}, l = d.listTitle || d.title || g;
      return /* @__PURE__ */ a(
        Zo,
        {
          label: l,
          ...$s(m)
        },
        g
      );
    }) }) }),
    e.map((g, m) => /* @__PURE__ */ a(Ls, { value: i, index: m, children: /* @__PURE__ */ a(
      zs,
      {
        readOnly: s,
        relation: g,
        models: n,
        parentFilters: o[g] || [],
        parent: t,
        where: r
      },
      g
    ) }, g))
  ] });
}), ja = Zt(1), Gs = {}, me = {
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
}, qs = ({
  model: e,
  api: t,
  models: r,
  relationFilters: n = {},
  permissions: o = {},
  Layout: s = Ns,
  baseSaveData: i = {},
  sx: p,
  readOnly: f,
  beforeSubmit: g,
  deletePromptText: m,
  detailPanelId: d = null,
  // Grid Row Detail Panel Id
  onCancel: l,
  onSaveSuccess: C
}) => {
  const c = e.formTitle || e.title, { navigate: u, getParams: x, useParams: v, pathname: M } = Br(), { relations: P = [] } = e, { stateData: S, buildUrl: E, setPageTitle: $ } = Ne(), q = v() || x, { id: ee = "" } = q, V = d || ee.split("-")[me.editIdIndex], G = new URLSearchParams(window.location.search), Z = G.has(me.baseData) && G.get(me.baseData);
  if (Z) {
    const N = JSON.parse(Z);
    typeof N === me.object && N !== null && (i = { ...i, ...N });
  }
  const [R, ce] = I(!0), [Q, de] = I({}), [we, U] = I({}), [pe, ye] = I(!1), B = gt(), [L, O] = I(null), [z, ae] = I(0), [Y, te] = I(!1), [_e, ot] = I(null), [Fe, At] = I(""), It = typeof e.applyFieldConfig === me.function ? e.applyFieldConfig({ data: Q, lookups: we }) : Gs, bt = E(e.api), yt = ee.includes("-") && ee.split("-")[0] === "0" ? "copy" : "", fe = S.userData || {}, Ct = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: xt } = Va({
    userData: fe,
    model: e,
    userDefinedPermissions: Ct
  }), { hideBreadcrumb: Ot = !1, navigateBack: h } = e, Le = !("canEdit" in Q) || Q.canEdit, Te = F(() => {
    let N;
    switch (typeof h) {
      case me.function:
        N = h({ params: q, searchParams: G, data: Q });
        break;
      case me.number:
      case me.string:
        N = h;
        break;
      default:
        N = M.substring(0, M.lastIndexOf("/"));
        break;
    }
    u(N);
  }, [h, u, q, G, Q, M]), wt = X(() => He.emptyIdValues.includes(V), [V]), Mt = X(() => wt ? { ...e.initialValues, ...Q, ...i } : { ...i, ...e.initialValues, ...Q }, [e.initialValues, Q, V]), Je = t || bt, ve = X(() => {
    if (d)
      return d;
    const N = ee.split("-");
    return N.length > 1 ? N[me.loadIdIndex] : V;
  }, [d, ee, V]), Ee = F(async () => {
    ce(!0);
    try {
      const N = await _t({
        api: Je,
        model: e,
        id: ve
      });
      Bt(N);
    } catch (N) {
      rr("Could not load record", N.message);
    } finally {
      ce(!1);
    }
  }, [Je, e, ve]);
  he(() => {
    O(e.getValidationSchema({ id: V, snackbar: B })), Ee();
  }, [V, ve, e, Je, B, O, Ee]);
  const ie = Ea({
    enableReinitialize: !0,
    initialValues: Mt,
    validationSchema: L,
    validateOnBlur: !1,
    onSubmit: async (N, { resetForm: De }) => {
      Object.keys(N).forEach((_) => {
        typeof N[_] === me.string && (N[_] = N[_].trim());
      }), ce(!0), Mr({
        id: V,
        api: bt,
        values: N,
        model: e
      }).then((_) => {
        if (!_) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof C === me.function && C();
        const $e = _.info ? _.info : `Record ${V === 0 ? "Added" : "Updated"} Successfully.`;
        B.showMessage($e), h !== !1 && Te(), De({ values: ie.values });
      }).catch((_) => {
        B.showError(
          "An error occured.",
          _
        ), e.reloadOnSave && De();
      }).finally(() => {
        ce(!1);
      });
    }
  }), tr = F(() => {
    ie.resetForm(), te(!1), typeof l === me.function && l(), h !== !1 && Te();
  }, [ie, l, h, Te]), rr = F((N, De) => {
    ce(!1), B.showError(N, De), Te();
  }, [B, Te]), Bt = function({ id: N, title: De, record: _, lookups: $e }) {
    const Be = ee.indexOf("-") > -1, Ze = !N || N === "0", Nt = Ze ? me.create : Be ? me.copy : me.edit, We = Ze ? "" : _[e.linkColumn], st = [{ text: e.breadCrumbs }, { text: Nt }];
    Be && (_[e.linkColumn] = ""), e.columns.forEach((lt) => {
      lt.skipCopy && Be && (_[lt.field] = "");
    }), de(_), U($e), ce(!1), We !== "" && st.push({ text: We }), $({
      showBreadcrumbs: !0,
      breadcrumbs: st
    });
  }, ar = F((N) => {
    ie.dirty && Le ? te(!0) : (typeof l === me.function && l(), h !== !1 && Te()), N.preventDefault();
  }, [ie.dirty, Le, l, h, Te]), vt = F(async () => {
    try {
      ye(!0), await Or({
        id: V,
        api: t || e.api,
        model: e
      }) === !0 && (B.showMessage("Record Deleted Successfully."), h !== !1 && Te());
    } catch {
      B.showError("An error occurred, please try after some time.");
    } finally {
      ye(!1);
    }
  }, [V, t, e.api, B, At, e, h, Te]), Ce = () => {
    At(null), ye(!1);
  }, se = F((N) => {
    const { name: De, value: _ } = N.target;
    de({ ...Q, [De]: _ });
  }, [Q]), Dt = F(async (N) => {
    N && N.preventDefault(), typeof g === me.function && await g({ formik: ie, model: e });
    const { errors: De } = ie;
    ie.handleSubmit();
    const _ = Object.keys(De)[0], $e = De[_];
    $e && B.showError($e, null, "error");
    const Be = e.columns.find(
      (Ze) => Ze.field === _
    ) || {};
    Be.tab && ae(Object.keys(e.tabs).indexOf(Be.tab));
  }, [g, ie, e, B, ae]), nr = [
    { text: c },
    { text: V === "0" ? "New" : "Update" }
  ], kt = Number(V) !== 0 && !!P.length, Rt = G.has("showRelation"), it = !Le || Q.readOnlyRelations;
  m = m || "Are you sure you want to delete ?";
  const { showPageTitle: or = !0 } = e;
  return /* @__PURE__ */ w(ge, { children: [
    or && /* @__PURE__ */ a(
      za,
      {
        navigate: u,
        title: c,
        showBreadcrumbs: !Ot,
        breadcrumbs: nr,
        model: e
      }
    ),
    /* @__PURE__ */ a(ja.Provider, { value: { activeStep: z, setActiveStep: ae }, children: /* @__PURE__ */ w(Bo, { sx: { padding: 2, ...p }, children: [
      R ? /* @__PURE__ */ a(Ye, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(Ro, {}) }) : /* @__PURE__ */ w("form", { children: [
        /* @__PURE__ */ w(
          ko,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              xt && Le && !Rt && !f && /* @__PURE__ */ a(
                Se,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: Dt,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ a(
                Se,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: ar,
                  children: "Cancel"
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Se,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => ye(!0),
                  children: "Delete"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          s,
          {
            model: e,
            formik: ie,
            data: Q,
            fieldConfigs: It,
            onChange: se,
            lookups: we,
            id: V,
            handleSubmit: Dt,
            mode: yt
          }
        )
      ] }),
      Fe && /* @__PURE__ */ w(
        qe,
        {
          open: !!Fe,
          onConfirm: Ce,
          onCancel: Ce,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            Fe
          ]
        }
      ),
      /* @__PURE__ */ a(
        qe,
        {
          open: Y,
          onConfirm: tr,
          onCancel: () => te(!1),
          title: "Changes not saved",
          okText: "Discard",
          cancelText: "Continue",
          children: "Would you like to continue to edit or discard changes?"
        }
      ),
      /* @__PURE__ */ a(
        qe,
        {
          open: pe,
          onConfirm: vt,
          onCancel: () => {
            ye(!1), ot(null);
          },
          title: _e ? "Error Deleting Record" : "Confirm Delete",
          children: m
        }
      ),
      kt ? /* @__PURE__ */ a(
        Vs,
        {
          readOnly: it,
          models: r,
          relationFilters: n,
          relations: P,
          parent: e.name || e.title || ""
        }
      ) : null
    ] }) })
  ] });
}, Ht = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
  nonAlphaNumeric: /[^a-zA-Z0-9]/g,
  compareValidatorRegex: /^compare:(.+)$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
}, Ws = {}, ma = !0, js = {
  string: "",
  boolean: !1,
  radio: !1,
  oneToMany: ""
};
class Jt {
  static defaultPermissions = {
    add: !0,
    edit: !0,
    delete: !0
  };
  constructor(t) {
    const { title: r = "" } = t;
    let { api: n, idProperty: o = n + "Id" } = t;
    const s = "module" in t ? t.module : r.replace(/[^\w\s]/gi, "");
    n || (n = `${r.replaceAll(Ht.nonAlphaNumeric, "-").toLowerCase()}`, o = r.replaceAll(" ", "") + "Id");
    const i = { ...t.defaultValues }, p = s || r;
    Object.assign(this, {
      standard: !0,
      name: p,
      permissions: { ...Jt.defaultPermissions },
      idProperty: o,
      linkColumn: `${p}Name`,
      overrideFileName: r,
      preferenceId: p,
      tableName: p,
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
      t[n] = r.defaultValue === void 0 ? js[r.type] || "" : r.defaultValue;
    }
    return t;
  }
  getValidationSchema({ id: t }) {
    const { columns: r } = this, n = {};
    for (const o of r) {
      const { field: s, label: i, header: p, type: f = "string", requiredIfNew: g = !1, required: m = !1, min: d = "", max: l = "", validate: C } = o, c = i || p || s;
      if (!c || i === null || i === "") continue;
      let u;
      switch (f) {
        case "string":
          u = ue.string().nullable().trim().label(c), d && !isNaN(Number(d)) && (u = u.min(Number(d), `${c} must be at least ${d} characters long`)), l && !isNaN(Number(l)) && (u = u.max(Number(l), `${c} must be at most ${l} characters long`)), m && (u = u.trim().required(`${c} is required`));
          break;
        case "boolean":
          u = ue.bool().nullable().transform((x, v) => v === "" ? null : x).label(c);
          break;
        case "radio":
        case "dayRadio":
          u = ue.mixed().label(c), m && (u = u.required(`Select at least one option for ${c}`));
          break;
        case "date":
          u = ue.date().nullable().transform((x, v) => v === "" || v === null ? null : x).label(c), m && (u = u.required(`${c} is required`));
          break;
        case "dateTime":
          u = ue.date().nullable().transform((x, v) => v === "" || v === null ? null : x).label(c), m && (u = u.required(`${c} is required`));
          break;
        case "select":
        case "autocomplete":
          m ? u = ue.string().trim().label(c).required(`Select at least one ${c}`) : u = ue.string().nullable();
          break;
        case "password":
          u = ue.string().label(c).test("ignore-asterisks", `${c} must be a valid password.`, (x) => {
            if (x === "******") return !0;
            const v = Number(d) || 8, M = Number(l) || 50, P = o.regex || Ht.password;
            return ue.string().min(v, `${c} must be at least ${v} characters`).max(M, `${c} must be at most ${M} characters`).matches(
              P,
              `${c} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`
            ).isValidSync(x);
          });
          break;
        case "email":
          u = ue.string().trim().matches(
            o.regex || Ht.email,
            "Email must be a valid email"
          );
          break;
        case "number":
          m ? u = ue.number().label(c).required(`${c} is required.`) : u = ue.number().nullable(), d !== void 0 && d !== "" && !isNaN(Number(d)) && (u = u.min(Number(d), `${c} must be greater than or equal to ${d}`)), l !== void 0 && l !== "" && !isNaN(Number(l)) && (u = u.max(Number(l), `${c} must be less than or equal to ${l}`));
          break;
        case "fileUpload":
          u = ue.string().trim().label(c);
          break;
        default:
          u = ue.mixed().nullable().label(c);
          break;
      }
      if (m && f !== "string" && (u = u.required(`${c} is required`)), g && (!t || t === "") && (u = u.trim().required(`${c} is required`)), C) {
        const x = Ht.compareValidatorRegex.exec(C);
        if (x) {
          const v = x[1], M = r.find(
            (P) => (P.formField === v || P.field) === v
          );
          u = u.oneOf(
            [ue.ref(v)],
            `${c} must match ${M.label}`
          );
        }
      }
      n[s] = u;
    }
    return ue.object({ ...n, ...this.validationSchema });
  }
  Form = ({ match: t, ...r }) => /* @__PURE__ */ a(qs, { model: this, Layout: this.Layout, ...r });
  Grid = ({ match: t, ...r }) => /* @__PURE__ */ a(ua, { model: this, showRowsSelected: ma, ...r });
  ChildGrid = (t) => /* @__PURE__ */ w(ge, { children: [
    /* @__PURE__ */ a(ua, { model: this, ...t, customStyle: Ws, showRowsSelected: ma }),
    /* @__PURE__ */ a(po, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  qe as DialogComponent,
  ua as GridBase,
  Oi as HelpModal,
  la as MuiTypography,
  za as PageTitle,
  hc as RouterProvider,
  Ba as SnackbarContext,
  uc as SnackbarProvider,
  fc as StateProvider,
  Jt as UiModel,
  pc as crudHelper,
  fi as daDKGrid,
  mi as deDEGrid,
  bi as elGRGrid,
  Ci as esESGrid,
  wi as frFRGrid,
  Ue as httpRequest,
  Di as itITGrid,
  Ii as locales,
  Ti as ptPT,
  Si as trTRGrid,
  pi as useMobile,
  Br as useRouter,
  gt as useSnackbar,
  Ne as useStateContext
};
//# sourceMappingURL=index.js.map
