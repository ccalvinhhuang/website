import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-2xl text-white font-semibold">
                Calvin Huang 
            </Link>
            
        </div>
    );
};

export default Navbar;