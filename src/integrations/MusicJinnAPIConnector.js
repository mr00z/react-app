class MusicJinnAPIConnector {
  static endpoint = process.env.MUSIC_JINN_API_URL;

  static get(requestUrl) {
    return fetch(`${this.endpoint}/${requestUrl}`, {
      headers: {
        'X-Api-Key': process.env.MUSIC_JINN_API_KEY,
        'Access-Control-Allow-Origin': process.env.MUSIC_JINN_URL,
      },
    }).then((response) => {
      if (response.status === 204) return null;

      return response.json();
    });
  }
}

export default MusicJinnAPIConnector;
