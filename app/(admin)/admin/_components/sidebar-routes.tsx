"use client"

// import { useParams } from "next/navigation";
import Image from "next/image"

import Lucide from 'lucide-react';
import { SidebarItem } from "./sidebar-item";
import { RxExit } from "react-icons/rx";


import LogoWhite from "@/public/Images/logo-white.png"


export const SidebarRoutes = () => {

    // const params = useParams()
    // const id = `${params.storeId}`

    const Routes = [
        {
            icon: "House",
            label: "Dashboard",
            href: `/admin`,
        },
        {
            icon: "BookText",
            label: "New Record ",
            href: `/admin/new`,
        },
        {
            icon: "Book",
            label: "Existing Record",
            href: `/students/assignment`,
        },
        {
            icon: "GraduationCap",
            label: "List of Students",
            href: `/students/analytics`,
        },
    ]

    const routes = Routes
    return (
        <div className="relative flex flex-col w-full h-[100vh] gap-y-[30px] ">
            <div className=' pl-4 md:pl-[30px] mt-[35px] mb-[15px]'>
                <Image
                    src={LogoWhite}
                    width={135}
                    height={45}
                    alt="logo"
                    className="flex"

                />

            </div>
            <div className="flex flex-col gap-y-2">
                {routes.map((route) => (
                    <SidebarItem
                        key={route.href}
                        icon={route.icon as keyof typeof Lucide.icons}
                        label={route.label}
                        href={route.href}

                    />
                ))}
            </div>

            <button className='flex ml-5 md:ml-[30px] items-center absolute gap-x-3 bottom-[50px] text-white'>
                <RxExit size={20} />
                <p className="font-semibold text-sm md:text-base">Log out</p>
            </button>
        </div>
    )
}