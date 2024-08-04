import supabase from "./supabase";

export async function createPost(newPost) {
  const { data, error } = await supabase
    .from("posts")
    .insert([newPost])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
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
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
