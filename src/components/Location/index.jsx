import "./location.css"

const LocationComponent = ({ photo, title, sub_title }) => {

    return (
        <div id="Location">
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <div className="steer-style-title-secondary">{title}</div>
                <div className="steer-style-title-subtitle">{sub_title}</div>
            </div>
        </div>
    )
}

export default LocationComponent