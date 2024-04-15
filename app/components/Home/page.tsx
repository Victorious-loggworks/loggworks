import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import Client from "./Client";
import Steps from "./Steps";
import Popular from "./PopularServices";
import HowItWorks from "./HowItWorks";

export default function HomePage() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <Featured />
        <Client />
        <Steps />
        <Popular />
        <HowItWorks />
      </>
    );
  }
  