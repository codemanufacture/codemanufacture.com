import * as React from 'react'
import styled from 'styled-components'
import { transitions } from '../../theme'


export interface SocialIconProps {
    icon: string
    name: string
    url: string
}

const StyledSocialIcon = styled.figure`
    a {
        display: block;
        width: 32px;
        height: 32px;
        position: relative;
        overflow: hidden;

        &:hover {
            img {
                &:first-of-type,
                &:last-of-type {
                    transform: translate(0, -32px);
                }
            }
        }

        img {
            position: absolute;
            transition: ${transitions.basicTransition};

            &:first-of-type {
                top: 0;
            }
            &:last-of-type {
                top: 32px;
            }
        }
    }
`

const SocialIcon: React.SFC<SocialIconProps> = ({ icon, name, url }) => (
    <li>
        <StyledSocialIcon>
            <a href={url} rel="noopener norefferer" target="_blank">
                <img src={icon} alt={`${name}`} />
                <img src={icon} alt={`${name}`} />
            </a>
        </StyledSocialIcon>
    </li>
)

export default SocialIcon
