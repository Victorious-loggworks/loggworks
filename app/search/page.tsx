import Footer from "../components/Home/Footer";
import Spacer from "../components/Home/Spacer";
import Banner from "./Banner";
import BottomBanner from "./BottomBanner";
import DealsOffer from "./DealsOffer";
import FullSearchResults from "./FullSearchResults";
import Promotion from "./Promotion";
import SearchHeader from "./header";

export default function SearchPage() {
    return (
        <>
        <SearchHeader />
        <Promotion />
        <DealsOffer />
        <Banner />
        <FullSearchResults />
        <Spacer />
        <BottomBanner />
        <Spacer />
        <Footer />
        </>
    );
}