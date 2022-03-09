// import '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
 
  return (
    <ThemeProvider attribute="class" >

    <div className="grid grid-cols-12 gap-6 px-2 my-14 lg:mb-10 md:mb-16 sm:px-10 md:px-24 xl:px-20 lg:px-36">
      <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black dark:text-white lg:col-span-3 rounded-2xl dark:bg-dark-200 shadow-custom-light dark:shadow-custom-dark">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-dark-200 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark">  
      <Navbar/>
      <Component {...pageProps} />
      </div>
    </div>
    
    </ThemeProvider>
  );
  
}

export default MyApp
