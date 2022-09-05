import styled, { css } from 'styled-components'
import {
    NavbarProps,
    ButtonProps,
    AreaProps
} from './types/style-models'

export const Navbar = styled.header<NavbarProps>`
    display: flex;
    position: absolute;
    width: calc(100% - 40px);
    height: 80px;
    padding: 10px 20px;
    background-color: black;
`;

export const Button = styled.button<ButtonProps>`
    position: relative;
    font-size: ${({ fontSize }) => fontSize === 'small' && '0.6' || fontSize === 'medium' && '0.7' || fontSize === 'large' && '.9'}em;
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

export const Area = styled.div<AreaProps>`
    display: flex;
    align-items: center;
    flex: 1;
    padding: 30px 20px;
    justify-content: ${({ align }) => align ? align : 'flex-start'};
    background-color: cyan;
    gap: 20px;
`;