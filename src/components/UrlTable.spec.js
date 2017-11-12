import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import UrlTable from './UrlTable';

describe('UrlTable Component', () => {

  it('returns a table with one row per url in state', () => {
    const urls = {
      3214234: {
        id: 3214234,
        longUrl: "mysite.com",
        shortUrl: "http://localhost:9999/api/3214234"
      },
      837485: {
        id: 837485,
        longUrl: "yoursite.com",
        shortUrl: "http://localhost:9999/api/837485"
      },
      493850: {
        id: 493850,
        longUrl: "theirsite.com",
        shortUrl: "http://localhost:9999/api/493850"
      }
    };

    const wrapper = shallow(<UrlTable urls={urls}/>);
    expect(wrapper.find('tbody tr')).to.have.length(3);

  });

  it('returns a table with no rows if state is empty', () => {
    const urls = {};
    const wrapper = shallow(<UrlTable urls={urls}/>);
    expect(wrapper.find('tbody tr')).to.have.length(0);
  });

  it('each row has a link to a shortUrl and displays the longUrl it points to', () => {
    const urls = {
      3214234: {
        id: 3214234,
        longUrl: "mysite.com",
        shortUrl: "http://localhost:9999/api/3214234"
      }
    };
    const wrapper = shallow(<UrlTable urls={urls} />);
    expect(wrapper.find('a').text()).to.equal(urls[3214234].shortUrl);
    expect(wrapper.find('.entry-long-url').text()).to.equal(urls[3214234].longUrl);

  })

});
