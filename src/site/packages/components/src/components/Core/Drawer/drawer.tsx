'use client';
import { PropsWithChildren } from "react";
import { DrawerHeader } from "./components/drawerHeader";

import { DrawerContainer } from "./components/drawerContainer";
import { DrawerContents } from "./components/drawerContents";
import { Overlay } from "@components/Core/Overlay/overlay";
import { useEscapeKey } from "@hooks/useEscapeKey";

export type DrawerProps = {
    show: boolean;
    heading?: string;
    close: () => void;
};
 
const Drawer = ( props: PropsWithChildren<DrawerProps> ) => {

    useEscapeKey(props.close);
    
    return (
        <>
            <Overlay show={props.show} onClick={props.close} />
            <DrawerContainer show={props.show}>
                <DrawerHeader heading={props.heading} close={props.close} />
                <DrawerContents>
                    {props.children}
                </DrawerContents>
            </DrawerContainer>
        </>
    );
};

export default Drawer;

