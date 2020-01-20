import React from 'react';
import './gridSkeleton.scss'
import skeletonImg from './skeletonImg.png'

const GridSkeleton = (props) => {

    const content = Array.from({ length: 4 }).map((item, index) => (
        <div className="columns" key={index}>
            {Array.from({ length: 5 }).map((item, index) => (
                <div className="column">
                    <div className="container">
                        <figure className="image is-2by3">
                            <img src={skeletonImg} alt={skeletonImg} />
                        </figure >
                    </div>
                </div>
            ))}
        </div>
    ))



    return (
        <div className='container grid-view'>
            {content}
        </div>)
}

export default GridSkeleton;