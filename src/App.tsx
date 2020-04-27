import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
function App({ className }: { className?: string }) {
  return (
    <Router>
      <div className={className}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/link1">link1</Link>
              </li>
              <li>
                <Link to="/link2">link2</Link>
              </li>
              <li>
                <Link to="/link3">link3</Link>
              </li>
              <li>
                <Link to="/link4">link4</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>This is the header of the future</h1>
          <Switch>
            <Route path="/link1">
              <div>This is link 1</div>
            </Route>
            <Route path="/link2">
              <div>This is link 2</div>
            </Route>
            <Route path="/link3">
              <div>This is link 3</div>
            </Route>
            <Route path="/link4">
              <div>This is link 4</div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default styled(App)`
  header {
    padding: 0.5em 0;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
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
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    background-color: var(--rgb-color1);
    padding: 1em;
  }
  h1 {
    text-align: center;
  }
`
