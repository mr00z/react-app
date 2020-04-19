class ByMoodJinnQuery {
  endpoint = 'jinn/byMood';
  constructor(mood, wantToStay, genres) {
    this.mood = mood;
    this.wantToStay = wantToStay;
    this.genres = genres;
  }

  getQueryString() {
    const moodString = this.mood || '';
    const wantToStayString = this.wantToStay || true;

    let genresString = this.genres?.map((element) => `genres=${element?.value}`).join('&') || '';

    if (genresString) genresString = `&${genresString}`;

    return `${this.endpoint}?mood=${moodString}&wantToStay=${wantToStayString}${genresString}`;
  }
}

export default ByMoodJinnQuery;
