import { nanoid } from 'nanoid'
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
        },
        {
            id: nanoid(),
  title: "Rasgulla",
  image: "https://media.istockphoto.com/id/1297640502/photo/gulab-jamun-with-coconut.webp?a=1&b=1&s=612x612&w=0&k=20&c=yhKsKudUnALwNkhaDIbsHxj9t_xecgVy_8c2taq6YIM=",
  chef: "Samosa Wale Bhaiya",
  discription: "Soft, spongy and juicy Bengali dessert made from chenna (Indian cottage cheese), soaked in sugar syrup.",
  ingredients: "1 liter full cream milk, 2 tbsp lemon juice, 1 cup sugar, 4 cups water, 1/4 tsp cardamom powder, 1 tsp rose water (optional)",
  instructions: "Boil milk and curdle with lemon juice, drain and rinse chenna, knead well, make smooth balls, boil sugar and water, add chenna balls, cover and cook for 10-12 minutes, cool and soak in syrup, refrigerate before serving",
  category: "Dessert"
          },
{
    id: nanoid(),
    title: "Poha",
    image: "https://media.gettyimages.com/id/2201502652/photo/poha-jalebi-a-perfect-sweet-savory-duo.jpg?s=612x612&w=0&k=20&c=K95-FCteaJtzgHnFvfuKoZSNJv1A5RqaxqC7_aE3nUk=",
    chef: "Dr. jhatka",
    discription: "A light, nutritious Indian breakfast dish made with flattened rice, onions, and mild spices.",
    ingredients: "2 cups poha, 1 onion chopped, 2 green chilies, 1 tsp mustard seeds, curry leaves, peanuts, turmeric, salt, lemon",
    instructions: "Rinse poha and drain. Temper mustard seeds, curry leaves, chilies, onion. Add turmeric and poha. Mix well and cook. Add lemon juice before serving.",
    category: "Breakfast"
  },
  {
    id: nanoid(),
    title: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    chef: "Motu ",
    discription: "Rich and creamy North Indian dish made with paneer cubes cooked in buttery tomato gravy.",
    ingredients: "200g paneer, 2 tomatoes, 1 onion, butter, cream, garam masala, ginger garlic paste, spices",
    instructions: "Sauté onion, tomatoes, and spices. Blend. Add butter, cream, and paneer cubes. Simmer and serve with naan or rice.",
    category: "Lunch"
  },
  {
    id: nanoid(),
    title: "Dal Tadka",
    image: "https://media.gettyimages.com/id/2215449345/photo/dal-tadka-dish.jpg?s=612x612&w=0&k=20&c=sreNaA2zfeM3kKiz8R5qnAvaJfgcR8EWE472wdFw9sI=",
    chef: "Mr. Harsh ",
    discription: "A comforting Indian lentil dish tempered with ghee, garlic, and red chilies.",
    ingredients: "1 cup toor dal, garlic, mustard seeds, cumin, hing, turmeric, red chilies, ghee",
    instructions: "Boil dal. Temper ghee with garlic and spices. Pour over dal and simmer. Serve hot with rice or roti.",
    category: "Dinner"
  },
  {
    id: nanoid(),
    title: "Rasgulla",
    image: "https://media.gettyimages.com/id/72193440/photo/close-up-of-ladoos-in-a-basket.jpg?s=612x612&w=0&k=20&c=BurRn44jpwqsAQDVMN4XkWRYDvhMSqZWIao14jKvwS4=",
    chef: "Ms. Khatri",
    discription: "Soft and spongy Bengali sweet made with chenna balls soaked in light sugar syrup.",
    ingredients: "1 liter milk, lemon juice, 1 cup sugar, water, cardamom, rose water",
    instructions: "Curdle milk to make chenna. Knead, form balls, boil in sugar syrup. Cool and serve chilled.",
    category: "Sweet"
  },
  {
    id: nanoid(),
    title: "Vegetable Soup",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    chef: "Ms. thakurain",
    discription: "A light and healthy vegetable soup perfect for a light supper or evening meal.",
    ingredients: "Chopped vegetables (carrot, beans, peas), salt, pepper, garlic, ginger, soy sauce, water",
    instructions: "Sauté garlic and ginger. Add vegetables and water. Simmer and season. Serve warm.",
    category: "Supper"
  }
    ])
    
  return <recipecontext.Provider value={{data, setData}}>
      {props.children}
    </recipecontext.Provider>
  
}

export default RecipeContext
