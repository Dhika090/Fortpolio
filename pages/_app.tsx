// import '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion';
import Particle from '../Components/Particle';


function app({ Component, pageProps,router }) {
 
  return (
    <ThemeProvider attribute="class" >

    <div className="grid grid-cols-12 gap-6 px-2 my-14 lg:mb-10 md:mb-16 sm:px-10 md:px-24 xl:px-20 lg:px-36">
      <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">  
        <Navbar/>
        <AnimatePresence >
        <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
      <Particle/> 
    </div>
    
    </ThemeProvider>
  );
  
}

export default app
