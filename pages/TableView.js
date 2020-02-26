import React, { Component, Fragment } from 'react';

import Layout from '../src/components/Layout';

import MovieList from '../src/components/MovieList';
import SortNavigation from '../src/components/SortNavigation';

class TableView extends Component {
  render() {
    return (
      <Layout>
        {/* <SortNavigation /> */}
        <MovieList type='table' />
      </Layout>
    );
  }
}

export default TableView;
