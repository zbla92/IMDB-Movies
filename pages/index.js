import React from 'react';
import Link from 'next/link';

import { Provider } from 'react-redux';
import store from '../src/redux/store';

import Layout from '../src/components/Layout';
import Landing from '../src/components/Landing';

import { fetchMoviesByFilter } from '../src/redux/actions/movies';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Landing />
      </Layout>
    </div>
  );
}

App.getInitialProps = async ctx => {
  ctx.store.dispatch(fetchMoviesByFilter());
};

export default App;
