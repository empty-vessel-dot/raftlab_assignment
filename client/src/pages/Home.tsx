import Banner from "../Components/Banner";
import Banner2 from "../Components/Banner2";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

const Home: React.FC = () => {
    return (
      <div className="flex flex-col">
        <Navbar/>
        <HeroSection/>
        <Banner2/>
        <Banner/>
        <Carousel/>
        
        <Footer/>
      </div>
    );
  };
  
  export default Home;
  