import { Store } from "../core/heropy";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'jihoseo2006 / Seo Ji Ho',
  email: 'jihoseo2006@gmail.com',
  blog: 'https://www.instagram.com/jiho._.seo',
  github: 'https://github.com/jihoseo2006',
  repository: 'https://github.com/jihoseo2006/vanillajs-movie-app'
})