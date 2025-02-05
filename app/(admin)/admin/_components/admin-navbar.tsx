import { Input } from "@/components/ui/input";
import { Bolt, Search } from "lucide-react";

const AdminNavbar = () => {
    return (
        <div className="w-full border-l border-b border-[#0F52BA26] shadow-custom ">
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
    );
}

export default AdminNavbar;