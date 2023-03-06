import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import Compte from './Compte'

const LeftBar = () => {
  return (
    <div className='bg-red-300 absolute'>
      <ul>
        <Link to='/compte'>
        <li>test</li>
        </Link>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  )
}


function SettingUser() {
  return (

    <div className='h-screen'>
      <LeftBar/>
      <Routes>
        <Route path='/compte' element={<Compte/>}/>
      </Routes>
    </div>
    
  )
}

export default SettingUser;