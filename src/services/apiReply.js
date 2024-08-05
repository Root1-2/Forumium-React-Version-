import supabase from "./supabase";

export async function getReply({ postId }) {
  console.log("Fetching replies for postId:", postId);

  let { data: replies, error } = await supabase
    .from("replies")
    .select("*")
    .eq("postId", postId);

  if (error) {
    console.error("Error fetching replies:", error);
    throw new Error("Replies could not be fetched");
  }

  console.log("Fetched replies:", replies);
  return { replies };
}
