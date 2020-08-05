import React from "react";
import { Navigation, NavTopL, NavTopR, NavBotL, NavBotR, Logo, Options } from './style'
import { Link } from 'react-router-dom';
import Drawer from "./Drawer";

import LogoImg from '../../Assets/logo.svg'

// TODO ADD text on :hoover animation

class Navbar extends React.Component {
    state = {
        toggleDrawer: false
    };

    render() {
        let ShowDrawer = () => {
            this.setState((pervState) => {
                return {toggleDrawer: !pervState.toggleDrawer}
            })
        };

        let linkDrawer = null;
        if (this.state.toggleDrawer) {
            linkDrawer =  <Drawer/>
        }

        return (
            <Navigation>
                <NavTopL>
                    <Link to='/'>
                        <Logo src={LogoImg}/>
                    </Link>
                </NavTopL>
                <NavTopR>
                    <Options onClick={ShowDrawer}>三</Options>
                </NavTopR>
                    {linkDrawer}
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

export default Navbar;