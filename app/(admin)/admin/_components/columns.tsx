"use client"

import { Progress } from "@/components/ui/progress"
import { ColumnDef } from "@tanstack/react-table"
import { IoPerson } from "react-icons/io5";


export type Student = {
  id: string
  number: string
  name: string
  studentId: string
  progress: string
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
    accessorKey: "studentId",
    header: "ID",
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
    accessorKey: "amount",
    header: "",
  },
]
