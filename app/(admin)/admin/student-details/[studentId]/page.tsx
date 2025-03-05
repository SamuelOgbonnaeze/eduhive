import ClientStudentDetails from "./components/client-student-details";

interface StudentDetailsProps {
    params: Promise<{ studentId: string }>; 
}

const StudentDetails = async ({ params }: StudentDetailsProps) => {
    const { studentId } = await params;
    
    return <ClientStudentDetails studentId={studentId} />;
};

export default StudentDetails;