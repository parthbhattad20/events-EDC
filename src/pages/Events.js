import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import eventMain from "/images/hero-event.png"
// import Slider from "react-slick";
// import Card from "../components/Card"
// import Data from "../components/CardData"
import EventCard from "../components/EventCard"
import TEventCard from "../components/TEventCard"
import video from "../assets/edc_trailer1.mp4"

export default function Events(){

    // const cardEl = Data.map(item => 
    //         <Card 
    //         date={item.date} 
    //         key={item.id}
    //         imgId={item.imgId}
    //         title={item.title}
    //         des={item.des}
    //         />)

    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 750,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    // }
    return(
        <div>
      <Navbar />
      <div className="">
        <div className="relative bg-[#0b0c10]">
          <div className="video-container h-[590px] object-fit">
            <video autoPlay loop  className="w-full h-full object-cover">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-42 md:w-auto">
            {/* <h1 className="text-center text-6xl lg:text-7xl xl:text-8xl pb-2 md:pb-4 text-[#66fcf1] font-bold uppercase tracking-wider"></h1> */}
            <p className="text-normal text-center border-t border-[#66fcf1] p-0 pt-2 md:pt-4 tracking-wide"></p>
          </div>
        </div>
        <div className=" pt-2">
          <div>
            <h2 className="text-center text-6xl lg:text-7xl xl:text-8xl pb-2 md:pb-4 text-[#66fcf1] font-bold uppercase tracking-wider">	Events</h2>
            <div className="max-w-[1250px] mx-auto px-8 py-4">
              <TEventCard />
            </div>
          </div>
          <div>
            <h2 className="text-3xl max-w-[1250px] pl-7 mx-auto md:text-4xl xl:text-5xl py-8 text-[#66fcf1] font-thin uppercase tracking-wider">	</h2>
            <div className="max-w-[1250px] mx-auto px-8 py-4">
              <EventCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}