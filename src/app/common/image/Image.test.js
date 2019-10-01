import React from 'react'
import renderer from 'react-test-renderer'
import Image from './Image'

test('Image renders correctly', () => {
    const tree = renderer.create(
        <Image />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

// describe('<Avatar />', () => {
//     test('renders a single <p> tag', () => {
//         const wrapper = shallow(<Avatar />);
//         expect(wrapper.find('img')).toHaveLength(1);
//     });
// })
