import './MovieCardLoader.scss';
import React, { Fragment } from 'react';


class MovieCardLoader extends React.Component {
    state = { isLoaded: false }

    componentDidMount() {
        const image = new Image();
        image.onload = () => this.setState({ isLoaded: true });
        image.src = this.props.src;
    }

    render() {
        const { src, title, year, stars } = this.props;
        const { isLoaded } = this.state;

        return isLoaded ? (
            <Fragment>
                <img src={src} alt="movie_image" className='movie-card__img' />
                <div className="movie-card__overlay">
                    <h1 className='movie-card__overlay__title'>{title}</h1>
                    <span className="movie-card__overlay__year">{year}</span>
                    <span className='movie-card__overlay__popularity'>{stars}</span>
                </div>
            </Fragment>
        ) : <div className='movie-card__faker movie-card-loader'>
                <div className="loader "></div>
            </div>
    }
}

export default MovieCardLoader