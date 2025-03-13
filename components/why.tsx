import Image, { StaticImageData } from "next/image";

import { Button } from "./ui/button";
import EdgeImg from "../public/Images/edge-img.png";
import Vector1 from "../public/Images/vector-1.png";
import Vector2 from "../public/Images/vector-2.png";
import Vector3 from "../public/Images/vector-3.png";
import Vector4 from "../public/Images/vector-4.png";

interface CardProps {
    title: string;
    desc: string;
    ImageName: StaticImageData;
}

const Card = ({ title, desc, ImageName }: CardProps) => {
    return (
        <div className="w-full max-w-[270px] flex flex-col items-center rounded-[10px] py-[30px] gap-y-[20px] bg-[#F0F8FF] border border-[#F0F8FF]/40 shadow-lg mx-auto">
            <Image
                src={ImageName}
                width={50}
                height={46}
                alt="vector"
                className="object-contain"
            />
            <div className="flex flex-col items-center text-center text-sm md:text-base lg:text-lg p-1">
                <p className="font-bold">{title}</p>
                <p className="font-normal">{desc}</p>
            </div>
        </div>
    );
};

const dataItems = [
    {
        id: "1",
        title: "Sign up/Login",
        desc: "Login as a Student or admin",
        ImageName: Vector1,
    },
    {
        id: "2",
        title: "Profile Setup",
        desc: "Setting up profile as admin or student",
        ImageName: Vector2,
    },
    {
        id: "3",
        title: "Upload Student Record",
        desc: "Login as a Student or admin",
        ImageName: Vector3,
    },
    {
        id: "4",
        title: "Record and Grade",
        desc: "Student access their record and grade",
        ImageName: Vector4,
    },
];

const Why = () => {
    return (
        <>
            {/* Why Choose Us Section */}
            <div className="relative bg-[#F0F8FF] rounded-[10px] px-4 md:px-8">
                <Image
                    src={EdgeImg}
                    width={120}
                    height={100}
                    alt="Corner image"
                    className="absolute bottom-0 right-0"
                />
                <Image
                    src={EdgeImg}
                    width={120}
                    height={100}
                    alt="Corner image"
                    className="absolute top-0 left-0 rotate-180"
                />
                <div className="w-full flex flex-col items-center justify-center mt-[30px] md:mt-[50px] py-10 gap-y-6 z-10">
                    <h2 className="font-medium text-2xl md:text-3xl text-[#0F52BA] text-center">
                        Why choose us?
                    </h2>
                    <p className="font-medium text-base md:text-xl text-[#292929] text-center">
                        Secure, accessible, and reliable records with Eduhive platform
                    </p>
                    <p className="font-normal text-sm md:text-lg w-full md:w-[850px] text-center">
                        Eduhive is a platform that seeks to provide an efficient system to manage student records and improve overall 
                        administration to streamline operations and enhance educational outcomes. It is a digital ID system created 
                        to help manage student records and improve school administration.
                    </p>
                    <Button className="font-medium text-sm md:text-lg bg-[#0F52BA] text-white py-2 px-4 border border-[#0F52BA] hover:text-[#0F52BA] hover:bg-white">
                        Read more
                    </Button>
                </div>
            </div>

            {/* How It Works Section */}
            <div id="product" className="w-full flex flex-col items-center mt-[40px] md:mt-[64px] gap-y-[20px] md:gap-y-[30px] px-4 md:px-8">
                <h2 className="font-medium text-2xl md:text-3xl text-[#0F52BA] text-center">
                    How it works
                </h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {dataItems.map((dataItem) => (
                        <Card
                            key={dataItem.id}
                            title={dataItem.title}
                            desc={dataItem.desc}
                            ImageName={dataItem.ImageName}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Why;
