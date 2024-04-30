import Blog from "../components/Home/Blog";
import Footer from "../components/Home/Footer";
import FooterMobile from "../components/Home/MobileFooter";
import Popular from "../components/Home/PopularServices";
import Spacer from "../components/Home/Spacer";
import Testimonial from "../components/Home/Testimonial";
import FAQs from "../professional/FAQ";
import Banner from "../search/Banner";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Area from "./HomeService";
import SingleCategory from "./SingleCategory";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <Spacer />
            <Popular />
            <Spacer />
            <Categories />
            <Spacer />
            <SingleCategory />
            <Spacer />
            <Banner />
            <Spacer />
            <Testimonial />
            <Spacer />
            <Area />
            <Spacer />
            <Blog />
            <Spacer />
            <FAQs />
            <Spacer />
            <Footer />
            <FooterMobile />
        </div>
    )
}