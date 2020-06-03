import React from 'react'
import Badge from './Badge'

function BadgeHolder(props) {
    return(
        <main className="badgeHolder">
            {props.badgeList.map((badge,i )=> {
                return(<Badge key={badge+i} info={badge} />)
            })}
        </main>
    )
}
export default BadgeHolder