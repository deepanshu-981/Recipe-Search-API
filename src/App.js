import React ,{ useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID="9669aae0";
  const APP_KEY="847522db9c4fa9927f518519660b506b";

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState([""]);
  const [query,setQuery]=useState([""]);
useEffect(()=>{
  getRecipes();
},[query]);

  const getRecipes= async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data=await response.json();
    setRecipes(data.hits);
    console.log(process.env.APP_KEY);
    console.log(data.hits);
  }

const updatesearch =e=>{
  setSearch(e.target.value);
}


  const getSearch=e=>
{
  e.preventDefault();
  setQuery(search);
  
}
  return (
    <>
    
    <div className="App">
    <h1>Recipe Search Application</h1>
    <form className='searchform' onSubmit={getSearch}>
      <input type="text" className='search-bar' value={search} onChange={updatesearch}/>
      <button  className='search-button' type='submit'>Search</button>
    </form>

<div className='recipes'>

    {recipes.map(recipe=>(
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
    </>
  );
}

export default App;
