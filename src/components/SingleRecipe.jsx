import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';

const SingleRecipe = () => {
    const { data, setData } = useContext(recipecontext)
    const Navigate = useNavigate()
    const params = useParams()

    const recipe = data.find((recipe) => params.id === recipe.id)

    const { register, handleSubmit, reset } = useForm(
        {
            defaultValues: {
                title: recipe.title,
                image:recipe.image,
                chef:recipe.chef,
                id:recipe.id,
                discription:recipe.discription,
                ingredients:recipe.ingredients,
                instructions:recipe.instructions,
                category:recipe.category

            }
        }
    )

    function SubmitHandler(recipe) {
        const findIndex = data.findIndex(recipe => params.id == recipe.id)
        const copyData = [...data]
        copyData[findIndex] = {...copyData[findIndex] , ...recipe}
       setData(copyData)
       console.log(data)
       toast.success("recipe updated successfully!")
      
    }

    const deleteHandler = () =>{
  const recipes = data.filter(recipe => params.id != recipe.id)
  setData(recipes)
  toast.error("Recipe Deleted! ")
  Navigate('/recipes')
    }

    return recipe ? (
        <div className=' flex overflow-hidden  border'>
            <div className='left w-1/2 p-5'>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt="" className='h-[40vh] w-full object-cover border '/>
                <small>{recipe.chef}</small>
                <p>{recipe.discription}</p>
                <h1 className='font-medium text-sm mt-3'>INgredients</h1>
                <p>
                    {recipe.ingredients}
                </p>
                <h1 className='font-medium text-sm mt-3'>Instructions</h1>
                <p>
                    {recipe.instructions}
                </p>
            </div>

            <form onSubmit={handleSubmit(SubmitHandler)} className='right w-1/2 p-5'>
                <h1 className='text-md font-medium'>Create a new recipe</h1>
                <input className='p-2 border-b block outline-0  w-[80%]'
                    {...register("image")}
                    type="url"
                    placeholder='enter image URL' />
                <small className='text-red-400 '>this is an error</small>
                <input className='p-2 border-b block outline-0  w-[80%]'
                    {...register("title")}
                    type="text"
                    placeholder='enter recipe title' />

                <input className='p-2 border-b block outline-0  w-[80%]'
                    {...register("chef")}
                    type="text"
                    placeholder='chef name' />
                <textarea className='p-2 border-b block outline-0 w-[80%]'
                    {...register("discription")}
                    type="text"
                    placeholder='enter recipe discription' />

                <textarea className='p-2 border-b block outline-0 w-[80%]'
                    {...register("ingredients")}
                    placeholder='weite  recipe Ingredients seperated by ,' />

                <textarea className='p-2 border-b block outline-0 w-[80%]'
                    {...register("instructions")}
                    placeholder='write recipe Instructions seperated by  ,' />

                <select className='p-2 border-b block outline-0 w-[80%]'
                    {...register("category")} id="">
                    <option value="" className='bg-gray-700 '>-- select category --</option>
                    <option value="Breakfast" className='bg-gray-700 '>Breakfast</option>
                    <option value="Lunch" className='bg-gray-700 '>Lunch</option>
                    <option value="Supper" className='bg-gray-700 '>Supper</option>
                    <option value="Dinner" className='bg-gray-700 '>Dinner</option>
                </select>
                <button className='px-2 py-2 border rounded mt-5 cursor-pointer'>Update Recipe </button>
            <button className=' m-5 px-2 py-2 border rounded mt-5 cursor-pointer bg-red-500 ' onClick={deleteHandler}>Delete recipe</button>
            </form>
        </div>

    ) : "Loading"
}

export default SingleRecipe
