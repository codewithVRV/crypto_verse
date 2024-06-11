import { useDispatch, useSelector } from "react-redux";

import { changeCurrency } from "../Redux/CurrencySlice";


const Header = () => {
    const {appCurrency} = useSelector((state) => state.currency)
    const dispatch = useDispatch()
    return (
        <>
            <nav className="bg-black p-3 flex justify-around">
                <div>
                    <h1 className="text-xl md:text-3xl font-medium text-yellow-500">Crypto Verse</h1>
                </div>
                <div className="flex gap-4">
                    <button className="bg-red-400 text-white py-1 px-2 md:py-2 md:px-4 font-medium rounded-lg hover:scale-x-95 md:hover:scale-x-125"
                        onClick={() => dispatch(changeCurrency({appCurrency: "INR"}))}
                    >INR</button>
                    <button className="bg-red-400 text-white py-1 px-2 md:py-2 md:px-4 font-medium rounded-lg hover:scale-x-95 md:hover:scale-x-125"
                        onClick={() => dispatch(changeCurrency({appCurrency: "USD"}))}
                    >USD</button>
                </div>
            </nav>

        </>
    )
}

export default Header;