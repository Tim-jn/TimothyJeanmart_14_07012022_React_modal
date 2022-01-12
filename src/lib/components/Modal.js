import React from 'react'
import { useState } from 'react'
import './styles/Modal.css'

export default function Modal(props) {
    const [toggle, setToggle] = useState(true)

    console.log(toggle);

    return (
        <div>
            {toggle ? 
            <div className='modal-bg'>
                <div className='modal'>
                    {props.text}
                    <div className="modalButton" onClick={() => setToggle(false)}>Close</div>
                </div> 
            </div>: ''}
        </div>
    )
}
