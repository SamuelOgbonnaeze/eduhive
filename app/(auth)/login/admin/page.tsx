import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/Images/logo-white.png";
import MobileLogo from "@/public/Images/mobile-logo.png";
import AdminLoginForm from "./_components/login-form";

const AdminLogin = () => {
    return (
        <div className="flex w-full h-screen">
            {/* Sidebar */}
            <div className="flex flex-col items-center w-[50px] md:w-[100px] lg:w-[300px] h-screen bg-[#0F52BA]">
                {/* Mobile Logo  */}
                <div className="w-full flex lg:hidden mt-[20px]">
                    <Link className="ml-2 md:mx-auto" href="/">

                        <Image
                            src={MobileLogo}
                            width={30}
                            height={30}
                            alt="Mobile Logo"
                            className="mx-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Logo */}
                <div className="hidden lg:flex mt-[30px]">
                    <Link href="/">

                        <Image
                            src={Logo}
                            width={135}
                            height={45}
                            alt="Desktop Logo"
                            className="mx-auto"
                        />
                    </Link>
                </div>
            </div>


            {/* Login Form */}
            <div className="w-full flex items-center px-4 md:px-[150px] ">
                <AdminLoginForm />
            </div>
        </div>
    );
}

export default AdminLogin;