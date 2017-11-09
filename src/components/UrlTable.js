import React from 'react';
import PropTypes from 'prop-types';

const UrlTable = ({urls}) => {
  console.log(urls);
  return (
    <div className="url-table">
      <table>
          <thead>
          <tr className="table-head">
            <th>Short Url</th>
            <th>Redirects to...</th>
          </tr>
        </thead>
        <tbody>
        {urls.map(url => {
          return(
            <tr key={url.short}>
              <td>{url.short}</td>
              <td>{url.long}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  )
}

export default UrlTable;
