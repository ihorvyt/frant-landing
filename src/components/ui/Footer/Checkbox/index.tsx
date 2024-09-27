import React from "react";
import './checkBox.scss'

interface CheckboxProps {
    id?: string
    label: string;
    checked: boolean;
    setIsChecked: (checked: boolean) => void;
    icon?: React.ReactNode;
}


export const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, setIsChecked, icon }) => {
    return (
        <label className={`${checked ? 'active' : ''}`}>

            <input style={{display: 'none'}} type="checkbox" checked={checked} onChange={(e) => setIsChecked(e.target.checked)}/>
            <div className="icon" id={id}>
                {icon && <>{icon}</>}
            </div>
            <span>{label}</span>
        </label>
    );
};

export default Checkbox