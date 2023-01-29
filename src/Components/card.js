import React from 'react'
import './Card.css';

export default function
    (props) {
    return (
        <div>
            <div className="card">
                <div className="card__img-container"><img src={props.src} alt="error" /></div>
                <div className="card__content">
                    <h2 className="card__title">{props.title}</h2>
                    <a href="/" className="card__button">Buy now</a>
                </div>
            </div>
        </div>
    )
}