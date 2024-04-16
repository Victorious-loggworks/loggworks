import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import Client from "./Client";
import Steps from "./Steps";
import Popular from "./PopularServices";
import HowItWorks from "./HowItWorks";
import Spacer from "./Spacer";
import Testimonial from "./Testimonial";

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
      </>
    );
  }
  