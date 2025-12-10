import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";
import { PageWrapper } from "@/components/ui/Wrapper";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
// import data from "@/data/data.json";

const Login = () => {
  // const student = data.student;
  const [email, setEmail] = useState<undefined | string>(undefined);
  const [password, setPassword] = useState<undefined | string>(undefined);

  return (
    <>
      <PageWrapper>
        <div className="h-[500px] w-[500px] border-8 rounded-xl bg-gray-200">
          <div className="p-4 flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-2 w-full">
              <img className="h-[120px] w-[150px]" src={logo} alt="StudyMates logo" />
              <span className="text-xs text-login font-bold">Your Close Learning Companion</span>
            </div>
            <div className="flex flex-col items-start gap-3 w-full">
              <h1 className="text-login font-bold text-4xl">Login</h1>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                label={"Email Address"}
                placeholder="eg: 123456@slu.edu.ph"
              />
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" label={"Password"} placeholder="eg: bleach123" />
              <div className="w-full flex justify-center pt-2">
                <Link to={"/main"}>
                  <Button
                    disabled={!email && !password}
                    onClick={() => console.log("Clicked")}
                    className="bg-login hover:bg-blue-300 hover:cursor-pointer"
                    label={"Login"}
                  />
                </Link>
              </div>
              <span className="text-xs">
                Please use these credentials | <i>email: student123@slu.edu.ph</i> | <i>password: student123</i>
              </span>
              <span className="text-xs">If you can't login just type anything in the fields</span>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Login;
