import OptimizedImage from '@/components/OptimizedImage'
import cinemacloud from '../public/assets/cinemacloud.jpg'

export default function Project() {
  return (
    <div className='relative lg:w-[768px] xl:w-[1024px]  lg:ml-[200px] px-4 py-4 lg:px-24 lg:py-12 bg-gray-100 flex flex-col'>
      <div className='flex flex-col lg:absolute lg:w-[210px] my-5 lg:my-0 gap-y-4 lg:gap-y-8 lg:top-28 lg:-left-40 z-50 order-2'>
        <div className='flex flex-col gap-y-4'>
          <div className='text-lg lg:text-xl font-bold'>01. Cinemacloud</div>
          <div className='text-gray-200 font-bold'>Find your favourite movies.</div>
        </div>
        <div className='flex flex-row lg:flex-col gap-x-6 lg:gap-y-2 font-bold whitespace-nowrap w-fit'>
          <a href='#1' className='link-hover'>
            Visit Project
          </a>
          <a href='#2' className='link-hover'>
            Visit Github
          </a>
        </div>
      </div>

      <div className='shadow-[0px_4px_20px_4px_rgba(0,0,0,0.2)] order-1 w-full h-full'>
        <OptimizedImage src={cinemacloud} alt='project image' layout='responsive' priority quality={65} />
      </div>
    </div>
  )
}
