import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import Freebook from '../component/Freebook';
function Home(){
  return (
<div className="bg-white dark:bg-slate-900 dark:text-white">      <Navbar/>
    <Banner/>
     <Freebook/>
     <Footer/>
    </div>
  );
}

export default Home;
