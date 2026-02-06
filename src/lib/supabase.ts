import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://juyxjbgzmmcmiwircpqd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1eXhqYmd6bW1jbWl3aXJjcHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNjIzOTEsImV4cCI6MjA4NTkzODM5MX0.Y7EKCvOp6noUd91c6EJd0R9mCXlfD0nOPELtYTUFqLk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
