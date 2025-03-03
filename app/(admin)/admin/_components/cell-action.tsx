
import { Student } from "./columns";
import { Button } from "@/components/ui/button";

import Link from "next/link";

interface CellActionProps {
    data: Student;
}

const CellAction = ({ data }: CellActionProps) => {

    return (
        <div className="flex overflow-visible">
            <Link href={`/admin/student-details/${data.studentId}`} >
                <Button variant="ghost" className='h-8 w-8 p-0 '>
                   <p className="text-xs">Open</p>
                </Button>
            </Link>

        </div>
    );
};

export default CellAction;