import { Route, Routes } from "react-router-dom";

import CoinDetails from "../Pages/CoinDetails/CoinDetails";
import Home from "../Pages/Home/Home";


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/coin/:id" element={<CoinDetails />}/>
            </Routes>
        </>
    );
};

export default AllRoutes;