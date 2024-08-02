import LoginForm from "../components/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto rounded-lg bg-gray-700 px-10 py-7">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
