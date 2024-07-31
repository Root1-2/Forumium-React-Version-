import { NavLink } from "react-router-dom";
import Input from "../ui/Input";

function LoginForm() {
  return (
    <div className="p-5">
      <p className="mb-5 text-center text-xl font-semibold text-blue-500">
        Login Form
      </p>
      <form>
        <Input label={"Email Address"} type={"email"} />
        <Input label={"Password"} type={"password"} />
      </form>
      <span>Don&apos;t Have an Account?</span>
      <NavLink to="/signup">
        <span className="ms-2 text-blue-600">Sign-Up</span>
      </NavLink>
    </div>
  );
}

export default LoginForm;
