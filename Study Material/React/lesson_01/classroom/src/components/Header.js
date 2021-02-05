import React from 'react'

export default function Header(props) {

    return (
        <div>
            <p style={{ color: "red", backgroundColor: "green" }}> My First App </p>
            {props.age}
        </div>
    )

}
