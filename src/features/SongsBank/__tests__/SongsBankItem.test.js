import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SongsBankItem from '../components/SongsBankItem';

const mockSong = {
  title: 'Test title',
  author: 'Test author',
  moods: ['Happy'],
  genres: ['Blues'],
  servicesData: {
    youtube: {},
    lastfm: {
      responseData: {
        track: {
          duration: '123424',
          album: {
            title: 'test album',
            image: [
              {},
              {
                '#text': 'wrong link',
              },
              {
                '#text': 'wrong link',
              },
            ],
          },
        },
      },
      updatedAt: new Date(),
    },
  },
};

it('should render correctly', () => {
  const { queryByText, queryByAltText } = render(<SongsBankItem song={mockSong} />);

  expect(queryByText(mockSong.title)).toBeDefined();
  expect(queryByText(mockSong.author)).toBeDefined();
  expect(queryByAltText('Album cover')).toBeDefined();
});

it('should render details', () => {
  const { getByTestId, queryByText } = render(<SongsBankItem song={mockSong} />);

  const item = getByTestId('songs-bank-item');

  fireEvent.click(item);

  const albumTitle = mockSong.servicesData.lastfm.responseData.track.album.title;

  expect(queryByText(albumTitle, { exact: false })).toBeDefined();

  const closeButton = getByTestId('songs-bank-item-details-close');

  fireEvent.click(closeButton);

  expect(queryByText(albumTitle, { exact: false })).toBeNull();
});
