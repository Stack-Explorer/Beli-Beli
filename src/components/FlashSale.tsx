import { Icon } from "@iconify/react"
import Card from "./Card"
import { flashSale } from "../data/cardData"

const FlashSale = () => {
    return (
        <>
            <div className="bg-gray-100 max-lg:overflow-hidden min-h-[550px]">
                <section className="w-full mt-5 bg-gray-100">

                    <div className="flex flex-wrap relative w-[95%] max-sm:justify-center  p-5 items-center">
                        <p className="bg-gray-700 cursor-pointer flex rounded-full justify-center items-center text-white max-md:size-7 h-12 w-12">
                            <Icon className="w-6 h-6 max-md:size-4" icon="mage:electricity" style={{ color: "#f3ecec" }} />
                        </p>
                        <h1 className="ml-3 text-gray-800 max-md:text-[16px] font-roboto font-semibold text-2xl">Flash Sale</h1>

                        <p className="max-md:text-[15px] max-md:h-7 max-md:w-7 h-10 w-10 ml-[1.5%] font-bold bg-red-500 flex justify-center items-center rounded-full text-white">08</p> <span className="ml-3 text-gray-600 font-bold text-xl">:</span>
                        <p className="max-md:text-[15px] max-md:h-7 max-md:w-7 h-10 w-10 ml-[1.5%] font-bold bg-red-500 flex justify-center items-center rounded-full text-white">17</p> <span className="ml-3 text-gray-600 font-bold text-xl">:</span>
                        <p className="max-md:text-[15px] max-md:h-7 max-md:w-7 h-10 w-10 ml-[1.5%] font-bold bg-red-500 flex justify-center items-center rounded-full text-white">56</p> <span className="ml-3"></span>

                        <div className="ml-auto  max-iphone:m-3 sm:absolute flex justify-center items-center sm:right-[50px]">

                            <div className="gap-4 max-iphone:mt-5 flex">
                                <button className="p-2 border cursor-pointer border-gray-700 bg-gray-100 rounded-lg">
                                    <Icon icon="lucide:move-left" className="size-6" />
                                </button>


                                <button className="max-sm:px-5 px-7 py-2 border cursor-pointer border-gray-700 bg-gray-800 text-white rounded-lg">
                                    <Icon icon="lucide:move-right" width="24" height="24" />
                                </button>
                            </div>

                        </div>

                    </div>

                </section>

                <div className="card-section lg:flex lg:ml-5 lg:mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                    {flashSale?.map((card) => (
                        <div key={card.id} className="mt-2">
                            <Card src={card.src} itemName={card.itemName} discountedPrice={card.discountedPrice} originalPrice={card.originalPrice} scale={card.scale} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default FlashSale