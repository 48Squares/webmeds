import React, {useState} from "react";
import MetaHeader from "../components/MetaHeader";
import DesktopNavigation from "../components/DesktopNavigation";
import MobileNavigation from "../components/MobileNavigation";
import DesktopSlider from "../components/DesktopSlider";
import DesktopMenuBar from "../components/DesktopMenuBar";
import TrendingBrands from "../components/TrendingBrands";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedBrands from "../components/FeaturedBrands";
import Banner from "../components/Banners/Banner";
import HomePageSeo from "../components/Seo/HomePageSeo";
import CopyRight from "../components/etc/CopyRight";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default function Home() {
    const [sideNav, setSideNav] = useState(false);

    const sideNavCallback = function () {
        setSideNav(false);
    };

    return (
        <div className="bg-indigo-50">
            <MetaHeader/>

            {/*<MobileNavigation*/}
            {/*    sideNav={sideNav}*/}
            {/*    callback={sideNavCallback}*/}
            {/*    onClick={() => setSideNav(!sideNav)}*/}
            {/*/>*/}

            <DesktopNavigation/>

            {/*<DesktopMenuBar/>*/}

            <Router>


            </Router>
        </div>
    );
}



