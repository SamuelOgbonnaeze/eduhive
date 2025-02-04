import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Progress } from "@/components/ui/progress";
import Maths from "@/public/Images/maths.png";
import English from "@/public/Images/english.png";
import Chemistry from "@/public/Images/chemistry.png";
import Physics from "@/public/Images/physics.png";

interface AssignmentCardProps {
  subject: string;
  type: string;
  image: StaticImageData;
  value: number;
}

const AssignmentCard = ({ subject, type, image, value }: AssignmentCardProps) => {
  return (
    <div className="w-[240px] border border-[#0F52BA1A] rounded-[10px] bg-[#F0F8FF] pb-6">
      {/* Header */}
      <div className="flex flex-col text-left px-2 py-5">
        <p className="font-semibold text-base lg:text-lg">{subject}</p>
        <p className="font-normal text-sm lg:text-base text-[#00000066]">{type}</p>
      </div>

      {/* Image Section */}
      <div className="w-full flex my-[15px]">
        <Image
          src={image}
          width={30}
          height={30}
          alt={`${subject} icon`}
          className="mx-auto lg:w-[45px] lg:h-[45px] "
        />
      </div>

      {/* Progress Section */}
      <div className="w-[80%] max-w-[180px] my-1 sm:my-2 flex mx-auto items-center gap-x-1">
        <Progress value={value} className="w-full" />
        <p
          className={`font-normal text-[10px] leading-6 ${value < 50 ? "text-red-500" : "text-[#0F52BA]"}`}
        >
          {`${value}%`}
        </p>
      </div>
    </div>
  );
};

const assignments = [
  {
    subject: "Mathematics",
    type: "Multiple choice questions",
    image: Maths,
    value: 45,
  },
  {
    subject: "English lesson",
    type: "Questions & answers",
    image: English,
    value: 10,
  },
  {
    subject: "Physics",
    type: "Questions & answers",
    image: Physics,
    value: 59,
  },
  {
    subject: "Chemistry",
    type: "Questions & answers",
    image: Chemistry,
    value: 89,
  },
];

const StudentAssignment = () => {
  return (
    <div className="mt-[40px] px-3 font-poppins">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b-2 border-[#0F52BA]/20 py-2">
        <p className="font-medium text-lg sm:text-xl">Your Assignment</p>
        <Link href="/assignment">
          <p className="text-[#0F52BA] text-base sm:text-lg font-medium">View more</p>
        </Link>
      </div>

      {/* Assignment Cards */}
      <div className="w-full flex items-center shadow-md lg:shadow-none drop-shadow-md lg:drop-shadow-none shadow-[#00000040] py-5 lg:py-0 rounded-[10px] lg:bg-none bg-[#0F52BA] bg-opacity-[3%] ">
        <div className="my-[20px] w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-y-2 px-3 mx-auto  ">
          {assignments.map((assignment, index) => (
            <AssignmentCard
              key={index}
              subject={assignment.subject}
              type={assignment.type}
              image={assignment.image}
              value={assignment.value}
            />
          ))}
        </div>


      </div>
    </div>
  );
};

export default StudentAssignment;
