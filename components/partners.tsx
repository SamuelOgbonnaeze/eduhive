import Image from "next/image"

import EdgeImg from "../public/Images/edge-img.png"
import Perxels from "../public/Images/perxels-logo.png"
import Enoverlab from "../public/Images/enoverlab-logo.png"

const Partners = () => {
    return (
        <div className="flex flex-col mt-[80px] items-center gap-y-5">
            <p className="font-bold text-2xl text-[#0F52BA] " >Our partners</p>
            <div className="relative w-full  bg-[#F0F8FF]  rounded-[10px]">
                <Image
                    src={EdgeImg}
                    width={99}
                    height={100}
                    alt="Corner image"
                    className="absolute bottom-0 right-0"
                />
                <Image
                    src={EdgeImg}
                    width={99}
                    height={100}
                    alt="Corner image"
                    className="absolute top-0 left-0 rotate-180"
                />
                <div className=" flex px-[200px] mx-auto justify-between items-center py-[43px]">
                    <Image
                        src={Enoverlab}
                        width={212}
                        height={39}
                        alt="enoverlab logo"
                        className="w-[212px] h-[39px] object-cover "
                    />
                    <Image
                        src={Perxels}
                        width={164}
                        height={72}
                        className="w-[164px] h-[72px] object-cover "
                        alt="perxels logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Partners;