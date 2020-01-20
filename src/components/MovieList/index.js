import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPopularMovies } from '../../redux/actions/movies';

import GridView from './GridView';
import TableView from './TableView';
import Skeleton from '../../utils/GridSkeleton'

class MovieList extends React.Component {
    componentDidMount() {
        this.props.fetchPopularMovies(this.props.page, this.props.filter);
    }

    render() {
        if (this.props.loading) {
            return (
                <div>
                    <Skeleton />
                </div>
            )
        }

        if (this.props.type === 'grid') {
            return <GridView movies={this.props.movies} />
        } else {
            return <TableView movies={this.props.movies} />
        }
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    loading: PropTypes.bool
};

MovieList.defaultProps = {
    movies: []
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    loading: state.UI.loading
});

export default connect(mapStateToProps, { fetchPopularMovies })(MovieList);