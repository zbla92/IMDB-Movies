import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/',
    API_KEY = '6b7007b9ce50c7ac58bb264563355724';

const fetchMovies = async (page = 1, filter = 'popular') => {
    const { data } = await axios.get(`${API_URL}${filter}`, {
        params: {
            api_key: API_KEY,
            page
        }
    });

    return {
        data: data.results
    };

    // return {
    //     data: [
    //         {
    //             id: 1,
    //             poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    //             title: 'Aladdin',
    //             year: '1993'
    //         }, {
    //             id: 2,
    //             poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    //             title: 'Aladdin',
    //             year: '2005'
    //         }, {
    //             id: 3,
    //             poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    //             title: 'Aladdin',
    //             year: '2005'
    //         }, {
    //             id: 4,
    //             poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    //             title: 'Aladdin',
    //             year: '2005'
    //         }
    //     ]
    // }
};

export default {
    fetchMovies
};