import React from "react";
import th from "../assets/TH.jpeg"
import st from "../assets/ST.jpeg"
import ca from "../assets/ca.jpeg"
import bm from "../assets/bm.jpeg"
import ns from '../assets/NS.jpeg'


function EventCard() {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div class="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 basis:1/3">
                <a href="/">
                    <img
                        class="rounded-t-lg"
                        src={th}
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white uppercase">
                            Treasure Hunt
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">
                  
                    </p>
                    <a
                        href="/register"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        Register 
                        {/* <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </a>
                </div>
            </div>
            <div class="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 basis:1/3">
                <a href="/">
                    <img
                        class="rounded-t-lg"
                        src={st}
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white uppercase">
                            Shark Tank
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">
                   
                    </p>
                    <a
                        href="/register"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        Register 
                        {/* <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </a>
                </div>
            </div>
            <div class="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 basis:1/3">
                <a href="/">
                    <img
                        class="rounded-t-lg"
                        src={
                            ca
                        }
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white uppercase">
                            Crick Auction
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">
                   
                    </p>
                    <a
                        href="/register"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        Register 
                        {/* <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </a>
                </div>
            </div>
            <div class="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 basis:1/3">
                <a href="/">
                    <img
                        class="rounded-t-lg"
                        src={
                            bm
                        }
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white uppercase">
                            Board meeting
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">
                   
                    </p>
                    <a
                        href="/register"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        Register 
                        {/* <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </a>
                </div>
            </div>
            <div class="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 basis:1/3">
                <a href="/">
                    <img
                        class="rounded-t-lg"
                        src={
                            ns
                        }
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white uppercase">
                            Networking Session
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-400">
                   
                    </p>
                    <a
                        href="http://34.229.59.233:8000/"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        Register 
                        {/* <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
