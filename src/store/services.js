import MockData from '../data/movies.json';

export default class MovieStoreService {

  _apiBase = 'http://localhost:4000';
  _newMovieID = 1000;

  getMOCKMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          const res = MockData;
          resolve(res.map(this._transformMovie));
        }
      }, 700);
    });
  }

  async getResource(url, sorter, filter, searchVal) {

    let search = searchVal ? `&searchBy=title&search=${searchVal}` : "";
    const res = await fetch(`${this._apiBase}${url}?sortBy=${sorter}&sortOrder=desc&filter=${filter}${search}`);


    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllMovies(sorter, filter, searchVal) {
    const res = await this.getResource(`/movies`, sorter, filter, searchVal);
    return res.data.map(this._transformMovie);
  }

  async getMovie(id) {
    const movie = await this.getResource(`/movies/${id}/`);
    return this._transformMovie(movie);
  }

  async searchMovie(searchVal) {
    const params = {
      search: searchVal,
      searchBy: "title"
    };
    const movie = await fetch(`${this._apiBase}/movies?` + new URLSearchParams(params));
    let res = await movie.json();
    return res.data.map(this._transformMovie);
  }

  async deleteMovie(id) {
    return await fetch(`${this._apiBase}/movies/${id}?`, {
      method: 'DELETE',
    })
  }

  async saveMovie(movieData, isNewMovie) {
    const formatedData = isNewMovie ? this._transformNewMovie(movieData) : this._transformMovie(movieData);
    return await fetch("http://localhost:4000/movies", {
      method: isNewMovie ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formatedData)
    })
  }

  _transformMovie(movie) {
    return {
      "id": movie.id,
      "title": movie.title,
      "tagline": movie.tagline || " ",
      "vote_average": movie.vote_average || 0,
      "vote_count": movie.vote_count || 0,
      "release_date": movie.release_date || "",
      "poster_path": movie.poster_path,
      "overview": movie.overview || "",
      "budget": movie.budget || 0,
      "revenue": movie.revenue || 0,
      "genres": Array.isArray(movie.genres) ? movie.genres : movie.genres.split(''),
      "runtime": +movie.runtime || 0
    }
  }

  _transformNewMovie(movie) {
    return {
      "title": movie.title,
      "tagline": movie.tagline || " ",
      "vote_average": movie.vote_average || 0,
      "vote_count": movie.vote_count || 0,
      "release_date": movie.release_date || "",
      "poster_path": movie.poster_path,
      "overview": movie.overview || "",
      "budget": movie.budget || 0,
      "revenue": movie.revenue || 0,
      "genres": Array.isArray(movie.genres) ? movie.genres : movie.genres.split(''),
      "runtime": +movie.runtime || 0
    }
  }
}