import React from 'react';
import Head from 'next/head';

import Footer from '../Footer';
import Header from '../Header';

const Layout = props => (
  <div>
    <Head>
      <title>Vivant Movies</title>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
      />
    </Head>
    <Header />
    <div className='children'>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
