import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import Client from "./Client";
import Steps from "./Steps";
import Popular from "./PopularServices";
import HowItWorks from "./HowItWorks";
import Spacer from "./Spacer";
import Testimonial from "./Testimonial";
import Banner from "./Banner";
import Blog from "./Blog";
import BottomBanner from "./BottomBanner";
import Footer from "./Footer";

export default function HomePage() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <Featured />
          <Spacer />
        <Client />
          <Spacer />
        <Steps />
          <Spacer />
        <Popular />
          <Spacer />
        <HowItWorks />
          <Spacer />
        <Testimonial />
          <Spacer />
        <Banner />
          <Spacer />
        <Blog />
          <Spacer />
        <BottomBanner />
          <Spacer />
          <Footer />
      </>
    );
  }
  