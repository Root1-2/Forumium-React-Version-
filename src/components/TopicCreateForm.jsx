import { useUser } from "../services/useUser";
import { useForm } from "react-hook-form";
import { useCreatePost } from "../services/useCreatePost";

import Dropdown from "../ui/Dropdown";
import Input from "../ui/Input";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

function TopicCreateForm() {
  const { handleSubmit, register, formState, setValue } = useForm();
  const { errors } = formState;

  const { user } = useUser();
  const { username } = user.user_metadata;

  const { isPending, createPost } = useCreatePost();

  function onSubmit(data) {
    const newPost = { ...data, postCreator: username };

    createPost(newPost);
  }

  return (
    <div className="mx-24 rounded-lg bg-gray-800">
      <p className="bg-gray-700 py-2 text-center text-2xl">Create Post</p>
      <form className="px-20 py-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 flex justify-between gap-28">
          <Input
            label="Post Name"
            id="postName"
            error={errors.postName}
            {...register("postName", {
              required: "This field is Required",
            })}
          />
          <div className="mt-3 w-full">
            <Dropdown
              label="Choose Section"
              name="postSection"
              error={errors.section}
              setValue={setValue}
              {...register("postSection", {
                required: "This field is required",
              })}
            >
              <span>Gaming</span>
              <span>Movies</span>
              <span>TV-Series</span>
              <span>Life Topics</span>
              <span>Miscellaneous</span>
            </Dropdown>
          </div>
        </div>
        <div>
          <Input
            label="Post Body"
            type="textarea"
            id="postContent"
            error={errors.postContent}
            {...register("postContent", {
              required: "This Field is Required",
              minLength: {
                value: 50,
                message: "Content must be at least 50 words",
              },
            })}
          />
        </div>

        <div className="mt-10 flex justify-end">
          <Button disabled={isPending} color="alternate" type="submit">
            {!isPending ? "Post" : <SpinnerMini />}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TopicCreateForm;
