import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPopularMovies } from '../../redux/actions/movies';
import { clearErrors } from '../../redux/actions/ui';

import GridView from './GridView';
import TableView from './TableView';
import Skeleton from '../../utils/GridSkeleton'



class MovieList extends React.Component {
    componentDidMount() {
        if (this.props.movies.length < 1) {
            this.props.fetchPopularMovies(this.props.page, this.props.filter);
        }
    }

    render() {
        const { movies, numOfPages, clearErrors } = this.props;
        const { errors } = this.props.ui
        if (this.props.ui.loading) {
            return (
                <div>
                    <Skeleton />
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
    clearErrors
}

export default connect(mapStateToProps, mapActionsToProps)(MovieList);