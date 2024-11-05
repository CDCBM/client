import { FormEvent, useState } from "react";
import { login } from "./actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const res = await login(id, password);
    if (res) {
      navigate("/board");
    } else {
      alert("로그인에 실패하였습니다.");
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={submitForm}>
        <span>아이디</span>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <span>패스워드</span>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>로그인하기</button>
      </form>
    </div>
  );
};

export default Login;
