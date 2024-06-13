import BannerImage from "../../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="w-full h-[45rem] relative">
            <img 
                className='h-1/2 w-full md:h-full'
                src={BannerImage}
            />
            <div className='absolute top-10 transition-all duration-700 left-4 md:left-10 right-0 mt-16 mx-4 md:mx-12 w-[20rem]'>
                <div className='flex flex-col gap-4'>
                    <div className='font-semibold text-2xl md:text-5xl text-red-500'>
                        Crypto Tracker
                    </div>
                    <div className='font-normal w-1/2 md:w-full md:font-semibold text-xl text-white text-left md:text-center'>
                        Get all the info regarding crypto currencies.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
