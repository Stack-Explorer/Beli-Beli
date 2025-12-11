import { sellingCardData } from "../data/sellingData"
import { SellingCard } from "./SellingCard"

export default function BestSellingStore() {
    return (
        <>
            <section className="h-auto mt-20">

                <header className="mt-5 w-full flex justify-center">
                    <h1 className="text-3xl font-roboto text-gray-900 font-semibold">Best Selling Store</h1>
                </header>

                <div className="w-full mt-5 flex justify-evenly items-center">
                    <aside className="w-[20%] h-90 rounded-lg ">
                        <img className="object-fill cursor-pointer h-full w-full" src="/footerimg.jpg" alt="" />
                    </aside>

                    <div className="w-[70%] gap-4 grid grid-cols-2">
                        {sellingCardData?.map((data) => (
                            <SellingCard iconName={data.iconName} title={data.title} quote={data.quote} products={data.products} />
                        ))}
                    </div>

                </div>

            </section>
        </>
    )
}
