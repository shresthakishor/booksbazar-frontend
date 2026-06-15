import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router'

import PublicLayout from '../layouts/PublicLayout.jsx'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import Categories from './pages/Categories.jsx'
import NewRelease from './pages/NewRelease.jsx'
import Contact from './pages/Contact.jsx'
import Blogs from './pages/Blogs.jsx'
import CreateAccount from './CreateAccount.jsx'
import Login from './Login.jsx'

function App() {

  return (
    <Routes>
        <Route path="/" element={<PublicLayout/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-us"element={<About/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/new-releases" element={<NewRelease/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact-us" element={<Contact/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
        
        </Route>
    </Routes>
  )
}

export default App
