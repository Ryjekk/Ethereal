import React from "react";
import {Link} from "react-router-dom";
//Style
import {Options} from "../../../../Style";
import {LinkList} from '../style'

const Drawer = () => {
    return (
        <LinkList>
            <Link to='/'>
                <Options>一 Home</Options>
            </Link>
            <Link to='/artist'>
                <Options>一 Artist</Options>
            </Link>
            <Link to='/guests'>
                <Options>一 Guest Spots</Options>
            </Link>
            <Link to='/join'>
                <Options>一 Join our Crew</Options>
            </Link>
            <Link to='/faq'>
                <Options>一 Faq</Options>
            </Link>
            <Link to='/covid-19'>
                <Options>一 COVID-19</Options>
            </Link>
        </LinkList>
    );
};

export default Drawer;
