export interface FormData {
  full_name: string;
  email: string;
  phone: string;
  message?: string;
  selected_options?: string[];
  status?: string;
}

export interface FormResponse {
  id: string;
  created_at: string;
  status: string;
}