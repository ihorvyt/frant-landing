import React from 'react';
import './check.scss'

const Index = () => {
    const checkInfo = [
        {
          name: "24.08.24",
          price: "23:31"
        },
        {
            name: "24.08.24",
            price: "23:31"
        },
        {
            name: "24.08.24",
            price: "23:31"
        },
        {
            name: "24.08.24",
            price: "23:31"
        },
        {
            name: "24.08.24",
            price: "23:31"
        },
        {
            name: "24.08.24",
            price: "23:31"
        }
    ]

    return (
        <article className="check">
            <div className="site-variant">
                <h3>Landing</h3>
            </div>

            <div className="check-info-secondary">
                <p>
                    <b>development services </b>
                    c.l.u.f.a. “Frant-digital”
                    Independent web space, official Frant website
                </p>
            </div>

            <div className="check-info">
                {
                    checkInfo.map(info =>
                        <div className="info">
                            <div className="name">{info.name}</div>
                            <div className="value">{info.price}</div>
                        </div>
                    )
                }
            </div>

            <div className="line">----------------------------</div>

            <div className="check-info">
                {
                    checkInfo.slice(0, 3).map(info =>
                        <div className="info">
                            <div className="name">{info.name}</div>
                            <div className="value">{info.price}</div>
                        </div>
                    )
                }
            </div>

            <div className="line">----------------------------</div>

            <div className="total-price">
                <div className="total">Total</div>
                <div className="price">735.00$</div>
            </div>

            <div className="check-info">
                {
                    checkInfo.slice(0, 2).map(info =>
                        <div className="info">
                            <div className="name">{info.name}</div>
                            <div className="value">{info.price}</div>
                        </div>
                    )
                }
            </div>

            <div className="line">----------------------------</div>

            <div className="check-info-secondary">
                <p>THANK FOR YOUR PURCHASE!</p>
                <p>EMAIL:fRANT.DIGITAL@GMAIL.COM</p>
                <p>15 articles</p>
                <p>WE DO NOT MAKE REFUNDS </p>

                <p className="full-width"><span>1996-∞</span> <span>23:31</span> <span>24.08.24</span></p>
            </div>

            <div className="bar-code-line">
                <p>We bring your ideas to life.</p>

                <div className="line">============================</div>
            </div>

            <div className="check-info-secondary">
                <p className="upper-case">
                    * thank you *
                </p>
            </div>

            <div className="line">============================</div>
        </article>
    );
};

export default Index;