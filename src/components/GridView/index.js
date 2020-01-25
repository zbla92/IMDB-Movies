import React, { Component, Fragment } from 'react'

import MovieList from '../MovieList';
import SortNavigation from '../SortNavigation';

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