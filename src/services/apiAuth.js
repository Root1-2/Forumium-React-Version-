import supabase from "./supabase";

export async function signUp({ fullName, username, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        username,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
