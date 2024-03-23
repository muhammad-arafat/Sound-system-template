import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import product1 from "../assets/images/product1.jpg";
import product3 from "../assets/images/product3.jpg";
import product2 from "../assets/images/product2.jpg";

const ProductCarousal = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className=' px-4'>
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          dynamicHeight={true}
          className='relative'
        >
          <div className='relative w-full md:h-[550px]'>
            <img className='w-full h-full' src={product1} alt='Slide 1' />
            <div className='absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-4 md:p-12'>
              <h2 className='text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8'>
                Premium Sound Experience
              </h2>
              <p className='text-lg md:text-xl text-center mb-4 md:mb-8'>
                Elevate your audio journey with our high-quality soundboxes.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg'>
                Explore Now
              </button>
            </div>
          </div>
          <div className='relative w-full md:h-[550px]'>
            <img className='w-full h-full' src={product3} alt='Slide 2' />
            <div className='absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-4 md:p-12'>
              <h2 className='text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8'>
                Immerse in Crystal Clear Sound
              </h2>
              <p className='text-lg md:text-xl text-center mb-4 md:mb-8'>
                Immerse yourself in every detail of your favorite tunes.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg'>
                Discover More
              </button>
            </div>
          </div>
          <div className='relative w-full md:h-[550px]'>
            <img className='w-full h-full' src={product2} alt='Slide 3' />
            <div className='absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white p-4 md:p-12'>
              <h2 className='text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8'>
                Unmatched Audio Performance
              </h2>
              <p className='text-lg md:text-xl text-center mb-4 md:mb-8'>
                Experience the pinnacle of audio excellence with our soundboxes.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg'>
                Shop Now
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousal;
