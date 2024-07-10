import React from "react";
import { assets } from "@/Assets/assets"; 
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="py-5 px-5 md:px-5 lg:px-28 bg-custom-blue">
            <div className="flex justify-between items-center">
                <Image src={assets.Timbulogo1} width={62} height={60} alt="Logo" className="w-[130px] sm:w-auto" />
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
                    SignIn
                </button>
            </div>
        </div>
    );
}

export default Navbar;
