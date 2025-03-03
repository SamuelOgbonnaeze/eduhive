"use client";

import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import { RxExit } from "react-icons/rx";

// Import Lucide icons correctly
import { House, GraduationCap, ClipboardList, BarChart2 } from "lucide-react";

import LogoWhite from "@/public/Images/logo-white.png";

export const SidebarRoutes = () => {
    const routes = [
        {
            icon: House, // Directly passing Lucide React components
            label: "Home",
            href: `/students`,
        },
        {
            icon: GraduationCap,
            label: "Grade",
            href: `/students/grade`,
        },
        {
            icon: ClipboardList,
            label: "Assignment",
            href: `/students/assignment`,
        },
        {
            icon: BarChart2, // Corrected ChartNoAxesCombined (no such icon in Lucide)
            label: "Analytics",
            href: `/students/analytics`,
        },
    ];

    return (
        <div className="relative flex flex-col w-full h-[100vh] gap-y-[30px]">
            <div className="pl-4 md:pl-[50px] mt-[35px] mb-[15px]">
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
                        icon={route.icon} // Passing the actual component
                        label={route.label}
                        href={route.href}
                    />
                ))}
            </div>

            <button className="flex ml-5 md:ml-[50px] items-center absolute gap-x-3 bottom-[50px] text-white">
                <RxExit size={20} />
                <p className="font-semibold text-sm md:text-base">Log out</p>
            </button>
        </div>
    );
};
