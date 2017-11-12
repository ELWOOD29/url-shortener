import React from 'react';
import PropTypes from 'prop-types';

import { postUrl } from '../api';

class UrlInput extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    // take longUrl from the input
    const longUrl = this.refs.longUrl.value;
    // post that Url to the api and add the response to state
    postUrl(longUrl).then((respUrl) => {
      this.props.addUrl(respUrl);
    });
    this.refs.inputForm.reset();
  }

  render() {
    return (
      <div className="url-input">
        <form ref="inputForm" onSubmit={this.onSubmit.bind(this)} >
          <div className="container">
            <input ref="longUrl" placeholder="Enter URL here..." />
            <button className="btn btn-primary" type="submit">
              Shorten
            </button>
          </div>
        </form>
      </div>
    );
  }
}

UrlInput.propTypes = {
  addUrl: PropTypes.func.isRequired
};

export default UrlInput;
