/*
  # Email Subscribers & Contact Forms

  1. New Tables
    - `email_subscribers`
      - `id` (uuid, primary key)
      - `name` (text, nullable)
      - `email` (text, unique, not null)
      - `source` (text) - tracks whether from ebook popup or newsletter
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `service_type` (text, nullable)
      - `message` (text, not null)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Allow anonymous inserts for public form submissions
    - Restrict reads to authenticated users only
*/

CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text UNIQUE NOT NULL,
  source text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts to email_subscribers"
  ON email_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts to contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read email_subscribers"
  ON email_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read contact_submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);