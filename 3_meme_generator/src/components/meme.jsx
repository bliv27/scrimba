import memesData from "../memesData"
import {useState} from 'react';

export default function Meme() {

  const [Url, setUrl] = useState("")

  function getRandomMeme() {
    const memesArray = memesData.data.memes
    const randNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randNum].url
    setUrl(url)
  }
  
  return(
    <main className="meme">
      <div className="form">
          <input 
            type="text"
            placeholder="Top text"
            className="form__input"
          />
          <input 
            type="text"
            placeholder="Bottom text"
            className="form__input"
          />
        <button 
          className="form__button"
          onClick={getRandomMeme}
        >
          Generate a new meme image 🖼
        </button>
      </div>
      <img className="meme__image" src={Url} />
    </main>
  )
}