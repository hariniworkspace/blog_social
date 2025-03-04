import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./Context/DataConstext";
const Home = () => {
  const { searchResults } = useContext(DataContext);
  return (
    <main className="Home">
      {searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Post to Display</p>
      )}
    </main>
  );
};

export default Home;
