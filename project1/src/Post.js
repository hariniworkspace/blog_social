import React from "react";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  // Convert timestamp to "Month Date, Year at HH:MM AM/PM"
  const formattedDate = new Date(post.timestamp).toLocaleString("en-US", {
    month: "long", // Full month name (e.g., March)
    day: "numeric", // Day number (e.g., 4)
    year: "numeric", // Full year (e.g., 2025)
    hour: "2-digit", // 12-hour format
    minute: "2-digit", // Show minutes
    hour12: true, // Use AM/PM format
  });

  // Format string as: "March 4, 2025 at 09:45 AM"
  const formattedDateTime = formattedDate;

  return (
    <article className="post">
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{formattedDateTime}</p>
      </Link>
      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
