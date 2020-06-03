import React from 'react'
import Target from './Target'

import axios from 'axios'

class HitList extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            targets: []
        }
    }
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
        .then(results => {
            const targets = results.data
            return(this.setState({
                targets: targets
            }))
            
        })
        .catch(error => console.log(error))
    }

    render() {
        //console.log("state", this.state.targets)
        const vSTargets = this.state.targets.map(
            (target, i) => {
                return(
                    <Target key={i} info={target} />
                )
            }
        )
        return (
            <ul className="hitList flexCol" >
                {vSTargets}
            </ul>
        )
    }
}

export default HitList