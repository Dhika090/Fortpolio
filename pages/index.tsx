
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext, NextPage } from "next"
import ServiceCard from "../Components/ServiceCard"
import { motion } from "framer-motion"
import { fadeInup, routeAnimation, stagger } from "../animations"
import { services } from './../data';

const About:NextPage = () => {
  return(
    <motion.div className="flex flex-col flex-grow px-6 pt-1"
     variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      
      <h5 className="my-3 font-semibold">Hi, My name is Andika Bagus Pambudi. And I am a developer from Jakarta, Indonesia. I am a students from Muhammadiyah University Prof. Dr. Hamka, East Jakarta. I am an Active Student. studying hard in university, i ended up learning more and more new things every day
      </h5>
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
    </motion.div>
    
  )
}

export default About;

  // export const getServerSideProps : GetServerSideProps = async (
  //   context:GetServerSidePropsContext
  //   ) => {
  //     // console.log(process.env.VERCEL_URL);
  //     // const res = await fetch('${process.env.VERCEL_URL}/api/services')
  //     // const data = await res.json()
  //     // console.log(data);
  //     return { props : {endpoint:process.env.VERCEL_URL}}
  // }
  
//   export const  getStaticProps = async (context:GetStaticPropsContext) => {
//   //calculation

//   const res  = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("SERVER",services)
  
//   return {
//     props:{
//       services: data.services,
//     },    
//   }
// }