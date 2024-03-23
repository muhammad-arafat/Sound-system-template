import { useEffect } from "react";
import office from "../assets/images/icon-office-1.png";
import enter from "../assets/images/icon-entertainment-1.png";
import rec from "../assets/images/icon-recording-studio-1.png";
import res from "../assets/images/icon-restaurant.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Commercial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='lg:min-h-screen min-h-[80vh] flex justify-center items-center bg-commercial bg-no-repeat bg-cover bg-fixed w-full bg-center my-10 lg:my-20'>
      <div>
        <h2
          className='text-center uppercase text-2xl md:text-4xl'
          data-aos='fade-down'
          data-aos-duration='1000'
        >
          Commercial use cases
        </h2>
        <div
          className='my-10 lg:my-20 px-5 mx-auto max-w-7xl  grid grid-cols-2 md:grid-cols-4'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <div className='flex flex-col justify-center items-center py-4'>
            <img className='w-1/2' src={office} alt='' />
            <p className='uppercase text-lg md:text-2xl'>office</p>
          </div>
          <div className='flex flex-col justify-center items-center py-4 bg-gray-300'>
            <img className='w-1/2' src={res} alt='' />
            <p className='uppercase text-lg md:text-2xl'>RESTAURANT</p>
          </div>
          <div className='flex flex-col justify-center items-center py-4 bg-gray-300'>
            <img className='w-1/2' src={enter} alt='' />
            <p className='uppercase text-lg md:text-2xl'>ENTERTAINMENT</p>
          </div>
          <div className='flex flex-col justify-center items-center py-4'>
            <img className='w-1/2' src={rec} alt='' />
            <p className='uppercase text-lg md:text-2xl'>RESIDENTIAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
