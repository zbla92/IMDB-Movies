import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { fetchMoviesByFilter } from '../../redux/actions/movies';


class Pagination extends React.Component {

    generateButton = (btnPage, isDisabled, numOfPages, name = btnPage, className = '') => {
        // This function is used to generate pagination button. 
        //btnPage = expression that resolves buttons number (page number)
        // isDisabled = true or false - rendering button clickable or not
        // numOfPages = Total number of pages fetched for the current filter
        //name = rendered name for the button, usually number, next || prev
        // className =  passing additional styling to particular button
        const viewType = this.props.location.pathname.split('View')[0] + 'View';
        if ((btnPage >= 1 && btnPage <= numOfPages) || name === 'Prev' || name === 'Next') {
            return (
                <button className={`button pagination__button ${className}`}
                    disabled={isDisabled}
                    key={name}
                    onClick={() => {
                        this.props.history.push(`${viewType}/${btnPage}`)
                        window.scrollTo(0, 0)
                    }}>
                    {name}
                </button>
            )
        } else return null
    }

    render() {
        const { numOfPages, page: currentPage } = this.props;
        const dots = <span className="pagination-ellipsis">&hellip;</span>;

        return (
            <div className='buttons pagination'>
                {/** PREV PAGE -- far right */}
                {this.generateButton(currentPage - 1, currentPage > 1 ? false : true, numOfPages, 'Prev', 'pagination__button__next')}
                {/*Button that appears to be -10 pages from current page*/}
                {this.generateButton(currentPage > 2 ? 1 : null, false, numOfPages)}
                {currentPage > 2 ? dots : null}
                {/*Button that appears to be -1 pages from current page*/}
                {this.generateButton(window.innerWidth < 600 ? null : currentPage - 1, false, numOfPages)}
                {/** Current page */}
                {this.generateButton(currentPage, true, numOfPages, currentPage, 'pagination__button--is-active')}
                {/* Next Page*/}
                {this.generateButton(window.innerWidth < 600 ? null : currentPage + 1, false, numOfPages)}
                {/** +10 pages */}
                {currentPage < numOfPages - 1 ? dots : null}
                {this.generateButton(currentPage < numOfPages - 1 ? numOfPages : null, false, numOfPages)}
                {/** NEXT PAGE - far left */}
                {this.generateButton(currentPage + 1, currentPage < numOfPages ? false : true, numOfPages, 'Next', 'pagination__button__prev')}
            </div>
        )

    }
}
Pagination.defaultProps = {
    currentPage: 1
};

Pagination.propTypes = {
    ui: PropTypes.object.isRequired,
    fetchMoviesByFilter: PropTypes.func.isRequired,
    numOfPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    ui: state.UI,
    numOfPages: state.data.numOfPages
})
const mapActionsToProps = {
    fetchMoviesByFilter
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Pagination));