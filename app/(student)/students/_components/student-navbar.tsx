

import Image from "next/image";

import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Button,  } from "@chakra-ui/react"
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import StudentProfile from "@/public/Images/student-profile.png"

import { Search, Menu } from 'lucide-react';
import { Bolt } from 'lucide-react';
import { BellDot } from 'lucide-react';
import Link from "next/link";



const StudentNavbar = () => {


    return (
        <div className="">

            {/* Mobile view */}
            <div className="flex md:hidden items-center justify-between  ">
                <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-[#0F52BA]">
                            <Menu size={20} className="text-[#0F52BA]" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0F52BA]/80 text-white">
                        <DialogHeader className="mt-10">
                            <DialogTitle className="text-4xl flex font-semibold items-center">Eduhive</DialogTitle>
                            <DialogCloseTrigger />
                        </DialogHeader>
                        <DialogBody >
                            <div className="flex flex-col gap-y-5  justify-start text-2xl font-medium p-2 ">
                                <Link href="/students">
                                    <p>Home</p>
                                </Link>
                                <Link href="/students/grade">
                                    <p>Grade</p>
                                </Link>
                                <Link href="/students/assignment">
                                    <p>Assignment</p>
                                </Link>
                                <Link href="/students/analytics">
                                    <p>Analytics</p>
                                </Link>
                            </div>

                        </DialogBody>
                    </DialogContent>
                </DialogRoot>
                <div className="flex items-center justify-between gap-x-2 ">
                    <Image
                        src={StudentProfile}
                        width={18}
                        height={18}
                        alt="Student profile image"
                    />
                    <BellDot className="cursor-pointer" size={18} />
                    <Bolt className="cursor-pointer" size={18} />
                </div>
            </div>

            {/* Desktop view */}
            <div className="w-full hidden md:flex items-center justify-between font-poppins">
                <div className="w-[300px] lg:w-[500px] flex items-center justify-between bg-[#F0F8FF] text-[#292929]/50 rounded-[20px] py-1 px-5 lg:px-7 focus:outline-none ">
                    <Input placeholder="Search" className="border-none shadow-none font-normal" />
                    <Search size={16} />
                </div>
                <div className="flex items-center justify-between gap-x-6 lg:gap-x-10">
                    <div className="flex items-center gap-x-1 text-[#292929] ">
                        <div>
                            <Image
                                src={StudentProfile}
                                width={40}
                                height={40}
                                alt="Student profile image"
                                className="lg:w-[50px] lg:h-[50px]"
                            />
                        </div>
                        <div className="flex flex-col  text-left gap-y-[1px] lg:gap-y-[2px] ">
                            <p className="font-normal md:text-base" >Sonia Doe</p>
                            <p className="font-normal md:text-sm lg:text-base">300L</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-x-6 text-[#292929]">
                        <BellDot className="cursor-pointer" size={20} />
                        <Bolt className="cursor-pointer" size={20} />
                    </div>
                </div>
               
            </div>
            <Separator className="my-4" />

        </div>

    );
}

export default StudentNavbar;