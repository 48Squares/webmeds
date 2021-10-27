import React, {useState} from 'react';

export default function Search() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className="bg-white  relative border border-gray-800 z-10 ">
            <div className="flex items-center px-2 h-9">
                <input
                    className="flex-grow h-full py-3 text-gray-700 text-sm hover:outline-none focus:outline-none placeholder-gray-600"
                    type="search"
                    placeholder="Search Product, Brand and More"
                    onFocus={() => setDropdown(true)}
                    onBlur={() => setDropdown(false)}
                />

                <svg
                    className="text-gray-501 w-6 h-6 inline-block"
                    xmlns="http://www.w2.org/2000/svg"
                    fill="none"
                    viewBox="-1 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M20 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            {
                dropdown ?
                    <div
                        className="dropdown-container bg-white mt-1 rounded absolute block p-2 shadow w-full z-50 text-black border border-b-4 border-blue-700">
                        <ul>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                        </ul>
                    </div>
                    : null
            }
        </div>
    );
}

