"use client";

import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import { RxExit } from "react-icons/rx";

import { House, BookText, Book, GraduationCap } from "lucide-react";

import LogoWhite from "@/public/Images/logo-white.png";
import Link from "next/link";

export const SidebarRoutes = () => {
    const routes = [
        {
            icon: House, // Directly passing the Lucide React component
            label: "Dashboard",
            href: `/admin`,
        },
        {
            icon: BookText,
            label: "New Record",
            href: `/admin/new`,
        },
        {
            icon: Book,
            label: "Existing Record",
            href: `/admin/existing-record`,
        },
        {
            icon: GraduationCap,
            label: "List of Students",
            href: `/admin/student-list`,
        },
    ];

    return (
        <div className="relative flex flex-col w-full h-[100vh] gap-y-[30px]">
            <div className="pl-4 md:pl-[50px] mt-[35px] mb-[15px]">
                <Link href="/">
                    <Image
                        src={LogoWhite}
                        width={135}
                        height={45}
                        alt="logo"
                        className="flex"
                    />
                </Link>
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

            <Link href="/">
                <div className="flex ml-5 md:ml-[30px] items-center absolute gap-x-3 bottom-[50px] text-white">
                    <RxExit size={20} />
                    <p className="font-semibold text-sm md:text-base">Log out</p>
                </div>
            </Link>
        </div>
    );
};
