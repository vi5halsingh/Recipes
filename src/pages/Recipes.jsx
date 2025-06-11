import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
  const {data} = useContext(recipecontext)
  const renderRecipes = data.map((recipe) =>{
    return <RecipeCard key={recipe.id} keyId = { recipe.id} recipe={recipe}/>
  })
  return (
    <div className='flex gap-5 flex-wrap justify-center p-5'>
      {data.length  > 0 ? renderRecipes : "No recipes are there"}
    </div>
  )
}

export default Recipes
