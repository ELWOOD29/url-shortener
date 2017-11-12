import React from 'react';
import PropTypes from 'prop-types';

class UrlTable extends React.Component {

  renderTableRow(url) {
    return (
      <tr key={url.id}>
        <td><a href={url.shortUrl}>{url.shortUrl}</a></td>
        <td>{url.longUrl}</td>
      </tr>
    );
  }

  render() {
    // convert urls to an array
    const urls = Object.keys(this.props.urls).map(id => this.props.urls[id]);
    return (
      <div className="url-table">
        <table className="table table-striped">
          <thead>
            <tr className="table-head">
              <th>Short Url</th>
              <th>Redirects to...</th>
            </tr>
          </thead>
          <tbody>
            {urls.map(this.renderTableRow)}
          </tbody>
        </table>
      </div>
    );
  }
}

UrlTable.propTypes = {
  urls: PropTypes.object.isRequired
};

export default UrlTable;
