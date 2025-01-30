import Link from "next/link";

import { ProgressCircleRing, ProgressCircleRoot, ProgressCircleValueText } from "@/components/ui/progress-circle";
import { BookOpenText, ClipboardList, Clock3, GraduationCap } from 'lucide-react';

interface GradeCardProps {
    progressValue: number;
    subject: string;
    lessonNumber: number;
    duration: number;
    assignmentNumber: number;
    studentNumber: number;

}
const GradeCard = ({ progressValue, subject, lessonNumber, duration, assignmentNumber, studentNumber }: GradeCardProps) => {
    return (
        <div className="max-w-[420px]  bg-[#F0F8FF] border border-[#0F52BA33] rounded-[10px] ">
            <div className="w-full flex p-3 sm:p-4 gap-x-3 sm:gap-x-4 pb-[40px] md:pb-[50px]">
                <div>
                    <ProgressCircleRoot colorPalette={"blue"} value={progressValue} size={"lg"}>
                        <ProgressCircleValueText />
                        <ProgressCircleRing />
                    </ProgressCircleRoot>
                </div>
                <div className="flex flex-col">
                    <p className="font-medium text-lg sm:text-xl">{subject}</p>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-5 sm:gap-y-5">
                        <div className="flex items-center gap-x-1">
                            <BookOpenText className="text-[#0F52BA]" size={18} />
                            <p className="text-[#292929] font-normal text-xs sm:text-sm">{lessonNumber} Lesson</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <Clock3 className="text-[#0F52BA]" size={18} />
                            <p className="text-[#292929] font-normal text-xs sm:text-sm">{duration} mins</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <ClipboardList className="text-[#0F52BA]" size={18} />
                            <p className="text-[#292929] font-normal text-xs sm:text-sm">{assignmentNumber} assignment</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <GraduationCap className="text-[#0F52BA]" size={18} />
                            <p className="text-[#292929] font-normal text-xs sm:text-sm">{studentNumber} students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const StudentGrade = () => {
    return (
        <div className="mt-3 px-3">
            {/* Header */}
            <div className="w-full flex items-center justify-between border-b-2 border-[#0F52BA]/20">
                <p className="font-medium text-xl">Grade</p>
                <Link href="/grade">
                    <p className="text-[#0F52BA] text-lg font-medium">see more</p>
                </Link>
            </div>

            <div className="mt-[20px] grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-3">

                <GradeCard
                    progressValue={79}
                    subject="Molecular Biology"
                    lessonNumber={21}
                    duration={52}
                    assignmentNumber={6}
                    studentNumber={420}
                />


                <GradeCard
                    progressValue={60}
                    subject="Organic Chemistry"
                    lessonNumber={10}
                    duration={45}
                    assignmentNumber={4}
                    studentNumber={412}
                />
            </div>
        </div>
    );
}

export default StudentGrade;