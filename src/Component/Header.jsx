import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { changeCurrency } from "../Redux/CurrencySlice";


const Header = () => {
    const {appCurrency} = useSelector((state) => state.currency);
    const dispatch = useDispatch();
    return (
        <>
            <nav className="bg-black p-5 flex justify-between sticky top-0 z-20">
                <Link to={"/"}>
                    <h1 className="text-xl hover:bg-gray-500 py-2 px-0 md:px-4 mx-4 md:mx-16 rounded-2xl md:text-5xl transition-all duration-700 text-yellow-500 font-bold">Crypto Verse</h1>
                </Link>
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
    );
};

export default Header;