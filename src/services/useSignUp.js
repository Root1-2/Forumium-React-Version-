import { useMutation } from "react-query";
import { signUp as signUpApi } from "./apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account Create Successfully.! Please Verify The new account from user's email address",
      );
    },
    onError: (user) => {
      toast.error("Account Creation Failed");
    },
  });

  return { signUp, isPending };
}
