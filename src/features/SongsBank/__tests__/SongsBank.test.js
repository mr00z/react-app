import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import SongsBank from '../components/SongsBank';

const mockResponse = {
  pagesCount: 2,
  songs: [
    { title: 'Test_Song_1', author: 'Test_Author_1', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_2', author: 'Test_Author_2', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_3', author: 'Test_Author_3', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_4', author: 'Test_Author_4', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_5', author: 'Test_Author_5', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_6', author: 'Test_Author_6', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_7', author: 'Test_Author_7', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_8', author: 'Test_Author_8', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_9', author: 'Test_Author_9', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_10', author: 'Test_Author_10', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_11', author: 'Test_Author_11', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_12', author: 'Test_Author_12', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
    { title: 'Test_Song_13', author: 'Test_Author_13', genres: ['Jazz'], moods: ['Ambitious', 'Sophisticated'] },
  ],
};

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );
});

afterEach(() => {
  cleanup();
});

it('should render song boxes', async () => {
  const { findByText } = render(<SongsBank />);

  const box = await findByText('Test_Song_1');

  expect(box).toBeDefined();
});

it('should render pagination', async () => {
  const { findByText } = render(<SongsBank />);

  const page2 = await findByText('2');

  expect(page2).toBeDefined();

  act(() => {
    fireEvent.click(page2);
  });

  expect(await findByText('Test_Song_13')).toBeDefined();
});

it('should display search results and reset them', async () => {
  const { findByText, getByPlaceholderText, getByText, queryByText } = render(<SongsBank />);

  const input = getByPlaceholderText('Search for a song or an artist');

  global.fetch = jest
    .fn()
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            pagesCount: 1,
            songs: [{ title: 'My super song', author: 'My super author', genres: ['Blues'], moods: ['Happy'] }],
          }),
      })
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

  fireEvent.input(input, { target: { value: 'My super song' } });

  const searchButton = getByText('Search');

  act(() => {
    fireEvent.click(searchButton);
  });

  expect(await findByText('My super song')).toBeDefined();

  const resetButton = await findByText('Reset');

  act(() => {
    fireEvent.click(resetButton);
  });

  expect(await findByText('Test_Song_1')).toBeDefined();
  expect(queryByText('Reset')).toBeNull();
});
