import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function AboutUs() {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-[1240px] mx-auto px-10 pb-16 pt-16">
                <h1 className="text-5xl text-[#66fcf1] border-b border-[#66fcf1] font-thin uppercase pb-4 md:text-7xl xl:text-8xl tracking-wider">
                    About Us
                </h1>
                <p className="pt-4 text-lg"></p>
            </div>
            <div className="bg-[#c5c6c7] ">
                <div className=" text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    <p className="text-lg text-justify">
                    Welcome to the Entrepreneurship Cell (E-Cell) PVG, a dynamic platform igniting and nurturing the entrepreneurial spirit. We empower innovators, thinkers, and doers to transform their ideas into tangible ventures. Through workshops, mentorship, and networking events, we cultivate essential skills and provide real-world exposure. E-Cell PVG is a thriving ecosystem where creativity and business converge, propelling startups towards success. Join us to connect with like-minded enthusiasts, access invaluable resources, and embark on a journey of innovation and growth. Let's together drive the future of entrepreneurship and make ideas happen.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
