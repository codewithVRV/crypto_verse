import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useSelector } from "react-redux";

import { fetchCryptoList } from "../../Repository/CryptoRepository";



const ReactCarousel = () => {

    const {appCurrency} = useSelector((state) => state.currency);
    const [coins, setCoins] = useState([])
    const [count, setcount] = useState(0)


    const loadCoins = async () => {
        const response = await fetchCryptoList(appCurrency, 1, true)
        console.log(response.data)
        setCoins(response.data)
    }

    const items = coins.map((coin) => {
        return (
            <div className="felx gap-2" key={coin.id}>
                <img className="h-28 w-28" src={coin.image} alt="Coin"/>
                <div className="mt-1 font-semibold">{coin.name}
                    &nbsp; &nbsp; 
                <span className="text-red-400">({coin.symbol})</span>

                </div>
            </div>
        )
    })

    useEffect(() => {
        loadCoins()
    }, [])
    const responsive = {
        0: {
            items: 2,
        }, 
        512:{
            items: 4
        }
    }

    return (
        <>
            <AliceCarousel  
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                autoPlay
                items={items}


            />
        </>
    )
}

export default ReactCarousel;