// Decision Sphere — i18n + bootstrapping
const I18N = {
  "en-US": {
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.signin": "Sign in",
    "hero.title": "Decision Sphere Venture",
    "hero.lead": "Apply the <strong>Decision Sphere Core</strong> to venture building: model critical processes, enrich inputs with specialized data sources, and surface trustworthy recommendations—so selection, validation, and portfolio governance become faster, comparable, and evidence-based.",
    "hero.bullet1": "<strong>Structured capture:</strong> intelligent questionnaires for standardized, comparable inputs.",
    "hero.bullet2": "<strong>Data enrichment:</strong> integrations to validate and complement submissions in real time.",
    "hero.bullet3": "<strong>Validations & insights:</strong> generative AI and analytics to flag risks and synthesize findings.",
    "hero.bullet4": "<strong>Control tower:</strong> a live dashboard with KPIs, alerts, and portfolio follow-up.",
    "hero.legal": "By continuing you agree to our <a href='#'>Terms</a> and <a href='#'>Privacy Policy</a>.",
    "panel.title": "For Venture Builders",
    "panel.text": "Scale startup creation with consistent triage, evidence-backed validation, and investor-day readiness. Track KPIs and alerts, prioritize theses, and govern the portfolio with a unified decision layer.",
    "panel.m1.value": "100+",
    "panel.m1.label": "ideas/year triaged",
    "panel.m2.value": "4–6w",
    "panel.m2.label": "manual cycle saved",
    "panel.m3.value": "↑",
    "panel.m3.label": "approval quality",
    "footer.about": "About",
    "footer.product": "Product",
    "footer.usecases": "Use Cases",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved."
  },
  "pt-BR": {
    "auth.email": "E-mail",
    "auth.password": "Senha",
    "auth.signin": "Entrar",
    "hero.title": "Decision Sphere Venture",
    "hero.lead": "Aplique o <strong>Core do Decision Sphere</strong> ao venture building: modele processos críticos, enriqueça entradas com fontes especializadas e apresente recomendações confiáveis — para que a seleção, a validação e a governança do portfólio sejam mais rápidas, comparáveis e baseadas em evidências.",
    "hero.bullet1": "<strong>Coleta estruturada:</strong> questionários inteligentes para insumos padronizados e comparáveis.",
    "hero.bullet2": "<strong>Enriquecimento de dados:</strong> integrações para validar e complementar submissões em tempo real.",
    "hero.bullet3": "<strong>Validações e insights:</strong> IA generativa e analytics para sinalizar riscos e sintetizar achados.",
    "hero.bullet4": "<strong>Torre de controle:</strong> painel vivo com KPIs, alertas e acompanhamento do portfólio.",
    "hero.legal": "Ao continuar, você concorda com nossos <a href='#'>Termos</a> e <a href='#'>Aviso de Privacidade</a>.",
    "panel.title": "Para Venture Builders",
    "panel.text": "Escalone a criação de startups com triagem consistente, validações embasadas e prontidão para o investor day. Acompanhe KPIs e alertas, priorize teses e governe o portfólio com uma camada unificada de decisão.",
    "panel.m1.value": "100+",
    "panel.m1.label": "ideias/ano triadas",
    "panel.m2.value": "4–6s",
    "panel.m2.label": "ciclo manual economizado",
    "panel.m3.value": "↑",
    "panel.m3.label": "qualidade de aprovação",
    "footer.about": "Sobre",
    "footer.product": "Produto",
    "footer.usecases": "Casos de uso",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados."
  },
  "es-419": {
    "auth.email": "Correo",
    "auth.password": "Contraseña",
    "auth.signin": "Ingresar",
    "hero.title": "Decision Sphere Venture",
    "hero.lead": "Aplique el <strong>Núcleo de Decision Sphere</strong> al venture building: modele procesos críticos, enriquezca entradas con fuentes especializadas y presente recomendaciones confiables—para que la selección, la validación y la gobernanza del portafolio sean más rápidas, comparables y basadas en evidencia.",
    "hero.bullet1": "<strong>Captura estructurada:</strong> cuestionarios inteligentes para insumos estandarizados y comparables.",
    "hero.bullet2": "<strong>Enriquecimiento de datos:</strong> integraciones para validar y complementar envíos en tiempo real.",
    "hero.bullet3": "<strong>Validaciones e insights:</strong> IA generativa y analítica para señalar riesgos y sintetizar hallazgos.",
    "hero.bullet4": "<strong>Torre de control:</strong> panel activo con KPIs, alertas y seguimiento del portafolio.",
    "hero.legal": "Al continuar, aceptas nuestros <a href='#'>Términos</a> y <a href='#'>Aviso de Privacidad</a>.",
    "panel.title": "Para Venture Builders",
    "panel.text": "Escale la creación de startups con un filtrado consistente, validaciones fundamentadas y preparación para el investor day. Sigue KPIs y alertas, prioriza tesis y gobierna el portafolio con una capa de decisión unificada.",
    "panel.m1.value": "100+",
    "panel.m1.label": "ideas/año filtradas",
    "panel.m2.value": "4–6s",
    "panel.m2.label": "ciclo manual ahorrado",
    "panel.m3.value": "↑",
    "panel.m3.label": "calidad de aprobación",
    "footer.about": "Acerca de",
    "footer.product": "Producto",
    "footer.usecases": "Casos de uso",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados."
  }
};

const LANG_BUTTONS = () => document.querySelectorAll('.ds-lang button');
const setPressed = (code) => {
  LANG_BUTTONS().forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === code)));
};

function resolveInitialLang(){
  const stored = localStorage.getItem('ds_lang');
  if (stored && I18N[stored]) return stored;
  const navList = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
  for (const cand of navList){
    const base = String(cand || '').toLowerCase();
    if (I18N['pt-BR'] && (base === 'pt-br' || base.startsWith('pt'))) return 'pt-BR';
    if (I18N['es-419'] && base.startsWith('es')) return 'es-419';
    if (I18N['en-US'] && (base === 'en-us' || base.startsWith('en'))) return 'en-US';
  }
  return 'en-US';
}

function applyI18n(lang){
  const dict = I18N[lang] || I18N['en-US'];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  setPressed(lang);
  localStorage.setItem('ds_lang', lang);
}

// Wire language switcher
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const initial = resolveInitialLang();
  applyI18n(initial);

  LANG_BUTTONS().forEach(btn => btn.addEventListener('click', () => {
    const code = btn.dataset.lang;
    applyI18n(code);
  }));
});
