import React from "react";
import { Navigation } from './style'
// import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <Navigation>
                <div>TL</div>
                <div>TR</div>
                <div>BL</div>
                <div>BR</div>
            </Navigation>
        )
    }
}