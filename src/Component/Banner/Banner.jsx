import BannerImage from "../../assets/banner1.webp"

const Banner = () => {
    return (
        <div className="w-full h-[25rem] relative">
            <img 
                className='w-full h-full'
                src={BannerImage}
            />
            <div className='absolute top-10 left-0 right-0 mx-auto w-[20rem]'>
                <div className='flex flex-col gap-4'>
                    <div className='font-semibold text-5xl text-red-500'>
                        Crypto Tracker
                    </div>
                    <div className='font-semibold text-xl text-white text-center'>
                        Get all info regarding crypto currencies
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;