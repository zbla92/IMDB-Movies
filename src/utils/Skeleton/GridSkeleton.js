import React from 'react';
import './gridSkeleton.scss'

const GridSkeleton = (props) => {
    const content = Array.from({ length: 10 }).map((e, index) => (
        <div className="movie-card movie-card__skeleton" key={index}>
            <div className='movie-card__faker'></div>
        </div >
    ))
    return (
        <div className='grid-view'>
            <div className='grid-view__container container'>
                {content}
            </div>
        </div>
    )
}

export default GridSkeleton;