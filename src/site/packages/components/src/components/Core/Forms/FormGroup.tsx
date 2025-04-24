import { PropsWithChildren } from "react";
import { FormGroupProps } from "./FormContainer";


export const FormGroup = (props: PropsWithChildren<FormGroupProps>) => {

    return (
        <fieldset className={`formGroup ${props.className ?? ""}`}>
            {props.heading && <legend>{props.heading}</legend>}
            {props.children}
        </fieldset>
    );
};
