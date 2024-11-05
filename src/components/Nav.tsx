import useLogin from "@/lib/useProfile";
import { Link } from "react-router-dom";

const Nav = () => {
  const { isLogin, loading, handleLogout } = useLogin();

  return (
    <div className="flex gap-4 p-4">
      <Link to="/">Home</Link>
      <Link to="/board">게시판</Link>
      {isLogin ? (
        <span
          onClick={handleLogout}
          className={`${loading ? "opacity-50 pointer-events-none" : ""}`}
        >
          {loading ? "로그아웃 중..." : "로그아웃"}
        </span>
      ) : (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </>
      )}
    </div>
  );
};

export default Nav;
