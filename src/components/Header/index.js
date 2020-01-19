import './index.scss'

import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const Header = (props) => {
    const { pathname } = props.location;

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className='container'>
                <Link to='/'>
                    <div className="navbar-brand navbar__brand">
                        <img src={props.logo} className='navbar__brand__image' alt='logo' />
                    </div>
                </Link>
                <input className="input is-rounded navbar__search" type="text" placeholder="Search Vivant Movie Database"></input>
                <Link to="/" className={pathname === '/' ? 'active' : 'none-active'}>Card View</Link>
                <Link to="/tableView" className={pathname === '/tableView' ? 'active' : 'none-active'}>Table view</Link>

            </div>
        </nav>
    )
}

export default withRouter(Header);