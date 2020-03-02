import React from 'react';
import Layout from '../src/components/Layout';

import GridView from '../src/components/MovieList/GridView/GridView';

import { fetchMoviesByFilter } from '../src/redux/actions/movies';

const Grid = props => {
  return (
    <Layout>
      <GridView />
    </Layout>
  );
};

Grid.getInitialProps = async ctx => {
  await ctx.store.dispatch(fetchMoviesByFilter());
};

export default Grid;
