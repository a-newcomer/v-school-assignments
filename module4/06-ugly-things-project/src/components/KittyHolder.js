import React from 'react'
import KittyCard from './kittyCard';

function KittyHolder(props){
    return(
        <div className="kittyHolder" >
            <KittyCard  kittyTitle="Kitty Pic Title" kittyURL="http://placekitten.com/600/600" kittyDesc="Furry." />
            
            <KittyCard  kittyTitle="Kitty Pic 2 Title" kittyURL="https://images.unsplash.com/photo-1559564207-09c99dc78a70" kittyDesc="Even furrier." />

            <KittyCard  kittyTitle="Kitty Pic 3 Title" kittyURL="http://placekitten.com/300/300" kittyDesc="furry." />
            <KittyCard  kittyTitle="Kitty Pic 4 Title" kittyURL="http://placekitten.com/200/200" kittyDesc="Ahh so furry." />
            {/* {map the array of kitty cards here} */}
        </div>
    )
}

export default KittyHolder