import React from "react";
import { Options} from "../style";
import { LinkList } from './style'
import { Link } from "react-router-dom";

const Drawer = () => {
    return (
        <LinkList>
            <Link to='/'>
                <Options>一 Home</Options>
            </Link>
            <Link to='/artist'>
                <Options>一 Artist</Options>
            </Link>
            <Link to='/#'>
                <Options>一 We Worked</Options>
            </Link>
            <Link to='/faq'>
                <Options>一 Faq</Options>
            </Link>
        </LinkList>
    );
};

export default Drawer;