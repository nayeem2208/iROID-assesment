import React from 'react'
import {Routes, Route} from 'react-router-dom'
import All from './components/solutions/All'
import CGI from './components/solutions/CGI'
import Enhanced from './components/solutions/Enhanced'

function Routers() {
    return (
     <Routes>
      <Route path='/' exact  element={<All/>}/>
      <Route path='/CGI' element={<CGI/>}/>
      <Route path='/Enhance_dbrand_contend' element={<Enhanced/>}/>
      <Route path='/Photography' element={<CGI/>}/>
      <Route path='/CreativeServices'   element={<All/>}/>
     </Routes>
    )
  }
  
  export default Routers