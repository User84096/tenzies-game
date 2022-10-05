import { useState } from 'react'

export default function Die(props){

const dieColor = {backgroundColor: props.held ? '#59E391' : 'white'}

    return (
        <div 
        className='dieFace' 
        style={dieColor} 
        onClick={props.hold}
        >
            <h2>{props.value}</h2>
        </div>
    )
}