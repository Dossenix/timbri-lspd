const RECORDS_KEY = "lspd-timbri-records-v2";
const FORMS_KEY = "lspd-timbri-forms-v2";
const THEME_KEY = "lspd-timbri-theme-v1";
const INSTRUCTORS_KEY = "lspd-istruttori-roster-v1";
const INSTRUCTOR_MOVEMENTS_KEY = "lspd-istruttori-movements-v1";
const DEFAULT_USER = "<@1084580275582931044>";
const LSPD_EMOJI = "<:LSPD:1495387705670893680>";
const INSTRUCTOR_NOTIFY_ROLE = "<@&1495219820038459512>";

const INSTRUCTOR_ROLES = [
  { id: "supervisore", nome: "Supervisore Istruttori", discordRole: "<@&1279360766218342400>" },
  { id: "direttore", nome: "Direttore Istruttori", discordRole: "<@&1495402199965106227>" },
  { id: "vice-direttore", nome: "Vice Direttore Istruttori", discordRole: "<@&1071162374591098920>" },
  { id: "coordinatore", nome: "Coordinatore Istruttori", discordRole: "<@&1097961769953144903>" },
  { id: "istruttore-capo", nome: "Istruttore Capo", discordRole: "<@&1271822799992000604>" },
  { id: "istruttore-esperto", nome: "Istruttore Esperto", discordRole: "<@&1082037859604779088>" },
  { id: "istruttore", nome: "Istruttore", discordRole: "<@&1017373230648000532>" },
  { id: "istruttore-prova", nome: "Istruttore in Prova", discordRole: "<@&1060666099076710491>" },
];

const DEFAULT_INSTRUCTORS = [
  { id: "default-white", roleId: "supervisore", name: "White", note: "" },
  { id: "default-londra", roleId: "supervisore", name: "Londra", note: "" },
  { id: "default-ancona", roleId: "supervisore", name: "Ancona", note: "" },
  { id: "default-detroit", roleId: "direttore", name: "Detroit", note: "" },
  { id: "default-mantova", roleId: "coordinatore", name: "Mantova", note: "prova fino al giorno 19/05" },
  { id: "default-mako", roleId: "istruttore-capo", name: "Mako", note: "" },
  { id: "default-edo", roleId: "istruttore-capo", name: "Edo", note: "" },
  { id: "default-phoenix", roleId: "istruttore-capo", name: "Phoenix", note: "" },
  { id: "default-dublino", roleId: "istruttore-esperto", name: "Dublino", note: "" },
  { id: "default-north", roleId: "istruttore-esperto", name: "North", note: "" },
  { id: "default-tropea", roleId: "istruttore", name: "Tropea", note: "" },
  { id: "default-cooper", roleId: "istruttore", name: "Cooper", note: "" },
  { id: "default-marke", roleId: "istruttore", name: "Marke", note: "" },
  { id: "default-price", roleId: "istruttore", name: "Price", note: "" },
  { id: "default-light", roleId: "istruttore-prova", name: "Light", note: "" },
];

const REPARTI_INTERNI = [
  {
    id: "servizio-ufficiale",
    nome: "Servizio Ufficiale",
    sottotitolo: "Grado di Ufficiale",
    sigla: "UF",
    categoria: "Comando",
    responsabile: "Ufficiale in servizio",
    destinazione: "Canale Ufficiale 1",
    descrizione: "Timbro per servizio ufficiale, disponibilita operativa e gestione reparto.",
    startLabel: "Orario d'entrata",
    endLabel: "Orario d'uscita",
    startField: "entrata",
    endField: "uscita",
    fields: [
      { id: "nome", label: "Nome e cognome", type: "text", defaultValue: DEFAULT_USER },
      { id: "entrata", label: "Orario d'entrata", type: "timeText", readonly: true },
      { id: "uscita", label: "Orario d'uscita", type: "timeText", readonly: true },
      { id: "membriEntrata", label: "Membri all'entrata", type: "text", defaultValue: "n1" },
      { id: "membriUscita", label: "Membri all'uscita", type: "text" },
      { id: "piccoAttivita", label: "Picco di attivita durante il servizio", type: "text" },
      {
        id: "attivitaSvolte",
        label: "Attivita svolte",
        type: "textarea",
        placeholder: "Scrivi una attivita per riga",
      },
    ],
    template: "official",
  },
  {
    id: "coordinamento",
    nome: "Coordinamento",
    sottotitolo: "Gestione servizio",
    sigla: "CO",
    categoria: "Comando",
    responsabile: "Coordinatore turno",
    destinazione: "Desk coordinamento",
    descrizione: "Timbro per coordinamento, gestione presenza e riepilogo totale servizio.",
    startLabel: "Entrata",
    endLabel: "Uscita",
    startField: "entrata",
    endField: "uscita",
    fields: [
      { id: "nome", label: "Nome e cognome", type: "text", defaultValue: DEFAULT_USER },
      { id: "entrata", label: "Entrata", type: "timeText", readonly: true },
      { id: "uscita", label: "Uscita", type: "timeText", readonly: true },
    ],
    template: "coordination",
  },
  {
    id: "assunzioni",
    nome: "Assunzioni",
    sottotitolo: "Colloqui e formazioni",
    sigla: "AS",
    categoria: "Personale",
    responsabile: "Ufficio assunzioni",
    destinazione: "Desk assunzioni",
    descrizione: "Timbro per sessioni di colloquio, selezione e formazione nuovi agenti.",
    startLabel: "Orario d'entrata",
    endLabel: "Orario d'uscita",
    startField: "entrata",
    endField: "uscita",
    fields: [
      { id: "nome", label: "Nome", type: "text", defaultValue: DEFAULT_USER },
      { id: "entrata", label: "Orario d'entrata", type: "timeText", readonly: true },
      { id: "uscita", label: "Orario d'uscita", type: "timeText", readonly: true },
      { id: "colloqui", label: "Colloqui eseguiti", type: "number", defaultValue: "0", min: 0 },
      { id: "formazioni", label: "Formazioni", type: "number", defaultValue: "0", min: 0 },
    ],
    template: "hiring",
  },
  {
    id: "elicotteristi",
    nome: "Elicotteristi",
    sottotitolo: "Eagle unit",
    sigla: "EL",
    categoria: "Operativo",
    responsabile: "Responsabile Eagle",
    destinazione: "Desk elicotteristi",
    descrizione: "Modulo per decollo, atterraggio, compagno di eagle e rapporto motivazione.",
    startLabel: "Decollo",
    endLabel: "Atterraggio",
    startField: "decollo",
    endField: "atterraggio",
    fields: [
      { id: "nome", label: "Nome dell'agente", type: "text", defaultValue: DEFAULT_USER },
      { id: "compagno", label: "Compagno di eagle", type: "text" },
      { id: "decollo", label: "Decollo", type: "timeText", readonly: true },
      { id: "atterraggio", label: "Atterraggio", type: "timeText", readonly: true },
      { id: "rapporto", label: "Rapporto", type: "textarea", placeholder: "Motivazione" },
    ],
    template: "eagle",
  },
  {
    id: "merryweather",
    nome: "Merryweather",
    sottotitolo: "Protezione centrale",
    sigla: "MW",
    categoria: "Operativo",
    responsabile: "Referente protezione",
    destinazione: "Desk Merryweather",
    descrizione: "Timbro per attivita di protezione centrale, postazioni e copertura area.",
    startLabel: "Entrata",
    endLabel: "Uscita",
    startField: "entrata",
    endField: "uscita",
    fields: [
      { id: "nome", label: "Nome", type: "text", defaultValue: DEFAULT_USER },
      { id: "entrata", label: "Entrata", type: "timeText", readonly: true },
      { id: "uscita", label: "Uscita", type: "timeText", readonly: true },
      {
        id: "rapporto",
        label: "Rapporto",
        type: "textarea",
        defaultValue:
          "protezione centrale specificata su desk, piano 0, periodo di protezione dal tetto con carabina e cecchino leggero",
      },
    ],
    template: "merryweather",
  },
  {
    id: "interforce",
    nome: "Interforce",
    sottotitolo: "Servizio volontario",
    sigla: "IF",
    categoria: "Operativo",
    responsabile: "Referente Interforce",
    destinazione: "Desk Interforce",
    descrizione: "Timbro per servizio Interforce autorizzato o chiamato da un referente.",
    startLabel: "Orario entrata",
    endLabel: "Uscita",
    startField: "entrata",
    endField: "uscita",
    fields: [
      { id: "nomeCodice", label: "Nome in codice", type: "text", defaultValue: DEFAULT_USER },
      { id: "entrata", label: "Orario entrata", type: "timeText", readonly: true },
      { id: "uscita", label: "Uscita", type: "timeText", readonly: true },
      {
        id: "autorizzatoDa",
        label: "Chiamati/autorizzati da",
        type: "text",
        placeholder: "Inserire id discord o \\",
      },
      { id: "motivo", label: "Motivo", type: "text", defaultValue: "servizio volontario" },
    ],
    template: "interforce",
  },
];

