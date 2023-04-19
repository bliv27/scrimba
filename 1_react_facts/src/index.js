import React from "react"
import ReactDOM from "react-dom/client"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
  <div>
    <h1>test</h1>
    <ul>
      <li>test1</li>
      <li>test2</li>
    </ul>
    <p>paragraph here</p>
  </div>
)

// document.getElementById("root").append(JSON.stringify(page))

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  page
)

