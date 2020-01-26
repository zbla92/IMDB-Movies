import './index.scss';
import React from 'react';

import reactIco from '../../images/react.png';
import reduxIco from '../../images/redux.png';
import bulmaIco from '../../images/bulma.png';
import netflix from '../../images/netflix.png';
import hboIco from '../../images/HBO.png';
import popcornTime from '../../images/popcorntime.png';
import heroku from '../../images/heroku.png';



function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__links footer__links--left">
                    <div className="footer__dependencies">
                        <a href='https://reactjs.org/' target='_blank' rel="noopener noreferrer" className='footer__icon footer__icon--netflix'><img src={reactIco} alt='icon' width='15px' /> React</a>
                        <a href='https://redux.js.org/' target='_blank' rel="noopener noreferrer" className='footer__icon footer__icon--hbo'><img src={reduxIco} width='15px' alt='icon' /> Redux</a>
                        <a href='https://bulma.io/' target='_blank' rel="noopener noreferrer" className='footer__icon footer__icon--popcorn'><img src={bulmaIco} width='11px' alt='icon' /> Bulma</a>
                    </div>
                </div>
                <div className="footer__links--right">
                    <div className="footer__dependencies">
                        <a href='http://netflix.com' target='_blank' rel="noopener noreferrer" className='footer__icon footer__icon--netflix'><img src={netflix} width='15px' alt='icon' /> Netflix</a>
                        <a href='http://hbo.com' target='_blank' rel="noopener noreferrer" className='footer__icon footer__icon--hbo'><img src={hboIco} width='30px' alt='icon' /> TV</a>
                        <a href='https://popcorntime-online.ch/' target='_blank' rel="noopener noreferrer" className='footer__icon footer__icon--popcorn'><img src={popcornTime} width='13px' alt='icon' /> &nbsp;Popcorn Time</a>
                        <a href='https://heroku.com' target='_blank' rel="noopener noreferrer" className='footer__icon footer__icon--popcorn'><img src={heroku} width='14px' alt='icon' /> Heroku</a>
                    </div>
                </div>
            </div>
            <div className='footer__sentance'>
                <span className='footer__sentance__span' >
                    This application was built for skill presentaton purpose only. Feel free to check out my github account <a href='http://github.com/zbla92'>here</a>
                </span>
            </div>
        </div>
    )
}

export default Footer;