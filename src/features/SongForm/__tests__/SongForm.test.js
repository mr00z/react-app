import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SongForm from '../components/SongForm';

it('should render all moods available', async () => {
  const allMoods = ['Test_Mood1', 'Test_Mood2', 'Test_Mood3'];

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(allMoods)
    })
  );

  const { findByRole } = render(<SongForm />);

  const dropdownNode = await findByRole('combobox');

  const dropdownOptions = Array.apply(null, dropdownNode.options).map(
    option => option.text
  );

  expect(dropdownOptions).toContain('Test_Mood1');
  expect(dropdownOptions).toContain('Test_Mood2');
  expect(dropdownOptions).toContain('Test_Mood3');

  global.fetch.mockReset();
});

it('should render a result', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([])
    })
  );

  const { getByText, findByTestId } = render(<SongForm />);

  fireEvent.click(getByText('Give me the song!'));

  expect(await findByTestId('song-form-result')).toBeDefined();

  global.fetch.mockReset();
});
