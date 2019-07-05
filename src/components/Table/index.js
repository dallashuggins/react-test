import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ items, columns }) => {

  return (
    <div className="container">
      <table className="wrapper">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={'th' + col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={'tr' + i}>
              {columns.map(col =>
                <td key={'td' + col.key}>{item[col.key]}</td>
              )}
            </tr>
          ))}
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
