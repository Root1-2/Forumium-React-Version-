import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "./apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account Create Successfully.! Please Verify The new account from user's email address",
      );
      navigate("/login", { replace: true });
    },
    onError: (user) => {
      toast.error("Account Creation Failed");
    },
  });

  return { signUp, isPending };
}
