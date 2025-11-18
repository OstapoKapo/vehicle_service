import { twMerge } from "tailwind-merge";

interface ICustomBtnProps {
    onClick?: () => void;
    label?: string;
    style?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const CustomBtn = ({ onClick, label, style, type = "button", disabled = false }: ICustomBtnProps) => {
    const baseStyles = "w-35 h-10 flex items-center justify-center btn btn-primary text-foreground";
    const finalClassName = twMerge(baseStyles, style);   
    return (
        <button type={type} className={finalClassName} onClick={onClick} disabled={disabled}>{label}</button>
    );
}