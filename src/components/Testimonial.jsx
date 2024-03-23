import { useEffect, useState } from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaRegCommentDots } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    Aos.init();
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
      <div className='max-w-7xl mx-auto px-4 pt-20'>
        <h2 className='pb-20 uppercase text-2xl md:text-5xl font-semibold'>
          Users Feedback
        </h2>
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
          {testimonial.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos='fade-down'
                data-aos-duration='1000'
                className='w-full h-[420px] overflow-hidden'
              >
                <div className='-mb-14'>
                  <img
                    className='rounded-tr-3xl w-24 h-[82px] object-cover'
                    src={review.image}
                    alt={review.image}
                  />
                </div>

                <div className='p-6 flex flex-col items-center space-y-5 justify-center h-[350px] rounded-2xl border'>
                  <div className='text-center'>
                    <FaRegCommentDots className='text-4xl text-blue-500' />
                  </div>

                  <h3 className='font-semibold text-2xl text-gray-800'>
                    {review.name}
                  </h3>

                  <p className='text-lg md:text-xl text-center w-full text-gray-700'>
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
