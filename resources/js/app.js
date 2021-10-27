import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import {BrowserRouter, Route} from "react-router-dom";

if (document.getElementById('app')) {
    ReactDOM.render(<Home/>, document.getElementById('app'));
}
import "tailwindcss/tailwind.css";
import MobileSearch from "./screens/search/MobileSearch";
