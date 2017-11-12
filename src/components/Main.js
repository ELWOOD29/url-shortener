import React from 'react';
import { Link } from 'react-router';

import { fetchUrlList } from '../api';

const Main = React.createClass({

  componentWillMount() {
    // load urls from the database into state
    fetchUrlList().then((data) => {
      const urls = Object.keys(data).map(id => data[id]);
      urls.map(url => this.props.addUrl(url));
    });
  },

  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">
              <Link to="/">URL Shortener</Link>
              <p className="lead">Enter a URL below and generate a unique short URL to share.</p>
            </h1>
          </div>
        </div>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
});

export default Main;
