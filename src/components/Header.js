import myImage from '../images/315559814_5754800861268999_3463242412805140419_n.jpg'
import { HiOutlineMailOpen } from 'react-icons/hi'
import React from "react";

export default function Header() {
    return (
        <header>
            <img src={myImage} alt="protrait" className="portrait" />
            <h2 className="name">Andronache Razvan Andrei</h2>
            <h4 className="job">Frontend Developer</h4>
            <p className="website">www.linkedin.com/in/andronacherazvanandrei</p>
            <div className="mail-btn"> 
            <button className="e-mail"><HiOutlineMailOpen />  E-mail</button>
            </div>
        </header>
    )
}