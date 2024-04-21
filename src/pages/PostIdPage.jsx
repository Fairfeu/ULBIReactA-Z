import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../components/UI/hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchCommentsById, isCommLoading, errorComm] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
  }, []);

  return (
    <div>
      <h1>You've opened post ID = {params.id}</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}

      <h1>comments</h1>
      {isCommLoading ? (
        <Loader />
      ) : (
        <div style={{ marginTop: 15 }}>
          {comments.map((comm) => (
            <div>
              <h5>{comm.emal}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
