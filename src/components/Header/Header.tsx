import React from 'react';

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
                        <a href="/">Przychodząca</a>
                    </li>
                    <li>
                        <a href="/">Wychodząca</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}