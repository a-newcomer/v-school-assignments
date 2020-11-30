import React, {useState, useContext} from 'react'
import {CardContext} from './CardContext'

function Form() {
    const kittyContext = useContext(CardContext)
    
    const [kittyURL, setKittyURL] = useState('')
    const [kittyTitle, setKittyTitle] = useState('')
    const [kittyDesc, setKittyDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(kittyURL, kittyTitle, kittyDesc)
        // setKittyCards((prevArray) => [...prevArray,{kittyURL, kittyTitle, kittyDesc}])
        kittyContext.addKittyCard(kittyURL, kittyTitle, kittyDesc)
        setKittyURL('')
        setKittyDesc('')
        setKittyTitle('')
    }
    return(
        
            <form onSubmit={handleSubmit}>
                    <h3>Add the url of your favorite online kitty pix, a name, and a short explanation of why it appeals.</h3>
                    <label>
                        Picture link as URL
                    <input
                    name="kittyURL"
                    type="url" 
                    value={kittyURL}
                    onChange={(e)=> setKittyURL(e.target.value)} 
                    placeholder="https://photo.png" />
                    </label>
                    <label>
                        Picture Title
                    <input
                    name="kittyTitle"
                    type="text"  
                    value={kittyTitle} 
                    onChange={(e)=> setKittyTitle(e.target.value)} 
                    placeholder="Heading" />
                    </label>
                    <label>
                        A short description
                    <textarea
                    name="kittyDesc"
                    type="text"  
                    value={kittyDesc } 
                    onChange={(e)=>setKittyDesc(e.target.value)} 
                    placeholder="Explain why the picture appeals to you." />
                    </label>
                <button value="submit" >Submit</button>
            </form>
       
    )
}

export default Form