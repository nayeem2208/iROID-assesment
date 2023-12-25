import React from 'react'
import {Routes, Route} from 'react-router-dom'
import All from './components/solutions/All'
import CGI from './components/solutions/CGI'
import Enhanced from './components/solutions/Enhanced'

function Routers() {
    return (
     <Routes>
      <Route path='/iROID-assesment/' exact  element={<All/>}/>
      <Route path='/iROID-assesment/CGI' element={<CGI/>}/>
      <Route path='/iROID-assesment/Enhance_dbrand_contend' element={<Enhanced/>}/>
      <Route path='/iROID-assesment/Photography' element={<CGI/>}/>
      <Route path='/iROID-assesment/CreativeServices'   element={<All/>}/>
     </Routes>
    )
  }
  
  export default Routers