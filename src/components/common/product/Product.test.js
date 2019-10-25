import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Product from './Product';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render and update a Product', () => {
    // Test first render and effect
    act(() => {
        ReactDOM.render(<Product productId={2} />, container);
    });
    const label = container.querySelector('div');
    expect(label.textContent).toBe('Current productId: 2');

});