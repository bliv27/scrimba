import memesData from "../memesData"
import {useState} from 'react';

export default function Meme() {

  const [meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setMemeImages] = useState(memesData)

  function getRandomMeme() {
    const memesArray = allMemeImages.data.memes
    const randNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randNum].url
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage:url
      }
    })
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
      <img className="meme__image" src={meme.randomImage} />
    </main>
  )
}