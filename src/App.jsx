import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMoon } from 'react-icons/fa';
import { ESModulesEvaluator } from 'vite/module-runner';
import { IoMdSunny } from 'react-icons/io';

function App() {


  // data aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // theme usestate 

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme',theme)
  }, [theme])

  const handleThemeswitch = ()=>{
    setTheme(theme === 'dark'? 'light' : 'dark');
    
  }

  




  return (



    <>

      {/* here dark light toggle button*/}
      <div className='flex justify-end p-6' data-aos="fade-down">
        <button onClick={handleThemeswitch} className='bg-gray-200 p-4 rounded-full text-gray-700 text-2xl hover:bg-gray-300 cursor-pointer'>
          {theme === 'light'?(<FaMoon />): (<IoMdSunny />)}
        </button>
      </div>

      {/*Hero Section Text*/}
      <div className='px-8 py-12 space-y-5'>
        <h1 className='gradient-heading  text-2xl md:text-3xl bg-gradient-to-l from-violet-700 to-pink-700 text-transparent bg-clip-text font-semibold' data-aos="fade-right">
          Experience the Future of Web Design
        </h1>
        <p className='text-md md:text-lg text-left text-slate-700' data-aos="fade-left">
          Switch effortlessly between light and dark themes with a single click.
          This project is built using React and Tailwind CSS, showcasing how
          modern UI development can feel smooth, elegant, and accessible for every user.
        </p>

        {/*button section*/}
        <div className='flex gap-4' data-aos="fade-up">
          <button className='px-6 py-3 bg-violet-600 rounded-md text-white cursor-pointer'>TRY DEMO</button>
          <button className='px-6 py-3 bg-pink-600 rounded-md text-white cursor-pointer'>LEARN MORE</button>
        </div>
      </div>

      {/*About Section Text */}
      <div className='px-8 py-12 space-y-5 bg-gray-100'>
        <h1 className='gradient-heading text-2xl md:text-3xl bg-gradient-to-l from-violet-700 to-pink-700 text-transparent bg-clip-text font-semibold' data-aos="fade-right">
          About This Project
        </h1>
        <p className='text-md md:text-lg text-left text-slate-700' data-aos="fade-left">
          This Dark & Light Mode Theme Switcher is a React-based UI experiment
          that demonstrates how easy it is to manage theme states using Tailwind CSS
          and context-based toggles. The goal is to create a clean, responsive, and
          user-friendly interface that adapts to your preference — anytime, anywhere.
        </p>

        {/*button*/}
        <div>
          <button className='px-4 py-3 bg-violet-600 rounded-md text-white cursor-pointer'>
            VIEW SOURCE CODE
          </button>
        </div>
      </div>

    </>
  )
}

export default App;
