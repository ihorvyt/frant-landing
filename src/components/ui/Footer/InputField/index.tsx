import React, {useEffect, useState} from "react";
import './inputField.scss'

interface InputFieldProps {
    name: string;
    stateName: string;
    mandatory: boolean;
    value: string;
    setValue: (value: string, name: string) => void;
    handleBlur?: () => void;
    error?: boolean;
}

const InputField = ({ name, stateName, mandatory, value, setValue, error, handleBlur }: InputFieldProps) => {

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        // Add 'active' class if the input is focused or has a value
        setIsActive(value !== '' || document.activeElement === inputRef.current);
    }, [value]);

    const inputRef = React.useRef<HTMLInputElement>(null);


    return (
        <div className={`input-container`}>
            <div>
                <span className="name">{name}</span>{mandatory && <span className="mandatory">*</span>}
            </div>
            <div className={`input-field ${error ? 'error' : ''} ${isActive ? 'active' : ''}`}>
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    placeholder={name}
                    onChange={(e) => setValue(e.target.value, stateName)}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => {
                        if (handleBlur) {
                            handleBlur()
                        }
                        setIsActive(value !== '')
                    }}
                />
            </div>
        </div>
    )
}

export default InputField