import './index.scss'

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import { fetchMoviesByKeyword } from '../../redux/actions/movies'
import MovieList from '../MovieList';

//ICONS
import { IoMdGrid, IoIosList } from 'react-icons/io';

class Header extends React.Component {
    state = {
        keyword: ''
    }

    handleChange = e => {
        this.setState({ keyword: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMoviesByKeyword(this.state.keyword)
    }


    renderactiveView(CurrentPath, btnPath) {
        console.log(CurrentPath.indexOf(btnPath))
        if (CurrentPath.indexOf(btnPath) > 0) return { color: 'white' }
    }

    render() {
        const { pathname } = this.props.location;
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className='container'>
                    <Link to='/'>
                        <div className="navbar-brand navbar__brand">
                            <img src={this.props.logo} className='navbar__brand__image' alt='logo' />
                        </div>
                    </Link>
                    <form onSubmit={this.onSubmit}>
                        <input className="input is-rounded navbar__search" type="text" placeholder="Search Vivant Movie Database" onChange={this.handleChange}></input>
                    </form>
                    <div className='navbar__view'>
                        <Link to="/" ><IoMdGrid className={pathname.indexOf('gridView') > 0 ? 'navbar__view__active' : 'navbar__view__non-active'} /></Link>
                        <Link to="/tableView" ><IoIosList className={pathname.indexOf('tableView') > 0 ? 'navbar__view__active' : 'navbar__view__non-active'} /></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

MovieList.propTypes = {
    movies: PropTypes.array
};

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { fetchMoviesByKeyword })(withRouter(Header));



