//

import StudentAssignment from "./_components/student-assignment";
import StudentGrade from "./_components/student-grade";
import StudentNavbar from "./_components/student-navbar";
import StudentOverview from "./_components/student-overview";

const StudentPage = () => {
    return (
        <div className="w-full px-3 py-4 lg:py-6 lg:px-5 font-poppins ">
            <StudentNavbar />
            <StudentOverview />
            <StudentAssignment />
            <StudentGrade />
        </div>

    );
}

export default StudentPage;