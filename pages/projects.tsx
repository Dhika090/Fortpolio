
import ProjectCard from "../Components/ProjectCard"
import { projects } from "../data"
import { motion } from "framer-motion"
import { fadeInup, stagger,routeAnimation } from "../animations"
const Projects = () =>{
    return (
        <motion.div className="px-5 py-2 overflow-y-scroll"
         variants={routeAnimation} initial="initial" animate="animate">
            {/* <nav>Navbar</nav> */}
            <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger}>
               {projects.map((project )=>(
                    <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" variants={fadeInup} key={project.name}>
                    <ProjectCard project={project} />
                    </motion.div>
               ))}
            </motion.div>
        </motion.div>         
    )     
}
export default Projects 