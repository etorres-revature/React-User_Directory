import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="user"
            src={``}
            />
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}

export default Card;