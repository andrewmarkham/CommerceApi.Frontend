'use client';
import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";
import { PropsWithChildren } from "react";

type DrawerContainerProps = {
    show: boolean;
};

export const DrawerContainer = (props: PropsWithChildren<DrawerContainerProps>) => {
    return (
        <FlexContainer direction="col" className={"drawerContainer" + (props.show ? " open" : " closed")}>
            {props.children}
        </FlexContainer>
    );
}