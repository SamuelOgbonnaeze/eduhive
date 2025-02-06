import AddRecordForm from "./_components/form";


const NewRecordPage = () => {


    return (
        <div className="py-[50px] px-6 font-poppins ">

            <p className="font-semibold text-xl text-[#292929] " >Add New Record</p>

            <div className="mt-2 rounded-[10px] lg:w-[950px]   ">
                <div className="bg-[#0F52BA] w-full rounded-[5px] py-2.5 px-3">
                    <p className="text-white">Student Details</p>
                </div>

                <div className=" mb-[150px] ">
                    <AddRecordForm  />
                </div>
            </div>
        </div>
    );
}

export default NewRecordPage;