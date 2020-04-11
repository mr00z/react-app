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

  const indicator = getByText('Select your current mood...');
  fireEvent.mouseDown(indicator.parentNode);

  await waitFor(() => getByText(allMoods[0]));

  const options = getByText(allMoods[0]).parentNode;

  expect(options.childElementCount).toEqual(allMoods.length);

  fireEvent.click(options.firstChild);

  fireEvent.click(getByText('Give me the song!'));

  expect(await findByTestId('song-form-result')).toBeDefined();
});
