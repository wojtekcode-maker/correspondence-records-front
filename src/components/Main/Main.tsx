import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LogIn} from "../LogIn/LogIn";

import './Main.css';
import {NavExtended} from "../Nav-Extended/NavExtended";

export const Main = () => {
    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/income" element={<NavExtended/>}/>
            </Routes>
        </main>
    )
}