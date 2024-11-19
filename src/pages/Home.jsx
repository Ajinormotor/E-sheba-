import ChooseUs from "../component/ChooseUs"
import Consulting from "../component/Consulting"
import Hero from "../component/Hero"
import Newsletter from "../component/Newsletter"
import Testimonial from "../component/Testimonial"
import TheFuture from "../component/TheFuture"


const Home = () => {
  return (
    <div  className="flex flex-col items-center justify-start w-full">
        <Hero />
        <Consulting />
        <ChooseUs />
        <Testimonial />
        <TheFuture />
        <Newsletter />
      
    </div>
  )
}

export default Home
