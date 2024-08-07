import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "./apiAuth";

export function useUser() {
  const queryClient = useQueryClient();
  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
    },
    staleTime: Infinity,
  });

  return { isPending, user, isAuthenticated: user?.role === "authenticated" };
}
