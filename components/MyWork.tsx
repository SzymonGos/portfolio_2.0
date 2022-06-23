import { SwiperSlide } from 'swiper/react'
import Slider from '@/components/Slider'
import Container from '@/components/Container'
import Project from '@/components/Project'
import cinemacloud from '../public/assets/cinemacloud.jpg'

const projects = [
  { title: 'Cinemacloud', info: 'Find your favourite movies.', img: { cinemacloud }, githubURL: '#', projectURL: '#' },
]

export default function Projects() {
  return (
    <section className='mt-32'>
      <Container>
        <div className='col-span-full col-start-1 lg:col-start-2'>
          <Slider
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                spaceBetween: 50,
              },
              1280: {
                spaceBetween: 1200,
              },
            }}
          >
            <SwiperSlide>
              <Project />
            </SwiperSlide>

            <SwiperSlide>
              <Project />
            </SwiperSlide>

            <SwiperSlide>
              <Project />
            </SwiperSlide>

            <SwiperSlide>
              <Project />
            </SwiperSlide>
          </Slider>
        </div>
      </Container>
    </section>
  )
}
