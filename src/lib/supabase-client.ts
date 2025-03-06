import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../types/supabase'

// För klientkomponentanvändning (browser)
export const createClientSupabase = () => {
  return createClientComponentClient<Database>()
}


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yuykcqsrxypjywlyvgbs.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eWtjcXNyeHlwanl3bHl2Z2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyODA1NjEsImV4cCI6MjA1Njg1NjU2MX0.nXfH5W1rVuyXw1hNqmr-n_MxReD-ttlwNF0hol8LLfA'

export const supabase = createClient(supabaseUrl, supabaseKey);