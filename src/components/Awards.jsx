import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png";
import award3 from "../assets/images/award3.png";
import award4 from "../assets/images/award4.png";

const Awards = () => {
  return (
    <div>
      <h2 className='text-center uppercase text-2xl md:text-4xl'>
        Awards and Certificates
      </h2>
      <div className='w-full max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-center items-center'>
        <div className='m-4'>
          <img
            className=' w-3/4 md:w-full mx-auto'
            src={award1}
            alt='Award 1'
          />
          <p className='text-center mt-2 text-xl lg:text-2xl'>SGS Standard</p>
        </div>
        <div className='m-4'>
          <img
            className=' w-3/4 md:w-full mx-auto'
            src={award2}
            alt='Award 2'
          />
          <p className='text-center mt-2 text-xl lg:text-2xl'>ISO9001: 2015</p>
        </div>
        <div className='m-4'>
          <img
            className=' w-3/4 md:w-full mx-auto'
            src={award3}
            alt='Award 3'
          />
          <p className='text-center mt-2 text-xl lg:text-2xl'>
            High Technology Expertise
          </p>
        </div>
        <div className='m-4'>
          <img
            className=' w-3/4 md:w-full mx-auto'
            src={award4}
            alt='Award 4'
          />
          <p className='text-center mt-2 text-xl lg:text-2xl'>
            Insert Award 4 Text Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
