import React from 'react'

function KittyCard(props) {
    return(
        <section className='kittyCard'>
                <h2>{props.kittyTitle}</h2>
                <img src={props.kittyURL} alt={props.kittyDesc}/>
                <p>{props.kittyDesc}</p>
        </section>
    )
}

export default KittyCard