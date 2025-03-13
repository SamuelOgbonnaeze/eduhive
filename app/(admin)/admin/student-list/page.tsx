"use client"

import { Student } from "@/type";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "../_components/columns";


const StudentList = () => {

  const data:Student[] = [
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



  return (
    <div className="mt-5 flex flex-col gap-y-3">
      <p className="font-semibold text-xl ">Student List and report</p>
      <DataTable columns={columns} data={data} />
    </div>
  )
}


export default StudentList;