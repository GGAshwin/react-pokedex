import React from "react"
export default function Card(props){
    return(
        <>
        <p>{props.data}</p>
        {props.index && <p>#{props.index}</p>}
        {props.pokeImg && <img src={props.pokeImg} alt={props.name} />}
        </>
    )
}