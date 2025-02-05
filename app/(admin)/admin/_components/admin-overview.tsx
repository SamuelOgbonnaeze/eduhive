const AdminOverview = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-[30px] md:gap-x-[45px] lg:gap-x-[75px] gap-y-3">
                <div className=" md:w-[160px] lg:w-[180px] h-[110px] rounded-[10px] bg-[#F2994A] border border-[#0F52BA26] shadow-md py-6 px-[10px] ">
                    <div className="flex flex-col gap-y-[10px] ">
                        <p className="font-medium text-base text-[#292929]">School Year</p>
                        <p className="font-semibold text-lg text-[#292929]">2024/2025</p>
                    </div>
                </div>
                <div className="md:w-[160px] lg:w-[180px] h-[110px] rounded-[10px] bg-[#F1B53E] border border-[#0F52BA26] shadow-md py-6 px-[10px] ">
                    <div className="flex flex-col gap-y-[10px] ">
                        <p className="font-medium text-base text-[#292929]">Semester</p>
                        <p className="font-semibold text-lg text-[#292929]">Harmattan</p>
                    </div>
                </div>
                <div className="md:w-[160px] lg:w-[180px] h-[110px] rounded-[10px] bg-[#54DDE3] border border-[#0F52BA26] shadow-md py-6 px-[10px] ">
                    <div className="flex gap-y-[10px] ">
                        <p className="font-medium text-base text-[#292929]">Days left in semester:  <span className="font-semibold text-lg text-[#292929]">90 Days</span></p>

                    </div>
                </div>
                <div className="md:w-[160px] lg:w-[180px] h-[110px] rounded-[10px] bg-[#54DDE3] border border-[#0F52BA26] shadow-md py-6 px-[10px] ">
                    <div className="flex flex-col gap-y-[10px] ">
                        <p className="font-medium text-base text-[#292929]">Days to Exams:</p>
                        <p className="font-semibold text-lg text-[#292929]">28 Days</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminOverview;