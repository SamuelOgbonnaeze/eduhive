"use client"

import { Student } from "@/type";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";


const Attendance= ()=>{

  const data: Student[] = [
    {
      id: "728ed52f",
      number: "01",
      name: "Adekunle Folarin",
      studentId: "2023/1123",
      progress: "90",
    },
    {
      id: "a2b3c4d5",
      number: "02",
      name: "Chimamanda Okafor",
      studentId: "2023/1108",
      progress: "75",
    },
    {
      id: "f6g7h8i9",
      number: "03",
      name: "David Oyenuga",
      studentId: "2023/1142",
      progress: "85",
    },
    {
      id: "j1k2l3m4",
      number: "04",
      name: "Esther Adigun",
      studentId: "2023/1131",
      progress: "65",
    },
    {
      id: "n5o6p7q8",
      number: "05",
      name: "Femi Adebayo",
      studentId: "2023/1156",
      progress: "92",
    },
    {
      id: "r9s0t1u2",
      number: "06",
      name: "Grace Nwachukwu",
      studentId: "2023/1165",
      progress: "80",
    },
    {
      id: "v3w4x5y6",
      number: "07",
      name: "Hassan Bello",
      studentId: "2023/1179",
      progress: "78",
    },
    {
      id: "z7a8b9c0",
      number: "08",
      name: "Ibrahim Musa",
      studentId: "2023/1876",
      progress: "88",
    },
    {
      id: "d1e2f3g4",
      number: "09",
      name: "Jennifer Ekong",
      studentId: "2023/1194",
      progress: "70",
    },
    {
      id: "h5i6j7k8",
      number: "10",
      name: "Kunle Obinna",
      studentId: "2023/1201",
      progress: "95",
    },
  ];


    return(
        <div className="mt-5 flex flex-col gap-y-3">
          <p className="font-semibold text-xl ">Student Attendance</p>
          <DataTable columns={columns} data={data} />

       
        </div>
    )
}


export default Attendance;