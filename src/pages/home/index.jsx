import InterestComponent from "../../components/interests"
import "./home.css"

const HomePage = () => {
    return (
        <div>
            <InterestComponent icon="A" title="Restaurante"/>
            <InterestComponent icon="B" title="Doceria"/>
        </div>
    )
}

export default HomePage