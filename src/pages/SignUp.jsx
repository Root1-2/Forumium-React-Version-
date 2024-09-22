import Logo from "../ui/Logo";
import SignUpForm from "../components/SignUpForm";
import bg from "../images/bg.jpg";

function SignUp() {
  return (
    <div
      className="absolute inset-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex h-screen w-full items-center justify-center overflow-y-auto">
        <div className="rounded-lg bg-gray-700 py-5 pt-12 sm:px-20 sm:py-8">
          <div className="mb-1 flex justify-center sm:mb-8">
            <Logo />
          </div>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
