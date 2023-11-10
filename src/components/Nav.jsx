

export default function Nav() {
    const opcionesMenu = ['INICIO','CONTACTO','PRODUCTOS','LOGIN']

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="navBrand">
                        <a href="http://localhost:5173/" className="tituloNavbar">Gaming World</a>
                    </div>
                    <ul className="nav-list">
                        {opcionesMenu.map((opcion, index) => {
                            return <li className="nav-item" key={index}>{opcion}</li>
                        })}
                    </ul>   
                </nav>
            </header>
        </div>
    )
}