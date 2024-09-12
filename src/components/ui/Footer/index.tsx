import React, {useEffect, useState} from 'react';
import './footer.scss'

import InputField from './InputField/'
import Checkbox from './Checkbox/'

type ServiceName = 'webDesign' | 'webDevelopment' | 'branding' | 'smthElse';

const Index = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        companyName: "",
        email: "",
        mobileNumber: "",
        description: "",
    });
    const [services, setServices] = useState({
        webDesign: false,
        webDevelopment: false,
        branding: false,
        smthElse: false,
    });
    const [messageStatus, setMessageStatus] = useState({
        title: 'close',
        description: ''
    });
    const [wrongEmail, setWrongEmail] = useState<boolean>(false);

    const isReadyToSend = formData.firstName && formData.email && formData.mobileNumber;

    const handleInputChange = (value: string, name: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (name: ServiceName) => {
        setServices((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    function close() {
        setTimeout(() => {
            setMessageStatus({
                title: 'close',
                description: ''
            })
        }, 5000)
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const sentMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isReadyToSend) {
            setMessageStatus({
                title: 'Oops!',
                description: 'Please, enter all required the information!'
            })
            close()

            return
        }

        if (!validateEmail(formData.email)) {
            setMessageStatus({
                title: 'Incorrect email :(',
                description: 'Please, enter valid email!'
            })
            close()

            return
        }

        const data = {
            email: formData.email,
            message: formData.description,
            name: formData.companyName,
            userData: formData,
            services: services
        };

        try {
            const response = await fetch('https://formspree.io/f/mldrvgzn', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setMessageStatus({
                    title: 'Success!',
                    description: 'Your message has been sent.'
                })
                close()
            } else {
                setMessageStatus({
                    title: 'Oops!',
                    description: 'There was a problem submitting your message.'
                })
                close()
            }
        } catch (error) {
            setMessageStatus({
                title: 'Oops!',
                description: 'There was a problem submitting your message.'
            })
            close()
        }
    };

    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const [isTextAreaActive, setIsTextAreaActive] = useState<boolean>(false);

    useEffect(() => {
        // Add 'active' class if the input is focused or has a value
        setIsTextAreaActive(formData.description !== '' || document.activeElement === textareaRef.current);
    }, [formData.description]);

    const handleBlur = () => {
        console.log(123)
        if (formData.email === '') {
            setWrongEmail(false)
            return;
        }
        setWrongEmail(!validateEmail(formData.email));
    };


    return (
        <>
            <footer id='footer'>
                <div className="footer-form">
                    <div className="footer-form-title">
                        <h6>Thinking about NEW?</h6>
                        <p>Let's get talking</p>
                    </div>
                    <form onSubmit={(e) => sentMail(e)}>
                        <div className="inputs-text-area-container">
                            <div className="inputs-container">
                                <div className="company-first-name">
                                    <InputField
                                        name="First name"
                                        stateName='firstName'
                                        mandatory
                                        value={formData.firstName}
                                        setValue={handleInputChange}
                                    />
                                    <InputField
                                        name="Company name"
                                        stateName='companyName'
                                        mandatory={false}
                                        value={formData.companyName}
                                        setValue={handleInputChange}
                                    />
                                </div>
                                <div className="email">
                                    <InputField
                                        name="Email"
                                        stateName='email'
                                        mandatory
                                        value={formData.email}
                                        setValue={handleInputChange}
                                        handleBlur={handleBlur}
                                        error={wrongEmail}
                                    />
                                </div>
                                <div className="mobile">
                                    <InputField
                                        name="Phone number"
                                        stateName='mobileNumber'
                                        mandatory
                                        value={formData.mobileNumber}
                                        setValue={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="text-area-container">
                                <span>Description</span>
                                <textarea
                                    ref={textareaRef}
                                    name="description"
                                    value={formData.description}
                                    onChange={(e) => handleInputChange(e.target.value, 'description')}
                                    className={`textarea ${isTextAreaActive ? 'active' : ''}`}
                                    onFocus={() => setIsTextAreaActive(true)}
                                    onBlur={() => setIsTextAreaActive(formData.description !== '')}
                                />
                            </div>
                        </div>
                        <div className="input-checkbox-sent">
                            <div className="checkboxes">
                                <div className='column'>
                                    <Checkbox
                                        label='Web Development'
                                        checked={services.webDesign}
                                        setIsChecked={() => handleCheckboxChange('webDesign')}
                                    />
                                    <Checkbox
                                        label='Web Design'
                                        checked={services.webDevelopment}
                                        setIsChecked={() => handleCheckboxChange('webDevelopment')}
                                    />
                                </div>
                                <div className='column'>
                                    <Checkbox
                                        label='Branding'
                                        checked={services.branding}
                                        setIsChecked={() => handleCheckboxChange('branding')}
                                    />
                                    <Checkbox
                                        label='Smth else'
                                        checked={services.smthElse}
                                        setIsChecked={() => handleCheckboxChange('smthElse')}
                                    />
                                </div>
                            </div>

                            <button type="submit" className={`sent ${isReadyToSend ? 'active' : ''}`}>
                                <span>Send a take</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"
                                     fill="none">
                                    <path
                                        d="M3.3045 26.6619C2.32819 27.6382 2.32819 29.2211 3.3045 30.1975C4.28081 31.1738 5.86372 31.1738 6.84003 30.1975L3.3045 26.6619ZM32.7151 3.28683C32.7151 1.90612 31.5958 0.78683 30.2151 0.786827L7.71513 0.786828C6.33441 0.786828 5.21513 1.90612 5.21513 3.28683C5.21513 4.66754 6.33441 5.78683 7.71513 5.78683H27.7151V25.7868C27.7151 27.1675 28.8344 28.2868 30.2151 28.2868C31.5958 28.2868 32.7151 27.1675 32.7151 25.7868L32.7151 3.28683ZM6.84003 30.1975L31.9829 5.0546L28.4474 1.51906L3.3045 26.6619L6.84003 30.1975Z"
                                        fill="#C3B8A3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="credential">
                    <div className="links">
                        <div className="soc">
                            <a href="https://www.linkedin.com/company/frant-digital/" rel="noopener" target="_blank">Linked In</a>
                            <a href="https://www.behance.net/frantdigital" rel="noopener" target="_blank">Behance</a>
                        </div>
                        <a href="mailto:frantdigital@gmail.com">frantdigital@gmail.com</a>
                    </div>
                    <div className="all-rights">
                        <span>© 2024, frant, All Rights Reserved.</span>
                    </div>
                </div>
            </footer>

            <article className={`message-log ${messageStatus.title === 'close' ? '' : 'active'}`}>
                <div className="message-loading">
                    <span>{messageStatus.title}</span>
                    <p>{messageStatus.description}</p>
                </div>
                <div className="line">

                </div>

                <div className="close" onClick={() => setMessageStatus({
                    title: 'close',
                    description: '',
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <line x1="2.06066" y1="1.93934" x2="17.0607" y2="16.9393" stroke="#EEEAE4" strokeWidth="3"/>
                        <line y1="-1.5" x2="21.2132" y2="-1.5"
                              transform="matrix(-0.707107 0.707107 0.707107 0.707107 18 3)" stroke="#EEEAE4"
                              strokeWidth="3"/>
                    </svg>
                </div>
            </article>
        </>
    );
};

export default Index;