import { NavLink } from "react-router-dom";
import Input from "./Input";

function SignUpForm() {
  return (
    <div className="p-5">
      <p className="mb-5 text-center text-xl font-semibold text-blue-500">
        Sign-Up Form
      </p>
      <Input label={"Full Name"} type={"text"} />
      <Input label={"Username"} type={"text"} />
      <Input label={"Email Address"} type={"email"} />
      <Input label={"Password"} type={"password"} />
      <Input label={"Confirm Password"} type={"password"} />

      <span>Already Have an Account?</span>
      <NavLink to="/login">
        <span className="ms-2 text-blue-600">Sign-In</span>
      </NavLink>
    </div>
  );
}

export default SignUpForm;
