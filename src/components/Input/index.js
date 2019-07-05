import React from 'react';
import PropTypes from 'prop-types';
import css from './Input.scss';

const Input = ({ title, inputValue, onChangeFunc }) => {

  return (
    <>
      <label className={css.wrapper}>
        {title ? <span className={css.title}>{title}</span> : null}
        <input type="text" value={inputValue} onChange={onChangeFunc} className={css.input}/>
      </label>
    </>
  )
}

Input.propTypes = {
  // Title of the field
  title: PropTypes.string,
  // Value for the input field (updates as the user types)
  inputValue: PropTypes.string,
  // onChange function for the input field that updates state when the user types
  onChangeFunc: PropTypes.func
}

export default Input
