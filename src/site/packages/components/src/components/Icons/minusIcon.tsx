'use client';

import { IconProps } from "./types";

const MinusIcon = (props: IconProps) => {
    var { width, height, className } = props;
    width = width ??  "32px";
    height = height?? "32px";

    return (
        <div className={className}>
            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
            </svg>
        </div>
    );
}

export default MinusIcon;