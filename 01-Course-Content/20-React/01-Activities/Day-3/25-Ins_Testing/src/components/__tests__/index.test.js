import React from 'react';
// Here are our required imports for testing
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Welcome from '../Welcome';

// We declare an empty container that will be the target for all our components during testing
let container = null;

// We want to render our React tree to a DOM element that is attached so that we can watch events
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

// It blocks describe the area of the application that we are testing
it('renders with or without a name or topic', () => {
  // Act relates the act, arrange, assert pattern in testing
  // This first test renders a Welcome component with no props
  act(() => {
    render(<Welcome />, container);
  });
  expect(container.textContent).toBe('Hey there!');

  // Here we are testing a Welcome component with a name and topic prop passed
  act(() => {
    render(<Welcome name="Xander" topic="React" />, container);
  });
  expect(container.textContent).toBe(
    'Welcome, Xander! We hope you learn a lot about React.'
  );

  // Redundant test for a name and topic
  act(() => {
    render(<Welcome name="Tammer" topic="Mocks" />, container);
  });
  expect(container.textContent).toBe(
    'Welcome, Tammer! We hope you learn a lot about Mocks.'
  );

  // Tests the Welcome component where only a name prop is passed.
  // This will ensure that our fallback value was used
  act(() => {
    render(<Welcome name="Grace" />, container);
  });
  expect(container.textContent).toBe(
    'Welcome, Grace! We hope you learn a lot about Web Development.'
  );
});
