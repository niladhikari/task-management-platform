import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import SectionTitle from '../../../Componets/SectionTitle/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Whether animation should occur only once
      // You can add more configuration options here
    });

    AOS.refresh(); // Optional: Refresh AOS on component mount
  }, []);

  return (
    <section className="my-20">
      <SectionTitle subHeading="What Our Client Say" heading={'Testimonials'} />

      <Swiper navigation={true} modules={[Navigation]}>
        {reviews.map((review, index) => (
          <SwiperSlide key={review._id}>
            <div
              className="flex flex-col items-center my-8 mx-28"
              data-aos="fade-up" // Example animation type (change as needed)
              data-aos-duration="800" // Example duration (change as needed)
              data-aos-delay={index * 100} // Example delay (change as needed)
            >
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="py-4">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
