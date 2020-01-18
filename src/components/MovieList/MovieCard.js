import './movieCard.scss'

import React, { Component } from 'react'

class MovieCard extends Component {
    render() {
        return (
            <figure className="image is-2by3">
                <img src={this.props.imageUrl} alt='movie_image' />
                <div className="movie-card__figure__overlay">
                    <h4>{this.props.title}</h4>
                </div>
            </figure>
        )
    }
}

export default MovieCard;