import {
    INavbarClasses,
    IAlign,
    IFontSize
} from './common-types'

export interface ThemeProps {
    primary: string;
    secondary: string;
    shape: string;
}

export interface NavbarProps {
    className?: INavbarClasses;
}

export interface ButtonProps {
    className?: string;
    fontSize: IFontSize; 
}


export interface AreaProps {
    align?: IAlign
}