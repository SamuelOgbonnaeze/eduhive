// import { SidebarRoutes } from "./_components/sidebar-routes";

import StudentAssignment from "./_components/student-assignment";
import StudentNavbar from "./_components/student-navbar";
import StudentOverview from "./_components/student-overview";

const StudentPage = () => {
    return (
        <div className="w-full pt-6 px-5 ">
            <StudentNavbar />
            <StudentOverview />
            <StudentAssignment />
        </div>

    );
}

export default StudentPage;