import { Component } from '../core/heropy'
import movieStore, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button'
    })
    //여기 버튼 이상함, 리드미 보면 이거 문제인거 같은데 강의 따라 쳐보다가 수정해보든지 아니면 내 문제인거지..
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state
      if(pageMax > page) {
        this.el.classList.remove('hide')
      } else {
        this.el.classList.add('hide')
      }
    })
  }
  render() {
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more..'

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide')
      await searchMovies(movieStore.state.page + 1)
    })
  }
}