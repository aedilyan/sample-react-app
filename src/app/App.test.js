import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import App from './App'

describe('<App />', () => {
    test('renders a single <p> tag', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('p')).toHaveLength(1);
    });
})
