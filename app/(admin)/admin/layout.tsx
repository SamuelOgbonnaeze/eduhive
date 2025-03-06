import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "@/app/globals.css";
import { SidebarRoutes } from "./_components/sidebar-routes";




const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Your digital hub for student records",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning className={`${poppins.variable} ${roboto.variable}`} lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body>
                <div className="w-full h-[100vh] flex">
                    <div className="hidden md:flex md:w-[200px] lg:w-[250px]  h-full border-r border-black bg-[#0F52BA] overflow-y-auto sticky top-0">
                        <div className="flex flex-col w-full">
                            <SidebarRoutes />
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
