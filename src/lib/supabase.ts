import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://djkpthvufzfjvxldytyz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqa3B0aHZ1ZnpmanZ4bGR5dHl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMzc1MjcsImV4cCI6MjA0NTkxMzUyN30.eny3w2-XIIP3UEz1U96i_C_PPYeyNuKdaQaAOuu49Xw"
);
