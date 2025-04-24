'use client';
import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";
import { ReactNode } from "react";

export const DrawerContents = (props: {children : ReactNode}) => {
    return (
        <FlexContainer className="grow drawerContents">
            {props.children}
        </FlexContainer>
    );
}
