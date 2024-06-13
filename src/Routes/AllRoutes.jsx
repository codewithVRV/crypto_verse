import { lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";



const HomeLazy = lazy(() => import("../Pages/Home/Home"));
const CoinDetailsLazy = lazy(() => import("../Pages/CoinDetails/CoinDetails"));


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={(
                    <Suspense fallback={<h1 className="text-5xl mt-4 text-center">Data is loading Please Wait..</h1>}>
                        <HomeLazy />
                    </Suspense>
                )}/>
                <Route path="/coin/:id" element={(
                    <Suspense fallback={<h1 className="text-5xl mt-4 text-center">Data is loading Please Wait..</h1>}>
                        <CoinDetailsLazy />
                    </Suspense>
                )}/>
            </Routes>
        </>
    );
};

export default AllRoutes;