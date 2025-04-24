import { CheveronDown } from "@components/Icons/CheveronDown";
import { PropsWithChildren} from "react";
import { CheckoutStepProps } from "../types";

export const CheckoutStep = (props: PropsWithChildren<CheckoutStepProps>) => {

    function toggleState() {
        if (props.disabled) {
            return;
        }
        var newIsOpen = !props.isOpen;
        props.onChange({state: newIsOpen? 'open' : 'closed', step: props.step});
    }

    return (
        <div className="checkoutStepContainer">
            <div className={`stepHeader` + (props.isOpen ? "" : " isClosed")} onClick={() => toggleState()}>
                <span className="stepNumber">{props.step}</span>
                <h2 className="stepTitle">{props.heading}</h2>
                <OpenButton open={props.isOpen} onClick={() => toggleState()} />
                {props.summaryText ? <p className="summaryText">{props.summaryText}</p> : null}
            </div>
            <div className={`stepContent` + (props.isOpen ? "" : " isClosed")}>
                {props.children}
                <div className="stepFooter">
                    <button disabled={!(props?.canProceed ?? false)} onClick={() => props?.onProceed()}>{props.buttonText}</button>
                </div>
            </div>
        </div>
    )
};

const OpenButton = (props: {open? :boolean, onClick: () => void}) => {

    const isOpen = props?.open ?? false;

    return (
        <span className={`openButton ${isOpen ? "isOpen" : ""}`} onClick={() => props.onClick}><CheveronDown /></span>
    )
};