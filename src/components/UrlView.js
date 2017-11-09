import React from 'react';
import PropTypes from 'prop-types';

import { fetchUrlList } from '../api.js';

import UrlInput from './UrlInput.js';
import UrlTable from './UrlTable.js';

class UrlView extends React.Component {

  state = {};

  componentWillMount() {
    // fetchUrlList().then(urls => {
    //   console.log(urls);
    //   this.setState({
    //     urls
    //   });
    // });

   //urls.map(url => this.props.shortenUrl(url));


   const urls = fetchUrlList();
   this.setState({
     urls
   })
  }

  render() {
    return (
      <div className="url-view">
        <UrlInput />
        <UrlTable urls={this.state.urls} />
      </div>
    );
  }
}

export default UrlView;
