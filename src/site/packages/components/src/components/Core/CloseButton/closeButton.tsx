'use client';

//import './closeButton.css';

export type CloseButtonProps = {
    title: string;
    onClick: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
    return (
        <button title={props.title} onClick={() => props.onClick()} className="close-button drop-shadow">
            <svg className="transformCentre" width={"24px"} height={ "24px"} viewBox="0 0 24 24" fill="solid" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 9L15 15M15 9L9 15" stroke="#000000" strokeWidth="1" strokeLinecap="round"/>
            </svg>
        </button>
    );
}

export default CloseButton;