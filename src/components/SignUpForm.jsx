import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignUp } from "../services/useSignUp";

import Input from "../ui/Input";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

function SignUpForm() {
  const { signUp, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, username, email, password }) {
    signUp(
      { fullName, username, email, password },
      {
        onSettled: reset(),
      },
    );
  }

  return (
    <div className="p-5">
      <p className="mb-5 text-center text-xl font-semibold text-blue-500">
        Sign-Up Form
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Full Name"
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", {
            required: "This Field is Required",
          })}
          error={errors.fullName}
        />
        <Input
          label="Username"
          type="text"
          id="username"
          disabled={isLoading}
          {...register("username", { required: "This Field is Required" })}
          error={errors.username}
        />
        <Input
          label="Email Address"
          type="email"
          id="email"
          disabled={isLoading}
          error={errors.email}
          {...register("email", {
            required: "This Field is Required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email",
            },
          })}
        />
        <Input
          label={"Password"}
          type={"password"}
          id={"password"}
          disabled={isLoading}
          error={errors.password}
          {...register("password", {
            required: "This Field is Required",
            minLength: {
              value: 6,
              message: "Password need minimum 6 character",
            },
          })}
        />
        <Input
          label={"Confirm Password"}
          type={"password"}
          id={"passwordConfirm"}
          disabled={isLoading}
          error={errors.passwordConfirm}
          {...register("passwordConfirm", {
            required: "This Field is Required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
        <div className="mb-5 flex justify-end">
          <Button color={"blue"} type="submit">
            {!isLoading ? "Submit" : <SpinnerMini />}
          </Button>
          <Button color={"red"} type="reset">
            Reset
          </Button>
        </div>
      </form>
      <span>Already Have an Account?</span>
      <NavLink to="/login">
        <span className="ms-2 text-blue-600">Sign-In</span>
      </NavLink>
    </div>
  );
}

export default SignUpForm;
