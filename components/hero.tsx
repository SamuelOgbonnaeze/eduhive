import Image from "next/image";

import { Button } from "./ui/button";
import HeroImage from "@/public/Images/hero-image.png"
import HeroUnderlay from "@/public/Images/hero-underlay.png"
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative flex flex-col md:flex-row justify-between md:items-center mt-[50px] mb-[100px] px-4 md:px-8 font-poppins ">
            {/* Text Section */}
            <div className="flex flex-col md:w-1/2 items-start text-left">
                <p className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-[50px] sm:leading-[60px] md:leading-[75px]">
                    Your Digital <br />
                    <span className="text-[#0F52BA]">Hub for Student</span> <br />
                    Records
                </p>
                <p className="  font-normal mt-6 text-sm sm:text-base md:text-lg text-[#292929]">
                    Indulge in a variety of mouthwatering dishes, crafted with fresh ingredients and bold flavors to create a dining experience that celebrates the joy of food.
                </p>
                <div className="flex items-center gap-3 mt-6">
                    <Link href="/login" >
                        <Button className="font-semibold text-sm sm:text-base md:text-lg px-4 py-2 bg-[#0F52BA] text-white hover:bg-white hover:text-[#0F52BA] border border-[#0F52BA] rounded-[6px] shadow-sm">
                            Login as Student
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button className="font-semibold text-sm sm:text-base md:text-lg px-4 py-2 bg-[#0F52BA]/10 text-black hover:bg-black hover:text-white border border-[#0F52BA]/10 rounded-[6px] shadow-sm">
                            Login as Admin
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex relative md:w-1/2 justify-center md:items-center">
                <Image
                    src={HeroImage}
                    width={560}
                    height={370}
                    alt="Hero Image"
                    className="w-full lg:w-[970px] lg:h-[640px] object-contain overflow-hidden bottom-0 "
                />
                <Image
                    src={HeroUnderlay}
                    width={200}
                    height={200}
                    alt="Hero Image"
                    className=" absolute -z-10  sm:w-[250px] sm:h-[250px] md:w-[330px] md:h-[330px] object-contain lg:bottom-[60px]"
                />
            </div>
        </div>
    );
};

export default Hero;
