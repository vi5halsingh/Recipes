import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { recipecontext } from '../context/RecipeContext'
import { ToastContainer , toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
  const {data, setData } = useContext(recipecontext)
  const { register, handleSubmit, reset } = useForm()
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid()
    setData([...data, recipe])
    toast.success("New recipe created !")
    reset()
   navigate('/recipes')
  }

  return (
    <div className='min-h-full bg-gray-700 p-8'>
      <form onSubmit={handleSubmit(SubmitHandler)} className='max-w-2xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg'>
        <h1 className='text-2xl font-bold mb-6 text-yellow-500'>Share Your Recipe</h1>
        
        {['image', 'title', 'chef'].map((field) => (
          <input
            key={field}
            className='w-full mb-4 px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-gray-400 transition-colors'
            {...register(field)}
            placeholder={`Enter ${field === 'image' ? 'Image URL' : field.replace(/^./, m => m.toUpperCase())}`}
          />
        ))}
    
        {['discription', 'ingredients', 'instructions'].map((field) => (
          <textarea
            key={field}
            className='w-full mb-4 px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-gray-400 h-32 resize-none transition-colors'
            {...register(field)}
            placeholder={`Enter ${field.replace(/^./, m => m.toUpperCase())}`}
          />
        ))}
    <select 
    {...register('category')}
    className='w-full mb-2   bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-gray-400 h-10 resize-none transition-colors'
     id="">
      <option >-- select category of the recipe --</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Supper">Supper</option>
      <option value="Sweet">Sweet dish</option>
     </select>
        <button
          type='submit'
          className='w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-colors duration-300'
        >
          Publish Recipe
        </button>
      </form>
    </div>
  )
}

export default Create
