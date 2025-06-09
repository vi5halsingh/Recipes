import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    
    const {id , title , chef , image, discription, ingredients , instructions} = props.recipe
  return (
    <Link className='hover:scale-101 duration-100 block w-1/4  rounded-md overflow-hidden shadow shadow-gray-400 p-2' key={props.keyId}
    to={`/recipes/details/${id}`}
    >
      <img src={image} alt="" className='w-full h-[25vh] object-cover rounded-md'/>
      <h1 className='font-black text-md py-[2px] '>{title}</h1>
        <small className='text-pink-500 mb-2'>{chef}</small>
        <p>
            {discription.slice(0 , 100)}...{" "}
            <small className='text-sm text-blue-500 mb-2 py-1'>more</small>
         </p>

     
      </Link>
  )
}

export default RecipeCard
