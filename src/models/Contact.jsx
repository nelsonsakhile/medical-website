import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Layouts/Button";

const Contact = ({ closeForm }) => {
    const [inputs, setInputs] = useState({});
    const handleOnChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };
    const handleSubmit = async () => {
        let res = await axios.post("https://email-9k1s.onrender.com/api/data", inputs);
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="popup-form absolute mt-12 text-black">
                <form className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
                    <h1 className="text-4xl font-semibold text-center text-backgroundColor">
                        Book Now
                    </h1>
                    <div className=" flex flex-col">
                        <input
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                            type="text"
                            name="userFirstName"
                            id="userFirstName"
                            placeholder="First Name"
                            value={inputs.userFirstName || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className=" flex flex-col">
                        <input
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                            type="text"
                            name="userLastName"
                            id="userLastName"
                            placeholder="Last Name"
                            value={inputs.userLastName || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className=" flex flex-col">
                        <input
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="Your Email"
                            value={inputs.userEmail || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className=" flex flex-col">
                        <input
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                            type="number"
                            name="userNumber"
                            id="userNumber"
                            placeholder="Phone No."
                            value={inputs.userNumber || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label for="date">Appointment Date:</label>
                        <input
                            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                            type="date"
                            name="date"
                            id="date"
                            label="Date"
                            value={inputs.date || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className=" flex gap-5">
                        <Button
                            title="Book Appointment"
                            submitForm={handleSubmit}
                        />
                        <button
                            className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
                            onClick={closeForm}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
