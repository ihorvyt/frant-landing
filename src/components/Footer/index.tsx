import React from 'react';
import './footer.scss'

import InputField from './InputField/'
import Checkbox from './Checkbox/'

const Index = () => {
    const [firstName, setFirstName] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");
    const [description, setDescription] = React.useState("");

    const [webDesign, setWebDesign] = React.useState(false);
    const [webDevelopment, setWebDevelopment] = React.useState(false);
    const [branding, setBranding] = React.useState(false);
    const [smthElse, setSmthElse] = React.useState(false);

    const isReadyToSent = firstName !== '' && email !== '' && mobileNumber !== '';

    return (
        <footer id='footer'>
            <div className="footer-form">
                <div className="footer-form-title">
                    <h6>Thinking about NEW?</h6>
                    <p>Let's get talking</p>
                </div>
                <form action="">
                    <div className="inputs-text-area-container">
                        <div className="inputs-container">
                            <div className="company-first-name">
                                <InputField name="First name" mandatory={true} value={firstName}
                                            setValue={setFirstName}/>
                                <InputField name="Company name" mandatory={false} value={companyName}
                                            setValue={setCompanyName}/>
                            </div>
                            <div className="email">
                                <InputField name="E-mail" mandatory={true} value={email}
                                            setValue={setEmail}/>
                            </div>
                            <div className="mobile">
                                <InputField name="Mobile number" mandatory={true} value={mobileNumber}
                                            setValue={setMobileNumber}/>
                            </div>
                        </div>

                        <div className="text-area-container">
                            <span>Description</span>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={`textarea ${description !== '' ? 'active' : ''}`}></textarea>
                        </div>
                    </div>
                    <div className="input-checkbox-sent">
                        <div className="checkboxes">
                            <Checkbox label='Web Development' checked={webDesign} setIsChecked={setWebDesign}/>
                            <Checkbox label='Web Design' checked={webDevelopment} setIsChecked={setWebDevelopment}/>
                            <Checkbox label='Branding' checked={branding} setIsChecked={setBranding}/>
                            <Checkbox label='Smth else' checked={smthElse} setIsChecked={setSmthElse}/>
                        </div>

                        <button className={`sent ${isReadyToSent ? 'active' : ''}`}>
                            <span>Send a take</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"
                                 fill="none">
                                <path
                                    d="M3.3045 26.6619C2.32819 27.6382 2.32819 29.2211 3.3045 30.1975C4.28081 31.1738 5.86372 31.1738 6.84003 30.1975L3.3045 26.6619ZM32.7151 3.28683C32.7151 1.90612 31.5958 0.78683 30.2151 0.786827L7.71513 0.786828C6.33441 0.786828 5.21513 1.90612 5.21513 3.28683C5.21513 4.66754 6.33441 5.78683 7.71513 5.78683H27.7151V25.7868C27.7151 27.1675 28.8344 28.2868 30.2151 28.2868C31.5958 28.2868 32.7151 27.1675 32.7151 25.7868L32.7151 3.28683ZM6.84003 30.1975L31.9829 5.0546L28.4474 1.51906L3.3045 26.6619L6.84003 30.1975Z"
                                    fill="#C3B8A3"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="credential">
                <div className="links">
                    <div className="soc">
                        <a>Linked In</a>
                        <a>Behance</a>
                    </div>

                    <a href="">frant.digital@gmail.com</a>
                </div>

                <div className="all-rights">
                    <span>© 2024, frant, All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Index;