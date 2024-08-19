import Logo from "../ui/Logo";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg bg-gray-700 px-0 py-0 sm:px-20 sm:py-8">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
