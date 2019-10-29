import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Input from './Input';

let container;

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
        ReactDOM.render(<Input />, container);
    });
    const inputNode = container.querySelector('input');
    expect(inputNode.type).toBe('text');
});