import React from "react";
import './inputField.scss'

const InputField = ({name, mandatory, value, setValue}: {name: string, mandatory: boolean, value: string, setValue: (value: string) => void}) => {
    return (
        <div className="input-container">
            <div>
                <span className="name">{name}</span>{mandatory && <span className="mandatory">*</span>}
            </div>
            <div className={`input-field ${value !== '' ? 'active' : ''}`}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
        </div>
    )
}

export default InputField