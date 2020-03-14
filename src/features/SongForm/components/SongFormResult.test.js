import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SongFormResult from './SongFormResult';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a song', () => {
  act(() => {
    render(<SongFormResult hasSong={false} />, container);
  });
  expect(container.textContent).toBe('No songs matching your criteria');

  act(() => {
    render(
      <SongFormResult hasSong author='Test author' name='Test song' />,
      container
    );
  });
  expect(container.textContent).toBe('Your song is: Test song by Test author');
});
