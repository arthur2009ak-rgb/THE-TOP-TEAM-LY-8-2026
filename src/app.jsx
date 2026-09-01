import Hero from './components/Hero'
import Intro from './components/Intro'
import Updates from './components/Updates'
import Ending from './components/Ending'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Intro />
      <Updates />
      <Ending />
      <Footer />
    </div>
  )
}
