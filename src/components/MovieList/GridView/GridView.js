import '../index.scss';
import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../../MovieCard/MovieCard';
import Pagination from '../../Pagination';

import { useDispatch, useSelector } from 'react-redux';

function GridView(props) {
  const { movies } = useSelector(state => state.data);

  const renderMovies = movies => {
    const rendered = movies.map(
      ({ id, poster_path, title, release_date, vote_average }) => {
        const imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`;
        return (
          <MovieCard
            imageUrl={imageUrl}
            title={title}
            year={release_date}
            vote_average={vote_average}
            key={id}
            id={id}
          />
        );
      }
    );
    return rendered;
  };

  return (
    <div className='grid-view  animated fadeIn'>
      <div className='grid-view__container container'>
        {movies ? renderMovies(movies) : null}
      </div>
      {/* {this.props.numOfPages > 1 ? <Pagination page={this.props.page} /> : null} === CHECK LATER FOR IMPLEMENTING PAGINATION */}
    </div>
  );
}

GridView.propTypes = {
  movies: PropTypes.array,
  clearErrors: PropTypes.func,
  numOfPages: PropTypes.number,
  page: PropTypes.number
};

export default GridView;
