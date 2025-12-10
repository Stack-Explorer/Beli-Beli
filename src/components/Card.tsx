import { Icon } from "@iconify/react";

const Card = () => {

    const image = "https://static.cilory.com/579418-thickbox_default/grey-zip-closure-classic-bomber-jacket.jpg";

    // const cardData = [
    //     {id : 1,src : ,itemName : ,discountedPrice : , originalPrice : ,rating : }
    // ]

    return (
        <>
            <section className="ml-10 relative rounded-2xl mt-5 h-85 w-70 cursor-pointer">
                <div className="rounded-full  h-9 w-9 flex justify-center items-center absolute top-2 right-2 bg-gray-200">
                    <Icon icon="mdi:heart-outline" className=" text-black" width="25" height="25" />
                </div>

                <img className="flex bg-gray-100 object-contain justify-center w-full items-center h-60/100" src={image} alt="" />
                <h2 className="text-[16px] m-3 font-bold text-gray-800 font-roboto">EliteShield Performance Men's Jackets</h2>
                <h3 className="ml-3.25 text-[18px] font-roboto font-extrabold">Rp255.000 <span className="text-sm line-through ml-2 text-red-400">Rp525.000</span></h3>

                <div className="flex justify-center border border-gray-200 border-b-0 border-x-0 items-center">
                    <div className="bg-gray-300 rounded-lg w-40 h-5 mt-2">
                        <div className="-ml-0.5  bg-gray-900 rounded-lg w-6/10 h-5/6"></div>
                    </div>
                    <span className="text-sm ml-1 mt-2 font-bold font-roboto text-gray-600">6/10 Scale</span>
                </div>
            </section>
        </>
    )
}

export default Card