const LINK_INVIO_RAPIDI = [
  {
    nome: "Canale Ufficiale 1",
    reparto: "Servizio Ufficiale",
    dettaglio: "Domande operative, ritiro refurtiva e gestione magazzini.",
    url: "https://discord.com/channels/959468486504095824/1095341383017058334",
    copia: "https://discord.com/channels/959468486504095824/1095341383017058334",
  },
  {
    nome: "Desk Coordinamento",
    reparto: "Coordinamento",
    dettaglio: "Invio rapporto totale orario servizio.",
    url: "https://discord.com/channels/959468486504095824/1032630571299512400",
    copia: "https://discord.com/channels/959468486504095824/1032630571299512400",
  },
  {
    nome: "Desk Assunzioni",
    reparto: "Assunzioni",
    dettaglio: "Colloqui eseguiti e formazioni completate.",
    url: "https://discord.com/channels/959468486504095824/1495438490240946238",
    copia: "https://discord.com/channels/959468486504095824/1495438490240946238",
  },
  {
    nome: "Desk Elicotteristi",
    reparto: "Elicotteristi",
    dettaglio: "Decollo, atterraggio, compagno di eagle e motivazione.",
    url: "https://discord.com/channels/959468486504095824/1118293054441390111",
    copia: "https://discord.com/channels/959468486504095824/1118293054441390111",
  },
  {
    nome: "Desk Merryweather",
    reparto: "Merryweather",
    dettaglio: "Rapporto protezione centrale e postazioni operative.",
    url: "https://discord.com/channels/959468486504095824/1495231916654329987",
    copia: "https://discord.com/channels/959468486504095824/1495231916654329987",
  },
  {
    nome: "Desk Interforce",
    reparto: "Interforce",
    dettaglio: "Servizi volontari autorizzati o chiamati da referenti.",
    url: "#",
    copia: "Inserisci qui il link del desk Interforce",
  },
];

