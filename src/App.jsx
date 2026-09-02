import Hero from './compenents/Hero'
import Intro from './compenents/Intro'
import Updates from './compenents/Updates'
import Ending from './compenents/Ending'
import Footer from './compenents/Footer'

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
