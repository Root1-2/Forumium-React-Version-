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

export async function createEditReply(replyData, id) {
  let query = supabase.from("replies");
  if (!id) {
    query = query.insert([replyData[0]]).select();
  } else {
    query = query.update(replyData).eq("id", id);
  }

  const { data, error } = await query.single();

  if (error) {
    console.error(error);
    throw new Error("Insertion Failed");
  }

  return data;
}

export async function deleteReply(replyId) {
  const { data, error } = await supabase
    .from("replies")
    .delete()
    .eq("id", replyId);

  if (error) {
    console.error(error);
    throw new Error("Insertion Failed");
  }

  return data;
}
