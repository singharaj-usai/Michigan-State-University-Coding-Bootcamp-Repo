import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import IssueList from '../IssueList';

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

const issues = [
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  },
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/127',
    html_url: 'https://github.com/microsoft/vscode/issues/127',
    id: 117711073,
    node_id: 'MDU6SXNzdWUxMTc3MTEwNzM=',
    number: 127,
    title: 'Provide option to opt out of line ending normalisation for files',
  },
];

describe('IssueList', () => {
  // In this example, we render the IssueList component and format the rendered HTML with the pretty package before saving it as an snapshot.
  it('should render', () => {
    // Render the component inside the target container
    act(() => {
      render(<IssueList issues={issues} />, container);
    });

    // Format the rendered HTML with the pretty package
    const html = pretty(container.innerHTML);

    // Save the rendered HTML as an snapshot
    expect(html).toMatchSnapshot();
  });

  // In this example, we check to see if the issueList contains the text "Git: Support git history in VSCode"
  it('should contain text', () => {
    // Render the component
    act(() => {
      render(<IssueList issues={issues} />, container);
    });

    // Check to see if the rendered HTML contains the text "Git: Support git history in VSCode"
    expect(container.innerHTML).toContain('Git: Support git history in VSCode');
  });
});
