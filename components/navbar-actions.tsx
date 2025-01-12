import React from "react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./ui/navigation-menu";

const productcomponents: { title: string; href: string }[] = [
    {
        title: "Features",
        href: "/",
    },
    {
        title: "Solutions",
        href: "/",
    },
    {
        title: "Integrations",
        href: "/",
    },
    {
        title: "Enterprise",
        href: "/",
    },
];

const resourcecomponents: { title: string; href: string }[] = [
    {
        title: "Partners",
        href: "/",
    },
    {
        title: "Community",
        href: "/",
    },
    {
        title: "Developers",
        href: "/",
    },
    {
        title: "App",
        href: "/",
    },
    {
        title: "Blog",
        href: "/",
    },
];

const supportcomponents: { title: string; href: string }[] = [
    {
        title: "About us",
        href: "/",
    },
    {
        title: "Watch the Demo",
        href: "/",
    },
    {
        title: "Media",
        href: "/",
    },
    {
        title: "News",
        href: "/",
    },
];

const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

const NavbarActions = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-medium text-lg text-[#292929] ">Product</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-1 w-[200px] list-none ">
                                {productcomponents.map((productcomponent) => (
                                    <ListItem
                                        key={productcomponent.title}
                                        title={productcomponent.title}
                                        href={productcomponent.href}
                                    />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-medium text-lg text-[#292929] ">Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-1 w-[200px] list-none ">
                                {resourcecomponents.map((resourcecomponent) => (
                                    <ListItem
                                        key={resourcecomponent.title}
                                        title={resourcecomponent.title}
                                        href={resourcecomponent.href}
                                    />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-medium text-lg text-[#292929] ">Support</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-1 w-[200px] list-none ">
                                {supportcomponents.map((supportcomponent) => (
                                    <ListItem
                                        key={supportcomponent.title}
                                        title={supportcomponent.title}
                                        href={supportcomponent.href}
                                    />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};

export default NavbarActions;
