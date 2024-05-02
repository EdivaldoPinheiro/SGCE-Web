import React from 'react'
import './styles.css'
export default function Menu(props) {

  
    return (
        <>
        <input type={props.type} placeholder={props.placeholder} value={props.value} className='input' style={props.style} onChange={props.onChange}/>
        </>
    )

}