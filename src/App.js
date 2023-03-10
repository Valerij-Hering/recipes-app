
import { useEffect, useState } from 'react';
import './App.css';
import RecipesComponent from './RecipesComponent';
import icon from './icon.png';

function App() {

  const MY_ID = '638e489b';
  const MY_KEY = '5739f8bed17d2520f8b51e1ee4523dd4';

  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits)
    }
    getRecipes();
  },[wordSubmitted])

  const recipesSearch = (e) => {
    setSearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(search);
  }

  return (
    <div className="container">
      <div className='container-form'>
        
        <div className='input-form'>
          <form onSubmit={finalSearch}>
            <input onChange={recipesSearch} value={search} placeholder="Search..."/>
          </form>
          <button onClick={finalSearch} className='input-btn'><i className='fas	fa-search'></i></button>
        </div>
      </div>
      <div className='box-icon'>
        <img src={icon} className='icon' alt="icon"/>
        <h1>Recipes</h1>
      </div>
      <div className='container-recipes'>
        {recipes.map((element, index) =>(
          <RecipesComponent
          key = {index}
          label = {element.recipe.label}
          image = {element.recipe.image}
          calories = {element.recipe.calories}
          igredients = {element.recipe.ingredientLines}
          ingredientsList = {element.recipe.ingredientLines.length}
          link = {element.recipe.url}
          protein = {element.recipe.digest[2].total}
          fat = {element.recipe.digest[0].total}
          carbs = {element.recipe.digest[1].total}
          totalTime = {element.recipe.totalTime}/>
        ))}
      </div>

      <div className='footer'>
        <p className='footerPar'>All material used for educational purposes.</p>
      </div>
    </div>
  );
}

export default App;
