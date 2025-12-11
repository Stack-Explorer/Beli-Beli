import { Icon } from "@iconify/react";
import { useState } from "react";

const Header = () => {

    const headerOptions = [
        "Mitra Beli Beli",
        "About Beli Beli",
        "Beli Beli Care",
        "Promo",
    ]

    const AuthOptions = [
        "Sign Up",
        "Login"
    ]

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
                <header className="w-full relative border-x-0 flex items-center border-collapse -mt-1 p-3 border border-gray-400">

                    <a className="flex ml-8 max-iphone:ml-4 items-center cursor-pointer">
                        <Icon icon="cil:mobile" className="mr-1 max-iphone:w-4 max-iphone:h-4 text-gray-400 w-6 h-6" />
                        <p className="text-sm max-iphone:text-[11px] md:text-[13px] lg:text-[16px] font-roboto text-gray-400">Download BeliBeli App</p>
                    </a>

                    <div className="absolute items-center max-md:hidden flex space-x-3 right-3">
                        {headerOptions?.map((heading) => (
                            <a key={heading} className="cursor-pointer md:text-[13px] lg:text-[16px] font-roboto text-gray-400">{heading}</a>
                        ))}
                        {AuthOptions?.map((heading) => (
                            <>
                                <p className="text-gray-400">|</p>
                                <a className="cursor-pointer  md:text-[13px] lg:text-[16px] font-roboto text-gray-900">{heading}</a>
                            </>
                        ))}
                    </div>

                    <button onClick={() => setIsModalOpen(true)} className="md:hidden cursor-pointer absolute right-5">
                        <Icon icon="ci:hamburger-md" width="24" height="24" />
                    </button>

                    {isModalOpen &&
                        <div
                            className="fixed inset-0 z-40  bg-opacity-50"
                            onClick={() => setIsModalOpen(false)}
                        >

                            <div
                                className="w-[3/8] md:hidden bg-white justify-between items-center flex *:font-roboto flex-col gap-2 p-1 border border-gray-400 absolute right-0 top-0 border-t-0 h-[220px] z-50"
                                onClick={(e) => e.stopPropagation()}
                            >

                                <button onClick={() => setIsModalOpen(false)}>
                                    <Icon icon="lucide:circle-x" className="absolute max-iphone:h-4 max-iphone:w-4 h-5 w-5 text-gray-600 right-2 top-0" />
                                </button>

                                {headerOptions?.map((heading) => (
                                    <a key={heading} className="cursor-pointer max-iphone:text-[13px] text-gray-400">{heading}</a>
                                ))}
                                {AuthOptions?.map((heading) => (
                                    <a key={heading} className="cursor-pointer max-iphone:text-[13px] text-gray-800">{heading}</a>
                                ))}
                            </div>
                        </div>
                    }


                </header>

                <section className="border relative border-x-0 w-full flex just-evenly flex-wrap border-gray-400 p-4">

                    <nav className="flex ml-2 mr-2 justify-center items-center w-2.5/9 cursor-pointer">
                        <img className="h-5 w-5 object-contain" src="/logo.PNG" alt="Logo" />
                        <h2 className="font-roboto text-gray-800 font-semibold text-2xl ml-3">BeliBeli.com</h2>
                    </nav>

                    <div className="w-5/9 xl:w-6/9 max-input:w-full max-input:mt-3 ml-[4%] flex items-center justify-center  rounded-lg border border-gray-400">

                        <button className="flex max-input:p-1 p-2 cursor-pointer justify-center max-iphone:text-[12px] shrink-0 items-center font-roboto text-gray-500">All Category <Icon icon="mdi:menu-down" width="24" height="24" /></button>

                        <div className="border border-gray-400 border-y-0 border-r-0 flex justify-center items-center w-full">
                            <Icon icon="material-symbols-light:search-rounded" className="ml-2 text-gray-400" width="30" height="30" />
                            <input type="text" className="w-full  max-iphone:text-[11px] ml-2 outline-0" placeholder="Search products or brands here..." />
                        </div>
                    </div>

                    <nav className="flex  mt-2 absolute max-input:right-4 right-5 ml-auto *:text-gray-400 gap-8 w-1/7 justify-center items-center">
                        <Icon icon="ri:shopping-bag-fill" className="cursor-pointer" width="24" height="24" />
                        <Icon icon="mi:notification" className="cursor-pointer" width="24" height="24" />
                    </nav>

                </section>
        </>
    )
}

export default Header