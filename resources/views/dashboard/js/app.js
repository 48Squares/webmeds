import React from 'react';

import "tailwindcss/tailwind.css";
import Dashboard from "./Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Me from "../Me";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="test" element={<Dashboard />} > Dash </Route>
                <Route path="/test/me" element={<Me />} />
            </Routes>
        </BrowserRouter>
    );
}
