import React from "react";

import { RiMicroscopeLine } from "react-icons/ri";

import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../Layouts/Button";
import ServicesCard from "../Layouts/ServicesCard";

const Services = () => {
    
    const offeredServices = [
        {
            title: "doctor consultation",
            icon: (
                <RiMicroscopeLine size={35} className=" text-backgroundColor" />
            ),
            disc: "Doctor cheks you up"
        },
        {
            title: "Doc Check up",
            icon: (
                <RiMicroscopeLine size={35} className=" text-backgroundColor" />
            ),
            disc: "Doctor cheks you up"
        },
        {
            title: "Doc Check up",
            icon: (
                <RiMicroscopeLine size={35} className=" text-backgroundColor" />
            ),
            disc: "Doctor cheks you up"
        },
        {
            title: "Doc Check up",
            icon: (
                <RiMicroscopeLine size={35} className=" text-backgroundColor" />
            ),
            disc: "Doctor cheks you up"
        },
        {
            title: "Doc Check up",
            icon: (
                <RiMicroscopeLine size={35} className=" text-backgroundColor" />
            ),
            disc: "Doctor cheks you up"
        }
    ];

    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className=" flex flex-col items-center justify-between">
                <div>
                    <h1 className=" text-4xl font-semibold text-center lg:text-center">
                        Our Services
                    </h1>
                    <p className=" mt-2 text-center lg:text-center">
                        Services offered at the medical practice include
                    </p>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row gap-5 pt-14">
                {offeredServices.map(offeredService => (
                    <ServicesCard
                        icon={offeredService.icon}
                        title={offeredService.title}
                        disc={offeredService.disc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
