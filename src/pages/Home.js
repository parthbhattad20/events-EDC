import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bhau from "../assets/BHAU.jpeg"
import campustimes from "../assets/CT.jpeg"
import saket from "../assets/SAKET.jpeg"
import nyahari from "../assets/nyahari.jpg"
import SMG from "../assets/SMG.jpg";
import time from "../assets/TIME.jpeg"
import finlatics from "../assets/FIN.jpeg"

const Timeline = () => {
    return (
        <section>
            <Navbar />
            
        
            <div className="bg-black text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="ml-2 text-cyan-500 uppercase tracking-loose">
                            Working Process
                        </p>
                        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                            Working Process of Venturers 2023
                        </p>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                            Here’s your guide to the mega event VENTURERS 2023
                            timeline. Go through all the events to know about
                            the event.
                        </p>
                        <a
                            href="/events"
                            className="bg-transparent mr-auto hover:bg-cyan-300 text-cyan-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-cyan-300 hover:border-transparent"
                        >
                            Register for sub-events{" "}
                            <span className="animate-ping">::</span>
                        </a>
                    </div>

                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div
                                    className="border-2-2 border-cyan-300 absolute h-full border"
                                    style={{
                                        right: "50%",
                                        border: "2px solid #FFC100",
                                        borderRadius: "1%",
                                    }}
                                ></div>
                                <div
                                    className="border-2-2 border-yellow-555 absolute h-full border"
                                    style={{
                                        left: "50%",
                                        border: "2px solid #FFC100",
                                        borderRadius: "1%",
                                    }}
                                ></div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-cyan-300">
                                            28 Sept-6 Oct, 2023
                                        </p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                                            {" "}
                                            Registration Process
                                        </h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            Pick your favourite event(s) and
                                            register in that event by 4th Oct .
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                                        <p className="mb-3 text-base text-cyan-300">
                                            5-6 Oct, 2023
                                        </p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                                            Venturers
                                        </h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            Participate online. The links for
                                            registrations are provided in events
                                            section.
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-cyan-300"> 10 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The ultimate genius will be revealed by 
                    </p>
                  </div>
                </div> */}

                                {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-cyan-300">12 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Prize Distribution</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their addresses
                    </p>
                  </div>
                </div> */}
                            </div>
                            <img
                                className="mx-auto -mt-36 md:-mt-36"
                                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                                alt="Timeline "
                            />
                        </div>
                    </div>
                </div>
                <div class="bg-black py-8">
    <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-4 text-center text-cyan-300">Our Sponsors</h2>
        <div class="flex flex-wrap justify-center">
          
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src={SMG} alt="Sponsor 1" class="mx-auto h-20" />
            </div>
        
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src={nyahari} alt="Sponsor 2" class="mx-auto h-20" />
            </div>
       
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src={bhau} alt="Sponsor 3" class="mx-auto h-20" />
            </div>
        
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src={campustimes} alt="Sponsor 4" class="mx-auto h-20" />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src="https://media.potatopro.com/budhani-bros-1600x785.jpg?width=480&height=480&mode=fit" alt="Sponsor 4" class="mx-auto h-20" />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src={saket} alt="Sponsor 4" class="mx-auto h-20" />
            </div>
            <div class="w-full object-fit sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src={finlatics} alt="Sponsor 4" class="mx-auto h-20" />
            </div>

 
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
                <img src={time} alt="Sponsor 5" class="mx-auto h-20" />
            </div>
        </div>
    </div>
</div>
            </div>
      
      
            <Footer />
        </section>
    );
};

export default Timeline;
