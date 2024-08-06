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

export async function createReply(replyData) {
  const { data, error } = await supabase
    .from("replies")
    .insert([replyData[0]])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Reply Failed");
  }

  return data;
}

export async function editReply(replyData) {
  const { data, error } = await supabase
    .from("replies")
    .update([replyData[0]])
    .eq("id", "someValue")
    .select();
}
