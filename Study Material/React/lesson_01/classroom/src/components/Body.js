import React from 'react'

export default function Body(props) {

    let num = 5;

    const biggestNum = (x, y) => {
        if (x > y) {
            return x;
        }
        return y;
    }

    let objc = {
        name: 'Ben',
        age: 23,
        car: {
            type: 'Xiaomi 365',
            year: 2020
        }
    }

    return (
        <div>
            <p>num is: {num}</p>
            <p>{biggestNum(6, 9)}</p>
            <p>{objc.name}</p>
            <p>{objc.car.type}</p>
            {props.num}
            {props.myname}
        </div>
    )

}