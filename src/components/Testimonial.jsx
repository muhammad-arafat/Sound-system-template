import { useEffect, useState } from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./pagination.css";
import { FaRegCommentDots } from "react-icons/fa";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch("/testimonials.json");
        const data = await response.json();
        setTestimonial(data);
      } catch (error) {
        console.log("Error fetching testimonials:", error);
      }
    };
    fetchReview();
  }, []);

  return (
    <>
      <h2 className='my-10 md:my-20 text-center uppercase text-2xl md:text-4xl'>
        Users Feedback
      </h2>
      <div className=' max-w-7xl mx-auto px-4 my-10 md:my-20'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='mySwiper'
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonial.map(review => (
            <SwiperSlide key={review.name}>
              <div className='w-full h-[420px] shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 via-red-400 to-gray-500 animate-gradient-x'>
                <div className='-mb-14'>
                  <img
                    className='rounded-tr-3xl w-24 h-[82px] object-cover'
                    src={review.image}
                    alt={review.image}
                  />
                </div>

                <div className='p-6 flex flex-col items-center space-y-5 justify-center h-[350px] rounded-2xl border hover:shadow-md'>
                  <div className='text-center'>
                    <FaRegCommentDots className='text-4xl text-blue-500' />
                  </div>
                  <div className='text-left space-y-1'>
                    <h3 className='font-semibold text-2xl text-gray-800'>
                      {review.name}
                    </h3>
                    <p className='text-gray-500'>{review.location}</p>
                  </div>
                  <p className='text-lg text-center w-full text-gray-700 '>
                    {review.message}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
