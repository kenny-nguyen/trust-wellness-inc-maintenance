/*
  # Create maintenance settings table

  1. New Tables
    - `maintenance_settings`
      - `id` (uuid, primary key) - Unique identifier
      - `is_maintenance_mode` (boolean, default false) - Whether site is in maintenance mode
      - `preview_password` (text) - Password to access preview
      - `maintenance_message` (text) - Custom message to display
      - `estimated_end_time` (timestamptz, nullable) - When maintenance is expected to end
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `maintenance_settings` table
    - Add policy for public read access (needed to check maintenance status)
    - Note: Updates should be done via direct database access or admin panel

  3. Important Notes
    - Table will be initialized with default settings
    - Only one row should exist in this table
    - Public read access is required so the frontend can check maintenance status
*/

CREATE TABLE IF NOT EXISTS maintenance_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_maintenance_mode boolean DEFAULT false NOT NULL,
  preview_password text DEFAULT 'preview123' NOT NULL,
  maintenance_message text DEFAULT 'We are currently performing scheduled maintenance. Please check back soon!' NOT NULL,
  estimated_end_time timestamptz,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE maintenance_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read maintenance settings"
  ON maintenance_settings
  FOR SELECT
  TO public
  USING (true);

-- Insert default settings
INSERT INTO maintenance_settings (is_maintenance_mode, preview_password, maintenance_message)
VALUES (true, 'preview123', 'We are currently performing scheduled maintenance. Please check back soon!')
ON CONFLICT DO NOTHING;