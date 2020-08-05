import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ToDo from './components/ToDo'


function App() {
    const [toDos, setToDos] = useState([])

    function getToDos() {
        axios.get("http://localhost:5500/todos")
        .then(res => setToDos(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getToDos()
    }, [])
    return(
        <div>
            <h1>My ToDo App</h1>
            <div className="cardHolder">
            {toDos.map(todo => <ToDo {...todo} key={todo._id}/>) }
            </div>
        </div>
        
    )
}

export default App