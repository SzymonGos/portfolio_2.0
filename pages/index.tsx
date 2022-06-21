import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'

export default function LandingPage() {
  return (
    <>
      <main>
        <header>
          <Masthead />
        </header>
        <Experience />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}
