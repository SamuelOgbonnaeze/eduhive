"use client";

import Image from "next/image";
import StudentImage from "@/public/Images/student-image.png";
import { Student } from "@/type";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const students: Student[] = [
    {
        id: "1",
        name: "John Doe",
        faculty: "Biosciences",
        matric: "2017/0991",
        cgpa: "4.29",
        department: "Pure and Applied Sciences",
        registration: "Not completed",
        number: "1",
        studentId: "S1234",
        progress: 78
    },
    {
        id: "2",
        name: "Jane Smith",
        faculty: "Engineering",
        matric: "2018/1234",
        cgpa: "3.89",
        department: "Mechanical Engineering",
        registration: "Completed",
        number: "2",
        studentId: "S5678",
        progress: 70
    },
    {
        id: "3",
        name: "Alice Brown",
        faculty: "Arts",
        matric: "2019/5678",
        cgpa: "3.72",
        department: "History",
        registration: "Not completed",
        number: "3",
        studentId: "S9101",
        progress: 92
    },
    {
        id: "4",
        name: "Bob Johnson",
        faculty: "Business",
        matric: "2020/8765",
        cgpa: "3.95",
        department: "Finance",
        registration: "Completed",
        number: "4",
        studentId: "S1121",
        progress: 69
    },
    {
        id: "5",
        name: "Charlie Davis",
        faculty: "Health Sciences",
        matric: "2018/2345",
        cgpa: "4.10",
        department: "Nursing",
        registration: "Not completed",
        number: "5",
        studentId: "S1314",
        progress: 86
    },
    {
        id: "6",
        name: "David Wilson",
        faculty: "Engineering",
        matric: "2021/3456",
        cgpa: "3.85",
        department: "Civil Engineering",
        registration: "Completed",
        number: "6",
        studentId: "S1516",
        progress: 60
    },
    {
        id: "7",
        name: "Emma Martinez",
        faculty: "Law",
        matric: "2019/6543",
        cgpa: "4.50",
        department: "International Law",
        registration: "Not completed",
        number: "7",
        studentId: "S1718",
        progress: 91
    },
    {
        id: "8",
        name: "Frank Garcia",
        faculty: "Computer Science",
        matric: "2020/4321",
        cgpa: "3.95",
        department: "Software Engineering",
        registration: "Completed",
        number: "8",
        studentId: "S1920",
        progress: 81
    },
    {
        id: "9",
        name: "Grace Lee",
        faculty: "Education",
        matric: "2017/8765",
        cgpa: "3.60",
        department: "Psychology",
        registration: "Not completed",
        number: "9",
        studentId: "S2122",
        progress: 77
    },
    {
        id: "10",
        name: "Hannah Walker",
        faculty: "Social Sciences",
        matric: "2022/0987",
        cgpa: "3.88",
        department: "Sociology",
        registration: "Completed",
        number: "10",
        studentId: "S2324",
        progress: 54
    }
];

interface ClientStudentDetailsProps {
    studentId: string;
}

const ClientStudentDetails: React.FC<ClientStudentDetailsProps> = ({ studentId }) => {

    const currentStudent = students.find((s) => s.studentId === studentId);

    return (
        <div className="w-full h-full">

            <Link href="/admin">
                <div className=" flex items-center  mt-6 p-4">
                    <ChevronLeft size={20} />
                    <p className="font-bold">Back</p>
                </div>
            </Link>

            <div className="w-full  flex flex-col font-poppins text-[#292929] p-4 items-center justify-center">

                <p className="w-full text-center text-2xl font-semibold py-3">STUDENT RECORD</p>
                <div className="w-full max-w-[918px] flex flex-col md:flex-row items-center justify-center mx-auto py-8 space-y-4 md:space-y-0 md:space-x-8">
                    <div className="w-[246px] h-[245px] flex justify-center p-4 md:p-0">
                        <Image src={StudentImage} alt="student picture" className="object-cover w-full" />
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 px-6 py-2 gap-y-5 text-center md:text-left">
                        <div className="flex flex-col gap-y-[10px]">
                            <p className="text-xl font-medium">Name</p>
                            <p className="text-base font-light">{currentStudent?.name}</p>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <p className="text-xl font-medium">Faculty</p>
                            <p className="text-base font-light">{currentStudent?.faculty}</p>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <p className="text-xl font-medium">Matric Number</p>
                            <p className="text-base font-light">{currentStudent?.matric}</p>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <p className="text-xl font-medium">CGPA</p>
                            <p className="text-base font-light">{currentStudent?.cgpa}</p>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <p className="text-xl font-medium">Department</p>
                            <p className="text-base font-light">{currentStudent?.department}</p>
                        </div>
                        <div className="flex flex-col gap-y-[10px]">
                            <p className="text-xl font-medium">School Registration Progress</p>
                            <p className={`text-base font-light ${currentStudent?.registration === "Not completed" ? "text-[#F82626]" : "text-green-500"} `}>{currentStudent?.registration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientStudentDetails;