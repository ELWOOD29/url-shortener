import React from 'react';
import PropTypes from 'prop-types';

import { postUrl } from '../api.js';

class UrlInput extends React.Component {

  onSubmit (event) {
    event.preventDefault();
    console.log("Form submitted");
    const longUrl = this.refs.longUrl.value;
    const respUrl = postUrl(longUrl);
    this.props.shortenUrl(respUrl);
    this.refs.longUrl.reset();
  }

  render () {
    return(
      <div className="url-input">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="longUrl" placeholder="Enter URL here..."/>
          <button type="submit">
            Shorten
          </button>
        </form>
      </div>
    );
  }
}

export default UrlInput;