const ICONS = {
  "arrow-up": `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16"></path><path d="M16 8h2a2 2 0 0 1 2 2v11"></path><path d="M9 7h2"></path><path d="M9 11h2"></path><path d="M9 15h2"></path></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"></path></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="m10 8 6 4-6 4Z"></path></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 16v-5"></path><path d="M12 16V8"></path><path d="M16 16v-3"></path></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>`,
  stop: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><rect x="9" y="9" width="6" height="6" rx="1"></rect></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m19 6-1 14H6L5 6"></path><path d="M10 11v5"></path><path d="M14 11v5"></path></svg>`,
  undo: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 0 1 0 12h-1"></path></svg>`,
  "user-plus": `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M19 8v6"></path><path d="M22 11h-6"></path></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
};

const $ = (selector) => document.querySelector(selector);

const state = {
  query: "",
  category: "Tutti",
  records: loadRecords(),
  forms: loadForms(),
  instructors: loadInstructorRoster(),
  instructorMovements: loadInstructorMovements(),
};

const elements = {
  date: $("#today-label"),
  lastUpdate: $("#last-update"),
  totalHours: $("#total-hours"),
  todayHours: $("#today-hours"),
  openStamps: $("#open-stamps"),
  topDepartment: $("#top-department"),
  departmentSummary: $("#department-summary"),
  departmentCount: $("#department-count"),
  departmentGrid: $("#department-grid"),
  search: $("#module-search"),
  tabs: $("#category-tabs"),
  moduleGrid: $("#module-grid"),
  moduleCount: $("#module-count"),
  empty: $("#empty-state"),
  sendList: $("#send-list"),
  themeToggle: $("#theme-toggle"),
  themeLabel: $("#theme-label"),
  downloadReport: $("#download-report"),
  copyFullReport: $("#copy-full-report"),
  instructorCount: $("#instructor-count"),
  instructorName: $("#instructor-name"),
  instructorRole: $("#instructor-role"),
  instructorNote: $("#instructor-note"),
  instructorPerson: $("#instructor-person"),
  instructorTargetRole: $("#instructor-target-role"),
  instructorRoster: $("#instructor-roster"),
  instructorHierarchyOutput: $("#instructor-hierarchy-output"),
  instructorMovementsOutput: $("#instructor-movements-output"),
  addInstructor: $("#add-instructor"),
  promoteInstructor: $("#promote-instructor"),
  moveInstructor: $("#move-instructor"),
  removeInstructor: $("#remove-instructor"),
  copyInstructorHierarchy: $("#copy-instructor-hierarchy"),
  copyInstructorMovements: $("#copy-instructor-movements"),
  clearInstructorMovements: $("#clear-instructor-movements"),
  resetInstructors: $("#reset-instructors"),
};

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    return;
  }
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  if (!elements.themeToggle || !elements.themeLabel) return;
  elements.themeToggle.setAttribute("aria-pressed", String(isDark));
  elements.themeToggle.querySelector(".icon").innerHTML = isDark ? ICONS.sun : ICONS.moon;
  elements.themeLabel.textContent = isDark ? "Bianco" : "Nero";
}

function loadRecords() {
  try {
    const raw = localStorage.getItem(RECORDS_KEY) || localStorage.getItem("lspd-timbri-records-v1");
    const parsed = raw ? JSON.parse(raw) : [];
    const allowedDepartments = new Set(REPARTI_INTERNI.map((department) => department.id));
    return Array.isArray(parsed)
      ? parsed.filter(
          (record) =>
            record &&
            allowedDepartments.has(record.departmentId) &&
            record.id &&
            record.start
        )
      : [];
  } catch {
    return [];
  }
}

function loadForms() {
  try {
    const raw = localStorage.getItem(FORMS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function cloneDefaultInstructorRoster() {
  return DEFAULT_INSTRUCTORS.map((member) => ({ ...member }));
}

function normalizeInstructorMember(member, index) {
  const role =
    INSTRUCTOR_ROLES.find((item) => item.id === member?.roleId) ||
    INSTRUCTOR_ROLES[INSTRUCTOR_ROLES.length - 1];
  const name = String(member?.name || "").trim();
  if (!name || !role) return null;

  return {
    id: member.id || `istruttore-${Date.now()}-${index}`,
    roleId: role.id,
    name,
    note: String(member.note || "").trim(),
  };
}

function loadInstructorRoster() {
  try {
    const raw = localStorage.getItem(INSTRUCTORS_KEY);
    if (!raw) return cloneDefaultInstructorRoster();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.map(normalizeInstructorMember).filter(Boolean)
      : cloneDefaultInstructorRoster();
  } catch {
    return cloneDefaultInstructorRoster();
  }
}

function loadInstructorMovements() {
  try {
    const raw = localStorage.getItem(INSTRUCTOR_MOVEMENTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed
          .filter((movement) => movement && movement.id && movement.type && movement.name)
          .map((movement) => ({
            id: movement.id,
            type: movement.type,
            name: String(movement.name || "").trim(),
            fromRole: String(movement.fromRole || "").trim(),
            toRole: String(movement.toRole || "").trim(),
            note: String(movement.note || "").trim(),
            date: movement.date || new Date().toISOString(),
          }))
      : [];
  } catch {
    return [];
  }
}

function saveRecords() {
  localStorage.setItem(RECORDS_KEY, JSON.stringify(state.records));
}

function saveForms() {
  localStorage.setItem(FORMS_KEY, JSON.stringify(state.forms));
}

function saveInstructorRoster() {
  localStorage.setItem(INSTRUCTORS_KEY, JSON.stringify(state.instructors));
}

function saveInstructorMovements() {
  localStorage.setItem(INSTRUCTOR_MOVEMENTS_KEY, JSON.stringify(state.instructorMovements));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderIconPlaceholders() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = ICONS[node.dataset.icon] || "";
  });
}

function departmentById(id) {
  return REPARTI_INTERNI.find((department) => department.id === id);
}

function defaultFormValues(department) {
  return department.fields.reduce((values, field) => {
    values[field.id] = field.defaultValue || "";
    return values;
  }, {});
}

function formData(department) {
  if (!state.forms[department.id]) {
    state.forms[department.id] = defaultFormValues(department);
  }

  department.fields.forEach((field) => {
    if (state.forms[department.id][field.id] === undefined) {
      state.forms[department.id][field.id] = field.defaultValue || "";
    }
  });

  return state.forms[department.id];
}

function recordsForDepartment(departmentId) {
  return state.records.filter((record) => record.departmentId === departmentId);
}

function openRecordForDepartment(departmentId) {
  return state.records.find((record) => record.departmentId === departmentId && !record.end);
}

function activeRecordsCount() {
  return state.records.filter((record) => !record.end).length;
}

function recordDuration(record, now = new Date()) {
  const start = new Date(record.start);
  const end = record.end ? new Date(record.end) : now;
  const duration = end.getTime() - start.getTime();
  return Number.isFinite(duration) && duration > 0 ? duration : 0;
}

function todayRecordDuration(record, now = new Date()) {
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const start = new Date(record.start);
  const end = record.end ? new Date(record.end) : now;
  const from = Math.max(start.getTime(), startOfToday.getTime());
  const to = Math.min(end.getTime(), now.getTime());
  return to > from ? to - from : 0;
}

function roundToCompletedHalfHours(ms) {
  const halfHourMs = 30 * 60000;
  return Math.floor(ms / halfHourMs) * halfHourMs;
}

function countableDuration(department, ms) {
  return department.template === "interforce" ? roundToCompletedHalfHours(ms) : ms;
}

function recordDurationForDepartment(department, record, now = new Date()) {
  return countableDuration(department, recordDuration(record, now));
}

function totalDurationForDepartment(department, records, now = new Date()) {
  return records.reduce((total, record) => total + recordDurationForDepartment(department, record, now), 0);
}

function todayDurationForDepartment(department, records, now = new Date()) {
  return records.reduce((total, record) => total + countableDuration(department, todayRecordDuration(record, now)), 0);
}

function formatDuration(ms) {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

function formatClock(date = new Date()) {
  return new Intl.DateTimeFormat("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(date)
    .replace(":", ".");
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatInstructorDate(value = new Date()) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function formatInstructorDateTime(value = new Date()) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
    .format(new Date(value))
    .replace(",", "");
}

function instructorRoleById(roleId) {
  return INSTRUCTOR_ROLES.find((role) => role.id === roleId) || INSTRUCTOR_ROLES[INSTRUCTOR_ROLES.length - 1];
}

function instructorRoleIndex(roleId) {
  return INSTRUCTOR_ROLES.findIndex((role) => role.id === roleId);
}

function sortedInstructorMembers() {
  return [...state.instructors].sort((first, second) => {
    const roleDelta = instructorRoleIndex(first.roleId) - instructorRoleIndex(second.roleId);
    if (roleDelta !== 0) return roleDelta;
    return first.name.localeCompare(second.name, "it");
  });
}

function instructorDisplayName(member) {
  return member.note ? `${member.name} (${member.note})` : member.name;
}

function normalizeInstructorName(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function buildInstructorHierarchy() {
  const lines = [`# ** ${LSPD_EMOJI}  | GERARCHIA ISTRUTTORI | ${LSPD_EMOJI}  **`];

  INSTRUCTOR_ROLES.forEach((role) => {
    const members = state.instructors.filter((member) => member.roleId === role.id);

    lines.push("", `## ${role.discordRole} `, "");

    if (!members.length) {
      lines.push("> *Posizione non assegnata.*");
      return;
    }

    members.forEach((member) => {
      lines.push(`> ${instructorDisplayName(member)}`);
    });
  });

  lines.push("", `|| ${INSTRUCTOR_NOTIFY_ROLE} ||`, "", `_Last Update: ${formatInstructorDate()}_`);
  return lines.join("\n");
}

