import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Image from './Image';

let container, testSrc = 'https://www.benivo.com/hubfs/Benivo-Apr2017/Images/favicon-72.png';

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render and update a Input', () => {
    // Test first render and effect
    act(() => {
        ReactDOM.render(<Image src={testSrc} />, container);
    });
    const inputNode = container.querySelector('img');
    expect(inputNode.src).toBe(testSrc);
});
