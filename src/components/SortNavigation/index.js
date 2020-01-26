import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchMoviesByFilter } from '../../redux/actions/movies';
import { setFilters } from '../../redux/actions/ui'

import { IoMdStar } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';

import { withRouter } from 'react-router-dom';

class SortNavigation extends React.Component {
    state = {
        viewType: 'gridView',
    }
    componentDidMount() {
        const view = this.props.location.pathname.split('/')[1]
        if (this.state.viewType !== view) {
        }
    }

    sortBy(filter, e) {
        if (this.props.filterBy !== filter) {
            this.props.setFilters(filter)
            this.filterMoviesBy(filter)
            this.props.history.push(`/${this.state.viewType}/1`);
        }
    }
    filterMoviesBy(filter) {
        this.props.fetchMoviesByFilter(1, filter)
    }

    render() {
        return (
            <div className='sort-'>
                <div className='sort-navigation'>
                    <div className={`column sort-navigation__btn ${this.props.filterBy === 'top_rated' ? 'sort-navigation__btn__active' : ''}`} onClick={() => { this.sortBy('top_rated') }}><IoMdStar /> <span>Rating</span></div>
                    <div className={`column sort-navigation__btn ${this.props.filterBy === 'popular' ? 'sort-navigation__btn__active' : ''}`} onClick={() => { this.sortBy('popular') }} > <AiOutlineFire /> <span>Popularity</span></div>
                    <div className={`column sort-navigation__btn ${this.props.filterBy === 'trending' ? 'sort-navigation__btn__active' : ''}`} onClick={() => { this.sortBy('trending') }} > <MdDateRange /> <span>Trending</span></div>
                </div>
            </div>
        )
    }
}

SortNavigation.defaultProps = {
    filterBy: 'popular'
}

SortNavigation.propTypes = {
    fetchMoviesByFilter: PropTypes.func.isRequired,
    filterBy: PropTypes.string.isRequired
}

const mapActionsToProps = {
    fetchMoviesByFilter,
    setFilters
}
const mapStateToProps = state => ({
    filterBy: state.UI.filterBy
})

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SortNavigation))