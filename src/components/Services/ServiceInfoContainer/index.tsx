interface IServiceInfoContainer {
    title: string,
    description?: string
}


const ServiceInfoContainer = ({title, description}: IServiceInfoContainer) => {
    return (<div className="service-info-container">
        <div className="brand-ident-info">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{__html: description || ''}}/>
            </div>
        </div>
        <button className="service-ident-button">
            get in touch
        </button>
    </div>)
}

export default ServiceInfoContainer