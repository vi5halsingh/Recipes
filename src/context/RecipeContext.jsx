import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {
    const [data , setData] = useState([
        {         
  image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbmVlciUyMHRpa2thfGVufDB8fDB8fHww",
  title: "Paneer Tikka Masala",
  chef: "Chef Arjun Singh",
  id:'1',
  discription: "A rich and creamy North Indian dish made with grilled paneer and spicy tomato-based gravy.",
  ingredients: "Paneer, Yogurt, Ginger-Garlic Paste, Garam Masala, Tomatoes, Onions, Cream, Spices",
  instructions: "Marinate paneer, Grill it, Prepare masala, Add cream, Simmer and serve",
  category: "Dinner"
        }
    ])
    
  return <recipecontext.Provider value={{data, setData}}>
      {props.children}
    </recipecontext.Provider>
  
}

export default RecipeContext
