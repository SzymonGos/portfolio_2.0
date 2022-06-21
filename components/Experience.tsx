import Container from '@/components/Container'

const data = [
  { name: 'Atomik Labs', title: 'Frontend Developer', year: 'May 2022 - Present' },
  { name: 'Ravmind', title: 'Frontend Developer', year: 'February 2022 - April 2022' },
  { name: 'Nitro Digital Limited', title: 'Frontend Developer', year: 'October 2021 - November 2022' },
]

export default function Experience() {
  return (
    <section className='mt-40'>
      <Container className='relative px-0 lg:px-0 w-full max-w-none mx-0'>
        <div className='absolute -z-10 lg:col-start-4 lg:col-span-9 left-0 w-full h-[110%] lg:h-[340px] bg-blue-100' />
        <Container className='col-span-full w-full'>
          <div className='col-start-1 col-span-full lg:col-start-2 lg:col-span-4 flex flex-col gap-y-8 pt-11 font-bold'>
            <div className='text-lg text-gray-200'>Deliver</div>
            <div className='text-2xl'>A great experience and a solid piece of a personalised product.</div>
          </div>

          <div className='col-start-1 col-span-full lg:col-start-7 lg:col-span-5 flex flex-col gap-y-8 pt-11'>
            <div className='text-lg text-gray-200 font-bold'>Experience</div>
            <div className='flex flex-col gap-y-5'>
              {data.map((x, i) => {
                return (
                  <div key={i} className='flex culumns-2'>
                    <div className='w-1/2 font-bold'>
                      {x.name}
                      <br />
                      <span className='font-normal'>{x.title}</span>
                    </div>
                    <div className='w-1/2'>{x.year}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </Container>
    </section>
  )
}
