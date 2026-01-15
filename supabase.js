// supabase.js
// Cliente global para usar en cualquier HTML

const SUPABASE_URL = "https://niqcvctwikiluztlhkqs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_98Kubj2Lfs9OV6Oj-EsrHQ_O2vszXUt";

// Crear cliente y exponerlo globalmente
window.supabase = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
