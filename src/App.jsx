import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='w-screen h-screen overflow-hidden font-thin bg-gray-700 text-white'>
      <Navbar/>
      <main className='h-[calc(100vh-80px)] '>
        <MainRoutes/>
      </main>
    </div>
  )
}

export default App
