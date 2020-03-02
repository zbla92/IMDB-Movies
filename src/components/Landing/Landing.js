import React from 'react';
import './landing.scss';

import Link from 'next/link';

export default function Landing() {
  return (
    <div className='landing'>
      <h1>Landing page</h1>
      <Link href='/grid'>
        <a>ENTER FOR FREE</a>
      </Link>
    </div>
  );
}
