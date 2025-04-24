'use client';
export const Overlay = (props : {show:boolean, onClick:() => void}) => {
    
    return (
        <div className={"overlay " + (props.show ? "show" : "hide" )}  onClick={()=>{props.onClick()}}></div>
    );
}