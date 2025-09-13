/*
  # Create leads table for form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text, nullable)
      - `selected_options` (text[], nullable)
      - `created_at` (timestamp with time zone)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `leads` table
    - Add policy for authenticated users to read their own submissions
    - Add policy for anon users to insert submissions
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text,
  selected_options text[],
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read their own submissions
CREATE POLICY "Users can read own leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE email = leads.email
  ));

-- Allow anyone to insert new leads
CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);