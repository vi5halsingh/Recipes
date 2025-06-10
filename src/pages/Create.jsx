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
    <div className='flex justify-center items-center w-full h-[100vh] '>
      <form onSubmit={handleSubmit(SubmitHandler)} className='w-1/2  m-auto flex-col items-center justify-center text-center p-5'>
        <h1 className='text-md font-medium'>Create a new recipe</h1>
        <input className='p-2 border-b block outline-0  w-[80%]'
          {...register("image")}
          type="url"
          placeholder='enter image URL' />
        <small className='text-red-400 '></small>
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
          placeholder='write  recipe Ingredients seperated by ,' />

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
        <button className='px-2 py-2 border rounded mt-5 cursor-pointer'>Create Recipe </button>
      </form>
    </div>
  )
}

export default Create
