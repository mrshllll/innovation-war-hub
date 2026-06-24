
CREATE TABLE public.registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name text NOT NULL CHECK (char_length(team_name) BETWEEN 1 AND 100),
  leader_name text NOT NULL CHECK (char_length(leader_name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  whatsapp text NOT NULL CHECK (char_length(whatsapp) BETWEEN 5 AND 20),
  pitch_deck_url text NOT NULL CHECK (char_length(pitch_deck_url) BETWEEN 5 AND 500),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.registrations TO anon, authenticated;
GRANT ALL ON public.registrations TO service_role;

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a registration"
  ON public.registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
