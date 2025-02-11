
import AdminNavbar from "./_components/admin-navbar";
import AdminOverview from "./_components/admin-overview";
import Attendance from "./_components/attendance";


const AdminPage = async () => {

  
    return (
        <div className="w-full  pb-4 lg:pb-6  font-poppins">
            <div className="lg:pl-5 pl-3">
                <AdminNavbar />
            </div>
            <div className="mt-[50px] lg:px-5 px-3 ">
                <AdminOverview />
                <Attendance />
                
            </div>
        </div>
    );
}

export default AdminPage;