import React from 'react';
import { render } from '@testing-library/react';
import SongFormResult from '../components/SongFormResult';

const mockSong = {
  title: 'Test song',
  author: 'Test author',
  moods: ['Happy'],
  genres: ['Pop/Rock'],
  servicesData: {
    youtube: {},
  },
};

it('should render without a song', () => {
  const { getByTestId } = render(<SongFormResult song={null} />);
  expect(getByTestId('song-form-result').textContent).toBe('No songs matching your criteria');
});

it('should render with a song', () => {
  const { getByTestId } = render(<SongFormResult song={mockSong} />);
  expect(getByTestId('song-form-result').textContent).toBe('Your song is: Test song by Test author');
});
