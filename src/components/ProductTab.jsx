import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import product1Image from "../assets/images/gen3.webp";
import product2Image from "../assets/images/gen31.webp";
import product3Image from "../assets/images/gen32.webp";
import product4Image from "../assets/images/explorer.webp";
import product5Image from "../assets/images/explorer1.webp";
import product6Image from "../assets/images/explorer2.webp";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductTab = () => {
  const [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Premium SoundBox",
        price: "$99.99",
        brand: "SoundMasters",
        image: product1Image,
      },
      {
        id: 2,
        title: "Studio Pro Audio",
        price: "$149.99",
        brand: "AudioTech",
        image: product2Image,
      },
      {
        id: 6,
        title: "Crystal Clear Pro",
        price: "$179.99",
        brand: "ClearTone",
        image: product6Image,
      },
    ],
    Popular: [
      {
        id: 3,
        title: "Bass Boosters",
        price: "$79.99",
        brand: "BassX",
        image: product3Image,
      },
      {
        id: 1,
        title: "Premium SoundBox",
        price: "$99.99",
        brand: "SoundMasters",
        image: product1Image,
      },
      {
        id: 4,
        title: "UltraWave",
        price: "$199.99",
        brand: "SonicTech",
        image: product4Image,
      },
    ],
    Trending: [
      {
        id: 5,
        title: "SurroundSound",
        price: "$129.99",
        brand: "AudioVision",
        image: product5Image,
      },
      {
        id: 2,
        title: "Studio Pro Audio",
        price: "$149.99",
        brand: "AudioTech",
        image: product2Image,
      },
      {
        id: 3,
        title: "Bass Boosters",
        price: "$79.99",
        brand: "BassX",
        image: product3Image,
      },
    ],
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className='w-full max-w-7xl mx-auto px-2 py-24 sm:px-0'
        data-aos='fade-up-left'
        data-aos-duration='1000'
      >
        <h2
          className='pb-20 uppercase text-2xl md:text-5xl font-semibold'
          data-aos='fade-down-right'
          data-aos-duration='1000'
        >
          NEVER MISS A BEAT
        </h2>
        <Tab.Group>
          <Tab.List className='flex space-x-1 rounded-xl bg-red-500 p-1'>
            {Object.keys(categories).map(category => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full flex items-center justify-center flex-wrap md:flex-nowrap rounded-lg py-5 text-xl font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2'>
            {Object.values(categories).map((products, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {products.map(product => (
                    <motion.div
                      key={product.id}
                      className='border border-gray-200 rounded-lg p-4 transition-shadow duration-300'
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className='relative h-40 w-full'>
                        <motion.img
                          src={product.image}
                          alt={product.title}
                          className='w-full h-full self-center rounded-lg'
                        />
                        <motion.div className='absolute inset-0  transition-opacity duration-300' />
                      </div>
                      <h3 className='text-lg md:text-2xl font-bold mt-4'>
                        {product.title}
                      </h3>
                      <div className='flex items-center justify-between gap-x-2'>
                        <p className='text-lg font-medium text-gray-600'>
                          {product.brand}
                        </p>
                        <p>|</p>
                        <p className='text-lg text-gray-600 font-bold'>
                          {product.price}
                        </p>
                      </div>
                      <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md'>
                        Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default ProductTab;
