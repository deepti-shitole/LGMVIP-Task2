import React from 'react'

export default function Navbar( {getUsers} ) {

    return (
        <div className="nav">
            <h1>Shitole Deepti</h1>
            <div className="nav-btn" onClick={getUsers}>
                <h1>Get users</h1>
            </div>
        </div>
    )
}
