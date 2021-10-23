import React from 'react';
import ReactDOM from 'react-dom';

if (document.getElementById('app')) {
    const index = import ('./screens/index');
    ReactDOM.render(<index/>, document.getElementById('app'));
}
import "tailwindcss/tailwind.css";
