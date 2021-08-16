import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div className="navigation-bar">
            <ul>
                <Link to='/'>
                    <li className="nav-li">home</li>
                </Link>
                <Link to='/about'>
                    <li className="nav-li" >about me</li>
                </Link>
                <Link to='/work'>
                    <li className="nav-li">my work</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav
