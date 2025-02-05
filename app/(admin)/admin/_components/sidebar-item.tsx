"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Icon, { IconNames } from "@/components/ui/icon";

interface SidebarItemProps {
    icon: IconNames;
    label: string;
    href: string;
}

export const SidebarItem = ({ icon, label, href }: SidebarItemProps) => {
    const pathname = usePathname();

    const isActive =
    pathname === href || 
    (href !== "/admin" && pathname?.startsWith(`${href}/`)); // Match sub-paths only if not "/admin"


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
                <Icon
                    name={icon}
                    size={22}
                    className={cn("text-white", isActive && "text-[#F1B53E]")}
                />
                {label}
            </div>
        </Link>
    );
};
