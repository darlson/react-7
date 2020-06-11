import React, {useState} from 'react'
import BadButton from './BadButton'
import GoodButton from './GoodButton'
import Square from './Square'
import '../style.css'

const Hocs = props => {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <section className="advanced-react-section">
      <h1>
        HOCS
        <a
          href="https://reactjs.org/docs/higher-order-components.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <BadButton />
      <BadButton darkMode />
      <Square />
      <Square darkMode isAdmin={isAdmin} />
      <GoodButton darkMode onClick={() => setIsAdmin(!isAdmin)} />
    </section>
  )
}
export default Hocs
