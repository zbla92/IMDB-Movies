import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPopularMovies } from '../../redux/actions/movies';
import { clearErrors, setCurrentPage } from '../../redux/actions/ui';
import { withRouter } from 'react-router-dom'

import GridView from './GridView';
import TableView from './TableView';
import GridSkeleton from '../Skeleton/GridSkeleton';
import TableSkeleton from '../Skeleton/TableSkeleton';



class MovieList extends React.Component {
    componentDidMount() {
        if (this.props.movies.length < 1) {
            this.props.fetchPopularMovies(this.props.page, this.props.filter);
        }
    }

    render() {
        console.log(this.props)
        const { movies, numOfPages, clearErrors } = this.props;
        const { errors } = this.props.ui
        if (this.props.ui.loading) {
            return (
                <div>
                    {this.props.location.pathname.indexOf('gridView') > -1 ? <GridSkeleton /> : <TableSkeleton />}
                </div>
            )
        }

        if (this.props.type === 'grid') {
            return <GridView movies={movies} errors={errors} clearErrors={clearErrors} numOfPages={numOfPages} />
        } else {
            return <TableView movies={movies} errors={errors} clearErrors={clearErrors} numOfPages={numOfPages} />
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
    fetchPopularMovies,
    clearErrors,
    setCurrentPage,

}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(MovieList));