function movementLine(movement) {
  const when = formatInstructorDateTime(movement.date);
  if (movement.type === "hire") {
    const note = movement.note ? ` (${movement.note})` : "";
    return `> ${when} - ${movement.name} -> ${movement.toRole}${note}`;
  }
  if (movement.type === "promotion") {
    return `> ${when} - ${movement.name}: ${movement.fromRole} -> ${movement.toRole}`;
  }
  if (movement.type === "removal") {
    return `> ${when} - ${movement.name} da ${movement.fromRole}`;
  }
  return `> ${when} - ${movement.name}: ${movement.fromRole} -> ${movement.toRole}`;
}

function buildInstructorMovementsReport() {
  const sections = [
    ["hire", "Assunzioni Reparto"],
    ["promotion", "Promozioni Reparto"],
    ["move", "Spostamenti Reparto"],
    ["removal", "Rimozioni Reparto"],
  ];
  const lines = [`# ** ${LSPD_EMOJI}  | MOVIMENTI REPARTO ISTRUTTORI | ${LSPD_EMOJI}  **`];

  sections.forEach(([type, title]) => {
    const movements = state.instructorMovements.filter((movement) => movement.type === type);
    lines.push("", `## ${title}`, "");

    if (!movements.length) {
      lines.push("> *Nessun movimento registrato.*");
      return;
    }

    movements.forEach((movement) => {
      lines.push(movementLine(movement));
    });
  });

  lines.push("", `_Last Update: ${formatInstructorDate()}_`);
  return lines.join("\n");
}

function addInstructorMovement(type, member, fromRole = "", toRole = "") {
  state.instructorMovements.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    name: member.name,
    fromRole,
    toRole,
    note: member.note || "",
    date: new Date().toISOString(),
  });
  state.instructorMovements = state.instructorMovements.slice(0, 80);
}

function isConfigured(url) {
  return Boolean(url && url !== "#");
}

function renderDate() {
  const formatter = new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  elements.date.textContent = formatter.format(new Date());
}

function renderReport() {
  const now = new Date();
  const totals = REPARTI_INTERNI.map((department) => {
    const records = recordsForDepartment(department.id);
    return {
      department,
      duration: totalDurationForDepartment(department, records, now),
      today: todayDurationForDepartment(department, records, now),
      open: records.some((record) => !record.end),
    };
  });
  const grandTotal = totals.reduce((sum, item) => sum + item.duration, 0);
  const todayTotal = totals.reduce((sum, item) => sum + item.today, 0);
  const top = totals.reduce((best, item) => (item.duration > best.duration ? item : best), {
    department: null,
    duration: 0,
  });

  elements.totalHours.textContent = formatDuration(grandTotal);
  elements.todayHours.textContent = formatDuration(todayTotal);
  elements.openStamps.textContent = String(activeRecordsCount());
  elements.topDepartment.textContent = top.department && top.duration > 0 ? top.department.sigla : "-";
  elements.lastUpdate.textContent = `Aggiornato ${formatClock(now)}`;

  elements.departmentSummary.innerHTML = totals
    .map((item) => {
      const percent = grandTotal > 0 ? Math.max(3, Math.round((item.duration / grandTotal) * 100)) : 0;
      const activeText = item.open ? " aperto" : "";
      return `<div class="summary-row">
        <strong>${escapeHtml(item.department.nome)}</strong>
        <div class="summary-bar" aria-hidden="true">
          <span style="--bar-width: ${percent}%"></span>
        </div>
        <span class="summary-hours">${formatDuration(item.duration)}${activeText}</span>
      </div>`;
    })
    .join("");
}

function exportFileName() {
  const date = new Date().toISOString().slice(0, 10);
  return `registro-timbri-lspd-${date}.txt`;
}

function buildDownloadReport() {
  const now = new Date();
  const totals = REPARTI_INTERNI.map((department) => {
    const records = recordsForDepartment(department.id);
    return {
      department,
      duration: totalDurationForDepartment(department, records, now),
      today: todayDurationForDepartment(department, records, now),
    };
  });
  const grandTotal = totals.reduce((sum, item) => sum + item.duration, 0);
  const todayTotal = totals.reduce((sum, item) => sum + item.today, 0);
  const lines = [
    "Registro Timbri LSPD",
    `Generato: ${new Intl.DateTimeFormat("it-IT", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(now)}`,
    "",
    "Report generale",
    `Ore totali: ${formatDuration(grandTotal)}`,
    `Ore oggi: ${formatDuration(todayTotal)}`,
    `Timbri aperti: ${activeRecordsCount()}`,
    "",
    "Ore per reparto",
  ];

  totals.forEach((item) => {
    const open = openRecordForDepartment(item.department.id) ? " aperto" : "";
    lines.push(`- ${item.department.nome}: ${formatDuration(item.duration)}${open}`);
  });

  lines.push("", "Rapporti compilati");

  REPARTI_INTERNI.forEach((department) => {
    lines.push("", "------------------------------", generatedReport(department));
  });

  lines.push("", "------------------------------", buildInstructorHierarchy());
  lines.push("", "------------------------------", buildInstructorMovementsReport());

  lines.push("", "Storico timbri");

  REPARTI_INTERNI.forEach((department) => {
    const records = recordsForDepartment(department.id).sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    lines.push("", department.nome);

    if (!records.length) {
      lines.push("- Nessun timbro registrato");
      return;
    }

    records.forEach((record) => {
      const end = record.end ? formatDateTime(record.end) : "aperto";
      lines.push(
        `- ${formatDateTime(record.start)} - ${end} | ${formatDuration(recordDurationForDepartment(department, record, now))}`
      );
    });
  });

  return lines.join("\n");
}

