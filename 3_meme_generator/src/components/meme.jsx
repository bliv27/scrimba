
import {useState, useEffect} from 'react';

export default function Meme() {

  const [meme, setMeme] = useState({
    topText:"One does not simply",
    bottomText:"Walk into mordor",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getRandomMeme() {
    const randNum = Math.floor(Math.random() * allMemes.length)
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: allMemes[randNum].url
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