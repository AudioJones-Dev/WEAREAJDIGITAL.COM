export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      apply_submissions: {
        Row: {
          company: string
          created_at: string
          decision_maker: string
          delivery_mode: string | null
          email: string
          full_name: string
          has_podcast: string
          id: string
          ip_address: string | null
          location: string
          monthly_budget: string
          phone: string | null
          primary_goal: string
          qualified: boolean | null
          redirect_to: string | null
          role_type: string
          services_interested: string[]
          timeline: string
          user_agent: string | null
          website: string | null
        }
        Insert: {
          company: string
          created_at?: string
          decision_maker: string
          delivery_mode?: string | null
          email: string
          full_name: string
          has_podcast: string
          id?: string
          ip_address?: string | null
          location: string
          monthly_budget: string
          phone?: string | null
          primary_goal: string
          qualified?: boolean | null
          redirect_to?: string | null
          role_type: string
          services_interested: string[]
          timeline: string
          user_agent?: string | null
          website?: string | null
        }
        Update: {
          company?: string
          created_at?: string
          decision_maker?: string
          delivery_mode?: string | null
          email?: string
          full_name?: string
          has_podcast?: string
          id?: string
          ip_address?: string | null
          location?: string
          monthly_budget?: string
          phone?: string | null
          primary_goal?: string
          qualified?: boolean | null
          redirect_to?: string | null
          role_type?: string
          services_interested?: string[]
          timeline?: string
          user_agent?: string | null
          website?: string | null
        }
        Relationships: []
      }
      diagnostic_submissions: {
        Row: {
          answers: Json
          assessment_id: string
          category_scores: Json
          company: string | null
          created_at: string
          email: string
          id: string
          ip_address: string | null
          name: string
          normalized_score: number
          open_response: string | null
          page_path: string | null
          phone: string | null
          raw_score: number
          referrer: string | null
          submitted_at: string | null
          tier: string
          user_agent: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
          website: string | null
        }
        Insert: {
          answers?: Json
          assessment_id: string
          category_scores?: Json
          company?: string | null
          created_at?: string
          email: string
          id?: string
          ip_address?: string | null
          name: string
          normalized_score: number
          open_response?: string | null
          page_path?: string | null
          phone?: string | null
          raw_score: number
          referrer?: string | null
          submitted_at?: string | null
          tier: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          website?: string | null
        }
        Update: {
          answers?: Json
          assessment_id?: string
          category_scores?: Json
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          ip_address?: string | null
          name?: string
          normalized_score?: number
          open_response?: string | null
          page_path?: string | null
          phone?: string | null
          raw_score?: number
          referrer?: string | null
          submitted_at?: string | null
          tier?: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never
