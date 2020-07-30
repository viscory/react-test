import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>A React To-do List</h1>
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

export default Header;