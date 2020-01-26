import './MovieCardLoader.scss';
import React, { Fragment } from 'react';


class MovieCardLoader extends React.Component {
    // used for unsubscribing async request
    _isMounted = false;
    state = {
        isLoaded: false
    }

    componentDidMount() {
        this._isMounted = true;
        const image = new Image();
        image.onload = () => {
            if (this._isMounted) {
                this.setState({ isLoaded: true })
            }
        };
        image.src = this.props.src;
    }

    componentWillUnmount() {
        this._isMounted = false
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