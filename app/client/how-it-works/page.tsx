import Spacer from "@/app/components/Home/Spacer";
import HeroSection from "./HeroSection";
import Steps from "./HowItWorks";
import Banner from "@/app/search/Banner";
import FAQs from "@/app/professional/FAQ";
import Footer from "@/app/components/Home/Footer";
import FooterMobile from "@/app/components/Home/MobileFooter";
import Navbar from "@/app/components/Home/Navbar";

export default function() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Steps />
            <Spacer />
            <Banner />
            <Spacer />
            <FAQs />
            <Spacer />
            <Footer />
            <FooterMobile />
        </div>
    );
}