const RECORDS_KEY = "lspd-timbri-records-v2";
const FORMS_KEY = "lspd-timbri-forms-v2";
const THEME_KEY = "lspd-timbri-theme-v1";
const DEFAULT_USER = "<@1084580275582931044>";

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
      { id: "piccoAttivita", label: "Picco di attivita durante il servizio", type: "text" },
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
];

const ICONS = {
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
};

const $ = (selector) => document.querySelector(selector);

const state = {
  query: "",
  category: "Tutti",
  records: loadRecords(),
  forms: loadForms(),
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

function saveRecords() {
  localStorage.setItem(RECORDS_KEY, JSON.stringify(state.records));
}

function saveForms() {
  localStorage.setItem(FORMS_KEY, JSON.stringify(state.forms));
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

function formData(department) {
  if (!state.forms[department.id]) {
    state.forms[department.id] = {};
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

function totalDuration(records, now = new Date()) {
  return records.reduce((total, record) => total + recordDuration(record, now), 0);
}

function todayDuration(records, now = new Date()) {
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  return records.reduce((total, record) => {
    const start = new Date(record.start);
    const end = record.end ? new Date(record.end) : now;
    const from = Math.max(start.getTime(), startOfToday.getTime());
    const to = Math.min(end.getTime(), now.getTime());
    return to > from ? total + (to - from) : total;
  }, 0);
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
      duration: totalDuration(records, now),
      open: records.some((record) => !record.end),
    };
  });
  const grandTotal = totals.reduce((sum, item) => sum + item.duration, 0);
  const top = totals.reduce((best, item) => (item.duration > best.duration ? item : best), {
    department: null,
    duration: 0,
  });

  elements.totalHours.textContent = formatDuration(grandTotal);
  elements.todayHours.textContent = formatDuration(todayDuration(state.records, now));
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
  const lines = [
    "Registro Timbri LSPD",
    `Generato: ${new Intl.DateTimeFormat("it-IT", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(now)}`,
    "",
    "Report generale",
    `Ore totali: ${formatDuration(totalDuration(state.records, now))}`,
    `Ore oggi: ${formatDuration(todayDuration(state.records, now))}`,
    `Timbri aperti: ${activeRecordsCount()}`,
    "",
    "Ore per reparto",
  ];

  REPARTI_INTERNI.forEach((department) => {
    const records = recordsForDepartment(department.id);
    const open = openRecordForDepartment(department.id) ? " aperto" : "";
    lines.push(`- ${department.nome}: ${formatDuration(totalDuration(records, now))}${open}`);
  });

  lines.push("", "Rapporti compilati");

  REPARTI_INTERNI.forEach((department) => {
    lines.push("", "------------------------------", generatedReport(department));
  });

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
        `- ${formatDateTime(record.start)} - ${end} | ${formatDuration(recordDuration(record, now))}`
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

function generatedReport(department) {
  const data = formData(department);
  const records = recordsForDepartment(department.id);
  const total = formatDuration(totalDuration(records));
  const activeNow = Math.max(1, activeRecordsCount());
  const agentiEntrata = data.agentiEntrata || activeNow;
  const agentiUscita = data.agentiUscita || activeNow;

  if (department.template === "official") {
    return [
      "Servizio Ufficiale (Grado di Ufficiale)",
      `Nome e cognome: ${data.nome || ""}`,
      `Orario d'entrata: ${data.entrata || ""}`,
      `Orario d'uscita: ${data.uscita || ""}`,
      "Rapporto:",
      `> Agenti in servizio entrata: n${agentiEntrata}`,
      ">",
      "> Disponibile in Canale Ufficiale 1 per qualsiasi quesito",
      "> Disponibile per ritiro refurtiva",
      "> Disponibile per gestione Magazzini",
      ...officialLinkedServices(),
      ">",
      `> Agenti in servizio uscita: ${data.uscita ? `n${agentiUscita}` : ""}`,
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
    const duration = totalDuration(records, now);
    const today = todayDuration(records, now);
    const lastClosed = records.find((record) => record.end);
    const recentRecords = records.slice(0, 3);
    const stampLabel = openRecord ? `Chiudi ${department.endLabel}` : `Apri ${department.startLabel}`;
    const stampIcon = openRecord ? ICONS.stop : ICONS.play;

    return `<article class="department-card ${openRecord ? "is-active" : ""}" data-department-id="${department.id}">
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
          <strong>${openRecord ? formatDuration(recordDuration(openRecord, now)) : "No"}</strong>
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
          <span class="module-hours">${formatDuration(totalDuration(records))}</span>
        </div>
        <p class="module-description">${escapeHtml(department.descrizione)}</p>
        <p class="module-meta"><strong>Campi:</strong> ${escapeHtml(
          department.fields.map((field) => field.label).join(", ")
        )}</p>
        <div class="module-actions">
          <a class="secondary-link" href="#reparti">
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
    if (action === "copy-report" && department) copyText(generatedReport(department), button);
  });

  elements.departmentGrid.addEventListener("input", (event) => {
    const control = event.target.closest("[data-field]");
    const card = event.target.closest("[data-department-id]");
    if (!control || !card) return;
    updateDepartmentField(card.dataset.departmentId, control.dataset.field, control.value);
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
renderTabs();
renderModules();
renderSendLinks();
bindEvents();
window.setInterval(() => {
  renderReport();
  renderModules();
}, 30000);
