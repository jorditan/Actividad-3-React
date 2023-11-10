export default function Main(props) {
    return (
        <div>
            <main>
                <section className="inicio">
                    <article className="producto">
                        <div className="contenedorTitulo">
                            <h1 className="titulo">{props.name}</h1>
                        </div>
                        
                        <div className="infoProducto">
                            <div className="contenedorImagen">
                                <img src= {props.img} alt="Audífonos bosé" />
                                <span className="precio">{props.precio}</span>
                            </div>

                            <div className="data">
                                <p className="descripcion">
                                    <span className="enfasis">Descripcion:</span>
                                    {props.descripcion}
                                </p>

                                <span className="marca">Marca: {props.marca}</span>
                                <span className="sku">SKU: {props.SKU}</span>

                                <p>
                                    El stock disponible es de <span className="stock">{props.stock} unidades</span>
                                </p>

                                <div className="compra">
                                    <button className="buttonCompra">Comprar</button>
                                </div> 
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

