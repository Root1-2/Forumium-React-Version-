import supabase from "./supabase";

export async function getReply(id) {
  let { data, error } = await supabase
    .from("replies")
    .select("*")
    .eq("postId", id);

  if (error) {
    console.log(error);
    throw new Error("Replies could not be fetched");
  }

  return data;
}
