import "./home.css"
// Images
import foto from "../../assets/images/pizza.png"
import hamburguer from "../../assets/images/hamburguer.jpg"
import h2 from "../../assets/images/h2.jfif"
import hotel from "../../assets/images/hotel.jfif"
import brHotel from "../../assets/images/br-hotel.jfif"
import CatarHotel from "../../assets/images/catar-hotel.jfif"
import bar from "../../assets/images/bar.jfif"
import bar2 from "../../assets/images/bar2.jfif"
import bar3 from "../../assets/images/bar3.jfif"
import karaoke from "../../assets/images/karaoke.jpg"
import boate from "../../assets/images/boate.jpg"
// Icons filters
import UserPerfil from "../../components/UserPerfil"
import IconSettings from "../../assets/icons/settings.svg"
import IconBoate from "../../assets/icons/boate.png"
import IconKaraoke from "../../assets/icons/karaoke.png"
import FilterComponent from "../../components/Filter"
import fogo from "../../assets/icons/fogo.svg"
import hambuguer from "../../assets/icons/hambuguer.svg"
import pizza from "../../assets/icons/pizza.svg"
import sino from "../../assets/icons/sino.svg"
import LocationComponent from "../../components/Location"
import LocationDetailsComponent from "../../components/LocationDetails"
import { useEffect, useState } from "react"
import { MDBInput } from "mdb-react-ui-kit"

const filters_mock = [
    {
        id: "moradia",
        icon: sino,
        selected: false,
    },
    {
        id: "bar",
        icon: fogo,
        selected: false,
    },
    {
        id: "hambuguer",
        icon: hambuguer,
        selected: false,
    },
    {
        id: "pizzaria",
        icon: pizza,
        selected: false,
    },
    {
        id: "musica",
        icon: IconKaraoke,
        selected: false,
    },
    {
        id: "boate",
        icon: IconBoate,
        selected: false,
    }
]

const LOCATIONS_MOCK = [
    {
        photo: karaoke,
        title: "Karaokê do Tio",
        sub_title: "Musica",
        id: "musica"
    },
    {
        photo: boate,
        title: "Casa do meu pai",
        sub_title: "boate",
        id: "boate"
    },
    {
        photo: foto,
        title: "Pizza Hut",
        sub_title: "Pizzaria",
        id: "pizzaria"
    },
    {
        photo: hamburguer,
        title: "Hambuguer",
        sub_title: "Hambuguer",
        id: "hambuguer"
    },
    {
        photo: h2,
        title: "Nhami nhami",
        sub_title: "Hambuguer",
        id: "hambuguer"
    },
    {
        photo: bar,
        title: "Paraíba Bar",
        sub_title: "Bar",
        id: "bar"
    },
    {
        photo: bar2,
        title: "Faculdade",
        sub_title: "Bar",
        id: "bar"
    },
    {
        photo: bar3,
        title: "Zeca Pagodinho",
        sub_title: "Bar",
        id: "bar"
    },
    {
        photo: hotel,
        title: "Hotel",
        sub_title: "Moradia",
        id: "moradia"
    },
    {
        photo: brHotel,
        title: "Catar Hotel",
        sub_title: "Moradia",
        id: "moradia"
    },
    {
        photo: CatarHotel,
        title: "Só para ricos",
        sub_title: "Moradia",
        id: "moradia"
    },
]


const HomeContent = ({ onClick }) => {
    const [locations_selected, setLocationsSelected] = useState(LOCATIONS_MOCK)
    const [filters_selected, setFiltersSelected] = useState([])

    const handlerFilters = (id, is_selected) => {
        let filters = [...filters_selected]
        if (is_selected) {
            filters.push(id)
        } else {
            filters.splice(filters_selected.indexOf(id), 1);
        }
        setFiltersSelected(filters)
    }



    useEffect(() => {
        function filterIsSelected(id) {
            return filters_selected.indexOf(id) > -1
        }

        if (filters_selected.length) {
            let locations = []

            for (let index = 0; index < LOCATIONS_MOCK.length; index++) {
                const location = LOCATIONS_MOCK[index];

                if (filterIsSelected(location.id)) {
                    locations.push(location)
                }

            }
            setLocationsSelected(locations)
        } else {
            setLocationsSelected(LOCATIONS_MOCK)
        }
    }, [filters_selected])


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
                            <MDBInput
                                type='text'
                                className="home-input-filters"
                                labelClass='text-white'
                                label='Pesquisar o estabelecimento'
                                id='formControlLg'
                                size="lg"
                            />
                        </div>
                    </div>

                    <div className="home-filters-filters">
                        {
                            filters_mock.map((item, index) => (
                                <FilterComponent
                                    key={index}
                                    handlerFilter={handlerFilters}
                                    id={item.id}
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
                            locations_selected.map((item, index) => (
                                <LocationComponent
                                    key={index}
                                    id={index}
                                    photo={item.photo}
                                    title={item.title}
                                    sub_title={item.sub_title}
                                    onClick={(event, id) => onClick(id)}
                                />
                            ))
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

const HomeContentLocationDetailsComponent = ({ onClick, locationSelected }) => {
    return (
        <div className="location-details-content">
            <LocationDetailsComponent onClick={onClick} locationSelected={locationSelected}/>
        </div>
    )
}


const HomePage = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [homeContent, setHomeContent] = useState(<></>)
    const [locationSelected, setLocationSelected] = useState(null)

    function handlerHomeContent(id) {
        let show_details = !showDetails
        setLocationSelected(LOCATIONS_MOCK[id])
        setShowDetails(show_details)
    }

    useEffect(() => {
        var content = <></>
        if (showDetails) content = <HomeContentLocationDetailsComponent onClick={handlerHomeContent} locationSelected={locationSelected}/>
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