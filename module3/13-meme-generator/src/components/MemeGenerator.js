import React from 'react'
import axios from 'axios'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            randomAlt: "random meme from imgflip.com",
            allMemeImages: []
        }
        
    }
    componentDidMount() {
        axios.get('https://api.imgflip.com/get_memes')
        .then(response => {
            //capture the array I want with a variable
            const memeImgs = response.data.data.memes
            return(this.setState({
                allMemeImages: memeImgs
            }))
        })
        .catch(error => console.log(error))
    }
    handleSubmit = (e) =>{
       // when the from button is pressed, get a random image from the meme list
       let memeIndex = Math.floor(Math.random() * this.state.allMemeImages.length)
        this.setState({
            randomImg: this.state.allMemeImages[memeIndex].url,
            randomAlt: this.state.allMemeImages[memeIndex].name
        })
        e.preventDefault()
    }
    handleChange = (e) => {
        //use destructuring to get the name and value properites; i.e which input was filled, and what it was filled with
        let {name, value} = e.target
        //use those little brackets to indicate either name, whichever one was pressed
        this.setState({
            [name]:value
        })
    }
render() {
    return(
        <main className="memeContainer" >
         <form className="meme-form" 
            onSubmit={this.handleSubmit} >
             <input 
             type="text" 
             name="topText" 
             value={this.state.topText} 
             onChange={this.handleChange} 
             placeholder="Top Text" />
             <input 
             type="text" 
             name="bottomText" 
             value={this.state.bottomText} 
             onChange={this.handleChange} 
             placeholder="Bottom Text" />
                  
                    <button type="submit" >Generate</button>
          </form>
          <div className="meme">
              <img src={this.state.randomImg} alt={this.state.randomAlt + " meme from imgflip.com"} />
              <h2 className="top" >{this.state.topText}</h2>
              <h2 className="bottom" >{this.state.bottomText}</h2>
          </div>

        </main>
    )
}
}

export default MemeGenerator