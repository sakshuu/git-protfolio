import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Page404, Projects, Resume, Skills } from './pages'
import { MyNavbar } from './components'
import "./assets/css/index.css"
import AOS from 'aos';
import "aos/dist/aos.css";

const App = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])
  
  return <>

<MyNavbar/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Page404/>}/>
 </Routes>
  </>
}

export default App