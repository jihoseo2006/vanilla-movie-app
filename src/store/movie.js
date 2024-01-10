import { Store } from '../core/heropy'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!'
})

export default store
export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  //강사님 개인 api 키임으로 배포시에는 개인거로 바꿔야함

  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page
      })
    })
    const { Search, totalResults, Response, Error } = await res.json()
    if (Response === "True") {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
      store.state.pageMax = 1
    }
  } catch (error) {
    console.log('searchMovies error: ', error)
  }
  finally {
    store.state.loading = false
  }

}

export const getMovieDetails = async id => {
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        id
      })
    })
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}