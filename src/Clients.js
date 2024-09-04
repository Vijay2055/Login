import { createClient } from '@supabase/supabase-js'


const super_url = import.meta.env.VITE_SUPER_URL
const super_key = import.meta.env.VITE_SUPER_KEY
export const superClient = createClient(super_url, super_key)