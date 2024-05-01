import Navbar from "@/app/components/Home/Navbar";
import HeroSection from "./HeroSection";
import Spacer from "@/app/components/Home/Spacer";
import ServiceList from "./ServiceList";
import Areas from "./Areas";
import Banner from "@/app/search/Banner";
import Footer from "@/app/components/Home/Footer";
import FooterMobile from "@/app/components/Home/MobileFooter";

export default function CaterersPage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Spacer />
            <ServiceList />
            <Spacer />
            <Areas />
            <Spacer />
            <Banner />
            <Spacer />
            <Footer />
            <FooterMobile />
        </div>
    );
}