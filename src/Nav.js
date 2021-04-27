import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const navStyle = {
    color: 'white',
    textDecoration:'none'
}

const Nav = () => {
    return (
        <nav>
            <Link style={navStyle} to='/'>
                <div style={{fontSize: '30px'}}>Home</div>
            </Link>
            <ul className='nav-links'>
            <Link style={navStyle} to='/about'>
                <div style={{fontSize: '30px'}}>About</div>
            </Link>
            </ul>
        </nav>
    )
}

export default Nav
