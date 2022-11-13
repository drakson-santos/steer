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
const HomePage = () => {
    return (
        <div id="HomePage" className="div-style-h100">
            {/* <div id="HomeHeader">
                <UserPerfil />
                <div className="home-config">
                    <img src={IconSettings} alt="" />
                </div>
            </div>

            <div id="HomeContent">

                <div id="HomeFilters">
                    <div className="home-filters-header">
                        <div className="steer-style-tiltle-secondary">
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

                <div id="HomeListLocations">

                    <div>
                        Estabelecimentos populares:
                    </div>

                    <div className="list-locations">
                        {
                            locations_mock.map((item) => (
                                <LocationComponent
                                    photo={item.photo}
                                    title={item.title}
                                    sub_title={item.sub_title}
                                />
                            ))
                        }
                    </div>

                </div>

            </div> */}
            <div className="location-details-content">
                <LocationDetailsComponent />
            </div>
            <div id="HomeFooter">
                <div>Steer</div>
                <div>ICON 1</div>
                <div>ICON 2</div>
            </div>
        </div>
    )
}

export default HomePage