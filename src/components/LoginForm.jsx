import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../services/useLogin";

import Input from "../ui/Input";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div className="p-5">
      <p className="mb-5 text-center text-xl font-semibold text-blue-500">
        Login Form
      </p>
      <form onSubmit={handleSubmit}>
        <div className="w-96">
          <Input
            label={"Email Address"}
            type={"email"}
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
          <Input
            label={"Password"}
            type={"password"}
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
        </div>

        <div className="flex justify-center py-3">
          <Button type="submit" disabled={isPending}>
            {!isPending ? "Login" : <SpinnerMini />}
          </Button>
        </div>
      </form>
      <span>Don&apos;t Have an Account?</span>
      <NavLink to="/signup">
        <span className="ms-2 text-blue-600">Sign-Up</span>
      </NavLink>
    </div>
  );
}

export default LoginForm;
