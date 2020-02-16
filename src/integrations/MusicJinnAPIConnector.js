class MusicJinnAPIConnector {
  static endpoint = process.env.MUSIC_JINN_API_URL;

  static get(requestUrl) {
    return fetch(`${this.endpoint}/${requestUrl}`).then(value => {
      return value.json();
    });
  }
}

export default MusicJinnAPIConnector;
