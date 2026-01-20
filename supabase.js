// supabase.js
const SUPABASE_URL = "https://uubknhhaoruwcmgcesqh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YmtuaGhhb3J1d2NtZ2Nlc3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5MDM2NTgsImV4cCI6MjA4NDQ3OTY1OH0.UMbdvYORPVwweDoqudyIwyA1G03y2jmuJ2GYfF97geY";

window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
