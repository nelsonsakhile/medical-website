import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
    return (
        <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
            <div className=" w-full lg:w-3/4 space-y-4">
                <h1 className=" text-4xl font-semibold text-center lg:text-start">
                    About Us
                </h1>
                <p className=" text-justify lg:text-start">
                    Royal Health MC is a medical practice located at 1 Garden
                    Road, Johannesburg, 2194.
                </p>
                <p className="text-justify lg:text-start">
                    It was established on 28 October 2024 by three medical
                    officers namely - Dr Queen Ngoatje, Dr Bontle Phaladi, and
                    Dr Selelo Motalaota.
                </p>
                <p className="text-justify lg:text-start">
                    The practice strives to ensure quality health through
                    biopsychosocial approach, implemented through medical
                    testing, consultation, awareness campaigns, and health
                    promotion advices.
                </p>
                <p>
                    Royal Health MC is registered with the relevant bodies such
                    as Companies and Intellectual Property Commission (CIPC),
                    the Health Professions Council of South Africa (HPCSA), etc.
                </p>
                <p>The founding members of the practice also serve as doctors and directors of the establishment.</p>
            </div>
            <div className=" w-full lg:w-3/4">
                <img className=" rounded-lg" src={img} alt="img" />
            </div>
        </div>
    );
};

export default About;
