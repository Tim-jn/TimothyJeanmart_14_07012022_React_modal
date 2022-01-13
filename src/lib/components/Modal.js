import React from 'react'
import { useState } from 'react'
import './styles/Modal.css'

export default function Modal(props) {
  const [toggle, setToggle] = useState(true)

  const handleUserClick = () => {
    props.handleResponse()
  }

  return (
    <div>
      {toggle ? (
        <div className="modal-bg">
          <div className="modal">
            {props.text}
            <div
              type="button"
              className="modalButton"
              onClick={() => {
                setToggle(false)
                handleUserClick()
              }}
            >
              Close
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