function downloadReportFile() {
  const blob = new Blob([buildDownloadReport()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = exportFileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function fieldValue(department, fieldId) {
  return formData(department)[fieldId] || "";
}

function latestRecordForDepartment(departmentId) {
  return recordsForDepartment(departmentId).sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
  )[0];
}

function recordsOverlap(first, second, now = new Date()) {
  const firstStart = new Date(first.start).getTime();
  const firstEnd = first.end ? new Date(first.end).getTime() : now.getTime();
  const secondStart = new Date(second.start).getTime();
  const secondEnd = second.end ? new Date(second.end).getTime() : now.getTime();
  return firstStart <= secondEnd && secondStart <= firstEnd;
}

function officialLinkedServices() {
  const officialRecord = latestRecordForDepartment("servizio-ufficiale");
  if (!officialRecord) return [];

  const now = new Date();
  return REPARTI_INTERNI.filter((linkedDepartment) => {
    if (linkedDepartment.id === "servizio-ufficiale") return false;
    return recordsForDepartment(linkedDepartment.id).some((record) =>
      recordsOverlap(officialRecord, record, now)
    );
  }).map((linkedDepartment) => `> Servizio ${linkedDepartment.nome}`);
}

function officialCustomActivities(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => (line.startsWith(">") ? line : `> ${line}`));
}

function generatedReport(department) {
  const data = formData(department);
  const records = recordsForDepartment(department.id);
  const total = formatDuration(totalDurationForDepartment(department, records));
  const activeNow = Math.max(1, activeRecordsCount());
  const membriEntrata = data.membriEntrata || (data.agentiEntrata ? `n${data.agentiEntrata}` : `n${activeNow}`);
  const membriUscita = data.membriUscita || (data.agentiUscita ? `n${data.agentiUscita}` : `n${activeNow}`);

  if (department.template === "official") {
    return [
      "Servizio Ufficiale (Grado di Ufficiale)",
      `Nome e cognome: ${data.nome || ""}`,
      `Orario d'entrata: ${data.entrata || ""}`,
      `Orario d'uscita: ${data.uscita || ""}`,
      "Rapporto:",
      `> Agenti in servizio entrata: ${membriEntrata}`,
      ">",
      "> Disponibile in Canale Ufficiale 1 per qualsiasi quesito",
      "> Disponibile per ritiro refurtiva",
      "> Disponibile per gestione Magazzini",
      ...officialLinkedServices(),
      ...officialCustomActivities(data.attivitaSvolte),
      ">",
      `> Agenti in servizio uscita: ${data.uscita ? membriUscita : ""}`,
      `> Picco di Attivita durante il servizio: ${data.piccoAttivita || ""}`,
    ].join("\n");
  }

  if (department.template === "coordination") {
    return [
      "Coordinamento:",
      `nome e cognome: ${data.nome || ""}`,
      `entrata: ${data.entrata || ""}`,
      `uscita: ${data.uscita || ""}`,
      `rapporto: totale orario servizio ${total}`,
    ].join("\n");
  }

  if (department.template === "hiring") {
    return [
      "Assunzioni",
      `Nome: ${data.nome || ""}`,
      `Orario d'entrata: ${data.entrata || ""}`,
      `Orario d'uscita: ${data.uscita || ""}`,
      `Colloqui Eseguiti: ${data.colloqui || "0"}`,
      `Formazioni: ${data.formazioni || "0"}`,
    ].join("\n");
  }

  if (department.template === "eagle") {
    return [
      "Elicotteristi",
      `nome dell agente: ${data.nome || ""}`,
      `compagno di eagle: ${data.compagno || ""}`,
      `decollo: ${data.decollo || ""}`,
      `atterraggio: ${data.atterraggio || ""}`,
      `rapporto: ${data.rapporto || ""}`,
    ].join("\n");
  }

  if (department.template === "interforce") {
    return [
      "Interforce",
      `nome in codice: ${data.nomeCodice || ""}`,
      `orario entrata: ${data.entrata || ""}`,
      `uscita: ${data.uscita || ""}`,
      `totale ore: ${total}`,
      `da chi si e stati chiamati/autorizzati: ${data.autorizzatoDa || ""}`,
      `motivo: ${data.motivo || ""}`,
    ].join("\n");
  }

  return [
    "Merryweather:",
    `nome ${data.nome || ""}`,
    `entrata ${data.entrata || ""}`,
    `uscita ${data.uscita || ""}`,
    `rapporto: ${data.rapporto || ""}`,
  ].join("\n");
}

function renderField(department, field) {
  const value = fieldValue(department, field.id);
  const readonly = field.readonly ? "readonly" : "";
  const placeholder = field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : "";
  const min = field.min !== undefined ? ` min="${field.min}"` : "";

  if (field.type === "textarea") {
    return `<label class="form-field form-field-wide">
      <span>${escapeHtml(field.label)}</span>
      <textarea data-field="${field.id}" ${readonly}${placeholder}>${escapeHtml(value)}</textarea>
    </label>`;
  }

  return `<label class="form-field ${field.type === "timeText" ? "is-time" : ""}">
    <span>${escapeHtml(field.label)}</span>
    <input
      data-field="${field.id}"
      type="${field.type === "number" ? "number" : "text"}"
      value="${escapeHtml(value)}"
      ${readonly}
      ${placeholder}
      ${min}
    />
  </label>`;
}

function renderDepartments() {
  const now = new Date();
  elements.departmentCount.textContent = `${REPARTI_INTERNI.length} reparti`;
  elements.departmentGrid.innerHTML = REPARTI_INTERNI.map((department) => {
    const records = recordsForDepartment(department.id).sort(
      (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
    );
    const openRecord = records.find((record) => !record.end);
    const duration = totalDurationForDepartment(department, records, now);
    const today = todayDurationForDepartment(department, records, now);
    const lastClosed = records.find((record) => record.end);
    const recentRecords = records.slice(0, 3);
    const stampLabel = openRecord ? `Chiudi ${department.endLabel}` : `Apri ${department.startLabel}`;
    const stampIcon = openRecord ? ICONS.stop : ICONS.play;

    return `<article class="department-card ${openRecord ? "is-active" : ""}" id="reparto-${department.id}" data-department-id="${department.id}">
      <div class="department-top">
        <div class="department-title">
          <span class="badge ${department.categoria.toLowerCase()}">${escapeHtml(department.sigla)}</span>
          <h3>${escapeHtml(department.nome)}</h3>
          <small>${escapeHtml(department.sottotitolo)}</small>
        </div>
        <span class="status-pill ${openRecord ? "is-live" : ""}">${openRecord ? "In servizio" : "Fermo"}</span>
      </div>

      <p class="department-description">${escapeHtml(department.descrizione)}</p>

      <div class="info-grid" aria-label="Info reparto">
        <div class="info-item">
          <span>Responsabile</span>
          <strong>${escapeHtml(department.responsabile)}</strong>
        </div>
        <div class="info-item">
          <span>Destinazione</span>
          <strong>${escapeHtml(department.destinazione)}</strong>
        </div>
        <div class="info-item">
          <span>Ultimo timbro</span>
          <strong>${lastClosed ? formatDateTime(lastClosed.end) : "Nessuno"}</strong>
        </div>
        <div class="info-item">
          <span>Sessioni</span>
          <strong>${records.length}</strong>
        </div>
      </div>

      <div class="department-metrics" aria-label="Ore reparto">
        <div class="metric">
          <span>Totale</span>
          <strong>${formatDuration(duration)}</strong>
        </div>
        <div class="metric">
          <span>Oggi</span>
          <strong>${formatDuration(today)}</strong>
        </div>
        <div class="metric">
          <span>Aperto</span>
          <strong>${openRecord ? formatDuration(recordDurationForDepartment(department, openRecord, now)) : "No"}</strong>
        </div>
      </div>

      <div class="department-actions">
        <button class="stamp-button ${openRecord ? "is-open" : ""}" type="button" data-action="toggle">
          <span class="icon" aria-hidden="true">${stampIcon}</span>
          ${escapeHtml(stampLabel)}
        </button>
        <button class="quiet-button" type="button" data-action="delete-last" ${records.length ? "" : "disabled"}>
          <span class="icon" aria-hidden="true">${ICONS.trash}</span>
          Elimina ultimo
        </button>
        <button class="danger-button" type="button" data-action="reset" ${records.length ? "" : "disabled"}>
          <span class="icon" aria-hidden="true">${ICONS.undo}</span>
          Reset ore
        </button>
        <button class="quiet-button" type="button" data-action="reset-form">
          <span class="icon" aria-hidden="true">${ICONS.file}</span>
          Pulisci modulo
        </button>
      </div>

      <div class="department-form" aria-label="Modulo ${escapeHtml(department.nome)}">
        <div class="form-head">
          <strong>Modulo reparto</strong>
          <button class="copy-button" type="button" data-action="copy-report">
            <span class="icon" aria-hidden="true">${ICONS.copy}</span>
            Copia rapporto
          </button>
        </div>
        <div class="form-grid">
          ${department.fields.map((field) => renderField(department, field)).join("")}
        </div>
        <label class="report-preview">
          <span>Anteprima rapporto</span>
          <textarea readonly data-report-preview>${escapeHtml(generatedReport(department))}</textarea>
        </label>
      </div>

      <div class="record-list" aria-label="Ultimi timbri">
        ${
          recentRecords.length
            ? recentRecords
                .map(
                  (record) => `<div class="record-row">
                    <div>
                      <strong>${formatDateTime(record.start)} - ${
                        record.end ? formatDateTime(record.end) : "aperto"
                      }</strong>
                      <span>${record.end ? "Chiuso" : "Timbro attivo"}</span>
                    </div>
                    <span class="record-duration">${formatDuration(recordDuration(record, now))}</span>
                  </div>`
                )
                .join("")
            : `<p class="record-empty">Nessun timbro registrato in questo reparto.</p>`
        }
      </div>
    </article>`;
  }).join("");
}

function renderInstructorOptions() {
  const currentRole = elements.instructorRole.value || "istruttore-prova";
  const currentTarget = elements.instructorTargetRole.value || "istruttore-prova";
  const roleOptions = INSTRUCTOR_ROLES.map(
    (role) => `<option value="${escapeHtml(role.id)}">${escapeHtml(role.nome)}</option>`
  ).join("");

  elements.instructorRole.innerHTML = roleOptions;
  elements.instructorRole.value = INSTRUCTOR_ROLES.some((role) => role.id === currentRole)
    ? currentRole
    : "istruttore-prova";
  elements.instructorTargetRole.innerHTML = roleOptions;
  elements.instructorTargetRole.value = INSTRUCTOR_ROLES.some((role) => role.id === currentTarget)
    ? currentTarget
    : "istruttore-prova";

  const selectedPerson = elements.instructorPerson.value;
  const members = sortedInstructorMembers();

  if (!members.length) {
    elements.instructorPerson.innerHTML = `<option value="">Nessuna persona</option>`;
    return;
  }

  elements.instructorPerson.innerHTML = members
    .map((member) => {
      const role = instructorRoleById(member.roleId);
      return `<option value="${escapeHtml(member.id)}">${escapeHtml(member.name)} - ${escapeHtml(role.nome)}</option>`;
    })
    .join("");

  if (members.some((member) => member.id === selectedPerson)) {
    elements.instructorPerson.value = selectedPerson;
  } else {
    elements.instructorTargetRole.value = members[0].roleId;
  }
}

function renderInstructorRoster() {
  elements.instructorRoster.innerHTML = INSTRUCTOR_ROLES.map((role) => {
    const members = state.instructors.filter((member) => member.roleId === role.id);

    return `<article class="instructor-role-card">
      <div class="instructor-role-head">
        <div>
          <strong>${escapeHtml(role.nome)}</strong>
          <small>${escapeHtml(role.discordRole)}</small>
        </div>
        <span class="badge">${members.length}</span>
      </div>
      <div class="instructor-member-list">
        ${
          members.length
            ? members
                .map(
                  (member) => `<div class="instructor-member">
                    <div>
                      <strong>${escapeHtml(member.name)}</strong>
                      ${member.note ? `<small>${escapeHtml(member.note)}</small>` : ""}
                    </div>
                    <div class="instructor-member-actions">
                      <button class="icon-button" type="button" title="Promuovi" aria-label="Promuovi ${escapeHtml(member.name)}" data-instructor-action="promote-member" data-member-id="${escapeHtml(member.id)}">
                        <span class="icon" aria-hidden="true">${ICONS["arrow-up"]}</span>
                      </button>
                      <button class="icon-button is-danger" type="button" title="Rimuovi" aria-label="Rimuovi ${escapeHtml(member.name)}" data-instructor-action="remove-member" data-member-id="${escapeHtml(member.id)}">
                        <span class="icon" aria-hidden="true">${ICONS.trash}</span>
                      </button>
                    </div>
                  </div>`
                )
                .join("")
            : `<p class="instructor-empty">Posizione non assegnata.</p>`
        }
      </div>
    </article>`;
  }).join("");
}

function renderInstructors() {
  const count = state.instructors.length;
  elements.instructorCount.textContent = `${count} ${count === 1 ? "persona" : "persone"}`;
  renderInstructorOptions();
  renderInstructorRoster();
  elements.instructorHierarchyOutput.value = buildInstructorHierarchy();
  elements.instructorMovementsOutput.value = buildInstructorMovementsReport();
}

function renderTimeTracking() {
  renderReport();
  renderDepartments();
}

function createRecord(department) {
  const now = new Date();
  const data = formData(department);
  data[department.startField] = formatClock(now);
  if (department.id === "servizio-ufficiale") {
    data.agentiEntrata = String(activeRecordsCount() + 1);
    data.membriEntrata = `n${activeRecordsCount() + 1}`;
  }

  state.records.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    departmentId: department.id,
    start: now.toISOString(),
    end: null,
  });
}

