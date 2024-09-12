import CallToAction from "../../Components/CallToAction/CallToAction";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import CardPrice from "../../Components/Price/CardPrice";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CardPrice />
      <CallToAction />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
