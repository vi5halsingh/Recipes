import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const Navigate = useNavigate();
  const params = useParams();

  const recipe = data.find((recipe) => params.id === recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { ...recipe }
  });

  const SubmitHandler = (updatedRecipe) => {
    const updatedData = data.map(item => 
      item.id === recipe.id ? { ...item, ...updatedRecipe } : item
    );
    setData(updatedData);
    toast.success("Recipe updated successfully!");
  };

  const deleteHandler = () => {
    const updatedData = data.filter(item => item.id !== recipe.id);
    setData(updatedData);
    toast.error("Recipe deleted!");
    Navigate('/recipes');
  };

  return recipe ? (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden m-4 ">
        <div className='flex  gap-3 p-2'>
      {/* Hero Section */}
      <div className="relative w-1/2 h-[80vh] bg-gray-700 rounded-md">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover opacity-90 rounded-md"
        />
      </div>

      {/* Content Container */}
      <div>
        <h1 className="text-4xl font-bold mb-6 text-yellow-500">{recipe.title}</h1>
        <p className="text-xl text-gray-300 mb-8">{recipe.discription}</p>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className='w-1/2'>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {recipe.ingredients.split(',').map((ingredient, index) => (
                <li key={index} className="pl-4">{ingredient.trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              {recipe.instructions.split(',').map((step, index) => (
                <li key={index} className="pl-4">{step.trim()}</li>
              ))}
            </ol>
          </div>
        </div>
        </div>
        </div>
        <div className="p-8 bg-gray-800  ">
        {/* Edit Form */}
        <form onSubmit={handleSubmit(SubmitHandler)} className="bg-gray-700 p-6 rounded-xl space-y-6">
          <h3 className="text-2xl font-bold text-yellow-500">Edit Recipe</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
          <input
            className='w-full mb-4  bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-gray-400 transition-colors'
            {...register('image')}
          />
            <textarea
              {...register('discription')}
              className="w-full h-32 px-4 py-3 bg-gray-800 rounded-lg border border-gray-600 text-white resize-none"
            />
              <textarea
              {...register('ingredients')}
              className="w-full h-32 px-4 py-3 bg-gray-800 rounded-lg border border-gray-600 text-white resize-none"
            />
                 <textarea
              {...register('instructions')}
              className="w-full h-32 px-4 py-3 bg-gray-800 rounded-lg border border-gray-600 text-white resize-none"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Update Recipe
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition-colors"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default SingleRecipe;
