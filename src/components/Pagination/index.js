import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { setCurrentPage } from '../../redux/actions/ui'

class Pagination extends React.Component {
    componentDidMount() {
        this.props.setCurrentPage(this.props.match.params.page || 1)
    }

    nextPage(page) {
        this.props.setCurrentPage(page)
    }



    render() {
        const { currentPage, numOfPages } = this.props
        console.log(this.props)
        const pageLinks = []
        let prevBtnDisabled = true;
        let nextBtnDisabled = false;

        if (currentPage > 1) {
            pageLinks.push(<button className='button is-dark' key={currentPage - 1} onClick={() => this.nextPage(currentPage - 1)}>{currentPage - 1}</button>)
        }
        pageLinks.push(<button className='button is-primary ' disabled key={currentPage}>{currentPage}</button>)
        pageLinks.push(<button className='button is-dark' key={currentPage + 1} onClick={() => this.nextPage(currentPage + 1)}>{currentPage + 1}</button>)

        // Check if previous btn should be disabled or enabled
        if (this.props.currentPage <= 1) {
            prevBtnDisabled = true;
        } else prevBtnDisabled = false;
        // Check if next btn should be disabled or enabled
        if (this.props.currentPage >= this.props.numOfPages) {
            nextBtnDisabled = false;
        } else nextBtnDisabled = false;

        return (
            <div className='buttons pagination'>
                {currentPage > 10 ? <button className='button is-dark' key={currentPage - 10} onClick={() => this.nextPage(currentPage - 10)}>{currentPage - 10}</button> : null}
                {<button className={`button is-dark `} disabled={prevBtnDisabled} key={Math.random()} onClick={() => this.nextPage(this.props.currentPage - 1)}>Prev</button>}
                {pageLinks}
                {this.props.currentPage >= this.props.numOfPages && !nextBtnDisabled ? null : <button className={`button is-dark`} key={this.props.currentPage} onClick={() => this.nextPage(this.props.currentPage + 1)}>Next</button>}
                {numOfPages - currentPage > 10 ? <button className='button is-dark' key={currentPage + 10} onClick={() => this.nextPage(currentPage + 10)}>{currentPage + 10}</button> : null}
            </div>
        )

    }
}
Pagination.defaultProps = {
    currentPage: 1
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func
}

const mapStateToProps = state => ({
    currentPage: state.UI.currentPage
})
const mapActionsToProps = {
    setCurrentPage
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Pagination));