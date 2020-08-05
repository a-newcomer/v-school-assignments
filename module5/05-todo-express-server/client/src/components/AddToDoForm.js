import React, {useState} from 'react';

function AddToDoForm(props) {
    const initInputs = {
            name: "",  
            description: "", 
            imageUrl: "https://unsplash.com/photos/KCdivsKLuWQ", 
            completed: false
        }
    const [inputs, setInputs] = useState(initInputs)
    
    return(
        <form>

        </form>
    )
}
export default AddToDoForm