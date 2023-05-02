const Item = ({id,name, img,price,stock}) => {

    return (

        <article className="card-item">
            <header className="header">
                <h2 className="item-header">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="item-img"/>
            </picture>

            <section>
                <p className="info">
                    <span className="label">Precio:</span>${price}
                </p>
                <p className="info">
                    <span className="label">Stock disponible:</span>{stock}
                </p>
            </section>
            <footer className="item-footer">
                <button className="option">
                    Ver detalle
                </button>

            </footer>


        </article>
    )
}

export default Item
