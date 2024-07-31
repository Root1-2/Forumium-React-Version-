import { NavLink } from "react-router-dom";
import Input from "./Input";

function LoginForm() {
  return (
    <div className="p-5">
      <p className="mb-5 text-center text-xl font-semibold text-blue-500">
        Login Form
      </p>
      <Input label={"Email Address"} type={"email"} />
      <Input label={"Password"} type={"password"} />

      <span>Don&apos;t Have an Account?</span>
      <NavLink to="/signup">
        <span className="ms-2 text-blue-600">Sign-Up</span>
      </NavLink>
    </div>
  );
}

export default LoginForm;