function closeRecord(department, record) {
  const now = new Date();
  const data = formData(department);
  data[department.endField] = formatClock(now);
  if (department.id === "servizio-ufficiale") {
    data.agentiUscita = String(Math.max(1, activeRecordsCount()));
    data.membriUscita = `n${Math.max(1, activeRecordsCount())}`;
  }
  record.end = now.toISOString();
}

function toggleDepartmentStamp(departmentId) {
  const department = departmentById(departmentId);
  if (!department) return;

  const open = openRecordForDepartment(departmentId);
  if (open) {
    closeRecord(department, open);
  } else {
    createRecord(department);
  }

  saveRecords();
  saveForms();
  renderTimeTracking();
  renderModules();
}

function deleteLastDepartmentRecord(departmentId) {
  const records = recordsForDepartment(departmentId).sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
  );
  const lastRecord = records[0];
  const department = departmentById(departmentId);
  if (!lastRecord || !department) return;
  if (!window.confirm(`Eliminare l'ultimo timbro di ${department.nome}?`)) return;

  state.records = state.records.filter((record) => record.id !== lastRecord.id);
  saveRecords();
  renderTimeTracking();
  renderModules();
}

function resetDepartmentRecords(departmentId) {
  const department = departmentById(departmentId);
  if (!department) return;
  if (!window.confirm(`Resettare tutte le ore del reparto ${department.nome}?`)) return;

  state.records = state.records.filter((record) => record.departmentId !== departmentId);
  saveRecords();
  renderTimeTracking();
  renderModules();
}

