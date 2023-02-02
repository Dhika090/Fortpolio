
import ProjectCard from "../Components/ProjectCard"
import { projects } from "../data"
import { motion } from "framer-motion"
import { fadeInup, stagger,routeAnimation } from "../animations"
import { useState } from 'react';
import Head from "next/head";

const Projects = () =>{
    const [showDetail, setShowDetail] = useState<number|null>(null);

    return (
        <motion.div className="px-5 py-2 overflow-y-scroll"style={{ height: "65vh" }}
         variants={routeAnimation} initial="initial" animate="animate">
            <Head>
                <title>My-Fortpolio</title>
            </Head>
            {/* <nav>Navbar</nav> */}
            <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger}>
               {projects.map((project )=>(
                    <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" variants={fadeInup} key={project.name}>
                    <ProjectCard project={project}
                     showDetail={showDetail}
                     setShowDetail={setShowDetail}
                    />
                    </motion.div>
               ))}
            </motion.div>
        </motion.div>         
    )     
}
export default Projects 