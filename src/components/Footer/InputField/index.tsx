import React from "react";
import './inputField.scss'

interface InputFieldProps {
    name: string;
    mandatory: boolean;
    value: string;
    setValue: (value: string, name: string) => void;
}

const InputField = ({ name, mandatory, value, setValue }: InputFieldProps) => {
    return (
        <div className="input-container">
            <div>
                <span className="name">{name}</span>{mandatory && <span className="mandatory">*</span>}
            </div>
            <div className={`input-field ${value !== '' ? 'active' : ''}`}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value, name)} // Updated to pass two arguments
                />
            </div>
        </div>
    )
}

export default InputField