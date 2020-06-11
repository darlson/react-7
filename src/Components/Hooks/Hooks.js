import React from 'react'
import '../style.css'
import Counter from './Counter'
import MovieList from './MovieList'
import Pokemon from './Pokemon'

const Hooks = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Hooks
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="__blank"
          rel="noopener"
        >
          Docs
        </a>
      </h1>
      <Counter />
      <MovieList />
      <Pokemon />
    </section>
  )
}
export default Hooks
