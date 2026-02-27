import React from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const Contact = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
      <div className="w-[600px]">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
   
    <h3 className="font-bold text-2xl">Contact</h3>
    <div className='mt-4 space-y-2'>
        <span>Name : </span>
        <br/>
        <input type='text' placeholder='Enter Your FullName' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("name", { required: true })}/>
                <br/> {errors.name && < span className='text-sm text-red-500'>This field is required</span>}
        <br/>
        <span>Email : </span>
        <br/>
        <input type='email' placeholder='Enter Your email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("email", { required: true })}/>
        <br/> {errors.email && < span className='text-sm text-red-500'>This field is required</span>}

    </div>
    {/* Password*/ }
    <div>
        <span>Password : </span>
        <br/>
        <input type='text' placeholder='Enter Your password' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("password", { required: true })}/>
        <br/> {errors.password && < span className='text-sm text-red-500'>This field is required</span>}

    </div>
    {/* Button*/}
    <div >
        <span>Message: </span>
        <br/>
       <textarea placeholder='type your message here'  className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("message", { required: true })}/>
       <br/> {errors.message && < span className='text-sm text-red-500'>This field is required</span>}
    </div>
     <div className='flex justify-around mt-4'>
        
        <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 dark:bg-slate-900 dark:text-white'>Submit </button>
           <Link to="/" className="underline text-blue-500">
                Cancel
              </Link>
    </div>
     </form>
      </div>
</div>
    </div>

    </>
  );
}


export default Contact;
