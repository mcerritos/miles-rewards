import React from 'react'
import Header from './Header'

export default function TopGrid() {
    return (
        <div id="gridTop">
            <Header title="Rewards" headerType="topheader" />
            <Header title="C1" headerType="subheader" />
            <Header title="C2" headerType="subheader" />
            <Header title="C3" headerType="subheader" />
            <Header title="C4" headerType="subheader" />
            <Header title="C5" headerType="subheader" />   
        </div>
    )
}
