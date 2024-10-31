import React, {useEffect, useState} from 'react';
import './footer.scss'
import Check from "@/components/ui/CheckSection/Check";


interface InputFieldProps {
    name?: string;
    stateName: string;
    mandatory?: boolean;
    value: string;
    setValue: (value: string, name: string) => void;
    placeholder?: string;
    handleBlur?: () => void;
    error?: boolean;
}

export const InputField = ({ stateName,  value, setValue, placeholder,  handleBlur }: InputFieldProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        setIsActive(value !== '' || document.activeElement === inputRef.current);
    }, [value]);

    const inputRef = React.useRef<HTMLInputElement>(null);


    return (<input
            ref={inputRef}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value, stateName)}
            onFocus={() => setIsActive(true)}
            onBlur={() => {
                if (handleBlur) {
                    handleBlur()
                }
                setIsActive(value !== '')
            }}
        />
    )
}

const options = [
    'Landing',
    'E-commerce',
    'Corporate Site',
    'Custom Solution',
    'Branding',
    'Website business card',
    'Web Design',
    'Web Development',
    '3D Design',
    'Custom solution',
];

const Index = () => {


    const [selectedOption, setSelectedOption] = React.useState(options[0]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        wayToContact: "",
        budget: "",
    });

    const isReadyToSend = formData.name && formData.email && formData.wayToContact && formData.budget;



    const check = [
        {
            "Landing": {
                "title": "Landing",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "Website Design",
                        "value": "X.00$"
                    },
                    {
                        "name": "Frontend Development",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Domain Registration",
                        "value": "X.00$"
                    },
                    {
                        "name": "Hosting (1 year)",
                        "value": "X.00$"
                    },
                    {
                        "name": "SSL Certificate",
                        "value": "X.00$"
                    }
                ],
                "price": "~500.00$"
            }
        },
        {
            "E-commerce": {
                "title": "E-commerce",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "Website Design",
                        "value": "X.00$"
                    },
                    {
                        "name": "Frontend Development",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Payment Gateway Integration",
                        "value": "X.00$"
                    },
                    {
                        "name": "Product Management System",
                        "value": "X.00$"
                    },
                    {
                        "name": "User Authentication",
                        "value": "X.00$"
                    }
                ],
                "price": "~3000.00$"
            }
        },
        {
            "Corporate Site": {
                "title": "Corporate Site",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "Website Design",
                        "value": "X.00$"
                    },
                    {
                        "name": "Frontend Development",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Custom CMS Development",
                        "value": "X.00$"
                    },
                    {
                        "name": "SEO Optimization",
                        "value": "X.00$"
                    },
                    {
                        "name": "Contact Form Integration",
                        "value": "X.00$"
                    }
                ],
                "price": "~1800.00$"
            }
        },
        {
            "Custom Solution": {
                "title": "Custom Solution",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "Custom Website Design",
                        "value": "X.00$"
                    },
                    {
                        "name": "Frontend & Backend Development",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "API Integration",
                        "value": "X.00$"
                    },
                    {
                        "name": "Custom Features Development",
                        "value": "X.00$"
                    },
                    {
                        "name": "Security Optimization",
                        "value": "X.00$"
                    }
                ],
                "price": "N/A"
            }
        },
        {
            "Branding": {
                "title": "Branding",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "Logo Design",
                        "value": "—"
                    },
                    {
                        "name": "Color Palette",
                        "value": "—"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Typography Guidelines",
                        "value": "—"
                    },
                    {
                        "name": "Brand Voice & Messaging",
                        "value": "—"
                    },
                    {
                        "name": "Imagery Style",
                        "value": "—"
                    }
                ],
                "price": "~700$"
            }
        },
        {
            "Website Business Card": {
                "title": "Website Business Card",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "Basic Design",
                        "value": "X.00$"
                    },
                    {
                        "name": "Contact Form",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Domain Registration",
                        "value": "X.00$"
                    },
                    {
                        "name": "Hosting (1 year)",
                        "value": "X.00$"
                    }
                ],
                "price": "~300.00$"
            }
        },
        {
            "Web Design": {
                "title": "Web Design",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "UI/UX Design",
                        "value": "X.00$"
                    },
                    {
                        "name": "Prototype Development",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Responsive Design",
                        "value": "X.00$"
                    },
                    {
                        "name": "Graphic Elements",
                        "value": "X.00$"
                    }
                ],
                "price": "~1000.00$"
            }
        },
        {
            "Web Development": {
                "title": "Web Development",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "Backend Development",
                        "value": "X.00$"
                    },
                    {
                        "name": "Frontend Development",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Database Integration",
                        "value": "X.00$"
                    },
                    {
                        "name": "API Integration",
                        "value": "X.00$"
                    }
                ],
                "price": "~2000.00$"
            }
        },
        {
            "3D Design": {
                "title": "3D Design",
                "check_info_1": [
                    {
                        "name": "date-num",
                        "value": "23:31"
                    },
                    {
                        "name": "3D Modelling",
                        "value": "X.00$"
                    },
                    {
                        "name": "Rendering",
                        "value": "X.00$"
                    }
                ],
                "check_info_2": [
                    {
                        "name": "Animation",
                        "value": "X.00$"
                    },
                    {
                        "name": "Texturing",
                        "value": "X.00$"
                    }
                ],
                "price": "~1500.00$"
            }
        }
    ];

    const sentMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { // validate email
            return;
        }


        const data = {
            email: formData.email,
            name: formData.name,
            wayToContact: formData.wayToContact,
            budget: formData.budget
        };

        try {
            const response = await fetch('https://formspree.io/f/mzzbbzzz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    wayToContact: "",
                    budget: "",
                });
            }
        } catch (error) {
        }
    };

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (value: string, name: string) => {
        if (name === 'budget' && !/^\d*$/.test(value)) { // Валідація інпуту для бюджету
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    return (
        <footer>
            <div className="form-check">
                <div className="form">
                    <h5>Fill out your order</h5>

                    <form onSubmit={sentMail}>
                        <div className="input-fields">
                            <InputField
                                stateName={'name'}
                                placeholder="Company or First name"
                                value={formData.name}
                                setValue={handleInputChange}
                            />
                            <InputField
                                stateName={'email'}
                                placeholder="E-mail"
                                value={formData.email}
                                setValue={handleInputChange}
                            />
                            <InputField
                                stateName={'wayToContact'}
                                placeholder="What is the best way to contact you?"
                                value={formData.wayToContact}
                                setValue={handleInputChange}
                            />
                            <InputField
                                stateName={'budget'}
                                placeholder="$750 or Your budget"
                                value={formData.budget}
                                setValue={handleInputChange}
                            />
                        </div>

                        <ul>
                            {options.map((option, index) => (
                                <label key={index} className={`${selectedOption === option ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleChange}
                                    />
                                    {option}
                                </label>
                            ))}
                        </ul>

                        <button className={`${isReadyToSend ? 'active' : ''}`} type="submit">
                            Send a take

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path
                                    d="M1.0458 13.1864C0.557649 13.6746 0.557649 14.466 1.0458 14.9542C1.53396 15.4424 2.32542 15.4424 2.81357 14.9542L1.0458 13.1864ZM15.1797 2.07031C15.1797 1.37996 14.62 0.820312 13.9297 0.820312H2.67969C1.98933 0.820312 1.42969 1.37996 1.42969 2.07031C1.42969 2.76067 1.98933 3.32031 2.67969 3.32031H12.6797V13.3203C12.6797 14.0107 13.2393 14.5703 13.9297 14.5703C14.62 14.5703 15.1797 14.0107 15.1797 13.3203V2.07031ZM2.81357 14.9542L14.8136 2.9542L13.0458 1.18643L1.0458 13.1864L2.81357 14.9542Z"
                                    fill="#0A0A0A"/>
                            </svg>
                        </button>
                    </form>
                </div>


                <div className="check-container">
                    {check.map((item, index) => {
                        const key = Object.keys(item)[0]; // Get the key (e.g., "Landing")
                        // @ts-ignore
                        const service = item[key]; // Get the service object

                        // @ts-ignore
                        return item[key].title.toLowerCase() === selectedOption.toLowerCase() ? <Check budget={formData.budget} email={formData.email} checkInfo={service}/> : null;
                    })}
                </div>
            </div>


            <div className="credential">
                <div className="links">
                    <div className="soc">
                        <a href="https://www.linkedin.com/company/frant-digital/" rel="noopener" target="_blank"
                           className="linked-in">Linked In</a>
                        <a href="https://www.behance.net/frantdigital" rel="noopener" target="_blank"
                           className="behance">Behance</a>
                    </div>
                    <div className="soc">
                        <a href="https://t.me/frantdigital" target="_blank" className="telegram">Telegram</a>
                        <a href="mailto:frantdigital@gmail.com" className="email">frantdigital@gmail.com</a>
                    </div>
                </div>
                <div className="all-rights">
                    <span>© 2024, frant, All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Index;