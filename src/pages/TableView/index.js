import React, { Component, Fragment } from 'react'

import MovieList from '../../components/MovieList';
import SortNavigation from '../../components/SortNavigation';

class TableView extends Component {
    render() {
        return (
            <Fragment>
                <SortNavigation />
                <MovieList type='table' page={parseInt(this.props.match.params.page, 10) || 1} />
            </Fragment>
        )
    }
}

export default TableView;