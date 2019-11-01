import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

describe('test Heading component', () => {
    it('renders without crashing', () => {
        shallow(<Heading />);
    });
});