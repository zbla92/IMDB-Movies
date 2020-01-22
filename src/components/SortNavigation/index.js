import './index.scss';
import React from 'react';

import { IoMdStar } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';

import { withRouter, Link } from 'react-router-dom';

class SortNavigation extends React.Component {
    render() {
        return (
            <div className='container sort-navigation'>
                <div className='columns'>
                    <div className='column sort-navigation__btn '><IoMdStar /> <span>Rating</span></div>
                    <div className='column sort-navigation__btn sort-navigation__btn__active'><AiOutlineFire /><span>Popularity</span></div>
                    <div className='column sort-navigation__btn'><MdDateRange /><span>Year</span></div>
                </div>
            </div>
        )
    }
}

export default withRouter(SortNavigation)