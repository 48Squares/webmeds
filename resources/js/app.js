import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';

if (document.getElementById('app')) {
    ReactDOM.render(<Home/>, document.getElementById('app'));
}
import "tailwindcss/tailwind.css";
