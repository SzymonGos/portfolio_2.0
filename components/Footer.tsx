import Container from '@/components/Container'

const links = [
  { name: 'Email', href: 'mailto:szymonngos@gmail.com' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/szymon-gos777' },
]
export default function Footer() {
  return (
    <section className='mt-48 lg:mt-60'>
      <Container className='relative px-0 lg:px-0 w-full max-w-none mx-0'>
        <div className='absolute -z-10 lg:col-start-1 lg:col-span-9 left-0 w-full h-[110%] lg:h-[300px] bg-gray-100' />
        <Container className='col-span-full w-full'>
          <ul className='col-span-full lg:col-start-2 lg:col-span-2 pt-11 flex flex-col gap-y-6 order-2 lg:order-1 font-bold'>
            {links.map((x, i) => {
              return (
                <li key={i}>
                  <a href={x.href} target='_blank'>
                    {x.name}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className='col-span-full lg:col-start-9 lg:col-span-3 pt-11 capitalize flex flex-row order-3 lg:order-2'>
            <div>
              Copyright &#169; {new Date().getFullYear()} - <strong>Szymon Gos</strong>. All rights reserved.
            </div>
          </div>
          <div className='col-span-full lg:col-start-2 lg:col-span-5 mt-16 text-3xl font-bold uppercase flex order-1 lg:order-3'>
            Come say hi
          </div>
        </Container>
      </Container>
      <div className='md:mb-48 lg:mb-60' />
    </section>
  )
}
