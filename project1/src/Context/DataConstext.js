import { createContext, useEffect, useState } from "react";
import api from "../api/Posts.js";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        console.error(`Error: ${err.message}`);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!posts) {
      setSearchResults([]);
      return;
    }
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;

    const formattedDate = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      

    const newPost = {
      id,
      title: postTitle,
      timestamp: formattedDate,
      body: postBody,
    };

    try {
      await api.post("/posts", newPost);
      setPosts([...posts, newPost]);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };
  const handleEdit = async (id) => {
    const formattedDate = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      

    const updatedpost = {
      id,
      title: editTitle,
      timestamp: formattedDate,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedpost); // ✅ Added '/'

      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      setSearchResults((prevResults) =>
        prevResults.filter((post) => post.id !== id)
      );
      navigate("/");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        posts,
        handleDelete,
        handleEdit,
        editBody,
        setEditBody,
        editTitle,
        setEditTitle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
