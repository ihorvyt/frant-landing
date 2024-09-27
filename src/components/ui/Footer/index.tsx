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
                    description: 'Your message has been sent'
                })
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
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <g clipPath="url(#clip0_62_84)">
                <path
                    d="M7 2.5C5.67392 2.5 4.40215 3.02678 3.46447 3.96447C2.52678 4.90215 2 6.17392 2 7.5V21.5C2 22.8261 2.52678 24.0979 3.46447 25.0355C4.40215 25.9732 5.67392 26.5 7 26.5H10.984C11.1313 26.3016 11.2931 26.1145 11.468 25.94L12.908 24.5H7C6.20435 24.5 5.44129 24.1839 4.87868 23.6213C4.31607 23.0587 4 22.2956 4 21.5V10.5H24V10.552C24.6649 10.4804 25.3357 10.483 26 10.56V7.5C26 6.17392 25.4732 4.90215 24.5355 3.96447C23.5979 3.02678 22.3261 2.5 21 2.5H7ZM17.862 13.948L16.708 12.792C16.615 12.699 16.5046 12.6253 16.3832 12.575C16.2617 12.5246 16.1315 12.4987 16 12.4987C15.8685 12.4987 15.7383 12.5246 15.6168 12.575C15.4954 12.6253 15.385 12.699 15.292 12.792C15.199 12.885 15.1253 12.9954 15.075 13.1168C15.0246 13.2383 14.9987 13.3685 14.9987 13.5C14.9987 13.6315 15.0246 13.7617 15.075 13.8832C15.1253 14.0046 15.199 14.115 15.292 14.208L16.782 15.696C17.07 15.0813 17.43 14.4987 17.862 13.948ZM12.708 14.208C12.801 14.115 12.8747 14.0046 12.925 13.8832C12.9754 13.7617 13.0013 13.6315 13.0013 13.5C13.0013 13.3685 12.9754 13.2383 12.925 13.1168C12.8747 12.9954 12.801 12.885 12.708 12.792C12.615 12.699 12.5046 12.6253 12.3832 12.575C12.2617 12.5246 12.1315 12.4987 12 12.4987C11.8685 12.4987 11.7383 12.5246 11.6168 12.575C11.4954 12.6253 11.385 12.699 11.292 12.792L7.292 16.792C7.19887 16.8849 7.12499 16.9952 7.07457 17.1167C7.02416 17.2382 6.99821 17.3685 6.99821 17.5C6.99821 17.6315 7.02416 17.7618 7.07457 17.8833C7.12499 18.0048 7.19887 18.1151 7.292 18.208L11.292 22.208C11.4798 22.3958 11.7344 22.5013 12 22.5013C12.2656 22.5013 12.5202 22.3958 12.708 22.208C12.8958 22.0202 13.0013 21.7656 13.0013 21.5C13.0013 21.2344 12.8958 20.9798 12.708 20.792L9.414 17.5L12.708 14.208ZM25.784 12.548C26.516 12.632 26.726 13.508 26.204 14.032L24.254 15.982C23.6886 16.5474 23.3709 17.3143 23.3709 18.114C23.3709 18.5099 23.4489 18.902 23.6004 19.2678C23.7519 19.6336 23.974 19.966 24.254 20.246C24.534 20.526 24.8664 20.7481 25.2322 20.8996C25.598 21.0511 25.9901 21.1291 26.386 21.1291C27.1857 21.1291 27.9526 20.8114 28.518 20.246L30.468 18.296C30.99 17.774 31.868 17.984 31.952 18.716C32.0913 19.9046 31.9251 21.1091 31.4692 22.2156C31.0132 23.322 30.2826 24.2939 29.3464 25.0394C28.4102 25.7848 27.2993 26.2791 26.1188 26.4755C24.9383 26.672 23.7272 26.5641 22.6 26.162L17.148 31.616C16.868 31.896 16.5356 32.1181 16.1698 32.2696C15.804 32.4211 15.4119 32.4991 15.016 32.4991C14.6201 32.4991 14.228 32.4211 13.8622 32.2696C13.4964 32.1181 13.164 31.896 12.884 31.616C12.604 31.336 12.3819 31.0036 12.2304 30.6378C12.0789 30.272 12.0009 29.8799 12.0009 29.484C12.0009 29.0881 12.0789 28.696 12.2304 28.3302C12.3819 27.9644 12.604 27.632 12.884 27.352L18.336 21.9C17.9338 20.7727 17.8259 19.5613 18.0224 18.3807C18.219 17.2 18.7135 16.0889 19.4591 15.1526C20.2048 14.2164 21.177 13.4858 22.2837 13.03C23.3905 12.5742 24.5952 12.4083 25.784 12.548Z"
                    fill="#FFFBF4"/>
            </g>
            <defs>
                <clipPath id="clip0_62_84">
                    <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )

    const svgWebDesignIcon = (
        <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#fff"
             stroke="#fff" transform="rotate(270)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path className="linesandangles_een"
                      d="M20,20.854c0-1.136,0.642-2.175,1.658-2.683L24,17L17,3h-2L8,17l2.342,1.171 C11.358,18.679,12,19.718,12,20.854V21h-2v8h12v-8h-2V20.854z M11.236,16.382l-0.553-0.276L15,7.472V15h2V7.472l4.317,8.633 l-0.553,0.276C19.059,17.234,18,18.948,18,20.854V21h-4v-0.146C14,18.948,12.941,17.234,11.236,16.382z M20,27h-8v-4h8V27z"></path> </g></svg>
    )

    const svgBrandIcon = (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z"
                    stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#fff" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#fff" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )

    const svgOtherIcon = (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M5.57489 2.07403C5.83474 2.19892 6 2.4617 6 2.75001C6 3.57985 6.31211 4.05763 6.70313 4.63948L6.73156 4.68175C7.0641 5.17579 7.5 5.8234 7.5 6.75001C7.5 7.69552 7.02282 8.52959 6.29615 9.02452C6.48733 9.1848 6.65672 9.38248 6.80225 9.61803C7.27801 10.388 7.5 11.5645 7.5 13.2549C7.5 14.967 7.27003 17.023 6.89541 18.6644C6.70914 19.4806 6.47843 20.2335 6.20272 20.7994C6.06598 21.08 5.89948 21.3541 5.69217 21.5685C5.48714 21.7804 5.17035 22.0049 4.75 22.0049C4.32965 22.0049 4.01286 21.7804 3.80783 21.5685C3.60052 21.3541 3.43402 21.08 3.29728 20.7994C3.02157 20.2335 2.79086 19.4806 2.60459 18.6644C2.22997 17.023 2 14.967 2 13.2549C2 11.5645 2.22199 10.388 2.69775 9.61803C2.84328 9.38248 3.01267 9.1848 3.20385 9.02452C2.47718 8.52959 2 7.69552 2 6.75001C2 6.38181 2.00034 5.74889 2.38341 4.93168C2.75829 4.13192 3.47066 3.21301 4.78148 2.16436C5.00661 1.98425 5.31504 1.94914 5.57489 2.07403ZM3.5 6.74875V6.75001C3.5 7.44036 4.05964 8.00001 4.75 8.00001C5.44036 8.00001 6 7.44036 6 6.75001C6 6.31097 5.81518 6.00743 5.45814 5.47615L5.44592 5.45796C5.21705 5.11747 4.94673 4.71532 4.75381 4.19756C4.21053 4.74999 3.9105 5.208 3.74159 5.56833C3.5 6.08374 3.5 6.4505 3.5 6.74875ZM3.97383 10.4065C3.72572 10.808 3.5 11.6315 3.5 13.2549C3.5 14.8565 3.71774 16.8005 4.06698 18.3306C4.24264 19.1003 4.44289 19.726 4.64574 20.1424C4.68308 20.219 4.71806 20.2834 4.75 20.3369C4.78194 20.2834 4.81692 20.219 4.85426 20.1424C5.05711 19.726 5.25736 19.1003 5.43302 18.3306C5.78226 16.8005 6 14.8565 6 13.2549C6 11.6315 5.77428 10.808 5.52617 10.4065C5.41327 10.2237 5.30119 10.1372 5.20105 10.0886C5.09322 10.0363 4.95068 10.0049 4.75 10.0049C4.54932 10.0049 4.40678 10.0363 4.29895 10.0886C4.19881 10.1372 4.08673 10.2237 3.97383 10.4065Z"
                    fill="#fff"></path>
                <path
                    d="M9.99994 14.917C9.46162 14.8267 8.94761 14.6647 8.46806 14.4412C8.48904 14.0349 8.49994 13.637 8.49994 13.2549C8.49994 13.0791 8.49768 12.9066 8.49298 12.7376C8.94409 13.0407 9.4531 13.2644 9.99994 13.3885V10.5C9.99994 9.67157 10.6715 9 11.4999 9H15.4999C15.4999 6.51472 13.4852 4.5 10.9999 4.5C9.97153 4.5 9.0237 4.84498 8.26586 5.42552C8.06633 4.8731 7.78116 4.44995 7.58275 4.15554L7.54248 4.09572C8.51976 3.40549 9.7125 3 10.9999 3C14.3136 3 16.9999 5.68629 16.9999 9H20.4999C21.3284 9 21.9999 9.67157 21.9999 10.5V19.5C21.9999 20.3284 21.3284 21 20.4999 21H11.4999C10.6715 21 9.99994 20.3284 9.99994 19.5V14.917ZM11.4999 14.9795V19.5H20.4999V10.5H16.8109C16.185 12.932 14.0726 14.7672 11.4999 14.9795ZM15.2439 10.5H11.4999V13.4725C13.239 13.2803 14.6794 12.097 15.2439 10.5Z"
                    fill="#fff"></path>
            </g>
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