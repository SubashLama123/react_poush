import { Button } from "@material-tailwind/react";
import PostSkeleton from "../../ui/PostSkeleton";
import { useAddPostByUserMutation, useGetPostByUserQuery, useRemovePostByIdMutation } from "./postApi";
import { useState } from "react";

const UserPost = ({ user }) => {

  const [id, setId] = useState(null);
  const { isLoading, isError, error, data, isFetching } = useGetPostByUserQuery(user);


  const [addPost, { isLoading: isLoad }] = useAddPostByUserMutation();

  const [removePost, { isLoading: remLoad }] = useRemovePostByIdMutation();

  const handleAdd = () => {
    addPost(user);
  }

  const handleRemove = (post) => {
    setId(post.id);
    removePost(post);
  }




  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <h1>{user.name} Posts</h1>
        <Button onClick={handleAdd} loading={isLoad} size="sm" color="green" className="text-[10px] py-[4px] px-2">Add Random Post</Button>
      </div>

      {isLoading ? <PostSkeleton /> : <div>
        {data.map((post) => {
          return <div key={post.id} className="space-y-3 flex justify-between items-center">
            <h2 className="text-lg text-gray-600 ">{post.title}</h2>
            <Button loading={remLoad && id === post.id} onClick={() => handleRemove(post)} size="sm" color="pink" className="text-[10px] py-[4px] px-2">Remove</Button>
          </div>
        })}
      </div>}
    </div>
  )
}
export default UserPost