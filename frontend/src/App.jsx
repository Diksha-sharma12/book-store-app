import React from 'react';
import Home from './home/Home';
import Course from './component/Course';
import Courses from './courses/Courses';
import Signup from './component/Signup';
import {Routes,Route, Navigate} from "react-router-dom";
import Contact from './component/Contact';
import toast,{Toaster} from "react-hot-toast"
import { useAuth } from './context/Authprovider';
const App = () => {
    const [authUser,setauthUser]=useAuth()
      console.log(authUser)

  return (
    <>
       <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/course' element={authUser?<Courses/>:<Navigate to={"/signup"}/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    
   </Routes>
   <Toaster/>
   </div>
    </>
  );
}

export default App;