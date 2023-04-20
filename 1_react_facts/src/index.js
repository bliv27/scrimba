/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

import ReactDOM from 'react-dom/client'

function Header(){
  return(
    <nav>
      <img src='./react-logo.png' width="40px" />
    </nav>
  )
}

function Footer(){
  return(
    <p>© 2023 Raffin development. All rights reserved.</p>
  )
}

function Page(){
  return (
    <div>
      <Header />
      <h1>Reasons why I want to learn React</h1>
      <ol>
        <li>one </li>
        <li>two</li>
        <li>three</li>
      </ol>
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)