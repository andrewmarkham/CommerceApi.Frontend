import { SelectFieldProps } from "./FormContainer";


export const Selection = (props: SelectFieldProps) => {

    const value = props.value as string ?? "";
    const newItems = [{ value: "", label: "Please Select" }, ...props.items];

    function handleChange(e: string) {

        var selectedItem = {
            value: e,
            label: props.items.find(item => item.value === e)?.label ?? ""
        };
        props?.onChange(selectedItem);
    }

    return (
        <div className="fieldWrapper">
            <div className={`fieldGroup phoneInput ${props.className ?? ""} ${(props.showLabel ?? true) ? "" : "nolabel"}`}>
                <label htmlFor={props.name}>{props.label.label}
                    {props.required ? <span aria-label="required" className="required"></span> : null}
                </label>
                <select id={props.name}
                    name={props.name}
                    required={props.required ?? false}
                    onChange={(e) => handleChange(e.target.value)}
                    value={value}>
                    {newItems.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
            {props.label?.errorMessage ? <span className="input_error">{props.label?.errorMessage}</span> : null}
        </div>
    );
};
