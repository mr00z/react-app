const MUSIC_PREFERENCES_KEY = 'musicPreferences';

export function getMusicPreferences() {
  return JSON.parse(localStorage.getItem(MUSIC_PREFERENCES_KEY));
}

export function setMusicPreferences(musicPreferences) {
  localStorage.setItem(MUSIC_PREFERENCES_KEY, JSON.stringify(musicPreferences));
}
