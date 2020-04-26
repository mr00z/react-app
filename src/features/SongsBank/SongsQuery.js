import MusicJinnAPIConnector from '../../integrations/MusicJinnAPIConnector';

class SongsQuery {
  endpoint = 'songs';
  constructor(title, author, genres, moods, resultsPerPage, page) {
    this.title = title;
    this.author = author;
    this.genres = genres;
    this.moods = moods;
    this.resultsPerPage = resultsPerPage;
    this.page = page;
  }

  getQueryString() {
    const titleString = this.title ? `&title=${this.title}` : '';
    const authorString = this.author ? `&author=${this.author}` : '';

    let genresString = this.genres?.map((element) => `genres=${element?.value}`).join('&') || '';
    if (genresString) genresString = `&${genresString}`;

    let moodsString = this.genres?.map((element) => `moods=${element?.value}`).join('&') || '';
    if (moodsString) moodsString = `&${moodsString}`;

    // eslint-disable-next-line max-len
    return `${this.endpoint}?page=${this.page}&resultsPerPage=${this.resultsPerPage}${titleString}${authorString}${genresString}${moodsString}`;
  }

  execute() {
    return MusicJinnAPIConnector.get(this.getQueryString());
  }
}

export default SongsQuery;
