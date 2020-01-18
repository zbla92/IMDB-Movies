import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovies } from '../../actions/movies';

import GridView from './GridView';
import TableView from './TableView';

class MovieList extends React.Component {
    componentDidMount() {
        this.props.fetchMovies(this.props.page, this.props.filter);
    }

    render() {
        if (this.props.movies.length < 1) {
            return (
                <div>
                    Loading Movies...
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
    movies: PropTypes.array
};

MovieList.defaultProps = {
    movies: []
};

const mapStateToProps = ({ movies }) => ({ movies });

export default connect(mapStateToProps, { fetchMovies })(MovieList);