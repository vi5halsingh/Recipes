import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='w-screen h-[100%] overflow-x-hidden font-thin bg-gray-700 text-white py-10 px-5  '>
    <Navbar/>
     <MainRoutes/>
    </div>
  )
}

export default App
