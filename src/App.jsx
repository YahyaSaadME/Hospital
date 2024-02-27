import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Nav from './Components/Nav'
import Foot from './Components/Foot'
import Home from './Components/Home'
import GeoLocation from './Components/GeoLocation'
import './index.css'
import './App.css'
import Locations from './Components/Locations'
export default function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Locations/>} path='/location'/>
    </Routes>
    {/* <GeoLocation/> */}
    {/* <Foot/> */}
    </>
  )
}
