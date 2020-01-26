import './index.scss'

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import { fetchMoviesByKeyword } from '../../redux/actions/movies';
import { setFilters } from '../../redux/actions/ui';

//ICONS
import { IoMdGrid, IoIosList } from 'react-icons/io';

class Header extends React.Component {
    state = {
        keyword: '',
    }

    handleChange = e => {
        this.setState({ keyword: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMoviesByKeyword(this.state.keyword)
            .catch(ex => {
                alert('Something failed');
            });
        this.setState({ keyword: '' })
        this.props.setFilters('search')
        this.handleOpen()
    }
    onLogoClick = () => {
        this.props.setFilters('popular');
        this.props.history.push(`/gridView/1`);
        window.scrollTo(0, 0)
    }

    handleOpen = () => {
        if (window.innerWidth < 1024) {
            var burger = document.querySelector('.burger')
            var nav = document.querySelector('#navMenu')
            burger.classList.toggle('is-active')
            nav.classList.toggle('navbar__menu--is-active')
        } else {
            window.scrollTo(0, 0)
        }
    }

    render() {
        const { location: { pathname } } = this.props;
        const page = parseInt(pathname.split('/').pop(), 10);

        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className='container'>
                    <div className="navbar-brand">
                        <Link to='/gridView/1'>
                            <img src={this.props.logo} className='navbar-brand__image' alt='logo' onClick={() => this.onLogoClick()} />
                        </Link>
                        <span className='navbar-burger burger is-vcentered' data-target='navMenu' onClick={(e) => { this.handleOpen() }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id='navMenu' className='navbar-menu'>
                        <form onSubmit={this.onSubmit} className='navbar__form'>
                            <input className="input is-rounded navbar__form__search is-vcentered" type="text" value={this.state.keyword} placeholder="Search Vivant Movie Database" onChange={this.handleChange}></input>
                        </form>
                        <div className='navbar__view navbar-end'>
                            <Link to={`/gridView/${page}`} ><IoMdGrid className={pathname.indexOf('gridView') > 0 ? 'navbar__view__active' : 'navbar__view__non-active'} onClick={(e) => this.handleOpen()} /></Link>
                            <Link to={`/tableView/${page}`} ><IoIosList className={pathname.indexOf('tableView') > 0 ? 'navbar__view__active' : 'navbar__view__non-active'} onClick={(e) => this.handleOpen()} /></Link>
                        </div>

                    </div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    setFilters: PropTypes.func.isRequired,
    fetchMoviesByKeyword: PropTypes.func.isRequired,
}

const mapActionsToProps = {
    setFilters,
    fetchMoviesByKeyword
};

export default connect(null, mapActionsToProps)(withRouter(Header));



