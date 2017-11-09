import React from 'react';
import PropTypes from 'prop-types';

import { fetchUrlList } from '../api.js';

import UrlInput from './UrlInput.js';
import UrlTable from './UrlTable.js';

class UrlView extends React.Component {

  render() {
    return (
      <div className="url-view">
        <UrlInput shortenUrl={this.props.shortenUrl} />
        <UrlTable urls={this.props.urls} />
      </div>
    );
  }
}

export default UrlView;
