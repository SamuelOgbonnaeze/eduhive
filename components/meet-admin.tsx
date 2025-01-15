import Image from "next/image"

import { Button } from "./ui/button"
import AdminImage from "../public/Images/admin-image.png"


const MeetAdmin = () => {
    return (
        <>
            <div className="mt-[90px] ">
                <div className="flex items-center  justify-center">
                    <p className="font-medium text-4xl text-[#0F52BA] p-1 ">Meet the Administrator</p>
                </div>
                <div className="mt-[10px] flex w-full items-center justify-between ">
                    <div className="flex flex-col justify-start gap-y-5" >
                        <p className="font-medium text-4xl ">Empowering School</p>
                        <p className="font-normal text-lg w-[550px] ">The administrators ensure smooth school operations, foster growth, support educators, manage resources, and create opportunities for student success.</p>
                        <Button className="w-[200px] text-white bg-[#0F52BA] font-semibold text-lg border border-[#0F52BA] hover:text-[#0F52BA] hover:bg-white">
                            Contact us
                        </Button>
                    </div>


                    <div>
                        <Image
                        src={AdminImage}
                        alt="adminImage"
                        width={433}
                        height={427}
                        className="object-cover "
                        />
                    </div>
                </div>
            </div >
        </>
    );
}

export default MeetAdmin;