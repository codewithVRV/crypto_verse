import { useState } from "react";

import Banner from "../../Component/Banner/Banner";
import CryptoTable from "../../Component/CryptoTable/CryptoTable";
import ReactCarousel from "../../Component/ReactCarousel/ReactCarousel";
import Search from "../../Component/Search/Search";

const Home = () => {
    const [searchText, setSearchText] = useState("")
    return (
        <>
            {/* Home page analysis */}
            <Banner />
            <ReactCarousel />
            <div className="text-5xl text-center font-semibold text-white my-4">
                Cryptocurrency Prices
            </div>
            <Search setSearchText={setSearchText}/>
            <CryptoTable id={searchText}/>
        </>
    )
}

export default Home;