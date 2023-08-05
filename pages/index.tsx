
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

      <h4 className="my-3 font-semibold">Hai, Saya seorang Mahasiswa Semester 7 Mempunyai pengalaman dalam Perangkat Lunak dengan keahlian
        khusus di software engineer. Memiliki pengalaman -+ 2 tahun dan mampu bekerja mandiri maupun dalam
        tim. Selain itu, saya memiliki kemampuan komunikasi yang baik dan saya memiliki latar belakang teknik
        informatika
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
