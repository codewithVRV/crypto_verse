import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

import { fetchCryptoById, fetchCryptoList } from "../../Repository/CryptoRepository";

const CryptoTable = ({id}) => {

    const {appCurrency} = useSelector((state) => state.currency);
    const [page, setPage] = useState(1);

    const [coins, setCoins] = useState([
        {
            id: "bitcoin",
            symbol: "btc",
            name: "Bitcoin",
            image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            price_change_24h: 2.15,
            current_price: 3033763,
            market_cap: 59306241641610
        }
    ]);

    async function loadCryptos(appCurrency, page, id) {
        if(id) {
            const result = await fetchCryptoById(id, appCurrency, true);
            if(result.success) {
                setCoins([result.data]);
            }
           
        }
        else{
            let result = await   fetchCryptoList(appCurrency, page, true);
               setCoins(result?.data);
           
        }
    } 

    useEffect (() => {
        loadCryptos(appCurrency, page, id);
    }, [appCurrency, page, id]);
    return (
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-between">
                {/* header */}

                <div className="basis-[35%] md:basis-[25%]">
                    Coin
                </div>

                <div className="md:basis-[35%]">
                    Price in {appCurrency}
                </div>

                <div className="hidden md:block basis-[20%]">
                    24h Change
                </div>

                <div className="basis-[20%]">
                    Market Cap
                </div>

            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {
                    coins?.map((coin) => {
                        return (
                            <Link className="cursor-pointer" to={`coin/${coin.id}`} key={coin.id}>
                                <div  className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between ">
                                <div className="flex items-center justify-start gap-3 basis-[35%]">
                                    <div className="md:w-[5rem] w-[2rem] md:h[5rem] h[2rem]">
                                        <img src={coin.image} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xl md:text-3xl">{coin.name}</div>
                                        <div className="text-xl font-light">{coin.symbol}</div>

                                    </div>
                                </div>
                                <div className="text-sm basis-[25%]">
                                    {coin.current_price} {appCurrency === "INR" ? "₹" : "$"}
                                </div>
                                <div className="hidden md:block basis-[20%]">
                                    {coin.price_change_24h} {appCurrency === "INR" ? "₹" : "$"}
                                </div>
                                <div className="text-sm basis-[20%]">
                                    {coin.market_cap} {appCurrency === "INR" ? "₹" : "$"}
                                </div>
                            </div>
                            </Link>
                        );
                    })
                }
            </div>

            <div className="flex gap-4 justify-center items-center">
                <button onClick={() => {
                    setPage((page) => page-1);
                    window.scroll(0, 450);
                }} className="btn bg-slate-700  w-3/4 md:w-full text-white text-xl md:text-2xl" disabled={page == 1}>Prev</button>
                <button onClick={() => {
                    setPage((page) => page+1);
                    window.scroll(0, 450);
                }} className="btn bg-black w-3/4 md:w-full text-white text-xl md:text-2xl">Next</button>
            </div>
        </div>
    );
};

export default CryptoTable; 