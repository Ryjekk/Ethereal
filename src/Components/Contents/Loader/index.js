import React from 'react';
import LogoImg from '../../../Assets/Icons/logo.png'
import {Logo} from "../NavBar/style";

const Loader = () => {
    return (
        <div className="loaderWrapper">
            <Logo src={LogoImg} style={{marginBottom: '170px'}}/>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    );
};

export default Loader;
