import "./home.css"
import foto from "../../assets/images/pizza.png"
import UserPerfil from "../../components/UserPerfil"
import IconSettings from "../../assets/icons/settings.svg"
import FilterComponent from "../../components/Filter"
import fogo from "../../assets/icons/fogo.svg"
import hambuguer from "../../assets/icons/hambuguer.svg"
import pizza from "../../assets/icons/pizza.svg"
import sino from "../../assets/icons/sino.svg"
import LocationComponent from "../../components/Location"
import LocationDetailsComponent from "../../components/LocationDetails"
import { useEffect, useState } from "react"

const lugares_mock = [
    {
        icon: fogo,
        selected: true,
    },
    {
        icon: hambuguer,
        selected: false,
    },
    {
        icon: pizza,
        selected: false,
    },
    {
        icon: sino,
        selected: true,
    },
    {
        icon: fogo,
        selected: false,
    },
    {
        icon: hambuguer,
        selected: false,
    },
    {
        icon: pizza,
        selected: false,
    },
    {
        icon: sino,
        selected: false,
    }
]

const locations_mock = [
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria"
    },
]


const HomeContent = ({ onClick }) => {

    return (
        <>
            <div id="HomeHeader">
                <UserPerfil />
                <div className="home-config">
                    <img src={IconSettings} alt="" />
                </div>
            </div>

            <div id="HomeContent">

                <div id="HomeFilters">
                    <div className="home-filters-header">
                        <div className="steer-style-tiltle-secondary color-main">
                            Vamos selecionar o melhor local para hoje!
                        </div>

                        <div>
                            <input
                                className="home-input-filters"
                                type="text"
                                placeholder="Pesquisar o estabelecimento"
                            />
                        </div>
                    </div>

                    <div className="home-filters-filters">
                        {
                            lugares_mock.map((item) => (
                                <FilterComponent
                                    icon={item.icon}
                                    selected={item.selected}
                                />
                            ))
                        }

                    </div>
                </div>

                <div id="HomeListLocations" className="color-main">

                    <div className="font-weight-600">
                        Estabelecimentos populares:
                    </div>

                    <div className="list-locations">
                        {
                            locations_mock.map((item) => (
                                <LocationComponent
                                    photo={item.photo}
                                    title={item.title}
                                    sub_title={item.sub_title}
                                    onClick={onClick}
                                />
                            ))
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

const HomeContentLocationDetailsComponent = ({ onClick }) => {
    return (
        <div className="location-details-content">
            <LocationDetailsComponent onClick={onClick}/>
        </div>
    )
}


const HomePage = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [homeContent, setHomeContent] = useState(<></>)

    function handlerHomeContent() {
        setShowDetails(!showDetails)
    }

    useEffect(() => {
        var content = <></>
        if (showDetails) content = <HomeContentLocationDetailsComponent onClick={handlerHomeContent}/>
        else content = <HomeContent onClick={handlerHomeContent}/>
        setHomeContent(content)
    }, [showDetails])

    return (
        <div
            id="HomePage"
            className="
                div-style-h100
                steer-color-background-main
            "
        >
            {homeContent}

            <div id="HomeFooter">
                <div>Steer</div>
                <div>ICON 1</div>
                <div>ICON 2</div>
            </div>
        </div>
    )
}

export default HomePage