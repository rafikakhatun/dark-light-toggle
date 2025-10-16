import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMoon } from 'react-icons/fa';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>

      {/* here dark light toggle button*/}

      <div className='flex justify-end p-6'>
        <button className='bg-gray-200 p-4 rounded-full text-gray-700 text-xl hover:'><FaMoon /></button>
      </div>

      {/*Hero Section Text*/}

      <div className='px-8 py-12 space-y-5'>
        <h1 className='text-2xl md:text-3xl bg-gradient-to-l from-violet-700 to-pink-700 text-transparent bg-clip-text font-semibold'>Experience the Future of Web Design</h1>
        <p className='text-md md:text-lg text-left'>Switch effortlessly between light and dark themes with a single click.
          This project is built using React and Tailwind CSS, showcasing how
          modern UI development can feel smooth, elegant, and accessible for every user.
        </p>

        {/*button section*/}
        <div className='flex gap-4'>
          <button className='px-6 py-3 bg-violet-600 rounded-md text-white cursor-pointer'>TRY DEMO</button>
          <button className='px-6 py-3 bg-pink-600 rounded-md text-white cursor-pointer'>LEARN MORE</button>
        </div>
      </div>

     






    </>
  )
}

export default App;
