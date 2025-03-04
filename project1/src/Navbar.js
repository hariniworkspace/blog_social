import React, { useContext } from "react";
import DataContext from "./Context/DataConstext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { search, setSearch } = useContext(DataContext)
  return (
    <nav className="Nav">
      <h2>Blog Sphere</h2>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input
          type="text"
          id="search"
          placeholder="Search for Post"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">post</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
