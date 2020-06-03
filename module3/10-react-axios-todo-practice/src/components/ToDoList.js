import React from 'react'
import ToDoItem from './ToDoItem'
import axios from 'axios'

class ToDoList extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: null,
            characters: []
        }
    }
    componentDidMount() {
        axios.get('https://swapi.dev/api/people/')
        .then(data =>{
            console.log("results directly from api",data.data.results)
            const {luke} = data.data.results[0]
            //const {results} = data.data.results
            const chars = data.data.results.map(char => char.name)

            //const name = data.data.results[0].name
           return( this.setState(
              {  character: luke,
                characters: chars
            }
            )
            )}
        )
        .catch(error => console.log(error))
    }
    render() {
        console.log(this.state)
        const swapiCharacterBars = this.state.characters.map((character, i )=> {
            return(<ToDoItem key={i} itemData={character} />)
        })
        return (
            <ul className="toDoList flexCol">
                {/* {Put mapped list of items here} */}
                {swapiCharacterBars}
            </ul>
            )
    }
   
}

export default ToDoList