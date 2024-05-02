import React from 'react';
import './styles.css';

export default function Button(props) {

    return (
        <div>
            <button className='button btn' type={props.type} onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )

}