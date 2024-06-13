import axios from 'axios';
import { ArcElement, CategoryScale,  Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import {  Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCryptoById } from '../../Repository/CryptoRepository';

ChartJS.register(ArcElement, Legend, Title, Tooltip, CategoryScale, LinearScale, PointElement, LineElement);

const CoinDetails = () => {
    const { id } = useParams();
    const { appCurrency } = useSelector((state) => state.currency);
    const [coinData, setCoinData] = useState({});
    const [historicData, setHistoricData] = useState([]);
    const [days, setDays] = useState(365);

    useEffect(() => {
        const fetchHistoricData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
                    params: { vs_currency: appCurrency, days: days }
                });
                setHistoricData(response.data.prices);
            } catch (error) {
                console.error('Error fetching historic data:', error);
            }
        };

        const fetchSingleCoinData = async () => {
            try {
                const response = await fetchCryptoById(id, appCurrency, true);
                setCoinData(response.data);
            } catch (error) {
                console.error('Error fetching single coin data:', error);
            }
        };

        fetchSingleCoinData();
        fetchHistoricData();
    }, [id, appCurrency, days]);

    const lineData = historicData.map((coin) => {
        let date = new Date(coin[0]);
        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
        return days === 1 ? time : date.toLocaleDateString();
    });

    const lineDataSet = historicData.map((coin) => coin[1]);

    const lineChart = {
        labels: lineData,
        datasets: [
            {
                data: lineDataSet,
                borderColor: '#EEBC1D',
                backgroundColor: 'rgba(238, 188, 29, 0.2)',
                pointBorderColor: '#EEBC1D',
                pointBackgroundColor: '#EEBC1D',
                pointHoverBorderColor: '#FF9900',
                pointHoverBackgroundColor: '#FF9900',
                borderWidth: 2,
                pointRadius: 3,
                pointHoverRadius: 5,
                label: `Price (Past ${days} Days) in ${appCurrency}`
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio:false,
        elements:{
            point: {
                radius:1
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {

                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    color: '#333',

                }
            },
            title: {
                display: true,
                text: `Price Trend for ${coinData.name}`,
                font: {
                    size: 20,
                    weight: 'bold'
                },
                color: '#333'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: {
                    size: 16
                },
                bodyFont: {
                    size: 14
                }
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date',
                    color: '#911',
                    font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2
                    },
                    padding: { top: 20, left: 0, right: 0, bottom: 0 }
                },
                ticks: {
                    color: '#333'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Price',
                    color: '#191',
                    font: {
                        family: 'Comic Sans MS',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: { top: 30, left: 0, right: 0, bottom: 0 }
                },
                ticks: {
                    color: '#333',
                    // Include a dollar sign in the ticks
                    callback: function (value) {
                        return '$' + value;
                    }
                }
            }
        }
    };


    return (
        <div className="flex lg:flex-row flex-col mt-12 gap-16">
            <div className="p-5 flex flex-col">
                <div>
                    {coinData.secondImage && (
                        <img className="h-40 mx-28 mt-4" src={coinData.secondImage} alt="Coin Image" />
                    )}
                </div>
                <div className="text-5xl text-center mt-4 font-semibold">
                    {coinData.name}
                </div>
                <p className="w-96 mt-4 mb-4 font-semibold text-center">
                    {parse(coinData.description + "")}
                </p>
                <div className="text-2xl font-bold">Rank : {coinData.rank}</div>
                <div className="text-2xl font-bold">Current Price : {coinData.current_price} {appCurrency === "INR" ? "₹" : "$"}</div>
                <div className="text-2xl font-bold">Market Cap : {coinData.market_cap} {appCurrency === "INR" ? "₹" : "$"}</div>
            </div>

            {/* Chart */}
            <div>
                {historicData.length === 0 ? (
                    <h1 className="text-5xl mt-2 text-center">Loading Chart...</h1>
                ) : (
                    <div>
                        <div className=" w-[25rem]  lg:w-[45rem] h-[20rem] lg:h-[30rem] mt-12">
                            <Line data={lineChart} options={options} height={400} />
                            <div className='flex gap-4 justify-center mt-4'>
                                <button onClick={() => setDays(1)} className="bg-yellow-500  mb-8 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                                    24 Hours
                                </button>
                                <button onClick={() => setDays(30)}  className="bg-yellow-500  mb-8 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                                    30 Days
                                </button>
                                <button  onClick={() => setDays(90)}  className="bg-yellow-500  mb-8 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                                    3 Months
                                </button>
                                <button  onClick={() => setDays(365)}  className="bg-yellow-500  mb-8 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                                    1 Year
                                </button>

                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default CoinDetails;
