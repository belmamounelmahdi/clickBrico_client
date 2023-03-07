import React from 'react'
import { useSelector } from 'react-redux'
import {  Link, Route, Routes } from 'react-router-dom'
import Compte from './Compte'

const LeftBar = () => {
  const profiles = useSelector( state => state.profiles)
  return (
    <div className='bg-red-300 absolute'>
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