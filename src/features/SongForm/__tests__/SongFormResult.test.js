import React from 'react';
import { render } from '@testing-library/react';
import SongFormResult from '../components/SongFormResult';

it('should render without a song', () => {
  const { getByTestId } = render(<SongFormResult author='' name='' />);
  expect(getByTestId('song-form-result').textContent).toBe(
    'No songs matching your criteria'
  );
});

it('should render with a song', () => {
  const { getByTestId } = render(
    <SongFormResult author='Test author' name='Test song' />
  );
  expect(getByTestId('song-form-result').textContent).toBe(
    'Your song is: Test song by Test author'
  );
});
