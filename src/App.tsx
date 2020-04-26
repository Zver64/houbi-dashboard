import React from 'react'
import styled from 'styled-components'
function App({ className }: { className?: string }) {
  return (
    <div className='App'>
      <header className={className}>This is the header of the future</header>
    </div>
  )
}

export default styled(App)`
  background-color: var(--rgb-color3);
`
