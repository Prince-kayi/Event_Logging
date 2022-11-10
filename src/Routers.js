import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Treatment from './Pages/Treatment'
import Register from './Pages/Register'
import Results from './Pages/Results'
import Types_Diagonsis from './Pages/Types_Diagonsis'
import Admits from './Pages/Admits'
import Default from './Pages/Default'
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Default />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/treat' element={<Treatment />} />
        <Route path='/results' element={<Results />} />
        <Route path='/type' element={<Types_Diagonsis />} />
        <Route path='/admit' element={<Admits />} />
      </Routes>
    </div>
  )
}
export default Routers
