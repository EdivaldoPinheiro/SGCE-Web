import React from 'react';
import './styles.css';

export default function LegendInput(props){

    return (
      <div className='containerLegendInput'>
        <p className='legend text-gray-800' id={props.id}>{props.legend}</p>
        <input type={props.type} security={props.security} className='inputLogin' placeholder={props.placeholder} onChange={props.onChange} value={props.value} style={props.style} id={props.idInput}/>
      </div>
    )
  
}