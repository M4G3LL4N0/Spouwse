export interface WaitlistSubmission {
  id: string;
  email: string;
  full_name: string | null;
  relationship_goal: string | null;
  source: string | null;
  created_at: string;
}
