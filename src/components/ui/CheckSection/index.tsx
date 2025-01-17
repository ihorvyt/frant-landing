import React, {useEffect, useState} from 'react';
import './checkSection.scss'




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Check from "@/components/ui/CheckSection/Check";
import {useTranslations} from "next-intl";

const Index: React.FC = () => {
    const t = useTranslations("Check")
    const checkInfo = [
        {
            "check": {
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
            "check": {
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
            "check": {
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
            "check": {
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
            "check": {
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
            "check": {
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
            "check": {
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
            "check": {
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
            "check": {
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
            "check": {
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
    ]

    const [isPhone, setIsPhone] = useState<boolean>();

    useEffect(() => {
        setIsPhone(window.innerWidth < 768)
    }, []);

    return (<>
        <section id='prices' className="check-section">
            <div className="check-section-price">
                <h3>{t("Prices for our vision")}</h3>
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={isPhone ? 30 : 300} // Це забезпечить, що слайди перекриватимуться
                slidesPerView={isPhone ? 1.35 : 4} // Показує 2.5 слайда, де половина - це частина наступного та попереднього слайду
                centeredSlides={true} // Центрує активний слайд
                loop={true} // Дозволяє безперервний цикл
                autoplay={{
                    delay: 3000, // Затримка перед переходом до наступного слайду (у мс)
                    disableOnInteraction: false, // Продовжує автопрогравання навіть після взаємодії
                }}
            >
                {
                    checkInfo.map((obj, index) =>
                        <SwiperSlide key={index}>
                            <Check checkInfo={obj.check} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    </>);
};

export default Index;
