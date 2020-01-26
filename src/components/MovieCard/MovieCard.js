import './movieCard.scss'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import React, { Component } from 'react'
import propTypes from 'prop-types';

import noImg from '../../images/photo_not_available.png'

import MovieCardLoader from '../../utils/MovieCardLoader/MovieCardLoader'

class MovieCard extends Component {
    // Method to reduce the date since it comes in as year-mm-dd
    dateToYear(date = '1999-12-12') {
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
    // If no img return local noImage image
    checkImg(url) {
        if (url.length < 60) return noImg
        else return url
    }

    render() {
        const { imageUrl, title, year, vote_average } = this.props;


        return (
            <div className="movie-card">
                {/**MovieCardLoader is component that is passing loading spinner until img source is fetched and img is ready to be displayed */}
                <MovieCardLoader src={this.checkImg(imageUrl)} title={title} year={this.dateToYear(year)} stars={this.popularityStars(vote_average)} />
            </div >
        )
    }
}

MovieCard.propTypes = {
    imageUrl: propTypes.string,
    tite: propTypes.string,
    year: propTypes.string,
    vote_average: propTypes.number
}

export default MovieCard;