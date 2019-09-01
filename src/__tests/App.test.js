import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { act } from 'react-dom/test-utils';
import App from '../App';
import config from '../config';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  let result = null;
  act(() => {
    renderer.render(<App config={config} />);
    result = renderer.getRenderOutput();
  });
  expect(result).not.toBe(null);
  expect(result.type).toBe('main'); // App has one child element 'main'
});
