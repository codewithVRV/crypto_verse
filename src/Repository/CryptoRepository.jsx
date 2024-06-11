// import axiosInstance from "../Config/axiosInstance"

import axios from "axios";





export const fetchCryptoList = async (appCurrency, page, flag = false) => {
    try {
        if(!flag) return;
        // const response = await axiosInstance.get(`/coins/markets?vs_currency=${appCurrency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`);
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${appCurrency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`);
        console.log(response.data)
        return {
            success: true,
            data: response.data.map((coin) => {
                return {
                    id: coin.id,
                    symbol: coin.symbol,
                    name: coin.name,
                    image: coin.image,
                    market_cap: coin.market_cap,
                    current_price: coin.current_price,
                    price_change_24h: coin.price_change_24h,
                }
            })
        }
    } catch(error) {
        console.log(error);
        return {
            success: false,
            data: []
        };
    }   
};