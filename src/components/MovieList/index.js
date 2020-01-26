import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMoviesByFilter } from '../../redux/actions/movies';
import { clearErrors } from '../../redux/actions/ui';
import { withRouter } from 'react-router-dom'

import GridView from './GridView/GridView';
import TableView from './TableView/TableView';
import GridSkeleton from '../../utils/Skeleton/GridSkeleton';
import TableSkeleton from '../../utils/Skeleton/TableSkeleton';



class MovieList extends React.Component {
    componentDidMount() {
        if (this.props.movies.length < 1) {
            this.props.fetchMoviesByFilter(this.props.page, this.props.ui.filterBy)
                .catch(ex => {
                    this.props.history.push('/');
                });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
            this.props.fetchMoviesByFilter(this.props.page, this.props.ui.filterBy)
                .catch(err => {
                    this.props.history.push('/');
                });
        }
    }

    render() {
        const { movies, numOfPages, clearErrors, page } = this.props;
        const { errors } = this.props.ui;
        if (this.props.ui.loading) {
            return (
                <div>
                    {this.props.location.pathname.indexOf('gridView') > -1 ? <GridSkeleton /> : <TableSkeleton />}
                </div>
            )
        }

        if (this.props.type === 'grid') {
            return <GridView movies={movies} errors={errors} clearErrors={clearErrors} numOfPages={numOfPages} page={page} />
        } else {
            return <TableView movies={movies} errors={errors} clearErrors={clearErrors} numOfPages={numOfPages} page={page} />
        }
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    ui: PropTypes.object
};

MovieList.defaultProps = {
    movies: []
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    numOfPages: state.data.numOfPages,
    ui: state.UI
});
const mapActionsToProps = {
    fetchMoviesByFilter,
    clearErrors

}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(MovieList));