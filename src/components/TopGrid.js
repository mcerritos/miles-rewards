import React from 'react'
import Header from './Header'

export default function TopGrid() {
    return (
        <div id="gridTop">
            <Header title="Rewards" className="topHeader" />
            <Header title="Categories" className="topHeader" />
            <Header title="C1" className="subheader" />
            <Header title="C2" className="subheader" />
            <Header title="C3" className="subheader" />
            <Header title="C4" className="subheader" />
            <Header title="C5" className="subheader" />   
        </div>
    )
}
