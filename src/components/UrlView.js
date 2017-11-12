import React from 'react';
import PropTypes from 'prop-types';

import UrlInput from './UrlInput';
import UrlTable from './UrlTable';

class UrlView extends React.Component {

  render() {
    return (
      <div className="url-view">
        <UrlInput addUrl={this.props.addUrl} />
        <UrlTable urls={this.props.urls} {...this.props} />
      </div>
    );
  }
}

UrlView.propTypes = {
  addUrl: PropTypes.func.isRequired,
  urls: PropTypes.object.isRequired
};

export default UrlView;
