import { PropsWithChildren } from "react";

type FlexContainerProps = {
    direction?: "row" | "col";
    alignItems?: "items-start" | "items-end" | "items-center" | "items-stretch" | "items-baseline";
    className?: string;

}
export const FlexContainer = (props: PropsWithChildren<FlexContainerProps>) => {
    const direction = props?.direction ?? "col";
    return (
        <div className={`flex ${props?.className ?? ""} ${props?.alignItems ?? ""} ` + (direction === "row" ? "row" : "col")}>
            {props.children}
        </div>
    );
}
