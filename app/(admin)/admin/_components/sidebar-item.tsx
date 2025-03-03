"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    icon: React.ElementType; // Accepts a component instead of a string
    label: string;
    href: string;
}

export const SidebarItem = ({ icon: IconComponent, label, href }: SidebarItemProps) => {
    const pathname = usePathname();

    const isActive =
        pathname === href ||
        (href !== "/admin" && pathname?.startsWith(`${href}/`));

    return (
        <Link
            href={href}
            className={cn(
                "flex w-full items-center gap-x-2 text-white text-sm md:text-base font-medium transition-all hover:text-[#F1B53E] hover:bg-slate-300/20 pl-[30px]",
                isActive &&
                    "text-[#F1B53E] bg-sky-200/20 hover:bg-sky-200/20 hover:text-[#F1B53E]/70 border-[#F1B53E] border-l-4 md:border-l-6 rounded-md"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <IconComponent size={22} className={cn("text-white", isActive && "text-[#F1B53E]")} />
                {label}
            </div>
        </Link>
    );
};
