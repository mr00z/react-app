class MusicJinnAPIConnector {
  static endpoint = process.env.MUSIC_JINN_API_URL;

  static get(requestUrl) {
    return fetch(`${this.endpoint}/${requestUrl}`).then(response => {
      if (response.status === 204) return {};

      return response.json();
    });
  }
}

export default MusicJinnAPIConnector;
