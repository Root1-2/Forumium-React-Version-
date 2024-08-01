/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useUser } from "../services/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
