import { useState } from 'react'

export default function Die(props){

    return (
        <div className='dieFace' style={{backgroundColor: props.held ? '#59E391' : 'white'}} >
            <h2>{props.value}</h2>
        </div>
    )
}