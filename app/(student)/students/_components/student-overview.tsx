import Image from "next/image"

import Books from "@/public/Images/books.png"

const StudentOverview = () => {

    function getFormattedDate(): string {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
      
    
        const capitalizeFirstLetter = (str: string): string =>
          str.charAt(0).toUpperCase() + str.slice(1);
      
        const ordinalSuffix = (n: number): string => {
          const s = ["th", "st", "nd", "rd"];
          const v = n % 100;
          return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };
      
        return `${ordinalSuffix(day)} of ${capitalizeFirstLetter(month)}, ${year}`;
      }


    return (
        <div className="mt-[38px] w-full rounded-[20px] bg-[#0F52BA] text-white flex items-center justify-between px-3 md:px-5 lg:px-[50px] py-5 md:py-6 lg:py-[35px] font-poppins ">
            <div className="flex flex-col gap-y-[5px] md:gap-y-2 lg:gap-y-[10px] text-left">
                <p className="font-normal text-sm text-[#F9F9F9] ">{getFormattedDate()} </p>
                <p className="font-normal text-2xl md:text-3xl lg:text-5xl " >Welcome Sonia!</p>
                <p className="font-medium text-xs md:text-sm ">Explore, learn, and discover something new.</p>
            </div>

            <div>
                <Image
                src={Books}
                width={80}
                height={80}
                alt="Welcome"
                className="md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] "
                />
            </div>

        </div>
    );
}

export default StudentOverview;