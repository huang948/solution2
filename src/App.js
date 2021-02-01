import React, { useEffect, useState, useCallback } from "react";

// Components
import Cocktails from "./components/Cocktails";

// fake rest api for testing 
const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [filterTerm, setFilterTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${api}${filterTerm}`);
      const cocktailsData = await response.json();
      const { drinks } = cocktailsData;
      setLoading(false);
      setCocktails(drinks);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [filterTerm]);

  useEffect(() => {
    fetchCocktails();
  }, [fetchCocktails]);

  return (
    <div className="container">
      <h1>Cocktail Info</h1>
      <input
        value={filterTerm}
        onChange={(e) => setFilterTerm(e.target.value)}
        placeholder="Search..."
        type="text"
      />
      {loading || !cocktails ? (
        <div>Loading...</div>
      ) : (
        <Cocktails cocktails={cocktails} />
      )}
    </div>
  );
};

export default App;
