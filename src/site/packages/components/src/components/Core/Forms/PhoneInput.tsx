import { InputFieldProps } from "./FormContainer";


export const PhoneInput = (props: InputFieldProps) => {

    const value = props.value as string ?? "";

    return (
        <div className="fieldWrapper">
            <div className={`fieldGroup phoneInput ${props.className ?? ""} ${(props.showLabel ?? true) ? "" : "nolabel"}`}>
                <label htmlFor={props.name}>{props.label.label}
                    {props.required ? <span aria-label="required" className="required"></span> : null}
                </label>
                <input id={props.name}
                    type="tel"
                    name={props.name}
                    value={value}
                    placeholder={props.label?.placeholder}
                    required={props.required ?? false}
                    onChange={(e) => props?.onChange(e.target.value)} />
            </div>
            {props.label?.errorMessage ? <span className="input_error">{props.label?.errorMessage}</span> : null}
        </div>
    );
};
