import Image from "next/image";
import { Button } from "./ui/button";
import NavbarActions from "./navbar-actions";

const Navbar = () => {
    return (
        <div className="mt-[10px] w-full  ">
            <div className="flex items-center p-2 justify-between">
                <div>
                    <Image src="/images/logo.png"
                        width={133}
                        height={45}
                        alt="logo"
                        className="w-[88px] md:w-[133px] h-[30px] md:h-[45px] "
                    />

                </div>
                <div>
                    <NavbarActions />
                </div>
                <div>
                    <Button variant="default" className="bg-[#0F52BA] rounded-[10px] px-8">
                        <span className="font-semibold text-xl ">
                            Sign up
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;