import './movieCard.scss'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import React, { Component } from 'react'

import noImg from '../../images/sorry_no_img.png'

class MovieCard extends Component {
    // Method to reduce the date since it comes in as year-mm-dd
    dateToYear(date) {
        return date ? date.slice(0, -6) : 2000
    }
    // Method that returns number of stars based on popularity of the movie
    popularityStars(rating) {
        rating = Math.round(rating)
        const stars = [<IoMdStarOutline key={1} />, <IoMdStarOutline key={2} />, <IoMdStarOutline key={3} />, <IoMdStarOutline key={4} />, <IoMdStarOutline key={5} />]
        for (let i = 1; i <= rating; i++) {
            if (i % 2 === 0) {
                stars[(i / 2) - 1] = <IoMdStar key={-i} />
            } else if (i % 2 === 1 && i === rating) {
                stars[Math.floor(i / 2)] = <IoMdStarHalf key={-i} />
            }
        }
        return stars
    }
    checkImg(url) {
        if (url.length < 60) return noImg
        else return url
    }

    render() {
        const { imageUrl, title, year, vote_average } = this.props;


        return (
            <div className="movie-card">
                <img src={this.checkImg(imageUrl)} alt='movie_image' />
                <div className="movie-card__overlay">
                    <h1 className='movie-card__overlay__title'>{title}</h1>
                    <span className="movie-card__overlay__year">{this.dateToYear(year)}</span>
                    <span className='movie-card__overlay__popularity'>{this.popularityStars(vote_average)}</span>
                </div>
            </div >
        )
    }
}

export default MovieCard;