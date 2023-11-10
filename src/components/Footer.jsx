export default function Footer () {
    const redes = ['Facebook', 'Instagram', 'Twitter', 'Twitch', 'Youtube'];
    return (
        <div>
            <footer>
                <section id="redes">
                    <div className="containerRedes">
                        <h1 className="tituloFooter">Redes</h1>

                        <ul>
                            {
                                redes.map((redm, index) => {
                                    return <li key={index} className="redesList">{redm}</li>
                                })
                            }
                        </ul>
                    </div>
                </section>

                <section id="ubicacion">
                    <div className="containerUbicacion">
                        <h1 className="tituloFooter">Ubicación</h1>
                        <p>Encontranos en Av. Jujuy 801-899</p>
                        <iframe className="mapaFooter" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.8497647871249!2d-58.40399143042896!3d-34.619354498309306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccae37a06e4af%3A0x8497abdb721c51b5!2sAv.%20Jujuy%20801-899%2C%20C1229ABD%20CABA!5e0!3m2!1ses!2sar!4v1699624825461!5m2!1ses!2sar" width="600" height="450"></iframe>
                    </div>
                </section>

                <section id="brandFooter">
                    <div className="containerTituloFooter">
                        <h1 className="tituloFooter">Gaming World</h1>
                    </div>
                </section>
            </footer>
        </div>
    )
}