import { motion } from "framer-motion";

const ProductDescription = () => {
  const textVariants = {
    hidden: {
      x: -500,
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

  return (
    <div className='max-w-7xl mx-auto px-5 flex gap-y-8 md:gap-y-0 md:gap-x-10 flex-col md:flex-row items-center justify-between mt-10 md:mt-20 '>
      <motion.div
        className='w-full space-y-5 '
        variants={textVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className='text-2xl md:text-4xl font-bold mb-2'
          variants={textVariants}
        >
          Easy Acoustic System
        </motion.h1>
        <motion.div
          className='text-lg text-gray-400 font-medium'
          variants={textVariants}
        >
          We fulfill the acoustic environment creatively, complying to strict
          acoustic standards, practice advance manufacturing technique for all
          of our product design. Our products are applicable to AV room, music
          room, broadcast studio, office spaces, classroom, worship places,
          restaurant, entertainment outlet, commercial and residential.
          <br />
          Our products strike differences from traditional decoration and cater
          to the pickiest ears.
        </motion.div>
        <motion.h3
          className='text-2xl md:text-3xl font-bold mb-2 text-red-500'
          variants={textVariants}
        >
          Soundbox
        </motion.h3>
        <motion.p
          className='text-lg text-gray-400 font-medium'
          variants={textVariants}
        >
          As a leading company in the acoustic field, we can meet your high-end
          requirements.
        </motion.p>
      </motion.div>
      <motion.div
        className='grid grid-cols-2 w-full items-center justify-center gap-2 text-gray-400 font-medium'
        variants={textVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='space-y-2 border p-4 rounded-2xl'
          variants={textVariants}
          whileHover='hover'
        >
          <motion.h1
            className='text-red-600 text-2xl md:text-5xl font-medium'
            variants={textVariants}
          >
            01.
          </motion.h1>
          <motion.p className='text-lg' variants={textVariants}>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </motion.p>
        </motion.div>
        <motion.div
          className='space-y-2 border p-4 rounded-2xl'
          variants={textVariants}
          whileHover='hover'
        >
          <motion.h1
            className='text-red-600 text-2xl md:text-5xl font-medium'
            variants={textVariants}
          >
            02.
          </motion.h1>
          <motion.p className='text-lg' variants={textVariants}>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </motion.p>
        </motion.div>
        <motion.div
          className='space-y-2 border p-4 rounded-2xl'
          variants={textVariants}
          whileHover='hover'
        >
          <motion.h1
            className='text-red-600 text-2xl md:text-5xl font-medium'
            variants={textVariants}
          >
            03.
          </motion.h1>
          <motion.p className='text-lg' variants={textVariants}>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </motion.p>
        </motion.div>
        <motion.div
          className='space-y-2 border p-4 rounded-2xl'
          variants={textVariants}
          whileHover='hover'
        >
          <motion.h1
            className='text-red-600 text-2xl md:text-5xl font-medium'
            variants={textVariants}
          >
            04.
          </motion.h1>
          <motion.p className='text-lg' variants={textVariants}>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductDescription;
