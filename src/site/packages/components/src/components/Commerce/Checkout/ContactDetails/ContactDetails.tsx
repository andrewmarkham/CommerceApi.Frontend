
import { FormGroup } from "@components/Core/Forms/FormGroup";
import { EmailInput } from "@components/Core/Forms/EmailInput";

//import { useState } from "react";
import { CheckoutLabelProps } from "../types";
//import { useState } from "react";

type ContactDetailsProps = {
    labels: CheckoutLabelProps
    email: string
    onChange: (email: string) => void;
};

export const ContactDetails = (props: ContactDetailsProps) => {

    //const [email, setEmail] = useState<string>(props.email);
    
    //useEffect(() => { }, [props.email]);

    function handleChange(newValue: string) {
        //setEmail(newValue);
        console.log("ContactDetails", newValue);
        props.onChange(newValue);
    }

    return (
        <FormGroup heading={props.labels.contactDetails.heading} className="contactDetails">
            <EmailInput 
                name="contactEmail" 
                value={props.email} 
                label={props.labels.email} 
                required
                onChange={(e) => handleChange(e as string)} 
                />
        </FormGroup>
    );
};
