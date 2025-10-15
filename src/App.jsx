import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1 second)
      once: true, // animation will happen only once
    });
  }, []);


  return (
    <>

      {/*header (navbar) */}
      nav



    </>
  )
}

export default App;
