import Banner from "./Banner";
import DealsOffer from "./DealsOffer";
import Promotion from "./Promotion";
import SearchHeader from "./header";

export default function SearchPage() {
    return (
        <>
        <SearchHeader />
        <Promotion />
        <DealsOffer />
        <Banner />
        </>
    );
}