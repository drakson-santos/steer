import "./user-perfil.css"
import KevinPhoto from "../../assets/images/kevin.png"

const UserPerfil = () => {
    return (
        <>
            <div className="user-perfil">
                <div>
                    <img src={KevinPhoto} alt="" width={30}/>
                </div>
                <div className="user-perfil-name steer-color-subtitle">Olá, Kevin!</div>
            </div>
        </>
    )
}

export default UserPerfil