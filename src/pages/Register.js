import React from "react";
import Navbar from "../components/Navbar";

function Register() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
        <form className="max-w-[800px] mx-auto mt-10">
            <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=" First Name"
                        required=""
                    />
                </div>
                <div>
                    <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name"
                        required=""
                    />
                </div>
                <div>
                    <label
                        for="company"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Event Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Event Name"
                        required=""
                    />
                </div>
                <div>
                    <label
                        for="phone"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Phone number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required=""
                    />
                </div>
                
                
            </div>
            <div class="mb-6">
                <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required=""
                />
            </div>
            
            
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                    />
                </div>
               
            </div>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register
            </button>
        </form>
        </div>
    );
}

export default Register;
