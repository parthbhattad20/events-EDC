import React from "react"
import Navbar from "../components/Navbar"

import videobg from "../assets/mainBg.mp4"
export default function Home(){
    return(
        <div className="h-screen overflow-y-hidden">
            <Navbar />
            <div className="relative bg-[#0b0c10] h-full">
                <div className="absolute bg-[rgba(0,0,0,0.6)]"></div>
                <video src={videobg} className="w-full h-full object-cover" autoPlay loop muted={true}/>
                {/* <img src={process.env.PUBLIC_URL + '/images/home -img.jpg'} alt="landing img" className="w-full bg-no-repeat bg-cover h-[80%]"/> */}
                <div className="absolute inset-0 top-1/4 max-w-fit max-h-fit mx-auto">
                    <h1 className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-7xl pb-2 md:pb-4 text-[#66fcf1] font-thin uppercase tracking-wider ">Events</h1>
                    <p className="text-lg md:text-normal text-center border-t border-[#66fcf1] p-0 pt-2 tracking-wide">Welcome to the E-Cell PVG <br/> Explore the events</p>
                    <div className="flex items-center"><a href="/events" className="bg-[#c5c6c7] text-[#0b0c10] font-bold mx-auto my-4 uppercase py-3 px-8 sm:px-16 rounded-lg hover:bg-[#66fcf1]">GO TO Events..</a></div>
                </div>
            </div>
        </div>
    )
}