function resetDepartmentForm(departmentId) {
  const department = departmentById(departmentId);
  if (!department) return;
  if (!window.confirm(`Pulire i campi del modulo ${department.nome}? Le ore timbrate restano salvate.`)) return;

  state.forms[department.id] = defaultFormValues(department);
  saveForms();
  renderTimeTracking();
  renderModules();
}

function updateDepartmentField(departmentId, fieldId, value) {
  const department = departmentById(departmentId);
  if (!department) return;
  formData(department)[fieldId] = value;
  saveForms();

  const card = elements.departmentGrid.querySelector(`[data-department-id="${departmentId}"]`);
  const preview = card?.querySelector("[data-report-preview]");
  if (preview) {
    preview.value = generatedReport(department);
  }
}

function saveAndRenderInstructors() {
  saveInstructorRoster();
  saveInstructorMovements();
  renderInstructors();
}

function instructorMemberById(memberId) {
  return state.instructors.find((member) => member.id === memberId);
}

function addInstructorFromForm() {
  const name = normalizeInstructorName(elements.instructorName.value);
  const role = instructorRoleById(elements.instructorRole.value);
  const note = String(elements.instructorNote.value || "").trim();

  if (!name) {
    elements.instructorName.focus();
    return;
  }

  const existing = state.instructors.find((member) => member.name.toLowerCase() === name.toLowerCase());

  if (existing) {
    const fromRole = instructorRoleById(existing.roleId);
    existing.roleId = role.id;
    existing.note = note;
    addInstructorMovement("move", existing, fromRole.nome, role.nome);
  } else {
    const member = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      roleId: role.id,
      name,
      note,
    };
    state.instructors.push(member);
    addInstructorMovement("hire", member, "", role.nome);
  }

  elements.instructorName.value = "";
  elements.instructorNote.value = "";
  saveAndRenderInstructors();
}

function promoteInstructorMember(memberId) {
  const member = instructorMemberById(memberId);
  if (!member) return;

  const currentIndex = instructorRoleIndex(member.roleId);
  if (currentIndex <= 0) return;

  const fromRole = instructorRoleById(member.roleId);
  const toRole = INSTRUCTOR_ROLES[currentIndex - 1];
  member.roleId = toRole.id;
  addInstructorMovement("promotion", member, fromRole.nome, toRole.nome);
  saveAndRenderInstructors();
}

function moveInstructorMember(memberId, roleId) {
  const member = instructorMemberById(memberId);
  const toRole = instructorRoleById(roleId);
  if (!member || member.roleId === toRole.id) return;

  const fromRole = instructorRoleById(member.roleId);
  member.roleId = toRole.id;
  addInstructorMovement("move", member, fromRole.nome, toRole.nome);
  saveAndRenderInstructors();
}

function removeInstructorMember(memberId) {
  const member = instructorMemberById(memberId);
  if (!member) return;
  if (!window.confirm(`Rimuovere ${member.name} dal reparto Istruttori?`)) return;

  const fromRole = instructorRoleById(member.roleId);
  state.instructors = state.instructors.filter((item) => item.id !== memberId);
  addInstructorMovement("removal", member, fromRole.nome, "");
  saveAndRenderInstructors();
}

function clearInstructorMovements() {
  if (!window.confirm("Svuotare il registro movimenti istruttori?")) return;
  state.instructorMovements = [];
  saveAndRenderInstructors();
}

function resetInstructorRoster() {
  if (!window.confirm("Ripristinare la gerarchia istruttori iniziale? I movimenti restano salvati.")) return;
  state.instructors = cloneDefaultInstructorRoster();
  saveAndRenderInstructors();
}

