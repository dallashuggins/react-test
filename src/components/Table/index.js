import React from 'react';
import PropTypes from 'prop-types';
import css from './Table.scss';

const Table = ({ items, columns }) => {

  return (
    <div className={css.container}>
      <table className={css.wrapper}>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={'th' + col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {items.map(item => (
              <tr>
                {columns.map(col =>
                  <td>{item[col.key]}</td>
                )}
              </tr>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  // Data for table - the keys need to match up with the corresponding key in the columns array
  items: PropTypes.arrayOf(PropTypes.object),
  // Column headers
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  }))
}

export default Table
