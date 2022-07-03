import React from 'react';

import './LogIn.css';

export const LogIn = () => {
    return (
        <form action="" className="log-in">
            <div className="frame">
                <h1>Zaloguj się</h1>
                <p>
                    <label>
                        Login
                        <input type="text" name="login" required maxLength={50}/>
                    </label>
                </p>
                <p>
                    <label>
                        Hasło
                        <input type="password" name="password" maxLength={50}/>
                    </label>
                </p>
                <button>Zaloguj</button>
                <p className="small">Jeśli nie pamiętasz hasła skontaktuj się z administratorem.</p>
            </div>
        </form>
    )
}