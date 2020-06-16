import React from 'react'

export default function Header(props) {

    return (
        <h3 className={props.headerType}> {props.title} </h3>
    )
}
