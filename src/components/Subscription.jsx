import { useState } from "react";
import sectionImage from "../assets/images/section_image.jpg";

import { TbLoaderQuarter } from "react-icons/tb";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();
  };

  return (
    <div className='max-w-7xl mx-auto px-5'>
      <div className='w-full relative flex items-center justify-center'>
        <img
          src={sectionImage}
          alt='dining'
          className='w-full h-full absolute z-0 flex'
        />
        <div className='bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40'>
          <h1 className='text-3xl md:text-5xl font-bold leading-9 text-white text-center'>
            Stay
            <span className='text-red-500'> Ahead of Anyone!</span>
          </h1>
          <p className='text-xl leading-normal text-center text-white/65 mt-6'>
            Subscribe. Know the latest trends, music newses, industry insights.
          </p>

          <form
            onSubmit={handleSubmit}
            className='sm:border border-white flex-col sm:flex-row flex items-center lg:w-[500px] w-full mt-10 space-y-4 sm:space-y-0'
          >
            <input
              type='email'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='border border-white sm:border-transparent text-lg w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white'
              placeholder='Email Address...'
            />
            <button
              type='submit'
              className='focus:outline-none focus:ring-offset-2 focus:ring  w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white py-4 px-6 hover:bg-opacity-75 uppercase font-bold'
            >
              {loading ? (
                <TbLoaderQuarter
                  size={32}
                  className='animate-spin text-white'
                />
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
