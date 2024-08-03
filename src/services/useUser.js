import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "./apiAuth";

export function useUser() {
  const queryClient = useQueryClient();
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    onSuccess: (userData) => {
      queryClient.setQueryData(["user"], userData);
    },
    staleTime: Infinity,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
