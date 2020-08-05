import React from "react";
import { Navigation, NavTopL, NavTopR, NavBotL, NavBotR, Logo, Options } from './style'
import { Link } from 'react-router-dom';
import Index from "./Drawer";

import LogoImg from '../../Assets/logo.svg'

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
            linkDrawer =  <Index/>
        }

        return (
            <Navigation>
                <NavTopL>
                    <Logo src={LogoImg}/>
                </NavTopL>
                <NavTopR>
                    <div onClick={ShowDrawer}>
                        <Options>三</Options>
                        {linkDrawer}
                    </div>
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

export default Navbar;