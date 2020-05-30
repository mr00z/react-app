class MusicJinnAPIConnector {
  static endpoint = process.env.MUSIC_JINN_API_URL;

  static get(requestUrl) {
    return fetch(`${this.endpoint}/${requestUrl}`, {
      headers: {
        'X-Api-Key': process.env.MUSIC_JINN_API_KEY,
      },
    })
      .then((response) => {
        if (response.status === 204) return null;

        return response.json();
      })
      .catch((error) => {
        return {
          error,
        };
      });
  }
}

export default MusicJinnAPIConnector;
