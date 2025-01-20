import React from "react";
import Button from "../Layouts/Button";

const Home = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/doc4.jpg')] bg-no-repeat bg-cover opacity-90">
            <div className=" w-full lg:w-4/5 space-y-5 mt-10">
                <h1 className="text-5xl font-bold leading-tight">
                    Empowering Health Choices for a Vibrant Life...
                </h1>
                <p>
                    The health organisation exists to increase lifespan through prevention, control, and treatment of sicknesses and diseases.
                </p>
            </div>
        </div>
    );
};

export default Home;