async function copyText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    const original = button.innerHTML;
    button.innerHTML = `<span class="icon" aria-hidden="true">${ICONS.copy}</span> Copiato`;
    window.setTimeout(() => {
      button.innerHTML = original;
    }, 1400);
  } catch {
    window.prompt("Copia questo valore", text);
  }
}

function categoryList() {
  return ["Tutti", ...new Set(REPARTI_INTERNI.map((department) => department.categoria))];
}

function filteredDepartments() {
  const query = state.query.trim().toLowerCase();

  return REPARTI_INTERNI.filter((department) => {
    const matchesCategory = state.category === "Tutti" || department.categoria === state.category;
    const searchable = [
      department.nome,
      department.sottotitolo,
      department.categoria,
      department.responsabile,
      department.destinazione,
      department.fields.map((field) => field.label).join(" "),
      generatedReport(department),
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || searchable.includes(query));
  });
}

function renderModules() {
  const departments = filteredDepartments();
  elements.moduleCount.textContent = `${departments.length} ${departments.length === 1 ? "modulo" : "moduli"}`;
  elements.empty.hidden = departments.length > 0;

  elements.moduleGrid.innerHTML = departments
    .map((department) => {
      const records = recordsForDepartment(department.id);
      return `<article class="module-card">
        <div class="module-top">
          <div class="module-title">
            <span class="badge ${department.categoria.toLowerCase()}">${escapeHtml(department.categoria)}</span>
            <h3>${escapeHtml(department.nome)}</h3>
          </div>
          <span class="module-hours">${formatDuration(totalDurationForDepartment(department, records))}</span>
        </div>
        <p class="module-description">${escapeHtml(department.descrizione)}</p>
        <p class="module-meta"><strong>Campi:</strong> ${escapeHtml(
          department.fields.map((field) => field.label).join(", ")
        )}</p>
        <div class="module-actions">
          <a class="secondary-link" href="#reparto-${department.id}">
            <span class="icon" aria-hidden="true">${ICONS.file}</span>
            Apri reparto
          </a>
        </div>
      </article>`;
    })
    .join("");
}

function renderTabs() {
  elements.tabs.innerHTML = categoryList()
    .map(
      (category) => `<button class="filter-tab" type="button" role="tab" aria-selected="${
        state.category === category
      }" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
    )
    .join("");
}

function renderSendLinks() {
  elements.sendList.innerHTML = LINK_INVIO_RAPIDI.map((link) => {
    const configured = isConfigured(link.url);
    const href = configured ? link.url : "#";
    const disabledAttrs = configured ? "" : ` aria-disabled="true" tabindex="-1"`;
    const actionText = configured ? "Apri" : "Da collegare";

    return `<article class="send-item">
      <div>
        <span class="badge">${escapeHtml(link.reparto)}</span>
        <strong>${escapeHtml(link.nome)}</strong>
        <small>${escapeHtml(link.dettaglio)}</small>
      </div>
      <div class="send-actions">
        <a class="secondary-link ${configured ? "" : "is-disabled"}" href="${href}" target="_blank" rel="noreferrer"${disabledAttrs}>
          <span class="icon" aria-hidden="true">${ICONS.send}</span>
          ${actionText}
        </a>
        <button class="copy-button" type="button" data-copy="${escapeHtml(link.copia)}">
          <span class="icon" aria-hidden="true">${ICONS.copy}</span>
          Copia
        </button>
      </div>
    </article>`;
  }).join("");
}

function bindEvents() {
  elements.downloadReport.addEventListener("click", downloadReportFile);
  elements.copyFullReport.addEventListener("click", () => {
    copyText(buildDownloadReport(), elements.copyFullReport);
  });

  elements.themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });

  elements.departmentGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    const card = event.target.closest("[data-department-id]");
    if (!button || !card) return;

    const departmentId = card.dataset.departmentId;
    const department = departmentById(departmentId);
    const action = button.dataset.action;

    if (action === "toggle") toggleDepartmentStamp(departmentId);
    if (action === "delete-last") deleteLastDepartmentRecord(departmentId);
    if (action === "reset") resetDepartmentRecords(departmentId);
    if (action === "reset-form") resetDepartmentForm(departmentId);
    if (action === "copy-report" && department) copyText(generatedReport(department), button);
  });

  elements.departmentGrid.addEventListener("input", (event) => {
    const control = event.target.closest("[data-field]");
    const card = event.target.closest("[data-department-id]");
    if (!control || !card) return;
    updateDepartmentField(card.dataset.departmentId, control.dataset.field, control.value);
  });

  elements.addInstructor.addEventListener("click", addInstructorFromForm);
  elements.promoteInstructor.addEventListener("click", () => {
    promoteInstructorMember(elements.instructorPerson.value);
  });
  elements.moveInstructor.addEventListener("click", () => {
    moveInstructorMember(elements.instructorPerson.value, elements.instructorTargetRole.value);
  });
  elements.removeInstructor.addEventListener("click", () => {
    removeInstructorMember(elements.instructorPerson.value);
  });
  elements.copyInstructorHierarchy.addEventListener("click", () => {
    copyText(buildInstructorHierarchy(), elements.copyInstructorHierarchy);
  });
  elements.copyInstructorMovements.addEventListener("click", () => {
    copyText(buildInstructorMovementsReport(), elements.copyInstructorMovements);
  });
  elements.clearInstructorMovements.addEventListener("click", clearInstructorMovements);
  elements.resetInstructors.addEventListener("click", resetInstructorRoster);
  elements.instructorPerson.addEventListener("change", () => {
    const member = instructorMemberById(elements.instructorPerson.value);
    if (member) elements.instructorTargetRole.value = member.roleId;
  });
  elements.instructorRoster.addEventListener("click", (event) => {
    const button = event.target.closest("[data-instructor-action]");
    if (!button) return;

    if (button.dataset.instructorAction === "promote-member") {
      promoteInstructorMember(button.dataset.memberId);
    }
    if (button.dataset.instructorAction === "remove-member") {
      removeInstructorMember(button.dataset.memberId);
    }
  });

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderModules();
  });

  elements.tabs.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-category]");
    if (!tab) return;
    state.category = tab.dataset.category;
    renderTabs();
    renderModules();
  });

  elements.sendList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy]");
    if (!button) return;
    copyText(button.dataset.copy, button);
  });
}

renderIconPlaceholders();
applyTheme(loadTheme());
renderDate();
renderTimeTracking();
renderInstructors();
renderTabs();
renderModules();
renderSendLinks();
bindEvents();
window.setInterval(() => {
  renderReport();
  renderModules();
}, 30000);
