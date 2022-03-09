
import ProjectCard from "../Components/ProjectCard"
import { projects } from "../data"
import { motion } from "framer-motion"
import { fadeInup, stagger } from "../animations"
const Projects = () =>{
    return (
        <div className="px-4">
            {/* <nav>Navbar</nav> */}
            <motion.div className="relative grid grid-cols-12 gap-4 my-3">
               {projects.map((project )=>(
                    <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                    <ProjectCard project={project} key={project.name}/>
                    </motion.div>
               ))}
            </motion.div>
        </div>         
    )     
}
export default Projects 