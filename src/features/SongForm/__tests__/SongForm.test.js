import React from 'react';
import { render, fireEvent, waitFor, act, cleanup } from '@testing-library/react';
import SongForm from '../components/SongForm';
import { setMusicPreferences } from '../../MusicPreferences/localStorageUtils';

const allMoods = ['Test_Mood1', 'Test_Mood2', 'Test_Mood3'];

const musicPreferencesMock = {
  genres: [{ label: 'Blues', value: 'Blues' }],
  moods: [{ label: 'Happy', value: 'Happy' }],
};

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(allMoods),
    })
  );
});

afterEach(() => {
  localStorage.clear();
  cleanup();
});

it('renders switch button when music preferences are defined', async () => {
  setMusicPreferences(musicPreferencesMock);

  await act(async () => {
    const { findByLabelText } = render(<SongForm />);

    expect(await findByLabelText('Use music preferences')).toBeDefined();
  });
});

it('assigns random mood when switch is turned on', async () => {
  setMusicPreferences(musicPreferencesMock);

  const { getByLabelText, getByText } = render(<SongForm />);

  await act(async () => {
    fireEvent.click(await getByLabelText('Use music preferences'));
  });

  expect(getByText(musicPreferencesMock.moods[0].label)).toBeDefined();
});

it('displays list of moods and gives a result', async () => {
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
