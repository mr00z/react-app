import React from 'react';
import { render, act, fireEvent, cleanup } from '@testing-library/react';
import { setMusicPreferences, getMusicPreferences } from '../localStorageUtils';
import MusicPreferences from '../components/MusicPreferences';

const musicPreferencesMock = {
  genres: [
    { label: 'Blues', value: 'Blues' },
    { label: 'Pop/Rock', value: 'Pop/Rock' },
  ],
  moods: [
    { label: 'Happy', value: 'Happy' },
    { label: 'Angry', value: 'Angry' },
    { label: 'Ambitious', value: 'Ambitious' },
  ],
};

beforeAll(() => {
  setMusicPreferences(musicPreferencesMock);
});

afterAll(() => {
  localStorage.clear();
});

beforeEach(() => {
  global.fetch = jest
    .fn()
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(['Jazz']),
      })
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(['Acerbic']),
      })
    );
});

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

it('reads preferences from localStorage', async () => {
  const musicPreferences = getMusicPreferences();

  await act(async () => {
    const { findByText } = render(<MusicPreferences />);
    expect(await findByText(musicPreferences.genres[0].label)).toBeDefined();
    expect(await findByText(musicPreferences.moods[0].label)).toBeDefined();
  });
});

it('saves changes to preferences to the localStorage', async () => {
  const musicPreferences = getMusicPreferences();

  await act(async () => {
    const { findByText } = render(<MusicPreferences />);
    const label = await findByText(musicPreferences.genres[0].label);

    expect(label).toBeDefined();

    fireEvent.mouseDown(label);

    await act(async () => {
      fireEvent.click(await findByText('Jazz'));
    });

    fireEvent.click(await findByText('Save'));

    const newMusicPreferences = getMusicPreferences();

    expect(newMusicPreferences.genres.length).toEqual(musicPreferences.genres.length + 1);
  });
});

it('displays message after saving preferences', async () => {
  await act(async () => {
    const { findByText } = render(<MusicPreferences />);
    fireEvent.click(await findByText('Save'));

    expect(await findByText('Your preferences have been successfully saved')).toBeDefined();
  });
});
