import { Swiper } from "swiper/react";
import 'swiper/css'
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css/effect-fate'

const sliderWrap = {
    width: '500px',
    height: '600px',
}

export default function CategorySlider (){


    return (
        <Swiper
            style={sliderWrap}
            slidesPerView={1}
            loop={true}
            autoplay={{delay: 2000}}
            speed={3000}
            modules={[Autoplay, EffectFade]}
            cubeEffect={'fade'}
        ></Swiper>
    )

}