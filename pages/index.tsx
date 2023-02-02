
import {  NextPage } from "next"
import ServiceCard from "../Components/ServiceCard"
import { motion } from "framer-motion"
import { fadeInup, routeAnimation, stagger } from "../animations"
import { services } from './../data';
import Head from "next/head";
const About:NextPage = () => {
  return(
    <div className="flex flex-col flex-grow px-6 pt-1">
      <Head>
        <title>My-Fortpolio</title>
      </Head>
      
      <h4 className="my-3 font-semibold">Hi, My name is Andika Bagus Pambudi. And I am a developer from Jakarta, Indonesia. I am a students from Muhammadiyah University Prof. Dr. Hamka, East Jakarta. I am an Active Student. studying hard in university, i ended up learning more and more new things every day
      </h4>
      <div className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100" style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What i Learning</h6>

        <motion.div
         className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {services.map(service =>(
            <motion.div variants={fadeInup} 
             className="bg-gray-100 rounded-lg dark:bg-dark-200 lg:col-span-1" 
            key={service.title}>
              
            <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    
  )
}

export default About;
