import "./location-details.css"
import photo from "../../assets/images/pizza_2.jfif"
import distancia from "../../assets/images/distancia.svg"
import espera from "../../assets/images/espera.svg"
import movimento from "../../assets/images/distancia.svg"
import preco from "../../assets/images/preco.svg"

import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

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

const LocationDetailsComponent = ({ onClick, locationSelected }) => {

    return (
        <div id="LocationDetails">
            <div className="location-details-photo-content">
                <div
                    className="location-details-back"
                    onClick={() => onClick()}
                >
                    <IoIosArrowBack size={30}/>
                </div>
                <img
                    src={locationSelected?.photo}
                    alt=""
                    className="location-details-photo"
                />
            </div>

            <div className="location-details-details-content steer-color-background-main">

                <div id="LocaitonDetailsHeader">
                    <div>
                        <div className="steer-style-tiltle-main steer-color-main">{locationSelected?.title}</div>
                        <div className="steer-color-subtitle">{locationSelected?.sub_title}</div>
                    </div>
                    <div className="locatin-details-note">
                        <LocationNoteComponent note={4.5}/>
                    </div>
                </div>

                <div id="LocaitonDetailsContent">
                    {
                        LocationDetailsNotes.map((item, index) => (
                            <LocationDetailsNoteComponent
                                key={index}
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