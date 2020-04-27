import MusicJinnAPIConnector from '../../integrations/MusicJinnAPIConnector';

class SongsQuery {
  endpoint = 'songs';
  constructor(query, genres, moods, resultsPerPage, page) {
    this.query = query;
    this.genres = genres;
    this.moods = moods;
    this.resultsPerPage = resultsPerPage;
    this.page = page;
  }

  getQueryString() {
    const userQueryString = this.query ? `&query=${this.query}` : '';

    let genresString = this.genres?.map((element) => `genres=${element?.value}`).join('&') || '';
    if (genresString) genresString = `&${genresString}`;

    let moodsString = this.genres?.map((element) => `moods=${element?.value}`).join('&') || '';
    if (moodsString) moodsString = `&${moodsString}`;

    // eslint-disable-next-line max-len
    return `${this.endpoint}?page=${this.page}&resultsPerPage=${this.resultsPerPage}${userQueryString}${genresString}${moodsString}`;
  }

  execute() {
    return MusicJinnAPIConnector.get(this.getQueryString());
  }
}

export default SongsQuery;
