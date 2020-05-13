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
  const { getByText, getByAltText } = render(<SongsBankItem song={mockSong} />);

  expect(getByText(mockSong.title)).toBeDefined();
  expect(getByText(mockSong.author)).toBeDefined();
  expect(getByAltText('Album cover')).toBeDefined();
});

it('should render details', () => {
  const { getByText } = render(<SongsBankItem song={mockSong} />);

  const item = getByText(mockSong.title);

  fireEvent.click(item);

  expect(getByText(mockSong.servicesData.lastfm.responseData.track.album.title, { exact: false })).toBeDefined();
});
