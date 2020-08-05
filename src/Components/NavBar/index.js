import React from "react";
import { Navigation, NavTopL, NavTopR, NavBotL, NavBotR, Logo, Options } from './style'
import { Link } from 'react-router-dom';

import LogoImg from '../../Assets/logo.svg'

export default class Navbar extends React.Component {
    render() {
        return (
            <Navigation>
                <NavTopL>
                    <Logo src={LogoImg}/>
                </NavTopL>
                <NavTopR>
                    <Link to='/'>
                        <Options>一 Home</Options>
                    </Link>
                </NavTopR>
                <NavBotL>
                    <Link to='/about'>
                        <Options>三 About</Options>
                    </Link>
                </NavBotL>
                <NavBotR>
                    <Link to='/booking'>
                        <Options>二 Booking</Options>
                    </Link>
                </NavBotR>
            </Navigation>
        )
    }
}