import React from 'react'
import { useState } from 'react'
import './styles/Modal.css'

export default function Modal(props) {
    const [toggle, setToggle] = useState(false)

    function openModal(e) {
        e.preventDefault()
        setToggle(current => !current)
    }

    return (
        <div>
            {toggle ? 
            <div className='modal-bg'>
                <div className='modal'>
                    {props.text}
                    <div className="modalButton" onClick={openModal}>Close</div>
                </div> 
            </div>: ''}
        </div>
    )
}
