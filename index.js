import { jsx as a, jsxs as S, Fragment as ye } from "react/jsx-runtime";
import * as ze from "react";
import yt, { createContext as ir, useContext as Br, useState as R, useEffect as pe, useRef as rr, useCallback as A, useMemo as q, memo as Pn, useId as La, createElement as kr } from "react";
import $a from "@mui/material/Snackbar";
import Va from "@mui/material/Alert";
import Me from "@mui/material/Button";
import za from "@mui/material/Dialog";
import Ga from "@mui/material/DialogActions";
import qa from "@mui/material/DialogContent";
import ja from "@mui/material/DialogContentText";
import Wa from "@mui/material/DialogTitle";
import * as at from "@mui/x-data-grid-premium";
import { GridFooterContainer as Ua, GridFooter as Ha, getGridDateOperators as Fn, useGridSelector as En, gridFilterModelSelector as Ya, useGridApiRef as An, GridActionsCellItem as Ar, DataGridPremium as Tn, GridToolbarExportContainer as Ka, Toolbar as _a, ColumnsPanelTrigger as Ja, FilterPanelTrigger as Za, GRID_CHECKBOX_SELECTION_COL_DEF as Qa, getGridStringOperators as Xa, getGridBooleanOperators as eo, useGridApiContext as to, gridRowSelectionStateSelector as ro } from "@mui/x-data-grid-premium";
import In from "@mui/icons-material/Delete";
import no from "@mui/icons-material/FileCopy";
import ao from "@mui/icons-material/Article";
import Mn from "@mui/icons-material/Edit";
import nt from "@mui/material/Box";
import Nt from "@mui/material/Typography";
import lr from "@mui/material/TextField";
import { useTranslation as wt, withTranslation as oo } from "react-i18next";
import { Typography as ke, Dialog as io, DialogTitle as lo, Grid as xe, DialogContent as so, Card as co, CardContent as uo, Breadcrumbs as po, Link as fo, Button as ct, IconButton as Lt, Box as Fe, FormControl as Ct, Select as Tr, MenuItem as Ke, Tooltip as xt, Menu as ho, List as mo, ListItemButton as vr, ListItemIcon as Dr, ListItem as go, ListItemText as bo, TextField as ut, FormControlLabel as dt, Checkbox as yo, Stack as fn, InputLabel as hn, Badge as Co, FormHelperText as pt, useTheme as vt, Input as xo, FilledInput as wo, OutlinedInput as vo, InputAdornment as On, RadioGroup as Nr, Radio as bt, styled as Do, Avatar as So, CircularProgress as Po, Divider as Fo } from "@mui/material";
import Eo from "@mui/icons-material/Check";
import Ir from "@mui/icons-material/Close";
import Ao from "@mui/icons-material/Help";
import { Replay as To, Close as Io, GridOn as Mo, TableChart as Sr, Code as Oo, Language as Ro, DataObject as Bo } from "@mui/icons-material";
import ne from "dayjs";
import Rn from "dayjs/plugin/utc";
import ko from "dayjs/plugin/timezone";
import { DatePicker as Bn } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker as kn } from "@mui/x-date-pickers/DateTimePicker";
import Lr from "dayjs/plugin/utc.js";
import { LocalizationProvider as Nn } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs as Ln } from "@mui/x-date-pickers/AdapterDayjs";
import Mr from "@mui/icons-material/Add";
import No from "@mui/icons-material/Remove";
import Lo from "@mui/icons-material/FilterListOff";
import $o from "@mui/icons-material/ViewColumn";
import Vo from "@mui/icons-material/FilterList";
import { styled as sr } from "@mui/material/styles";
import zo from "@mui/icons-material/Save";
import mn from "@mui/icons-material/Settings";
import Go from "@mui/icons-material/Refresh";
import { useFormik as $n } from "formik";
import * as he from "yup";
import { DateTimePicker as qo, DatePicker as jo } from "@mui/x-date-pickers";
import Vn from "@mui/material/MenuItem";
import Wo from "@mui/icons-material/History";
import Uo from "@mui/icons-material/FileDownload";
import zn from "@mui/material/Checkbox";
import Ho from "@mui/material/Paper";
import Yo from "@mui/material/Stack";
import Ko from "@mui/material/CircularProgress";
import _o from "@mui/material/FormControlLabel";
import { NumberField as nr } from "@base-ui/react/number-field";
import Jo from "@mui/icons-material/KeyboardArrowUp";
import Gn from "@mui/icons-material/KeyboardArrowDown";
import Zo from "@mui/icons-material/VisibilityOff";
import Qo from "@mui/icons-material/Visibility";
import { TimePicker as Xo } from "@mui/x-date-pickers/TimePicker";
import ei from "@mui/icons-material/Clear";
import cr from "@mui/material/FormControl";
import ti from "@mui/material/InputLabel";
import ri from "@mui/material/Select";
import Pr from "@mui/material/Grid";
import qn from "@mui/material/Autocomplete";
import ni from "@mui/material/Stepper";
import ai from "@mui/material/Step";
import oi from "@mui/material/StepLabel";
import { grey as ii } from "@mui/material/colors";
import li from "@emotion/styled";
import si from "@mui/material/Chip";
import { SimpleTreeView as ci } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem as gn } from "@mui/x-tree-view/TreeItem";
import ui from "@mui/material/Input";
import di from "@mui/material/Tab";
import pi from "@mui/material/Tabs";
const jn = ir(null), fi = "bottom", hi = "center", mi = yt.forwardRef(function(r, t) {
  return /* @__PURE__ */ a(Va, { elevation: 6, ref: t, variant: "filled", ...r });
}), Ec = ({ children: e }) => {
  const [r, t] = R(null), [n, o] = R(!1), [i, s] = R(null), [c, h] = R(null), y = function(u, m, w = "info", x) {
    typeof u != "string" && (u = u.toString()), m && typeof m != "string" && (m = m.toString()), t(m ? `${u}: ${m}` : u), s(w), o(!0), h(x);
  }, C = function(u, m, w = "error", x) {
    y(u, m, w, x);
  }, f = function() {
    o(!1), h(null), c && c();
  };
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(
      jn.Provider,
      {
        value: { showMessage: y, showError: C },
        children: e
      }
    ),
    /* @__PURE__ */ a($a, { open: n, autoHideDuration: 6e3, onClose: f, anchorOrigin: { vertical: fi, horizontal: hi }, children: /* @__PURE__ */ a(mi, { severity: i, children: r }) })
  ] });
}, Dt = function() {
  return Br(jn);
}, _e = ({ open: e, onConfirm: r, title: t = "Confirm", onCancel: n, okText: o, cancelText: i, yesNo: s = !1, children: c, maxWidth: h = "sm", fullWidth: y = !0, ...C }) => (o = o || (s ? "Yes" : "Ok"), i = i || (s ? "No" : "Cancel"), /* @__PURE__ */ S(
  za,
  {
    ...C,
    open: e,
    onClose: n,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    maxWidth: h,
    fullWidth: y,
    children: [
      /* @__PURE__ */ a(Wa, { id: "alert-dialog-title", sx: { fontSize: c ? "inherit" : "1.25rem" }, children: t }),
      c && /* @__PURE__ */ a(qa, { dividers: !0, children: /* @__PURE__ */ a(ja, { children: c }) }),
      (n || r) && /* @__PURE__ */ S(Ga, { children: [
        n && /* @__PURE__ */ a(Me, { onClick: n, children: i }),
        r && /* @__PURE__ */ a(Me, { onClick: r, autoFocus: !0, children: o })
      ] })
    ]
  }
)), Fr = {
  OK: 200,
  SESSION_EXPIRED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Wn = (e) => {
  const r = new FormData();
  for (const t in e)
    typeof e[t] == "object" ? r.append(t, JSON.stringify(e[t])) : r.append(t, e[t]);
  return r;
}, gi = (e, r) => {
  const t = new URL(e);
  for (const n in r) {
    const o = typeof r[n] == "object" ? JSON.stringify(r[n]) : r[n];
    t.searchParams.append(n, o);
  }
  window.open(t, "_blank").focus();
}, Un = async (e) => {
  const {
    method: r = "GET",
    url: t,
    data: n,
    headers: o = {},
    credentials: i = "include",
    ...s
  } = e, c = {
    method: r,
    credentials: i,
    headers: {
      ...o
    },
    ...s
  };
  n && (o["Content-Type"] === "multipart/form-data" ? (delete c.headers["Content-Type"], c.body = n instanceof FormData ? n : Wn(n)) : (c.headers["Content-Type"] = o["Content-Type"] || "application/json", c.body = typeof n == "string" ? n : JSON.stringify(n)));
  const h = await fetch(t, c), y = h.headers.get("content-type") || {};
  return {
    status: h.status,
    data: y.includes("application/json") ? await h.json() : await h.text(),
    headers: Object.fromEntries(h.headers.entries())
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
}), rt = async ({
  url: e,
  params: r = {},
  history: t,
  jsonPayload: n = !1,
  method: o = "POST",
  signal: i,
  additionalParams: s = {},
  additionalHeaders: c = {},
  dataParser: h = Ne.raw,
  onParseError: y
}) => {
  if (r.exportData)
    return gi(e, r);
  const C = {
    method: o,
    credentials: "include",
    url: e,
    headers: n ? { ...c } : { "Content-Type": "multipart/form-data", ...c },
    ...i && { signal: i },
    ...s
  };
  r && Object.keys(r).length > 0 && (C.data = n ? r : Wn(r));
  try {
    const f = await Un(C);
    let u = f.data;
    if (f.status === Fr.SESSION_EXPIRED && t) {
      t("/login");
      return;
    }
    if (f.status === Fr.FORBIDDEN)
      return { error: !0, message: u.message || "Access Denied!" };
    if (f.status !== Fr.OK)
      return { error: !0, message: u.message || "An error occurred" };
    try {
      u = h(u);
    } catch (m) {
      return y ? y(m, u) : {
        error: !0,
        message: "Failed to parse response data",
        parseError: m.message,
        rawData: u
      };
    }
    return u;
  } catch (f) {
    return f.name === "AbortError" ? { error: !0, aborted: !0, message: f.message || "Request aborted" } : { error: !0, message: f.message || "Network error" };
  }
}, bi = ["date", "dateTime"], yi = ["singleSelect"], Ci = 1e6;
function xi(e) {
  const { operator: r, value: t, type: n } = e, o = ["isEmpty", "isNotEmpty"].includes(r), i = t != null && (t !== "" || n === "number" && t === 0 || n === "boolean" && t === !1);
  return o || i;
}
const wi = (e, r = !1) => {
  if (typeof e != "string" || e === void 0 || e === null)
    return e;
  if (e.length === 0)
    return null;
  if (e.length === 17) {
    const n = +e.slice(0, 4), o = +e.slice(4, 6) - 1, i = +e.slice(6, 8), s = +e.slice(8, 10), c = +e.slice(10, 12), h = +e.slice(12, 14), y = +e.slice(14, 17);
    return r ? new Date(Date.UTC(n, o, i, s, c, h, y)) : new Date(n, o, i, s, c, h, y);
  }
  if (e.length === 24)
    return r ? new Date(e) : new Date(e.slice(0, -1));
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t;
}, vi = ({ gridColumns: e, page: r, pageSize: t, sortModel: n, filterModel: o, baseFilters: i, action: s = "list", extraParams: c = {}, model: h, api: y }) => {
  const C = s === "export" && h.isElasticExport === !0, f = [], u = [], m = [];
  e.forEach(({ lookup: D, type: N, field: B, localize: E = !1, filterable: L = !0, dependsOn: te }) => {
    bi.includes(N) && m.push({ field: B, localize: E }), D && !f.includes(D) && yi.includes(N) && L && (f.push(D), u.push({ lookup: D, dependsOn: te }));
  });
  const w = [];
  o?.items?.length && o.items.forEach((D) => {
    if (xi(D)) {
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
  }), i && Array.isArray(i) && w.push(...i);
  const x = {
    start: r * t,
    limit: C ? h.exportSize || Ci : t,
    ...c,
    logicalOperator: o.logicOperator,
    sort: n.map((D) => (D.filterField || D.field) + " " + D.sort).join(","),
    where: w,
    isElasticExport: C,
    model: h.module,
    fileName: h.overrideFileName
  };
  f.length && (x.lookups = f.join(",")), u.length && (x.lookupWithDeps = JSON.stringify(u)), h?.limitToSurveyed && (x.limitToSurveyed = h?.limitToSurveyed);
  let g = `${y}/${s}`;
  const l = new URLSearchParams();
  c.template && l.append("template", c.template), c.configFileName && l.append("configFileName", c.configFileName);
  const v = l.toString();
  return v && (g += `?${v}`), { requestData: x, url: g, where: w, dateColumns: m };
}, Or = async (e = {}) => {
  const { contentType: r, columns: t, extraParams: n = {}, action: o = "list", model: i, signal: s } = e, { requestData: c, url: h, where: y, dateColumns: C } = vi(e);
  if (r) {
    c.responseType = r, c.columns = t, c.userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone, c.userTimezoneOffset = (/* @__PURE__ */ new Date()).getTimezoneOffset(), typeof i.createRequestPayload == "function" && await i.createRequestPayload(c, { where: y, url: h, dataParsers: Ne, ...e });
    const m = document.createElement("form");
    if (m.setAttribute("method", "POST"), m.setAttribute("id", "exportForm"), m.setAttribute("target", "_blank"), !n.template)
      for (const w in c) {
        let x = c[w];
        if (x == null)
          continue;
        typeof x != "string" && (x = JSON.stringify(x));
        const g = document.createElement("input");
        g.type = "hidden", g.name = w, g.value = x, m.append(g);
      }
    m.setAttribute("action", c.url || h), document.body.appendChild(m), m.submit(), setTimeout(() => {
      m.remove();
    }, 0);
    return;
  }
  const f = {
    url: h,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0,
    params: c,
    dataParser: Ne.json,
    signal: s
  };
  typeof i.createRequestPayload == "function" && await i.createRequestPayload(f, { where: y, dataParsers: Ne, ...e });
  const u = await rt(f);
  if (u?.aborted)
    return u;
  if (u?.error || u?.success === !1)
    throw new Error($t(u) || "An error occurred while fetching data");
  return typeof i.parseResponsePayload == "function" && i.parseResponseActions.includes(o) && await i.parseResponsePayload({ responseData: u, model: i, dateColumns: C, action: o, ...e }), u.records.forEach((m) => {
    C.forEach((w) => {
      const { field: x, localize: g } = w;
      m[x] && (m[x] = wi(m[x], g));
    }), i.columns.forEach(({ field: w, displayIndex: x }) => {
      x && (m[w] = m[x]);
    });
  }), u;
}, ar = async (e = {}) => {
  let { api: r, id: t, model: n, parentFilters: o, where: i = {} } = e;
  r = r || n.api;
  const s = new URLSearchParams(), c = `${r}/${t ?? "-"}`, h = [];
  (n.formDef || n.columns)?.forEach((l) => {
    l.lookup && !h.includes(l.lookup) && !l.dependsOn && h.push(l.lookup);
  }), s.set("lookups", h), i && Object.keys(i)?.length && s.set("where", JSON.stringify(i));
  const C = {
    url: `${c}?${s.toString()}`,
    method: "GET",
    jsonPayload: !0
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(C, { action: "load", dataParsers: Ne, ...e });
  const f = await rt(C);
  if (f?.error || f?.success === !1)
    throw new Error($t(f) || "Load failed");
  typeof n.parseResponsePayload == "function" && n.parseResponseActions.includes("load") && await n.parseResponsePayload({ responseData: f, model: n, action: "load", ...e });
  const { data: u, lookups: m } = f || {};
  let w = u[n.linkColumn];
  const x = n.columns.find((l) => l.field === n.linkColumn);
  if (x && x.lookup && m && m[x.lookup] && m[x.lookup]?.length) {
    const l = m[x.lookup].find((v) => v.value === w);
    l && (w = l.label);
  }
  const g = { ...n.defaultValues };
  return { id: t, title: w, record: { ...g, ...u, ...o }, lookups: m };
}, $r = async function(e = {}) {
  const { id: r, api: t, model: n } = e;
  if (!r)
    throw new Error("Delete failed. No active record.");
  const o = {
    url: `${t}/${r}`,
    method: "DELETE"
  };
  typeof n.createRequestPayload == "function" && await n.createRequestPayload(o, { action: "delete", dataParsers: Ne, ...e });
  const i = await rt(o);
  if (i?.error || i?.success === !1)
    throw new Error($t(i) || "Delete failed");
  return !0;
}, Vr = async function(e = {}) {
  const { id: r, api: t, values: n, model: o } = e;
  let i, s;
  r !== 0 ? (i = `${t}/${r}`, s = "PUT") : (i = t, s = "POST");
  const c = {
    url: i,
    method: s,
    params: n,
    additionalHeaders: {
      "Content-Type": "application/json"
    },
    jsonPayload: !0
  };
  typeof o.createRequestPayload == "function" && await o.createRequestPayload(c, { action: "save", dataParsers: Ne, ...e });
  const h = await rt(c);
  if (h?.error || h?.success === !1)
    throw new Error($t(h) || "Save failed");
  return h;
}, Hn = async (e = {}) => {
  let { api: r, model: t, lookups: n, scopeId: o, reqData: i } = e;
  r = r || t.api;
  const s = new URLSearchParams(), c = `${r}/lookups`;
  s.set("lookups", n), s.set("scopeId", o);
  const h = {
    url: `${c}?${s.toString()}`,
    method: "GET",
    jsonPayload: !0,
    ...i
  };
  typeof t.createRequestPayload == "function" && await t.createRequestPayload(h, { action: "lookups", dataParsers: Ne, ...e });
  const y = await rt(h);
  if (y?.error || y?.success === !1)
    throw new Error($t(y) || "Could not load lookups");
  return typeof t.parseResponsePayload == "function" && t.parseResponseActions.includes("lookups") ? await t.parseResponsePayload({ responseData: y, model: t, action: "lookups", ...e }) : y;
}, Ac = {
  getList: Or,
  getRecord: ar,
  deleteRecord: $r,
  saveRecord: Vr,
  getLookups: Hn
}, Di = ({ pagination: e, apiRef: r, tTranslate: t = (n) => n }) => {
  const n = r.current.state.pagination.paginationModel.page, o = r.current.state.pagination.paginationModel.pageSize, i = r.current.state.rows.totalRowCount, s = Math.ceil(i / o), { t: c, i18n: h } = wt(), y = { t: c, i18n: h }, [C, f] = R(n + 1), u = function(x) {
    let g = x.target?.value;
    g === "" ? f("") : (g = parseInt(g), g = isNaN(g) || g < 1 ? 1 : g, f(g));
  };
  pe(() => {
    f(n + 1);
  }, [n, o]);
  const m = function() {
    let x = C === "" ? 1 : C;
    x = Math.max(x, 1), x = Math.min(x, s), r.current.setPage(x - 1), f(x), C === "" && f(1);
  }, w = (x) => {
    const g = x.which || x.keyCode, l = String.fromCharCode(g);
    /\d/.test(l) || x.preventDefault();
  };
  return /* @__PURE__ */ S(Ua, { children: [
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
          onChange: u,
          onKeyPress: w,
          disabled: !i
        }
      ),
      /* @__PURE__ */ a(Me, { disabled: !i, size: "small", onClick: m, children: t("Go", y) })
    ] }) }),
    /* @__PURE__ */ a(Ha, {})
  ] });
}, Si = /\${((\w+)\.)?(\w+)}/g, Pi = function(e, r, { template: t = Si, keepMissingTags: n = !1 } = {}) {
  return !e || !r ? e : e.replace(t, function(o, i, s, c) {
    const h = s ? r[s] || {} : r;
    return h[c] === void 0 ? n ? o : "" : h[c];
  });
}, Xt = {
  replaceTags: Pi
};
function bn({ variant: e = "h2", component: r = "h2", text: t = "", name: n = null, ...o }) {
  return /* @__PURE__ */ S(ke, { variant: e, component: r, ...o, children: [
    t,
    n && ` ${n}`
  ] });
}
function Fi(e = !1) {
  const r = i(), [t, n] = R(r);
  function o() {
    setTimeout(() => {
      n(i());
    }, 10);
  }
  pe(() => (window.addEventListener("resize", o), () => {
    window.removeEventListener("resize", o);
  }), []);
  function i() {
    let s = typeof window.navigator > "u" ? "" : navigator.userAgent;
    const c = !!s.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
    s = s.toLowerCase();
    const h = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(s);
    let y = null;
    return window.innerWidth <= window.innerHeight ? y = "portrait" : y = "landscape", { mobile: c, tablet: h, portrait: y === "portrait", landscape: y === "landscape" };
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
}, Vi = {
  Jumptopage: "Sayfaya atla",
  Go: "Gitmek",
  InthisspacewewillsoonbringyouadashboardofmainoverviewKPIsforeasyaccess: "Bu alanda yakında size kolay erişim için ana genel bakış KPI larının bir kontrol panelini sunacağız",
  Pages: "Sayfalar",
  MuiTablePagination: {
    labelRowsPerPage: "Sayfa başına satır"
  }
}, zi = {
  ...at.trTR,
  ...Vi
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
  "tr-TR": zi,
  "es-ES": Bi,
  "da-DK": Ai,
  "de-DE": Ii,
  "el-GR": Oi,
  "fr-FR": Ni,
  "pt-PT": Gi,
  "it-IT": $i
};
ne.extend(Rn);
ne.extend(ko);
const Yn = ir(), Kn = ir(null), yn = () => console.warn("SnackbarProvider not found. Wrap StateProvider with SnackbarProvider."), Tc = ({ children: e, apiEndpoints: r = {} }) => {
  const [t, n] = R("en"), [o, i] = R("MM/DD/YYYY hh:mm:ss A"), [s, c] = R(null), [h, y] = R(null), [C, f] = R(null), [u, m] = R(null), [w, x] = R(""), [g, l] = R(!1), { t: v, i18n: D } = wt(), N = Dt(), B = rr(r), E = A((P, M) => {
    B.current[P] = M;
  }, []), L = A((P) => B.current[P || "default"] || "", []), te = A((P, M) => `${B.current[M || "default"] || ""}${P}`, []), H = A((P = !0) => {
    l(P);
  }, []), W = A((P, M, U) => {
    if (U != null) {
      const G = U;
      let ee = P ? "DD-MM-YYYY" : "DD-MM-YYYY hh:mm:ss A";
      return G && (ee = G.split(" "), ee[0] = ee[0].toUpperCase(), P ? ee = ee[0] : M ? ee = ee[0].toUpperCase() : (ee[1] += ee[1].includes(":ss") ? "" : ":ss", ee = ee.join(" "))), ee;
    }
    return P?.split(" ")[0] || "DD-MM-YYYY";
  }, []), X = A(({ value: P, useSystemFormat: M, showOnlyDate: U = !1, state: G }) => {
    if (!P) return null;
    const ee = W(M, U, G);
    return ne(P).format(ee);
  }, [W]), Q = A(() => {
    const P = t, M = Wi[P];
    function U(G) {
      return P === "pt-PT" || P === "ptPT" ? M.components.MuiDataGrid.defaultProps.localeText[G] || G : M[G] || G;
    }
    return { getLocalizedString: U };
  }, [t]), T = A((P) => {
    n(P);
  }, []), ge = A((P) => {
    c(P);
  }, []), ae = A((P) => {
    f(P);
  }, []), me = A((P) => {
    m(P);
  }, []), se = A((P) => {
    x(P);
  }, []), j = A((P) => {
    i(P);
  }, []), ce = A((P) => {
    y(P);
  }, []), $ = q(() => ({
    locale: t,
    dateTime: o,
    pageTitle: s,
    modal: h,
    pageBackButton: C,
    userData: u,
    timeZone: w
  }), [t, o, s, h, C, u, w]), we = q(() => ({
    // State data
    stateData: $,
    // Loader management
    isLoading: g,
    showLoader: H,
    // Snackbar utilities
    showMessage: N?.showMessage || yn,
    showError: N?.showError || yn,
    // i18n utilities
    dayjs: ne,
    t: v,
    i18n: D,
    // Date/time utilities
    systemDateTimeFormat: W,
    formatDate: X,
    useLocalization: Q,
    // API utilities
    getApiEndpoint: L,
    setApiEndpoint: E,
    buildUrl: te,
    // App-level state setters with meaningful names
    setLocale: T,
    setPageTitle: ge,
    setPageBackButton: ae,
    setUserData: me,
    setTimeZone: se,
    setDateTimeFormat: j,
    setModal: ce
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
    X,
    Q,
    T,
    ge,
    ae,
    me,
    se,
    j,
    ce,
    te
  ]);
  return /* @__PURE__ */ a(Yn.Provider, { value: we, children: e });
}, Ic = Kn.Provider, zr = () => Br(Kn), qe = () => {
  const e = Br(Yn);
  if (e === void 0)
    throw new Error("useStateContext must be used within a StateProvider");
  return e;
}, Ui = () => {
  const [e, r] = R(), [t, n] = R(!1), { stateData: o, setModal: i } = qe(), s = o.modal, c = 16 / 9;
  let h = (window.outerWidth - 10) / window.innerWidth * 100;
  const y = () => {
    let f = document.getElementById("tutorial-iframe");
    f ? (f = f.offsetWidth, f = f / window.innerWidth) : f = 0.9;
    const u = window.innerWidth * f * (1 / c), m = window.innerHeight - 180;
    r(Math.min(u, m));
  };
  pe(() => {
    s?.status && (n(!0), y());
  }, [s, h]), pe(() => (window.addEventListener("resize", y), () => {
    window.removeEventListener("resize", y);
  }), []);
  function C() {
    const f = document.getElementById("tutorial-iframe");
    f.src = s?.data?.url;
  }
  return /* @__PURE__ */ a("div", { children: s?.status && /* @__PURE__ */ S(io, { fullWidth: !0, maxWidth: "lg", open: s.status, onClose: () => {
    i({ status: !1, data: {} });
  }, children: [
    /* @__PURE__ */ a(lo, { className: "pt-2 pb-0", children: /* @__PURE__ */ S(xe, { container: !0, spacing: 1, children: [
      /* @__PURE__ */ S(xe, { size: 11, children: [
        /* @__PURE__ */ S(ke, { variant: "h7", component: "div", children: [
          " ",
          s?.data?.title || ""
        ] }),
        /* @__PURE__ */ a(ke, { variant: "caption", component: "div", children: s?.data?.subTitle || /* @__PURE__ */ a(ye, { children: " " }) })
      ] }),
      /* @__PURE__ */ S(xe, { className: "text-right", size: 1, children: [
        /* @__PURE__ */ a(To, { className: "cursor_pointer mt-2 mr-2", onClick: C }),
        /* @__PURE__ */ a(Io, { className: "cursor_pointer mt-2", onClick: () => {
          i({ status: !1, data: {} });
        } })
      ] })
    ] }) }),
    /* @__PURE__ */ S(so, { dividers: !0, children: [
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
  title: i = "",
  titleClass: s = "text-theme-blue text-max-width",
  showBreadcrumbs: c,
  breadcrumbs: h = [],
  enableBackButton: y = !1,
  breadcrumbColor: C,
  showHelpButton: f = !1,
  model: u
}) {
  const m = Fi(!0), w = h.length - 1, x = c && h.length, { t: g, i18n: l } = wt(), v = q(() => ({ t: g, i18n: l }), [g, l]), D = u?.tTranslate ?? ((B) => B), N = () => {
    r(-1);
  };
  return pe(() => {
    i && (document.title = i);
  }, [i]), /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(bn, { className: "print-only", text: D(e, v) }),
    x && /* @__PURE__ */ S(ye, { children: [
      /* @__PURE__ */ a(co, { sx: { mb: 3 }, children: /* @__PURE__ */ S(uo, { sx: { backgroundColor: C || "#fff" }, children: [
        /* @__PURE__ */ S(xe, { container: !0, children: [
          /* @__PURE__ */ a(xe, { sx: { display: "flex", alignItems: "center", flex: 1 }, children: /* @__PURE__ */ a(po, { variant: "h5", "aria-label": "breadcrumb", separator: ">", className: `${s} breadcrumbs-text-title text-max-width`, children: h.map((B, E) => E < w ? /* @__PURE__ */ a(fo, { onClick: N, className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", sx: { textDecoration: "none", color: "#1976d2" }, children: B.text }, E) : /* @__PURE__ */ a(ke, { className: `${s} breadcrumbs-text-title text-max-width`, variant: "inherit", children: B.text }, E)) }) }),
          y && /* @__PURE__ */ a(xe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(ct, { variant: "contained", onClick: N, children: D("Back", v) }) }),
          f && /* @__PURE__ */ a(xe, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end" }, children: /* @__PURE__ */ a(Lt, { color: "primary", title: D("Help", v), size: "large", children: /* @__PURE__ */ a(Ao, { fontSize: "inherit" }) }) })
        ] }),
        /* @__PURE__ */ a(Fe, { className: "app-page-title--first", children: /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("div", { style: { display: m ? "block" : "flex", alignItems: "center" }, children: /* @__PURE__ */ a("div", { style: { flex: "1 0 auto" }, children: /* @__PURE__ */ a(
          bn,
          {
            className: `${s} page-text-title`,
            variant: "p",
            text: D(e, v),
            name: t
          }
        ) }) }) }) }),
        !m && /* @__PURE__ */ S(ye, { children: [
          /* @__PURE__ */ S(Fe, { children: [
            " ",
            n && /* @__PURE__ */ a(n, {}),
            " "
          ] }),
          /* @__PURE__ */ S(Fe, { children: [
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
const _n = oo()(Hi), Ge = {
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
}, Jn = ({ userData: e = {}, model: r, userDefinedPermissions: t }) => {
  const { permissions: n = [] } = e;
  t = t || { add: !0, edit: !0, delete: !0 };
  const o = n.find((i) => i.Module === r.module);
  return o ? {
    canAdd: t.add && !!o[Ge.permissionsMapper.add],
    canEdit: t.edit && !!o[Ge.permissionsMapper.edit],
    canDelete: t.delete && !!o[[Ge.permissionsMapper.delete]]
  } : { canAdd: t.add, canEdit: t.edit, canDelete: t.delete };
};
ne.extend(Lr);
const Yi = {
  date: Bn,
  dateTime: kn
}, Ki = "-10px", _i = "-16px", Ji = (e) => {
  const { fixedFilterFormat: r } = Ge, { item: t, applyValue: n, convert: o, colDef: i } = e, { systemDateTimeFormat: s, stateData: c } = qe(), h = i?.type || "date", y = r[h], C = i?.localize ?? e.localize ?? !1, f = (l) => {
    const v = ne(l);
    return v.isValid() && v.year() > 1900;
  }, u = s(h !== "dateTime", !1, c.dateTime), m = (l) => {
    if (!(h !== "date" && h !== "dateTime" || ((D) => typeof D != "string" ? !1 : !ne(D, u, !0).isValid())(l))) {
      if (o || C) {
        if (!l) {
          n({ ...t, value: null });
          return;
        }
        l = ne(l).utc(), n({ ...t, value: l });
        return;
      }
      if (!f(l)) {
        n({ ...t, value: null });
        return;
      }
      n({ ...t, value: l.format(y) });
    }
  }, w = (l) => {
    if (l && l === r.OverrideDateFormat) {
      const v = l.split("-");
      return v.length === 3 ? v[1] : null;
    }
  }, x = Yi[h], g = t?.value ? ne(t.value) : null;
  return /* @__PURE__ */ a(Nn, { dateAdapter: Ln, children: /* @__PURE__ */ a(
    x,
    {
      fullWidth: !0,
      format: u,
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
        fieldMonthPlaceholder: () => w(u) === "MMM" ? "MMM" : "MM"
      }
    }
  ) });
}, Er = (e) => Fn().map((r) => ({
  ...r,
  InputComponent: r.InputComponent ? (t) => /* @__PURE__ */ a(Ji, { ...t, ...e }) : void 0
})), Zi = {
  IsAnyOf: "isAnyOf"
}, Qi = (e) => {
  const { column: r, item: t, applyValue: n, apiRef: o } = e, i = r?.dataRef?.current?.lookups;
  let s = r.customLookup || i[r.lookup] || [];
  typeof r.lookup == "string" && (s = s.map(({ label: f, value: u }) => ({
    label: f,
    value: u
  })));
  const c = En(o, Ya), h = q(
    () => c.items?.filter((f) => f.field === r.field),
    [r.field, c.items]
  ), y = A(
    (f) => {
      let u = f.target.value;
      if (c.items.length >= 1) {
        u = u.length === 1 ? u[0] : u;
        for (const x of c.items)
          x.field === t.field && (x.operator === Zi.IsAnyOf ? u = Array.isArray(u) ? u : [u] : u = u === 0 ? "0" : u);
      }
      if (u.length === 0 && h[0]) {
        o.current.deleteFilterItem(h[0]);
        return;
      }
      const m = u, w = h[0] ? h[0] : t;
      n({ ...w, value: m });
    },
    [o, r.applyZeroFilter, h, t, n]
  ), C = h[0]?.value ?? "";
  return /* @__PURE__ */ a(Ct, { variant: "standard", className: "w-100", children: /* @__PURE__ */ a(
    Tr,
    {
      label: r.field,
      variant: "standard",
      value: C,
      onChange: (f) => y(f),
      multiple: Array.isArray(C),
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 400,
            overflowY: "auto"
          }
        }
      },
      children: s?.map((f, u) => /* @__PURE__ */ a(Ke, { value: f.value, children: e.tTranslate(f.label, e.tOpts) }, u))
    }
  ) });
}, Ye = {
  Edit: "Edit",
  Delete: "Delete"
}, Re = {
  ADD: "Add",
  EDIT: "Edit",
  MANAGE: "Manage",
  NONE: null
}, Xi = {
  prefName: "",
  prefDesc: "",
  isDefault: !1
}, el = { pageSize: 50, page: 0 }, tl = [5, 10, 20, 50, 100], rl = ({ gridRef: e, preferenceKey: r, onPreferenceChange: t, t: n, tOpts: o }) => {
  const { getApiEndpoint: i } = qe(), s = i("GridPreferenceManager"), c = An(), h = Dt(), [y, C] = R(Re.NONE), [f, u] = R(null), [m, w] = R(!1), [x, g] = R({}), [l, v] = R(null), [D, N] = R(null), B = q(
    () => l == null ? [] : l.filter((P) => P.prefId !== 0),
    [l]
  ), E = q(() => [
    { field: "prefName", type: "string", width: 300, headerName: n("Preference Name", o), sortable: !1, filterable: !1 },
    { field: "prefDesc", type: "string", width: 300, headerName: n("Preference Description", o), sortable: !1, filterable: !1 },
    { field: "isDefault", type: "boolean", width: 100, headerName: n("Default", o), sortable: !1, filterable: !1 },
    { field: "editAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ar, { icon: /* @__PURE__ */ a(xt, { title: Ye.Edit, children: /* @__PURE__ */ a(Mn, {}) }), tabIndex: 1, "data-action": Ye.Edit, label: n("Edit", o), color: "primary" }, 1)] },
    { field: "deleteAction", type: "actions", headerName: "", width: 20, getActions: () => [/* @__PURE__ */ a(Ar, { icon: /* @__PURE__ */ a(xt, { title: Ye.Delete, children: /* @__PURE__ */ a(In, {}) }), tabIndex: 2, "data-action": Ye.Delete, label: n("Delete", o), color: "error" }, 2)] }
  ], [n, o]), L = q(() => he.object({
    prefName: he.string().trim(!0).required(n("Preference Name is Required", o)).max(20, n("Maximum Length is ", o) + "20"),
    prefDesc: he.string().max(100, n("Maximum Length is ", o) + "100")
  }), [n, o]), te = (P) => u(P?.currentTarget), H = () => u(null), W = () => {
    C(Re.NONE), H();
  }, X = () => {
    e.current?.initialGridState && (e.current.restoreState(e.current.initialGridState), N(null), t && t(null), H());
  }, Q = A(async ({ applyDefault: P = !1 }) => {
    const M = await rt({
      url: s,
      params: { action: "list", id: r },
      dataParser: Ne.json
    });
    if (!M?.preferences) {
      h.showMessage(n("Failed to load preferences.", o)), t && t(null);
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
  }, [s, r, h, n, o, t]), T = A(async (P, M = null) => {
    if (!e.current?.initialGridState && e.current?.exportState && (e.current.initialGridState = e.current.exportState()), P === 0) {
      X();
      return;
    }
    const U = M || l;
    if (!U) {
      h.showMessage(n("Preferences not loaded yet.", o));
      return;
    }
    const G = U.find((ue) => ue.prefId === P);
    if (!G?.prefValue) {
      h.showMessage(n("Failed to load preference.", o));
      return;
    }
    let ee;
    try {
      ee = typeof G.prefValue == "string" ? JSON.parse(G.prefValue) : G.prefValue;
    } catch {
      h.showMessage(n("Failed to parse preference data.", o));
      return;
    }
    e.current.restoreState(ee), N(G.prefName), t && t(G.prefName), H();
  }, [e, X, l, t, h, n, o]), ge = async (P) => {
    const M = P.prefName.trim(), U = M.toLocaleLowerCase();
    if (l.find((ee) => ee.prefName.toLocaleLowerCase() === U && ee.prefId !== P.prefId)) {
      w(!0);
      return;
    }
    const G = await rt({
      url: s,
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
      h.showMessage(n(`Preference ${y === Re.ADD ? "added" : "saved"} successfully.`, o)), W(), await Q({ applyDefault: !1 });
      return;
    }
    h.showMessage(n("Error saving preference: ", o) + (G?.message || n("Unknown error", o)));
  }, ae = async () => {
    const P = await rt({
      url: s,
      params: {
        action: "delete",
        id: r,
        prefIdArray: x.prefId
      },
      dataParser: Ne.json
    });
    if (P === !0 || P?.success === !0) {
      h.showMessage(n("Preference deleted successfully.", o)), await Q({ applyDefault: !1 }), g({});
      return;
    }
    h.showMessage(n("Error deleting preference: ", o) + (P?.message || n("Unknown error", o)));
  }, me = (P) => {
    const M = P.field === "editAction" ? Ye.Edit : P.field === "deleteAction" ? Ye.Delete : null;
    if (P.id === 0 && M) {
      h.showMessage(n(`Default preference cannot be ${M === Ye.Edit ? "edited" : "deleted"}`, o));
      return;
    }
    M === Ye.Edit && (C(Re.EDIT), j.setValues(P?.row)), M === Ye.Delete && g({
      prefId: P.id,
      preferenceName: P.row.prefName
    });
  }, se = (P) => {
    C(P), H(), P === Re.ADD && j.resetForm();
  }, j = $n({
    initialValues: Xi,
    validationSchema: L,
    onSubmit: ge,
    mode: "onBlur"
  });
  pe(() => {
    if (!r) return;
    (async () => {
      const M = await Q({ applyDefault: !0 });
      M?.defaultPrefId && M?.preferences && await T(M.defaultPrefId, M.preferences);
    })();
  }, [r]);
  const ce = q(() => ({
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
    paginationDisplayedRows: ({ from: P, to: M, count: U }) => `${P}–${M} ${n("of", o)} ${U}`,
    toolbarQuickFilterLabel: n("Search", o),
    columnsManagementSearchTitle: n("Search", o),
    columnsManagementNoColumns: n("No columns", o)
  }), [n, o]), $ = y === Re.MANAGE, we = y === Re.ADD || y === Re.EDIT;
  return /* @__PURE__ */ S(Fe, { children: [
    /* @__PURE__ */ S(
      ct,
      {
        id: "grid-preferences-btn",
        "aria-controls": f ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": f ? "true" : void 0,
        onClick: te,
        title: n("Preference", o),
        startIcon: /* @__PURE__ */ a(mn, {}),
        children: [
          n("Preferences", o),
          " ",
          D && `(${D})`
        ]
      }
    ),
    /* @__PURE__ */ S(
      ho,
      {
        id: "grid-preference-menu",
        anchorEl: f,
        open: !!f,
        onClose: H,
        component: mo,
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
          /* @__PURE__ */ S(Ke, { component: vr, dense: !0, onClick: () => se(Re.ADD), children: [
            /* @__PURE__ */ a(Dr, { children: /* @__PURE__ */ a(Mr, {}) }),
            n("Add Preference", o)
          ] }),
          /* @__PURE__ */ S(Ke, { component: vr, dense: !0, onClick: () => se(Re.MANAGE), children: [
            /* @__PURE__ */ a(Dr, { children: /* @__PURE__ */ a(mn, {}) }),
            n("Manage Preferences", o)
          ] }),
          e.current?.initialGridState && /* @__PURE__ */ S(Ke, { component: vr, dense: !0, divider: l?.length > 0, onClick: () => T(0), children: [
            /* @__PURE__ */ a(Dr, { children: /* @__PURE__ */ a(Go, {}) }),
            n("Reset to Default", o)
          ] }),
          l?.length > 0 && l?.map((P) => {
            const { prefName: M, prefDesc: U, prefId: G } = P;
            return /* @__PURE__ */ a(
              Ke,
              {
                onClick: () => T(G),
                component: go,
                selected: D === M,
                title: n(U, o),
                dense: !0,
                children: /* @__PURE__ */ a(bo, { primary: M })
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
        open: y !== Re.NONE,
        disableRestoreFocus: !0,
        title: /* @__PURE__ */ S(ke, { variant: "h5", children: [
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
                      yo,
                      {
                        checked: j.values.isDefault,
                        name: "isDefault",
                        onChange: j.handleChange
                      }
                    ),
                    label: n("Default", o)
                  }
                ) }),
                /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ S(fn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: [
                  /* @__PURE__ */ a(
                    ct,
                    {
                      type: "submit",
                      size: "small",
                      startIcon: /* @__PURE__ */ a(zo, {}),
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
              Tn,
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
                apiRef: c,
                disableAggregation: !0,
                disableRowGrouping: !0,
                disableRowSelectionOnClick: !0,
                initialState: {
                  pagination: {
                    paginationModel: el
                  }
                },
                localeText: ce
              }
            ) }),
            /* @__PURE__ */ a(xe, { size: 12, children: /* @__PURE__ */ a(fn, { direction: "row", columnGap: 1, style: { justifyContent: "end" }, children: /* @__PURE__ */ a(
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
  const [, i, s = "ASC"] = o;
  return {
    field: i.trim(),
    sort: s.trim().toLowerCase()
  };
}).filter(Boolean), st = ({ tTranslate: e, tOpts: r, handleExport: t, contentType: n, type: o, isPivotExport: i = !1, icon: s }) => /* @__PURE__ */ S(
  Vn,
  {
    onClick: t,
    "data-type": o,
    "data-content-type": n,
    "data-is-pivot-export": i,
    children: [
      /* @__PURE__ */ a(nt, { className: "grid-icons", sx: { pointerEvents: "none", marginTop: 1 }, children: s }),
      e(o, r)
    ]
  }
), al = ({ exportFormats: e, customExportOptions: r, ...t }) => /* @__PURE__ */ S(Ka, { ...t, children: [
  e.csv !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Mo, { fontSize: "small" }), type: "CSV", contentType: "text/csv" }),
  e.excel !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Sr, { fontSize: "small" }), type: "Excel", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
  t.showPivotExportBtn && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Sr, { fontSize: "small" }), type: "Excel With Pivot", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", isPivotExport: !0 }),
  e.xml !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Oo, { fontSize: "small" }), type: "XML", contentType: "text/xml" }),
  e.html !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Ro, { fontSize: "small" }), type: "HTML", contentType: "text/html" }),
  e.json !== !1 && /* @__PURE__ */ a(st, { ...t, icon: /* @__PURE__ */ a(Bo, { fontSize: "small" }), type: "JSON", contentType: "application/json" }),
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
] }), Zn = (e, r) => {
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
ne.extend(Lr);
const il = ({
  column: e,
  filterModel: r,
  setFilterModel: t,
  lookupData: n,
  tTranslate: o,
  tOpts: i
}) => {
  const { systemDateTimeFormat: s, stateData: c } = qe(), { fixedFilterFormat: h } = Ge, y = q(() => r?.items?.find((g) => g.field === e.field), [r, e.field]), C = y?.operator || e.toolbarFilter?.defaultOperator || Zn(e.type), f = C === "isAnyOf", u = q(() => {
    if (["isEmpty", "isNotEmpty"].includes(C))
      return "";
    if (!y)
      return f ? [] : "";
    const g = y.value;
    return g ?? (f ? [] : "");
  }, [y, f]), m = A((g) => {
    t((l) => {
      const v = l?.items || [];
      if (g === "" || g === null || Array.isArray(g) && g.length === 0) {
        const B = v.filter((E) => E.field !== e.field);
        return {
          ...l,
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
        ...l,
        items: [...N, D]
      };
    });
  }, [e, t]), w = A((g, l) => l === "number" ? {
    "=": "=",
    "!=": "≠",
    ">": ">",
    ">=": "≥",
    "<": "<",
    "<=": "≤"
  }[g] || g : l === "string" ? {
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
    const g = e.toolbarFilter?.label || e.headerName || e.label || e.field, l = w(C, e.type), D = e.type === "number" || e.type === "string" && C !== "startsWith" ? e.type === "number" ? `${l} ${g}` : `${g} (${l})` : g;
    switch (e.type) {
      case "string":
        return /* @__PURE__ */ a(
          ut,
          {
            variant: "standard",
            label: o(D, i),
            value: u,
            onChange: (T) => m(T.target.value),
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
            label: o(D, i),
            value: u,
            onChange: (T) => m(T.target.value),
            type: "text",
            inputProps: { inputMode: "numeric" },
            size: "small",
            sx: { minWidth: 150 }
          }
        );
      case "boolean": {
        const T = u === "" || u === void 0 || u === null ? "" : u === !0 || u === "true" ? "true" : u === !1 || u === "false" ? "false" : "";
        return /* @__PURE__ */ S(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(hn, { children: o(D, i) }),
          /* @__PURE__ */ S(
            Tr,
            {
              value: T,
              onChange: (ge) => {
                const ae = ge.target.value;
                let me;
                ae === "" ? me = "" : ae === "true" ? me = !0 : ae === "false" ? me = !1 : me = ae, m(me);
              },
              size: "small",
              children: [
                /* @__PURE__ */ a(Ke, { value: "", children: o("All", i) }),
                /* @__PURE__ */ a(Ke, { value: "true", children: o("True", i) }),
                /* @__PURE__ */ a(Ke, { value: "false", children: o("False", i) })
              ]
            }
          )
        ] });
      }
      case "select":
      case "singleSelect":
      case "lookup":
        const N = e.customLookup || n?.[e.lookup] || [], B = typeof e.lookup == "string" ? N.map((T) => ({
          label: T?.label || "",
          value: T?.value ?? ""
        })) : N, E = Ge.normalizeFilterValue({ value: u, operator: C, isMultiple: f }), L = 1;
        return /* @__PURE__ */ S(Ct, { variant: "standard", sx: { minWidth: 150 }, children: [
          /* @__PURE__ */ a(hn, { children: o(D, i) }),
          /* @__PURE__ */ a(
            Tr,
            {
              value: E,
              onChange: (T) => m(T.target.value),
              multiple: f,
              size: "small",
              renderValue: (T) => {
                const ae = (Array.isArray(T) ? T : T != null && T !== "" ? [T] : []).map((ce) => {
                  if (ce && typeof ce == "object" && "label" in ce) return o(ce.label, i);
                  const $ = B.find((we) => String(we.value) === String(ce));
                  return $ ? o($.label, i) : "";
                }).filter(Boolean);
                if (ae.length === 0) return "";
                if (ae.length <= L) return ae.join(", ");
                const me = ae.slice(0, L).join(", "), se = ae.length - L, j = ae.join(", ");
                return /* @__PURE__ */ a(xt, { title: j, placement: "top", children: /* @__PURE__ */ a("span", { children: `${me} +${se}` }) });
              },
              children: B.map((T) => /* @__PURE__ */ a(Ke, { value: T.value, children: o(T.label, i) }, T.value))
            }
          )
        ] });
      case "date":
      case "dateTime":
        const te = e.type, H = h[te], W = s(te === "date", !1, c.dateTime), X = te === "dateTime" ? qo : jo;
        let Q = null;
        if (u) {
          const T = ne(u);
          Q = T.isValid() ? T : null;
        }
        return /* @__PURE__ */ a(Nn, { dateAdapter: Ln, children: /* @__PURE__ */ a(
          X,
          {
            label: o(D, i),
            format: W,
            value: Q,
            onChange: (T) => {
              !T || !T.isValid() ? m(null) : m(T.format(H));
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
            label: o(D, i),
            value: u,
            onChange: (T) => m(T.target.value),
            size: "small",
            sx: { minWidth: 150 }
          }
        );
    }
  })();
}, er = sr(Me)({
  margin: "6px"
}), ll = sr(_a)({
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
    canAdd: i,
    forAssignment: s,
    showAddIcon: c,
    onAdd: h,
    selectionApi: y,
    rowSelectionModel: C,
    selectAll: f,
    available: u,
    onAssign: m,
    assigned: w,
    onUnassign: x,
    effectivePermissions: g,
    clearFilters: l,
    handleExport: v,
    preferenceKey: D,
    apiRef: N,
    tTranslate: B,
    tOpts: E,
    filterModel: L,
    setFilterModel: te,
    onPreferenceChange: H,
    toolbarItems: W,
    gridColumns: X,
    customExportOptions: Q
  } = e, T = r.customAddText || (r.title ? `Add ${r.title}` : "Add"), ge = ($) => $ != null && $ !== "" && !(Array.isArray($) && $.length === 0), me = (($ = []) => $.filter(
    (we) => ["isEmpty", "isNotEmpty"].includes(we.operator) || ge(we.value)
  ))(L?.items || []).length || 0, se = X?.filter(($) => $.toolbarFilter) || [], j = t?.lookups || {}, ce = t?.records || [];
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
            (o || !i && !s) && /* @__PURE__ */ S(Nt, { variant: "h6", component: "h3", textAlign: "center", sx: { ml: 1 }, children: [
              " ",
              !i || o ? "" : r.title
            ] }),
            !s && i && !o && /* @__PURE__ */ a(er, { startIcon: c ? /* @__PURE__ */ a(Mr, {}) : null, onClick: h, size: "medium", variant: "contained", children: B(T, E) }),
            !!e.headerActions && e.headerActions,
            y.length && ce.length ? /* @__PURE__ */ a(
              er,
              {
                onClick: f,
                size: "medium",
                variant: "contained",
                children: C.ids.size === ce.length ? B("Deselect All", E) : B("Select All", E)
              }
            ) : /* @__PURE__ */ a(ye, {}),
            u && /* @__PURE__ */ a(er, { startIcon: c ? /* @__PURE__ */ a(Mr, {}) : null, onClick: m, size: "medium", variant: "contained", children: B("Assign", E) }),
            w && /* @__PURE__ */ a(er, { startIcon: c ? /* @__PURE__ */ a(No, {}) : null, onClick: x, size: "medium", variant: "contained", children: B("Remove", E) })
          ] }),
          /* @__PURE__ */ S(ll, { ...e, children: [
            g.showColumnsOrder && /* @__PURE__ */ a(
              Ja,
              {
                render: ($) => /* @__PURE__ */ a(
                  Me,
                  {
                    ...$,
                    startIcon: /* @__PURE__ */ a($o, {}),
                    size: "small",
                    variant: "text",
                    children: B("COLUMNS", E)
                  }
                )
              }
            ),
            g.filter && /* @__PURE__ */ S(ye, { children: [
              /* @__PURE__ */ a(
                Za,
                {
                  render: ($) => /* @__PURE__ */ a(
                    Me,
                    {
                      ...$,
                      startIcon: /* @__PURE__ */ a(Co, { badgeContent: me, color: "primary", children: /* @__PURE__ */ a(Vo, {}) }),
                      size: "small",
                      variant: "text",
                      children: B("FILTERS", E)
                    }
                  )
                }
              ),
              /* @__PURE__ */ a(Me, { startIcon: /* @__PURE__ */ a(Lo, {}), onClick: l, size: "small", children: B("CLEAR FILTER", E) })
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
    /* @__PURE__ */ a(Fe, { sx: { display: "flex", justifyContent: "flex-start", padding: "0 10px 10px 10px" }, children: se.length > 0 && /* @__PURE__ */ a("div", { style: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }, children: se.map(($) => /* @__PURE__ */ a(
      il,
      {
        column: $,
        filterModel: L,
        setFilterModel: te,
        lookupData: j,
        tTranslate: B,
        tOpts: E
      },
      $.field
    )) }) })
  ] });
}, cl = 50, ul = /(\w+)( ASC| DESC)?/i, dl = 6e4, pl = 0, fl = 1e6, Be = {
  Copy: "Copy",
  Edit: "Edit",
  Delete: "Delete",
  History: "History",
  Download: "Download"
}, hl = {
  article: /* @__PURE__ */ a(ao, {}),
  edit: /* @__PURE__ */ a(Mn, {}),
  copy: /* @__PURE__ */ a(no, {}),
  delete: /* @__PURE__ */ a(In, {}),
  history: /* @__PURE__ */ a(Wo, {}),
  download: /* @__PURE__ */ a(Uo, {})
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
}, Qn = ["isEmpty", "isNotEmpty"], ml = (e) => e, gl = (e) => (e || []).filter((r) => Qn.includes(r.operator) ? !0 : r.value !== null && r.value !== void 0 && r.value !== ""), bl = [
  { key: "addCreatedOnColumn", field: "CreatedOn", type: "dateTime", header: "Created On" },
  { key: "addCreatedByColumn", field: "CreatedByUser", type: "string", header: "Created By" },
  { key: "addModifiedOnColumn", field: "ModifiedOn", type: "dateTime", header: "Modified On" },
  { key: "addModifiedByColumn", field: "ModifiedByUser", type: "string", header: "Modified By" }
], yl = (e) => e.value ? /* @__PURE__ */ a(Eo, { style: { color: "green" } }) : /* @__PURE__ */ a(Ir, { style: { color: "gray" } }), Cn = sr("span")({
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}), Cl = ({ params: e, handleSelectRow: r, idProperty: t }) => {
  const n = to(), o = e.row[t], s = En(n, ro)?.ids?.has(o) ?? !1;
  return /* @__PURE__ */ a(
    zn,
    {
      onClick: (h) => {
        h.stopPropagation(), r({ row: e.row });
      },
      checked: s,
      color: "primary",
      value: o,
      inputProps: { "aria-label": "checkbox" }
    }
  );
}, xn = Pn(({
  model: e,
  columns: r,
  api: t,
  defaultSort: n,
  setActiveRecord: o,
  parentFilters: i,
  parent: s,
  where: c,
  title: h,
  showPageTitle: y,
  permissions: C,
  selected: f,
  assigned: u,
  available: m,
  disableCellRedirect: w = !1,
  onAssignChange: x,
  customStyle: g,
  onCellClick: l,
  showRowsSelected: v,
  showFullScreenLoader: D,
  customFilters: N,
  onRowDoubleClick: B,
  onRowClick: E = () => {
  },
  gridStyle: L,
  reRenderKey: te,
  additionalFilters: H,
  onCellDoubleClickOverride: W,
  onAddOverride: X,
  dynamicColumns: Q,
  toolbarItems: T,
  readOnly: ge = !1,
  onListParamsChange: ae,
  apiRef: me,
  baseFilters: se,
  customExportOptions: j,
  sx: ce,
  ...$
}) => {
  const [we, P] = R({ pageSize: cl, page: 0 }), [M, U] = R({ recordCount: 0, records: null, lookups: {} }), G = !!x, ee = v, [ue, je] = R({
    type: "include",
    ids: /* @__PURE__ */ new Set()
  }), [Vt, Je] = R(!1), [We, ur] = R(null), ft = { CreatedOn: !1, CreatedByUser: !1, ...e.columnVisibilityModel }, [St, Pt] = R(!1), fe = Dt(), Ft = e.paginationMode === K.client ? K.client : K.server, { t: ot, i18n: zt } = wt(), d = q(() => ({ t: ot, i18n: zt }), [ot, zt]), [ht, ve] = R(""), [Ze, Ee] = R(nl(n || e.defaultSort, K, ul)), Et = { items: [], logicOperator: "and", quickFilterValues: Array(0), quickFilterLogicOperator: "and" };
  e.defaultFilters && (Et.items = [], e.defaultFilters.forEach((b) => {
    Et.items.push(b);
  }));
  const [Oe, Ae] = R({ ...Et }), { navigate: De, getParams: Gt, useParams: Te, pathname: qt } = zr(), { id: dr } = Te() || Gt, At = dr?.split("-")[0], Se = me || An(), { idProperty: de = "id", showHeaderFilters: Tt = !0, disableRowSelectionOnClick: pr = !0, hideTopFilters: It = !0, updatePageTitle: jt = !0, isElasticScreen: mt = !1, navigateBack: fr = !1, selectionApi: Qe = {}, debounceTimeOut: hr = 300, showFooter: z = !0, disableRowGrouping: Pe = !0 } = e, Z = e.readOnly === !0 || ge, Ue = e.allowDoubleClick === !1, Le = rr(M), Ie = rr(null);
  pe(() => () => {
    Ie.current?.abort(), Ie.current = null;
  }, []);
  const Wt = e.showAddIcon === !0, Mt = e.columns.filter(({ link: b }) => !!b).map((b) => b.link), { stateData: Xe, formatDate: Ot, getApiEndpoint: mr, buildUrl: gt, setPageTitle: gr } = qe(), [aa, Ut] = R(!1), { timeZone: is } = Xe, it = q(() => ({ ...K.permissions, ...e.permissions, ...C }), [e.permissions, C]), Gr = ["isEmpty", "isNotEmpty", "isAnyOf"], oa = Xe.userData || {}, Ht = e.columns.find((b) => b.type === "fileUpload")?.field || "", ia = { add: it.add, edit: it.edit, delete: it.delete }, { canAdd: qr, canEdit: jr, canDelete: Wr } = Jn({ userData: oa, model: e, userDefinedPermissions: ia }), p = q(() => e.tTranslate ?? ml, [e.tTranslate]), { addUrlParamKey: Yt, searchParamKey: Rt, hideBreadcrumb: la = !1, tableName: Ur, showHistory: Hr = !0, hideBreadcrumbInGrid: sa = !1, breadcrumbColor: ca, disablePivoting: ua = !1, columnHeaderHeight: da = 70, disablePagination: Yr = !1 } = e, Kr = e.gridTitle || e.title, Bt = mr("GridPreferenceManager") ? e.preferenceId || e.module?.preferenceId : null, et = new URLSearchParams(window.location.search), [_r, pa] = R(null), [Jr, fa] = R(!Bt), $e = t || e.api, [br, yr] = R(null), ha = q(() => new Set(br ? [br] : []), [br]), ma = typeof e.getDetailPanelContent == "function", [ga, Zr] = R([]);
  pe(() => {
    Se.current && (Se.current.prefKey = Bt);
  }, [Se, Bt]);
  const Qr = A((b) => {
    pa(b), fa(!0);
  }, []), ba = q(() => e.columnGroupingModel ? e.columnGroupingModel.map((b) => ({
    ...b,
    headerName: b.headerName ? p(b.headerName, d) : b.headerName
  })) : [], [e.columnGroupingModel, d, ot, p]);
  pe(() => {
    Array.isArray($.rowGroupingField) && Zr($.rowGroupingField);
  }, [$.rowGroupingField]);
  const Cr = et.has("baseData") && et.get("baseData"), Xr = q(() => {
    if (Cr)
      try {
        const b = JSON.parse(Cr);
        if (typeof b === K.object && b !== null)
          return b;
      } catch (b) {
        console.error("Failed to parse baseData from URL:", b);
      }
    return {};
  }, [Cr]), ya = A(({ row: b }) => {
    const I = b[de];
    je((O) => {
      const F = new Set(O?.ids || []);
      return F.has(I) ? F.delete(I) : F.add(I), { type: "include", ids: F };
    });
  }, [de]), en = {
    radio: {
      type: "singleSelect",
      valueOptions: "lookup"
    },
    date: {
      valueFormatter: (b, I, O) => Ot({ value: b, useSystemFormat: !0, showOnlyDate: !1, state: Xe.dateTime }),
      filterOperators: Er({ columnType: "date", label: p("Value", d) })
    },
    dateTime: {
      valueFormatter: (b, I, O) => Ot({ value: b, useSystemFormat: !1, showOnlyDate: !1, state: Xe.dateTime }),
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
      renderCell: (b) => /* @__PURE__ */ a(Cl, { params: b, handleSelectRow: ya, idProperty: de })
    }
  };
  pe(() => {
    Le.current = M;
  }, [M]), pe(() => {
    if (!N || !Object.keys(N).length) return;
    if (N.clear) {
      Ae({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
      return;
    }
    const b = Object.entries(N).reduce((I, [O, F]) => (O === K.startDate || O === K.endDate ? I.push(F) : O in N && I.push({ field: O, value: F, operator: "equals", type: "string" }), I), []);
    Ae({ items: b, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
  }, [N]);
  const Ca = A(({ field: b, lookupMap: I }) => (Le.current.lookups || {})[(I || {})[b]?.lookup] || [], []);
  pe(() => {
    $.isChildGrid;
  }, [$.isChildGrid, It]);
  const tn = A(
    ({ key: b, title: I, icon: O, color: F = "primary", disabled: k, otherProps: _ }) => /* @__PURE__ */ a(
      Ar,
      {
        icon: /* @__PURE__ */ a(xt, { title: p(I, d), children: hl[O] || O || p(I, d) }),
        "data-action": b,
        label: p(I, d),
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
        key: Be.Edit,
        title: "Edit",
        icon: "edit",
        show: !!jr,
        disabled: (I) => I.canEdit === !1
      },
      {
        key: Be.Copy,
        title: "Copy",
        icon: "copy",
        show: !!it.copy
      },
      {
        key: Be.Delete,
        title: "Delete",
        icon: "delete",
        color: "error",
        show: !!Wr
      },
      {
        key: Be.History,
        title: "History",
        icon: "history",
        show: !!Hr
      },
      ...Kt
    ), b.push({
      key: Be.Download,
      title: "Download document",
      icon: "download",
      show: Ht.length > 0
    }), b.filter(({ show: I }) => I !== !1);
  }, [
    G,
    Z,
    jr,
    Wr,
    Hr,
    it.copy,
    Ht.length,
    Kt
  ]), xa = A(
    ({ row: b }) => _t.map(
      ({ key: I, title: O, icon: F, color: k, disabled: _, show: V, action: J, ...oe }) => tn({
        key: I,
        title: O || J,
        // Fallback to 'action' for backward compatibility if 'title' is not provided
        icon: F,
        color: k,
        disabled: _?.(b),
        otherProps: oe
      })
    ),
    [_t, tn]
  ), { gridColumns: Ce, pinnedColumns: rn, lookupMap: xr } = q(() => {
    let b = r || e.gridColumns || e.columns;
    Q && (b = [...Q, ...b]);
    const I = { left: [Qa.field], right: [] }, O = [], F = {}, k = { ...en, ...e.gridColumnTypes };
    for (const V of b) {
      if (V.gridLabel === null || s && V.lookup === s || V.type === K.oneToMany && V.countInList === !1) continue;
      const J = {};
      if (V.type === K.oneToMany && (J.type = "number", J.field = V.field.replace(/s$/, "Count")), k[V.type] && Object.assign(J, k[V.type]), J.valueOptions === K.lookup || V.type === K.boolean) {
        let ie = [];
        J.valueOptions === K.lookup && (J.valueOptions = (Y) => Ca({ ...Y, lookupMap: F }), ie = [...Fn(), ...Xa()].filter((Y) => ["is", "not", "isAnyOf"].includes(Y.value))), V.type === K.boolean && (ie = eo()), J.filterOperators = ie.map((re) => ({
          ...re,
          InputComponent: re.InputComponent ? (Y) => /* @__PURE__ */ a(
            Qi,
            {
              column: {
                ...V,
                ...V.type === K.boolean ? {
                  customLookup: [
                    { value: !0, label: "Yes" },
                    { value: !1, label: "No" }
                  ]
                } : {},
                dataRef: Le
              },
              ...Y,
              autoHighlight: !0,
              tTranslate: p,
              tOpts: d
            }
          ) : void 0
        }));
      }
      if ((V.linkTo || V.link) && (J.cellClassName = "mui-grid-linkColumn"), V.hyperlinkURL && !V.renderCell) {
        const { hyperlinkURL: ie, hyperlinkIndex: re } = V;
        J.renderCell = (Y) => {
          const { value: le, formattedValue: Zt, row: Qt } = Y;
          if (le == null || le === "") return le;
          const tt = re ? Qt[re] : le, kt = ie.replace("{0}", encodeURIComponent(String(tt)));
          return /* @__PURE__ */ a("a", { href: kt, rel: "noopener noreferrer", target: "_blank", children: Zt ?? le });
        };
      }
      Pe || (J.groupable = V.groupable ?? !1);
      const oe = p((typeof V.gridLabel == "function" ? V.gridLabel({ column: V, t: p, tOpts: d }) : V.gridLabel) || V.label, d);
      O.push({ ...V, ...J, headerName: oe, description: oe }), V.pinned && I[V.pinned === K.right ? K.right : K.left].push(V.field), F[V.field] = V;
    }
    let _ = e.standard;
    return _ === !0 && (_ = { addCreatedOnColumn: !0, addCreatedByColumn: !0, addModifiedOnColumn: !0, addModifiedByColumn: !0 }), _ && typeof _ === K.object && bl.forEach(({ key: V, field: J, type: oe, header: ie }) => {
      if (_[V] === !0) {
        const re = { field: J, type: oe, headerName: p(ie, d), width: 200 };
        oe === K.dateTime && (re.filterOperators = Er({ columnType: "dateTime" }), re.valueFormatter = en.dateTime.valueFormatter, re.localize = !0), O.push(re);
      }
    }), _t.length && (O.push({
      field: "actions",
      type: "actions",
      width: (e.actionWidth ?? K.defaultActionWidth) * _t.length,
      hidable: !1,
      getActions: xa,
      headerName: p("Actions", d)
    }), I.right.push("actions")), { gridColumns: O, pinnedColumns: I, lookupMap: F };
  }, [r, e, s, C, G, Q, ot, Xe?.dateTime]), wr = rr(!1);
  pe(() => {
    if (wr.current) return;
    const b = Ce?.filter((F) => F.toolbarFilter?.defaultFilterValue !== void 0) || [];
    if (b.length === 0) return;
    if (Oe.items.some(
      (F) => b.some((k) => k.field === F.field)
    )) {
      wr.current = !0;
      return;
    }
    const O = b.map((F) => {
      const k = Zn(F.type, F.toolbarFilter?.defaultOperator), _ = Ge.normalizeFilterValue({
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
    O.length > 0 && Ae((F) => ({
      ...F,
      items: [...F.items, ...O]
    })), wr.current = !0;
  }, [Ce]);
  const Ve = A(async ({ action: b = "list", extraParams: I = {}, isPivotExport: O = !1, contentType: F, columns: k } = {}) => {
    const { pageSize: _, page: V } = we, J = !!F, oe = gt(O ? e.pivotApi : $e), ie = {
      ...Oe,
      items: gl(Oe.items)
    }, re = Array.isArray(se) ? [...se] : [];
    e.joinColumn && At && re.push({ field: e.joinColumn, operator: "is", type: "number", value: Number(At) }), H && (ie.items = [...ie.items || [], ...H]);
    const Y = [];
    Array.isArray(re) && Y.push(...re), Array.isArray(i) && Y.push(...i);
    const le = {
      ...I,
      ...$.extraParams
      // Merge any custom params passed via component props
    };
    if ((u || m) && (le[u ? "include" : "exclude"] = Array.isArray(f) ? f.join(",") : f), O && (e.exportTemplate && (le.template = e.exportTemplate), e.configFileName && (le.configFileName = e.configFileName)), !(!ie.items.length || ie.items.every((He) => "value" in He && He.value !== void 0))) return;
    let Qt = null, tt = null;
    J || (Ie.current && Ie.current.abort(), tt = new AbortController(), Ie.current = tt, Qt = tt.signal);
    const kt = {
      action: b,
      page: J ? pl : V,
      pageSize: J ? fl : _,
      sortModel: Ze,
      filterModel: ie,
      gridColumns: Ce,
      model: e,
      baseFilters: Y,
      api: oe,
      extraParams: le
    };
    typeof ae == "function" && ae(kt), Se.current.listParams = kt, J || Ut(!0);
    try {
      const He = await Or({ ...kt, contentType: F, columns: k, signal: Qt });
      if (!J && He !== void 0 && Ie.current === tt) {
        if (He?.aborted) return;
        U(He);
      }
    } catch (He) {
      if (He?.aborted || He?.name === "AbortError" || tt?.signal?.aborted) return;
      fe.showError(p("An error occurred while fetching data", d)), J || U((Na) => ({ ...Na, records: [], recordCount: 0 }));
    } finally {
      !J && Ie.current === tt && Ut(!1);
    }
  }, [we, gt, e, $e, Oe, se, At, u, m, f, $.extraParams, Ze, Ce, i, ae, Se, Or, fe, H, p, d]), lt = A(async ({ id: b, record: I = {}, mode: O }) => {
    if (o) {
      try {
        const k = gt($e), _ = await ar({ id: b, api: k, model: e, parentFilters: i, where: c });
        o(_);
      } catch {
        fe.showError(p("Could not load record", d));
      }
      return;
    }
    let F = qt;
    F.endsWith("/") || (F += "/"), O === "copy" ? F += "0-" + b : F += b, Yt && (et.set(Yt, I[Yt]), F += `?${et.toString()}`), De(F);
  }, [o, $e, e, i, c, qt, Yt, et, De, ar, gt, fe, p, d]), nn = A(({ documentLink: b }) => {
    b && window.open(b, "_blank");
  }, []), wa = A(async (b, I, O) => {
    let F = b.field === e.linkColumn ? Be.Edit : null;
    if (!F && b.field === K.actions && (F = O?.action, !F)) {
      const oe = I.target.closest("button");
      oe && (F = oe.dataset.action);
    }
    const { row: k } = b;
    if (!Z) {
      if (l && typeof await l({ cellParams: b, event: I, details: O }) !== K.boolean)
        return;
      const oe = xr[b.field] || {};
      if (oe.linkTo) {
        De({
          pathname: Xt.replaceTags(oe.linkTo, k)
        });
        return;
      }
      switch (F) {
        case Be.Edit:
          if (e.getDetailPanelContent) {
            const re = k[de];
            yr((Y) => Y === re ? null : re);
            return;
          } else
            return lt({ id: k[de], record: k });
        case Be.Copy:
          return lt({ id: k[de], mode: "copy" });
        case Be.Delete:
          Je(!0), ur({ name: k[e.linkColumn], id: k[de] });
          break;
        case Be.History:
          return De(`${mr("history")}?tableName=${Ur}&id=${k[de]}&breadCrumb=${Rt ? et.get(Rt) : Kr}`);
        default:
          const ie = Kt.find((re) => re.action === F && typeof re.onClick === K.function);
          if (ie) {
            ie.onClick({ row: k, navigate: De });
            return;
          }
          break;
      }
    }
    if (F === Be.Download && nn({ documentLink: k[Ht] }), !Mt.length)
      return;
    const { row: _ } = b, V = xr[b.field] || {}, J = {
      pathname: Xt.replaceTags(V.linkTo, _)
    };
    e.addRecordToState && (J.state = _), De(J);
  }, [Z, l, xr, e, de, Ht, De, Mt, Kt, Ur, Rt, et, Kr, mr, nn, lt]), va = A(async () => {
    const b = gt($e);
    try {
      await $r({ id: We.id, api: b, model: e }), fe.showMessage(p("Record Deleted Successfully.", d)), Ve();
    } catch (I) {
      fe.showError(p("Delete failed", d), I.message);
    } finally {
      Je(!1);
    }
  }, [$e, We?.id, fe, e, Ve, p, d]), an = A(() => {
    ve(null), Je(!1);
  }, []), Da = A((b) => (typeof $.processRowUpdate == "function" && $.processRowUpdate(b, M), b), [$.processRowUpdate, M]), Sa = A((b) => {
    if (b.row.canEdit === !1)
      return;
    const { row: I } = b;
    if (typeof W === K.function) {
      W(b);
      return;
    }
    if (!Z && !Ue && !w && lt({ id: I[de], record: I }), Z && e.rowRedirectLink) {
      const O = {
        pathname: Xt.replaceTags(e.rowRedirectLink, I)
      };
      e.addRecordToState && (O.state = I), De(O);
    }
    typeof B === K.function && B(b);
  }, [W, Z, Ue, w, lt, de, e.rowRedirectLink, e.addRecordToState, De, B, Xt]), Pa = A(async () => {
    if (ue.ids.size < 1) {
      fe.showError(p("Please select at least one record to proceed", d));
      return;
    }
    const b = Array.from(ue.ids), I = new Map((M.records || []).map((k) => [k[de], k]));
    let O = b.map((k) => ({ ...Xr, ...I.get(k) }));
    Array.isArray(e.selectionUpdateKeys) && e.selectionUpdateKeys.length && (O = O.map(
      (k) => Object.fromEntries(e.selectionUpdateKeys.map((_) => [_, k[_]]))
    ));
    const F = gt(Qe || $e);
    Ut(!0);
    try {
      const k = await Vr({
        id: 0,
        api: `${F}/updateMany`,
        values: { items: O },
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
      Ut(!1), je({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      }), Pt(!1);
    }
  }, [ue.ids, fe, M.records, de, Xr, e.selectionUpdateKeys, Qe, $e, e, Ve, p, d]), on = A(() => {
    if (Qe.length > 0) {
      if (ue.ids.size > 0) {
        Pt(!0);
        return;
      }
      fe.showError(
        p("Please select at least one record to proceed", d)
      );
      return;
    }
    typeof X === K.function ? X() : lt({ id: 0 });
  }, [Qe, fe, X, lt, ue.ids.size, p, d]), ln = A(() => {
    Oe?.items?.length && Ae({ ...K.gridFilterModel });
  }, [Oe]), Jt = A(({ unassign: b, assign: I }) => {
    const O = Array.isArray(f) ? f : f.length ? f.split(",") : [], F = b ? O.filter((k) => !b.includes(parseInt(k))) : [...O, ...I];
    x(typeof f === K.string ? F.join(",") : F);
  }, [f, x]), sn = A(() => {
    Jt({ assign: Array.from(ue.ids) });
  }, [Jt, ue.ids]), cn = A(() => {
    Jt({ unassign: Array.from(ue.ids) });
  }, [Jt, ue.ids]), un = A(() => {
    const b = M.records || [];
    if (ue.ids.size === b.length)
      je({
        type: "include",
        ids: /* @__PURE__ */ new Set()
      });
    else {
      const O = b.map((F) => F[de]);
      je({
        type: "include",
        ids: new Set(O)
      });
    }
  }, [ue, M.records, de]), Fa = A((b) => b[de], [de]), dn = A((b) => {
    if (M?.recordCount > dl) {
      fe.showMessage(p("Cannot export more than 60k records, please apply filters or reduce your results using filters", d));
      return;
    }
    const { orderedFields: I, columnVisibilityModel: O, lookup: F } = Se.current.state.columns, k = b.target.dataset.isPivotExport === "true", _ = Object.keys(O).filter((Y) => O[Y] === !1), V = new Set(Ce.filter((Y) => Y.exportable === !1).map((Y) => Y.field)), J = I.filter(
      (Y) => !V.has(Y) && !_.includes(Y) && Y !== "__check__" && Y !== "actions"
    );
    if (J.length === 0) {
      fe.showMessage(p("You cannot export while all columns are hidden... please show at least 1 column before exporting", d));
      return;
    }
    const oe = {}, ie = Object.fromEntries(Ce.map((Y) => [Y.field, Y]));
    J.forEach((Y) => {
      const le = F[Y], Zt = ie[Y];
      oe[Y] = {
        field: Y,
        width: le.width,
        headerName: Zt?.headerName || le.headerName || le.field,
        type: le.type,
        isParsable: le.isParsable,
        lookup: le.lookup,
        hyperlinkURL: le.hyperlinkURL,
        hyperlinkIndex: le.hyperlinkIndex,
        localize: le.localize,
        exportIndex: le.exportIndex
      };
    });
    const re = e?.formActions?.export || k ? e?.formActions?.export || "export" : void 0;
    Ve({
      action: re,
      isPivotExport: k,
      contentType: b.target.dataset.contentType,
      columns: oe
    });
  }, [M?.recordCount, Se, Ce, fe, e, Ve, p, d]);
  pe(() => {
    !$e || !Jr || Ve();
  }, [$e, Jr, Ve]), pe(() => {
    if (!($.isChildGrid || G || !jt))
      return gr({ icon: "", titleHeading: e.pageTitle || e.title, title: e.title }), () => {
        gr(null);
      };
  }, [gr, e.pageTitle, e.title, $.isChildGrid, G, jt]);
  const Ea = A((b) => {
    const { items: I } = b, O = I.map((F) => {
      const { field: k, operator: _, value: V } = F, oe = (Ce.find((ie) => ie.field === k) || {}).type === K.Number;
      return Qn.includes(_) ? { ...F, value: null } : oe && V < 0 ? { ...F, value: null } : Gr.includes(_) || oe && !isNaN(V) || !oe ? (mt && Ce.filter((re) => re.field === k)[0]?.isKeywordField && (F.filterField = `${F.field}.keyword`), { ...F }) : { ...F, value: oe ? null : V };
    });
    Ae({ ...b, items: O });
  }, [Ce, K.Number, Gr, mt, Ae]), Aa = A((b) => {
    const I = b.map((O) => {
      const F = Ce.filter((V) => V.field === O.field)[0] || {}, k = mt && F.isKeywordField, _ = { ...O, filterField: k ? `${O.field}.keyword` : O.field };
      return F.dataIndex && (_.filterField = F.dataIndex), _;
    });
    Ee(I);
  }, [Ce, mt, Ee]), pn = h || e.gridTitle || e.title, Ta = Rt ? [{ text: et.get(Rt) || pn }] : [{ text: pn }], Ia = A((b) => {
    yr(b.size > 0 ? [...b].pop() : null);
  }, []), Ma = A((b) => typeof e.getDetailPanelContent == "function" ? e.getDetailPanelContent({
    ...b,
    onRefresh: () => {
      yr(null), Ve();
    },
    t: p,
    tOpts: d
  }) : null, [e.getDetailPanelContent, Ve, p, d]), Oa = q(() => ({
    filterValueTrue: p("Yes", d),
    filterValueFalse: p("No", d),
    noRowsLabel: p("No data", d),
    footerTotalRows: `${p("Total rows", d)}:`,
    MuiTablePagination: {
      labelRowsPerPage: p("Rows per page", d),
      labelDisplayedRows: ({ from: b, to: I, count: O }) => `${b}–${I} ${p("of", d)} ${O}`
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
    paginationDisplayedRows: ({ from: b, to: I, count: O }) => `${b}–${I} ${p("of", d)} ${O}`,
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
      const I = b === 1 ? "item selected" : "items selected";
      return `${b.toLocaleString()} ${p(I, d)}`;
    }
  }), [p, d, e?.searchPlaceholder]), Ra = q(() => ({
    headerFilterCell: { showClearIcon: !0 },
    toolbar: {
      model: e,
      data: M,
      currentPreference: _r,
      isReadOnly: Z,
      canAdd: qr,
      forAssignment: G,
      showAddIcon: Wt,
      onAdd: on,
      selectionApi: Qe,
      rowSelectionModel: ue,
      selectAll: un,
      available: m,
      onAssign: sn,
      assigned: u,
      onUnassign: cn,
      effectivePermissions: it,
      clearFilters: ln,
      handleExport: dn,
      preferenceKey: Bt,
      apiRef: Se,
      gridColumns: Ce,
      tTranslate: p,
      tOpts: d,
      idProperty: de,
      filterModel: Oe,
      setFilterModel: Ae,
      onPreferenceChange: Qr,
      toolbarItems: T,
      headerActions: $.headerActions,
      customExportOptions: j
    },
    footer: {
      pagination: Yr !== !0,
      apiRef: Se,
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
  }), [e, M, _r, Z, qr, G, Wt, on, Qe, ue, un, m, sn, u, cn, it, ln, dn, Bt, Se, Ce, p, d, de, Oe, Ae, Qr, T, $.headerActions, j]), Ba = q(() => ({
    columns: {
      columnVisibilityModel: ft
    },
    pinnedColumns: rn
  }), [ft, rn]), ka = q(() => ({
    headerFilterMenu: !1,
    toolbar: sl,
    footer: Di
  }), []);
  return /* @__PURE__ */ S(ye, { children: [
    y !== !1 && /* @__PURE__ */ a(
      _n,
      {
        navigate: De,
        showBreadcrumbs: !la && !sa,
        breadcrumbs: Ta,
        enableBackButton: fr,
        breadcrumbColor: ca,
        model: e
      }
    ),
    /* @__PURE__ */ S(Fe, { style: L || g, children: [
      /* @__PURE__ */ a(Fe, { sx: { display: "flex", maxHeight: "80vh", flexDirection: "column" }, children: /* @__PURE__ */ a(
        Tn,
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
            ...Array.isArray(ce) ? ce : ce ? [ce] : []
          ],
          headerFilters: Tt,
          unstable_headerFilters: Tt,
          checkboxSelection: G,
          loading: !M.records || aa,
          className: "pagination-fix",
          onCellClick: wa,
          onCellDoubleClick: Sa,
          columns: Ce,
          paginationModel: we,
          pageSizeOptions: K.pageSizeOptions,
          onPaginationModelChange: P,
          pagination: !Yr,
          rowCount: M.recordCount,
          rows: M.records || [],
          sortModel: Ze,
          paginationMode: Ft,
          sortingMode: Ft,
          filterMode: Ft,
          processRowUpdate: Da,
          keepNonExistentRowsSelected: !0,
          onSortModelChange: Aa,
          onFilterModelChange: Ea,
          rowSelectionModel: ue,
          onRowSelectionModelChange: je,
          filterModel: Oe,
          getRowId: Fa,
          onRowClick: E,
          slots: ka,
          slotProps: Ra,
          hideFooterSelectedRowCount: ee,
          density: "compact",
          disableDensitySelector: !0,
          apiRef: Se,
          disableAggregation: !0,
          disableRowGrouping: Pe,
          disableRowSelectionOnClick: pr,
          disablePivoting: ua,
          filterDebounceMs: hr,
          initialState: Ba,
          ...ma && {
            getDetailPanelContent: Ma,
            detailPanelExpandedRowIds: ha,
            onDetailPanelExpandedRowIdsChange: Ia
          },
          localeText: Oa,
          showToolbar: !0,
          columnHeaderHeight: da,
          hideFooter: !z,
          rowGroupingModel: ga,
          onRowGroupingModelChange: (b) => Zr(b),
          getRowClassName: $.getRowClassName,
          columnGroupingModel: ba
        }
      ) }),
      ht && /* @__PURE__ */ S(_e, { open: !!ht, onConfirm: an, onCancel: an, title: "Info", hideCancelButton: !0, children: [
        " ",
        ht
      ] }),
      Vt && !ht && /* @__PURE__ */ a(_e, { open: Vt, onConfirm: va, onCancel: () => Je(!1), title: p("Confirm Delete", d), okText: p("Ok", d), cancelText: p("Cancel", d), children: /* @__PURE__ */ S(Cn, { children: [
        p("Are you sure you want to delete", d),
        " ",
        We.name && /* @__PURE__ */ a(xt, { style: { display: "inline" }, title: We.name, arrow: !0, children: We.name.length > 30 ? `${We.name.slice(0, 30)}...` : We.name }),
        " ?"
      ] }) }),
      St && /* @__PURE__ */ a(
        _e,
        {
          open: St,
          onConfirm: Pa,
          onCancel: () => Pt(!1),
          title: p("Confirm Add", d),
          okText: p("Ok", d),
          cancelText: p("Cancel", d),
          children: /* @__PURE__ */ S(Cn, { children: [
            p("Are you sure you want to add", d),
            " ",
            ue.ids.size,
            " ",
            p("records", { count: ue.ids.size, ...d }),
            "?"
          ] })
        }
      )
    ] })
  ] });
}, ol), xl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const o = (c) => {
    t.setFieldValue(r, c.target.checked);
  }, i = q(() => t.values[r] ?? !!e.defaultValue, [t, e]), s = typeof e.readOnly == "function" ? e.readOnly(t) : e.readOnly;
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ a(
      _o,
      {
        control: /* @__PURE__ */ a(
          zn,
          {
            ...n,
            name: r,
            disabled: s || e.disabled === !0,
            checked: i,
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
  const o = vt(), i = e.rows || (e.multiline ? 5 : 1);
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
      rows: i,
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
function Xn(e, r) {
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
const wn = ({ value: e, state: r }) => {
  if (typeof e == "string" && e.startsWith("{") && e.endsWith("}")) {
    const t = e.slice(1, -1);
    return r[t] !== void 0 ? r[t] : e;
  }
  return e;
}, wl = {
  outlined: vo,
  filled: wo,
  standard: xo
}, vl = () => /* @__PURE__ */ S(
  On,
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
            Jo,
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
            Gn,
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
  const { min: i, max: s, readOnly: c, precision: h } = e, y = vt(), C = q(
    () => wn({ value: i, state: t.values }),
    [i, t.values]
  ), f = q(
    () => wn({ value: s, state: t.values }),
    [s, t.values]
  ), u = q(() => t.values[n] ?? null, [t.values[n]]), [m, w] = R(u), x = Xn(m, 400);
  pe(() => {
    x !== u && t.setFieldValue(n, x);
  }, [x]), pe(() => {
    u !== m && w(u);
  }, [u]);
  const g = (L) => {
    w(L);
  }, l = (L) => {
    t.setFieldTouched(n, !0), typeof o.onBlur == "function" && o.onBlur(L);
  }, v = La(), D = `number-field-${n}-${v}`, N = e.variant || "standard", B = wl[N], E = q(() => {
    if (h !== void 0)
      return {
        maximumFractionDigits: h
      };
  }, [h]);
  return /* @__PURE__ */ S(
    nr.Root,
    {
      value: m,
      onValueChange: g,
      min: C,
      max: f,
      disabled: c,
      format: E,
      render: (L, te) => /* @__PURE__ */ a(
        Ct,
        {
          fullWidth: !0,
          ref: L.ref,
          error: t.touched[n] && !!t.errors[n],
          sx: c ? {
            backgroundColor: y.palette?.action?.disabled
          } : void 0,
          children: L.children
        }
      ),
      children: [
        /* @__PURE__ */ a(
          nr.Input,
          {
            render: (L, te) => /* @__PURE__ */ a(
              B,
              {
                id: D,
                inputRef: L.ref,
                value: te.inputValue,
                onChange: L.onChange,
                onBlur: (H) => {
                  L.onBlur(H), l(H);
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
  const [t, n] = yt.useState(!1), o = () => n((h) => !h), i = (h) => {
    h.preventDefault();
  }, { readOnly: s = !1, disabled: c = !1 } = r.column || {};
  return e = {
    type: t ? "text" : "password",
    InputProps: {
      readOnly: s,
      disabled: c,
      endAdornment: /* @__PURE__ */ a(On, { position: "end", children: /* @__PURE__ */ a(
        Lt,
        {
          "aria-label": "toggle password visibility",
          onClick: o,
          onMouseDown: i,
          edge: "end",
          disabled: c,
          readOnly: s,
          size: "large",
          children: t ? /* @__PURE__ */ a(Zo, {}) : /* @__PURE__ */ a(Qo, {})
        }
      ) })
    },
    ...e
  }, /* @__PURE__ */ a(Rr, { otherProps: e, ...r });
}, Pl = ({ column: e, field: r, formik: t, otherProps: n, fieldConfigs: o = {}, mode: i }) => {
  const s = i !== "copy" && o.disabled, { systemDateTimeFormat: c, stateData: h } = qe(), y = q(() => t.values[r] ? ne(t.values[r]) : null, [t.values[r]]), C = e.minField ? t.values[e.minField] : void 0, f = e.maxField ? t.values[e.maxField] : void 0, u = q(() => e.min ? ne(e.min) : e.minField && C ? ne(C) : null, [e.min, e.minField, C]), m = q(() => e.max ? ne(e.max) : e.maxField && f ? ne(f) : null, [e.max, e.maxField, f]), w = A((x) => {
    if (x === null) {
      t.setFieldValue(r, null);
      return;
    }
    const l = ne(x).hour(12).toISOString();
    t.setFieldValue(r, l);
  }, [r, t]);
  return /* @__PURE__ */ kr(
    Bn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: c(!0, !1, h.dateTime),
      name: r,
      value: y,
      onChange: w,
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDate: u,
      maxDate: m,
      disabled: s,
      slotProps: { textField: { fullWidth: !0, variant: "standard" } }
    }
  );
};
ne.extend(Rn);
const Fl = ({ column: e, field: r, formik: t, otherProps: n }) => {
  const { systemDateTimeFormat: o, stateData: i } = qe(), s = q(() => {
    const c = t.values[r];
    return c ? ne(c) : null;
  }, [t.values[r], e]);
  return /* @__PURE__ */ kr(
    kn,
    {
      ...n,
      variant: "standard",
      readOnly: e?.readOnly === !0,
      key: r,
      fullWidth: !0,
      format: o(!1, !1, i.dateTime),
      name: r,
      value: s,
      onChange: (c) => {
        c ? e.localize ? t.setFieldValue(r, c.toISOString()) : t.setFieldValue(r, c.utcOffset(0, !0).toISOString()) : t.setFieldValue(r, null);
      },
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      minDateTime: e.min ? ne(e.min) : null,
      maxDateTime: e.max ? ne(e.max) : null,
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
};
ne.extend(Lr);
const El = ({ column: e, field: r, formik: t, otherProps: n }) => {
  let o = t.values[r];
  return !e.localize && o && (o = ne.utc(o).utcOffset(ne().utcOffset(), !0).format()), /* @__PURE__ */ kr(
    Xo,
    {
      ...n,
      variant: "standard",
      readOnly: e.readOnly === !0,
      key: r,
      fullWidth: !0,
      name: r,
      value: o ? ne(o) : null,
      onChange: (i) => (e.localize || (i = i && i.isValid() ? i.format("YYYY-MM-DDTHH:mm:ss") + ".000Z" : null), t.setFieldValue(r, i)),
      onBlur: t.handleBlur,
      helperText: t.touched[r] && t.errors[r],
      slotProps: { textField: { fullWidth: !0, helperText: t.errors[r], variant: "standard" } }
    }
  );
}, Al = [null, void 0, ""];
function ea({ column: e, formik: r, lookups: t, dependsOn: n = [], isAutoComplete: o = !1, userSelected: i, model: s }) {
  const [c, h] = R([]), { buildUrl: y } = qe(), C = Dt(), f = y(s.api), u = q(() => {
    const x = {};
    if (!n.length) return x;
    for (const g of n)
      x[g] = r.values[g];
    return x;
  }, n.map((x) => r.values[x])), m = q(() => n.length ? [] : typeof e.lookup == "string" ? t[e.lookup] : e.lookup, [e.lookup, t, n]), w = A(async () => {
    if (!e.lookup) return;
    if (!Object.values(u).every(
      (g) => !Al.includes(g)
    )) {
      h([]);
      return;
    }
    try {
      const g = await Hn({
        api: f,
        model: s,
        lookups: t,
        reqData: {
          params: { lookups: [{ lookup: e.lookup, where: u }] }
        }
      });
      h(g);
    } catch (g) {
      C.showError("Could not load lookups", g.message);
    }
  }, [e.lookup, u, f, s, t, C]);
  return pe(() => {
    n.length ? w() : (o || !i.current) && h(m || []);
  }, [n.length, w, o, m]), c;
}
const Tl = yt.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], model: i, tTranslate: s, tOpts: c, ...h }) => {
  const y = yt.useRef(!1), { placeHolder: C } = e, f = ea({ column: e, formik: t, lookups: n, dependsOn: o, userSelected: y, model: i }), u = vt(), m = q(() => {
    let l = t.values[r];
    if (!l && !y.current && e.defaultValue !== void 0) {
      const v = e.defaultValue;
      if (v != null && v !== "" && f && f.length) {
        const D = f.find((N) => String(N.value) === String(v));
        D && (l = D.value, t.setFieldValue(r, D.value));
      }
    }
    if (f?.length && !l && !e.multiSelect && "IsDefault" in f[0]) {
      const v = f.find((D) => D.IsDefault);
      v && (l = v.value, t.setFieldValue(r, v.value));
    }
    return e.multiSelect && (!l || l.length === 0 ? l = [] : Array.isArray(l) || (l = l.split(",").map((v) => parseInt(v)))), l;
  }, [t.values[r], f, e.multiSelect, r]), w = A((l) => {
    typeof e.onChange == "function" && e.onChange({ formik: t, value: l.target.value, options: f, event: l, t: s, tOpts: c }), t.handleChange(l), y.current = !0;
  }, [t.values[r], e.onChange, f]), x = q(() => e.multiSelect ? Array.isArray(m) && m.length > 0 : m !== "" && m !== null && m !== void 0 && Array.isArray(f) && f.some((l) => String(l.value) === String(m)), [m, e.multiSelect, f]), g = A((l) => {
    l.stopPropagation();
    const v = e.multiSelect ? [] : "";
    t.setFieldValue(r, v), typeof e.onChange == "function" && e.onChange({ formik: t, value: v, options: f, event: l, t: s, tOpts: c }), y.current = !0;
  }, [e.multiSelect, r, t, e.onChange, f, s, c]);
  return /* @__PURE__ */ S(
    cr,
    {
      fullWidth: !0,
      error: t.touched[r] && t.errors[r],
      variant: "standard",
      children: [
        /* @__PURE__ */ a(ti, { children: C || "" }),
        /* @__PURE__ */ S(Fe, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ a(
            ri,
            {
              IconComponent: Gn,
              ...h,
              name: r,
              multiple: e.multiSelect === !0,
              readOnly: e.readOnly === !0,
              value: e.multiSelect ? Array.isArray(m) ? m : [] : `${m ?? ""}`,
              onChange: w,
              onBlur: t.handleBlur,
              sx: {
                width: "100%",
                backgroundColor: e.readOnly ? u.palette?.action?.disabled : ""
              },
              children: Array.isArray(f) && f.map((l) => /* @__PURE__ */ a(Vn, { value: l.value, disabled: l.isDisabled, children: l.label }, l.value))
            }
          ),
          x && !e.readOnly && /* @__PURE__ */ a(
            Lt,
            {
              size: "small",
              onClick: g,
              tabIndex: -1,
              sx: { position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", p: "2px" },
              "aria-label": s("Clear selection", c),
              children: /* @__PURE__ */ a(ei, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ a(pt, { children: t.touched[r] && t.errors[r] })
      ]
    },
    r
  );
}), vn = sr("div")({
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "20px"
}), Il = ({ component: e, name: r, formik: t, field: n, column: o }) => {
  const { value: i } = t.getFieldProps(r || n), { setFieldValue: s } = t, c = e || o.relation, h = A((y) => {
    s(r || n, y);
  }, [s, r, n]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ a(vn, { children: `Available ${o.label}` }),
    /* @__PURE__ */ a(c, { selected: i, available: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly }),
    /* @__PURE__ */ a(vn, { children: `Assigned ${o.label}` }),
    /* @__PURE__ */ a(c, { selected: i, assigned: !0, onAssignChange: h, disableCellRedirect: o.disableCellRedirect, readOnly: o.readOnly })
  ] });
}, Ml = ({ field: e, formik: r, orientation: t = "row", label: n, lookups: o, fieldConfigs: i = {}, mode: s, tTranslate: c, tOpts: h, ...y }) => {
  const C = (x) => {
    r.setFieldValue(e, x.target.value);
  }, f = o ? o[y.column.lookup] : [], u = vt(), m = r.touched[e] && !!r.errors[e], w = s !== "copy" && i.disabled;
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: m, children: /* @__PURE__ */ a(
      Nr,
      {
        row: t === "row",
        "aria-label": n,
        name: e,
        value: r.values[e] ?? "",
        onChange: C,
        children: f?.map((x, g) => /* @__PURE__ */ a(
          dt,
          {
            value: x.value,
            control: /* @__PURE__ */ a(bt, {}),
            label: c(x.label, h),
            disabled: w || (y?.column?.disableForValues || [])?.includes?.(r.values[e])
          },
          g
        ))
      }
    ) }),
    m && /* @__PURE__ */ a(pt, { style: { color: u.palette.error.main }, children: r.errors[e] })
  ] });
}, Ol = {
  limitTags: 5
}, Rl = ze.memo(({ column: e, field: r, formik: t, lookups: n, dependsOn: o = [], fieldConfigs: i = {}, mode: s, model: c, ...h }) => {
  const y = ea({ column: e, formik: t, lookups: n, dependsOn: o, model: c, isAutoComplete: !0 });
  let C = t.values[r] || [];
  Array.isArray(C) || (C = C.split(", ").map(Number));
  const f = y.filter((w) => C.includes(w.value)) || [], u = s !== "copy" && i.disabled, m = (w, x) => {
    let g = x?.map((l) => l.value) || [];
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
          qn,
          {
            ...h,
            multiple: !0,
            id: r,
            limitTags: e.limitTags || Ol.limitTags,
            options: y || [],
            getOptionLabel: (w) => w.label || "",
            defaultValue: f,
            renderInput: (w) => /* @__PURE__ */ a(lr, { ...w, variant: "standard" }),
            onChange: m,
            value: f,
            size: "small",
            disabled: u
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
], Nl = Do(So)(({ theme: e, isSelected: r }) => ({
  width: 34,
  height: 34,
  padding: 1,
  margin: 1,
  backgroundColor: r ? Bl : "#ffffff",
  border: `1px solid ${ii[500]}`,
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
  const { setFieldValue: o } = t, { value: i } = t.getFieldProps(e || r), s = "1000001", c = "0111110", h = "0".repeat(7), [y, C] = R(i || h), [f, u] = R(() => i ? i === s ? s : i === c ? c : "Custom" : ""), [m, w] = R(!1), x = A((v) => {
    if (Array.isArray(v)) {
      let D = h;
      for (const N of v)
        D = D.substring(0, N) + "1" + D.substring(N + 1);
      C(D), o(e || r, D), w(!0);
    } else {
      let D = m ? h : y;
      const N = D.slice(0, v) + (D[v] === "1" ? "0" : "1") + D.slice(v + 1);
      C(N), o(e || r, N), u("Custom"), w(!1);
    }
  }, [m, h, y, e, r, o]), g = vt(), l = t.touched[r] && !!t.errors[r];
  return /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(Ct, { component: "fieldset", error: l, children: /* @__PURE__ */ S(
      Nr,
      {
        row: !0,
        name: e || r,
        value: f,
        onChange: (v) => {
          const D = v.target.value;
          u(D), D !== "Custom" ? (C(D), o(e || r, D), w(!0)) : (C(h), o(e || r, h), w(!1));
        },
        children: [
          /* @__PURE__ */ a(dt, { value: s, control: /* @__PURE__ */ a(bt, {}), label: "Weekends (Sat - Sun)", onClick: () => x([0, 6]) }),
          /* @__PURE__ */ a(dt, { value: c, control: /* @__PURE__ */ a(bt, {}), label: "Weekdays (Mon - Fri)", onClick: () => x([1, 2, 3, 4, 5]) }),
          /* @__PURE__ */ a(dt, { value: "Custom", control: /* @__PURE__ */ a(bt, {}), label: "Specific days" }),
          kl.map((v, D) => /* @__PURE__ */ a(
            Ll,
            {
              day: v,
              onClick: () => x(D),
              isSelected: f === "Custom" && y[D] === "1",
              disabled: n
            },
            v.value
          ))
        ]
      }
    ) }),
    l && /* @__PURE__ */ a(pt, { style: { color: g.palette.error.main }, children: t.errors[r] })
  ] });
}, Vl = ({ isAdd: e, column: r, field: t, formik: n, otherProps: o, fieldConfigs: i = {}, mode: s }) => {
  const c = vt();
  let h = n.values[t] || [];
  Array.isArray(h) || (h = h.split(",").map((u) => u.trim()));
  const y = ze.useMemo(() => s === "copy" ? !0 : typeof i.disabled < "u" ? i.disabled : typeof r.disabled == "function" ? r.disabled({ isAdd: e, formik: n }) : !!r.disabled, [s, i.disabled, r.disabled]), C = r.hasDefault && !e ? [h[0]] : [], f = A((u, m, w, x = {}) => {
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
          qn,
          {
            ...o,
            multiple: !0,
            id: t,
            freeSolo: !0,
            value: h,
            options: [],
            renderInput: (u) => /* @__PURE__ */ a(
              lr,
              {
                ...u,
                variant: "standard",
                InputProps: {
                  ...u.InputProps,
                  sx: {
                    ...u.InputProps?.sx,
                    ...y && { backgroundColor: c.palette?.action?.disabled }
                  }
                }
              }
            ),
            onChange: f,
            size: "small",
            renderTags: (u, m) => u.map((w, x) => {
              const { key: g, ...l } = m({ index: x });
              return /* @__PURE__ */ a(
                si,
                {
                  label: w,
                  ...l,
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
}, zl = (e = []) => {
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
function Gl({ column: e, field: r, formik: t, lookups: n, fieldConfigs: o, mode: i }) {
  const s = n ? n[e.lookup] : [], c = zl(s), h = t.values[r]?.length ? t.values[r].split(", ") : [];
  let y;
  return i !== "copy" && (y = o?.disabled), /* @__PURE__ */ a(nt, { sx: { minHeight: 350 }, children: /* @__PURE__ */ a(
    ci,
    {
      selectedItems: h,
      onSelectedItemsChange: (f, u) => {
        t.setFieldValue(r, u?.join(", ") || "");
      },
      disabled: y,
      multiSelect: !0,
      checkboxSelection: !0,
      children: c.map((f) => /* @__PURE__ */ a(gn, { itemId: f.value, label: f.label, children: f.children.map((u) => /* @__PURE__ */ a(gn, { itemId: u.value, label: u.label }, u.value)) }, f.value))
    }
  ) });
}
const ql = { maxLength: 500 }, { errorMapping: jl } = Ge, Wl = 1024 * 1024;
function Ul({ column: e, field: r, formik: t }) {
  const n = t.values[r] || "", { getApiEndpoint: o } = qe(), { maxSize: i, formats: s } = e, c = o("upload"), h = o("media"), y = o(), [C, f] = R({
    isExternal: "no",
    selectedFile: null
  }), [u, m] = R(!1), w = Dt(), { getParams: x, useParams: g } = zr(), { associationId: l } = g() || x, v = l?.split("-")[0] || 1, D = (W) => {
    const X = W.target.value;
    f({
      ...C,
      isExternal: X,
      selectedFile: null
    }), t.setFieldValue(r, t.values[r]);
  }, N = (W) => {
    t.setFieldValue(r, W.target.value);
  }, B = (W) => {
    const X = W.target.files[0];
    if (X) {
      if (i && X.size > i * Wl) {
        w.showError(`File size exceeds the maximum limit of ${i} MB.`);
        return;
      }
      if (Array.isArray(s) && !s.includes(X.type)) {
        w.showError(`Invalid file format. Allowed formats: ${s.join(", ")}.`);
        return;
      }
      f((Q) => ({ ...Q, selectedFile: X }));
    }
  }, E = async () => {
    if (C.selectedFile) {
      m(!0);
      try {
        const W = new FormData();
        W.append("file", C.selectedFile), W.append("DocumentGroupId", t.values.DocumentGroupId), W.append("AssociationId", v);
        const Q = (await Un({
          method: "POST",
          url: c,
          data: W,
          headers: { "Content-Type": "multipart/form-data" },
          credentials: "include"
        })).data || {};
        if (!Q.success) {
          w.showError(Q.message || "Upload failed");
          return;
        }
        const T = h + "/" + Q.filePath;
        t.setFieldValue(r, T);
      } catch (W) {
        const X = (W.message.match(/status code (\d{3})/) || [])[1];
        w.showError(jl[X]);
      } finally {
        m(!1);
      }
    }
  }, L = new URL(y, window.location.origin).hostname.toLowerCase();
  yt.useEffect(() => {
    f({
      ...C,
      isExternal: n.toLowerCase().includes(L) ? "no" : "yes"
    });
  }, [n, f]);
  const te = t.values[r]?.length > (e.max || ql.maxLength), H = te ? "red" : "";
  return /* @__PURE__ */ S(Fe, { children: [
    /* @__PURE__ */ S(Fe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(ke, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "External Link?" }),
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
    /* @__PURE__ */ S(Fe, { sx: { display: "flex", alignItems: "center", marginBottom: 2 }, children: [
      /* @__PURE__ */ a(ke, { variant: "body1", sx: { width: "150px", marginRight: 2 }, children: "Document Link" }),
      /* @__PURE__ */ S(Fe, { sx: { flex: 1, display: "flex", flexDirection: "column" }, children: [
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
        te && /* @__PURE__ */ S(ke, { sx: { color: "red" }, children: [
          "Maximum allowed length for the document link is ",
          e.max,
          " characters."
        ] })
      ] })
    ] }),
    C.isExternal === "no" && /* @__PURE__ */ S(Fe, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ S(
        ct,
        {
          variant: "outlined",
          component: "label",
          disabled: u,
          children: [
            "Choose File",
            /* @__PURE__ */ a("input", { type: "file", hidden: !0, onChange: B })
          ]
        }
      ),
      C.selectedFile && /* @__PURE__ */ a(xt, { title: C.selectedFile.name, arrow: !0, children: /* @__PURE__ */ a(ke, { variant: "body2", children: C.selectedFile.name.length > 20 ? `${C.selectedFile.name.substring(0, 20)}...` : C.selectedFile.name }) }),
      /* @__PURE__ */ a(
        ct,
        {
          variant: "contained",
          color: "primary",
          onClick: E,
          disabled: !C.selectedFile || u,
          children: u ? /* @__PURE__ */ a(Po, { size: 24, color: "inherit" }) : "Upload File"
        }
      )
    ] })
  ] });
}
const Hl = ({ field: e, formik: r }) => {
  const [t, n] = ze.useState({}), o = Xn(t, 300);
  ze.useEffect(() => {
    if (r.values[e])
      try {
        const s = JSON.parse(r.values[e]);
        n(s);
      } catch {
        n({});
      }
  }, [r.values[e]]), ze.useEffect(() => {
    const s = JSON.stringify(o);
    r.values[e] !== s && r.setFieldValue(e, s);
  }, [o, e, r, r.values[e]]);
  const i = (s, c) => {
    const h = { ...t, [s]: c };
    n(h);
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
              ui,
              {
                id: s,
                name: s,
                value: t[s],
                onChange: (c) => i(s, c.target.value),
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
  chipInput: Vl,
  treeCheckbox: Gl,
  fileUpload: Ul,
  json: Hl
}, Dn = { paddingTop: "2.5px", paddingBottom: "2.5px" }, Kl = li("span")({
  color: "red !important"
}), ta = (e) => {
  const { t: r, i18n: t } = wt(), n = ze.useMemo(() => ({ t: r, i18n: t }), [r, t]), o = e?.tTranslate ?? ((i) => i);
  return { translate: r, i18n: t, tOpts: n, tTranslate: o };
}, _l = ({ tabColumns: e, model: r, formik: t, data: n, onChange: o, combos: i, lookups: s, fieldConfigs: c, mode: h, handleSubmit: y }) => {
  const [C, f] = ze.useState(/* @__PURE__ */ new Set()), { tOpts: u, tTranslate: m } = ta(r), { activeStep: w, setActiveStep: x } = ze.useContext(na), g = {};
  for (let E = 0, L = r.columns.length; E < L; E++) {
    const { field: te, skip: H } = r.columns[E];
    H && (g[H.step] = t.values[te]);
  }
  const l = (E) => C.has(E) || g[E], v = () => {
    for (let E = w + 1; E < e.length; E++)
      if (!l(E))
        return !1;
    return !0;
  }, D = () => {
    let E = w + 1;
    for (; g[E]; )
      E++;
    f((L) => new Set(L).add(w)), E >= e.length || v() ? y() : x(E);
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
    /* @__PURE__ */ a(ni, { activeStep: w, sx: { marginBottom: "20px" }, children: e.map(({ title: E, key: L }, te) => /* @__PURE__ */ a(ai, { completed: l(te), children: /* @__PURE__ */ a(oi, { children: /* @__PURE__ */ a(ke, { sx: { fontSize: "20px" }, children: m(E, u) }) }) }, L)) }),
    /* @__PURE__ */ S(ze.Fragment, { children: [
      /* @__PURE__ */ a(ra, { formElements: B.items, model: r, formik: t, data: n, onChange: o, combos: i, lookups: s, fieldConfigs: c, mode: h }),
      /* @__PURE__ */ S(nt, { sx: { display: "flex", flexDirection: "row", pt: 2, mr: 2 }, children: [
        w !== 0 ? /* @__PURE__ */ a(Me, { color: "inherit", disabled: w === 0, onClick: N, variant: "contained", sx: { mr: 2 }, children: m("Back", u) }) : null,
        /* @__PURE__ */ a(Me, { onClick: D, variant: "contained", children: v() ? m("Finish", u) : m("Next", u) })
      ] })
    ] })
  ] });
}, ra = ({ formElements: e, model: r, formik: t, data: n, onChange: o, combos: i, lookups: s, fieldConfigs: c, mode: h, isAdd: y }) => {
  const { tOpts: C, tTranslate: f } = ta(r);
  return e?.length ? /* @__PURE__ */ a(ye, { children: e.map(({ Component: u, column: m, field: w, label: x, otherProps: g }, l) => {
    const v = typeof m.relation == "function";
    return /* @__PURE__ */ S(Pr, { container: !0, spacing: 2, sx: { marginTop: "1rem", marginBottom: "1rem" }, alignItems: v ? "flex-start" : "center", children: [
      m?.showLabel !== !1 ? /* @__PURE__ */ a(Pr, { size: { xs: 3 }, sx: Dn, children: /* @__PURE__ */ S(ke, { sx: { fontSize: "16px", fontWeight: "bold" }, className: "form-label", children: [
        f(m.label || w, C),
        ": ",
        m.required && /* @__PURE__ */ a(Kl, { children: "*" })
      ] }) }) : null,
      /* @__PURE__ */ a(Pr, { size: { xs: v ? 12 : 9 }, sx: Dn, children: /* @__PURE__ */ a(u, { isAdd: y, model: r, fieldConfigs: c[w], mode: h, column: m, field: w, label: x, formik: t, data: n, onChange: o, combos: i, lookups: s, tTranslate: f, tOpts: C, ...g }) })
    ] }, l);
  }) }) : null;
}, Jl = function({ columns: e, tabs: r = {}, id: t, searchParams: n }) {
  const o = [], i = {};
  for (const c in r)
    i[c] = [];
  for (const c of e) {
    const h = c.type;
    if (c.label === null)
      continue;
    const { field: y, label: C, tab: f } = c, u = {};
    c.options && (u.options = c.options), c.dependsOn && (u.dependsOn = c.dependsOn);
    const m = Yl[h];
    if (!m || c.hideInAddGrid && t === "0")
      continue;
    (f && r[f] ? i[f] : o).push({ Component: m, field: y, label: C, column: { ...c, readOnly: n.has("showRelation") || c.readOnly }, otherProps: u });
  }
  const s = [];
  for (const c in i)
    s.push({ key: c, title: r[c], items: i[c] });
  return { formElements: o, tabColumns: s };
}, Zl = ({ model: e, formik: r, data: t, combos: n, onChange: o, lookups: i, id: s, fieldConfigs: c, mode: h, handleSubmit: y }) => {
  const C = Ge.emptyIdValues.includes(s), { formElements: f, tabColumns: u } = ze.useMemo(() => {
    const m = e.formConfig?.showTabbed, w = new URLSearchParams(window.location.search), { formElements: x, tabColumns: g } = Jl({ columns: e.columns, tabs: m ? e.tabs : {}, id: s, searchParams: w });
    return { formElements: x, tabColumns: g, showTabs: m && g.length > 0 };
  }, [e]);
  return /* @__PURE__ */ S("div", { children: [
    /* @__PURE__ */ a(ra, { isAdd: C, formElements: f, model: e, formik: r, data: t, onChange: o, combos: n, lookups: i, fieldConfigs: c, mode: h }),
    /* @__PURE__ */ a("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ a(_l, { tabColumns: u, model: e, formik: r, data: t, onChange: o, combos: n, lookups: i, fieldConfigs: c, mode: h, handleSubmit: y }) })
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
const es = Pn(({ relation: e, parentFilters: r, parent: t, where: n, models: o, readOnly: i }) => {
  const s = o.find(({ name: y }) => y === e);
  if (!s) return null;
  const c = { ...s, hideBreadcrumb: !0 }, h = c instanceof or ? c : new or(c);
  return h ? /* @__PURE__ */ a(
    h.ChildGrid,
    {
      readOnly: i,
      parentFilters: r,
      parent: t,
      model: c,
      where: n,
      isChildGrid: !0
    }
  ) : null;
}), ts = yt.memo(({ relations: e, parent: r, where: t = [], models: n, relationFilters: o, readOnly: i }) => {
  const [s, c] = R(0);
  return /* @__PURE__ */ S(nt, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ a(nt, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ a(pi, { value: s, onChange: (y, C) => {
      c(C);
    }, "aria-label": "relations tabs", children: e.map((y, C) => {
      const f = n.find(({ name: m }) => m === y) || {}, u = f.listTitle || f.title || y;
      return /* @__PURE__ */ a(
        di,
        {
          label: u,
          ...Xl(C)
        },
        y
      );
    }) }) }),
    e.map((y, C) => /* @__PURE__ */ a(Ql, { value: s, index: C, children: /* @__PURE__ */ a(
      es,
      {
        readOnly: i,
        relation: y,
        models: n,
        parentFilters: o[y] || [],
        parent: r,
        where: t
      },
      y
    ) }, y))
  ] });
}), na = ir(1), rs = {}, be = {
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
  Layout: i = Zl,
  baseSaveData: s = {},
  sx: c,
  readOnly: h,
  beforeSubmit: y,
  deletePromptText: C,
  detailPanelId: f = null,
  // Grid Row Detail Panel Id
  onCancel: u,
  onSaveSuccess: m
}) => {
  const w = e.formTitle || e.title, { t: x, i18n: g } = wt(), l = q(() => ({ t: x, i18n: g }), [x, g]), v = e?.tTranslate ?? ((z) => z), { navigate: D, getParams: N, useParams: B, pathname: E } = zr(), { relations: L = [] } = e, { stateData: te, buildUrl: H, setPageTitle: W } = qe(), X = B() || N, { id: Q = "" } = X, T = f || Q.split("-")[be.editIdIndex], ge = new URLSearchParams(window.location.search), ae = ge.has(be.baseData) && ge.get(be.baseData);
  if (ae) {
    const z = JSON.parse(ae);
    typeof z === be.object && z !== null && (s = { ...s, ...z });
  }
  const [me, se] = R(!0), [j, ce] = R({}), [$, we] = R({}), [P, M] = R(!1), U = Dt(), [G, ee] = R(null), [ue, je] = R(0), [Vt, Je] = R(!1), [We, ur] = R(null), [ft, St] = R(""), Pt = typeof e.applyFieldConfig === be.function ? e.applyFieldConfig({ data: j, lookups: $ }) : rs, fe = H(e.api), Ft = Q.includes("-") && Q.split("-")[0] === "0" ? "copy" : "", ot = te.userData || {}, zt = {
    add: !0,
    edit: !0,
    delete: !0,
    ...e.permissions,
    ...o
  }, { canEdit: d } = Jn({
    userData: ot,
    model: e,
    userDefinedPermissions: zt
  }), { hideBreadcrumb: ht = !1, navigateBack: ve } = e, Ze = !("canEdit" in j) || j.canEdit, Ee = A(() => {
    let z;
    switch (typeof ve) {
      case be.function:
        z = ve({ params: X, searchParams: ge, data: j });
        break;
      case be.number:
      case be.string:
        z = ve;
        break;
      default:
        z = E.substring(0, E.lastIndexOf("/"));
        break;
    }
    D(z);
  }, [ve, D, X, ge, j, E]), Et = q(() => Ge.emptyIdValues.includes(T), [T]), Oe = q(() => Et ? { ...e.initialValues, ...j, ...s } : { ...s, ...e.initialValues, ...j }, [e.initialValues, j, T]), Ae = r || fe, De = q(() => {
    if (f)
      return f;
    const z = Q.split("-");
    return z.length > 1 ? z[be.loadIdIndex] : T;
  }, [f, Q, T]), Gt = A(async () => {
    se(!0);
    try {
      const z = await ar({
        api: Ae,
        model: e,
        id: De
      });
      At(z);
    } catch (z) {
      dr("Could not load record", z.message);
    } finally {
      se(!1);
    }
  }, [Ae, e, De]);
  pe(() => {
    Gt();
  }, [T, De, e, Ae, Gt]), pe(() => {
    ee(e.getValidationSchema({ id: T, tTranslate: v, tOpts: l }));
  }, [T, e, ee, x, l, v]);
  const Te = $n({
    enableReinitialize: !0,
    initialValues: Oe,
    validationSchema: G,
    validateOnBlur: e?.validateOnBlur ?? !1,
    onSubmit: async (z, { resetForm: Pe }) => {
      Object.keys(z).forEach((Z) => {
        typeof z[Z] === be.string && (z[Z] = z[Z].trim());
      }), se(!0), Vr({
        id: T,
        api: fe,
        values: z,
        model: e
      }).then((Z) => {
        if (!Z) return;
        if (e.reloadOnSave)
          return window.location.reload();
        typeof m === be.function && m();
        const Ue = Z.info ? Z.info : `Record ${T === 0 ? "Added" : "Updated"} Successfully.`;
        U.showMessage(v(Ue, l)), ve !== !1 && Ee(), Pe({ values: Te.values });
      }).catch((Z) => {
        U.showError(
          v("An error occurred, please try after some time.", l),
          Z
        ), e.reloadOnSave && Pe();
      }).finally(() => {
        se(!1);
      });
    }
  }), qt = A(() => {
    Te.resetForm(), Je(!1), typeof u === be.function && u(), ve !== !1 && Ee();
  }, [Te, u, ve, Ee]), dr = A((z, Pe) => {
    se(!1), U.showError(v(z, l), Pe), Ee();
  }, [U, Ee, v, l]), At = function({ id: z, title: Pe, record: Z, lookups: Ue }) {
    const Le = Q.indexOf("-") > -1, Ie = !z || z === "0", Wt = Ie ? be.create : Le ? be.copy : be.edit, Mt = Ie ? "" : Z[e.linkColumn], Xe = [{ text: e.breadCrumbs }, { text: Wt }];
    Le && (Z[e.linkColumn] = ""), e.columns.forEach((Ot) => {
      Ot.skipCopy && Le && (Z[Ot.field] = "");
    }), ce(Z), we(Ue), se(!1), Mt !== "" && Xe.push({ text: Mt }), W({
      showBreadcrumbs: !0,
      breadcrumbs: Xe
    });
  }, Se = A((z) => {
    Te.dirty && Ze ? Je(!0) : (typeof u === be.function && u(), ve !== !1 && Ee()), z.preventDefault();
  }, [Te.dirty, Ze, u, ve, Ee]), de = A(async () => {
    try {
      M(!0), await $r({
        id: T,
        api: r || e.api,
        model: e
      }) === !0 && (U.showMessage(v("Record Deleted Successfully.", l)), ve !== !1 && Ee());
    } catch (z) {
      U.showError(v("An error occurred, please try after some time.", l), z?.message);
    } finally {
      M(!1);
    }
  }, [T, r, e.api, U, St, e, ve, Ee, v, l]), Tt = () => {
    St(null), M(!1);
  }, pr = A((z) => {
    const { name: Pe, value: Z } = z.target;
    ce({ ...j, [Pe]: Z });
  }, [j]), It = A(async (z) => {
    z && z.preventDefault(), typeof y === be.function && await y({ formik: Te, model: e });
    const { errors: Pe } = Te;
    Te.handleSubmit();
    const Z = Object.keys(Pe)[0], Ue = Pe[Z];
    Ue && U.showError(v(Ue, l), null, "error");
    const Le = e.columns.find(
      (Ie) => Ie.field === Z
    ) || {};
    Le.tab && je(Object.keys(e.tabs).indexOf(Le.tab));
  }, [y, Te, e, U, je, v, l]), jt = [
    { text: v(w, l) },
    { text: v(T === "0" ? "New" : "Update", l) }
  ], mt = Number(T) !== 0 && !!L.length, fr = ge.has("showRelation"), Qe = !Ze || j.readOnlyRelations;
  C = C || v("Are you sure you want to delete ?", l);
  const { showPageTitle: hr = !0 } = e;
  return /* @__PURE__ */ S(ye, { children: [
    hr && /* @__PURE__ */ a(
      _n,
      {
        navigate: D,
        title: w,
        showBreadcrumbs: !ht,
        breadcrumbs: jt,
        model: e,
        enableBackButton: ve !== void 0
      }
    ),
    /* @__PURE__ */ a(na.Provider, { value: { activeStep: ue, setActiveStep: je }, children: /* @__PURE__ */ S(Ho, { sx: { padding: 2, ...c }, children: [
      me ? /* @__PURE__ */ a(nt, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ a(Ko, {}) }) : /* @__PURE__ */ S("form", { children: [
        /* @__PURE__ */ S(
          Yo,
          {
            direction: "row",
            spacing: 2,
            justifyContent: "flex-end",
            mb: 1,
            children: [
              d && Ze && !fr && !h && /* @__PURE__ */ a(
                Me,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  onClick: It,
                  children: v("Save", l)
                }
              ),
              /* @__PURE__ */ a(
                Me,
                {
                  variant: "contained",
                  type: "cancel",
                  color: "error",
                  onClick: Se,
                  children: v("Cancel", l)
                }
              ),
              o.delete && /* @__PURE__ */ a(
                Me,
                {
                  variant: "contained",
                  color: "error",
                  onClick: () => M(!0),
                  children: v("Delete", l)
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ a(
          i,
          {
            model: e,
            formik: Te,
            data: j,
            fieldConfigs: Pt,
            onChange: pr,
            lookups: $,
            id: T,
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
          open: Vt,
          onConfirm: qt,
          onCancel: () => Je(!1),
          title: v("Changes not saved", l),
          okText: v("Discard", l),
          cancelText: v("Continue", l),
          children: v("Would you like to continue to edit or discard changes?", l)
        }
      ),
      /* @__PURE__ */ a(
        _e,
        {
          open: P,
          onConfirm: de,
          onCancel: () => {
            M(!1), ur(null);
          },
          title: v(We ? "Error Deleting Record" : "Confirm Delete", l),
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
}, as = {}, Sn = !0, os = {
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
    const i = "module" in r ? r.module : t.replace(/[^\w\s]/gi, "");
    n || (n = `${t.replaceAll(tr.nonAlphaNumeric, "-").toLowerCase()}`, o = t.replaceAll(" ", "") + "Id");
    const s = { ...r.defaultValues }, c = i || t;
    Object.assign(this, {
      standard: !0,
      name: c,
      permissions: { ...or.defaultPermissions },
      idProperty: o,
      linkColumn: `${c}Name`,
      overrideFileName: t,
      preferenceId: c,
      tableName: c,
      module: i,
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
    const { columns: o } = this, i = {};
    for (const s of o) {
      const { field: c, label: h, header: y, type: C = "string", requiredIfNew: f = !1, required: u = !1, min: m = "", max: w = "", validate: x } = s, g = h || y || c;
      if (!g || h === null || h === "") continue;
      let l;
      switch (C) {
        case "string":
          l = he.string().nullable().trim().label(g), m && !isNaN(Number(m)) && (l = l.min(Number(m), t(`${g} must be at least ${m} characters long`, n))), w && !isNaN(Number(w)) && (l = l.max(Number(w), t(`${g} must be at most ${w} characters long`, n))), u && (l = l.trim().required(t(`${g} is required`, n)));
          break;
        case "boolean":
          l = he.bool().nullable().transform((v, D) => D === "" ? null : v).label(g);
          break;
        case "radio":
        case "dayRadio":
          l = he.mixed().label(g), u && (l = l.required(t(`Select at least one option for ${g}`, n)));
          break;
        case "date":
          l = he.date().nullable().transform((v, D) => D === "" || D === null ? null : v).label(g), u && (l = l.required(t(`${g} is required`, n)));
          break;
        case "dateTime":
          l = he.date().nullable().transform((v, D) => D === "" || D === null ? null : v).label(g), u && (l = l.required(t(`${g} is required`, n)));
          break;
        case "select":
        case "autocomplete":
          u ? l = he.string().trim().label(g).required(t(`Select at least one ${g}`, n)) : l = he.string().nullable();
          break;
        case "password":
          l = he.string().label(g).test("ignore-asterisks", t(`${g} must be a valid password.`, n), (v) => {
            if (v === "******") return !0;
            const D = Number(m) || 8, N = Number(w) || 50, B = s.regex || tr.password;
            return he.string().min(D, t(`${g} must be at least ${D} characters`, n)).max(N, t(`${g} must be at most ${N} characters`, n)).matches(
              B,
              t(`${g} must contain at least one lowercase letter, one uppercase letter, one digit, and one special character`, n)
            ).isValidSync(v);
          });
          break;
        case "email":
          l = he.string().trim().matches(
            s.regex || tr.email,
            t("Email must be a valid email", n)
          );
          break;
        case "number":
          u ? l = he.number().label(g).required(t(`${g} is required.`, n)) : l = he.number().nullable(), m !== void 0 && m !== "" && !isNaN(Number(m)) && (l = l.min(Number(m), t(`${g} must be greater than or equal to ${m}`, n))), w !== void 0 && w !== "" && !isNaN(Number(w)) && (l = l.max(Number(w), t(`${g} must be less than or equal to ${w}`, n)));
          break;
        case "fileUpload":
          l = he.string().trim().label(g);
          break;
        default:
          l = he.mixed().nullable().label(g);
          break;
      }
      if (u && C !== "string" && (l = l.required(t(`${g} is required`, n))), f && (!r || r === "") && (l = l.trim().required(t(`${g} is required`, n))), x) {
        const v = tr.compareValidatorRegex.exec(x);
        if (v) {
          const D = v[1], N = o.find(
            (B) => (B.formField === D || B.field) === D
          );
          l = l.oneOf(
            [he.ref(D)],
            t(`${g} must match ${N.label}`, n)
          );
        }
      }
      i[c] = l;
    }
    return he.object({ ...i, ...this.validationSchema });
  }
  Form = ({ match: r, ...t }) => /* @__PURE__ */ a(ns, { model: this, Layout: this.Layout, ...t });
  Grid = ({ match: r, ...t }) => /* @__PURE__ */ a(xn, { model: this, showRowsSelected: Sn, ...t });
  ChildGrid = (r) => /* @__PURE__ */ S(ye, { children: [
    /* @__PURE__ */ a(xn, { model: this, ...r, customStyle: as, showRowsSelected: Sn }),
    /* @__PURE__ */ a(Fo, { orientation: "horizontal", sx: { mt: 2 } })
  ] });
}
export {
  _e as DialogComponent,
  xn as GridBase,
  Ui as HelpModal,
  bn as MuiTypography,
  _n as PageTitle,
  Ic as RouterProvider,
  jn as SnackbarContext,
  Ec as SnackbarProvider,
  Tc as StateProvider,
  or as UiModel,
  Ac as crudHelper,
  Ei as daDKGrid,
  Ti as deDEGrid,
  Mi as elGRGrid,
  Ri as esESGrid,
  ki as frFRGrid,
  rt as httpRequest,
  Li as itITGrid,
  Wi as locales,
  Gi as ptPT,
  Vi as trTRGrid,
  Fi as useMobile,
  zr as useRouter,
  Dt as useSnackbar,
  qe as useStateContext
};
//# sourceMappingURL=index.js.map
