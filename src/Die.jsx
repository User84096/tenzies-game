import { useState } from 'react'

export default function Die(props){
    return (
        <div className='dieFace'>
            <h2>{props.value}</h2>
        </div>
    )
}