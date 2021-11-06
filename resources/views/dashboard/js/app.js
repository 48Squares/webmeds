import React from 'react';

import "tailwindcss/tailwind.css";
import Dashboard from "./Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Me from "../Me";

export default function App() {
    return (
        @include('./base/start.html')


        @include('./base/navbar.html')


        <!-- strat wrapper -->
    <div class="h-screen flex flex-row flex-wrap">

        @include('./base/sidebar.html')

        <!-- strat content -->
    <div class="bg-gray-100 flex-1 p-6 md:mt-16">


        <!-- General Report -->
    @include('./index/generalReport.html')
    <!-- End General Report -->

    <!-- strat Analytics -->
    @include('./index/analytics-1.html')
    <!-- end Analytics -->

    @include('./index/salesOverview.html')

    @include('./index/numbers.html')

    @include('./index/quickInfo.html')


    </div>

</div>



@include('./base/end.html')

<BrowserRouter>
            <Routes>
                <Route path="test" element={<Dashboard />} > Dash </Route>
                <Route path="/test/me" element={<Me />} />
            </Routes>
        </BrowserRouter>
    );
}
