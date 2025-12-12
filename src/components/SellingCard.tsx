import { Icon } from "@iconify/react";
import type React from "react";

export interface product {
    img: string;
    price: number;
}

interface SellingCardProps {
    iconName: string;
    title: string;
    quote: string;
    products: product[]
}

export const SellingCard: React.FC<SellingCardProps> = ({ iconName,  title, quote, products }) => {
    return (
        <div className="h-53 flex flex-col items-center border border-slate-200 max-lg:ml-0 max-lg:mb-4 ml-5 mt-5 rounded-xl max-lg:w-85 w-auto">

            <section className="w-full mt-4 flex justify-start items-center">

                <div className="flex ml-4 cursor-pointer justify-center rounded-full items-center relative bg-gray-300 w-18 h-18">
                    <Icon className="bg-gray-200 h-6 w-6 rounded-full" icon={iconName} />
                    <Icon icon="lucide:crown" className="absolute bg-blue-400 text-white rounded-full right-1 bottom-1" width="24" height="24" />
                </div>

                <div className="right-section ml-6">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <p className="font-medium text-gray-600">"{quote}"</p>
                </div>

            </section>

            <div className="w-full h-auto flex justify-evenly mt-5 items-center">
                {products.map((item, index) => (
                    <div className="w-auto flex flex-col items-center rounded-xl cursor-pointer h-auto" key={index}>
                        <img className="h-18 bg-gray-300 rounded-xl w-18 object-contain" src={item.img}
                            alt="" />
                        <h1 className="text-base font-semibold font-roboto text-gray-900 my-1.5">Rp{item.price}.000</h1>
                    </div>
                ))}

            </div>

        </div>
    )
}