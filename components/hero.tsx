import Image from "next/image"

import { Button } from "./ui/button";
import HeroImageUnderlay from "../public/Images/hero-image-underlay.png"

const Hero = () => {
    return (
        <div className="relative flex flex-col md:flex-row justify-between mt-[50px] mb-[100px]">
            <div className="flex md:w-[600px] items-center ">
                <div className="flex flex-col">
                    <p className="font-semibold text-5xl leading-[75px]">Your Digital <br /><span className="text-[#0F52BA]">Hub for Student</span>  <br /> Records</p>
                    <p className=" font-normal mt-10 text-lg text-[#292929] ">Indulge in a variety of mouthwatering dishes, crafted with fresh ingredients and bold flavors to create a dining experience that celebrates the joy of food.</p>
                    <div className="flex items-center jusify-between py-1 gap-x-3 mt-[30px]">
                        <Button className="font-semibold text-lg p-3 bg-[#0F52BA] text-white hover:bg-white hover:text-[#0F52BA] border border-[#0F52BA] rounded-[6px] shadow-sm " >
                            Login as Student
                        </Button>
                        <Button className="font-semibold text-lg p-3 bg-[#0F52BA]/10 text-black  hover:bg-black hover:text-white border border-[#0F52BA]/10 rounded-[6px] shadow-sm ">
                            Login as Admin
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex items-center  justify-items-end">

                <Image
                    src={HeroImageUnderlay}
                    width={580}
                    height={390}
                    alt="HeroImage"
                    className=" "
                />

            </div>

        </div>
    );
}

export default Hero;