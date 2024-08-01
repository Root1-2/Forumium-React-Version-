import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../services/useLogin";

import Input from "../ui/Input";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <div className="p-5">
      <p className="mb-5 text-center text-xl font-semibold text-blue-500">
        Login Form
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Email Address"}
          type={"email"}
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <Input
          label={"Password"}
          type={"password"}
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <div className="flex justify-center py-3">
          <Button type="submit" disabled={isLoading}>
            {!isLoading ? "Login" : <SpinnerMini />}
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
