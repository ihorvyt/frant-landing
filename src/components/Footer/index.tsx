import React from 'react';
import './footer.scss'

const InputField = ({name, mandatory, value, setValue}: {name: string, mandatory: boolean, value: string, setValue: (value: string) => void}) => {
    return (
        <div className="input-container">
            <div>
                <span className="name">{name}</span>{mandatory && <span className="mandatory">*</span>}
            </div>
            <div className="input-field">
                <input type="text"/>
            </div>
        </div>
    )
}


const CustomCheckbox = ({ label, checked, setIsChecked }: {label: string, checked: boolean, setIsChecked: (value: boolean) => void}) => {
    return (
        <label className={`${checked ? 'active' : ''}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setIsChecked(!checked)}
                style={{ display: 'none' }}
            />
            <div className="icon">
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
            </div>
            <span>{label}</span>
        </label>
    );
};


const Index = () => {
    const [firstName, setFirstName] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");


    const [webDesign, setWebDesign] = React.useState(false);
    const [webDevelopment, setWebDevelopment] = React.useState(false);
    const [branding, setBranding] = React.useState(false);
    const [smthElse, setSmthElse] = React.useState(false);

    return (
        <footer>
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
                            <textarea className="textarea"></textarea>
                        </div>
                    </div>
                    <div className="input-checkbox-sent">
                        <div className="checkboxes">
                            <CustomCheckbox label='Web Development' checked={webDesign} setIsChecked={setWebDesign}/>
                            <CustomCheckbox label='Web Design' checked={webDevelopment} setIsChecked={setWebDevelopment}/>
                            <CustomCheckbox label='Branding' checked={branding} setIsChecked={setBranding}/>
                            <CustomCheckbox label='Smth else' checked={smthElse} setIsChecked={setSmthElse}/>
                        </div>

                        <button className="sent">
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