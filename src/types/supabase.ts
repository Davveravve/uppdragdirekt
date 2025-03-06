// src/types/supabase.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          first_name: string | null
          last_name: string | null
          avatar_url: string | null
          user_type: 'client' | 'freelancer'
          bio: string | null
          skills: string[] | null
          hourly_rate: number | null
          location: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          user_type?: 'client' | 'freelancer'
          bio?: string | null
          skills?: string[] | null
          hourly_rate?: number | null
          location?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          user_type?: 'client' | 'freelancer'
          bio?: string | null
          skills?: string[] | null
          hourly_rate?: number | null
          location?: string | null
        }
      }
      jobs: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string
          client_id: string
          category: string
          price_min: number | null
          price_max: number | null
          deadline: string | null
          location: string
          skills: string[] | null
          status: 'draft' | 'active' | 'completed' | 'cancelled'
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description: string
          client_id: string
          category: string
          price_min?: number | null
          price_max?: number | null
          deadline?: string | null
          location: string
          skills?: string[] | null
          status?: 'draft' | 'active' | 'completed' | 'cancelled'
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string
          client_id?: string
          category?: string
          price_min?: number | null
          price_max?: number | null
          deadline?: string | null
          location?: string
          skills?: string[] | null
          status?: 'draft' | 'active' | 'completed' | 'cancelled'
        }
      }
      job_applications: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          job_id: string
          freelancer_id: string
          cover_letter: string
          price: number
          status: 'pending' | 'accepted' | 'rejected'
          delivery_date: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          job_id: string
          freelancer_id: string
          cover_letter: string
          price: number
          status?: 'pending' | 'accepted' | 'rejected'
          delivery_date?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          job_id?: string
          freelancer_id?: string
          cover_letter?: string
          price?: number
          status?: 'pending' | 'accepted' | 'rejected'
          delivery_date?: string | null
        }
      }
    }
  }
}