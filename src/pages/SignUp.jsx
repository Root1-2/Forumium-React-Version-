import Logo from "../ui/Logo";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto rounded-lg bg-gray-700 px-20 py-8">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
