import Navbar from "../components/Home/Navbar";
import Spacer from "../components/Home/Spacer";
import Testimonial from "./Testimonial";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import WhyChoose from "./WhyChoose";
import FAQs from "./FAQ";
import Blog from "../components/Home/Blog";
import Footer from "../components/Home/Footer";
import FooterMobile from "../components/Home/MobileFooter";

export default function ProfessionalPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Spacer />
      <Banner />
      <Spacer />
      <WhyChoose />
      <Spacer />
      <Testimonial />
      <Spacer />
      <FAQs />
      <Spacer />
      <Blog />
      <Spacer />
      <Footer />
      <FooterMobile />
    </div>
  );
}
