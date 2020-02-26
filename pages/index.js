import React from 'react';
import Link from 'next/link';

import { Provider } from 'react-redux';
import store from '../src/redux/store';

function App() {
  return (
    <div className='App'>
      <Link href='/GridView'>
        <div>
          <a>GridView</a>
        </div>
      </Link>
      <Link href='/TableView'>
        <div>
          <a>TableView</a>
        </div>
      </Link>
    </div>
  );
}

export default App;
