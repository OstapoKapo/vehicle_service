import { twMerge } from "tailwind-merge";

interface ICustomBtnProps {
    onClick?: () => void;
    label?: string;
    style?: string;
    type?: "button" | "submit" | "reset";
}

export const CustomBtn = ({ onClick, label, style, type = "button" }: ICustomBtnProps) => {
    const baseStyles = "w-35 h-10 flex items-center justify-center btn btn-primary";
    const finalClassName = twMerge(baseStyles, style);   
    return (
        <button type={type} className={finalClassName} onClick={onClick}>{label}</button>
    );
}