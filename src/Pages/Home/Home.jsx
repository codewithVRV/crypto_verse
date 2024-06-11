import Banner from "../../Component/Banner/Banner";
import CryptoTable from "../../Component/CryptoTable/CryptoTable";
import Search from "../../Component/Search/Search";

const Home = () => {
    return (
        <>
            {/* Home page analysis */}
            <Banner />
            <div className="text-5xl text-center font-semibold text-white my-4">
                Cryptocurrency Prices
            </div>
            <Search />
            <CryptoTable />
        </>
    )
}

export default Home;