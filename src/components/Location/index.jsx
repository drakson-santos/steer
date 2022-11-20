import "./location.css"

const LocationComponent = ({ photo, title, sub_title, onClick }) => {

    return (
        <div id="Location" onClick={() => onClick()}>
            <div>
                <img src={photo} />
            </div>
            <div>
                <div className="steer-style-title-secondary font-weight-600">{title}</div>
                <div className="steer-style-title-subtitle">{sub_title}</div>
            </div>
        </div>
    )
}

export default LocationComponent