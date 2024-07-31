import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gxfiowkjnakurezyzhbg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4Zmlvd2tqbmFrdXJlenl6aGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NTIyODMsImV4cCI6MjAzODAyODI4M30.KqMn1vn9x3NZeUU8_bsEz5RIWFYdda__ovaLHwjaxaw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
