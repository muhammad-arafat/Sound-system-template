import bannerImage from "../assets/images/banner.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const Banner = () => {
  const [textRef, textInView] = useInView({ triggerOnce: true });
  const [imageRef, imageInView] = useInView({ triggerOnce: true });

  return (
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between my-10 px-5 font-poppins'>
      <motion.div
        ref={textRef}
        variants={textVariants}
        initial='hidden'
        animate={textInView ? "visible" : "hidden"}
        className='text-center md:text-left space-y-3 md:space-y-5 flex-1'
      >
        <motion.h1
          variants={textVariants}
          className='text-2xl md:text-4xl font-bold mb-2'
        >
          Elevate Your Sound Experience!
        </motion.h1>
        <motion.h2
          variants={textVariants}
          className='text-lg text-gray-400 font-medium md:text-xl'
        >
          Unlock Premium Acoustic Solutions Today &{" "}
          <span className='font-bold text-2xl text-red-500'>
            Get a Free Consultation!
          </span>
        </motion.h2>
        <motion.button
          variants={textVariants}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-lg'
        >
          Claim Your Free Consultation
        </motion.button>
      </motion.div>
      <motion.div
        ref={imageRef}
        variants={imageVariants}
        initial='hidden'
        animate={imageInView ? "visible" : "hidden"}
        className='flex-1 block'
      >
        <motion.img
          src={bannerImage}
          alt='Banner Image'
          className='w-3/4 h-auto mx-auto rounded-3xl'
          variants={imageVariants}
          initial='hidden'
          animate={imageInView ? "visible" : "hidden"}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
