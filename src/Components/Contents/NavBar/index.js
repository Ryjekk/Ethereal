import React from "react";
import { Link } from 'react-router-dom';
// Components
import Drawer from "./Drawer";
//Style
import { Navigation, NavTopL, NavTopR, NavBotR, Logo } from './style'
import { Options } from '../../../Style'
//Asets
import LogoImg from '../../../Assets/Icons/logo.png'

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
                {/*<NavBotL>*/}
                {/*    <Link to='/shop'>*/}
                {/*        <Options>三 Shop</Options>*/}
                {/*    </Link>*/}
                {/*</NavBotL>*/}
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
