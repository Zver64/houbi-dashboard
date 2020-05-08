import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from './api/binance/index'
import MyChart from './components/MyChart'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { API_CALLS } from './api/binance/endpoints'
function App({ className }: { className?: string }) {
  const [dataSet, setData] = useState([])
  useEffect(() => {
    if(dataSet.length === 0) {
      makeRequest()
    }
  })
  function makeRequest() {
    return request(API_CALLS.CANDLES, 'GET', {
      symbol: 'ETHBTC',
      interval: '1h',
      limit: 15
    })
      .then((val: any) => {
        if (val.status !== 200) {
          return val.statusText
        }
        return val.json()
      })
      .then((val) => {
        const _data = val.map((arr: Array<string | number>) => {
          const date = new Date(arr[0])
          return {
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            high: arr[2],
          }
        })
        setData(_data)
      })
  }
  
  return (
    <Router>
      <div className={className}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/link1'>link1</Link>
              </li>
              <li>
                <Link to='/link2'>link2</Link>
              </li>
              <li>
                <Link to='/link3'>link3</Link>
              </li>
              <li>
                <Link to='/link4'>link4</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>The main chart</h1>
          <div className='data'>
            <MyChart dataSet={dataSet} />
          </div>
          <Switch>
            <Route path='/link1'>
              <div>This is link 1</div>
            </Route>
            <Route path='/link2'>
              <div>This is link 2</div>
            </Route>
            <Route path='/link3'>
              <div>This is link 3</div>
            </Route>
            <Route path='/link4'>
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
