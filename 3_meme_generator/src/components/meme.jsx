import memesData from "../memesData"
import {useState} from 'react';

export default function Meme() {

  const [meme, setMeme] = useState({
    topText:"One does not simply",
    bottomText:"Walk into mordor",
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

  function handleChange(event){
    const {value, name} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return(
    <main className="meme">
      <div className="form">
          <input 
            type="text"
            placeholder="Top text"
            className="form__input"
            value={meme.topText}
            name="topText"
            onChange={handleChange}
          />
          <input 
            type="text"
            placeholder="Bottom text"
            className="form__input"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        <button 
          className="form__button"
          onClick={getRandomMeme}
        >
          Generate a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme__image" src={meme.randomImage} />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}