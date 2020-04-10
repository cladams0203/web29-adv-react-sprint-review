import React from 'react'

export function Card(props) {
    return (
        <div>
            <h2> {props.item.first_name} {props.item.last_name} </h2>
            <p> {props.item.email} </p>
        </div>
    )
}