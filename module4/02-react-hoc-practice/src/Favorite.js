//from exercise files by Bob Ziroll
import React, {Component} from "react"
import {withToggle} from './hocs/withToggle'

    
   function Favorite(props){
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={props.toggle}
                    >
                        {props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
   }


export default withToggle(Favorite)