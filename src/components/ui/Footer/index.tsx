import React, {useEffect, useState} from 'react';
import './footer.scss'

import InputField from './InputField/'
import Checkbox from './Checkbox/'
import {useTranslations} from "next-intl";

type ServiceName = 'webDesign' | 'webDevelopment' | 'branding' | 'smthElse';

const Index = () => {
    const t = useTranslations("Footer")
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
    const [isTextAreaActive, setIsTextAreaActive] = useState<boolean>(false);
    const [wrong, setWrong] = useState({
        email: false,
        mobileNumber: false
    });

    const isReadyToSend = formData.firstName && formData.email && formData.mobileNumber;
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

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


    useEffect(() => {
        setIsTextAreaActive(formData.description !== '' || document.activeElement === textareaRef.current);
    }, [formData.description]);

    // Regex
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber: string): boolean => {
        // Regular expression to match phone numbers (allowing optional country code +)
        const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\d{10})$/;
        return phoneRegex.test(phoneNumber);
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

        if (!validatePhoneNumber(formData.mobileNumber)) {
            setMessageStatus({
                title: 'Incorrect phone number :(',
                description: 'Please, enter valid phone number!'
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
            const response = await fetch('https://formspree.io/f/mzzbbzzz', {
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
                    description: 'Your message has been sent'
                })
                setFormData({
                    firstName: "",
                    companyName: "",
                    email: "",
                    mobileNumber: "",
                    description: "",
                });
                setServices({
                    webDesign: false,
                    webDevelopment: false,
                    branding: false,
                    smthElse: false,
                });
                close()
            } else {
                setMessageStatus({
                    title: 'Oops!',
                    description: 'There was a problem submitting your message'
                })
                close()
            }
        } catch (error) {
            setMessageStatus({
                title: 'Oops!',
                description: 'There was a problem submitting your message'
            })
            close()
        }
    };

    const handleBlur = () => {
        if (formData.email === '') {
            setWrong((prevState) => ({
                ...prevState,
                email: false
            }))
        } else {
            setWrong((prevState) => ({
                ...prevState,
                email: !validateEmail(formData.email)
            }))
        }

        if (formData.mobileNumber === '') {
            setWrong((prevState) => ({
                ...prevState,
                mobileNumber: false
            }))
        } else {
            setWrong((prevState) => ({
                ...prevState,
                mobileNumber: !validatePhoneNumber(formData.mobileNumber)
            }))
        }

    };



    const svgWebDevelopmentIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <path
                d="M14.7697 41.0615L8.69578 10.1046C8.25922 7.87963 10.6402 6.16851 12.6447 7.26676L40.5328 22.5468C42.6325 23.6973 42.2964 26.7806 39.9986 27.4472L28.1029 30.8983C27.5073 31.0711 26.9909 31.4422 26.6407 31.9491L19.6465 42.0732C18.2955 44.0289 15.227 43.3923 14.7697 41.0615Z"
                stroke="white" strokeWidth="2.68478"/>
            <path
                d="M22.8387 26.3114C21.673 26.4784 20.6274 25.5779 20.6321 24.4112C20.6369 23.2465 21.6862 22.3616 22.8489 22.5418C25.0325 22.8803 25.024 25.9985 22.8387 26.3114Z"
                stroke="white" strokeWidth="1.6"/>
        </svg>
    )

    const svgWebDesignIcon = (
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.0199 18.2019H32.7701C35.5589 18.2019 37.8197 20.4626 37.8197 23.2514V42.1874C37.8197 44.9762 35.5589 47.237 32.7701 47.237H20.6125C19.0979 47.237 17.6634 46.5572 16.7043 45.385L9.49558 36.5744C8.37424 35.2038 8.05275 33.3461 8.64834 31.6784L12.2645 21.5531C12.9823 19.5434 14.8859 18.2019 17.0199 18.2019Z"
                stroke="white" strokeWidth="2.5248"/>
            <path
                d="M31.722 39.371L31.6437 40.0758C31.5726 40.7151 31.0322 41.1988 30.389 41.1988H27.7084C23.548 41.1988 20.6101 37.1228 21.9258 33.1758C22.0878 32.6898 22.5426 32.362 23.0549 32.362H25.4486C29.2106 32.362 32.1374 35.632 31.722 39.371Z"
                stroke="white" strokeWidth="2.5248"/>
            <path
                d="M17.6216 18.2031L14.5903 11.6464C14.007 10.3848 14.5531 8.88913 15.8119 8.30006L15.9343 8.24281C17.1527 7.67264 18.6042 8.15796 19.2347 9.34633L23.9336 18.2031"
                stroke="white" strokeWidth="2.5248" strokeLinecap="round"/>
            <path d="M32.1432 18.2026L37.2039 6.13395L38.3316 6.54267L33.2078 18.2026L32.1432 18.2026Z" fill="white"
                  stroke="white" strokeWidth="2.5248"/>
            <path
                d="M12.5413 4.49459L12.2698 3.10302C12.2386 2.94339 12.3201 2.78304 12.4674 2.7141C12.6147 2.64517 12.7901 2.68534 12.8927 2.81154L13.7871 3.91162C14.078 4.26945 13.9552 4.80544 13.5375 5.00091C13.1198 5.19638 12.6296 4.94725 12.5413 4.49459Z"
                fill="white" stroke="white" strokeWidth="2.5248"/>
            <path
                d="M23.1395 10.0221C22.4194 7.86179 24.0274 5.63086 26.3046 5.63086V5.63086C28.5818 5.63086 30.1897 7.8618 29.4696 10.0221L28.3354 13.4247C28.044 14.2988 27.226 14.8884 26.3046 14.8884V14.8884C25.3832 14.8884 24.5651 14.2988 24.2737 13.4247L23.1395 10.0221Z"
                fill="white"/>
            <path
                d="M24.7617 17.5254C24.7617 16.6732 25.4525 15.9824 26.3047 15.9824V15.9824C27.1568 15.9824 27.8476 16.6732 27.8476 17.5254V17.5254C27.8476 18.3775 27.1568 19.0683 26.3047 19.0683V19.0683C25.4525 19.0683 24.7617 18.3775 24.7617 17.5254V17.5254Z"
                fill="white"/>
        </svg>
    )

    const svgBrandIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
            <path
                d="M29 21.4998C28.999 22.6045 28.7539 23.6953 28.2824 24.6944C27.8108 25.6934 27.1243 26.5759 26.2721 27.2788C25.4198 27.9817 24.4228 28.4877 23.3523 28.7605C22.2818 29.0334 21.1643 29.0663 20.0795 28.8571C18.9948 28.6479 17.9697 28.2016 17.0775 27.5502C16.1852 26.8988 15.4479 26.0583 14.9183 25.0888C14.3886 24.1193 14.0796 23.0448 14.0135 21.9421C13.9736 21.2772 14.0225 20.6119 14.1576 19.9636C14.2722 19.413 15.0059 19.3088 15.4923 19.591V19.591C15.8718 19.8113 16.2951 19.9456 16.7321 19.9845C17.1692 20.0233 17.6095 19.9659 18.022 19.8161C18.4345 19.6663 18.809 19.4279 19.1193 19.1176C19.4296 18.8073 19.6681 18.4327 19.8178 18.0202C19.9676 17.6078 20.0251 17.1675 19.9862 16.7304C19.9473 16.2933 19.813 15.8701 19.5928 15.4905V15.4905C19.3104 15.0039 19.4143 14.27 19.965 14.1549C20.7305 13.9948 21.5189 13.9549 22.3018 14.0391C23.521 14.1702 24.6895 14.5982 25.7049 15.2857C26.7202 15.9732 27.5516 16.8991 28.1261 17.9825C28.7005 19.0658 29.0006 20.2735 29 21.4998Z"
                fill="white"/>
            <path
                d="M21.734 0.5C33.4625 0.5 42.9695 10.007 42.9695 21.734C42.9695 24.0446 42.6005 26.269 41.9182 28.3515C41.6958 29.0304 40.9905 29.411 40.2898 29.272C39.368 29.0891 38.8521 28.1032 39.1338 27.2067C39.6768 25.4791 39.9695 23.6407 39.9695 21.734C39.9695 11.6645 31.8035 3.5 21.734 3.5C11.6645 3.5 3.5 11.6645 3.5 21.734C3.5 31.805 11.6645 39.9695 21.734 39.9695C22.7219 39.9695 23.6916 39.8909 24.6369 39.7397C25.4408 39.611 26.2411 40.0762 26.4557 40.8615C26.6782 41.6758 26.1872 42.5191 25.3552 42.662C24.1784 42.8642 22.9685 42.9695 21.734 42.9695C10.007 42.9695 0.5 33.461 0.5 21.734C0.5 10.007 10.007 0.5 21.734 0.5Z"
                fill="white"/>
        </svg>
    )

    const svgOtherIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <g clipPath="url(#clip0_318_435)">
                <path
                    d="M18.8745 42.3893C21.2868 40.1852 24.3901 37.406 26.6995 35.5332C26.7097 35.5324 26.7212 35.5317 26.7339 35.5311C26.771 35.5294 26.8069 35.5293 26.8533 35.5293H43.0361C45.313 35.5293 47.3476 37.1926 47.4928 39.4992C47.6389 42.0021 45.5642 44.0754 43.2178 44.0754H19.5422C18.6288 44.0754 18.2226 42.985 18.8745 42.3893Z"
                    stroke="white" strokeWidth="2"/>
                <path
                    d="M2.44258 42.6788L2.44256 42.6788C0.991419 40.7925 1.2449 38.2507 2.99976 36.7627C3.1461 36.6387 3.31528 36.4884 3.47672 36.3113L11.398 27.6179C12.7892 26.0912 12.7892 23.7564 11.398 22.2298L3.47672 13.5364C3.31528 13.3592 3.1461 13.209 2.99976 13.0849C1.24492 11.597 0.991397 9.05536 2.44258 7.16888C3.9094 5.26209 6.54607 4.94823 8.48895 6.43775L27.2013 21.3349C28.0549 22.0506 28.6673 23.2314 28.8335 24.4435V24.742C28.8335 26.0548 28.2592 27.2382 27.1915 28.1573L8.48453 43.4135C6.54207 44.899 3.90828 44.5841 2.44258 42.6788Z"
                    stroke="white" strokeWidth="2"/>
                <path
                    d="M20.519 21.1195L23.2009 23.2266C24.2766 24.0719 23.6789 25.8 22.3108 25.8H22.1H20.7878C20.278 25.8 19.8153 25.502 19.6044 25.0379L18.5324 22.6796C17.969 21.4401 19.4484 20.2783 20.519 21.1195Z"
                    stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                <path
                    d="M47.4914 39.8024C47.4914 42.1593 45.5753 44.0754 43.2184 44.0754C40.8614 44.0754 38.9453 42.1593 38.9453 39.8024C38.9453 37.4454 40.8614 35.5293 43.2184 35.5293C45.5753 35.5293 47.4914 37.4454 47.4914 39.8024Z"
                    stroke="white" strokeWidth="2"/>
            </g>
            <defs>
                <clipPath id="clip0_318_435">
                    <rect width="48" height="48" fill="white" transform="translate(0.5 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )

    return (
        <>
            <footer id='footer'>
                <div className="footer-form">
                    <div className="footer-form-title">
                        <h5>{t("Thinking about NEW?")}</h5>
                        <p>{t("Let's get talking")}</p>
                    </div>
                    <form onSubmit={(e) => sentMail(e)}>
                        <div className="inputs-text-area-container">
                            <div className="inputs-container">
                                <div className="company-first-name">
                                    <InputField
                                        name={t("First name")}
                                        stateName='firstName'
                                        placeholder={t("Enter first name")}
                                        mandatory
                                        value={formData.firstName}
                                        setValue={handleInputChange}
                                    />
                                    <InputField
                                        name={t("Company name")}
                                        stateName='companyName'
                                        placeholder={t("Enter company name")}
                                        mandatory={false}
                                        value={formData.companyName}
                                        setValue={handleInputChange}
                                    />
                                </div>
                                <div className="email">
                                    <InputField
                                        name={t("Email")}
                                        stateName='email'
                                        placeholder={t('Enter email')}
                                        mandatory
                                        value={formData.email}
                                        setValue={handleInputChange}

                                        handleBlur={handleBlur}
                                        error={wrong.email}
                                    />
                                </div>
                                <div className="mobile">
                                    <InputField
                                        name={t("Phone number")}
                                        stateName='mobileNumber'
                                        placeholder={t("Enter phone number")}
                                        mandatory
                                        value={formData.mobileNumber}
                                        setValue={handleInputChange}

                                        handleBlur={handleBlur}
                                        error={wrong.mobileNumber}
                                    />
                                </div>
                            </div>

                            <div className="text-area-container">
                                <span>{t("Description")}</span>
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
                                        label={t('Web Development')}
                                        checked={services.webDesign}
                                        setIsChecked={() => handleCheckboxChange('webDesign')}
                                        icon={svgWebDevelopmentIcon}
                                    />
                                    <Checkbox
                                        id="design"
                                        label={t('Web Design')}
                                        checked={services.webDevelopment}
                                        setIsChecked={() => handleCheckboxChange('webDevelopment')}
                                        icon={svgWebDesignIcon}
                                    />
                                </div>
                                <div className='column'>
                                    <Checkbox
                                        id="brand"
                                        label={t('Branding')}
                                        checked={services.branding}
                                        setIsChecked={() => handleCheckboxChange('branding')}
                                        icon={svgBrandIcon}
                                    />
                                    <Checkbox
                                        label={t('Other Services')}
                                        checked={services.smthElse}
                                        setIsChecked={() => handleCheckboxChange('smthElse')}
                                        icon={svgOtherIcon}
                                    />
                                </div>
                            </div>

                            <button type="submit" className={`sent ${isReadyToSend ? 'active' : ''}`}>
                                <span>{t("Send a take")}</span>
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
                        <span>© {new Date().getFullYear()}, frant, All Rights Reserved.</span>
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
