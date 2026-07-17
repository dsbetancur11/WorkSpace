import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

const hasRealConfig =
  typeof supabaseUrl === 'string' &&
  typeof supabaseAnonKey === 'string' &&
  supabaseUrl.length > 0 &&
  supabaseAnonKey.length > 0 &&
  !supabaseUrl.includes('tu_project_url_aqui') &&
  !supabaseAnonKey.includes('tu_anon_key_aqui')

export const supabase = hasRealConfig
  ? (() => {
      try {
        return createClient(supabaseUrl, supabaseAnonKey)
      } catch {
        return null
      }
    })()
  : null
