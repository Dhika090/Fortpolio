import Bar from "../Components/Bar"
import { languages, tools } from "../data"
import {motion } from "framer-motion"
import { fadeInup, routeAnimation } from "../animations"
import Head from "next/head"
const resume = () =>{

    const  variants = {
        initial: {
            opacity:0,
            y:60
        },
        animate:{
            opacity:1,
            y:0,
        },
    };

    return(
        <motion.div className='p-6 py-2' variants={routeAnimation} initial="initial" animate="animate" exit="exit">
        <Head>
            <title>My-Fortpolio</title>
        </Head>
        {/* education */}
          <div className="grid gap-6 md:grid-cols-2">
              <motion.div  
              variants={fadeInup} initial="initial" animate="animate">
                  <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div className="">
                        <h5 className='my-2 text-xl font-bold'>Informatics Engineering</h5>
                        <p className='my-3'> I am Freshgraduate at the Uhamka University 2024</p>
                    </div>
              </motion.div>
              <motion.div 
              variants={fadeInup} initial="initial" animate="animate">
                  <h5 className="my-3 text-2xl font-bold">Exprience</h5>
                    <div className="">
                        <h5 className='my-2 text-xl font-bold'>Software Engineer</h5>
                        <p className="">You can see it in my CV/resume</p>
                    </div>
              </motion.div>
          </div>
        
        {/* languange */}
        <div className="grid gap-6 md:grid-cols-2">
        <div>
            <h5 className="my-3 text-2xl font-sans">languages & Frameworks</h5>
            <div className="my-2">
                {
                    languages.map(languages =>(
                    <Bar data={languages} key={languages.name}/>))
                }
            </div>
        </div>
        <div>
            <h5 className="my-3 text-2xl font-sans">Tools & Design</h5>
            <div className="my-2">
                {
                    tools.map(tools =>(
                    <Bar data={tools} key={tools.name}/>))
                }
            </div>
        </div>
        </div>
        </motion.div>
        
    )
}
export default resume