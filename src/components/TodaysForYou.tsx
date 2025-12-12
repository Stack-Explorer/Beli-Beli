import { todayForYouData } from "../data/cardData"
import Card from "./Card"

const buttons = ["Best Seller", "Keep Stylish", "Special Discount", "Official Store", "Coveted Product"]

const TodaysForYou = () => {
  return (
    <section className="bg-white w-full mt-5 min-h-[450px]">

      {/**Today's for You section */}
      <header className="flex flex-wrap max-xl:justify-center justify-between mx-[3%] mt-5 p-3 items-center">
        <h1 className="text-3xl max-input:text-2xl text-gray-950 font-roboto font-semibold">Today's For You!</h1>

        <nav className="flex max-xl:w-full max-sm:gap-1.5 max-xl:mt-6 justify-evenly w-[72%] gap-3">
          {buttons?.map((button) => (
            <button key={button} className="rounded-md cursor-pointer max-sm:px-1 max-sm:py-0.5 max-input:px-2 max-input:py-1 flex justify-center items-center shrink-0 border border-slate-500 px-5 py-2">
              <span className="font-semibold max-iphone:text-[8px] max-input:text-[11px] text-base font-roboto">{button}</span>
            </button>
          ))}
        </nav>

        {/* <Card src={data.image} itemName={data.itemName} rating={data.rating} unitsSold={data.unitsSold} discountedPrice={data.discountedPrice}  originalPrice={data.originalPrice} /> */}

      </header>

      <div className=" grid mt-6 gap-5 justify-items-center overflow-hidden xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 iphone:grid-cols-2">
        {todayForYouData?.map((cardData) => (
          <div key={cardData.id}>
            <Card
              src={cardData.src}
              originalPrice={cardData.originalPrice}
              discountedPrice={cardData.discountedPrice}
              itemName={cardData.itemName}
              rating={cardData.rating}
              unitsSold={cardData.unitsSold} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default TodaysForYou