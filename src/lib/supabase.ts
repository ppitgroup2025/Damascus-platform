import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mlaxeuqatpwjrwvffhtn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYXhldXFhdHB3anJ3dmZmaHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxODgzNTMsImV4cCI6MjA4Nzc2NDM1M30.8qpnZ2t5VqGE8K6IHtvqueWDknKaQqjtHcYTbNw_tX8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
