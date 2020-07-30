import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>A React To-do List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">Super Secret Stuff</Link>
        </header>
    )
}

const headerStyle = {
    background: '#00bcd4',
    color: '#b2ebf2',
    textAlign: 'center',
    padding: '10px',
    fontWeight: "bold"
}

const linkStyle = {
    textDecoration: 'none',
    "&:hover": {
        background: "#efefef"
    },
}

export default Header;