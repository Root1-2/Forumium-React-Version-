import { useMutation, useQueryClient } from "react-query";
import { login as loginApi } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      navigate("/homepage");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
