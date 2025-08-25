import { createClient } from "@supabase/supabase-js";
// wow
// xd 


export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

