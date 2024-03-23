import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png";
import award3 from "../assets/images/award3.png";
import award4 from "../assets/images/award4.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-5 py-32'>
      <h2
        data-aos='fade-up'
        className='uppercase text-2xl md:text-5xl font-semibold'
      >
        Awards and Certificates
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='w-full flex gap-x-5 flex-wrap md:flex-nowrap justify-center items-center '>
          <div data-aos='fade-up' data-aos-duration='1000' className='m-4'>
            <img
              className=' w-3/4 md:w-full mx-auto'
              src={award1}
              alt='Award 1'
            />
            <p className='text-center mt-2 text-xl lg:text-2xl'>SGS Standard</p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1000' className='m-4'>
            <img
              className=' w-3/4 md:w-full mx-auto'
              src={award2}
              alt='Award 2'
            />
            <p className='text-center mt-2 text-xl lg:text-2xl'>
              ISO9001: 2015
            </p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1000' className='m-4'>
            <img
              className=' w-3/4 md:w-full mx-auto'
              src={award3}
              alt='Award 3'
            />
            <p className='text-center mt-2 text-xl lg:text-2xl'>
              High Technology Expertise
            </p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1000' className='m-4'>
            <img
              className=' w-3/4 md:w-full mx-auto'
              src={award4}
              alt='Award 4'
            />
            <p className='text-center mt-2 text-xl lg:text-2xl'>
              Insert Award 4 Text Here
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Awards;
