import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <section className="my-4 md:my-6">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={32}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-64 md:h-96"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/w6T8n10/image.png"
            alt="slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/4P5zV9t/image.png"
            alt="slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/LJcPdQ7/image.png"
            alt="slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Slider;
