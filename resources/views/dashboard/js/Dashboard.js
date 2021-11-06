import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <div>
            Dashboard
            <Link to="me"> My Profile </Link>
        </div>
    );
}
