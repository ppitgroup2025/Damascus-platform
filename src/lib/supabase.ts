import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nsuuywamryrjdvnabxou.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zdXV5d2FtcnlyamR2bmFieG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2ODQ1MDQsImV4cCI6MjA4NTI2MDUwNH0.Eip5hYn_wT37Wfa7oD2ICw-jIVEYNnbVzw9Uzdj8yqU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
