import { Poppins, Roboto } from "next/font/google";
import "@/app/globals.css";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Eduhive",
    description: "Your digital hub for student records",
};


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


export default async function RootLayout({ children }:
    { children: React.ReactNode; }
) {

    return (
        <html className={`${poppins.variable} ${roboto.variable}`} lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )


}