/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useUser } from "../services/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isPending } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate],
  );

  if (isPending)
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-black">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
