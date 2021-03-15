import React from 'react'
import {
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link className="navbar-brand" to="#">C'MON M-MORTY *BUURP* YOU, YOU... YOU GOTTA CLICK ON THE LINKS MORTY, LOOK AT THEM MORTY, DON'T YOU WANNA CLICK THEM MORTY?</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/characters">Characters</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/episodes">Episodes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/locations">Locations</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Header
