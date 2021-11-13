// import React from "react";
import gk from '../../assets/images/gk-profile.jpg';

const Common = () => {
    return(
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={gk} alt="gk"/>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">About Me</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Software Engineer turned Agri Entrepreneur</a>
                    <p className="mt-2 text-gray-500">Gopi Krishna M, currently gaining experience in agriculture and its associates fields.</p>
                </div>
            </div>
        </div>
    );
}

export default Common;