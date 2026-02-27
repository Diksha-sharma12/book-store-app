import React from 'react';
import Navbar from '../component/Navbar';
import Course from '../component/Course';
import Footer from '../component/Footer';
import Contact from '../component/Contact';


const Courses = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'><Course/></div>  
      <Footer/>
    </div>
  );
}

export default Courses;
