/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                hoverColor: "green",
                brightColor: "#36ae9a",
                backgroundColor: "#1da1f2"
            }
        }
    },
    plugins: []
};
