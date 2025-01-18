import Image from "next/image";

import { Button } from "./ui/button";
import AdminImage from "../public/Images/admin-image.png";

const MeetAdmin = () => {
    return (
        <div className="mt-[50px] md:mt-[90px] px-4 md:px-8">
            <div className="flex items-center justify-center">
                <p className="font-medium text-2xl md:text-4xl text-[#0F52BA] text-center">
                    Meet the Administrator
                </p>
            </div>

            <div className="mt-6 flex flex-col md:flex-row w-full items-center justify-between gap-6 md:gap-12">
                {/* Text Section */}
                <div className="flex flex-col justify-start gap-y-5 max-w-[600px] text-center md:text-left">
                    <p className="font-medium text-xl md:text-4xl">Empowering School</p>
                    <p className="font-normal text-sm md:text-lg">
                        The administrators ensure smooth school operations, foster growth, support educators, manage resources, 
                        and create opportunities for student success.
                    </p>
                    <Button className="w-[150px] md:w-[200px] text-white bg-[#0F52BA] font-semibold text-xs md:text-lg border border-[#0F52BA] hover:text-[#0F52BA] hover:bg-white mx-auto md:mx-0">
                        Contact us
                    </Button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src={AdminImage}
                        alt="Administrator"
                        width={400}
                        height={400}
                        className="w-full max-w-[400px] h-auto object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default MeetAdmin;
