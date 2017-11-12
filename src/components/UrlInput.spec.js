import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import UrlInput from './UrlInput';

describe('UrlInput Component', () => {

  it('returns a form with an input and a submit button', () => {
    const wrapper = shallow(<UrlInput />);
    expect(wrapper.find('form')).to.be.ok;
    expect(wrapper.find('input')).to.be.ok;
    expect(wrapper.find('[type="submit"]')).to.be.ok;
  });

});
