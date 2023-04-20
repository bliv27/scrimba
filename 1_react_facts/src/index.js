/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import ReactDOM from 'react-dom/client'

function Page(){
  return (
    <div>
      <ul>
        <li>one </li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)