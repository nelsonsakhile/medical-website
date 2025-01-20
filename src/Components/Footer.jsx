import React from "react";
import { Link } from "react-scroll";
import img from "../assets/Logo.png";

const Footer = () => {
    return (
        <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className=" w-full md:w-1/4">
                    <h1 className=" font-semibold text-xl pb-4">
                        <img src={img} className="w-12 h-12 " />
                    </h1>
                    <p className=" text-sm">
                        Royal Health MC values privacy, respect, and confidentiality, and it is determined to put the needs and wellbeing of people first.
                    </p>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                        About Us
                    </h1>
                    <nav className=" flex flex-col gap-2">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            About
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Services
                        </Link>
                        <Link
                            to="doctors"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Doctors
                        </Link>
                    </nav>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                        Services
                    </h1>
                    <nav className=" flex flex-col gap-2">
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Lab Test
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Health Check
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Heart Health
                        </Link>
                    </nav>
                </div>
                <div className=" w-full md:w-1/4">
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                        Contact Us
                    </h1>
                    <nav className=" flex flex-col gap-2">
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            Shop No 2A
Mazithulele Plaza 
Siyandhani CBD-002
Giyani 0826
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            royalhealthmail@gmail.com{" "}
                        </Link>
                        <Link to="/" spy={true} smooth={true} duration={500}>
                            082 383 6316 / 079 398 2837
                        </Link>
                    </nav>
                </div>
            </div>
            <div>
                <p className=" text-center py-4">
                    Copyright © 2025 - All right reserved By
                    <span className=" text-hoverColor">
                        Royal Health MC
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
