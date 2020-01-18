import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'


// UI
import logo from '../../images/logo.png' 


const Navbar = (props) => {
    return(
        


        <nav className="navbar is-dark is-transparent" role="navigation" aria-label="main navigation">
           <div className='container'>
                <Link to='/'>
                    <div className="navbar-brand navbar__brand" 
                        >
                            <img src={logo} className='navbar__brand__image' alt='logo' />
                    </div>
                </Link>
                <input class="input is-rounded navbar__search" type="text" placeholder="Search CDP Movies"></input>
           </div>
        </nav>
    )
}

export default Navbar