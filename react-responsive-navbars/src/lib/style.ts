import styled, { css } from 'styled-components'
import {
    INavbar,
    IButton
} from './types/style-types'

export const Navbar = styled.header<INavbar>`
    display: flex;
    position: absolute;
    width: calc(100% - 40px);
    height: 80px;
    padding: 10px 20px;
`;

export const Button = styled.button<IButton>`
    position: relative;
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 2.5em;
    display: inline-block;
    border-radius: 6em;
    transition: all .2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: black;
    background-color: white;

    ${({ className }) => className === 'type-1' && css`
        &:hover{
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: translateY(-1px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        &::after {
            content: "";
            display: inline-block;
            height: 100%;
            width: 100%;
            border-radius: 100px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            transition: all .4s;
            }

        &::after {
            background-color: #fff;
            }

        &:hover::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
            }
    `}

`;