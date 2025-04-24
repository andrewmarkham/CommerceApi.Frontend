import { InputFieldProps } from "./FormContainer";


export const EmailInput = (props: InputFieldProps) => {

    const value = props.value as string ?? "";

    return (
        <div className="fieldWrapper">
            <div className={`fieldGroup emailInput ${props.className ?? ""} ${(props.showLabel ?? true) ? "" : "nolabel"}`}>
                <label htmlFor={props.name}>{props.label.label}
                    {props.required ? <span aria-label="required" className="required"></span> : null}
                </label>
                <input id={props.name}
                    type="email"
                    name={props.name}
                    defaultValue={value}
                    placeholder={props.label?.placeholder}
                    required={props.required ?? false}
                    onChange={(e) => props?.onChange(e.target.value)} />
            </div>
            {props.label?.errorMessage ? <span className="input_error">{props.label?.errorMessage}</span> : null}
        </div>
    );
};
