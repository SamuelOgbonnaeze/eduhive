"use client"

import { Progress } from "@/components/ui/progress"
import { ColumnDef } from "@tanstack/react-table"
import { IoPerson } from "react-icons/io5";
import CellAction from "./cell-action";




export type Student = {
  id: string
  number: string
  name: string
  studentId: string
  progress: number
  matric: string
}


export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "number",
    header: "Number",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.original.name

      return (
        <div className="flex items-center gap-x-2">
          <IoPerson size={15} className="text-[#F1B53E]" />
          {name}
        </div>
      )
    }
  },
  {
    accessorKey: "matric",
    header: "Matric No",
  },
  {
    accessorKey: "progress",
    header: () => <div className="text-left">Progress</div>,
    cell: ({ row }) => {
      const progress = Number(row.original.progress);

      return (
        <div className="flex items-center gap-x-2 font-medium">
          <Progress value={progress} />
          {progress}%
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original
      return (
        <div className="flex ">
          <CellAction data={data} />
        </div>
      )
    }
  },
]
