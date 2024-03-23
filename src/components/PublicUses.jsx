import aud from "../assets/images/icon-aud.png";
import cine from "../assets/images/icon-cine.png";
import wor from "../assets/images/icon-wor.png";
import std from "../assets/images/icon-std.png";
import gallery1 from "../assets/images/public-gallery1.jpg";
import gallery2 from "../assets/images/public-gallery2.jpg";
import { useEffect } from "react";
import Aos from "aos";

const PublicUses = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className='px-5  max-w-7xl my-32 mx-auto'>
        <h2
          data-aos='fade-down-right'
          data-aos-duration='1000'
          className='pb-20 uppercase text-2xl md:text-5xl font-semibold'
        >
          Public Use Cases
        </h2>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='flex flex-col lg:flex-row mx-auto'
        >
          <div className=''>
            <img src={gallery1} alt='' />
            <img src={gallery2} alt='' />
          </div>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center py-4'>
              <img className='w-1/2' src={std} alt='' />
              <p className='uppercase text-lg md:text-2xl'>Stadium</p>
            </div>
            <div className='flex flex-col justify-center items-center py-4 bg-gray-300'>
              <img className='w-1/2' src={aud} alt='' />
              <p className='uppercase text-lg md:text-2xl'>Auditorium</p>
            </div>
            <div className='flex flex-col justify-center items-center py-4 bg-gray-300'>
              <img className='w-1/2' src={cine} alt='' />
              <p className='uppercase text-lg md:text-2xl'>Cinema</p>
            </div>
            <div className='flex flex-col justify-center items-center py-4'>
              <img className='w-1/2' src={wor} alt='' />
              <p className='uppercase text-lg md:text-2xl'>Worship place</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicUses;
