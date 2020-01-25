import './index.scss';
import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__links footer__links--left">
                    <a href='http://netflix.com' className='footer__icon footer__icon--netflix'>Netflix</a>
                    <a href='http://hbo.com' className='footer__icon footer__icon--hbo'>HBO</a>
                    <a href='https://popcorntime-online.ch/' className='footer__icon footer__icon--popcorn'>Popcorn Time</a>
                    <a href='https://chateaudepommard.com' className='footer__icon footer__icon--chateau'>Chateau De Pommard</a>
                </div>
                <div className="footer__dependencies footer__links--right">
                    <a href='http://netflix.com' className='footer__icon footer__icon--netflix'>Netflix</a>
                    <a href='http://hbo.com' className='footer__icon footer__icon--hbo'>HBO</a>
                    <a href='https://popcorntime-online.ch/' className='footer__icon footer__icon--popcorn'>Popcorn Time</a>
                    <a href='https://chateaudepommard.com' className='footer__icon footer__icon--chateau'>Chateau De Pommard</a>
                </div>
            </div>
            <div className='footer__sentance'>
                This application was built for skill presentaton purpose only. Feel free to checkout m github account <a href='http://github.com/zbla92'>here</a>
            </div>
        </div>
    )
}

export default Footer;