'use client';

import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";

export const EmptyCart = (props: {message: string }) => {
    return (
        <FlexContainer className="emptyCart" alignItems="items-center">
            <p className="text-2xl">{props.message}</p>
        </FlexContainer>
    )
}