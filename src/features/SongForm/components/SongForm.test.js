import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SongForm from './SongForm';

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

it('should render all moods available', async () => {
  const allMoods = ['Test_Mood1', 'Test_Mood2', 'Test_Mood3'];

  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(allMoods)
    })
  );

  await act(async () => {
    render(<SongForm />, container);
  });

  const dropdownOptions = Array.apply(
    null,
    container.querySelector('select').options
  ).map(option => option.text);

  expect(dropdownOptions).toContain('Test_Mood1');
  expect(dropdownOptions).toContain('Test_Mood2');
  expect(dropdownOptions).toContain('Test_Mood3');

  global.fetch.mockReset();
});
