import LoginForm from "../components/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg bg-gray-700 px-0 py-7 sm:px-10">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
