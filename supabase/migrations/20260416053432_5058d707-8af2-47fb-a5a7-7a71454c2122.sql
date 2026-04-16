
-- Drop existing problematic policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
DROP POLICY IF EXISTS "Service role can read submissions" ON public.contact_submissions;

-- Re-create INSERT policy: allow anonymous inserts but only for expected columns
CREATE POLICY "Public can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(full_name) <= 100
  AND char_length(email) <= 255
  AND char_length(message) <= 2000
  AND char_length(service) <= 100
);

-- Fix SELECT policy: allow authenticated service-role access (USING true for service role, false for anon)
CREATE POLICY "Authenticated users can read submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);
