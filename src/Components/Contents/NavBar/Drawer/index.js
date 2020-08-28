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
            <Link to='/faq'>
                <Options>一 Faq</Options>
            </Link>
        </LinkList>
    );
};

export default Drawer;