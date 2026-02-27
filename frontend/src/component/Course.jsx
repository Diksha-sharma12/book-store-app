import React from 'react';
import list from '../../public/list.json';
import Card from './Card';
import  { Link } from "react-router-dom"
import Home from '../home/Home';
const Course = () => {
    console.log(list)
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className='pt-28  item-center justify-center text-center '> 
      <h1 className='text-2xl  md:text-4xl'>We're delighted to have you 
         <span className='text-pink-500'> Here !    :)</span> </h1>
         <p className='mt-12'>
            Lorem,ipsum dolor sit omet cnsecutor odipisicing .
            dolor ,et totam, tempora amet atque expedita coerupti totam sed pariotur corporis at veriam est voluptors animit
         </p>
         <Link to='/'>
         <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300s'>Back</button>
            </Link>
    </div>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">        {
           list.map((item)=>{
            return <Card key={item.id} item={item}/>
           })
        }
    </div>
    </div>
    </>
  );
}

export default Course;
