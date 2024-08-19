import Logo from "../ui/Logo";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-y-auto">
      <div className="rounded-lg bg-gray-700 py-5 pt-28 sm:px-20 sm:py-8">
        <div className="mb-1 flex justify-center sm:mb-8">
          <Logo />
        </div>

        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
