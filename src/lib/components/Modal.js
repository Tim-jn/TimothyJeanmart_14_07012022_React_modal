import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import './styles/Modal.css'

/**
 * @param {*} props
 * @returns {HTMLElement}
 */
export default function Modal(props) {

// Set the display of the modal 
  const [toggle, setToggle] = useState(true)

// Pass a function as props to close the modal in the main component
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

Modal.propTypes = {
  text: PropTypes.string,
  handleResponse: PropTypes.func
}