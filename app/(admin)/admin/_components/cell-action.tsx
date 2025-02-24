"use client"

import { EllipsisVertical } from 'lucide-react';
import { Student } from "./columns";
import { Button } from "@/components/ui/button";

import Link from "next/link";

interface CellActionProps {
    data: Student;
}

const CellAction: React.FC<CellActionProps> = () => {

    return (
        <div className="flex overflow-visible">
            <Link href="/admin/student-details" >
                <Button variant="ghost" className='h-8 w-8 p-0'>
                <EllipsisVertical size={20} />
                </Button>
            </Link>

        </div>
    );
};

export default CellAction;