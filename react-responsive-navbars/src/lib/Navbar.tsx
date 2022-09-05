import React, { useState, useContext, createContext } from "react";
import { 
    Navbar,
    Button,
    Area
} from './style'
import { IFontSize } from "./types/common-types";

// const ToggleContext = createContext(0);

export default function RNavbar({children, ...rest} : {children?: React.ReactNode}){
    return(
    <Navbar>
        {children}
    </Navbar>)
}

RNavbar.Button = function NavbarButton({ children, className, fontSize}: {children: React.ReactNode, className: string, fontSize?: IFontSize}) {
    let _fontSize = fontSize;
    if(_fontSize === undefined)  _fontSize = 'medium' 
    
    return <Button fontSize={_fontSize} className={className}>{children}</Button>;
  };

RNavbar.Area = function NavbarArea({ children, align}: {children: React.ReactNode, align: any}){
    return <Area align={align}>{children}</Area>
}