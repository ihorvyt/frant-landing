import React, {useEffect, useState} from "react";
import './inputField.scss'

interface InputFieldProps {
    name: string;
    stateName: string;
    mandatory: boolean;
    value: string;
    setValue: (value: string, name: string) => void;
}

const InputField = ({ name, stateName, mandatory, value, setValue }: InputFieldProps) => {

    console.log(value)

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        // Add 'active' class if the input is focused or has a value
        setIsActive(value !== '' || document.activeElement === inputRef.current);
    }, [value]);

    const inputRef = React.useRef<HTMLInputElement>(null);


    return (
        <div className="input-container">
            <div>
                <span className="name">{name}</span>{mandatory && <span className="mandatory">*</span>}
            </div>
            <div className={`input-field ${isActive ? 'active' : ''}`}>
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value, stateName)}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(value !== '')}
                />
            </div>
        </div>
    )
}

export default InputField