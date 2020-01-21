import React, { Component, Fragment } from 'react'

import MovieList from '../MovieList';
import SortNavigation from '../SortNavigation';

class TableView extends Component {
    render() {
        return (
            <Fragment>
                <SortNavigation />
                <MovieList type='table' page={this.props.match.params.page || 1} />
            </Fragment>
        )
    }
}

export default TableView;