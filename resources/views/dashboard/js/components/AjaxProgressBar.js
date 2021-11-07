import React, {useState} from 'react';

export default function AjaxProgressBar() {
    let [status, setStatus] = useState(0);
    setInterval(function () {
        setStatus(++status);
    }, 500);

    return (
        <span className="fixed top-0 break-words bg-black whitespace-pre box-border z-50"
              style={{width: status + '%', height: '3px', transition: 'width 2s'}}> </span>
    );
}
