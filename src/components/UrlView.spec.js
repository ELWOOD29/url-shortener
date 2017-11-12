import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import UrlView from './UrlView';

describe('UrlView Component', () => {

  it('renders the UrlView and UrlTable components', () => {
    const wrapper = shallow(<UrlView />);
    expect(wrapper.find('UrlTable')).to.be.ok;
    expect(wrapper.find('UrlView')).to.be.ok;
  });
});
