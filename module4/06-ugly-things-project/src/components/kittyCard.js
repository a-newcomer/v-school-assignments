import React from 'react'

function KittyCard(props) {
    console.log("kittycard props: ", props)
    return(
        <section className='kittyCard'>
                <h2>{props.kittyTitle}</h2>
                <img src={props.kittyURL} alt={props.kittyDesc}/>
                <p>{props.kittyDesc}</p>
        </section>
    )
}

export default KittyCard