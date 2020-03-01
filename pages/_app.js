import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import initStore from '../src/redux/store';

class Vivant extends App {
  async componentDidMount() {
    console.log('Mounted this motherfucker');
  }

  render() {
    const { Component, store, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

Vivant.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  console.log(ctx);

  return { pageProps };
};

export default withRedux(initStore)(Vivant);
