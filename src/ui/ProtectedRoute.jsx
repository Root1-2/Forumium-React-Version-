/* eslint-disable react/prop-types */
import { useUser } from "../services/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Spinner />
      </div>
    );

  return children;
}

export default ProtectedRoute;
