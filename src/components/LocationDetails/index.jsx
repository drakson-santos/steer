import "./location-details.css"
import photo from "../../assets/images/pizza_2.jfif"
import distancia from "../../assets/images/distancia.svg"
import espera from "../../assets/images/espera.svg"
import movimento from "../../assets/images/distancia.svg"
import preco from "../../assets/images/preco.svg"

import { AiFillStar } from 'react-icons/ai';

const LocationNoteComponent = ({ note }) => {

    return (
        <div className="locatin-details-note">
            <AiFillStar />
            {note}
        </div>
    )
}

const LocationDetailsNoteComponent = ({ title, icon, value }) => {
    return (
        <div id="LocationDetailsNote">
            <div className="location-details-note-icon">
                <img src={icon} alt="" />
            </div>
            <div className="location-details-note-description">
                {title}
            </div>
            <div className="location-details-note-note">
                <LocationNoteComponent note={value} />
            </div>
        </div>
    )
}


const LocationDetailsNotes = [
    {
        title: "Movimento",
        icon: movimento,
        value: 2.5,
    },
    {
        title: "Distância",
        icon: distancia,
        value: 6.5,
    },
    {
        title: "Tempo de espera",
        icon: espera,
        value: 3.5,
    },
    {
        title: "Preço",
        icon: preco,
        value: 3.5,
    }
]

const LocationDetailsComponent = () => {
    return (
        <div id="LocationDetails">
            <div className="location-details-photo-content">
                <img
                    src={photo}
                    alt=""
                    className="location-details-photo"
                />
            </div>

            <div className="location-details-details-content">

                <div id="LocaitonDetailsHeader">
                    <div>
                        <div className="steer-style-tiltle-main steer-color-main">Pizza Hunt</div>
                        <div className="steer-color-subtitle">Pizzaria</div>
                    </div>
                    <div className="locatin-details-note">
                        <LocationNoteComponent note={4.5}/>
                    </div>
                </div>

                <div id="LocaitonDetailsContent">
                    {
                        LocationDetailsNotes.map((item) => (
                            <LocationDetailsNoteComponent
                                title={item.title}
                                icon={item.icon}
                                value={item.value}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default LocationDetailsComponent