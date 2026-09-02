import Hero from "./compenets/Hero";
import Intro from "./compenets/Intro";
import Updates from "./compenets/Updates";
import Ending from "./compenets/Ending";
import Footer from "./compenets/Footer";

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
