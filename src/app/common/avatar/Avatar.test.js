import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Avatar from './Avatar'

describe('<Avatar />', () => {
    test('renders a single <p> tag', () => {
        const wrapper = shallow(<Avatar />);
        expect(wrapper.find('img')).toHaveLength(1);
    });
})
