import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import SearchBar from '../SearchBar';

let container = null;

beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('SearchBar', () => {
  // In this example, we render the SearchBar component and format the rendered HTML using the pretty package before saving it as a snapshot
  it('should render and match snapshot', () => {
    act(() => {
      // Render the component
      render(<SearchBar />, container);
    });

    // Format the rendered output
    const html = pretty(container.innerHTML);

    // Verify the output
    expect(html).toMatchSnapshot();
  });
});
