import Image from "next/image";

import Logo from "@/public/Images/logo-white.png"
import { GrGoogle, GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {

    const currentYear = () => {
        const now = new Date();
        return now.getFullYear();
    }

    return (
        <div className="bg-[#0F52BA] text-white px-[100px] py-[80px]">

            <div className="flex  justify-between mb-[40px] ">
                <div className="flex flex-col">
                    <Image
                        src={Logo}
                        width={125}
                        height={42}
                        alt="Logo"
                    />
                    <div className="flex flex-col gap-y-4 mt-6">
                        <p className="w-[250px] text-sm tracking-[0.25px] font-normal ">Generate outside the box thinking with the possibility to target the low.</p>
                        <div className="text-[#F1B53E] flex items-center gap-x-6">
                            <GrInstagram size={24} />
                            <FaFacebook size={24} />
                            <GrGoogle size={24} />
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-4 gap-x-[100px] ">
                    <div className="flex flex-col text-left gap-y-6">
                        {/* section header */}
                        <p className="font-medium text-lg tracking-[0.25px] ">Product </p>
                        <div className="flex flex-col gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
                            <p>Features</p>
                            <p>Solutions</p>
                            <p>Integrations</p>
                            <p>Enterprise</p>
                            <p>Solutions</p>
                        </div>
                    </div>

                    <div className="flex flex-col text-left gap-y-6">
                        {/* section header */}
                        <p className="font-medium text-lg tracking-[0.25px] ">Resources </p>
                        <div className="flex flex-col gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
                            <p>Partners</p>
                            <p>Community</p>
                            <p>Developers</p>
                            <p>App</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col text-left gap-y-6">
                        {/* section header */}
                        <p className="font-medium text-lg tracking-[0.25px] ">Why Choose Us? </p>
                        <div className="flex flex-col gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
                            <p>Channels</p>
                            <p>Scale</p>
                            <p>Watch the Demo</p>
                            <p>Our Competition</p>
                        </div>
                    </div>

                    <div className="flex flex-col text-left gap-y-6">
                        {/* section header */}
                        <p className="font-medium text-lg tracking-[0.25px] ">Company </p>
                        <div className="flex flex-col gap-y-3 text-sm tracking-[0.25px] font-roboto font-normal ">
                            <p>About Us</p>
                            <p>News</p>
                            <p>Leadership</p>
                            <p>Media Kit</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="flex items-center ">
                <p className="text-sm font-normal text-center w-full">&copy;{currentYear()} Eduhiveproject. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;