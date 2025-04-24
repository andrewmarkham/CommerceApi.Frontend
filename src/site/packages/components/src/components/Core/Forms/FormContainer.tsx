import { PropsWithChildren } from "react";

type FormContainerProps = {
    className?: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const FormContainer = (props: PropsWithChildren<FormContainerProps>) => {

    return (
        <form className={`formContainer ${props.className ?? ""}`} method="post" noValidate onSubmit={props.handleSubmit}>
            {props.children}
        </form>
    );
}

export type FormGroupProps = {
    className?: string;
    heading?: string;
};

export type FormFieldLabelProps = {
    label: string;
    placeholder?: string;
    errorMessage?: string;
}

type FormFieldProps = {
    className?: string;
    required?: boolean;
    value?: string | number | boolean | null;
    onChange: (newValue: string | number | boolean) => void;
};

export type InputFieldProps = FormFieldProps & {
    name: string;
    label: FormFieldLabelProps;
    showLabel?: boolean;
    
};

export type SelectFieldProps = FormFieldProps & {
    name: string;
    label: FormFieldLabelProps;
    items: { value: string, label: string }[];
    showLabel?: boolean;
    onChange: (newValue: { value: string, label: string }) => void;
};

