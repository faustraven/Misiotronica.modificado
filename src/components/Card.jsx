import React from 'react'

function Card({producto}) {
        const { image,title,price } = producto
    return (
        <article className='card'>
            <picture className='card__picture'>
                <img src={image} alt="" className="card__image" />
            </picture>
            <div className="card__body">
                <h3 className='card__title'>{title}</h3>
                <footer className='card__footer'>
                    <span className='card__price'>${price}</span>
                    <button className='card__btn'>Comprar</button>
                </footer>
            </div>
        </article>
    )
}

export default Card