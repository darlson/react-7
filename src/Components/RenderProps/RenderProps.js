import React from 'react'
import '../style.css'
import Toggle from './Toggle'
import ToggleRenderProps from './ToggleRenderProps'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <div>
          I got an A on my origami assignment when I turned my paper into my teacher
        </div>
      </Toggle>
      <Toggle darkMode >
        <div>
          I got an A on my transfiguration assignment when I turned my teacher into my paper
        </div>
      </Toggle>
      <ToggleRenderProps 
        render={({isOpen, setIsOpen}) => (
          <div>
            {isOpen && "Let's go to space"}
            <button onClick={() => setIsOpen(!isOpen)}>Show/Hide</button>
          </div>
        )}
      />
    </section>
  )
}
export default RenderProps
