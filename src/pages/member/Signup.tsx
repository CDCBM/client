import { useState } from "react";
import SignupForm from "./SignupForm";

const Signup = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && (
        <div
          className="p-8 text-center bg-slate-400"
          onClick={() => setStep(2)}
        >
          메터모스트로 회원가입하기
        </div>
      )}
      {step === 2 && <SignupForm onSuccess={() => setStep(3)} />}
      {step === 3 && (
        <div className="p-8 text-center bg-green-400">
          닉네임 입력 단계로 이동했습니다.
        </div>
      )}
    </div>
  );
};

export default Signup;
