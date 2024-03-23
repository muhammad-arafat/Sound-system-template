import hotel from "../assets/images/icon-hotel.png";
import res from "../assets/images/icon-res.png";
import edu from "../assets/images/icon-edu.png";
import hos from "../assets/images/icon-hos.png";
import res1 from "../assets/images/res.jpg";
import hotel1 from "../assets/images/hotel.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const CommunityUses = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className='px-5 max-w-7xl my-32 mx-auto'>
        <h2
          data-aos='fade-down-right'
          data-aos-duration='1000'
          className='pb-20 uppercase text-2xl md:text-5xl font-semibold'
        >
          Community use cases
        </h2>
        <div
          data-aos='fade-down-left'
          data-aos-duration='1000'
          className='flex flex-col lg:flex-row-reverse'
        >
          <div className=''>
            <img src={res1} alt='' />
            <img src={hotel1} alt='' />
          </div>
          <div className=' grid grid-cols-2'>
            <div className=' flex flex-col justify-center items-center py-4 bg-gray-300 '>
              <img className=' w-1/2' src={hotel} alt='' />
              <p className='  uppercase text-lg md:text-2xl'>Hotel</p>
            </div>
            <div className=' flex flex-col justify-center items-center py-4 '>
              <img className=' w-1/2' src={res} alt='' />
              <p className='  uppercase text-lg md:text-2xl'>Residential;</p>
            </div>
            <div className=' flex flex-col justify-center items-center py-4 '>
              <img className=' w-1/2' src={edu} alt='' />
              <p className='  uppercase text-lg md:text-2xl'>Education</p>
            </div>
            <div className=' flex flex-col justify-center items-center bg-gray-300  py-4'>
              <img className=' w-1/2' src={hos} alt='' />
              <p className='  uppercase text-lg md:text-2xl'>Hospital</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityUses;
