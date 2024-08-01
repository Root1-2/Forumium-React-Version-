import { NavLink } from "react-router-dom";
import { useState } from "react";

import Input from "../ui/Input";
import Button from "../ui/Button";

function handleSubmit(e) {
  e.preventDefault();
  console.log("");
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        />
        <Input
          label={"Password"}
          type={"password"}
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end">
          <Button type="submit">Login</Button>
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
