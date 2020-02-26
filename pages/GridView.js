import React, { Component, Fragment } from 'react';

import Layout from '../src/components/Layout';

import MovieList from '../src/components/MovieList';
import SortNavigation from '../src/components/SortNavigation';

class GridView extends Component {
  render() {
    return (
      <Layout>
        {/* <SortNavigation /> */}
        <MovieList type='grid' />
      </Layout>
    );
  }
}

export default GridView;
