import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import MyWork from '@/components/MyWork'

export default function LandingPage() {
  return (
    <>
      <main>
        <header>
          <Masthead />
        </header>
        <MyWork />
        <Experience />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}
