
import { NextPage } from "next"
import ServiceCard from "../Components/ServiceCard"
import { motion } from "framer-motion"
import { fadeInup, routeAnimation, stagger } from "../animations"
import { services } from './../data';
import Head from "next/head";
const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <Head>
          <link rel="shortcut icon" href="/favicon1.ico" />

        <title>Fortpolio</title>
      </Head>

      <h4 className="my-3 ">Fresh Graduate dari Universitas Muhammadiyah Prof. Dr. Hamka dengan gelar di bidang Teknik Informatika. Meskipun baru lulus, saya telah memiliki pengalaman profesional selama kurang lebih 2 tahun dalam pengembangan perangkat lunak. Selama waktu tersebut, saya telah terlibat dalam berbagai proyek yang mencakup pengembangan aplikasi web dan mobile, baik di sisi front-end maupun back-end.
      </h4>
      <div className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What i Learning</h6>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {services.map(service => (
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
