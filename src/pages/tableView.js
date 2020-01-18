import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Navbar from '../components/layout/Navbar'

class tableView extends Component{
    render(){
        return(
            <Fragment>
                <Navbar/>
                <Link to='/'>
                    BUUM
                </Link>
            </Fragment>
        )
    }
}

export default tableView;