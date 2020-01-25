import './GridImageWithLoader.scss';
import React from 'react';

class GridImageWithLoader extends React.Component {
    state = { isLoaded: false }

    componentDidMount() {
        const image = new Image();
        image.onload = () => this.setState({ isLoaded: true });
        image.src = this.props.src;
    }

    render() {
        const { src } = this.props;
        const { isLoaded } = this.state;

        return isLoaded ? <img src={src} alt="movie_image" /> : <div className="loader"></div>
    }
}

export default GridImageWithLoader;