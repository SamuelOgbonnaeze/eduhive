"use client"


import { Input } from "@/components/ui/input";



import { Search } from 'lucide-react';
import { Bolt } from 'lucide-react';
import { BellDot } from 'lucide-react';



const StudentNavbar = () => {


    return (
        <div>
            

            {/* Desktop view */}
            <div className="w-full hidden md:flex items-center justify-between font-poppins">
                <div className="lg:w-[500px] flex items-center justify-between bg-[#F0F8FF] text-[#292929]/50 rounded-[20px] py-1 px-7 focus:outline-none ">
                    <Input placeholder="Search" className="border-none shadow-none font-normal" />
                    <Search size={16} />
                </div>
                <div className="flex items-center justify-between gap-x-10">
                    <div>

                        foibhuer
                    </div>
                    <div className="flex items-center justify-between gap-x-6 text-[#292929]">
                        <BellDot className="cursor-pointer" size={20} />
                        <Bolt className="cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StudentNavbar;