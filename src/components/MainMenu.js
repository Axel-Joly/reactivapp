import React, { useState } from "react";
import '../styles/MainMenu.css'

function MainMenu() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
      };
    const acceuil = 'acceuil';
    const project = 'project';
    const contact = 'contact';
    const login = 'login';
    const register ='register';

    return (
        <nav className={`App-mainmenu-contenaire ${isActive ? "active" : ""}`}>
            <div className='App-mainmenu-burger' onClick={handleToggle} >
                <a>  
                        <span></span>
                        <span></span>
                        <span></span>
                </a>      
            </div>
            <ul className='App-mainmenu-list'>
                <li className='App-mainmenu-item'><a>{acceuil.toUpperCase()}</a></li>
                <li className='App-mainmenu-item'><a>{project.toUpperCase()}</a></li>
                <li className='App-mainmenu-item'><a>{contact.toUpperCase()}</a></li>
                <li className='App-mainmenu-separator'></li>
                <li className='App-mainmenu-item'><a>{login.toUpperCase()}</a></li>
                <li className='App-mainmenu-item'><a>{register.toUpperCase()}</a></li>
            </ul>
        </nav>
    )
}

export default MainMenu;