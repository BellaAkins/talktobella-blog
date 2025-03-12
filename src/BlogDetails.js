import { useParams, useHistory } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: oneBlog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + oneBlog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error} </div>}
      {oneBlog && (
        <article>
          <h2>{oneBlog.title}</h2>
          <p>Written by {oneBlog.author}</p>
          <div>{oneBlog.body}</div>
        </article>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogDetails;
