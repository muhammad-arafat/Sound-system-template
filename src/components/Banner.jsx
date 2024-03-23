import bannerImage from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className=' max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between my-10  px-5 font-poppins '>
      <div className='text-center md:text-left space-y-3 md:space-y-5 flex-1'>
        <h1 className='text-2xl md:text-4xl font-bold mb-2'>
          Elevate Your Sound Experience!
        </h1>
        <h2 className='text-lg text-gray-400 font-medium md:text-xl '>
          Unlock Premium Acoustic Solutions Today &{" "}
          <span className=' font-bold text-2xl text-red-500'>
            Get a Free Consultation!
          </span>
        </h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-lg'>
          Claim Your Free Consultation
        </button>
      </div>
      <div className=' flex-1 block '>
        <img
          src={bannerImage}
          alt='Banner Image'
          className='w-3/4 h-auto mx-auto rounded-3xl'
        />
      </div>
    </div>
  );
};

export default Banner;
