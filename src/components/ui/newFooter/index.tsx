import React, { useState } from 'react';
import './footer.scss';
import Check from "@/components/ui/CheckSection/Check";

// Types
interface FormData {
    name: string;
    email: string;
    wayToContact: string;
    budget: string;
}

interface InputFieldProps {
    stateName: string;
    value: string;
    setValue: (value: string, stateName: string) => void;
    placeholder?: string;
}

interface ServiceOption {
    [key: string]: {
        title: string;
        check_info_1: { name: string; value: string }[];
        check_info_2: { name: string; value: string }[];
        price: string;
    };
}

// Constants
const SERVICE_OPTIONS = [
    'Landing', 'E-commerce', 'Corporate Site', 'Custom Solution',
    'Branding', 'Website Business Card', 'Web Design',
    'Web Development', '3D Design', 'Custom solution'
];

// Utility Functions
const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const extractPrice = (priceString: string): number | null => {
    const match = priceString.match(/\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : null;
};

// Input Component
const InputField: React.FC<InputFieldProps> = ({
                                                   stateName,
                                                   value,
                                                   setValue,
                                                   placeholder
                                               }) => {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            maxLength={stateName === 'budget' ? 6 : undefined}
            onChange={(e) => {
                if (stateName === 'budget' && !/^\d*$/.test(e.target.value)) return;
                setValue(e.target.value, stateName);
            }}
        />
    );
};

// Service Options Component
const ServiceOptionsList: React.FC<{
    options: string[];
    selectedOption: string;
    onChangeOption: (option: string) => void;
}> = ({ options, selectedOption, onChangeOption }) => (
    <ul>
        {options.map((option, index) => (
            <label
                key={index}
                className={selectedOption === option ? 'active' : ''}
            >
                <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => onChangeOption(e.target.value)}
                />
                {option}
            </label>
        ))}
    </ul>
);

// Main Index Component
const Index: React.FC = () => {
    const [messageStatus, setMessageStatus] = useState({
        title: 'close',
        description: ''
    });
    const [selectedOption, setSelectedOption] = useState(SERVICE_OPTIONS[0]);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        wayToContact: "",
        budget: "",
    });

    const check: ServiceOption[] = [
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


    const isReadyToSend = Object.values(formData).every(value => value !== '');

    const showMessage = (title: string, description: string) => {
        setMessageStatus({ title, description });
        setTimeout(() => {
            setMessageStatus({ title: 'close', description: '' });
        }, 5000);
    };

    const handleInputChange = (value: string, name: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sentMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation
        if (!formData.name) {
            showMessage('Oops!', 'Please enter first name or company');
            return;
        }

        if (!validateEmail(formData.email)) {
            showMessage('Oops!', 'Email is wrong');
            return;
        }

        const selectedCheck = check.find(item => Object.keys(item)[0] === selectedOption);

        if (selectedCheck) {
            const selectedService = selectedCheck[selectedOption];
            const price = extractPrice(selectedService.price);
            if (price && parseFloat(formData.budget) < price) {
                showMessage('Oops!', `Budget is too low. Minimum required is ${selectedService.price}`);
                return;
            }
        }

        try {
            const response = await fetch('https://formspree.io/f/mzzbbzzz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    wayToContact: "",
                    budget: "",
                });
                showMessage('Success', 'Your message has been sent!');
            }
        } catch (error) {
            showMessage('Error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <>
            <article className={`message-log ${messageStatus.title === 'close' ? '' : 'active'}`}>
                <div className="message-loading">
                    <span>{messageStatus.title}</span>
                    <p>{messageStatus.description}</p>
                </div>
                <div className="line"></div>

                <div
                    className="close"
                    onClick={() => setMessageStatus({
                        title: 'close',
                        description: '',
                    })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <line x1="2.06066" y1="1.93934" x2="17.0607" y2="16.9393" stroke="#EEEAE4" strokeWidth="3"/>
                        <line y1="-1.5" x2="21.2132" y2="-1.5"
                              transform="matrix(-0.707107 0.707107 0.707107 0.707107 18 3)" stroke="#EEEAE4"
                              strokeWidth="3"/>
                    </svg>
                </div>
            </article>

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
                                    placeholder="Your budget"
                                    value={formData.budget}
                                    setValue={handleInputChange}
                                />
                            </div>

                            <ServiceOptionsList
                                options={SERVICE_OPTIONS}
                                selectedOption={selectedOption}
                                onChangeOption={setSelectedOption}
                            />

                            <button
                                className={`${isReadyToSend ? 'active' : ''}`}
                                type="submit"
                            >
                                Send a take
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M1.0458 13.1864C0.557649 13.6746 0.557649 14.466 1.0458 14.9542C1.53396 15.4424 2.32542 15.4424 2.81357 14.9542L1.0458 13.1864ZM15.1797 2.07031C15.1797 1.37996 14.62 0.820312 13.9297 0.820312H2.67969C1.98933 0.820312 1.42969 1.37996 1.42969 2.07031C1.42969 2.76067 1.98933 3.32031 2.67969 3.32031H12.6797V13.3203C12.6797 14.0107 13.2393 14.5703 13.9297 14.5703C14.62 14.5703 15.1797 14.0107 15.1797 13.3203V2.07031ZM2.81357 14.9542L14.8136 2.9542L13.0458 1.18643L1.0458 13.1864L2.81357 14.9542Z"
                                        fill="#0A0A0A"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className="check-container">
                        {check.map((item, index) => {
                            const key = Object.keys(item)[0];
                            const service = item[key];

                            return service.title.toLowerCase() === selectedOption.toLowerCase() ?
                                <Check
                                    key={index}
                                    budget={formData.budget}
                                    email={formData.email}
                                    checkInfo={service}
                                /> : null;
                        })}
                    </div>
                </div>

                <div className="credential">
                    <div className="links">
                        <div className="soc">
                            <a href="https://www.linkedin.com/company/frant-digital/" rel="noopener" target="_blank" className="linked-in">Linked In</a>
                            <a href="https://www.behance.net/frantdigital" rel="noopener" target="_blank" className="behance">Behance</a>
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
        </>
    );
};

export default Index;