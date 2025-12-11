import { Icon } from "@iconify/react";
import type React from "react";

interface card {
    src: string;
    itemName: string;
    discountedPrice: number;
    originalPrice: number;
    scale?: number;
    rating?: number;
    unitsSold?: number
}


const Card: React.FC<card> = ({ src, itemName, discountedPrice, originalPrice, scale, rating, unitsSold }) => {

    // const flashSale = [
    //     {id : 1,src : ,itemName : ,discountedPrice : , originalPrice : ,rating : }
    // ]

    return (
        <>
            <section className="overflow-auto bg-white lg:w-70 relative rounded-2xl h-85 w-auto cursor-pointer">
                <div className="rounded-full  h-9 w-9 flex justify-center items-center absolute top-2 right-2 bg-gray-200">
                    <Icon icon="mdi:heart-outline" className=" text-black" width="25" height="25" />
                </div>

                <img className="flex bg-gray-100 object-contain justify-center w-full items-center h-60/100" src={src} alt="" />

                <div className="flex bg-white flex-col relative h-27/100">
                    <h2 className="text-[16px] m-3 font-bold text-gray-950 font-roboto">{itemName}</h2>
                    {rating !== undefined &&
                        <article className="flex justify-start gap-1 items-center">
                            <Icon className="ml-3.25" icon="material-symbols:star-outline-rounded" width="24" height="24" />
                            <p className="font-semibold font-roboto text-[14px]">{rating}</p>
                            <p className="size-1 bg-gray-500 rounded-full"></p>
                            <h1 className="text-gray-600 font-roboto font-medium text-[14px]">{unitsSold} Sold</h1>
                        </article>
                    }

                    {scale && <h3 className="ml-3.25 absolute bottom-1 text-[18px] font-roboto font-extrabold">Rp{discountedPrice} <span className="text-sm line-through ml-2 text-red-400">Rp{originalPrice}</span></h3>}
                </div>

                {scale !== undefined && <div className="flex justify-center border border-gray-200 border-b-0 border-x-0 items-center">
                    <div className="bg-gray-300 rounded-lg w-40 h-5 mt-2">
                        <div className={`-ml-0.5 bg-gray-900 rounded-lg h-5/6`} style={{ width: `${(scale / 10) * 100}%` }}></div>
                    </div>
                    <span className="text-sm ml-1 mt-2 font-bold font-roboto text-gray-600">{scale}/10 Scale</span>
                </div>}

                {rating && <h3 className="ml-3.25 absolute bottom-1 text-[18px] font-roboto font-extrabold">Rp253.000 <span className="text-sm line-through ml-2 text-red-400">Rp 370.000</span></h3>}
            </section>
        </>
    )
}

export default Card