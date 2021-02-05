import React from 'react'

export default function Body2(props) {

    return (
        <div className="card">
            <p>{props.food}</p>
            <p>{props.drink}</p>
        </div>
    )

}