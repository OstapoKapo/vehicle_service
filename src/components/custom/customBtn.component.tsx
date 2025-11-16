import { twMerge } from "tailwind-merge";

interface ICustomBtnProps {
    onClick?: () => void;
    label?: string;
    style?: string;
}

export const CustomBtn = ({ onClick, label, style }: ICustomBtnProps) => {
    const baseStyles = "w-35 h-10 flex items-center justify-center btn btn-primary";
    const finalClassName = twMerge(baseStyles, style);   
    return (
        <button className={finalClassName} onClick={onClick}>{label}</button>
    );
}