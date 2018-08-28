import React from 'react';
import ReactDOM from 'react-dom';
import TestComp from './TestComp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestComp />, div);
});