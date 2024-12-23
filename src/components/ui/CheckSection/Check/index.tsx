import React from 'react';
import './check.scss'
import {useLocale, useTranslations} from "next-intl";

const formatPrice = (price: number | string, defaultValue: number | string) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price; // конвертуємо у число
    if (!isNaN(numericPrice)) {
        return `~${numericPrice.toFixed(2)}$`;
    } else {
        return defaultValue;
    }
};


const Index = ({checkInfo, budget, email}: any) => {
    const t = useTranslations("Check")
    const lang = useLocale()

    return (
        <article className="check">
            <div className={`site-variant ${lang === 'ua' ? 'ua' : ''}`}>
                <h3>{t(checkInfo.title)}</h3>
            </div>

            <div className="check-info-secondary">
                <p>
                    <b>{t("development services")}</b>
                    <br/>
                    {t("clufa “Frant-digital”")}
                    <br/>
                    {t("Independent web space, official Frant website")}
                </p>
            </div>

            <div className="check-info">
                {
                    checkInfo.check_info_1.map((checkInfo: { name: string; value: string }) =>
                        <div key={checkInfo.name} className="info">
                            <div className="name">{t(checkInfo.name)}</div>
                            <div className="value">{checkInfo.value}</div>
                        </div>
                    )
                }
            </div>

            <div className="line">-------------------------</div>

            <div className="check-info">
                {
                    checkInfo.check_info_2.map((checkInfo: { name: string; value: string }) =>
                        <div key={checkInfo.name} className="info">
                            <div className="name">{t(checkInfo.name)}</div>
                            <div className="value">{checkInfo.value}</div>
                        </div>
                    )
                }
            </div>

            <div className="line">-------------------------</div>

            <div className="total-price">
                <div className="total">{t("Total")}</div>
                <div className="price">{formatPrice(budget, checkInfo.price)}</div>
            </div>

            <div className="check-info">
                <div className="info">
                    <div className="name">{t("e-cash:")}</div>
                    <div className="value">{formatPrice(budget, checkInfo.price)}</div>
                </div>
                <div className="info">
                <div className="name">{t("CHANGE:")}</div>
                    <div className="value">{t("our kindness :)")}</div>
                </div>
            </div>

            <div className="line">-------------------------</div>

            <div className="check-info-secondary">
                <p>{t("THANK FOR YOUR PURCHASE!")}</p>
                <p>email: {email || "frantdigital@GMAIL.COM"}</p>

                <p className="full-width"><span>1996-∞</span> <span>23:31</span> <span>24.08.24</span></p>
            </div>

            <div className="bar-code-line">
                <p>{t("we bring your ideas to life")}</p>

                <div className="equal">=============================</div>
            </div>

            <div className="check-info-secondary">
                <p className="upper-case">
                    * {t("thank you")} *
                </p>
            </div>

            <div className="equal">=============================</div>
        </article>
    );
};

export default Index;