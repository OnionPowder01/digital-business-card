import React from "react";
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'



export default function Footer() {
    return (
        <div className="footer-container">
        <footer className="footer">
            <i><FaTwitterSquare /></i>
            <i><FaFacebookSquare /></i>
            <i><FaInstagramSquare /></i>
            <i><BsLinkedin /></i>
            <i><FaGithubSquare /></i>
        </footer>
        </div>
    )
}