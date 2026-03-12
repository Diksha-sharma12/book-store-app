import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/Authprovider'; 


const Logout = () => {
    const [authUser,setauthUser]=useAuth()
    const handleLogout=()=>{
        try{
             setauthUser(null) 
            localStorage.removeItem("Users")
            toast.success("Logout Successfully ✅")
            window.location.reload()
        }catch(err){
            toast.error("error :" + err.message)
        }
    }
  return (
    <div >
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout </button>
    </div>
  );
}

export default Logout;
