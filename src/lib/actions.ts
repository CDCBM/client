import { supabase } from "./supabase";

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  console.log(error);
};
