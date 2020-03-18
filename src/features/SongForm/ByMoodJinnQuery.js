class ByMoodJinnQuery {
  endpoint = 'jinn/byMood';
  constructor(mood, wantToStay) {
    this.mood = mood;
    this.wantToStay = wantToStay;
  }

  getQueryString() {
    const moodString = this.mood || '';
    const wantToStayString = this.wantToStay || false;

    return `${this.endpoint}?mood=${moodString}&wantToStay=${wantToStayString}`;
  }
}

export default ByMoodJinnQuery;
