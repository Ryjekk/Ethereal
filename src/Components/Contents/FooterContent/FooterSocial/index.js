import React from "react";
//Style
import {MediumHeading} from "../../../../Style";
import {Social, SocialLink} from "./style";
//Assets
import sprite from "../../../../Assets/Icons/sprite.svg";

const FooterSocial = () => {
    return (
        <div>
            <MediumHeading>Follow</MediumHeading>
            <Social>
                <SocialLink href="https://www.facebook.com/anikawr" target="_blank">
                    <svg>
                        <use xlinkHref={sprite + "#fb"}></use>
                    </svg>
                </SocialLink>
                <SocialLink href="https://www.instagram.com/aura.reykjavik/" target="_blank">
                    <svg>
                        <use xlinkHref={sprite + "#ig"}></use>
                    </svg>
                </SocialLink>
                <SocialLink href="mailto:aura.reykjavik@gmail.com" target="_blank">
                    <svg>
                        <use xlinkHref={sprite + "#mail"}></use>
                    </svg>
                </SocialLink>
            </Social>
        </div>
    )
}

export default FooterSocial;
