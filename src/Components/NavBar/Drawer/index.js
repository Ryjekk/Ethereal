import React from "react";
import { LinkList, LinkOptions} from "../style";
import { Link } from "react-router-dom";

const Drawer = () => {
    return (
        <LinkList>
            <li>
                <Link to='/'>
                    <LinkOptions>一 Home</LinkOptions>
                </Link>
            </li>
            <li>
                <Link to='/artist'>
                    <LinkOptions>一 Artist</LinkOptions>
                </Link>
            </li>
            <li>
                <Link to='/#'>
                    <LinkOptions>一 We Worked</LinkOptions>
                </Link>
            </li>
            <li>
                <Link to='/faq'>
                    <LinkOptions>一 Faq</LinkOptions>
                </Link>
            </li>
        </LinkList>
    );
};

export default Drawer;