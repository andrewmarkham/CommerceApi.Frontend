'use client';
import CloseButton from "@components/Core/CloseButton/closeButton";
import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";

export const DrawerHeader = (props: {heading?: string, close: () => void}) => {

    const { heading, close } = props;

    return (
        <FlexContainer direction="row" className="drawerHeader">
            <h2 className="text-lg bold">{heading}</h2>
            <div className="flex-none">
                <CloseButton title="Close" onClick={()=>{close()}}/>
            </div>
        </FlexContainer>
    );
}
