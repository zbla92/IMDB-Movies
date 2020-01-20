import './movieCard.scss'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import React, { Component } from 'react'

class MovieCard extends Component {
    // Method to reduce the date since it comes in as year-mm-dd
    dateToYear(date) {
        return date.slice(0, -6)
    }
    // Method that returns number of stars based on popularity of the movie
    popularityStars(rating) {
        rating = Math.floor(rating)
        const stars = [<IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />, <IoMdStarOutline />]
        for (let i = 1; i <= rating; i++) {
            if (i % 2 === 0) {
                stars[(i / 2) - 1] = <IoMdStar />
            } else if (i % 2 === 1 && i === rating) {
                stars[Math.floor(i / 2)] = <IoMdStarHalf />
            }
        }
        return stars
    }

    render() {
        const { imageUrl, title, year, vote_average } = this.props;

        return (
            <figure className="image is-2by3">
                <img src={imageUrl} alt='movie_image' />
                <div className="movie-card__overlay">
                    <h1 className='is-size-3 movie-card__overlay__title'>{title}</h1>
                    <span className="is-size-5 movie-card__overlay__year">{this.dateToYear(year)}</span>
                    <span className='is-size-4 movie-card__overlay__popularity'>{this.popularityStars(vote_average)}</span>
                </div>
            </figure >
        )
    }
}

export default MovieCard;