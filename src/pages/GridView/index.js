import React, { Component, Fragment } from 'react'

import MovieList from '../../components/MovieList';
import SortNavigation from '../../components/SortNavigation';

class GridView extends Component {
    render() {
        return (
            <Fragment>
                <SortNavigation />
                <MovieList type='grid' page={parseInt(this.props.match.params.page, 10) || 1} />
            </Fragment>
        )
    }
}

export default GridView;