import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCryptoById } from "../../Repository/CryptoRepository";

const CoinDetails = () => {
    const {id} = useParams();
    const {appCurrency} = useSelector((state) => state.currency)
    const [coinData, setCoinData] = useState(
        {
            current_price:5630373,
            description: "bitcoin is the best coin bitcoin is the best coinbitcoin is the best coinbitcoin is the best coinbitcoin is the best coin",
            secondImage:
            "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            market_cap: 3249832,
            name: "Bitcoin",
            rank:1
    }

    )


    async function fetchSingleCoinData () {
        let response = await fetchCryptoById(id, appCurrency, true)
        setCoinData(response.data)
        console.log("response for single details", response.data)
    }

    useEffect(() => {
        fetchSingleCoinData()
    }, [])

    return (
        <div className="bg-green-500 flex">
            <div className="bg-red-400 p-5 flex flex-col">
            <div>
                <img className="h-40 mx-28 mt-4" src={coinData.secondImage} alt="Coin Image" />
            </div>
            <div className="text-5xl text-center mt-4 font-semibold">
                {coinData.name}
            </div>
            <p className=" w-96 mt-4 font-semibold text-center">
                {parse(coinData.description)}
            </p>
            <div className="text-2xl font-bold">Rank : {coinData.rank}</div>
            <div className="text-2xl font-bold">Current Price : {coinData.current_price}</div>
            <div className="text-2xl font-bold">Market Cap : {coinData.market_cap}</div>
        </div>
        </div>
    )
}

export default CoinDetails;