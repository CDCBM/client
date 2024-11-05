import { FormEvent, useState } from "react";
import { mmLogin } from "./actions";

const SignupForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");
  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const loginRes = await mmLogin(id, password);
    if (loginRes) {
      // TODO : 다음 단계(닉네임 입력)로 이동
      onSuccess();
    } else {
      alert("로그인 실패");
    }
  };
  return (
    <div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={submitForm}>
          <span>매터모스트 아이디</span>
          <input
            type="email"
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
          {/* <span>패스워드 확인</span>
          <input
            type="password"
            value={passwordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          /> */}
          <button>회원가입하기</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
