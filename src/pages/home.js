import React , { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
import Navbar from '../components/layout/Navbar';

class cardView extends Component{
    render(){
        return(
            <Fragment>
                <Navbar/>
                <Link to='/tableView'>
                    tableview
                </Link>
            </Fragment>
        )
    }
}

export default cardView