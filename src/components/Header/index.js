import './index.scss';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Link from 'next/link';

import { fetchMoviesByKeyword } from '../../redux/actions/movies';
import { setFilters } from '../../redux/actions/ui';

//ICONS
import { IoMdGrid, IoIosList } from 'react-icons/io';

class Header extends React.Component {
  state = {
    keyword: ''
  };

  handleChange = e => {
    // this.setState({ keyword: e.target.value });
    console.log('handleChange');
  };
  onSubmit = e => {
    e.preventDefault();
    // this.props.fetchMoviesByKeyword(this.state.keyword).catch(ex => {
    //   alert('Something failed');
    //   this.props.setFilters('popular');
    // });
    // this.setState({ keyword: '' });
    // this.props.setFilters('search');
    // this.handleOpen();
    console.log('onSubmit');
  };
  onLogoClick = () => {
    // this.props.setFilters('popular');
    // this.props.history.push(`/gridView/1`);
    // window.scrollTo(0, 0);
    console.log('onLogoClick');
  };

  handleOpen = () => {
    // if (window.innerWidth < 1024) {
    //     var burger = document.querySelector('.burger')
    //     var nav = document.querySelector('#navMenu')
    //     burger.classList.toggle('is-active')
    //     nav.classList.toggle('navbar__menu--is-active')
    // }
    console.log('handleOpen');
  };

  render() {
    // const {
    //   location: { pathname }
    // } = this.props;
    // const page = parseInt(pathname.split('/').pop(), 10);

    //test
    const page = 2;
    const pathname = 'gridView';
    //

    return (
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            {/* <Link to='/ridView/1'> */}
            <img
              src={this.props.logo}
              className='navbar-brand__image'
              alt='logo'
              onClick={() => this.onLogoClick()}
            />
            {/* </Link> */}
            <span
              className='navbar-burger burger is-vcentered'
              data-target='navMenu'
              onClick={e => {
                this.handleOpen();
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id='navMenu' className='navbar-menu'>
            <form onSubmit={this.onSubmit} className='navbar__form'>
              <input
                className='input is-rounded navbar__form__search is-vcentered'
                type='text'
                value={this.state.keyword}
                placeholder='Search Vivant Movie Database'
                onChange={this.handleChange}
              ></input>
            </form>
            <div className='navbar__view navbar-end'>
              {/* <Link to={`/GridView/${page}`}> */}
              <IoMdGrid
                className={
                  pathname.indexOf('GridView') > 0
                    ? 'navbar__view__active'
                    : 'navbar__view__non-active'
                }
                onClick={e => {
                  this.handleOpen();
                  window.scrollTo(0, 0);
                }}
              />
              {/* </Link> */}
              {/* <Link href={`/TableView/${page}`}> */}
              <>
                <IoIosList
                  className={
                    pathname.indexOf('TableView') > 0
                      ? 'navbar__view__active'
                      : 'navbar__view__non-active'
                  }
                  onClick={e => {
                    this.handleOpen();
                    window.scrollTo(0, 0);
                  }}
                />
              </>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

// Header.propTypes = {
//   setFilters: PropTypes.func.isRequired,
//   fetchMoviesByKeyword: PropTypes.func.isRequired,
//   location: PropTypes.object.isRequired
// };

// const mapActionsToProps = {
//   setFilters,
//   fetchMoviesByKeyword
// };

// export default connect(null, mapActionsToProps)(withRouter(Header));
export default Header;
