import { supabase } from "@/lib/supabase";
import axios from "axios";

export const mmLogin = async (id: string, password: string) => {
  try {
    const res = await axios.post(
      "https://meeting.ssafy.com/api/v4/users/login",
      {
        login_id: id,
        password,
      }
    );

    console.log(res);

    await supabaseSignup(id, password);

    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const supabaseSignup = async (id: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: id,
      password,
    });
    console.log("data=", data);
    console.log("error=", error);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (id: string, password: string) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: id,
      password,
    });
    // console.log(data, error);
    if (error) return false;
    return true;
  } catch {
    return false;
  }
};
