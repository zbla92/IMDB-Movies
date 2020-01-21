import './index.scss';
import React from 'react';

import { IoMdStar, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { TiSortAlphabetically } from 'react-icons/ti';

class SortNavigation extends React.Component {
    render() {
        return (
            <div className='container sort-navigation'>
                <div className='columns'>
                    <div className='column'><IoMdStar /> <IoIosArrowDown /></div>
                    <div className='column'>Jedan</div>
                    <div className='column'>Jedan</div>
                    <div className='column'>Jedan</div>
                    <div className='column'>Jedan</div>
                </div>
            </div>
        )
    }
}

export default SortNavigation