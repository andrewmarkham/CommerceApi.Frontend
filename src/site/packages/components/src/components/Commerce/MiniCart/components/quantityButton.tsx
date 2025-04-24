'use client';
import { PropsWithChildren } from "react"

export type QuantityButtonProps = {
    updateQuantity: () => void
    disabled: boolean
    position: "left" | "right"
}

export const QuantityButton = (props: PropsWithChildren<QuantityButtonProps>) => {

    const {updateQuantity, disabled, position } = props;

    const className = " quantitybutton ";
    return (
        <button disabled={disabled} 
            onClick={() => { updateQuantity()}}  
            type="button" 
            className={className + (position === "left" ? "left" : "right") }>
            {props.children}
        </button>
    );
}
