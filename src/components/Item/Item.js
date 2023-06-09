import './Item.css'  
import { Link } from 'react-router-dom'

const Item = ({id, name, img, category, description, price, stock}) => {


    return (
        <article className='CardItem'>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className="info">
                    Categoria: {category}
                </p>
                <p className="info">
                    Descripcion: {description}
                </p>
                <p className="info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='Itemfooter'>
               <Link className='Option' to={`/item/${id}`}>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item