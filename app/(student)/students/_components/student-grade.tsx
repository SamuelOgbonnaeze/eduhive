import Link from "next/link";

import { ProgressCircleRing, ProgressCircleRoot, ProgressCircleValueText } from "@/components/ui/progress-circle";
import { BookOpenText, ClipboardList, Clock3 } from 'lucide-react';

interface GradeCardProps {
    progressValue: number;
    subject: string;
    lessonNumber: number;
    duration: number;
    assignmentNumber: number;
}

const GradeCard = ({ progressValue, subject, lessonNumber, duration, assignmentNumber }: GradeCardProps) => {
    return (
        <div className="max-w-[310px] max-h-[210px] bg-[#F0F8FF] border border-[#0F52BA33] rounded-[10px] ">
            <div className="p-1 sm:p-2 pb-[20px] md:pb-[35px]">
                <div className="w-full flex items-center gap-x-3 sm:gap-x-4">
                    <div className="flex items-center">
                        <ProgressCircleRoot colorPalette={"blue"} value={progressValue} size={"lg"}>
                            <ProgressCircleValueText />
                            <ProgressCircleRing />
                        </ProgressCircleRoot>
                    </div>
                    <div>
                        <p className="font-medium text-lg sm:text-xl">{subject}</p>
                    </div>
                </div>
                <div className="w-full mt-2 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-5 sm:gap-y-5">
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
                </div>
            </div>
        </div>
    );
};

const gradeData = [
    { progressValue: 79, subject: "Molecular Biology", lessonNumber: 21, duration: 52, assignmentNumber: 6 },
    { progressValue: 80, subject: "Organic Chemistry", lessonNumber: 10, duration: 45, assignmentNumber: 4 },
    { progressValue: 52, subject: "Mathematics", lessonNumber: 10, duration: 45, assignmentNumber: 4 },
    { progressValue: 88, subject: "Physics", lessonNumber: 15, duration: 50, assignmentNumber: 5 },
    { progressValue: 70, subject: "English", lessonNumber: 18, duration: 40, assignmentNumber: 3 },
];

const StudentGrade = () => {
    return (
        <div className="mt-3 px-3">
            {/* Header */}
            <div className="w-full flex items-center justify-between border-b-2 border-[#0F52BA]/20">
                <p className="font-medium text-xl">Grade</p>
                <Link href="/students/grade">
                    <p className="text-[#0F52BA] text-lg font-medium">View more</p>
                </Link>
            </div>

            <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-y-2 mx-auto px-3">
                {gradeData.map((grade, index) => (
                    <GradeCard
                        key={index}
                        progressValue={grade.progressValue}
                        subject={grade.subject}
                        lessonNumber={grade.lessonNumber}
                        duration={grade.duration}
                        assignmentNumber={grade.assignmentNumber}
                    />
                ))}
            </div>
        </div>
    );
};

export default StudentGrade;
