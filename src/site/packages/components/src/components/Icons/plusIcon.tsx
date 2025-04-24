'use client';

import { IconProps } from "./types";

const PlusIcon = (props: IconProps) => {
    var { width, height, className } = props;
    width = width ??  "32px";
    height = height?? "32px";

    return (
        <div className={className}>
            <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
        </div>
    );
}

export default PlusIcon;