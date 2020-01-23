import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { setCurrentPage } from '../../redux/actions/ui'
import { fetchPopularMovies } from '../../redux/actions/movies';


class Pagination extends React.Component {
    nextPage(page) {
        console.log('Fetching on a next page with page ', page, 'and fltering by ', this.props.filterBy)

        this.props.setCurrentPage(page)
        this.props.fetchPopularMovies(page, this.props.ui.filterBy)
    }



    render() {
        console.log(this.props)
        const { numOfPages, ui: { currentPage, filterBy } } = this.props
        const pageLinks = []
        let prevBtnDisabled = true;
        let nextBtnDisabled = false;

        if (currentPage > 1) {
            pageLinks.push(<button className='button is-dark' key={currentPage - 1} onClick={() => this.nextPage(currentPage - 1)}>{currentPage - 1}</button>)
        }
        pageLinks.push(<button className='button is-primary ' disabled key={currentPage}>{currentPage}</button>)
        pageLinks.push(<button className='button is-dark' key={currentPage + 1} onClick={() => this.nextPage(currentPage + 1)}>{currentPage + 1}</button>)

        // Check if previous btn should be disabled or enabled
        if (currentPage <= 1) {
            prevBtnDisabled = true;
        } else prevBtnDisabled = false;
        // Check if next btn should be disabled or enabled
        if (currentPage >= numOfPages) {
            nextBtnDisabled = false;
        } else nextBtnDisabled = false;

        return (
            <div className='buttons pagination'>
                {currentPage > 10 ? <button className='button is-dark' key={currentPage - 10} onClick={() => this.nextPage(currentPage - 10)}>{currentPage - 10}</button> : null}
                {<button className={`button is-dark `} disabled={prevBtnDisabled} key={Math.random()} onClick={() => this.nextPage(currentPage - 1)}>Prev</button>}
                {pageLinks}
                {currentPage >= numOfPages && !nextBtnDisabled ? null : <button className={`button is-dark`} key={currentPage} onClick={() => this.nextPage(currentPage + 1)}>Next</button>}
                {numOfPages - currentPage > 10 ? <button className='button is-dark' key={currentPage + 10} onClick={() => this.nextPage(currentPage + 10)}>{currentPage + 10}</button> : null}
            </div>
        )

    }
}
Pagination.defaultProps = {
    currentPage: 1
};

Pagination.propTypes = {
    ui: PropTypes.object.isRequired,
    setCurrentPage: PropTypes.func
}

const mapStateToProps = state => ({
    ui: state.UI,
    numOfPages: state.data.numOfPages
})
const mapActionsToProps = {
    setCurrentPage,
    fetchPopularMovies
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Pagination));