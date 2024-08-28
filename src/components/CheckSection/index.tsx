import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Check from "@/components/CheckSection/Check";

const Index: React.FC = () => {
    const checks = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return (
        <Swiper
            spaceBetween={-300} // Це забезпечить, що слайди перекриватимуться
            slidesPerView={2.5} // Показує 2.5 слайда, де половина - це частина наступного та попереднього слайду
            centeredSlides={true} // Центрує активний слайд
            loop={true} // Дозволяє безперервний цикл
        >
            {
                checks.map(check =>
                    <SwiperSlide key={check}>
                        <Check/>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Index;
