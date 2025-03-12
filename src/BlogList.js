import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2> {title} </h2>
      {blogs.map((oneBlog) => (
        <div className="blog-preview" key={oneBlog.id}>
          <Link to={`/blogs/${oneBlog.id}`}>
            <h2>{oneBlog.title}</h2>
            <p>Written by {oneBlog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
