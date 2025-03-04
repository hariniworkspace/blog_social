import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Missing from "./Missing";
import DataContext from "./Context/DataConstext";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="post-container">
      <article className="single-post">
        {post ? (
          <>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-timestamp">{post.timestamp}</p>
            <p className="post-content">{post.body}</p>
            <div className="button-group">
              <Link to={`/edit/${post.id}`}>
                <button className="Edit-btn">Edit Post</button>
              </Link>
              <br />
              <button
                className="delete-btn"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>
            </div>
          </>
        ) : (
          <Missing />
        )}
      </article>
    </main>
  );
};

export default PostPage;
