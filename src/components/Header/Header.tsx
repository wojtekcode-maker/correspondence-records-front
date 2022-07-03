import React from 'react';
// @ts-ignore
import LineIcon from "react-lineicons";

import './Header.css'

export const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                <a href="/">
                    <h1>Dziennik korespondencji</h1>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Przychodząca
                            <LineIcon name="inbox"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Wychodząca
                            <LineIcon name="exit-up"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}