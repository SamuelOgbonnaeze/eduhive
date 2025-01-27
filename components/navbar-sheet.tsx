"use client"


import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

import { Dialog } from '@headlessui/react'
import IconButton from "./ui/icon-button";

const NavbarSheet = () => {
    const [open, setOpen] = useState(false)

    const onOpen = () => {
        console.log("true ")
        setOpen(true)
    };
    const onClose = () => setOpen(false)

    return (
        <div  className="">
            <div onClick={onOpen} className="flex items-center gap-x-2 mr-8 lg:hidden text-[#DF3B11]">
                <Menu size={20} />
            </div>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden " onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black bg-opacity-25 " />

                {/* Dialog Position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-[40%] md:max-w-[200px] flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">

                        {/* Close Button */}
                        <div className="flex items-center justify-end px-4 text-[#DF3B11]">
                            <IconButton className="border-[#DF3B11]" icon={<X size={15} onClick={onClose} />} />
                        </div>

                        {/* Mobile Navbar sections */}
                        <div className=' flex top-[0px] h-screen overflow-y-auto text-[#DF3B11] ' >
                            <ul className='flex flex-col w-full gap-y-6 items-center mt-40 text-center font-inter font-normal text-[18px] leading-[32px] p-2'>
                                <li className=' p-2'><Link href='/'> Home </Link></li>
                                <li className=' p-2'><Link href='/lesson'> Lessons </Link></li>
                                <li className=' p-2'><Link href='/shop'> Store </Link></li>
                                <li>
                                    jciuduh
                                </li>
                            </ul>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>

    );
}

export default NavbarSheet;