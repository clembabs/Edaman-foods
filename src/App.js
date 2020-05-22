import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "9b123a2d";
  const APP_KEY = "76eb8e1d5e2a84e678f4c8d61fd75a14";
  //use env tools to protect before pushing

  // const [counter, setCounter] = useState(0);

  //[] allows the browser render it once
  //if you add [counter], its gonna run every time its hit
  /* <h1  onClick={() => setCounter(counter + 1)}>
      {counter}</h1>
  useEffect(() => {
    console.log("Effect has been run");
  },[]);
  */

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch]= useState('');
  const [query,setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  //always use await anytime u have a promise
  //Creating functions makes your code look neater
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  //onChange to allow it change upon request, e is for event
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  };

  //this gets event search on submit
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    //Always add ClassName, its a good code practice
    <div className="App">
    <div className="header">EDAMAN Foods by CLEMBABS</div>
      <form onSubmit= {getSearch} className="form-search">
        <input className="searchbar" type="text"  value={search} onChange={updateSearch}/>
        <button className="searchbutton" type="submit">
          Search
        </button>
      </form>

     <div className="recipes">
     {recipes.map((recipe) => (
      <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
      />
    ))}
     </div>
    </div>
  );
};

export default App;
