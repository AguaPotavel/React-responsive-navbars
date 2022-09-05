import React from 'react'
import {
    IFontSize
} from './common-types'
import {
    ThemeProps
} from './style-models'


export interface NavbarProps {
    theme: {
        stick?: boolean;
        primary: ThemeProps;
        inverted?: ThemeProps;
    }
}

export interface ButtonInterface {
    children: React.ReactNode;
    fontSize?: IFontSize
}
