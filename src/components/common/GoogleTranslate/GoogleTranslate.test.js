import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import GoogleTranslate from './GoogleTranslate';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render and update a counter', () => {
    // Test first render and effect
    act(() => {
        ReactDOM.render(<GoogleTranslate />, container);
    });
    const googleTranslateElement = container.querySelector('#google_translate_element_reg');
    setTimeout(() => {
        expect(googleTranslateElement.className).toBe('show');
    })
});