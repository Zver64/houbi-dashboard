import React from 'react'
import styled from 'styled-components'
function App({ className }: { className?: string }) {
  return (
    <div className={className}>
      <header>
        <nav>
          <ul>
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
            <li>link4</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>This is the header of the future</h1>
      </main>
    </div>
  )
}

export default styled(App)`
  width: 1200px;
  max-width: 100%;
  header {
    padding: 0.5em 0;
  }
  nav {
    ul {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      li {
        padding: 1em;
        border: 1px solid var(--rgb-color2);
      }
    }
  }
  main {
    border: 1px solid var(--rgb-color2);
  }
  h1 {
    text-align: center;
  }
`
