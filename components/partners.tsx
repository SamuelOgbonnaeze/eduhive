import Image from "next/image";

import EdgeImg from "../public/Images/edge-img.png";
import Perxels from "../public/Images/perxels-logo.png";
import Enoverlab from "../public/Images/enoverlab-logo.png";

const Partners = () => {
    return (
        <div className="flex flex-col mt-[50px] md:mt-[80px] items-center gap-y-5 px-4">
            <p className="font-bold text-xl md:text-3xl lg:text-4xl text-[#0F52BA] text-center">Our Partners</p>
            <div className="relative w-full bg-[#F0F8FF] rounded-[10px] lg:py-10 px-4 md:px-10 lg:px-20 h-[50px] md:h-full ">
                {/* Corner Decorations */}
                <Image
                    src={EdgeImg}
                    width={50}
                    height={50}
                    alt="Corner decoration"
                    className="absolute bottom-0 right-0 w-[26px] h-[37px] md:w-[99px] md:h-[100px]"
                />
                <Image
                    src={EdgeImg}
                    width={50}
                    height={50}
                    alt="Corner decoration rotated"
                    className="absolute top-0 left-0 rotate-180 w-[26px] h-[37px] md:w-[99px] md:h-[100px]"
                />

                {/* Partner Logos */}
                <div className="flex flex-wrap justify-center gap-10 lg:gap-20 items-center">
                    <Image
                        src={Enoverlab}
                        width={212}
                        height={39}
                        alt="Enoverlab logo"
                        className="w-[105px] md:w-[180px] lg:w-[212px] h-auto object-contain"
                    />
                    <Image
                        src={Perxels}
                        width={164}
                        height={72}
                        alt="Perxels logo"
                        className="w-[105px] md:w-[150px] lg:w-[164px] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Partners;
