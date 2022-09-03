import React, { useState, useContext, createContext } from "react";
import { 
    Navbar,
    Button
} from './style'

// const ToggleContext = createContext(0);

export default function RNavbar({children, ...rest} : {children?: React.ReactNode}){
    return(
    <Navbar>
        {children}
    </Navbar>)
}

RNavbar.Button = function NavbarButton(props: any) {
    const {
        children,
        className
    } = props
    return <Button className={className}>{children}</Button>;
  };