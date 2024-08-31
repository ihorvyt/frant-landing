import './serviceInfoContainer.scss'

interface IServiceInfoContainer {
    title: string,
    description?: string
}


const ServiceInfoContainer = ({title, description}: IServiceInfoContainer) => {
    return (<div className="service-info-container">
        <div className="service-info">
            <div className="title">
                <h3 dangerouslySetInnerHTML={{__html: title || ''}}/>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{__html: description || ''}}/>
            </div>
        </div>
        <button className="service-ident-button">
            <span>get in touch</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="67" height="49" viewBox="0 0 67 49" fill="none">
                <g clipPath="url(#clip0_69_880)">
                    <path
                        d="M9 24.5C8.17157 24.5 7.5 25.1716 7.5 26C7.5 26.8284 8.17157 27.5 9 27.5V24.5ZM59.0607 27.0607C59.6464 26.4749 59.6464 25.5251 59.0607 24.9393L49.5147 15.3934C48.9289 14.8076 47.9792 14.8076 47.3934 15.3934C46.8076 15.9792 46.8076 16.9289 47.3934 17.5147L55.8787 26L47.3934 34.4853C46.8076 35.0711 46.8076 36.0208 47.3934 36.6066C47.9792 37.1924 48.9289 37.1924 49.5147 36.6066L59.0607 27.0607ZM9 27.5H58V24.5H9V27.5Z"
                        fill="#C3B8A3"/>
                </g>
                <defs>
                    <clipPath id="clip0_69_880">
                        <rect width="67" height="49" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
    </div>)
}

export default ServiceInfoContainer