/* eslint-disable react/prop-types */
import { useState } from "react";
import earbud from "../assets/images/earbud.png";
import headphone from "../assets/images/headphone.png";
import box from "../assets/images/product-box.png";

const productsData = [
  {
    image: earbud,
    title: "Best Sound Experience!",
    subtitle:
      "Unlock Premium Acoustic Solutions Today & Get a Free Consultation!",
    buttonText: "Let's Start",
  },
  {
    image: box,
    title: "Transform Your Acoustic Landscape!",
    subtitle: "Revolutionary Acoustic Solutions for Home & Office!",
    buttonText: "Get Started",
  },
  {
    image: headphone,
    title: "Enhance Your Listening Environment!",
    subtitle: "Discover Tailored Acoustic Solutions for Every Space!",
    buttonText: "Explore Now",
  },
];

const Product = ({ image, title, subtitle, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='flex flex-col md:flex-row items-center justify-between p-4 md:p-8 font-poppins'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex-1 relative overflow-hidden'>
        <img
          src={image}
          alt='Banner Image'
          className={`rounded-3xl ${
            isHovered
              ? "scale-105 transition-transform duration-500 ease-in-out"
              : "scale-100"
          }`}
        />
        {isHovered && (
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-75 transition-opacity duration-500 ease-in-out'>
            <h2 className='text-2xl font-bold text-white mb-2'>{title}</h2>
            <p className='text-lg text-white mb-4'>{subtitle}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className='min-h-screen lg:min-h-[80vh] flex justify-center items-center bg-product bg-no-repeat bg-cover bg-fixed w-full bg-center my-10 lg:my-20'>
      <div className='w-full py-28 lg:py-0 flex flex-col lg:flex-row lg:gap-x-10 justify-around items-center'>
        {productsData.map((banner, index) => (
          <div key={index} className='flex  items-center justify-center w-full'>
            <Product
              image={banner.image}
              title={banner.title}
              subtitle={banner.subtitle}
              buttonText={banner.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
