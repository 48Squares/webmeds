import React from 'react';

import "tailwindcss/tailwind.css";
import Dashboard from "./screen/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Product from "./screen/Product";

export default function App() {
    return (
        <>
            <Navbar/>
            <div className="h-screen flex flex-row flex-wrap">
                <Sidebar/>

                <div className="bg-gray-100 flex-1 p-6 md:mt-16">
                    <BrowserRouter>
                        <Routes>
                            <Route path="test" element={<Dashboard/>} />
                            <Route path="/test/product" element={<Product/>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </>
    );
}
