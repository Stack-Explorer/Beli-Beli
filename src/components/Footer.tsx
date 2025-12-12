import { Icon } from "@iconify/react";
import { footerData } from "../data/footerData";

const icons = [
    "ic:baseline-facebook",
    "mdi:twitter",
    "iconoir:youtube-solid",
    "icon-park-solid:instagram"
]

const Footer = () => {
    return (
        <footer className="h-160 overflow-hidden mt-10 md:h-120 w-full">
            {/*Image*/}
            <div className="h-[32%] cursor-pointer bg-gray-200 
            bg-[url('https://thumbs.dreamstime.com/b/close-up-colorful-t-shirts-hangers-man-apparel-background-variety-colors-mens-gray-black-white-olive-green-blue-burgubdy-315916400.jpg')] 
            bg-cover
            flex items-center justify-center w-full">
                <h1 className="italic text-gray-100 max-sm:text-2xl lg:text-4xl font-semibold sm:text-3xl">"Let's Shop Beyond Boundaries"</h1>
            </div>

            <nav className="bottom-section flex h-[60%] bg-gray-800">

                <section className="left-section max-sm:w-[37%] w-[33%] h-full flex items-center justify-center">

                    <div className="flex h-[60%] max-sm:h-[40%] flex-col justify-between">

                        <div className="flex flex-col gap-5">
                            <h1 className="font-roboto font-semibold text-gray-100 max-input:text-xl text-2xl">BeliBeli.com</h1>
                            <h3 className="text-xl text-gray-100 font-roboto max-iphone:text-[8px] iphone:text-[11px] sm:text-[14px]">"Let's Shop Beyond Boundaries"</h3>
                        </div>

                        <div className="flex mt-2 items-start justify-between">
                            {icons.map((iconName) => (
                                <Icon className="cursor-pointer max-iphone:size-3 iphone:size-4 sm:size-7 text-gray-600" icon={`${iconName}`} />
                            ))}
                        </div>
                    </div>

                </section>

                <div className="right-section max-sm:ml-5 flex flex-wrap justify-evenly max-md:grid-cols-3 items-center w-[70%]">
                    <div className="max-md:grid flex max-md:grid-cols-2 max-md:h-auto h-[75%] gap-7 lg:gap-15">
                        {footerData.map((colData) => (
                            <nav className="flex shrink-0 w-auto flex-col gap-3">
                                <h1 className="text-gray-600 font-roboto font-semibold max-lg:text-[15px] text-2xl">{colData.h1}</h1>
                                {colData.h3.map((h3Item) => (
                                    <h3 className="cursor-pointer max-sm:text-[10px] sm:text-[13px] text-gray-100 lg:text-[15px] font-roboto">{h3Item}</h3>
                                ))}

                            </nav>
                        ))}
                    </div>
                </div>
            </nav>

            <div className="w-full border-t border-slate-100 justify-center items-center flex h-[8%] bg-gray-800">
                <p className="font-medium text-[13px] text-gray-100">© 2001 - 2003,BeliBeli.com</p>
            </div>
        </footer>
    )
}

export default Footer;