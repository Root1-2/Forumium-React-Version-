import LoginForm from "../components/LoginForm";
import Logo from "../ui/Logo";
import bg from "../images/bg.jpg";

function Login() {
  return (
    <div
      className="absolute inset-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-lg bg-gray-700 px-0 py-7 sm:px-10">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
