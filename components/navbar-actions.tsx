import Link from "next/link";
import React from "react";


const NavbarActions = () => {
    return (
        <div className="flex gap-x-[60px] font-poppins font-medium text-lg">
            <Link href="#product">
                <p>Product</p>
            </Link>
            <Link href="#blog">
                <p>Resources</p>
            </Link>
            <Link href="#support">
                <p>Support</p>
            </Link>
        </div>
    );
};

export default NavbarActions;
