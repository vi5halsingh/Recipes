import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingleRecipe from '../components/SingleRecipe'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/details/:id' element={<SingleRecipe/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>

    </div>
  )
}

export default MainRoutes
