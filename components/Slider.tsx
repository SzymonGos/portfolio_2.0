import { Swiper, SwiperProps } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Slider(props: SwiperProps) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation={true}
      loop={true}
      preloadImages={false}
      lazy={{ loadPrevNext: true, loadOnTransitionStart: true }}
      {...props}
    >
      {props.children}
    </Swiper>
  )
}
