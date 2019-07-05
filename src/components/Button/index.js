import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ name, onClickFunc }) => {

  return (
    <>
      <button className="button" onClick={onClickFunc}>{name}</button>
    </>
  )
}

Button.propTypes = {
  // Name of the button
  name: PropTypes.string.isRequired,
  // Function that is triggered when the button is clicked
  onClickFunc: PropTypes.func.isRequired
}

export default Button
