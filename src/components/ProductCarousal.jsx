import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import product1 from "../assets/images/product1.jpg";
import product3 from "../assets/images/product3.jpg";
import product2 from "../assets/images/product2.jpg";

const ProductCarousal = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div className='relative'>
          <div className='w-full h-[550px]'>
            <img className='h-full' src={product1} alt='Slide 1' />
          </div>
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white text-start space-y-7 pl-12 md:w-1/2'>
              <h2 className='text-4xl md:text-6xl font-bold'>
                Premium Sound Experience
              </h2>
              <p className='text-lg md:text-xl'>
                Elevate your audio journey with our high-quality soundboxes.
              </p>
              <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg'>
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='w-full h-[550px]'>
            <img className='h-full' src={product3} alt='Slide 2' />
          </div>
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 md:w-1/2 text-start'>
              <h2 className='text-4xl md:text-6xl font-bold'>
                Immerse in Crystal Clear Sound
              </h2>
              <p className='text-lg md:text-xl'>
                Immerse yourself in every detail of your favorite tunes.
              </p>
              <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg'>
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='w-full h-[550px]'>
            <img className='h-full' src={product2} alt='Slide 3' />
          </div>
          <div className='absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
            <div className='text-white space-y-7 pl-12 md:w-1/2 text-start'>
              <h2 className='text-4xl md:text-6xl font-bold'>
                Unmatched Audio Performance
              </h2>
              <p className='text-lg md:text-xl'>
                Experience the pinnacle of audio excellence with our soundboxes.
              </p>
              <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg'>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousal;
