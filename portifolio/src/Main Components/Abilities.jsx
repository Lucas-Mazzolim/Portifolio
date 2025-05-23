import AbilitiesCard from "./AbilitiesCard";
import '../styles/Abilities.css'
import Habilities from '../assets/Habilities.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Abilities(){
    return(
        <section className = "Abilities">
            <h2>Tools I Know</h2>
            <div className = "Abilities-Container">
                    <Swiper
                        breakpoints={{
                        320: {slidesPerView: 1.5},
                        600: {slidesPerView: 3, spaceBetween: 100},
                        1000: {slidesPerView: 4, spaceBetween: 100}
                    }}
                        grabCursor = {true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/></SwiperSlide>
                        <SwiperSlide><AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/></SwiperSlide>
                        <SwiperSlide><AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/></SwiperSlide>
                        <SwiperSlide><AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/></SwiperSlide>
                        <SwiperSlide><AbilitiesCard habilityDescription = {Habilities.h1.Description} habilityName = {Habilities.h1.Name} img = {Habilities.h1.ImagePath}/></SwiperSlide>
                    </Swiper>
            </div>
        </section>
    )
}