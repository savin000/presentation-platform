import "../styles/components/root.css"
import React from 'react';
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="application">
            <NavigationBar />
            <Outlet />
        </div>
    )
}