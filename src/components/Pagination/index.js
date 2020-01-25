import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { setCurrentPage } from '../../redux/actions/ui'
import { fetchPopularMovies } from '../../redux/actions/movies';


class Pagination extends React.Component {
    nextPage(page) {
        this.props.setCurrentPage(page)
        this.props.fetchPopularMovies(page, this.props.ui.filterBy)
    }

    generateButton(btnPage, isDisabled, numOfPages, currentPage, name = btnPage, className = '') {

        if (btnPage >= 1 && btnPage <= numOfPages) {
            return (
                <button className={`button ${className}`}
                    disabled={isDisabled}
                    key={name}
                    onClick={() => this.nextPage(btnPage)}>
                    {name}
                </button>
            )
        } else return null
    }


    render() {
        const { numOfPages, ui: { currentPage } } = this.props
        const dots = <span className="pagination-ellipsis">&hellip;</span>;


        return (
            <div className='buttons pagination'>
                {/** PREV PAGE -- far right */}
                {this.generateButton(currentPage - 1, false, numOfPages, currentPage, 'Prev', 'pagination__prev')}
                {/*Button that appears to be -10 pages from current page*/}
                {this.generateButton(currentPage > 2 ? 1 : null, false, numOfPages, currentPage)}
                {currentPage > 2 ? dots : null}
                {/*Button that appears to be -1 pages from current page*/}
                {this.generateButton(currentPage - 1, false, numOfPages, currentPage)}
                {/** Current page */}
                {this.generateButton(currentPage, true, numOfPages, currentPage, currentPage, 'is-primary')}
                {/* Next Page*/}
                {this.generateButton(currentPage + 1, false, numOfPages, currentPage)}
                {/** +10 pages */}
                {currentPage < numOfPages ? dots : null}
                {this.generateButton(currentPage < numOfPages ? numOfPages : null, false, numOfPages, currentPage)}
                {/** NEXT PAGE - far left */}
                {this.generateButton(currentPage + 1, false, numOfPages, currentPage, 'Next', 'pagination__next')}
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