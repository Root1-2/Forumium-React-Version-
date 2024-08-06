import supabase from "./supabase";

export async function createEditPost(newPost, id) {
  let query = supabase.from("posts");

  if (!id) {
    query = query.insert([newPost]).select();
  } else {
    query = query.update([newPost]).eq("id", id);
  }

  const { data, error } = await query.single();

  if (error) {
    console.log(error);
    throw new Error("Post could not be created");
  }

  return data;
}

export async function getPosts({ id = null }) {
  let query = supabase.from("posts").select("*");

  if (id) {
    query = query.eq("id", id);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
}

export async function deletePost(id) {
  // First checking if replies exist for that post
  const { data: replies, error: repliesError } = await supabase
    .from("replies")
    .select("id")
    .eq("postId", id);

  if (repliesError) {
    console.error(repliesError);
    throw new Error("Failed to fetch replies");
  }

  if (replies.length > 0) {
    const { error: deleteRepliesError } = await supabase
      .from("replies")
      .delete()
      .eq("postId", id);

    if (deleteRepliesError) {
      console.error(deleteRepliesError);
      throw new Error("Replies could not be deleted");
    }
  }

  const { data, error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Posts could not be deleted");
  }

  return data;
}
