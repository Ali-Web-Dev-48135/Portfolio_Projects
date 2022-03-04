/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Recipe from './components/Recipe';
import './App.css';

function App() {
  const APP_ID = 'ff9401a2';
  const APP_KEY = '9a503a168257e255641093057fdceb6b';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(  () => {
    GetRecipes();
  }, [query]);

  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    
  };


  const updateSearch = event => {
    setSearch(event.target.value);
    }

  const getSearch = event => {
    event.preventDefault();
    if (search === "") {
      alert("Please enter a valid value.");
      return;
    }
    setQuery(search);
    setSearch("");
  };
  return (
        <div className="App">
          <form className="search-form" onSubmit={getSearch}>
            <header className='main-header'>
              <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
              <button type="submit" className="search-btn">Search</button>
            </header>
          </form>
          <h3 className='main-header__recipe'>Recipe Search App</h3>
          <div className='recipes'>
          {
            recipes.map( recipe => {
              return (
                <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} recipeImage={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
              )
            }) 
          }
          </div>
    </div>
  );
}

export default App;
