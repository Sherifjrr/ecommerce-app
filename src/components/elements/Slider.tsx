import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import { SwiperProps } from '../../state/Types'
import 'swiper/css'
import 'swiper/css/effect-cards'

const Slider: React.FC<SwiperProps> = ({ slides }) => {
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="h-4/5 w-4/5"
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="flex h-full justify-center rounded-xl bg-gray-300 shadow-md shadow-white lg:h-4/5 xl:h-full"
        >
          <img src={slide.image} alt={slide.title} className="object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
