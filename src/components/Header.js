import React from 'react'

export default function Header(props) {

    return (
        <div className={props.type}> {props.title} </div>
    )
}
