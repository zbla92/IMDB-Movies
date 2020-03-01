import React from 'react';
import Link from 'next/link';

import { Provider } from 'react-redux';
import store from '../src/redux/store';

import Layout from '../src/components/Layout';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Link href='/gridview'>
          <a>GridView</a>
        </Link>
        <Link href='/tableview'>
          <a>TableView</a>
        </Link>
        <Link href='/test'>
          <a>test</a>
        </Link>
      </Layout>
    </div>
  );
}

export default App;
