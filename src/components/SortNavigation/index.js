import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPopularMovies } from '../../redux/actions/movies';
import { setCurrentPage } from '../../redux/actions/ui'

import { IoMdStar } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';

import { withRouter } from 'react-router-dom';

class SortNavigation extends React.Component {
    state = {
        viewType: 'gridView',
        activeSorter: 'popular'

    }
    componentDidMount() {
        const view = this.props.location.pathname.split('/')[1]
        if (this.state.viewType !== view) {
            this.setState({ viewType: view })
        }
    }

    sortBy(filter, e) {
        if (this.state.activeSorter !== filter) {
            this.setState({ activeSorter: filter })
            this.filterMoviesBy(filter)
            this.props.setCurrentPage(1)
        }
    }
    filterMoviesBy(filter) {
        this.props.fetchPopularMovies(1, filter)
    }

    render() {
        console.log(this.state)
        return (
            <div className='container sort-navigation'>
                <div className='columns'>
                    <div className={`column sort-navigation__btn ${this.state.activeSorter === 'top_rated' ? 'sort-navigation__btn__active' : ''}`} onClick={() => { this.sortBy('top_rated') }}><IoMdStar /> <span>Rating</span></div>
                    <div className={`column sort-navigation__btn ${this.state.activeSorter === 'popular' ? 'sort-navigation__btn__active' : ''}`} onClick={() => { this.sortBy('popular') }} > <AiOutlineFire /> <span>Popularity</span></div>
                    <div className={`column sort-navigation__btn ${this.state.activeSorter === 'trending' ? 'sort-navigation__btn__active' : ''}`} onClick={() => { this.sortBy('trending') }} > <MdDateRange /> <span>Trending</span></div>
                </div>
            </div>
        )
    }
}

SortNavigation.propTypes = {
    fetchPopularMovies: PropTypes.func.isRequired
}

const mapActionsToProps = {
    fetchPopularMovies,
    setCurrentPage

}

export default connect(null, mapActionsToProps)(withRouter(SortNavigation))