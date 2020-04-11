import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SongForm from '../components/SongForm';

it('displays list of moods and gives a result', async () => {
  const allMoods = ['Test_Mood1', 'Test_Mood2', 'Test_Mood3'];

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(allMoods),
    })
  );

  const { getByText, findByTestId } = render(<SongForm />);

  const indicator = document.querySelector('div[class$=indicatorContainer]');
  fireEvent.click(indicator);

  await waitFor(() => document.querySelector('div[class$=MenuList]'));

  const options = document.querySelector('div[class$=MenuList]');

  expect(options.childElementCount).toEqual(allMoods.length);

  fireEvent.click(options.firstChild);

  fireEvent.click(getByText('Give me the song!'));

  expect(await findByTestId('song-form-result')).toBeDefined();
});
