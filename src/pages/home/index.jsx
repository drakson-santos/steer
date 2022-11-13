import "./home.css"
import foto from "../../assets/images/pizza.png"

const HomePage = () => {
    return (
        <div id="HomePage" className="div-style-h100">
            <div id="HomeHeader">
                <div className="home-data-user">
                    <div>FOTO</div>
                    <div>Olá, Kevin!</div>
                </div>
                <div className="home-config">
                    ICON
                </div>
            </div>

            <div id="HomeContent">

                <div id="HomeFilters">
                    <div className="home-filters-header">
                        <div>
                            Vamos selecionar o melhor local para hoje!
                        </div>

                        <div>
                            <input type="text" placeholder="Pesquisar o estabelecimento"/>
                        </div>
                    </div>

                    <div className="home-filters-filters">

                        <div className="home-filter">
                            A
                        </div>
                        <div className="home-filter">
                            B
                        </div>
                        <div className="home-filter">
                            C
                        </div>
                        <div className="home-filter">
                            D
                        </div>

                        <div className="home-filter">
                            A
                        </div>
                        <div className="home-filter">
                            B
                        </div>
                        <div className="home-filter">
                            C
                        </div>
                        <div className="home-filter">
                            D
                        </div>

                        <div className="home-filter">
                            A
                        </div>
                        <div className="home-filter">
                            B
                        </div>
                        <div className="home-filter">
                            C
                        </div>
                        <div className="home-filter">
                            D
                        </div>
                    </div>
                </div>

                <div id="HomeListLocations">

                    <div>
                        Estabelecimentos populares:
                    </div>

                    <div className="list-locations">

                        <div className="location">
                            <div>
                                <img src={foto} alt="" />
                            </div>
                            <div>
                                <div className="steer-style-title-secondary">Pizza Hut</div>
                                <div className="steer-style-title-subtitle">Pizzaria</div>
                            </div>
                        </div>

                        <div className="location">
                            <div>
                                <img src={foto} alt="" />
                            </div>
                            <div>
                                <div className="steer-style-title-secondary">Pizza Hut</div>
                                <div className="steer-style-title-subtitle">Pizzaria</div>
                            </div>
                        </div>

                        <div className="location">
                            <div>
                                <img src={foto} alt="" />
                            </div>
                            <div>
                                <div className="steer-style-title-secondary">Pizza Hut</div>
                                <div className="steer-style-title-subtitle">Pizzaria</div>
                            </div>
                        </div>

                        <div className="location">
                            <div>
                                <img src={foto} alt="" />
                            </div>
                            <div>
                                <div className="steer-style-title-secondary">Pizza Hut</div>
                                <div className="steer-style-title-subtitle">Pizzaria</div>
                            </div>
                        </div>
                    </div>

                </div>

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