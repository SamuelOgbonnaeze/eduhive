import { Button } from "@/components/ui/button";
import { DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogBody } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Bolt, Menu, Search, BellDot } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"


const AdminNavbar = () => {
    return (
        <div className="my-4">
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
                                <Link href="/admin">
                                    <p>Dashboard</p>
                                </Link>
                                <Link href="/admin/new">
                                    <p>New Record</p>
                                </Link>
                                <Link href="/admin/existing-record">
                                    <p>Existing Record</p>
                                </Link>
                                <Link href="/admin/student-list">
                                    <p>List of Student</p>
                                </Link>
                            </div>
                        </DialogBody>
                    </DialogContent>
                </DialogRoot>
                <div className="flex items-center justify-between gap-x-2 mr-4 ">
                    <BellDot className="cursor-pointer" size={18} />
                    <Bolt className="cursor-pointer" size={18} />
                </div>
            </div>


            <div className="w-full hidden md:flex border-l border-b border-[#0F52BA26] shadow-custom ">

                <div className="flex items-center px-3 py-8 justify-between ">
                    <div className="w-[300px] lg:w-[500px] h-[60px] flex items-center justify-between bg-[#F0F8FF] text-[#292929]/50 rounded-[20px] py-1 px-2 lg:px-4 focus:outline-none border border-[#0F52BA1A] ">
                        <Input
                            placeholder="Search for students name"
                            className="border-none shadow-none font-normal focus:outline-none focus:ring-0"
                        />
                        <Search size={16} className="" />
                    </div>
                    <div>
                        <Bolt size={20} className="text-[#292929] mr-[55px]" />
                    </div>
                </div>
            </div>

             <Separator className="my-4" />
        </div>
    );
}

export default AdminNavbar;