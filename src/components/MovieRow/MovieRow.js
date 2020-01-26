import './movieRow.scss'
import React from 'react';
import PropTypes from 'prop-types';

class MovieRow extends React.Component {
    dateToYear(date) {
        return date.slice(0, -6)
    }

    render() {
        const { title, year } = this.props
        return (
            <tr>
                <td>{title}</td>
                <td className='table-view__table__tbody__th has-text-right'>{this.dateToYear(year)}</td>
            </tr>

        )
    }
}

MovieRow.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string
}

export default MovieRow;