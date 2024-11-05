import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { logout } from "@/lib/actions";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.getSession();
    if (!error && data.session) {
      setIsLogin(true);
    }
    setLoading(false);
    return data;
  };

  const handleLogout = async () => {
    setLoading(true);
    await logout(); // 로그아웃 수행
    setIsLogin(false); // 로그아웃 후 로그인 상태 업데이트
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();

    const { data } = supabase.auth.onAuthStateChange((event) => {
      setIsLogin(event === "SIGNED_IN"); // 로그인 상태 업데이트
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return { isLogin, loading, handleLogout };
};

export default useLogin;
