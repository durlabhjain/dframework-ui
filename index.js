import { jsx as a, jsxs as S, Fragment as ye } from "react/jsx-runtime";
import * as Ge from "react";
import yt, { createContext as ir, useContext as Br, useState as R, useEffect as pe, useRef as rr, useCallback as T, useMemo as q, memo as Fn, useId as $a, createElement as kr } from "react";
import za from "@mui/material/Snackbar";
import Va from "@mui/material/Alert";
import Oe from "@mui/material/Button";
import Ga from "@mui/material/Dialog";
import qa from "@mui/material/DialogActions";
import ja from "@mui/material/DialogContent";
import Wa from "@mui/material/DialogContentText";
import Ua from "@mui/material/DialogTitle";
import * as at from "@mui/x-data-grid-premium";
import { GridFooterContainer as Ha, GridFooter as Ya, getGridDateOperators as En, useGridSelector as An, gridFilterModelSelector as Ka, useGridApiRef as Tn, GridActionsCellItem as Ar, DataGridPremium as In, GridToolbarExportContainer as _a, Toolbar as Ja, ColumnsPanelTrigger as Za, FilterPanelTrigger as Qa, GRID_CHECKBOX_SELECTION_COL_DEF as Xa, getGridStringOperators as eo, getGridBooleanOperators as to, useGridApiContext as ro, gridRowSelectionStateSelector as no } from "@mui/x-data-grid-premium";
import Mn from "@mui/icons-material/Delete";
import ao from "@mui/icons-material/FileCopy";
import oo from "@mui/icons-material/Article";
import On from "@mui/icons-material/Edit";
import nt from "@mui/material/Box";
import Nt from "@mui/material/Typography";
import lr from "@mui/material/TextField";
import { useTranslation as wt, withTranslation as io } from "react-i18next";
import { Typography as Ne, Dialog as lo, DialogTitle as so, Grid as xe, DialogContent as co, Card as uo, CardContent as po, Breadcrumbs as fo, Link as ho, Button as ct, IconButton as Lt, Box as Ee, FormControl as Ct, Select as Tr, MenuItem as Ke, Tooltip as xt, Menu as mo, List as go, ListItemButton as vr, ListItemIcon as Dr, ListItem as bo, ListItemText as yo, TextField as ut, FormControlLabel as dt, Checkbox as Co, Stack as hn, InputLabel as mn, Badge as xo, FormHelperText as pt, useTheme as vt, Input as wo, FilledInput as vo, OutlinedInput as Do, InputAdornment as Rn, RadioGroup as Nr, Radio as bt, styled as So, Avatar as Po, CircularProgress as Fo, Divider as Eo } from "@mui/material";
import Ao from "@mui/icons-material/Check";
import Ir from "@mui/icons-material/Close";
import To from "@mui/icons-material/Help";
import { Replay as Io, Close as Mo, GridOn as Oo, TableChart as Sr, Code as Ro, Language as Bo, DataObject as ko } from "@mui/icons-material";
import ee from "dayjs";
import Bn from "dayjs/plugin/utc";
import No from "dayjs/plugin/timezone";
import { DatePicker as kn } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as Nn } from "@mui/x-date-pickers/DateTimePicker";
import Lr from "dayjs/plugin/utc.js";
import { LocalizationProvider as Ln } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as $n } from "@mui/x-date-pickers/AdapterDayjs";
import Mr from "@mui/icons-material/Add";
import Lo from "@mui/icons-material/Remove";
import $o from "@mui/icons-material/FilterListOff";
import zo from "@mui/icons-material/ViewColumn";
import Vo from "@mui/icons-material/FilterList";
import { styled as sr } from "@mui/material/styles";
import Go from "@mui/icons-material/Save";
import gn from "@mui/icons-material/Settings";
import qo from "@mui/icons-material/Refresh";
import { useFormik as zn } from "formik";
import * as he from "yup";
import { DateTimePicker as jo, DatePicker as Wo } from "@mui/x-date-pickers";
import Vn from "@mui/material/MenuItem";
import Uo from "@mui/icons-material/History";
import Ho from "@mui/icons-material/FileDownload";
import Gn from "@mui/material/Checkbox";
import Yo from "@mui/material/Paper";
import Ko from "@mui/material/Stack";
import _o from "@mui/material/CircularProgress";
import Jo from "@mui/material/FormControlLabel";
import { NumberField as nr } from "@base-ui/react/number-field";
import Zo from "@mui/icons-material/KeyboardArrowUp";
import qn from "@mui/icons-material/KeyboardArrowDown";
import Qo from "@mui/icons-material/VisibilityOff";
import Xo from "@mui/icons-material/Visibility";
import { TimePicker as ei } from "@mui/x-date-pickers/TimePicker";
import ti from "@mui/icons-material/Clear";
import cr from "@mui/material/FormControl";
import ri from "@mui/material/InputLabel";
import ni from "@mui/material/Select";
import Pr from "@mui/material/Grid";
import jn from "@mui/material/Autocomplete";
import ai from "@mui/material/Stepper";
import oi from "@mui/material/Step";
import ii from "@mui/material/StepLabel";
import { grey as li } from "@mui/material/colors";
import si from "@emotion/styled";
import ci from "@mui/material/Chip";
import { SimpleTreeView as ui } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as bn } from "@mui/x-tree-view/TreeItem";
import di from "@mui/material/Input";
import pi from "@mui/material/Tab";
import fi from "@mui/material/Tabs";
const Wn = ir(null), hi = "bottom", mi = "center", gi = yt.forwardRef(function(r, t) {
  return /* @__PURE__ */ a(Va, { elevation: 6, ref: t, variant: "filled", ...r });
}), Fc = ({ children: e }) => {
  const [r, t] = R(null), [n, o] = R(!1), [l, s] = R(null), [u, f] = R(null), y = function(c, m, w = "info", x) {
    typeof c != "string" && (c = c.toString()), m && typeof m != "string" && (m = m.toString()), t(m ? `${c}: ${m}` : c), s(w), o(!0), f(x);
  }, C = function(c, m, w = "error", x) {
    y(c, m, w, x);
  }, h = function() {
    o(!1), f(null), u && u();
  };
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(
      Wn.Provider,
      {
        value: { showMessage: y, showError: C },
        children: e
      }
    ),
    /* @__PURE__ */ a(za, { open: n, autoHideDuration: 6e3, onClose: h, anchorOrigin: { vertical: hi, horizontal: mi }, children: /* @__PURE__ */ a(gi, { severity: l, children: r }) })
  ] });
}, Dt = function() {
  return Br(Wn);
}, _e = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: n, okText: o, cancelText: l, yesNo: s = !1, children: u, maxWidth: f = "sm", fullWidth: y = !0, ...C }) => (o = o || (s ? "Yes" : "Ok"), l = l || (s ? "No" : "Cancel"), /* @__PURE__ */ S(
  Ga,
  {
    ...C,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: f,
    fullWidth: y,
    children: [
      /* @__PURE__ */ a(Ua, { id: "alert-dialog-title", sx: { fontSize: u ? "inherit" : "1.25rem" }, children: t }),
      u && /* @__PURE__ */ a(ja, { dividers: !0, children: /* @__PURE__ */ a(Wa, { children: u }) }),
      (n || r) && /* @__PURE__ */ S(qa, { children: [
        n && /* @__PURE__ */ a(Oe, { onClick: n, children: l }),
        r && /* @__PURE__ */ a(Oe, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Fr = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Un = (e) => {
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
}, Hn = async (e) => {
  const {
    method: r = "GET",
    url: t,
    data: n,
    headers: o = {},
    credentials: l = "include",
    ...s
  } = e, u = {
    method: r,
    credentials: l,
    headers: {
      ...o
    },
    ...s
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete u.headers["Content-Type"], u.body = n instanceof FormData ? n : Un(n)) : (u.headers["Content-Type"] = o["Content-Type"] || "application/json", u.body = typeof n == "string" ? n : JSON.stringify(n)));
  const f = await fetch(t, u), y = f.headers.get("content-type") || {};
  return {
    status: f.status,
    data: y.includes("application/json") ? await f.json() : await f.text(),
    headers: Object.fromEntries(f.headers.entries())
  };
}, $t = (e) => e?.message || e?.info || e?.error || e?.err, Le = Object.freeze({
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
}), rt = async ({
  url: e,
  params: r = {},
  history: t,
  jsonPayload: n = !1,
  method: o = "POST",
  signal: l,
  additionalParams: s = {},
  additionalHeaders: u = {},
  dataParser: f = Le.raw,
  onParseError: y
}) => {
  if (r.exportData)
    return bi(e, r);
  const C = {
    method: o,
    credentials: "include",
    url: e,
    headers: n ? { ...u } : { "Content-Type": "multipart/form-data", ...u },
    ...l && { signal: l },
    ...s
  };
  r && Object.keys(r).length > 0 && (C.data = n ? r : Un(r));
  try {
    const h = await Hn(C);
    let c = h.data;
    if (h.status === Fr.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (h.status === Fr.FORBIDDEN)
      return { error: !0, message: c.message || "Access Denied!" };
    if (h.status !== Fr.OK)
      return { error: !0, message: c.message || "An error occurred" };
    try {
      c = f(c);
    } catch (m) {
      return y ? y(m, c) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: m.message,
        rawData: c
      };
    }
    return c;
  } catch (h) {
    return h.name === "AbortError" ? { error: !0, aborted: !0, message: h.message || "Request aborted" } : { error: !0, message: h.message || "Network error" };
  }
}, yi = ["date", "dateTime"], Ci = ["singleSelect"], xi = 1e6;
function wi(e) {
  const { operator: r, value: t, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(r), l = t != null && (t !== "" || n === "number" && t === 0 || n === "boolean" && t === !1);
  return o || l;
}
const vi = ({ gridColumns: e, page: r, pageSize: t, sortModel: n, filterModel: o, baseFilters: l, action: s = "list", extraParams: u = {}, model: f, api: y }) => {
  const C = s === "export" && f.isElasticExport === !0, h = [], c = [], m = [];
  e.forEach(({ lookup: D, type: N, field: B, localize: E = !1, filterable: L = !0, dependsOn: re }) => {
    yi.includes(N) && m.push({ field: B, localize: E }), D && !h.includes(D) && Ci.includes(N) && L && (h.push(D), c.push({ lookup: D, dependsOn: re }));
  });
  const w = [];
  o?.items?.length && o.items.forEach((D) => {
    if (wi(D)) {
      const { field: N, operator: B, filterField: E } = D;
      let { value: L } = D;
      const H = e.filter((W) => W?.field === D.field)[0]?.type;
      H === "boolean" ? L = L === "true" || L === !0 ? 1 : 0 : H === "number" && (L = Array.isArray(L) ? L.filter((W) => W) : L), L = D.filterValues || L, w.push({
        field: E || N,
        operator: B,
        value: L,
        type: H
      });
    }
  }), l && Array.isArray(l) && w.push(...l);
  const x = {
    start: r * t,
    limit: C ? f.exportSize || xi : t,
    ...u,
    logicalOperator: o.logicOperator,
    sort: n.map((D) => (D.filterField || D.field) + " " + D.sort).join(","),
    where: w,
    isElasticExport: C,
    model: f.module,
    fileName: f.overrideFileName
  };
  h.length && (x.lookups = h.join(",")), c.length && (x.lookupWithDeps = JSON.stringify(c)), f?.limitToSurveyed && (x.limitToSurveyed = f?.limitToSurveyed);
  let g = `${y}/${s}`;
  const i = new URLSearchParams();
  u.template && i.append("template", u.template), u.configFileName && i.append("configFileName", u.configFileName);
  const v = i.toString();
  return v && (g += `?${v}`), { requestData: x, url: g, where: w, dateColumns: m };
}, Or = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: n = {}, action: o = "list", model: l, signal: s } = e, { requestData: u, url: f, where: y, dateColumns: C } = vi(e);
  if (r) {
    u.responseType = r, u.columns = t, u.userTimezoneOffset = -(/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof l.createRequestPayload == "function" && await l.createRequestPayload(u, { where: y, url: f, dataParsers: Le, ...e });
    const m = document.createElement("form");
    if (m.setAttribute("method", "POST"), m.setAttribute("id", "exportForm"), m.setAttribute("target", "_blank"), !n.template)
      for (const w in u) {
        let x = u[w];
        if (x == null)
          continue;
        typeof x != "string" && (x = JSON.stringify(x));
        const g = document.createElement("input");
        g.type = "hidden", g.name = w, g.value = x, m.append(g);
      }
    m.setAttribute("action", u.url || f), document.body.appendChild(m), m.submit(), setTimeout(() => {
      m.remove();
    }, 0);
    return;
  }
  const h = {
    url: f,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0,
    params: u,
    dataParser: Le.json,
    signal: s
  };
  typeof l.createRequestPayload == "function" && await l.createRequestPayload(h, { where: y, dataParsers: Le, ...e });
  const c = await rt(h);
  if (c?.aborted)
    return c;
  if (c?.error || c?.success === !1)
    throw new Error($t(c) || "An error occurred while fetching data");
  return typeof l.parseResponsePayload == "function" && l.parseResponseActions.includes(o) ? await l.parseResponsePayload({ responseData: c, model: l, dateColumns: C, action: o, ...e }) : (c.records.forEach((m) => {
    C.forEach((w) => {
      const { field: x, localize: g } = w;
      if (m[x] && (m[x] = new Date(m[x]), !g)) {
        const i = m[x].getTimezoneOffset() * 6e4;
        m[x] = new Date(m[x].getTime() + i);
      }
    }), l.columns.forEach(({ field: w, displayIndex: x }) => {
      x && (m[w] = m[x]);
    });
  }), c);
}, ar = async (e = {}) => {
  let { api: r, id: t, model: n, parentFilters: o, where: l = {} } = e;
  r = r || n.api;
  const s = new URLSearchParams(), u = `${r}/${t ?? "-"}`, f = [];
  (n.formDef || n.columns)?.forEach((i) => {
    i.lookup && !f.includes(i.lookup) && !i.dependsOn && f.push(i.lookup);
  }), s.set("lookups", f), l && Object.keys(l)?.length && s.set("where", JSON.stringify(l));
  const C = {
    url: `${u}?${s.toString()}`,
    method: "GET",
    jsonPayload: !0
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(C, { action: "load", dataParsers: Le, ...e });
  const h = await rt(C);
  if (h?.error || h?.success === !1)
    throw new Error($t(h) || "Load failed");
  if (typeof n.parseResponsePayload == "function" && n.parseResponseActions.includes("load"))
    return await n.parseResponsePayload({ responseData: h, model: n, action: "load", ...e });
  const { data: c, lookups: m } = h || {};
  let w = c[n.linkColumn];
  const x = n.columns.find((i) => i.field === n.linkColumn);
  if (x && x.lookup && m && m[x.lookup] && m[x.lookup]?.length) {
    const i = m[x.lookup].find((v) => v.value === w);
    i && (w = i.label);
  }
  const g = { ...n.defaultValues };
  return { id: t, title: w, record: { ...g, ...c, ...o }, lookups: m };
}, $r = async function(e = {}) {
  const { id: r, api: t, model: n } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${t}/${r}`,
    method: "DELETE"
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(o, { action: "delete", dataParsers: Le, ...e });
  const l = await rt(o);
  if (l?.error || l?.success === !1)
    throw new Error($t(l) || "Delete failed");
  return !0;
}, zr = async function(e = {}) {
  const { id: r, api: t, values: n, model: o } = e;
  let l, s;
  r !== 0 ? (l = `${t}/${r}`, s = "PUT") : (l = t, s = "POST");
  const u = {
    url: l,
    method: s,
    params: n,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(u, { action: "save", dataParsers: Le, ...e });
  const f = await rt(u);
  if (f?.error || f?.success === !1)
    throw new Error($t(f) || "Save failed");
  return f;
}, Yn = async (e = {}) => {
  let { api: r, model: t, lookups: n, scopeId: o, reqData: l } = e;
  r = r || t.api;
  const s = new URLSearchParams(), u = `${r}/lookups`;
  s.set("lookups", n), s.set("scopeId", o);
  const f = {
    url: `${u}?${s.toString()}`,
    method: "GET",
    jsonPayload: !0,
    ...l
  };
  typeof t.createRequestPayload == "function" && await t.createRequestPayload(f, { action: "lookups", dataParsers: Le, ...e });
  const y = await rt(f);
  if (y?.error || y?.success === !1)
    throw new Error($t(y) || "Could not load lookups");
  return typeof t.parseResponsePayload == "function" && t.parseResponseActions.includes("lookups") ? await t.parseResponsePayload({ responseData: y, model: t, action: "lookups", ...e }) : y;
}, Ec = {
  getList: Or,
  getRecord: ar,
  deleteRecord: $r,
  saveRecord: zr,
  getLookups: Yn
}, Di = ({ pagination: e, apiRef: r, tTranslate: t = (n) => n }) => {
  const n = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, l = r.current.state.rows.totalRowCount, s = Math.ceil(l / o), { t: u, i18n: f } = wt(), y = { t: u, i18n: f }, [C, h] = R(n + 1), c = function(x) {
    let g = x.target?.value;
    g === "" ? h("") : (g = parseInt(g), g = isNaN(g) || g < 1 ? 1 : g, h(g));
  };
  pe(() => {
    h(n + 1);
  }, [n, o]);
  const m = function() {
    let x = C === "" ? 1 : C;
    x = Math.max(x, 1), x = Math.min(x, s), r.current.setPage(x - 1), h(x), C === "" && h(1);
  }, w = (x) => {
    const g = x.which || x.keyCode, i = String.fromCharCode(g);
    /\d/.test(i) || x.preventDefault();
  };
  return /* @__PURE__ */ S(Ha, { children: [
    /* @__PURE__ */ a(nt, { sx: { pl: 5 }, children: e && /* @__PURE__ */ S(ye, { children: [
      /* @__PURE__ */ S(Nt, { variant: "p", children: [
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
          disabled: !l
        }
      ),
      /* @__PURE__ */ a(Oe, { disabled: !l, size: "small", onClick: m, children: t("Go", y) })
    ] }) }),
    /* @__PURE__ */ a(Ya, {})
  ] });
}, Si = /\${((\w+)\.)?(\w+)}/g, Pi = function(e, r, { template: t = Si, keepMissingTags: n = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, l, s, u) {
    const f = s ? r[s] || {} : r;
    return f[u] === void 0 ? n ? o : "" : f[u];
  });
}, Xt = {
  replaceTags: Pi
};
function yn({ variant: e = "h2", component: r = "h2", text: t = "", name: n = null, ...o }) {
  return /* @__PURE__ */ S(Ne, { variant: e, component: r, ...o, children: [
    t,
    n && ` ${n}`
  ] });
}
function Fi(e = !1) {
  const r = l(), [t, n] = R(r);
  function o() {
    setTimeout(() => {
      n(l());
    }, 10);
  }
  pe(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function l() {
    let s = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const u = !!s.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    s = s.toLowerCase();
    const f = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(s);
    let y = null;
    return window.innerWidth <= window.innerHeight ? y = "portrait" : y = "landscape", { mobile: u, tablet: f, portrait: y === "portrait", landscape: y === "landscape" };
  }
  return e ? t.mobile : t;
}
const Ei = {
  Jumptopage: "Gå til side",
  Go: "Gå",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "I dette rum vil vi snart bringe dig et dashboard med hovedoversigt KPIer for nem adgang",
  Pages: "sider",
  MuiTablePagination: {
    labelRowsPerPage: "Rækker pr. side"
  }
}, Ai = {
  ...at.daDK,
  ...Ei
}, Ti = {
  Jumptopage: "Zur Seite springen",
  Go: "Gehen",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In diesem Bereich werden wir Ihnen in Kürze ein Dashboard mit den wichtigsten Übersichts-KPIs für einen einfachen Zugriff bereitstellen",
  Pages: "Seiten",
  MuiTablePagination: {
    labelRowsPerPage: "Zeilen pro Seite"
  }
}, Ii = {
  ...at.deDE,
  ...Ti
}, Mi = {
  Jumptopage: "Μετάβαση στη σελίδα",
  Go: "Πηγαίνω",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Σε αυτόν τον χώρο θα σας φέρουμε σύντομα έναν πίνακα ελέγχου βασικών επισκόπησης KPI για εύκολη πρόσβαση",
  Pages: "Σελίδες",
  MuiTablePagination: {
    labelRowsPerPage: "Σειρές ανά σελίδα"
  }
}, Oi = {
  ...at.elGR,
  ...Mi
}, Ri = {
  Jumptopage: "Saltar a la página",
  Go: "Ir",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "En este espacio pronto le ofreceremos un panel con los principales KPI generales para un fácil acceso.",
  Pages: "paginas",
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página"
  }
}, Bi = {
  ...at.esES,
  ...Ri
}, ki = {
  Jumptopage: "Aller à la page",
  Go: "Aller",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Dans cet espace, nous vous proposerons bientôt un tableau de bord des principaux KPI pour un accès facile.",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Lignes par page"
  }
}, Ni = {
  ...at.frFR,
  ...ki
}, Li = {
  Jumptopage: "Vai alla pagina",
  Go: "Andare",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In questo spazio presto ti forniremo una dashboard con i principali KPI generali per un facile accesso",
  Pages: "Pagine",
  MuiTablePagination: {
    labelRowsPerPage: "Righe per pagina"
  }
}, $i = {
  ...at.itIT,
  ...Li
}, zi = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, Vi = {
  ...at.trTR,
  ...zi
}, Gi = {
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
}, qi = {
  Jumptopage: "Jump to page",
  Go: "Go",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "In this space we will soon bring you a dashboard of main overview KPIs for easy access",
  Pages: "Pages",
  MuiTablePagination: {
    labelRowsPerPage: "Rows per page"
  }
}, ji = {
  ...at.enUS,
  ...qi
}, Wi = {
  en: ji,
  "tr-TR": Vi,
  "es-ES": Bi,
  "da-DK": Ai,
  "de-DE": Ii,
  "el-GR": Oi,
  "fr-FR": Ni,
  "pt-PT": Gi,
  "it-IT": $i
};
ee.extend(Bn);
ee.extend(No);
const Kn = ir(), _n = ir(null), Cn = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Ac = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, n] = R("en"), [o, l] = R("MM/DD/YYYY hh:mm:ss A"), [s, u] = R(null), [f, y] = R(null), [C, h] = R(null), [c, m] = R(null), [w, x] = R(""), [g, i] = R(!1), { t: v, i18n: D } = wt(), N = Dt(), B = rr(r), E = T((P, O) => {
    B.current[P] = O;
  }, []), L = T((P) => B.current[P || "default"] || "", []), re = T((P, O) => `${B.current[O || "default"] || ""}${P}`, []), H = T((P = !0) => {
    i(P);
  }, []), W = T((P, O, U) => {
    if (U != null) {
      const G = U;
      let X = P ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return G && (X = G.split(" "), X[0] = X[0].toUpperCase(), P ? X = X[0] : O ? X = X[0].toUpperCase() : (X[1] += X[1].includes(":ss") ? "" : ":ss", X = X.join(" "))), X;
    }
    return P?.split(" ")[0] || "DD-MM-YYYY";
  }, []), te = T(({ value: P, useSystemFormat: O, showOnlyDate: U = !1, state: G, timeZone: X, localize: oe = !1 }) => {
    if (!P) return "-";
    const Se = W(O, U, G);
    return oe ? X ? ee(P).tz(X).format(Se) : ee(P).format(Se) : ee.utc(P).format(Se);
  }, [W]), Q = T(() => {
    const P = t, O = Wi[P];
    function U(G) {
      return P === "pt-PT" || P === "ptPT" ? O.components.MuiDataGrid.defaultProps.localeText[G] || G : O[G] || G;
    }
    return { getLocalizedString: U };
  }, [t]), I = T((P) => {
    n(P);
  }, []), ge = T((P) => {
    u(P);
  }, []), ae = T((P) => {
    h(P);
  }, []), me = T((P) => {
    m(P);
  }, []), ce = T((P) => {
    x(P);
  }, []), j = T((P) => {
    l(P);
  }, []), ue = T((P) => {
    y(P);
  }, []), $ = q(() => ({
    locale: t,
    dateTime: o,
    pageTitle: s,
    modal: f,
    pageBackButton: C,
    userData: c,
    timeZone: w
  }), [t, o, s, f, C, c, w]), we = q(() => ({
    // State data
    stateData: $,
    // Loader management
    isLoading: g,
    showLoader: H,
    // Snackbar utilities
    showMessage: N?.showMessage || Cn,
    showError: N?.showError || Cn,
    // i18n utilities
    dayjs: ee,
    t: v,
    i18n: D,
    // Date/time utilities
    systemDateTimeFormat: W,
    formatDate: te,
    useLocalization: Q,
    // API utilities
    getApiEndpoint: L,
    setApiEndpoint: E,
    buildUrl: re,
    // App-level state setters with meaningful names
    setLocale: I,
    setPageTitle: ge,
    setPageBackButton: ae,
    setUserData: me,
    setTimeZone: ce,
    setDateTimeFormat: j,
    setModal: ue
  }), [
    $,
    g,
    H,
    v,
    D,
    N,
    L,
    E,
    W,
    te,
    Q,
    I,
    ge,
    ae,
    me,
    ce,
    j,
    ue,
    re
  ]);
  return /* @__PURE__ */ a(Kn.Provider, { value: we, children: e });
}, Tc = _n.Provider, Vr = () => Br(_n), je = () => {
  const e = Br(Kn);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Ui = () => {
  const [e, r] = R(), [t, n] = R(!1), { stateData: o, setModal: l } = je(), s = o.modal, u = 16 / 9;
  let f = (window.outerWidth - 10) / window.innerWidth * 100;
  const y = () => {
    let h = document.getElementById("tutorial-iframe");
    h ? (h = h.offsetWidth, h = h / window.innerWidth) : h = 0.9;
    const c = window.innerWidth * h * (1 / u), m = window.innerHeight - 180;
    r(Math.min(c, m));
  };
  pe(() => {
    s?.status && (n(!0), y());
  }, [s, f]), pe(() => (window.addEventListener("resize", y), () => {
    window.removeEventListener("resize", y);
  }), []);
  function C() {
    const h = document.getElementById("tutorial-iframe");
    h.src = s?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: s?.status && /* @__PURE__ */ S(lo, { fullWidth: !0, maxWidth: "lg", open: s.status, onClose: () => {
    l({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(so, { className: "pt-2 pb-0", children: /* @__PURE__ */ S(xe, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ S(xe, { size: 11, children: [
        /* @__PURE__ */ S(Ne, { variant: "h7", component: "div", children: [
          " ",
          s?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(Ne, { variant: "caption", component: "div", children: s?.data?.subTitle || /* @__PURE__ */ a(ye, { children: " " }) })
      ] }),
      /* @__PURE__ */ S(xe, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(Io, { className: "cursor_pointer mt-2 mr-2", onClick: C }),
        /* @__PURE__ */ a(Mo, { className: "cursor_pointer mt-2", onClick: () => {
          l({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ S(co, { dividers: !0, children: [
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
function Hi({
  titleHeading: e,
  navigate: r,
  name: t = null,
  RightComponent: n = null,
  mobileRightComponent: o,
  title: l = "",
  titleClass: s = "text-theme-blue text-max-width",
  showBreadcrumbs: u,
  breadcrumbs: f = [],
  enableBackButton: y = !1,
  breadcrumbColor: C,
  showHelpButton: h = !1,
  model: c
}) {
  const m = Fi(!0), w = f.length - 1, x = u && f.length, { t: g, i18n: i } = wt(), v = q(() => ({ t: g, i18n: i }), [g, i]), D = c?.tTranslate ?? ((B) => B), N = () => {
    r(-1);
  };
  return pe(() => {
    l && (document.title = l);
  }, [l]), /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(yn, { className: "print-only", text: D(e, v) }),
    x && /* @__PURE__ */ S(ye, { children: [
      /* @__PURE__ */ a(uo, { sx: { mb: 3 }, children: /* @__PURE__ */ S(po, { sx: { backgroundColor: C || "#fff" }, children: [
        /* @__PURE__ */ S(xe, { container: !0, children: [
          /* @__PURE__ */ a(xe, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(fo, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${s} breadcrumbs-text-title text-max-width`, children: f.map((B, E) => E < w ? /* @__PURE__ */ a(ho, { onClick: N, className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: B.text }, E) : /* @__PURE__ */ a(Ne, { className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", children: B.text }, E)) }) }),
          y && /* @__PURE__ */ a(xe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(ct, { variant: "contained", onClick: N, children: D("Back", v) }) }),
          h && /* @__PURE__ */ a(xe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(Lt, { color: "primary", title: D("Help", v), size: "large", children: /* @__PURE__ */ a(To, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Ee, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: m ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          yn,
          {
            className: `${s} page-text-title`,
            variant: "p",
            text: D(e, v),
            name: t
          }
        ) }) }) }) }),
        !m && /* @__PURE__ */ S(ye, { children: [
          /* @__PURE__ */ S(Ee, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ S(Ee, { children: [
            " ",
            o,
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a(Ui, {})
    ] })
  ] });
}
const Jn = io()(Hi), qe = {
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
}, Zn = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: n = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = n.find((l) => l.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[qe.permissionsMapper.add],
    canEdit: t.edit && !!o[qe.permissionsMapper.edit],
    canDelete: t.delete && !!o[[qe.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
ee.extend(Lr);
const Yi = {
  date: kn,
  dateTime: Nn
}, Ki = "-10px", _i = "-16px", Ji = (e) => {
  const { fixedFilterFormat: r } = qe, { item: t, applyValue: n, convert: o, colDef: l } = e, { systemDateTimeFormat: s, stateData: u } = je(), f = e?.columnType || e?.type || l?.type || "date", y = r[f], C = l?.localize ?? e.localize ?? !1, h = (i) => {
    const v = ee(i);
    return v.isValid() && v.year() > 1900;
  }, c = s(f !== "dateTime", !1, u.dateTime), m = (i) => {
    if (!(f !== "date" && f !== "dateTime" || ((D) => typeof D != "string" ? !1 : !ee(D, c, !0).isValid())(i))) {
      if (o || C) {
        if (!i) {
          n({ ...t, value: null });
          return;
        }
        i = ee(i).utc(), n({ ...t, value: i });
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
      const v = i.split("-");
      return v.length === 3 ? v[1] : null;
    }
  }, x = Yi[f], g = t?.value ? ee(t.value) : null;
  return /* @__PURE__ */ a(Ln, { dateAdapter: $n, children: /* @__PURE__ */ a(
    x,
    {
      fullWidth: !0,
      format: c,
      value: g,
      onChange: m,
      slotProps: {
        textField: {
          variant: "standard",
          label: e.label,
          sx: {
            marginTop: Ki,
            marginBottom: _i,
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
}, Er = (e) => En().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ a(Ji, { ...t, ...e }) : void 0
})), Zi = {
  IsAnyOf: "isAnyOf"
}, Qi = (e) => {
  const { column: r, item: t, applyValue: n, apiRef: o } = e, l = r?.dataRef?.current?.lookups;
  let s = r.customLookup || l[r.lookup] || [];
  typeof r.lookup == "string" && (s = s.map(({ label: h, value: c }) => ({
    label: h,
    value: c
  })));
  const u = An(o, Ka), f = q(
    () => u.items?.filter((h) => h.field === r.field),
    [r.field, u.items]
  ), y = T(
    (h) => {
      let c = h.target.value;
      if (u.items.length >= 1) {
        c = c.length === 1 ? c[0] : c;
        for (const x of u.items)
          x.field === t.field && (x.operator === Zi.IsAnyOf ? c = Array.isArray(c) ? c : [c] : c = c === 0 ? "0" : c);
      }
      if (c.length === 0 && f[0]) {
        o.current.deleteFilterItem(f[0]);
        return;
      }
      const m = c, w = f[0] ? f[0] : t;
      n({ ...w, value: m });
    },
    [o, r.applyZeroFilter, f, t, n]
  ), C = f[0]?.value ?? "";
  return /* @__PURE__ */ a(Ct, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    Tr,
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
      children: s?.map((h, c) => /* @__PURE__ */ a(Ke, { value: h.value, children: e.tTranslate(h.label, e.tOpts) }, c))
    }
  ) });
}, Ye = {
  Edit: "Edit",
  Delete: "Delete"
}, Be = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, Xi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, el = { pageSize: 50, page: 0 }, tl = [5, 10, 20, 50, 100], rl = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: n, tOpts: o }) => {
  const { getApiEndpoint: l } = je(), s = l("GridPreferenceManager"), u = Tn(), f = Dt(), [y, C] = R(Be.NONE), [h, c] = R(null), [m, w] = R(!1), [x, g] = R({}), [i, v] = R(null), [D, N] = R(null), B = q(
    () => i == null ? [] : i.filter((P) => P.prefId !== 0),
    [i]
  ), E = q(() => [
    { field: "prefName", type: "string", width: 300, headerName: n("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: n("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: n("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ar, { icon: /* @__PURE__ */ a(xt, { title: Ye.Edit, children: /* @__PURE__ */ a(On, {}) }), tabIndex: 1, "data-action": Ye.Edit, label: n("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ar, { icon: /* @__PURE__ */ a(xt, { title: Ye.Delete, children: /* @__PURE__ */ a(Mn, {}) }), tabIndex: 2, "data-action": Ye.Delete, label: n("Delete", o), color: "error" }, 2)] }
  ], [n, o]), L = q(() => he.object({
    prefName: he.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: he.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), re = (P) => c(P?.currentTarget), H = () => c(null), W = () => {
    C(Be.NONE), H();
  }, te = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), N(null), t && t(null), H());
  }, Q = T(async ({ applyDefault: P = !1 }) => {
    const O = await rt({
      url: s,
      params: { action: "list", id: r },
      dataParser: Le.json
    });
    if (!O?.preferences) {
      f.showMessage(n("Failed to load preferences.", o)), t && t(null);
      return;
    }
    const U = O.preferences.filter((G) => G.prefName.trim() !== "");
    if (v(U), P) {
      const G = U.find((X) => X.isDefault);
      if (G)
        return { defaultPrefId: G.prefId, preferences: U };
      t && t(null);
    }
    return { preferences: U };
  }, [s, r, f, n, o, t]), I = T(async (P, O = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), P === 0) {
      te();
      return;
    }
    const U = O || i;
    if (!U) {
      f.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const G = U.find((oe) => oe.prefId === P);
    if (!G?.prefValue) {
      f.showMessage(n("Failed to load preference.", o));
      return;
    }
    let X;
    try {
      X = typeof G.prefValue == "string" ? JSON.parse(G.prefValue) : G.prefValue;
    } catch {
      f.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(X), N(G.prefName), t && t(G.prefName), H();
  }, [e, te, i, t, f, n, o]), ge = async (P) => {
    const O = P.prefName.trim(), U = O.toLocaleLowerCase();
    if (i.find((X) => X.prefName.toLocaleLowerCase() === U && X.prefId !== P.prefId)) {
      w(!0);
      return;
    }
    const G = await rt({
      url: s,
      params: {
        action: "save",
        id: r,
        prefId: P.prefId,
        prefName: O,
        prefDesc: P.prefDesc,
        prefValue: JSON.stringify(e.current.exportState()),
        isDefault: P.isDefault
      },
      dataParser: Le.json
    });
    if (G === !0 || G?.success === !0) {
      f.showMessage(n(`Preference ${y === Be.ADD ? "added" : "saved"} successfully.`, o)), W(), await Q({ applyDefault: !1 });
      return;
    }
    f.showMessage(n("Error saving preference: ", o) + (G?.message || n("Unknown error", o)));
  }, ae = async () => {
    const P = await rt({
      url: s,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: Le.json
    });
    if (P === !0 || P?.success === !0) {
      f.showMessage(n("Preference deleted successfully.", o)), await Q({ applyDefault: !1 }), g({});
      return;
    }
    f.showMessage(n("Error deleting preference: ", o) + (P?.message || n("Unknown error", o)));
  }, me = (P) => {
    const O = P.field === "editAction" ? Ye.Edit : P.field === "deleteAction" ? Ye.Delete : null;
    if (P.id === 0 && O) {
      f.showMessage(n(`Default preference cannot be ${O === Ye.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    O === Ye.Edit && (C(Be.EDIT), j.setValues(P?.row)), O === Ye.Delete && g({
      prefId: P.id,
      preferenceName: P.row.prefName
    });
  }, ce = (P) => {
    C(P), H(), P === Be.ADD && j.resetForm();
  }, j = zn({
    initialValues: Xi,
    validationSchema: L,
    onSubmit: ge,
    mode: "onBlur"
  });
  pe(() => {
    if (!r) return;
    (async () => {
      const O = await Q({ applyDefault: !0 });
      O?.defaultPrefId && O?.preferences && await I(O.defaultPrefId, O.preferences);
    })();
  }, [r]);
  const ue = q(() => ({
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
    paginationDisplayedRows: ({ from: P, to: O, count: U }) => `${P}–${O} ${n("of", o)} ${U}`,
    toolbarQuickFilterLabel: n("Search", o),
    columnsManagementSearchTitle: n("Search", o),
    columnsManagementNoColumns: n("No columns", o)
  }), [n, o]), $ = y === Be.MANAGE, we = y === Be.ADD || y === Be.EDIT;
  return /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ S(
      ct,
      {
        id: "grid-preferences-btn",
        "aria-controls": h ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": h ? "true" : void 0,
        onClick: re,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(gn, {}),
        children: [
          n("Preferences", o),
          " ",
          D && `(${D})`
        ]
      }
    ),
    /* @__PURE__ */ S(
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
          /* @__PURE__ */ S(Ke, { component: vr, dense: !0, onClick: () => ce(Be.ADD), children: [
            /* @__PURE__ */ a(Dr, { children: /* @__PURE__ */ a(Mr, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ S(Ke, { component: vr, dense: !0, onClick: () => ce(Be.MANAGE), children: [
            /* @__PURE__ */ a(Dr, { children: /* @__PURE__ */ a(gn, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ S(Ke, { component: vr, dense: !0, divider: i?.length > 0, onClick: () => I(0), children: [
            /* @__PURE__ */ a(Dr, { children: /* @__PURE__ */ a(qo, {}) }),
            n("Reset to Default", o)
          ] }),
          i?.length > 0 && i?.map((P) => {
            const { prefName: O, prefDesc: U, prefId: G } = P;
            return /* @__PURE__ */ a(
              Ke,
              {
                onClick: () => I(G),
                component: bo,
                selected: D === O,
                title: n(U, o),
                dense: !0,
                children: /* @__PURE__ */ a(yo, { primary: O })
              },
              `pref-item-${G}`
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ S(
      _e,
      {
        open: y !== Be.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ S(Ne, { variant: "h5", children: [
          y,
          " ",
          n($ ? "Preferences" : "Preference", o)
        ] }),
        maxWidth: $ ? "md" : "sm",
        fullWidth: !0,
        children: [
          we && /* @__PURE__ */ S(
            xe,
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
                /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ a(
                  ut,
                  {
                    value: j.values.prefName,
                    variant: "outlined",
                    size: "small",
                    margin: "dense",
                    label: /* @__PURE__ */ S("span", { children: [
                      n("Preference Name", o),
                      " ",
                      /* @__PURE__ */ a("span", { style: { color: "red" }, children: "*" })
                    ] }),
                    autoFocus: !0,
                    name: "prefName",
                    onChange: j.handleChange,
                    error: !!j.errors.prefName,
                    helperText: j.errors.prefName,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ a(
                  ut,
                  {
                    value: j.values.prefDesc,
                    variant: "outlined",
                    multiline: !0,
                    rows: 2,
                    size: "small",
                    margin: "dense",
                    label: n("Preference Description", o),
                    name: "prefDesc",
                    onChange: j.handleChange,
                    error: !!j.errors.prefDesc,
                    helperText: j.errors.prefDesc,
                    fullWidth: !0
                  }
                ) }),
                /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ a(
                  dt,
                  {
                    control: /* @__PURE__ */ a(
                      Co,
                      {
                        checked: j.values.isDefault,
                        name: "isDefault",
                        onChange: j.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ S(hn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    ct,
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
                    ct,
                    {
                      type: "button",
                      startIcon: /* @__PURE__ */ a(Ir, {}),
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
          $ && /* @__PURE__ */ S(xe, { container: !0, rowGap: 2, children: [
            /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ a(
              In,
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
                columns: E,
                pageSizeOptions: tl,
                pagination: !0,
                rowCount: B.length,
                rows: B,
                getRowId: (P) => P.GridPreferenceId,
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
                    paginationModel: el
                  }
                },
                localeText: ue
              }
            ) }),
            /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ a(hn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
              ct,
              {
                type: "button",
                startIcon: /* @__PURE__ */ a(Ir, {}),
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
    /* @__PURE__ */ S(
      _e,
      {
        open: m,
        onConfirm: () => w(!1),
        title: "",
        okText: n("Ok", o),
        cancelText: "",
        children: [
          '"',
          j.values.prefName.trim(),
          '": ',
          n("name already in use, please use another name.", o)
        ]
      }
    ),
    /* @__PURE__ */ S(
      _e,
      {
        open: !!x.preferenceName,
        onConfirm: ae,
        onCancel: () => g({}),
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
}, nl = (e, r, t) => typeof e !== r.string ? [] : e.split(",").map((n) => {
  t.lastIndex = 0;
  const o = t.exec(n);
  if (!o) return null;
  const [, l, s = "ASC"] = o;
  return {
    field: l.trim(),
    sort: s.trim().toLowerCase()
  };
}).filter(Boolean), st = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: n, type: o, isPivotExport: l = !1, icon: s }) => /* @__PURE__ */ S(
  Vn,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": l,
    children: [
      /* @__PURE__ */ a(nt, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: s }),
      e(o, r)
    ]
  }
), al = ({ exportFormats: e, customExportOptions: r, ...t }) => /* @__PURE__ */ S(_a, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Oo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Sr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Sr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Ro, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Bo, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(ko, { fontSize: "small" }), type: "JSON", contentType: "application/json" }),
  Array.isArray(r) && r.map((n, o) => /* @__PURE__ */ a(
    st,
    {
      ...t,
      icon: n.icon || /* @__PURE__ */ a(Sr, { fontSize: "small" }),
      type: n.label || "Excel",
      contentType: n.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      handleExport: n.handleExport || t.handleExport
    },
    n.key || o
  ))
] }), Qn = (e, r) => {
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
}, ol = (e = {}, r = {}) => {
  let t = !0;
  for (const n in e)
    e[n] !== r[n] && (t = !1);
  for (const n in r)
    n in e || (t = !1);
  return t;
};
ee.extend(Lr);
const il = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: n,
  tTranslate: o,
  tOpts: l
}) => {
  const { systemDateTimeFormat: s, stateData: u } = je(), { fixedFilterFormat: f } = qe, y = q(() => r?.items?.find((g) => g.field === e.field), [r, e.field]), C = y?.operator || e.toolbarFilter?.defaultOperator || Qn(e.type), h = C === "isAnyOf", c = q(() => {
    if (["isEmpty", "isNotEmpty"].includes(C))
      return "";
    if (!y)
      return h ? [] : "";
    const g = y.value;
    return g ?? (h ? [] : "");
  }, [y, h]), m = T((g) => {
    t((i) => {
      const v = i?.items || [];
      if (g === "" || g === null || Array.isArray(g) && g.length === 0) {
        const B = v.filter((E) => E.field !== e.field);
        return {
          ...i,
          items: B
        };
      }
      const D = {
        field: e.field,
        operator: C,
        value: g,
        type: e.type
      }, N = v.filter((B) => B.field !== e.field);
      return {
        ...i,
        items: [...N, D]
      };
    });
  }, [e, t]), w = T((g, i) => i === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[g] || g : i === "string" ? {
    contains: "contains",
    equals: "exact match",
    startsWith: "starts with",
    endsWith: "ends with",
    isEmpty: "is empty",
    isNotEmpty: "is not empty"
  }[g] || g : {
    is: "is",
    not: "is not",
    isAnyOf: "any of",
    after: "after",
    onOrAfter: "on or after",
    before: "before",
    onOrBefore: "on or before"
  }[g] || g, []);
  return (() => {
    const g = e.toolbarFilter?.label || e.headerName || e.label || e.field, i = w(C, e.type), D = e.type === "number" || e.type === "string" && C !== "startsWith" ? e.type === "number" ? `${i} ${g}` : `${g} (${i})` : g;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          ut,
          {
            variant: "standard",
            label: o(D, l),
            value: c,
            onChange: (I) => m(I.target.value),
            type: "text",
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "number":
        return /* @__PURE__ */ a(
          ut,
          {
            variant: "standard",
            label: o(D, l),
            value: c,
            onChange: (I) => m(I.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const I = c === "" || c === void 0 || c === null ? "" : c === !0 || c === "true" ? "true" : c === !1 || c === "false" ? "false" : "";
        return /* @__PURE__ */ S(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(mn, { children: o(D, l) }),
          /* @__PURE__ */ S(
            Tr,
            {
              value: I,
              onChange: (ge) => {
                const ae = ge.target.value;
                let me;
                ae === "" ? me = "" : ae === "true" ? me = !0 : ae === "false" ? me = !1 : me = ae, m(me);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(Ke, { value: "", children: o("All", l) }),
                /* @__PURE__ */ a(Ke, { value: "true", children: o("True", l) }),
                /* @__PURE__ */ a(Ke, { value: "false", children: o("False", l) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const N = e.customLookup || n?.[e.lookup] || [], B = typeof e.lookup == "string" ? N.map((I) => ({
          label: I?.label || "",
          value: I?.value ?? ""
        })) : N, E = qe.normalizeFilterValue({ value: c, operator: C, isMultiple: h }), L = 1;
        return /* @__PURE__ */ S(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(mn, { children: o(D, l) }),
          /* @__PURE__ */ a(
            Tr,
            {
              value: E,
              onChange: (I) => m(I.target.value),
              multiple: h,
              size: "small",
              renderValue: (I) => {
                const ae = (Array.isArray(I) ? I : I != null && I !== "" ? [I] : []).map((ue) => {
                  if (ue && typeof ue == "object" && "label" in ue) return o(ue.label, l);
                  const $ = B.find((we) => String(we.value) === String(ue));
                  return $ ? o($.label, l) : "";
                }).filter(Boolean);
                if (ae.length === 0) return "";
                if (ae.length <= L) return ae.join(", ");
                const me = ae.slice(0, L).join(", "), ce = ae.length - L, j = ae.join(", ");
                return /* @__PURE__ */ a(xt, { title: j, placement: "top", children: /* @__PURE__ */ a("span", { children: `${me} +${ce}` }) });
              },
              children: B.map((I) => /* @__PURE__ */ a(Ke, { value: I.value, children: o(I.label, l) }, I.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const re = e.type, H = f[re], W = s(re === "date", !1, u.dateTime), te = re === "dateTime" ? jo : Wo;
        let Q = null;
        if (c) {
          const I = ee(c);
          Q = I.isValid() ? I : null;
        }
        return /* @__PURE__ */ a(Ln, { dateAdapter: $n, children: /* @__PURE__ */ a(
          te,
          {
            label: o(D, l),
            format: W,
            value: Q,
            onChange: (I) => {
              !I || !I.isValid() ? m(null) : m(I.format(H));
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
          ut,
          {
            variant: "standard",
            label: o(D, l),
            value: c,
            onChange: (I) => m(I.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, er = sr(Oe)({
  margin: "6px"
}), ll = sr(Ja)({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minHeight: "auto",
  borderBottom: "none"
}), sl = function(e) {
  const {
    model: r,
    data: t,
    currentPreference: n,
    isReadOnly: o,
    canAdd: l,
    forAssignment: s,
    showAddIcon: u,
    onAdd: f,
    selectionApi: y,
    rowSelectionModel: C,
    selectAll: h,
    available: c,
    onAssign: m,
    assigned: w,
    onUnassign: x,
    effectivePermissions: g,
    clearFilters: i,
    handleExport: v,
    preferenceKey: D,
    apiRef: N,
    tTranslate: B,
    tOpts: E,
    filterModel: L,
    setFilterModel: re,
    onPreferenceChange: H,
    toolbarItems: W,
    gridColumns: te,
    customExportOptions: Q
  } = e, I = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), ge = ($) => $ != null && $ !== "" && !(Array.isArray($) && $.length === 0), me = (($ = []) => $.filter(
    (we) => ["isEmpty", "isNotEmpty"].includes(we.operator) || ge(we.value)
  ))(L?.items || []).length || 0, ce = te?.filter(($) => $.toolbarFilter) || [], j = t?.lookups || {}, ue = t?.records || [];
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
            r.gridSubTitle && /* @__PURE__ */ S(Nt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              B(r.gridSubTitle, E)
            ] }),
            n && r.showPreferenceInHeader && /* @__PURE__ */ S(Nt, { className: "preference-name-text", variant: "h6", component: "h6", textAlign: "center", sx: { ml: 1 }, children: [
              B("Applied Preference", E),
              ": ",
              n
            ] }),
            (o || !l && !s) && /* @__PURE__ */ S(Nt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !l || o ? "" : r.title
            ] }),
            !s && l && !o && /* @__PURE__ */ a(er, { startIcon: u ? /* @__PURE__ */ a(Mr, {}) : null, onClick: f, size: "medium", variant: "contained", children: B(I, E) }),
            !!e.headerActions && e.headerActions,
            y.length && ue.length ? /* @__PURE__ */ a(
              er,
              {
                onClick: h,
                size: "medium",
                variant: "contained",
                children: C.ids.size === ue.length ? B("Deselect All", E) : B("Select All", E)
              }
            ) : /* @__PURE__ */ a(ye, {}),
            c && /* @__PURE__ */ a(er, { startIcon: u ? /* @__PURE__ */ a(Mr, {}) : null, onClick: m, size: "medium", variant: "contained", children: B("Assign", E) }),
            w && /* @__PURE__ */ a(er, { startIcon: u ? /* @__PURE__ */ a(Lo, {}) : null, onClick: x, size: "medium", variant: "contained", children: B("Remove", E) })
          ] }),
          /* @__PURE__ */ S(ll, { ...e, children: [
            g.showColumnsOrder && /* @__PURE__ */ a(
              Za,
              {
                render: ($) => /* @__PURE__ */ a(
                  Oe,
                  {
                    ...$,
                    startIcon: /* @__PURE__ */ a(zo, {}),
                    size: "small",
                    variant: "text",
                    children: B("COLUMNS", E)
                  }
                )
              }
            ),
            g.filter && /* @__PURE__ */ S(ye, { children: [
              /* @__PURE__ */ a(
                Qa,
                {
                  render: ($) => /* @__PURE__ */ a(
                    Oe,
                    {
                      ...$,
                      startIcon: /* @__PURE__ */ a(xo, { badgeContent: me, color: "primary", children: /* @__PURE__ */ a(Vo, {}) }),
                      size: "small",
                      variant: "text",
                      children: B("FILTERS", E)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Oe, { startIcon: /* @__PURE__ */ a($o, {}), onClick: i, size: "small", children: B("CLEAR FILTER", E) })
            ] }),
            g.export && /* @__PURE__ */ a(al, { handleExport: v, showPivotExportBtn: r.pivotApi, exportFormats: r.exportFormats || {}, customExportOptions: Q, tTranslate: B, tOpts: E }),
            W,
            D && /* @__PURE__ */ a(
              rl,
              {
                gridRef: N,
                preferenceKey: D,
                onPreferenceChange: H,
                t: B,
                tOpts: E
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(Ee, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: ce.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: ce.map(($) => /* @__PURE__ */ a(
      il,
      {
        column: $,
        filterModel: L,
        setFilterModel: re,
        lookupData: j,
        tTranslate: B,
        tOpts: E
      },
      $.field
    )) }) })
  ] });
}, cl = 50, ul = /(\w+)( ASC| DESC)?/i, dl = 6e4, pl = 0, fl = 1e6, ke = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, hl = {
  article: /* @__PURE__ */ a(oo, {}),
  edit: /* @__PURE__ */ a(On, {}),
  copy: /* @__PURE__ */ a(ao, {}),
  delete: /* @__PURE__ */ a(Mn, {}),
  history: /* @__PURE__ */ a(Uo, {}),
  download: /* @__PURE__ */ a(Ho, {})
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
}, Xn = ["isEmpty", "isNotEmpty"], ml = (e) => e, gl = (e) => (e || []).filter((r) => Xn.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), bl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], yl = (e) => e.value ? /* @__PURE__ */ a(Ao, { style: { color: "green" } }) : /* @__PURE__ */ a(Ir, { style: { color: "gray" } }), xn = sr("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), Cl = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const n = ro(), o = e.row[t], s = An(n, no)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    Gn,
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
}, wn = Fn(({
  model: e,
  columns: r,
  api: t,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: l,
  parent: s,
  where: u,
  title: f,
  showPageTitle: y,
  permissions: C,
  selected: h,
  assigned: c,
  available: m,
  disableCellRedirect: w = !1,
  onAssignChange: x,
  customStyle: g,
  onCellClick: i,
  showRowsSelected: v,
  showFullScreenLoader: D,
  customFilters: N,
  onRowDoubleClick: B,
  onRowClick: E = () => {
  },
  gridStyle: L,
  reRenderKey: re,
  additionalFilters: H,
  onCellDoubleClickOverride: W,
  onAddOverride: te,
  dynamicColumns: Q,
  toolbarItems: I,
  readOnly: ge = !1,
  onListParamsChange: ae,
  apiRef: me,
  baseFilters: ce,
  customExportOptions: j,
  sx: ue,
  ...$
}) => {
  const [we, P] = R({ pageSize: cl, page: 0 }), [O, U] = R({ recordCount: 0, records: null, lookups: {} }), G = !!x, X = v, [oe, Se] = R({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [zt, Je] = R(!1), [We, ur] = R(null), ft = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [St, Pt] = R(!1), fe = Dt(), Ft = e.paginationMode === K.client ? K.client : K.server, { t: ot, i18n: Vt } = wt(), d = q(() => ({ t: ot, i18n: Vt }), [ot, Vt]), [ht, ve] = R(""), [Ze, Ae] = R(nl(n || e.defaultSort, K, ul)), Et = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Et.items = [], e.defaultFilters.forEach((b) => {
    Et.items.push(b);
  }));
  const [Re, Te] = R({ ...Et }), { navigate: De, getParams: Gt, useParams: Ie, pathname: qt } = Vr(), { id: dr } = Ie() || Gt, At = dr?.split("-")[0], Pe = me || Tn(), { idProperty: de = "id", showHeaderFilters: Tt = !0, disableRowSelectionOnClick: pr = !0, hideTopFilters: It = !0, updatePageTitle: jt = !0, isElasticScreen: mt = !1, navigateBack: fr = !1, selectionApi: Qe = {}, debounceTimeOut: hr = 300, showFooter: V = !0, disableRowGrouping: Fe = !0 } = e, Z = e.readOnly === !0 || ge, Ue = e.allowDoubleClick === !1, $e = rr(O), Me = rr(null);
  pe(() => () => {
    Me.current?.abort(), Me.current = null;
  }, []);
  const Wt = e.showAddIcon === !0, Mt = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: Xe, formatDate: Ot, getApiEndpoint: mr, buildUrl: gt, setPageTitle: gr } = je(), [oa, Ut] = R(!1), { timeZone: Gr } = Xe, it = q(() => ({ ...K.permissions, ...e.permissions, ...C }), [e.permissions, C]), qr = ["isEmpty", "isNotEmpty", "isAnyOf"], ia = Xe.userData || {}, Ht = e.columns.find((b) => b.type === "fileUpload")?.field || "", la = { add: it.add, edit: it.edit, delete: it.delete }, { canAdd: jr, canEdit: Wr, canDelete: Ur } = Zn({ userData: ia, model: e, userDefinedPermissions: la }), p = q(() => e.tTranslate ?? ml, [e.tTranslate]), { addUrlParamKey: Yt, searchParamKey: Rt, hideBreadcrumb: sa = !1, tableName: Hr, showHistory: Yr = !0, hideBreadcrumbInGrid: ca = !1, breadcrumbColor: ua, disablePivoting: da = !1, columnHeaderHeight: pa = 70, disablePagination: Kr = !1 } = e, _r = e.gridTitle || e.title, Bt = mr("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, et = new URLSearchParams(window.location.search), [Jr, fa] = R(null), [Zr, ha] = R(!Bt), ze = t || e.api, [br, yr] = R(null), ma = q(() => new Set(br ? [br] : []), [br]), ga = typeof e.getDetailPanelContent == "function", [ba, Qr] = R([]);
  pe(() => {
    Pe.current && (Pe.current.prefKey = Bt);
  }, [Pe, Bt]);
  const Xr = T((b) => {
    fa(b), ha(!0);
  }, []), ya = q(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? p(b.headerName, d) : b.headerName
  })) : [], [e.columnGroupingModel, d, ot, p]);
  pe(() => {
    Array.isArray($.rowGroupingField) && Qr($.rowGroupingField);
  }, [$.rowGroupingField]);
  const Cr = et.has("baseData") && et.get("baseData"), en = q(() => {
    if (Cr)
      try {
        const b = JSON.parse(Cr);
        if (typeof b === K.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [Cr]), Ca = T(({ row: b }) => {
    const M = b[de];
    Se((A) => {
      const F = new Set(A?.ids || []);
      return F.has(M) ? F.delete(M) : F.add(M), { type: "include", ids: F };
    });
  }, [de]), tn = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b, M, A) => Ot({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: Xe.dateTime, timeZone: A.localize ? Gr : null, localize: A.localize }),
      filterOperators: Er({ columnType: "date", label: p("Value", d) })
    },
    dateTime: {
      valueFormatter: (b, M, A) => Ot({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Xe.dateTime, timeZone: A.localize ? Gr : null, localize: A.localize }),
      filterOperators: Er({ columnType: "dateTime", label: p("Value", d) })
    },
    boolean: {
      renderCell: yl
    },
    select: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    selection: {
      renderCell: (b) => /* @__PURE__ */ a(Cl, { params: b, handleSelectRow: Ca, idProperty: de })
    }
  };
  pe(() => {
    $e.current = O;
  }, [O]), pe(() => {
    if (!N || !Object.keys(N).length) return;
    if (N.clear) {
      Te({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(N).reduce((M, [A, F]) => (A === K.startDate || A === K.endDate ? M.push(F) : A in N && M.push({ field: A, value: F, operator: "equals", type: "string" }), M), []);
    Te({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [N]);
  const xa = T(({ field: b, lookupMap: M }) => ($e.current.lookups || {})[(M || {})[b]?.lookup] || [], []);
  pe(() => {
    $.isChildGrid;
  }, [$.isChildGrid, It]);
  const rn = T(
    ({ key: b, title: M, icon: A, color: F = "primary", disabled: k, otherProps: _ }) => /* @__PURE__ */ a(
      Ar,
      {
        icon: /* @__PURE__ */ a(xt, { title: p(M, d), children: hl[A] || A || p(M, d) }),
        "data-action": b,
        label: p(M, d),
        color: F,
        disabled: k,
        ..._
      },
      b
    ),
    [ot, d, p]
  ), { customActions: Kt = [] } = e, _t = q(() => {
    const b = [];
    return !G && !Z && b.push(
      {
        key: ke.Edit,
        title: "Edit",
        icon: "edit",
        show: !!Wr,
        disabled: (M) => M.canEdit === !1
      },
      {
        key: ke.Copy,
        title: "Copy",
        icon: "copy",
        show: !!it.copy
      },
      {
        key: ke.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Ur
      },
      {
        key: ke.History,
        title: "History",
        icon: "history",
        show: !!Yr
      },
      ...Kt
    ), b.push({
      key: ke.Download,
      title: "Download document",
      icon: "download",
      show: Ht.length > 0
    }), b.filter(({ show: M }) => M !== !1);
  }, [
    G,
    Z,
    Wr,
    Ur,
    Yr,
    it.copy,
    Ht.length,
    Kt
  ]), wa = T(
    ({ row: b }) => _t.map(
      ({ key: M, title: A, icon: F, color: k, disabled: _, show: z, action: J, ...ie }) => rn({
        key: M,
        title: A || J,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: F,
        color: k,
        disabled: _?.(b),
        otherProps: ie
      })
    ),
    [_t, rn]
  ), { gridColumns: Ce, pinnedColumns: nn, lookupMap: xr } = q(() => {
    let b = r || e.gridColumns || e.columns;
    Q && (b = [...Q, ...b]);
    const M = { left: [Xa.field], right: [] }, A = [], F = {}, k = { ...tn, ...e.gridColumnTypes };
    for (const z of b) {
      if (z.gridLabel === null || s && z.lookup === s || z.type === K.oneToMany && z.countInList === !1) continue;
      const J = {};
      if (z.type === K.oneToMany && (J.type = "number", J.field = z.field.replace(/s$/, "Count")), k[z.type] && Object.assign(J, k[z.type]), J.valueOptions === K.lookup || z.type === K.boolean) {
        let le = [];
        J.valueOptions === K.lookup && (J.valueOptions = (Y) => xa({ ...Y, lookupMap: F }), le = [...En(), ...eo()].filter((Y) => ["is", "not", "isAnyOf"].includes(Y.value))), z.type === K.boolean && (le = to()), J.filterOperators = le.map((ne) => ({
          ...ne,
          InputComponent: ne.InputComponent ? (Y) => /* @__PURE__ */ a(
            Qi,
            {
              column: {
                ...z,
                ...z.type === K.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: $e
              },
              ...Y,
              autoHighlight: !0,
              tTranslate: p,
              tOpts: d
            }
          ) : void 0
        }));
      }
      if ((z.linkTo || z.link) && (J.cellClassName = "mui-grid-linkColumn"), z.hyperlinkURL && !z.renderCell) {
        const { hyperlinkURL: le, hyperlinkIndex: ne } = z;
        J.renderCell = (Y) => {
          const { value: se, formattedValue: Zt, row: Qt } = Y;
          if (se == null || se === "") return se;
          const tt = ne ? Qt[ne] : se, kt = le.replace("{0}", encodeURIComponent(String(tt)));
          return /* @__PURE__ */ a("a", { href: kt, rel: "noopener noreferrer", target: "_blank", children: Zt ?? se });
        };
      }
      Fe || (J.groupable = z.groupable ?? !1);
      const ie = p((typeof z.gridLabel == "function" ? z.gridLabel({ column: z, t: p, tOpts: d }) : z.gridLabel) || z.label, d);
      A.push({ ...z, ...J, headerName: ie, description: ie }), z.pinned && M[z.pinned === K.right ? K.right : K.left].push(z.field), F[z.field] = z;
    }
    let _ = e.standard;
    return _ === !0 && (_ = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), _ && typeof _ === K.object && bl.forEach(({ key: z, field: J, type: ie, header: le }) => {
      if (_[z] === !0) {
        const ne = { field: J, type: ie, headerName: p(le, d), width: 200 };
        ie === K.dateTime && (ne.filterOperators = Er({ columnType: "dateTime" }), ne.valueFormatter = tn.dateTime.valueFormatter, ne.localize = !0), A.push(ne);
      }
    }), _t.length && (A.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? K.defaultActionWidth) * _t.length,
      hidable: !1,
      getActions: wa,
      headerName: p("Actions", d)
    }), M.right.push("actions")), { gridColumns: A, pinnedColumns: M, lookupMap: F };
  }, [r, e, s, C, G, Q, ot, Xe?.dateTime]), wr = rr(!1);
  pe(() => {
    if (wr.current) return;
    const b = Ce?.filter((F) => F.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (Re.items.some(
      (F) => b.some((k) => k.field === F.field)
    )) {
      wr.current = !0;
      return;
    }
    const A = b.map((F) => {
      const k = Qn(F.type, F.toolbarFilter?.defaultOperator), _ = qe.normalizeFilterValue({
        operator: k,
        value: F.toolbarFilter.defaultFilterValue
      });
      return {
        field: F.field,
        operator: k,
        value: _,
        type: F.type
      };
    }).filter((F) => {
      const k = F.value;
      return !(Array.isArray(k) && k.length === 0);
    });
    A.length > 0 && Te((F) => ({
      ...F,
      items: [...F.items, ...A]
    })), wr.current = !0;
  }, [Ce]);
  const Ve = T(async ({ action: b = "list", extraParams: M = {}, isPivotExport: A = !1, contentType: F, columns: k } = {}) => {
    const { pageSize: _, page: z } = we, J = !!F, ie = gt(A ? e.pivotApi : ze), le = {
      ...Re,
      items: gl(Re.items)
    }, ne = Array.isArray(ce) ? [...ce] : [];
    e.joinColumn && At && ne.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(At) }), H && (le.items = [...le.items || [], ...H]);
    const Y = [];
    Array.isArray(ne) && Y.push(...ne), Array.isArray(l) && Y.push(...l);
    const se = {
      ...M,
      ...$.extraParams
      // Merge any custom params passed via component props
    };
    if ((c || m) && (se[c ? "include" : "exclude"] = Array.isArray(h) ? h.join(",") : h), A && (e.exportTemplate && (se.template = e.exportTemplate), e.configFileName && (se.configFileName = e.configFileName)), !(!le.items.length || le.items.every((He) => "value" in He && He.value !== void 0))) return;
    let Qt = null, tt = null;
    J || (Me.current && Me.current.abort(), tt = new AbortController(), Me.current = tt, Qt = tt.signal);
    const kt = {
      action: b,
      page: J ? pl : z,
      pageSize: J ? fl : _,
      sortModel: Ze,
      filterModel: le,
      gridColumns: Ce,
      model: e,
      baseFilters: Y,
      api: ie,
      extraParams: se
    };
    typeof ae == "function" && ae(kt), Pe.current.listParams = kt, J || Ut(!0);
    try {
      const He = await Or({ ...kt, contentType: F, columns: k, signal: Qt });
      if (!J && He !== void 0 && Me.current === tt) {
        if (He?.aborted) return;
        U(He);
      }
    } catch (He) {
      if (He?.aborted || He?.name === "AbortError" || tt?.signal?.aborted) return;
      fe.showError(p("An error occurred while fetching data", d)), J || U((La) => ({ ...La, records: [], recordCount: 0 }));
    } finally {
      !J && Me.current === tt && Ut(!1);
    }
  }, [we, gt, e, ze, Re, ce, At, c, m, h, $.extraParams, Ze, Ce, l, ae, Pe, Or, fe, H, p, d]), lt = T(async ({ id: b, record: M = {}, mode: A }) => {
    if (o) {
      try {
        const k = gt(ze), _ = await ar({ id: b, api: k, model: e, parentFilters: l, where: u });
        o(_);
      } catch {
        fe.showError(p("Could not load record", d));
      }
      return;
    }
    let F = qt;
    F.endsWith("/") || (F += "/"), A === "copy" ? F += "0-" + b : F += b, Yt && (et.set(Yt, M[Yt]), F += `?${et.toString()}`), De(F);
  }, [o, ze, e, l, u, qt, Yt, et, De, ar, gt, fe, p, d]), an = T(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), va = T(async (b, M, A) => {
    let F = b.field === e.linkColumn ? ke.Edit : null;
    if (!F && b.field === K.actions && (F = A?.action, !F)) {
      const ie = M.target.closest("button");
      ie && (F = ie.dataset.action);
    }
    const { row: k } = b;
    if (!Z) {
      if (i && typeof await i({ cellParams: b, event: M, details: A }) !== K.boolean)
        return;
      const ie = xr[b.field] || {};
      if (ie.linkTo) {
        De({
          pathname: Xt.replaceTags(ie.linkTo, k)
        });
        return;
      }
      switch (F) {
        case ke.Edit:
          if (e.getDetailPanelContent) {
            const ne = k[de];
            yr((Y) => Y === ne ? null : ne);
            return;
          } else
            return lt({ id: k[de], record: k });
        case ke.Copy:
          return lt({ id: k[de], mode: "copy" });
        case ke.Delete:
          Je(!0), ur({ name: k[e.linkColumn], id: k[de] });
          break;
        case ke.History:
          return De(`${mr("history")}?tableName=${Hr}&id=${k[de]}&breadCrumb=${Rt ? et.get(Rt) : _r}`);
        default:
          const le = Kt.find((ne) => ne.action === F && typeof ne.onClick === K.function);
          if (le) {
            le.onClick({ row: k, navigate: De });
            return;
          }
          break;
      }
    }
    if (F === ke.Download && an({ documentLink: k[Ht] }), !Mt.length)
      return;
    const { row: _ } = b, z = xr[b.field] || {}, J = {
      pathname: Xt.replaceTags(z.linkTo, _)
    };
    e.addRecordToState && (J.state = _), De(J);
  }, [Z, i, xr, e, de, Ht, De, Mt, Kt, Hr, Rt, et, _r, mr, an, lt]), Da = T(async () => {
    const b = gt(ze);
    try {
      await $r({ id: We.id, api: b, model: e }), fe.showMessage(p("Record Deleted Successfully.", d)), Ve();
    } catch (M) {
      fe.showError(p("Delete failed", d), M.message);
    } finally {
      Je(!1);
    }
  }, [ze, We?.id, fe, e, Ve, p, d]), on = T(() => {
    ve(null), Je(!1);
  }, []), Sa = T((b) => (typeof $.processRowUpdate == "function" && $.processRowUpdate(b, O), b), [$.processRowUpdate, O]), Pa = T((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: M } = b;
    if (typeof W === K.function) {
      W(b);
      return;
    }
    if (!Z && !Ue && !w && lt({ id: M[de], record: M }), Z && e.rowRedirectLink) {
      const A = {
        pathname: Xt.replaceTags(e.rowRedirectLink, M)
      };
      e.addRecordToState && (A.state = M), De(A);
    }
    typeof B === K.function && B(b);
  }, [W, Z, Ue, w, lt, de, e.rowRedirectLink, e.addRecordToState, De, B, Xt]), Fa = T(async () => {
    if (oe.ids.size < 1) {
      fe.showError(p("Please select at least one record to proceed", d));
      return;
    }
    const b = Array.from(oe.ids), M = new Map((O.records || []).map((k) => [k[de], k]));
    let A = b.map((k) => ({ ...en, ...M.get(k) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (A = A.map(
      (k) => Object.fromEntries(e.selectionUpdateKeys.map((_) => [_, k[_]]))
    ));
    const F = gt(Qe || ze);
    Ut(!0);
    try {
      const k = await zr({
        id: 0,
        api: `${F}/updateMany`,
        values: { items: A },
        model: e
      });
      if (k) {
        Ve();
        const _ = k.info ? k.info : p("Record Added Successfully.", d);
        fe.showMessage(_);
      }
    } catch (k) {
      fe.showError(k.message || p("An error occurred, please try after some time.", d));
    } finally {
      Ut(!1), Se({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), Pt(!1);
    }
  }, [oe.ids, fe, O.records, de, en, e.selectionUpdateKeys, Qe, ze, e, Ve, p, d]), ln = T(() => {
    if (Qe.length > 0) {
      if (oe.ids.size > 0) {
        Pt(!0);
        return;
      }
      fe.showError(
        p("Please select at least one record to proceed", d)
      );
      return;
    }
    typeof te === K.function ? te() : lt({ id: 0 });
  }, [Qe, fe, te, lt, oe.ids.size, p, d]), sn = T(() => {
    Re?.items?.length && Te({ ...K.gridFilterModel });
  }, [Re]), Jt = T(({ unassign: b, assign: M }) => {
    const A = Array.isArray(h) ? h : h.length ? h.split(",") : [], F = b ? A.filter((k) => !b.includes(parseInt(k))) : [...A, ...M];
    x(typeof h === K.string ? F.join(",") : F);
  }, [h, x]), cn = T(() => {
    Jt({ assign: Array.from(oe.ids) });
  }, [Jt, oe.ids]), un = T(() => {
    Jt({ unassign: Array.from(oe.ids) });
  }, [Jt, oe.ids]), dn = T(() => {
    const b = O.records || [];
    if (oe.ids.size === b.length)
      Se({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const A = b.map((F) => F[de]);
      Se({
        type: "include",
        ids: new Set(A)
      });
    }
  }, [oe, O.records, de]), Ea = T((b) => b[de], [de]), pn = T((b) => {
    if (O?.recordCount > dl) {
      fe.showMessage(p("Cannot export more than 60k records, please apply filters or reduce your results using filters", d));
      return;
    }
    const { orderedFields: M, columnVisibilityModel: A, lookup: F } = Pe.current.state.columns, k = b.target.dataset.isPivotExport === "true", _ = Object.keys(A).filter((Y) => A[Y] === !1), z = new Set(Ce.filter((Y) => Y.exportable === !1).map((Y) => Y.field)), J = M.filter(
      (Y) => !z.has(Y) && !_.includes(Y) && Y !== "__check__" && Y !== "actions"
    );
    if (J.length === 0) {
      fe.showMessage(p("You cannot export while all columns are hidden... please show at least 1 column before exporting", d));
      return;
    }
    const ie = {}, le = Object.fromEntries(Ce.map((Y) => [Y.field, Y]));
    J.forEach((Y) => {
      const se = F[Y], Zt = le[Y];
      ie[Y] = {
        field: Y,
        width: se.width,
        headerName: Zt?.headerName || se.headerName || se.field,
        type: se.type,
        isParsable: se.isParsable,
        lookup: se.lookup,
        hyperlinkURL: se.hyperlinkURL,
        hyperlinkIndex: se.hyperlinkIndex,
        localize: se.localize,
        exportIndex: se.exportIndex
      };
    });
    const ne = e?.formActions?.export || k ? e?.formActions?.export || "export" : void 0;
    Ve({
      action: ne,
      isPivotExport: k,
      contentType: b.target.dataset.contentType,
      columns: ie
    });
  }, [O?.recordCount, Pe, Ce, fe, e, Ve, p, d]);
  pe(() => {
    !ze || !Zr || Ve();
  }, [ze, Zr, Ve]), pe(() => {
    if (!($.isChildGrid || G || !jt))
      return gr({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        gr(null);
      };
  }, [gr, e.pageTitle, e.title, $.isChildGrid, G, jt]);
  const Aa = T((b) => {
    const { items: M } = b, A = M.map((F) => {
      const { field: k, operator: _, value: z } = F, ie = (Ce.find((le) => le.field === k) || {}).type === K.Number;
      return Xn.includes(_) ? { ...F, value: null } : ie && z < 0 ? { ...F, value: null } : qr.includes(_) || ie && !isNaN(z) || !ie ? (mt && Ce.filter((ne) => ne.field === k)[0]?.isKeywordField && (F.filterField = `${F.field}.keyword`), { ...F }) : { ...F, value: ie ? null : z };
    });
    Te({ ...b, items: A });
  }, [Ce, K.Number, qr, mt, Te]), Ta = T((b) => {
    const M = b.map((A) => {
      const F = Ce.filter((z) => z.field === A.field)[0] || {}, k = mt && F.isKeywordField, _ = { ...A, filterField: k ? `${A.field}.keyword` : A.field };
      return F.dataIndex && (_.filterField = F.dataIndex), _;
    });
    Ae(M);
  }, [Ce, mt, Ae]), fn = f || e.gridTitle || e.title, Ia = Rt ? [{ text: et.get(Rt) || fn }] : [{ text: fn }], Ma = T((b) => {
    yr(b.size > 0 ? [...b].pop() : null);
  }, []), Oa = T((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      yr(null), Ve();
    },
    t: p,
    tOpts: d
  }) : null, [e.getDetailPanelContent, Ve, p, d]), Ra = q(() => ({
    filterValueTrue: p("Yes", d),
    filterValueFalse: p("No", d),
    noRowsLabel: p("No data", d),
    footerTotalRows: `${p("Total rows", d)}:`,
    MuiTablePagination: {
      labelRowsPerPage: p("Rows per page", d),
      labelDisplayedRows: ({ from: b, to: M, count: A }) => `${b}–${M} ${p("of", d)} ${A}`
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
    paginationDisplayedRows: ({ from: b, to: M, count: A }) => `${b}–${M} ${p("of", d)} ${A}`,
    toolbarQuickFilterLabel: p("Search", d),
    toolbarFiltersTooltipActive: (b) => `${b} ${p(b === 1 ? "active filter" : "active filters", d)}`,
    columnHeaderSortIconLabel: p("Sort", d),
    filterPanelOperatorAnd: p("And", d),
    filterPanelOperatorOr: p("Or", d),
    noResultsOverlayLabel: p("No results found", d),
    columnHeaderFiltersTooltipActive: (b) => `${b} ${p(b === 1 ? "active filter" : "active filters", d)}`,
    detailPanelToggle: p("Detail panel toggle", d),
    checkboxSelectionHeaderName: p("Checkbox selection", d),
    columnsManagementShowHideAllText: p("Show/Hide all", d),
    noColumnsOverlayLabel: p("No columns", d),
    noColumnsOverlayManageColumns: p("Manage columns", d),
    columnsManagementReset: p("Reset", d),
    groupColumn: (b) => `${p("Group by", d)} ${b}`,
    unGroupColumn: (b) => `${p("Ungroup", d)} ${b}`,
    footerRowSelected: (b) => {
      const M = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${p(M, d)}`;
    }
  }), [p, d, e?.searchPlaceholder]), Ba = q(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: O,
      currentPreference: Jr,
      isReadOnly: Z,
      canAdd: jr,
      forAssignment: G,
      showAddIcon: Wt,
      onAdd: ln,
      selectionApi: Qe,
      rowSelectionModel: oe,
      selectAll: dn,
      available: m,
      onAssign: cn,
      assigned: c,
      onUnassign: un,
      effectivePermissions: it,
      clearFilters: sn,
      handleExport: pn,
      preferenceKey: Bt,
      apiRef: Pe,
      gridColumns: Ce,
      tTranslate: p,
      tOpts: d,
      idProperty: de,
      filterModel: Re,
      setFilterModel: Te,
      onPreferenceChange: Xr,
      toolbarItems: I,
      headerActions: $.headerActions,
      customExportOptions: j
    },
    footer: {
      pagination: Kr !== !0,
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
  }), [e, O, Jr, Z, jr, G, Wt, ln, Qe, oe, dn, m, cn, c, un, it, sn, pn, Bt, Pe, Ce, p, d, de, Re, Te, Xr, I, $.headerActions, j]), ka = q(() => ({
    columns: {
      columnVisibilityModel: ft
    },
    pinnedColumns: nn
  }), [ft, nn]), Na = q(() => ({
    headerFilterMenu: !1,
    toolbar: sl,
    footer: Di
  }), []);
  return /* @__PURE__ */ S(ye, { children: [
    y !== !1 && /* @__PURE__ */ a(
      Jn,
      {
        navigate: De,
        showBreadcrumbs: !sa && !ca,
        breadcrumbs: Ia,
        enableBackButton: fr,
        breadcrumbColor: ua,
        model: e
      }
    ),
    /* @__PURE__ */ S(Ee, { style: L || g, children: [
      /* @__PURE__ */ a(Ee, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        In,
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
            ...Array.isArray(ue) ? ue : ue ? [ue] : []
          ],
          headerFilters: Tt,
          unstable_headerFilters: Tt,
          checkboxSelection: G,
          loading: !O.records || oa,
          className: "pagination-fix",
          onCellClick: va,
          onCellDoubleClick: Pa,
          columns: Ce,
          paginationModel: we,
          pageSizeOptions: K.pageSizeOptions,
          onPaginationModelChange: P,
          pagination: !Kr,
          rowCount: O.recordCount,
          rows: O.records || [],
          sortModel: Ze,
          paginationMode: Ft,
          sortingMode: Ft,
          filterMode: Ft,
          processRowUpdate: Sa,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Ta,
          onFilterModelChange: Aa,
          rowSelectionModel: oe,
          onRowSelectionModelChange: Se,
          filterModel: Re,
          getRowId: Ea,
          onRowClick: E,
          slots: Na,
          slotProps: Ba,
          hideFooterSelectedRowCount: X,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Pe,
          disableAggregation: !0,
          disableRowGrouping: Fe,
          disableRowSelectionOnClick: pr,
          disablePivoting: da,
          filterDebounceMs: hr,
          initialState: ka,
          ...ga && {
            getDetailPanelContent: Oa,
            detailPanelExpandedRowIds: ma,
            onDetailPanelExpandedRowIdsChange: Ma
          },
          localeText: Ra,
          showToolbar: !0,
          columnHeaderHeight: pa,
          hideFooter: !V,
          rowGroupingModel: ba,
          onRowGroupingModelChange: (b) => Qr(b),
          getRowClassName: $.getRowClassName,
          columnGroupingModel: ya
        }
      ) }),
      ht && /* @__PURE__ */ S(_e, { open: !!ht, onConfirm: on, onCancel: on, title: "Info", hideCancelButton: !0, children: [
        " ",
        ht
      ] }),
      zt && !ht && /* @__PURE__ */ a(_e, { open: zt, onConfirm: Da, onCancel: () => Je(!1), title: p("Confirm Delete", d), okText: p("Ok", d), cancelText: p("Cancel", d), children: /* @__PURE__ */ S(xn, { children: [
        p("Are you sure you want to delete", d),
        " ",
        We.name && /* @__PURE__ */ a(xt, { style: { display: "inline" }, title: We.name, arrow: !0, children: We.name.length > 30 ? `${We.name.slice(0, 30)}...` : We.name }),
        " ?"
      ] }) }),
      St && /* @__PURE__ */ a(
        _e,
        {
          open: St,
          onConfirm: Fa,
          onCancel: () => Pt(!1),
          title: p("Confirm Add", d),
          okText: p("Ok", d),
          cancelText: p("Cancel", d),
          children: /* @__PURE__ */ S(xn, { children: [
            p("Are you sure you want to add", d),
            " ",
            oe.ids.size,
            " ",
            p("records", { count: oe.ids.size, ...d }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, ol), xl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = (u) => {
    t.setFieldValue(r, u.target.checked);
  }, l = q(() => t.values[r] ?? !!e.defaultValue, [t, e]), s = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ a(
      Jo,
      {
        control: /* @__PURE__ */ a(
          Gn,
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
    /* @__PURE__ */ a(pt, { error: t.touched[r] && !!t.errors[r], children: t.touched[r] && t.errors[r] })
  ] }, r);
}, Rr = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = vt(), l = e.rows || (e.multiline ? 5 : 1);
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
function ea(e, r) {
  const [t, n] = R(e);
  return pe(() => {
    const o = setTimeout(() => {
      n(e);
    }, r);
    return () => {
      clearTimeout(o);
    };
  }, [e, r]), t;
}
const vn = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, wl = {
  outlined: Do,
  filled: vo,
  standard: wo
}, vl = () => /* @__PURE__ */ S(
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
          render: /* @__PURE__ */ a(Lt, { size: "small", "aria-label": "Increase" }),
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
          render: /* @__PURE__ */ a(Lt, { size: "small", "aria-label": "Decrease" }),
          children: /* @__PURE__ */ a(
            qn,
            {
              fontSize: "small",
              sx: { transform: "translateY(-2px)" }
            }
          )
        }
      )
    ]
  }
), Dl = ({ column: e, otherProps: r, formik: t, field: n, ...o }) => {
  const { min: l, max: s, readOnly: u, precision: f } = e, y = vt(), C = q(
    () => vn({ value: l, state: t.values }),
    [l, t.values]
  ), h = q(
    () => vn({ value: s, state: t.values }),
    [s, t.values]
  ), c = q(() => t.values[n] ?? null, [t.values[n]]), [m, w] = R(c), x = ea(m, 400);
  pe(() => {
    x !== c && t.setFieldValue(n, x);
  }, [x]), pe(() => {
    c !== m && w(c);
  }, [c]);
  const g = (L) => {
    w(L);
  }, i = (L) => {
    t.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(L);
  }, v = $a(), D = `number-field-${n}-${v}`, N = e.variant || "standard", B = wl[N], E = q(() => {
    if (f !== void 0)
      return {
        maximumFractionDigits: f
      };
  }, [f]);
  return /* @__PURE__ */ S(
    nr.Root,
    {
      value: m,
      onValueChange: g,
      min: C,
      max: h,
      disabled: u,
      format: E,
      render: (L, re) => /* @__PURE__ */ a(
        Ct,
        {
          fullWidth: !0,
          ref: L.ref,
          error: t.touched[n] && !!t.errors[n],
          sx: u ? {
            backgroundColor: y.palette?.action?.disabled
          } : void 0,
          children: L.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          nr.Input,
          {
            render: (L, re) => /* @__PURE__ */ a(
              B,
              {
                id: D,
                inputRef: L.ref,
                value: re.inputValue,
                onChange: L.onChange,
                onBlur: (H) => {
                  L.onBlur(H), i(H);
                },
                inputProps: {
                  ...L,
                  "aria-describedby": t.touched[n] && t.errors[n] ? `${D}-error` : void 0
                },
                endAdornment: /* @__PURE__ */ a(vl, {}),
                sx: { pr: 0 },
                ...r
              }
            )
          }
        ),
        t.touched[n] && t.errors[n] && /* @__PURE__ */ S(pt, { id: `${D}-error`, error: !0, children: [
          " ",
          t.errors[n],
          " "
        ] })
      ]
    }
  );
}, Sl = ({ otherProps: e, ...r }) => {
  const [t, n] = yt.useState(!1), o = () => n((f) => !f), l = (f) => {
    f.preventDefault();
  }, { readOnly: s = !1, disabled: u = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: s,
      disabled: u,
      endAdornment: /* @__PURE__ */ a(Rn, { position: "end", children: /* @__PURE__ */ a(
        Lt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: l,
          edge: "end",
          disabled: u,
          readOnly: s,
          size: "large",
          children: t ? /* @__PURE__ */ a(Qo, {}) : /* @__PURE__ */ a(Xo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(Rr, { otherProps: e, ...r });
}, Pl = ({ column: e, field: r, formik: t, otherProps: n, fieldConfigs: o = {}, mode: l }) => {
  const s = l !== "copy" && o.disabled, { systemDateTimeFormat: u, stateData: f } = je(), y = q(() => t.values[r] ? ee(t.values[r]) : null, [t.values[r]]), C = e.minField ? t.values[e.minField] : void 0, h = e.maxField ? t.values[e.maxField] : void 0, c = q(() => e.min ? ee(e.min) : e.minField && C ? ee(C) : null, [e.min, e.minField, C]), m = q(() => e.max ? ee(e.max) : e.maxField && h ? ee(h) : null, [e.max, e.maxField, h]), w = T((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const i = ee(x).hour(12).toISOString();
    t.setFieldValue(r, i);
  }, [r, t]);
  return /* @__PURE__ */ kr(
    kn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: u(!0, !1, f.dateTime),
      name: r,
      value: y,
      onChange: w,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: c,
      maxDate: m,
      disabled: s,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
};
ee.extend(Bn);
const Fl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: l } = je(), s = q(() => {
    const u = t.values[r];
    if (!u) return null;
    if (e.localize)
      return ee(u);
    let f = new Date(u);
    const y = f.getTimezoneOffset() * 6e4;
    return f = new Date(f.getTime() + y), ee(f);
  }, [t.values[r], e]);
  return /* @__PURE__ */ kr(
    Nn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, l.dateTime),
      name: r,
      value: s,
      onChange: (u) => {
        u ? e.localize ? t.setFieldValue(r, u.toISOString()) : t.setFieldValue(r, u.utcOffset(0, !0).toISOString()) : t.setFieldValue(r, null);
      },
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? ee(e.min) : null,
      maxDateTime: e.max ? ee(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
};
ee.extend(Lr);
const El = ({ column: e, field: r, formik: t, otherProps: n }) => {
  let o = t.values[r];
  return !e.localize && o && (o = ee.utc(o).utcOffset(ee().utcOffset(), !0).format()), /* @__PURE__ */ kr(
    ei,
    {
      ...n,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: o ? ee(o) : null,
      onChange: (l) => (e.localize || (l = l && l.isValid() ? l.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, l)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Al = [null, void 0, ""];
function ta({ column: e, formik: r, lookups: t, dependsOn: n = [], isAutoComplete: o = !1, userSelected: l, model: s }) {
  const [u, f] = R([]), { buildUrl: y } = je(), C = Dt(), h = y(s.api), c = q(() => {
    const x = {};
    if (!n.length) return x;
    for (const g of n)
      x[g] = r.values[g];
    return x;
  }, n.map((x) => r.values[x])), m = q(() => n.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, n]), w = T(async () => {
    if (!e.lookup) return;
    if (!Object.values(c).every(
      (g) => !Al.includes(g)
    )) {
      f([]);
      return;
    }
    try {
      const g = await Yn({
        api: h,
        model: s,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: c }] }
        }
      });
      f(g);
    } catch (g) {
      C.showError("Could not load lookups", g.message);
    }
  }, [e.lookup, c, h, s, t, C]);
  return pe(() => {
    n.length ? w() : (o || !l.current) && f(m || []);
  }, [n.length, w, o, m]), u;
}
const Tl = yt.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], model: l, tTranslate: s, tOpts: u, ...f }) => {
  const y = yt.useRef(!1), { placeHolder: C } = e, h = ta({ column: e, formik: t, lookups: n, dependsOn: o, userSelected: y, model: l }), c = vt(), m = q(() => {
    let i = t.values[r];
    if (!i && !y.current && e.defaultValue !== void 0) {
      const v = e.defaultValue;
      if (v != null && v !== "" && h && h.length) {
        const D = h.find((N) => String(N.value) === String(v));
        D && (i = D.value, t.setFieldValue(r, D.value));
      }
    }
    if (h?.length && !i && !e.multiSelect && "IsDefault" in h[0]) {
      const v = h.find((D) => D.IsDefault);
      v && (i = v.value, t.setFieldValue(r, v.value));
    }
    return e.multiSelect && (!i || i.length === 0 ? i = [] : Array.isArray(i) || (i = i.split(",").map((v) => parseInt(v)))), i;
  }, [t.values[r], h, e.multiSelect, r]), w = T((i) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: i.target.value, options: h, event: i, t: s, tOpts: u }), t.handleChange(i), y.current = !0;
  }, [t.values[r], e.onChange, h]), x = q(() => e.multiSelect ? Array.isArray(m) && m.length > 0 : m !== "" && m !== null && m !== void 0 && Array.isArray(h) && h.some((i) => String(i.value) === String(m)), [m, e.multiSelect, h]), g = T((i) => {
    i.stopPropagation();
    const v = e.multiSelect ? [] : "";
    t.setFieldValue(r, v), typeof e.onChange == "function" && e.onChange({ formik: t, value: v, options: h, event: i, t: s, tOpts: u }), y.current = !0;
  }, [e.multiSelect, r, t, e.onChange, h, s, u]);
  return /* @__PURE__ */ S(
    cr,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(ri, { children: C || "" }),
        /* @__PURE__ */ S(Ee, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ a(
            ni,
            {
              IconComponent: qn,
              ...f,
              name: r,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(m) ? m : [] : `${m ?? ""}`,
              onChange: w,
              onBlur: t.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? c.palette?.action?.disabled : ""
              },
              children: Array.isArray(h) && h.map((i) => /* @__PURE__ */ a(Vn, { value: i.value, disabled: i.isDisabled, children: i.label }, i.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ a(
            Lt,
            {
              size: "small",
              onClick: g,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": s("Clear selection", u),
              children: /* @__PURE__ */ a(ti, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ a(pt, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), Dn = sr("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Il = ({ component: e, name: r, formik: t, field: n, column: o }) => {
  const { value: l } = t.getFieldProps(r || n), { setFieldValue: s } = t, u = e || o.relation, f = T((y) => {
    s(r || n, y);
  }, [s, r, n]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ a(Dn, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(u, { selected: l, available: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(Dn, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(u, { selected: l, assigned: !0, onAssignChange: f, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Ml = ({ field: e, formik: r, orientation: t = "row", label: n, lookups: o, fieldConfigs: l = {}, mode: s, tTranslate: u, tOpts: f, ...y }) => {
  const C = (x) => {
    r.setFieldValue(e, x.target.value);
  }, h = o ? o[y.column.lookup] : [], c = vt(), m = r.touched[e] && !!r.errors[e], w = s !== "copy" && l.disabled;
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: m, children: /* @__PURE__ */ a(
      Nr,
      {
        row: t === "row",
        "aria-label": n,
        name: e,
        value: r.values[e] ?? "",
        onChange: C,
        children: h?.map((x, g) => /* @__PURE__ */ a(
          dt,
          {
            value: x.value,
            control: /* @__PURE__ */ a(bt, {}),
            label: u(x.label, f),
            disabled: w || (y?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          g
        ))
      }
    ) }),
    m && /* @__PURE__ */ a(pt, { style: { color: c.palette.error.main }, children: r.errors[e] })
  ] });
}, Ol = {
  limitTags: 5
}, Rl = Ge.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], fieldConfigs: l = {}, mode: s, model: u, ...f }) => {
  const y = ta({ column: e, formik: t, lookups: n, dependsOn: o, model: u, isAutoComplete: !0 });
  let C = t.values[r] || [];
  Array.isArray(C) || (C = C.split(", ").map(Number));
  const h = y.filter((w) => C.includes(w.value)) || [], c = s !== "copy" && l.disabled, m = (w, x) => {
    let g = x?.map((i) => i.value) || [];
    e.dataFormat !== "array" && (g = g.length ? g.join(", ") : ""), t.setFieldValue(r, g);
  };
  return /* @__PURE__ */ S(
    cr,
    {
      fullWidth: !0,
      variant: "standard",
      error: t.touched[r] && !!t.errors[r],
      children: [
        /* @__PURE__ */ a(
          jn,
          {
            ...f,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || Ol.limitTags,
            options: y || [],
            getOptionLabel: (w) => w.label || "",
            defaultValue: h,
            renderInput: (w) => /* @__PURE__ */ a(lr, { ...w, variant: "standard" }),
            onChange: m,
            value: h,
            size: "small",
            disabled: c
          }
        ),
        t.touched[r] && t.errors[r] && /* @__PURE__ */ a(pt, { children: t.errors[r] })
      ]
    },
    r
  );
}), Bl = "#182eb5", kl = [
  { label: "Sunday", value: 0, display: "S" },
  { label: "Monday", value: 1, display: "M" },
  { label: "Tuesday", value: 2, display: "T" },
  { label: "Wednesday", value: 3, display: "W" },
  { label: "Thursday", value: 4, display: "T" },
  { label: "Friday", value: 5, display: "F" },
  { label: "Saturday", value: 6, display: "S" }
], Nl = So(Po)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Bl : "#ffffff",
  border: `1px solid ${li[500]}`,
  color: r ? "white" : "black"
})), Ll = ({ day: e, onClick: r, isSelected: t }) => /* @__PURE__ */ a(
  Nl,
  {
    onClick: () => r(e.value),
    isSelected: t,
    style: { margin: "4px" },
    children: e.display
  },
  e.value
), $l = ({ name: e, field: r, formik: t, expired: n }) => {
  const { setFieldValue: o } = t, { value: l } = t.getFieldProps(e || r), s = "1000001", u = "0111110", f = "0".repeat(7), [y, C] = R(l || f), [h, c] = R(() => l ? l === s ? s : l === u ? u : "Custom" : ""), [m, w] = R(!1), x = T((v) => {
    if (Array.isArray(v)) {
      let D = f;
      for (const N of v)
        D = D.substring(0, N) + "1" + D.substring(N + 1);
      C(D), o(e || r, D), w(!0);
    } else {
      let D = m ? f : y;
      const N = D.slice(0, v) + (D[v] === "1" ? "0" : "1") + D.slice(v + 1);
      C(N), o(e || r, N), c("Custom"), w(!1);
    }
  }, [m, f, y, e, r, o]), g = vt(), i = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: i, children: /* @__PURE__ */ S(
      Nr,
      {
        row: !0,
        name: e || r,
        value: h,
        onChange: (v) => {
          const D = v.target.value;
          c(D), D !== "Custom" ? (C(D), o(e || r, D), w(!0)) : (C(f), o(e || r, f), w(!1));
        },
        children: [
          /* @__PURE__ */ a(dt, { value: s, control: /* @__PURE__ */ a(bt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ a(dt, { value: u, control: /* @__PURE__ */ a(bt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(dt, { value: "Custom", control: /* @__PURE__ */ a(bt, {}), label: "Specific days" }),
          kl.map((v, D) => /* @__PURE__ */ a(
            Ll,
            {
              day: v,
              onClick: () => x(D),
              isSelected: h === "Custom" && y[D] === "1",
              disabled: n
            },
            v.value
          ))
        ]
      }
    ) }),
    i && /* @__PURE__ */ a(pt, { style: { color: g.palette.error.main }, children: t.errors[r] })
  ] });
}, zl = ({ isAdd: e, column: r, field: t, formik: n, otherProps: o, fieldConfigs: l = {}, mode: s }) => {
  const u = vt();
  let f = n.values[t] || [];
  Array.isArray(f) || (f = f.split(",").map((c) => c.trim()));
  const y = Ge.useMemo(() => s === "copy" ? !0 : typeof l.disabled < "u" ? l.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: n }) : !!r.disabled, [s, l.disabled, r.disabled]), C = r.hasDefault && !e ? [f[0]] : [], h = T((c, m, w, x = {}) => {
    const g = m.pop()?.trim();
    m.includes(g) || m.push(g), C && C.includes(x.option) && w === "removeOption" && (m = [x.option]), r.dataFormat !== "array" && (m = m.length ? m.join(",") : ""), n.setFieldValue(t, m);
  }, [n, t]);
  return /* @__PURE__ */ S(
    cr,
    {
      fullWidth: !0,
      variant: "standard",
      error: n.touched[t] && !!n.errors[t],
      children: [
        /* @__PURE__ */ a(
          jn,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: f,
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
                    ...y && { backgroundColor: u.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: h,
            size: "small",
            renderTags: (c, m) => c.map((w, x) => {
              const { key: g, ...i } = m({ index: x });
              return /* @__PURE__ */ a(
                ci,
                {
                  label: w,
                  ...i,
                  disabled: C.includes(w)
                },
                g
              );
            }),
            disabled: y
          }
        ),
        n.touched[t] && n.errors[t] && /* @__PURE__ */ a(pt, { children: n.errors[t] })
      ]
    },
    t
  );
}, Vl = (e = []) => {
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
function Gl({ column: e, field: r, formik: t, lookups: n, fieldConfigs: o, mode: l }) {
  const s = n ? n[e.lookup] : [], u = Vl(s), f = t.values[r]?.length ? t.values[r].split(", ") : [];
  let y;
  return l !== "copy" && (y = o?.disabled), /* @__PURE__ */ a(nt, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    ui,
    {
      selectedItems: f,
      onSelectedItemsChange: (h, c) => {
        t.setFieldValue(r, c?.join(", ") || "");
      },
      disabled: y,
      multiSelect: !0,
      checkboxSelection: !0,
      children: u.map((h) => /* @__PURE__ */ a(bn, { itemId: h.value, label: h.label, children: h.children.map((c) => /* @__PURE__ */ a(bn, { itemId: c.value, label: c.label }, c.value)) }, h.value))
    }
  ) });
}
const ql = { maxLength: 500 }, { errorMapping: jl } = qe, Wl = 1024 * 1024;
function Ul({ column: e, field: r, formik: t }) {
  const n = t.values[r] || "", { getApiEndpoint: o } = je(), { maxSize: l, formats: s } = e, u = o("upload"), f = o("media"), y = o(), [C, h] = R({
    isExternal: "no",
    selectedFile: null
  }), [c, m] = R(!1), w = Dt(), { getParams: x, useParams: g } = Vr(), { associationId: i } = g() || x, v = i?.split("-")[0] || 1, D = (W) => {
    const te = W.target.value;
    h({
      ...C,
      isExternal: te,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, N = (W) => {
    t.setFieldValue(r, W.target.value);
  }, B = (W) => {
    const te = W.target.files[0];
    if (te) {
      if (l && te.size > l * Wl) {
        w.showError(`File size exceeds the maximum limit of ${l} MB.`);
        return;
      }
      if (Array.isArray(s) && !s.includes(te.type)) {
        w.showError(`Invalid file format. Allowed formats: ${s.join(", ")}.`);
        return;
      }
      h((Q) => ({ ...Q, selectedFile: te }));
    }
  }, E = async () => {
    if (C.selectedFile) {
      m(!0);
      try {
        const W = new FormData();
        W.append("file", C.selectedFile), W.append("DocumentGroupId", t.values.DocumentGroupId), W.append("AssociationId", v);
        const Q = (await Hn({
          method: "POST",
          url: u,
          data: W,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!Q.success) {
          w.showError(Q.message || "Upload failed");
          return;
        }
        const I = f + "/" + Q.filePath;
        t.setFieldValue(r, I);
      } catch (W) {
        const te = (W.message.match(/status code (\d{3})/) || [])[1];
        w.showError(jl[te]);
      } finally {
        m(!1);
      }
    }
  }, L = new URL(y, window.location.origin).hostname.toLowerCase();
  yt.useEffect(() => {
    h({
      ...C,
      isExternal: n.toLowerCase().includes(L) ? "no" : "yes"
    });
  }, [n, h]);
  const re = t.values[r]?.length > (e.max || ql.maxLength), H = re ? "red" : "";
  return /* @__PURE__ */ S(Ee, { children: [
    /* @__PURE__ */ S(Ee, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Ne, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
      /* @__PURE__ */ S(
        Nr,
        {
          row: !0,
          value: C.isExternal,
          onChange: D,
          "aria-label": "is-external-link",
          name: "is-external-link",
          children: [
            /* @__PURE__ */ a(dt, { value: "yes", control: /* @__PURE__ */ a(bt, {}), label: "Yes" }),
            /* @__PURE__ */ a(dt, { value: "no", control: /* @__PURE__ */ a(bt, {}), label: "No" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ S(Ee, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(Ne, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ S(Ee, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
        C.isExternal === "yes" ? /* @__PURE__ */ a(
          ut,
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
            onChange: N,
            placeholder: "Enter external link"
          }
        ) : /* @__PURE__ */ a(
          ut,
          {
            fullWidth: !0,
            value: n,
            placeholder: "Link autopopulated once uploaded",
            InputProps: { readOnly: !0 }
          }
        ),
        re && /* @__PURE__ */ S(Ne, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    C.isExternal === "no" && /* @__PURE__ */ S(Ee, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ S(
        ct,
        {
          variant: "outlined",
          component: "label",
          disabled: c,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: B })
          ]
        }
      ),
      C.selectedFile && /* @__PURE__ */ a(xt, { title: C.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(Ne, { variant: "body2", children: C.selectedFile.name.length > 20 ? `${C.selectedFile.name.substring(0, 20)}...` : C.selectedFile.name }) }),
      /* @__PURE__ */ a(
        ct,
        {
          variant: "contained",
          color: "primary",
          onClick: E,
          disabled: !C.selectedFile || c,
          children: c ? /* @__PURE__ */ a(Fo, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Hl = ({ field: e, formik: r }) => {
  const [t, n] = Ge.useState({}), o = ea(t, 300);
  Ge.useEffect(() => {
    if (r.values[e])
      try {
        const s = JSON.parse(r.values[e]);
        n(s);
      } catch {
        n({});
      }
  }, [r.values[e]]), Ge.useEffect(() => {
    const s = JSON.stringify(o);
    r.values[e] !== s && r.setFieldValue(e, s);
  }, [o, e, r, r.values[e]]);
  const l = (s, u) => {
    const f = { ...t, [s]: u };
    n(f);
  };
  return /* @__PURE__ */ a(
    cr,
    {
      fullWidth: !0,
      variant: "standard",
      error: r.touched[e] && !!r.errors[e],
      style: { marginBottom: "1rem" },
      children: Object.keys(t).map((s) => /* @__PURE__ */ S(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem"
          },
          children: [
            /* @__PURE__ */ S(Nt, { variant: "body1", sx: { width: "180px", marginRight: 2 }, children: [
              s,
              ":"
            ] }),
            /* @__PURE__ */ a(
              di,
              {
                id: s,
                name: s,
                value: t[s],
                onChange: (u) => l(s, u.target.value),
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
}, Yl = {
  boolean: xl,
  select: Tl,
  string: Rr,
  number: Dl,
  password: Sl,
  date: Pl,
  dateTime: Fl,
  time: El,
  oneToMany: Il,
  radio: Ml,
  autocomplete: Rl,
  dayRadio: $l,
  email: Rr,
  chipInput: zl,
  treeCheckbox: Gl,
  fileUpload: Ul,
  json: Hl
}, Sn = { paddingTop: "2.5px", paddingBottom: "2.5px" }, Kl = si("span")({
  color: "red !important"
}), ra = (e) => {
  const { t: r, i18n: t } = wt(), n = Ge.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((l) => l);
  return { translate: r, i18n: t, tOpts: n, tTranslate: o };
}, _l = ({ tabColumns: e, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: u, mode: f, handleSubmit: y }) => {
  const [C, h] = Ge.useState(/* @__PURE__ */ new Set()), { tOpts: c, tTranslate: m } = ra(r), { activeStep: w, setActiveStep: x } = Ge.useContext(aa), g = {};
  for (let E = 0, L = r.columns.length; E < L; E++) {
    const { field: re, skip: H } = r.columns[E];
    H && (g[H.step] = t.values[re]);
  }
  const i = (E) => C.has(E) || g[E], v = () => {
    for (let E = w + 1; E < e.length; E++)
      if (!i(E))
        return !1;
    return !0;
  }, D = () => {
    let E = w + 1;
    for (; g[E]; )
      E++;
    h((L) => new Set(L).add(w)), E >= e.length || v() ? y() : x(E);
  }, N = () => {
    let E = w - 1;
    for (; g[E] && E > 0; )
      E--;
    x(E);
  };
  if (!e?.length)
    return null;
  const B = e[w];
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(ai, { activeStep: w, sx: { marginBottom: "20px" }, children: e.map(({ title: E, key: L }, re) => /* @__PURE__ */ a(oi, { completed: i(re), children: /* @__PURE__ */ a(ii, { children: /* @__PURE__ */ a(Ne, { sx: { fontSize: "20px" }, children: m(E, c) }) }) }, L)) }),
    /* @__PURE__ */ S(Ge.Fragment, { children: [
      /* @__PURE__ */ a(na, { formElements: B.items, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: u, mode: f }),
      /* @__PURE__ */ S(nt, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        w !== 0 ? /* @__PURE__ */ a(Oe, { color: "inherit", disabled: w === 0, onClick: N, variant: "contained", sx: { mr: 2 }, children: m("Back", c) }) : null,
        /* @__PURE__ */ a(Oe, { onClick: D, variant: "contained", children: v() ? m("Finish", c) : m("Next", c) })
      ] })
    ] })
  ] });
}, na = ({ formElements: e, model: r, formik: t, data: n, onChange: o, combos: l, lookups: s, fieldConfigs: u, mode: f, isAdd: y }) => {
  const { tOpts: C, tTranslate: h } = ra(r);
  return e?.length ? /* @__PURE__ */ a(ye, { children: e.map(({ Component: c, column: m, field: w, label: x, otherProps: g }, i) => {
    const v = typeof m.relation == "function";
    return /* @__PURE__ */ S(Pr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: v ? "flex-start" : "center", children: [
      m?.showLabel !== !1 ? /* @__PURE__ */ a(Pr, { size: { xs: 3 }, sx: Sn, children: /* @__PURE__ */ S(Ne, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        h(m.label || w, C),
        ": ",
        m.required && /* @__PURE__ */ a(Kl, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ a(Pr, { size: { xs: v ? 12 : 9 }, sx: Sn, children: /* @__PURE__ */ a(c, { isAdd: y, model: r, fieldConfigs: u[w], mode: f, column: m, field: w, label: x, formik: t, data: n, onChange: o, combos: l, lookups: s, tTranslate: h, tOpts: C, ...g }) })
    ] }, i);
  }) }) : null;
}, Jl = function({ columns: e, tabs: r = {}, id: t, searchParams: n }) {
  const o = [], l = {};
  for (const u in r)
    l[u] = [];
  for (const u of e) {
    const f = u.type;
    if (u.label === null)
      continue;
    const { field: y, label: C, tab: h } = u, c = {};
    u.options && (c.options = u.options), u.dependsOn && (c.dependsOn = u.dependsOn);
    const m = Yl[f];
    if (!m || u.hideInAddGrid && t === "0")
      continue;
    (h && r[h] ? l[h] : o).push({ Component: m, field: y, label: C, column: { ...u, readOnly: n.has("showRelation") || u.readOnly }, otherProps: c });
  }
  const s = [];
  for (const u in l)
    s.push({ key: u, title: r[u], items: l[u] });
  return { formElements: o, tabColumns: s };
}, Zl = ({ model: e, formik: r, data: t, combos: n, onChange: o, lookups: l, id: s, fieldConfigs: u, mode: f, handleSubmit: y }) => {
  const C = qe.emptyIdValues.includes(s), { formElements: h, tabColumns: c } = Ge.useMemo(() => {
    const m = e.formConfig?.showTabbed, w = new URLSearchParams(window.location.search), { formElements: x, tabColumns: g } = Jl({ columns: e.columns, tabs: m ? e.tabs : {}, id: s, searchParams: w });
    return { formElements: x, tabColumns: g, showTabs: m && g.length > 0 };
  }, [e]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ a(na, { isAdd: C, formElements: h, model: e, formik: r, data: t, onChange: o, combos: n, lookups: l, fieldConfigs: u, mode: f }),
    /* @__PURE__ */ a("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ a(_l, { tabColumns: c, model: e, formik: r, data: t, onChange: o, combos: n, lookups: l, fieldConfigs: u, mode: f, handleSubmit: y }) })
  ] });
};
function Ql(e) {
  const { children: r, value: t, index: n, ...o } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      role: "tabpanel",
      hidden: t !== n,
      id: `simple-tabpanel-${n}`,
      "aria-labelledby": `simple-tab-${n}`,
      ...o,
      children: t === n && /* @__PURE__ */ a(nt, { sx: { p: 3 }, children: r })
    }
  );
}
function Xl(e) {
  return {
    id: `simple-tab-${e}`,
    "aria-controls": `simple-tabpanel-${e}`
  };
}
const es = Fn(({ relation: e, parentFilters: r, parent: t, where: n, models: o, readOnly: l }) => {
  const s = o.find(({ name: y }) => y === e);
  if (!s) return null;
  const u = { ...s, hideBreadcrumb: !0 }, f = u instanceof or ? u : new or(u);
  return f ? /* @__PURE__ */ a(
    f.ChildGrid,
    {
      readOnly: l,
      parentFilters: r,
      parent: t,
      model: u,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), ts = yt.memo(({ relations: e, parent: r, where: t = [], models: n, relationFilters: o, readOnly: l }) => {
  const [s, u] = R(0);
  return /* @__PURE__ */ S(nt, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(nt, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(fi, { value: s, onChange: (y, C) => {
      u(C);
    }, "aria-label": "relations tabs", children: e.map((y, C) => {
      const h = n.find(({ name: m }) => m === y) || {}, c = h.listTitle || h.title || y;
      return /* @__PURE__ */ a(
        pi,
        {
          label: c,
          ...Xl(C)
        },
        y
      );
    }) }) }),
    e.map((y, C) => /* @__PURE__ */ a(Ql, { value: s, index: C, children: /* @__PURE__ */ a(
      es,
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
}), aa = ir(1), rs = {}, be = {
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
}, ns = ({
  model: e,
  api: r,
  models: t,
  relationFilters: n = {},
  permissions: o = {},
  Layout: l = Zl,
  baseSaveData: s = {},
  sx: u,
  readOnly: f,
  beforeSubmit: y,
  deletePromptText: C,
  detailPanelId: h = null,
  // Grid Row Detail Panel Id
  onCancel: c,
  onSaveSuccess: m
}) => {
  const w = e.formTitle || e.title, { t: x, i18n: g } = wt(), i = q(() => ({ t: x, i18n: g }), [x, g]), v = e?.tTranslate ?? ((V) => V), { navigate: D, getParams: N, useParams: B, pathname: E } = Vr(), { relations: L = [] } = e, { stateData: re, buildUrl: H, setPageTitle: W } = je(), te = B() || N, { id: Q = "" } = te, I = h || Q.split("-")[be.editIdIndex], ge = new URLSearchParams(window.location.search), ae = ge.has(be.baseData) && ge.get(be.baseData);
  if (ae) {
    const V = JSON.parse(ae);
    typeof V === be.object && V !== null && (s = { ...s, ...V });
  }
  const [me, ce] = R(!0), [j, ue] = R({}), [$, we] = R({}), [P, O] = R(!1), U = Dt(), [G, X] = R(null), [oe, Se] = R(0), [zt, Je] = R(!1), [We, ur] = R(null), [ft, St] = R(""), Pt = typeof e.applyFieldConfig === be.function ? e.applyFieldConfig({ data: j, lookups: $ }) : rs, fe = H(e.api), Ft = Q.includes("-") && Q.split("-")[0] === "0" ? "copy" : "", ot = re.userData || {}, Vt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: d } = Zn({
    userData: ot,
    model: e,
    userDefinedPermissions: Vt
  }), { hideBreadcrumb: ht = !1, navigateBack: ve } = e, Ze = !("canEdit" in j) || j.canEdit, Ae = T(() => {
    let V;
    switch (typeof ve) {
      case be.function:
        V = ve({ params: te, searchParams: ge, data: j });
        break;
      case be.number:
      case be.string:
        V = ve;
        break;
      default:
        V = E.substring(0, E.lastIndexOf("/"));
        break;
    }
    D(V);
  }, [ve, D, te, ge, j, E]), Et = q(() => qe.emptyIdValues.includes(I), [I]), Re = q(() => Et ? { ...e.initialValues, ...j, ...s } : { ...s, ...e.initialValues, ...j }, [e.initialValues, j, I]), Te = r || fe, De = q(() => {
    if (h)
      return h;
    const V = Q.split("-");
    return V.length > 1 ? V[be.loadIdIndex] : I;
  }, [h, Q, I]), Gt = T(async () => {
    ce(!0);
    try {
      const V = await ar({
        api: Te,
        model: e,
        id: De
      });
      At(V);
    } catch (V) {
      dr("Could not load record", V.message);
    } finally {
      ce(!1);
    }
  }, [Te, e, De]);
  pe(() => {
    Gt();
  }, [I, De, e, Te, Gt]), pe(() => {
    X(e.getValidationSchema({ id: I, tTranslate: v, tOpts: i }));
  }, [I, e, X, x, i, v]);
  const Ie = zn({
    enableReinitialize: !0,
    initialValues: Re,
    validationSchema: G,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (V, { resetForm: Fe }) => {
      Object.keys(V).forEach((Z) => {
        typeof V[Z] === be.string && (V[Z] = V[Z].trim());
      }), ce(!0), zr({
        id: I,
        api: fe,
        values: V,
        model: e
      }).then((Z) => {
        if (!Z) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof m === be.function && m();
        const Ue = Z.info ? Z.info : `Record ${I === 0 ? "Added" : "Updated"} Successfully.`;
        U.showMessage(v(Ue, i)), ve !== !1 && Ae(), Fe({ values: Ie.values });
      }).catch((Z) => {
        U.showError(
          v("An error occurred, please try after some time.", i),
          Z
        ), e.reloadOnSave && Fe();
      }).finally(() => {
        ce(!1);
      });
    }
  }), qt = T(() => {
    Ie.resetForm(), Je(!1), typeof c === be.function && c(), ve !== !1 && Ae();
  }, [Ie, c, ve, Ae]), dr = T((V, Fe) => {
    ce(!1), U.showError(v(V, i), Fe), Ae();
  }, [U, Ae, v, i]), At = function({ id: V, title: Fe, record: Z, lookups: Ue }) {
    const $e = Q.indexOf("-") > -1, Me = !V || V === "0", Wt = Me ? be.create : $e ? be.copy : be.edit, Mt = Me ? "" : Z[e.linkColumn], Xe = [{ text: e.breadCrumbs }, { text: Wt }];
    $e && (Z[e.linkColumn] = ""), e.columns.forEach((Ot) => {
      Ot.skipCopy && $e && (Z[Ot.field] = "");
    }), ue(Z), we(Ue), ce(!1), Mt !== "" && Xe.push({ text: Mt }), W({
      showBreadcrumbs: !0,
      breadcrumbs: Xe
    });
  }, Pe = T((V) => {
    Ie.dirty && Ze ? Je(!0) : (typeof c === be.function && c(), ve !== !1 && Ae()), V.preventDefault();
  }, [Ie.dirty, Ze, c, ve, Ae]), de = T(async () => {
    try {
      O(!0), await $r({
        id: I,
        api: r || e.api,
        model: e
      }) === !0 && (U.showMessage(v("Record Deleted Successfully.", i)), ve !== !1 && Ae());
    } catch (V) {
      U.showError(v("An error occurred, please try after some time.", i), V?.message);
    } finally {
      O(!1);
    }
  }, [I, r, e.api, U, St, e, ve, Ae, v, i]), Tt = () => {
    St(null), O(!1);
  }, pr = T((V) => {
    const { name: Fe, value: Z } = V.target;
    ue({ ...j, [Fe]: Z });
  }, [j]), It = T(async (V) => {
    V && V.preventDefault(), typeof y === be.function && await y({ formik: Ie, model: e });
    const { errors: Fe } = Ie;
    Ie.handleSubmit();
    const Z = Object.keys(Fe)[0], Ue = Fe[Z];
    Ue && U.showError(v(Ue, i), null, "error");
    const $e = e.columns.find(
      (Me) => Me.field === Z
    ) || {};
    $e.tab && Se(Object.keys(e.tabs).indexOf($e.tab));
  }, [y, Ie, e, U, Se, v, i]), jt = [
    { text: v(w, i) },
    { text: v(I === "0" ? "New" : "Update", i) }
  ], mt = Number(I) !== 0 && !!L.length, fr = ge.has("showRelation"), Qe = !Ze || j.readOnlyRelations;
  C = C || v("Are you sure you want to delete ?", i);
  const { showPageTitle: hr = !0 } = e;
  return /* @__PURE__ */ S(ye, { children: [
    hr && /* @__PURE__ */ a(
      Jn,
      {
        navigate: D,
        title: w,
        showBreadcrumbs: !ht,
        breadcrumbs: jt,
        model: e,
        enableBackButton: ve !== void 0
      }
    ),
    /* @__PURE__ */ a(aa.Provider, { value: { activeStep: oe, setActiveStep: Se }, children: /* @__PURE__ */ S(Yo, { sx: { padding: 2, ...u }, children: [
      me ? /* @__PURE__ */ a(nt, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(_o, {}) }) : /* @__PURE__ */ S("form", { children: [
        /* @__PURE__ */ S(
          Ko,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              d && Ze && !fr && !f && /* @__PURE__ */ a(
                Oe,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: It,
                  children: v("Save", i)
                }
              ),
              /* @__PURE__ */ a(
                Oe,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Pe,
                  children: v("Cancel", i)
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Oe,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => O(!0),
                  children: v("Delete", i)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          l,
          {
            model: e,
            formik: Ie,
            data: j,
            fieldConfigs: Pt,
            onChange: pr,
            lookups: $,
            id: I,
            handleSubmit: It,
            mode: Ft
          }
        )
      ] }),
      ft && /* @__PURE__ */ S(
        _e,
        {
          open: !!ft,
          onConfirm: Tt,
          onCancel: Tt,
          title: "Info",
          hideCancelButton: !0,
          children: [
            " ",
            ft
          ]
        }
      ),
      /* @__PURE__ */ a(
        _e,
        {
          open: zt,
          onConfirm: qt,
          onCancel: () => Je(!1),
          title: v("Changes not saved", i),
          okText: v("Discard", i),
          cancelText: v("Continue", i),
          children: v("Would you like to continue to edit or discard changes?", i)
        }
      ),
      /* @__PURE__ */ a(
        _e,
        {
          open: P,
          onConfirm: de,
          onCancel: () => {
            O(!1), ur(null);
          },
          title: v(We ? "Error Deleting Record" : "Confirm Delete", i),
          children: C
        }
      ),
      mt ? /* @__PURE__ */ a(
        ts,
        {
          readOnly: Qe,
          models: t,
          relationFilters: n,
          relations: L,
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
}, as = {}, Pn = !0, os = {
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
    const l = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    n || (n = `${t.replaceAll(tr.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const s = { ...r.defaultValues }, u = l || t;
    Object.assign(this, {
      standard: !0,
      name: u,
      permissions: { ...or.defaultPermissions },
      idProperty: o,
      linkColumn: `${u}Name`,
      overrideFileName: t,
      preferenceId: u,
      tableName: u,
      module: l,
      ...r,
      api: n
    }), this.columnVisibilityModel = this._getColumnVisibilityModel(), this.defaultValues = this._getDefaultValues(s);
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
      r[n] = t.defaultValue === void 0 ? os[t.type] || "" : t.defaultValue;
    }
    return r;
  }
  getValidationSchema({ id: r, tTranslate: t = (o) => o, tOpts: n = {} } = {}) {
    const { columns: o } = this, l = {};
    for (const s of o) {
      const { field: u, label: f, header: y, type: C = "string", requiredIfNew: h = !1, required: c = !1, min: m = "", max: w = "", validate: x } = s, g = f || y || u;
      if (!g || f === null || f === "") continue;
      let i;
      switch (C) {
        case "string":
          i = he.string().nullable().trim().label(g), m && !isNaN(Number(m)) && (i = i.min(Number(m), t(`${g} must be at least ${m} characters long`, n))), w && !isNaN(Number(w)) && (i = i.max(Number(w), t(`${g} must be at most ${w} characters long`, n))), c && (i = i.trim().required(t(`${g} is required`, n)));
          break;
        case "boolean":
          i = he.bool().nullable().transform((v, D) => D === "" ? null : v).label(g);
          break;
        case "radio":
        case "dayRadio":
          i = he.mixed().label(g), c && (i = i.required(t(`Select at least one option for ${g}`, n)));
          break;
        case "date":
          i = he.date().nullable().transform((v, D) => D === "" || D === null ? null : v).label(g), c && (i = i.required(t(`${g} is required`, n)));
          break;
        case "dateTime":
          i = he.date().nullable().transform((v, D) => D === "" || D === null ? null : v).label(g), c && (i = i.required(t(`${g} is required`, n)));
          break;
        case "select":
        case "autocomplete":
          c ? i = he.string().trim().label(g).required(t(`Select at least one ${g}`, n)) : i = he.string().nullable();
          break;
        case "password":
          i = he.string().label(g).test("ignore-asterisks", t(`${g} must be a valid password.`, n), (v) => {
            if (v === "******") return !0;
            const D = Number(m) || 8, N = Number(w) || 50, B = s.regex || tr.password;
            return he.string().min(D, t(`${g} must be at least ${D} characters`, n)).max(N, t(`${g} must be at most ${N} characters`, n)).matches(
              B,
              t(`${g} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, n)
            ).isValidSync(v);
          });
          break;
        case "email":
          i = he.string().trim().matches(
            s.regex || tr.email,
            t("Email must be a valid email", n)
          );
          break;
        case "number":
          c ? i = he.number().label(g).required(t(`${g} is required.`, n)) : i = he.number().nullable(), m !== void 0 && m !== "" && !isNaN(Number(m)) && (i = i.min(Number(m), t(`${g} must be greater than or equal to ${m}`, n))), w !== void 0 && w !== "" && !isNaN(Number(w)) && (i = i.max(Number(w), t(`${g} must be less than or equal to ${w}`, n)));
          break;
        case "fileUpload":
          i = he.string().trim().label(g);
          break;
        default:
          i = he.mixed().nullable().label(g);
          break;
      }
      if (c && C !== "string" && (i = i.required(t(`${g} is required`, n))), h && (!r || r === "") && (i = i.trim().required(t(`${g} is required`, n))), x) {
        const v = tr.compareValidatorRegex.exec(x);
        if (v) {
          const D = v[1], N = o.find(
            (B) => (B.formField === D || B.field) === D
          );
          i = i.oneOf(
            [he.ref(D)],
            t(`${g} must match ${N.label}`, n)
          );
        }
      }
      l[u] = i;
    }
    return he.object({ ...l, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ a(ns, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ a(wn, { model: this, showRowsSelected: Pn, ...t });
  ChildGrid = (r) => /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(wn, { model: this, ...r, customStyle: as, showRowsSelected: Pn }),
    /* @__PURE__ */ a(Eo, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  _e as DialogComponent,
  wn as GridBase,
  Ui as HelpModal,
  yn as MuiTypography,
  Jn as PageTitle,
  Tc as RouterProvider,
  Wn as SnackbarContext,
  Fc as SnackbarProvider,
  Ac as StateProvider,
  or as UiModel,
  Ec as crudHelper,
  Ei as daDKGrid,
  Ti as deDEGrid,
  Mi as elGRGrid,
  Ri as esESGrid,
  ki as frFRGrid,
  rt as httpRequest,
  Li as itITGrid,
  Wi as locales,
  Gi as ptPT,
  zi as trTRGrid,
  Fi as useMobile,
  Vr as useRouter,
  Dt as useSnackbar,
  je as useStateContext
};
//# sourceMappingURL=index.js.map
