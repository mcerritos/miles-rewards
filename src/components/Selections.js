import React from 'react'
import SelectedReward from './SelectedReward'

export default function Selections(props) {
    let currentSelections = []

    if (props.row1[0] !== 0) {
        console.log(props.row1)
        currentSelections.push(<SelectedReward key="1" title="Reward 1"/>)
    }

    if (props.row2[0] !== 0) {
        console.log(props.row2)
        currentSelections.push(<SelectedReward key="2" title="Reward 2"/>)
    }

    if (props.row3[0] !== 0) {
        currentSelections.push(<SelectedReward key="3" title="Reward 3"/>)
    }

    if (props.row4[0] !== 0) {
        currentSelections.push(<SelectedReward key="4" title="Reward 4"/>)
    }

    if (props.row5[0] !== 0) {
        currentSelections.push(<SelectedReward key="5" title="Reward 5"/>)
    }

    return (
        <div id="Selections">
            <h2>Selections</h2>
            <div>{currentSelections}</div>
        </div>
    )
}
