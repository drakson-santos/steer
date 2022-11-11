import "./interests.css"

const InterestComponent = ({ icon, title }) => {

    return (
        <div id="Interests">
            <div className="interest-pink">
                {icon}
            </div>
            <div>{title}</div>
        </div>
    )
}

export default InterestComponent
