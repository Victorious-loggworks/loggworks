import Popular from "../components/Home/PopularServices";
import Spacer from "../components/Home/Spacer";
import Categories from "./Categories";
import HeroSection from "./HeroSection";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <Spacer />
            <Popular />
            <Spacer />
            <Categories />
            <Spacer />
        </div>
    )
}